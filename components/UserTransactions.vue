<template>
  <div>
    <div class="flex justify-between mb-4">
      <div class="flex my-auto">
        <div>
          <h1 class="font-medium text-sm uppercase">Customer Transactions</h1>
          <p class="text-gray-500 dark:text-gray-400">
            <small>All Customer Transactions</small>
          </p>
        </div>
      </div>
      <div class="flex my-auto mb-2">
        <button
          class="bg-white me-2 text-sm font-regular py-2 px-4 rounded-lg border border-gray-300 hover:border-gray-200 dark:text-white dark:border-gray-500 dark:hover:border-gray-600 dark:bg-gray-700"
        >
          <span class="me-2">Cancel</span>
        </button>
        <button
          class="text-white bg-[#23a455] text-sm hover:bg-opacity-90 font-regular py-2 px-4 rounded-lg"
        >
          <span class="me-2">Save</span>
        </button>
      </div>
    </div>
    <div class="mx-auto max-w-screen-sm px-4 mt-12 mb-6">
      <DataTable
        v-model:expandedRows="expandedRows"
        class="bg-white dark:bg-gray-800"
        :value="customers"
        stripedRows
        sortMode="multiple"
        :rows="10"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        tableStyle="min-width: 30rem"
        dataKey="id"
        @rowExpand="onRowExpand"
        @rowCollapse="onRowCollapse"
      >
        <template #header>
          <!-- <div class="flex flex-wrap justify-end gap-2">
            <Button
              text
              icon="pi pi-plus"
              label="Expand All"
              @click="expandAll"
            />
            <Button
              text
              icon="pi pi-minus"
              label="Collapse All"
              @click="collapseAll"
            />
          </div> -->
          <div class="flex">
            <div class="flex">
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
              <div class="ms-8">
                <Button
                  size="small"
                  icon="pi pi-file-excel"
                  rounded
                  severity="success"
                  @click="exportCSV($event)"
                />
              </div>
              <div class="ms-2">
                <Button
                  size="small"
                  rounded
                  icon="pi pi-refresh"
                  severity="danger"
                />
              </div>
              <!-- <div class="ms-2">
                <Button
                  size="small"
                  label="Add New"
                  icon="pi pi-user-plus"
                  severity="warn"
                />
              </div> -->
            </div>
          </div>
        </template>
        <template #empty> No transactions found. </template>
        <template #loading> Loading transactions. Please wait. </template>
        <Column expander style="width: 5rem" />
        <Column field="trx_date" header="Trx Date" style="width: 25%">
          <template #body="{ data }">
            <span class="text-sm">
              {{ data.trx_date }}
            </span>
          </template></Column
        >
        <Column field="trx_type" header="Type" style="width: 10%">
          <template #body="{ data }">
            <span class="text-sm">
              {{ data.trx_type }}
            </span>
          </template></Column
        >
        <Column field="amount" header="Amount" style="width: 25%">
          <template #body="{ data }">
            <span class="text-sm">
              {{ data.amount }}
            </span>
          </template></Column
        >
        <Column
          field="classification"
          header="Classification"
          style="width: 40%"
        >
          <template #body="{ data }">
            <span class="text-sm">
              {{ data.classification }}
            </span>
          </template></Column
        >
        <template #expansion="slotProps">
          <div class="p-4">
            <h5 class="font-medium">More Transaction Details</h5>
            <p class="text-sm">
              <small>{{ slotProps.data.desc }}</small>
            </p>
          </div>
        </template>
      </DataTable>
      <Toast />
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
<script setup>
import { ref, onMounted } from "vue";
// import { useToast } from "primevue/usetoast";
// import { CustomerService } from "@/service/CustomerService";

// onMounted(() => {
//   CustomerService.getCustomersMedium().then((data) => (customers.value = data));
// });
const selectedCustomers = ref();
const expandedRows = ref({});
const filters = ref();
const toast = useToast();
const onRowExpand = (event) => {
  toast.add({
    severity: "info",
    summary: "Transaction Expanded",
    // detail: event.data,
    life: 3000,
  });
};
const onRowCollapse = (event) => {
  toast.add({
    severity: "success",
    summary: "Transaction Collapsed",
    // detail: event.data,
    life: 3000,
  });
};
const customers = ref([
  {
    id: "2134678654321erwgfh",
    trx_date: "11/3/2024",
    trx_type: "CR",
    amount: "3000",
    classification: "Person to PERSON",
    desc: "FT2407505SK7,PUBLIC FINANCIAL MNGT REFORM SECRET/CRA PER DIEM,.RTGS/I/NCP/000004205670",
  },
  {
    id: "2134678654d321erwgfh",
    trx_date: "11/3/2024",
    trx_type: "DR",
    amount: "2500",
    classification: "Person to PERSON",
    desc: "AB32164B7724 AB32164B772 10,000.00 TRANSFER TO M-PESA 4254722752698",
  },
  {
    id: "2134er678654321erwgfh",
    trx_date: "11/3/2024",
    trx_type: "CR",
    amount: "3000",
    classification: "Person to PERSON",
    desc: "FT2407505SK7,PUBLIC FINANCIAL MNGT REFORM SECRET/CRA PER DIEM,.RTGS/I/NCP/000004205670",
  },
  {
    id: "21346734258654321erwgfh",
    trx_date: "11/3/2024",
    trx_type: "DR",
    amount: "2500",
    classification: "Person to PERSON",
    desc: "AB32164B7724 AB32164B772 10,000.00 TRANSFER TO M-PESA 4254722752698",
  },
  {
    id: "21346zxzx78654321erwgfh",
    trx_date: "11/3/2024",
    trx_type: "CR",
    amount: "3000",
    classification: "Person to PERSON",
    desc: "FT2407505SK7,PUBLIC FINANCIAL MNGT REFORM SECRET/CRA PER DIEM,.RTGS/I/NCP/000004205670",
  },
]);
const dt = ref();
const products = ref();
const exportCSV = () => {
  dt.value.exportCSV();
};
</script>
