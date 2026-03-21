<script setup>
import menu_icon from '@/assets/svg/menu.svg';
import gh_icon from '@/assets/svg/gh-icon.svg';
import linkedin_icon from '@/assets/svg/linkedin-icon.svg';

import { ref } from 'vue';

const clicked = ref(false)
</script>

<template>
    <button @click="clicked = !clicked" class="cursor-pointer px-3 hover:bg-neutral-200">
        <img class="w-6" :src="menu_icon" alt="">
    </button>

    <template v-if="clicked">
        <div class="fixed top-12 right-2 rounded-md bg-neutral-100 shadow-md shadow-neutral-300">
            <ul class="flex flex-col justify-center text-xs">
                <li class="menu-item-top">
                    sobre
                </li>
                <li class="menu-item">
                    experiência
                </li>
                <li class="menu-item">
                    projetos
                </li>
                <li class="menu-item">
                    contato
                </li>
                <li class="menu-item">
                    currículo
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