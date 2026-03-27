# Everzon 网站克隆计划

## 项目概述
创建一个与 https://www.everzon.com 首页风格一致的网站，包含相同的图片和布局，但点击图片时跳转到自定义网址。

## 网站结构分析

根据对 everzon.com 的分析，首页包含以下主要模块：

### 1. 顶部通知栏 (Top Banner)
- Spring Sale 5% OFF (sitewide)
- 警告信息：只销售电子烟设备，不含尼古丁

### 2. 导航栏 (Header/Navigation)
- Logo
- 主导航菜单
- 搜索框
- 购物车/用户图标

### 3. 轮播图/横幅区 (Hero Banner)
- 促销图片轮播

### 4. 新品区 (NEW ARRIVALS)
- 产品卡片网格布局
- 折扣标签 (-9%, New 等)
- 产品图片、名称、价格

### 5. 畅销品区 (BEST SELLERS)
- 更多产品卡片
- 各种折扣标签 (-10%, -14%, -12%, -26%, -27%, -21%, -41%, -28%, -15%, -17%, -44%, -24%)

### 6. 博客区 (LATEST FROM BLOG)
- 最新博客文章展示

### 7. 邮件订阅区 (Newsletter)
- 订阅表单
- 促销信息描述

### 8. 服务特色区 (Features)
- USA&UK WAREHOUSE - 2-5 days delivery
- FAST SHIPPING - Shipping within 24 hours
- AUTHENTICITY GUARANTEED - 100% Authentic
- 100% PAYMENT SECURE - Ensure secure payment

### 9. 页脚 (Footer)
- 链接分类
- 社交媒体图标
- 版权信息

## 技术栈选择

- **框架**: Next.js 14+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui
- **动画**: Framer Motion
- **图标**: Lucide React

## 实现步骤

### 阶段 1: 项目初始化
1. 使用 create-next-app 创建项目
2. 配置 Tailwind CSS
3. 安装 shadcn/ui
4. 安装所需依赖 (framer-motion, lucide-react)

### 阶段 2: 布局组件开发
1. 创建根布局 (Root Layout)
2. 开发顶部通知栏组件
3. 开发导航栏组件
4. 开发页脚组件

### 阶段 3: 首页模块开发
1. 开发 Hero 轮播图组件
2. 开发产品卡片组件
3. 开发新品区 (NEW ARRIVALS)
4. 开发畅销品区 (BEST SELLERS)
5. 开发博客区 (LATEST FROM BLOG)
6. 开发邮件订阅区
7. 开发服务特色区

### 阶段 4: 图片和链接配置
1. 收集/下载 everzon.com 的产品图片
2. 配置图片点击跳转链接（用户自定义）
3. 创建配置文件管理跳转链接

### 阶段 5: 响应式和优化
1. 移动端适配
2. 图片懒加载
3. 性能优化

## 文件结构

```
app/
├── sections/           # 页面区块组件
│   ├── TopBanner.tsx
│   ├── Header.tsx
│   ├── HeroBanner.tsx
│   ├── NewArrivals.tsx
│   ├── BestSellers.tsx
│   ├── LatestBlog.tsx
│   ├── Newsletter.tsx
│   ├── Features.tsx
│   └── Footer.tsx
├── components/         # 可复用组件
│   ├── ProductCard.tsx
│   └── ImageLink.tsx
├── config/            # 配置文件
│   └── links.ts       # 图片跳转链接配置
├── page.tsx           # 首页
├── layout.tsx         # 根布局
└── globals.css        # 全局样式
components/ui/         # shadcn/ui 组件
public/                # 静态资源
├── images/           # 产品图片
└── ...
```

## 自定义链接配置

创建一个配置文件 `app/config/links.ts`，用户可以在此修改图片点击后的跳转目标：

```typescript
export const productLinks = {
  // 新品区产品链接
  newArrivals: {
    product1: "https://your-custom-link-1.com",
    product2: "https://your-custom-link-2.com",
    // ...
  },
  // 畅销品区产品链接
  bestSellers: {
    product1: "https://your-custom-link-3.com",
    // ...
  },
};
```

## 样式参考

- 主色调：根据 everzon.com 提取（通常为深色导航、白色背景、红色/橙色促销标签）
- 字体：使用现代无衬线字体
- 布局：最大宽度容器，响应式网格

## 注意事项

1. 所有产品图片点击后跳转到用户自定义链接
2. 保持与 everzon.com 相似的视觉风格
3. 确保移动端响应式适配
4. 图片懒加载优化性能
