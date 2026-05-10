#!/usr/bin/env bash
set -euo pipefail

print_section() {
  printf '\n== %s ==\n' "$1"
}

if ! repo_root=$(git rev-parse --show-toplevel 2>/dev/null); then
  printf 'agent-brief: run this from inside a git repository\n' >&2
  exit 1
fi

cd "$repo_root"

repo_name=$(basename "$repo_root")
branch=$(git branch --show-current 2>/dev/null || true)
if [[ -z "$branch" ]]; then
  branch="detached at $(git rev-parse --short HEAD 2>/dev/null || printf 'unknown')"
fi
upstream=$(git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null || true)

printf 'Agent brief for %s\n' "$repo_name"

print_section "Repository"
printf 'Root: %s\n' "$repo_root"
printf 'Branch: %s\n' "$branch"
if [[ -n "$upstream" ]]; then
  printf 'Upstream: %s\n' "$upstream"
else
  printf 'Upstream: (none configured)\n'
fi

print_section "Remotes"
remotes=$(git remote -v | awk '!seen[$1, $2]++ { printf "  %s %s\n", $1, $2 }')
if [[ -n "$remotes" ]]; then
  printf '%s\n' "$remotes"
else
  printf '  (none)\n'
fi

print_section "Working tree"
status=$(git status --short)
if [[ -n "$status" ]]; then
  printf '%s\n' "$status"
else
  printf 'Clean\n'
fi

print_section "Changed files"
changed_files=$(
  {
    git diff --name-only --cached
    git diff --name-only
    git ls-files --others --exclude-standard
  } | awk 'NF && !seen[$0]++ { print }'
)
if [[ -n "$changed_files" ]]; then
  printf '%s\n' "$changed_files" | sed 's/^/  /'
else
  printf '  (none)\n'
fi

print_section "Recent commits"
recent_commits=$(git log --oneline -5 --decorate --no-abbrev-commit 2>/dev/null || true)
if [[ -n "$recent_commits" ]]; then
  printf '%s\n' "$recent_commits" | sed 's/^/  /'
else
  printf '  (no commits yet)\n'
fi

print_section "Tracked review surface"
tracked_files=$(git ls-files)
if [[ -n "$tracked_files" ]]; then
  printf '%s\n' "$tracked_files" | awk -F/ '!seen[$1]++ { printf "  %s\n", $1 }'
else
  printf '  (no tracked files)\n'
fi

print_section "Next useful commands"
printf '  git status --short --branch\n'
printf '  git diff --stat\n'
printf '  git diff --check\n'
