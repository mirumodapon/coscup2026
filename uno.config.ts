import type { Theme } from '@unocss/preset-wind3'
import { presetWind3 } from '@unocss/preset-wind3'
import { defineConfig } from 'unocss'
import presetThemes from 'unocss-preset-theme'

export default defineConfig({
  presets: [
    presetWind3(),
    presetThemes<Theme>({
      theme: {
        light: {
          colors: {
            'primary-50': '#E5E3FF',
            'primary-100': '#CCC7FF',
            'primary-200': '#B2ABFE',
            'primary-300': '#998FFE',
            'primary-400': '#7F73FE',
            'primary-500': '#665CCB',
            'primary-600': '#4C4598',
            'primary-700': '#332E66',
            'primary-800': '#191733',
          },
        },
      },
    }),
  ],
})
