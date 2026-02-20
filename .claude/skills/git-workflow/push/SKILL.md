# Git Workflow Rules

This skill defines the git workflow for pushing changes in this project.

## Workflow Steps

### 0. Important: Work on Branches, Not Main
**Never make changes directly on main.** Always create a new branch for your changes.

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


### 2. Stage Changes
Add all relevant files to staging:

```bash
git add <files>
```

Or add all changes:

```bash
git add .
```

### 3. Commit Changes
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

### 4. Push Branch
Push the new branch to the remote repository with upstream tracking:

```bash
git push -u origin <branch-name>
```

For subsequent pushes on the same branch:

```bash
git push
```

### 5. Continuing Work on Existing Branches
If you're continuing work on an existing branch:

```bash
# Switch to your branch
git checkout <branch-name>

# Pull latest changes from the branch
git pull origin <branch-name>

# Make your changes, then commit and push
git add .
git commit -m "Your changes"
git push
```

## Complete Example

```bash
# Create and switch to new branch
git checkout -b feature/user-authentication

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
