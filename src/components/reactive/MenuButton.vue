<script setup>
import menu_icon from '@/assets/svg/menu.svg';
import gh_icon from '@/assets/svg/gh-icon.svg';
import linkedin_icon from '@/assets/svg/linkedin-icon.svg';
import translationIcon from '@/assets/svg/translation-icon.svg';

import { ref, onMounted, onBeforeUnmount } from 'vue';
import { downloadResume } from '@/services/exportResume';
import { toggleLanguage } from '@/lib/useLocale';

const clicked = ref(false)
const menuRef = ref(null)

const handleClickOutside = (e) => {
    if (menuRef.value && !menuRef.value.contains(e.target)) {
        clicked.value = false
    }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
    <div ref="menuRef" class="relative">
        <button @click="clicked = !clicked" class="cursor-pointer h-full p-5 hover:bg-neutral-200">
            <img class="w-6" :src="menu_icon" alt="">
        </button>

        <template v-if="clicked">
            <div class="fixed inset-0 z-40 bg-transparent" @click="clicked = false"></div>
            <div class="fixed top-16 right-4 z-50 min-w-45 rounded-xl border border-neutral-200/60 bg-white/95 backdrop-blur-md p-1.5 shadow-xl shadow-neutral-200/50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                <ul class="flex flex-col gap-0.5 text-sm">
                    <RouterLink :to="{ path: '/', hash: '#about' }" class="menu-item">
                        {{ $t('nav.about') }}
                    </RouterLink>
                    <RouterLink :to="{ path: '/', hash: '#projects' }" class="menu-item">
                        {{ $t('nav.projects') }}
                    </RouterLink>
                    <RouterLink :to="{ path: '/', hash: '#experiences' }" class="menu-item">
                        {{ $t('nav.experiences') }}
                    </RouterLink>
                    <RouterLink to="/contact" class="menu-item">
                        {{ $t('nav.contact') }}
                    </RouterLink>
                    <li @click="downloadResume()" class="menu-item">
                        {{ $t('nav.resume') }}
                    </li>
                    
                    <!-- Divisor moderno e sutil -->
                    <div class="my-1.5 border-t border-neutral-300"></div>
                    <li>
                        <button class="menu-item w-full gap-2.5" @click="toggleLanguage()">
                            <img :src="translationIcon" class="w-4 opacity-70 transition-all" alt="ícone de tradução">
                            <span>{{ $t('nav.language') }}</span>
                        </button>
                    </li>
                    <li>
                        <a href="https://www.github.com/vToshio" rel="noopener noreferrer" target="_blank" class="menu-item gap-2.5">
                            <img :src="gh_icon" class="w-4 h-4 opacity-70" alt="">
                            <span>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vtoshio" rel="noopener noreferrer" target="_blank" class="menu-item gap-2.5">
                            <img :src="linkedin_icon" class="w-4 h-4 opacity-70" alt="">
                            <span>LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>