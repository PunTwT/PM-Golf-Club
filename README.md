# Git Workflow Tutorial

## First Time Setup
```bash
git clone <repo-url>
cd PM-Golf-Club
```

---

## Starting Work Each Day

### 1. Go to project root
```bash
cd C:\Users\ppupunn\PM-Golf-Club
```

### 2. Switch to dev and pull latest changes
```bash
git checkout dev
git pull origin dev
```

### 3. Create a new branch for your work
```bash
git checkout -b feature/your-feature-name
```

#### Branch naming conventions
```
feature/navbar        → new feature
fix/card-height       → bug fix
refactor/products     → restructuring
style/footer          → CSS only changes
```

### 4. Go into frontend and start the dev server
```bash
cd frontend
npm run dev
```

---

## During Work

### Check which branch you are on
```bash
git branch
```

### Check what files you changed
```bash
git status
```

---

## Pushing Your Work

### 1. Go to project root
```bash
cd C:\Users\ppupunn\PM-Golf-Club
```

### 2. Check your current branch
```bash
git branch
```
Make sure you are on your feature branch, NOT on `dev` or `main` before pushing.
```
* feature/your-feature-name   ← should see this
  dev
  main
```

### 3. Check what files you changed
```bash
git status
```
Make sure only your intended files are changed.

### 4. Stage your changes
```bash
git add .
```

### 5. Commit with a message
```bash
git commit -m "feat: describe what you did"
```

#### Commit message prefixes
```
feat:      added a new feature
fix:       fixed a bug
refactor:  restructured code without changing behavior
style:     CSS or formatting changes
chore:     config, dependencies, cleanup
docs:      documentation changes
```

### 6. Push your branch to GitHub
```bash
git push origin feature/your-feature-name
```

---

## Creating a Pull Request on GitHub

1. Go to the GitHub repository website
2. GitHub will show a banner **"Compare & pull request"** → click it
   - If no banner, go to **Pull requests** tab → **New pull request**
3. Set the branches:
```
base:    dev
compare: feature/your-feature-name
```
4. Add a title and description of what you changed
5. Click **"Create pull request"**
6. Wait for teammates to review → then merge into dev

---

## Full Daily Workflow Summary
```bash
# Start of day
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
cd frontend
npm run dev

# End of day
cd C:\Users\ppupunn\PM-Golf-Club
git add .
git commit -m "feat: what you did today"
git push origin feature/your-feature-name
# then create Pull Request on GitHub
```
