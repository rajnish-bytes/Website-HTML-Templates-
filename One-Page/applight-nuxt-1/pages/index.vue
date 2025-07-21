<template>
  <div>
    <AppHeader />
    <BannerSection />
    <AboutSection />
    <VideoSection />
    <FeaturesSection />
    <TeamSection />
    <TestimonialSection />
    <FaqSection />
    <DownloadSection />
    <ContactSection />
    <AppFooter />
  </div>
</template>

<script setup>
// Importing necessary components for the homepage
import AppHeader from '@/components/global/AppHeader.vue'
import AppFooter from '@/components/global/AppFooter.vue'
import BannerSection from '@/components/sections/BannerSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import TeamSection from '@/components/sections/TeamSection.vue'
import TestimonialSection from '@/components/sections/TestimonialSection.vue'
import VideoSection from '@/components/sections/VideoSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import DownloadSection from '@/components/sections/DownloadSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style scoped>
/* Additional styles for the index page can be added here */
</style>