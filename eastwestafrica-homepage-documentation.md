# EastWest Africa Homepage Documentation

## Overview

This is the main homepage component for EastWest Africa, a strategic investment and advisory company connecting Rwanda, Guinea, and the wider African market. The homepage is built with Next.js and Tailwind CSS, featuring a modern, professional design with responsive layouts.

## File Structure

- **Location**: `/Users/jalloh/eastwestafrica/app/page.tsx`
- **Component**: Default export homepage component
- **Dependencies**: 
  - `MobileNav` component from `@/components/mobile-nav`
  - Material Design Icons (via Google Fonts)

## Component Architecture

### Main Structure
```tsx
export default function Page() {
  return (
    <>
      <nav>TopNavBar</nav>
      <main>Main content sections</main>
      <footer>Footer</footer>
    </>
  )
}
```

### Key Components

#### 1. Top Navigation Bar
- **Position**: Fixed at top with `z-50`
- **Height**: `h-20` (80px)
- **Background**: `bg-surface` with border
- **Content**:
  - Logo: "EastWest Africa" brand name
  - Desktop navigation links (hidden on mobile)
  - Mobile navigation menu (`MobileNav` component)
  - Contact Us button (desktop only)

#### 2. Main Content Sections

##### Hero Section
- **Background**: Primary container with overlay image
- **Purpose**: Introduce the company's mission
- **Key Elements**:
  - Background image with opacity overlay
  - Gradient overlay for better text readability
  - Main heading: "Connecting East & West African Opportunity"
  - Subheading describing services
  - Two CTA buttons: "Explore Opportunities" and "Partner With Us"

##### Trust Section
- **Background**: Surface
- **Grid Layout**: 3 columns on desktop, 1 on mobile
- **Content**: 6 strategic advantage cards
  - Market Intelligence
  - Business Matchmaking
  - Investment Insights
  - Local Partnerships
  - Cross-Border Trade
  - Strategic Advisory

##### Opportunities Bento Grid
- **Background**: Surface container low
- **Layout**: Bento grid with responsive columns
- **Sectors Featured**:
  - Mining & Extraction (2x width on desktop)
  - Agriculture
  - Technology
  - Logistics
  - Hospitality
- **Features**: Hover effects, gradient overlays, category badges

##### Rwanda <=> Guinea Split Screen
- **Layout**: Split screen on desktop, stacked on mobile
- **Purpose**: Showcase the two key markets
- **Features**:
  - Full-bleed background images
  - Hover zoom effects
  - Call-to-action buttons
  - Regional descriptions

##### Insights & News
- **Layout**: 8x4 grid on desktop
- **Content**:
  - Featured quarterly report
  - Side articles with categories
  - Reading time and author information

##### Events Section
- **Layout**: 1x2 grid on desktop
- **Content**: Upcoming event cards
- **Features**:
  - Date badges
  - Location and format
  - Descriptions
  - Registration buttons

##### Investor CTA
- **Background**: Primary color
- **Layout**: Centered text
- **Purpose**: Final call-to-action for potential investors
- **Buttons**: "Book Consultation" and "Explore Markets"

#### 3. Footer
- **Layout**: 1x4 grid on desktop
- **Content**:
  - Company description
  - Resources links
  - Legal links
  - Social media and copyright

## Design System

### Color Palette
- **Primary**: Used for branding and important elements
- **Secondary**: Used for highlights and secondary actions
- **Surface**: Background colors
- **Outline**: Border colors
- **Text**: Various text color variants

### Typography
- **Display**: Large headings
- **Headline**: Section headings
- **Body**: Regular text content
- **Label**: Small text for labels and captions

### Spacing
- **Responsive**: Mobile (`px-margin-mobile`) and desktop (`px-margin-desktop`) padding
- **Stack**: Vertical spacing utilities
- **Gap**: Grid spacing between elements

### Responsive Design
- **Mobile-first**: Mobile styles are default
- **Breakpoints**: `md:` prefix for desktop styles
- **Navigation**: Desktop navigation hidden on mobile, `MobileNav` component used

## Key Features

### 1. Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Slide-out navigation menu
- Active state management for current page

### 2. Interactive Elements
- Hover effects on cards and buttons
- Smooth transitions and animations
- Group hover effects for image scaling

### 3. Accessibility
- Semantic HTML structure
- Proper ARIA labels where applicable
- Keyboard navigation support

### 4. Performance
- Optimized images with Google Photos URLs
- Efficient CSS with Tailwind utility classes
- Minimal JavaScript (only for mobile navigation)

## Styling Patterns

### Common Classes Used
- **Layout**: `flex`, `grid`, `container`, `max-w-container-max`
- **Spacing**: `py-12`, `px-margin-desktop`, `gap-gutter`
- **Typography**: `font-headline-md`, `font-body-lg`, `text-on-surface`
- **Colors**: `bg-primary`, `text-primary`, `border-outline-variant`
- **Effects**: `hover:`, `transition-`, `shadow-`

### Responsive Patterns
```tsx
// Mobile first approach
<div className="hidden md:flex">Desktop only</div>
<div className="md:hidden">Mobile only</div>

// Responsive padding
<div className="px-margin-mobile md:px-margin-desktop">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-3">
```

## Image Assets

All images are hosted on Google Photos and referenced via HTTPS URLs. The images include:
- Hero background image
- Sector-specific images for bento grid
- Regional images for Rwanda/Guinea section
- Featured article image

## Navigation Structure

The page links to the following sections:
- `/investment-opportunities` - Investment opportunities
- `/market-insights-intelligence` - Market insights
- `/strategic-partnerships` - Services
- `/events-networking-hub` - Events
- `/sector-analysis-mining-resources` - Sectors analysis
- `/our-story` - About the company
- `/contact-support` - Contact support

## Best Practices Observed

1. **Semantic HTML**: Proper use of header, nav, main, section, and footer elements
2. **Accessibility**: ARIA labels and semantic structure
3. **Performance**: Optimized images and minimal JavaScript
4. **Maintainability**: Clear section organization and consistent naming
5. **Responsive**: Mobile-first approach with proper breakpoints
6. **Accessibility**: Good contrast and interactive feedback

## Dependencies

- **Next.js**: React framework
- **Tailwind CSS**: Utility-first CSS framework
- **Material Design Icons**: Icon library via Google Fonts
- **React**: Core library
- **Next.js Router**: Client-side navigation

## Notes

- The component uses a functional component pattern with JSX
- All styling is done via Tailwind CSS classes
- The layout is fully responsive and mobile-optimized
- The design follows modern UI/UX principles with proper hierarchy and contrast
- Component is self-contained with no external state management needed