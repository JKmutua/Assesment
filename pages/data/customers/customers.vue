<template>
  <div class="h-screen bg-gray-100 dark:bg-gray-900 py-3 sm:py-8 lg:py-8">
    <div class="mx-auto max-w-screen-xl px-4">
      <div class="flex justify-between mb-4">
        <div class="my-auto">
          <h1 class="mt-1.5 text-xl">New Customer</h1>
          <p class="text-sm text-gray-500">Create a new customer record</p>
        </div>
        <div class="flex my-auto mb-2">
          <button
            class="bg-white flex me-2 text-sm font-regular py-2 px-4 rounded-lg border border-gray-300 hover:border-gray-200 dark:text-white dark:border-gray-500 dark:hover:border-gray-600 dark:bg-gray-700"
          >
            <i
              class="pi pi-arrow-left my-auto me-1.5"
              style="font-size: 0.5rem"
            ></i>
            <span class="me-2">Cancel</span>
          </button>
        </div>
      </div>
      <div
        class="bg-white dark:bg-gray-800 rounded-md border dark:border-gray-700"
      >
        <div class="grid grid-cols-2 m-0">
          <div
            class="sm:col-span-1 col-span-2 bg-gray-50 dark:bg-gray-800 py-6 border-e dark:border-gray-700"
          >
            <div class="mx-auto max-w-screen-sm px-20 mb-6">
              <div class="flex justify-center mt-10">
                <span
                  class="my-auto text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-full me-2 relative"
                >
                  <button
                    id="theme-toggle"
                    type="button"
                    class="text-gray-600 dark:text-gray-400 bg-white border border-gray-200 dark:border-gray-700 hover:bg-green-100 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1 absolute top-16 right-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      class="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                      />
                    </svg>
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-20 w-20"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"
                      />
                    </g>
                  </svg>
                </span>
              </div>

              <div class="grid gap-4 mb-6 lg:grid-cols-2 md:grid-cols-2 mt-12">
                <div class="relative">
                  <div class="absolute top-2 left-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      class="h-5 w-5 text-gray-400"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 text-gray-500 font-regular text-sm rounded-lg focus:ring-green-200 dark:focus:ring-gray-600 focus:border-gray-50 dark:focus:border-gray-500 block w-full me-10 ps-10 pe-3 py-2"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="relative">
                  <div class="absolute top-2 left-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      class="h-5 w-5 text-gray-400"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 text-gray-500 font-regular text-sm rounded-lg focus:ring-green-200 dark:focus:ring-gray-600 focus:border-gray-50 dark:focus:border-gray-500 block w-full me-10 ps-10 pe-3 py-2"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="relative mb-6">
                  <div class="absolute top-2 left-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      class="h-5 w-5 text-gray-300"
                      viewBox="0 0 256 256"
                    >
                      <g fill="currentColor">
                        <path
                          d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                          opacity="0.2"
                        />
                        <path
                          d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
                        />
                      </g>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 text-gray-500 font-regular text-sm rounded-lg focus:ring-green-200 dark:focus:ring-gray-600 focus:border-gray-50 dark:focus:border-gray-500 block w-full me-10 ps-10 pe-3 py-2"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="relative">
                  <div class="absolute top-2 left-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      class="h-5 w-5 text-gray-300"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.5 4h-3V2.5a.5.5 0 0 0-1 0V4h-7V2.5a.5.5 0 0 0-1 0V4h-3A2.503 2.503 0 0 0 2 6.5v13A2.503 2.503 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 4M21 19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5V11h18zm0-9.5H3V6.5C3 5.672 3.67 5 4.5 5h3v1.5a.5.5 0 0 0 1 0V5h7v1.5a.5.5 0 0 0 1 0V5h3A1.5 1.5 0 0 1 21 6.5z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 text-gray-500 font-regular text-sm rounded-lg focus:ring-green-200 dark:focus:ring-gray-600 focus:border-gray-50 dark:focus:border-gray-500 block w-full me-10 ps-10 pe-3 py-2"
                    placeholder="Date of Birth"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="sm:col-span-1 col-span-2 py-6">
            <div class="mx-auto max-w-screen-sm px-20 mb-6">
              <div>
                <div class="relative mt-6">
                  <div class="absolute top-2 left-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      class="h-5 w-5 text-gray-300"
                      viewBox="0 0 256 256"
                    >
                      <g fill="currentColor">
                        <path
                          d="M136 108a52 52 0 1 1-52-52a52 52 0 0 1 52 52"
                          opacity="0.2"
                        />
                        <path
                          d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07"
                        />
                      </g>
                    </svg>
                  </div>
                  <select
                    class="bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 text-gray-500 font-regular text-sm rounded-lg focus:ring-green-200 dark:focus:ring-gray-600 focus:border-gray-50 dark:focus:border-gray-500 block w-full me-10 ps-10 pe-3 py-2"
                  >
                    <option value="">
                      <strong>Gender</strong>
                    </option>
                    <option value="kileleshwa">Customer</option>
                  </select>
                </div>
              </div>

              <div class="relative mt-6">
                <div class="absolute top-2 left-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5 text-gray-300"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M13 3c-3.855 0-7 3.145-7 7c0 2.41 1.23 4.55 3.094 5.813C5.527 17.343 3 20.883 3 25h2c0-4.43 3.57-8 8-8c2.145 0 4.063.879 5.5 2.25l-4.719 4.719l-.062.312l-.688 3.532l-.312 1.468l1.469-.312l3.53-.688l.313-.062l10.094-10.094c1.16-1.16 1.16-3.09 0-4.25a3.02 3.02 0 0 0-4.219-.031l-3.968 3.969a10.1 10.1 0 0 0-3.032-2A7.02 7.02 0 0 0 20 10c0-3.855-3.145-7-7-7m0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5m13 10c.254 0 .52.082.719.281a.977.977 0 0 1 0 1.406l-9.688 9.688l-1.781.375l.375-1.781l9.688-9.688A.93.93 0 0 1 26 15"
                    />
                  </svg>
                </div>
                <textarea
                  id="message"
                  rows="4"
                  class="block w-full bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 text-gray-500 font-regular text-sm rounded-lg focus:ring-green-200 dark:focus:ring-gray-600 focus:border-gray-50 dark:focus:border-gray-500 block w-full me-10 ps-10 pe-3 py-2"
                  placeholder="Description"
                ></textarea>
              </div>
              <div class="flex justify-end mt-6">
                <div class="p-4 bg-[#23a455] rounded-lg">
                  <span class="text-white">Create User</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
</script>
