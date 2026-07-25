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
| `timeline.json` | **The timeline content** — years, photos and captions live here |
| `admin.html` | A tiny in-browser editor (mini CMS) for the timeline |
| `styles.css` | Styling (Bangladesh flag palette, archive-photo effect, responsive) |
| `script.js` | Loads `timeline.json`, renders the cards, reveals them on scroll |
| `images/` | Placeholder photos — **replace these** |

## Design

- **Palette:** Bangladesh flag — bottle green (`#006a4e`) + red (`#f42a41`), with
  cream, gold and deep-green tones.
- **Above the fold:** full-width hero with the national circle motif.
- **Timeline:** alternating cards on desktop, single rail on mobile.
- **Archive photos:** each image gets a sepia wash, warm vignette and a rough
  paper-grain overlay (all done in CSS — no image editing needed).

## Editing the timeline (the mini CMS)

The timeline is now data-driven: every moment is an entry in
[`timeline.json`](timeline.json). There are two ways to edit it.

### Option A — the visual editor (easiest)

1. Open **`admin.html`** — either locally in your browser, or at
   `https://walidkhandesigns.github.io/PresidentIsham/admin.html` on the live site.
2. Use it to **add**, **edit**, **reorder** (↑ / ↓) and **delete** moments. For each
   photo, click **Choose photo** — the editor renames it to a tidy filename in the
   `images/` folder and shows a live preview.
3. Click **Download new photos** and move the downloaded files into the `images/`
   folder.
4. Click **Download timeline.json** and replace the `timeline.json` in the project root.
5. Commit & push both the images and `timeline.json` — the site redeploys automatically.

The editor runs entirely in your browser; nothing is uploaded anywhere.

### Option B — edit the JSON by hand

Each entry looks like this:

```json
{
  "year": "2026",
  "image": "images/election-victory.jpg",
  "alt": "Isham on stage on election night",
  "title": "Elected President.",
  "caption": "In a landslide of historic proportions, a nation chose its champion."
}
```

Drop your photo into `images/`, point `image` at it, and edit the text. Add or
remove entries by adding/removing objects in the array — the page renders whatever
is in the file.

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
