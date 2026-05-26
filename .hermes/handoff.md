# Handoff

## Task
No active implementation task is currently assigned.

## Goal
Keep the repository ready for the next bounded Hermes -> handoff -> Codex workflow step without leaving stale worker instructions in place.

## Project Context
Short context:
- this is a public sandbox repository for testing the Hermes project-state workflow
- the repository already includes a README, `.hermes/` state, a small todo app, local worktree support, a smoke-tested codex task runner, and a smoke-tested deterministic review gate
- the last completed task validated the review gate on a minimal README-only change inside an isolated worktree

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
- `.hermes/spec.md` tracks the current sandbox workflow scope
- `.hermes/progress.md` records the bootstrap, Codex tasks, worktree support, runner smoke test, and review gate smoke test
- no active implementation task is currently queued for Codex

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
