import markdownItAbbr from 'markdown-it-abbr'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItDeflist from 'markdown-it-deflist'
import { full as markdownItEmoji } from 'markdown-it-emoji'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItIns from 'markdown-it-ins'
import markdownItMark from 'markdown-it-mark'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import { Markdown } from './markdown'
import markdownContainer from './plugins/container'

const md = new Markdown({
  html: true,
  linkify: true,
  typographer: true,
  plugins: [
    markdownItAbbr,
    markdownItAnchor,
    markdownItDeflist,
    markdownItEmoji,
    markdownItFootnote,
    markdownItIns,
    markdownItMark,
    markdownItSub,
    markdownItSup,
    markdownContainer,
  ],
})

export default md
