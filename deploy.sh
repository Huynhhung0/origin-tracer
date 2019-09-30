#!/bin/bash
set -e # Exit immediately if something throws an error

echo "Building and deploying site"

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
CURRENT_COMMIT=$(git log '--format=format:%H' -1)

# Create seperate git worktree for the the _side folder that
# jekyll builds too, and set it to the gh-pages branch
rm -rf _site
git worktree add -f _site gh-pages

# Do the build
npm install --dev-only
npm buld
cp index.html _site/index.html
cp dist/app.bundle.js _site/app.bundle.js
cp -r vendor/ _site/vendor/
echo "tracer.originprotocol.com" > _site/CNAME

# Commit and push the resulting site build
cd _site
git add --all
git commit -m "Docs build from $CURRENT_BRANCH $CURRENT_COMMIT"
git push github gh-pages

echo "Completed"