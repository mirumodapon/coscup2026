import { ViteSSG } from 'vite-ssg'
import App from '@/App.vue'
import { setupModules } from '@/modules'
import { routes } from '@/routes'
import 'virtual:uno.css'

export const createApp = ViteSSG(
  App,
  {
    base: '/',
    routes,
  },
  setupModules,
)
