<script setup>
import AppNavbar from './components/shared/AppNavbar.vue';
</script>

<template>
  <AppNavbar />

  <main class="min-h-screen">
    <RouterView />
  </main>

  <footer></footer>
</template>

<style scoped></style>
