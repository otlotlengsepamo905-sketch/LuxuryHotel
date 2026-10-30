---
name: Haven Stays
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f1eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#45464d'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0e9'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#8b4f24'
  on-secondary: '#ffffff'
  secondary-container: '#ffaf7b'
  on-secondary-container: '#794016'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#c76c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbc7'
  secondary-fixed-dim: '#ffb688'
  on-secondary-fixed: '#311300'
  on-secondary-fixed-variant: '#6f380e'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an intimate, high-touch digital sanctuary for discerning travelers seeking curated boutique accommodations. Rooted in modern editorial minimalism with warm, tactile hospitality nuances, the visual identity eschews sterile corporate booking patterns in favor of architectural poise, tranquility, and considered craftsmanship.

The experience evokes the sensation of stepping into an architecturally restored riad or a secluded coastal pavilion: grounded, serene, and exquisitely tailored. Visual tension is achieved by pairing high-contrast editorial typography with warm, organic negative space. Surfaces feel physical, calm, and breathable, using soft earth-imbued neutrals rather than harsh digital grays.

## Colors

The palette is anchored by natural materials: sun-dried linen, midnight stone, oxidized terracotta, and burnished brass. 

- **Primary (`#0F172A`)**: Deep midnight slate. Grounded and authoritative, used for high-emphasis headlines, active icon states, and primary contrast elements.
- **Secondary (`#C07A4B`)**: Sun-baked terracotta. Conveys warmth, tactile authenticity, and human touch. Dedicated to primary conversion actions, active selection indicators, and boutique highlights.
- **Tertiary (`#D97706`)**: Warm amber-sand gold. Reserved for rating embellishments, luxury tier markers, and time-sensitive alerts.
- **Neutral Canvas (`#FBF9F5` base, `#F5F2EB` surface)**: Off-white canvas emulating untreated parchment and lime wash. Eliminates digital eye strain while establishing warmth.
- **Structural Accents (`#E2E8F0` hairline border, `#64748B` muted stone)**: Provides quiet, architectural boundary definitions and legible tertiary metadata without cluttering the viewport.

## Typography

The typographical pairing contrasts classical high-editorial serif drama with crisp, contemporary humanism.

- **Editorial Serifs (`Playfair Display`)**: Used exclusively for hero moments, property names, collection themes, and curated quotes. Conveys timeless luxury and heritage.
- **Modern Sans-Serif (`Plus Jakarta Sans`)**: Applied across metadata, room amenity lists, search parameters, dates, and micro-labels. Offers pristine legibility at compact mobile scale with subtle geometric warmth.
- **Letter Spacing & Case**: Subheadings and category eyebrow labels are formatted in uppercase with slight tracking (`0.06em`), providing structured editorial hierarchy across compact vertical viewports.

## Layout & Spacing

The layout is built around a mobile-first, edge-aware fluid column system designed to showcase photography with cinematic presence:

- **Mobile Rhythm (375px - 430px)**: 4-column fluid grid, 20px screen margins (`margin-mobile`), 12px inter-column gutter. Edge-to-edge full-bleed hero carousels with peek margins on secondary imagery to hint at lateral navigation.
- **Tablet / Large Handheld (768px+)**: 8-column layout, 24px margins, 16px gutter. Enables split detail views (e.g., sticky room summary alongside multi-photo architectural layouts).
- **Spatial Pacing**: Vertical spacing operates on an 8pt increment. Structural sections require generous separation (`space-xl` / 40px) to maintain a restful, unhurried cadence appropriate for luxury hospitality.

## Elevation & Depth

Visual hierarchy relies on ambient, warm-tinted light and layered physical surfaces rather than stark drop shadows:

- **Surface Tiers**: Base canvas sits at `#FBF9F5`. Raised interactive cards and bottom sheets utilize clean `#FFFFFF` or softened `#F5F2EB`, bordered with a fine hairline (`1px solid #E2E8F0` at 60% opacity).
- **Warm Ambient Shadows**: Shadows are cast with midnight slate pigments softened by terracotta undertones. The default card shadow utilizes a diffused multi-stop signature: `0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 12px 32px -4px rgba(192, 122, 75, 0.06)`.
- **Floating Modals & Sheets**: Navigation bars and bottom booking docks utilize frosted translucent overlays (`rgba(251, 249, 245, 0.82)` with 16px backdrop blur), letting room photography subtly bleed through while anchoring UI controls.

## Shapes

The geometric framework balances tailored architectural structure with soft hospitality curves:

- **Primary Cards & Containers**: Standardized at 16px radius (`rounded-lg`), softening photographic imagery while framing property highlights cleanly.
- **Action Elements & Pills**: Search pills, date pickers, and filter chips utilize complete capsule radii (9999px) for friendly tap targets.
- **Imagery Enclosures**: Property visual assets always employ proportional 16px corner radii to maintain rhythm with their parent structural cards.

## Components

- **Buttons**:
  - *Primary Booking CTA*: Solid Terracotta (`#C07A4B`) fill, pure white text, 12px pill radius, minimum height of 52px for ergonomic reach. Hover/active states deepen to `#A86337`.
  - *Secondary / Concierge Action*: Deep midnight slate outline (`#0F172A`, 1.5px) over transparent canvas with `#0F172A` text.
  - *Quiet Icon Buttons*: Circular 44x44px targets with `#F5F2EB` surface background, framing dark slate icons with a subtle hairline outline.

- **Cards & Accommodations**:
  - *Property Card*: 16px radius, white surface, edge-to-edge 4:3 or 16:9 imagery, nested 12px interior padding for details. Features floating top-right bookmark icon on a translucent disc and bottom price callouts in `Playfair Display`.
  - *Amenity Card*: Compact square or landscape mini-card with muted `#F5F2EB` backing, minimal 1px stone border, and custom refined line icons.

- **Chips & Filter Controls**:
  - *Filter Pill*: 36px height, rounded capsule shape. Inactive: `#FBF9F5` surface with `#E2E8F0` border and `#64748B` text. Active: `#0F172A` midnight fill with `#FBF9F5` text, providing immediate visual anchoring.

- **Inputs & Search Trays**:
  - Floating top search container with capsule shape, dual-field partition (Destination | Dates), minimal divider line (`#E2E8F0`), and an integrated terracotta search trigger.
  - Text input fields feature inset labels in `label-sm` transitioning upward on focus, grounded by a 1px border that warms to terracotta on active focus.

- **Lists & Amenity Rows**:
  - Clean hairline divided rows (`#E2E8F0` at 50% opacity). Minimal chevron affordances in `#64748B`. Ample vertical padding (16px top and bottom) preventing clutter.

- **Checkboxes & Radios**:
  - Circular selection states across both checkbox and radio variants for an organic, softer aesthetic. Active selections fill with `#C07A4B` with an inner white glyph.

- **Specialized Hospitality Elements**:
  - *Sticky Booking Bar*: Fixed bottom bar with price breakdown on the left (`headline-sm`) and prominent reserve CTA on the right, housed over a frosted glass backdrop.
  - *Story Carousel*: Horizontal scroll of circular luxury collection highlights rimmed with a fine terracotta border ring.