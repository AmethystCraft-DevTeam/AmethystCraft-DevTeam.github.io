---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AmethystCraft"
  text: "紫水晶"
  tagline: mc.amethyst.icu
  image: 
    src: ./icon.png
    alt: "AmethystCraftLogo"
  actions:
    - theme: brand
      text: Getting Started
      link: /guide/index.md
    - theme: alt
      text: 官方网站
      link: https://amethyst.icu/
    - theme: alt
      text: Bot Usage
      link: /Bot/index.md

features:
  - title: 贸易系统
    icon: 💰
    details: Latest 3.7.4
    link: "/plugins/TradeSystem.md"
  - title: IC消息互联
    icon: 📨
    details: 让服务器中的玩家可以与其他服务器中的玩家进行聊天, 目前6个服务器已接入（插件版本不一致会出现异常），合作请联系组织
    link: "/plugins/InterConnect.md"
---
<DataPanel />

<PartnerCarousel />
