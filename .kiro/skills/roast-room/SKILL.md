---
name: roast-room
description: Run a Roast Room council in Kiro CLI. Use when a founder wants a hard business decision debated by a council of simulated advisors (Bezos, Paul Graham, Hormozi, Gary Vaynerchuk, Dan Martell, Gino Wickman, Buffett, Naval, Codie Sanchez, Leila Hormozi, Sara Blakely, Elon Musk, plus any added seat). Trigger on "roast room", "/roast-room", "convene the council", "take this to the board", "what would Hormozi say", "ask the Buffett seat", "should I ..." on pricing, hiring, raising, a product, a pivot, or spending, and "roast room board" to change the default board. Exclude adding a new advisor (that is the newroaster skill).
---

# Roast Room for Kiro CLI

You are the **Chair**. The protocol is the Claude Code skill, unchanged. Read it first and follow it exactly, with the Kiro substitutions below:

- Protocol: `.claude/skills/roast-room/SKILL.md`
- References it points at: `.claude/skills/roast-room/references/` (`seats.md`, `round-prompts.md`, `scoring.md`, `report-template.md`, `live-room.md`)
- Roster: `.claude/skills/roast-room/roster.json`
- Example council: `sessions/2026-10-09-example-take-the-seed/`
- Project rules: `CLAUDE.md`

All paths are relative to the repo root (the folder holding this `.kiro/`). Session folders go in `sessions/` at the repo root, so the room at http://localhost:4730 plays them live.

## Arguments

The user types these as plain text (Kiro has no custom slash commands): `roast room <decision>`, with optional `--quick`, `--all`, `--seats a,b,c`, or `roast room ask <seat> <question>`, or `roast room board`. Treat `/roast-room ...` the same way.

## Kiro substitutions

| Claude Code protocol says | Do this in Kiro |
|---|---|
| Spawn every seat in one message, `subagent_type: council-<key>` | One `subagent` call, `mode: blocking`, one stage per seat, no `depends_on` (so they run in parallel). Stage `name`: the seat key. `role`: `council-<key>`. `prompt_template`: the filled round prompt from `round-prompts.md`. |
| `council-*` type not registered, use `general-purpose` with fallback lines | If `council-<key>` is not in the subagent role list (a seat added after this session started), use `role: kiro_default` and put the fallback line first: `Read .claude/agents/council-<key>.md and follow it as your instructions for this whole task. Only read files, except the one card file this prompt tells you to write.` |
| AskUserQuestion (board pick, missing brief facts) | Ask in chat as one short numbered list, recommended option first, and stop your turn to wait for the reply. Batch the board question with any missing-fact questions so the user answers once. |
| Agent results | Kiro's subagent tool returns a condensed summary, not the verbatim card, so never build round files from it. Add one line to every round prompt, right after the repo root line: `Write your full card verbatim to <session>/cards/round-<N>/<key>.md before you answer.` After the stages finish, read those files and assemble `round-<N>.md` from them, each under `## <Short>` (the roster's `short` name), cards copied exactly. If a card file is missing or lacks fields, re-run that one seat once. |
| Single-seat consult (`ask <seat>`) | Same as above with no session folder: have the seat write to `sessions/_consult/<key>.md`, then show the user that file's content verbatim. Leave the file (git ignores `sessions/`); the next consult with that seat overwrites it. |
| `python .claude/skills/roast-room/scripts/check_quotes.py <session>` | Run it with the `shell` tool (`python3` if `python` is missing). |
| Edit `roster.json` (board settings) | Use the `write` tool, only the `"board"` and `"default"` fields. |

Everything else (the brief, weights, three rounds, cruxes, draft resolution, scoring and overrides, the JSON files for the live room, `verdict.md`, the short chat verdict) is exactly as the protocol says.

## Cost

Each seat in each round is one subagent run: a full council of seven is 21 runs. Say which mode you used. Suggest `--quick` for reversible calls.

## Before the first council

- The room is optional. If the user wants to watch, `npm start` in the background and point them at http://localhost:4730.
- If the subagent tool is missing, run the "Without sub-agents" section of the protocol yourself, one seat at a time.
