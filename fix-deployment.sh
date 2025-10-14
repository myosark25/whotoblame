#!/bin/bash

echo "🔧 Fixing GitHub Pages Deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - no dist folder found"
    exit 1
fi

echo "✅ Build successful"

# Force checkout gh-pages branch
echo "🌿 Switching to gh-pages branch..."
git checkout gh-pages --force

# Remove all files except .git
echo "🧹 Cleaning gh-pages branch..."
git rm -rf . --ignore-unmatch

# Copy dist files to root
echo "📁 Copying build files..."
cp -r dist/* .

# Add and commit
echo "💾 Committing files..."
git add .
git commit -m "Fix: Deploy working React app to GitHub Pages"

# Push to gh-pages branch
echo "🚀 Pushing to GitHub..."
git push origin gh-pages --force

# Switch back to main
git checkout main

echo ""
echo "✅ Deployment fixed!"
echo "🌐 Your site should be available at:"
echo "   https://myosark25.github.io/whotoblame"
echo ""
echo "⏱️  Wait 2-3 minutes for GitHub Pages to update"
