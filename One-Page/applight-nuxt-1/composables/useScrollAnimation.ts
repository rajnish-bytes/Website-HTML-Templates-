// This file exports a composable function that handles scroll animations for the website.

import { ref, onMounted, onUnmounted } from 'vue';

export const useScrollAnimation = () => {
  const isVisible = ref(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    isVisible.value = scrollY > 50; // Change this value to adjust when the animation triggers
  };

  const handleScrollIt = () => {
    // Implementation similar to scrollIt.min.js
    const upKey = 38;
    const downKey = 40;
    const easing = 'linear';
    const scrollTime = 600;
    const activeClass = 'active';
    const topOffset = -63;

    // The rest of the implementation...
    // You can simplify this or use an existing library
  }

  onMounted(() => {
    if (process.client) {
      handleScrollIt();

      // Handle navbar scrolling effect
      const handleScroll = () => {
        const bodyScroll = window.scrollY;
        const navbar = document.querySelector(".navbar");

        if (bodyScroll > 50) {
          document.querySelector('.navbar-logo img')?.setAttribute('src', '/images/logo-black.png');
          navbar?.classList.add("nav-scroll");
        } else {
          document.querySelector('.navbar-logo img')?.setAttribute('src', '/images/logo.png');
          navbar?.classList.remove("nav-scroll");
        }
      };

      window.addEventListener('scroll', handleScroll);
    }
  });

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return {
    isVisible,
  };
};