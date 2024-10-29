// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import PrimeVue from "primevue/config";
import { definePreset } from "@primevue/themes";
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{green.50}",
      100: "{green.100}",
      200: "{green.200}",
      300: "{green.300}",
      400: "{green.500}",
      500: "{green.600}",
      600: "{green.700}",
      700: "{green.700}",
      800: "{green.800}",
      900: "{green.900}",
      950: "{green.950}",
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "{gray.50}",
          100: "{gray.100}",
          200: "{gray.200}",
          300: "{gray.300}",
          400: "{gray.400}",
          500: "{gray.500}",
          600: "{gray.600}",
          700: "{gray.700}",
          800: "{gray.700}",
          900: "{gray.800}",
          950: "{gray.800}",
        },
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "{gray.50}",
          100: "{gray.100}",
          200: "{gray.200}",
          300: "{gray.300}",
          400: "{gray.400}",
          500: "{gray.500}",
          600: "{gray.600}",
          700: "{gray.700}",
          800: "{gray.700}",
          900: "{gray.800}",
          950: "{gray.800}",
        },
      },
    },
  },
});
export default defineNuxtConfig({
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
        preset: MyPreset,
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
