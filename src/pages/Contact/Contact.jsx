function Contact() {
  return (
    <div className="space-y-section-gap">
      <section>
        <h1 className="text-display-hero font-display text-primary mb-base">经验与思考</h1>
        <p className="text-body-lg font-body text-on-surface-variant max-w-2xl">
          分享 AI 方法论、产品工程，以及触感数字界面的未来。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-container-padding">
        <div className="flex flex-col gap-6">
          <h2 className="text-headline-md font-display text-primary px-2">方法论</h2>
          <div className="p-6 rounded-32 bg-background neumorphic-extruded neumorphic-hover transition-all cursor-pointer">
            <div className="w-full aspect-video rounded-2xl neumorphic-inset mb-4 flex items-center justify-center overflow-hidden bg-surface-container">
              <span className="material-symbols-outlined text-6xl text-outline opacity-30">dashboard</span>
            </div>
            <h3 className="text-headline-md font-display mb-2">敏捷 AI 集成</h3>
            <p className="text-body-md font-body text-on-surface-variant mb-4">
              如何将机器学习周期融入传统 Sprint，又不牺牲交付速度。
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-label-sm font-body font-bold text-primary neumorphic-inset-deep">Sprint</span>
              <span className="px-3 py-1 rounded-full text-label-sm font-body font-bold text-primary neumorphic-inset-deep">AI Ops</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-headline-md font-display text-primary px-2">案例研究</h2>
          <div className="p-6 rounded-32 bg-background neumorphic-extruded neumorphic-hover transition-all cursor-pointer">
            <div className="w-full aspect-video rounded-2xl neumorphic-inset mb-4 flex items-center justify-center overflow-hidden bg-surface-container">
              <span className="material-symbols-outlined text-6xl text-outline opacity-30">science</span>
            </div>
            <h3 className="text-headline-md font-display mb-2">软 UI 的回归</h3>
            <p className="text-body-md font-body text-on-surface-variant mb-4">
              深度解析：生成式 AI 时代，触感界面为何重新受到青睐。
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-label-sm font-body font-bold text-primary neumorphic-inset-deep">UX 设计</span>
              <span className="px-3 py-1 rounded-full text-label-sm font-body font-bold text-primary neumorphic-inset-deep">心理学</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-headline-md font-display text-primary px-2">AI 教程</h2>
          <div className="p-6 rounded-32 bg-background neumorphic-extruded neumorphic-hover transition-all cursor-pointer">
            <div className="w-full aspect-video rounded-2xl neumorphic-inset mb-4 flex items-center justify-center overflow-hidden bg-surface-container">
              <span className="material-symbols-outlined text-6xl text-outline opacity-30">school</span>
            </div>
            <h3 className="text-headline-md font-display mb-2">提示词工程入门</h3>
            <p className="text-body-md font-body text-on-surface-variant mb-4">
              掌握语言精确性的艺术，每次都能实现理想的模型对齐。
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-label-sm font-body font-bold text-primary neumorphic-inset-deep">LLM</span>
              <span className="px-3 py-1 rounded-full text-label-sm font-body font-bold text-primary neumorphic-inset-deep">教程</span>
            </div>
          </div>
        </div>
      </section>

      <section className="p-container-padding rounded-32 bg-background neumorphic-extruded">
        <h2 className="text-headline-lg font-display text-on-surface mb-12 text-center">设计系统 DNA</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-headline-md font-display text-primary mb-8">色彩体系</h3>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-primary neumorphic-extruded flex items-center justify-center text-white font-bold font-body">#4D41DF</div>
                <span className="text-label-sm font-body font-bold">主色</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-secondary neumorphic-extruded flex items-center justify-center text-white font-bold font-body">#006A66</div>
                <span className="text-label-sm font-body font-bold">辅色</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-tertiary neumorphic-extruded flex items-center justify-center text-white font-bold font-body">#914800</div>
                <span className="text-label-sm font-body font-bold">第三色</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-background neumorphic-inset flex items-center justify-center text-on-surface font-bold font-body">#F6F9FF</div>
                <span className="text-label-sm font-body font-bold">表面色</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-headline-md font-display text-primary mb-8">字体样例</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-xl neumorphic-inset-deep bg-background">
                <p className="text-display-hero font-display text-on-surface">展示标题</p>
                <p className="text-label-sm font-body font-bold text-outline">Plus Jakarta Sans - 64px / 800</p>
              </div>
              <div className="p-4 rounded-xl neumorphic-inset-deep bg-background">
                <p className="text-headline-lg font-display text-on-surface">大标题</p>
                <p className="text-label-sm font-body font-bold text-outline">Plus Jakarta Sans - 40px / 700</p>
              </div>
              <div className="p-4 rounded-xl neumorphic-inset-deep bg-background">
                <p className="text-body-lg font-body text-on-surface">正文大号阅读文本</p>
                <p className="text-label-sm font-body font-bold text-outline">DM Sans - 18px / 500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <div className="p-12 rounded-[40px] bg-background neumorphic-extruded">
          <h2 className="text-headline-lg font-display text-primary mb-base text-center">与我联系</h2>
          <p className="text-body-md font-body text-on-surface-variant mb-10 text-center">
            欢迎探讨您的下一个突破性 AI 产品或创意合作。
          </p>
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-label-sm font-body font-bold text-on-surface ml-4">姓名</label>
              <input
                className="w-full px-6 py-4 rounded-2xl bg-background neumorphic-inset-deep border-none focus:ring-2 focus:ring-primary/20 text-body-md font-body outline-none"
                placeholder="张三"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-label-sm font-body font-bold text-on-surface ml-4">电子邮箱</label>
              <input
                className="w-full px-6 py-4 rounded-2xl bg-background neumorphic-inset-deep border-none focus:ring-2 focus:ring-primary/20 text-body-md font-body outline-none"
                placeholder="zhangsan@example.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-label-sm font-body font-bold text-on-surface ml-4">留言</label>
              <textarea
                className="w-full px-6 py-4 rounded-2xl bg-background neumorphic-inset-deep border-none focus:ring-2 focus:ring-primary/20 text-body-md font-body outline-none resize-none"
                placeholder="请介绍您的项目..."
                rows="4"
              ></textarea>
            </div>
            <button className="w-full py-5 rounded-2xl bg-background neumorphic-extruded text-primary font-bold text-headline-md font-display hover:neumorphic-inset transition-all neumorphic-active">
              发送消息
            </button>
          </form>
          <div className="mt-12 pt-12 border-t border-outline-variant flex flex-col items-center gap-8">
            <p className="text-label-sm font-body font-bold uppercase tracking-widest text-outline">社交媒体</p>
            <div className="flex gap-6">
              <a
                className="w-14 h-14 rounded-2xl bg-background neumorphic-extruded flex items-center justify-center text-primary hover:neumorphic-inset transition-all neumorphic-active"
                href="#"
                aria-label="社交链接 1"
              >
                <span className="material-symbols-outlined">rocket_launch</span>
              </a>
              <a
                className="w-14 h-14 rounded-2xl bg-background neumorphic-extruded flex items-center justify-center text-primary hover:neumorphic-inset transition-all neumorphic-active"
                href="#"
                aria-label="社交链接 2"
              >
                <span className="material-symbols-outlined">terminal</span>
              </a>
              <a
                className="w-14 h-14 rounded-2xl bg-background neumorphic-extruded flex items-center justify-center text-primary hover:neumorphic-inset transition-all neumorphic-active"
                href="#"
                aria-label="社交链接 3"
              >
                <span className="material-symbols-outlined">article</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
