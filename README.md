# Isham Ul Haque — President-Elect of Bangladesh 2026 🇧🇩

A fun, static one-page tribute/parody site: a scrollable biographical timeline
for our friend **Isham Ul Haque**, the (definitely real, totally official)
"President-Elect of Bangladesh, 2026."

> ⚠️ This is an affectionate prank made by friends. It is not a real campaign,
> endorsement, or government site.

## What's here

| File | Purpose |
|------|---------|
| `index.html` | The whole page — hero + timeline + quote + footer |
| `styles.css` | Styling (Bangladesh flag palette, archive-photo effect, responsive) |
| `script.js` | Scroll-reveal animation for timeline entries |
| `images/` | Placeholder photos — **replace these** |
| `.github/workflows/deploy.yml` | Auto-deploys to GitHub Pages on push |

## Design

- **Palette:** Bangladesh flag — bottle green (`#006a4e`) + red (`#f42a41`), with
  cream, gold and deep-green tones.
- **Above the fold:** full-width hero with the national circle motif.
- **Timeline:** alternating cards on desktop, single rail on mobile.
- **Archive photos:** each image gets a sepia wash, warm vignette and a rough
  paper-grain overlay (all done in CSS — no image editing needed).

## Adding your own photos & captions

1. Drop your images into the `images/` folder.
2. In `index.html`, find each `<li class="tl__item"> … </li>` block and:
   - change the `<img src="images/placeholder-N.svg" …>` to your file,
   - edit the `<span class="tl__year">` and the `<figcaption>` text.
3. To add a new moment, copy a whole `<li class="tl__item">` block and edit it.

The sepia/paper/archive treatment is applied automatically to any image, so
even color photos will look like vintage archive shots.

## Hosting on GitHub Pages

This site deploys directly from the branch — no build step, no workflow. The
`.nojekyll` file makes GitHub serve the raw HTML as-is.

### Setup (one time)

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. **Branch:** `claude/isham-prank-website-3a3pyk`  •  **Folder:** `/ (root)`
   → **Save**.

The site goes live within a minute or two at:

```
https://walidkhandesigns.github.io/PresidentIsham/
```

After that, any push to that branch republishes automatically. To edit photos
and captions, change the files and commit — no other steps needed.

> Note: GitHub Pages on a **private** repo needs a paid plan, so this repo is
> public. If you make it private again, Pages will stop serving unless you're on
> GitHub Pro/Team/Enterprise.
