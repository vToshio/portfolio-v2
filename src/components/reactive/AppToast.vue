<script setup>
defineProps({
    toasts: {
        type: Array,
        required: true
    }
});

defineEmits(['remove']);
</script>

<template>
    <div class="fixed bottom-8 right-8 z-100 flex flex-col gap-3 pointer-events-none">
        <TransitionGroup 
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="transform translate-y-10 opacity-0 scale-95"
            enter-to-class="transform translate-y-0 opacity-100 scale-100"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <div v-for="toast in toasts" :key="toast.id"
                 class="pointer-events-auto min-w-72 max-w-sm bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl shadow-neutral-500/10 rounded-2xl p-4 flex items-center gap-4">
                
                <div class="w-1 h-8 rounded-full shrink-0"
                     :class="{
                         'bg-emerald-500': toast.type === 'success',
                         'bg-rose-500': toast.type === 'error',
                         'bg-indigo-500': toast.type === 'info'
                     }">
                </div>

                <div class="flex flex-col gap-0.5">
                    <p class="text-sm text-neutral-800 leading-relaxed">
                        <span class="font-bold" :class="{
                            'text-emerald-600': toast.type === 'success',
                            'text-rose-600': toast.type === 'error',
                            'text-indigo-600': toast.type === 'info'
                        }">{{ toast.title }}</span>
                    </p>
                    <p>
                        {{ toast.message }}
                    </p>
                </div>

                <button @click="$emit('remove', toast.id)" 
                        class="ml-auto p-1 rounded-full hover:bg-neutral-200/50 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </TransitionGroup>
    </div>
</template>