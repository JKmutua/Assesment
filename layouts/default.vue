<template>
  <div class="bg-white dark:bg-gray-900">
    <nav
      class="fixed w-full bg-[url('/assets/images/header.png')] bg-no-repeat bg-cover"
    >
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="text-white font-bold text-2xl">
          Inua Mkulima Subsidy Program
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg sm:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
          >
            <li>
              <p
                class="font-bold text-white mt-2 block py-2 px-3"
                aria-current="page"
              >
                Loged In As:
              </p>
            </li>
            <li>
              <a
                href="#"
                class="font-bold text-white mt-2 block py-2 px-3 text-gray-900"
                >KIMATHI</a
              >
            </li>
            <li>
              <button
                class="block flex bg-white bg-opacity-20 text-white border rounded border-white px-3 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="h-5 w-5 me-2"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9l-4-4m4 4l-4 4m4-4H9"
                  />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="">
      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-20 left-0 z-40 w-60 transition-transform -translate-x-full sm:translate-x-0 border-e border-gray-200 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="h-screen w-full bg-white dark:bg-gray-800 py-3.5">
          <div class="">
            <div class="mb-6">
              <NuxtLink
                to="/"
                role="button"
                activeClass="ps-6 py-4 border-s-8 border-amber-500 text-gray-500"
                class="ps-6 py-4 text-gray-400"
              >
                <span class="font-semibold text-xl"> Dashboard </span>
              </NuxtLink>
            </div>
          </div>
          <div class="mb-6">
            <NuxtLink
              to="/data/transactions"
              role="button"
              activeClass="ps-6 py-4 border-s-8 border-amber-500 text-gray-500"
              class="ps-6 py-4 text-gray-400"
            >
              <span class="font-semibold text-xl"> Transactions </span>
            </NuxtLink>
          </div>
          <div class="mb-6">
            <NuxtLink
              to="/data/reports"
              role="button"
              activeClass="ps-6 py-4 border-s-8 border-amber-500 text-gray-500"
              class="ps-6 py-4 text-gray-400"
            >
              <span class="font-semibold text-xl"> Reports </span>
            </NuxtLink>
          </div>
        </div>
      </aside>

      <div class="sm:ml-60 bg-slate-100 dark:bg-gray-900" id="main-content">
        <div class="pt-28 mx-auto max-w-screen-2xl px-4">
          <div class="flex justify-between">
            <div class="flex">
              <button
                class="lg:hidden md:hidden text-[#23a455] mt-0.5 me-3"
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  class="h-7 w-7"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 5h12M4 12h16M4 19h8"
                    color="currentColor"
                  />
                </svg>
              </button>
              <button
                class="hidden lg:block md:block text-[#23a455] mt-0.5 me-3"
                @click="toggle_aside()"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  class="h-7 w-7"
                  v-if="toggled_main"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="m19.03 4.28l-11 11l-.686.72l.687.72l11 11l1.44-1.44L10.187 16l10.28-10.28z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  v-else
                  class="h-7 w-7"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 5h12M4 12h16M4 19h8"
                    color="currentColor"
                  />
                </svg>
              </button>
              <h1
                class="text-2xl font-bold text-gray-900 dark:text-white mt-0.5 capitalize"
              ></h1>
            </div>
          </div>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
const token = ref(useCookie("token"));
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const router = useRouter();
const logout = () => {
  logUserOut();
};
function containsNumbers(str) {
  return /\d/.test(str); // \d matches any digit (0-9)
}
onMounted(() => {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }
});
const toggled_main = ref(true);
function toggle_aside() {
  let aside = document.getElementById("sidebar-multi-level-sidebar");
  let mainContent = document.getElementById("main-content");
  if (aside.classList.contains("hidden")) {
    aside.classList.remove("hidden");
    mainContent.classList.add("sm:ml-60");
    this.toggled_main = true;
  } else {
    aside.classList.add("hidden");
    mainContent.classList.remove("sm:ml-60");
    this.toggled_main = false;
  }
}

function toggle_light_mode() {
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  var themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
</script>
