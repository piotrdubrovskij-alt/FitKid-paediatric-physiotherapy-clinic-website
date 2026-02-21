#!/bin/bash
set -e

# Get current date and time
DATETIME=$(date '+%Y-%m-%d %H:%M:%S')

# Git operations
git add -A
git commit -m "WIP: $DATETIME"
git push origin main

echo "✅ Changes saved and pushed to GitHub at $DATETIME"
