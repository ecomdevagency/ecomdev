---
name: Cinematic Engineering
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#aec6ff'
  primary: '#aec6ff'
  on-primary: '#002e6b'
  primary-container: '#0070f3'
  on-primary-container: '#ffffff'
  inverse-primary: '#0059c5'
  secondary: '#dbb8ff'
  on-secondary: '#470083'
  secondary-container: '#6807ba'
  on-secondary-container: '#d0a6ff'
  tertiary: '#48ddbc'
  on-tertiary: '#00382d'
  tertiary-container: '#00866f'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a43'
  on-primary-fixed-variant: '#004397'
  secondary-fixed: '#efdbff'
  secondary-fixed-dim: '#dbb8ff'
  on-secondary-fixed: '#2b0052'
  on-secondary-fixed-variant: '#6600b7'
  tertiary-fixed: '#6bfad8'
  tertiary-fixed-dim: '#48ddbc'
  on-tertiary-fixed: '#002019'
  on-tertiary-fixed-variant: '#005142'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-2xl:
    fontFamily: Space Grotesk
    fontSize: 96px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 2rem
  margin-desktop: 4rem
  margin-mobile: 1.5rem
  section-gap: 8rem
---

## Brand & Style

The design system is built for a high-end web development agency where code is treated as art. The aesthetic is "Cinematic Minimalism"—a fusion of high-fidelity SaaS precision and dark-mode elegance. It targets visionary founders and enterprise leads who value technical mastery and avant-garde design.

The emotional response should be one of immediate trust and awe. This is achieved through a "dark-to-light" hierarchy, where the interface feels like a high-end physical hardware product. By combining the structured clarity of **Modern Minimalism** with the depth of **Glassmorphism**, the design system establishes a premium "Awwwards-level" quality that feels both futuristic and grounded in professional reliability.

## Colors

The palette is rooted in a deep, matte foundation to allow accent colors to appear luminescent. 

- **Foundations:** The primary canvas uses Matte Black (#0A0A0A) for total depth, with Deep Charcoal (#121212) serving as the elevation surface for cards and containers.
- **Accents:** Electric Blue (#0070F3) is the primary interactive color, representing precision. Violet (#7928CA) and Cyan (#50E3C2) are used exclusively for gradients and secondary highlights to create a sense of energy and "glow."
- **Functional:** Grays are strictly cool-toned to maintain the cinematic mood, ensuring that white text (#FFFFFF) remains crisp and highly legible against the dark background.

## Typography

Typography in this design system emphasizes technical precision and hierarchy. 

**Space Grotesk** is used for headlines to provide a geometric, futuristic feel. For the largest display types, negative letter-spacing is applied to create a tight, editorial look. **Inter** serves as the primary body face, chosen for its supreme legibility in digital interfaces and technical SaaS environments. 

A third font, **JetBrains Mono**, is utilized for small labels and metadata to lean into the "dev-agency" identity, providing a subtle nod to code editors and technical documentation.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** for desktop environments to maintain a "gallery" feel with intentional white space. 

- **The Rhythm:** We use an 8px base spacing unit. However, sections are separated by significant gaps (8rem+) to ensure the "cinematic" pacing, giving each piece of content room to breathe.
- **Bento Grid Logic:** For feature sections, a Bento Grid layout is preferred. Elements should align to the 12-column grid but can vary in height, creating a modular, organized mosaic.
- **Mobile Reflow:** On mobile, the grid collapses to 1 column with 24px margins. Layouts transition from horizontal "feature rows" to vertical stacks, while maintaining the large typography for impact.

## Elevation & Depth

Depth is not created with traditional drop shadows but through **optical layering and light simulation**.

1.  **Surface Tiers:** Background is #0A0A0A. Secondary surfaces (cards) are #121212.
2.  **Glassmorphism:** Elements "floating" above the grid utilize a 12px backdrop blur with a 10% white fill.
3.  **Thin Glowing Borders:** Instead of shadows, use a 1px solid stroke. The stroke should be a linear gradient: top-left (20% white) to bottom-right (5% white). On hover, this stroke transitions to the primary accent color (#0070F3) with a subtle outer glow (4px blur).
4.  **Mesh Gradients:** Subtle, low-opacity violet and blue blurs are placed deep in the background layers to provide a sense of atmospheric light.

## Shapes

The design system employs a "Modern Rounded" language. Standard UI elements use a 0.5rem (8px) radius to feel approachable yet precise. 

Large containers and Bento grid items use `rounded-xl` (1.5rem) to emphasize their modularity. Buttons and high-level interactive chips use a pill-shape to contrast against the structured, rectangular nature of the grid. Borders must always be ultra-thin (1px) to maintain the high-end aesthetic.

## Components

### Sleek Interactive Cards
Cards use the #121212 background with a subtle 1px gradient border. On hover, the border illuminates in Electric Blue, and the card scales slightly (1.02x) with a high-fidelity spring animation.

### Floating Dashboard & 3D Mockups
UI mockups should appear as floating layers with varying levels of backdrop blur. Use "deep" shadows (0 20px 50px rgba(0,0,0,0.5)) only for these elements to separate them from the flat grid background.

### Bento Grid Layouts
Bento cells should have varying background treatments: some plain charcoal, some with blurred mesh gradients, and others with "peek-a-boo" code snippets in JetBrains Mono.

### Minimal Luxury Footer
The footer should be ultra-minimal, using large "display-lg" typography for the call-to-action. It utilizes a matte black background with a top border that is a faint, 1px horizontal line across the entire viewport.

### Buttons
Primary buttons are solid Electric Blue with white text. Secondary buttons are "ghost" style with a 1px white border and a blur background, creating a high-end glass effect.