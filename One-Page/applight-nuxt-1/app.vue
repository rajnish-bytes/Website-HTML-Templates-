<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
// Importing global components for header and footer
import AppHeader from '~/components/global/AppHeader.vue';
import AppFooter from '~/components/global/AppFooter.vue';
</script>

<style>
/* Global styles can be added here if needed */
</style>