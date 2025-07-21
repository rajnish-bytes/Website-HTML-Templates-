// Nuxt 3 configuration
export default defineNuxtConfig({
  // Global page headers
  head: {
    title: 'Applight',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Applight - Best App Website Template' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    'animate.css/animate.min.css',
    '@/assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page
  plugins: [
    '@/plugins/bxslider.client.js', // bxSlider plugin
    '@/plugins/wow.client.js', // WOW.js plugin for animations
  ],

  // Build Configuration
  build: {
    // Additional build configurations can be added here
  },

  tailwindcss: {
    cssPath: ['@/assets/css/tailwind.css', { injectPosition: "first" }],
    config: {},
    viewer: true,
    exposeConfig: false,
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS module
  ],

  compatibilityDate: '2025-03-29',
})