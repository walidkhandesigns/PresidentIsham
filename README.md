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

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys
the site automatically. **One-time setup** in the GitHub repo:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

After that, every push to the site branch redeploys automatically. The live URL
appears in **Settings → Pages** and in the Actions run summary.

If you'd rather serve straight from a branch instead of Actions: **Settings →
Pages → Source → Deploy from a branch**, pick the branch and `/ (root)`.
