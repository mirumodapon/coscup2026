import type { ViteSSGContext } from 'vite-ssg'
import { i18n } from '@/modules/i18n'

export function setupModules({ app }: ViteSSGContext) {
  app.use(i18n)
}
