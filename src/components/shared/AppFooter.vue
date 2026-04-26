<script setup>
import github from '@/assets/svg/gh-icon.svg';
import linkedin_icon from '@/assets/svg/linkedin-icon.svg';
</script>

<template>
  <footer class="bg-white/80 backdrop-blur-md text-neutral-500 py-16 px-6 border-t border-neutral-200">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold text-neutral-900 tracking-tight">
          Vinícius <span class="text-indigo-500">Toshio</span>
        </h2>
        <p class="text-sm font-normal max-w-xs leading-relaxed">
          Transformando ideias em soluções digitais eficientes e escaláveis.
        </p>
      </div>

      <nav class="flex flex-wrap justify-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
        <a href="#about" class="hover:text-indigo-500 transition-colors">
            Sobre
        </a>
        <a href="#projects" class="hover:text-indigo-500 transition-colors">
            Projetos
        </a>
        <a href="#experiences" class="hover:text-indigo-500 transition-colors">
            Experiências
        </a>
        <a href="" rel="noopenner noreferren" target="_blank" class="hover:text-indigo-500 transition-colors">
            Contato
        </a>
      </nav>

      <div class="flex gap-4 items-center">
        <a href="https://github.com/vToshio" target="_blank" 
           class="p-2.5 rounded-full bg-neutral-50 hover:bg-neutral-100 transition-all border border-neutral-200 group shadow-sm">
          <img :src="github" alt="GitHub" class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity">
        </a>
        <a href="https://www.linkedin.com/in/vtoshio" target="_blank" 
           class="p-2.5 rounded-full bg-neutral-50 hover:bg-neutral-100 transition-all border border-neutral-200 group shadow-sm">
          <img :src="linkedin_icon" alt="GitHub" class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity">
        </a>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="max-w-5xl mx-auto mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-medium">
      <p>© {{ new Date().getFullYear() }} — Desenvolvido com Vue.js e Tailwind CSS</p>
      <p>Araras, SP</p>
    </div>
  </footer>
</template>

<style scoped></style>