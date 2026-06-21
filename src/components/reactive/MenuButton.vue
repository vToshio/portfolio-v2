<script setup>
import menu_icon from '@/assets/svg/menu.svg';
import gh_icon from '@/assets/svg/gh-icon.svg';
import linkedin_icon from '@/assets/svg/linkedin-icon.svg';

import { ref } from 'vue';

const clicked = ref(false)
</script>

<template>
    <button @click="clicked = !clicked" class="cursor-pointer px-5 hover:bg-neutral-200">
        <img class="w-6" :src="menu_icon" alt="">
    </button>

    <template v-if="clicked">
        <div class="fixed inset-0 z-40" @click="clicked = false"></div>

        <div class="fixed top-16 right-4 z-50 min-w-45 rounded-xl border border-neutral-200/60 bg-white/95 backdrop-blur-md p-1.5 shadow-xl shadow-neutral-200/50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <ul class="flex flex-col gap-0.5 text-sm">
                <RouterLink :to="{ path: '/', hash: '#about' }" class="menu-item">
                    Sobre
                </RouterLink>
                <RouterLink :to="{ path: '/', hash: '#projects' }" class="menu-item">
                    Projetos
                </RouterLink>
                <RouterLink :to="{ path: '/', hash: '#experiences' }" class="menu-item">
                    Experiências
                </RouterLink>
                <RouterLink to="/contact" class="menu-item">
                    Contato
                </RouterLink>
                <li class="menu-item">
                    Currículo
                </li>
                
                <!-- Divisor moderno e sutil -->
                <div class="my-1.5 border-t border-neutral-300"></div>
                
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
</template>