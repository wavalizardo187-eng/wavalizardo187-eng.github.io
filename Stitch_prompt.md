# Personal Website Wireframe Design Prompt

## Role & Context
You are an expert frontend engineer, UI/UX designer, and visual design specialist. Create a comprehensive wireframe prototype for a personal portfolio website using the **Neumorphism (Soft UI) Design System**. This is a modern, tactile design that uses dual opposing shadows to create depth on monochromatic backgrounds.

**IMPORTANT**: Do NOT include any actual images, photos, or avatars in the wireframe. Use placeholder shapes (circles, rectangles) with neumorphic styling to represent image areas.

---

## Design System Requirements

### Visual Style: Neumorphism (Soft UI)
- **Base Background**: `#E0E5EC` (Cool grey - all elements molded from this surface)
- **Primary Text**: `#3D4852` (Dark blue-grey, 7.5:1 contrast ratio)
- **Secondary Text**: `#6B7280` (Cool grey, WCAG AA compliant)
- **Accent Color**: `#6C63FF` (Soft violet for CTAs and interactive elements)
- **Accent Secondary**: `#38B2AC` (Teal for success indicators)

### Shadow System (CRITICAL)
**Extruded (Raised) Effect**:
```css
box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5);
```

**Inset (Pressed) Effect**:
```css
box-shadow: inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5);
```

**Deep Inset (Wells/Inputs)**:
```css
box-shadow: inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6);
```

### Border Radius
- **Large Containers/Cards**: `32px` (Very soft, pillowed corners)
- **Buttons/Medium Elements**: `16px`
- **Small Elements/Icons**: `12px` or `9999px` (fully rounded)

### Typography
- **Display Font**: "Plus Jakarta Sans" (500, 600, 700, 800) - For headlines
- **Body Font**: "DM Sans" (400, 500, 700) - For body text and UI
- **Scale**: Responsive from 14px (mobile) to 72px (hero headlines)

---

## Website Structure & Content

### 1. OVERALL INFORMATION (整体信息)

#### Header / Navigation
**Components**:
- **Logo Area** (placeholder circle or text, inset deep shadow)
- **Navigation Menu** (extruded buttons with hover effects):
  - Personal Profile
  - Work Introduction  
  - Core Values
  - Module Sidebar

**Desktop Navigation Style**:
- Horizontal layout, sticky header with backdrop blur
- Each nav item: extruded shadow, rounded-2xl, hover lifts with enhanced shadow

**Mobile Navigation**:
- Hamburger menu (extruded circle button, 44x44px minimum)
- Slide-down menu with extruded shadow background

#### Hero Section / Banner
**Content** (displayed as wireframe text/shapes):
- Main tagline area (large text placeholder)
- Professional identity:
  - "Senior AI PM"
  - "AI/IP Expert"
  - "AI Product Manager"
  - "AI Ecosystem Builder"
  - "Early AI Agent & RAG Practitioner"
- Technology expertise list (displayed as text items):
  - Search, Agents, RAG, AI infrastructure
  - AI team management
  - AI landing

**Visual Treatment**:
- Large extruded card (`rounded-[32px]`, padding `p-20`)
- Hero text uses Display font, extra-bold (800 weight)
- Technology tags: smaller extruded pills with `rounded-full`

#### Overview Section (显示个人介绍)
**Content Areas**:
- **Personal Introduction**
  - Work history
  - Educational background
  - Core skills
  - Product management capabilities
  - AI team leadership
  - Platform expertise

- **Display Style** (个人大组)**:
  - Large container card with nested sections
  - Each section uses alternating extruded/inset patterns for visual hierarchy

---

### 2. PAGE MODULES (页面模块)

#### A. Homepage (首页)
**Components**:
- Logo (placeholder shape with deep inset)
- Hero Banner (large extruded card)
- Personal Profile summary (medium extruded card)
- Core Values section (grid of smaller cards)

**Layout**:
- Full-width hero section with centered content
- Max-width container: `max-w-7xl`
- Generous vertical spacing: `py-32` between sections

#### B. About Me (关于我)
**Content Blocks** (each as separate neumorphic cards):

1. **Personal Introduction** (个人简介)
   - Brief bio
   - Unique perspective
   - Achievement highlights

2. **Skills & Passions** (技术栈)
   - **Development Tools** (成长好用工具):
     - Claude, ChatGPT, Cursor, Midjourney
     - V0, Bolt, Lovable, Replit
     - Agent.ai, Replit Agent
     - Use icon wells (inset deep) with placeholder icons

   - **AI Technologies** (AI能力):
     - AI prompting
     - API integration
     - Product management
     - Agent design
     - MCP development
     - AI search
     - AI infrastructure
     - Display as grid of skill pills (extruded, rounded-full)

3. **Blog/Writing** (博客/阅读)
   - ChatGPT Prompt Engineering
   - Full-stack engineer notebooks
   - AI product development
   - Use extruded card list with hover lift effect

4. **AI/Agent Development**
   - Intelligent customer service
   - Product management
   - Agent ecosystem
   - Use nested cards: outer extruded, inner sections inset

**Layout Style**:
- 2-column grid on desktop (`lg:grid-cols-2`)
- Single column on mobile
- Gap: `gap-12`

#### C. Projects Showcase (项目展示)
**Featured Projects** (each as large neumorphic card):

1. **AI Internal Tools**
   - AI knowledge base
   - Agent ecosystem
   - Multi-Agent workflows
   - Display: extruded card with inset icon well

2. **Client/Customer Tools**
   - Knowledge extraction
   - RAG systems
   - Financial assistant
   - Project management
   - Display: Grid of medium cards with hover scale effect

3. **Productivity Tools**
   - Daily AI tools (10+ listed)
   - Learning platforms (3000-4000 scenario examples)
   - Efficiency multipliers (3500+ template library)
   - Display: Stat cards with large numbers, extruded background

**Card Structure**:
- Outer card: extruded, `rounded-[32px]`, `p-8`
- Icon area: inset deep well, circular or square
- Title: bold, primary color
- Description: muted color, regular weight
- CTA: extruded button with accent color

#### D. Blog/Experience (博客/经验)
**Content Types**:
- **Methodologies** (方法论): System frameworks, case studies
- **Sharing** (分享): Experience posts, tutorials
- **Recommendations** (荐书荐课): Curated resources

**Display Format**:
- Card list layout
- Each post: extruded card with hover lift
- Date, title, excerpt visible
- Tags: inset small pills at bottom

---

### 3. SKILLS SECTION (技能线)

Display as interactive, organized sections with visual hierarchy:

#### A. Blogging (博客)
**Platforms**:
- Personal blog, CSDN, Zhihu, Juejin, Medium
- LinkedIn, Xiaohongshu

**Visual**: Row of extruded platform badges/pills

#### B. Learning (学习)
**Resources**:
- **Courses**: Agent tutorials, MCP tutorials, AI courses, Full-stack development
- **Tools**: Cursor, AI code assistants
- **Best Practices**: Code optimization, Agent guidance, RAG systems

**Visual**: Nested card structure - outer extruded card containing inset wells for each category

#### C. Efficiency & Tracking (导航与跟踪)

1. **Navigation Methods** (导航方式):
   - **Intelligent Platform Aggregation**:
     - AI search engines: Perplexity, Venice.ai
     - Agent platforms: Agent.ai, Coze.ai
     - Application generators: Cursor.sh, V0.dev, Replit
   - **ChatGPT Prompt Library**:
     - Framework prompts, role prompts, task prompts
     - Context prompts, optimization prompts
   - **AI/Agent Ecosystem**:
     - Engineering, product, operations, growth
     - Finance, legal, customer service, automation, creativity

2. **Contact Methods** (联系方式):
   - Personal email
   - Work email  
   - GitHub link
   - LinkedIn profile
   - Twitter/X
   - Availability calendar

**Visual Treatment**:
- Large extruded container
- Sub-sections in 3-column grid
- Each link: extruded button with icon (inset circle)
- Hover: lift effect + shadow enhancement

---

### 4. TECH STACK DISPLAY (技能线 - 技能栈)

Organize into clear categories with visual grouping:

#### A. Product Competencies (产品能力)
**Content**:
- **Customer Insights**: User interviews, surveys, behavior analysis, competitive research
- **Requirements Management**: Freeform, PRD writing, use cases, prototyping
- **Project Management**: Roadmap, milestone, sprint, retrospective

**Visual**: Extruded cards with inset icon wells, arranged in rows

#### B. AI Capabilities (AI能力)
**Content**:
- **LLM Operations**: Prompt engineering, fine-tuning, RAG, MCP
- **Agent Design**: Orchestration, decomposition, tool invocation, planning, dialogue
- **Infrastructure**: Data pipeline, model deployment, monitoring, A/B testing

**Visual**: 3-column grid on desktop, extruded cards with teal accent for AI indicators

#### C. Technical Stack (技术栈)
**Categories**:

1. **Databases**: PostgreSQL, MongoDB, MySQL, Redis, ElasticSearch, Pinecone, Qdrant
2. **Frameworks & Languages**:
   - Frontend: React, Next.js, Vue, Svelte, Tailwind
   - Backend: FastAPI, Node.js, Express, Koa
   - Python, TypeScript, JavaScript
3. **Tools**: Docker, K8s, Git, GitHub Actions, Jenkins, Terraform

**Visual**: Tag cloud or grid layout, each tech as small extruded pill

---

### 5. ACHIEVEMENTS & METRICS (导航与跟踪 - 每想法跟踪)

Display as prominent stat cards:

**Key Metrics** (prominent numbers with labels):
- **Ideas Database**: 500+ entries, multi-dimensional tagging
- **Knowledge Base**: Built-in structure, categorized summaries  
- **Bookmarks**: 3000+ curated bookmarks, multi-tag organization
- **Learning**: 200+ courses, structured notebook system

**Visual Treatment**:
- Large extruded cards in 2x2 or 4-column grid
- Number: very large, display font, primary color
- Label: smaller, muted color
- Icon well: inset deep, circular, at top

---

### 6. DESIGN SYSTEM (配色方案)

**Visual Representation** (show in "About Design" section):

#### A. Colors
Display color palette as extruded/inset circles:
- **Primary Colors**: Show color names and hex codes
  - Background: `#E0E5EC`
  - Foreground: `#3D4852`
  - Muted: `#6B7280`
  - Accent: `#6C63FF`

#### B. Typography Showcase
Display font specimens with actual styling:
- **Headlines**: Plus Jakarta Sans (multiple weights)
- **Body**: DM Sans (regular, medium, bold)
- Show scale from small (14px) to display (72px)

#### C. Shadow & Depth Examples
Show visual examples:
- Extruded button
- Inset input field
- Deep inset icon well
- Nested depth demonstration

**Layout**: Single column section, extruded card containing all design tokens

---

### 7. INTERACTION EFFECTS (交互效果)

**Apply throughout the wireframe**:

#### A. Visual Feedback (视觉反馈)
- **Button States**:
  - Default: Extruded shadow
  - Hover: Lift (`-translate-y-1`) + enhanced shadow
  - Active: Press down (`translate-y-0.5`) + inset shadow
  - Disabled: Reduced opacity, flat shadow

- **Navigation**:
  - Active link: Inset shadow + accent color text
  - Hover: Extruded shadow + accent color
  - Focus: 2px accent ring with offset

#### B. Page Transitions (页面切换)
- **Scrolling**: Smooth scroll behavior
- **Section Reveals**: Fade-in with slight translate on scroll
- **Hero Animation**: Floating animation on decorative elements

#### C. User Experience (用户互动)
**Micro-interactions** (300ms transitions):
- Card hover: Scale slightly + lift
- Button press: Physical press animation
- Icon wells: Rotate inner icon on hover
- Links: Color shift + slight scale

#### D. Learning Methods (学习方式)
**Interactive Elements**:
- **FAQ/Accordion**: Extruded header, expands to show inset content
- **Tabs**: Active tab inset, inactive tabs extruded
- **Tooltips**: Small extruded card with arrow

**Visual Representation**:
- Demo section showing interactive states
- Side-by-side comparison: default → hover → active

---

## Layout & Responsive Design

### Desktop Layout (1024px+)
- **Max Width**: `1280px` centered container
- **Navigation**: Horizontal, sticky header
- **Grids**: 2-3 columns for cards/projects
- **Hero**: Full-width with large padding (`py-32`)

### Tablet Layout (768px - 1023px)
- **Navigation**: Condensed horizontal or hamburger
- **Grids**: 2 columns max
- **Font Sizes**: Scale down by 20%

### Mobile Layout (< 768px)
- **Navigation**: Hamburger menu mandatory
- **Grids**: Single column
- **Padding**: Reduce to `p-8` from `p-16`
- **Touch Targets**: Minimum 44x44px
- **Font Sizes**: Hero text from `text-7xl` → `text-5xl`

---

## Accessibility Requirements

- **Contrast Ratios**: 
  - Primary text: 7.5:1 (WCAG AAA)
  - Secondary text: 4.6:1 (WCAG AA)
- **Focus Indicators**: 2px accent ring on all interactive elements
- **Keyboard Navigation**: Full support, logical tab order
- **Touch Targets**: 44x44px minimum on mobile
- **Screen Reader**: Semantic HTML, proper ARIA labels

---

## Technical Implementation Notes

### CSS Shadow Variables (for consistency)
```css
--shadow-extruded: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5);
--shadow-extruded-hover: 12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6);
--shadow-inset: inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5);
--shadow-inset-deep: inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6);
```

### Animation Keyframes
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

---

## Content Hierarchy Priority

### Primary (Most Prominent)
1. Hero section with professional title
2. Key metrics/achievements (large stat cards)
3. Primary CTA buttons (contact, view projects)

### Secondary (Supporting)
4. Featured projects (top 3-5)
5. Skills overview (visual grid)
6. Recent blog posts (top 3)

### Tertiary (Detail)
7. Full project list
8. Complete tech stack
9. Learning resources
10. Contact form/links

---

## Wireframe Deliverables

Create a comprehensive wireframe showing:

1. **Homepage** (above the fold + full scroll)
2. **About Page** (full layout)
3. **Projects Page** (grid view + single project detail)
4. **Blog Page** (list view + single post)
5. **Contact Section** (form + info)
6. **Mobile View** (homepage + navigation menu)

**Style**: 
- Use neumorphic design system consistently
- Show actual shadow effects (extruded/inset)
- Use placeholder shapes for images (circles, rounded rectangles with inset shadows)
- Include text labels for all sections
- Show interactive states (hover, active) for key elements
- Demonstrate responsive breakpoints

**Note**: This is a wireframe, not a high-fidelity mockup. Focus on:
- Layout structure
- Content hierarchy
- Interactive element placement
- Neumorphic styling demonstration
- Responsive behavior indication

---

## Final Checklist

- [ ] All sections from mindmap included
- [ ] Neumorphic shadow effects applied consistently
- [ ] No actual images/photos used (only placeholder shapes)
- [ ] Responsive behavior indicated
- [ ] Interactive states shown
- [ ] Accessibility features visible (focus states)
- [ ] Typography hierarchy clear
- [ ] Color system applied correctly
- [ ] Touch targets meet 44px minimum
- [ ] Content grouping logical and clear
