import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.clothpath.com/",
    title: "Huang's Blog",
    description: "Huang's projects and notes on things he builds and learns.",
    author: "Huang Lizhuo",
    profile: "https://github.com/huanglizhuo",
    ogImage: "default-og.png",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/huanglizhuo/huanglizhuo/edit/master/blog/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/huanglizhuo" },
    { name: "x", url: "https://x.com/huang4fun" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
