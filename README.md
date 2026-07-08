# Storefront Forge — 产品展示页

面向客户的中文静态展示页(GitHub Pages):Storefront Forge 的 18 套基准电商店面模板 + 报价估算器 + 建成站实时预览。

## 内容
- **模板画廊**:7 个行业首页、集合页(PLP)、产品页(PDP)、落地/关于/联系、B2B 询盘 —— 用真实渲染截图。
- **报价估算器**:按 交付档位 × 加价项 × 地区 × 运维档 实时算出区间预算(数值镜像自 `shopify_skill/docs/pricing.yaml`,该文件是唯一价格源)。
- **建成后预览**:选行业/模式后,用 iframe 实时渲染匹配到的真实模板(首页/集合页/产品页可切换),真实可滚动。

## 结构
```
index.html            # 单页,内联 CSS/JS
assets/img/*.jpg       # 18 张模板截图(arm64 Chrome 渲染)
assets/templates/*.html# 18 套自包含模板(供预览 iframe 加载)
.nojekyll              # 关闭 Jekyll 处理
```

## 本地预览
直接用浏览器打开 `index.html` 即可(纯静态,无构建步骤)。

## 部署
GitHub Pages:Settings → Pages → Source = `main` 分支 `/`(根目录)。

> 价格与模板均源自 [`shopify_skill`](https://github.com/JayLBean/shopify_skill) 项目;此仓库只做对客展示。
