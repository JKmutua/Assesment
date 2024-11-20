<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useCookie } from "#app";

// Initialize necessary variables
const selected_section = ref("profile");
const { id } = useRoute().params;
const is_customer = false;
const user_id = id;
const token = useCookie("token").value;
const isLoading = ref(false);
// Define the ProfileData interface
interface ProfileData {
  username: string;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  other_name: string | null;
  gender: string;
  is_superuser: boolean;
  terms_and_conditions_accepted: boolean;
  language_code: string;
  last_activity: string;
  organisation_name: string | null;
  role_name: string;
  state_name: string;
  id_no: string | null;
  other_phone_number: string | null;
  occupation: string | null;
  employment_type: string;
  income_from_investments: string | null;
  currency: string | null;
  net_salary: string | null;
  work_place_grants_or_allowance: string | null;
  physical_work_address: string | null;
  country: string;
  country_of_work: string;
  permissions: any[]; // Array of permissions
}

// Define the ApiResponse interface
interface ApiResponse {
  profile: {
    code: string;
    message: string;
    data: ProfileData;
  }; // Profile is an array of objects with code, message, and data
}
const profile = ref<ProfileData | null>(null);
// Fetch profile data using useAsyncData
const { data, error, status } = await useAsyncData("profile", async () => {
  const profileData = await $fetch(
    "https://stage-individual.spinmobile.co/api/auth/profile/",
    {
      method: "POST",
      body: {
        token,
        user_id,
        is_customer,
      },
    }
  );
  return { profile: profileData };
});

// Create a ref to hold profile data (from the first item in the profile array)

// Set loading state based on the status of the fetch operation
onMounted(() => {
  isLoading.value = status.value === "pending";
  console.log(data.value);
  if (data.value && data.value.profile && data.value?.profile) {
    profile.value = data.value.profile?.data;
  }
});
</script>
<template>
  <div class="mx-auto max-w-screen-2xl px-4">
    <div
      class="h-screen py-3 sm:py-8 lg:py-8"
      v-if="status != 'pending' && profile != null"
    >
      <div class="grid grid-cols-3 gap-4">
        <div class="sm:col-span-1 col-span-3 py-3 lg:me-4 md:me-4">
          <div class="flex my-auto">
            <div
              class="my-auto text-[#23a455] bg-[#23a455] p-1.5 bg-opacity-20 rounded-full me-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                class="h-8 w-8"
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
            </div>
            <!-- <pre>{{ profile }}</pre> -->
            <div class="flex my-auto">
              <div>
                <h1 class="font-medium text-semibold">
                  {{ profile?.first_name.concat(" ", profile?.last_name) }}
                </h1>
                <p class="-mt-1.5 text-gray-500 dark:text-gray-500">
                  <small>Customer Profile Info</small>
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8 lg:me-6">
            <ul
              class="flex-column w-full space-y space-y-4 text-sm font-regular text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0"
            >
              <li class="w-full lg:w-60 md:w-60">
                <a
                  href="#"
                  @click="selected_section = 'profile'"
                  :class="
                    selected_section == 'profile'
                      ? 'inline-flex items-center px-4 py-3 text-green-500 bg-green-500 bg-opacity-10 dark:bg-opacity-20 rounded-md active w-full'
                      : 'inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-white w-full dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white'
                  "
                >
                  <svg
                    class="w-4 h-4 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
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
                  Profile
                </a>
              </li>
              <li class="w-full lg:w-60 md:w-60">
                <a
                  href="#"
                  @click="selected_section = 'budgets'"
                  :class="
                    selected_section == 'budgets'
                      ? 'inline-flex items-center px-4 py-3 text-green-500 bg-green-500 bg-opacity-10 dark:bg-opacity-20 rounded-md active w-full'
                      : 'inline-flex text-gray-500 dark:text-gray-400 items-center px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-white w-full dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white'
                  "
                >
                  <svg
                    class="w-4 h-4 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="currentColor">
                      <path
                        d="M224 80v112a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16V56a16 16 0 0 0 16 16h160a8 8 0 0 1 8 8"
                        opacity="0.2"
                      />
                      <path
                        d="M216 64H56a8 8 0 0 1 0-16h136a8 8 0 0 0 0-16H56a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 128H56a8 8 0 0 1-8-8V78.63A23.8 23.8 0 0 0 56 80h160Zm-48-60a12 12 0 1 1 12 12a12 12 0 0 1-12-12"
                      />
                    </g>
                  </svg>
                  Budgets
                </a>
              </li>
              <li class="w-full lg:w-60 md:w-60">
                <a
                  href="#"
                  @click="selected_section = 'statements'"
                  :class="
                    selected_section == 'statements'
                      ? 'inline-flex items-center px-4 py-3 text-green-500 bg-green-500 bg-opacity-10 dark:bg-opacity-20 rounded-md active w-full'
                      : 'inline-flex items-center text-gray-500 dark:text-gray-400 px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-white w-full dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white'
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="w-4 h-4 me-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.75 11.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm4.835-14.414l5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.172q.042.001.082.007q.03.005.059.007c.215.015.427.056.624.138c.057.024.112.056.166.087l.05.029l.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03zM18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5z"
                    />
                  </svg>
                  Statements
                </a>
              </li>
              <li class="w-full lg:w-60 md:w-60">
                <a
                  href="#"
                  @click="selected_section = 'transactions'"
                  :class="
                    selected_section == 'transactions'
                      ? 'inline-flex items-center px-4 py-3 text-green-500 bg-green-500 bg-opacity-10 dark:bg-opacity-20 rounded-md active w-full'
                      : 'inline-flex items-center text-gray-500 dark:text-gray-400 px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-white w-full dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white'
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="w-5 h-5 me-2"
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
                  Transactions
                </a>
              </li>
              <li class="w-full lg:w-60 md:w-60">
                <a
                  to="#"
                  role="button"
                  @click="selected_section = 'settings'"
                  :class="
                    selected_section == 'settings'
                      ? 'inline-flex items-center px-4 py-3 text-green-500 bg-green-500 bg-opacity-10 dark:bg-opacity-20 rounded-md active w-full'
                      : 'inline-flex text-gray-500 dark:text-gray-400 items-center px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-white w-full dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white'
                  "
                >
                  <svg
                    class="w-4 h-4 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155 155 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155 155 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47"
                    />
                  </svg>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="sm:col-span-2 col-span-3 py-3">
          <div
            v-if="selected_section == 'profile'"
            id="profile"
            class="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <Profile />
          </div>
          <div
            v-if="selected_section == 'budgets'"
            id="budgets"
            class="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <Budgets />
          </div>
          <div
            v-if="selected_section == 'statements'"
            id="statements"
            class="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <Statements />
          </div>
          <div
            v-if="selected_section == 'transactions'"
            id="statements"
            class="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <UserTransactions />
          </div>
          <div
            v-if="selected_section == 'settings'"
            id="settings"
            class="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <UserSettings />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Profile is missing or has no data available.</p>
    </div>
  </div>
</template>
