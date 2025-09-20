import type MarkdownIt from 'markdown-it'
import markdownitContainer from 'markdown-it-container'

export default (md: MarkdownIt) =>
  md.use(markdownitContainer, 'container', {
    validate(params: string) {
      return ['error', 'info', 'success', 'warning'].includes(params.trim())
    },
    render(tokens: any, idx: number) {
      if (tokens[idx].nesting === 1) {
        const type = tokens[idx].info.trim()
        return `<div class="container container-${type}">`
      }
      return '</div>\n'
    },
  })
