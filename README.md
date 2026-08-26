# TENET 官网（xin-tiao.top）

> 本文件夹是 TENET「信条」官方网站的**唯一长期开发工作区**。
> 所有与官网设计、开发、文档相关的内容均保留在此文件夹中。

---

## 品牌一句话

「服务用户，保护隐私，平台稳定」

## 设计语言

Intelligent Minimalism（智能极简）

## 文件夹结构

```
官网/
├── README.md            本说明文件
├── docs/
│   ├── 01-设计宪章.md     设计宪章（长期规则真源）
│   ├── 02-决策日志.md     重要产品决策记录
│   ├── 03-版本记录.md     版本迭代记录
│   ├── 04-PRD-官网首页V1.md  V1 首页 PRD
│   └── archive/          归档文档
├── material/             品牌素材（logo 等）
└── web/                  官网代码（Astro + Tailwind）
    ├── src/pages/        页面（index 首页、en/ 英文、占位页）
    ├── src/components/   组件（Navbar/Footer/HomeSections/Icon）
    ├── src/layouts/      BaseLayout
    ├── src/content/      首页内容文件（home.zh.json / home.en.json）
    ├── src/i18n/         文案与站点配置（site.ts）
    └── src/styles/       global.css
```

## 如何运行与构建

在 `web/` 目录下（用 Bun）：
- `bun run dev` —— 本地开发预览
- `bun run build` —— 构建静态站点到 `web/dist/`
- `bun run preview` —— 本地预览构建产物

注意：Bun 位于 `C:\Users\86151\.devtools\bun\bun-windows-x64\bun.exe`；构建前建议设置 `ASTRO_TELEMETRY_DISABLED=1` 避免遥测写权限问题。

## 内容如何修改（不用写代码）

首页各区块内容在 `web/src/content/home.zh.json`（中文）与 `home.en.json`（英文）：
- 改标题、副标题、按钮文字 → 直接改 JSON
- 改价值卡片 → `values.items`
- 改模型预览 → `models.items`
- 改如何开始三步 → `start.steps`
- 改联系方式 → 全局 `web/src/i18n/site.ts` 的 `CONTACT`

改完重新 `bun run build` 即生效。

## 技术栈（已确认）

- Astro（静态站框架）+ Tailwind CSS
- 中英双语：根路径中文 `/` + 英文 `/en`
- 静态输出，部署零依赖，兼容 PC / 移动端浏览器

## 待办（部署时）

- 登录跳转地址：`web/src/i18n/site.ts` 的 `LINKS.login`（部署时改为控制台子域名）
- 模型广场跳转：`LINKS.plaza`（部署时改为控制台模型页）
- 部署：官网静态产物上 Caddy，官网占 `xin-tiao.top`，控制台迁子域名（路线 1，已确认）
