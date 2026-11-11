---
name: 411predict-landing-design
description: >-
  Applies the 411Predict landing-page design system (PredEx brand colors +
  Aceternity Inter typography, light + dark). Use when building, restyling, or
  reviewing any landing section, hero, navbar, theme toggle, CTA, FAQ,
  comparison, footer, motion, typography, or visual polish; when the user
  mentions DESIGN.md, landing design, dark mode, light mode, theme, Inter,
  Aceternity, Sharplink, PredEx branding, or wants a beautiful marketing page.
---

# 411Predict Landing Design

## When to use

Any UI work on this marketing landing repo. Read **[DESIGN.md](../../../DESIGN.md)** first and follow it.

## Non-negotiables

1. **Dual theme from day one** — every surface must work in **light and dark**. Toggle lives in the floating nav (`ThemeToggle`). Prefer semantic tokens (`bg-canvas`, `text-ink`, `primary`, …); never hardcode light-only or dark-only hex in components.
2. **Typography = Inter + Aceternity scale** — Inter for display/headings/body. Headings weight **600**, tracking `-0.9px` / `-0.6px`. Use `.text-display`, `.text-h1`, `.text-section-title`, `.text-body-lg`, etc. from `globals.css`. Geist Mono only for codes.
3. **Brand colors from PredEx** — accent **`#0e76ff`**, soft/elevated canvases, hairlines, nested trays. Aceternity wins on **type + marketing energy**, not on accent hex.
4. **Never** use Aceternity accent `#2667ff` as brand default. Don’t switch this landing back to Archivo.
5. **Beautiful & minimal** — one job per section; hero = brand + one headline + one line + CTA group + one visual plane. No badge clutter, stats strips, or floating stickers in the hero.
6. **Header** — floating sticky pill (`site-header.tsx`): `bg-canvas` + blur (adapts with theme), not full-bleed chrome. Buttons use Swarveda-style `Button` (h-[45px], rounded-[16px], inset highlight).
7. **Motion** — 2–3 intentional Motion animations; respect `prefers-reduced-motion`.
8. **UI-only** unless the user asks for copy/API/behavior changes. Don’t invent market facts or FAQ answers.
9. **No AI tropes** — no purple/indigo marketing gradients, no cream+terracotta, no glow stacks.

## Theme wiring

- Storage: `411predict-landing-theme` (`src/lib/theme-constants.ts`)
- Provider: `src/components/providers/theme-provider.tsx` (`light` | `dark` | `system`)
- FOUC script in `src/app/layout.tsx` (sets `html.light` / `html.dark` before paint)
- Toggle: `src/components/theme-toggle.tsx` — Tabler brightness icon, rotates on flip
- Tokens: `:root` + `.dark` in `src/app/globals.css`

## Workflow

1. Open [DESIGN.md](../../../DESIGN.md) — synthesis rule §0, colors (both themes), type, sections.
2. Edit the named section under `src/components/sections/`.
3. Use semantic color tokens + Inter type utilities.
4. Prefer nested tray recipe for interactive / compare / FAQ blocks.
5. Alternate soft ↔ elevated section canvases; strong band for final CTA.
6. Verify **light + dark**, mobile + desktop, then a beauty pass.

## Quick tokens

```
Light: bg #f7f7f5 · elevated #fff · text #000 · muted #666 · border #e4e4e7 · accent #0e76ff
Dark:  bg #0c0c0d · elevated #161618 · text #f7f7f5 · muted #a3a3a3 · border #3f3f46 · accent #0e76ff
font Inter · mono Geist Mono
Display 72 / H1 36 / H2 24–30 · weight 600 · tracking -0.9px / -0.6px
Buttons: h-[45px] rounded-[16px] · primary inset highlight + blue drop shadow
```

## Section map

`header` (+ theme toggle) → `hero` → `about` → `predictions` → `how-it-works` → `comparison` → `faq` → `cta` → `footer`

## Do / don't (short)

**Do:** dual theme, Inter + Aceternity type, `#0e76ff`, brand-first hero, nested trays, intentional motion.  
**Don't:** Archivo on this landing, `#2667ff`, purple gradients, hero badges, full-bleed nav chrome, card spam.
