export const LOCALES = Object.freeze({
  'pt-br': Object.freeze({
    i18nLocale: 'pt-BR',
    hreflang: 'pt-BR'
  }),
  'en-us': Object.freeze({
    i18nLocale: 'en-US',
    hreflang: 'en-US'
  })
})

export const SUPPORTED_LOCALES = Object.freeze(Object.keys(LOCALES))
export const DEFAULT_LOCALE = 'pt-br'
export const DEFAULT_I18N_LOCALE = LOCALES[DEFAULT_LOCALE].i18nLocale

export const normalizeLocale = (locale) => {
  const value = Array.isArray(locale) ? locale[0] : locale
  return typeof value === 'string' ? value.toLowerCase() : ''
}

export const isSupportedLocale = (locale) => Object.hasOwn(LOCALES, locale)

export const getNextLocale = (locale) => {
  const currentIndex = SUPPORTED_LOCALES.indexOf(locale)
  const nextIndex = (currentIndex + 1) % SUPPORTED_LOCALES.length
  return SUPPORTED_LOCALES[nextIndex]
}
