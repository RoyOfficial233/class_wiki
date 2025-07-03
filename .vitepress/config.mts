import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Roy Package Manager",
  description: "A Light Linux Package Manager",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: '主页', link: '/' }
    ],
    sidebar: [
      {
        text: 'Roy Package Manager Docs',
        items: [
		{ text: '关于', link: '/about' },
          { text: '安装', link: '/install' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RoyNetworks' }
    ]
  }
})
