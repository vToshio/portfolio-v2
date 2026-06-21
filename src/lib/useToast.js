import { ref } from 'vue';

export function useToast() {
    const toasts = ref([]);

    const addToast = (message, type = 'info') => {
        const id = Date.now();
        const title = type === 'success' ? 'Sucesso' : type === 'error' ? 'Erro' : 'Aviso';
        
        toasts.value.push({ id, message, type, title });

        setTimeout(() => {
            removeToast(id);
        }, 5000);
    };

    const removeToast = (id) => {
        toasts.value = toasts.value.filter(t => t.id !== id);
    };

    return { toasts, addToast, removeToast };
}