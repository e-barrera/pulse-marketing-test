# Planning Workflow

Systematic planning workflow for analyzing tasks and organizing code changes by folder structure. Checks for duplicate code before implementation.

## Instructions

1. **Analyze the task** - Check the current code and split the possible changes according to the matching folder (or file), for example:
   - `types` -> `src/types`
   - `components` -> `src/components`
   - `pages` -> `src/pages`
   - `hooks` -> `src/hooks`
   - `services` -> `src/services`
   - `utils` -> `src/utils`
   - `api` -> `src/api` or relevant service folder

2. **Check for duplicates** - Verify that you are not duplicating existing code before implementing any changes. Look for:
   - Similar function names or utilities
   - Existing types or interfaces that might overlap
   - Components that could be reused instead of created new
   - Hooks with overlapping functionality
