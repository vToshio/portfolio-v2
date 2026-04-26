<script setup>
import esl_logo from '@/assets/images/esl-color.png';
import { defineProps, ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);
const checkScreenSize = () => {
    isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
});

const props = defineProps({
    company: {
        type: String,
        default: 'Empresa Teste'
    },
    logo: {
        type: String,
        default: esl_logo
    },
    job_title: {
        type: String,
        default: 'Desenvolvedor Full-Stack Web'
    },
    start: {
        type: String,
        default: '2025'
    },
    end: {
        type: String,
        default: 'Atual'
    },
    topics: {
        type: Array,
        default: [ 'Otimização de sistemas', 'Atendimento ao cliente', 'Trabalho em equipe' ]
    },
    skills: {
        type: Array,
        default: ['Ruby on Rails', 'TDD', 'VueJS']
    },
    actual: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="flex flex-col md:flex-row w-full gap-8 md:gap-10 px-10">
        <!-- Sidebar Lateral (Apenas Desktop) -->
        <div v-if="!isMobile" class="flex flex-col justify-between w-1/5">
            <div class="flex flex-col items-center gap-3 group">
                <a href="https://www.eslsistemas.com.br" target="_blank" class="rounded-xl shadow w-1/2 p-5 py-8">
                    <img :src="props.logo" class="group-hover:scale-110 transition-all" alt="Logo">
                </a>
                <span class="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6 text-center">
                    {{ props.start }} - {{ props.end }}
                </span>
            </div>
            
            <div class="flex flex-col">
                <span class="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">
                    Stack
                </span>
                <ul class="flex flex-wrap gap-3 list-none text-sm">
                    <li v-for="tech in props.skills" :key="tech"
                        class="font-light text-nowrap hover:text-indigo-500 hover:scale-110 transition-all">
                        {{ tech }}
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- Conteúdo Principal -->
        <div class="flex flex-col flex-1">
            <!-- Cabeçalho Mobile (Logo ao lado do Nome/Cargo) -->
            <div v-if="isMobile" class="flex flex-row items-center gap-4 mb-1">
                <div class="w-16 h-16 shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm p-2">
                    <img :src="props.logo" class="max-h-full max-w-full object-contain" alt="Logo">
                </div>
                <div class="flex flex-col">
                    <h1 class="text-2xl font-bold leading-tight">
                        {{ props.company }}
                    </h1>
                    <span class="text-sm uppercase tracking-widest text-gray-500 font-bold">
                        {{ props.job_title }}
                    </span>
                    <span class="text-xs text-gray-400 italic mt-1">
                        {{ props.start }} - {{ props.end }}
                    </span>
                </div>
            </div>

            <!-- Cabeçalho Desktop -->
            <div v-if="!isMobile" class="flex flex-col">
                <h1 class="text-3xl font-bold">
                    {{ props.company }}
                </h1>
                <span class="text-sm uppercase tracking-widest text-gray-500 font-bold">
                    {{ props.job_title }}
                </span>
            </div>
    
            <!-- Tópicos com texto justificado -->
            <ul class="list-disc list-outside ml-5 md:ml-4 mt-3 text-justify space-y-1">
                <li v-for="topic in topics" :key="topic"
                    class="tracking-normal font-light text-neutral-700">
                    {{ topic }}
                </li>
            </ul>

            <div v-if="isMobile" class="flex flex-col w-full mt-5 text-center">
                <span class="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">
                    Stack
                </span>
                <ul class="flex flex-wrap gap-2 justify-center">
                    <li v-for="tech in skills" :key="tech"
                        class="text-nowrap text-xs px-3 py-1 shadow border border-gray-400/30 rounded-2xl">
                            {{ tech }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>