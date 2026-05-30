function About() {
  return (
    <div className="space-y-section-gap">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-4 flex justify-center">
          <div className="w-64 h-64 rounded-full neumorphic-extruded p-4 bg-background overflow-hidden">
            <div className="w-full h-full rounded-full neumorphic-inset flex items-center justify-center bg-surface-container">
              <span className="material-symbols-outlined text-outline text-8xl">account_circle</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="bg-background neumorphic-extruded rounded-32 p-container-padding transition-all-custom">
            <h1 className="text-headline-lg font-display text-primary mb-4">我把智能写进界面里。</h1>
            <p className="text-body-lg font-body text-on-surface-variant leading-relaxed">
              我是一名资深 AI 产品经理与生态构建者，专注于大模型编排与人本设计的交汇。十余年技术产品带队经验，帮助组织在生成式 AI 的复杂性中找到路径，打造像人类思维延伸一样的工具。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-headline-md font-display text-on-surface mb-2">技能与热情</h2>
          <p className="text-label-sm font-body font-bold text-outline uppercase tracking-widest">精通现代工作流</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-section-gap items-start">
          <div className="space-y-6">
            <h3 className="text-headline-md font-display text-primary px-2">核心工具</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 neumorphic-inset-deep rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">smart_toy</span>
                </div>
                <span className="text-label-sm font-body font-bold text-on-surface-variant">Claude</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 neumorphic-inset-deep rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">terminal</span>
                </div>
                <span className="text-label-sm font-body font-bold text-on-surface-variant">Cursor</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 neumorphic-inset-deep rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">schema</span>
                </div>
                <span className="text-label-sm font-body font-bold text-on-surface-variant">LangChain</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 neumorphic-inset-deep rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">frame_inspect</span>
                </div>
                <span className="text-label-sm font-body font-bold text-on-surface-variant">Figma</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-headline-md font-display text-primary px-2">AI 专长</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background neumorphic-extruded rounded-full px-6 py-4 flex items-center gap-3 transition-all-custom cursor-default hover:neumorphic-hover">
                <span className="material-symbols-outlined text-primary">bolt</span>
                <span className="text-label-sm font-body font-bold text-on-surface">提示词工程</span>
              </div>
              <div className="bg-background neumorphic-extruded rounded-full px-6 py-4 flex items-center gap-3 transition-all-custom cursor-default hover:neumorphic-hover">
                <span className="material-symbols-outlined text-primary">database</span>
                <span className="text-label-sm font-body font-bold text-on-surface">RAG 设计</span>
              </div>
              <div className="bg-background neumorphic-extruded rounded-full px-6 py-4 flex items-center gap-3 transition-all-custom cursor-default hover:neumorphic-hover">
                <span className="material-symbols-outlined text-primary">hub</span>
                <span className="text-label-sm font-body font-bold text-on-surface">Agent 编排</span>
              </div>
              <div className="bg-background neumorphic-extruded rounded-full px-6 py-4 flex items-center gap-3 transition-all-custom cursor-default hover:neumorphic-hover">
                <span className="material-symbols-outlined text-primary">visibility</span>
                <span className="text-label-sm font-body font-bold text-on-surface">计算机视觉</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex justify-between items-end px-2">
          <div>
            <h2 className="text-headline-md font-display text-on-surface">写作与洞见</h2>
            <p className="text-body-md font-body text-on-surface-variant">探索人机协作的前沿。</p>
          </div>
          <button className="bg-background neumorphic-extruded rounded-xl px-4 py-2 text-label-sm font-body font-bold text-primary hover:neumorphic-inset transition-all-custom">
            查看归档
          </button>
        </div>
        <div className="space-y-6">
          <div className="bg-background neumorphic-extruded rounded-[24px] p-6 neumorphic-hover transition-all-custom flex flex-col md:flex-row md:items-center gap-6 cursor-pointer">
            <div className="w-full md:w-32 h-24 neumorphic-inset-deep rounded-xl flex items-center justify-center bg-background">
              <span className="material-symbols-outlined text-4xl text-outline opacity-30">article</span>
            </div>
            <div className="flex-1">
              <span className="text-label-sm font-body font-bold text-primary">2024 年 2 月</span>
              <h4 className="text-headline-md font-display text-on-surface mt-1">Agent 工作流架构设计</h4>
              <p className="text-body-md font-body text-on-surface-variant mt-2">如何构建不仅能响应、还能自主推理与行动的系统。</p>
            </div>
            <span className="material-symbols-outlined text-primary">arrow_forward</span>
          </div>
          
          <div className="bg-background neumorphic-extruded rounded-[24px] p-6 neumorphic-hover transition-all-custom flex flex-col md:flex-row md:items-center gap-6 cursor-pointer">
            <div className="w-full md:w-32 h-24 neumorphic-inset-deep rounded-xl flex items-center justify-center bg-background">
              <span className="material-symbols-outlined text-4xl text-outline opacity-30">menu_book</span>
            </div>
            <div className="flex-1">
              <span className="text-label-sm font-body font-bold text-primary">2024 年 1 月</span>
              <h4 className="text-headline-md font-display text-on-surface mt-1">AI 时代的新拟态设计</h4>
              <p className="text-body-md font-body text-on-surface-variant mt-2">当数字体验愈发轻量短暂，触感 UI 为何重新流行。</p>
            </div>
            <span className="material-symbols-outlined text-primary">arrow_forward</span>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-headline-md font-display text-on-surface">技术武器库</h2>
          <p className="text-label-sm font-body font-bold text-outline uppercase tracking-widest">以触感精度构建</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background neumorphic-extruded rounded-32 p-8 space-y-6">
            <div className="w-12 h-12 neumorphic-inset rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">strategy</span>
            </div>
            <h3 className="text-headline-md font-display text-on-surface">产品</h3>
            <ul className="space-y-3 text-body-md font-body text-on-surface-variant">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> 路线图策略</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> 市场进入规划</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> 用户研究</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> 敏捷领导力</li>
            </ul>
          </div>
          
          <div className="bg-background neumorphic-extruded rounded-32 p-8 space-y-6">
            <div className="w-12 h-12 neumorphic-inset rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">memory</span>
            </div>
            <h3 className="text-headline-md font-display text-on-surface">AI / ML</h3>
            <ul className="space-y-3 text-body-md font-body text-on-surface-variant">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> 向量数据库（Pinecone）</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> 开源模型</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> 微调流水线</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> 伦理与偏见审计</li>
            </ul>
          </div>
          
          <div className="bg-background neumorphic-extruded rounded-32 p-8 space-y-6">
            <div className="w-12 h-12 neumorphic-inset rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">code</span>
            </div>
            <h3 className="text-headline-md font-display text-on-surface">开发</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="neumorphic-inset-deep rounded-lg p-3 text-center text-label-sm font-body font-bold text-on-surface-variant">React</div>
              <div className="neumorphic-inset-deep rounded-lg p-3 text-center text-label-sm font-body font-bold text-on-surface-variant">Next.js</div>
              <div className="neumorphic-inset-deep rounded-lg p-3 text-center text-label-sm font-body font-bold text-on-surface-variant">FastAPI</div>
              <div className="neumorphic-inset-deep rounded-lg p-3 text-center text-label-sm font-body font-bold text-on-surface-variant">Python</div>
              <div className="neumorphic-inset-deep rounded-lg p-3 text-center text-label-sm font-body font-bold text-on-surface-variant">TypeScript</div>
              <div className="neumorphic-inset-deep rounded-lg p-3 text-center text-label-sm font-body font-bold text-on-surface-variant">Node.js</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
