/* Timeline: load entries from timeline.json, render the cards, then
   reveal each one as it scrolls into view. */
(function () {
  "use strict";

  var list = document.getElementById("tl");
  var emptyMsg = document.getElementById("tl-empty");

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function revealItems() {
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

  function itemHtml(entry) {
    var year = escapeHtml(entry.year);
    var img = escapeHtml(entry.image);
    var alt = escapeHtml(entry.alt || entry.title || "Timeline photo");
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

  function render(entries) {
    if (!Array.isArray(entries) || !entries.length) {
      if (emptyMsg) emptyMsg.hidden = false;
      return;
    }
    list.innerHTML = entries.map(itemHtml).join("");
    revealItems();
  }

  if (!list) return;

  var src = list.getAttribute("data-src") || "timeline.json";

  fetch(src, { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(render)
    .catch(function (err) {
      if (emptyMsg) emptyMsg.hidden = false;
      if (window.console) console.error("Failed to load timeline:", err);
    });
})();
