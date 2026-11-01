---
name: Huang’s Blog
description: A software collection catalogue in cool paper and cobalt ink.
colors:
  background: '#eef0fb'
  foreground: '#182443'
  surface: '#ffffff'
  accent: '#294acb'
  accent-foreground: '#ffffff'
  muted: '#dce2f4'
  muted-foreground: '#526183'
  border: '#c9d2eb'
  dark-background: '#10182b'
  dark-foreground: '#edf1ff'
  dark-surface: '#18243b'
  dark-accent: '#a6b8ff'
  dark-accent-foreground: '#10182b'
  dark-muted: '#24324d'
  dark-muted-foreground: '#b0bdd8'
  dark-border: '#33415e'
  stage: '#c8d8eb'
  stage-echopod: '#b7d8cf'
  stage-octocounts: '#c6cee9'
  stage-fusebar: '#b6cbed'
  stage-ketsuin: '#e4cfb8'
  stage-qwenasr: '#d6c6df'
  dark-stage: '#273953'
  dark-stage-echopod: '#234941'
  dark-stage-octocounts: '#303957'
  dark-stage-ketsuin: '#4b3c2f'
  dark-stage-qwenasr: '#44364e'
typography:
  display:
    fontFamily: Bricolage Grotesque, PingFang SC, sans-serif
    fontSize: clamp(3.5rem, 6.7vw, 5.5rem)
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: -0.025em
  headline:
    fontFamily: Bricolage Grotesque, PingFang SC, sans-serif
    fontSize: clamp(1.75rem, 3vw, 2.25rem)
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: -0.025em
  project-title:
    fontFamily: Bricolage Grotesque, PingFang SC, sans-serif
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.025em
  body:
    fontFamily: Segoe UI, PingFang SC, Microsoft YaHei, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  intro:
    fontFamily: Segoe UI, PingFang SC, Microsoft YaHei, sans-serif
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: Segoe UI, PingFang SC, Microsoft YaHei, sans-serif
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.65
  navigation:
    fontFamily: Segoe UI, PingFang SC, Microsoft YaHei, sans-serif
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.65
rounded:
  screenshot: 4px
  search: 0.375rem
spacing:
  xs: 0.5rem
  sm: 0.75rem
  md: 1rem
  caption: 1.25rem
  lg: 1.5rem
  xl: 2rem
  intro-gap: 3rem
  row-gap: 3.5rem
  section: 4rem
components:
  collection-link:
    textColor: '{colors.accent}'
    typography: '{typography.body}'
  link-button:
    textColor: '{colors.foreground}'
    typography: '{typography.body}'
  navigation:
    textColor: '{colors.foreground}'
    typography: '{typography.navigation}'
  project-caption:
    textColor: '{colors.foreground}'
    typography: '{typography.project-title}'
  tag:
    textColor: '{colors.foreground}'
  search-input:
    backgroundColor: '{colors.background}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.search}'
    height: 51.2px
    padding: 0 56px 0 43.2px
    width: 100%
---

# Design System: Huang’s Blog

## Overview

**Creative North Star: "Design museum collection catalogue"**

A personal software collection with cool periwinkle surfaces, cobalt lettering and real product screenshots. Expressive Bricolage Grotesque headings sit beside quiet system sans text; open captions keep attention on the work.

The visual system is mostly flat. Muted product-specific image fields create separation, while a soft shadow belongs to the screenshot itself. Dark mode translates the same structure into midnight blue and pale blue ink.

**Key Characteristics:**
- Open image fields and captions without enclosing card chrome.
- Large expressive headings with readable English and Chinese fallbacks.
- Theme-aware ink, visible keyboard focus and motion that respects reduced-motion preferences.

## Colors

### Primary
Cobalt accent supplies display text, links, arrows and focus. The dark-theme accent is pale blue; accent-foreground remains the contrasting selection text.

### Secondary
The screenshot fields use seafoam for EchoPod, periwinkle for OctoCounts, pale blue for FuseBar, sand for Ketsuin and lilac for QwenASR. They identify the work rather than introduce new control colors. Dark mode has corresponding subdued fields; FuseBar uses the shared dark-stage color.

### Neutral
Background is cool paper, foreground is deep navy, surface is white, and muted-foreground carries secondary copy. Muted supplies quiet fills; border separates sections. Dark-prefixed tokens describe the active dark theme. Theme switching changes the semantic CSS variables, not component structure.

## Typography

Display and project headings use the display stack in frontmatter; body and navigation use the app sans stack. Chinese display text falls back to PingFang SC. Headings balance lines and tighten tracking. The introduction is deliberately larger and looser than body copy.

The wide project title grows to clamp(2rem, 4vw, 3rem) above the grid breakpoint. Caption copy uses line-height 1.7 and a maximum of 60ch; introduction copy is capped at 29rem. Existing article descriptions and long-form prose use Tailwind’s system sans stack. Existing article-list links are 1.125rem, weight 500, with display-family headings; article section headings are 1.5rem, weight 600.

## Layout

Wide home containers cap at 76rem including gutters; regular reading columns cap at 48rem. Gutters are 1rem, growing to 2rem at 640px. At that breakpoint the introduction and project collection become two columns. The wide project uses 0.8fr caption / 1.2fr image columns with a 2rem gap; below it, image and caption stack. Standard project cards have a 1.25rem image-to-caption gap. Collection rows are separated by 3.5rem, columns by 2rem.

The introduction uses 3.5rem top and 4rem bottom space on small screens, 4.5rem above and below on wider screens. Navigation stays collapsed below 1024px: opening it reveals a centered two-column grid, with text destinations spanning both columns. Desktop navigation runs horizontally. Controls remain available in both layouts.

## Elevation & Depth

Project surrounds are flat and separated by whitespace or a thin border. The screenshot alone carries `0 12px 24px rgb(15 30 60 / 0.16)`. Existing skip navigation uses backdrop blur when focused; it is an accessibility affordance, not a general surface treatment.

**The Object Shadow Rule.** Depth belongs to the screenshot, not the surrounding project caption.

## Shapes

Project image fields have square corners and a 4:3 aspect ratio; project-detail banners use 16:10. Images are contained, not cropped, with softly rounded screenshot corners. Field padding is 2rem, falling to 1.5rem below 640px; banners use 2.5rem above that breakpoint. Search retains its modest inherited rounding. Links and captions remain open, without pill or container shapes.

## Components

### Buttons and links
The primary introduction action is an accent-colored underlined text link with a right arrow, weight 600, 0.75rem gap and minimum height 44px. The shared link-button is an inline text-and-icon link with a 0.25rem gap and accent hover. Disabled links become spans with aria-disabled. Site-wide links and buttons receive a 2px dashed accent focus outline with 1px offset; focus suppresses underlining.

### Navigation
Navigation is medium-weight app sans. Active text destinations use a 2px underline offset by 8px; hover uses accent. The site name uses the display family and accent. Menu and navigation links have 44px minimum height; the theme button is at least 44px tall (48px on mobile). Search, theme and menu icons use SVG with accessible control names. Mobile toggling updates aria-expanded and swaps menu/close icons. The theme icon rotates and scales between sun and moon.

### Project exhibits
Titles and arrows link to project details; the repeated preview link is excluded from keyboard order and the accessibility tree. Supporting domain links are underlined, accent-colored and open externally with rel protection. Highlights are plain wrapping metadata, not chips. Hover or keyboard focus within a project lifts its screenshot by 5px over 350ms using cubic-bezier(0.16, 1, 0.3, 1). Reduced motion removes the lift and transitions.

### Article rows and tags
Article rows are open text lists with 1.5rem vertical margins, an accent title, date metadata and a description. Title hover adds a dashed underline. Tags are text links with an inline SVG hash and a dashed lower border; hover changes ink/border to accent and shifts the top margin by -0.125rem. Focus uses the global outline and removes the tag border.

### Search
Pagefind owns search behavior. The site binds its background, text, border and primary colors to the semantic theme. Input weight is 400, border is 1px and keyboard focus is a 1px solid accent outline. The inherited Pagefind scale is 0.8; input dimensions in frontmatter resolve that scale. Search is not a newly introduced form system.

## Do's and Don'ts

### Do:
- Do use semantic theme variables for text, surfaces and controls.
- Do preserve the full screenshot inside its image field with object-fit: contain.
- Do retain keyboard focus, accessible names and the mobile menu’s expanded state.
- Do reuse the existing project screenshots; this redesign authored no raster imagery.

### Don't:
- Don’t wrap the open project captions in raised card containers.
- Don’t stretch or crop product screenshots to fill the image field.
- Don’t keep the screenshot lift when reduced motion is requested.
