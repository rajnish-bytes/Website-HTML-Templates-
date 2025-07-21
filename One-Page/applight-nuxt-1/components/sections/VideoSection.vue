<template>
  <section
    class="relative  bg-cover bg-fixed bg-center overflow-hidden"
    style="background-image: url('/images/video-bg.jpg')"
  >
    <div class="bg-gradient-to-l from-purple-700/90 to-purple-300/90 py-16">
      <div class="container mx-auto px-4 text-center">
        <h3 class="text-2xl md:text-xl font-semibold text-white mb-8">
          Watch Now
        </h3>
        <i
          @click="toggleVideoPopup"
          class="fa fa-play block relative w-16 h-16 rounded-full bg-white text-purple-700 text-xl leading-[64px] mx-auto cursor-pointer"
          aria-hidden="true"
        ></i>

        <div
          v-if="videoPopup"
          @click="closeVideoPopup"
          class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
          <div class="relative w-full max-w-3xl mx-4">
            <div class="relative pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/Ku52zNnft8k?rel=0&amp;showinfo=0"
                class="absolute inset-0 w-full h-full"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const videoPopup = ref(false);

const toggleVideoPopup = () => {
  videoPopup.value = !videoPopup.value;
};

const closeVideoPopup = (event) => {
  if (event.target.nodeName !== "IFRAME") {
    videoPopup.value = false;
  }
};
</script>

<style scoped>
.video-popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}
</style>