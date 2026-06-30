import { DEFAULT_LOCALE, LOCALES, isSupportedLocale, normalizeLocale } from '@/config/locales'

export const downloadResume = (locale) => {
    const normalizedLocale = normalizeLocale(locale)
    const routeLocale = isSupportedLocale(normalizedLocale) ? normalizedLocale : DEFAULT_LOCALE
    const resumeLocale = LOCALES[routeLocale].i18nLocale
    const url = `${import.meta.env.BASE_URL}resume-2026_${resumeLocale}.pdf`

    window.open(url, '_blank', 'noopener noreferrer')
}
