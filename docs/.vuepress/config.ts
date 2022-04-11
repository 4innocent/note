import { defineConfig } from "vuepress/config";
import { navbar, sidebar } from "./configs";
import urlEncode from "markdown-it-disable-url-encode";

export default defineConfig({
  base: "/note/",
  lang: "zh-cn",
  title: "One Note",
  description: "记录学习和问题的文档",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://one-note.oss-cn-beijing.aliyuncs.com/common/logo.png",
    lastUpdated: true,
    nav: navbar,
    sidebar: sidebar,
    sidebarDepth: 4,
  },
  markdown: {
    extractHeaders: ["h2", "h3", "h4"],
    extendMarkdown: md => {
      md.use(urlEncode);
    },
  },
  plugins: ["@vuepress/search"],
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "./public",
      },
    },
  },
});
