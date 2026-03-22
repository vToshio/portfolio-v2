<script setup>
import gh from '@/assets/svg/gh-icon.svg';
import { defineProps } from 'vue';

const props = defineProps({
    project_name: String,
    project_description: String,
    year: Number,
    tags: Array,
    github_url: String
});
</script>

<template>
    <div class="border border-dotted rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-neutral-400/30 p-5">
        <div class="flex justify-between">
            <h2 class="text-2xl font-bold tracking-tight mb-2">{{ project_name }}</h2>
            <span class="text-2xl font-light tracking-tight">{{ year }}</span>
        </div>
        <p class="text-sm tracking-wide text-justify">
            {{ project_description }}
        </p>

        <div class="flex flex-wrap gap-1 mt-3" v-if="tags != null && tags.length != 0">
            <div class="tag" v-for="tag in tags" :key="tag">
                <span class="text-sm px-5">{{ tag }}</span>
            </div>
        </div>
        <div class="flex justify-end gap-1 mt-3" v-if="github_url != null">
            <a :href="github_url" rel="noopener noreferrer" target="_blank">
                <button class="flex items-center gap-1 px-3 py-1 rounded-md border border-soli transition-colors duration-300 hover:text-neutral-100 hover:bg-indigo-500 hover:border-indigo-500 hover:cursor-pointer">
                    <img class="w-6" :src="gh" alt="Github Icon">
                    <span class="text-sm">Github</span>
                </button>
            </a>
        </div>
    </div>
</template>