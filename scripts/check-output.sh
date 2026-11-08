#!/usr/bin/env bash
# Checks the static build before it is deployed (spec: Deploy).
# Usage: bash scripts/check-output.sh [build-dir]   (default: out)
#
# Runs every check, prints one clear error per problem, then exits 1 if any
# check failed. "::error::" lines show up as red annotations in GitHub Actions.

dir="${1:-out}"
failed=0

fail() {
  echo "::error::$1"
  failed=1
}

if [ ! -d "$dir" ]; then
  echo "::error::Build output folder '$dir' not found. Run npm run build first."
  exit 1
fi

# 1. No Placeholder may reach the live site (GLOSSARY "Placeholder").
todo_files=$(grep -rlF '[[TODO' "$dir")
if [ -n "$todo_files" ]; then
  fail "Placeholder '[[TODO' found in build output. Fill it in before deploying. Files: $(echo "$todo_files" | tr '\n' ' ')"
fi

# 2. The Resume is the main call to action, so its link must not 404.
if [ ! -f "$dir/resume.pdf" ]; then
  fail "Resume missing: $dir/resume.pdf not found. Add public/resume.pdf."
fi

# A robots meta tag whose content includes "noindex".
noindex='<meta name="robots" content="[^"]*noindex'

# 3. The home page must stay indexable.
if [ ! -f "$dir/index.html" ]; then
  fail "Home page missing: $dir/index.html not found."
elif grep -q "$noindex" "$dir/index.html"; then
  fail "Home page ($dir/index.html) has a noindex directive. Remove robots noindex from the home page metadata."
fi

# 4. The Styleguide must stay out of search results.
if [ ! -f "$dir/styleguide.html" ]; then
  fail "Styleguide missing: $dir/styleguide.html not found."
elif ! grep -q "$noindex" "$dir/styleguide.html"; then
  fail "Styleguide ($dir/styleguide.html) has no noindex directive. Set robots: { index: false } in app/styleguide/page.tsx."
fi

if [ "$failed" -eq 1 ]; then
  exit 1
fi
echo "Build output checks passed."
