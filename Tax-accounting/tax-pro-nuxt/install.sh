#!/bin/bash

# Installation script for tax-pro-nuxt project

echo "📦 Installing dependencies for tax-pro-nuxt..."
cd "$(dirname "$0")"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies
npm install

# Install additional dev dependencies for testing
npm install -D @vitejs/plugin-vue @nuxt/test-utils @testing-library/vue @vitest/coverage-v8 @vue/test-utils happy-dom vitest eslint eslint-plugin-vue @nuxtjs/eslint-config-typescript

echo "✅ All dependencies installed successfully!"
echo "🚀 You can now run the development server with: npm run dev"
echo "🧪 Run tests with: npm run test"
echo "🔧 Build for production with: npm run build"
