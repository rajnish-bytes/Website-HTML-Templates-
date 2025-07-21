<template>
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
</template>

<script setup lang="ts">
// Header component for site navigation
</script>