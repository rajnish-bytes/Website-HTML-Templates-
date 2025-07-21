<template>
  <!-- Hero Section with Enhanced UI -->
  <section
    class="hero transition-all duration-1000 starting:scale-125 starting:opacity-0 starting:blur-sm min-h-[90vh] bg-gradient-to-br from-light-pink via-base-100 to-light-gray py-12 md:py-20 relative overflow-hidden"
  >
    <!-- Enhanced decorative elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
      <div
        class="absolute -right-24 -top-24 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-20 animate-pulse-slow"
      />
      <div
        class="absolute -left-24 -bottom-24 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-20 animate-pulse-slow"
      />
      <div
        class="absolute top-1/2 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl opacity-10 animate-bounce-slow"
      />
      <!-- Abstract shapes -->
      <svg
        class="absolute right-1/3 top-1/3 text-primary opacity-5 w-72 h-72"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.4,42.4C65.3,55.5,54.8,67.3,41.9,76.4C28.9,85.4,14.5,91.7,-0.9,93.1C-16.2,94.5,-32.4,91,-46.2,82.6C-60,74.2,-71.3,60.9,-79.1,45.8C-86.9,30.7,-91.2,15.4,-91.2,0C-91.3,-15.3,-87.1,-30.7,-78.7,-43.9C-70.2,-57.2,-57.5,-68.3,-43.4,-75.5C-29.2,-82.7,-14.6,-85.9,0.2,-86.2C15,-86.6,30.1,-83.7,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>

    <div class="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4 gap-12 z-10">
      <!-- Improved right side video section -->
      <div class="w-full lg:w-1/2 animate-fadeIn">
        <!-- Enhanced Video Placeholder -->
        <div
          class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 transform hover:scale-[1.02] transition-all duration-500"
        >
          <div class="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/7821479/pexels-photo-7821479.jpeg"
              alt="Tax Planning"
              class="w-full h-full object-cover"
            >
          </div>
          <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30 backdrop-blur-sm" />
          <div class="absolute inset-0 flex items-center justify-center">
            <button
              class="btn btn-circle btn-lg bg-white/90 hover:bg-white border-none text-primary hover:scale-110 transition-transform duration-300 shadow-lg"
              @click="playVideo"
            >
              <Icon
                name="lucide-play-solid"
                size="32"
              />
            </button>
          </div>
          <!-- Enhanced floating badge -->
          <div
            class="absolute top-4 right-4 badge badge-primary badge-lg text-white gap-1 py-3 px-4 font-semibold shadow-lg animate-pulse"
          >
            <Icon
              name="lucide-video-camera-solid"
              class="w-4 h-4"
            />
            <span>Watch Demo</span>
          </div>
          <!-- New feature highlight badges -->
          <div class="absolute bottom-4 left-4 flex flex-col gap-2">
            <div class="badge badge-accent text-secondary gap-2 py-2 px-3 shadow-md backdrop-blur-sm">
              <Icon
                name="lucide-check-circle"
                class="w-4 h-4"
              />
              <span>Tax-saving strategies</span>
            </div>
            <div class="badge bg-white/80 text-secondary gap-2 py-2 px-3 shadow-md backdrop-blur-sm">
              <Icon
                name="lucide-check-circle"
                class="w-4 h-4 text-primary"
              />
              <span>Expert guidance</span>
            </div>
          </div>
        </div>

        <!-- Enhanced trust indicators with hover effect -->
        <div class="flex flex-wrap gap-4 mt-8 justify-center lg:justify-end">
          <div
            v-for="(indicator, index) in trustIndicators"
            :key="index"
            class="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-2 px-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Icon
              :name="indicator.icon"
              :class="indicator.color"
              size="20"
            />
            <span class="text-sm font-medium">{{ indicator.text }}</span>
          </div>
        </div>
      </div>

      <!-- Improved left side content -->
      <div class="w-full lg:w-1/2 text-center lg:text-left animate-slideUp">
        <div class="badge badge-accent mb-6 font-semibold py-3 px-6 shadow-md relative overflow-hidden">
          <span class="relative z-10">TAX EXPERTS SINCE 2010</span>
          <!-- Badge highlight effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 animate-shimmer" />
        </div>

        <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold text-secondary leading-tight mb-6">
          Keep more of what you
          <span class="relative inline-block">
            <span class="text-primary relative z-10">earn</span>
            <span
              class="absolute bottom-1 -left-1 w-[calc(100%+8px)] h-3 bg-accent/40 -z-0 skew-x-3 rounded-sm"
            />
          </span>
          with expert tax planning
        </h1>

        <p class="py-6 text-gray-600 text-lg max-w-xl leading-relaxed">
          We're a team of certified professionals dedicated to maximizing your profits and minimizing your tax burden
          through strategic planning and compliance.
        </p>

        <!-- Enhanced CTA section -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
          <a
            href="#contact"
            class="btn btn-primary text-white btn-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
          >
            <span class="relative z-10 flex items-center">
              Schedule A Consultation
              <Icon
                name="lucide-arrow-right"
                size="20"
                class="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </span>
            <!-- Button highlight effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 group-hover:animate-shimmer"
            />
          </a>
          <a
            href="#services"
            class="btn btn-outline btn-secondary btn-lg hover:shadow-md transition-all"
          >
            Our Services
          </a>
        </div>

        <!-- Client stats -->
        <div class="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/80 inline-block">
          <div class="flex items-center gap-4">
            <div>
              <div class="stat-value text-primary text-3xl font-bold">
                $12M+
              </div>
              <div class="text-sm text-gray-600">
                Tax savings last year
              </div>
            </div>
            <div class="divider divider-horizontal mx-0" />
            <div>
              <div class="stat-value text-secondary text-3xl font-bold">
                98%
              </div>
              <div class="text-sm text-gray-600">
                Client retention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center"
    >
      <div class="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
        <span class="text-sm text-secondary font-medium">Scroll to explore</span>
      </div>
      <div class="mt-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon
          name="lucide-arrow-down"
          class="w-5 h-5 text-primary"
        />
      </div>
    </div>
  </section>

  <!-- Stats Counter with Animated Cards -->
  <div class="bg-base-100 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          v-for="(stat, index) in statsCounters"
          :key="index"
          class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 p-6"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              :class="stat.color"
              class="bg-base-200 p-3 rounded-lg"
            >
              <Icon
                :name="stat.icon"
                size="30"
              />
            </div>
            <div class="badge badge-ghost">
              {{ stat.desc }}
            </div>
          </div>
          <div
            :class="stat.color"
            class="stat-value text-4xl font-bold"
          >
            {{ stat.value }}
          </div>
          <div class="stat-title font-medium text-gray-500 mt-2">
            {{ stat.title }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Animated Partner Logos Section -->
  <div class="bg-light-gray py-16 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <div class="badge badge-primary text-white font-semibold py-2 px-4 mb-3">
          TRUSTED BY INDUSTRY LEADERS
        </div>
        <h3 class="text-2xl font-bold text-secondary">
          Our Integration Partners
        </h3>
      </div>

      <!-- Logo carousel with continuous animation -->
      <div class="relative">
        <div class="flex animate-marquee justify-around items-center">
          <div
            v-for="(logo, index) in partnerLogos"
            :key="`logo-${index}`"
            class="mx-8 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 bg-white p-5 rounded-xl shadow-sm"
          >
            <Icon
              :name="logo"
              size="64"
              class="text-gray-500 hover:text-primary"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />
  </div>
</template>

<script setup lang="ts">
// Trust indicators with improved data
const trustIndicators = [
  { icon: "lucide-star", color: "text-accent", text: "4.9/5 Rating (500+ Reviews)" },
  { icon: "lucide-shield-check", color: "text-primary", text: "Certified Tax Experts" },
  { icon: "lucide-users", color: "text-secondary", text: "1000+ Satisfied Clients" },
];

// Data for the partner logos
const partnerLogos = [
  "logos:quickbooks",
  "logos:xero",
  "logos:freshbooks",
  "simple-icons:sage",
  "logos:turbotax",
  "simple-icons:wave",
];

// Stats counter data
const statsCounters = [
  {
    icon: "lucide-banknotes",
    title: "Tax Savings",
    value: "$300M+",
    desc: "For our clients",
    color: "text-primary",
  },
  {
    icon: "lucide-users",
    title: "Happy Clients",
    value: "1,200+",
    desc: "Growing every month",
    color: "text-secondary",
  },
  {
    icon: "lucide-star",
    title: "Reviews",
    value: "4.9",
    desc: "Out of 5 stars",
    color: "text-accent",
  },
];

// Function for video playing
const playVideo = () => {
  alert("Video would play here in production!");
};

// Add shimmer animation on mount
onMounted(() => {
  // Add shimmer animation to CSS
  const style = document.createElement("style");
  style.textContent = `
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.3; }
    }
    .animate-pulse-slow {
      animation: pulse-slow 8s infinite ease-in-out;
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 10s infinite ease-in-out;
    }
  `;
  document.head.appendChild(style);
});
</script>