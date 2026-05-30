function Home() {
  return (
    <div className="space-y-section-gap">
      <section>
        <div className="neumorphic-extruded rounded-32 p-container-padding flex flex-col md:flex-row items-center gap-12 bg-background border border-white/20">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-display-hero font-display text-on-surface">
                资深 AI 产品经理 & <br />
                <span className="text-primary">AI 生态构建者</span>
              </h1>
              <p className="text-body-lg font-body text-on-surface-variant max-w-xl">
                早期 AI Agent 与 RAG 实践者。致力于构建连接人类意图与机器执行的智能系统，推动 AI 产品真正落地。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="neumorphic-extruded px-4 py-2 rounded-full text-label-sm font-body font-bold text-primary">大语言模型</span>
              <span className="neumorphic-extruded px-4 py-2 rounded-full text-label-sm font-body font-bold text-primary">RAG 系统</span>
              <span className="neumorphic-extruded px-4 py-2 rounded-full text-label-sm font-body font-bold text-primary">AI Agent</span>
              <span className="neumorphic-extruded px-4 py-2 rounded-full text-label-sm font-body font-bold text-primary">向量数据库</span>
            </div>
            <div className="pt-4">
              <button className="neumorphic-extruded neumorphic-active bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold flex items-center gap-2 group transition-all-custom">
                探索 AI 生态
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">rocket_launch</span>
              </button>
            </div>
          </div>
          
          <div className="hidden lg:flex w-1/3 aspect-square items-center justify-center">
            <div className="w-64 h-64 neumorphic-extruded rounded-full flex items-center justify-center p-8 bg-background">
              <div className="w-48 h-48 neumorphic-inset rounded-full flex items-center justify-center p-6">
                <div className="w-32 h-32 neumorphic-inset-deep rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-6xl" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-headline-lg font-display text-on-surface">前瞻方法论</h2>
          <p className="text-body-md font-body text-on-surface-variant">面向智能时代的多学科产品策略。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neumorphic-extruded rounded-32 p-10 bg-background space-y-4">
            <div className="w-16 h-16 neumorphic-inset rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">hub</span>
            </div>
            <h3 className="text-headline-md font-display">系统编排</h3>
            <p className="text-body-md font-body text-on-surface-variant">
              设计超越单次提示交互的复杂 AI Agent 工作流，构建自主循环与反馈机制，驱动真实业务价值。
            </p>
          </div>

          <div className="neumorphic-inset-deep rounded-32 p-10 space-y-4 border border-white/30">
            <div className="w-16 h-16 neumorphic-extruded rounded-2xl flex items-center justify-center mb-6 bg-background">
              <span className="material-symbols-outlined text-primary text-3xl">database</span>
            </div>
            <h3 className="text-headline-md font-display">知识管理</h3>
            <p className="text-body-md font-body text-on-surface-variant">
              运用检索增强生成（RAG）将大模型锚定在专有知识之上，确保企业级部署的准确性、隐私性与上下文相关性。
            </p>
          </div>

          <div className="neumorphic-inset-deep rounded-32 p-10 space-y-4 border border-white/30">
            <div className="w-16 h-16 neumorphic-extruded rounded-2xl flex items-center justify-center mb-6 bg-background">
              <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
            </div>
            <h3 className="text-headline-md font-display">生态设计</h3>
            <p className="text-body-md font-body text-on-surface-variant">
              构建人机共存的 AI 基础设施，从工具调用集成到以用户为中心的界面设计，让机器智能自然融入工作流。
            </p>
          </div>

          <div className="neumorphic-extruded rounded-32 p-10 bg-background space-y-4">
            <div className="w-16 h-16 neumorphic-inset rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
            </div>
            <h3 className="text-headline-md font-display">战略增长</h3>
            <p className="text-body-md font-body text-on-surface-variant">
              从原型走向生产级 AI 产品，贯通技术可行性与市场契合，全生命周期管理 AI 领域产品。
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="neumorphic-extruded rounded-3xl p-8 text-center space-y-4 group hover:scale-105 transition-all-custom">
            <div className="w-12 h-12 mx-auto neumorphic-inset rounded-xl flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>lightbulb</span>
            </div>
            <div className="neumorphic-inset-deep rounded-2xl py-4 px-2">
              <span className="text-display-hero text-primary font-display block">500+</span>
              <span className="text-label-sm font-body font-bold text-on-surface-variant uppercase tracking-widest">创意库</span>
            </div>
          </div>
          
          <div className="neumorphic-extruded rounded-3xl p-8 text-center space-y-4 group hover:scale-105 transition-all-custom">
            <div className="w-12 h-12 mx-auto neumorphic-inset rounded-xl flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>auto_stories</span>
            </div>
            <div className="neumorphic-inset-deep rounded-2xl py-4 px-2">
              <span className="text-display-hero text-primary font-display block">知识库</span>
              <span className="text-label-sm font-body font-bold text-on-surface-variant uppercase tracking-widest">结构化沉淀</span>
            </div>
          </div>
          
          <div className="neumorphic-extruded rounded-3xl p-8 text-center space-y-4 group hover:scale-105 transition-all-custom">
            <div className="w-12 h-12 mx-auto neumorphic-inset rounded-xl flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>bookmarks</span>
            </div>
            <div className="neumorphic-inset-deep rounded-2xl py-4 px-2">
              <span className="text-display-hero text-primary font-display block">3k+</span>
              <span className="text-label-sm font-body font-bold text-on-surface-variant uppercase tracking-widest">精选书签</span>
            </div>
          </div>
          
          <div className="neumorphic-extruded rounded-3xl p-8 text-center space-y-4 group hover:scale-105 transition-all-custom">
            <div className="w-12 h-12 mx-auto neumorphic-inset rounded-xl flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>school</span>
            </div>
            <div className="neumorphic-inset-deep rounded-2xl py-4 px-2">
              <span className="text-display-hero text-primary font-display block">200+</span>
              <span className="text-label-sm font-body font-bold text-on-surface-variant uppercase tracking-widest">课程学习</span>
            </div>
          </div>
        </div>
      </section>

      <section className="neumorphic-extruded rounded-32 p-container-padding bg-background relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 neumorphic-inset rounded-full p-4 flex-shrink-0">
            <div className="w-full h-full neumorphic-extruded rounded-full bg-surface-container flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-outline text-7xl">account_circle</span>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-headline-lg font-display text-on-surface">智能背后的产品思维</h2>
            <p className="text-body-lg font-body text-on-surface-variant">
              我是一名资深 AI 产品经理，拥有超过 10 年高增长生态的产品经验。我的工作处于技术可能性与实用价值的交汇点——不仅构建产品，更培育数据、模型与用户无缝协作的 AI 生态。
            </p>
            <div className="flex gap-4">
              <button className="neumorphic-extruded neumorphic-active bg-background text-on-surface px-6 py-3 rounded-xl font-bold transition-all-custom">查看项目</button>
              <button className="neumorphic-extruded neumorphic-active bg-background text-on-surface px-6 py-3 rounded-xl font-bold transition-all-custom">阅读博客</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
