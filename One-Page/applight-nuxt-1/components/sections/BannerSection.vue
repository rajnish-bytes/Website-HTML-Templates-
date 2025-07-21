<template>
  <section
    class="bg-gradient-to-l from-purple-700 to-purple-300 py-24 relative"
    data-scroll-index="0"
  >
    <div class="absolute inset-0 bg-[url('/images/pattern.png')]"></div>
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-8/12">
          <div class="pr-0 md:pr-20 my-2 md:my-12">
            <h2 class="text-white text-lg md:text-4xl font-bold">
              Best App Website Template
            </h2>
            <h6 class="text-white text-base md:text-lg mt-2">
              This awesome template designed by
              <a
                href="http://w3Template.com"
                target="_blank"
                rel="dofollow"
                class="text-white border-b border-dotted border-white hover:no-underline"
                >W3 Template</a
              >.
            </h6>
            <p class="text-white my-6 md:my-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              hendrerit neque massa, sit amet tristique ante porta ut. In
              sodales et justo vel vulputate. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <ul class="list-none">
              <li class="inline-block my-2 mx-2">
                <a href="#">
                  <img
                    src="/images/appstore.png"
                    alt="App Store"
                    class="w-32 md:w-36 rounded-lg animate__animated animate__fadeInUp"
                    data-wow-delay="0.4s"
                  />
                </a>
              </li>
              <li class="inline-block my-2 mx-2">
                <a href="#">
                  <img
                    src="/images/playstore.png"
                    alt="Play Store"
                    class="w-32 md:w-36 rounded-lg animate__animated animate__fadeInUp"
                    data-wow-delay="0.7s"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:w-4/12 mt-6 md:mt-0">
          <img
            src="/images/iphone-screen.png"
            alt="iPhone Screen"
            class="animate__animated animate__fadeInUp"
          />
        </div>
      </div>
    </div>
    <span class="absolute bottom-0 w-full">
      <img
        class="w-full"
        src="/images/applight-wave.svg"
        alt="Wave Background"
      />
    </span>
  </section>
</template>

<script setup>
// This component displays the banner section with promotional content and images.
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>