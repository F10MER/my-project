# Handoff

## Task
Turn the current static sandbox page into a tiny public-safe todo app using plain HTML, CSS, and JavaScript.

## Goal
Create a minimal interactive demo that lets a user add, complete, and delete todo items while keeping the repository lightweight and easy to inspect.

## Project Context
Short context:
- this is a public sandbox repository for testing the Hermes project-state workflow
- the repository already has a README and a simple landing page
- this is the third workflow validation task and the first multi-file interactive implementation
- the app should stay intentionally small and require no build tooling

## Relevant Files
- index.html
- style.css
- script.js
- README.md
- .hermes/spec.md
- .hermes/handoff.md
- .hermes/progress.md

## Current State
What already exists now:
- `index.html` is a single self-contained static landing page with inline styles
- there is no JavaScript yet
- there is no standalone stylesheet yet
- this task should replace the pure landing page with a tiny interactive todo demo

## Constraints
- do not add secrets, credentials, tokens, or private infrastructure details
- use plain HTML, CSS, and JavaScript only
- do not introduce frameworks, package managers, or build tooling
- keep the UI simple, readable, and public-safe
- prefer small, well-scoped files
- avoid modifying unrelated files unless clearly necessary

## Expected Changes
- update `index.html` to contain the todo app structure
- extract styling into `style.css`
- add `script.js` for interactivity
- support adding a todo item
- support marking a todo item completed
- support deleting a todo item
- keep a short explanatory note that this is a Hermes workflow sandbox demo

## Acceptance Criteria
- `index.html`, `style.css`, and `script.js` exist
- the page works as a tiny todo app in the browser
- a user can add, complete, and delete tasks
- the implementation remains lightweight and dependency-free
- content stays public-safe and easy to understand

## Verification
After changes, verify with:
- inspect `index.html`, `style.css`, and `script.js`
- review git diff for changed files
- if possible, perform a lightweight browser check

## Output Format
Worker should return:
- short summary of changes
- list of modified files
- what was verified
- remaining risks or open questions
