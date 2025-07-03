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
        text: '文档',
        items: [
		{ text: '关于', link: '/about' },
    { text: '开始阅读', link: '/get-started' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RoyOfficial233' }
    ]
  }
})
