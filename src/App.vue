<script setup>
import AppNavbar from './components/shared/AppNavbar.vue';
</script>

<template>
  <AppNavbar />

  <main class="mx-5 my-25 min-h-screen">
    <RouterView />
  </main>

  <footer></footer>
</template>

<style scoped></style>
