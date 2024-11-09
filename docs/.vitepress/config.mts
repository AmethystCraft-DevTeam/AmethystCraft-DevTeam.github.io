import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AmethystCraft",
  description: "紫水晶-一个商业的可开挂的服务器",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开始', link: '/guide/index.md' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '关于服务器', link: '/guide/index.md' },
            { text: '服务器规划', link: '/guide/server-features.md' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AmethystCraft-DevTeam' }
    ]
  }
})