# cursor_hackathon_prototype

## How agents run this repo

Agents should work from the repository root and stay on the assigned feature
branch for the task. Start each run by confirming the workspace and branch:

```sh
cd /workspace
git status --short --branch
```

This repository currently contains documentation only. There are no application
dependencies, services, build steps, or automated tests configured yet, so an
agent run does not require installing packages, starting a server, or executing
a test suite.

Recommended workflow:

1. Confirm the current branch matches the assigned task branch.
2. Review `README.md` and any task-specific instructions before editing.
3. Make focused documentation changes from the repository root.
4. Validate the final state before committing:

   ```sh
   git diff
   git status --short --branch
   ```

5. Commit and push changes on the assigned branch, then open or update the pull
   request for that branch.

If executable code, dependencies, or test commands are added later, update this
section with the exact setup, run, build, and verification commands agents
should use.
