# TaxPro - Tax Planning & Accounting Nuxt 3 Website

A modern, responsive tax accounting website built with Nuxt 3, Tailwind CSS, DaisyUI, and TypeScript.

## Features

- 📱 Responsive design that looks great on all devices
- 🎨 Modern UI with animations and transitions
- 🧩 Component-based architecture for better maintainability
- 📊 Centralized state management with Pinia stores
- 🔒 Type-safe code with TypeScript interfaces
- 🧪 Unit testing with Vitest and Vue Test Utils
- 🚀 Optimized for performance and SEO

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue 3)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Icons**: [Nuxt Icon](https://github.com/nuxt-modules/icon) (supports multiple icon sets)
- **Testing**: [Vitest](https://vitest.dev/) with [Vue Test Utils](https://test-utils.vuejs.org/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tax-pro-nuxt.git

# Navigate to the project directory
cd tax-pro-nuxt

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the application
npm run build
# or
yarn build

# Preview the production build
npm run preview
# or
yarn preview
```

### Testing

```bash
# Run all tests
npm run test
# or
yarn test

# Run tests in watch mode
npm run test:watch
# or
yarn test:watch

# Generate test coverage report
npm run test:coverage
# or
yarn test:coverage
```

## Project Structure

```
tax-pro-nuxt/
├── assets/            # Static assets (CSS, images)
├── components/        # Vue components
│   ├── home/          # Home page specific components
│   └── ...            # Other components
├── layouts/           # Layouts for pages
├── pages/             # Application pages
│   ├── services/      # Service-specific pages
│   └── ...            # Other pages
├── public/            # Public files (favicon, robots.txt, etc.)
├── services/          # API and external services
├── stores/            # Pinia stores
├── test/              # Test files
│   ├── components/    # Component tests
│   ├── services/      # Service tests
│   └── ...            # Other tests
├── types/             # TypeScript type definitions
├── .eslintrc.json     # ESLint configuration
├── nuxt.config.ts     # Nuxt configuration
├── package.json       # Project dependencies
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Deployment

The application can be deployed to any static hosting service that supports Node.js applications, such as:

- Vercel
- Netlify
- AWS Amplify
- Firebase Hosting

## License

This project is licensed under the MIT License - see the LICENSE file for details.
