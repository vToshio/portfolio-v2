import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import i18n from '@/i18n'

const DEFAULT_LOCALE = 'pt-br'
const locales = {
  'pt-br': 'pt-BR',
  'en-us': 'en-US'
}

const routes = [
  { path: '/', redirect: `/${DEFAULT_LOCALE}/home` },
  { path: '/home', redirect: `/${DEFAULT_LOCALE}/home` },
  { path: '/contact', redirect: `/${DEFAULT_LOCALE}/contact` },
  { path: '/:locale/home', name: 'home', component: HomeView, meta: { page: 'home' } },
  { path: '/:locale/contact', name: 'contact', component: ContactView, meta: { page: 'contact' } },
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

const setAlternateLink = (rel, hreflang, href) => {
  const selector = `link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ''}`
  let link = document.head.querySelector(selector)

  if (!link) {
    link = document.createElement('link')
    link.rel = rel
    if (hreflang) link.hreflang = hreflang
    document.head.appendChild(link)
  }

  link.href = href
}

router.beforeEach((to) => {
  if (!to.meta.page) return true

  const urlLocale = String(to.params.locale).toLowerCase()
  if (!locales[urlLocale]) {
    return {
      name: to.name,
      params: { ...to.params, locale: DEFAULT_LOCALE },
      query: to.query,
      hash: to.hash,
      replace: true
    }
  }

  i18n.global.locale.value = locales[urlLocale]
  document.documentElement.lang = locales[urlLocale]
  localStorage.setItem('locale', locales[urlLocale])

  const origin = window.location.origin
  const page = to.meta.page
  setAlternateLink('canonical', null, `${origin}/${urlLocale}/${page}`)
  setAlternateLink('alternate', 'pt-BR', `${origin}/pt-br/${page}`)
  setAlternateLink('alternate', 'en-US', `${origin}/en-us/${page}`)
  setAlternateLink('alternate', 'x-default', `${origin}/${DEFAULT_LOCALE}/${page}`)

  return true
})

export default router
