/**
 * 工具函数集合
 * Utility Helper Functions
 */

/**
 * 格式化日期
 * Format Date
 */
export const formatDate = (date, locale = 'zh-CN') => {
  return new Date(date).toLocaleDateString(locale)
}

/**
 * 防抖函数
 * Debounce Function
 */
export const debounce = (func, delay = 300) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * 节流函数
 * Throttle Function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
