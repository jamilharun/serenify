# Serenify

A calm, mood-themed landing page with a fully interactive dashboard mockup. Serenify blends email, tasks, and daily check-ins into one focused view — and lets visitors try the whole thing live, right on the page.

## Features

- **8 mood themes** — 4 light (Sunday Morning, Matcha, Clear Sky, Sunset) and 4 dark (Stress Free, Hyper Focus, Calming Rain, Midnight Forest). Each theme is an analogous OKLCH hue spread, so every surface, button, and accent re-tints live when you switch. Follows the OS theme by default and reacts to OS theme changes.
- **Interactive dashboard preview** — a working mail client mockup with folders, a reading pane, compose modal, analytics widgets (stats, weather, mood check-in, todos), projects, and settings. Todos and mood persist in `localStorage`.
- **Responsive** — the dashboard collapses to a phone-friendly layout below `lg` (folder chips instead of a sidebar, overlay reading pane).
- **Scroll choreography** — GSAP ScrollTrigger pins and unfolds the dashboard mockup; Framer Motion handles everything else (entrances, crossfades, layout animations).

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) on [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) — theme tokens are CSS variables defined in `src/index.css`
- [Framer Motion](https://motion.dev) + [GSAP](https://gsap.com) (ScrollTrigger) for animation
- [lucide-react](https://lucide.dev) icons

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # typecheck + production build to dist/
npm run preview   # serve the production build locally
npm run lint      # eslint
```

## Project structure

```
src/
├── components/
│   ├── ui/          # shared primitives: Card, Button (+ buttonStyles), Input/Textarea, SectionHeader
│   ├── theme/       # ThemeProvider, theme-context (useTheme, variants), ThemeShowcase
│   ├── layout/      # Header, Footer, HowItWorks, Features, Testimonials, Pricing, FAQ, CTABanner, AmbientBackground
│   ├── hero/        # HeroSection + HeroDashboardPeek (theme-driven background imagery)
│   └── dashboard/   # the interactive mockup: mail, analytics, projects, settings
├── data/            # demo email data
├── lib/             # cn() class helper, useMediaQuery
└── index.css        # Tailwind theme tokens + the 8 theme palettes (OKLCH)
```

## Theming

Each theme sets a small set of CSS variables (`--background`, `--foreground`, `--primary`, `--accent`, `--card`, `--radius`) on `:root` / `.dark` / `[data-theme="…"]` selectors in `src/index.css`. Components only ever reference the semantic tokens (`bg-card`, `text-primary`, `rounded-theme`), which is what makes live theme switching work everywhere at once.

The `ThemeProvider` owns mode (`light` / `dark` / `system`), the active variant per mode, and `isDark`, persists choices to `localStorage`, and applies the `.dark` class + `data-theme` attribute to `<html>`. Dark-mode Tailwind variants are wired to the class (not the media query) via `@custom-variant dark` in `index.css`.

## Assets

Background images ship as AVIF (16–80KB each) in `public/images/`. The original JPEG sources are kept in `assets-originals/` (not shipped). To regenerate:

```bash
avifenc -q 60 -s 6 assets-originals/bg_matcha.png public/images/bg_matcha.avif
```

## Notes

- This is a front-end demo — there's no backend; emails, projects, and team members are seeded demo data.
- The production JS bundle is ~760KB minified (React + Framer Motion + GSAP). If that matters for your deployment, code-splitting or dropping GSAP (used only for the dashboard scroll pin) are the obvious wins.
