import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'

import { VueRouterAutoImports } from 'unplugin-vue-router'

import UnoCSS from 'unocss/vite'

import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vueJsx(),
    UnoCSS(),
    Components({
      /* options */
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        // 'vue-router'
        VueRouterAutoImports,
        '@vueuse/core'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
