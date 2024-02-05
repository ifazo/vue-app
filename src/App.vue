<template>
  <div>
    <TheHeader />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue'
import TheHeader from './components/TheHeader.vue';
</script>

<style scoped></style>
