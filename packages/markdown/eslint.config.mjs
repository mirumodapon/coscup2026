import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  typescript: true,
  jsonc: true,
  yaml: true,
  vue: true,
}, {
  rules: {
    'curly': ['error', 'multi-line', 'consistent'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'style/arrow-parens': ['error', 'always'],
    'style/brace-style': ['error', 'stroustrup'],
    'style/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'style/max-len': ['error', { code: 120, ignoreComments: true, ignoreUrls: true }],
    'vue/max-attributes-per-line': ['error'],
    'vue/attributes-order': ['error', { alphabetical: true }],
  },
}, {
  rules: {
    'no-console': ['warn'],
  },
})
