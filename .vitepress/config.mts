import { defineConfig } from "vitepress"
export default defineConfig({
  title: "Class-Wiki",
  description: "班级梗百科",
  themeConfig: {
		favicon: { 
			logo: "/static/Miku.jpg"
		},
    search: {
      provider: "local"
    },
    nav: [
      { text: "主页", link: "/" }
    ],
    sidebar: [
      {
        text: "文档",
        items: [
		{ text: "关于", link: "/about" },
    { text: "开始阅读", link: "/get-started" },
    { text: "老师", 
      items: [ 
        { text: "凌乐",
          items: [
            { text: "介绍",  link: "/lingle/intro" },
            { text: "尖嘴老辣椒",  link: "/lingle/01" }
          ]
        }
      ]
    }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/RoyOfficial233" }
    ]
  }
})
