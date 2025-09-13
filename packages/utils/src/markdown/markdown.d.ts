import type { SimplePlugin } from 'markdown-it'

declare module 'markdown-it-container' {
  export default SimplePlugin
}

declare module 'markdown-it-abbr' {
  export default SimplePlugin
}

declare module 'markdown-it-deflist' {
  export default SimplePlugin
}

declare module 'markdown-it-footnote' {
  export default SimplePlugin
}

declare module 'markdown-it-ins' {
  export default SimplePlugin
}

declare module 'markdown-it-mark' {
  export default SimplePlugin
}

declare module 'markdown-it-sub' {
  export default SimplePlugin
}

declare module 'markdown-it-sup' {
  export default SimplePlugin
}

declare module 'markdown-it-emoji' {
  export const full: SimplePlugin
}
