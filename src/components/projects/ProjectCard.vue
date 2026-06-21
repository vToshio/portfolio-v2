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
    <div class="flex flex-col justify-between border border-neutral-400/30 rounded-md transition-all duration-300 shadow hover:shadow-md hover:shadow-neutral-400/30 p-5">
        <a :href="github_url" rel="noopener noreferrer" target="_blank" class="flex flex-col grow">
            <div class="flex justify-between">
                <h2 class="text-2xl font-bold tracking-tight mb-2">{{ project_name }}</h2>
                <span class="text-2xl font-light tracking-tight">{{ year }}</span>
            </div>
            <p class="text-sm font-light text-justify">
                {{ project_description }}
            </p>
            <div class="flex flex-wrap gap-1 mt-auto pt-4" v-if="tags != null && tags.length != 0">
                <div class="tag-indigo w-28 h-7 inline-flex items-center justify-center truncate" v-for="tag in tags" :key="tag">
                    <span class="text-sm px-5">{{ tag }}</span>
                </div>
            </div>
        </a>
    </div>
</template>