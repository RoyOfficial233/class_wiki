import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Vid } from '@theojs/lumen'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('Vid', Vid)
   },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  }
} satisfies Theme


