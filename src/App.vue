<script setup>
import AppNavbar from './components/shared/AppNavbar.vue';
import AppFooter from './components/shared/AppFooter.vue';
</script>

<template>
  <AppNavbar />

  <main class="min-h-screen">
    <RouterView />
  </main>

  <AppFooter />
</template>

<style scoped></style>
