import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from '@/App.vue'
import { setupModules } from '@/modules'
import 'virtual:uno.css'

export const createApp = ViteSSG(
  App,
  {
    base: '/',
    routes,
  },
  setupModules,
)
