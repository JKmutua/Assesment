<template>
  <div>
    <div class="flex justify-between">
      <div class="relative">
        <div class="absolute top-2 left-2">
          <i class="pi pi-search text-gray-300 dark:text-gray-500"></i>
        </div>
        <input
          type="text"
          id="first_name"
          class="bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 text-gray-500 font-regular text-sm rounded-lg focus:ring-green-200 dark:focus:ring-gray-600 focus:border-gray-50 dark:focus:border-gray-500 block w-full me-10 ps-10 pe-3 py-2"
          placeholder="Type to search"
          required
        />
      </div>
      <div class="flex">
        <button
          class="bg-white me-2 text-sm font-regular py-2 px-4 rounded-md border border-gray-300 hover:border-gray-200 dark:text-white dark:border-gray-500 dark:hover:border-gray-600 dark:bg-gray-700"
        >
          <i class="pi pi-refresh my-auto me-1"></i>
          <span class="me-2 text-sm">Refresh Data</span>
        </button>
        <NuxtLink
          to="/admin/users/users"
          class="me-2 flex text-white bg-amber-500 text-sm hover:bg-opacity-90 font-regular py-2 px-4 rounded-md"
        >
          <i class="pi pi-user-plus my-auto me-1"></i>
          <span class="me-2 text-sm my-auto">Add New</span>
        </NuxtLink>

        <button
          class="flex text-white bg-[#23a455] text-sm hover:bg-opacity-90 font-regular py-2 px-4 rounded-md"
        >
          <i class="pi pi-file-excel my-auto me-1"></i>
          <span class="me-2 text-sm my-auto">Export CSV</span>
        </button>
        <!-- <div class="ms-8">
            <Button
              size="small"
              icon="pi pi-file-excel"
              label="Export CSV"
              severity="success"
            />
          </div>
          <div class="ms-2">
            <Button
              size="small"
              label="Refresh Data"
              icon="pi pi-refresh"
              severity="danger"
            />
          </div>
          <div class="ms-2">
            <Button
              size="small"
              label="Add New"
              icon="pi pi-user-plus"
              severity="warn"
            />
          </div> -->
      </div>
    </div>
    <div
      class="mt-6 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      <DataTable
        class="bg-white dark-bg-gray-800"
        v-model:selection="selectedCustomers"
        :value="customers"
        sortMode="multiple"
        :rows="10"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        tableStyle="min-width: 50rem"
      >
        <template #empty> No customers found. </template>
        <template #loading> Loading customers data. Please wait. </template>
        <Column
          selectionMode="multiple"
          headerStyle="width: 3rem text-gray-500 dark:text-gray-300"
        ></Column>
        <Column
          field="name"
          header="Full Name"
          style="width: 25%"
          headerStyle="font-size: 15px; text-gray-500 dark:text-gray-300"
        >
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <!-- <span class="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="w-8 h-8"
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
              </span> -->
              <!-- <img
                :alt="data.name"
                src="https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg"
                style="width: 32px"
              /> -->
              <span
                class="text-sm px-2 py-1.5 text-green-700 font-semibold rounded-full bg-green-700 bg-opacity-20"
                >{{ getAbr(data.name) }}</span
              >
              <span class="text-sm text-gray-500 dark:text-gray-300">{{
                data.name
              }}</span>
            </div>
          </template></Column
        >
        <Column
          field="phone_number"
          header="Phone Number"
          style="width: 25%"
          headerStyle="font-size: 15px;"
        >
          <template #body="{ data }">
            <span class="text-sm text-gray-500 dark:text-gray-300">
              {{ data.phone_number }}
            </span>
          </template></Column
        >
        <Column
          field="email"
          header="Email"
          style="width: 25%"
          headerStyle="font-size: 15px;"
        >
          <template #body="{ data }">
            <span class="text-sm text-gray-500 dark:text-gray-300">
              {{ data.email }}
            </span>
          </template></Column
        >
        <Column
          field="gender"
          header="Gender"
          style="width: 25%"
          headerStyle="font-size: 15px; text-gray-500 dark:text-gray-300"
        >
          <template #body="{ data }">
            <span class="text-sm text-gray-500 dark:text-gray-300">
              {{ data.gender }}
            </span>
          </template></Column
        >
        <Column
          field="state"
          header="Status"
          style="width: 25%"
          headerStyle="font-size: 15px;"
        >
          <template #body="{ data }">
            <span
              class="bg-green-300 bg-opacity-20 rounded-lg px-2 py-0.5 text-green-300"
            >
              <small class="my-auto" style="font-size: 12px; font-weight: 500"
                >Active</small
              >
            </span>
          </template></Column
        >
        <Column
          field="dob"
          header="DOB"
          style="width: 25%"
          headerStyle="font-size: 15px; text-gray-500 dark:text-gray-300"
        >
          <template #body="{ data }">
            <span class="text-sm text-gray-500 dark:text-gray-300">
              {{ data.dob }}
            </span>
          </template></Column
        >

        <Column
          field=""
          header="Actions"
          style="width: 25%"
          headerStyle="font-size: 15px;"
        >
          <template #body="{ data }">
            <span class="flex space-x-2">
              <Button
                size="small"
                rounded
                outlined
                icon="pi pi-trash"
                severity="danger"
              />
              <Button
                size="small"
                rounded
                outlined
                icon="pi pi-pen-to-square"
                severity="warn"
              />
              <Button
                size="small"
                rounded
                outlined
                icon="pi pi-eye"
                severity="success"
                @click="$router.push('/data/customers/Customer_Profile')"
              />
            </span> </template
        ></Column>
      </DataTable>

      <div class="card">
        <Paginator
          :rows="10"
          :totalRecords="120"
          :rowsPerPageOptions="[10, 20, 30]"
        ></Paginator>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// import { CustomerService } from "@/service/CustomerService";

// onMounted(() => {
//   CustomerService.getCustomersMedium().then((data) => (customers.value = data));
// });
function getAbr(inputString: string): String {
  const matches: RegExpMatchArray | null = inputString.match(/\b([A-Z])/g);
  const result: string = matches ? matches.join("") : "";
  return result;
}
const selectedCustomers = ref();
const filters = ref();
const customers = ref([
  {
    profile: "",
    name: "Justus Katunga",
    phone_number: "0797270923",
    email: "spin@gmail.com",
    gender: "Male",
    dob: "10/22/2024",
    state: "Active",
  },
  {
    profile: "",
    name: "Justus Katunga",
    phone_number: "0797270923",
    email: "spin@gmail.com",
    gender: "Male",
    dob: "10/22/2024",
    state: "Active",
  },
  {
    profile: "",
    name: "Justus Katunga",
    phone_number: "0797270923",
    email: "spin@gmail.com",
    gender: "Male",
    dob: "10/22/2024",
    state: "Active",
  },
  {
    profile: "",
    name: "Justus Katunga",
    phone_number: "0797270923",
    email: "spin@gmail.com",
    gender: "Male",
    dob: "10/22/2024",
    state: "Active",
  },
  {
    profile: "",
    name: "Justus Katunga",
    phone_number: "0797270923",
    email: "spin@gmail.com",
    gender: "Male",
    dob: "10/22/2024",
    state: "Active",
  },
  {
    profile: "",
    name: "Justus Katunga",
    phone_number: "0797270923",
    email: "spin@gmail.com",
    gender: "Male",
    dob: "10/22/2024",
    state: "Active",
  },
  {
    profile: "",
    name: "Justus Katunga",
    phone_number: "0797270923",
    email: "spin@gmail.com",
    gender: "Male",
    dob: "10/22/2024",
    state: "Active",
  },
  {
    profile: "",
    name: "Justus Katunga",
    phone_number: "0797270923",
    email: "spin@gmail.com",
    gender: "Male",
    dob: "10/22/2024",
    state: "Active",
  },
  {
    profile: "",
    name: "Justus Katunga",
    phone_number: "0797270923",
    email: "spin@gmail.com",
    gender: "Male",
    dob: "10/22/2024",
    state: "Active",
  },
]);
const dt = ref();
const products = ref();
const exportCSV = () => {
  dt.value.exportCSV();
};
</script>
