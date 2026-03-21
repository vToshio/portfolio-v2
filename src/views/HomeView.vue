<script setup>
  import { ref } from 'vue';

  const nome = ref('Mundo');
</script>

<template>
  <h1>Olá {{nome}}!</h1>
</template>

