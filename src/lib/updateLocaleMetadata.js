import { DEFAULT_LOCALE, LOCALES, SUPPORTED_LOCALES } from '@/config/locales'

const findHeadLink = (rel, hreflang) =>
  [...document.head.querySelectorAll('link')].find(
    (link) => link.rel === rel && (link.hreflang || '') === (hreflang || '')
  )

const setHeadLink = ({ rel, hreflang, href }) => {
  const link = findHeadLink(rel, hreflang) ?? document.createElement('link')

  link.rel = rel
  link.href = href

  if (hreflang) {
    link.hreflang = hreflang
  }

  if (!link.isConnected) {
    document.head.appendChild(link)
  }
}

export const updateLocaleMetadata = ({ route, resolve }) => {
  const createUrl = (locale) => {
    const href = resolve({
      name: route.name,
      params: { ...route.params, locale }
    }).href

    return new URL(href, window.location.origin).href
  }

  const currentLocale = route.params.locale
  setHeadLink({ rel: 'canonical', href: createUrl(currentLocale) })

  SUPPORTED_LOCALES.forEach((locale) => {
    setHeadLink({
      rel: 'alternate',
      hreflang: LOCALES[locale].hreflang,
      href: createUrl(locale)
    })
  })

  setHeadLink({
    rel: 'alternate',
    hreflang: 'x-default',
    href: createUrl(DEFAULT_LOCALE)
  })
}
