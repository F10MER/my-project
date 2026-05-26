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

## Helper Workflow

For a scoped task, the thin helper flow is:

1. Use `task_start.py` to start from a prepared `.hermes/` task handoff.
2. Use `task_run.py` to run Codex on that active task in its isolated worktree.
3. Use `task_close.py` to record the task outcome after review.

The default first-pass review is the deterministic review gate, which checks
that the completed work remains within its allowed scope.

## Next Steps

Upcoming sandbox tasks may exercise small documentation or workflow updates,
review steps, and verification of the handoff process while keeping changes
easy to inspect and safe for public viewing.
