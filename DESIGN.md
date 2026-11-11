# 411Predict Landing Page — Design System

**Brand source:** PredEx / 411Predict product UI ([Sharplink](https://www.sharplink.com/)-inspired)  
**Marketing energy source:** [Aceternity](https://www.aceternity.com/) — bold hierarchy, generous type, confident CTAs, playful motion  
**Runtime tokens:** `src/app/globals.css` · `src/lib/brand.ts` · theme via `ThemeProvider`

This file is the visual source of truth for the **marketing landing page only**. Do not restyle the PredEx product app from this file.

---

## 0. Synthesis rule (read first)

| Keep from PredEx | Borrow from Aceternity | Never take from Aceternity extract |
| ---------------- | ---------------------- | ---------------------------------- |
| Brand name **411Predict** | **Inter** font + Aceternity type scale | Forcing Geist as the only heading font |
| Accent **`#0e76ff`** | Display / H1 / H2 weights **600**, tight tracking | Accent `#2667ff` / `#2176ff` |
| Soft canvas + dark twin, hairlines, nested trays | Soft ↔ elevated alternating section rhythm | Purple marketing gradients |
| **Light + dark** as first-class themes | Rounded friendly interactive corners (`8–16px`) | Cream + terracotta tropes |
| Semantic status colors only for status | Hero-led, one-job sections, bold CTA presence | Decorative badges / “NEW” stickers unless asked |
| Theme toggle + FOUC-safe preference | Soft tinted elevation on marketing cards when needed | Light-only marketing pages |

**Goal:** A very beautiful, modern, clean, minimal landing page that still feels like **411Predict** — not a generic AI template, and not a clone of Aceternity’s site chrome.

---

## 1. Visual Theme & Atmosphere

Light-first marketing site. Soft product atmosphere from PredEx, with Aceternity’s **energetic hierarchy** and **generous whitespace**.

| Trait | Rule |
| ----- | ---- |
| Mood | Clean, confident, product-led marketing — calm surfaces, bold type |
| Themes | **Light and dark from day one** — every section must work in both; toggle in the floating nav |
| Accent | Single brand accent `#0e76ff` for CTAs, links, focus, eyebrows (both themes) |
| Canvas | Soft page ↔ elevated panels; optional strong band for CTA (theme-aware tokens) |
| Corners | Cards / trays `rounded-xl` (12–16px); buttons `rounded-md`–`rounded-lg` (8–12px) |
| Depth | Prefer hairline + nested trays. Soft blue-tinted shadow (light) / deeper black shadow (dark) |
| Font | **Inter** for display, headings, and body (Aceternity scale). Geist Mono for codes |
| Motion | 2–3 intentional section motions (fade/rise). Respect `prefers-reduced-motion` |
| Tags | light, dark, dual-theme, nested, accented, sans-serif, marketing, motion |

---

## 2. Color Palette & Roles

### Core (landing) — light & dark

| Role | Light | Dark | CSS / Tailwind | Use |
| ---- | ----- | ---- | -------------- | --- |
| Accent / primary CTA | `#0e76ff` | `#0e76ff` | `--primary` / `primary` | Buttons, links, focus, eyebrows |
| Accent active | `#0a5fd6` | `#3b8fff` | `--primary-active` | Hover / pressed CTA |
| Page canvas | `#f7f7f5` | `#0c0c0d` | `--surface-soft` | Default page background |
| Elevated surface | `#ffffff` | `#161618` | `--canvas` | Nav pill, cards, alternating sections |
| Soft fill | `#eeeef0` | `#1c1c1f` | `--surface-card` | Secondary buttons, chips, tray fill |
| Text primary | `#000000` | `#f7f7f5` | `--ink` | Headings, primary copy |
| Text muted | `#666666` | `#a3a3a3` | `--muted` | Subcopy, captions |
| Hairline | `#e4e4e7` | `#3f3f46` | `--hairline` | Dividers, outlines |
| Strong band | `#262629` | `#000000` | `--surface-dark` | CTA section |
| On strong band | `#f7f7f5` | `#f7f7f5` | `--on-dark` | Text on CTA band |
| On strong soft | `#a3a3a3` | `#a3a3a3` | `--on-dark-soft` | Muted on CTA band |
| On primary | `#ffffff` | `#ffffff` | `--on-primary` | Text on blue CTAs |

### Semantic (status only — not decoration)

| Role | Light | Dark |
| ---- | ----- | ---- |
| Success | `#10b981` | `#34d399` |
| Warning | `#f59e0b` | `#fbbf24` |
| Error | `#ef4444` | `#f87171` |

### Atmosphere (sparingly)

- Soft radial wash behind hero: `primary` at ~10–16% opacity → transparent
- Optional section header wash on nested trays only (PredEx tone recipe) — never full-page rainbow

### Quick reference

```
Light:  bg #f7f7f5 · elevated #ffffff · text #000 · muted #666 · border #e4e4e7 · accent #0e76ff
Dark:   bg #0c0c0d · elevated #161618 · text #f7f7f5 · muted #a3a3a3 · border #3f3f46 · accent #0e76ff
```

**Do not** swap in Aceternity’s `#2667ff`. Brand blue is always `#0e76ff`.

### Theme behavior

- Preference: `light` | `dark` | `system` (default **system**)
- Storage key: `411predict-landing-theme` (`src/lib/theme-constants.ts`)
- FOUC prevention: inline script in `src/app/layout.tsx` before paint
- Provider: `ThemeProvider` + `useTheme` in `src/components/providers/theme-provider.tsx`
- Toggle: `ThemeToggle` in the floating nav (sun/moon), optional View Transitions
- Apply via `html.light` / `html.dark` + CSS variables in `globals.css`
- Always verify **both** themes before shipping a section

---

## 3. Typography

Aceternity marketing scale, implemented with **Inter** (not Geist).

- **Family:** Inter (display + headings + body)
- **Mono:** Geist Mono — hashes, codes, market IDs only
- **Heading voice:** weight **600**, tight letter-spacing (`-0.9px` / `-0.6px`)

### Type hierarchy

| Role | Size | Weight | Line height | Tracking | Class |
| ---- | ---- | ------ | ----------- | -------- | ----- |
| Display | `clamp(2.25rem, 6vw, 4.5rem)` → 72px | 600 | 1.1 | `-0.9px` | `.text-display` |
| H1 | `clamp` → 36px | 600 | ~1.375 | `-0.9px` | `.text-h1` |
| H2 / section title | `clamp` → 24–30px | 600 | ~1.33 | `-0.6px` | `.text-section-title` / `.text-h2` |
| H3 | 18px | 500 | 1.55 | normal | `.text-h3` |
| H4 | 22px | 600 | 1.35 | `-0.4px` | `.text-h4` |
| Body L | 20px | 400 | 1.6 | normal | `.text-body-lg` |
| Body | 18px | 400 | 1.55 | normal | `.text-body` / `body` |
| Small | 16px | 500 | 1.5 | normal | `.text-small` |
| Caption | 14px | 500 | 1.45 | normal | `.text-caption` |
| Eyebrow | 14px | 500 | — | `-0.02em` | `.text-eyebrow` |

---

## 4. Spacing, Radius, Layout

### Spacing

- Base unit: **8px**
- Section vertical: `py-20` → `sm:py-28` (~80–112px) — closer to PredEx `space-section` (110px)
- Content max width: **`max-w-6xl`** (~1152px), centered
- Horizontal pad: `px-6 sm:px-8 lg:px-12`
- Stack gaps: 16 / 24 / 32 / 40

### Radius

| Token | Value | Use |
| ----- | ----- | --- |
| `rounded-md` | 8px | Buttons, inputs, chips |
| `rounded-lg` | 12px | Inner canvas panels |
| `rounded-xl` | 16px | Outer trays, feature cards |
| `rounded-full` | pill | Avatars, dots only — not default CTAs |

### Layout principles

1. **One composition per viewport** — especially hero (not a dashboard)
2. **Brand first** — 411Predict / logo is a hero-level signal
3. **One job per section** — one eyebrow, one headline, one short supporting line
4. **Hero budget** — brand, one headline, one short sentence, one CTA group, one dominant visual. No stats strips, schedules, or secondary promo clutter in the first viewport
5. **No hero overlays** — no floating badges, stickers, or info chips on hero media
6. **Cards sparingly** — default: no cards. Use nested trays when the block is interactive or comparative
7. **Full-bleed hero atmosphere** — soft radial / gradient plane edge-to-edge; product imagery can be dominant when provided
8. **Alternate soft ↔ white** section canvases for rhythm (Aceternity energy, PredEx palette)

---

## 5. Depth & Elevation

| Level | Treatment | Use |
| ----- | --------- | --- |
| 0 Page | `bg-surface-soft` | Default |
| 1 Section white | `bg-canvas` | Alternating sections |
| 2 Nested tray | `rounded-xl border-hairline bg-surface-soft/70 p-2` | Feature / FAQ / compare hosts |
| 3 Inner | `rounded-lg border-hairline bg-canvas` | Content inside tray |
| 4 Soft lift | `0 4px 6px -1px` tinted with black @ 8–10% **or** soft primary tint | Hero media, featured market preview only |
| 5 Dark band | `bg-surface-dark` | Final CTA |

Prefer hairlines over heavy multi-layer shadows. Never purple glow stacks.

---

## 6. Components

### Buttons — `Button` (`src/components/ui/button.tsx`)

Swarveda shape + PredEx brand blue. Use this primitive for all CTAs.

```
Base: h-[45px] · rounded-[16px] · px-3 sm:px-4 · text-[15px] · font-medium · tracking-[-0.02em] · gap-[7px]
```

**Primary**
```
bg-primary · text-on-primary
shadow: inset 0 3px 0 rgba(255,255,255,0.2), 0 2px 4px rgba(14,118,255,0.25)
hover: bg-primary-active
```

**Secondary**
```
bg-canvas · text-ink · inset hairline ring · hover:bg-surface-card
```

**Dark / Ghost** — available for special contexts; on dark CTA bands, secondary can override to `bg-white/10 text-on-dark`.

### Nested tray (interactive / compare / FAQ)

```
[ tray  rounded-xl · border-hairline · bg-surface-soft/70 · p-2 ]
  [ inner  rounded-lg · border-hairline · bg-canvas · p-4 sm:p-6 ]
```

### FAQ row

- Tray shell + summary in inner canvas
- Open state: soft expand; no heavy accordion chrome
- Plus rotates to × on open

### Dark CTA band

- `bg-surface-dark`, `text-on-dark`, muted `on-dark-soft`
- Primary blue button remains the main action

---

## 7. Page sections (current map)

Order on `/`. Floating sticky nav is shipped (Swarveda-style pill — light, not black).

| # | Section | `id` | Tone | Job |
| - | ------- | ---- | ---- | --- |
| 0 | Header | — | floating pill | Logo + links + theme toggle + Get started |
| 1 | Hero | `hero` | soft + radial | Brand + one promise + CTA |
| 2 | About | `about` | canvas | What 411Predict is |
| 3 | Predictions | `predictions` | soft | Markets / product preview |
| 4 | How it works | `how-it-works` | canvas | 3–4 clear steps |
| 5 | Comparison | `comparison` | soft | vs other platforms |
| 6 | FAQ | `faq` | canvas | Objections |
| 7 | CTA | `cta` | dark | Conversion |
| 8 | Footer | `footer` | soft | Brand + legal stubs |

Header is floating sticky (see `site-header.tsx`). Do not restyle unnamed section content beyond the shell until the user provides copy/layout.

---

## 8. Motion

Ship intentional motion — presence, not noise:

1. **Hero entrance** — logo + headline fade/rise (~0.5–0.7s, ease `[0.22, 1, 0.36, 1]`)
2. **Section reveal** — `whileInView` opacity + slight `y` once per section
3. **Optional third** — CTA button hover, FAQ open, or step stagger

Always gate with `prefers-reduced-motion: reduce` (skip or simplify).

Library: **`motion`** (same family as PredEx).

---

## 9. Do's and Don'ts

### Do

- Support **light and dark** on every new/edited surface (toggle from day one)
- Use **Inter** (Aceternity type scale) and accent **`#0e76ff`**
- Keep brand / logo as a hero-level signal
- One job per section; generous whitespace
- Nested trays for interactive or comparative blocks
- Soft ↔ elevated section rhythm (`surface-soft` ↔ `canvas`) in both themes
- Strong band (`surface-dark`) for final CTA
- Mobile-first; touch targets ≥ 44×44px
- Map semantic Tailwind tokens (`bg-canvas`, `text-ink`, `primary`, …) — never hardcode theme-only hex in components

### Don't

- Don’t ship light-only or dark-only solutions
- Don’t swap Inter for Archivo / Geist on this landing page
- Don’t use Aceternity blue `#2667ff` or purple/indigo marketing gradients
- Don’t use cream + terracotta AI tropes
- Don’t put stats strips, badge clusters, or floating stickers in the hero
- Don’t card everything — cards only when interaction needs a container
- Don’t make the nav full-bleed chrome — keep the floating pill (`bg-canvas`, adapts with theme)
- Don’t invent FAQ / comparison facts — wait for real copy
- Don’t restyle PredEx app screens from this design system

---

## 10. Responsive

| Breakpoint | Width | Notes |
| ---------- | ----- | ----- |
| Mobile | < 640px | Single column; type ~85–90% of desktop clamp; stack CTAs |
| Tablet | 640–1024px | 2-col for steps / compare where designed |
| Desktop | 1024–1440px | Full marketing layout |
| Wide | > 1440px | Keep `max-w-6xl`, center |

---

## 11. Agent prompt guide

### Quick colors

```
Light:  bg #f7f7f5 · elevated #fff · text #000 · muted #666 · border #e4e4e7 · accent #0e76ff
Dark:   bg #0c0c0d · elevated #161618 · text #f7f7f5 · muted #a3a3a3 · border #3f3f46 · accent #0e76ff
```

### Example prompts

1. “Build the hero with soft canvas, Inter display (600 / -0.9px), 411Predict brand signal, one headline, one line, primary `#0e76ff` CTA.”
2. “Design How it works as four nested trays in a row on desktop, stacked on mobile.”
3. “Make the CTA a dark `#262629` band with a single primary button.”
4. “Comparison section: nested tray table, hairline only, no rainbow headers.”

### Iteration order

1. Structure (section shells, grid, spacing)
2. Semantic color tokens — check light **and** dark
3. Type (Inter · Aceternity scale)
4. Components (buttons, trays, theme toggle)
5. Motion (2–3 intentional)
6. Responsive pass
7. Theme pass + beauty pass

---

## 12. Implementation notes

1. **Source of truth:** this file + skill `.cursor/skills/411predict-landing-design/SKILL.md`
2. **Tokens:** `src/app/globals.css` (`:root` + `.dark`)
3. **Theme:** `ThemeProvider`, `ThemeToggle`, inline FOUC script, `THEME_STORAGE_KEY`
4. **Brand:** `src/lib/brand.ts` + `public/brand/*`
5. **Sections:** `src/components/sections/*`
6. **Stack:** Next.js App Router · Tailwind 4 · Motion
7. **Header:** `src/components/site-header.tsx` — floating pill + theme toggle + CTA

---

## 13. Agent checklist (before shipping a section)

- [ ] User named this section / provided design direction
- [ ] Light **and** dark checked (nav toggle)
- [ ] Matches brand tokens (`#0e76ff`) + Inter / Aceternity type scale
- [ ] Feels marketing-bold (Aceternity energy) without copying Aceternity chrome
- [ ] One job; no hero clutter
- [ ] Nested trays only where useful
- [ ] Motion intentional + reduced-motion safe
- [ ] Mobile + desktop checked
- [ ] No purple gradients / cream-terracotta / Archivo reintroduction
- [ ] No raw theme-only hex in components — use semantic tokens
