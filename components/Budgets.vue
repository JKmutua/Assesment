<template>
  <div>
    <div class="flex justify-between mb-4">
      <div class="flex my-auto">
        <div>
          <h1 class="font-medium text-sm uppercase">Customer Budgets</h1>
          <p class="text-gray-500 dark:text-gray-400">
            <small>All Customer Budgets</small>
          </p>
        </div>
      </div>
      <div class="flex my-auto mb-2">
        <button
          class="bg-white me-2 text-sm font-regular py-2 px-4 rounded-lg border border-gray-300 hover:border-gray-200 dark:text-white dark:border-gray-500 dark:hover:border-gray-600 dark:bg-gray-700"
        >
          <span class="me-2">Cancel</span>
        </button>
        <button
          class="text-white bg-[#23a455] text-sm hover:bg-opacity-90 font-regular py-2 px-4 rounded-lg"
        >
          <span class="me-2">Save</span>
        </button>
      </div>
    </div>
    <div class="mx-auto max-w-screen-sm px-4 mt-12 mb-6">
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4s7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    December Budget
                  </h1>
                  <p class="-mt-1 text-green-500 dark:text-green-400 text-sm">
                    <small>Expired</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4s7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    December Budget
                  </h1>
                  <p class="-mt-1 text-green-500 dark:text-green-400 text-sm">
                    <small>Expired</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4s7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    December Budget
                  </h1>
                  <p class="-mt-1 text-green-500 dark:text-green-400 text-sm">
                    <small>Expired</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4s7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">Car Budget</h1>
                  <p class="-mt-1 text-red-500 dark:text-red-400 text-sm">
                    <small>Overspend</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4s7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    December Budget
                  </h1>
                  <p class="-mt-1 text-green-500 dark:text-green-400 text-sm">
                    <small>Expired</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4s7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">Jan Budget</h1>
                  <p class="-mt-1 text-amber-500 dark:text-gray-400 text-sm">
                    <small>Inprogress</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4s7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">Jan Budget</h1>
                  <p class="-mt-1 text-amber-500 dark:text-gray-400 text-sm">
                    <small>Inprogress</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between my-8">
        <div class="dark:bg-gray-700 p-1 rounded-md">
          <div class="bg-[#23a455] py-2 rounded-md px-4 text-white">1</div>
        </div>
        <div class="">
          <div class="bg-gray-100 dark:bg-gray-700 p-1 rounded-md flex">
            <div
              class="bg-white dark:bg-gray-800 px-1.5 me-2 py-1.5 px rounded-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.75 16.25a.74.74 0 0 1-.53-.22l-3.5-3.5a.75.75 0 0 1 0-1.06L13.22 8a.75.75 0 0 1 1.06 1l-3 3l3 3a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.19"
                  />
                </svg>
              </span>
            </div>
            <div class="bg-white dark:bg-gray-800 px-1.5 py-1.5 px rounded-md">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.25 16.25a.74.74 0 0 1-.53-.25a.75.75 0 0 1 0-1.06l3-3l-3-3A.75.75 0 0 1 10.78 8l3.5 3.5a.75.75 0 0 1 0 1.06L10.78 16a.74.74 0 0 1-.53.25"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
