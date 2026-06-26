<script setup>
import { useIsMobile } from '@/lib/useIsMobile';

const { isMobile } = useIsMobile(912);
</script>

<template>
    <a href="https://www.github.com/vToshio"
       rel="noopener noreferrer"
       target="_blank"
       class="group border border-neutral-400/30 rounded-md transition-all duration-300 shadow hover:shadow-md hover:shadow-indigo-500/30 hover:cursor-pointer">
        <div class="flex justify-center items-center w-full h-full">
            <h2
                class="text-2xl font-bold tracking-tight text-center p-10 transition-all duration-300"
                :class="!isMobile
                    ? 'group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-teal-500 group-hover:via-indigo-500 group-hover:to-purple-500 group-hover:text-transparent'
                    : 'text-transparent bg-linear-to-r bg-clip-text from-teal-500 via-indigo-500 to-purple-500'"
            >
                {{ $t('home.projects.all') }}
            </h2>
        </div>
    </a> 
</template>