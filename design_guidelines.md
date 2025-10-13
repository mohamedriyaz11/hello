# Design Guidelines: Academic Portfolio Website for Data Science Professor

## Design Approach
**Selected Approach**: Design System - Material Design with Academic Refinement
**Justification**: Academic portfolios require credibility, professionalism, and clear information hierarchy. Material Design provides structured layouts ideal for showcasing research, publications, and achievements while maintaining academic gravitas.

**Key Design Principles**:
- Professional credibility through clean, structured layouts
- Information hierarchy emphasizing achievements and expertise
- Data-driven visual elements reflecting the professor's field
- Academic authority balanced with modern web aesthetics

---

## Core Design Elements

### A. Color Palette

**Primary Colors (Dark Mode)**:
- Primary: 220 65% 55% (Professional blue - trust and expertise)
- Primary Dark: 220 70% 45%
- Background: 222 15% 10% (Deep charcoal)
- Surface: 222 15% 15%
- Text: 210 20% 98%

**Accent & Data Visualization**:
- Accent: 170 60% 50% (Teal for data highlights)
- Success/Metrics: 140 55% 55% (Achievement indicators)
- Warning: 35 85% 60% (Important metrics)

**Light Mode** (Professional academic aesthetic):
- Background: 210 20% 98%
- Surface: 0 0% 100%
- Primary: 220 65% 45%
- Text: 222 20% 15%

### B. Typography

**Font Families**:
- Headings: 'Inter', system-ui, sans-serif (600-700 weight)
- Body: 'Inter', system-ui, sans-serif (400 weight)
- Metrics/Data: 'JetBrains Mono', monospace (500 weight for statistics)

**Type Scale**:
- Hero Title: text-5xl lg:text-6xl font-bold
- Section Headers: text-3xl lg:text-4xl font-semibold
- Card Titles: text-xl font-semibold
- Body: text-base leading-relaxed
- Captions/Metrics: text-sm font-medium

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 (e.g., p-4, gap-6, py-12, mt-20)

**Grid System**:
- Container: max-w-7xl mx-auto px-4 lg:px-8
- Content Sections: py-16 lg:py-24
- Card Grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

---

## Component Library

### Navigation
- Sticky header with backdrop blur (backdrop-blur-md bg-background/80)
- Logo/Name left, navigation links center/right
- Mobile: Hamburger menu with slide-in drawer
- Active state: Border-bottom indicator (border-b-2 border-primary)

### Hero Section
**Layout**: Two-column layout (lg:grid-cols-2)
- Left: Professor photo (rounded-2xl shadow-2xl, aspect-square or 3:4)
- Right: Name (text-5xl), Title/Position, University affiliation, Brief bio, Social links (LinkedIn, YouTube icons)
- Below: Animated statistics cards showcasing expertise percentages

### Achievement Cards (Homepage)
**3-Column Grid**: Displaying key metrics
- Card design: Rounded corners (rounded-xl), subtle border, shadow-sm
- Icon at top (from Heroicons), large metric number (text-4xl font-bold), description below
- Hover: Subtle scale transform (hover:scale-105 transition-transform)
- Examples: "Top 2% Scientist", "95% Big Data", "90% Data Science"

### Section Pages
**Consistent Structure**:
- Page title with breadcrumb (Home > Section)
- Filter/sort controls where applicable (Publications, Projects)
- Card-based layouts for content items
- Each card: Title, description, metadata (date, tags), action link

### Publications Section
- List/grid view toggle
- Each publication: Title, authors (professor highlighted), journal/conference, year, citation count, DOI link
- Search and filter by year, category, citation count

### Projects Section
- Grid layout (2-3 columns)
- Project cards: Featured image/icon, title, brief description, technologies used (badges), status indicator, link to details

### Contact Section
**Two-column layout**:
- Left: Contact form (name, email, subject, message) with primary button
- Right: Office address, email, phone, office hours, map embed placeholder

### Footer
**Multi-column layout**:
- Column 1: University logo, professor name
- Column 2: Quick links (All nav sections)
- Column 3: Social media, email subscription
- Column 4: Office location, copyright
- Background: Darker surface color with subtle gradient

---

## Data Visualization Elements

**Animated Statistics Bars**:
- Horizontal progress bars showing expertise levels
- Smooth loading animation (animate-in from 0 to target percentage)
- Color gradient from primary to accent

**Achievement Metrics**:
- Large numbers with smooth count-up animation (0 to target)
- Icon + Number + Label pattern
- Circular progress indicators for percentages

---

## Images

**Hero Image**: Professional headshot of the professor
- Placement: Left side of hero section on desktop, top on mobile
- Style: High-quality, professional photograph with subtle vignette
- Dimensions: Square or portrait orientation (400-600px optimal)
- Treatment: Rounded corners (rounded-2xl), subtle shadow

**Institution Logos**: University/affiliation logos in dedicated section
- Placement: Below hero or in footer
- Style: Grayscale with hover color effect
- Layout: Horizontal row, evenly spaced

**Project/Research Images**: Representative visuals for projects
- Placement: Top of project cards
- Style: Aspect ratio 16:9, rounded-top corners
- Treatment: Subtle overlay on hover with project title

---

## Interaction Patterns

**Micro-interactions** (Use sparingly):
- Card hover: Subtle lift (shadow-lg transform)
- Button hover: Color shift, no transform
- Statistics: Count-up animation on scroll into view
- Navigation: Smooth scroll to sections

**Page Transitions**:
- Fade-in for content sections on scroll
- No heavy animations - prioritize performance

**Loading States**:
- Skeleton screens for dynamic content
- Subtle pulse animation for placeholders

---

## Accessibility & Performance

- Maintain WCAG AA contrast ratios
- Semantic HTML structure (nav, main, section, article)
- Keyboard navigation support
- Alt text for all images
- Lazy loading for below-fold images
- Optimized icon usage (single icon library - Heroicons)
- CSS-only animations where possible

This design creates a professional, data-driven academic portfolio that balances credibility with modern web aesthetics, optimized for performance and user experience.