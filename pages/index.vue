<template>
  <div class="h-full sm:h-dvh py-3 sm:py-8 lg:py-8">
    <div class="mx-auto max-w-screen-2xl px-4">
      <div
        class="border-b border-slate-300 dark:border-slate-700 border-dashed pb-6"
      >
        <div class="flex justify-between mb-6">
          <div class="my-auto">
            <div
              class="text-xl font-semibold text-slate-700 dark:text-slate-400 space-x-1 rtl:space-x-reverse"
            >
              Get Things Done
            </div>
            <p
              class="-mt-1 font-regular space-x-1 rtl:space-x-reverse text-slate-500 dark:text-slate-400"
            >
              <small>Handling user Support issues</small>
            </p>
          </div>
          <div class="flex my-auto mb-2">
            <button
              class="bg-white me-2 text-sm font-regular py-2 px-4 rounded-md border border-slate-300 hover:border-slate-200 dark:text-white dark:border-slate-500 dark:hover:border-slate-600 dark:bg-slate-700"
            >
              <span class="me-2">All Issues</span>
            </button>
            <button
              class="text-white bg-[#23a455] text-sm hover:bg-opacity-90 font-regular py-2 px-4 rounded-md"
            >
              <span class="me-2">Report Issue</span>
            </button>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <div class="relative">
            <div
              class="z-20 absolute w-full animate-pulse p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-[#23a455] bg-opacity-70"
            >
              <div class="mb-3">
                <h1 class="text-white text-3xl font-bold">72</h1>
                <p class="text-sm font-medium text-white">
                  <small>Pending Issues</small>
                </p>
              </div>
              <div class="flex justify-between">
                <div class="font-medium text-white">
                  <small>30 Resolved</small>
                </div>
                <div class="font-medium text-white"><small>72%</small></div>
              </div>
              <div class="w-full bg-white rounded-full h-2 bg-opacity-30">
                <div class="bg-white h-2 rounded-full" style="width: 72%"></div>
              </div>
            </div>
            <div
              class="absolute w-full p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-[url('/assets/images/mt.jpg')]"
            >
              <div class="mb-3">
                <h1 class="text-white text-3xl font-bold">72</h1>
                <p class="text-sm font-medium text-white">
                  <small>Pending Issues</small>
                </p>
              </div>
              <div class="flex justify-between">
                <div class="font-medium text-white">
                  <small>30 Resolved</small>
                </div>
                <div class="font-medium text-white"><small>72%</small></div>
              </div>
              <div class="w-full bg-white rounded-full h-2 bg-opacity-30">
                <div class="bg-white h-2 rounded-full" style="width: 72%"></div>
              </div>
            </div>
          </div>

          <div
            class="relative p-6 sm:mt-0 mt-[150px] rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <div class="absolute right-0 top-0 mt-6 me-1">
              <button
                type="button"
                class="text-[#23a455] dark:text-[#23a455] bg-[#23a455] bg-opacity-20 dark:text-[#23a455] me-3 dark:bg-[#23a455] dark:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-full text-sm p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-5 w-5"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M243.6 148.8a6 6 0 0 1-8.4-1.2A53.58 53.58 0 0 0 192 126a6 6 0 0 1 0-12a26 26 0 1 0-25.18-32.5a6 6 0 0 1-11.62-3a38 38 0 1 1 59.91 39.63a65.7 65.7 0 0 1 29.69 22.27a6 6 0 0 1-1.2 8.4M189.19 213a6 6 0 0 1-2.19 8.2a5.9 5.9 0 0 1-3 .81a6 6 0 0 1-5.2-3a59 59 0 0 0-101.62 0a6 6 0 1 1-10.38-6a70.1 70.1 0 0 1 36.2-30.46a46 46 0 1 1 50.1 0A70.1 70.1 0 0 1 189.19 213M128 178a34 34 0 1 0-34-34a34 34 0 0 0 34 34m-58-58a6 6 0 0 0-6-6a26 26 0 1 1 25.18-32.51a6 6 0 1 0 11.62-3a38 38 0 1 0-59.91 39.63A65.7 65.7 0 0 0 11.2 140.4a6 6 0 1 0 9.6 7.2A53.58 53.58 0 0 1 64 126a6 6 0 0 0 6-6"
                  />
                </svg>
              </button>
            </div>
            <div class="space-y-2.5">
              <div
                class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                <span>Usage</span>
              </div>

              <div
                class="text-xl mb-3 font-semibold text-slate-700 dark:text-slate-100"
              >
                Manage Customers
              </div>

              <div class="flex items-center space-x-1">
                <NuxtLink
                  to="/data/customers"
                  class="flex text-[#23a455] dark:text-[#23a455] bg-[#23a455] text-sm bg-opacity-20 me-2 font-medium py-1.5 px-4 rounded"
                >
                  <span class="me-2">View</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                    />
                  </svg>
                </NuxtLink>
                <NuxtLink
                  to="/data/customers/customers"
                  class="flex text-[#23a455] dark:text-[#23a455] bg-[#23a455] text-sm bg-opacity-20 font-medium py-1.5 px-4 rounded"
                >
                  <span class="me-2">Create</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="relative p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <div class="absolute right-0 top-0 mt-6 me-1">
              <button
                type="button"
                class="text-yellow-400 dark:text-yellow-400 bg-yellow-400 bg-opacity-20 me-3 dark:bg-yellow-400 dark:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-full text-sm p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-5 w-5"
                  viewBox="0 0 32 32"
                >
                  <path fill="currentColor" d="M22 17h2v2h-2z" />
                  <path
                    fill="currentColor"
                    d="M28 8H4V5h22V3H4a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M4 26V10h24v3h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8v3Zm24-11v6h-8v-6Z"
                  />
                </svg>
              </button>
            </div>
            <div class="space-y-2.5">
              <div
                class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                <span>Usage</span>
              </div>

              <div
                class="text-xl mb-3 font-semibold text-slate-700 dark:text-slate-100"
              >
                Manage Budgets
              </div>

              <div class="flex items-center space-x-1">
                <NuxtLink
                  to="/data/budgets"
                  class="flex text-yellow-400 dark:text-yellow-500 bg-yellow-400 text-sm bg-opacity-20 me-2 font-medium py-1.5 px-4 rounded"
                >
                  <span class="me-2">View</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    z
                    class="h-5 w-5"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="relative p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <div class="absolute right-0 top-0 mt-6 me-1">
              <button
                type="button"
                class="text-red-500 dark:text-red-500 bg-red-500 bg-opacity-20 dark:text-red-500 me-3 dark:bg-red-500 dark:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-full text-sm p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-5 w-5"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M19.72 10.47a11.65 11.65 0 0 0-6.31.52a.8.8 0 1 0 .59 1.49a10.1 10.1 0 0 1 5.44-.48a.8.8 0 1 0 .28-1.57Z"
                    class="clr-i-outline clr-i-outline-path-1"
                  />
                  <circle
                    cx="25.38"
                    cy="16.71"
                    r="1.36"
                    fill="currentColor"
                    class="clr-i-outline clr-i-outline-path-2"
                  />
                  <path
                    fill="currentColor"
                    d="M35.51 18.63a1 1 0 0 0-.84-.44a3.42 3.42 0 0 1-2.09-1.12a17.4 17.4 0 0 1-2.63-3.78l2.88-4.5A1.89 1.89 0 0 0 33 7a1.77 1.77 0 0 0-1.33-1a10.1 10.1 0 0 0-5.39.75a12.7 12.7 0 0 0-2.72 1.63a17 17 0 0 0-5.16-1.39C11.31 6.3 4.83 10.9 4 17a2.56 2.56 0 0 1-1.38-1.53a1.8 1.8 0 0 1 .14-1.4a1.2 1.2 0 0 1 .43-.43a1.08 1.08 0 0 0-1.12-1.85A3.3 3.3 0 0 0 .91 13a4 4 0 0 0-.33 3.08A4.76 4.76 0 0 0 3 18.95l.92.46a17.6 17.6 0 0 0 1.82 7l.17.38a23 23 0 0 0 3.29 5.09a1 1 0 0 0 .75.34h4.52a1 1 0 0 0 .92-1.38l-.39-.9l1.18.13a20.3 20.3 0 0 0 4 0c.37.6.77 1.2 1.21 1.79a1 1 0 0 0 .8.41h4.34a1 1 0 0 0 .92-1.39c-.17-.4-.34-.83-.47-1.2c-.18-.53-.32-1-.43-1.45A13.2 13.2 0 0 0 29.56 26a12.5 12.5 0 0 0 3 0a1 1 0 0 0 .78-.62l2.26-5.81a1 1 0 0 0-.09-.94m-3.78 5.44a11.4 11.4 0 0 1-2.35-.11a8.2 8.2 0 0 1-2.53-.87a1 1 0 0 0-.93 1.77a12 12 0 0 0 1.29.58a8 8 0 0 1-1.8 1.16l-1.06.48s.49 2.19.82 3.16h-2.38c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.5 18.5 0 0 1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63 2.43.75 2.74h-2.58A20.6 20.6 0 0 1 7.76 26l-.18-.39A14.6 14.6 0 0 1 6 17.48c.54-5.19 6.12-9.11 12.19-8.54a15.5 15.5 0 0 1 5.08 1.48l.62.29l.5-.47A10.3 10.3 0 0 1 27 8.54a8.25 8.25 0 0 1 4-.65l-3.38 5.29l.25.5a21.2 21.2 0 0 0 3.31 4.84a6.5 6.5 0 0 0 2.14 1.39Z"
                    class="clr-i-outline clr-i-outline-path-3"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
              </button>
            </div>
            <div class="space-y-2">
              <div
                class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                <span>Usage</span>
              </div>

              <div
                class="text-xl mb-3 font-semibold text-slate-700 dark:text-slate-100"
              >
                Manage Goals
              </div>

              <div class="flex items-center space-x-1">
                <button
                  class="flex text-red-500 dark:text-red-500 bg-red-500 text-sm bg-opacity-20 me-2 font-medium py-1.5 px-4 rounded"
                >
                  <span class="me-2">View</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            class="relative p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <div class="absolute right-0 top-0 mt-6 me-1">
              <button
                type="button"
                class="text-[#23a455] dark:text-[#23a455] bg-[#23a455] bg-opacity-20 dark:text-[#23a455] me-3 dark:bg-[#23a455] dark:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-full text-sm p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 5h8m-8 4h5m-5 6h8m-8 4h5M3 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
                  />
                </svg>
              </button>
            </div>
            <div class="space-y-2">
              <div
                class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                <span>Data</span>
              </div>

              <div
                class="text-xl mb-3 font-semibold text-slate-700 dark:text-slate-100"
              >
                All Transactions
              </div>

              <div class="flex items-center space-x-1">
                <button
                  class="flex text-[#23a455] dark:text-[#23a455] bg-[#23a455] text-sm bg-opacity-20 me-2 font-medium py-1.5 px-4 rounded"
                >
                  <span class="me-2">View</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            class="relative p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <div class="absolute right-0 top-0 mt-6 me-1">
              <button
                type="button"
                class="text-yellow-400 dark:text-yellow-400 bg-yellow-400 bg-opacity-20 me-3 dark:bg-yellow-400 dark:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-full text-sm p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.75 11.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm4.835-14.414l5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.172q.042.001.082.007q.03.005.059.007c.215.015.427.056.624.138c.057.024.112.056.166.087l.05.029l.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03zM18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5z"
                  />
                </svg>
              </button>
            </div>
            <div class="space-y-2.5">
              <div
                class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                <span>Data</span>
              </div>

              <div
                class="text-xl mb-3 font-semibold text-slate-700 dark:text-slate-100"
              >
                Processed Statements
              </div>

              <div class="flex items-center space-x-1">
                <button
                  class="flex text-yellow-400 dark:text-yellow-500 bg-yellow-400 text-sm bg-opacity-20 me-2 font-medium py-1.5 px-4 rounded"
                >
                  <span class="me-2">View</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-5">
        <div
          class="text-xl mb-1 font-semibold text-slate-700 dark:text-slate-400 space-x-1 rtl:space-x-reverse"
        >
          Administration
        </div>
        <p
          class="mb-3 -mt-1 font-regular space-x-1 rtl:space-x-reverse text-slate-500 dark:text-slate-400"
        >
          <small>System access & reports</small>
        </p>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <div
            class="relative p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <div class="absolute right-0 top-0 mt-6 me-1">
              <button
                type="button"
                class="text-[#23a455] dark:text-[#23a455] bg-[#23a455] bg-opacity-20 dark:text-[#23a455] me-3 dark:bg-[#23a455] dark:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-full text-sm p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879l-.707-.707m5.656 5.656l-.707-.707m-4.242 0l-.707.707m5.656-5.656l-.707.707M12 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>
            <div class="space-y-2.5">
              <div
                class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                <span>Admin</span>
              </div>

              <div
                class="text-xl mb-3 font-semibold text-slate-700 dark:text-slate-100"
              >
                System Access
              </div>

              <div class="flex items-center space-x-1">
                <NuxtLink
                  to="/admin/users"
                  class="flex text-[#23a455] dark:text-[#23a455] bg-[#23a455] text-sm bg-opacity-20 me-2 font-medium py-1.5 px-4 rounded"
                >
                  <span class="me-2">View</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                    />
                  </svg>
                </NuxtLink>
                <NuxtLink
                  to="#"
                  class="flex text-[#23a455] dark:text-[#23a455] bg-[#23a455] text-sm bg-opacity-20 font-medium py-1.5 px-4 rounded"
                >
                  <span class="me-2">Create</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="relative p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
          >
            <div class="absolute right-0 top-0 mt-6 me-1">
              <button
                type="button"
                class="text-yellow-400 dark:text-yellow-400 bg-yellow-400 bg-opacity-20 me-3 dark:bg-yellow-400 dark:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-full text-sm p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.75 2h18.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 21.25 9H2.75A1.75 1.75 0 0 1 1 7.25v-3.5C1 2.784 1.784 2 2.75 2m18.5 1.5H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25M2.75 10a.75.75 0 0 1 .75.75v9.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-9.5a.75.75 0 0 1 1.5 0v9.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-9.5a.75.75 0 0 1 .75-.75"
                  />
                  <path
                    fill="currentColor"
                    d="M9.75 11.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
                  />
                </svg>
              </button>
            </div>
            <div class="space-y-2.5">
              <div
                class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                <span>Admin</span>
              </div>

              <div
                class="text-xl mb-3 font-semibold text-slate-700 dark:text-slate-100"
              >
                Reports
              </div>

              <div class="flex items-center space-x-1">
                <button
                  class="flex text-yellow-400 dark:text-yellow-500 bg-yellow-400 text-sm bg-opacity-20 me-2 font-medium py-1.5 px-4 rounded"
                >
                  <span class="me-2">Generate</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const series2 = ref([
  {
    name: "series1",
    data: [],
  },
  {
    name: "Customers",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
]);
const options2 = ref({
  colors: ["#23a455"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },

  grid: {
    padding: {
      left: 0,
      right: 0,
    },
    strokeDashArray: 3,
  },
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: [1.5, 1.5],
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
});
const series = ref([44, 55, 13, 33]);
const colors = ref(["#23a455", "#eab308", "#ef4444", "#0ea5e9"]);
const options = ref({
  chart: {
    width: 380,
    type: "donut",
  },
  // colors: ["#23a455", "#eab308", "#ef4444", "#0ea5e9"],
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        colors: ["#23a455"],
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: "bottom",
    offsetY: 0,
    height: 20,
  },
});
</script>
