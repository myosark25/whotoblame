#!/bin/bash

echo "🔧 FIXING EVERYTHING - Complete Solution"
echo "========================================"

# Step 1: Kill all processes
echo "1️⃣ Killing all running processes..."
lsof -ti:3002,3003,3004,3005,3006 | xargs kill -9 2>/dev/null || true
pkill -f "npm run dev" 2>/dev/null || true
pkill -f "webpack serve" 2>/dev/null || true

# Step 2: Clean everything
echo "2️⃣ Cleaning everything..."
rm -rf dist
rm -rf node_modules
rm -f package-lock.json

# Step 3: Fresh install
echo "3️⃣ Fresh install of dependencies..."
npm install

# Step 4: Build the project
echo "4️⃣ Building the project..."
npm run build

# Step 5: Deploy to GitHub Pages
echo "5️⃣ Deploying to GitHub Pages..."
git checkout gh-pages
git rm -rf . 2>/dev/null || true
cp -r dist/* .
echo "" > .nojekyll
git add .
git commit -m "Complete fix: Deploy working React app"
git push origin gh-pages --force

# Step 6: Switch back to main
git checkout main

echo "✅ EVERYTHING FIXED!"
echo "🌐 GitHub Pages: https://myosark25.github.io/whotoblame"
echo "💻 Local dev: npm run dev (will start on port 3002)"
echo "⏰ Wait 2-3 minutes for GitHub Pages to update"
