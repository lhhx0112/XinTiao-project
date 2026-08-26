<div align="center">

# TENET 信条

**把全球最好的 AI 模型，接到你的产品里。**

一个接口，接入 ChatGPT、Claude 与 DeepSeek。稳定、安全、透明，为认真做产品的人准备。

`服务用户 · 保护隐私 · 平台稳定`

[🌐 官网 xin-tiao.top](https://xin-tiao.top) · [📖 文档](/docs/04-PRD-官网首页V1.md) · [📋 版本记录](/docs/03-版本记录.md)

</div>

---

## 🧭 这是什么

这里是 **TENET「信条」官方网站的唯一长期开发工作区**。
所有与官网设计、开发、文档相关的内容，都保留在本文件夹中。

- 中文站：`/`　英文站：`/en`（双语并行）
- 静态输出，部署零依赖，兼容 PC / 移动端浏览器
- 单人开发、AI 辅助、低成本长期迭代

---

## ✨ 品牌理念

| | |
|---|---|
| 🎯 使命 | 帮助每个认真做产品的人，用最省心的方式接入最好的 AI |
| 🛡️ 承诺 | 服务用户 · 保护隐私 · 平台稳定 |
| 🎨 设计语言 | Intelligent Minimalism（智能极简） |
| 🟠 品牌色 | TENET 橙 `#D97757` |

> 不是最大平台，但会是你最信任的那个接口。

---

## 📁 仓库结构

```
官网/
├── README.md              本说明文件
├── LICENSE                PolyForm Noncommercial（禁止商用）
├── docs/                  产品与设计文档
│   ├── 01-设计宪章.md      设计宪章（长期规则真源）
│   ├── 02-决策日志.md      重要产品决策记录
│   ├── 03-版本记录.md      版本迭代记录
│   ├── 04-PRD-官网首页V1.md  V1 首页 PRD
│   └── archive/           归档文档
├── material/              品牌素材（logo 等）
├── scripts/               一键推送脚本
└── web/                   官网代码（Astro + Tailwind）
    ├── src/pages/         页面（index 首页、en/ 英文、占位页）
    ├── src/components/    组件（Navbar / Footer / HomeSections / Icon）
    ├── src/layouts/       BaseLayout
    ├── src/content/       首页内容（home.zh.json / home.en.json）
    ├── src/i18n/          文案与站点配置（site.ts）
    └── src/styles/        global.css
```

---

## 🚀 快速开始

在 `web/` 目录下，使用 **Bun** 运行：

| 命令 | 说明 |
| --- | --- |
| `bun run dev` | 本地开发预览 |
| `bun run build` | 构建静态站点到 `web/dist/` |
| `bun run preview` | 本地预览构建产物 |

> 💡 Bun 位于 `C:\Users\86151\.devtools\bun\bun-windows-x64\bun.exe`；
> 构建前建议设置 `ASTRO_TELEMETRY_DISABLED=1`，避免遥测写权限问题。

---

## 🛠 内容维护（不用写代码）

首页各区块内容集中在 `web/src/content/home.zh.json`（中文）与 `home.en.json`（英文）：

- 改标题、副标题、按钮文字 → 直接改 JSON
- 改价值卡片 → `values.items`
- 改模型预览 → `models.items`
- 改如何开始三步 → `start.steps`
- 改联系方式 → 全局 `web/src/i18n/site.ts` 的 `CONTACT`

改完重新 `bun run build` 即生效。

---

## 🧱 技术栈

- **Astro**（静态站框架）+ **Tailwind CSS**
- 中英双语：根路径中文 `/` + 英文 `/en`
- 静态输出，部署零依赖，兼容 PC / 移动端浏览器

---

## 📌 待办（部署时）

- 登录跳转地址：`web/src/i18n/site.ts` 的 `LINKS.login`（部署时改为控制台子域名）
- 模型广场跳转：`LINKS.plaza`（部署时改为控制台模型页）
- 部署：官网静态产物上 Caddy，官网占 `xin-tiao.top`，控制台迁子域名（路线 1，已确认）

---

## 🚫 许可证

本仓库采用 **PolyForm Noncommercial License 1.0.0**：

可查看、可研究、可学习、可非商业组织使用；**禁止任何商业用途**。
详见 [`LICENSE`](LICENSE)。
