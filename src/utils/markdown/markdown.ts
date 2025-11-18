import type { Options, PluginSimple } from 'markdown-it'
import DOMPurify from 'dompurify'
import MarkdownIt from 'markdown-it'

export interface MarkdownOptions extends Options {
  plugins: PluginSimple[]
}

export class Markdown extends MarkdownIt {
  constructor(options: MarkdownOptions) {
    super(options)

    options.plugins.forEach((plugin) => {
      this.use(plugin)
    })
  }

  safeRender(str: string) {
    return DOMPurify.sanitize(this.render(str))
  }
}
