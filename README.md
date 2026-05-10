# cursor_hackathon_prototype

## How agents run this repo

Agents should run all commands from the repository root and stay on the assigned
feature branch for the task. Start each run by confirming the workspace and
branch:

```sh
cd /workspace
git status --short --branch
```

This repository currently contains documentation only. There are no application
dependencies, services, build steps, or automated tests configured yet, so an
agent run does not require package installation, a local server, or a test
suite.

Recommended agent workflow:

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

Because there is no executable project code yet, the expected verification for
agent changes is a documentation review plus the `git diff` and `git status`
checks above. Do not add placeholder setup, build, or test commands until the
repo includes the files needed to support them.

If executable code, dependencies, or test commands are added later, update this
section with the exact setup, run, build, and verification commands agents
should use.
