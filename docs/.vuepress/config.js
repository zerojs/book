import { defineUserConfig } from "vuepress";

import { defaultTheme } from "@vuepress/theme-default";

import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: "zh-CN",
  title: "zerojs-零技术",
  description: "这是zerojs-零技术的博客网站",
  plugins: [
    docsearchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: "web",
        link: "/guide/start.md",
      },
      {
        text: "vue3",
        link: "/vue3/base.md",
      },
      {
        text: "Group",
        children: [
          {
            text: "分组",
            children: [{ text: "子项1", link: "/guide/start.md" },{ text: "子项2", link: "/vue3/base.md" }],
          },
        ],
      },
      {
        text: "github",
        link: "https://github.com/zerojs/book",
      },
    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/guide/': [
        {
          text: "指南",
          children: [{ text: "指南1", link: "/guide/start.md" },{ text: "指南2", link: "/vue3/base.md" }],
        },
      ],
      '/vue3/': [
        {
          text: "vue3基础",
          children: [{ text: "基础1", link: "/guide/start.md" },{ text: "基础2", link: "/vue3/base.md" }],
        },
      ],
    },

  }),
});
