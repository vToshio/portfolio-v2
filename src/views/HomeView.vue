<script setup>
import placeholder from '@/assets/images/photo-placeholder.png';
</script>

<template>
  <section id="hero" class="relative z-10 min-h-screen flex items-center text-neutral-100 bg-neutral-800 overflow-hidden">
    <div class="absolute z-30 mask-radial-at-top mask-radial-from-5% mask-radial-to-60% bg-teal-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-30 mask-radial-at-left mask-radial-from-5% mask-radial-to-60% bg-teal-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-20 mask-radial-from-5% mask-radial-to-90% bg-neutral-500/20 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-30 mask-radial-at-bottom mask-radial-from-5% mask-radial-to-60% bg-indigo-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-30 mask-radial-at-right mask-radial-from-5% mask-radial-to-60% bg-indigo-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="z-50 text-center mx-auto max-w-1/2">
      <div class="flex flex-col">
        <span class="font-light text-2xl text-nowrap text-shadow-2xs text-shadow-neutral-500">👋Olá! Me chamo</span>
        <h1 class="text-5xl font-bold my-3 italic text-shadow-2xs text-shadow-neutral-500">Vinícius Toshio</h1>
      </div>
      <div class="flex items-center justify-center my-3 py-1.5 rounded-full bg-sky-500 shadow-xs shadow-neutral-500">
        <span class="text-xs md:text-sm font-medium">Desenvolvedor Full-Stack</span>
      </div>
    </div>
  </section>

  <section id="about" class="flex flex-col justify-center my-15">
    <div class="text-center">
      <h1 class="text-4xl font-semibold">1. Sobre Mim</h1>
    </div>

    <hr class="my-3 mx-auto w-1/2">

    <div class="flex flex-col-reverse mt-10 gap-5 justify-center xl:flex-row mx-auto">
      <div class="flex flex-col gap-2 text-justify mx-5 xl:mx-0 xl:max-w-1/3 px-5 py-3">
        <p class="text-sm lg:text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet lacinia odio ut accumsan. Pellentesque convallis purus eget elit commodo auctor. Donec vestibulum eget nunc id bibendum. Suspendisse eu ligula erat. Vivamus fermentum purus urna, quis viverra nisi cursus in. Curabitur porttitor leo ut auctor suscipit. Vestibulum quis augue luctus ligula aliquet blandit. Aenean libero ipsum, mollis eget consectetur vel, consectetur ut urna. Vestibulum accumsan dignissim vestibulum. Pellentesque dapibus gravida augue quis viverra.
        </p>
        <p class="text-sm lg:text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet lacinia odio ut accumsan. Pellentesque convallis purus eget elit commodo auctor. Donec vestibulum eget nunc id bibendum. Suspendisse eu ligula erat. Vivamus fermentum purus urna, quis viverra nisi cursus in. Curabitur porttitor leo ut auctor suscipit. Vestibulum quis augue luctus ligula aliquet blandit. Aenean libero ipsum, mollis eget consectetur vel, consectetur ut urna. Vestibulum accumsan dignissim vestibulum. Pellentesque dapibus gravida augue quis viverra.
        </p>
      </div>
      <img class="w-100 mx-auto xl:mx-0 xl:max-w-1/2 rounded-xl" :src="placeholder" alt="">
    </div>
  </section>
</template>

