import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';

export function useContactForm(addToast) {
    const isSending = ref(false);
    const formData = reactive({
        from_name: '',
        reply_to: '',
        subject_theme: 'faq',
        subject: '',
        message: ''
    });

    const sanitizeInput = (text) => {
        return text.replace(/<[^>]*>?/gm, '').trim();
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.reply_to)) {
            addToast('Por favor, insira um e-mail válido.', 'error');
            return false;
        }
        if (formData.message.length < 10) {
            addToast('A mensagem deve ter pelo menos 10 caracteres.', 'error');
            return false;
        }
        return true;
    };

    const sendEmail = async () => {
        if (!validateForm()) return;

        isSending.value = true;

        const sanitizedData = {
            from_name: sanitizeInput(formData.from_name),
            reply_to: formData.reply_to.trim(),
            subject_theme: formData.subject_theme,
            subject: sanitizeInput(formData.subject),
            message: sanitizeInput(formData.message),
            'g-recaptcha-response': 'TOKEN_HERE'
        };

        const SERVICE_ID = 'service_xg22i6s';
        const TEMPLATE_ID = 'template_2irjgf8';
        const PUBLIC_KEY = 'GR4qvfyYkm70vIUBh';

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, sanitizedData, PUBLIC_KEY);
            addToast('Mensagem enviada com sucesso!', 'success');
            // Reseta o formulário
            Object.keys(formData).forEach(key => formData[key] = key === 'subject_theme' ? 'faq' : '');
        } catch (error) {
            console.error('EmailJS Error Details:', error);
            addToast('Não foi possível enviar sua mensagem agora.', 'error');
        } finally {
            isSending.value = false;
        }
    };

    return { formData, isSending, sendEmail };
}