import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import '@/assets/css/style.css'
import pt from '@/locales/pt.json'

const i18n = createI18n({
    locale: 'pt',
    fallback_locale: 'pt-br',
    messages: { pt }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
