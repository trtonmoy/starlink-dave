function lazyLoadBackgroundImages() {
  var e;
  if ("IntersectionObserver" in window) {
    e = document.querySelectorAll(".lazy");
    var n = new IntersectionObserver(function (e, t) {
      e.forEach(function (e) {
        if (e.isIntersecting) {
          var t = e.target;
          t.classList.remove("lazy"), n.unobserve(t);
        }
      });
    });
    e.forEach(function (e) {
      n.observe(e);
    });
  } else {
    var t;
    function o() {
      t && clearTimeout(t),
        (t = setTimeout(function () {
          var n = window.pageYOffset;
          e.forEach(function (e) {
            e.offsetTop < window.innerHeight + n &&
              ((e.src = e.dataset.src), e.classList.remove("lazy"));
          }),
            0 == e.length &&
              (document.removeEventListener("scroll", o),
              window.removeEventListener("resize", o),
              window.removeEventListener("orientationChange", o));
        }, 20));
    }
    (e = document.querySelectorAll(".lazy")),
      document.addEventListener("scroll", o),
      window.addEventListener("resize", o),
      window.addEventListener("orientationChange", o);
  }
}
"loading" != document.readyState
  ? lazyLoadBackgroundImages()
  : document.addEventListener("DOMContentLoaded", lazyLoadBackgroundImages());
