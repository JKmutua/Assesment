<template>
  <div class="max-w-screen-2xl p-4 mx-auto mb-2">
    <div class="">
      <div class="font-extrabold text-xl text-gray-700 mb-3">
        Product Details
      </div>
      <div class="flex">
        <button class="flex rounded bg-amber-400 text-white px-2.5 py-1.5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              class="h-4 w-4 me-6 mt-1"
              height="1em"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"
              />
            </svg>
          </div>
          <div class="my-auto">Back</div>
        </button>
        <div class="text-sm font-semibold text-gray-400 ms-6 my-auto">
          Product Details
        </div>
      </div>
    </div>
    <div class="text-sm mt-6 text-gray-600">
      <span class="font-bold">Inua Mkulima wallet</span> balance :
      <span class="font-bold">KSh 2,400.00</span>
    </div>
    <div
      class="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 px-2 gap-6 mt-6"
    >
      <div>
        <div class="font-bold text-sm text-gray-500 -ms-2 mb-4">Products</div>
        <div class="bg-white border boder-gray-600 rounded-lg p-4 -ms-2">
          <table>
            <thead>
              <tr>
                <th class="font-bold text-start">Product Name</th>
                <th class="font-bold text-start">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in data.products" :key="product.id">
                <td>{{ product.title }}</td>
                <td>{{ product.price }} kes</td>
                <td class="text-right">
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      @click="selectproduct(product)"
                      role="button"
                      height="1em"
                      viewBox="0 0 2048 2048"
                      class="text-gray-600 h-6 w-6 text-right"
                    >
                      <path
                        fill="currentColor"
                        d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t104-244t160-207t207-161T752 37t272-37m0 1920q124 0 238-32t214-90t181-140t140-181t91-214t32-239t-32-238t-90-214t-140-181t-181-140t-214-91t-239-32t-238 32t-214 90t-181 140t-140 181t-91 214t-32 239t32 238t90 214t140 182t181 140t214 90t239 32m64-961h448v128h-448v449H960v-449H512V959h448V512h128z"
                      />
                    </svg>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="">
        <div class="font-bold text-sm text-gray-500 mb-4 -ms-2">
          Selected Products
        </div>
        <!-- <pre>{{ SelectedProducts }}</pre> -->
        <div class="bg-amber-50 border boder-gray-600 rounded-lg p-4 -ms-2">
          <table v-if="SelectedProducts.length != 0">
            <thead>
              <tr>
                <th class="font-bold text-start">Product Name</th>
                <th class="font-bold text-start">Quantity</th>
                <th class="font-bold text-start">Price</th>
                <th class="font-bold text-start">Total</th>
                <th class="font-bold text-start">Deductions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in SelectedProducts" :key="product.id">
                <td>{{ product.title }}</td>
                <td></td>
                <td>{{ product.price }} kes</td>
                <td></td>
                <td>
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                      class="text-gray-600 h-6 w-6 text-right"
                    >
                      <path
                        fill="currentColor"
                        d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m5-9v2H5V9z"
                      />
                    </svg>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="p-8 text-center">
            Please select a product from the product panel please
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const { data, error, status } = await useAsyncData("Products", async () => {
  const profileData = await $fetch("https://dummyjson.com/products", {
    method: "GET", // Use GET instead of POST for fetching products
  });
  return profileData;
});
const SelectedProducts = ref([]);
function selectproduct(product) {
  SelectedProducts.value.push(product);
}
</script>
