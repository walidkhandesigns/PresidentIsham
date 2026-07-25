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
| `script.js` | Renders the timeline from `data/timeline.json` + scroll-reveal animation |
| `data/timeline.json` | **The content** — every timeline moment (year, photo, caption) |
| `builder.html` | A no-login editor for adding/editing moments (see below) |
| `images/` | Placeholder photos — **replace these** |

## Design

- **Palette:** Bangladesh flag — bottle green (`#006a4e`) + red (`#f42a41`), with
  cream, gold and deep-green tones.
- **Above the fold:** full-width hero with the national circle motif.
- **Timeline:** alternating cards on desktop, single rail on mobile.
- **Archive photos:** each image gets a sepia wash, warm vignette and a rough
  paper-grain overlay (all done in CSS — no image editing needed).

## Adding your own photos & captions

All the timeline content now lives in **`data/timeline.json`** — a simple list
of moments. The page builds itself from that file, so you never touch the HTML.

Each moment looks like this:

```json
{
  "year": "2026",
  "img": "images/elected-president.jpg",
  "alt": "Isham on election night",
  "title": "Elected President.",
  "caption": "In a landslide of historic proportions, a nation chose its champion."
}
```

- `title` is the **bold lead-in** (optional). `caption` is the rest of the text.
- `img` is the path to the photo inside the repo.
- The sepia/paper/archive treatment is applied automatically to any image, so
  even color photos will look like vintage archive shots.

### Easiest way — the builder (`builder.html`)

Open **`builder.html`** (from the live site at
`…github.io/PresidentIsham/builder.html`, or just double-click the file on your
computer). It's a small editor that lets you:

1. **Load** the current moments (auto-loads from the site, or import the JSON).
2. **Add / edit / reorder / delete** moments with a form — pick a photo, type a
   year and caption.
3. **Export** — it downloads a fresh `timeline.json` and your renamed image(s).

Then publish the changes:

1. Put the downloaded image file(s) into the `images/` folder.
2. Replace `data/timeline.json` with the downloaded file.
3. Commit & push — the site rebuilds in about a minute.

> The builder never uploads anything; it only generates files for you to commit.
> It works fully offline and needs no login or token.

### Or edit by hand

Drop your images into `images/`, then add/edit/remove objects in
`data/timeline.json`. Order in the file = order on the page.

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
