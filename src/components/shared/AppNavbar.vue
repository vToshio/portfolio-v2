<script setup>
import logo from '@/assets/svg/logoipsum.svg';
import gh_icon from '@/assets/svg/gh-icon.svg';
import linkedin_icon from '@/assets/svg/linkedin-icon.svg';
import MenuButton from '../reactive/MenuButton.vue';
import translationIcon from '@/assets/svg/translation-icon.svg';

import { useIsMobile } from '@/lib/useIsMobile';
import { downloadResume } from '@/services/exportResume.js';
import { toggleLanguage } from '@/lib/useLocale.js';

const { isMobile } = useIsMobile(835);
</script>

<template>
    <header class="fixed top-0 z-100 w-full bg-neutral-100/80 backdrop-blur-md shadow-md shadow-neutral-200">
        <nav class="flex mx-auto justify-between lg:justify-around items-stretch">
            <RouterLink :to="{ path: '/', hash: '#hero' }" class="hover:cursor-pointer">
                <img class="w-35 py-4 px-4 md:px-2" :src="logo" alt="Logo Vinícius Toshio">
            </RouterLink>
            
            <div v-if="!isMobile" class="flex items-stretch gap-3">
                <ul class="flex items-stretch text-base font-light text-shadow-2xs">
                    <RouterLink :to="{ path: '/', hash: '#about' }" class="navbar-item">
                        {{ $t('nav.about') }}
                    </RouterLink>
                    <RouterLink :to="{ path: '/', hash: '#projects' }" class="navbar-item">
                        {{ $t('nav.projects') }}
                    </RouterLink>
                    <RouterLink :to="{ path: '/', hash: '#experiences' }" class="navbar-item">
                        {{ $t('nav.experiences') }}
                    </RouterLink>
                    <RouterLink to="/contact" class="navbar-item">
                        {{ $t('nav.contact') }}
                    </RouterLink>
                    <li @click="downloadResume()" class="navbar-item">
                        {{ $t('nav.resume') }}
                    </li>
                </ul>

                <div class="flex items-stretch">
                    <button class="navbar-item group" @click="toggleLanguage()">
                        <img :src="translationIcon" class="w-8 group-hover:scale-110 transition-all" alt="ícone de tradução">
                    </button>
                    <a class="navbar-item group"
                       href="https://github.com/vToshio" rel="noopener noreferrer" target="_blank">
                        <img class="w-8 group-hover:scale-110 transition-all" :src="gh_icon" alt="Meu Github">
                    </a>
                    <a class="navbar-item group"
                       href="https://www.linkedin.com/in/vtoshio" rel="noopener noreferrer" target="_blank">
                        <img class="w-8 group-hover:scale-110 transition-all" :src="linkedin_icon" alt="Meu LinkedIn">
                    </a>
                </div>
            </div>
            <template v-else>
                <MenuButton />
            </template>
        </nav>
    </header>
</template>