# Handoff

## Task
Improve README.md so this sandbox repository clearly explains what it is and how the Hermes workflow is being tested here.

## Goal
Replace the minimal README with a useful project overview that documents the purpose of the repo and the roles of Hermes, Codex CLI, and Gemini CLI in the workflow.

## Project Context
Short context:
- this is a public sandbox repository for testing the Hermes project-state workflow
- durable task state lives in .hermes/
- this is the first real implementation-style task after bootstrap
- the repository should stay simple, explicit, and safe for public viewing

## Relevant Files
- README.md
- .hermes/spec.md
- .hermes/handoff.md
- .hermes/progress.md
- .hermes/decisions.md

## Current State
What already exists now:
- README.md only contains the title and a one-word description
- .hermes/ workflow files have been initialized and committed
- no app code exists yet
- this task should focus only on documentation quality

## Constraints
- do not add secrets, credentials, tokens, or private infrastructure details
- only modify README.md unless a very strong reason appears
- preserve a lightweight sandbox setup
- prefer clear, concise markdown
- do not invent setup steps that were not actually validated

## Expected Changes
- add a short repository description
- explain that this is a sandbox for Hermes workflow testing
- describe the role of .hermes/
- describe the roles of Hermes, Codex CLI, and Gemini CLI at a high level
- add a brief "next steps" section mentioning upcoming sandbox tasks

## Acceptance Criteria
- README.md clearly explains the purpose of the repository
- README.md mentions the .hermes/ project-state folder
- README.md explains the workflow roles without exposing sensitive details
- README.md is readable and structured with headings/bullets

## Verification
After changes, verify with:
- inspect README.md content
- review git diff for README.md

## Output Format
Worker should return:
- short summary of changes
- list of modified files
- what was verified
- remaining risks or open questions
