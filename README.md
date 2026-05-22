## Preview

Light mode (screenshot 1):

![Landing (light)](/assets/screenshots/landing-light.png)

Dark mode (screenshot 2):

![Landing (dark)](/assets/screenshots/landing-dark.png)

## Local development

Requirements:
- Node.js 20+ (tested with Node 20/22)
- npm

Install and run locally:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build

```bash
npm run build
npm start
```

## Project structure (major files)

- `src/app/page.tsx` — Landing page with the floating card collage.
- `src/components/FloatingCard.tsx` — Reusable animated card component (configurable width/height).
- `src/components/ThemeToggle.tsx` — Theme switcher (light/dark).
- `src/app/globals.css` — Global CSS and CSS variables.

## Notes

- Screenshots are referenced from `assets/screenshots/` so they appear in the README when opened in GitHub or locally with a markdown previewer.
- If you want me to add the screenshot image files into the repo, grant me the image files (or confirm you want me to embed base64 copies) and I will add them.

## License

MIT (or add your preferred license)
