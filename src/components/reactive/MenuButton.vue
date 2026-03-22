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
        <div class="fixed top-15 right-3 rounded-md bg-neutral-100 shadow-md shadow-neutral-500">
            <ul class="flex flex-col justify-center text-base">
                <li class="menu-item-top">
                    Sobre
                </li>
                <li class="menu-item">
                    Projetos
                </li>
                <li class="menu-item">
                    Experiência
                </li>
                <li class="menu-item">
                    Contato
                </li>
                <li class="menu-item">
                    Currículo
                </li>
                <hr class="my-1 mx-2 text-neutral-800">
                <li class="menu-item">
                    <a href="https://www.github.com/vToshio" rel="noopenner noreferrer" target="_blank" class="flex gap-1">
                        <img :src="gh_icon" class="w-4" alt="Meu Github">
                        Github
                    </a>
                </li>
                <li class="menu-item-bottom">
                    <a href="https://www.linkedin.com/in/vtoshio" rel="noopenner noreferrer" target="_blank" class="flex gap-1">
                        <img :src="linkedin_icon" class="w-4" alt="Meu Github">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    </template>
</template>