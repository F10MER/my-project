# Task Spec

## Title
Validate and extend the Hermes project-state workflow in the public sandbox repository

## Goal
Keep this repository as a small public-safe sandbox for testing durable `.hermes/` state, Codex execution flows, and incremental workflow automation.

## Background
Context for the task:
- this repository is a public sandbox for testing the Hermes workflow
- the repository now contains baseline `.hermes/` files, a small todo demo, local worktree support, a smoke-tested codex task runner, and an MVP deterministic review gate script
- Hermes uses OmniRoute for routing and Codex CLI as the main implementation worker
- Gemini CLI may be added later as an optional reviewer after authentication is available

## Scope
What is included in this task:
- maintain the `.hermes/` project-state files as the durable workflow record
- validate workflow steps through small, public-safe tasks
- improve reusable automation around handoff, worktrees, and verification
- document meaningful progress and durable workflow decisions

## Out of Scope
What is explicitly not included:
- adding secrets, tokens, or private infrastructure details
- implementing production or sensitive functionality
- adding deployment, CI/CD, or external integrations unless explicitly requested later

## Constraints
- this repository is public, so all changes must remain public-safe
- prefer small, inspectable, low-risk tasks
- avoid unrelated changes
- keep the workflow lightweight and easy to reason about

## Acceptance Criteria
The task is complete when:
- `.hermes/` remains the durable source of workflow state
- workflow automation can be validated through real bounded tasks
- Codex execution stays scoped and independently verifiable
- repository content remains easy to inspect and safe for public viewing

## Risks / Open Questions
- future public test activity must avoid any sensitive project content
- real project repositories should still be private by default
- Gemini reviewer integration is still pending

## Current Status
in progress

## Last Updated
2026-05-26 21:25
