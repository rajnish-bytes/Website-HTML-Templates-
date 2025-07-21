// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/icon"],
  devtools: { enabled: true },
  app: {
    head: {
      title: "TaxPro - Tax Planning & Bookkeeping Services",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Professional tax planning and bookkeeping services for businesses" },
        { name: "keywords", content: "tax planning, bookkeeping, accounting, tax preparation, financial services, business tax, personal tax" },
        { name: "author", content: "TaxPro Services" },
        { name: "og:title", content: "TaxPro - Tax Planning & Bookkeeping Services" },
        { name: "og:description", content: "Professional tax planning and bookkeeping services for businesses and individuals" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://taxpro.com" },
        { name: "og:image", content: "/images/og-image.jpg" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  typescript: {
    strict: true,
    // For build time checking
    // typeCheck: "build",
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
  },
});
