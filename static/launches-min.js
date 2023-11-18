function addLiveVideoBadge(e) {
  e.forEach((e) => {
    var t = document.querySelector(`.upcoming-option[video-data="${e}"]`);
    if (t) {
      t.href += "?live";
      var o = t.querySelector(".upcoming-live"),
        n = document.querySelector(".single-live");
      o ? (o.style.display = "block") : n && (n.style.display = "block");
    }
  });
}
function getLiveVideos() {
  getJSON("/launches/ytvideostatus.json", function (e, t) {
    if (null !== e) alert("Something went wrong: " + e);
    else {
      var o = JSON.parse(JSON.stringify(t)),
        n = [];
      o.forEach((e) => {
        e.IsLive && n.push(e.DataId);
      }),
        addLiveVideoBadge(n);
    }
  });
}
function getJSON(e, t) {
  var o = new XMLHttpRequest();
  o.open("GET", e, !0),
    (o.responseType = "json"),
    (o.onload = function () {
      var e = o.status;
      t(200 === e ? null : e, o.response);
    }),
    o.send();
}
"loading" != document.readyState
  ? getLiveVideos()
  : document.addEventListener("DOMContentLoaded", getLiveVideos());
