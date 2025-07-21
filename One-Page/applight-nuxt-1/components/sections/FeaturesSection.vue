<template>
  <section class="py-20 md:py-10" id="features" data-scroll-index="2">
    <div class="container mx-auto">
      <div class="w-4/6 md:w-11/12 mx-auto text-center">
        <h3 class="text-2xl md:text-xl font-bold">Features</h3>
        <span class="h-0.5 w-12 bg-purple-700 mx-auto my-5 relative block">
          <span
            class="absolute left-1/2 w-36 h-0.5 border-b-2 border-dashed border-purple-700 -ml-18"
          ></span>
        </span>
        <p class="text-gray-500 text-base mt-4">
          Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra.
          Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.
        </p>
      </div>

      <div class="mt-20 text-center">
        <div class="flex flex-wrap">
          <!-- Left column features -->
          <div class="w-full md:w-1/3 px-4">
            <div
              v-for="(feature, index) in leftFeatures"
              :key="index"
              class="flex mb-12 animate__animated animate__fadeInUp"
              :style="{ 'animation-delay': `${0.2 + index * 0.2}s` }"
            >
              <div class="text-right pr-4 flex-grow">
                <h5 class="font-semibold">{{ feature.title }}</h5>
                <p class="text-gray-500 text-sm">{{ feature.description }}</p>
              </div>
              <div>
                <span
                  class="inline-block w-12 h-12 rounded-full border border-purple-700 text-purple-700 leading-[50px] text-center"
                >
                  <i :class="feature.icon" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>

          <!-- Center image -->
          <div class="hidden md:block md:w-1/3">
            <img
              src="/images/iphone-screen-with-shadow.png"
              class="mx-auto animate__animated animate__fadeInUp"
            />
          </div>

          <!-- Right column features -->
          <div class="w-full md:w-1/3 px-4">
            <div
              v-for="(feature, index) in rightFeatures"
              :key="index"
              class="flex mb-12 animate__animated animate__fadeInUp"
              :style="{ 'animation-delay': `${0.2 + index * 0.2}s` }"
            >
              <div>
                <span
                  class="inline-block w-12 h-12 rounded-full border border-purple-700 text-purple-700 leading-[50px] text-center"
                >
                  <i :class="feature.icon" aria-hidden="true"></i>
                </span>
              </div>
              <div class="text-left pl-4 flex-grow">
                <h5 class="font-semibold">{{ feature.title }}</h5>
                <p class="text-gray-500 text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "FeaturesSection",
  data() {
    return {
      leftFeatures: [
        {
          title: "Fast Processing",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
          icon: "fa fa-bolt",
        },
        {
          title: "Low Power Consuming",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
          icon: "fa fa-battery-full",
        },
        {
          title: "Wifi Compatibility",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
          icon: "fa fa-wifi",
        },
      ],
      rightFeatures: [
        {
          title: "Regular Updates",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
          icon: "fa fa-check-double",
        },
        {
          title: "Save Money",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
          icon: "fa fa-dollar-sign",
        },
        {
          title: "Unlimited Storage",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
          icon: "fa fa-hdd",
        },
      ],
    };
  },
};
</script>

<style scoped>
.line {
  width: 50px;
  height: 3px;
  background-color: #4a4a4a;
  margin: 20px auto;
}
</style>