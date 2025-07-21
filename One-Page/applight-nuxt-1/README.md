# README.md

# Applight Nuxt Project

Welcome to the Applight Nuxt project! This project is a modern web application built using Nuxt.js and styled with Tailwind CSS. It showcases various sections including a banner, features, testimonials, and more.

## Project Structure

The project is organized as follows:

```
applight-nuxt
├── .nuxt                       # Auto-generated files (not shown in repo)
├── assets
│   ├── css
│   │   └── tailwind.css        # Tailwind imports and custom styles
│   └── images                  # Original image assets
├── components
│   ├── global
│   │   ├── AppFooter.vue       # Footer component
│   │   └── AppHeader.vue       # Header component
│   └── sections                # Section components for the homepage
├── composables
│   └── useScrollAnimation.ts    # Composable for scroll animations
├── layouts
│   └── default.vue              # Default layout for the application
├── pages
│   └── index.vue                # Main entry point for the application
├── plugins
│   ├── bxslider.client.js       # bxSlider initialization
│   └── wow.client.js            # WOW.js initialization
├── public
│   └── favicon.ico              # Favicon for the application
├── app.vue                      # Root component for the Nuxt application
├── nuxt.config.ts               # Nuxt configuration file
├── package.json                 # Project dependencies and scripts
└── tailwind.config.js           # Tailwind CSS configuration
```

## Getting Started

To get started with the Applight Nuxt project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd applight-nuxt
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Customization

You can customize the styles by modifying the `assets/css/tailwind.css` file. Tailwind CSS provides a utility-first approach to styling, allowing for rapid design changes.

## Build for Production

To build the project for production, run:
```bash
npm run build
```

This will generate the necessary files for deployment in the `.nuxt` directory.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- [Nuxt.js](https://nuxtjs.org/) - The framework used for this project.
- [Tailwind CSS](https://tailwindcss.com/) - The utility-first CSS framework.
- [W3 Template](http://w3Template.com) - Original template inspiration.