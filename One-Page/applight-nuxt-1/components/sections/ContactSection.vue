<template>
  <section class="py-20 md:py-10" data-scroll-index="6">
    <div class="container mx-auto">
      <div class="w-4/6 md:w-11/12 mx-auto text-center">
        <h3 class="text-2xl md:text-base font-bold">Contact Us</h3>
        <span class="h-0.5 w-12 bg-purple-700 mx-auto my-5 relative block">
          <span
            class="absolute left-1/2 w-36 h-0.5 border-b-2 border-dashed border-purple-700 -ml-18"
          ></span>
        </span>
        <p class="text-gray-500 text-base">
          Get in touch with us for any inquiries or feedback.
        </p>
      </div>
      <div class="mt-20">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/3 px-4 mb-8 md:mb-0">
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Name"
                  class="w-full h-12 px-4 rounded-full border border-gray-200 focus:outline-none focus:border-purple-700"
                  required
                />
              </div>
              <div class="mb-4">
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  class="w-full h-12 px-4 rounded-full border border-gray-200 focus:outline-none focus:border-purple-700"
                  required
                />
              </div>
              <div class="mb-4">
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="Subject"
                  class="w-full h-12 px-4 rounded-full border border-gray-200 focus:outline-none focus:border-purple-700"
                />
              </div>
              <div class="mb-4">
                <textarea
                  v-model="form.message"
                  placeholder="Message"
                  class="w-full p-4 h-36 rounded-3xl border border-gray-200 focus:outline-none focus:border-purple-700 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="px-8 py-3 rounded-full bg-gradient-to-l from-purple-700 to-purple-300 text-white font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div class="w-full md:w-1/3 px-4">
            <div
              class="bg-gradient-to-l from-purple-700 to-purple-300 p-8 rounded-lg text-white h-full"
            >
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <i class="fa fa-map-marker-alt text-xl mr-3"></i>
                  <div>
                    <p class="uppercase font-medium">Address</p>
                    <p>123 Main Street, New York, USA</p>
                  </div>
                </div>
              </div>
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <i class="fa fa-phone text-xl mr-3"></i>
                  <div>
                    <p class="uppercase font-medium">Phone</p>
                    <p>+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <i class="fa fa-envelope text-xl mr-3"></i>
                  <div>
                    <p class="uppercase font-medium">Email</p>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex items-center">
                  <i class="fa fa-clock text-xl mr-3"></i>
                  <div>
                    <p class="uppercase font-medium">Working Hours</p>
                    <p>Mon-Fri 9.00 AM to 5.00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const submitForm = () => {
      // Handle form submission logic here
      console.log("Form submitted:", form.value);
      // Reset form after submission
      form.value = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    };

    return {
      form,
      submitForm,
    };
  },
};
</script>

<style scoped>
/* Add any specific styles for the ContactSection component here */
</style>