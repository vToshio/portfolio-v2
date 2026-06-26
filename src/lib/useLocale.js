import i18n from '@/i18n'

export const changeLanguage = (lang) => {
    i18n.global.locale.value = lang
    localStorage.setItem('locale', lang)
}

export const toggleLanguage = () => {
    const newLocale =
        i18n.global.locale.value === 'pt-BR'
            ? 'en-US'
            : 'pt-BR'

    changeLanguage(newLocale)
}

export const getCurrentLanguage = () => {
    return i18n.global.locale.value
}