import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import { routes } from 'vue-router/auto-routes'
import App from '@/App.vue'
import 'virtual:uno.css'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
})

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(i18n)
  },
)
