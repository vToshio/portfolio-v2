import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {
    DEFAULT_LOCALE,
    getNextLocale,
    isSupportedLocale,
    normalizeLocale
} from '@/config/locales'

export const useLocale = () => {
    const route = useRoute()
    const router = useRouter()

    const locale = computed(() => {
        const routeLocale = normalizeLocale(route.params.locale)
        return isSupportedLocale(routeLocale) ? routeLocale : DEFAULT_LOCALE
    })

    const localizedRoute = (name, hash) => ({
        name,
        params: { locale: locale.value },
        ...(hash ? { hash } : {})
    })

    const toggleLanguage = () => {
        return router.push({
            name: route.name || 'home',
            params: { ...route.params, locale: getNextLocale(locale.value) },
            query: route.query,
            hash: route.hash
        })
    }

    return { locale, localizedRoute, toggleLanguage }
}
