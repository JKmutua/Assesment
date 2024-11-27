// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import PrimeVue from "primevue/config";
import { definePreset } from "@primevue/themes";

export default defineNuxtConfig({
  // app: {
  //   layoutTransition: { name: "layout", mode: "out-in" },
  // },

  ssr: false,
  devtools: { enabled: true },
  modules: [
    // ...
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    // "@nuxt/ui",
    "@primevue/nuxt-module",
  ],
  primevue: {
    /* Configuration */
    options: {
      theme: {
        options: { darkModeSelector: ".dark" },
      },
    },
  },
  css: ["~/assets/css/main.css", "primeicons/primeicons.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

// #00223c
// #526070

//#23a455
//#008100
