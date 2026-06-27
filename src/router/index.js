import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import i18n from '@/i18n'
import { DEFAULT_LOCALE, LOCALES, isSupportedLocale, normalizeLocale } from '@/config/locales'
import { updateLocaleMetadata } from '@/lib/updateLocaleMetadata'

const routes = [
  { path: '/', redirect: `/${DEFAULT_LOCALE}/home` },
  { path: '/home', redirect: `/${DEFAULT_LOCALE}/home` },
  { path: '/contact', redirect: `/${DEFAULT_LOCALE}/contact` },
  { path: '/:locale/home', name: 'home', component: HomeView, meta: { localized: true } },
  { path: '/:locale/contact', name: 'contact', component: ContactView, meta: { localized: true } },
  { path: '/:pathMatch(.*)*', redirect: `/${DEFAULT_LOCALE}/home` }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

router.beforeEach((to) => {
  if (!to.meta.localized) return true

  const locale = normalizeLocale(to.params.locale)
  const localeIsSupported = isSupportedLocale(locale)
  const needsRedirect = !localeIsSupported || to.params.locale !== locale

  if (needsRedirect) {
    return {
      name: to.name,
      params: {
        ...to.params,
        locale: localeIsSupported ? locale : DEFAULT_LOCALE
      },
      query: to.query,
      hash: to.hash,
      replace: true
    }
  }

  i18n.global.locale.value = LOCALES[locale].i18nLocale
  document.documentElement.lang = LOCALES[locale].i18nLocale

  return true
})

router.afterEach((to) => {
  if (to.meta.localized) {
    updateLocaleMetadata({
      route: to,
      resolve: (location) => router.resolve(location)
    })
  }
})

export default router
