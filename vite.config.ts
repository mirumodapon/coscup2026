import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig(() => ({
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    vue(),
    UnoCss(),
    Icons({
      autoInstall: true,
      customCollections: {
        cp: FileSystemIconLoader('./src/assets/icons'),
      },
    }),
  ],
  build: {
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  ssgOptions: {
    dirStyle: 'nested' as const,
    formatting: 'minify' as const,
  },
}))
