/* ============================================================
   Renders the timeline from data/timeline.json, then reveals
   each entry on scroll. Manage entries in admin.html.
   ============================================================ */
(function () {
  "use strict";

  var list = document.getElementById("tl");
  var empty = document.getElementById("tl-empty");

  // If this page has no timeline container, do nothing.
  if (!list) return;

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function buildItem(entry) {
    var li = document.createElement("li");
    li.className = "tl__item";

    var capParts = [];
    if (entry.title) capParts.push("<strong>" + esc(entry.title) + "</strong> ");
    if (entry.caption) capParts.push(esc(entry.caption));
    if (entry.note) capParts.push(' <em>' + esc(entry.note) + "</em>");

    li.innerHTML =
      '<div class="tl__marker" aria-hidden="true"></div>' +
      '<span class="tl__year">' + esc(entry.year || "") + "</span>" +
      '<figure class="photo">' +
        '<div class="photo__frame">' +
          '<img src="' + esc(entry.image || "") + '" alt="' + esc(entry.alt || entry.title || "") + '" loading="lazy" />' +
          '<span class="photo__grain" aria-hidden="true"></span>' +
        "</div>" +
        '<figcaption class="photo__cap">' + capParts.join("") + "</figcaption>" +
      "</figure>";

    return li;
  }

  function reveal(items) {
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el) { observer.observe(el); });
  }

  function render(entries) {
    list.innerHTML = "";
    if (!entries || !entries.length) {
      if (empty) empty.hidden = false;
      return;
    }
    if (empty) empty.hidden = true;
    entries.forEach(function (entry) { list.appendChild(buildItem(entry)); });
    reveal(Array.prototype.slice.call(list.querySelectorAll(".tl__item")));
  }

  // Prefer an unsaved draft from the admin editor (so a live preview works),
  // otherwise load the published data/timeline.json.
  var draft = null;
  try {
    var raw = window.localStorage.getItem("isham.timeline.preview");
    if (raw) draft = JSON.parse(raw);
  } catch (e) { /* ignore */ }

  if (draft && draft.entries) {
    render(draft.entries);
    return;
  }

  fetch("data/timeline.json", { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (data) { render(data.entries || []); })
    .catch(function () {
      // fetch fails on file:// — show a friendly hint.
      if (empty) {
        empty.hidden = false;
        empty.innerHTML =
          "Couldn't load the timeline data. If you opened this file directly, " +
          "run it through a local web server, or view it on GitHub Pages.";
      }
    });
})();

/* ============================================================
   Donation thank-you popup.
   ============================================================ */
(function () {
  "use strict";

  var btn = document.getElementById("donate-btn");
  var modal = document.getElementById("donate-modal");
  if (!btn || !modal) return;

  var lastFocused = null;

  function open() {
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    var ok = modal.querySelector(".modal__ok");
    if (ok) ok.focus();
    document.addEventListener("keydown", onKey);
  }

  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKey);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function onKey(e) {
    if (e.key === "Escape" || e.key === "Esc") close();
  }

  btn.addEventListener("click", open);

  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) close();
  });
})();
