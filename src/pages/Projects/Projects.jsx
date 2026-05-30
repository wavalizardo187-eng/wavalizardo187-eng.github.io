function Projects() {
  return (
    <div className="space-y-section-gap">
      <section>
        <h1 className="text-display-hero font-display text-on-surface mb-4">
          项目<span className="text-primary">展示</span>
        </h1>
        <p className="text-body-lg font-body text-on-surface-variant max-w-2xl">
          精选高影响力 AI 架构与客户解决方案，以触感精度与生态优先思维设计。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <article className="neumorphic-extruded rounded-32 p-container-padding flex flex-col gap-6 group hover:scale-[1.01] transition-transform duration-300">
          <div className="neumorphic-inset-deep w-20 h-20 rounded-2xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[40px]">hub</span>
          </div>
          <div className="space-y-3">
            <h2 className="text-headline-lg font-display text-primary">AI 内部工具</h2>
            <p className="text-body-md font-body text-on-surface-variant">
              面向内部工作流的知识库与 Agent 生态，基于私有化大模型基础设施，保障数据主权并实现跨部门实时同步。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="neumorphic-inset px-4 py-1 rounded-full text-label-sm font-body font-bold text-secondary">知识库</span>
            <span className="neumorphic-inset px-4 py-1 rounded-full text-label-sm font-body font-bold text-secondary">Agent 框架</span>
          </div>
          <div className="mt-auto pt-6">
            <button className="neumorphic-extruded neumorphic-active px-8 py-4 rounded-xl text-primary font-bold flex items-center gap-2 group">
              查看案例研究
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </article>

        <article className="neumorphic-extruded rounded-32 p-container-padding flex flex-col gap-6 group hover:scale-[1.01] transition-transform duration-300">
          <div className="neumorphic-inset-deep w-20 h-20 rounded-2xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[40px]">monitoring</span>
          </div>
          <div className="space-y-3">
            <h2 className="text-headline-lg font-display text-primary">金融 RAG 助手</h2>
            <p className="text-body-md font-body text-on-surface-variant">
              面向高净值客户的检索增强生成系统，内置金融逻辑引擎，支持精准组合审计与风险评估。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="neumorphic-inset px-4 py-1 rounded-full text-label-sm font-body font-bold text-secondary">RAG 系统</span>
            <span className="neumorphic-inset px-4 py-1 rounded-full text-label-sm font-body font-bold text-secondary">金融科技</span>
          </div>
          <div className="mt-auto pt-6">
            <button className="neumorphic-extruded neumorphic-active px-8 py-4 rounded-xl text-primary font-bold flex items-center gap-2 group">
              查看实现方案
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </article>

        <article className="neumorphic-extruded rounded-32 p-container-padding flex flex-col gap-6 group hover:scale-[1.01] transition-transform duration-300 md:col-span-2">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="neumorphic-inset-deep w-20 h-20 md:w-32 md:h-32 rounded-32 flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[48px] md:text-[64px]">architecture</span>
            </div>
            <div className="space-y-3 flex-1">
              <h2 className="text-headline-lg font-display text-primary">企业级 AI 生态平台</h2>
              <p className="text-body-md font-body text-on-surface-variant max-w-3xl">
                模块化平台架构，支持各业务单元部署与管理定制 AI Agent，同时保持集中式安全与合规层，可扩展至 10 至 10,000 用户规模。
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="neumorphic-inset px-4 py-1 rounded-full text-label-sm font-body font-bold text-secondary">治理</span>
                <span className="neumorphic-inset px-4 py-1 rounded-full text-label-sm font-body font-bold text-secondary">可扩展性</span>
                <span className="neumorphic-inset px-4 py-1 rounded-full text-label-sm font-body font-bold text-secondary">SaaS</span>
              </div>
            </div>
            <div className="md:ml-auto">
              <button className="neumorphic-extruded neumorphic-active w-full md:w-auto px-12 py-6 rounded-2xl text-primary font-bold flex items-center justify-center gap-2">
                完整作品集
                <span className="material-symbols-outlined">grid_view</span>
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="neumorphic-inset-deep rounded-32 p-8 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-primary mb-2 text-4xl">speed</span>
          <p className="text-label-sm font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1">效率倍增</p>
          <div className="text-[48px] font-display font-extrabold text-primary">4.2x</div>
          <p className="text-body-md font-body text-on-surface-variant mt-2">平均工作流加速</p>
        </div>

        <div className="neumorphic-inset-deep rounded-32 p-8 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-primary mb-2 text-4xl">library_books</span>
          <p className="text-label-sm font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1">模板库</p>
          <div className="text-[48px] font-display font-extrabold text-primary">120+</div>
          <p className="text-body-md font-body text-on-surface-variant mt-2">可复用 AI 模块</p>
        </div>

        <div className="neumorphic-inset-deep rounded-32 p-8 text-center flex flex-col items-center sm:col-span-2 lg:col-span-1">
          <span className="material-symbols-outlined text-primary mb-2 text-4xl">deployed_code</span>
          <p className="text-label-sm font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1">活跃部署</p>
          <div className="text-[48px] font-display font-extrabold text-primary">14k</div>
          <p className="text-body-md font-body text-on-surface-variant mt-2">企业级 Agent</p>
        </div>
      </section>
    </div>
  )
}

export default Projects
