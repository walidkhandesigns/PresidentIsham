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
the site automatically. It's ready to go — it just needs Pages switched on once.

### ⚠️ One-time manual step (required)

The workflow's automatic token isn't allowed to turn Pages **on** for the first
time, so you have to do this once in the browser:

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

Then re-run the latest **Deploy static site to GitHub Pages** run under the
**Actions** tab (or just push any commit). It will build and go live. The URL
appears in **Settings → Pages** and in the Actions run summary.

### Note for a *private* repo

GitHub Pages on a **private** repository requires a paid plan (GitHub
Pro / Team / Enterprise). On a free account, either:

- make the repo **public** (Settings → General → Danger Zone → Change visibility), or
- upgrade the plan.

Once Pages can be enabled, the one-time step above applies and deploys work
automatically on every push.

### Alternative: deploy from a branch

Instead of Actions you can serve the files directly: **Settings → Pages →
Source → Deploy from a branch**, then pick the branch and `/ (root)`. (Same
private-repo plan requirement applies.)
