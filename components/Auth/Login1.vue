<template>
  <div>
    <!-- source:https://codepen.io/owaiswiz/pen/jOPvEPB -->
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div
        class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
      >
        <div class="flex-1 bg-green-100 text-center hidden lg:flex p-0.5">
          <div
            class="w-full bg-cover p-2 bg-center bg-no-repeat bg-[url('/assets/images/login.png')]"
          ></div>
        </div>
        <div class="lg:w-1/2 xl:w-6/12 p-6 sm:p-20">
          <div class="mt-12 flex flex-col items-center">
            <div
              class="relative w-full flex-1 px-20 pt-20 pb-28 rounded shadow-lg bg-right-top bg-no-repeat bg-[url('/assets/images/leaves.png')] border border-gray-200"
            >
              <div></div>
              <div
                class="mb-3 flex flex-col items-start font-semibold text-gray-500"
              >
                WELCOME TO
              </div>
              <div
                class="flex flex-col items-start text-green-700 font-extrabold leading-10 text-4xl"
              >
                Inua Mkulima- Subsidy Program
              </div>

              <div
                class="mt-6 flex flex-col items-start text-gray-500 font-bold leading-10 text-sm"
              >
                Enter your username to continue
              </div>

              <div
                class="mt-2 flex flex-col items-start text-gray-500 font-semibold leading-10 text-sm"
              >
                Username
              </div>

              <div class="w-full">
                <div>
                  <div class="relative">
                    <input
                      type="text"
                      v-model="user.username"
                      id="floating-phone-number"
                      class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder=" "
                    />
                  </div>
                </div>
                <button
                  class="mt-8 tracking-wide font-semibold text-white bg-amber-500 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span class="ml-"> Continue </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="1em"
                    viewBox="0 0 12 24"
                    class="h-5 w-5 ms-10"
                  >
                    <defs>
                      <path
                        id="weuiArrowOutlined0"
                        fill="currentColor"
                        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                      />
                    </defs>
                    <use
                      fill-rule="evenodd"
                      href="#weuiArrowOutlined0"
                      transform="rotate(-180 5.02 9.505)"
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
