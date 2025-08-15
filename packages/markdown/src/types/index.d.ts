declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module 'markdown-it'
declare module 'markdown-it-abbr'
declare module 'markdown-it-anchor'
declare module 'markdown-it-container'
declare module 'markdown-it-deflist'
declare module 'markdown-it-emoji'
declare module 'markdown-it-footnote'
declare module 'markdown-it-ins'
declare module 'markdown-it-mark'
declare module 'markdown-it-sub'
declare module 'markdown-it-sup'
