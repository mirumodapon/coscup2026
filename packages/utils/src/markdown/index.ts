import DOMPurify from 'dompurify'
import MarkdownIt from 'markdown-it'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItAnchor from 'markdown-it-anchor'
import markdownitContainer from 'markdown-it-container'
import markdownItDeflist from 'markdown-it-deflist'
import { full as markdownItEmoji } from 'markdown-it-emoji'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItIns from 'markdown-it-ins'
import markdownItMark from 'markdown-it-mark'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'

const md = MarkdownIt({
  html: true,
  linkify: true,
})

md.use(markdownItAbbr)
md.use(markdownItAnchor)
md.use(markdownItDeflist)
md.use(markdownItEmoji)
md.use(markdownItFootnote)
md.use(markdownItIns)
md.use(markdownItMark)
md.use(markdownItSub)
md.use(markdownItSup)

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

export default {
  ...md,
  safeRender: (text: string) => DOMPurify.sanitize(md.render(text)),
}
