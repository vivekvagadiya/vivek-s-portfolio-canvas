
# Vivek Vagadiya — Premium Frontend Engineer Portfolio

A single-page, Vercel/Linear/Raycast-grade dark portfolio. Built on the supported React + Vite template, but written in plain JavaScript (`.jsx`) per your choice. Next.js App Router is not available here, so routing/SEO is handled the Vite way (single landing route + `react-helmet-async` for meta tags).

## Stack

- React + Vite (existing template)
- Plain JavaScript — all new files `.jsx`, no TS annotations
- Tailwind CSS (already configured)
- Framer Motion (animations, scroll reveals)
- shadcn/ui (Button, Card, Badge, Sheet for mobile nav)
- lucide-react (icons)
- react-helmet-async (SEO meta — replaces Next.js `metadata`)

## Design system

- Background: near-black `#09090B` (zinc-950) with subtle slate gradient washes
- Accent gradient: blue `#3B82F6` → violet `#8B5CF6` → fuchsia `#D946EF`
- Glassmorphism cards: `bg-white/[0.03]` + `backdrop-blur-xl` + gradient border (`::before` mask trick)
- Ambient layer: fixed full-screen animated gradient blobs + subtle grid + tsParticles-lite dots
- Typography: Geist Sans (headings) + Geist Mono (code/labels) via `@fontsource`
- Motion: 120–400ms ease-out, `whileInView` reveals with 60px translate + opacity, staggered children
- Sticky navbar with backdrop blur + scroll progress bar (Framer `useScroll`)

## File structure

```text
src/
  pages/Index.jsx                 # composes all sections
  components/
    layout/
      Navbar.jsx                  # sticky + mobile Sheet
      Footer.jsx
      ScrollProgress.jsx
      AmbientBackground.jsx       # gradient blobs + grid + particles
    sections/
      Hero.jsx                    # heading, CTAs, code-editor preview, tech chips
      About.jsx                   # bio + animated stat cards
      Experience.jsx              # timeline (Prometteur)
      Projects.jsx                # 3 enterprise cards
      Skills.jsx                  # categorized glow cards
      Principles.jsx              # engineering principles grid
      Contact.jsx                 # glass contact card + socials
    ui/
      GlassCard.jsx               # reusable gradient-border glass card
      GradientButton.jsx
      TechBadge.jsx
      SectionHeading.jsx
      CodeEditorPreview.jsx       # macOS-style window with syntax-highlighted snippet
      StatCard.jsx
      TimelineItem.jsx
      ProjectCard.jsx
      SkillCategory.jsx
  data/
    portfolio.js                  # all copy: hero, projects, skills, experience, principles, socials
  lib/motion.js                   # shared variants (fadeUp, stagger, etc.)
  index.css                       # tokens, gradient-border utility, grid bg
```

All content from your brief lives in `data/portfolio.js` so it's easy to edit.

## Sections (in order on `/`)

1. **Navbar** — logo mark "VV", anchor links (About, Experience, Projects, Skills, Contact), Resume CTA, mobile Sheet menu.
2. **Hero** — big gradient headline, subcopy, three buttons (View Projects, Download Resume, Contact Me), floating tech badges, code-editor mockup showing a real-looking `useRBAC` hook snippet, tech-stack chip row.
3. **About** — two-column: bio bullets + 4 animated stat cards (3+ apps, 30+ components, 6+ betting modules, 20% faster).
4. **Experience** — vertical timeline with one rich card for Prometteur Solutions (role, dates, responsibilities, hover glow).
5. **Projects** — 3 large enterprise cards (RBAC HRMS, Tung247, CloudPouss): generated mockup image, tech pills, feature list, architecture highlight quote, GitHub + Live Demo buttons, gradient-border hover.
6. **Skills** — 6 categorized glass cards (Frontend, Backend, State Management, Real-Time, Styling & UI, Tools) with icon + skill chips and shimmer on hover.
7. **Engineering Principles** — 6-card grid (Scalable Architecture, Reusable Components, Performance, RBAC, Real-Time Sync, Clean Code) with Lucide icons and gradient glow.
8. **Contact** — centered glass card: email, LinkedIn, GitHub, Resume button; animated social icons with glow.
9. **Footer** — "Designed & Built by Vivek Vagadiya" + year + subtle divider.

## Technical details

- **Plain JS enforcement**: new files use `.jsx`, no type annotations, no generics. Existing `.tsx` template files are left alone (Vite handles both). I'll keep `App.tsx`/`main.tsx` as-is and mount the new `Index.jsx` from the existing routes file.
- **Project mockups**: 3 generated images saved to `src/assets/` and imported via ES6 (HRMS dashboard, betting odds UI, chat/booking UI) — abstract dark UI screenshots, not stock photos.
- **Resume**: button links to `/resume.pdf` in `public/` (placeholder file; you can replace it).
- **SEO**: `<Helmet>` with title `Vivek Vagadiya — Frontend Engineer | React.js Developer`, meta description, OG tags, JSON-LD `Person` schema, canonical, viewport.
- **Accessibility**: semantic `<header> <main> <section id> <footer>`, alt text on images, focus rings preserved, `prefers-reduced-motion` respected in motion variants.
- **Performance**: images lazy-loaded, particles capped + paused offscreen, motion only on `whileInView` with `once: true`.
- **Responsive**: mobile-first; nav collapses to Sheet; project cards stack; hero text scales with clamp.

## Out of scope (flagging)

- Next.js App Router, `app/` directory, server components, `next/image`, `next/font`, `metadata` export — not available on this stack. SEO is done with Helmet; images are static imports; fonts via `@fontsource`.
- Real resume PDF content — placeholder file only.
- Backend/contact form submission — contact section is mailto + social links (no Lovable Cloud needed unless you want a form later).

After you approve, I'll install `framer-motion`, `react-helmet-async`, `@fontsource/geist-sans`, `@fontsource/geist-mono`, generate the 3 project mockups, and build the sections.
