<template>
  <div>
    <HeroComponent />
    
    <Toast />
    <Button label="Show" @click="show()" />

  </div>
</template>

<script setup lang="ts">
import HeroComponent from '@/components/HeroComponent.vue'
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';

const toast = useToast();

const show = () => {
  toast.add({ severity: 'error', summary: 'Info', detail: 'Message Content', life: 3000 });
};

</script>

<style scoped></style>
