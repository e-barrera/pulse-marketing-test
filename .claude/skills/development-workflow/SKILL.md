# Development Workflow

Comprehensive workflow for implementing tasks with proper code organization, testing, and quality checks.

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

3. **Run lint and fix errors** - Execute lint commands and fix any errors before proceeding.

4. **Add unit tests** - Write unit tests for new code. If modifying existing code, fix any broken tests.

5. **Branch and push** - Don't create any new branches nor push the changes unless explicitly specified in the prompt.
