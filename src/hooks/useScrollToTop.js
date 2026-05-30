import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 路由切换时滚动到顶部
 * Scroll to top on route change
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}
