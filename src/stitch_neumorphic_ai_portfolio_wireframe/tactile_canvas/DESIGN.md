---
name: Tactile Canvas
colors:
  surface: '#f6f9ff'
  surface-dim: '#d5dae1'
  surface-bright: '#f6f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4fb'
  surface-container: '#e9eef5'
  surface-container-high: '#e4e9f0'
  surface-container-highest: '#dee3ea'
  on-surface: '#171c21'
  on-surface-variant: '#464555'
  inverse-surface: '#2b3136'
  inverse-on-surface: '#ecf1f8'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4f44e2'
  primary: '#4d41df'
  on-primary: '#ffffff'
  primary-container: '#675df9'
  on-primary-container: '#fffbff'
  inverse-primary: '#c4c0ff'
  secondary: '#006a66'
  on-secondary: '#ffffff'
  secondary-container: '#81f2eb'
  on-secondary-container: '#006f6a'
  tertiary: '#914800'
  on-tertiary: '#ffffff'
  tertiary-container: '#b65c00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c4c0ff'
  on-primary-fixed: '#100069'
  on-primary-fixed-variant: '#3622ca'
  secondary-fixed: '#84f5ee'
  secondary-fixed-dim: '#66d8d2'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504d'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb785'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#f6f9ff'
  on-background: '#171c21'
  surface-variant: '#dee3ea'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  container-padding: 32px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style

This design system centers on a refined **Neumorphism (Soft UI)** aesthetic, creating a digital environment that feels physical, extruded, and incredibly tactile. The primary goal is to showcase a personal portfolio with a sense of calm, technical precision, and modern craftsmanship.

The visual language relies on subtle light and shadow play rather than harsh lines or flat color blocks. By treating the UI as a single continuous surface that bends, dips, and rises, the portfolio evokes an emotional response of approachability and organic high-tech. It is designed for creative professionals, developers, or designers who want to present their work through a sophisticated, experimental lens that emphasizes depth and interaction.

## Colors

The color palette is anchored by a neutral base, **#E0E5EC**, which serves as the "physical" surface from which all elements emerge. This specific shade of gray-blue provides the necessary mid-tone for both highlights and shadows to remain visible and soft.

- **Primary Accent (#6C63FF):** A soft violet used sparingly for key call-to-actions, active states, or highlight icons.
- **Secondary Accent (#38B2AC):** A muted teal used for success states, labels, or secondary data points to provide a cool contrast to the violet.
- **Typography:** Headlines utilize a deep charcoal (#3D4852) for maximum legibility against the soft background, while secondary text uses a softer gray (#6B7280) to maintain hierarchy.

## Typography

The typography strategy balances bold, geometric character with clean, readable functionality. 

**Plus Jakarta Sans** is the headline workhorse. For the hero section, an Extra Bold (800) weight is used to create a "pressed-in" or "embossed" look against the soft UI. Headlines are kept tight with negative letter spacing to feel modern and structural.

**DM Sans** handles all long-form content and labels. Its low-contrast, geometric forms complement the neumorphic style without competing with the shadows. Medium (500) weights are preferred for body text to ensure sufficient contrast against the #E0E5EC background.

## Layout & Spacing

This design system uses a **fixed grid** approach on desktop to maintain the integrity of the shadow system, as neumorphic elements require precise alignment to feel "real." 

- **Desktop:** A 12-column grid with a 1200px max-width. Sections are separated by generous 120px vertical gaps to provide the breathing room necessary for heavy shadows.
- **Tablet:** Transitions to an 8-column layout with 40px side margins.
- **Mobile:** A 4-column layout where internal container padding scales down to 24px, and outer margins are 20px. 

Neumorphic elements require more "gutter" space than flat designs because their shadows extend significantly beyond their borders. Never crowd elements; ensure at least 32px of space between distinct raised components to prevent shadow overlapping.

## Elevation & Depth

Depth is the primary communicator of hierarchy. In this design system, every element exists on one of three planes:

1.  **Extruded (Raised):** The default state for cards, buttons, and navigation bars. Use `9px 9px 16px rgb(163,177,198,0.6)` for the bottom-right shadow and `-9px -9px 16px rgba(255,255,255,0.5)` for the top-left highlight.
2.  **Inset (Pressed):** Used for active states of buttons or selected navigation items. This creates the illusion that the button has been pushed into the surface.
3.  **Deep Inset (Wells):** Reserved for input fields and "stat blocks." These appear as deep grooves or wells in the surface, suggesting a container that holds data.

To maintain the soft look, avoid pure black (#000) for shadows. Always use the specified semi-transparent light and dark values to allow the background color to bleed through.

## Shapes

The shape language is consistently soft and organic. Sharp corners are strictly avoided as they break the neumorphic illusion.

- **Containers & Cards:** Use a generous 32px radius to reinforce the "molded" look.
- **Buttons:** Use a 16px radius for a substantial, clickable feel.
- **Interactive Small Elements:** Items like tags or toggle switches should use 12px or the pill-shape (9999px) for a friendlier, ergonomic appearance.

## Components

### Buttons
Primary buttons use the **Extruded** shadow system. On `:hover`, the shadow should soften slightly. On `:active`, the shadow must switch to the **Inset (Pressed)** state. Text within buttons should be the Primary Text color or the Primary Accent for high-priority actions.

### Cards
Portfolio work should be displayed in large cards with the 32px corner radius. Since real images are not used, use "embossed" placeholder shapes—circles or rectangles that utilize the **Inset** shadow—to represent thumbnails.

### Input Fields
Forms and search bars should always use the **Deep Inset** style. This differentiates them from buttons (which are raised) and makes it clear that they are areas to be filled.

### Navigation Items
The navbar is a single large **Extruded** bar. Individual links are flat (no shadow) in their default state, but switch to a soft **Inset** "well" when the page is active or during a hover state.

### Stat Blocks
For displaying metrics (e.g., "Years of Experience"), use the **Deep Inset** well. Place the large "Display" typography inside the well to make the data feel like it is engraved into the UI.