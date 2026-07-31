# Kenneth Camacho — Portfolio

Personal portfolio of **Kenneth Camacho** — software engineer, M.S. Computer Science student at Georgia Tech (Computing Systems), and builder of distributed systems.

**Live site:** [kennethcamacho.com](https://www.kennethcamacho.com)

## Stack

- [Next.js 14](https://nextjs.org/) (pages router) + React 18
- [Tailwind CSS](https://tailwindcss.com/) with a custom desktop-first breakpoint scale
- [Framer Motion](https://www.framer.com/motion/) for scroll and hover animation
- Self-hosted [Montserrat](https://fonts.google.com/specimen/Montserrat) via `next/font` — no external font requests
- Jest + React Testing Library

## Highlights

- **Zero third-party runtime requests.** The rotating skill sphere and typewriter headline are small in-house components (`WordSphere`, `TypeText`) instead of CDN scripts and npm widgets, so the site has no supply-chain exposure at runtime.
- **Hardened HTTP headers.** `next.config.js` ships a Content-Security-Policy, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and HSTS on every route, with `X-Powered-By` disabled.
- **Accessible.** Keyboard-visible focus rings, `aria` labels on icon-only controls, `prefers-reduced-motion` support (animations collapse to static rendering), and a mobile menu with Escape-to-close and scroll locking.
- **Dark mode** persisted in `localStorage`, synced across tabs, and applied before first paint to avoid theme flash.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Quality checks

```bash
npm run lint     # ESLint (next/core-web-vitals)
npm test         # Jest + React Testing Library
npm run build    # production build
```

## Project structure

```
src/
  components/    # NavBar, Footer, WordSphere, TypeText, timelines, skills
  pages/         # Home, About, Background, Projects, Articles
  styles/        # Tailwind entry + global a11y/motion rules
public/
  images/        # project, article, and profile artwork
  Kenneth_Camacho_Resume.pdf
```

## License

MIT — see [LICENSE](LICENSE).
