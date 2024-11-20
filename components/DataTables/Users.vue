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
          class="bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 text-gray-500 font-regular text-sm rounded-lg focus:ring-green-200 dark:focus:ring-gray-600 focus:border-gray-50 dark:focus:border-gray-500 block w-full me-10 ps-10 pe-3 py-1.5"
          placeholder="Type to search"
          required
        />
      </div>
      <div class="flex">
        <button
          @click="customersdata()"
          class="bg-white me-2 text-sm font-regular py-1 px-2.5 rounded border border-gray-300 hover:border-gray-200 dark:text-white dark:border-gray-500 dark:hover:border-gray-600 dark:bg-gray-700"
        >
          <i style="font-size: 0.9rem" class="pi pi-refresh my-auto me-1"></i>
          <span class="me-2 text-[0.8rem]">Refresh Data</span>
        </button>
        <NuxtLink
          to="/admin/users/users"
          class="me-2 flex text-white bg-amber-500 text-sm hover:bg-opacity-90 font-regular py-1 px-2.5 rounded"
        >
          <i style="font-size: 0.9rem" class="pi pi-user-plus my-auto me-1"></i>
          <span class="me-2 text-[0.8rem] my-auto">Add New</span>
        </NuxtLink>

        <button
          class="flex text-white bg-[#23a455] text-sm hover:bg-opacity-90 font-regular py-1 px-2.5 rounded"
        >
          <i
            style="font-size: 0.9rem"
            class="pi pi-file-excel my-auto me-1"
          ></i>
          <span class="me-2 text-[0.8rem] my-auto">Export CSV</span>
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
      <!-- <pre>{{ AllCustomers }}</pre> -->
      <DataTable
        class="bg-white dark-bg-gray-800 custom-datatable"
        v-model:selection="selectedCustomers"
        :value="AllCustomers"
        sortMode="multiple"
        showGridlines
        :rows="10"
        filterDisplay="menu"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        tableStyle="min-width: 50rem"
        dataKey="id"
        :globalFilterFields="['first_name', 'role_name', 'state_name']"
      >
        <Column
          selectionMode="multiple"
          headerStyle="width: 3rem text-gray-500 dark:text-gray-300"
        ></Column>
        <Column
          field="username"
          header="Username"
          style="width: 15%"
          headerStyle="font-size: 15px; text-gray-500 dark:text-gray-300"
        >
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <span
                class="text-sm px-2 py-1.5 text-green-700 font-semibold rounded-full bg-green-700 bg-opacity-20"
                >{{
                  data.first_name != null && data.last_name != null
                    ? getAbr(data.first_name.concat(" ", data.last_name))
                    : getAbr(data.username)
                }}</span
              >
              <div>
                <p
                  class="text-sm capitalize text-gray-600 font-medium dark:text-gray-300"
                >
                  {{ data.username }}
                </p>
                <p
                  class="capitalize text-[0.6rem] text-gray-500 dark:text-gray-300"
                >
                  <span class="capitalize">{{ data.role_name }}</span>
                </p>
              </div>
            </div>
          </template></Column
        >

        <!-- <Column
          field="username"
          header="User Name"
          style="width: 25%"
          headerStyle="font-size: 15px;"
        >
          <template #body="{ data }">
            <span class="text-sm text-gray-500 dark:text-gray-300">
              {{ data.username }}
            </span>
          </template></Column
        > -->
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
        <!-- <Column
          field="role_name"
          header="Role"
          style="width: 25%"
          headerStyle="font-size: 15px; text-gray-500 dark:text-gray-300"
        >
          <template #body="{ data }">
            <span class="text-sm text-gray-500 dark:text-gray-300">
              {{ data.role_name }}
            </span>
          </template></Column
        > -->
        <Column
          field="first_name"
          header="Full Name"
          style="width: 35%"
          headerStyle="font-size: 15px;"
        >
          <template #body="{ data }">
            <span class="flex text-sm text-gray-500 dark:text-gray-300">
              <span>{{
                data.first_name != null ? data.first_name + " " : "-"
              }}</span>
              <span>{{
                data.last_name != null ? data.last_name + " " : "-"
              }}</span>
              <!-- {{ data.other_name != null ? data.other_name + " " : "-" }} -->
            </span>
          </template></Column
        >
        <Column
          field="state_name"
          header="Status"
          style="width: 25%"
          headerStyle="font-size: 15px;"
        >
          <template #body="{ data }">
            <span
              v-if="data.state_name === 'Active'"
              class="bg-green-300 bg-opacity-20 rounded-lg px-2 py-0.5 text-green-300"
            >
              <small class="my-auto" style="font-size: 12px; font-weight: 500"
                >Active</small
              >
            </span>
            <span
              v-else
              class="bg-red-300 bg-opacity-20 rounded-lg px-2 py-0.5 text-red-300"
            >
              <small class="my-auto" style="font-size: 12px; font-weight: 500"
                >Active</small
              >
            </span>
          </template></Column
        >
        <!-- <Column
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
        > -->

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
        <template v-if="loading" #empty>
          <div class="flex justify-center">
            <ProgressSpinner
              style="width: 40px; height: 40px"
              strokeWidth="4"
              fill="transparent"
              animationDuration="1s"
              aria-label="Custom ProgressSpinner"
            />
          </div>
        </template>
        <template v-if="!loading" #empty>
          <div class="text-center text-sm text-gray-500 dark:text-gray-300">
            No users found.
          </div>
        </template>
      </DataTable>
      <!-- <div class="py-3">
        <div v-if="AllCustomers.length == 0 && loading == false">
          <div class="text-center text-sm text-gray-500 dark:text-gray-300">
            No customers found.
          </div>
        </div>
        <div v-if="loading">
          <div class="flex justify-center">
            <ProgressSpinner
              style="width: 40px; height: 40px"
              strokeWidth="4"
              fill="transparent"
              animationDuration="1s"
              aria-label="Custom ProgressSpinner"
            />
          </div>
        </div>
      </div> -->
      <div class="">
        <Paginator
          :rows="rows"
          :totalRecords="totalRecords"
          :rowsPerPageOptions="[10, 20, 30]"
        ></Paginator>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressSpinner from "primevue/progressspinner";
import { ref, onMounted } from "vue";
// import { CustomerService } from "@/service/CustomerService";
const AllCustomers = ref([]);
const rows = ref(10);
const totalRecords = ref();
const loading = ref(false);
onMounted(() => {
  customersdata();
});
function getAbr(inputString: string): String {
  const matches: RegExpMatchArray | null = inputString.match(/\b([A-Z])/g);
  const result: string = matches ? matches.join("") : "";
  return result;
}

async function customersdata() {
  AllCustomers.value = [];
  loading.value = true;
  const { data }: any = await useFetch(
    "https://stage-individual.spinmobile.co/api/dt/users/",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        start: 0,
        length: 10,
        search_params: {
          role: "SUPER ADMIN",
        },
        token: "b'Yjg0NmMzYWRjNDk4YzFkNDAzMDczZTljN2Y1OWM2'",
      },
    }
  );
  if (data.value != null) {
    AllCustomers.value = data.value.data;
    totalRecords.value = data.value.recordsTotal;
  }

  loading.value = false;
}
const selectedCustomers = ref();
const filters = ref();

const dt = ref();
const products = ref();
const exportCSV = () => {
  dt.value.exportCSV();
};
</script>

<style scoped>
custom-datatable .p-datatable-thead th {
  border-bottom: 2px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
}

.custom-datatable .p-datatable-thead th:first-child {
  border-left: 1px solid #e5e7eb;
}

.custom-datatable .p-datatable-thead th:last-child {
  border-right: 2px solid #e5e7eb;
}
</style>
