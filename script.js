/* Reveal timeline items as they scroll into view */
(function () {
  "use strict";

  var items = document.querySelectorAll(".tl__item");

  if (!("IntersectionObserver" in window) || !items.length) {
    // Fallback: just show everything
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
})();
