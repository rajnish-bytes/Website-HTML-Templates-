<template>
  <section
    class="bg-gradient-to-l from-purple-700 to-purple-300 py-24 relative"
  >
    <!-- Pattern overlay -->
    <div class="absolute inset-0 bg-[url('/images/pattern.png')]"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="w-4/6 md:w-11/12 mx-auto text-center">
        <h3 class="text-2xl md:text-xl font-bold text-white">
          Download Our App
        </h3>
        <span class="h-0.5 w-12 bg-white mx-auto my-5 relative block">
          <span
            class="absolute left-1/2 w-36 h-0.5 border-b-2 border-dashed border-white -ml-18"
          ></span>
        </span>
        <p class="text-white">Get the app now and enjoy all the features!</p>
      </div>

      <div class="mt-20 text-center">
        <ul class="flex flex-wrap justify-center space-x-4">
          <li class="mb-4">
            <a
              href="#"
              class="inline-block animate__animated animate__fadeInUp"
              style="animation-delay: 0.4s"
            >
              <img
                src="/images/appstore.png"
                alt="Download on the App Store"
                class="w-36 md:w-32 rounded-lg"
              />
            </a>
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="inline-block animate__animated animate__fadeInUp"
              style="animation-delay: 0.7s"
            >
              <img
                src="/images/playstore.png"
                alt="Get it on Google Play"
                class="w-36 md:w-32 rounded-lg"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// This component provides download links for the app on different platforms.
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>