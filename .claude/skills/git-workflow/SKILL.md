# Git Workflow Rules

This skill defines the git workflow for pushing changes in this project.

## Workflow Steps

### 1. Create a Branch
Before making changes, create a new branch from the current branch:

```bash
git checkout -b <branch-name>
```

**Branch naming conventions:**
- `feature/` - for new features (e.g., `feature/user-authentication`)
- `fix/` - for bug fixes (e.g., `fix/login-error`)
- `chore/` - for maintenance tasks (e.g., `chore/update-dependencies`)
- `refactor/` - for code refactoring (e.g., `refactor/chart-components`)
- `docs/` - for documentation changes (e.g., `docs/api-documentation`)

### 2. Make Changes
Implement the required changes, following the code organization rules.

### 3. Stage Changes
Add all relevant files to staging:

```bash
git add <files>
```

Or add all changes:

```bash
git add .
```

### 4. Commit Changes
Create a commit with a descriptive message summarizing the changes:

```bash
git commit -m "<commit-message>"
```

**Commit message format:**
- Use imperative mood (e.g., "Add feature" not "Added feature")
- First line: short summary (50-72 characters)
- Optionally add a body with more details
- List key changes as bullet points

**Example:**
```
Add user authentication module

- Create login form component
- Add authentication hook
- Implement session management
- Add protected route wrapper
```

### 5. Push Branch
Push the branch to the remote repository:

```bash
git push -u origin <branch-name>
```

For subsequent pushes:

```bash
git push
```

## Complete Example

```bash
# Create and switch to new branch
git checkout -b feature/user-authentication

# Make changes...
# (edit files)

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add user authentication module

- Create login form component
- Add authentication hook
- Implement session management"

# Push to remote
git push -u origin feature/user-authentication
```

## Important Notes

- Always pull latest changes before creating a new branch
- Keep commits atomic and focused
- Write clear, descriptive commit messages
- Push branches regularly to backup work
- Create a pull request after pushing (if applicable)
