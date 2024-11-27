<template>
  <section class="bg-slate-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0"
    >
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0">
        <div
          class="z-50 p-6 space-y-4 md:space-y-6 sm:p-12 sm:mx-6 bg-white dark:bg-gray-800 rounded-md"
        >
          <h1
            class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-[0.8rem] font-medium text-gray-900 dark:text-white"
                >Username</label
              >
              <div class="flex items-center">
                <!-- <label
                  for="phone-input"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >Phone number:</label
                > -->
                <div class="relative w-full">
                  <input
                    type="text"
                    id="phone-input"
                    v-model="user.username"
                    class="bg-white border border-gray-200 text-gray-900 sm:text-sm rounded-md block w-full p-2.5 focus:ring-0 focus:border-gray-300 dark:bg-transparent dark:border-gray-700 dark:focus:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="eg. John"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-[0.8rem] font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <div class="flex items-center">
                <input
                  :type="see_password == true ? 'text' : 'password'"
                  name="password"
                  id="password"
                  v-model="user.password"
                  placeholder="password"
                  class="bg-white border border-gray-200 text-gray-900 sm:text-sm rounded-md block w-full p-2.5 focus:ring-0 focus:border-gray-300 dark:bg-transparent dark:border-gray-700 dark:focus:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
              <a
                href="/auth/resetpassword"
                class="text-[0.8rem] font-medium text-primary-600 hover:underline dark:text-white"
                >Forgot password?</a
              >
            </div>
            <button
              type="submit"
              @click.prevent="login"
              class="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <div class="flex justify-center">
                <span v-if="loading == false">Sign in</span>
                <span v-if="loading == true">Authenticating</span>
                <span v-if="loading == true" class="loader my-auto ms-2"></span>
              </div>
            </button>
            <div class="text-center" v-if="error">
              <span class="text-[0.8rem] text-red-500 font-medium"
                >Wrong username or password. Kindly verify and try again.
              </span>
            </div>
            <div class="flex justify-center mt-3">
              <span
                class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                >© 2024 <a href="#" class="hover:underline">Justus Katunga™</a>.
                All Rights Reserved.
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
const loading = ref(false);
const error = ref(false);

import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: "emilys",
  password: "emilypass",
});
const router = useRouter();
const login = async () => {
  loading.value = true;
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated.value == true) {
    error.value = false;
    loading.value = false;
    router.push("/auth/verify");
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
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

.circles {
  /* background: #22c55e; */
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 96%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 10px;
  height: 10px;
  /* background: rgba(255, 255, 255, 0.2); */

  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  background: #22c55e;
  width: 7px;
  height: 7px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  background: #22c55e;
  width: 5px;
  height: 5px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  background: #22c55e;
  width: 10px;
  height: 10px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  background: #22c55e;
  width: 10px;
  height: 10px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  background: #22c55e;
  width: 10px;
  height: 10px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  background: #22c55e;
  width: 10px;
  height: 10px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  background: #22c55e;
  left: 35%;
  width: 10px;
  height: 10px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  background: #22c55e;
  left: 50%;
  width: 15px;
  height: 15px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  background: #22c55e;
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  background: #22c55e;
  left: 85%;
  width: 15px;
  height: 15px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
