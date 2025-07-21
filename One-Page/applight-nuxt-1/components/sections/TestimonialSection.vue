<template>
  <section
    class="bg-gradient-to-l from-purple-700 to-purple-300 py-24 relative"
    data-scroll-index="4"
  >
    <div class="absolute inset-0 bg-[url('/images/pattern.png')]"></div>
    <div class="container mx-auto relative">
      <div class="w-4/6 md:w-11/12 mx-auto text-center">
        <h3 class="text-white text-2xl md:text-xl font-bold">Testimonials</h3>
        <span class="h-0.5 w-12 bg-white mx-auto my-5 relative block">
          <span
            class="absolute left-1/2 w-36 h-0.5 border-b-2 border-dashed border-white -ml-18"
          ></span>
        </span>
        <p class="text-white text-base">What our clients say about us.</p>
      </div>

      <div class="mt-16 relative mx-auto max-w-2xl space-x-5 flex items-center justify-center">
        <!-- Slider controls -->
        <button
          @click="prevSlide"
          class=" w-80 h-80 z-10 hidden md:block"
          aria-label="Previous slide"
        >
          <img src="/images/arrow-left.png" alt="Previous" class="w-10" />
        </button>

        
        <!-- Slider container -->
        <div class="overflow-hidden bg-white/80 rounded-lg">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="`transform: translateX(-${currentSlide * 100}%)`"
            ref="sliderContainer"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="w-full flex-shrink-0 p-6"
            >
              <div class="flex flex-col md:flex-row items-center">
                <div class="w-full md:w-1/5 mb-4 md:mb-0 md:mr-5">
                  <img
                    :src="testimonial.image"
                    alt="Client"
                    class="rounded-full border-[12px] border-white w-28 h-28 mx-auto"
                  />
                </div>
                <div class="w-full md:w-4/5 text-left">
                  <h4 class="mb-4 relative">
                    <span class="block text-lg font-normal">Client Review</span>
                    <span class="block text-xl font-bold">{{
                      testimonial.name
                    }}</span>
                  </h4>
                  <p class="text-gray-700">{{ testimonial.feedback }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          @click="nextSlide"
          class=" w-80 h-80 z-10 hidden md:block"
          aria-label="Next slide"
        >
          <img src="/images/arrow-right.png" alt="Next" class="w-10" />
        </button>

        <!-- Mobile indicators -->
        <div class="flex justify-center mt-4 md:hidden">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 mx-1 rounded-full"
            :class="index === currentSlide ? 'bg-purple-700' : 'bg-gray-300'"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "TestimonialSection",
  data() {
    return {
      currentSlide: 0,
      testimonials: [
        {
          name: "John Michal",
          role: "Digital Designer",
          feedback:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
          image: "/images/user1.jpg",
        },
        {
          name: "Steve Smith",
          role: "App User",
          feedback:
            "Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
          image: "/images/user2.jpg",
        },
        {
          name: "Gordon Shaw",
          role: "Blogger",
          feedback:
            "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
          image: "/images/user3.jpg",
        },
      ],
      autoplayInterval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
      }
    },
  },
  mounted() {
    this.startAutoplay();

    // Stop autoplay when user interacts with the slider
    const sliderContainer = this.$refs.sliderContainer;
    if (sliderContainer) {
      sliderContainer.addEventListener("mouseenter", this.stopAutoplay);
      sliderContainer.addEventListener("mouseleave", this.startAutoplay);
    }
  },
  beforeUnmount() {
    this.stopAutoplay();

    // Clean up event listeners
    const sliderContainer = this.$refs.sliderContainer;
    if (sliderContainer) {
      sliderContainer.removeEventListener("mouseenter", this.stopAutoplay);
      sliderContainer.removeEventListener("mouseleave", this.startAutoplay);
    }
  },
};
</script>

<style scoped>
/* Make sure you have the arrow images in your public/images folder:
   - arrow-left.png
   - arrow-right.png
*/
</style>