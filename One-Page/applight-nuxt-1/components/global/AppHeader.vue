<template>
  <header class="fixed inset-x-0 w-full z-50 transition-all duration-300" :class="{'bg-white shadow-md': scrolled, 'bg-transparent': !scrolled}">
    <nav class="container mx-auto flex justify-between items-center px-4 py-2">
      <nuxt-link to="/" class="py-2">
        <img :src="scrolled ? '/images/logo.png' : '/images/logo-white.png'" alt="Applight Logo" class="h-10 transition-all duration-300">
      </nuxt-link>
      
      <div class="hidden md:flex space-x-6">
        <nuxt-link to="/" class="text-sm uppercase font-semibold transition duration-300" :class="{'text-gray-800 hover:text-purple-700': scrolled, 'text-white hover:text-purple-300': !scrolled}">Home</nuxt-link>
        <nuxt-link to="/about" class="text-sm uppercase font-semibold transition duration-300" :class="{'text-gray-800 hover:text-purple-700': scrolled, 'text-white hover:text-purple-300': !scrolled}">About</nuxt-link>
        <nuxt-link to="/features" class="text-sm uppercase font-semibold transition duration-300" :class="{'text-gray-800 hover:text-purple-700': scrolled, 'text-white hover:text-purple-300': !scrolled}">Features</nuxt-link>
        <nuxt-link to="/team" class="text-sm uppercase font-semibold transition duration-300" :class="{'text-gray-800 hover:text-purple-700': scrolled, 'text-white hover:text-purple-300': !scrolled}">Team</nuxt-link>
        <nuxt-link to="/testimonials" class="text-sm uppercase font-semibold transition duration-300" :class="{'text-gray-800 hover:text-purple-700': scrolled, 'text-white hover:text-purple-300': !scrolled}">Testimonials</nuxt-link>
        <nuxt-link to="/faq" class="text-sm uppercase font-semibold transition duration-300" :class="{'text-gray-800 hover:text-purple-700': scrolled, 'text-white hover:text-purple-300': !scrolled}">FAQ</nuxt-link>
        <nuxt-link to="/contact" class="text-sm uppercase font-semibold transition duration-300" :class="{'text-gray-800 hover:text-purple-700': scrolled, 'text-white hover:text-purple-300': !scrolled}">Contact</nuxt-link>
      </div>
      
      <div class="md:hidden">
        <button @click="toggleMenu" class="p-2 focus:outline-none">
          <span class="fas fa-bars" :class="{'text-gray-800': scrolled, 'text-white': !scrolled}"></span>
        </button>
      </div>
    </nav>
    
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="flex flex-col space-y-2 p-4 bg-white shadow-lg">
        <nuxt-link to="/" class="text-gray-700 hover:text-purple-700 transition duration-300">Home</nuxt-link>
        <nuxt-link to="/about" class="text-gray-700 hover:text-purple-700 transition duration-300">About</nuxt-link>
        <nuxt-link to="/features" class="text-gray-700 hover:text-purple-700 transition duration-300">Features</nuxt-link>
        <nuxt-link to="/team" class="text-gray-700 hover:text-purple-700 transition duration-300">Team</nuxt-link>
        <nuxt-link to="/testimonials" class="text-gray-700 hover:text-purple-700 transition duration-300">Testimonials</nuxt-link>
        <nuxt-link to="/faq" class="text-gray-700 hover:text-purple-700 transition duration-300">FAQ</nuxt-link>
        <nuxt-link to="/contact" class="text-gray-700 hover:text-purple-700 transition duration-300">Contact</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const scrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-blue-500 transition duration-300;
}
.navbar-toggler {
  @apply p-2 rounded focus:outline-none;
}
</style>