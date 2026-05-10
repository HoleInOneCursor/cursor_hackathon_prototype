# cursor_hackathon_prototype

## How agents run this repo

Cursor agents work from the checked-out repository root, typically `/workspace`,
on the feature branch assigned to the task.

This repo currently contains documentation only. There is no application runtime,
dependency installation step, build command, or automated test command yet.

Recommended agent workflow:

1. Confirm the current branch and working tree with `git status --short --branch`.
2. Make the requested documentation or project changes.
3. For README-only changes, review the rendered Markdown or inspect the file
   contents to validate formatting.
4. If executable code is added later, add the required setup, run, build, and
   test commands to this section and run them before opening a PR.
5. Commit and push changes to the assigned feature branch, then open a PR.
