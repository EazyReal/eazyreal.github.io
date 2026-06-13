# Source for Maxwill's Site

- Website: https://eazyreal.github.io/
- Stack: Astro, Tailwind CSS, Markdown/MDX, static GitHub Pages deploy

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```text
src/
  components/ Reusable shell, nav, and prose styling
  layouts/    Shared page layouts
  pages/      Site routes and migrated technical notes
  styles/     Tailwind theme tokens
public/
  img/        Static images and icons
  CNAME       GitHub Pages custom domain
```

## Notes

The old MkDocs content has been migrated into Astro page routes so existing
public paths such as `/genai_first_principles/` and `/Quantum/talk_grover/`
remain available.
