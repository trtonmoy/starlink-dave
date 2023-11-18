const LoadLaunchesPageTiles = () => {
  var e = new XMLHttpRequest();
  (e.onreadystatechange = function () {
    4 == this.readyState &&
      200 == this.status &&
      (addLaunchesPageTiles(JSON.parse(this.responseText)),
      loadLaunchesPageStats());
  }),
    e.open(
      "GET",
      contentBaseUrl + "/api/spacex-website/launches-page-tiles",
      !0
    ),
    e.send();
};
function loadLaunchesPageStats() {
  var e = new XMLHttpRequest();
  (e.onreadystatechange = function () {
    4 == this.readyState &&
      200 == this.status &&
      (addLaunchesPageStats(JSON.parse(this.responseText)),
      addLaunchesPageScripts());
  }),
    e.open(
      "GET",
      contentBaseUrl + "/api/spacex-website/launches-page-stats",
      !0
    ),
    e.send();
}
function addLaunchesPageStats(e) {
  if (!e) return;
  document.getElementById(
    "stats"
  ).innerHTML = `\n    <div class="content-center">\n      <div id="stat1" class="column3 stat">\n        <span class="number">${e.totalLaunches}</span>\n        <span class="label">Total Launches</span>\n      </div>\n      <div id="stat2" class="column3 stat">\n        <span class="number">${e.totalLandings}</span>\n        <span class="label">Total Landings</span>\n      </div>\n      <div id="stat3" class="column3 stat">\n        <span class="number">${e.totalReflights}</span>\n        <span class="label">Total Reflights </span>\n      </div>\n    </div>\n  `;
}
function addLaunchesPageTiles(e) {
  e || (e = {});
  const t = e.filter(function (e) {
      return "final" != e.status;
    }),
    n = e.filter(function (e) {
      return "final" == e.status;
    });
  addUpcomingTiles(t), addFinalizedTiles(n);
}
function addUpcomingTiles(e) {
  e.sort(dateSort(!0));
  let t = document.getElementById("feature"),
    n = document.getElementById("feature-background"),
    a = document.createElement("div");
  if (
    ((a.id = "opacity"),
    (a.className = "section-inner flex-center feature"),
    (a.style.height = "100%"),
    e && 0 != e.length)
  ) {
    if (1 == e.length) {
      (t.style.height = ""),
        (n.style.backgroundPosition = "center center"),
        n.setAttribute("aria-label", `An image from ${e[0].title}`),
        e[0].imageDesktop &&
          n.setAttribute("data-desktop", e[0].imageDesktop.url),
        e[0].imageMobile && n.setAttribute("data-mobile", e[0].imageMobile.url);
      let s = "";
      e[0].quickDetail && (s = e[0].quickDetail),
        (a.className = "section-inner feature"),
        (a.innerHTML = `\n      <div class="inner-left-bottom">\n        <h3 class="shadowed">\n          <div class="single-live-upcoming"> ${e[0].subtitle}</div>\n        </h3>\n        <h2 class="shadowed">\n          ${e[0].title}\n        </h2>\n        <p class="shadowed">\n          ${s}\n        </p>\n        <a class="upcoming-option btn animate"\n           tabindex="0"\n           role="button"\n           href="${e[0].link}"\n           video-data="${e[0].youtubeVideoId}"\n           aria-label="${e[0].callToAction} ${e[0].title}">\n          <div class="hover"></div>\n          <span class="text">${e[0].callToAction}</span>\n        </a>\n      </div>\n      <div class="scrollme">\n        <svg width="30px" height="20px" aria-label="more content below">\n          <path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "/>\n        </svg>\n      </div>\n    `);
    } else if (e.length > 1) {
      (t.style.height = "calc(100vh - 370px)"),
        (a.innerHTML =
          '\n      <div class="center-header">\n        <h1 class="feature-title">Launches</h2>\n      </div>\n    ');
      let n = document.getElementById("upcoming"),
        s = document.createElement("div");
      s.className = "content-center launches-content-width";
      let i = document.createElement("div");
      (i.className = "label"),
        (i.innerHTML = '\n      <h2 class="sub-title">UPCOMING</h2>\n    ');
      let l = document.createElement("div");
      (l.className = "upcoming-options"),
        e.forEach(function (t) {
          let n = document.createElement("a");
          (n.className = "upcoming-option"),
            n.setAttribute("href", t.link),
            e.length > 2 && (n.className = "upcoming-option many-options"),
            (n.innerHTML = `\n        <span\n         class="background dim-background"\n         style="background-position: center; backgroun-size: auto;"\n         role="img"\n         aria-label="Mission page for ${
              t.title
            }"\n         data-preload\n         data-desktop="${
              t.imageDesktop ? t.imageDesktop.url : ""
            }"\n         data-mobile="${
              t.imageMobile ? t.imageMobile.url : ""
            }">\n        </span>\n        <div class="upcoming-info">\n          <div class="date">${getDateString(
              t.date
            )}</div>\n          <div class="label">${
              t.title
            }</div>\n        </div>\n      `),
            l.appendChild(n);
        }),
        s.appendChild(i),
        s.appendChild(l),
        n.appendChild(s);
    }
  } else
    (t.style.height = "100vh"),
      (a.innerHTML =
        '\n      <div class="center-header">\n        <h1 class="feature-title">Launches</h2>\n      </div>\n      <div class="scrollme">\n        <svg width="30px" height="20px" aria-label="more content below">\n          <path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "/>\n        </svg>\n      </div>\n    ');
  t.appendChild(n), t.appendChild(a);
}
function addFinalizedTiles(e) {
  e.sort(dateSort(!1));
  let t = document.getElementById("items"),
    n = t.firstChild;
  e.forEach(function (e) {
    let a = document.createElement("div");
    a.className = "item";
    let s = null;
    e.imageDesktop && (s = e.imageDesktop.url),
      (a.innerHTML = `\n      <a class="article-header"\n         href="${
        e.link
      }">\n        <span class="u-fullParent lazy"\n              role="img"\n              aria-label="Mission page for ${
        e.title
      }"\n              style="background-image: url('${s}');"></span>\n      </a>\n      <div class="date">${getDateString(
        e.date
      )}</div>\n      <div class="label">${
        e.title
      }</div>\n      <a class="btn animate"\n         tabindex="0"\n         role="button"\n         href="${
        e.link
      }"\n         aria-label="Learn more about ${
        e.title
      }">\n        <div class="hover"></div>\n        <div class="text">Learn More</div>\n      </a>\n    `),
      t.insertBefore(a, n);
  });
}
function addLaunchesPageScripts() {
  const e = document.getElementById("launches");
  let t = document.createElement("script");
  t.setAttribute("type", "text/javascript"),
    t.setAttribute("src", "/static/core-min.js"),
    (t.onload = function () {
      let t = document.createElement("script");
      t.setAttribute("type", "text/javascript"),
        t.setAttribute("src", "/static/infographics-min.js");
      let n = document.createElement("script");
      n.setAttribute("type", "text/javascript"),
        n.setAttribute("src", "/static/launches-min.js");
      let a = document.createElement("script");
      a.setAttribute("type", "text/javascript"),
        a.setAttribute("src", "/static/lazyLoadList-min.js"),
        e.appendChild(t),
        e.appendChild(n),
        e.appendChild(a);
    }),
    e.appendChild(t);
}
function getLaunchesPageScrollMeElement() {
  let e = document.createElement("div");
  return (
    (e.className = "scrollme"),
    (e.innerHTML =
      '\n    <svg width="30px" height="20px" alt="bouncing scroll-down indicator">\n      <path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "/>\n    </svg>\n  '),
    e
  );
}
function dateSort(e) {
  return function (t, n) {
    let a = t.date,
      s = n.date;
    t.time && (a += `T${t.time}Z`), n.time && (s += `T${n.time}Z`);
    const i = new Date(a),
      l = new Date(s);
    return i < l ? (e ? -1 : 1) : i >= l ? (e ? 1 : -1) : 0;
  };
}
function getDateString(e) {
  const t = new Date(e);
  return `${
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][t.getUTCMonth()]
  } ${t.getUTCDate()}, ${t.getUTCFullYear()}`;
}
"loading" != document.readyState
  ? LoadLaunchesPageTiles()
  : document.addEventListener("DOMContentLoaded", LoadLaunchesPageTiles);
