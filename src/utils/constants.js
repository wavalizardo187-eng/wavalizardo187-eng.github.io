/**
 * 应用常量配置
 * Application Constants
 */

// 导航菜单配置 | Navigation Menu Config
export const NAV_ITEMS = [
  { path: '/', label: '首页', labelEn: 'Home' },
  { path: '/about', label: '关于', labelEn: 'About' },
  { path: '/projects', label: '项目', labelEn: 'Projects' },
  { path: '/contact', label: '联系', labelEn: 'Contact' }
]

// API 配置 | API Config
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

// 应用配置 | App Config
export const APP_CONFIG = {
  title: import.meta.env.VITE_APP_TITLE || '个人网页',
  version: '1.0.0'
}
