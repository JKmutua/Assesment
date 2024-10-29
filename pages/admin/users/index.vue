<template>
  <div class="h-screen bg-gray-100 dark:bg-gray-900 py-3 sm:py-8 lg:py-8">
    <div class="mx-auto max-w-screen-xl px-4">
      <!-- <div class="flex justify-between mb-4">
        <div class="flex my-auto">
          <div
            class="text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-full me-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              class="h-5 w-5"
              viewBox="0 0 256 256"
            >
              <g fill="currentColor">
                <path
                  d="M168 144a40 40 0 1 1-40-40a40 40 0 0 1 40 40M64 56a32 32 0 1 0 32 32a32 32 0 0 0-32-32m128 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32"
                  opacity="0.2"
                />
                <path
                  d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1 0-16a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21M190.92 212a8 8 0 1 1-13.85 8a57 57 0 0 0-98.15 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212M128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8"
                />
              </g>
            </svg>
          </div>
          <h1 class="text-sm font-semibold mt-1.5">Spin-ID Users</h1>
        </div>
        <div class="flex my-auto mb-2">
          <button
            class="bg-white me-2 text-sm font-regular py-2 px-4 rounded-lg border border-gray-300 hover:border-gray-200 dark:text-white dark:border-gray-500 dark:hover:border-gray-600 dark:bg-gray-700"
          >
            <span class="me-2">Refresh Data</span>
          </button>
          <button
            class="text-white bg-[#23a455] text-sm hover:bg-opacity-90 font-regular py-2 px-4 rounded-lg"
          >
            <span class="me-2">Add New</span>
          </button>
        </div>
      </div> -->
      <div class="">
        <DataTablesUsers />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
</script>
