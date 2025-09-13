import { ViteSSG } from 'vite-ssg'
import App from '@/App.vue'
import { routes } from '@/routes'
import 'virtual:uno.css'

export const createApp = ViteSSG(App, {
  base: '/',
  routes,
})
