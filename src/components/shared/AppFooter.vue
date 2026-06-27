<script setup>
import github from '@/assets/svg/gh-icon.svg';
import linkedin_icon from '@/assets/svg/linkedin-icon.svg';
import { useLocale } from '@/lib/useLocale';

const { localizedRoute } = useLocale();
</script>

<template>
  <footer class="bg-white/80 backdrop-blur-md text-neutral-500 py-16 px-6 border-t border-neutral-200">
    <div class="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold text-neutral-900 tracking-tight">
          Vinícius <span class="text-indigo-500">Toshio</span>
        </h2>
        <p class="text-sm font-normal max-w-xs leading-relaxed">
          {{ $t('footer.catch-phrase') }}
        </p>
      </div>

      <nav class="flex flex-wrap justify-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
        <RouterLink :to="localizedRoute('home', '#about')" class="hover:text-indigo-500 transition-colors">
            {{ $t('nav.about') }}
        </RouterLink>
        <RouterLink :to="localizedRoute('home', '#projects')" class="hover:text-indigo-500 transition-colors">
            {{ $t('nav.projects') }}
        </RouterLink>
        <RouterLink :to="localizedRoute('home', '#experiences')" class="hover:text-indigo-500 transition-colors">
            {{ $t('nav.experiences') }}
        </RouterLink  >
        <RouterLink :to="localizedRoute('contact')" class="hover:text-indigo-500 transition-colors">
            {{ $t('nav.contact') }}
        </RouterLink>
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

    <div class="max-w-5xl mx-auto mt-16 pt-8 border-t border-neutral-200 flex flex-col lg:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-medium">
      <p>© {{ new Date().getFullYear() }} — {{ $t('footer.development') }}</p>
      <p>Araras, SP</p>
    </div>
  </footer>
</template>

<style scoped></style>
