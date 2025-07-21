<template>
  <div>
    <!-- Modern Navigation Bar -->
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-base-100/95 backdrop-blur-sm shadow-sm px-4 md:px-8 py-3 transition-all duration-300"
    >
      <div class="container mx-auto">
        <div class="navbar px-0">
          <div class="navbar-start">
            <div class="dropdown lg:hidden">
              <label
                tabindex="0"
                class="btn btn-ghost btn-circle"
              >
                <Icon
                  name="lucide-bars-3"
                  class="h-6 w-6"
                />
              </label>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
              >
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div class="flex items-center gap-2">
              <Icon
                name="mdi:calculator-variant"
                class="text-primary text-3xl"
              />
              <div class="text-2xl font-bold text-secondary">
                TaxPro
              </div>
            </div>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal gap-2 px-1 text-secondary font-medium">
              <li>
                <a
                  href="#services"
                  class="hover:text-primary transition-colors"
                >Services</a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  class="hover:text-primary transition-colors"
                >Testimonials</a>
              </li>
              <li>
                <a
                  href="#about"
                  class="hover:text-primary transition-colors"
                >About Us</a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="hover:text-primary transition-colors"
                >Contact</a>
              </li>
            </ul>
          </div>
          <div class="navbar-end">
            <a
              href="#contact"
              class="btn btn-primary btn-sm md:btn-md text-white"
            >
              Get Started
              <Icon
                name="lucide-arrow-right"
                class="w-4 h-4 ml-1"
              />
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Spacer to account for fixed header -->
    <div class="h-16 md:h-20" />

    <!-- Hero Section with Enhanced UI -->
    <section
      class="hero  transition-all duration-1000 starting:scale-125 starting:opacity-0 starting:blur-sm min-h-[90vh] bg-gradient-to-br from-light-pink via-base-100 to-light-gray py-12 md:py-20 relative overflow-hidden"
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

    <!-- Know How We Do It Section - Modern CTA Banner -->
    <section class="py-16 bg-gradient-to-r from-secondary to-secondary/80 text-white relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="md:w-7/12">
            <div class="badge badge-accent mb-4 text-secondary font-semibold py-3 px-4">
              TAX STRATEGY INSIGHTS
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              Want to know how we do it?
            </h2>
            <p class="text-white/90 text-lg mb-6 max-w-xl">
              Our proven tax strategies have helped businesses save millions.
              See our approach in action with a personalized demo tailored to your industry.
            </p>
            <div class="flex flex-wrap gap-4 mb-6">
              <div class="badge badge-outline badge-lg gap-2">
                <Icon
                  name="lucide-check-circle"
                  class="h-5 w-5 text-accent"
                />
                <span>Step-by-step process</span>
              </div>
              <div class="badge badge-outline badge-lg gap-2">
                <Icon
                  name="lucide-check-circle"
                  class="h-5 w-5 text-accent"
                />
                <span>Industry-specific examples</span>
              </div>
              <div class="badge badge-outline badge-lg gap-2">
                <Icon
                  name="lucide-check-circle"
                  class="h-5 w-5 text-accent"
                />
                <span>Actual savings calculation</span>
              </div>
            </div>
          </div>

          <div class="md:w-5/12">
            <div class="card bg-white text-secondary shadow-2xl">
              <div class="card-body">
                <h3 class="card-title text-xl mb-4 flex items-center gap-2">
                  <Icon
                    name="lucide-presentation-chart-line"
                    class="h-6 w-6 text-primary"
                  />
                  Schedule a Demo
                </h3>
                <p class="text-gray-600 mb-4">
                  See our proven strategies in action with a personalized demo
                </p>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Your Email</span>
                  </label>
                  <div class="join w-full">
                    <input
                      type="email"
                      placeholder="email@company.com"
                      class="input input-bordered join-item w-full"
                    >
                    <button class="btn btn-primary join-item text-white">
                      <Icon
                        name="lucide-arrow-right"
                        class="h-5 w-5"
                      />
                    </button>
                  </div>
                </div>
                <div class="text-xs text-gray-500 mt-2">
                  We respect your privacy. No spam, ever.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative wave divider -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          class="fill-light-pink"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          />
        </svg>
      </div>
    </section>

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

      <!-- Decorative wave divider -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          class="fill-light-gray"
        >
          <path
            d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,69.3C1120,64,1280,64,1360,64L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          />
        </svg>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section
      id="testimonials"
      class="py-16 md:py-24 bg-light-gray relative overflow-hidden"
    >
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5 pointer-events-none">
        <div
          class="absolute inset-0"
          style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E');"
        />
      </div>

      <!-- Large quote decorative element -->
      <div class="absolute left-0 top-10 text-primary/5 pointer-events-none">
        <Icon
          name="lucide-quote-solid"
          size="300"
        />
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <div class="badge badge-primary mb-4 text-white font-semibold py-3 px-4 shadow-md">
            TESTIMONIALS
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Client Success Stories
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 text-lg">
            Don't just take our word for it. See what our clients have to say about our services.
          </p>
        </div>

        <!-- Modern testimonial carousel -->
        <div class="max-w-5xl mx-auto">
          <!-- Desktop view: All testimonials in a row -->
          <div class="hidden lg:grid grid-cols-3 gap-6">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="`desktop-${index}`"
              class="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div class="card-body">
                <!-- Quote icon -->
                <div class="absolute top-4 right-4 opacity-10">
                  <Icon
                    name="lucide-quote-solid"
                    size="64"
                  />
                </div>

                <div class="flex items-start gap-4 mb-4">
                  <div class="avatar">
                    <div class="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        :src="testimonial.avatar"
                        :alt="testimonial.name"
                      >
                    </div>
                  </div>
                  <div>
                    <h4 class="font-bold text-xl text-secondary">
                      {{ testimonial.name }}
                    </h4>
                    <p class="text-gray-500 text-sm">
                      {{ testimonial.title }}
                    </p>
                    <!-- Star rating -->
                    <div class="rating rating-sm mt-1">
                      <Icon
                        v-for="star in 5"
                        :key="`star-${index}-${star}`"
                        name="lucide-star-solid"
                        class="text-accent w-4 h-4"
                      />
                    </div>
                  </div>
                </div>

                <p class="text-gray-600 italic border-l-4 border-primary/20 pl-4 py-1">
                  "{{ testimonial.quote }}"
                </p>
              </div>
            </div>
          </div>

          <!-- Mobile/tablet carousel view -->
          <div class="lg:hidden">
            <div class="carousel w-full">
              <div
                v-for="(testimonial, index) in testimonials"
                :id="`testimonial-${index + 1}`"
                :key="`mobile-${index}`"
                class="carousel-item relative w-full"
              >
                <div class="card bg-white shadow-xl w-full max-w-lg mx-auto">
                  <div class="card-body text-center">
                    <div class="avatar mx-auto mb-4">
                      <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          :src="testimonial.avatar"
                          :alt="testimonial.name"
                        >
                      </div>
                    </div>
                    <div class="rating justify-center mb-4">
                      <Icon
                        v-for="star in 5"
                        :key="star"
                        name="lucide-star-solid"
                        class="text-accent w-5 h-5"
                      />
                    </div>
                    <p class="text-gray-600 text-lg italic mb-6">
                      "{{ testimonial.quote }}"
                    </p>
                    <h4 class="font-bold text-xl text-secondary">
                      {{ testimonial.name }}
                    </h4>
                    <p class="text-gray-500">
                      {{ testimonial.title }}
                    </p>
                  </div>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    :href="`#testimonial-${index === 0 ? testimonials.length : index}`"
                    class="btn btn-circle bg-white/80 backdrop-blur-sm"
                  >❮</a>
                  <a
                    :href="`#testimonial-${index === testimonials.length - 1 ? 1 : index + 2}`"
                    class="btn btn-circle bg-white/80 backdrop-blur-sm"
                  >❯</a>
                </div>
              </div>
            </div>

            <div class="flex justify-center mt-8">
              <div class="join">
                <a
                  v-for="(_, index) in testimonials"
                  :key="`dot-${index}`"
                  :href="`#testimonial-${index + 1}`"
                  class="join-item btn btn-sm"
                >{{ index + 1 }}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional testimonials call to action -->
        <div class="text-center mt-12">
          <a
            href="#"
            class="btn btn-outline btn-secondary gap-2 group"
          >
            Read More Success Stories
            <Icon
              name="lucide-arrow-right"
              class="w-4 h-4 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>

      <!-- Decorative wave divider -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          class="fill-primary"
        >
          <path
            d="M0,64L80,64C160,64,320,64,480,58.7C640,53,800,43,960,42.7C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          />
        </svg>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      id="contact"
      class="py-16 md:py-24 bg-primary text-white relative overflow-hidden"
    >
      <!-- Background elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <div
          class="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <!-- Floating Elements -->
      <div class="absolute right-10 top-10 animate-bounce-slow">
        <Icon
          name="lucide-document-check"
          class="h-16 w-16 text-white opacity-10"
        />
      </div>
      <div class="absolute left-10 bottom-10 animate-pulse">
        <Icon
          name="lucide-calculator"
          class="h-20 w-20 text-white opacity-10"
        />
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-center">
          <div class="lg:w-1/2">
            <div class="badge badge-accent mb-4 text-secondary font-semibold py-3 px-4 shadow-md">
              FREE CONSULTATION
            </div>
            <h2 class="text-3xl md:text-5xl font-bold mb-6">
              Ready to optimize your tax strategy?
            </h2>
            <p class="text-white/90 text-lg mb-8 max-w-lg">
              Schedule a no-obligation consultation with our tax experts to discover how we can help your business save
              money and stay compliant.
            </p>

            <!-- Benefits list with animated check marks -->
            <ul class="space-y-4 mb-8">
              <li
                v-for="(benefit, index) in consultationBenefits"
                :key="index"
                class="flex items-start gap-3 group"
              >
                <div class="bg-white/10 p-2 rounded-full group-hover:bg-accent transition-colors">
                  <Icon
                    name="lucide-check"
                    class="h-5 w-5 text-white"
                  />
                </div>
                <div>
                  <span class="text-lg font-medium">{{ benefit }}</span>
                  <p class="text-white/70 text-sm mt-1">
                    Get personalized insights for your situation
                  </p>
                </div>
              </li>
            </ul>

            <!-- Trust indicators -->
            <div class="flex items-center gap-6 mb-8">
              <div class="flex -space-x-4">
                <div class="avatar placeholder">
                  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <span>JD</span>
                  </div>
                </div>
                <div class="avatar placeholder">
                  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <span>SM</span>
                  </div>
                </div>
                <div class="avatar placeholder">
                  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <span>+5</span>
                  </div>
                </div>
              </div>
              <div>
                <div class="rating rating-sm mb-1">
                  <Icon
                    v-for="star in 5"
                    :key="`cta-star-${star}`"
                    name="lucide-star-solid"
                    class="text-accent h-4 w-4"
                  />
                </div>
                <p class="text-sm text-white/80">
                  Join 1,200+ satisfied clients
                </p>
              </div>
            </div>
          </div>

          <div class="lg:w-1/2 w-full">
            <div class="card bg-white text-secondary shadow-2xl border-t-4 border-accent">
              <div class="card-body p-8">
                <h3 class="card-title text-2xl mb-6">
                  Book Your Call
                </h3>

                <div class="form-control mb-4">
                  <label class="label">
                    <span class="label-text font-medium">Your Name</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Icon
                        name="lucide-user"
                        class="h-5 w-5 text-gray-400"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      class="input input-bordered pl-10 w-full"
                    >
                  </div>
                </div>

                <div class="form-control mb-4">
                  <label class="label">
                    <span class="label-text font-medium">Email Address</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Icon
                        name="lucide-envelope"
                        class="h-5 w-5 text-gray-400"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      class="input input-bordered pl-10 w-full"
                    >
                  </div>
                </div>

                <div class="form-control mb-6">
                  <label class="label">
                    <span class="label-text font-medium">Phone Number</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Icon
                        name="lucide-phone"
                        class="h-5 w-5 text-gray-400"
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      class="input input-bordered pl-10 w-full"
                    >
                  </div>
                </div>

                <!-- Available days selection -->
                <div class="mb-6">
                  <label class="label">
                    <span class="label-text font-medium">Available Days</span>
                  </label>
                  <div class="grid grid-cols-3 gap-2">
                    <button
                      v-for="(day, index) in scheduleDays"
                      :key="index"
                      :class="['btn', index === 1 ? 'btn-secondary text-white' : 'btn-outline']"
                    >
                      {{ day }}
                    </button>
                  </div>
                </div>

                <div class="card-actions">
                  <button
                    class="btn btn-primary w-full text-white btn-lg shadow-lg hover:shadow-xl transition-all gap-2"
                    @click="scheduleConsultation"
                  >
                    <Icon
                      name="lucide-calendar"
                      class="h-5 w-5"
                    />
                    Schedule Now
                  </button>
                </div>

                <div class="text-center text-gray-500 text-sm mt-4">
                  <p>
                    By scheduling, you agree to our <a
                      href="#"
                      class="link link-hover text-primary"
                    >Terms of
                      Service</a> and <a
                      href="#"
                      class="link link-hover text-primary"
                    >Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Expert Section -->
    <section
      id="about"
      class="py-16 md:py-24 bg-base-100 relative overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/5 to-transparent" />
      <div class="absolute bottom-0 right-0 w-1/3 h-1/3 bg-light-pink rounded-tl-full opacity-50" />

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <div class="badge badge-secondary mb-4 text-white font-semibold py-3 px-4 shadow-md">
            LEADERSHIP
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Meet Your Expert
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 text-lg">
            Work directly with industry-leading tax professionals
          </p>
        </div>

        <div class="card lg:card-side bg-base-100 shadow-xl max-w-6xl mx-auto border border-gray-100">
          <figure class="lg:w-2/5 relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5669788/pexels-photo-5669788.jpeg"
              alt="Shaan Rizvi"
              class="h-full w-full object-cover transition-transform hover:scale-105 duration-700"
            >
            <!-- Expert badge -->
            <div class="absolute top-4 left-4">
              <div class="badge badge-primary gap-2 text-white font-bold py-3 px-4 shadow-lg">
                <Icon
                  name="lucide-star"
                  class="h-5 w-5"
                />
                TOP RATED
              </div>
            </div>
            <!-- Social links -->
            <div class="absolute bottom-4 left-4 flex gap-2">
              <a
                v-for="(social, index) in expert.socialLinks"
                :key="index"
                :href="social.link"
                class="btn btn-circle btn-sm bg-white/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-colors"
              >
                <Icon
                  :name="social.icon"
                  size="16"
                />
              </a>
            </div>
          </figure>
          <div class="card-body lg:w-3/5">
            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div class="avatar">
                <div class="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://i.pravatar.cc/150?img=33"
                    alt="Shaan Rizvi"
                  >
                </div>
              </div>
              <div>
                <h3 class="card-title text-2xl md:text-3xl font-bold text-secondary">
                  {{ expert.name }}
                </h3>
                <div class="badge badge-primary text-white py-2 px-3 mt-2">
                  {{ expert.title }}
                </div>
              </div>
            </div>

            <div class="divider" />

            <p class="text-gray-600 text-lg mb-8">
              {{ expert.bio }}
            </p>

            <!-- Expert stats in modern cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div
                v-for="(stat, index) in expert.stats"
                :key="index"
                class="card bg-base-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div class="card-body p-4 text-center">
                  <div
                    :class="stat.color"
                    class="stat-value text-3xl font-bold"
                  >
                    {{ stat.value }}
                  </div>
                  <div class="stat-title text-sm font-medium mt-1">
                    {{ stat.title }}
                  </div>
                  <div class="stat-desc text-xs mt-1">
                    {{ stat.desc }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Credentials with modern styling -->
            <div class="mb-8">
              <h4 class="font-semibold text-lg text-secondary mb-4 flex items-center gap-2">
                <Icon
                  name="lucide-academic-cap"
                  class="h-5 w-5 text-primary"
                />
                Credentials & Certifications
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div
                  v-for="(credential, index) in credentials"
                  :key="index"
                  class="flex items-center gap-2 bg-base-100 p-3 rounded-lg border border-gray-100 hover:border-primary/30 transition-colors"
                >
                  <Icon
                    name="lucide-check-circle"
                    class="text-primary h-5 w-5 flex-shrink-0"
                  />
                  <span class="text-gray-700">{{ credential }}</span>
                </div>
              </div>
            </div>

            <div class="card-actions mt-6">
              <a
                href="#contact"
                class="btn btn-primary text-white gap-2 btn-lg"
              >
                <Icon
                  name="lucide-calendar"
                  class="h-5 w-5"
                />
                Schedule a Meeting with {{ expert.name.split(' ')[0] }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Footer -->
    <footer class="bg-secondary text-white">
      <!-- Footer main content -->
      <div class="container mx-auto py-16 px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand column -->
          <div class="space-y-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="bg-white p-2 rounded-lg">
                <Icon
                  name="mdi:calculator-variant"
                  class="text-primary text-2xl"
                />
              </div>
              <div class="text-3xl font-bold text-white">
                TaxPro
              </div>
            </div>
            <p class="text-white/80">
              Expert tax planning and bookkeeping services to help your business thrive
              financially.
            </p>
            <div class="flex gap-4">
              <a
                href="#"
                class="btn btn-circle btn-sm btn-outline border-white hover:bg-primary hover:border-primary"
              >
                <Icon
                  name="logos:facebook"
                  size="20"
                />
              </a>
              <a
                href="#"
                class="btn btn-circle btn-sm btn-outline border-white hover:bg-primary hover:border-primary"
              >
                <Icon
                  name="logos:twitter"
                  size="20"
                />
              </a>
              <a
                href="#"
                class="btn btn-circle btn-sm btn-outline border-white hover:bg-primary hover:border-primary"
              >
                <Icon
                  name="logos:linkedin-icon"
                  size="20"
                />
              </a>
            </div>

            <!-- Newsletter signup -->
            <div class="mt-8">
              <h4 class="text-lg font-bold mb-3">
                Subscribe to our newsletter
              </h4>
              <div class="join">
                <input
                  type="email"
                  placeholder="Your email"
                  class="input join-item w-full"
                >
                <button class="btn join-item btn-primary text-white">
                  <Icon
                    name="lucide-paper-airplane"
                    class="h-5 w-5"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Services column -->
          <div>
            <h3 class="footer-title text-white text-xl font-bold mb-6">
              Our Services
            </h3>
            <ul class="space-y-4">
              <li
                v-for="(item, index) in ['Tax Planning', 'Bookkeeping', 'Business Advisory', 'Financial Reporting']"
                :key="index"
                class="group"
              >
                <a
                  href="#services"
                  class="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Icon
                    name="lucide-chevron-right"
                    class="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  />
                  <span>{{ item }}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Quick links column -->
          <div>
            <h3 class="footer-title text-white text-xl font-bold mb-6">
              Quick Links
            </h3>
            <ul class="space-y-4">
              <li
                v-for="(item, index) in ['About Us', 'Testimonials', 'FAQs', 'Blog', 'Careers']"
                :key="index"
                class="group"
              >
                <a
                  href="#"
                  class="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Icon
                    name="lucide-chevron-right"
                    class="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  />
                  <span>{{ item }}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact column -->
          <div>
            <h3 class="footer-title text-white text-xl font-bold mb-6">
              Contact
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="bg-white/10 p-2 rounded-full mt-1">
                  <Icon
                    name="lucide-phone"
                    class="text-accent h-4 w-4"
                  />
                </div>
                <span>(555) 123-4567</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="bg-white/10 p-2 rounded-full mt-1">
                  <Icon
                    name="lucide-envelope"
                    class="text-accent h-4 w-4"
                  />
                </div>
                <span>info@taxpro.com</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="bg-white/10 p-2 rounded-full mt-1">
                  <Icon
                    name="lucide-map-pin"
                    class="text-accent h-4 w-4"
                  />
                </div>
                <span>123 Financial St, Suite 100<br>New York, NY 10001</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="bg-white/10 p-2 rounded-full mt-1">
                  <Icon
                    name="lucide-clock"
                    class="text-accent h-4 w-4"
                  />
                </div>
                <div>
                  <p>Mon-Fri: 9AM - 6PM</p>
                  <p>Sat: By appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer bottom -->
      <div class="py-6 border-t border-white/10">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p>© {{ new Date().getFullYear() }} TaxPro | All Rights Reserved</p>
            <div class="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                class="text-sm hover:text-accent transition-colors"
              >Privacy Policy</a>
              <a
                href="#"
                class="text-sm hover:text-accent transition-colors"
              >Terms of Service</a>
              <a
                href="#"
                class="text-sm hover:text-accent transition-colors"
              >Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Back to top button -->
      <a
        href="#"
        class="btn btn-circle btn-sm btn-primary text-white fixed bottom-8 right-8 shadow-lg"
      >
        <Icon
          name="lucide-arrow-up"
          class="h-5 w-5"
        />
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Set page metadata
useHead({
  title: "Tax Planning & Bookkeeping Services - TaxPro",
  meta: [
    { name: "description", content: "Expert tax planning and bookkeeping services to help your business grow and save money." },
    { name: "keywords", content: "tax planning, bookkeeping, accounting, tax preparation, business advisory" },
  ],
});

// Intersection Observer for scroll animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
});

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

// Testimonials data
const testimonials = [
  {
    name: "Jane Cooper",
    title: "Small Business Owner, Cooper Design",
    quote: "Their tax planning strategies saved our business over $45,000 last year alone. The team is incredibly knowledgeable and responsive. Working with them has been one of the best business decisions we've made.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Michael Brown",
    title: "Startup Founder, TechLaunch",
    quote: "The bookkeeping service has been a game-changer for our startup. We now have complete visibility into our finances, which has enabled us to make better strategic decisions. Their team is prompt, accurate, and a joy to work with.",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Sarah Johnson",
    title: "E-commerce Owner, Bloom Boutique",
    quote: "Professional, responsive, and incredibly knowledgeable. Their team helped me navigate complex tax situations as my e-commerce business expanded internationally. I'm so glad I found them for my business needs.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

// Consultation benefits
const consultationBenefits = [
  "30-minute free consultation",
  "Personalized tax assessment",
  "No obligation, guaranteed savings",
];

// Schedule days
const scheduleDays = ["Today", "Tomorrow", "Next Week"];

// Expert data
const expert = {
  name: "Shaan Rizvi",
  title: "TAX EXPERT & BUSINESS ADVISOR",
  bio: "With over 10 years in tax planning, I help clients maximize deductions and minimize tax liabilities through strategic planning and compliance. My mission is to ensure small business owners keep more of what they earn.",
  image: "https://images.pexels.com/photos/5669788/pexels-photo-5669788.jpeg",
  avatar: "https://i.pravatar.cc/150?img=33",
  stats: [
    {
      title: "Clients",
      value: "1,000+",
      desc: "Businesses helped",
      color: "text-primary",
    },
    {
      title: "Savings",
      value: "$300M+",
      desc: "Tax savings generated",
      color: "text-secondary",
    },
    {
      title: "Experience",
      value: "10+ yrs",
      desc: "Industry expertise",
      color: "text-accent",
    },
  ],
  credentials: [
    "Certified Public Accountant (CPA)",
    "Master's in Taxation from NYU",
    "Specializing in small business tax strategies",
    "Former advisor for Fortune 500 companies",
  ],
  socialLinks: [
    { icon: "logos:linkedin-icon", link: "#" },
    { icon: "logos:twitter", link: "#" },
    { icon: "simple-icons:facebook", link: "#" },
  ],
};

// User feedback states
const formSubmitted = ref(false);
const isVideoPlaying = ref(false);

// Function for video playing
const playVideo = () => {
  isVideoPlaying.value = true;
  alert("Video would play here in production!");
};

// Function to schedule consultation
const scheduleConsultation = () => {
  formSubmitted.value = true;
  alert("Thank you for scheduling a consultation. Our team will contact you shortly!");
};

// Add these CSS animations at the end of the script section
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

<style>

</style>
