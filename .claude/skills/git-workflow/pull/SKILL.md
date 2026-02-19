# Git Pull Workflow

Workflow for pulling changes from remote branches with proper target/source handling.

## Instructions

1. **Checkout target branch** - If `<target branch>` is specified, checkout that branch. Otherwise, checkout `main` as the target branch.

2. **Pull source branch** - Pull from `origin <source branch>` if provided, otherwise pull from `origin main`.

3. **Handle conflicts** - If there are conflicts, stop the process and let the user manually decide what to do next. If there are no conflicts, just rebase.
