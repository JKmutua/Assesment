<template>
  <div class="max-w-screen-xl mx-auto">
    <div
      v-if="data.products.length != 0"
      class="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 px-2 gap-10 flex flex-row"
    >
      <div
        v-for="product in data.products"
        :key="product.id"
        class="w-72 bg-white dark:bg-gray-800 text-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <div class="px-4 py-3 w-72">
            <img :src="product.thumbnail" alt="" />
            <span class="text-gray-400 mr-3 uppercase text-xs">{{
              product.title
            }}</span>
            <p
              class="text-lg dark:text-white font-bold text-black truncate block capitalize"
            >
              {{ product.description }}
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                {{ product.price }}
              </p>

              <div class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div v-else class="text-center">No data to records to show</div>
  </div>
</template>
<script setup>
const { data, error, status } = await useAsyncData("Products", async () => {
  const profileData = await $fetch("https://dummyjson.com/products", {
    method: "GET", // Use GET instead of POST for fetching products
  });
  return profileData;
});
</script>
