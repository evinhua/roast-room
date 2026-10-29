#!/usr/bin/env node
// Generate Kiro CLI agent configs (.kiro/agents/council-<key>.json) from the Claude Code
// seat agents (.claude/agents/council-<key>.md), one per seat in roster.json.
//
//   node .kiro/scripts/sync_agents.mjs
//
// The .claude/ files stay the single source of truth; run this again after /newroaster adds
// or edits a seat. Seats read their brain and may write only under sessions/ (their own
// card file), because Kiro's subagent tool hands the Chair a condensed summary, not the
// verbatim card the room needs.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const ROSTER = path.join(ROOT, ".claude", "skills", "roast-room", "roster.json");
const SRC = path.join(ROOT, ".claude", "agents");
const OUT = path.join(ROOT, ".kiro", "agents");
const TOOLS = ["read", "grep", "glob", "write"];
const SESSIONS = path.join(ROOT, "sessions");

/**
 * Split a markdown file into its YAML frontmatter fields and body.
 * Only flat `key: value` lines are needed here, so no YAML library is used.
 * @param {string} text
 * @returns {{ meta: Record<string, string>, body: string }}
 */
function parseAgent(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error("no frontmatter");
  const meta = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: m[2].trim() };
}

const KIRO_NOTE = (root) => `## Runtime note (Kiro CLI)

Repo root: ${root}. Paths in these instructions are relative to it. Use read, grep, and glob for your brain. You may write exactly one file: the card path the Chair's prompt names (always under sessions/). Write your full card there verbatim, in the exact shape the round prompt asks for, then return the same card as your final answer. Never write anywhere else, and never edit another seat's card or the Chair's files.`;

const roster = JSON.parse(fs.readFileSync(ROSTER, "utf8"));
fs.mkdirSync(OUT, { recursive: true });

let written = 0;
const skipped = [];
for (const seat of roster.seats) {
  const src = path.join(SRC, `council-${seat.key}.md`);
  if (!fs.existsSync(src)) { skipped.push(seat.key); continue; }
  const { meta, body } = parseAgent(fs.readFileSync(src, "utf8"));
  const agent = {
    name: `council-${seat.key}`,
    description: meta.description || `${seat.pillar} seat on the Roast Room council (${seat.name}).`,
    prompt: `${body}\n\n${KIRO_NOTE(ROOT)}`,
    tools: TOOLS,
    allowedTools: ["read", "grep", "glob"],
    toolsSettings: {
      write: { allowedPaths: [`${SESSIONS}/**`, "sessions/**"], deniedPaths: [`${ROOT}/.claude/**`, `${ROOT}/.kiro/**`, `${ROOT}/app/**`] },
    },
    resources: [],
  };
  fs.writeFileSync(path.join(OUT, `council-${seat.key}.json`), JSON.stringify(agent, null, 2) + "\n");
  written++;
}

console.log(`Wrote ${written} Kiro seat agents to ${path.relative(ROOT, OUT)}/`);
if (skipped.length) console.log(`Skipped (no .claude agent file): ${skipped.join(", ")}`);

// The Chair: an autopilot agent that runs a whole council with no approval prompts and
// no questions. Writes are auto-approved only under sessions/ and for roster.json; shell
// is auto-approved only for the quote checker, the agent sync, and read-only commands.
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
const R = `(${esc(ROOT)}/)?`;
const CHAIR_PROMPT = `You are the Chair of the Roast Room, running in AUTOPILOT mode in Kiro CLI.

Repo root: ${ROOT}. Load and follow the roast-room skill (.kiro/skills/roast-room/SKILL.md), which points at the protocol in .claude/skills/roast-room/SKILL.md. To add an advisor, follow the newroaster skill instead.

Autopilot rules, which override any step in the protocol that would wait for the user:
1. Never stop to ask the user anything and never end your turn mid-council. Run every step from the brief to verdict.json in one go.
2. Board: if the user gave --seats or --all, use that. Otherwise recommend a board per the protocol and seat it without asking, saying who and why in one line (the "auto" board setting).
3. Missing brief facts: fill each gap with a reasonable assumption marked "(assumed)" in brief.md and council.json, and list them in the final chat verdict so the user can rerun with real numbers.
4. Spawn seats with the subagent tool, role council-<key> (kiro_default with the fallback line if a role is missing). Every seat writes its card to sessions/<session>/cards/round-<N>/<key>.md; build round files from those files, never from the subagent summary.
5. Write files only under sessions/ (and roster.json for "roast room board"). Read with the read, grep, and glob tools, never with shell. Run shell only for the quote checker (python3 .claude/skills/roast-room/scripts/check_quotes.py <session>) and mkdir -p under sessions/, one plain command per call: no cd, no &&, no pipes, no semicolons. Do the score math yourself from the cards.
6. If a seat fails twice, drop it, note it in the Chair notes, and continue.
7. Keep the room's file order from .claude/skills/roast-room/references/live-room.md so http://localhost:4730 plays the council live.`;

const chair = {
  name: "roast-room",
  description: "Roast Room Chair on autopilot: runs a full council (brief, three rounds, scoring, verdict) with no questions and no approval prompts. Start with: kiro-cli chat --agent roast-room",
  prompt: CHAIR_PROMPT,
  tools: ["read", "write", "shell", "grep", "glob", "subagent"],
  allowedTools: ["read", "grep", "glob", "subagent"],
  toolsSettings: {
    write: {
      allowedPaths: [`${SESSIONS}/**`, "sessions/**", ROSTER, ".claude/skills/roast-room/roster.json"],
      deniedPaths: [`${ROOT}/.claude/agents/**`, `${ROOT}/.claude/skills/roast-room/brains/**`, `${ROOT}/app/**`, `${ROOT}/.kiro/**`],
    },
    shell: {
      allowedCommands: [
        `^python3? ${R}\\.claude/skills/roast-room/scripts/check_quotes\\.py ${R}sessions/[A-Za-z0-9._-]+/?$`,
        `^node ${R}\\.kiro/scripts/sync_agents\\.mjs$`,
        `^mkdir -p ${R}sessions/[A-Za-z0-9._/{},-]+$`,
      ],
      deniedCommands: ["rm -rf .*", "sudo .*", "git push.*", "git reset.*"],
      autoAllowReadonly: true,
    },
  },
  resources: ["skill://.kiro/skills/**/SKILL.md", "file://CLAUDE.md"],
  welcomeMessage: "Roast Room autopilot. Type: roast room <decision> [--quick | --seats a,b,c | --all]",
};
fs.writeFileSync(path.join(OUT, "roast-room.json"), JSON.stringify(chair, null, 2) + "\n");
console.log("Wrote the autopilot Chair agent to .kiro/agents/roast-room.json");
