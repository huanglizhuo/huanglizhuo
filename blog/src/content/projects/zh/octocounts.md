---
title: OctoCounts
tagline: 免费的 GitHub 公开仓库代码行数统计工具，有网页版和浏览器扩展。
url: https://octocounts.com/
domain: octocounts.com
order: 2
highlights:
  - Rust · Axum
  - tokei · 200+ 语言
  - 免费
facts:
  - label: 形态
    value: 网页应用 + 浏览器扩展（Chrome / Edge / Firefox）
  - label: 价格
    value: 免费
  - label: 后端
    value: Rust（Axum + Tokio）
  - label: 统计引擎
    value: tokei，覆盖 200 多种语言
  - label: 缓存
    value: 按 commit SHA 缓存报告，重复查询即时返回
  - label: 导出
    value: JSON / 纯文本 / PNG 徽章
faq:
  - question: GitHub 自带的语言占比条不够用吗？
    answer: GitHub 只显示语言占比条，不给实际行数。OctoCounts 提供每种语言的真实 SLOC 数字，填补这个空缺。
  - question: 每次查询都要重新统计吗？
    answer: 不用。报告按 commit SHA 缓存，同一 commit 的重复查询即时返回。
---

GitHub 只显示语言占比条，不给实际行数——OctoCounts 填补了这个空缺。

## 工作原理

1. 粘贴一个 GitHub 公开仓库的 URL。
2. Rust 后端（Axum + Tokio）下载仓库归档包。
3. 用 tokei 统计 200 多种语言的代码行数。
4. 报告按 commit SHA 缓存，重复查询即时返回。

## 浏览器扩展

Chrome / Edge / Firefox 扩展可直接在 GitHub 仓库侧栏显示 SLOC 卡片，支持 JSON、纯文本和 PNG 徽章导出。
