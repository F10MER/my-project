# Hermes Workflow Sandbox

This repository is a small public sandbox for testing a lightweight
project-state workflow. It is intentionally simple: the focus is on handing
off controlled tasks, recording durable context, and verifying the resulting
changes rather than building an application.

## Project State

The `.hermes/` directory is the durable source of workflow state for this
repository. It contains the task specification, implementation handoff, and
supporting progress and decision records used across workflow steps.

## Workflow Roles

- **Hermes** maintains project context and prepares scoped task handoffs.
- **Codex CLI** performs targeted implementation or documentation work and
  reports verification results.
- **Gemini CLI** may be used as an optional reviewer for completed changes.

This sandbox keeps those roles visible without including credentials, private
infrastructure details, or production behavior.

## Next Steps

Upcoming sandbox tasks may exercise small documentation or workflow updates,
review steps, and verification of the handoff process while keeping changes
easy to inspect and safe for public viewing.
