#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Switch to gh-pages branch
echo "🔄 Switching to gh-pages branch..."
git checkout gh-pages

# Clean the branch
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
git commit -m "Deploy: Updated React app with error handling and fixes"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin gh-pages --force

# Switch back to main
git checkout main

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://myosark25.github.io/whotoblame"
