#!/bin/bash

echo "🚀 Manual GitHub Pages Deployment"
echo "================================="

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - no dist folder found"
    exit 1
fi

echo "✅ Build successful"

# Create gh-pages branch if it doesn't exist
echo "🌿 Setting up gh-pages branch..."
git checkout --orphan gh-pages
git rm -rf .

# Copy dist files to root
echo "📁 Copying build files..."
cp -r dist/* .

# Add and commit
echo "💾 Committing files..."
git add .
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "🚀 Pushing to GitHub..."
git push origin gh-pages --force

# Switch back to main
git checkout main

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site should be available at:"
echo "   https://myosark25.github.io/whotoblame"
echo ""
echo "📋 Next steps:"
echo "1. Go to: https://github.com/myosark25/whotoblame/settings/pages"
echo "2. Set source to 'Deploy from a branch'"
echo "3. Select 'gh-pages' branch"
echo "4. Save settings"
echo "5. Wait 2-3 minutes for deployment"
