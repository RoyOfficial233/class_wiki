import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Vid } from '@theojs/lumen'
import './style.css'
import DefaultTheme from "vitepress/theme";
import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./DP.vue"

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('Vid', Vid)
   },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router }) {
    app.component("DataPanel", DataPanel);
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
  }
} satisfies Theme