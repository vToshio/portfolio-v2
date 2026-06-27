import { createI18n } from 'vue-i18n'

import ptBR from '@/locales/pt-BR.json'
import enUS from '@/locales/en-US.json'
import { DEFAULT_I18N_LOCALE } from '@/config/locales'

const i18n = createI18n({
    legacy: false,
    locale: DEFAULT_I18N_LOCALE,
    fallbackLocale: DEFAULT_I18N_LOCALE,
    messages: { 
        'pt-BR': ptBR,
        'en-US': enUS
    }
})

export default i18n
