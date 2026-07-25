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
| `admin.html` | **Photo & caption editor (the CMS)** — add/edit/reorder moments |
| `data/timeline.json` | The timeline content — years, captions and (embedded) photos |
| `styles.css` | Styling (Bangladesh flag palette, archive-photo effect, responsive) |
| `script.js` | Loads `data/timeline.json` and renders the timeline |
| `images/` | Default placeholder photos |

## Design

- **Palette:** Bangladesh flag — bottle green (`#006a4e`) + red (`#f42a41`), with
  cream, gold and deep-green tones.
- **Above the fold:** full-width hero with the national circle motif.
- **Timeline:** alternating cards on desktop, single rail on mobile.
- **Archive photos:** each image gets a sepia wash, warm vignette and a rough
  paper-grain overlay (all done in CSS — no image editing needed).

## Adding your own photos & captions (no code)

The site now has a built-in editor. **You don't touch HTML anymore.**

1. Open **`admin.html`** in your browser (locally, or at
   `https://walidkhandesigns.github.io/PresidentIsham/admin.html`).
2. For each moment: drop in a **photo**, type a **year**, a short **caption
   title** (bold) and a **caption**. Click **Add moment**.
3. Reorder with ↑ / ↓, edit with ✎, remove with 🗑. Everything auto-saves in
   your browser as you work, and **View the site** shows a live preview.
4. When you're happy, click **⬇ Download timeline.json**, drop the file into
   the repo's **`data/`** folder (replacing the old one), and commit &amp; push.
   The live site updates automatically.

### How it works

- The timeline is rendered from **`data/timeline.json`** by `script.js`.
- Photos you upload are **resized and embedded directly inside that JSON** as
  data URLs — so there are no separate image files to upload or manage.
- The sepia/paper/archive treatment is applied automatically to every photo,
  so even a modern color photo looks like a vintage archive shot.

> Prefer editing by hand? You can still edit `data/timeline.json` directly, or
> use the editor's **Import JSON** / **Copy JSON** buttons.

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
