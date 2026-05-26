# Task Spec

## Title
Bootstrap Hermes project-state workflow for test repository

## Goal
Initialize this test repository with the standard Hermes project-state files so future tasks can be planned, handed off to Codex, and tracked consistently.

## Background
Context for the task:
- this is a public sandbox repository created to test the Hermes workflow
- the repository is currently minimal and contains only a README
- Hermes already uses OmniRoute for model routing, Codex CLI for implementation-heavy work, and Gemini CLI as an optional reviewer

## Scope
What is included in this task:
- create the .hermes/ directory structure
- add baseline workflow files: spec, handoff, progress, decisions
- add plans/ directory for future step-specific plans
- record the initial workflow decision for this repository

## Out of Scope
What is explicitly not included:
- implementing product features
- adding secrets, tokens, or sensitive configuration
- setting up CI/CD or deployment

## Constraints
- this repository is public, so do not store secrets or sensitive data
- avoid unrelated changes
- prefer minimal targeted edits
- keep the workflow lightweight and easy to inspect

## Acceptance Criteria
The task is complete when:
- .hermes/spec.md exists and describes the current test workflow goal
- .hermes/handoff.md exists with a starter handoff for the next task
- .hermes/progress.md exists and records the bootstrap step
- .hermes/decisions.md exists and records the visibility/workflow decision
- .hermes/plans/ exists

## Risks / Open Questions
- future public test activity must avoid any sensitive project content
- a real project repository should still be private by default

## Current Status
bootstrapped

## Last Updated
2026-05-26 20:04
