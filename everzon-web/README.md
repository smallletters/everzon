# Everzon Web - Next.js E-commerce Site

这是一个基于 Next.js 16 + React 19 + Tailwind CSS 4 构建的现代化电商网站。

## 技术栈

- **Next.js**: 16.2.1 (Turbopack)
- **React**: 19.2.4
- **Tailwind CSS**: 4.x
- **TypeScript**: 5.x
- **Framer Motion**: 12.x (动画)
- **Lucide React**: 1.x (图标)

## 项目结构

```
everzon/
├── everzon-web/          # Next.js 项目根目录
│   ├── app/             # App Router
│   ├── public/          # 静态资源
│   ├── package.json     # 项目依赖
│   └── ...
└── everzon_images/      # 产品图片
```

## 开发指南

### 本地开发

```bash
cd everzon-web
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
cd everzon-web
npm run build
npm start
```

## Vercel 部署

**重要**：在 Vercel 部署时，必须设置 Root Directory 为 `everzon-web`。

1. 在 Vercel 项目设置中找到 Root Directory
2. 输入：`everzon-web`
3. 保存并重新部署

## 功能特性

- ✅ 响应式设计
- ✅ 产品列表展示
- ✅ 产品分类
- ✅ 博客集成
- ✅ 邮件订阅
- ✅ 暗黑模式支持

## 作者

- Email: smallletters@sina.com

## 许可证

MIT
