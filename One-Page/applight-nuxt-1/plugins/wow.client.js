import { WOW } from 'wowjs';

// This file initializes the WOW.js library for scroll animations

export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client-side
  if (process.client) {
    // Initialize WOW.js after the app is mounted
    nuxtApp.hook('app:mounted', () => {
      new WOW({
        live: false
      }).init();
    });

    // Make WOW available globally
    window.WOW = WOW;
  }
});