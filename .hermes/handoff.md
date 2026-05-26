# Handoff

## Task
No active implementation task is currently assigned.

## Goal
Keep the repository ready for the next bounded Hermes -> handoff -> Codex workflow step without leaving stale worker instructions in place.

## Project Context
Short context:
- this repository uses Hermes project-state files as the durable workflow record
- Codex tasks should start only after Hermes writes a fresh scoped handoff here
- the deterministic review gate remains the default first-pass verifier for isolated worktree tasks

## Relevant Files
- README.md
- index.html
- style.css
- script.js
- .hermes/spec.md
- .hermes/handoff.md
- .hermes/progress.md
- .hermes/decisions.md

## Current State
What already exists now:
- the previous active task has been closed
- the repository should be ready for the next bounded task after manual review of the current state
- no stale worker instruction should remain in this file

## Constraints
- do not treat this file as an active coding instruction until Hermes writes a new scoped task here
- keep future tasks bounded, public-safe, and easy to verify
- avoid unrelated changes

## Expected Next Step
When the next task is chosen, Hermes should replace this placeholder with:
- one concrete task
- explicit scope
- acceptance criteria
- verification steps
- output format for the worker

## Verification
Before the next worker run, verify that:
- `.hermes/spec.md` and `.hermes/handoff.md` match the intended task
- the task scope is bounded
- verification criteria are explicit

## Output Format
For the next real worker task, require:
- short summary of changes
- list of modified files
- what was verified
- remaining risks or open questions
