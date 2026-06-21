<script setup>
const props = defineProps({
    label: String,
    id: String,
    name: String,
    options: {
        type: Array,
        default: () => [] // Espera [{ value: 'v', label: 'L' }]
    }
});
</script>

<template>
    <div class="relative w-full">
        <select :id="props.id" :name="props.name || props.id" required
                class="peer block w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 pb-2.5 pt-6 text-sm text-gray-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-0 transition-all cursor-pointer">
            <option value="" disabled selected hidden></option>
            <option v-for="option in props.options" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
        </select>
        <label :for="props.id" 
               class="absolute left-4 top-4 z-10 origin-left -translate-y-3 scale-75 transform text-neutral-500 duration-150 
               peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-indigo-600
               peer-valid:-translate-y-3 peer-valid:scale-75">
            {{ props.label }}
        </label>
        
        <!-- Custom arrow icon -->
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
        </div>
    </div>
</template>

<style scoped>
/* Remove a seta padrão do sistema */
select { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
/* Esconde o label quando o select está "vazio" e não focado (usando o truque do required) */
select:invalid { color: transparent; }
</style>