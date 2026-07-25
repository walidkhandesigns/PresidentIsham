/* Render the timeline from data/timeline.json, then reveal items on scroll. */
(function () {
  "use strict";

  var list = document.getElementById("tl");

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function itemHtml(entry) {
    var year = escapeHtml(entry.year);
    var img = escapeHtml(entry.img);
    var alt = escapeHtml(entry.alt || ("Photo — " + (entry.year || "")));
    var title = entry.title ? "<strong>" + escapeHtml(entry.title) + "</strong> " : "";
    var caption = escapeHtml(entry.caption);
    return (
      '<li class="tl__item">' +
        '<div class="tl__marker" aria-hidden="true"></div>' +
        '<span class="tl__year">' + year + "</span>" +
        '<figure class="photo">' +
          '<div class="photo__frame">' +
            '<img src="' + img + '" alt="' + alt + '" loading="lazy" />' +
            '<span class="photo__grain" aria-hidden="true"></span>' +
          "</div>" +
          '<figcaption class="photo__cap">' + title + caption + "</figcaption>" +
        "</figure>" +
      "</li>"
    );
  }

  function reveal() {
    var items = document.querySelectorAll(".tl__item");
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
    if (!list) return;
    if (!Array.isArray(entries) || !entries.length) {
      list.innerHTML =
        '<li style="text-align:center;list-style:none;opacity:.7;">' +
        "No timeline entries yet. Add some with builder.html.</li>";
      return;
    }
    list.innerHTML = entries.map(itemHtml).join("");
    reveal();
  }

  if (!list) {
    // Nothing to render into — still run reveal in case of static markup.
    reveal();
    return;
  }

  fetch("data/timeline.json", { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(render)
    .catch(function (err) {
      list.innerHTML =
        '<li style="text-align:center;list-style:none;opacity:.7;">' +
        "Couldn't load the timeline (" + escapeHtml(err.message) + ").</li>";
    });
})();
