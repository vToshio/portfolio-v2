<script setup>
import logo from '@/assets/images/logo.png';
import gh_icon from '@/assets/svg/gh-icon.svg';
import linkedin_icon from '@/assets/svg/linkedin-icon.svg';
import MenuButton from '../reactive/MenuButton.vue';
import translationIcon from '@/assets/svg/translation-icon.svg';

import { useIsMobile } from '@/lib/useIsMobile';
import { downloadResume } from '@/services/exportResume.js';
import { useLocale } from '@/lib/useLocale.js';

const { isMobile } = useIsMobile(835);
const { locale, localizedRoute, toggleLanguage } = useLocale();
</script>

<template>
    <header class="fixed top-0 z-100 w-full bg-neutral-100/80 backdrop-blur-md shadow-md shadow-neutral-200">
        <nav class="flex mx-auto justify-between md:justify-around items-stretch">
            <RouterLink :to="localizedRoute('home', '#hero')" class="group hover:cursor-pointer">
                <div class="flex py-5 text-2xl italic font-extrabold group-hover:scale-105 transition-all">
                    <span class="text-indigo-700 group-hover:text-indigo-500 transition-all">v</span>
                    <span class="group-hover:text-neutral-700 transition-all">Toshio</span>
                    <span class="text-indigo-700 group-hover:text-indigo-500 transition-all">.</span>
                </div>
                <!-- 
                <img class="scale-200 w-35 py-7 px-5 md:px-2" :src="logo" alt="Logo Vinícius Toshio">
                -->
            </RouterLink>
            
            <div v-if="!isMobile" class="flex items-stretch gap-3">
                <ul class="flex items-stretch text-base font-light text-shadow-2xs">
                    <RouterLink :to="localizedRoute('home', '#about')" class="navbar-item">
                        {{ $t('nav.about') }}
                    </RouterLink>
                    <RouterLink :to="localizedRoute('home', '#projects')" class="navbar-item">
                        {{ $t('nav.projects') }}
                    </RouterLink>
                    <RouterLink :to="localizedRoute('home', '#experiences')" class="navbar-item">
                        {{ $t('nav.experiences') }}
                    </RouterLink>
                    <RouterLink :to="localizedRoute('contact')" class="navbar-item">
                        {{ $t('nav.contact') }}
                    </RouterLink>
                    <li @click="downloadResume(locale)" class="navbar-item">
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
