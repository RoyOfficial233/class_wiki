import { defineConfig } from 'vitepress'
import markdownItVideo from "@vrcd-community/markdown-it-video";
export default defineConfig({
  title: "Class Wiki",
  description: "一个分享班级趣事的网站",
  themeConfig: {
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
markdown: {
    config: (md) => {
        md.use(markdownItVideo, {
            video: {width: '100%', height: '387px'},
            youtube: {width: '100%', height: '387px'},
            bilibili: {width: '100%', height: '387px'}
        });
    },
},