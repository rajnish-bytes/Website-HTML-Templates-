<template>
  <section
    class="py-20 md:py-10 bg-gray-50 border-t border-gray-200"
    data-scroll-index="3"
  >
    <div class="container mx-auto">
      <div class="w-4/6 md:w-11/12 mx-auto text-center">
        <h3 class="text-2xl md:text-base font-bold">Our Team</h3>
        <span class="h-0.5 w-12 bg-purple-700 mx-auto my-5 relative block">
          <span
            class="absolute left-1/2 w-36 h-0.5 border-b-2 border-dashed border-purple-700 -ml-18"
          ></span>
        </span>
        <p class="text-gray-500 text-base">
          Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra.
          Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.
        </p>
      </div>
      <div class="mt-20 text-center">
        <div class="flex flex-wrap">
          <div
            class="w-full md:w-1/3 px-4"
            v-for="member in teamMembers"
            :key="member.name"
          >
            <div
              class="mt-5 md:mt-0 animate__animated animate__bounce"
              :style="{ 'animation-delay': member.delay }"
            >
              <img
                :src="member.image"
                class="rounded-full w-1/2 md:w-1/2 mx-auto"
                alt="Team Member"
              />
              <h4
                class="text-purple-700 mt-5 text-base md:text-sm font-semibold"
              >
                {{ member.name }}
              </h4>
              <p class="text-gray-500">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: "Nitu Singh",
    role: "Marketing Specialist",
    image: "/images/user1.jpg",
    delay: "0.2s",
  },
  {
    name: "Yogesh Singh",
    role: "CEO & Founder",
    image: "/images/user2.jpg",
    delay: "0.4s",
  },
  {
    name: "Nisha Sharma",
    role: "Web Developer",
    image: "/images/user3.jpg",
    delay: "0.6s",
  },
];
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>