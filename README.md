# homepage

Personal homepage of **Xiao Long** — Ph.D. student at the University of Science and Technology of China.

Live at <https://key2long.github.io/homepage/>.

## Stack

Plain HTML and CSS. No build step, no dependencies, no external fonts.

```
index.html          all page content
assets/style.css    layout & typography
assets/portrait.jpg profile photo
favicon.svg         favicon
```

The two-column academic layout (profile, news sidebar, publication rows) is inspired by
[Junkang Wu's homepage](https://junkangwu.github.io/).

## Editing

- **Text / publications** — edit `index.html` directly.
- **Photo** — replace `assets/portrait.jpg` (portrait ratio works best, e.g. 700×980).
- **Colors / type** — edit `assets/style.css`.
- **Email** — add a `mailto:` link in the `.links` paragraph in the profile block when ready.

## Deployment

This repository is named `homepage`, so GitHub Pages serves it at
`https://key2long.github.io/homepage/` from the `main` branch (`/` root).
