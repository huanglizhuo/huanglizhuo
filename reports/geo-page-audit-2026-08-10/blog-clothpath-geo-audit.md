# blog.clothpath.com 页面 GEO 复查报告

- 复查日期：2026-08-10
- 站点：blog.clothpath.com（Astro v7 静态博客，Cloudflare Pages）
- 复查背景：站点刚完成中英双语改造与 favicon 更新，线上已部署该版本
- 复查性质：公开页面 GEO 准备度复查（不含 AI 平台召回采样）

## 1. 执行摘要

结论：**GEO 技术基础项基本全部完成**，整站处于"可被正确发现、抓取、抽取"的状态。双语改造后 hreflang、canonical、sitemap、双语 RSS 均正确落地。

剩余风险：

- P1（1 项）：sitemap 条目未携带 `xhtml:link` hreflang 交替声明，双语页面之间的对应关系只有 HTML head 一处表达。
- P2（5 项）：BlogPosting schema 字段不全、无 BreadcrumbList schema、无站点级 WebSite/Person 实体与 sameAs、无 llms.txt、文章页作者只在 JSON-LD 中出现而正文无署名。

关键边界：本次无服务器日志、无 CMS 后台、无 AI 平台采样数据，不判断任何平台召回、排名或引用份额；性能指标未实测，仅给出复测建议。

## 2. 输入与范围

| 项目 | 内容 |
|---|---|
| 目标 URL | blog.clothpath.com |
| 站点类型 | 个人技术博客 + 项目展示 |
| 品牌/实体 | Huang Lizhuo（GitHub: huanglizhuo） |
| 可用输入 | 线上页面 HTML、robots、sitemap、本地构建产物 dist/ |
| 输入缺口 | 服务器日志、搜索 Console 数据、AI 平台采样、Lighthouse 实测 |

## 3. 页面组合与选择依据

| 层级 | 选取页面 | 选择依据 |
|---|---|---|
| 首页 | `/` 与 `/zh/` | 站点入口，项目展示主体 |
| 一级页 | `/posts/`、`/about` | 文章列表（内容索引）；关于页（实体信息） |
| 二级页 | `/posts/hello-world/`（中英双版本） | 当前唯一文章，代表文章详情页模板 |

样本限制：站点目前仅 1 篇文章，文章页结论主要反映模板能力，而非内容丰富度。

## 4. 公开答案素材问题集

按站点实体的高意图问题，列出页面应提供的可引用素材（不分析具体平台召回）：

| 高意图问题 | 现有素材位置 | 素材缺口 |
|---|---|---|
| OctoCounts 是什么/怎么用 | 首页与关于页项目段落 | 无独立页面，无安装/使用步骤块 |
| QwenASR 如何安装/性能如何 | 首页段落 + GitHub 链接 | 性能数据（613ms/46×）埋在长段落中，未表格化 |
| EchoPod 在哪下载 | 首页段落 | 无独立页，下载入口未结构化 |
| 博主是谁/做过什么 | 关于页 | 无 Person schema 与 sameAs 支撑 |

## 5. 权威证据台账

| 结论 | 来源层级 | 页面或材料 | 影响 | 可信度 |
|---|---|---|---|---|
| robots 允许全站并声明 sitemap | 观察 | robots.txt | 发现入口正常 | 高 |
| sitemap 含全部双语 URL | 观察 | sitemap-0.xml | 双语发现入口完整 | 高 |
| sitemap 条目无 xhtml:link 交替 | 观察 | sitemap-0.xml | 双语对应关系少一处机器可读表达 | 高 |
| 每页 canonical 正确且分语言 | 观察 | 各页 HTML head | 防重复收录 | 高 |
| 正文存在于初始 HTML（SSG） | 观察 | 文章页 HTML | 不依赖 JS 渲染即可抽取 | 高 |
| hreflang en/zh-CN/x-default 正确 | 观察 | 各页 HTML head | 多语言收录与地域匹配 | 高 |
| 文章页有 BlogPosting JSON-LD | 观察 | 文章页 HTML | 机器可读文章元数据 | 高 |
| JSON-LD 缺 dateModified/inLanguage 等 | 观察 | 文章页 JSON-LD | 证据完整度受限 | 高 |
| 无 BreadcrumbList/WebSite schema | 观察 | 全站 HTML | 实体图与导航结构不可机读 | 高 |
| 无 llms.txt | 观察 | 站点根路径无此文件 | AI 抓取引导缺失（新兴约定） | 中 |
| 平台召回/排名表现 | 缺口 | 无采样数据 | 不做判断 | — |

## 6. 抓取与渲染

| 检查项 | 结果 | 证据标记 |
|---|---|---|
| 首页/文章/zh 页面状态码 | 全部 200 | 观察 |
| robots.txt | `Allow: /` + sitemap 声明 | 观察 |
| meta robots | 无限制（默认 index） | 观察 |
| canonical | 逐页正确，双语各自指向自身 | 观察 |
| 初始 HTML 含正文 | 是，纯静态生成 | 观察 |
| JS 依赖 | 仅增强（路由过渡/搜索），正文无依赖 | 观察 |
| 移动端内容一致性 | 响应式同一 HTML，无移动/桌面差异 | 观察 |

本模块全部通过，无修复项。

## 7. 移动端与性能

- 站点为全静态 HTML + 单字体（Google Sans Code woff），JS 负载极小，结构上无 LCP/INP/CLS 高风险项（推断）。
- 文章页动态 OG 图为构建期生成，不影响运行时性能（观察）。
- 缺口：未实测 Lighthouse / Web Vitals。建议上线后跑一次 Lighthouse（移动档），记录 LCP、INP、CLS 基线。

## 8. 结构规范性

| 检查项 | 结果 | 说明 |
|---|---|---|
| H1 唯一 | 通过 | 各页均单一 H1 |
| main/article/time 语义标签 | 通过 | 文章页 1 main + 1 article + time |
| 面包屑 | 部分 | 列表页有视觉面包屑；文章页为返回按钮，且全站无 BreadcrumbList schema |
| 目录（TOC） | 模板支持 | remark-toc 已配置，需正文含 "Table of contents" 才渲染 |
| 内链与锚文本 | 通过 | 标签、上下篇导航均为描述性锚文本 |
| 标题层级 | 通过 | 列表/首页层级正常；现有文章过短无 H2，待内容补充后复查 |

## 9. 内容证据

- 已具备：发布/更新日期双显示（观察）、每篇文章 description 前置摘要（观察）、作者与社交出处（关于页 + JSON-LD，观察）。
- 缺口：文章正文区无作者署名展示（作者仅存在于 JSON-LD，读者与抽取器在正文块看不到）；示例文章过短，无法验证数据、引用、案例等证据要素的表现。

## 10. AI 可抽取性

- 通过项：段落独立性良好（短段落、无重导航干扰）；`data-pagefind-body` 正确标注正文容器；文章页有原子化元数据（JSON-LD）。
- 可改进：首页项目介绍为长段落，关键事实（性能数字、支持平台、安装命令）未键值化/表格化，chunk 级引用时需要整段引用，建议改造为"项目名 + 一句话定义 + 事实表 + 链接"结构。
- 上下文无关摘要：description 字段已承担此职能，质量取决于写作，属于内容层持续项。

## 11. Schema 一致性

| 项目 | 现状 | 判定 |
|---|---|---|
| BlogPosting 与正文一致性 | headline/date/author 均可在正文回溯 | 通过 |
| headline 值 | 带站点名后缀（"标题 \| 站名"） | 建议改为纯文章标题 |
| dateModified | 缺失（有 modDatetime 时未输出） | 建议补 |
| inLanguage | 缺失（双语站点尤其需要） | 建议补 |
| mainEntityOfPage / publisher | 缺失 | 建议补 |
| BreadcrumbList | 全站缺失 | 建议补 |
| WebSite / Person + sameAs | 全站缺失 | 建议补（实体图） |

校验工具：Google Rich Results Test、Schema.org validator。

## 12. 来源权威与可信度

- 已有：GitHub profile 链接进入 JSON-LD author.url（观察）；页头/页脚有 GitHub、X 社交链接（观察）；关于页列明项目与出处（观察）。
- 建议：补 Person schema 并用 sameAs 串联 GitHub/X/项目域名，形成可机读的实体关系；文章正文区显示作者名，增强责任归属可见性。

## 13. 代码层修复清单

| 优先级 | 修复项 | 位置 | 验收方式 |
|---|---|---|---|
| P1 | sitemap 增加 i18n 配置，输出 xhtml:link 交替 | astro.config.ts sitemap() | sitemap-0.xml 中 url 条目含 xhtml:link 子元素 |
| P2 | BlogPosting 补 inLanguage/dateModified/mainEntityOfPage/publisher，headline 去站点后缀 | PostLayout.astro | Rich Results Test 无警告，字段与正文一致 |
| P2 | 增加 BreadcrumbList JSON-LD | Breadcrumb.astro | validator 通过，层级与 URL 一致 |
| P2 | 增加 WebSite + Person(sameAs) JSON-LD | Layout.astro | validator 通过 |
| P2 | 增加 llms.txt | public/llms.txt | 根路径可访问，列出站点说明与核心页面 |
| P2 | 文章页正文区显示作者署名 | 文章详情模板 | 正文块可见作者名与链接 |

## 14. 内容结构改造建议

1. 为 4 个项目（OctoCounts、EchoPod、Ketsuin、QwenASR）各建独立项目页：一句话定义、事实表（平台/价格/技术栈/性能数据）、使用步骤、FAQ、官方链接。
2. 首页项目段落改为"定义句 + 事实表"结构，性能数字（如 613ms、46×）进表格而非长句。
3. 新写文章时保持：结论先行、段落独立、数据带日期、外部主张附来源链接。
4. 中文页素材同步改造，保证两种语言的事实密度一致。

## 15. 优先级与路线图

| 批次 | 内容 | 负责方 | 成本估计 | 验收 |
|---|---|---|---|---|
| 第一批（P1） | sitemap hreflang 交替 | 开发 | 约 0.5 小时 | sitemap XML 检查 |
| 第二批（P2） | schema 三项补全 + llms.txt + 作者署名 | 开发 | 约 2-3 小时 | 校验工具 + 页面检查 |
| 第三批（P2） | 项目独立页 + 首页事实表改造 | 内容 | 每页约 1-2 小时 | 复查抽取性清单 |
| 持续 | Lighthouse 基线、平台采样监测 | 运维 | 按需 | 复测记录 |

## 16. 完整性自检与质量报告摘要

| 自检项 | 结果 |
|---|---|
| 范围完整（首页/一级页/二级页） | 通过 |
| 证据完整（结论均有标记） | 通过 |
| 技术完整（抓取/渲染/移动/结构/schema/性能） | 通过 |
| 内容完整（实体/事实/来源/时间/边界） | 通过（内容丰富度受站点现阶段限制） |
| AI 完整（抽取/chunk/素材） | 通过 |
| 未验证风险 | 平台召回（无采样）、性能实测（无 Lighthouse）、CDN 缓存行为（无日志） |
| 交付完整 | 本次按用户选择仅交付 Markdown；Word/PDF/HTML 与质检脚本未执行 |

## 17. 修复记录（2026-08-10，复查当日完成）

| 修复项 | 状态 | 验证结果 |
|---|---|---|
| P1 sitemap i18n 交替 | 已修复 | sitemap-0.xml 条目含 en/zh-CN xhtml:link |
| P2 BlogPosting 字段补全 | 已修复 | headline 纯标题，inLanguage/mainEntityOfPage/publisher 已输出，dateModified 按 modDatetime 条件输出 |
| P2 BreadcrumbList | 已修复 | 列表页输出与 URL 层级一致的 JSON-LD |
| P2 WebSite + Person sameAs | 已修复 | 全站 @graph 输出，sameAs 取自 socials 配置 |
| P2 llms.txt | 已修复 | /llms.txt 可访问，含双语页面与项目清单 |
| P2 文章作者署名 | 已修复 | 文章页正文区显示作者名并链接 profile |

内容层建议（项目独立页、首页事实表改造）属内容创作，未在本次修复范围内，见第 14 节。
