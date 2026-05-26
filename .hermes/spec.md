# Task Spec

## Title
Bootstrap and validate Hermes project-state workflow for test repository

## Goal
Initialize this test repository with the standard Hermes project-state files and validate the workflow through a sequence of small, controlled tasks.

## Background
Context for the task:
- this is a public sandbox repository created to test the Hermes workflow
- the repository started minimal and now contains a README plus .hermes/ workflow files
- Hermes already uses OmniRoute for model routing, Codex CLI for implementation-heavy work, and Gemini CLI as an optional reviewer
- the current phase is validating the workflow through incremental low-risk tasks

## Scope
What is included in this task:
- maintain the .hermes/ directory structure
- run a sequence of small test tasks through the workflow
- document progress and decisions as tasks are completed
- keep the repository safe for public use

## Out of Scope
What is explicitly not included:
- implementing sensitive or production functionality
- adding secrets, tokens, or sensitive configuration
- setting up CI/CD or deployment unless explicitly requested later

## Constraints
- this repository is public, so do not store secrets or sensitive data
- avoid unrelated changes
- prefer minimal targeted edits
- keep the workflow lightweight and easy to inspect

## Acceptance Criteria
The task is complete when:
- .hermes/ remains the durable source of workflow state
- multiple real tasks are executed through Hermes -> handoff -> Codex -> verification
- progress and decisions are updated after each meaningful step
- repository content remains public-safe and easy to understand

## Risks / Open Questions
- future public test activity must avoid any sensitive project content
- a real project repository should still be private by default
- if git identity matters later, local git config should be set explicitly

## Current Status
in progress

## Last Updated
2026-05-26 20:23
