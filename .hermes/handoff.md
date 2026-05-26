# Handoff

## Task
Define and execute the first real test task using the Hermes -> handoff -> Codex workflow.

## Goal
Use this repository as a sandbox to validate that Hermes can maintain project state, prepare a scoped handoff, and track implementation progress cleanly.

## Project Context
Short context:
- this is a public sandbox repository for testing Hermes workflow patterns
- the durable project state lives under .hermes/
- Codex should be used for bounded implementation tasks once a concrete coding task is chosen

## Relevant Files
- README.md
- .hermes/spec.md
- .hermes/handoff.md
- .hermes/progress.md
- .hermes/decisions.md

## Current State
What already exists now:
- repository cloned locally
- baseline .hermes/ workflow files initialized
- no product code or feature scaffolding exists yet
- no implementation task has been handed off yet

## Constraints
- do not add secrets, credentials, or private business data
- do not modify unrelated files
- preserve a lightweight sandbox setup
- prefer minimal targeted changes
- keep the first test task simple and easy to verify

## Expected Changes
- choose one small implementation task for the sandbox
- prepare a focused handoff for Codex if coding work is needed
- verify the result and update progress

## Acceptance Criteria
- the next task is clearly scoped
- required files to edit are identified
- verification steps are explicit

## Verification
After changes, verify with:
- git diff review
- file inspection
- any lightweight tests relevant to the chosen task

## Output Format
Worker should return:
- short summary of changes
- list of modified files
- what was verified
- remaining risks or open questions
