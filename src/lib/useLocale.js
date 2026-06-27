import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const DEFAULT_LOCALE = 'pt-br'
const supportedLocales = ['pt-br', 'en-us']

export const useLocale = () => {
    const route = useRoute()
    const router = useRouter()

    const locale = computed(() => {
        const routeLocale = String(route.params.locale || '').toLowerCase()
        return supportedLocales.includes(routeLocale) ? routeLocale : DEFAULT_LOCALE
    })

    const localizedRoute = (name, hash) => ({
        name,
        params: { locale: locale.value },
        ...(hash ? { hash } : {})
    })

    const toggleLanguage = () => {
        const targetLocale = locale.value === 'pt-br' ? 'en-us' : 'pt-br'

        return router.push({
            name: route.name || 'home',
            params: { ...route.params, locale: targetLocale },
            query: route.query,
            hash: route.hash
        })
    }

    return { locale, localizedRoute, toggleLanguage }
}
