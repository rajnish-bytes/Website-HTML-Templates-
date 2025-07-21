<template>
  <!-- Services Section -->
  <section
    id="services"
    class="bg-light-pink py-16 md:py-24 relative"
  >
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div
        class="absolute inset-0"
        style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"
      />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <div class="badge badge-primary mb-4 text-white font-semibold py-3 px-4 shadow-md">
          OUR SERVICES
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-6 relative inline-block">
          What We Do
          <span class="absolute -bottom-2 left-0 w-full h-1 bg-accent" />
        </h2>

        <div class="flex flex-wrap justify-center gap-6 mb-6 max-w-4xl mx-auto">
          <div
            v-for="(headline, index) in serviceHeadlines"
            :key="index"
            class="flex items-center gap-2 bg-white py-2 px-4 rounded-full shadow-sm"
          >
            <Icon
              :name="headline.icon"
              class="text-primary"
              size="20"
            />
            <span class="font-medium">{{ headline.text }}</span>
          </div>
        </div>

        <p class="max-w-2xl mx-auto text-lg text-gray-600">
          Our comprehensive services are designed to help businesses thrive by providing expert financial
          guidance and strategic tax planning.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          <figure class="relative h-56">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            <div class="absolute bottom-0 left-0 w-full p-4">
              <div
                class="badge"
                :class="service.badgeClass"
              >
                {{ service.badge }}
              </div>
            </div>
          </figure>
          <div class="card-body">
            <h3 class="card-title text-secondary text-2xl flex items-center gap-2">
              <Icon
                :name="service.icon || 'solar:document-add-bold'"
                class="text-primary"
                size="24"
              />
              {{ service.title }}
            </h3>
            <p class="text-gray-600 my-4">
              {{ service.description }}
            </p>
            <ul class="space-y-3 mb-6">
              <li
                v-for="(feature, idx) in service.features"
                :key="idx"
                class="flex items-start gap-2"
              >
                <Icon
                  name="lucide-check-circle"
                  class="text-primary h-5 w-5 mt-0.5 flex-shrink-0"
                />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <div class="card-actions mt-auto">
              <a
                href="#contact"
                class="btn btn-secondary w-full gap-2 group-hover:btn-primary transition-all"
              >
                Learn More
                <Icon
                  name="lucide-arrow-right"
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Services Badge -->
      <div class="flex justify-center mt-12">
        <div class="badge badge-lg badge-outline p-4 gap-2">
          <Icon
            name="lucide-plus-circle"
            class="h-5 w-5 text-primary"
          />
          <span>Additional customized services available upon request</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Bookkeeping Services Section -->
  <section class="py-16 md:py-24 bg-base-100 relative overflow-hidden">
    <!-- Background gradient effect -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-5 rounded-l-full" />
    <div class="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary opacity-5 rounded-tr-full" />

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <div class="badge badge-secondary mb-4 text-white font-semibold py-3 px-4 shadow-md">
          COMPREHENSIVE SOLUTIONS
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-secondary mb-6">
          Why Choose Our Bookkeeping Services?
        </h2>
        <p class="max-w-2xl mx-auto text-gray-600 text-lg">
          Let us handle the numbers so you can focus on growing your business
        </p>
      </div>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(feature, index) in bookkeepingFeatures"
          :key="index"
          class="group hover:scale-[1.02] transition-all duration-300"
        >
          <div class="card bg-white shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden">
            <div class="card-body p-0">
              <div class="grid grid-cols-12">
                <div class="col-span-4 bg-secondary flex items-center justify-center p-6">
                  <div
                    class="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <Icon
                      :name="feature.icon"
                      size="42"
                      class="text-white"
                    />
                  </div>
                </div>
                <div class="col-span-8 p-6">
                  <h3 class="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-600">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Card with Animation -->
      <div class="text-center mt-16 max-w-4xl mx-auto">
        <div class="card bg-accent shadow-xl border-t-4 border-primary">
          <div class="card-body text-center p-8">
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="avatar">
                <div class="w-16 h-16 rounded-xl bg-white p-3">
                  <Icon
                    name="lucide-light-bulb"
                    size="40"
                    class="text-secondary"
                  />
                </div>
              </div>
              <h3 class="text-2xl font-bold text-secondary">
                Ready to get started?
              </h3>
            </div>
            <p class="mb-6 text-lg">
              Our bookkeeping experts are ready to help you streamline your financial processes
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                class="btn btn-primary btn-lg text-white gap-2"
              >
                <Icon
                  name="lucide-calendar"
                  class="h-5 w-5"
                />
                Schedule a Free Consultation
              </a>
              <a
                href="tel:+15551234567"
                class="btn btn-outline btn-secondary btn-lg gap-2"
              >
                <Icon
                  name="lucide-phone"
                  class="h-5 w-5"
                />
                Call Us Now
              </a>
            </div>
            <div class="mt-4 text-sm text-secondary/70">
              No obligation • Free assessment • 24-hour response time
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Service section headlines
const serviceHeadlines = [
  { icon: "lucide-chart-bar", text: "Reduce your tax burden" },
  { icon: "lucide-document", text: "Organize your books" },
];

// Services data
const services = [
  {
    title: "Tax Planning",
    description: "Strategic tax solutions to minimize your liability and maximize savings for your business.",
    image: "https://images.pexels.com/photos/6693645/pexels-photo-6693645.jpeg",
    icon: "lucide-calculator",
    badge: "POPULAR",
    badgeClass: "badge-accent text-secondary",
    features: [
      "Personalized tax strategy",
      "Quarterly planning sessions",
      "Deduction optimization",
      "Business structure planning",
    ],
  },
  {
    title: "Bookkeeping",
    description: "Comprehensive financial record-keeping to keep your business organized and compliant.",
    image: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg",
    icon: "lucide-document-text",
    badge: "ESSENTIAL",
    badgeClass: "badge-primary text-white",
    features: [
      "Monthly reconciliation",
      "Financial reporting",
      "Expense tracking",
      "Cloud-based software",
    ],
  },
  {
    title: "Business Advisory",
    description: "Expert guidance to help your business grow and succeed financially in today's market.",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    icon: "lucide-chart-pie",
    badge: "GROWTH",
    badgeClass: "badge-secondary text-white",
    features: [
      "Strategic planning",
      "Cash flow management",
      "Business performance analysis",
      "Growth strategy development",
    ],
  },
];

// Bookkeeping features
const bookkeepingFeatures = [
  {
    icon: "lucide-clock",
    title: "Save Valuable Time",
    description: "Spend less time on finances and more time growing your business and serving your clients.",
  },
  {
    icon: "lucide-eye",
    title: "Financial Visibility",
    description: "Gain clear visibility into your finances and make data-driven business decisions.",
  },
  {
    icon: "lucide-shield-check",
    title: "Compliance & Accuracy",
    description: "Stay compliant with tax regulations and avoid costly penalties with accurate record keeping.",
  },
  {
    icon: "lucide-cog",
    title: "Process Efficiency",
    description: "Streamline your financial processes with our modern digital solutions and increase efficiency.",
  },
];
</script>