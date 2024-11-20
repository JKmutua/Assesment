<template>
  <section class="bg-green-50 dark:bg-gray-900">
    <Toast />
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0"
    >
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Recover Password
          </h1>

          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email Address/ Username</label
              >
              <input
                type="email"
                name="email"
                id="email"
                v-model="credential"
                placeholder="johndoe@gmail.com"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-2.5 focus:ring-0 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <button
              type="submit"
              @click.prevent="recover_password"
              class="w-full text-white bg-[#23a455] hover:bg-[#008100] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <div class="flex justify-center">
                <span v-if="loading == false">Recover Password</span>
                <span v-if="loading == true">Recovering Password</span>
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
                >Provided email address does not exist.
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
import { useToast } from "primevue/usetoast";
const see_password = ref(false);
const loading = ref(false);
const credential = ref("");
const error = ref(false);
const message = ref(true);
const toast = useToast();
const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "Password Recovery",
    detail: "Your new password has been shared on your email address",
    life: 3000,
  });
};
const token = ref(useCookie("token"));
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { profileUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const router = useRouter();
const recover_password = async () => {
  loading.value = true;
  const { data }: any = await useFetch(
    "https://stage-individual.spinmobile.co/api/auth/forgot-password/",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        credential,
      },
    }
  );

  if (data.value.code == "100.000.000") {
    showSuccess();
    error.value = false;
    loading.value = false;
    router.push("/auth/login");
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
