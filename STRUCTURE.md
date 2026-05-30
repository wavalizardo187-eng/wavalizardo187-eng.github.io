# 项目结构说明 | Project Structure

## 📁 完整目录结构 | Complete Directory Structure

```
project/
├── public/                 # 公共静态资源 | Public static assets
├── src/                    # 源代码目录 | Source code directory
│   ├── assets/            # 资源文件 | Asset files
│   │   ├── images/        # 图片 | Images
│   │   ├── icons/         # 图标 | Icons
│   │   ├── fonts/         # 字体 | Fonts
│   │   └── README.md      # 使用说明 | Usage guide
│   ├── components/        # 通用组件 | Common components
│   │   ├── Layout/        # 布局组件 | Layout component
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.module.css
│   │   ├── Header/        # 头部组件 | Header component
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Footer/        # 底部组件 | Footer component
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   └── README.md      # 组件规范 | Component guidelines
│   ├── pages/             # 页面组件 | Page components
│   │   ├── Home/          # 首页 | Home page
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── About/         # 关于页 | About page
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Projects/      # 项目页 | Projects page
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.module.css
│   │   └── Contact/       # 联系页 | Contact page
│   │       ├── Contact.jsx
│   │       └── Contact.module.css
│   ├── hooks/             # 自定义 Hooks | Custom hooks
│   │   ├── useScrollToTop.js    # 滚动到顶部 | Scroll to top
│   │   └── useMediaQuery.js     # 媒体查询 | Media query
│   ├── utils/             # 工具函数 | Utility functions
│   │   ├── constants.js   # 常量配置 | Constants
│   │   └── helpers.js     # 辅助函数 | Helper functions
│   ├── styles/            # 全局样式 | Global styles
│   │   └── global.css     # 全局 CSS | Global CSS
│   ├── App.jsx            # 根组件 | Root component
│   └── main.jsx           # 应用入口 | App entry
├── .env.example           # 环境变量示例 | Environment variables example
├── .eslintrc.cjs          # ESLint 配置 | ESLint config
├── .gitignore             # Git 忽略文件 | Git ignore
├── index.html             # HTML 模板 | HTML template
├── jsconfig.json          # JavaScript 配置 | JavaScript config
├── package.json           # 项目配置 | Project config
├── vite.config.js         # Vite 配置 | Vite config
├── README.md              # 项目说明 | Project readme
└── STRUCTURE.md           # 本文件 | This file
```

## 🎯 目录职责 | Directory Responsibilities

### `/src/components/` 组件目录
- 存放**可复用**的 UI 组件
- 每个组件独立文件夹
- 包含组件逻辑和样式

### `/src/pages/` 页面目录
- 存放**路由页面**组件
- 每个页面独立文件夹
- 对应应用的不同路由

### `/src/hooks/` Hooks 目录
- 存放**自定义 React Hooks**
- 封装可复用的状态逻辑
- 命名以 `use` 开头

### `/src/utils/` 工具目录
- 存放**纯函数工具**
- 常量配置
- 辅助函数

### `/src/assets/` 资源目录
- 存放**静态资源**文件
- 图片、图标、字体等
- 通过 import 引入

### `/src/styles/` 样式目录
- 存放**全局样式**
- CSS 变量
- 通用样式类

## 🔗 路径别名 | Path Aliases

项目配置了路径别名，可以更方便地导入模块：

```javascript
// 使用别名前 | Before using alias
import Header from '../../../components/Header/Header'

// 使用别名后 | After using alias
import Header from '@components/Header/Header'
```

**可用别名 | Available Aliases:**
- `@/` → `src/`
- `@components/` → `src/components/`
- `@pages/` → `src/pages/`
- `@utils/` → `src/utils/`
- `@hooks/` → `src/hooks/`
- `@assets/` → `src/assets/`
- `@styles/` → `src/styles/`

## 📝 文件命名规范 | File Naming Convention

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件文件 | PascalCase | `MyComponent.jsx` |
| 样式文件 | PascalCase + .module.css | `MyComponent.module.css` |
| 工具文件 | camelCase | `helpers.js` |
| Hooks | camelCase + use 前缀 | `useMyHook.js` |
| 常量文件 | camelCase | `constants.js` |

## 🚀 扩展建议 | Extension Suggestions

根据项目需求，可以添加以下目录：

- `/src/contexts/` - React Context
- `/src/services/` - API 服务
- `/src/store/` - 状态管理（Redux/Zustand）
- `/src/routes/` - 路由配置
- `/src/layouts/` - 不同布局
- `/src/types/` - TypeScript 类型定义
