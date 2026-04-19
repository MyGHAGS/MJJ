# Michael Jackson Tribute Website - Specification

## 1. Project Overview

- **Project name**: MJ King - Michael Jackson Tribute
- **Type**: Single Page Application (React)
- **Core functionality**: A tribute website to Michael Jackson featuring chronological information, discography, and news
- **Target users**: Fans of Michael Jackson and pop music enthusiasts

## 2. UI/UX Specification

### Layout Structure

- **Main Page**:
  - Hero section with History statue image
  - Fixed hamburger menu button (top-left)
  - Lateral sliding menu (left side, full height)
  
- **Sections reachable from menu**:
  - Historia (Timeline)
  - Discos (Discography with submenus)
  - Novedades (News)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette**:
- Primary Black: `#0a0a0a` (background)
- Secondary Black: `#1a1a1a` (cards/sections)
- Gold Accent: `#FFD700` (highlights, buttons)
- White: `#FFFFFF` (text)
- Silver: `#C0C0C0` (secondary text)
- Red Accent: `#E31C25` (Michael Jackson icon color)

**Typography**:
- Headings: 'Bebas Neue', sans-serif (bold, dramatic)
- Body: 'Montserrat', sans-serif
- Heading sizes: H1: 48px, H2: 32px, H3: 24px
- Body size: 16px

**Spacing System**:
- Base unit: 8px
- Section padding: 48px
- Card padding: 24px
- Element gaps: 16px

**Visual Effects**:
- Smooth slide animations for menu (300ms ease)
- Card hover: subtle lift (transform + shadow)
- Gold glow effect on interactive elements
- Parallax effect on hero image

### Components

**Hamburger Menu Button**:
- Fixed position: top-left (24px from edges)
- Size: 40x40px
- States: default (white), open (rotated to X)
- Gold border glow on hover

**Lateral Menu**:
- Width: 300px (full width on mobile)
- Slides in from left
- Semi-transparent black background (`rgba(10, 10, 10, 0.95)`)
- Menu items with gold hover effect
- Close button or click-outside to close

**Hero Section (Main Page)**:
- Full viewport height
- History statue image centered
- Title "Michael Jackson" with gold gradient
- Subtle particle/sparkle effect

**Timeline Section (Historia)**:
- Vertical timeline with alternating cards
- Year markers on the center line
- Cards with album art thumbnails
- Smooth scroll animation

**Discography Section (Discos)**:
- Accordion or nested submenu
- Tabs: Jackson 5 | Solista
- Album cards in grid layout
- Album info: title, year, cover image

**News Section (Novedades)**:
- Card grid layout
- News cards with date, title, excerpt
- Read more button

## 3. Functionality Specification

### Core Features

1. **Navigation**:
   - Hamburger button toggles lateral menu
   - Menu items navigate to respective sections
   - Smooth scroll to sections
   - Close menu on item click or outside click

2. **Historia (Timeline)**:
   - Chronological list from 1958 (birth) to 2009
   - Key events: albums, awards, tours, personal milestones
   - Expandable cards with more details

3. **Discos (Discography)**:
   - Tab navigation: Jackson 5 / Solista
   - Jackson 5 albums: Diana Ross Presents The Jackson 5, ABC, Third Album, etc.
   - Solo albums: Got to Be There, Ben, Off the Wall, Thriller, Bad, Dangerous, HIStory, Invincible, etc.
   - Album details: title, year, cover, tracks preview

4. **Novedades (News)**:
   - News articles about Michael Jackson
   - News categories: Releases, Anniversaries, Events

### User Interactions
- Click hamburger → open menu
- Click menu item → navigate to section + close menu
- Click outside menu → close menu
- Hover on cards → visual feedback
- Click tab in discography → switch between Jackson 5/Solista

### Data Handling
- Static data stored in React components
- No backend required

### Edge Cases
- Empty sections show "Coming soon" message
- Long album titles truncate with ellipsis

## 4. Acceptance Criteria

- [ ] Main page displays History statue image prominently
- [ ] Hamburger menu button works and shows/hides lateral menu
- [ ] Menu contains: Historia, Discos, Novedades
- [ ] Historia shows chronological timeline of MJ life
- [ ] Discos shows discography with Jackson 5 and Solista tabs
- [ ] Novedades shows news section
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Animations are smooth
- [ ] Colors match the specification
- [ ] All external images load properly

## 5. Technical Stack

- React (Vite)
- CSS Modules or Styled Components
- React Router (for navigation)
- No external UI libraries (custom components)