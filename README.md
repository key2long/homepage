# homepage

Personal homepage of **Xiao Long** — Ph.D. student at the University of Science and Technology of China.

Live at <https://key2long.github.io/homepage/>.

## Stack

Plain HTML, CSS, and a small vanilla-JS file. No build step, no dependencies, no external fonts — it loads fast anywhere.

```
index.html          all page content
assets/style.css    design system & layout
assets/main.js      theme toggle, scroll reveal
favicon.svg         monogram favicon
```

## Editing

- **Text / publications / projects** — edit `index.html` directly.
- **Colors, typography, spacing** — edit the CSS custom properties at the top of `assets/style.css`.
- **Dark mode** — follows the visitor's system setting by default; the toggle in the header overrides it and is remembered.
- **Portrait** — to replace the `XL` monogram with a photo, drop an image into `assets/` and swap the `.monogram` div in the hero for an `<img>`.
- **Email** — add a `mailto:` link next to the GitHub / Scholar / ORCID links when ready.

## Deployment

This repository is named `homepage`, so GitHub Pages serves it at `https://key2long.github.io/homepage/` once Pages is enabled (Settings → Pages → Deploy from a branch → `main` / `/ (root)`).
