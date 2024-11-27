<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();
onMounted(() => {
  initFlowbite();
});
</script>
