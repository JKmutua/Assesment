<template>
  <section class="bg-green-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0"
    >
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl -mb-3 font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Hello Justus
          </h1>
          <p class="text-sm text-center font-medium text-gray-400">
            Please input the verification code below
          </p>
          <form class="space-y-4 md:space-y-6" action="#">
            <div class="mb-2 flex items-center">
              <input
                type="password"
                name="password"
                v-model="user.otp"
                id="password"
                placeholder="otp"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-2.5 focus:ring-0 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
              <span
                class="-ml-8 text-gray-500 dark:text-gray-400"
                role="button"
                v-if="!see_password"
                @click="see_password = !see_password"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                  />
                </svg>
              </span>
              <span
                class="-ml-8 text-gray-500 dark:text-gray-400"
                role="button"
                v-if="see_password"
                @click="see_password = !see_password"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-5 w-5"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="m63.998 86.005l21.998-21.998L447.999 426.01l-21.998 21.998zM259.34 192.09l60.57 60.57a64.07 64.07 0 0 0-60.57-60.57m-6.68 127.82l-60.57-60.57a64.07 64.07 0 0 0 60.57 60.57"
                  />
                  <path
                    fill="currentColor"
                    d="M256 352a96 96 0 0 1-92.6-121.34l-69.07-69.08C66.12 187.42 39.24 221.14 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416A233.47 233.47 0 0 0 335 402.2l-53.61-53.6A95.84 95.84 0 0 1 256 352m0-192a96 96 0 0 1 92.6 121.34L419.26 352c29.15-26.25 56.07-61.56 76.74-96c-26.38-43.43-62.9-88.56-101.18-114.82C351.1 111.2 304.31 96 255.76 96a222.92 222.92 0 0 0-78.21 14.29l53.11 53.11A95.84 95.84 0 0 1 256 160"
                  />
                </svg>
              </span>
            </div>

            <button
              type="submit"
              @click.prevent="verify()"
              class="w-full text-white bg-[#23a455] hover:bg-[#008100] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <div class="flex justify-center">
                <span v-if="loading == false">Verify</span>
                <span v-if="loading == true">Verifying</span>
                <span v-if="loading == true" class="loader my-auto ms-2"></span>
              </div>
            </button>
            <div class="flex items-center justify-end">
              <a
                href="/auth/login"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-white"
                >Back to Login</a
              >
            </div>
            <div class="text-center" v-if="error">
              <span class="text-[0.8rem] text-red-500 font-medium"
                >Wrong verification code. Please try again
              </span>
            </div>
            <div class="flex justify-center mt-3">
              <span
                class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                >© 2024
                <a href="https://flowbite.com/" class="hover:underline"
                  >Spin Mobile™</a
                >. All Rights Reserved.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const see_password = ref(false);
const token = ref(useCookie("token"));
const loading = ref(false);
const error = ref(false);
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { verifyUser } = useAuthStore(); // use authenticateUser action from  auth store
const { profileUser } = useAuthStore(); // use authenticateUser action from  auth store

const { verified } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  otp: "",
});
const router = useRouter();
const verify = async () => {
  loading.value = true;
  await verifyUser(user.value); // call verifyUser and pass the user object
  // redirect to homepage if user is verified
  if (verified.value == true) {
    error.value = false;
    loading.value = false;
    await profileUser();
    router.push("/");
  } else {
    loading.value = false;
    error.value = true;
  }
};
</script>
<style>
.loader {
  width: 17px;
  height: 17px;
  border: 2px solid #fff;
  border-bottom-color: #23a455;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
