<script setup>
import FormField from '@/components/forms/FormField.vue';
import FormSelect from '@/components/forms/FormSelect.vue';
import FormTextarea from '@/components/forms/FormTextarea.vue';
import AppToast from '@/components/reactive/AppToast.vue';

import { useToast } from '@/lib/useToast';
import { useContactForm } from '@/lib/useContactForm';
import { useIsMobile } from '@/lib/useIsMobile';
import { ref } from 'vue';

import githubIcon from '@/assets/svg/gh-icon.svg';
import chattingImg from '@/assets/svg/storyset/chatting.svg';

const contactForm = ref(null);

// Inicialização das lógicas segregadas
const { toasts, addToast, removeToast } = useToast();
const { formData, isSending, sendEmail } = useContactForm(addToast);
const { isMobile } = useIsMobile(1024);
</script>
<template>
    <AppToast :toasts="toasts" @remove="removeToast" />

    <section id="title" class="flex justify-center max-w-6xl mx-auto mt-40 mb-15">
        <div class="flex flex-col text-center w-3/4">
            <h1 class="text-6xl font-bold tracking-tight mb-5 text-neutral-900">
                {{ $t('contact.title') }}
            </h1>
            <span class="flex text-lg font-light justify-center text-neutral-900">
                {{ $t('contact.content') }}
            </span>
        </div>
    </section>

    <section id="form" class="flex flex-col-reverse lg:flex-row max-w-6xl mx-auto mb-25 border border-gray-300/40 rounded-xl shadow overflow-hidden">
        <div class="flex flex-col w-full lg:w-1/2 border-t lg:border-t-0 lg:border-r border-gray-400/30 py-10">
            <div class="flex flex-col gap-2 items-end md:items-center mb-8 px-10">
                <h2 class="text-3xl font-bold tracking-tight text-neutral-900 text-right lg:text-center">
                   {{ $t('contact.form.title') }}
                </h2>
                <hr class="w-12 border-t-4 border-indigo-500 rounded-full">
            </div>
            <form ref="contactForm" @submit.prevent="sendEmail" class="flex flex-col gap-5 px-10">
                <FormField v-model="formData.from_name" :label="$t('contact.form.fields.name')" id="nome" name="from_name" :maxlength="100" />
                
                <FormField v-model="formData.reply_to" :label="$t('contact.form.fields.email')" id="email" name="reply_to" type="email" :maxlength="254" />
                
                <FormSelect v-model="formData.subject_theme" :label="$t('contact.form.fields.theme.label')" id="tema" name="subject_theme"
                            :options="[
                                { value: 'pergunta', label:  $t('contact.form.fields.theme.opt1') },
                                { value: 'desenvolvimento', label: $t('contact.form.fields.theme.opt2') },
                                { value: 'proposta', label: $t('contact.form.fields.theme.opt3') }
                            ]"/>

                <FormField v-model="formData.subject" :label="$t('contact.form.fields.subject')" id="assunto" name="subject" :maxlength="150" />

                <FormTextarea v-model="formData.message" :label="$t('contact.form.fields.message')" id="mensagem" name="message" :maxlength="2000" />
                
                <button type="submit" 
                        :disabled="isSending"
                        class="btn-indigo mx-auto mt-3">
                    {{ isSending ? $t('contact.form.fields.button.sending') : $t('contact.form.fields.button.send') }}
                </button>
            </form>
        </div>
        
        <div class="flex flex-col w-full lg:w-1/2 py-10 justify-between">
            <div class="flex flex-col gap-2 items-left md:items-center mb-8 lg:md-0 px-10">
                <h2 class="text-3xl font-bold tracking-tight text-neutral-900 text-left lg:text-center">
                    {{ $t('contact.informations.title') }}
                </h2>
                <hr class="w-12 border-t-4 border-indigo-500 rounded-full">
            </div>
            
            <div class="flex flex-col gap-8 px-10">
                <template v-if="!isMobile">
                    <img :src="chattingImg"
                         class="mx-auto w-2/3"
                         alt="Imagem de dois personagens conversando.">
                </template>

                <div class="flex flex-col gap-1 md:text-center">
                    <span class="text-sm uppercase tracking-widest text-gray-500 font-bold">
                        {{ $t('contact.informations.email') }}
                    </span>
                    <a href="mailto:v.toshio@exemplo.com" class="text-xl font-light text-neutral-700 hover:text-indigo-600 transition-colors">
                        vtoshio@exemplo.com
                    </a>
                </div>

                <div class="flex flex-col gap-3 md:text-center md:justify-center">
                    <span class="text-sm uppercase tracking-widest text-gray-500 font-bold">
                        {{ $t('contact.informations.social_networks') }}
                    </span>
                    <div class="flex gap-4 md:justify-center">
                        <a href="https://github.com/vToshio" target="_blank" class="p-3 bg-neutral-100 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                            <img :src="githubIcon" alt="GitHub" class="w-6 h-6 grayscale group-hover:grayscale-0 transition-all">
                        </a>
                        <a href="https://linkedin.com/in/vtoshio" target="_blank" class="p-3 bg-neutral-100 rounded-xl hover:bg-white hover:shadow-md transition-all group flex items-center justify-center">
                            <span class="text-xl font-bold text-neutral-400 group-hover:text-blue-600 transition-all leading-none">in</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
