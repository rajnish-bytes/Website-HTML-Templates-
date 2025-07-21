<template>
  <div>
    <AppHeader />
    <main>
      <nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Importing the global header and footer components
import AppHeader from '~/components/global/AppHeader.vue';
import AppFooter from '~/components/global/AppFooter.vue';
</script>

<style scoped>
/* This layout file wraps the main content with a header and footer */
</style>