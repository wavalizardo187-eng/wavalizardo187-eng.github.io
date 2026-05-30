# AI Portfolio | Personal Website

基于 Stitch 原型图构建的 Neumorphism 风格个人网站  
A Neumorphism-style personal website built from Stitch wireframes

## ✨ 设计特点 | Design Features

- **Neumorphic UI (Soft UI)** - 柔和的神经拟态设计风格
- **双重阴影系统** - 模拟物理深度的光影效果
- **响应式设计** - 完美适配桌面端和移动端
- **流畅交互** - 300ms 过渡动画和微交互效果
- **无障碍设计** - WCAG AA 标准色彩对比度

## 🚀 快速开始 | Quick Start

### 1. 安装依赖 | Install Dependencies
```bash
npm install
```

### 2. 启动开发服务器 | Start Development Server
```bash
npm run dev
```

服务器将在 `http://localhost:3000` 启动  
Server will start at `http://localhost:3000`

### 3. 构建生产版本 | Build for Production
```bash
npm run build
```

### 4. 预览生产版本 | Preview Production Build
```bash
npm run preview
```

## 📁 项目结构 | Project Structure

```
project/
├── src/
│   ├── components/           # 组件 | Components
│   │   ├── Layout/          # 布局组件 | Layout
│   │   ├── Header/          # 头部导航 | Header Navigation
│   │   └── Footer/          # 页脚 | Footer
│   ├── pages/               # 页面 | Pages
│   │   ├── Home/            # 首页 - Hero + Metrics | Home
│   │   ├── About/           # 关于 - Skills + Writing | About
│   │   ├── Projects/        # 项目展示 | Project Showcase
│   │   └── Contact/         # 博客 + 联系表单 | Blog + Contact
│   ├── hooks/               # 自定义 Hooks | Custom Hooks
│   │   ├── useScrollToTop.js
│   │   └── useMediaQuery.js
│   ├── utils/               # 工具函数 | Utilities
│   ├── styles/              # 全局样式 | Global Styles
│   │   └── global.css       # Neumorphic 样式系统
│   ├── App.jsx              # 根组件 | Root Component
│   └── main.jsx             # 入口文件 | Entry File
├── stitch_neumorphic_ai_portfolio_wireframe/  # Stitch 原型图
├── index.html               # HTML 模板 | HTML Template
├── tailwind.config.js       # Tailwind 配置 | Tailwind Config
├── postcss.config.js        # PostCSS 配置 | PostCSS Config
├── vite.config.js           # Vite 配置 | Vite Config
└── package.json             # 项目配置 | Project Config
```

## 🎨 设计系统 | Design System

### 颜色 | Colors
- **Primary**: `#4d41df` - 主色调（柔和紫色）
- **Secondary**: `#006a66` - 辅助色（青绿色）
- **Background**: `#f6f9ff` - 背景色（冷灰色）
- **Surface**: `#f6f9ff` - 表面色
- **On Surface**: `#171c21` - 文字颜色

### 阴影系统 | Shadow System
- **Extruded (凸起)**: `9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)`
- **Inset (凹陷)**: `inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5)`
- **Deep Inset (深凹)**: `inset 10px 10px 20px rgba(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)`

### 字体 | Typography
- **Display Font**: Plus Jakarta Sans (700, 800) - 标题字体
- **Body Font**: DM Sans (400, 500, 700) - 正文字体
- **Icons**: Material Symbols Outlined

### 圆角 | Border Radius
- **Large Containers**: `32px` - 大型卡片
- **Medium Elements**: `16px` - 中型按钮
- **Small Elements**: `12px` - 小型元素

## 🛠️ 技术栈 | Tech Stack

- **React 18.3** - UI 框架 | UI Framework
- **Vite 5.2** - 构建工具 | Build Tool
- **React Router 6** - 路由管理 | Routing
- **Tailwind CSS 3.4** - 样式框架 | CSS Framework
- **PostCSS** - CSS 处理 | CSS Processing
- **Google Fonts** - 字体服务 | Font Service
- **Material Symbols** - 图标库 | Icon Library

## 📱 响应式断点 | Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1023px`
- **Desktop**: `≥ 1024px`

## 🎯 页面说明 | Page Description

### Home (首页)
- Hero Section - 主视觉区域
- The Visionary Approach - 核心价值观（Bento 布局）
- Key Metrics - 关键指标统计
- Profile Section - 个人简介

### About (关于)
- Personal Introduction - 个人介绍 + 头像
- Skills & Passions - 核心工具和 AI 专长
- Writing & Insights - 博客文章列表
- Technical Arsenal - 技术栈展示

### Projects (项目)
- Project Showcase - 项目案例展示
- Stat Cards - 效率统计数据

### Contact (博客 + 联系)
- Blog Categories - 博客分类（方法论、案例、教程）
- Design System DNA - 设计系统展示
- Contact Form - 联系表单

## 🔧 开发命令 | Development Commands

```bash
# 安装依赖 | Install dependencies
npm install

# 启动开发服务器 | Start dev server
npm run dev

# 构建生产版本 | Build for production
npm run build

# 预览生产构建 | Preview production build
npm run preview

# 代码检查 | Lint code
npm run lint
```

## 📝 注意事项 | Notes

1. **首次运行前请先安装依赖**
   Please install dependencies before first run

2. **确保 Node.js 版本 ≥ 16**
   Make sure Node.js version is ≥ 16

3. **使用现代浏览器访问**
   Use modern browsers for best experience

4. **移动端底部导航栏仅在小屏幕显示**
   Mobile bottom navigation only shows on small screens

## 🎉 特色功能 | Special Features

- ✅ 完整的 Neumorphic 设计系统
- ✅ 平滑滚动和页面过渡
- ✅ 悬停和激活状态的微交互
- ✅ 响应式网格布局
- ✅ 可访问性优化（WCAG AA）
- ✅ 触摸友好的交互目标（≥ 44px）
- ✅ Material Symbols 图标集成

## 📄 License

MIT License

---

Built with tactile precision 🎨 | 用触觉精度构建
