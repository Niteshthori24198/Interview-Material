
# Git Cheatsheet

## What is Git?

Git is a distributed version control system that allows developers to track changes in their code, collaborate with teams, and manage source code efficiently.

### Key Features:
- **Version Tracking:** Keep track of changes to your files over time.
- **Branching and Merging:** Work on separate features in parallel and combine changes seamlessly.
- **Collaboration:** Share code with team members using remote repositories like GitHub, GitLab, etc.
- **Undo Changes:** Revert to previous versions or discard unwanted changes.

---

## Basic Commands

### 1. Initialize a Repository

```bash
git init
```

**Usage:** Initializes a new Git repository in your current directory.  

**Why:** To start tracking changes in your project.

### 2. Check Repository Status

```bash
git status
```

**Usage:** Shows the status of files (modified, staged, untracked) in the repository.  

**Why:** To review the current state before committing.

### 3. Add Changes to Staging

```bash
git add <file>
git add .
```

**Usage:** Adds specified files or all files (`.`) to the staging area.  

**Why:** To prepare changes for a commit.

### 4. Commit Changes

```bash
git commit -m "Your commit message"
```

**Usage:** Saves changes from the staging area with a descriptive message. 

**Why:** To create a snapshot of your project's state.

### Note :- We can combine above two steps into one and can do add and commit using one command itself.

```bash
git commit -a -m "your commit message"
```

### 5. Push Changes

```bash
git push origin <branch-name>"
```

**Usage:** Push changes from the local branch to remote branch. 

**Why:** To create a snapshot of your project's state.

---

## Branching, Merging, and Rebasing

### 1. Create a New Branch

```bash
git branch <branch_name>
```

**Usage:** Creates a new branch from the current branch.  

**Why:** To work on a new feature or fix without affecting the main branch.

---

### 2. Switch Branch

```bash
git checkout <branch_name>
```

**Usage:** Switches to the specified branch. 

**Why:** To work on or test code in a different branch.


### Note :- We can combine above two steps into one and can do the same thing using one command itself.

```bash
git checkout -b <branch-name>
```

---

### 3. Merge Branches
```bash
git merge <branch_name>
```

**Usage:** Merges changes from the specified branch into the current branch.  

**Why:**  

- To combine completed features, fixes, or updates into the main branch.  
- Works best with a clear commit history.

**Types of Merge:**

1. **Fast-Forward Merge:** Occurs when there’s a direct path from the current branch to the branch being merged.  

   Example:
   ```bash
   git merge <branch_name>
   ```

2. **Three-Way Merge:** Happens when branches have diverged, and Git creates a new commit to combine changes.

---

### 4. Rebase Branches
```bash
git rebase <branch_name>
```
**Usage:** Reapplies commits from the current branch onto the specified branch.  

**Why:**  
- To create a linear, cleaner commit history by avoiding merge commits.  
- Used for incorporating changes from one branch into another while keeping the history linear.

**Example:**
```bash
# Switch to the feature branch
git checkout feature-branch

# Rebase onto the main branch
git rebase main
```

After rebasing, the commits in `feature-branch` are replayed on top of `main`. If conflicts occur, Git will pause rebasing to allow conflict resolution.

---

### 5. Merge vs. Rebase

| **Aspect**             | **Merge**                        | **Rebase**                     |
|-------------------------|-----------------------------------|---------------------------------|
| **History**             | Creates a merge commit; preserves the branch structure. | Creates a linear history.      |
| **Conflicts**           | Handled during the merge process. | Handled interactively for each commit. |
| **Usage**               | Use for combining work while maintaining commit history. | Use for a cleaner, linear history. |
| **Command**             | `git merge <branch>`            | `git rebase <branch>`          |

---

### 6. Abort a Rebase

```bash
git rebase --abort
```
**Usage:** Cancels an ongoing rebase operation and resets the branch to its original state.  

**Why:** To recover if something goes wrong during the rebase.

---

## Remote Repositories

### 1. Add Remote Repository

```bash
git remote add origin <repository_url>
```

**Usage:** Links a local repository to a remote one.  

**Why:** To push and pull changes with a remote repository.

### 2. Push Changes

```bash
git push origin <branch_name>
```

**Usage:** Sends committed changes to the specified branch on the remote repository.  

**Why:** To share updates with others.

### 3. Pull Changes

```bash
git pull origin <branch_name>
```

**Usage:** Fetches and merges changes from the remote repository.  

**Why:** To sync your local repository with the remote.

### 4. Fetch Changes

```bash
git fetch origin
```

**Usage:** Downloads updates from the remote repository without merging.  

**Why:** To inspect changes before merging.

---

## Stashing and Cleaning

### 1. Stash Changes

```bash
git stash
```

**Usage:** Saves uncommitted changes for later use.  

**Why:** To switch branches without committing changes.

### 2. Apply Stash

```bash
git stash apply stash@{}
```

**Usage:** Applies stashed changes without removing them from the stash list.  

**Why:** To restore saved changes.

### 3. Drop Stash

```bash
git stash drop stash@{}
```

**Usage:** Deletes a specific stash.  

**Why:** To clean up unused stashes.

### 4. Clean Untracked Files

```bash
git clean -f
```

**Usage:** Removes untracked files from the working directory. 

**Why:** To tidy up the project.

---

## Tagging

### 1. Create a Tag

```bash
git tag <tag_name>
```

**Usage:** Marks a specific commit with a tag.  

**Why:** To identify important milestones (e.g., releases).

### 2. Push Tags

```bash
git push origin --tags
```

**Usage:** Sends local tags to the remote repository.  

**Why:** To share tagged commits.

---

## Advanced Commands

### 1. Revert a Commit

```bash
git revert <commit_hash>
```

**Usage:** Creates a new commit that undoes changes from a specific commit.  

**Why:** To safely undo changes in a shared branch.

### 2. Reset to a Previous Commit

```bash
git reset --hard <commit_hash>
```

**Usage:** Resets the working directory to a specified commit. 

**Why:** To discard all changes after a specific point.

### 3. Cherry-Pick a Commit

```bash
git cherry-pick <commit_hash>
```

**Usage:** Applies changes from a specific commit to the current branch.  

**Why:** To selectively bring changes into a branch.

---


## How to Delete a Git Branch (Locally and Remotely)

## Deleting a Branch Locally
To delete a local branch in Git, use the following command:

```bash
git branch -d <branch-name>
```

- **`-d`**: Deletes the branch only if it has been fully merged with the current branch or other branches.
- If the branch has unmerged changes and you want to delete it forcefully, use:

```bash
git branch -D <branch-name>
```

### Example:
```bash
git branch -d feature-branch
```

## Deleting a Branch Remotely
To delete a branch from the remote repository, use the following command:

```bash
git push <remote-name> --delete <branch-name>
```

- `<remote-name>`: Usually `origin`.
- `<branch-name>`: The branch you want to delete.

### Example:
```bash
git push origin --delete feature-branch
```

## Verify Deletion
- **Local Branch**: To ensure the branch is deleted locally, list branches with:
  ```bash
  git branch
  ```
- **Remote Branch**: To ensure the branch is deleted remotely, fetch and list remote branches:
  ```bash
  git fetch --prune
  git branch -r
  ```

<iframe src="./git.pdf" width="100%" height="100vh"></iframe>

This cheatsheet covers Git's essential and advanced commands to help you navigate and manage your repositories effectively. Happy coding 💖!
