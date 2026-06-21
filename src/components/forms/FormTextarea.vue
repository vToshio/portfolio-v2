<script setup>
const props = defineProps({
    modelValue: String,
    label: String,
    id: String,
    name: String,
    maxlength: Number,
    rows: {
        type: Number,
        default: 5
    }
});
defineEmits(['update:modelValue']);
</script>

<template>
    <div class="relative w-full">
        <textarea :id="props.id" :name="props.name || props.id" :rows="props.rows" 
                  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
                  :maxlength="props.maxlength" placeholder=" " required=""
                  class="peer block w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 pb-2.5 pt-6 text-sm text-gray-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-0 transition-all resize-none"></textarea>
        <label :for="props.id" 
               class="absolute left-4 top-4 z-10 origin-left -translate-y-3 scale-75 transform text-neutral-500 duration-150 
               peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 
               peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-indigo-600">
            {{ props.label }}
        </label>
    </div>
</template>

<style scoped></style>