#!/bin/bash
# deploy.sh
# Deployment script for PiczaDev Web3 Liquid Glass Site

echo "Starting deployment process..."

# 1. Install dependencies
echo "Installing dependencies..."
npm ci || npm install

# 2. Build the Next.js application (Static HTML Export or SSR depending on config)
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully."
    echo "Ready for deployment (e.g. to Vercel, Netlify, or Custom Server)."
    # Add any rsync or cloud CLI commands here.
else
    echo "❌ Build failed. Please check the logs."
    exit 1
fi
