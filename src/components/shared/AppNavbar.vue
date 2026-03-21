<script setup>
import logo from '@/assets/svg/logoipsum.svg';
import gh_icon from '@/assets/svg/gh-icon.svg';
import linkedin_icon from '@/assets/svg/linkedin-icon.svg';
import MenuButton from '../reactive/MenuButton.vue';

import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);
</script>

<template>
    <header class="fixed top-0 z-100 w-full bg-neutral-100 shadow-md shadow-neutral-200">
        <nav class="flex mx-auto justify-between md:justify-around items-stretch">
            <img class="w-35 py-4 px-4 md:px-2" :src="logo" alt="Logo Vinícius Toshio">
            
            <div v-if="!isMobile" class="flex items-stretch gap-3">
                <ul class="flex items-stretch text-base font-light text-shadow-2xs">
                    <li class="navbar-item">
                        sobre
                    </li>
                    <li class="navbar-item">
                        experiência
                    </li>
                    <li class="navbar-item">
                        projetos
                    </li>
                    <li class="navbar-item">
                        contato
                    </li>
                    <li class="navbar-item">
                        currículo
                    </li>
                </ul>

                <div class="flex items-stretch">
                    <a class="navbar-item"
                       href="https://github.com/vToshio" rel="noopener noreferrer" target="_blank">
                        <img class="w-8" :src="gh_icon" alt="Meu Github">
                    </a>
                    <a class="navbar-item"
                       href="https://www.linkedin.com/in/vtoshio" rel="noopener noreferrer" target="_blank">
                        <img class="w-8" :src="linkedin_icon" alt="Meu LinkedIn">
                    </a>
                </div>
            </div>
            <template v-else>
                <MenuButton />
            </template>
        </nav>
    </header>
</template>