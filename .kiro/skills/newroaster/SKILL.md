---
name: newroaster
description: Add a new advisor seat to the Roast Room in Kiro CLI. Trigger on "/newroaster", "newroaster", "add a roaster", "add a seat", "add [name] to the council", "build a seat for [name]", "I want [name] on my board", and "newroaster portrait <name>" to redo a portrait. Builds the brain from the person's public work, the seat agent, the portrait, and the roster entry. Exclude running a council (that is the roast-room skill).
---

# New roaster for Kiro CLI

The protocol is the Claude Code skill, unchanged. Read it first and follow it exactly, with the Kiro substitutions below:

- Protocol: `.claude/skills/newroaster/SKILL.md`
- References: `.claude/skills/newroaster/references/` (`brain-spec.md`, `extract-prompt.md`, `writer-prompt.md`, `agent-template.md`)
- Scripts: `.claude/skills/newroaster/scripts/` (run with the `shell` tool from the repo root)

All paths are relative to the repo root (the folder holding this `.kiro/`). Arguments arrive as plain text: `newroaster <Full Name> [--quick | --deep] [--pillar "..."] [--default]` or `newroaster portrait <name>`.

## Kiro substitutions

| Claude Code protocol says | Do this in Kiro |
|---|---|
| AskUserQuestion | Ask in chat as one short numbered list, best guess first, and stop your turn to wait for the reply. |
| WebSearch to find sources (step 2) | Use a web search tool if this session has one. If not, tell the user, propose the source list you can build from what you know (their site, channel, known talks), and ask them to confirm or paste URLs. `fetch.mjs` does the fetching either way. |
| Extraction agents in one message, `general-purpose`, `model: sonnet` (step 4) | One `subagent` call, `mode: blocking`, one stage per batch, no `depends_on`, `role: kiro_default`, at most six stages per call (waves for `--deep`). Each stage writes its own `build/<slug>/notes/batch-NN.md`. |
| Three writer agents in parallel (step 5) | One `subagent` call with three stages (A, B, C), `role: kiro_default`. |
| Open an image with Read (steps 8.2, 8.4, 8.6) | Use the `read` tool in Image mode. |
| Test with `general-purpose` and the fallback line (step 9) | One `subagent` stage, `role: kiro_default`, with the fallback line from `.kiro/skills/roast-room/SKILL.md` followed by the single-seat consult prompt. |

## Extra step: sync the Kiro seat agent

Right after step 7 (`add_seat.mjs`), and after any edit to a `.claude/agents/council-*.md` file, run:

```bash
node .kiro/scripts/sync_agents.mjs
kiro-cli agent validate --path .kiro/agents/council-<key>.json
```

This writes `.kiro/agents/council-<key>.json` from the `.claude` agent file. In step 10, tell the user to start a new Kiro session so `council-<key>` shows up as a subagent role; until then the council uses the `kiro_default` fallback automatically.
