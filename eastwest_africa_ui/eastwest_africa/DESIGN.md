---
name: EastWest Africa
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00210c'
  on-tertiary-container: '#349557'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#96f7af'
  tertiary-fixed-dim: '#7ada95'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005228'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-tabular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

The design system is engineered to evoke the prestige of a global financial institution while maintaining the agility of a modern African business hub. It targets high-net-worth investors, executive policymakers, and enterprise leaders who require clarity, data integrity, and exclusivity.

The aesthetic follows a **Modern Corporate** approach, blending the density and authority of editorial news (Bloomberg/FT) with the spacious, user-centric interfaces of premium SaaS platforms. The emotional response is one of "Informed Confidence"—where every pixel feels intentional, stable, and data-driven. Visuals focus on progress, utilizing high-quality architectural and logistical photography to ground the digital experience in physical African economic growth.

## Colors

The palette is anchored by **Deep Navy**, representing institutional depth and stability. **Clean White** serves as the primary canvas to ensure a high-trust, minimal environment. 

- **Primary (Deep Navy):** Used for navigation, primary headings, and authoritative UI elements.
- **Secondary (Soft Gold):** Reserved for "premium" signifiers, exclusive content highlights, and subtle CTA accents. It represents value and excellence.
- **Success (Subtle Green):** Leveraged for market growth indicators, opportunity tags, and positive data trends.
- **Grayscale:** A sophisticated range of cool grays provides hierarchy without introducing visual noise. Backgrounds utilize very light grays to define sections without the harshness of pure white borders.

## Typography

This design system employs a sophisticated serif-sans pairing. **Source Serif 4** provides the editorial authority required for market analysis and executive reports, echoing the legacy of traditional financial journalism. **Inter** provides a highly legible, systematic foundation for data-heavy interfaces and functional UI elements.

For financial data, the system utilizes tabular figures to ensure alignment in tables and tickers. Large display headings use tighter letter-spacing for a more polished, "designed" look on high-resolution displays.

## Layout & Spacing

The system utilizes a **Fixed Grid** philosophy for desktop to maintain the precision of a high-end publication, switching to a fluid model for mobile devices. 

- **Desktop (1440px+):** 12-column grid, 1280px max-width, 24px gutters.
- **Tablet (768px - 1024px):** 8-column grid, 24px gutters, 32px side margins.
- **Mobile (below 768px):** 4-column grid, 16px gutters, 20px side margins.

Spacing is generous to allow the content to breathe, emphasizing a premium experience over high-density information packing. Vertical rhythm is strictly maintained through multiples of 8px.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than aggressive shadows. This maintains a flat, modern executive feel.

- **Level 0 (Base):** White (#FFFFFF) or ultra-light gray (#F8F9FA).
- **Level 1 (Cards):** White background with a 1px border in `#E2E8F0`. On hover, a very soft, diffused ambient shadow (0px 4px 20px rgba(10, 25, 47, 0.05)) is applied.
- **Level 2 (Modals/Overlays):** Clean white with a slightly stronger shadow and a 1px border.
- **Depth:** Subtle linear gradients (top-to-bottom) may be used on primary action buttons to give a "milled" or "pressed" metal feel, avoiding the flat look of consumer apps.

## Shapes

The design system uses a **Rounded** aesthetic (0.5rem / 8px) to soften the professional tone, making the platform feel modern and accessible despite its authoritative content. 

- **Buttons & Inputs:** 8px corner radius.
- **Cards:** 16px (Large) radius to create a distinct containerized feel for market insights.
- **Iconography:** Clean, geometric icons with a 2px stroke weight and slightly rounded caps to match the UI's radius.

## Components

### Buttons
Primary buttons use the Deep Navy background with White text, featuring a subtle 8px radius. Secondary buttons use a "Ghost" style with a Navy border or Soft Gold text for premium actions.

### Cards
Modern rounded cards are the primary vessel for content. They feature a 1px `#E2E8F0` border and generous internal padding (min 24px). Headers within cards use Source Serif 4 for a report-like feel.

### Input Fields
Inputs are minimal with a light gray border that transitions to Deep Navy on focus. Labels are consistently `label-caps` in Inter for a disciplined, organized look.

### Data Visualization
Charts should use the Primary Navy, Tertiary Green (Growth), and a muted Slate for neutral data points. Grid lines in charts should be kept to a minimum using `#F1F5F9`.

### Chips & Tags
Used for sector categorization (e.g., "Logistics," "Fintech"). These use a light tint of the primary color with a dark text label to maintain readability and executive tone.