import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 w-full z-[60] bg-background neumorphic-extruded">
      <nav className="flex justify-between items-center w-full px-gutter py-4 max-w-[1200px] mx-auto">
        <Link to="/" className="text-headline-md font-display font-extrabold text-primary hover:text-primary-container transition-colors">
          AI 作品集
        </Link>
        
        <div className="hidden md:flex items-center gap-2">
          <Link 
            to="/" 
            className={`px-4 py-2 rounded-lg transition-all-custom ${
              isActive('/') 
                ? 'text-primary font-bold neumorphic-inset' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            首页
          </Link>
          <Link 
            to="/about" 
            className={`px-4 py-2 rounded-lg transition-all-custom ${
              isActive('/about') 
                ? 'text-primary font-bold neumorphic-inset' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            关于
          </Link>
          <Link 
            to="/projects" 
            className={`px-4 py-2 rounded-lg transition-all-custom ${
              isActive('/projects') 
                ? 'text-primary font-bold neumorphic-inset' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            项目
          </Link>
          <Link 
            to="/contact" 
            className={`px-4 py-2 rounded-lg transition-all-custom ${
              isActive('/contact') 
                ? 'text-primary font-bold neumorphic-inset' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            博客
          </Link>
        </div>

        <button className="neumorphic-extruded neumorphic-active bg-background text-primary font-bold px-6 py-2 rounded-xl transition-all-custom">
          联系我
        </button>
      </nav>

      <nav className="fixed bottom-0 left-0 w-full z-[60] flex justify-around items-center px-4 py-3 md:hidden bg-background neumorphic-extruded rounded-t-xl">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center p-2 transition-all-custom ${
            isActive('/') 
              ? 'text-primary neumorphic-inset rounded-xl' 
              : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-label-sm font-body mt-1">首页</span>
        </Link>
        <Link 
          to="/projects" 
          className={`flex flex-col items-center justify-center p-2 transition-all-custom ${
            isActive('/projects') 
              ? 'text-primary neumorphic-inset rounded-xl' 
              : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-label-sm font-body mt-1">项目</span>
        </Link>
        <Link 
          to="/contact" 
          className={`flex flex-col items-center justify-center p-2 transition-all-custom ${
            isActive('/contact') 
              ? 'text-primary neumorphic-inset rounded-xl' 
              : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined">history_edu</span>
          <span className="text-label-sm font-body mt-1">博客</span>
        </Link>
        <Link 
          to="/about" 
          className={`flex flex-col items-center justify-center p-2 transition-all-custom ${
            isActive('/about') 
              ? 'text-primary neumorphic-inset rounded-xl' 
              : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-label-sm font-body mt-1">关于</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
