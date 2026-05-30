# Assets 资源目录

此目录用于存放静态资源文件。
This directory is for static asset files.

## 目录结构 | Directory Structure

```
assets/
├── images/       # 图片文件 | Image files
├── icons/        # 图标文件 | Icon files
├── fonts/        # 字体文件 | Font files
└── videos/       # 视频文件 | Video files
```

## 使用方法 | Usage

```jsx
import logo from './assets/images/logo.png'

function Component() {
  return <img src={logo} alt="Logo" />
}
```
