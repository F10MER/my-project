# Handoff

## Task
Add a simple public-safe `index.html` landing page for this sandbox repository.

## Goal
Create a minimal static HTML page that mirrors the repository purpose and briefly explains the Hermes workflow sandbox in a browser-friendly way.

## Project Context
Short context:
- this is a public sandbox repository for testing the Hermes project-state workflow
- the README already explains the workflow in markdown form
- this is the second small workflow task after the README documentation pass
- the page should stay intentionally simple and require no build tooling

## Relevant Files
- index.html
- README.md
- .hermes/spec.md
- .hermes/handoff.md
- .hermes/progress.md

## Current State
What already exists now:
- README.md contains a structured sandbox overview
- no HTML page exists yet
- the repository is still intentionally minimal
- this task should focus on adding one simple static page

## Constraints
- do not add secrets, credentials, tokens, or private infrastructure details
- prefer a single self-contained `index.html`
- do not introduce build tools, frameworks, or unnecessary assets
- keep the page lightweight, readable, and public-safe
- avoid modifying unrelated files unless clearly necessary

## Expected Changes
- create `index.html`
- include a title and short description of the sandbox
- briefly describe the roles of Hermes, Codex CLI, and Gemini CLI
- mention that `.hermes/` stores durable workflow state
- add a short note about upcoming sandbox tasks

## Acceptance Criteria
- `index.html` exists
- the page renders as a simple readable landing page
- content matches the public-safe sandbox purpose
- no extra tooling or unrelated files are introduced

## Verification
After changes, verify with:
- inspect `index.html`
- review git diff for the new file

## Output Format
Worker should return:
- short summary of changes
- list of modified files
- what was verified
- remaining risks or open questions
