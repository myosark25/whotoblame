#!/bin/bash

echo "🔧 Fixing GitHub Pages deployment..."

# Install webpack-cli locally
echo "📦 Installing webpack-cli..."
npm install -D webpack-cli

# Build the project
echo "🏗️ Building project..."
npm run build

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Switch to gh-pages branch
echo "🔄 Switching to gh-pages branch..."
git checkout gh-pages

# Clean the branch completely
echo "🧹 Cleaning gh-pages branch..."
git rm -rf . 2>/dev/null || true

# Copy built files
echo "📋 Copying built files..."
cp -r dist/* .
rm -rf dist

# Create .nojekyll file
echo "" > .nojekyll

# Add and commit
echo "💾 Committing changes..."
git add .
git commit -m "Fix: Deploy built React app to GitHub Pages"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin gh-pages --force

# Switch back to main
git checkout main

echo "✅ GitHub Pages deployment fixed!"
echo "🌐 Your site should be available at: https://myosark25.github.io/whotoblame"
echo "⏰ Please wait 2-3 minutes for GitHub Pages to update"
