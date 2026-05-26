# Decisions

## 2026-05-26
### Decision
Use this repository as a public sandbox for testing the Hermes project-state workflow.

### Context
A lightweight repository was needed to validate the new .hermes/ workflow without mixing it into a real project or the daily backup repository.

### Why
A public sandbox is acceptable because it contains no secrets, production code, private customer data, or sensitive automation details. It allows quick iteration and easy access from the current environment.

### Alternatives Considered
- create a private repository immediately
- test inside the daily backup repository
- postpone testing until a real project repository exists

### Consequences
What this leads to:
- faster end-to-end testing of the workflow
- easy cloning and sharing
- strict rule that no sensitive content should ever be added here

## 2026-05-26
### Decision
Keep Hermes as orchestrator, Codex CLI as the default implementation worker, and Gemini CLI as optional reviewer/second opinion.

### Context
The environment already has OmniRoute, Codex CLI, and Gemini CLI available. The main gap was durable task state and handoff structure, not model/provider routing.

### Why
This division keeps ownership clear:
- Hermes handles planning, handoff, verification, and state tracking
- Codex handles implementation-heavy coding tasks
- Gemini can review or challenge non-obvious changes when needed

### Alternatives Considered
- implement a new router layer first
- use Gemini as a co-equal default coding worker from day one
- keep everything in a single chat without durable files

### Consequences
What this leads to:
- simpler operational workflow
- lower coordination overhead
- easier debugging when a task goes wrong
