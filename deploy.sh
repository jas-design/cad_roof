#!/bin/bash

# Simple script to deploy to GitHub Pages manually
# Usage: ./deploy.sh "Your commit message"

set -e

# Build the project
echo "Building project..."
npm run build

# Deploy
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete!"
