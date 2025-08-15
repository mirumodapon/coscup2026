import MarkdownIt from 'markdown-it'

const md = MarkdownIt({
  html: true,
  linkify: true,
})

export default md
