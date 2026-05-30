# 🚀 个人网页项目启动指南 | Personal Website Setup Guide

## ✅ 项目状态 | Project Status

**所有页面已完成！All pages completed!**

- ✅ 首页 (Home) - Hero section + Metrics + Profile
- ✅ 关于页 (About) - Skills + Writing + Tech Stack
- ✅ 项目页 (Projects) - Project Showcase
- ✅ 联系页 (Contact) - Blog + Contact Form
- ✅ Header & Footer 组件
- ✅ Neumorphic 设计系统集成
- ✅ MagicBento 粒子特效组件

---

## 📦 快速启动 | Quick Start

### 1️⃣ 安装依赖 | Install Dependencies

```bash
npm install
```

这将安装以下依赖 | This will install:
- React 18.3.1
- React Router DOM 6.23.1
- Vite 5.2.11
- Tailwind CSS 3.4.3
- GSAP 3.12.5 (动画库 | Animation library)
- PostCSS & Autoprefixer

### 2️⃣ 启动开发服务器 | Start Development Server

```bash
npm run dev
```

服务器将在 `http://localhost:3000` 启动并自动打开浏览器。

Server will start at `http://localhost:3000` and open automatically.

### 3️⃣ 构建生产版本 | Build for Production

```bash
npm run build
```

### 4️⃣ 预览生产版本 | Preview Production Build

```bash
npm run preview
```

---

## 🎨 设计系统 | Design System

### Neumorphism (Soft UI)

**颜色 | Colors:**
- 主色 Primary: `#4d41df` (紫色 Violet)
- 次色 Secondary: `#006a66` (青色 Teal)
- 背景 Background: `#f6f9ff` (浅灰蓝 Light Blue Grey)
- 文字 Text: `#171c21` (深灰 Dark Grey)

**阴影系统 | Shadow System:**
- **Extruded** (凸起): `9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)`
- **Inset** (凹陷): `inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5)`
- **Deep Inset** (深凹): `inset 10px 10px 20px rgba(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)`

**字体 | Typography:**
- Display: Plus Jakarta Sans (700, 800)
- Body: DM Sans (400, 500, 700)

---

## 🎭 特效组件使用 | Using Effect Components

### MagicBento Component

`spashcursor.jsx` 组件提供炫酷的粒子和聚光灯效果。

The `spashcursor.jsx` component provides cool particle and spotlight effects.

**使用方法 | Usage:**

```jsx
import MagicBento from './components/spashcursor'

function MyPage() {
  return <MagicBento />
}
```

**特性 | Features:**
- ✨ 鼠标跟随粒子效果 | Mouse-following particle effects
- 🔦 聚光灯效果 | Spotlight effect
- 🎴 Bento 网格布局 | Bento grid layout
- 📱 移动端自适应 | Mobile responsive

---

## 📁 项目结构 | Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── spashcursor.jsx      # MagicBento 特效组件
│   │   ├── MagicBento.css       # 特效样式
│   │   ├── Header/              # 导航栏
│   │   ├── Footer/              # 页脚
│   │   └── Layout/              # 布局组件
│   ├── pages/
│   │   ├── Home/                # 首页
│   │   ├── About/               # 关于页
│   │   ├── Projects/            # 项目页
│   │   └── Contact/             # 联系页
│   ├── hooks/
│   │   ├── useScrollToTop.js    # 滚动到顶部 Hook
│   │   └── useMediaQuery.js     # 媒体查询 Hook
│   ├── utils/
│   │   ├── constants.js         # 常量配置
│   │   └── helpers.js           # 工具函数
│   ├── styles/
│   │   └── global.css           # 全局样式 + Neumorphic CSS
│   ├── App.jsx                  # 路由配置
│   └── main.jsx                 # 应用入口
├── tailwind.config.js           # Tailwind 配置
├── postcss.config.js            # PostCSS 配置
├── vite.config.js               # Vite 配置
└── package.json                 # 项目依赖
```

---

## 🛠️ 可用命令 | Available Commands

| 命令 Command | 说明 Description |
|-------------|-----------------|
| `npm install` | 安装依赖 Install dependencies |
| `npm run dev` | 启动开发服务器 Start dev server |
| `npm run build` | 构建生产版本 Build for production |
| `npm run preview` | 预览生产版本 Preview build |
| `npm run lint` | 代码检查 Lint code |

---

## 🌐 路由 | Routes

| 路径 Path | 页面 Page | 说明 Description |
|-----------|----------|-----------------|
| `/` | Home | 首页 - Hero + Metrics |
| `/about` | About | 关于 - Skills + Experience |
| `/projects` | Projects | 项目展示 |
| `/contact` | Contact | 博客 + 联系表单 |

---

## 🎯 下一步 | Next Steps

1. **自定义内容** | Customize Content
   - 修改各页面的文字内容
   - 添加真实的项目数据
   - 更新个人信息

2. **添加图片** | Add Images
   - 替换头像占位符
   - 添加项目截图
   - 优化图片资源

3. **集成后端** | Integrate Backend
   - 连接联系表单 API
   - 添加博客系统
   - 数据持久化

4. **部署** | Deploy
   - Vercel (推荐)
   - Netlify
   - GitHub Pages

---

## ⚡ 性能优化建议 | Performance Tips

- ✅ 图片使用 WebP 格式
- ✅ 启用代码分割 (Vite 已配置)
- ✅ 使用 lazy loading
- ✅ 压缩静态资源

---

## 📝 注意事项 | Notes

1. **不要修改** `spashcursor.jsx` 文件 | DO NOT modify `spashcursor.jsx`
2. 所有自定义代码放在其他文件中 | Put custom code in other files
3. 使用 Tailwind CSS 类名进行样式定制 | Use Tailwind CSS classes for styling

---

## 🎉 完成！| Done!

项目已完全配置完成，可以直接运行！

The project is fully configured and ready to run!

```bash
npm install && npm run dev
```

享受编码！| Happy coding! 🚀
