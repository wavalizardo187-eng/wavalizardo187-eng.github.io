function Footer() {
  return (
    <footer className="w-full py-section-gap bg-background shadow-[inset_0px_9px_16px_rgb(163,177,198,0.3)] mt-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-[1200px] mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-primary text-headline-md font-display">AI 作品集</span>
          <p className="text-body-md font-body text-on-surface-variant">
            © 2024 AI 产品经理作品集 · 以触感精度构建
          </p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href="#" 
            className="w-12 h-12 neumorphic-extruded rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all-custom"
            aria-label="领英"
          >
            <span className="material-symbols-outlined">link</span>
          </a>
          <a 
            href="#" 
            className="w-12 h-12 neumorphic-extruded rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all-custom"
            aria-label="GitHub"
          >
            <span className="material-symbols-outlined">terminal</span>
          </a>
          <a 
            href="#" 
            className="w-12 h-12 neumorphic-extruded rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all-custom"
            aria-label="邮箱"
          >
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-label-sm font-body text-on-surface-variant hover:text-primary transition-all-custom">
            领英
          </a>
          <a href="#" className="text-label-sm font-body text-on-surface-variant hover:text-primary transition-all-custom">
            GitHub
          </a>
          <a href="#" className="text-label-sm font-body text-on-surface-variant hover:text-primary transition-all-custom">
            推特
          </a>
          <a href="#" className="text-label-sm font-body text-on-surface-variant hover:text-primary transition-all-custom">
            邮箱
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
