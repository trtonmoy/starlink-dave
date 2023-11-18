!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function t(e, t) {
    (e.prototype = Object.create(t.prototype)),
      ((e.prototype.constructor = e).__proto__ = t);
  }
  function r(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function i(e) {
    return "string" == typeof e;
  }
  function s(e) {
    return "function" == typeof e;
  }
  function n(e) {
    return "number" == typeof e;
  }
  function a(e) {
    return void 0 === e;
  }
  function o(e) {
    return "object" == typeof e;
  }
  function l(e) {
    return !1 !== e;
  }
  function d() {
    return "undefined" != typeof window;
  }
  function c(e) {
    return s(e) || i(e);
  }
  function u(e) {
    return (Ee = _t(e, ct)) && $r;
  }
  function p(e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function f(e, t) {
    return !t && console.warn(e);
  }
  function h(e, t) {
    return (e && (ct[e] = t) && Ee && (Ee[e] = t)) || ct;
  }
  function m() {
    return 0;
  }
  function g(e) {
    var t,
      r,
      i = e[0];
    if ((o(i) || s(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
      for (r = bt.length; r-- && !bt[r].targetTest(i); );
      t = bt[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Vt(e[r], t)))) ||
        e.splice(r, 1);
    return e;
  }
  function v(e) {
    return e._gsap || g(kt(e))[0]._gsap;
  }
  function y(e, t, r) {
    return (r = e[t]) && s(r)
      ? e[t]()
      : (a(r) && e.getAttribute && e.getAttribute(t)) || r;
  }
  function w(e, t) {
    return (e = e.split(",")).forEach(t) || e;
  }
  function b(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function x(e) {
    return Math.round(1e7 * e) / 1e7 || 0;
  }
  function _(e, t) {
    var r = t.charAt(0),
      i = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      "+" === r ? e + i : "-" === r ? e - i : "*" === r ? e * i : e / i
    );
  }
  function T(e, t) {
    for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; );
    return i < r;
  }
  function E() {
    var e,
      t,
      r = mt.length,
      i = mt.slice(0);
    for (gt = {}, e = mt.length = 0; e < r; e++)
      (t = i[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
  }
  function S(e, t, r, i) {
    mt.length && !ye && E(),
      e.render(t, r, i || (ye && t < 0 && (e._initted || e._startAt))),
      mt.length && !ye && E();
  }
  function M(e) {
    var t = parseFloat(e);
    return (t || 0 === t) && (e + "").match(lt).length < 2
      ? t
      : i(e)
      ? e.trim()
      : e;
  }
  function C(e) {
    return e;
  }
  function P(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function k(e, t) {
    for (var r in t)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (e[r] = o(t[r]) ? k(e[r] || (e[r] = {}), t[r]) : t[r]);
    return e;
  }
  function A(e, t) {
    var r,
      i = {};
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  }
  function O(e) {
    var t,
      r = e.parent || be,
      i = e.keyframes
        ? ((t = rt(e.keyframes)),
          function (e, r) {
            for (var i in r)
              i in e ||
                ("duration" === i && t) ||
                "ease" === i ||
                (e[i] = r[i]);
          })
        : P;
    if (l(e.inherit))
      for (; r; ) i(e, r.vars.defaults), (r = r.parent || r._dp);
    return e;
  }
  function L(e, t, r, i, s) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n,
      a = e[i];
    if (s) for (n = t[s]; a && a[s] > n; ) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[r]), (e[r] = t)),
      t._next ? (t._next._prev = t) : (e[i] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  }
  function z(e, t, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var s = t._prev,
      n = t._next;
    s ? (s._next = n) : e[r] === t && (e[r] = n),
      n ? (n._prev = s) : e[i] === t && (e[i] = s),
      (t._next = t._prev = t.parent = null);
  }
  function D(e, t) {
    !e.parent || (t && !e.parent.autoRemoveChildren) || e.parent.remove(e),
      (e._act = 0);
  }
  function I(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  }
  function $(e, t, r, i) {
    return (
      e._startAt &&
      (ye
        ? e._startAt.revert(pt)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, i))
    );
  }
  function R(e) {
    return e._repeat ? Tt(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  }
  function B(e, t) {
    return (
      (e - t._start) * t._ts +
      (0 <= t._ts ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  }
  function X(e) {
    return (e._end = x(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || je) || 0)
    ));
  }
  function Y(e, t) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = x(
          r._time -
            (0 < e._ts
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        X(e),
        r._dirty || I(r, e)),
      e
    );
  }
  function F(e, t) {
    var r;
    if (
      ((t._time || (t._initted && !t._dur)) &&
        ((r = B(e.rawTime(), t)),
        (!t._dur || Ct(0, t.totalDuration(), r) - t._tTime > je) &&
          t.render(r, !0)),
      I(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -je;
    }
  }
  function G(e, t, r, i) {
    return (
      t.parent && D(t),
      (t._start = x(
        (n(r) ? r : r || e !== be ? Mt(e, r, t) : e._time) + t._delay
      )),
      (t._end = x(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      L(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Et(t) || (e._recent = t),
      i || F(e, t),
      e._ts < 0 && Y(e, e._tTime),
      e
    );
  }
  function H(e, t) {
    return (
      (ct.ScrollTrigger || p("scrollTrigger", t)) &&
      ct.ScrollTrigger.create(t, e)
    );
  }
  function N(e, t, r, i, s) {
    return (
      tr(e, t, s),
      e._initted
        ? !r &&
          e._pt &&
          !ye &&
          ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
          Me !== $t.frame
          ? (mt.push(e), (e._lazy = [s, i]), 1)
          : void 0
        : 1
    );
  }
  function q(e, t, r, i) {
    var s = e._repeat,
      n = x(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !i && (e._time *= n / e._dur),
      (e._dur = n),
      (e._tDur = s ? (s < 0 ? 1e10 : x(n * (s + 1) + e._rDelay * s)) : n),
      0 < a && !i && Y(e, (e._tTime = e._tDur * a)),
      e.parent && X(e),
      r || I(e.parent, e),
      e
    );
  }
  function V(e) {
    return e instanceof Ut ? I(e) : q(e, e._dur);
  }
  function W(e, t, r) {
    var i,
      s,
      a = n(t[1]),
      o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
      d = t[o];
    if ((a && (d.duration = t[1]), (d.parent = r), e)) {
      for (i = d, s = r; s && !("immediateRender" in i); )
        (i = s.vars.defaults || {}), (s = l(s.vars.inherit) && s.parent);
      (d.immediateRender = l(i.immediateRender)),
        e < 2 ? (d.runBackwards = 1) : (d.startAt = t[o - 1]);
    }
    return new nr(t[0], d, t[1 + o]);
  }
  function j(e, t) {
    return e || 0 === e ? t(e) : t;
  }
  function U(e, t) {
    return i(e) && (t = dt.exec(e)) ? t[1] : "";
  }
  function K(e, t) {
    return (
      e &&
      o(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && o(e[0]))) &&
      !e.nodeType &&
      e !== xe
    );
  }
  function Q(e) {
    return (
      (e = kt(e)[0] || f("Invalid scope") || {}),
      function (t) {
        var r = e.current || e.nativeElement || e;
        return kt(
          t,
          r.querySelectorAll
            ? r
            : r === e
            ? f("Invalid scope") || Te.createElement("div")
            : e
        );
      }
    );
  }
  function Z(e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function J(e) {
    if (s(e)) return e;
    var t = o(e) ? e : { each: e },
      r = Gt(t.ease),
      n = t.from || 0,
      a = parseFloat(t.base) || 0,
      l = {},
      d = 0 < n && n < 1,
      c = isNaN(n) || d,
      u = t.axis,
      p = n,
      f = n;
    return (
      i(n)
        ? (p = f = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
        : !d && c && ((p = n[0]), (f = n[1])),
      function (e, i, s) {
        var o,
          d,
          h,
          m,
          g,
          v,
          y,
          w,
          b,
          _ = (s || t).length,
          T = l[_];
        if (!T) {
          if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, We])[1])) {
            for (
              y = -We;
              y < (y = s[b++].getBoundingClientRect().left) && b < _;

            );
            b--;
          }
          for (
            T = l[_] = [],
              o = c ? Math.min(b, _) * p - 0.5 : n % b,
              d = b === We ? 0 : c ? (_ * f) / b - 0.5 : (n / b) | 0,
              w = We,
              v = y = 0;
            v < _;
            v++
          )
            (h = (v % b) - o),
              (m = d - ((v / b) | 0)),
              (T[v] = g = u ? Math.abs("y" === u ? m : h) : Ze(h * h + m * m)),
              y < g && (y = g),
              g < w && (w = g);
          "random" === n && Z(T),
            (T.max = y - w),
            (T.min = w),
            (T.v = _ =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (_ < b
                    ? _ - 1
                    : u
                    ? "y" === u
                      ? _ / b
                      : b
                    : Math.max(b, _ / b)) ||
                0) * ("edges" === n ? -1 : 1)),
            (T.b = _ < 0 ? a - _ : a),
            (T.u = U(t.amount || t.each) || 0),
            (r = r && _ < 0 ? Ft(r) : r);
        }
        return (
          (_ = (T[e] - T.min) / T.max || 0), x(T.b + (r ? r(_) : _) * T.v) + T.u
        );
      }
    );
  }
  function ee(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = x(Math.round(parseFloat(r) / e) * e * t);
      return (i - (i % 1)) / t + (n(r) ? 0 : U(r));
    };
  }
  function te(e, t) {
    var r,
      i,
      a = rt(e);
    return (
      !a &&
        o(e) &&
        ((r = a = e.radius || We),
        e.values
          ? ((e = kt(e.values)), (i = !n(e[0])) && (r *= r))
          : (e = ee(e.increment))),
      j(
        t,
        a
          ? s(e)
            ? function (t) {
                return (i = e(t)), Math.abs(i - t) <= r ? i : t;
              }
            : function (t) {
                for (
                  var s,
                    a,
                    o = parseFloat(i ? t.x : t),
                    l = parseFloat(i ? t.y : 0),
                    d = We,
                    c = 0,
                    u = e.length;
                  u--;

                )
                  (s = i
                    ? (s = e[u].x - o) * s + (a = e[u].y - l) * a
                    : Math.abs(e[u] - o)) < d && ((d = s), (c = u));
                return (
                  (c = !r || d <= r ? e[c] : t),
                  i || c === t || n(t) ? c : c + U(t)
                );
              }
          : ee(e)
      )
    );
  }
  function re(e, t, r, i) {
    return j(rt(e) ? !t : !0 === r ? !!(r = 0) : !i, function () {
      return rt(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (t - e + 0.99 * r)) / r) *
                r *
                i
            ) / i;
    });
  }
  function ie(e, t, r) {
    return j(r, function (r) {
      return e[~~t(r)];
    });
  }
  function se(e) {
    for (var t, r, i, s, n = 0, a = ""; ~(t = e.indexOf("random(", n)); )
      (i = e.indexOf(")", t)),
        (s = "[" === e.charAt(t + 7)),
        (r = e.substr(t + 7, i - t - 7).match(s ? lt : it)),
        (a +=
          e.substr(n, t - n) + re(s ? r : +r[0], s ? 0 : +r[1], +r[2] || 1e-5)),
        (n = i + 1);
    return a + e.substr(n, e.length - n);
  }
  function ne(e, t, r) {
    var i,
      s,
      n,
      a = e.labels,
      o = We;
    for (i in a)
      (s = a[i] - t) < 0 == !!r &&
        s &&
        o > (s = Math.abs(s)) &&
        ((n = i), (o = s));
    return n;
  }
  function ae(e) {
    return (
      D(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!ye),
      e.progress() < 1 && Ot(e, "onInterrupt"),
      e
    );
  }
  function oe(e, t, r) {
    return (
      ((6 * (e += e < 0 ? 1 : 1 < e ? -1 : 0) < 1
        ? t + (r - t) * e * 6
        : e < 0.5
        ? r
        : 3 * e < 2
        ? t + (r - t) * (2 / 3 - e) * 6
        : t) *
        Lt +
        0.5) |
      0
    );
  }
  function le(e, t, r) {
    var i,
      s,
      a,
      o,
      l,
      d,
      c,
      u,
      p,
      f,
      h = e ? (n(e) ? [e >> 16, (e >> 8) & Lt, e & Lt] : 0) : zt.black;
    if (!h) {
      if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), zt[e]))
        h = zt[e];
      else if ("#" === e.charAt(0)) {
        if (
          (e.length < 6 &&
            (e =
              "#" +
              (i = e.charAt(1)) +
              i +
              (s = e.charAt(2)) +
              s +
              (a = e.charAt(3)) +
              a +
              (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
          9 === e.length)
        )
          return [
            (h = parseInt(e.substr(1, 6), 16)) >> 16,
            (h >> 8) & Lt,
            h & Lt,
            parseInt(e.substr(7), 16) / 255,
          ];
        h = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & Lt, e & Lt];
      } else if ("hsl" === e.substr(0, 3))
        if (((h = f = e.match(it)), t)) {
          if (~e.indexOf("="))
            return (h = e.match(st)), r && h.length < 4 && (h[3] = 1), h;
        } else
          (o = (+h[0] % 360) / 360),
            (l = h[1] / 100),
            (i =
              2 * (d = h[2] / 100) -
              (s = d <= 0.5 ? d * (l + 1) : d + l - d * l)),
            3 < h.length && (h[3] *= 1),
            (h[0] = oe(o + 1 / 3, i, s)),
            (h[1] = oe(o, i, s)),
            (h[2] = oe(o - 1 / 3, i, s));
      else h = e.match(it) || zt.transparent;
      h = h.map(Number);
    }
    return (
      t &&
        !f &&
        ((i = h[0] / Lt),
        (s = h[1] / Lt),
        (a = h[2] / Lt),
        (d = ((c = Math.max(i, s, a)) + (u = Math.min(i, s, a))) / 2),
        c === u
          ? (o = l = 0)
          : ((p = c - u),
            (l = 0.5 < d ? p / (2 - c - u) : p / (c + u)),
            (o =
              c === i
                ? (s - a) / p + (s < a ? 6 : 0)
                : c === s
                ? (a - i) / p + 2
                : (i - s) / p + 4),
            (o *= 60)),
        (h[0] = ~~(o + 0.5)),
        (h[1] = ~~(100 * l + 0.5)),
        (h[2] = ~~(100 * d + 0.5))),
      r && h.length < 4 && (h[3] = 1),
      h
    );
  }
  function de(e) {
    var t = [],
      r = [],
      i = -1;
    return (
      e.split(Dt).forEach(function (e) {
        var s = e.match(nt) || [];
        t.push.apply(t, s), r.push((i += s.length + 1));
      }),
      (t.c = r),
      t
    );
  }
  function ce(e, t, r) {
    var i,
      s,
      n,
      a,
      o = "",
      l = (e + o).match(Dt),
      d = t ? "hsla(" : "rgba(",
      c = 0;
    if (!l) return e;
    if (
      ((l = l.map(function (e) {
        return (
          (e = le(e, t, 1)) &&
          d +
            (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) +
            ")"
        );
      })),
      r && ((n = de(e)), (i = r.c).join(o) !== n.c.join(o)))
    )
      for (a = (s = e.replace(Dt, "1").split(nt)).length - 1; c < a; c++)
        o +=
          s[c] +
          (~i.indexOf(c)
            ? l.shift() || d + "0,0,0,0)"
            : (n.length ? n : l.length ? l : r).shift());
    if (!s) for (a = (s = e.split(Dt)).length - 1; c < a; c++) o += s[c] + l[c];
    return o + s[a];
  }
  function ue(e) {
    var t,
      r = e.join(" ");
    if (((Dt.lastIndex = 0), Dt.test(r)))
      return (
        (t = It.test(r)),
        (e[1] = ce(e[1], t)),
        (e[0] = ce(e[0], t, de(e[1]))),
        !0
      );
  }
  function pe(e, t) {
    for (var r, i = e._first; i; )
      i instanceof Ut
        ? pe(i, t)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === t ||
          (i.timeline
            ? pe(i.timeline, t)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = t))),
        (i = i._next);
  }
  function fe(e, t, r, i) {
    void 0 === r &&
      (r = function (e) {
        return 1 - t(1 - e);
      }),
      void 0 === i &&
        (i = function (e) {
          return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
        });
    var s,
      n = { easeIn: t, easeOut: r, easeInOut: i };
    return (
      w(e, function (e) {
        for (var t in ((Bt[e] = ct[e] = n), (Bt[(s = e.toLowerCase())] = r), n))
          Bt[
            s + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
          ] = Bt[e + "." + t] = n[t];
      }),
      n
    );
  }
  function he(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function me(e, t, r) {
    function i(e) {
      return 1 === e ? 1 : s * Math.pow(2, -10 * e) * et((e - a) * n) + 1;
    }
    var s = 1 <= t ? t : 1,
      n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / Ue) * (Math.asin(1 / s) || 0),
      o =
        "out" === e
          ? i
          : "in" === e
          ? function (e) {
              return 1 - i(1 - e);
            }
          : he(i);
    return (
      (n = Ue / n),
      (o.config = function (t, r) {
        return me(e, t, r);
      }),
      o
    );
  }
  function ge(e, t) {
    function r(e) {
      return e ? --e * e * ((t + 1) * e + t) + 1 : 0;
    }
    void 0 === t && (t = 1.70158);
    var i =
      "out" === e
        ? r
        : "in" === e
        ? function (e) {
            return 1 - r(1 - e);
          }
        : he(r);
    return (
      (i.config = function (t) {
        return ge(e, t);
      }),
      i
    );
  }
  var ve,
    ye,
    we,
    be,
    xe,
    _e,
    Te,
    Ee,
    Se,
    Me,
    Ce,
    Pe,
    ke,
    Ae,
    Oe,
    Le,
    ze,
    De,
    Ie,
    $e,
    Re,
    Be,
    Xe,
    Ye,
    Fe,
    Ge,
    He,
    Ne,
    qe = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Ve = { duration: 0.5, overwrite: !1, delay: 0 },
    We = 1e8,
    je = 1 / We,
    Ue = 2 * Math.PI,
    Ke = Ue / 4,
    Qe = 0,
    Ze = Math.sqrt,
    Je = Math.cos,
    et = Math.sin,
    tt =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    rt = Array.isArray,
    it = /(?:-?\.?\d|\.)+/gi,
    st = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    at = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ot = /[+-]=-?[.\d]+/,
    lt = /[^,'"\[\]\s]+/gi,
    dt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ct = {},
    ut = { suppressEvents: !0, isStart: !0, kill: !1 },
    pt = { suppressEvents: !0, kill: !1 },
    ft = { suppressEvents: !0 },
    ht = {},
    mt = [],
    gt = {},
    vt = {},
    yt = {},
    wt = 30,
    bt = [],
    xt = "",
    _t = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    Tt = function (e, t) {
      var r = Math.floor((e /= t));
      return e && r === e ? r - 1 : r;
    },
    Et = function (e) {
      var t = e.data;
      return "isFromStart" === t || "isStart" === t;
    },
    St = { _start: 0, endTime: m, totalDuration: m },
    Mt = function e(t, r, s) {
      var n,
        a,
        o,
        l = t.labels,
        d = t._recent || St,
        c = t.duration() >= We ? d.endTime(!1) : t._dur;
      return i(r) && (isNaN(r) || r in l)
        ? ((a = r.charAt(0)),
          (o = "%" === r.substr(-1)),
          (n = r.indexOf("=")),
          "<" === a || ">" === a
            ? (0 <= n && (r = r.replace(/=/, "")),
              ("<" === a ? d._start : d.endTime(0 <= d._repeat)) +
                (parseFloat(r.substr(1)) || 0) *
                  (o ? (n < 0 ? d : s).totalDuration() / 100 : 1))
            : n < 0
            ? (r in l || (l[r] = c), l[r])
            : ((a = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
              o && s && (a = (a / 100) * (rt(s) ? s[0] : s).totalDuration()),
              1 < n ? e(t, r.substr(0, n - 1), s) + a : c + a))
        : null == r
        ? c
        : +r;
    },
    Ct = function (e, t, r) {
      return r < e ? e : t < r ? t : r;
    },
    Pt = [].slice,
    kt = function (e, t, r) {
      return we && !t && we.selector
        ? we.selector(e)
        : !i(e) || r || (!_e && Rt())
        ? rt(e)
          ? (function (e, t, r) {
              return (
                void 0 === r && (r = []),
                e.forEach(function (e) {
                  return (i(e) && !t) || K(e, 1)
                    ? r.push.apply(r, kt(e))
                    : r.push(e);
                }) || r
              );
            })(e, r)
          : K(e)
          ? Pt.call(e, 0)
          : e
          ? [e]
          : []
        : Pt.call((t || Te).querySelectorAll(e), 0);
    },
    At = function (e, t, r, i, s) {
      var n = t - e,
        a = i - r;
      return j(s, function (t) {
        return r + (((t - e) / n) * a || 0);
      });
    },
    Ot = function (e, t, r) {
      var i,
        s,
        n,
        a = e.vars,
        o = a[t],
        l = we,
        d = e._ctx;
      if (o)
        return (
          (i = a[t + "Params"]),
          (s = a.callbackScope || e),
          r && mt.length && E(),
          d && (we = d),
          (n = i ? o.apply(s, i) : o.call(s)),
          (we = l),
          n
        );
    },
    Lt = 255,
    zt = {
      aqua: [0, Lt, Lt],
      lime: [0, Lt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Lt],
      navy: [0, 0, 128],
      white: [Lt, Lt, Lt],
      olive: [128, 128, 0],
      yellow: [Lt, Lt, 0],
      orange: [Lt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Lt, 0, 0],
      pink: [Lt, 192, 203],
      cyan: [0, Lt, Lt],
      transparent: [Lt, Lt, Lt, 0],
    },
    Dt = (function () {
      var e,
        t =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (e in zt) t += "|" + e + "\\b";
      return new RegExp(t + ")", "gi");
    })(),
    It = /hsl[a]?\(/,
    $t =
      ((Ie = Date.now),
      ($e = 500),
      (Re = 33),
      (Be = Ie()),
      (Xe = Be),
      (Fe = Ye = 1e3 / 240),
      (Le = {
        time: 0,
        frame: 0,
        tick: function () {
          Ht(!0);
        },
        deltaRatio: function (e) {
          return ze / (1e3 / (e || 60));
        },
        wake: function () {
          Se &&
            (!_e &&
              d() &&
              ((xe = _e = window),
              (Te = xe.document || {}),
              (ct.gsap = $r),
              (xe.gsapVersions || (xe.gsapVersions = [])).push($r.version),
              u(Ee || xe.GreenSockGlobals || (!xe.gsap && xe) || {}),
              (Oe = xe.requestAnimationFrame)),
            ke && Le.sleep(),
            (Ae =
              Oe ||
              function (e) {
                return setTimeout(e, (Fe - 1e3 * Le.time + 1) | 0);
              }),
            (Pe = 1),
            Ht(2));
        },
        sleep: function () {
          (Oe ? xe.cancelAnimationFrame : clearTimeout)(ke), (Pe = 0), (Ae = m);
        },
        lagSmoothing: function (e, t) {
          ($e = e || 1 / 0), (Re = Math.min(t || 33, $e));
        },
        fps: function (e) {
          (Ye = 1e3 / (e || 240)), (Fe = 1e3 * Le.time + Ye);
        },
        add: function (e, t, r) {
          var i = t
            ? function (t, r, s, n) {
                e(t, r, s, n), Le.remove(i);
              }
            : e;
          return Le.remove(e), Ge[r ? "unshift" : "push"](i), Rt(), i;
        },
        remove: function (e, t) {
          ~(t = Ge.indexOf(e)) && Ge.splice(t, 1) && t <= De && De--;
        },
        _listeners: (Ge = []),
      })),
    Rt = function () {
      return !Pe && $t.wake();
    },
    Bt = {},
    Xt = /^[\d.\-M][\d.\-,\s]/,
    Yt = /["']/g,
    Ft = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Gt = function (e, t) {
      return (
        (e &&
          (s(e)
            ? e
            : Bt[e] ||
              (function (e) {
                var t = (e + "").split("("),
                  r = Bt[t[0]];
                return r && 1 < t.length && r.config
                  ? r.config.apply(
                      null,
                      ~e.indexOf("{")
                        ? [
                            (function (e) {
                              for (
                                var t,
                                  r,
                                  i,
                                  s = {},
                                  n = e.substr(1, e.length - 3).split(":"),
                                  a = n[0],
                                  o = 1,
                                  l = n.length;
                                o < l;
                                o++
                              )
                                (r = n[o]),
                                  (t =
                                    o !== l - 1
                                      ? r.lastIndexOf(",")
                                      : r.length),
                                  (i = r.substr(0, t)),
                                  (s[a] = isNaN(i)
                                    ? i.replace(Yt, "").trim()
                                    : +i),
                                  (a = r.substr(t + 1).trim());
                              return s;
                            })(t[1]),
                          ]
                        : (function (e) {
                            var t = e.indexOf("(") + 1,
                              r = e.indexOf(")"),
                              i = e.indexOf("(", t);
                            return e.substring(
                              t,
                              ~i && i < r ? e.indexOf(")", r + 1) : r
                            );
                          })(e)
                            .split(",")
                            .map(M)
                    )
                  : Bt._CE && Xt.test(e)
                  ? Bt._CE("", e)
                  : r;
              })(e))) ||
        t
      );
    };
  function Ht(e) {
    var t,
      r,
      i,
      s,
      n = Ie() - Xe,
      a = !0 === e;
    if (
      ($e < n && (Be += n - Re),
      (0 < (t = (i = (Xe += n) - Be) - Fe) || a) &&
        ((s = ++Le.frame),
        (ze = i - 1e3 * Le.time),
        (Le.time = i /= 1e3),
        (Fe += t + (Ye <= t ? 4 : Ye - t)),
        (r = 1)),
      a || (ke = Ae(Ht)),
      r)
    )
      for (De = 0; De < Ge.length; De++) Ge[De](i, ze, s, e);
  }
  function Nt(e) {
    return e < Ne
      ? He * e * e
      : e < 0.7272727272727273
      ? He * Math.pow(e - 1.5 / 2.75, 2) + 0.75
      : e < 0.9090909090909092
      ? He * (e -= 2.25 / 2.75) * e + 0.9375
      : He * Math.pow(e - 2.625 / 2.75, 2) + 0.984375;
  }
  w("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
    var r = t < 5 ? t + 1 : t;
    fe(
      e + ",Power" + (r - 1),
      t
        ? function (e) {
            return Math.pow(e, r);
          }
        : function (e) {
            return e;
          },
      function (e) {
        return 1 - Math.pow(1 - e, r);
      },
      function (e) {
        return e < 0.5
          ? Math.pow(2 * e, r) / 2
          : 1 - Math.pow(2 * (1 - e), r) / 2;
      }
    );
  }),
    (Bt.Linear.easeNone = Bt.none = Bt.Linear.easeIn),
    fe("Elastic", me("in"), me("out"), me()),
    (He = 7.5625),
    (Ne = 1 / 2.75),
    fe(
      "Bounce",
      function (e) {
        return 1 - Nt(1 - e);
      },
      Nt
    ),
    fe("Expo", function (e) {
      return e ? Math.pow(2, 10 * (e - 1)) : 0;
    }),
    fe("Circ", function (e) {
      return -(Ze(1 - e * e) - 1);
    }),
    fe("Sine", function (e) {
      return 1 === e ? 1 : 1 - Je(e * Ke);
    }),
    fe("Back", ge("in"), ge("out"), ge()),
    (Bt.SteppedEase =
      Bt.steps =
      ct.SteppedEase =
        {
          config: function (e, t) {
            void 0 === e && (e = 1);
            var r = 1 / e,
              i = e + (t ? 0 : 1),
              s = t ? 1 : 0;
            return function (e) {
              return (((i * Ct(0, 0.99999999, e)) | 0) + s) * r;
            };
          },
        }),
    (Ve.ease = Bt["quad.out"]),
    w(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (e) {
        return (xt += e + "," + e + "Params,");
      }
    );
  var qt,
    Vt = function (e, t) {
      (this.id = Qe++),
        ((e._gsap = this).target = e),
        (this.harness = t),
        (this.get = t ? t.get : y),
        (this.set = t ? t.getSetter : ur);
    },
    Wt =
      (((qt = jt.prototype).delay = function (e) {
        return e || 0 === e
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (qt.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? e + (e + this._rDelay) * this._repeat : e
            )
          : this.totalDuration() && this._dur;
      }),
      (qt.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            q(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (qt.totalTime = function (e, t) {
        if ((Rt(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Y(this, e), !r._dp || r.parent || F(r, this); r && r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && e < this._tDur) ||
              (this._ts < 0 && 0 < e) ||
              (!this._tDur && !e)) &&
            G(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !t) ||
            (this._initted && Math.abs(this._zTime) === je) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), S(this, e, t)),
          this
        );
      }),
      (qt.time = function (e, t) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + R(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              t
            )
          : this._time;
      }),
      (qt.totalProgress = function (e, t) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, t)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (qt.progress = function (e, t) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                R(this),
              t
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (qt.iteration = function (e, t) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * r, t)
          : this._repeat
          ? Tt(this._tTime, r) + 1
          : 1;
      }),
      (qt.timeScale = function (e) {
        if (!arguments.length) return this._rts === -je ? 0 : this._rts;
        if (this._rts === e) return this;
        var t =
          this.parent && this._ts ? B(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -je ? 0 : this._rts),
          this.totalTime(Ct(-this._delay, this._tDur, t), !0),
          X(this),
          (function (e) {
            for (var t = e.parent; t && t.parent; )
              (t._dirty = 1), t.totalDuration(), (t = t.parent);
            return e;
          })(this)
        );
      }),
      (qt.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Rt(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== je &&
                      (this._tTime -= je)
                  ))),
            this)
          : this._ps;
      }),
      (qt.startTime = function (e) {
        if (arguments.length) {
          this._start = e;
          var t = this.parent || this._dp;
          return (
            !t || (!t._sort && this.parent) || G(t, this, e - this._delay), this
          );
        }
        return this._start;
      }),
      (qt.endTime = function (e) {
        return (
          this._start +
          (l(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (qt.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? B(t.rawTime(e), this)
            : this._tTime
          : this._tTime;
      }),
      (qt.revert = function (e) {
        void 0 === e && (e = ft);
        var t = ye;
        return (
          (ye = e),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          "nested" !== this.data && !1 !== e.kill && this.kill(),
          (ye = t),
          this
        );
      }),
      (qt.globalTime = function (e) {
        for (var t = this, r = arguments.length ? e : t.rawTime(); t; )
          (r = t._start + r / (t._ts || 1)), (t = t._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(e)
          : r;
      }),
      (qt.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), V(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (qt.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return (this._rDelay = e), V(this), t ? this.time(t) : this;
        }
        return this._rDelay;
      }),
      (qt.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (qt.seek = function (e, t) {
        return this.totalTime(Mt(this, e), l(t));
      }),
      (qt.restart = function (e, t) {
        return this.play().totalTime(e ? -this._delay : 0, l(t));
      }),
      (qt.play = function (e, t) {
        return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
      }),
      (qt.reverse = function (e, t) {
        return (
          null != e && this.seek(e || this.totalDuration(), t),
          this.reversed(!0).paused(!1)
        );
      }),
      (qt.pause = function (e, t) {
        return null != e && this.seek(e, t), this.paused(!0);
      }),
      (qt.resume = function () {
        return this.paused(!1);
      }),
      (qt.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -je : 0)),
            this)
          : this._rts < 0;
      }),
      (qt.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -je), this;
      }),
      (qt.isActive = function () {
        var e,
          t = this.parent || this._dp,
          r = this._start;
        return !(
          t &&
          !(
            this._ts &&
            this._initted &&
            t.isActive() &&
            (e = t.rawTime(!0)) >= r &&
            e < this.endTime(!0) - je
          )
        );
      }),
      (qt.eventCallback = function (e, t, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (t
              ? ((i[e] = t),
                r && (i[e + "Params"] = r),
                "onUpdate" === e && (this._onUpdate = t))
              : delete i[e],
            this)
          : i[e];
      }),
      (qt.then = function (e) {
        var t = this;
        return new Promise(function (r) {
          function i() {
            var e = t.then;
            (t.then = null),
              s(n) && (n = n(t)) && (n.then || n === t) && (t.then = e),
              r(n),
              (t.then = e);
          }
          var n = s(e) ? e : C;
          (t._initted && 1 === t.totalProgress() && 0 <= t._ts) ||
          (!t._tTime && t._ts < 0)
            ? i()
            : (t._prom = i);
        });
      }),
      (qt.kill = function () {
        ae(this);
      }),
      jt);
  function jt(e) {
    (this.vars = e),
      (this._delay = +e.delay || 0),
      (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
        ((this._rDelay = e.repeatDelay || 0),
        (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
      (this._ts = 1),
      q(this, +e.duration, 1, 1),
      (this.data = e.data),
      we && (this._ctx = we).data.push(this),
      Pe || $t.wake();
  }
  P(Wt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -je,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ut = (function (e) {
    function a(t, i) {
      var s;
      return (
        void 0 === t && (t = {}),
        ((s = e.call(this, t) || this).labels = {}),
        (s.smoothChildTiming = !!t.smoothChildTiming),
        (s.autoRemoveChildren = !!t.autoRemoveChildren),
        (s._sort = l(t.sortChildren)),
        be && G(t.parent || be, r(s), i),
        t.reversed && s.reverse(),
        t.paused && s.paused(!0),
        t.scrollTrigger && H(r(s), t.scrollTrigger),
        s
      );
    }
    t(a, e);
    var o = a.prototype;
    return (
      (o.to = function (e, t, r) {
        return W(0, arguments, this), this;
      }),
      (o.from = function (e, t, r) {
        return W(1, arguments, this), this;
      }),
      (o.fromTo = function (e, t, r, i) {
        return W(2, arguments, this), this;
      }),
      (o.set = function (e, t, r) {
        return (
          (t.duration = 0),
          (t.parent = this),
          O(t).repeatDelay || (t.repeat = 0),
          (t.immediateRender = !!t.immediateRender),
          new nr(e, t, Mt(this, r), 1),
          this
        );
      }),
      (o.call = function (e, t, r) {
        return G(this, nr.delayedCall(0, e, t), r);
      }),
      (o.staggerTo = function (e, t, r, i, s, n, a) {
        return (
          (r.duration = t),
          (r.stagger = r.stagger || i),
          (r.onComplete = n),
          (r.onCompleteParams = a),
          (r.parent = this),
          new nr(e, r, Mt(this, s)),
          this
        );
      }),
      (o.staggerFrom = function (e, t, r, i, s, n, a) {
        return (
          (r.runBackwards = 1),
          (O(r).immediateRender = l(r.immediateRender)),
          this.staggerTo(e, t, r, i, s, n, a)
        );
      }),
      (o.staggerFromTo = function (e, t, r, i, s, n, a, o) {
        return (
          (i.startAt = r),
          (O(i).immediateRender = l(i.immediateRender)),
          this.staggerTo(e, t, i, s, n, a, o)
        );
      }),
      (o.render = function (e, t, r) {
        var i,
          s,
          n,
          a,
          o,
          l,
          d,
          c,
          u,
          p,
          f,
          h,
          m = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          v = this._dur,
          y = e <= 0 ? 0 : x(e),
          w = this._zTime < 0 != e < 0 && (this._initted || !v);
        if (
          (this !== be && g < y && 0 <= e && (y = g),
          y !== this._tTime || r || w)
        ) {
          if (
            (m !== this._time &&
              v &&
              ((y += this._time - m), (e += this._time - m)),
            (i = y),
            (u = this._start),
            (l = !(c = this._ts)),
            w && (v || (m = this._zTime), (!e && t) || (this._zTime = e)),
            this._repeat)
          ) {
            if (
              ((f = this._yoyo),
              (o = v + this._rDelay),
              this._repeat < -1 && e < 0)
            )
              return this.totalTime(100 * o + e, t, r);
            if (
              ((i = x(y % o)),
              y === g
                ? ((a = this._repeat), (i = v))
                : ((a = ~~(y / o)) && a === y / o && ((i = v), a--),
                  v < i && (i = v)),
              (p = Tt(this._tTime, o)),
              !m && this._tTime && p !== a && (p = a),
              f && 1 & a && ((i = v - i), (h = 1)),
              a !== p && !this._lock)
            ) {
              var b = f && 1 & p,
                _ = b === (f && 1 & a);
              if (
                (a < p && (b = !b),
                (m = b ? 0 : v),
                (this._lock = 1),
                (this.render(m || (h ? 0 : x(a * o)), t, !v)._lock = 0),
                (this._tTime = y),
                !t && this.parent && Ot(this, "onRepeat"),
                this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1),
                (m && m !== this._time) ||
                  l != !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((v = this._dur),
                (g = this._tDur),
                _ &&
                  ((this._lock = 2),
                  (m = b ? v : -1e-4),
                  this.render(m, !0),
                  this.vars.repeatRefresh && !h && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              pe(this, h);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (d = (function (e, t, r) {
                var i;
                if (t < r)
                  for (i = e._first; i && i._start <= r; ) {
                    if ("isPause" === i.data && i._start > t) return i;
                    i = i._next;
                  }
                else
                  for (i = e._last; i && i._start >= r; ) {
                    if ("isPause" === i.data && i._start < t) return i;
                    i = i._prev;
                  }
              })(this, x(m), x(i))) &&
              (y -= i - (i = d._start)),
            (this._tTime = y),
            (this._time = i),
            (this._act = !c),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = e),
              (m = 0)),
            !m && i && !t && (Ot(this, "onStart"), this._tTime !== y))
          )
            return this;
          if (m <= i && 0 <= e)
            for (s = this._first; s; ) {
              if (
                ((n = s._next), (s._act || i >= s._start) && s._ts && d !== s)
              ) {
                if (s.parent !== this) return this.render(e, t, r);
                if (
                  (s.render(
                    0 < s._ts
                      ? (i - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (i - s._start) * s._ts,
                    t,
                    r
                  ),
                  i !== this._time || (!this._ts && !l))
                ) {
                  (d = 0), n && (y += this._zTime = -je);
                  break;
                }
              }
              s = n;
            }
          else {
            s = this._last;
            for (var T = e < 0 ? e : i; s; ) {
              if (
                ((n = s._prev), (s._act || T <= s._end) && s._ts && d !== s)
              ) {
                if (s.parent !== this) return this.render(e, t, r);
                if (
                  (s.render(
                    0 < s._ts
                      ? (T - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (T - s._start) * s._ts,
                    t,
                    r || (ye && (s._initted || s._startAt))
                  ),
                  i !== this._time || (!this._ts && !l))
                ) {
                  (d = 0), n && (y += this._zTime = T ? -je : je);
                  break;
                }
              }
              s = n;
            }
          }
          if (
            d &&
            !t &&
            (this.pause(),
            (d.render(m <= i ? 0 : -je)._zTime = m <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = u), X(this), this.render(e, t, r);
          this._onUpdate && !t && Ot(this, "onUpdate", !0),
            ((y === g && this._tTime >= this.totalDuration()) || (!y && m)) &&
              ((u !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                this._lock ||
                ((!e && v) ||
                  !((y === g && 0 < this._ts) || (!y && this._ts < 0)) ||
                  D(this, 1),
                t ||
                  (e < 0 && !m) ||
                  (!y && !m && g) ||
                  (Ot(
                    this,
                    y === g && 0 <= e ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  !this._prom ||
                    (y < g && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (o.add = function (e, t) {
        var r = this;
        if ((n(t) || (t = Mt(this, t, e)), !(e instanceof Wt))) {
          if (rt(e))
            return (
              e.forEach(function (e) {
                return r.add(e, t);
              }),
              this
            );
          if (i(e)) return this.addLabel(e, t);
          if (!s(e)) return this;
          e = nr.delayedCall(0, e);
        }
        return this !== e ? G(this, e, t) : this;
      }),
      (o.getChildren = function (e, t, r, i) {
        void 0 === e && (e = !0),
          void 0 === t && (t = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -We);
        for (var s = [], n = this._first; n; )
          n._start >= i &&
            (n instanceof nr
              ? t && s.push(n)
              : (r && s.push(n),
                e && s.push.apply(s, n.getChildren(!0, t, r)))),
            (n = n._next);
        return s;
      }),
      (o.getById = function (e) {
        for (var t = this.getChildren(1, 1, 1), r = t.length; r--; )
          if (t[r].vars.id === e) return t[r];
      }),
      (o.remove = function (e) {
        return i(e)
          ? this.removeLabel(e)
          : s(e)
          ? this.killTweensOf(e)
          : (z(this, e),
            e === this._recent && (this._recent = this._last),
            I(this));
      }),
      (o.totalTime = function (t, r) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = x(
                $t.time -
                  (0 < this._ts
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            e.prototype.totalTime.call(this, t, r),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (o.addLabel = function (e, t) {
        return (this.labels[e] = Mt(this, t)), this;
      }),
      (o.removeLabel = function (e) {
        return delete this.labels[e], this;
      }),
      (o.addPause = function (e, t, r) {
        var i = nr.delayedCall(0, t || m, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), G(this, i, Mt(this, e))
        );
      }),
      (o.removePause = function (e) {
        var t = this._first;
        for (e = Mt(this, e); t; )
          t._start === e && "isPause" === t.data && D(t), (t = t._next);
      }),
      (o.killTweensOf = function (e, t, r) {
        for (var i = this.getTweensOf(e, r), s = i.length; s--; )
          Zt !== i[s] && i[s].kill(e, t);
        return this;
      }),
      (o.getTweensOf = function (e, t) {
        for (var r, i = [], s = kt(e), a = this._first, o = n(t); a; )
          a instanceof nr
            ? T(a._targets, s) &&
              (o
                ? (!Zt || (a._initted && a._ts)) &&
                  a.globalTime(0) <= t &&
                  a.globalTime(a.totalDuration()) > t
                : !t || a.isActive()) &&
              i.push(a)
            : (r = a.getTweensOf(s, t)).length && i.push.apply(i, r),
            (a = a._next);
        return i;
      }),
      (o.tweenTo = function (e, t) {
        t = t || {};
        var r,
          i = this,
          s = Mt(i, e),
          n = t.startAt,
          a = t.onStart,
          o = t.onStartParams,
          l = t.immediateRender,
          d = nr.to(
            i,
            P(
              {
                ease: t.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: s,
                overwrite: "auto",
                duration:
                  t.duration ||
                  Math.abs(
                    (s - (n && "time" in n ? n.time : i._time)) / i.timeScale()
                  ) ||
                  je,
                onStart: function () {
                  if ((i.pause(), !r)) {
                    var e =
                      t.duration ||
                      Math.abs(
                        (s - (n && "time" in n ? n.time : i._time)) /
                          i.timeScale()
                      );
                    d._dur !== e && q(d, e, 0, 1).render(d._time, !0, !0),
                      (r = 1);
                  }
                  a && a.apply(d, o || []);
                },
              },
              t
            )
          );
        return l ? d.render(0) : d;
      }),
      (o.tweenFromTo = function (e, t, r) {
        return this.tweenTo(t, P({ startAt: { time: Mt(this, e) } }, r));
      }),
      (o.recent = function () {
        return this._recent;
      }),
      (o.nextLabel = function (e) {
        return void 0 === e && (e = this._time), ne(this, Mt(this, e));
      }),
      (o.previousLabel = function (e) {
        return void 0 === e && (e = this._time), ne(this, Mt(this, e), 1);
      }),
      (o.currentLabel = function (e) {
        return arguments.length
          ? this.seek(e, !0)
          : this.previousLabel(this._time + je);
      }),
      (o.shiftChildren = function (e, t, r) {
        void 0 === r && (r = 0);
        for (var i, s = this._first, n = this.labels; s; )
          s._start >= r && ((s._start += e), (s._end += e)), (s = s._next);
        if (t) for (i in n) n[i] >= r && (n[i] += e);
        return I(this);
      }),
      (o.invalidate = function (t) {
        var r = this._first;
        for (this._lock = 0; r; ) r.invalidate(t), (r = r._next);
        return e.prototype.invalidate.call(this, t);
      }),
      (o.clear = function (e) {
        void 0 === e && (e = !0);
        for (var t, r = this._first; r; )
          (t = r._next), this.remove(r), (r = t);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          e && (this.labels = {}),
          I(this)
        );
      }),
      (o.totalDuration = function (e) {
        var t,
          r,
          i,
          s = 0,
          n = this,
          a = n._last,
          o = We;
        if (arguments.length)
          return n.timeScale(
            (n._repeat < 0 ? n.duration() : n.totalDuration()) /
              (n.reversed() ? -e : e)
          );
        if (n._dirty) {
          for (i = n.parent; a; )
            (t = a._prev),
              a._dirty && a.totalDuration(),
              o < (r = a._start) && n._sort && a._ts && !n._lock
                ? ((n._lock = 1), (G(n, a, r - a._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                a._ts &&
                ((s -= r),
                ((!i && !n._dp) || (i && i.smoothChildTiming)) &&
                  ((n._start += r / n._ts), (n._time -= r), (n._tTime -= r)),
                n.shiftChildren(-r, !1, -1 / 0),
                (o = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = t);
          q(n, n === be && n._time > s ? n._time : s, 1, 1), (n._dirty = 0);
        }
        return n._tDur;
      }),
      (a.updateRoot = function (e) {
        if ((be._ts && (S(be, B(e, be)), (Me = $t.frame)), $t.frame >= wt)) {
          wt += qe.autoSleep || 120;
          var t = be._first;
          if ((!t || !t._ts) && qe.autoSleep && $t._listeners.length < 2) {
            for (; t && !t._ts; ) t = t._next;
            t || $t.sleep();
          }
        }
      }),
      a
    );
  })(Wt);
  function Kt(e, t, r, n, a, l) {
    var d, c, u, p;
    if (
      vt[e] &&
      !1 !==
        (d = new vt[e]()).init(
          a,
          d.rawVars
            ? t[e]
            : (function (e, t, r, n, a) {
                if (
                  (s(e) && (e = rr(e, a, t, r, n)),
                  !o(e) || (e.style && e.nodeType) || rt(e) || tt(e))
                )
                  return i(e) ? rr(e, a, t, r, n) : e;
                var l,
                  d = {};
                for (l in e) d[l] = rr(e[l], a, t, r, n);
                return d;
              })(t[e], n, a, l, r),
          r,
          n,
          l
        ) &&
      ((r._pt = c = new wr(r._pt, a, e, 0, 1, d.render, d, 0, d.priority)),
      r !== Ce)
    )
      for (u = r._ptLookup[r._targets.indexOf(a)], p = d._props.length; p--; )
        u[d._props[p]] = c;
    return d;
  }
  function Qt(e, t, r, i) {
    var s,
      n,
      a = t.ease || i || "power1.inOut";
    if (rt(t))
      (n = r[e] || (r[e] = [])),
        t.forEach(function (e, r) {
          return n.push({ t: (r / (t.length - 1)) * 100, v: e, e: a });
        });
    else
      for (s in t)
        (n = r[s] || (r[s] = [])),
          "ease" === s || n.push({ t: parseFloat(e), v: t[s], e: a });
  }
  P(Ut.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Zt,
    Jt,
    er = function (e, t, r, n, a, o, l, d, c, u) {
      s(n) && (n = n(a || 0, e, o));
      var f,
        h = e[t],
        m =
          "get" !== r
            ? r
            : s(h)
            ? c
              ? e[
                  t.indexOf("set") || !s(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](c)
              : e[t]()
            : h,
        g = s(h) ? (c ? cr : dr) : lr;
      if (
        (i(n) &&
          (~n.indexOf("random(") && (n = se(n)),
          "=" === n.charAt(1) &&
            ((!(f = _(m, n) + (U(m) || 0)) && 0 !== f) || (n = f))),
        !u || m !== n || Jt)
      )
        return isNaN(m * n) || "" === n
          ? (h || t in e || p(t, n),
            function (e, t, r, i, s, n, a) {
              var o,
                l,
                d,
                c,
                u,
                p,
                f,
                h,
                m = new wr(this._pt, e, t, 0, 1, hr, null, s),
                g = 0,
                v = 0;
              for (
                m.b = r,
                  m.e = i,
                  r += "",
                  (f = ~(i += "").indexOf("random(")) && (i = se(i)),
                  n && (n((h = [r, i]), e, t), (r = h[0]), (i = h[1])),
                  l = r.match(at) || [];
                (o = at.exec(i));

              )
                (c = o[0]),
                  (u = i.substring(g, o.index)),
                  d ? (d = (d + 1) % 5) : "rgba(" === u.substr(-5) && (d = 1),
                  c !== l[v++] &&
                    ((p = parseFloat(l[v - 1]) || 0),
                    (m._pt = {
                      _next: m._pt,
                      p: u || 1 === v ? u : ",",
                      s: p,
                      c: "=" === c.charAt(1) ? _(p, c) - p : parseFloat(c) - p,
                      m: d && d < 4 ? Math.round : 0,
                    }),
                    (g = at.lastIndex));
              return (
                (m.c = g < i.length ? i.substring(g, i.length) : ""),
                (m.fp = a),
                (ot.test(i) || f) && (m.e = 0),
                (this._pt = m)
              );
            }.call(this, e, t, m, n, g, d || qe.stringFilter, c))
          : ((f = new wr(
              this._pt,
              e,
              t,
              +m || 0,
              n - (m || 0),
              "boolean" == typeof h ? fr : pr,
              0,
              g
            )),
            c && (f.fp = c),
            l && f.modifier(l, this, e),
            (this._pt = f));
    },
    tr = function e(t, r, i) {
      var s,
        n,
        a,
        o,
        d,
        c,
        u,
        p,
        f,
        h,
        m,
        y,
        w,
        b = t.vars,
        x = b.ease,
        _ = b.startAt,
        T = b.immediateRender,
        S = b.lazy,
        M = b.onUpdate,
        C = b.onUpdateParams,
        k = b.callbackScope,
        O = b.runBackwards,
        L = b.yoyoEase,
        z = b.keyframes,
        I = b.autoRevert,
        $ = t._dur,
        R = t._startAt,
        B = t._targets,
        X = t.parent,
        Y = X && "nested" === X.data ? X.vars.targets : B,
        F = "auto" === t._overwrite && !ve,
        G = t.timeline;
      if (
        (!G || (z && x) || (x = "none"),
        (t._ease = Gt(x, Ve.ease)),
        (t._yEase = L ? Ft(Gt(!0 === L ? x : L, Ve.ease)) : 0),
        L &&
          t._yoyo &&
          !t._repeat &&
          ((L = t._yEase), (t._yEase = t._ease), (t._ease = L)),
        (t._from = !G && !!b.runBackwards),
        !G || (z && !b.stagger))
      ) {
        if (
          ((y = (p = B[0] ? v(B[0]).harness : 0) && b[p.prop]),
          (s = A(b, ht)),
          R &&
            (R._zTime < 0 && R.progress(1),
            r < 0 && O && T && !I
              ? R.render(-1, !0)
              : R.revert(O && $ ? pt : ut),
            (R._lazy = 0)),
          _)
        ) {
          if (
            (D(
              (t._startAt = nr.set(
                B,
                P(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: X,
                    immediateRender: !0,
                    lazy: !R && l(S),
                    startAt: null,
                    delay: 0,
                    onUpdate: M,
                    onUpdateParams: C,
                    callbackScope: k,
                    stagger: 0,
                  },
                  _
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            r < 0 && (ye || (!T && !I)) && t._startAt.revert(pt),
            T && $ && r <= 0 && i <= 0)
          )
            return void (r && (t._zTime = r));
        } else if (O && $ && !R)
          if (
            (r && (T = !1),
            (a = P(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: T && !R && l(S),
                immediateRender: T,
                stagger: 0,
                parent: X,
              },
              s
            )),
            y && (a[p.prop] = y),
            D((t._startAt = nr.set(B, a))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            r < 0 && (ye ? t._startAt.revert(pt) : t._startAt.render(-1, !0)),
            (t._zTime = r),
            T)
          ) {
            if (!r) return;
          } else e(t._startAt, je, je);
        for (
          t._pt = t._ptCache = 0, S = ($ && l(S)) || (S && !$), n = 0;
          n < B.length;
          n++
        ) {
          if (
            ((u = (d = B[n])._gsap || g(B)[n]._gsap),
            (t._ptLookup[n] = h = {}),
            gt[u.id] && mt.length && E(),
            (m = Y === B ? n : Y.indexOf(d)),
            p &&
              !1 !== (f = new p()).init(d, y || s, t, m, Y) &&
              ((t._pt = o =
                new wr(t._pt, d, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (e) {
                h[e] = o;
              }),
              f.priority && (c = 1)),
            !p || y)
          )
            for (a in s)
              vt[a] && (f = Kt(a, s, t, m, d, Y))
                ? f.priority && (c = 1)
                : (h[a] = o =
                    er.call(t, d, a, "get", s[a], m, Y, 0, b.stringFilter));
          t._op && t._op[n] && t.kill(d, t._op[n]),
            F &&
              t._pt &&
              ((Zt = t),
              be.killTweensOf(d, h, t.globalTime(r)),
              (w = !t.parent),
              (Zt = 0)),
            t._pt && S && (gt[u.id] = 1);
        }
        c && yr(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = M),
        (t._initted = (!t._op || t._pt) && !w),
        z && r <= 0 && G.render(We, !0, !0);
    },
    rr = function (e, t, r, n, a) {
      return s(e)
        ? e.call(t, r, n, a)
        : i(e) && ~e.indexOf("random(")
        ? se(e)
        : e;
    },
    ir = xt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    sr = {};
  w(ir + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
    return (sr[e] = 1);
  });
  var nr = (function (e) {
    function s(t, i, s, a) {
      var d;
      "number" == typeof i && ((s.duration = i), (i = s), (s = null));
      var u,
        p,
        h,
        m,
        v,
        y,
        w,
        b,
        _ = (d = e.call(this, a ? i : O(i)) || this).vars,
        T = _.duration,
        E = _.delay,
        S = _.immediateRender,
        M = _.stagger,
        C = _.overwrite,
        k = _.keyframes,
        L = _.defaults,
        z = _.scrollTrigger,
        D = _.yoyoEase,
        I = i.parent || be,
        $ = (rt(t) || tt(t) ? n(t[0]) : "length" in i) ? [t] : kt(t);
      if (
        ((d._targets = $.length
          ? g($)
          : f(
              "GSAP target " + t + " not found. https://greensock.com",
              !qe.nullTargetWarn
            ) || []),
        (d._ptLookup = []),
        (d._overwrite = C),
        k || M || c(T) || c(E))
      ) {
        if (
          ((i = d.vars),
          (u = d.timeline =
            new Ut({
              data: "nested",
              defaults: L || {},
              targets: I && "nested" === I.data ? I.vars.targets : $,
            })).kill(),
          (u.parent = u._dp = r(d)),
          (u._start = 0),
          M || c(T) || c(E))
        ) {
          if (((m = $.length), (w = M && J(M)), o(M)))
            for (v in M) ~ir.indexOf(v) && ((b = b || {})[v] = M[v]);
          for (p = 0; p < m; p++)
            ((h = A(i, sr)).stagger = 0),
              D && (h.yoyoEase = D),
              b && _t(h, b),
              (y = $[p]),
              (h.duration = +rr(T, r(d), p, y, $)),
              (h.delay = (+rr(E, r(d), p, y, $) || 0) - d._delay),
              !M &&
                1 === m &&
                h.delay &&
                ((d._delay = E = h.delay), (d._start += E), (h.delay = 0)),
              u.to(y, h, w ? w(p, y, $) : 0),
              (u._ease = Bt.none);
          u.duration() ? (T = E = 0) : (d.timeline = 0);
        } else if (k) {
          O(P(u.vars.defaults, { ease: "none" })),
            (u._ease = Gt(k.ease || i.ease || "none"));
          var R,
            B,
            X,
            Y = 0;
          if (rt(k))
            k.forEach(function (e) {
              return u.to($, e, ">");
            }),
              u.duration();
          else {
            for (v in ((h = {}), k))
              "ease" === v || "easeEach" === v || Qt(v, k[v], h, k.easeEach);
            for (v in h)
              for (
                R = h[v].sort(function (e, t) {
                  return e.t - t.t;
                }),
                  p = Y = 0;
                p < R.length;
                p++
              )
                ((X = {
                  ease: (B = R[p]).e,
                  duration: ((B.t - (p ? R[p - 1].t : 0)) / 100) * T,
                })[v] = B.v),
                  u.to($, X, Y),
                  (Y += X.duration);
            u.duration() < T && u.to({}, { duration: T - u.duration() });
          }
        }
        T || d.duration((T = u.duration()));
      } else d.timeline = 0;
      return (
        !0 !== C || ve || ((Zt = r(d)), be.killTweensOf($), (Zt = 0)),
        G(I, r(d), s),
        i.reversed && d.reverse(),
        i.paused && d.paused(!0),
        (S ||
          (!T &&
            !k &&
            d._start === x(I._time) &&
            l(S) &&
            (function e(t) {
              return !t || (t._ts && e(t.parent));
            })(r(d)) &&
            "nested" !== I.data)) &&
          ((d._tTime = -je), d.render(Math.max(0, -E) || 0)),
        z && H(r(d), z),
        d
      );
    }
    t(s, e);
    var a = s.prototype;
    return (
      (a.render = function (e, t, r) {
        var i,
          s,
          n,
          a,
          o,
          l,
          d,
          c,
          u,
          p = this._time,
          f = this._tDur,
          h = this._dur,
          m = e < 0,
          g = f - je < e && !m ? f : e < je ? 0 : e;
        if (h) {
          if (
            g !== this._tTime ||
            !e ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != m)
          ) {
            if (((i = g), (c = this.timeline), this._repeat)) {
              if (((a = h + this._rDelay), this._repeat < -1 && m))
                return this.totalTime(100 * a + e, t, r);
              if (
                ((i = x(g % a)),
                g === f
                  ? ((n = this._repeat), (i = h))
                  : ((n = ~~(g / a)) && n === g / a && ((i = h), n--),
                    h < i && (i = h)),
                (l = this._yoyo && 1 & n) && ((u = this._yEase), (i = h - i)),
                (o = Tt(this._tTime, a)),
                i === p && !r && this._initted)
              )
                return (this._tTime = g), this;
              n !== o &&
                (c && this._yEase && pe(c, l),
                !this.vars.repeatRefresh ||
                  l ||
                  this._lock ||
                  ((this._lock = r = 1),
                  (this.render(x(a * n), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (N(this, m ? e : i, r, t, g)) return (this._tTime = 0), this;
              if (p !== this._time) return this;
              if (h !== this._dur) return this.render(e, t, r);
            }
            if (
              ((this._tTime = g),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = d = (u || this._ease)(i / h)),
              this._from && (this.ratio = d = 1 - d),
              i && !p && !t && (Ot(this, "onStart"), this._tTime !== g))
            )
              return this;
            for (s = this._pt; s; ) s.r(d, s.d), (s = s._next);
            (c &&
              c.render(
                e < 0 ? e : !i && l ? -je : c._dur * c._ease(i / this._dur),
                t,
                r
              )) ||
              (this._startAt && (this._zTime = e)),
              this._onUpdate &&
                !t &&
                (m && $(this, e, 0, r), Ot(this, "onUpdate")),
              this._repeat &&
                n !== o &&
                this.vars.onRepeat &&
                !t &&
                this.parent &&
                Ot(this, "onRepeat"),
              (g !== this._tDur && g) ||
                this._tTime !== g ||
                (m && !this._onUpdate && $(this, e, 0, !0),
                (!e && h) ||
                  !(
                    (g === this._tDur && 0 < this._ts) ||
                    (!g && this._ts < 0)
                  ) ||
                  D(this, 1),
                t ||
                  (m && !p) ||
                  !(g || p || l) ||
                  (Ot(this, g === f ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (g < f && 0 < this.timeScale()) ||
                    this._prom()));
          }
        } else
          !(function (e, t, r, i) {
            var s,
              n,
              a,
              o = e.ratio,
              l =
                t < 0 ||
                (!t &&
                  ((!e._start &&
                    (function e(t) {
                      var r = t.parent;
                      return (
                        r &&
                        r._ts &&
                        r._initted &&
                        !r._lock &&
                        (r.rawTime() < 0 || e(r))
                      );
                    })(e) &&
                    (e._initted || !Et(e))) ||
                    ((e._ts < 0 || e._dp._ts < 0) && !Et(e))))
                  ? 0
                  : 1,
              d = e._rDelay,
              c = 0;
            if (
              (d &&
                e._repeat &&
                ((c = Ct(0, e._tDur, t)),
                (n = Tt(c, d)),
                e._yoyo && 1 & n && (l = 1 - l),
                n !== Tt(e._tTime, d) &&
                  ((o = 1 - l),
                  e.vars.repeatRefresh && e._initted && e.invalidate())),
              l !== o || ye || i || e._zTime === je || (!t && e._zTime))
            ) {
              if (!e._initted && N(e, t, i, r, c)) return;
              for (
                a = e._zTime,
                  e._zTime = t || (r ? je : 0),
                  r = r || (t && !a),
                  e.ratio = l,
                  e._from && (l = 1 - l),
                  e._time = 0,
                  e._tTime = c,
                  s = e._pt;
                s;

              )
                s.r(l, s.d), (s = s._next);
              t < 0 && $(e, t, 0, !0),
                e._onUpdate && !r && Ot(e, "onUpdate"),
                c && e._repeat && !r && e.parent && Ot(e, "onRepeat"),
                (t >= e._tDur || t < 0) &&
                  e.ratio === l &&
                  (l && D(e, 1),
                  r ||
                    ye ||
                    (Ot(e, l ? "onComplete" : "onReverseComplete", !0),
                    e._prom && e._prom()));
            } else e._zTime || (e._zTime = t);
          })(this, e, t, r);
        return this;
      }),
      (a.targets = function () {
        return this._targets;
      }),
      (a.invalidate = function (t) {
        return (
          (t && this.vars.runBackwards) || (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          e.prototype.invalidate.call(this, t)
        );
      }),
      (a.resetTo = function (e, t, r, i) {
        Pe || $t.wake(), this._ts || this.play();
        var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || tr(this, s),
          (function (e, t, r, i, s, n, a) {
            var o,
              l,
              d,
              c,
              u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
            if (!u)
              for (
                u = e._ptCache[t] = [], d = e._ptLookup, c = e._targets.length;
                c--;

              ) {
                if ((o = d[c][t]) && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== t && o.fp !== t; ) o = o._next;
                if (!o)
                  return (Jt = 1), (e.vars[t] = "+=0"), tr(e, a), (Jt = 0), 1;
                u.push(o);
              }
            for (c = u.length; c--; )
              ((o = (l = u[c])._pt || l).s =
                (!i && 0 !== i) || s ? o.s + (i || 0) + n * o.c : i),
                (o.c = r - o.s),
                l.e && (l.e = b(r) + U(l.e)),
                l.b && (l.b = o.s + U(l.b));
          })(this, e, t, r, i, this._ease(s / this._dur), s)
            ? this.resetTo(e, t, r, i)
            : (Y(this, 0),
              this.parent ||
                L(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (a.kill = function (e, t) {
        if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
          return (this._lazy = this._pt = 0), this.parent ? ae(this) : this;
        if (this.timeline) {
          var r = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(e, t, Zt && !0 !== Zt.vars.overwrite)
              ._first || ae(this),
            this.parent &&
              r !== this.timeline.totalDuration() &&
              q(this, (this._dur * this.timeline._tDur) / r, 0, 1),
            this
          );
        }
        var s,
          n,
          a,
          o,
          l,
          d,
          c,
          u = this._targets,
          p = e ? kt(e) : u,
          f = this._ptLookup,
          h = this._pt;
        if (
          (!t || "all" === t) &&
          (function (e, t) {
            for (
              var r = e.length, i = r === t.length;
              i && r-- && e[r] === t[r];

            );
            return r < 0;
          })(u, p)
        )
          return "all" === t && (this._pt = 0), ae(this);
        for (
          s = this._op = this._op || [],
            "all" !== t &&
              (i(t) &&
                ((l = {}),
                w(t, function (e) {
                  return (l[e] = 1);
                }),
                (t = l)),
              (t = (function (e, t) {
                var r,
                  i,
                  s,
                  n,
                  a = e[0] ? v(e[0]).harness : 0,
                  o = a && a.aliases;
                if (!o) return t;
                for (i in ((r = _t({}, t)), o))
                  if ((i in r))
                    for (s = (n = o[i].split(",")).length; s--; )
                      r[n[s]] = r[i];
                return r;
              })(u, t))),
            c = u.length;
          c--;

        )
          if (~p.indexOf(u[c]))
            for (l in ((n = f[c]),
            "all" === t
              ? ((s[c] = t), (o = n), (a = {}))
              : ((a = s[c] = s[c] || {}), (o = t)),
            o))
              (d = n && n[l]) &&
                (("kill" in d.d && !0 !== d.d.kill(l)) || z(this, d, "_pt"),
                delete n[l]),
                "all" !== a && (a[l] = 1);
        return this._initted && !this._pt && h && ae(this), this;
      }),
      (s.to = function (e, t, r) {
        return new s(e, t, r);
      }),
      (s.from = function (e, t) {
        return W(1, arguments);
      }),
      (s.delayedCall = function (e, t, r, i) {
        return new s(t, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: e,
          onComplete: t,
          onReverseComplete: t,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i,
        });
      }),
      (s.fromTo = function (e, t, r) {
        return W(2, arguments);
      }),
      (s.set = function (e, t) {
        return (t.duration = 0), t.repeatDelay || (t.repeat = 0), new s(e, t);
      }),
      (s.killTweensOf = function (e, t, r) {
        return be.killTweensOf(e, t, r);
      }),
      s
    );
  })(Wt);
  function ar(e, t, r) {
    return e.setAttribute(t, r);
  }
  function or(e, t, r, i) {
    i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
  }
  P(nr.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    w("staggerTo,staggerFrom,staggerFromTo", function (e) {
      nr[e] = function () {
        var t = new Ut(),
          r = Pt.call(arguments, 0);
        return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r);
      };
    });
  var lr = function (e, t, r) {
      return (e[t] = r);
    },
    dr = function (e, t, r) {
      return e[t](r);
    },
    cr = function (e, t, r, i) {
      return e[t](i.fp, r);
    },
    ur = function (e, t) {
      return s(e[t]) ? dr : a(e[t]) && e.setAttribute ? ar : lr;
    },
    pr = function (e, t) {
      return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
    },
    fr = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    hr = function (e, t) {
      var r = t._pt,
        i = "";
      if (!e && t.b) i = t.b;
      else if (1 === e && t.e) i = t.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * e)
              : Math.round(1e4 * (r.s + r.c * e)) / 1e4) +
            i),
            (r = r._next);
        i += t.c;
      }
      t.set(t.t, t.p, i, t);
    },
    mr = function (e, t) {
      for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
    },
    gr = function (e, t, r, i) {
      for (var s, n = this._pt; n; )
        (s = n._next), n.p === i && n.modifier(e, t, r), (n = s);
    },
    vr = function (e) {
      for (var t, r, i = this._pt; i; )
        (r = i._next),
          (i.p === e && !i.op) || i.op === e
            ? z(this, i, "_pt")
            : i.dep || (t = 1),
          (i = r);
      return !t;
    },
    yr = function (e) {
      for (var t, r, i, s, n = e._pt; n; ) {
        for (t = n._next, r = i; r && r.pr > n.pr; ) r = r._next;
        (n._prev = r ? r._prev : s) ? (n._prev._next = n) : (i = n),
          (n._next = r) ? (r._prev = n) : (s = n),
          (n = t);
      }
      e._pt = i;
    },
    wr =
      ((br.prototype.modifier = function (e, t, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = or),
          (this.m = e),
          (this.mt = r),
          (this.tween = t);
      }),
      br);
  function br(e, t, r, i, s, n, a, o, l) {
    (this.t = t),
      (this.s = i),
      (this.c = s),
      (this.p = r),
      (this.r = n || pr),
      (this.d = a || this),
      (this.set = o || lr),
      (this.pr = l || 0),
      (this._next = e) && (e._prev = this);
  }
  function xr(e) {
    return (Sr[e] || Mr).map(function (e) {
      return e();
    });
  }
  function _r() {
    var e = Date.now(),
      t = [];
    2 < e - Cr &&
      (xr("matchMediaInit"),
      Er.forEach(function (e) {
        var r,
          i,
          s,
          n,
          a = e.queries,
          o = e.conditions;
        for (i in a)
          (r = xe.matchMedia(a[i]).matches) && (s = 1),
            r !== o[i] && ((o[i] = r), (n = 1));
        n && (e.revert(), s && t.push(e));
      }),
      xr("matchMediaRevert"),
      t.forEach(function (e) {
        return e.onMatch(e);
      }),
      (Cr = e),
      xr("matchMedia"));
  }
  w(
    xt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (e) {
      return (ht[e] = 1);
    }
  ),
    (ct.TweenMax = ct.TweenLite = nr),
    (ct.TimelineLite = ct.TimelineMax = Ut),
    (be = new Ut({
      sortChildren: !1,
      defaults: Ve,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (qe.stringFilter = ue);
  var Tr,
    Er = [],
    Sr = {},
    Mr = [],
    Cr = 0,
    Pr =
      (((Tr = kr.prototype).add = function (e, t, r) {
        function i() {
          var e,
            i = we,
            a = n.selector;
          return (
            i && i !== n && i.data.push(n),
            r && (n.selector = Q(r)),
            (we = n),
            s((e = t.apply(n, arguments))) && n._r.push(e),
            (we = i),
            (n.selector = a),
            (n.isReverted = !1),
            e
          );
        }
        s(e) && ((r = t), (t = e), (e = s));
        var n = this;
        return (n.last = i), e === s ? i(n) : e ? (n[e] = i) : i;
      }),
      (Tr.ignore = function (e) {
        var t = we;
        (we = null), e(this), (we = t);
      }),
      (Tr.getTweens = function () {
        var e = [];
        return (
          this.data.forEach(function (t) {
            return t instanceof kr
              ? e.push.apply(e, t.getTweens())
              : t instanceof nr &&
                  !(t.parent && "nested" === t.parent.data) &&
                  e.push(t);
          }),
          e
        );
      }),
      (Tr.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (Tr.kill = function (e, t) {
        var r = this;
        if (e) {
          var i = this.getTweens();
          this.data.forEach(function (e) {
            "isFlip" === e.data &&
              (e.revert(),
              e.getChildren(!0, !0, !1).forEach(function (e) {
                return i.splice(i.indexOf(e), 1);
              }));
          }),
            i
              .map(function (e) {
                return { g: e.globalTime(0), t: e };
              })
              .sort(function (e, t) {
                return t.g - e.g || -1;
              })
              .forEach(function (t) {
                return t.t.revert(e);
              }),
            this.data.forEach(function (t) {
              return !(t instanceof Wt) && t.revert && t.revert(e);
            }),
            this._r.forEach(function (t) {
              return t(e, r);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (e) {
            return e.kill && e.kill();
          });
        if ((this.clear(), t)) {
          var s = Er.indexOf(this);
          ~s && Er.splice(s, 1);
        }
      }),
      (Tr.revert = function (e) {
        this.kill(e || {});
      }),
      kr);
  function kr(e, t) {
    (this.selector = t && Q(t)),
      (this.data = []),
      (this._r = []),
      (this.isReverted = !1),
      e && this.add(e);
  }
  var Ar,
    Or =
      (((Ar = Lr.prototype).add = function (e, t, r) {
        o(e) || (e = { matches: e });
        var i,
          s,
          n,
          a = new Pr(0, r || this.scope),
          l = (a.conditions = {});
        for (s in (this.contexts.push(a),
        (t = a.add("onMatch", t)),
        (a.queries = e)))
          "all" === s
            ? (n = 1)
            : (i = xe.matchMedia(e[s])) &&
              (Er.indexOf(a) < 0 && Er.push(a),
              (l[s] = i.matches) && (n = 1),
              i.addListener
                ? i.addListener(_r)
                : i.addEventListener("change", _r));
        return n && t(a), this;
      }),
      (Ar.revert = function (e) {
        this.kill(e || {});
      }),
      (Ar.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      Lr);
  function Lr(e) {
    (this.contexts = []), (this.scope = e);
  }
  var zr = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      t.forEach(function (e) {
        return (function (e) {
          var t = (e = (!e.name && e.default) || e).name,
            r = s(e),
            i =
              t && !r && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            n = {
              init: m,
              render: mr,
              add: er,
              kill: vr,
              modifier: gr,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: ur,
              aliases: {},
              register: 0,
            };
          if ((Rt(), e !== i)) {
            if (vt[t]) return;
            P(i, P(A(e, n), a)),
              _t(i.prototype, _t(n, A(e, a))),
              (vt[(i.prop = t)] = i),
              e.targetTest && (bt.push(i), (ht[t] = 1)),
              (t =
                ("css" === t
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          h(t, i), e.register && e.register($r, i, wr);
        })(e);
      });
    },
    timeline: function (e) {
      return new Ut(e);
    },
    getTweensOf: function (e, t) {
      return be.getTweensOf(e, t);
    },
    getProperty: function (e, t, r, s) {
      i(e) && (e = kt(e)[0]);
      var n = v(e || {}).get,
        a = r ? C : M;
      return (
        "native" === r && (r = ""),
        e
          ? t
            ? a(((vt[t] && vt[t].get) || n)(e, t, r, s))
            : function (t, r, i) {
                return a(((vt[t] && vt[t].get) || n)(e, t, r, i));
              }
          : e
      );
    },
    quickSetter: function (e, t, r) {
      if (1 < (e = kt(e)).length) {
        var i = e.map(function (e) {
            return $r.quickSetter(e, t, r);
          }),
          s = i.length;
        return function (e) {
          for (var t = s; t--; ) i[t](e);
        };
      }
      e = e[0] || {};
      var n = vt[t],
        a = v(e),
        o = (a.harness && (a.harness.aliases || {})[t]) || t,
        l = n
          ? function (t) {
              var i = new n();
              (Ce._pt = 0),
                i.init(e, r ? t + r : t, Ce, 0, [e]),
                i.render(1, i),
                Ce._pt && mr(1, Ce);
            }
          : a.set(e, o);
      return n
        ? l
        : function (t) {
            return l(e, o, r ? t + r : t, a, 1);
          };
    },
    quickTo: function (e, t, r) {
      function i(e, r, i) {
        return n.resetTo(t, e, r, i);
      }
      var s,
        n = $r.to(
          e,
          _t((((s = {})[t] = "+=0.1"), (s.paused = !0), s), r || {})
        );
      return (i.tween = n), i;
    },
    isTweening: function (e) {
      return 0 < be.getTweensOf(e, !0).length;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Gt(e.ease, Ve.ease)), k(Ve, e || {});
    },
    config: function (e) {
      return k(qe, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        r = e.effect,
        i = e.plugins,
        s = e.defaults,
        n = e.extendTimeline;
      (i || "").split(",").forEach(function (e) {
        return (
          e && !vt[e] && !ct[e] && f(t + " effect requires " + e + " plugin.")
        );
      }),
        (yt[t] = function (e, t, i) {
          return r(kt(e), P(t || {}, s), i);
        }),
        n &&
          (Ut.prototype[t] = function (e, r, i) {
            return this.add(yt[t](e, o(r) ? r : (i = r) && {}, this), i);
          });
    },
    registerEase: function (e, t) {
      Bt[e] = Gt(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Gt(e, t) : Bt;
    },
    getById: function (e) {
      return be.getById(e);
    },
    exportRoot: function (e, t) {
      void 0 === e && (e = {});
      var r,
        i,
        s = new Ut(e);
      for (
        s.smoothChildTiming = l(e.smoothChildTiming),
          be.remove(s),
          s._dp = 0,
          s._time = s._tTime = be._time,
          r = be._first;
        r;

      )
        (i = r._next),
          (!t &&
            !r._dur &&
            r instanceof nr &&
            r.vars.onComplete === r._targets[0]) ||
            G(s, r, r._start - r._delay),
          (r = i);
      return G(be, s, 0), s;
    },
    context: function (e, t) {
      return e ? new Pr(e, t) : we;
    },
    matchMedia: function (e) {
      return new Or(e);
    },
    matchMediaRefresh: function () {
      return (
        Er.forEach(function (e) {
          var t,
            r,
            i = e.conditions;
          for (r in i) i[r] && ((i[r] = !1), (t = 1));
          t && e.revert();
        }) || _r()
      );
    },
    addEventListener: function (e, t) {
      var r = Sr[e] || (Sr[e] = []);
      ~r.indexOf(t) || r.push(t);
    },
    removeEventListener: function (e, t) {
      var r = Sr[e],
        i = r && r.indexOf(t);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function e(t, r, i) {
        var s = r - t;
        return rt(t)
          ? ie(t, e(0, t.length), r)
          : j(i, function (e) {
              return ((s + ((e - t) % s)) % s) + t;
            });
      },
      wrapYoyo: function e(t, r, i) {
        var s = r - t,
          n = 2 * s;
        return rt(t)
          ? ie(t, e(0, t.length - 1), r)
          : j(i, function (e) {
              return t + (s < (e = (n + ((e - t) % n)) % n || 0) ? n - e : e);
            });
      },
      distribute: J,
      random: re,
      snap: te,
      normalize: function (e, t, r) {
        return At(e, t, 0, 1, r);
      },
      getUnit: U,
      clamp: function (e, t, r) {
        return j(r, function (r) {
          return Ct(e, t, r);
        });
      },
      splitColor: le,
      toArray: kt,
      selector: Q,
      mapRange: At,
      pipe: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return function (e) {
          return t.reduce(function (e, t) {
            return t(e);
          }, e);
        };
      },
      unitize: function (e, t) {
        return function (r) {
          return e(parseFloat(r)) + (t || U(r));
        };
      },
      interpolate: function e(t, r, s, n) {
        var a = isNaN(t + r)
          ? 0
          : function (e) {
              return (1 - e) * t + e * r;
            };
        if (!a) {
          var o,
            l,
            d,
            c,
            u,
            p = i(t),
            f = {};
          if ((!0 === s && (n = 1) && (s = null), p))
            (t = { p: t }), (r = { p: r });
          else if (rt(t) && !rt(r)) {
            for (d = [], c = t.length, u = c - 2, l = 1; l < c; l++)
              d.push(e(t[l - 1], t[l]));
            c--,
              (a = function (e) {
                e *= c;
                var t = Math.min(u, ~~e);
                return d[t](e - t);
              }),
              (s = r);
          } else n || (t = _t(rt(t) ? [] : {}, t));
          if (!d) {
            for (o in r) er.call(f, t, o, "get", r[o]);
            a = function (e) {
              return mr(e, f) || (p ? t.p : t);
            };
          }
        }
        return j(s, a);
      },
      shuffle: Z,
    },
    install: u,
    effects: yt,
    ticker: $t,
    updateRoot: Ut.updateRoot,
    plugins: vt,
    globalTimeline: be,
    core: {
      PropTween: wr,
      globals: h,
      Tween: nr,
      Timeline: Ut,
      Animation: Wt,
      getCache: v,
      _removeLinkedListItem: z,
      reverting: function () {
        return ye;
      },
      context: function (e) {
        return e && we && (we.data.push(e), (e._ctx = we)), we;
      },
      suppressOverwrites: function (e) {
        return (ve = e);
      },
    },
  };
  function Dr(e, t) {
    for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
      r = r._next;
    return r;
  }
  function Ir(e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (e, r, s) {
        s._onInit = function (e) {
          var s, n;
          if (
            (i(r) &&
              ((s = {}),
              w(r, function (e) {
                return (s[e] = 1);
              }),
              (r = s)),
            t)
          ) {
            for (n in ((s = {}), r)) s[n] = t(r[n]);
            r = s;
          }
          !(function (e, t) {
            var r,
              i,
              s,
              n = e._targets;
            for (r in t)
              for (i = n.length; i--; )
                (s = (s = e._ptLookup[i][r]) && s.d) &&
                  (s._pt && (s = Dr(s, r)),
                  s && s.modifier && s.modifier(t[r], e, n[i], r));
          })(e, r);
        };
      },
    };
  }
  w("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
    return (zr[e] = nr[e]);
  }),
    $t.add(Ut.updateRoot),
    (Ce = zr.to({}, { duration: 0 }));
  var $r =
    zr.registerPlugin(
      {
        name: "attr",
        init: function (e, t, r, i, s) {
          var n, a, o;
          for (n in ((this.tween = r), t))
            (o = e.getAttribute(n) || ""),
              ((a = this.add(
                e,
                "setAttribute",
                (o || 0) + "",
                t[n],
                i,
                s,
                0,
                0,
                n
              )).op = n),
              (a.b = o),
              this._props.push(n);
        },
        render: function (e, t) {
          for (var r = t._pt; r; )
            ye ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var r = t.length; r--; )
            this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Ir("roundProps", ee),
      Ir("modifiers"),
      Ir("snap", te)
    ) || zr;
  function Rr(e, t) {
    return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
  }
  function Br(e, t) {
    return t.set(
      t.t,
      t.p,
      1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
      t
    );
  }
  function Xr(e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
      t
    );
  }
  function Yr(e, t) {
    var r = t.s + t.c * e;
    t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
  }
  function Fr(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  }
  function Gr(e, t) {
    return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
  }
  function Hr(e, t, r) {
    return (e.style[t] = r);
  }
  function Nr(e, t, r) {
    return e.style.setProperty(t, r);
  }
  function qr(e, t, r) {
    return (e._gsap[t] = r);
  }
  function Vr(e, t, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  }
  function Wr(e, t, r, i, s) {
    var n = e._gsap;
    (n.scaleX = n.scaleY = r), n.renderTransform(s, n);
  }
  function jr(e, t, r, i, s) {
    var n = e._gsap;
    (n[t] = r), n.renderTransform(s, n);
  }
  function Ur(e, t) {
    var r = this,
      i = this.target,
      s = i.style;
    if (e in Vi) {
      if (
        ((this.tfm = this.tfm || {}),
        "transform" !== e &&
          (~(e = Ji[e] || e).indexOf(",")
            ? e.split(",").forEach(function (e) {
                return (r.tfm[e] = as(i, e));
              })
            : (this.tfm[e] = i._gsap.x ? i._gsap[e] : as(i, e))),
        0 <= this.props.indexOf(es))
      )
        return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(ts, t, "")),
        (e = es);
    }
    (s || t) && this.props.push(e, t, s[e]);
  }
  function Kr(e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  }
  function Qr() {
    var e,
      t,
      r = this.props,
      i = this.target,
      s = i.style,
      n = i._gsap;
    for (e = 0; e < r.length; e += 3)
      r[e + 1]
        ? (i[r[e]] = r[e + 2])
        : r[e + 2]
        ? (s[r[e]] = r[e + 2])
        : s.removeProperty(r[e].replace(Ki, "-$1").toLowerCase());
    if (this.tfm) {
      for (t in this.tfm) n[t] = this.tfm[t];
      n.svg &&
        (n.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        !(e = Mi()) || e.isStart || s[es] || (Kr(s), (n.uncache = 1));
    }
  }
  function Zr(e, t) {
    var r = { target: e, props: [], revert: Qr, save: Ur };
    return (
      t &&
        t.split(",").forEach(function (e) {
          return r.save(e);
        }),
      r
    );
  }
  function Jr(e, t) {
    var r = xi.createElementNS
      ? xi.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : xi.createElement(e);
    return r.style ? r : xi.createElement(e);
  }
  function ei(e, t, r) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(Ki, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!r && ei(e, is(t) || t, 1)) ||
      ""
    );
  }
  function ti() {
    "undefined" != typeof window &&
      window.document &&
      ((bi = window),
      (xi = bi.document),
      (_i = xi.documentElement),
      (Ei = Jr("div") || { style: {} }),
      Jr("div"),
      (es = is(es)),
      (ts = es + "Origin"),
      (Ei.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ci = !!is("perspective")),
      (Mi = $r.core.reverting),
      (Ti = 1));
  }
  function ri(e) {
    var t,
      r = Jr(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      s = this.nextSibling,
      n = this.style.cssText;
    if (
      (_i.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (t = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = ri);
      } catch (e) {}
    else this._gsapBBox && (t = this._gsapBBox());
    return (
      i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
      _i.removeChild(r),
      (this.style.cssText = n),
      t
    );
  }
  function ii(e, t) {
    for (var r = t.length; r--; )
      if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
  }
  function si(e) {
    var t;
    try {
      t = e.getBBox();
    } catch (r) {
      t = ri.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === ri || (t = ri.call(e, !0)),
      !t || t.width || t.x || t.y
        ? t
        : {
            x: +ii(e, ["x", "cx", "x1"]) || 0,
            y: +ii(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function ni(e) {
    return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !si(e));
  }
  function ai(e, t) {
    if (t) {
      var r = e.style;
      t in Vi && t !== ts && (t = es),
        r.removeProperty
          ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
              (t = "-" + t),
            r.removeProperty(t.replace(Ki, "-$1").toLowerCase()))
          : r.removeAttribute(t);
    }
  }
  function oi(e, t, r, i, s, n) {
    var a = new wr(e._pt, t, r, 0, 1, n ? Gr : Fr);
    return ((e._pt = a).b = i), (a.e = s), e._props.push(r), a;
  }
  function li(e, t, r, i) {
    var s,
      n,
      a,
      o,
      l = parseFloat(r) || 0,
      d = (r + "").trim().substr((l + "").length) || "px",
      c = Ei.style,
      u = Qi.test(t),
      p = "svg" === e.tagName.toLowerCase(),
      f = (p ? "client" : "offset") + (u ? "Width" : "Height"),
      h = "px" === i,
      m = "%" === i;
    return i === d || !l || ss[i] || ss[d]
      ? l
      : ("px" === d || h || (l = li(e, t, r, "px")),
        (o = e.getCTM && ni(e)),
        (!m && "%" !== d) || (!Vi[t] && !~t.indexOf("adius"))
          ? ((c[u ? "width" : "height"] = 100 + (h ? d : i)),
            (n =
              ~t.indexOf("adius") || ("em" === i && e.appendChild && !p)
                ? e
                : e.parentNode),
            o && (n = (e.ownerSVGElement || {}).parentNode),
            (n && n !== xi && n.appendChild) || (n = xi.body),
            (a = n._gsap) &&
            m &&
            a.width &&
            u &&
            a.time === $t.time &&
            !a.uncache
              ? b((l / a.width) * 100)
              : ((!m && "%" !== d) ||
                  ns[ei(n, "display")] ||
                  (c.position = ei(e, "position")),
                n === e && (c.position = "static"),
                n.appendChild(Ei),
                (s = Ei[f]),
                n.removeChild(Ei),
                (c.position = "absolute"),
                u && m && (((a = v(n)).time = $t.time), (a.width = n[f])),
                b(h ? (s * l) / 100 : s && l ? (100 / s) * l : 0)))
          : ((s = o ? e.getBBox()[u ? "width" : "height"] : e[f]),
            b(m ? (l / s) * 100 : (l / 100) * s)));
  }
  function di(e, t, r, i) {
    if (!r || "none" === r) {
      var s = is(t, e, 1),
        n = s && ei(e, s, 1);
      n && n !== r
        ? ((t = s), (r = n))
        : "borderColor" === t && (r = ei(e, "borderTopColor"));
    }
    var a,
      o,
      l,
      d,
      c,
      u,
      p,
      f,
      h,
      m,
      g,
      v = new wr(this._pt, e.style, t, 0, 1, hr),
      y = 0,
      w = 0;
    if (
      ((v.b = r),
      (v.e = i),
      (r += ""),
      "auto" == (i += "") &&
        ((e.style[t] = i), (i = ei(e, t) || i), (e.style[t] = r)),
      ue((a = [r, i])),
      (i = a[1]),
      (l = (r = a[0]).match(nt) || []),
      (i.match(nt) || []).length)
    ) {
      for (; (o = nt.exec(i)); )
        (p = o[0]),
          (h = i.substring(y, o.index)),
          c
            ? (c = (c + 1) % 5)
            : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) || (c = 1),
          p !== (u = l[w++] || "") &&
            ((d = parseFloat(u) || 0),
            (g = u.substr((d + "").length)),
            "=" === p.charAt(1) && (p = _(d, p) + g),
            (f = parseFloat(p)),
            (m = p.substr((f + "").length)),
            (y = nt.lastIndex - m.length),
            m ||
              ((m = m || qe.units[t] || g),
              y === i.length && ((i += m), (v.e += m))),
            g !== m && (d = li(e, t, u, m) || 0),
            (v._pt = {
              _next: v._pt,
              p: h || 1 === w ? h : ",",
              s: d,
              c: f - d,
              m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
            }));
      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === t && "none" === i ? Gr : Fr;
    return ot.test(i) && (v.e = 0), (this._pt = v);
  }
  function ci(e) {
    var t = e.split(" "),
      r = t[0],
      i = t[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) ||
        ((e = r), (r = i), (i = e)),
      (t[0] = os[r] || r),
      (t[1] = os[i] || i),
      t.join(" ")
    );
  }
  function ui(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var r,
        i,
        s,
        n = t.t,
        a = n.style,
        o = t.u,
        l = n._gsap;
      if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
      else
        for (s = (o = o.split(",")).length; -1 < --s; )
          (r = o[s]),
            Vi[r] && ((i = 1), (r = "transformOrigin" === r ? ts : es)),
            ai(n, r);
      i &&
        (ai(n, es),
        l &&
          (l.svg && n.removeAttribute("transform"),
          us(n, 1),
          (l.uncache = 1),
          Kr(a)));
    }
  }
  function pi(e) {
    return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
  }
  function fi(e) {
    var t = ei(e, es);
    return pi(t) ? ds : t.substr(7).match(st).map(b);
  }
  function hi(e, t) {
    var r,
      i,
      s,
      n,
      a = e._gsap || v(e),
      o = e.style,
      l = fi(e);
    return a.svg && e.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (l = [
          (s = e.transform.baseVal.consolidate().matrix).a,
          s.b,
          s.c,
          s.d,
          s.e,
          s.f,
        ]).join(",")
        ? ds
        : l
      : (l !== ds ||
          e.offsetParent ||
          e === _i ||
          a.svg ||
          ((s = o.display),
          (o.display = "block"),
          ((r = e.parentNode) && e.offsetParent) ||
            ((n = 1), (i = e.nextElementSibling), _i.appendChild(e)),
          (l = fi(e)),
          s ? (o.display = s) : ai(e, "display"),
          n &&
            (i
              ? r.insertBefore(e, i)
              : r
              ? r.appendChild(e)
              : _i.removeChild(e))),
        t && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
  }
  function mi(e, t, r, i, s, n) {
    var a,
      o,
      l,
      d = e._gsap,
      c = s || hi(e, !0),
      u = d.xOrigin || 0,
      p = d.yOrigin || 0,
      f = d.xOffset || 0,
      h = d.yOffset || 0,
      m = c[0],
      g = c[1],
      v = c[2],
      y = c[3],
      w = c[4],
      b = c[5],
      x = t.split(" "),
      _ = parseFloat(x[0]) || 0,
      T = parseFloat(x[1]) || 0;
    r
      ? c !== ds &&
        (o = m * y - g * v) &&
        ((l = _ * (-g / o) + T * (m / o) - (m * b - g * w) / o),
        (_ = _ * (y / o) + T * (-v / o) + (v * b - y * w) / o),
        (T = l))
      : ((_ = (a = si(e)).x + (~x[0].indexOf("%") ? (_ / 100) * a.width : _)),
        (T = a.y + (~(x[1] || x[0]).indexOf("%") ? (T / 100) * a.height : T))),
      i || (!1 !== i && d.smooth)
        ? ((w = _ - u),
          (b = T - p),
          (d.xOffset = f + (w * m + b * v) - w),
          (d.yOffset = h + (w * g + b * y) - b))
        : (d.xOffset = d.yOffset = 0),
      (d.xOrigin = _),
      (d.yOrigin = T),
      (d.smooth = !!i),
      (d.origin = t),
      (d.originIsAbsolute = !!r),
      (e.style[ts] = "0px 0px"),
      n &&
        (oi(n, d, "xOrigin", u, _),
        oi(n, d, "yOrigin", p, T),
        oi(n, d, "xOffset", f, d.xOffset),
        oi(n, d, "yOffset", h, d.yOffset)),
      e.setAttribute("data-svg-origin", _ + " " + T);
  }
  function gi(e, t, r) {
    var i = U(t);
    return b(parseFloat(t) + parseFloat(li(e, "x", r + "px", i))) + i;
  }
  function vi(e, t, r, s, n) {
    var a,
      o,
      l = 360,
      d = i(n),
      c = parseFloat(n) * (d && ~n.indexOf("rad") ? Wi : 1) - s,
      u = s + c + "deg";
    return (
      d &&
        ("short" === (a = n.split("_")[1]) &&
          (c %= l) != c % 180 &&
          (c += c < 0 ? l : -l),
        "cw" === a && c < 0
          ? (c = ((c + 36e9) % l) - ~~(c / l) * l)
          : "ccw" === a && 0 < c && (c = ((c - 36e9) % l) - ~~(c / l) * l)),
      (e._pt = o = new wr(e._pt, t, r, s, c, Br)),
      (o.e = u),
      (o.u = "deg"),
      e._props.push(r),
      o
    );
  }
  function yi(e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  }
  function wi(e, t, r) {
    var i,
      s,
      n,
      a,
      o,
      l,
      d,
      c = yi({}, r._gsap),
      u = r.style;
    for (s in (c.svg
      ? ((n = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (u[es] = t),
        (i = us(r, 1)),
        ai(r, es),
        r.setAttribute("transform", n))
      : ((n = getComputedStyle(r)[es]),
        (u[es] = t),
        (i = us(r, 1)),
        (u[es] = n)),
    Vi))
      (n = c[s]) !== (a = i[s]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 &&
        ((o = U(n) !== (d = U(a)) ? li(r, s, n, d) : parseFloat(n)),
        (l = parseFloat(a)),
        (e._pt = new wr(e._pt, i, s, o, l - o, Rr)),
        (e._pt.u = d || 0),
        e._props.push(s));
    yi(i, c);
  }
  (nr.version = Ut.version = $r.version = "3.11.4"), (Se = 1), d() && Rt();
  var bi,
    xi,
    _i,
    Ti,
    Ei,
    Si,
    Mi,
    Ci,
    Pi = Bt.Power0,
    ki = Bt.Power1,
    Ai = Bt.Power2,
    Oi = Bt.Power3,
    Li = Bt.Power4,
    zi = Bt.Linear,
    Di = Bt.Quad,
    Ii = Bt.Cubic,
    $i = Bt.Quart,
    Ri = Bt.Quint,
    Bi = Bt.Strong,
    Xi = Bt.Elastic,
    Yi = Bt.Back,
    Fi = Bt.SteppedEase,
    Gi = Bt.Bounce,
    Hi = Bt.Sine,
    Ni = Bt.Expo,
    qi = Bt.Circ,
    Vi = {},
    Wi = 180 / Math.PI,
    ji = Math.PI / 180,
    Ui = Math.atan2,
    Ki = /([A-Z])/g,
    Qi = /(left|right|width|margin|padding|x)/i,
    Zi = /[\s,\(]\S/,
    Ji = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    es = "transform",
    ts = es + "Origin",
    rs = "O,Moz,ms,Ms,Webkit".split(","),
    is = function (e, t, r) {
      var i = (t || Ei).style,
        s = 5;
      if (e in i && !r) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        s-- && !(rs[s] + e in i);

      );
      return s < 0 ? null : (3 === s ? "ms" : 0 <= s ? rs[s] : "") + e;
    },
    ss = { deg: 1, rad: 1, turn: 1 },
    ns = { grid: 1, flex: 1 },
    as = function (e, t, r, i) {
      var s;
      return (
        Ti || ti(),
        t in Ji &&
          "transform" !== t &&
          ~(t = Ji[t]).indexOf(",") &&
          (t = t.split(",")[0]),
        Vi[t] && "transform" !== t
          ? ((s = us(e, i)),
            (s =
              "transformOrigin" !== t
                ? s[t]
                : s.svg
                ? s.origin
                : ps(ei(e, ts)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]) &&
              "auto" !== s &&
              !i &&
              !~(s + "").indexOf("calc(")) ||
            (s =
              (ls[t] && ls[t](e, t, r)) ||
              ei(e, t) ||
              y(e, t) ||
              ("opacity" === t ? 1 : 0)),
        r && !~(s + "").trim().indexOf(" ") ? li(e, t, s, r) + r : s
      );
    },
    os = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    ls = {
      clearProps: function (e, t, r, i, s) {
        if ("isFromStart" !== s.data) {
          var n = (e._pt = new wr(e._pt, t, r, 0, 0, ui));
          return (n.u = i), (n.pr = -10), (n.tween = s), e._props.push(r), 1;
        }
      },
    },
    ds = [1, 0, 0, 1, 0, 0],
    cs = {},
    us = function (e, t) {
      var r = e._gsap || new Vt(e);
      if ("x" in r && !t && !r.uncache) return r;
      var i,
        s,
        n,
        a,
        o,
        l,
        d,
        c,
        u,
        p,
        f,
        h,
        m,
        g,
        v,
        y,
        w,
        x,
        _,
        T,
        E,
        S,
        M,
        C,
        P,
        k,
        A,
        O,
        L,
        z,
        D,
        I,
        $ = e.style,
        R = r.scaleX < 0,
        B = "deg",
        X = getComputedStyle(e),
        Y = ei(e, ts) || "0";
      return (
        (i = s = n = l = d = c = u = p = f = 0),
        (a = o = 1),
        (r.svg = !(!e.getCTM || !ni(e))),
        X.translate &&
          (("none" === X.translate &&
            "none" === X.scale &&
            "none" === X.rotate) ||
            ($[es] =
              ("none" !== X.translate
                ? "translate3d(" +
                  (X.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== X.rotate ? "rotate(" + X.rotate + ") " : "") +
              ("none" !== X.scale
                ? "scale(" + X.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== X[es] ? X[es] : "")),
          ($.scale = $.rotate = $.translate = "none")),
        (g = hi(e, r.svg)),
        r.svg &&
          ((C = r.uncache
            ? ((P = e.getBBox()),
              (Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px"),
              "")
            : !t && e.getAttribute("data-svg-origin")),
          mi(e, C || Y, !!C || r.originIsAbsolute, !1 !== r.smooth, g)),
        (h = r.xOrigin || 0),
        (m = r.yOrigin || 0),
        g !== ds &&
          ((x = g[0]),
          (_ = g[1]),
          (T = g[2]),
          (E = g[3]),
          (i = S = g[4]),
          (s = M = g[5]),
          6 === g.length
            ? ((a = Math.sqrt(x * x + _ * _)),
              (o = Math.sqrt(E * E + T * T)),
              (l = x || _ ? Ui(_, x) * Wi : 0),
              (u = T || E ? Ui(T, E) * Wi + l : 0) &&
                (o *= Math.abs(Math.cos(u * ji))),
              r.svg && ((i -= h - (h * x + m * T)), (s -= m - (h * _ + m * E))))
            : ((I = g[6]),
              (z = g[7]),
              (A = g[8]),
              (O = g[9]),
              (L = g[10]),
              (D = g[11]),
              (i = g[12]),
              (s = g[13]),
              (n = g[14]),
              (d = (v = Ui(I, L)) * Wi),
              v &&
                ((C = S * (y = Math.cos(-v)) + A * (w = Math.sin(-v))),
                (P = M * y + O * w),
                (k = I * y + L * w),
                (A = S * -w + A * y),
                (O = M * -w + O * y),
                (L = I * -w + L * y),
                (D = z * -w + D * y),
                (S = C),
                (M = P),
                (I = k)),
              (c = (v = Ui(-T, L)) * Wi),
              v &&
                ((y = Math.cos(-v)),
                (D = E * (w = Math.sin(-v)) + D * y),
                (x = C = x * y - A * w),
                (_ = P = _ * y - O * w),
                (T = k = T * y - L * w)),
              (l = (v = Ui(_, x)) * Wi),
              v &&
                ((C = x * (y = Math.cos(v)) + _ * (w = Math.sin(v))),
                (P = S * y + M * w),
                (_ = _ * y - x * w),
                (M = M * y - S * w),
                (x = C),
                (S = P)),
              d &&
                359.9 < Math.abs(d) + Math.abs(l) &&
                ((d = l = 0), (c = 180 - c)),
              (a = b(Math.sqrt(x * x + _ * _ + T * T))),
              (o = b(Math.sqrt(M * M + I * I))),
              (v = Ui(S, M)),
              (u = 2e-4 < Math.abs(v) ? v * Wi : 0),
              (f = D ? 1 / (D < 0 ? -D : D) : 0)),
          r.svg &&
            ((C = e.getAttribute("transform")),
            (r.forceCSS = e.setAttribute("transform", "") || !pi(ei(e, es))),
            C && e.setAttribute("transform", C))),
        90 < Math.abs(u) &&
          Math.abs(u) < 270 &&
          (R
            ? ((a *= -1),
              (u += l <= 0 ? 180 : -180),
              (l += l <= 0 ? 180 : -180))
            : ((o *= -1), (u += u <= 0 ? 180 : -180))),
        (t = t || r.uncache),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            ((!t && r.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (e.offsetWidth * r.xPercent) / 100
            : 0) +
          "px"),
        (r.y =
          s -
          ((r.yPercent =
            s &&
            ((!t && r.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-s) ? -50 : 0)))
            ? (e.offsetHeight * r.yPercent) / 100
            : 0) +
          "px"),
        (r.z = n + "px"),
        (r.scaleX = b(a)),
        (r.scaleY = b(o)),
        (r.rotation = b(l) + B),
        (r.rotationX = b(d) + B),
        (r.rotationY = b(c) + B),
        (r.skewX = u + B),
        (r.skewY = p + B),
        (r.transformPerspective = f + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && ($[ts] = ps(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = qe.force3D),
        (r.renderTransform = r.svg ? ys : Ci ? vs : fs),
        (r.uncache = 0),
        r
      );
    },
    ps = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    fs = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        vs(e, t);
    },
    hs = "0deg",
    ms = "0px",
    gs = ") ",
    vs = function (e, t) {
      var r = t || this,
        i = r.xPercent,
        s = r.yPercent,
        n = r.x,
        a = r.y,
        o = r.z,
        l = r.rotation,
        d = r.rotationY,
        c = r.rotationX,
        u = r.skewX,
        p = r.skewY,
        f = r.scaleX,
        h = r.scaleY,
        m = r.transformPerspective,
        g = r.force3D,
        v = r.target,
        y = r.zOrigin,
        w = "",
        b = ("auto" === g && e && 1 !== e) || !0 === g;
      if (y && (c !== hs || d !== hs)) {
        var x,
          _ = parseFloat(d) * ji,
          T = Math.sin(_),
          E = Math.cos(_);
        (_ = parseFloat(c) * ji),
          (n = gi(v, n, T * (x = Math.cos(_)) * -y)),
          (a = gi(v, a, -Math.sin(_) * -y)),
          (o = gi(v, o, E * x * -y + y));
      }
      m !== ms && (w += "perspective(" + m + gs),
        (i || s) && (w += "translate(" + i + "%, " + s + "%) "),
        (!b && n === ms && a === ms && o === ms) ||
          (w +=
            o !== ms || b
              ? "translate3d(" + n + ", " + a + ", " + o + ") "
              : "translate(" + n + ", " + a + gs),
        l !== hs && (w += "rotate(" + l + gs),
        d !== hs && (w += "rotateY(" + d + gs),
        c !== hs && (w += "rotateX(" + c + gs),
        (u === hs && p === hs) || (w += "skew(" + u + ", " + p + gs),
        (1 === f && 1 === h) || (w += "scale(" + f + ", " + h + gs),
        (v.style[es] = w || "translate(0, 0)");
    },
    ys = function (e, t) {
      var r,
        i,
        s,
        n,
        a,
        o = t || this,
        l = o.xPercent,
        d = o.yPercent,
        c = o.x,
        u = o.y,
        p = o.rotation,
        f = o.skewX,
        h = o.skewY,
        m = o.scaleX,
        g = o.scaleY,
        v = o.target,
        y = o.xOrigin,
        w = o.yOrigin,
        x = o.xOffset,
        _ = o.yOffset,
        T = o.forceCSS,
        E = parseFloat(c),
        S = parseFloat(u);
      (p = parseFloat(p)),
        (f = parseFloat(f)),
        (h = parseFloat(h)) && ((f += h = parseFloat(h)), (p += h)),
        p || f
          ? ((p *= ji),
            (f *= ji),
            (r = Math.cos(p) * m),
            (i = Math.sin(p) * m),
            (s = Math.sin(p - f) * -g),
            (n = Math.cos(p - f) * g),
            f &&
              ((h *= ji),
              (a = Math.tan(f - h)),
              (s *= a = Math.sqrt(1 + a * a)),
              (n *= a),
              h &&
                ((a = Math.tan(h)), (r *= a = Math.sqrt(1 + a * a)), (i *= a))),
            (r = b(r)),
            (i = b(i)),
            (s = b(s)),
            (n = b(n)))
          : ((r = m), (n = g), (i = s = 0)),
        ((E && !~(c + "").indexOf("px")) || (S && !~(u + "").indexOf("px"))) &&
          ((E = li(v, "x", c, "px")), (S = li(v, "y", u, "px"))),
        (y || w || x || _) &&
          ((E = b(E + y - (y * r + w * s) + x)),
          (S = b(S + w - (y * i + w * n) + _))),
        (l || d) &&
          ((E = b(E + (l / 100) * (a = v.getBBox()).width)),
          (S = b(S + (d / 100) * a.height))),
        (a =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          s +
          "," +
          n +
          "," +
          E +
          "," +
          S +
          ")"),
        v.setAttribute("transform", a),
        T && (v.style[es] = a);
    };
  w("padding,margin,Width,Radius", function (e, t) {
    var r = "Right",
      i = "Bottom",
      s = "Left",
      n = (t < 3 ? ["Top", r, i, s] : ["Top" + s, "Top" + r, i + r, i + s]).map(
        function (r) {
          return t < 2 ? e + r : "border" + r + e;
        }
      );
    ls[1 < t ? "border" + e : e] = function (e, t, r, i, s) {
      var a, o;
      if (arguments.length < 4)
        return (
          (a = n.map(function (t) {
            return as(e, t, r);
          })),
          5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o
        );
      (a = (i + "").split(" ")),
        (o = {}),
        n.forEach(function (e, t) {
          return (o[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
        }),
        e.init(t, o, s);
    };
  });
  var ws,
    bs,
    xs = {
      name: "css",
      register: ti,
      targetTest: function (e) {
        return e.style && e.nodeType;
      },
      init: function (e, t, r, s, n) {
        var a,
          o,
          l,
          d,
          c,
          u,
          f,
          h,
          m,
          g,
          v,
          y,
          w,
          b,
          x,
          T,
          E = this._props,
          S = e.style,
          M = r.vars.startAt;
        for (f in (Ti || ti(),
        (this.styles = this.styles || Zr(e)),
        (T = this.styles.props),
        (this.tween = r),
        t))
          if (
            "autoRound" !== f &&
            ((o = t[f]), !vt[f] || !Kt(f, t, r, s, e, n))
          )
            if (
              ((c = typeof o),
              (u = ls[f]),
              "function" === c && (c = typeof (o = o.call(r, s, e, n))),
              "string" === c && ~o.indexOf("random(") && (o = se(o)),
              u)
            )
              u(this, e, f, o, r) && (x = 1);
            else if ("--" === f.substr(0, 2))
              (a = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
                (o += ""),
                (Dt.lastIndex = 0),
                Dt.test(a) || ((h = U(a)), (m = U(o))),
                m ? h !== m && (a = li(e, f, a, m) + m) : h && (o += h),
                this.add(S, "setProperty", a, o, s, n, 0, 0, f),
                E.push(f),
                T.push(f, 0, S[f]);
            else if ("undefined" !== c) {
              if (
                (M && f in M
                  ? (i(
                      (a =
                        "function" == typeof M[f]
                          ? M[f].call(r, s, e, n)
                          : M[f])
                    ) &&
                      ~a.indexOf("random(") &&
                      (a = se(a)),
                    U(a + "") || (a += qe.units[f] || U(as(e, f)) || ""),
                    "=" === (a + "").charAt(1) && (a = as(e, f)))
                  : (a = as(e, f)),
                (d = parseFloat(a)),
                (g = "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (l = parseFloat(o)),
                f in Ji &&
                  ("autoAlpha" === f &&
                    (1 === d &&
                      "hidden" === as(e, "visibility") &&
                      l &&
                      (d = 0),
                    T.push("visibility", 0, S.visibility),
                    oi(
                      this,
                      S,
                      "visibility",
                      d ? "inherit" : "hidden",
                      l ? "inherit" : "hidden",
                      !l
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = Ji[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (v = f in Vi))
              )
                if (
                  (this.styles.save(f),
                  y ||
                    (((w = e._gsap).renderTransform && !t.parseTransform) ||
                      us(e, t.parseTransform),
                    (b = !1 !== t.smoothOrigin && w.smooth),
                    ((y = this._pt =
                      new wr(
                        this._pt,
                        S,
                        es,
                        0,
                        1,
                        w.renderTransform,
                        w,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === f)
                )
                  (this._pt = new wr(
                    this._pt,
                    w,
                    "scaleY",
                    w.scaleY,
                    (g ? _(w.scaleY, g + l) : l) - w.scaleY || 0,
                    Rr
                  )),
                    (this._pt.u = 0),
                    E.push("scaleY", f),
                    (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    T.push(ts, 0, S[ts]),
                      (o = ci(o)),
                      w.svg
                        ? mi(e, o, 0, b, 0, this)
                        : ((m = parseFloat(o.split(" ")[2]) || 0) !==
                            w.zOrigin && oi(this, w, "zOrigin", w.zOrigin, m),
                          oi(this, S, f, ps(a), ps(o)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    mi(e, o, 1, b, 0, this);
                    continue;
                  }
                  if (f in cs) {
                    vi(this, w, f, d, g ? _(d, g + o) : o);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    oi(this, w, "smooth", w.smooth, o);
                    continue;
                  }
                  if ("force3D" === f) {
                    w[f] = o;
                    continue;
                  }
                  if ("transform" === f) {
                    wi(this, o, e);
                    continue;
                  }
                }
              else f in S || (f = is(f) || f);
              if (
                v ||
                ((l || 0 === l) && (d || 0 === d) && !Zi.test(o) && f in S)
              )
                (l = l || 0),
                  (h = (a + "").substr((d + "").length)) !==
                    (m = U(o) || (f in qe.units ? qe.units[f] : h)) &&
                    (d = li(e, f, a, m)),
                  (this._pt = new wr(
                    this._pt,
                    v ? w : S,
                    f,
                    d,
                    (g ? _(d, g + l) : l) - d,
                    v || ("px" !== m && "zIndex" !== f) || !1 === t.autoRound
                      ? Rr
                      : Yr
                  )),
                  (this._pt.u = m || 0),
                  h !== m && "%" !== m && ((this._pt.b = a), (this._pt.r = Xr));
              else if (f in S) di.call(this, e, f, a, g ? g + o : o);
              else if (f in e) this.add(e, f, a || e[f], g ? g + o : o, s, n);
              else if ("parseTransform" !== f) {
                p(f, o);
                continue;
              }
              v || (f in S ? T.push(f, 0, S[f]) : T.push(f, 1, a || e[f])),
                E.push(f);
            }
        x && yr(this);
      },
      render: function (e, t) {
        if (t.tween._time || !Mi())
          for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
        else t.styles.revert();
      },
      get: as,
      aliases: Ji,
      getSetter: function (e, t, r) {
        var i = Ji[t];
        return (
          i && i.indexOf(",") < 0 && (t = i),
          t in Vi && t !== ts && (e._gsap.x || as(e, "x"))
            ? r && Si === r
              ? "scale" === t
                ? Vr
                : qr
              : (Si = r || {}) && ("scale" === t ? Wr : jr)
            : e.style && !a(e.style[t])
            ? Hr
            : ~t.indexOf("-")
            ? Nr
            : ur(e, t)
        );
      },
      core: { _removeProperty: ai, _getMatrix: hi },
    };
  ($r.utils.checkPrefix = is),
    ($r.core.getStyleSaver = Zr),
    (bs = w(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
        "," +
        (ws = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (e) {
        Vi[e] = 1;
      }
    )),
    w(ws, function (e) {
      (qe.units[e] = "deg"), (cs[e] = 1);
    }),
    (Ji[bs[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ws),
    w(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (e) {
        var t = e.split(":");
        Ji[t[1]] = bs[t[0]];
      }
    ),
    w(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (e) {
        qe.units[e] = "px";
      }
    ),
    $r.registerPlugin(xs);
  var _s = $r.registerPlugin(xs) || $r,
    Ts = _s.core.Tween;
  (e.Back = Yi),
    (e.Bounce = Gi),
    (e.CSSPlugin = xs),
    (e.Circ = qi),
    (e.Cubic = Ii),
    (e.Elastic = Xi),
    (e.Expo = Ni),
    (e.Linear = zi),
    (e.Power0 = Pi),
    (e.Power1 = ki),
    (e.Power2 = Ai),
    (e.Power3 = Oi),
    (e.Power4 = Li),
    (e.Quad = Di),
    (e.Quart = $i),
    (e.Quint = Ri),
    (e.Sine = Hi),
    (e.SteppedEase = Fi),
    (e.Strong = Bi),
    (e.TimelineLite = Ut),
    (e.TimelineMax = Ut),
    (e.TweenLite = nr),
    (e.TweenMax = Ts),
    (e.default = _s),
    (e.gsap = _s),
    "undefined" == typeof window || window !== e
      ? Object.defineProperty(e, "__esModule", { value: !0 })
      : delete e.default;
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(((e = e || self).window = e.window || {}));
  })(this, function (e) {
    "use strict";
    function t(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function r() {
      return (
        g ||
        ("undefined" != typeof window &&
          (g = window.gsap) &&
          g.registerPlugin &&
          g)
      );
    }
    function i(e, t) {
      return ~L.indexOf(e) && L[L.indexOf(e) + 1][t];
    }
    function s(e) {
      return !!~S.indexOf(e);
    }
    function n(e, t, r, i, s) {
      return e.addEventListener(t, r, { passive: !i, capture: !!s });
    }
    function a(e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    }
    function o() {
      return (M && M.isPressed) || O.cache++;
    }
    function l(e, t) {
      function r(i) {
        if (i || 0 === i) {
          k && (y.history.scrollRestoration = "manual");
          var s = M && M.isPressed;
          (i = r.v = Math.round(i) || (M && M.iOS ? 1 : 0)),
            e(i),
            (r.cacheID = O.cache),
            s && D("ss", i);
        } else (t || O.cache !== r.cacheID || D("ref")) && ((r.cacheID = O.cache), (r.v = e()));
        return r.v + r.offset;
      }
      return (r.offset = 0), e && r;
    }
    function d(e) {
      return (
        g.utils.toArray(e)[0] ||
        ("string" == typeof e && !1 !== g.config().nullTargetWarn
          ? console.warn("Element not found:", e)
          : null)
      );
    }
    function c(e, t) {
      var r = t.s,
        n = t.sc;
      s(e) && (e = w.scrollingElement || b);
      var a = O.indexOf(e),
        d = n === B.sc ? 1 : 2;
      ~a || (a = O.push(e) - 1), O[a + d] || e.addEventListener("scroll", o);
      var c = O[a + d],
        u =
          c ||
          (O[a + d] =
            l(i(e, r), !0) ||
            (s(e)
              ? n
              : l(function (t) {
                  return arguments.length ? (e[r] = t) : e[r];
                })));
      return (
        (u.target = e),
        c || (u.smooth = "smooth" === g.getProperty(e, "scrollBehavior")),
        u
      );
    }
    function u(e, t, r) {
      function i(e, t) {
        var i = z();
        t || l < i - a
          ? ((n = s), (s = e), (o = a), (a = i))
          : r
          ? (s += e)
          : (s = n + ((e - n) / (i - o)) * (a - o));
      }
      var s = e,
        n = e,
        a = z(),
        o = a,
        l = t || 50,
        d = Math.max(500, 3 * l);
      return {
        update: i,
        reset: function () {
          (n = s = r ? 0 : s), (o = a = 0);
        },
        getVelocity: function (e) {
          var t = o,
            l = n,
            c = z();
          return (
            (!e && 0 !== e) || e === s || i(e),
            a === o || d < c - o
              ? 0
              : ((s + (r ? l : -l)) / ((r ? c : a) - t)) * 1e3
          );
        },
      };
    }
    function p(e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    }
    function f(e) {
      var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(r) ? t : r;
    }
    function h() {
      var e, t, r, i;
      (E = g.core.globals().ScrollTrigger) &&
        E.core &&
        ((e = E.core),
        (t = e.bridge || {}),
        (r = e._scrollers),
        (i = e._proxies),
        r.push.apply(r, O),
        i.push.apply(i, L),
        (O = r),
        (L = i),
        (D = function (e, r) {
          return t[e](r);
        }));
    }
    function m(e) {
      return (
        (g = e || r()) &&
          "undefined" != typeof document &&
          document.body &&
          ((y = window),
          (b = (w = document).documentElement),
          (x = w.body),
          (S = [y, w, b, x]),
          g.utils.clamp,
          (P = g.core.context || function () {}),
          (T = "onpointerenter" in x ? "pointer" : "mouse"),
          (_ = X.isTouch =
            y.matchMedia &&
            y.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in y ||
                0 < navigator.maxTouchPoints ||
                0 < navigator.msMaxTouchPoints
              ? 2
              : 0),
          (C = X.eventTypes =
            (
              "ontouchstart" in b
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in b
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (k = 0);
          }, 500),
          h(),
          (v = 1)),
        v
      );
    }
    var g,
      v,
      y,
      w,
      b,
      x,
      _,
      T,
      E,
      S,
      M,
      C,
      P,
      k = 1,
      A = [],
      O = [],
      L = [],
      z = Date.now,
      D = function (e, t) {
        return t;
      },
      I = "scrollLeft",
      $ = "scrollTop",
      R = {
        s: I,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: l(function (e) {
          return arguments.length
            ? y.scrollTo(e, B.sc())
            : y.pageXOffset || w[I] || b[I] || x[I] || 0;
        }),
      },
      B = {
        s: $,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: R,
        sc: l(function (e) {
          return arguments.length
            ? y.scrollTo(R.sc(), e)
            : y.pageYOffset || w[$] || b[$] || x[$] || 0;
        }),
      };
    (R.op = B), (O.cache = 0);
    var X =
      ((Y.prototype.init = function (e) {
        v || m(g) || console.warn("Please gsap.registerPlugin(Observer)"),
          E || h();
        var t = e.tolerance,
          r = e.dragMinimum,
          i = e.type,
          l = e.target,
          S = e.lineHeight,
          k = e.debounce,
          O = e.preventDefault,
          L = e.onStop,
          D = e.onStopDelay,
          I = e.ignore,
          $ = e.wheelSpeed,
          X = e.event,
          Y = e.onDragStart,
          F = e.onDragEnd,
          G = e.onDrag,
          H = e.onPress,
          N = e.onRelease,
          q = e.onRight,
          V = e.onLeft,
          W = e.onUp,
          j = e.onDown,
          U = e.onChangeX,
          K = e.onChangeY,
          Q = e.onChange,
          Z = e.onToggleX,
          J = e.onToggleY,
          ee = e.onHover,
          te = e.onHoverEnd,
          re = e.onMove,
          ie = e.ignoreCheck,
          se = e.isNormalizer,
          ne = e.onGestureStart,
          ae = e.onGestureEnd,
          oe = e.onWheel,
          le = e.onEnable,
          de = e.onDisable,
          ce = e.onClick,
          ue = e.scrollSpeed,
          pe = e.capture,
          fe = e.allowClicks,
          he = e.lockAxis,
          me = e.onLockAxis;
        function ge() {
          return (Ke = z());
        }
        function ve(e, t) {
          return (
            ((Be.event = e) && I && ~I.indexOf(e.target)) ||
            (t && qe && "touch" !== e.pointerType) ||
            (ie && ie(e, t))
          );
        }
        function ye() {
          var e = (Be.deltaX = f(je)),
            r = (Be.deltaY = f(Ue)),
            i = Math.abs(e) >= t,
            s = Math.abs(r) >= t;
          Q && (i || s) && Q(Be, e, r, je, Ue),
            i &&
              (q && 0 < Be.deltaX && q(Be),
              V && Be.deltaX < 0 && V(Be),
              U && U(Be),
              Z && Be.deltaX < 0 != Xe < 0 && Z(Be),
              (Xe = Be.deltaX),
              (je[0] = je[1] = je[2] = 0)),
            s &&
              (j && 0 < Be.deltaY && j(Be),
              W && Be.deltaY < 0 && W(Be),
              K && K(Be),
              J && Be.deltaY < 0 != Ye < 0 && J(Be),
              (Ye = Be.deltaY),
              (Ue[0] = Ue[1] = Ue[2] = 0)),
            (De || ze) && (re && re(Be), ze && (G(Be), (ze = !1)), (De = !1)),
            $e && !($e = !1) && me && me(Be),
            Ie && (oe(Be), (Ie = !1)),
            (Oe = 0);
        }
        function we(e, t, r) {
          (je[r] += e),
            (Ue[r] += t),
            Be._vx.update(e),
            Be._vy.update(t),
            k ? (Oe = Oe || requestAnimationFrame(ye)) : ye();
        }
        function be(e, t) {
          he &&
            !Re &&
            ((Be.axis = Re = Math.abs(e) > Math.abs(t) ? "x" : "y"), ($e = !0)),
            "y" !== Re && ((je[2] += e), Be._vx.update(e, !0)),
            "x" !== Re && ((Ue[2] += t), Be._vy.update(t, !0)),
            k ? (Oe = Oe || requestAnimationFrame(ye)) : ye();
        }
        function xe(e) {
          if (!ve(e, 1)) {
            var t = (e = p(e, O)).clientX,
              i = e.clientY,
              s = t - Be.x,
              n = i - Be.y,
              a = Be.isDragging;
            (Be.x = t),
              (Be.y = i),
              (a ||
                Math.abs(Be.startX - t) >= r ||
                Math.abs(Be.startY - i) >= r) &&
                (G && (ze = !0),
                a || (Be.isDragging = !0),
                be(s, n),
                a || (Y && Y(Be)));
          }
        }
        function _e(e) {
          if (!ve(e, 1)) {
            a(se ? l : We, C[1], xe, !0);
            var t = !isNaN(Be.y - Be.startY),
              r =
                Be.isDragging &&
                (3 < Math.abs(Be.x - Be.startX) ||
                  3 < Math.abs(Be.y - Be.startY)),
              i = p(e);
            !r &&
              t &&
              (Be._vx.reset(),
              Be._vy.reset(),
              O &&
                fe &&
                g.delayedCall(0.08, function () {
                  if (300 < z() - Ke && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (We.createEvent) {
                      var t = We.createEvent("MouseEvents");
                      t.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        y,
                        1,
                        i.screenX,
                        i.screenY,
                        i.clientX,
                        i.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        e.target.dispatchEvent(t);
                    }
                })),
              (Be.isDragging = Be.isGesturing = Be.isPressed = !1),
              L && !se && Le.restart(!0),
              F && r && F(Be),
              N && N(Be, r);
          }
        }
        function Te(e) {
          return (
            e.touches &&
            1 < e.touches.length &&
            (Be.isGesturing = !0) &&
            ne(e, Be.isDragging)
          );
        }
        function Ee() {
          return (Be.isGesturing = !1) || ae(Be);
        }
        function Se(e) {
          if (!ve(e)) {
            var t = Fe(),
              r = Ge();
            we((t - He) * ue, (r - Ne) * ue, 1),
              (He = t),
              (Ne = r),
              L && Le.restart(!0);
          }
        }
        function Me(e) {
          if (!ve(e)) {
            (e = p(e, O)), oe && (Ie = !0);
            var t =
              (1 === e.deltaMode ? S : 2 === e.deltaMode ? y.innerHeight : 1) *
              $;
            we(e.deltaX * t, e.deltaY * t, 0), L && !se && Le.restart(!0);
          }
        }
        function Ce(e) {
          if (!ve(e)) {
            var t = e.clientX,
              r = e.clientY,
              i = t - Be.x,
              s = r - Be.y;
            (Be.x = t), (Be.y = r), (De = !0), (i || s) && be(i, s);
          }
        }
        function Pe(e) {
          (Be.event = e), ee(Be);
        }
        function ke(e) {
          (Be.event = e), te(Be);
        }
        function Ae(e) {
          return ve(e) || (p(e, O) && ce(Be));
        }
        (this.target = l = d(l) || b),
          (this.vars = e),
          (I = I && g.utils.toArray(I)),
          (t = t || 1e-9),
          (r = r || 0),
          ($ = $ || 1),
          (ue = ue || 1),
          (i = i || "wheel,touch,pointer"),
          (k = !1 !== k),
          (S = S || parseFloat(y.getComputedStyle(x).lineHeight) || 22);
        var Oe,
          Le,
          ze,
          De,
          Ie,
          $e,
          Re,
          Be = this,
          Xe = 0,
          Ye = 0,
          Fe = c(l, R),
          Ge = c(l, B),
          He = Fe(),
          Ne = Ge(),
          qe =
            ~i.indexOf("touch") &&
            !~i.indexOf("pointer") &&
            "pointerdown" === C[0],
          Ve = s(l),
          We = l.ownerDocument || w,
          je = [0, 0, 0],
          Ue = [0, 0, 0],
          Ke = 0,
          Qe = (Be.onPress = function (e) {
            ve(e, 1) ||
              ((Be.axis = Re = null),
              Le.pause(),
              (Be.isPressed = !0),
              (e = p(e)),
              (Xe = Ye = 0),
              (Be.startX = Be.x = e.clientX),
              (Be.startY = Be.y = e.clientY),
              Be._vx.reset(),
              Be._vy.reset(),
              n(se ? l : We, C[1], xe, O, !0),
              (Be.deltaX = Be.deltaY = 0),
              H && H(Be));
          });
        (Le = Be._dc =
          g
            .delayedCall(D || 0.25, function () {
              Be._vx.reset(), Be._vy.reset(), Le.pause(), L && L(Be);
            })
            .pause()),
          (Be.deltaX = Be.deltaY = 0),
          (Be._vx = u(0, 50, !0)),
          (Be._vy = u(0, 50, !0)),
          (Be.scrollX = Fe),
          (Be.scrollY = Ge),
          (Be.isDragging = Be.isGesturing = Be.isPressed = !1),
          P(this),
          (Be.enable = function (e) {
            return (
              Be.isEnabled ||
                (n(Ve ? We : l, "scroll", o),
                0 <= i.indexOf("scroll") && n(Ve ? We : l, "scroll", Se, O, pe),
                0 <= i.indexOf("wheel") && n(l, "wheel", Me, O, pe),
                ((0 <= i.indexOf("touch") && _) || 0 <= i.indexOf("pointer")) &&
                  (n(l, C[0], Qe, O, pe),
                  n(We, C[2], _e),
                  n(We, C[3], _e),
                  fe && n(l, "click", ge, !1, !0),
                  ce && n(l, "click", Ae),
                  ne && n(We, "gesturestart", Te),
                  ae && n(We, "gestureend", Ee),
                  ee && n(l, T + "enter", Pe),
                  te && n(l, T + "leave", ke),
                  re && n(l, T + "move", Ce)),
                (Be.isEnabled = !0),
                e && e.type && Qe(e),
                le && le(Be)),
              Be
            );
          }),
          (Be.disable = function () {
            Be.isEnabled &&
              (A.filter(function (e) {
                return e !== Be && s(e.target);
              }).length || a(Ve ? We : l, "scroll", o),
              Be.isPressed &&
                (Be._vx.reset(), Be._vy.reset(), a(se ? l : We, C[1], xe, !0)),
              a(Ve ? We : l, "scroll", Se, pe),
              a(l, "wheel", Me, pe),
              a(l, C[0], Qe, pe),
              a(We, C[2], _e),
              a(We, C[3], _e),
              a(l, "click", ge, !0),
              a(l, "click", Ae),
              a(We, "gesturestart", Te),
              a(We, "gestureend", Ee),
              a(l, T + "enter", Pe),
              a(l, T + "leave", ke),
              a(l, T + "move", Ce),
              (Be.isEnabled = Be.isPressed = Be.isDragging = !1),
              de && de(Be));
          }),
          (Be.kill = Be.revert =
            function () {
              Be.disable();
              var e = A.indexOf(Be);
              0 <= e && A.splice(e, 1), M === Be && (M = 0);
            }),
          A.push(Be),
          se && s(l) && (M = Be),
          Be.enable(X);
      }),
      (function (e, r, i) {
        r && t(e.prototype, r), i && t(e, i);
      })(Y, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      Y);
    function Y(e) {
      this.init(e);
    }
    function F() {
      return (Ye = 1);
    }
    function G() {
      return (Ye = 0);
    }
    function H(e) {
      return e;
    }
    function N(e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    }
    function q() {
      return "undefined" != typeof window;
    }
    function V() {
      return Ce || (q() && (Ce = window.gsap) && Ce.registerPlugin && Ce);
    }
    function W(e) {
      return !!~ze.indexOf(e);
    }
    function j(e) {
      return (
        i(e, "getBoundingClientRect") ||
        (W(e)
          ? function () {
              return (
                (qt.width = ke.innerWidth), (qt.height = ke.innerHeight), qt
              );
            }
          : function () {
              return St(e);
            })
      );
    }
    function U(e, t) {
      var r = t.s,
        s = t.d2,
        n = t.d,
        a = t.a;
      return (r = "scroll" + s) && (a = i(e, r))
        ? a() - j(e)()[n]
        : W(e)
        ? (Oe[r] || Le[r]) -
          (ke["inner" + s] || Oe["client" + s] || Le["client" + s])
        : e[r] - e["offset" + s];
    }
    function K(e, t) {
      for (var r = 0; r < qe.length; r += 3)
        (t && !~t.indexOf(qe[r + 1])) || e(qe[r], qe[r + 1], qe[r + 2]);
    }
    function Q(e) {
      return "string" == typeof e;
    }
    function Z(e) {
      return "function" == typeof e;
    }
    function J(e) {
      return "number" == typeof e;
    }
    function ee(e) {
      return "object" == typeof e;
    }
    function te(e, t, r) {
      return e && e.progress(t ? 0 : 1) && r && e.pause();
    }
    function re(e, t) {
      if (e.enabled) {
        var r = t(e);
        r && r.totalTime && (e.callbackAnimation = r);
      }
    }
    function ie(e) {
      return ke.getComputedStyle(e);
    }
    function se(e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    }
    function ne(e, t) {
      var r = t.d2;
      return e["offset" + r] || e["client" + r] || 0;
    }
    function ae(e) {
      var t,
        r = [],
        i = e.labels,
        s = e.duration();
      for (t in i) r.push(i[t] / s);
      return r;
    }
    function oe(e) {
      var t = Ce.utils.snap(e),
        r =
          Array.isArray(e) &&
          e.slice(0).sort(function (e, t) {
            return e - t;
          });
      return r
        ? function (e, i, s) {
            var n;
            if ((void 0 === s && (s = 0.001), !i)) return t(e);
            if (0 < i) {
              for (e -= s, n = 0; n < r.length; n++) if (r[n] >= e) return r[n];
              return r[n - 1];
            }
            for (n = r.length, e += s; n--; ) if (r[n] <= e) return r[n];
            return r[0];
          }
        : function (r, i, s) {
            void 0 === s && (s = 0.001);
            var n = t(r);
            return !i || Math.abs(n - r) < s || n - r < 0 == i < 0
              ? n
              : t(i < 0 ? r - e : r + e);
          };
    }
    function le(e, t, r, i) {
      return r.split(",").forEach(function (r) {
        return e(t, r, i);
      });
    }
    function de(e, t, r, i, s) {
      return e.addEventListener(t, r, { passive: !i, capture: !!s });
    }
    function ce(e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    }
    function ue(e, t, r) {
      return r && r.wheelHandler && e(t, "wheel", r);
    }
    function pe(e, t) {
      if (Q(e)) {
        var r = e.indexOf("="),
          i = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= t / 100), (e = e.substr(0, r - 1))),
          (e =
            i +
            (e in Pt
              ? Pt[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    }
    function fe(e, t, r, s, n, a, o, l) {
      var d = n.startColor,
        c = n.endColor,
        u = n.fontSize,
        p = n.indent,
        f = n.fontWeight,
        h = Ae.createElement("div"),
        m = W(r) || "fixed" === i(r, "pinType"),
        g = -1 !== e.indexOf("scroller"),
        v = m ? Le : r,
        y = -1 !== e.indexOf("start"),
        w = y ? d : c,
        b =
          "border-color:" +
          w +
          ";font-size:" +
          u +
          ";color:" +
          w +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (b += "position:" + ((g || l) && m ? "fixed;" : "absolute;")),
        (!g && !l && m) ||
          (b += (s === B ? ft : ht) + ":" + (a + parseFloat(p)) + "px;"),
        o &&
          (b +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (h._isStart = y),
        h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (h.style.cssText = b),
        (h.innerText = t || 0 === t ? e + "-" + t : e),
        v.children[0] ? v.insertBefore(h, v.children[0]) : v.appendChild(h),
        (h._offset = h["offset" + s.op.d2]),
        kt(h, 0, s, y),
        h
      );
    }
    function he() {
      return 34 < lt() - ct && (it = it || requestAnimationFrame(Yt));
    }
    function me() {
      (Ue && Ue.isPressed && !(Ue.startX > Le.clientWidth)) ||
        (O.cache++,
        Ue ? (it = it || requestAnimationFrame(Yt)) : Yt(),
        ct || Dt("scrollStart"),
        (ct = lt()));
    }
    function ge() {
      (Ze = ke.innerWidth), (Qe = ke.innerHeight);
    }
    function ve() {
      O.cache++,
        Xe ||
          je ||
          Ae.fullscreenElement ||
          Ae.webkitFullscreenElement ||
          (Ke &&
            Ze === ke.innerWidth &&
            !(Math.abs(ke.innerHeight - Qe) > 0.25 * ke.innerHeight)) ||
          De.restart(!0);
    }
    function ye() {
      return ce(Wt, "scrollEnd", ye) || Rt(!0);
    }
    function we(e) {
      for (var t = 0; t < It.length; t += 5)
        (!e || (It[t + 4] && It[t + 4].query === e)) &&
          ((It[t].style.cssText = It[t + 1]),
          It[t].getBBox && It[t].setAttribute("transform", It[t + 2] || ""),
          (It[t + 3].uncache = 1));
    }
    function be(e, t) {
      var r;
      for (Ge = 0; Ge < At.length; Ge++)
        !(r = At[Ge]) ||
          (t && r._ctx !== t) ||
          (e ? r.kill(1) : r.revert(!0, !0));
      t && we(t), t || Dt("revert");
    }
    function xe(e, t) {
      O.cache++,
        (!t && st) ||
          O.forEach(function (e) {
            return Z(e) && e.cacheID++ && (e.rec = 0);
          }),
        Q(e) && (ke.history.scrollRestoration = tt = e);
    }
    function _e(e, t, r, i) {
      if (!e._gsap.swappedIn) {
        for (var s, n = Ft.length, a = t.style, o = e.style; n--; )
          a[(s = Ft[n])] = r[s];
        (a.position = "absolute" === r.position ? "absolute" : "relative"),
          "inline" === r.display && (a.display = "inline-block"),
          (o[ht] = o[ft] = "auto"),
          (a.flexBasis = r.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[mt] = ne(e, R) + Et),
          (a[gt] = ne(e, B) + Et),
          (a[xt] = o[_t] = o.top = o.left = "0"),
          Nt(i),
          (o[mt] = o.maxWidth = r[mt]),
          (o[gt] = o.maxHeight = r[gt]),
          (o[xt] = r[xt]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    }
    function Te(e) {
      for (var t = Gt.length, r = e.style, i = [], s = 0; s < t; s++)
        i.push(Gt[s], r[Gt[s]]);
      return (i.t = e), i;
    }
    function Ee(e, t, r, i, s, n, a, o, l, c, u, p, f) {
      Z(e) && (e = e(o)),
        Q(e) &&
          "max" === e.substr(0, 3) &&
          (e = p + ("=" === e.charAt(4) ? pe("0" + e.substr(3), r) : 0));
      var h,
        m,
        g,
        v = f ? f.time() : 0;
      if ((f && f.seek(0), J(e))) a && kt(a, r, i, !0);
      else {
        Z(t) && (t = t(o));
        var y,
          w,
          b,
          x,
          _ = (e || "0").split(" ");
        (g = d(t) || Le),
          ((y = St(g) || {}) && (y.left || y.top)) ||
            "none" !== ie(g).display ||
            ((x = g.style.display),
            (g.style.display = "block"),
            (y = St(g)),
            x ? (g.style.display = x) : g.style.removeProperty("display")),
          (w = pe(_[0], y[i.d])),
          (b = pe(_[1] || "0", r)),
          (e = y[i.p] - l[i.p] - c + w + s - b),
          a && kt(a, b, i, r - b < 20 || (a._isStart && 20 < b)),
          (r -= r - b);
      }
      if (n) {
        var T = e + r,
          E = n._isStart;
        (h = "scroll" + i.d2),
          kt(
            n,
            T,
            i,
            (E && 20 < T) ||
              (!E && (u ? Math.max(Le[h], Oe[h]) : n.parentNode[h]) <= T + 1)
          ),
          u &&
            ((l = St(a)),
            u && (n.style[i.op.p] = l[i.op.p] - i.op.m - n._offset + Et));
      }
      return (
        f &&
          g &&
          ((h = St(g)),
          f.seek(p),
          (m = St(g)),
          (f._caScrollDist = h[i.p] - m[i.p]),
          (e = (e / f._caScrollDist) * p)),
        f && f.seek(v),
        f ? e : Math.round(e)
      );
    }
    function Se(e, t, r, i) {
      if (e.parentNode !== t) {
        var s,
          n,
          a = e.style;
        if (t === Le) {
          for (s in ((e._stOrig = a.cssText), (n = ie(e))))
            +s ||
              Vt.test(s) ||
              !n[s] ||
              "string" != typeof a[s] ||
              "0" === s ||
              (a[s] = n[s]);
          (a.top = r), (a.left = i);
        } else a.cssText = e._stOrig;
        (Ce.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    }
    function Me(e, t) {
      function r(t, o, l, d, c) {
        var u = r.tween,
          p = o.onComplete;
        return (
          (l = l || n()),
          (c = (d && c) || 0),
          (d = d || t - l),
          u && u.kill(),
          (i = Math.round(l)),
          (o[a] = t),
          ((o.modifiers = {})[a] = function (e) {
            return (
              (e = Math.round(n())) !== i &&
              e !== s &&
              3 < Math.abs(e - i) &&
              3 < Math.abs(e - s)
                ? (u.kill(), (r.tween = 0))
                : (e = l + d * u.ratio + c * u.ratio * u.ratio),
              (s = i),
              (i = Math.round(e))
            );
          }),
          (o.onUpdate = function () {
            O.cache++, Yt();
          }),
          (o.onComplete = function () {
            (r.tween = 0), p && p.call(u);
          }),
          (u = r.tween = Ce.to(e, o))
        );
      }
      var i,
        s,
        n = c(e, t),
        a = "_scroll" + t.p2;
      return (
        ((e[a] = n).wheelHandler = function () {
          return r.tween && r.tween.kill() && (r.tween = 0);
        }),
        de(e, "wheel", n.wheelHandler),
        r
      );
    }
    (X.version = "3.11.4"),
      (X.create = function (e) {
        return new X(e);
      }),
      (X.register = m),
      (X.getAll = function () {
        return A.slice();
      }),
      (X.getById = function (e) {
        return A.filter(function (t) {
          return t.vars.id === e;
        })[0];
      }),
      r() && g.registerPlugin(X);
    var Ce,
      Pe,
      ke,
      Ae,
      Oe,
      Le,
      ze,
      De,
      Ie,
      $e,
      Re,
      Be,
      Xe,
      Ye,
      Fe,
      Ge,
      He,
      Ne,
      qe,
      Ve,
      We,
      je,
      Ue,
      Ke,
      Qe,
      Ze,
      Je,
      et,
      tt,
      rt,
      it,
      st,
      nt,
      at,
      ot = 1,
      lt = Date.now,
      dt = lt(),
      ct = 0,
      ut = 0,
      pt = Math.abs,
      ft = "right",
      ht = "bottom",
      mt = "width",
      gt = "height",
      vt = "Right",
      yt = "Left",
      wt = "Top",
      bt = "Bottom",
      xt = "padding",
      _t = "margin",
      Tt = "Width",
      Et = "px",
      St = function (e, t) {
        var r =
            t &&
            "matrix(1, 0, 0, 1, 0, 0)" !== ie(e)[Fe] &&
            Ce.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            }).progress(1),
          i = e.getBoundingClientRect();
        return r && r.progress(0).kill(), i;
      },
      Mt = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      Ct = { toggleActions: "play", anticipatePin: 0 },
      Pt = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      kt = function (e, t, r, i) {
        var s = { display: "block" },
          n = r[i ? "os2" : "p2"],
          a = r[i ? "p2" : "os2"];
        (e._isFlipped = i),
          (s[r.a + "Percent"] = i ? -100 : 0),
          (s[r.a] = i ? "1px" : 0),
          (s["border" + n + Tt] = 1),
          (s["border" + a + Tt] = 0),
          (s[r.p] = t + "px"),
          Ce.set(e, s);
      },
      At = [],
      Ot = {},
      Lt = {},
      zt = [],
      Dt = function (e) {
        return (
          (Lt[e] &&
            Lt[e].map(function (e) {
              return e();
            })) ||
          zt
        );
      },
      It = [],
      $t = 0,
      Rt = function (e, t) {
        if (!ct || e) {
          (st = Wt.isRefreshing = !0),
            O.forEach(function (e) {
              return Z(e) && e.cacheID++ && (e.rec = e());
            });
          var r = Dt("refreshInit");
          Ve && Wt.sort(),
            t || be(),
            O.forEach(function (e) {
              Z(e) &&
                (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
            }),
            At.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            At.forEach(function (e, t) {
              if (e._subPinOffset && e.pin) {
                var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  i = e.pin[r];
                e.revert(!0, 1),
                  e.adjustPinSpacing(e.pin[r] - i),
                  e.revert(!1, 1);
              }
            }),
            At.forEach(function (e) {
              return (
                "max" === e.vars.end &&
                e.setPositions(
                  e.start,
                  Math.max(e.start + 1, U(e.scroller, e._dir))
                )
              );
            }),
            r.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            O.forEach(function (e) {
              Z(e) &&
                (e.smooth &&
                  requestAnimationFrame(function () {
                    return (e.target.style.scrollBehavior = "smooth");
                  }),
                e.rec && e(e.rec));
            }),
            xe(tt, 1),
            De.pause(),
            $t++,
            Yt(2),
            At.forEach(function (e) {
              return Z(e.vars.onRefresh) && e.vars.onRefresh(e);
            }),
            (st = Wt.isRefreshing = !1),
            Dt("refresh");
        } else de(Wt, "scrollEnd", ye);
      },
      Bt = 0,
      Xt = 1,
      Yt = function (e) {
        if (!st || 2 === e) {
          (Wt.isUpdating = !0), at && at.update(0);
          var t = At.length,
            r = lt(),
            i = 50 <= r - dt,
            s = t && At[0].scroll();
          if (
            ((Xt = s < Bt ? -1 : 1),
            (Bt = s),
            i &&
              (ct && !Ye && 200 < r - ct && ((ct = 0), Dt("scrollEnd")),
              (Re = dt),
              (dt = r)),
            Xt < 0)
          ) {
            for (Ge = t; 0 < Ge--; ) At[Ge] && At[Ge].update(0, i);
            Xt = 1;
          } else for (Ge = 0; Ge < t; Ge++) At[Ge] && At[Ge].update(0, i);
          Wt.isUpdating = !1;
        }
        it = 0;
      },
      Ft = [
        "left",
        "top",
        ht,
        ft,
        _t + bt,
        _t + vt,
        _t + wt,
        _t + yt,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      Gt = Ft.concat([
        mt,
        gt,
        "boxSizing",
        "max" + Tt,
        "maxHeight",
        "position",
        _t,
        xt,
        xt + wt,
        xt + vt,
        xt + bt,
        xt + yt,
      ]),
      Ht = /([A-Z])/g,
      Nt = function (e) {
        if (e) {
          var t,
            r,
            i = e.t.style,
            s = e.length,
            n = 0;
          for ((e.t._gsap || Ce.core.getCache(e.t)).uncache = 1; n < s; n += 2)
            (r = e[n + 1]),
              (t = e[n]),
              r
                ? (i[t] = r)
                : i[t] && i.removeProperty(t.replace(Ht, "-$1").toLowerCase());
        }
      },
      qt = { left: 0, top: 0 },
      Vt = /(webkit|moz|length|cssText|inset)/i,
      Wt =
        ((jt.prototype.init = function (e, t) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            ut)
          ) {
            var r,
              s,
              n,
              a,
              o,
              l,
              u,
              p,
              f,
              h,
              m,
              g,
              v,
              y,
              w,
              b,
              x,
              _,
              T,
              E,
              S,
              M,
              C,
              P,
              k,
              A,
              z,
              D,
              I,
              $,
              X,
              Y,
              F,
              G,
              q,
              V,
              K,
              le,
              ue,
              he = (e = se(Q(e) || J(e) || e.nodeType ? { trigger: e } : e, Ct))
                .onUpdate,
              ge = e.toggleClass,
              we = e.id,
              be = e.onToggle,
              xe = e.onRefresh,
              Pe = e.scrub,
              ze = e.trigger,
              De = e.pin,
              Be = e.pinSpacing,
              Fe = e.invalidateOnRefresh,
              He = e.anticipatePin,
              Ne = e.onScrubComplete,
              qe = e.onSnapComplete,
              je = e.once,
              Ue = e.snap,
              Ke = e.pinReparent,
              Qe = e.pinSpacer,
              Ze = e.containerAnimation,
              Je = e.fastScrollEnd,
              tt = e.preventOverlaps,
              it =
                e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                  ? R
                  : B,
              dt = !Pe && 0 !== Pe,
              ft = d(e.scroller || ke),
              ht = Ce.core.getCache(ft),
              Pt = W(ft),
              kt =
                "fixed" ===
                ("pinType" in e
                  ? e.pinType
                  : i(ft, "pinType") || (Pt && "fixed")),
              Lt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
              zt = dt && e.toggleActions.split(" "),
              Dt = "markers" in e ? e.markers : Ct.markers,
              It = Pt ? 0 : parseFloat(ie(ft)["border" + it.p2 + Tt]) || 0,
              Bt = this,
              Yt =
                e.onRefreshInit &&
                function () {
                  return e.onRefreshInit(Bt);
                },
              Ft = (function (e, t, r) {
                var s = r.d,
                  n = r.d2,
                  a = r.a;
                return (a = i(e, "getBoundingClientRect"))
                  ? function () {
                      return a()[s];
                    }
                  : function () {
                      return (t ? ke["inner" + n] : e["client" + n]) || 0;
                    };
              })(ft, Pt, it),
              Gt = (function (e, t) {
                return !t || ~L.indexOf(e)
                  ? j(e)
                  : function () {
                      return qt;
                    };
              })(ft, Pt),
              Ht = 0,
              Vt = 0,
              Wt = c(ft, it);
            if (
              (et(Bt),
              (Bt._dir = it),
              (He *= 45),
              (Bt.scroller = ft),
              (Bt.scroll = Ze ? Ze.time.bind(Ze) : Wt),
              (a = Wt()),
              (Bt.vars = e),
              (t = t || e.animation),
              "refreshPriority" in e &&
                ((Ve = 1), -9999 === e.refreshPriority && (at = Bt)),
              (ht.tweenScroll = ht.tweenScroll || {
                top: Me(ft, B),
                left: Me(ft, R),
              }),
              (Bt.tweenTo = r = ht.tweenScroll[it.p]),
              (Bt.scrubDuration = function (e) {
                (Y = J(e) && e)
                  ? X
                    ? X.duration(e)
                    : (X = Ce.to(t, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: Y,
                        paused: !0,
                        onComplete: function () {
                          return Ne && Ne(Bt);
                        },
                      }))
                  : (X && X.progress(1).kill(), (X = 0));
              }),
              t &&
                ((t.vars.lazy = !1),
                t._initted ||
                  (!1 !== t.vars.immediateRender &&
                    !1 !== e.immediateRender &&
                    t.duration() &&
                    t.render(0, !0, !0)),
                (Bt.animation = t.pause()),
                (t.scrollTrigger = Bt).scrubDuration(Pe),
                (I = 0),
                (we = we || t.vars.id)),
              At.push(Bt),
              Ue &&
                ((ee(Ue) && !Ue.push) || (Ue = { snapTo: Ue }),
                "scrollBehavior" in Le.style &&
                  Ce.set(Pt ? [Le, Oe] : ft, { scrollBehavior: "auto" }),
                O.forEach(function (e) {
                  return (
                    Z(e) &&
                    e.target === (Pt ? Ae.scrollingElement || Oe : ft) &&
                    (e.smooth = !1)
                  );
                }),
                (n = Z(Ue.snapTo)
                  ? Ue.snapTo
                  : "labels" === Ue.snapTo
                  ? (function (e) {
                      return function (t) {
                        return Ce.utils.snap(ae(e), t);
                      };
                    })(t)
                  : "labelsDirectional" === Ue.snapTo
                  ? (function (e) {
                      return function (t, r) {
                        return oe(ae(e))(t, r.direction);
                      };
                    })(t)
                  : !1 !== Ue.directional
                  ? function (e, t) {
                      return oe(Ue.snapTo)(
                        e,
                        lt() - Vt < 500 ? 0 : t.direction
                      );
                    }
                  : Ce.utils.snap(Ue.snapTo)),
                (F = ee((F = Ue.duration || { min: 0.1, max: 2 }))
                  ? $e(F.min, F.max)
                  : $e(F, F)),
                (G = Ce.delayedCall(Ue.delay || Y / 2 || 0.1, function () {
                  var e = Wt(),
                    i = lt() - Vt < 500,
                    s = r.tween;
                  if (
                    !(i || Math.abs(Bt.getVelocity()) < 10) ||
                    s ||
                    Ye ||
                    Ht === e
                  )
                    Bt.isActive && Ht !== e && G.restart(!0);
                  else {
                    var a = (e - l) / v,
                      o = t && !dt ? t.totalProgress() : a,
                      d = i ? 0 : ((o - $) / (lt() - Re)) * 1e3 || 0,
                      c = Ce.utils.clamp(-a, 1 - a, (pt(d / 2) * d) / 0.185),
                      p = a + (!1 === Ue.inertia ? 0 : c),
                      f = $e(0, 1, n(p, Bt)),
                      h = Math.round(l + f * v),
                      m = Ue.onStart,
                      g = Ue.onInterrupt,
                      y = Ue.onComplete;
                    if (e <= u && l <= e && h !== e) {
                      if (s && !s._initted && s.data <= pt(h - e)) return;
                      !1 === Ue.inertia && (c = f - a),
                        r(
                          h,
                          {
                            duration: F(
                              pt(
                                (0.185 * Math.max(pt(p - o), pt(f - o))) /
                                  d /
                                  0.05 || 0
                              )
                            ),
                            ease: Ue.ease || "power3",
                            data: pt(h - e),
                            onInterrupt: function () {
                              return G.restart(!0) && g && g(Bt);
                            },
                            onComplete: function () {
                              Bt.update(),
                                (Ht = Wt()),
                                (I = $ =
                                  t && !dt ? t.totalProgress() : Bt.progress),
                                qe && qe(Bt),
                                y && y(Bt);
                            },
                          },
                          e,
                          c * v,
                          h - e - c * v
                        ),
                        m && m(Bt, r.tween);
                    }
                  }
                }).pause())),
              we && (Ot[we] = Bt),
              (ue =
                (ue =
                  (ze = Bt.trigger = d(ze || De)) &&
                  ze._gsap &&
                  ze._gsap.stRevert) && ue(Bt)),
              (De = !0 === De ? ze : d(De)),
              Q(ge) && (ge = { targets: ze, className: ge }),
              De &&
                (!1 === Be ||
                  Be === _t ||
                  (Be =
                    !(
                      !Be &&
                      De.parentNode &&
                      De.parentNode.style &&
                      "flex" === ie(De.parentNode).display
                    ) && xt),
                (Bt.pin = De),
                (s = Ce.core.getCache(De)).spacer
                  ? (y = s.pinState)
                  : (Qe &&
                      ((Qe = d(Qe)) &&
                        !Qe.nodeType &&
                        (Qe = Qe.current || Qe.nativeElement),
                      (s.spacerIsNative = !!Qe),
                      Qe && (s.spacerState = Te(Qe))),
                    (s.spacer = x = Qe || Ae.createElement("div")),
                    x.classList.add("pin-spacer"),
                    we && x.classList.add("pin-spacer-" + we),
                    (s.pinState = y = Te(De))),
                !1 !== e.force3D && Ce.set(De, { force3D: !0 }),
                (Bt.spacer = x = s.spacer),
                (D = ie(De)),
                (C = D[Be + it.os2]),
                (T = Ce.getProperty(De)),
                (E = Ce.quickSetter(De, it.a, Et)),
                _e(De, x, D),
                (b = Te(De))),
              Dt)
            ) {
              (g = ee(Dt) ? se(Dt, Mt) : Mt),
                (h = fe("scroller-start", we, ft, it, g, 0)),
                (m = fe("scroller-end", we, ft, it, g, 0, h)),
                (_ = h["offset" + it.op.d2]);
              var Ut = d(i(ft, "content") || ft);
              (p = this.markerStart = fe("start", we, Ut, it, g, _, 0, Ze)),
                (f = this.markerEnd = fe("end", we, Ut, it, g, _, 0, Ze)),
                Ze && (le = Ce.quickSetter([p, f], it.a, Et)),
                kt ||
                  (L.length && !0 === i(ft, "fixedMarkers")) ||
                  ((function (e) {
                    var t = ie(e).position;
                    e.style.position =
                      "absolute" === t || "fixed" === t ? t : "relative";
                  })(Pt ? Le : ft),
                  Ce.set([h, m], { force3D: !0 }),
                  (k = Ce.quickSetter(h, it.a, Et)),
                  (z = Ce.quickSetter(m, it.a, Et)));
            }
            if (Ze) {
              var Kt = Ze.vars.onUpdate,
                Qt = Ze.vars.onUpdateParams;
              Ze.eventCallback("onUpdate", function () {
                Bt.update(0, 0, 1), Kt && Kt.apply(Qt || []);
              });
            }
            (Bt.previous = function () {
              return At[At.indexOf(Bt) - 1];
            }),
              (Bt.next = function () {
                return At[At.indexOf(Bt) + 1];
              }),
              (Bt.revert = function (e, r) {
                if (!r) return Bt.kill(!0);
                var i = !1 !== e || !Bt.enabled,
                  s = Xe;
                i !== Bt.isReverted &&
                  (i &&
                    ((V = Math.max(Wt(), Bt.scroll.rec || 0)),
                    (q = Bt.progress),
                    (K = t && t.progress())),
                  p &&
                    [p, f, h, m].forEach(function (e) {
                      return (e.style.display = i ? "none" : "block");
                    }),
                  i && ((Xe = 1), Bt.update(i)),
                  !De ||
                    (Ke && Bt.isActive) ||
                    (i
                      ? (function (e, t, r) {
                          Nt(r);
                          var i = e._gsap;
                          if (i.spacerIsNative) Nt(i.spacerState);
                          else if (e._gsap.swappedIn) {
                            var s = t.parentNode;
                            s && (s.insertBefore(e, t), s.removeChild(t));
                          }
                          e._gsap.swappedIn = !1;
                        })(De, x, y)
                      : _e(De, x, ie(De), P)),
                  i || Bt.update(i),
                  (Xe = s),
                  (Bt.isReverted = i));
              }),
              (Bt.refresh = function (i, s) {
                if ((!Xe && Bt.enabled) || s)
                  if (De && i && ct) de(jt, "scrollEnd", ye);
                  else {
                    !st && Yt && Yt(Bt),
                      (Xe = 1),
                      (Vt = lt()),
                      r.tween && (r.tween.kill(), (r.tween = 0)),
                      X && X.pause(),
                      Fe && t && t.revert({ kill: !1 }).invalidate(),
                      Bt.isReverted || Bt.revert(!0, !0),
                      (Bt._subPinOffset = !1);
                    for (
                      var n,
                        g,
                        _,
                        E,
                        C,
                        k,
                        O,
                        L,
                        z,
                        D,
                        I,
                        $ = Ft(),
                        Y = Gt(),
                        F = Ze ? Ze.duration() : U(ft, it),
                        H = 0,
                        N = 0,
                        W = e.end,
                        j = e.endTrigger || ze,
                        ee =
                          e.start ||
                          (0 !== e.start && ze ? (De ? "0 0" : "0 100%") : 0),
                        te = (Bt.pinnedContainer =
                          e.pinnedContainer && d(e.pinnedContainer)),
                        re = (ze && Math.max(0, At.indexOf(Bt))) || 0,
                        se = re;
                      se--;

                    )
                      (k = At[se]).end || k.refresh(0, 1) || (Xe = 1),
                        !(O = k.pin) ||
                          (O !== ze && O !== De) ||
                          k.isReverted ||
                          ((D = D || []).unshift(k), k.revert(!0, !0)),
                        k !== At[se] && (re--, se--);
                    for (
                      Z(ee) && (ee = ee(Bt)),
                        l =
                          Ee(ee, ze, $, it, Wt(), p, h, Bt, Y, It, kt, F, Ze) ||
                          (De ? -0.001 : 0),
                        Z(W) && (W = W(Bt)),
                        Q(W) &&
                          !W.indexOf("+=") &&
                          (~W.indexOf(" ")
                            ? (W = (Q(ee) ? ee.split(" ")[0] : "") + W)
                            : ((H = pe(W.substr(2), $)),
                              (W = Q(ee) ? ee : l + H),
                              (j = ze))),
                        u =
                          Math.max(
                            l,
                            Ee(
                              W || (j ? "100% 0" : F),
                              j,
                              $,
                              it,
                              Wt() + H,
                              f,
                              m,
                              Bt,
                              Y,
                              It,
                              kt,
                              F,
                              Ze
                            )
                          ) || -0.001,
                        v = u - l || ((l -= 0.01) && 0.001),
                        H = 0,
                        se = re;
                      se--;

                    )
                      (O = (k = At[se]).pin) &&
                        k.start - k._pinPush <= l &&
                        !Ze &&
                        0 < k.end &&
                        ((n = k.end - k.start),
                        ((O === ze && k.start - k._pinPush < l) || O === te) &&
                          !J(ee) &&
                          (H += n * (1 - k.progress)),
                        O === De && (N += n));
                    if (
                      ((l += H),
                      (u += H),
                      (Bt._pinPush = N),
                      p &&
                        H &&
                        (((n = {})[it.a] = "+=" + H),
                        te && (n[it.p] = "-=" + Wt()),
                        Ce.set([p, f], n)),
                      De)
                    )
                      (n = ie(De)),
                        (E = it === B),
                        (_ = Wt()),
                        (S = parseFloat(T(it.a)) + N),
                        !F &&
                          1 < u &&
                          ((I = {
                            style: (I = (Pt ? Ae.scrollingElement || Oe : ft)
                              .style),
                            value: I["overflow" + it.a.toUpperCase()],
                          })["overflow" + it.a.toUpperCase()] = "scroll"),
                        _e(De, x, n),
                        (b = Te(De)),
                        (g = St(De, !0)),
                        (L = kt && c(ft, E ? R : B)()),
                        Be &&
                          (((P = [Be + it.os2, v + N + Et]).t = x),
                          (se = Be === xt ? ne(De, it) + v + N : 0) &&
                            P.push(it.d, se + Et),
                          Nt(P),
                          te &&
                            At.forEach(function (e) {
                              e.pin === te &&
                                !1 !== e.vars.pinSpacing &&
                                (e._subPinOffset = !0);
                            }),
                          kt && Wt(V)),
                        kt &&
                          (((C = {
                            top: g.top + (E ? _ - l : L) + Et,
                            left: g.left + (E ? L : _ - l) + Et,
                            boxSizing: "border-box",
                            position: "fixed",
                          })[mt] = C.maxWidth =
                            Math.ceil(g.width) + Et),
                          (C[gt] = C.maxHeight = Math.ceil(g.height) + Et),
                          (C[_t] =
                            C[_t + wt] =
                            C[_t + vt] =
                            C[_t + bt] =
                            C[_t + yt] =
                              "0"),
                          (C[xt] = n[xt]),
                          (C[xt + wt] = n[xt + wt]),
                          (C[xt + vt] = n[xt + vt]),
                          (C[xt + bt] = n[xt + bt]),
                          (C[xt + yt] = n[xt + yt]),
                          (w = (function (e, t, r) {
                            for (
                              var i, s = [], n = e.length, a = r ? 8 : 0;
                              a < n;
                              a += 2
                            )
                              (i = e[a]), s.push(i, i in t ? t[i] : e[a + 1]);
                            return (s.t = e.t), s;
                          })(y, C, Ke)),
                          st && Wt(0)),
                        t
                          ? ((z = t._initted),
                            We(1),
                            t.render(t.duration(), !0, !0),
                            (M = T(it.a) - S + v + N),
                            (A = 1 < Math.abs(v - M)),
                            kt && A && w.splice(w.length - 2, 2),
                            t.render(0, !0, !0),
                            z || t.invalidate(!0),
                            t.parent || t.totalTime(t.totalTime()),
                            We(0))
                          : (M = v),
                        I &&
                          (I.value
                            ? (I.style["overflow" + it.a.toUpperCase()] =
                                I.value)
                            : I.style.removeProperty("overflow-" + it.a));
                    else if (ze && Wt() && !Ze)
                      for (g = ze.parentNode; g && g !== Le; )
                        g._pinOffset &&
                          ((l -= g._pinOffset), (u -= g._pinOffset)),
                          (g = g.parentNode);
                    D &&
                      D.forEach(function (e) {
                        return e.revert(!1, !0);
                      }),
                      (Bt.start = l),
                      (Bt.end = u),
                      (a = o = st ? V : Wt()),
                      Ze || st || (a < V && Wt(V), (Bt.scroll.rec = 0)),
                      Bt.revert(!1, !0),
                      G &&
                        ((Ht = -1),
                        Bt.isActive && Wt(l + v * q),
                        G.restart(!0)),
                      (Xe = 0),
                      t &&
                        dt &&
                        (t._initted || K) &&
                        t.progress() !== K &&
                        t.progress(K, !0).render(t.time(), !0, !0),
                      (q === Bt.progress && !Ze) ||
                        (t && !dt && t.totalProgress(q, !0),
                        (Bt.progress = (a - l) / v === q ? 0 : q)),
                      De && Be && (x._pinOffset = Math.round(Bt.progress * M)),
                      xe && !st && xe(Bt);
                  }
              }),
              (Bt.getVelocity = function () {
                return ((Wt() - o) / (lt() - Re)) * 1e3 || 0;
              }),
              (Bt.endAnimation = function () {
                te(Bt.callbackAnimation),
                  t &&
                    (X
                      ? X.progress(1)
                      : t.paused()
                      ? dt || te(t, Bt.direction < 0, 1)
                      : te(t, t.reversed()));
              }),
              (Bt.labelToScroll = function (e) {
                return (
                  (t &&
                    t.labels &&
                    (l || Bt.refresh() || l) +
                      (t.labels[e] / t.duration()) * v) ||
                  0
                );
              }),
              (Bt.getTrailing = function (e) {
                var t = At.indexOf(Bt),
                  r =
                    0 < Bt.direction
                      ? At.slice(0, t).reverse()
                      : At.slice(t + 1);
                return (
                  Q(e)
                    ? r.filter(function (t) {
                        return t.vars.preventOverlaps === e;
                      })
                    : r
                ).filter(function (e) {
                  return 0 < Bt.direction ? e.end <= l : e.start >= u;
                });
              }),
              (Bt.update = function (e, i, s) {
                if (!Ze || s || e) {
                  var n,
                    d,
                    c,
                    p,
                    f,
                    m,
                    g,
                    y = st ? V : Bt.scroll(),
                    _ = e ? 0 : (y - l) / v,
                    T = _ < 0 ? 0 : 1 < _ ? 1 : _ || 0,
                    P = Bt.progress;
                  if (
                    (i &&
                      ((o = a),
                      (a = Ze ? Wt() : y),
                      Ue && (($ = I), (I = t && !dt ? t.totalProgress() : T))),
                    He &&
                      !T &&
                      De &&
                      !Xe &&
                      !ot &&
                      ct &&
                      l < y + ((y - o) / (lt() - Re)) * He &&
                      (T = 1e-4),
                    T !== P && Bt.enabled)
                  ) {
                    if (
                      ((p =
                        (f =
                          (n = Bt.isActive = !!T && T < 1) != (!!P && P < 1)) ||
                        !!T != !!P),
                      (Bt.direction = P < T ? 1 : -1),
                      (Bt.progress = T),
                      p &&
                        !Xe &&
                        ((d = T && !P ? 0 : 1 === T ? 1 : 1 === P ? 2 : 3),
                        dt &&
                          ((c =
                            (!f && "none" !== zt[d + 1] && zt[d + 1]) || zt[d]),
                          (g =
                            t &&
                            ("complete" === c || "reset" === c || c in t)))),
                      tt &&
                        (f || g) &&
                        (g || Pe || !t) &&
                        (Z(tt)
                          ? tt(Bt)
                          : Bt.getTrailing(tt).forEach(function (e) {
                              return e.endAnimation();
                            })),
                      dt ||
                        (!X || Xe || ot
                          ? t && t.totalProgress(T, !!Xe)
                          : (X._dp._time - X._start !== X._time &&
                              X.render(X._dp._time - X._start),
                            X.resetTo
                              ? X.resetTo(
                                  "totalProgress",
                                  T,
                                  t._tTime / t._tDur
                                )
                              : ((X.vars.totalProgress = T),
                                X.invalidate().restart()))),
                      De)
                    )
                      if ((e && Be && (x.style[Be + it.os2] = C), kt)) {
                        if (p) {
                          if (
                            ((m =
                              !e && P < T && y < u + 1 && y + 1 >= U(ft, it)),
                            Ke)
                          )
                            if (e || (!n && !m)) Se(De, x);
                            else {
                              var O = St(De, !0),
                                L = y - l;
                              Se(
                                De,
                                Le,
                                O.top + (it === B ? L : 0) + Et,
                                O.left + (it === B ? 0 : L) + Et
                              );
                            }
                          Nt(n || m ? w : b),
                            (A && T < 1 && n) || E(S + (1 !== T || m ? 0 : M));
                        }
                      } else E(N(S + M * T));
                    !Ue || r.tween || Xe || ot || G.restart(!0),
                      ge &&
                        (f || (je && T && (T < 1 || !rt))) &&
                        Ie(ge.targets).forEach(function (e) {
                          return e.classList[n || je ? "add" : "remove"](
                            ge.className
                          );
                        }),
                      !he || dt || e || he(Bt),
                      p && !Xe
                        ? (dt &&
                            (g &&
                              ("complete" === c
                                ? t.pause().totalProgress(1)
                                : "reset" === c
                                ? t.restart(!0).pause()
                                : "restart" === c
                                ? t.restart(!0)
                                : t[c]()),
                            he && he(Bt)),
                          (!f && rt) ||
                            (be && f && re(Bt, be),
                            Lt[d] && re(Bt, Lt[d]),
                            je && (1 === T ? Bt.kill(!1, 1) : (Lt[d] = 0)),
                            f || (Lt[(d = 1 === T ? 1 : 3)] && re(Bt, Lt[d]))),
                          Je &&
                            !n &&
                            Math.abs(Bt.getVelocity()) > (J(Je) ? Je : 2500) &&
                            (te(Bt.callbackAnimation),
                            X
                              ? X.progress(1)
                              : te(t, "reverse" === c ? 1 : !T, 1)))
                        : dt && he && !Xe && he(Bt);
                  }
                  if (z) {
                    var D = Ze
                      ? (y / Ze.duration()) * (Ze._caScrollDist || 0)
                      : y;
                    k(D + (h._isFlipped ? 1 : 0)), z(D);
                  }
                  le && le((-y / Ze.duration()) * (Ze._caScrollDist || 0));
                }
              }),
              (Bt.enable = function (e, t) {
                Bt.enabled ||
                  ((Bt.enabled = !0),
                  de(ft, "resize", ve),
                  de(Pt ? Ae : ft, "scroll", me),
                  Yt && de(jt, "refreshInit", Yt),
                  !1 !== e && ((Bt.progress = q = 0), (a = o = Ht = Wt())),
                  !1 !== t && Bt.refresh());
              }),
              (Bt.getTween = function (e) {
                return e && r ? r.tween : X;
              }),
              (Bt.setPositions = function (e, t) {
                De &&
                  ((S += e - l),
                  (M += t - e - v),
                  Be === xt && Bt.adjustPinSpacing(t - e - v)),
                  (Bt.start = l = e),
                  (Bt.end = u = t),
                  (v = t - e),
                  Bt.update();
              }),
              (Bt.adjustPinSpacing = function (e) {
                if (P) {
                  var t = P.indexOf(it.d) + 1;
                  (P[t] = parseFloat(P[t]) + e + Et),
                    (P[1] = parseFloat(P[1]) + e + Et),
                    Nt(P);
                }
              }),
              (Bt.disable = function (e, t) {
                if (
                  Bt.enabled &&
                  (!1 !== e && Bt.revert(!0, !0),
                  (Bt.enabled = Bt.isActive = !1),
                  t || (X && X.pause()),
                  (V = 0),
                  s && (s.uncache = 1),
                  Yt && ce(jt, "refreshInit", Yt),
                  G && (G.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                  !Pt)
                ) {
                  for (var i = At.length; i--; )
                    if (At[i].scroller === ft && At[i] !== Bt) return;
                  ce(ft, "resize", ve), ce(ft, "scroll", me);
                }
              }),
              (Bt.kill = function (r, i) {
                Bt.disable(r, i), X && !i && X.kill(), we && delete Ot[we];
                var n = At.indexOf(Bt);
                0 <= n && At.splice(n, 1),
                  n === Ge && 0 < Xt && Ge--,
                  (n = 0),
                  At.forEach(function (e) {
                    return e.scroller === Bt.scroller && (n = 1);
                  }),
                  n || st || (Bt.scroll.rec = 0),
                  t &&
                    ((t.scrollTrigger = null),
                    r && t.revert({ kill: !1 }),
                    i || t.kill()),
                  p &&
                    [p, f, h, m].forEach(function (e) {
                      return e.parentNode && e.parentNode.removeChild(e);
                    }),
                  at === Bt && (at = 0),
                  De &&
                    (s && (s.uncache = 1),
                    (n = 0),
                    At.forEach(function (e) {
                      return e.pin === De && n++;
                    }),
                    n || (s.spacer = 0)),
                  e.onKill && e.onKill(Bt);
              }),
              Bt.enable(!1, !1),
              ue && ue(Bt),
              t && t.add && !v
                ? Ce.delayedCall(0.01, function () {
                    return l || u || Bt.refresh();
                  }) &&
                  (v = 0.01) &&
                  (l = u = 0)
                : Bt.refresh(),
              De &&
                (function () {
                  if (nt !== $t) {
                    var e = (nt = $t);
                    requestAnimationFrame(function () {
                      return e === $t && Rt(!0);
                    });
                  }
                })();
          } else this.update = this.refresh = this.kill = H;
        }),
        (jt.register = function (e) {
          return (
            Pe ||
              ((Ce = e || V()),
              q() && window.document && jt.enable(),
              (Pe = ut)),
            Pe
          );
        }),
        (jt.defaults = function (e) {
          if (e) for (var t in e) Ct[t] = e[t];
          return Ct;
        }),
        (jt.disable = function (e, t) {
          (ut = 0),
            At.forEach(function (r) {
              return r[t ? "kill" : "disable"](e);
            }),
            ce(ke, "wheel", me),
            ce(Ae, "scroll", me),
            clearInterval(Be),
            ce(Ae, "touchcancel", H),
            ce(Le, "touchstart", H),
            le(ce, Ae, "pointerdown,touchstart,mousedown", F),
            le(ce, Ae, "pointerup,touchend,mouseup", G),
            De.kill(),
            K(ce);
          for (var r = 0; r < O.length; r += 3)
            ue(ce, O[r], O[r + 1]), ue(ce, O[r], O[r + 2]);
        }),
        (jt.enable = function () {
          if (
            ((ke = window),
            (Ae = document),
            (Oe = Ae.documentElement),
            (Le = Ae.body),
            Ce &&
              ((Ie = Ce.utils.toArray),
              ($e = Ce.utils.clamp),
              (et = Ce.core.context || H),
              (We = Ce.core.suppressOverwrites || H),
              (tt = ke.history.scrollRestoration || "auto"),
              Ce.core.globals("ScrollTrigger", jt),
              Le))
          ) {
            (ut = 1),
              X.register(Ce),
              (jt.isTouch = X.isTouch),
              (Je =
                X.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              de(ke, "wheel", me),
              (ze = [ke, Ae, Oe, Le]),
              Ce.matchMedia
                ? ((jt.matchMedia = function (e) {
                    var t,
                      r = Ce.matchMedia();
                    for (t in e) r.add(t, e[t]);
                    return r;
                  }),
                  Ce.addEventListener("matchMediaInit", function () {
                    return be();
                  }),
                  Ce.addEventListener("matchMediaRevert", function () {
                    return we();
                  }),
                  Ce.addEventListener("matchMedia", function () {
                    Rt(0, 1), Dt("matchMedia");
                  }),
                  Ce.matchMedia("(orientation: portrait)", function () {
                    return ge(), ge;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              ge(),
              de(Ae, "scroll", me);
            var e,
              t,
              r = Le.style,
              i = r.borderTopStyle,
              s = Ce.core.Animation.prototype;
            for (
              s.revert ||
                Object.defineProperty(s, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                r.borderTopStyle = "solid",
                e = St(Le),
                B.m = Math.round(e.top + B.sc()) || 0,
                R.m = Math.round(e.left + R.sc()) || 0,
                i
                  ? (r.borderTopStyle = i)
                  : r.removeProperty("border-top-style"),
                Be = setInterval(he, 250),
                Ce.delayedCall(0.5, function () {
                  return (ot = 0);
                }),
                de(Ae, "touchcancel", H),
                de(Le, "touchstart", H),
                le(de, Ae, "pointerdown,touchstart,mousedown", F),
                le(de, Ae, "pointerup,touchend,mouseup", G),
                Fe = Ce.utils.checkPrefix("transform"),
                Gt.push(Fe),
                Pe = lt(),
                De = Ce.delayedCall(0.2, Rt).pause(),
                qe = [
                  Ae,
                  "visibilitychange",
                  function () {
                    var e = ke.innerWidth,
                      t = ke.innerHeight;
                    Ae.hidden
                      ? ((He = e), (Ne = t))
                      : (He === e && Ne === t) || ve();
                  },
                  Ae,
                  "DOMContentLoaded",
                  Rt,
                  ke,
                  "load",
                  Rt,
                  ke,
                  "resize",
                  ve,
                ],
                K(de),
                At.forEach(function (e) {
                  return e.enable(0, 1);
                }),
                t = 0;
              t < O.length;
              t += 3
            )
              ue(ce, O[t], O[t + 1]), ue(ce, O[t], O[t + 2]);
          }
        }),
        (jt.config = function (e) {
          "limitCallbacks" in e && (rt = !!e.limitCallbacks);
          var t = e.syncInterval;
          (t && clearInterval(Be)) || ((Be = t) && setInterval(he, t)),
            "ignoreMobileResize" in e &&
              (Ke = 1 === jt.isTouch && e.ignoreMobileResize),
            "autoRefreshEvents" in e &&
              (K(ce) || K(de, e.autoRefreshEvents || "none"),
              (je = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
        }),
        (jt.scrollerProxy = function (e, t) {
          var r = d(e),
            i = O.indexOf(r),
            s = W(r);
          ~i && O.splice(i, s ? 6 : 2),
            t && (s ? L.unshift(ke, t, Le, t, Oe, t) : L.unshift(r, t));
        }),
        (jt.clearMatchMedia = function (e) {
          At.forEach(function (t) {
            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
          });
        }),
        (jt.isInViewport = function (e, t, r) {
          var i = (Q(e) ? d(e) : e).getBoundingClientRect(),
            s = i[r ? mt : gt] * t || 0;
          return r
            ? 0 < i.right - s && i.left + s < ke.innerWidth
            : 0 < i.bottom - s && i.top + s < ke.innerHeight;
        }),
        (jt.positionInViewport = function (e, t, r) {
          Q(e) && (e = d(e));
          var i = e.getBoundingClientRect(),
            s = i[r ? mt : gt],
            n =
              null == t
                ? s / 2
                : t in Pt
                ? Pt[t] * s
                : ~t.indexOf("%")
                ? (parseFloat(t) * s) / 100
                : parseFloat(t) || 0;
          return r
            ? (i.left + n) / ke.innerWidth
            : (i.top + n) / ke.innerHeight;
        }),
        (jt.killAll = function (e) {
          if (
            (At.slice(0).forEach(function (e) {
              return "ScrollSmoother" !== e.vars.id && e.kill();
            }),
            !0 !== e)
          ) {
            var t = Lt.killAll || [];
            (Lt = {}),
              t.forEach(function (e) {
                return e();
              });
          }
        }),
        jt);
    function jt(e, t) {
      Pe ||
        jt.register(Ce) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(e, t);
    }
    function Ut(e, t, r, i) {
      return (
        i < t ? e(i) : t < 0 && e(0),
        i < r ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
      );
    }
    function Kt(e, t) {
      !0 === t
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            !0 === t
              ? "auto"
              : t
              ? "pan-" + t + (X.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Oe && Kt(Le, t);
    }
    function Qt(e) {
      var t,
        r = e.event,
        i = e.target,
        s = e.axis,
        n = (r.changedTouches ? r.changedTouches[0] : r).target,
        a = n._gsap || Ce.core.getCache(n),
        o = lt();
      if (!a._isScrollT || 2e3 < o - a._isScrollT) {
        for (
          ;
          n &&
          n !== Le &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            (!er[(t = ie(n)).overflowY] && !er[t.overflowX]));

        )
          n = n.parentNode;
        (a._isScroll =
          n &&
          n !== i &&
          !W(n) &&
          (er[(t = ie(n)).overflowY] || er[t.overflowX])),
          (a._isScrollT = o);
      }
      (!a._isScroll && "x" !== s) || (r.stopPropagation(), (r._gsapAllow = !0));
    }
    function Zt(e, t, r, i) {
      return X.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (i = i && Qt),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && de(Ae, X.eventTypes[0], rr, !1, !0);
        },
        onDisable: function () {
          return ce(Ae, X.eventTypes[0], rr, !0);
        },
      });
    }
    (Wt.version = "3.11.4"),
      (Wt.saveStyles = function (e) {
        return e
          ? Ie(e).forEach(function (e) {
              if (e && e.style) {
                var t = It.indexOf(e);
                0 <= t && It.splice(t, 5),
                  It.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    Ce.core.getCache(e),
                    et()
                  );
              }
            })
          : It;
      }),
      (Wt.revert = function (e, t) {
        return be(!e, t);
      }),
      (Wt.create = function (e, t) {
        return new Wt(e, t);
      }),
      (Wt.refresh = function (e) {
        return e ? ve() : (Pe || Wt.register()) && Rt(!0);
      }),
      (Wt.update = function (e) {
        return ++O.cache && Yt(!0 === e ? 2 : 0);
      }),
      (Wt.clearScrollMemory = xe),
      (Wt.maxScroll = function (e, t) {
        return U(e, t ? R : B);
      }),
      (Wt.getScrollFunc = function (e, t) {
        return c(d(e), t ? R : B);
      }),
      (Wt.getById = function (e) {
        return Ot[e];
      }),
      (Wt.getAll = function () {
        return At.filter(function (e) {
          return "ScrollSmoother" !== e.vars.id;
        });
      }),
      (Wt.isScrolling = function () {
        return !!ct;
      }),
      (Wt.snapDirectional = oe),
      (Wt.addEventListener = function (e, t) {
        var r = Lt[e] || (Lt[e] = []);
        ~r.indexOf(t) || r.push(t);
      }),
      (Wt.removeEventListener = function (e, t) {
        var r = Lt[e],
          i = r && r.indexOf(t);
        0 <= i && r.splice(i, 1);
      }),
      (Wt.batch = function (e, t) {
        function r(e, t) {
          var r = [],
            i = [],
            s = Ce.delayedCall(a, function () {
              t(r, i), (r = []), (i = []);
            }).pause();
          return function (e) {
            r.length || s.restart(!0),
              r.push(e.trigger),
              i.push(e),
              o <= r.length && s.progress(1);
          };
        }
        var i,
          s = [],
          n = {},
          a = t.interval || 0.016,
          o = t.batchMax || 1e9;
        for (i in t)
          n[i] =
            "on" === i.substr(0, 2) && Z(t[i]) && "onRefreshInit" !== i
              ? r(0, t[i])
              : t[i];
        return (
          Z(o) &&
            ((o = o()),
            de(Wt, "refresh", function () {
              return (o = t.batchMax());
            })),
          Ie(e).forEach(function (e) {
            var t = {};
            for (i in n) t[i] = n[i];
            (t.trigger = e), s.push(Wt.create(t));
          }),
          s
        );
      });
    var Jt,
      er = { auto: 1, scroll: 1 },
      tr = /(input|label|select|textarea)/i,
      rr = function (e) {
        var t = tr.test(e.target.tagName);
        (t || Jt) && ((e._gsapAllow = !0), (Jt = t));
      };
    (Wt.sort = function (e) {
      return At.sort(
        e ||
          function (e, t) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              e.start -
              (t.start + -1e6 * (t.vars.refreshPriority || 0))
            );
          }
      );
    }),
      (Wt.observe = function (e) {
        return new X(e);
      }),
      (Wt.normalizeScroll = function (e) {
        if (void 0 === e) return Ue;
        if (!0 === e && Ue) return Ue.enable();
        if (!1 === e) return Ue && Ue.kill();
        var t =
          e instanceof X
            ? e
            : (function (e) {
                function t() {
                  return (l = !1);
                }
                function r() {
                  (a = U(y, B)),
                    (A = $e(Je ? 1 : 0, a)),
                    m && (k = $e(0, U(y, R))),
                    (o = $t);
                }
                function i() {
                  (x._gsap.y = N(parseFloat(x._gsap.y) + _.offset) + "px"),
                    (x.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      parseFloat(x._gsap.y) +
                      ", 0, 1)"),
                    (_.offset = _.cacheID = 0);
                }
                function s() {
                  r(),
                    u.isActive() &&
                      u.vars.scrollY > a &&
                      (_() > a
                        ? u.progress(1) && _(a)
                        : u.resetTo("scrollY", a));
                }
                ee(e) || (e = {}),
                  (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
                  e.type || (e.type = "wheel,touch"),
                  (e.debounce = !!e.debounce),
                  (e.id = e.id || "normalizer");
                var n,
                  a,
                  o,
                  l,
                  u,
                  p,
                  f,
                  h,
                  m = e.normalizeScrollX,
                  g = e.momentum,
                  v = e.allowNestedScroll,
                  y = d(e.target) || Oe,
                  w = Ce.core.globals().ScrollSmoother,
                  b = w && w.get(),
                  x =
                    Je &&
                    ((e.content && d(e.content)) ||
                      (b && !1 !== e.content && !b.smooth() && b.content())),
                  _ = c(y, B),
                  T = c(y, R),
                  E = 1,
                  S =
                    (X.isTouch && ke.visualViewport
                      ? ke.visualViewport.scale * ke.visualViewport.width
                      : ke.outerWidth) / ke.innerWidth,
                  M = 0,
                  C = Z(g)
                    ? function () {
                        return g(n);
                      }
                    : function () {
                        return g || 2.8;
                      },
                  P = Zt(y, e.type, !0, v),
                  k = H,
                  A = H;
                return (
                  x && Ce.set(x, { y: "+=0" }),
                  (e.ignoreCheck = function (e) {
                    return (
                      (Je &&
                        "touchmove" === e.type &&
                        (function () {
                          if (l) {
                            requestAnimationFrame(t);
                            var e = N(n.deltaY / 2),
                              r = A(_.v - e);
                            if (x && r !== _.v + _.offset) {
                              _.offset = r - _.v;
                              var s = N(
                                (parseFloat(x && x._gsap.y) || 0) - _.offset
                              );
                              (x.style.transform =
                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                                s +
                                ", 0, 1)"),
                                (x._gsap.y = s + "px"),
                                (_.cacheID = O.cache),
                                Yt();
                            }
                            return !0;
                          }
                          _.offset && i(), (l = !0);
                        })()) ||
                      (1.05 < E && "touchstart" !== e.type) ||
                      n.isGesturing ||
                      (e.touches && 1 < e.touches.length)
                    );
                  }),
                  (e.onPress = function () {
                    var e = E;
                    (E = N(
                      ((ke.visualViewport && ke.visualViewport.scale) || 1) / S
                    )),
                      u.pause(),
                      e !== E && Kt(y, 1.01 < E || (!m && "x")),
                      (p = T()),
                      (f = _()),
                      r(),
                      (o = $t);
                  }),
                  (e.onRelease = e.onGestureStart =
                    function (e, t) {
                      if ((_.offset && i(), t)) {
                        O.cache++;
                        var r,
                          n,
                          o = C();
                        m &&
                          ((n = (r = T()) + (0.05 * o * -e.velocityX) / 0.227),
                          (o *= Ut(T, r, n, U(y, R))),
                          (u.vars.scrollX = k(n))),
                          (n = (r = _()) + (0.05 * o * -e.velocityY) / 0.227),
                          (o *= Ut(_, r, n, U(y, B))),
                          (u.vars.scrollY = A(n)),
                          u.invalidate().duration(o).play(0.01),
                          ((Je && u.vars.scrollY >= a) || a - 1 <= r) &&
                            Ce.to({}, { onUpdate: s, duration: o });
                      } else h.restart(!0);
                    }),
                  (e.onWheel = function () {
                    u._ts && u.pause(), 1e3 < lt() - M && ((o = 0), (M = lt()));
                  }),
                  (e.onChange = function (e, t, s, n, a) {
                    if (
                      ($t !== o && r(),
                      t &&
                        m &&
                        T(
                          k(n[2] === t ? p + (e.startX - e.x) : T() + t - n[1])
                        ),
                      s)
                    ) {
                      _.offset && i();
                      var l = a[2] === s,
                        d = l ? f + e.startY - e.y : _() + s - a[1],
                        c = A(d);
                      l && d !== c && (f += c - d), _(c);
                    }
                    (s || t) && Yt();
                  }),
                  (e.onEnable = function () {
                    Kt(y, !m && "x"),
                      Wt.addEventListener("refresh", s),
                      de(ke, "resize", s),
                      _.smooth &&
                        ((_.target.style.scrollBehavior = "auto"),
                        (_.smooth = T.smooth = !1)),
                      P.enable();
                  }),
                  (e.onDisable = function () {
                    Kt(y, !0),
                      ce(ke, "resize", s),
                      Wt.removeEventListener("refresh", s),
                      P.kill();
                  }),
                  (e.lockAxis = !1 !== e.lockAxis),
                  ((n = new X(e)).iOS = Je) && !_() && _(1),
                  Je && Ce.ticker.add(H),
                  (h = n._dc),
                  (u = Ce.to(n, {
                    ease: "power4",
                    paused: !0,
                    scrollX: m ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    onComplete: h.vars.onComplete,
                  })),
                  n
                );
              })(e);
        return (
          Ue && Ue.target === t.target && Ue.kill(), W(t.target) && (Ue = t), t
        );
      }),
      (Wt.core = {
        _getVelocityProp: u,
        _inputObserver: Zt,
        _scrollers: O,
        _proxies: L,
        bridge: {
          ss: function () {
            ct || Dt("scrollStart"), (ct = lt());
          },
          ref: function () {
            return Xe;
          },
        },
      }),
      V() && Ce.registerPlugin(Wt),
      (e.ScrollTrigger = Wt),
      (e.default = Wt),
      "undefined" == typeof window || window !== e
        ? Object.defineProperty(e, "__esModule", { value: !0 })
        : delete e.default;
  });
const ua = navigator.userAgent.toLowerCase(),
  av = navigator.appVersion.toLowerCase(),
  isWindowsPhone = /windows phone|iemobile|wpdesktop/.test(ua),
  isDroidPhone = !isWindowsPhone && /android.*mobile/.test(ua),
  isDroidTablet = !isWindowsPhone && !isDroidPhone && /android/i.test(ua),
  isDroid = isDroidPhone || isDroidTablet,
  isIos = !isWindowsPhone && /ip(hone|od|ad)/i.test(ua) && !window.MSStream,
  isIpad = !isWindowsPhone && /ipad/i.test(ua) && isIos,
  isTablet = isDroidTablet || isIpad,
  isMobile = isDroidPhone || (isIos && !isIpad) || isWindowsPhone,
  isDevice = isMobile || isTablet,
  isFirefox = ua.indexOf("firefox") > -1,
  isSafari = !!ua.match(/version\/[\d\.]+.*safari/),
  isOpera = ua.indexOf("opr") > -1,
  isIE11 = !window.ActiveXObject && "ActiveXObject" in window,
  isIE = av.indexOf("msie") > -1 || isIE11 || av.indexOf("edge") > -1,
  isEdge = ua.indexOf("edge") > -1,
  isChrome =
    null !== window.chrome &&
    void 0 !== window.chrome &&
    "google inc." == navigator.vendor.toLowerCase() &&
    !isOpera &&
    !isEdge,
  deviceSettings = {
    isDesktop: !isMobile && !isTablet,
    isAndroid: isDroid,
    isFirefox: isFirefox,
    isIE: isIE,
    isiPhone: isIos && !isTablet,
    isiPad: isIpad,
    isiOS: isIos,
    isMobile: isMobile,
    isChrome: isChrome,
    isSafari: isSafari,
    isTablet: isTablet,
  };
(window.checkDeviceSettings = () => {
  const e = document.body,
    t = deviceSettings.isDesktop
      ? "isDesktop"
      : deviceSettings.isTablet
      ? "isTablet"
      : "isMobile";
  e.classList.add(t),
    deviceSettings.isChrome && e.classList.add("isChrome"),
    deviceSettings.isSafari && e.classList.add("isSafari"),
    deviceSettings.isTablet && e.classList.add("isTablet"),
    deviceSettings.isDesktop ||
      Array.from(document.querySelectorAll("video")).forEach((e) => {
        e.hasAttribute("data-mobile-video");
      });
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
          t());
  })(this, function () {
    "use strict";
    function e(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function t(r, i) {
      void 0 === r && (r = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach((s) => {
          void 0 === r[s]
            ? (r[s] = i[s])
            : e(i[s]) &&
              e(r[s]) &&
              Object.keys(i[s]).length > 0 &&
              t(r[s], i[s]);
        });
    }
    const r = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function i() {
      const e = "undefined" != typeof document ? document : {};
      return t(e, r), e;
    }
    const s = {
      document: r,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function n() {
      const e = "undefined" != typeof window ? window : {};
      return t(e, s), e;
    }
    function a(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function o() {
      return Date.now();
    }
    function l(e, t) {
      void 0 === t && (t = "x");
      const r = n();
      let i, s, a;
      const o = (function (e) {
        const t = n();
        let r;
        return (
          t.getComputedStyle && (r = t.getComputedStyle(e, null)),
          !r && e.currentStyle && (r = e.currentStyle),
          r || (r = e.style),
          r
        );
      })(e);
      return (
        r.WebKitCSSMatrix
          ? ((s = o.transform || o.webkitTransform).split(",").length > 6 &&
              (s = s
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (a = new r.WebKitCSSMatrix("none" === s ? "" : s)))
          : (i = (a =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,"))
              .toString()
              .split(",")),
        "x" === t &&
          (s = r.WebKitCSSMatrix
            ? a.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (s = r.WebKitCSSMatrix
            ? a.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        s || 0
      );
    }
    function d(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function c(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function u() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let r = 1; r < arguments.length; r += 1) {
        const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
        if (null != i && !c(i)) {
          const r = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, s = r.length; t < s; t += 1) {
            const s = r[t],
              n = Object.getOwnPropertyDescriptor(i, s);
            void 0 !== n &&
              n.enumerable &&
              (d(e[s]) && d(i[s])
                ? i[s].__swiper__
                  ? (e[s] = i[s])
                  : u(e[s], i[s])
                : !d(e[s]) && d(i[s])
                ? ((e[s] = {}), i[s].__swiper__ ? (e[s] = i[s]) : u(e[s], i[s]))
                : (e[s] = i[s]));
          }
        }
      }
      return e;
    }
    function p(e, t, r) {
      e.style.setProperty(t, r);
    }
    function f(e) {
      let { swiper: t, targetPosition: r, side: i } = e;
      const s = n(),
        a = -t.translate;
      let o,
        l = null;
      const d = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        s.cancelAnimationFrame(t.cssModeFrameID);
      const c = r > a ? "next" : "prev",
        u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        p = () => {
          (o = new Date().getTime()), null === l && (l = o);
          const e = Math.max(Math.min((o - l) / d, 1), 0),
            n = 0.5 - Math.cos(e * Math.PI) / 2;
          let c = a + n * (r - a);
          if ((u(c, r) && (c = r), t.wrapperEl.scrollTo({ [i]: c }), u(c, r)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: c });
              }),
              void s.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = s.requestAnimationFrame(p);
        };
      p();
    }
    function h(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function m(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function g(e, t) {
      void 0 === t && (t = []);
      const r = document.createElement(e);
      return r.classList.add(...(Array.isArray(t) ? t : [t])), r;
    }
    function v(e) {
      const t = n(),
        r = i(),
        s = e.getBoundingClientRect(),
        a = r.body,
        o = e.clientTop || a.clientTop || 0,
        l = e.clientLeft || a.clientLeft || 0,
        d = e === t ? t.scrollY : e.scrollTop,
        c = e === t ? t.scrollX : e.scrollLeft;
      return { top: s.top + d - o, left: s.left + c - l };
    }
    function y(e, t) {
      return n().getComputedStyle(e, null).getPropertyValue(t);
    }
    function w(e) {
      let t,
        r = e;
      if (r) {
        for (t = 0; null !== (r = r.previousSibling); )
          1 === r.nodeType && (t += 1);
        return t;
      }
    }
    function b(e, t) {
      const r = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && r.push(i) : r.push(i), (i = i.parentElement);
      return r;
    }
    function x(e, t) {
      t &&
        e.addEventListener("transitionend", function r(i) {
          i.target === e &&
            (t.call(e, i), e.removeEventListener("transitionend", r));
        });
    }
    function _(e, t, r) {
      const i = n();
      return r
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let T, E, S;
    function M() {
      return (
        T ||
          (T = (function () {
            const e = n(),
              t = i();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        T
      );
    }
    function C(e) {
      return (
        void 0 === e && (e = {}),
        E ||
          (E = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const r = M(),
              i = n(),
              s = i.navigator.platform,
              a = t || i.navigator.userAgent,
              o = { ios: !1, android: !1 },
              l = i.screen.width,
              d = i.screen.height,
              c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = a.match(/(iPad).*OS\s([\d_]+)/);
            const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
              f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === s;
            let m = "MacIntel" === s;
            return (
              !u &&
                m &&
                r.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${d}`) >= 0 &&
                ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]),
                (m = !1)),
              c && !h && ((o.os = "android"), (o.android = !0)),
              (u || f || p) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        E
      );
    }
    function P() {
      return (
        S ||
          (S = (function () {
            const e = n();
            let t = !1;
            function r() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (r()) {
              const r = String(e.navigator.userAgent);
              if (r.includes("Version/")) {
                const [e, i] = r
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || r(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        S
      );
    }
    const k = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const r = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        );
        if (r) {
          const t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
          t && t.remove();
        }
      },
      A = (e, t) => {
        if (!e.slides[t]) return;
        const r = e.slides[t].querySelector('[loading="lazy"]');
        r && r.removeAttribute("loading");
      },
      O = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const r = e.slides.length;
        if (!r || !t || t < 0) return;
        t = Math.min(t, r);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          s = e.activeIndex,
          n = s + i - 1;
        if (e.params.rewind)
          for (let i = s - t; i <= n + t; i += 1) {
            const t = ((i % r) + r) % r;
            t !== s && t > n && A(e, t);
          }
        else
          for (let i = Math.max(n - t, 0); i <= Math.min(n + t, r - 1); i += 1)
            i !== s && i > n && A(e, i);
      };
    function L(e) {
      let { swiper: t, runCallbacks: r, direction: i, step: s } = e;
      const { activeIndex: n, previousIndex: a } = t;
      let o = i;
      if (
        (o || (o = n > a ? "next" : n < a ? "prev" : "reset"),
        t.emit(`transition${s}`),
        r && n !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${s}`);
        t.emit(`slideChangeTransition${s}`),
          "next" === o
            ? t.emit(`slideNextTransition${s}`)
            : t.emit(`slidePrevTransition${s}`);
      }
    }
    function z() {
      const e = this,
        { params: t, el: r } = e;
      if (r && 0 === r.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: s, snapGrid: n } = e,
        a = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const o = a && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      o
        ? e.params.loop && !a
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }
    let D = !1;
    function I() {}
    const $ = (e, t) => {
        const r = i(),
          { params: s, el: n, wrapperEl: a, device: o } = e,
          l = !!s.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          c = t;
        n[d]("pointerdown", e.onTouchStart, { passive: !1 }),
          r[d]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
          r[d]("pointerup", e.onTouchEnd, { passive: !0 }),
          r[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
          r[d]("pointerout", e.onTouchEnd, { passive: !0 }),
          r[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
          (s.preventClicks || s.preventClicksPropagation) &&
            n[d]("click", e.onClick, !0),
          s.cssMode && a[d]("scroll", e.onScroll),
          s.updateOnWindowResize
            ? e[c](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                z,
                !0
              )
            : e[c]("observerUpdate", z, !0),
          n[d]("load", e.onLoad, { capture: !0 });
      },
      R = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var B = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function X(e, t) {
      return function (r) {
        void 0 === r && (r = {});
        const i = Object.keys(r)[0],
          s = r[i];
        "object" == typeof s && null !== s
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in s
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                u(t, r))
              : u(t, r))
          : u(t, r);
      };
    }
    const Y = {
        eventsEmitter: {
          on(e, t, r) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const s = r ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][s](t);
              }),
              i
            );
          },
          once(e, t, r) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            function s() {
              i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
              for (
                var r = arguments.length, n = new Array(r), a = 0;
                a < r;
                a++
              )
                n[a] = arguments[a];
              t.apply(i, n);
            }
            return (s.__emitterProxy = t), i.on(e, s, r);
          },
          onAny(e, t) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" != typeof e) return r;
            const i = t ? "unshift" : "push";
            return (
              r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e),
              r
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const r = t.eventsAnyListeners.indexOf(e);
            return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
          },
          off(e, t) {
            const r = this;
            return !r.eventsListeners || r.destroyed
              ? r
              : r.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (r.eventsListeners[e] = [])
                    : r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach((i, s) => {
                        (i === t ||
                          (i.__emitterProxy && i.__emitterProxy === t)) &&
                          r.eventsListeners[e].splice(s, 1);
                      });
                }),
                r)
              : r;
          },
          emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, r, i;
            for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
              n[a] = arguments[a];
            return (
              "string" == typeof n[0] || Array.isArray(n[0])
                ? ((t = n[0]), (r = n.slice(1, n.length)), (i = e))
                : ((t = n[0].events), (r = n[0].data), (i = n[0].context || e)),
              r.unshift(i),
              (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
                e.eventsAnyListeners &&
                  e.eventsAnyListeners.length &&
                  e.eventsAnyListeners.forEach((e) => {
                    e.apply(i, [t, ...r]);
                  }),
                  e.eventsListeners &&
                    e.eventsListeners[t] &&
                    e.eventsListeners[t].forEach((e) => {
                      e.apply(i, r);
                    });
              }),
              e
            );
          },
        },
        update: {
          updateSize: function () {
            const e = this;
            let t, r;
            const i = e.el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : i.clientWidth),
              (r =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : i.clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === r && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(y(i, "padding-left") || 0, 10) -
                  parseInt(y(i, "padding-right") || 0, 10)),
                (r =
                  r -
                  parseInt(y(i, "padding-top") || 0, 10) -
                  parseInt(y(i, "padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(r) && (r = 0),
                Object.assign(e, {
                  width: t,
                  height: r,
                  size: e.isHorizontal() ? t : r,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function r(e, r) {
              return parseFloat(e.getPropertyValue(t(r)) || 0);
            }
            const i = e.params,
              {
                wrapperEl: s,
                slidesEl: n,
                size: a,
                rtlTranslate: o,
                wrongRTL: l,
              } = e,
              d = e.virtual && i.virtual.enabled,
              c = d ? e.virtual.slides.length : e.slides.length,
              u = m(n, `.${e.params.slideClass}, swiper-slide`),
              f = d ? e.virtual.slides.length : u.length;
            let h = [];
            const g = [],
              v = [];
            let w = i.slidesOffsetBefore;
            "function" == typeof w && (w = i.slidesOffsetBefore.call(e));
            let b = i.slidesOffsetAfter;
            "function" == typeof b && (b = i.slidesOffsetAfter.call(e));
            const x = e.snapGrid.length,
              T = e.slidesGrid.length;
            let E = i.spaceBetween,
              S = -w,
              M = 0,
              C = 0;
            if (void 0 === a) return;
            "string" == typeof E && E.indexOf("%") >= 0
              ? (E = (parseFloat(E.replace("%", "")) / 100) * a)
              : "string" == typeof E && (E = parseFloat(E)),
              (e.virtualSize = -E),
              u.forEach((e) => {
                o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                  (e.style.marginBottom = ""),
                  (e.style.marginTop = "");
              }),
              i.centeredSlides &&
                i.cssMode &&
                (p(s, "--swiper-centered-offset-before", ""),
                p(s, "--swiper-centered-offset-after", ""));
            const P = i.grid && i.grid.rows > 1 && e.grid;
            let k;
            P && e.grid.initSlides(f);
            const A =
              "auto" === i.slidesPerView &&
              i.breakpoints &&
              Object.keys(i.breakpoints).filter(
                (e) => void 0 !== i.breakpoints[e].slidesPerView
              ).length > 0;
            for (let s = 0; s < f; s += 1) {
              let n;
              if (
                ((k = 0),
                u[s] && (n = u[s]),
                P && e.grid.updateSlide(s, n, f, t),
                !u[s] || "none" !== y(n, "display"))
              ) {
                if ("auto" === i.slidesPerView) {
                  A && (u[s].style[t("width")] = "");
                  const a = getComputedStyle(n),
                    o = n.style.transform,
                    l = n.style.webkitTransform;
                  if (
                    (o && (n.style.transform = "none"),
                    l && (n.style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    k = e.isHorizontal()
                      ? _(n, "width", !0)
                      : _(n, "height", !0);
                  else {
                    const e = r(a, "width"),
                      t = r(a, "padding-left"),
                      i = r(a, "padding-right"),
                      s = r(a, "margin-left"),
                      o = r(a, "margin-right"),
                      l = a.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) k = e + s + o;
                    else {
                      const { clientWidth: r, offsetWidth: a } = n;
                      k = e + t + i + s + o + (a - r);
                    }
                  }
                  o && (n.style.transform = o),
                    l && (n.style.webkitTransform = l),
                    i.roundLengths && (k = Math.floor(k));
                } else
                  (k = (a - (i.slidesPerView - 1) * E) / i.slidesPerView),
                    i.roundLengths && (k = Math.floor(k)),
                    u[s] && (u[s].style[t("width")] = `${k}px`);
                u[s] && (u[s].swiperSlideSize = k),
                  v.push(k),
                  i.centeredSlides
                    ? ((S = S + k / 2 + M / 2 + E),
                      0 === M && 0 !== s && (S = S - a / 2 - E),
                      0 === s && (S = S - a / 2 - E),
                      Math.abs(S) < 0.001 && (S = 0),
                      i.roundLengths && (S = Math.floor(S)),
                      C % i.slidesPerGroup == 0 && h.push(S),
                      g.push(S))
                    : (i.roundLengths && (S = Math.floor(S)),
                      (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                        e.params.slidesPerGroup ==
                        0 && h.push(S),
                      g.push(S),
                      (S = S + k + E)),
                  (e.virtualSize += k + E),
                  (M = k),
                  (C += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, a) + b),
              o &&
                l &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                (s.style.width = `${e.virtualSize + E}px`),
              i.setWrapperSize &&
                (s.style[t("width")] = `${e.virtualSize + E}px`),
              P && e.grid.updateWrapperSize(k, h, t),
              !i.centeredSlides)
            ) {
              const t = [];
              for (let r = 0; r < h.length; r += 1) {
                let s = h[r];
                i.roundLengths && (s = Math.floor(s)),
                  h[r] <= e.virtualSize - a && t.push(s);
              }
              (h = t),
                Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) >
                  1 && h.push(e.virtualSize - a);
            }
            if (d && i.loop) {
              const t = v[0] + E;
              if (i.slidesPerGroup > 1) {
                const r = Math.ceil(
                    (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                      i.slidesPerGroup
                  ),
                  s = t * i.slidesPerGroup;
                for (let e = 0; e < r; e += 1) h.push(h[h.length - 1] + s);
              }
              for (
                let r = 0;
                r < e.virtual.slidesBefore + e.virtual.slidesAfter;
                r += 1
              )
                1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
                  g.push(g[g.length - 1] + t),
                  (e.virtualSize += t);
            }
            if ((0 === h.length && (h = [0]), 0 !== E)) {
              const r = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              u.filter(
                (e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1
              ).forEach((e) => {
                e.style[r] = `${E}px`;
              });
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let e = 0;
              v.forEach((t) => {
                e += t + (E || 0);
              });
              const t = (e -= E) - a;
              h = h.map((e) => (e < 0 ? -w : e > t ? t + b : e));
            }
            if (i.centerInsufficientSlides) {
              let e = 0;
              if (
                (v.forEach((t) => {
                  e += t + (E || 0);
                }),
                (e -= E) < a)
              ) {
                const t = (a - e) / 2;
                h.forEach((e, r) => {
                  h[r] = e - t;
                }),
                  g.forEach((e, r) => {
                    g[r] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: u,
                snapGrid: h,
                slidesGrid: g,
                slidesSizesGrid: v,
              }),
              i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
            ) {
              p(s, "--swiper-centered-offset-before", -h[0] + "px"),
                p(
                  s,
                  "--swiper-centered-offset-after",
                  e.size / 2 - v[v.length - 1] / 2 + "px"
                );
              const t = -e.snapGrid[0],
                r = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + r));
            }
            if (
              (f !== c && e.emit("slidesLengthChange"),
              h.length !== x &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              g.length !== T && e.emit("slidesGridLengthChange"),
              i.watchSlidesProgress && e.updateSlidesOffset(),
              !(
                d ||
                i.cssMode ||
                ("slide" !== i.effect && "fade" !== i.effect)
              ))
            ) {
              const t = `${i.containerModifierClass}backface-hidden`,
                r = e.el.classList.contains(t);
              f <= i.maxBackfaceHiddenSlides
                ? r || e.el.classList.add(t)
                : r && e.el.classList.remove(t);
            }
          },
          updateAutoHeight: function (e) {
            const t = this,
              r = [],
              i = t.virtual && t.params.virtual.enabled;
            let s,
              n = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const a = (e) =>
              i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                (t.visibleSlides || []).forEach((e) => {
                  r.push(e);
                });
              else
                for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                  const e = t.activeIndex + s;
                  if (e > t.slides.length && !i) break;
                  r.push(a(e));
                }
            else r.push(a(t.activeIndex));
            for (s = 0; s < r.length; s += 1)
              if (void 0 !== r[s]) {
                const e = r[s].offsetHeight;
                n = e > n ? e : n;
              }
            (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides,
              r = e.isElement
                ? e.isHorizontal()
                  ? e.wrapperEl.offsetLeft
                  : e.wrapperEl.offsetTop
                : 0;
            for (let i = 0; i < t.length; i += 1)
              t[i].swiperSlideOffset =
                (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
                r -
                e.cssOverflowAdjustment();
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            const t = this,
              r = t.params,
              { slides: i, rtlTranslate: s, snapGrid: n } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let a = -e;
            s && (a = e),
              i.forEach((e) => {
                e.classList.remove(r.slideVisibleClass);
              }),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            let o = r.spaceBetween;
            "string" == typeof o && o.indexOf("%") >= 0
              ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
              : "string" == typeof o && (o = parseFloat(o));
            for (let e = 0; e < i.length; e += 1) {
              const l = i[e];
              let d = l.swiperSlideOffset;
              r.cssMode && r.centeredSlides && (d -= i[0].swiperSlideOffset);
              const c =
                  (a + (r.centeredSlides ? t.minTranslate() : 0) - d) /
                  (l.swiperSlideSize + o),
                u =
                  (a - n[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) /
                  (l.swiperSlideSize + o),
                p = -(a - d),
                f = p + t.slidesSizesGrid[e];
              ((p >= 0 && p < t.size - 1) ||
                (f > 1 && f <= t.size) ||
                (p <= 0 && f >= t.size)) &&
                (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(e),
                i[e].classList.add(r.slideVisibleClass)),
                (l.progress = s ? -c : c),
                (l.originalProgress = s ? -u : u);
            }
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const r = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * r) || 0;
            }
            const r = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let { progress: s, isBeginning: n, isEnd: a, progressLoop: o } = t;
            const l = n,
              d = a;
            if (0 === i) (s = 0), (n = !0), (a = !0);
            else {
              s = (e - t.minTranslate()) / i;
              const r = Math.abs(e - t.minTranslate()) < 1,
                o = Math.abs(e - t.maxTranslate()) < 1;
              (n = r || s <= 0), (a = o || s >= 1), r && (s = 0), o && (s = 1);
            }
            if (r.loop) {
              const r = t.getSlideIndexByData(0),
                i = t.getSlideIndexByData(t.slides.length - 1),
                s = t.slidesGrid[r],
                n = t.slidesGrid[i],
                a = t.slidesGrid[t.slidesGrid.length - 1],
                l = Math.abs(e);
              (o = l >= s ? (l - s) / a : (l + a - n) / a) > 1 && (o -= 1);
            }
            Object.assign(t, {
              progress: s,
              progressLoop: o,
              isBeginning: n,
              isEnd: a,
            }),
              (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
                t.updateSlidesProgress(e),
              n && !l && t.emit("reachBeginning toEdge"),
              a && !d && t.emit("reachEnd toEdge"),
              ((l && !n) || (d && !a)) && t.emit("fromEdge"),
              t.emit("progress", s);
          },
          updateSlidesClasses: function () {
            const e = this,
              { slides: t, params: r, slidesEl: i, activeIndex: s } = e,
              n = e.virtual && r.virtual.enabled,
              a = (e) => m(i, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
            let o;
            if (
              (t.forEach((e) => {
                e.classList.remove(
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                );
              }),
              n)
            )
              if (r.loop) {
                let t = s - e.virtual.slidesBefore;
                t < 0 && (t = e.virtual.slides.length + t),
                  t >= e.virtual.slides.length &&
                    (t -= e.virtual.slides.length),
                  (o = a(`[data-swiper-slide-index="${t}"]`));
              } else o = a(`[data-swiper-slide-index="${s}"]`);
            else o = t[s];
            if (o) {
              o.classList.add(r.slideActiveClass);
              let e = (function (e, t) {
                const r = [];
                for (; e.nextElementSibling; ) {
                  const i = e.nextElementSibling;
                  t ? i.matches(t) && r.push(i) : r.push(i), (e = i);
                }
                return r;
              })(o, `.${r.slideClass}, swiper-slide`)[0];
              r.loop && !e && (e = t[0]),
                e && e.classList.add(r.slideNextClass);
              let i = (function (e, t) {
                const r = [];
                for (; e.previousElementSibling; ) {
                  const i = e.previousElementSibling;
                  t ? i.matches(t) && r.push(i) : r.push(i), (e = i);
                }
                return r;
              })(o, `.${r.slideClass}, swiper-slide`)[0];
              r.loop && 0 === !i && (i = t[t.length - 1]),
                i && i.classList.add(r.slidePrevClass);
            }
            e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              r = t.rtlTranslate ? t.translate : -t.translate,
              {
                snapGrid: i,
                params: s,
                activeIndex: n,
                realIndex: a,
                snapIndex: o,
              } = t;
            let l,
              d = e;
            const c = (e) => {
              let r = e - t.virtual.slidesBefore;
              return (
                r < 0 && (r = t.virtual.slides.length + r),
                r >= t.virtual.slides.length && (r -= t.virtual.slides.length),
                r
              );
            };
            if (
              (void 0 === d &&
                (d = (function (e) {
                  const { slidesGrid: t, params: r } = e,
                    i = e.rtlTranslate ? e.translate : -e.translate;
                  let s;
                  for (let e = 0; e < t.length; e += 1)
                    void 0 !== t[e + 1]
                      ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                        ? (s = e)
                        : i >= t[e] && i < t[e + 1] && (s = e + 1)
                      : i >= t[e] && (s = e);
                  return (
                    r.normalizeSlideIndex && (s < 0 || void 0 === s) && (s = 0),
                    s
                  );
                })(t)),
              i.indexOf(r) >= 0)
            )
              l = i.indexOf(r);
            else {
              const e = Math.min(s.slidesPerGroupSkip, d);
              l = e + Math.floor((d - e) / s.slidesPerGroup);
            }
            if ((l >= i.length && (l = i.length - 1), d === n))
              return (
                l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
                void (
                  t.params.loop &&
                  t.virtual &&
                  t.params.virtual.enabled &&
                  (t.realIndex = c(d))
                )
              );
            let u;
            (u =
              t.virtual && s.virtual.enabled && s.loop
                ? c(d)
                : t.slides[d]
                ? parseInt(
                    t.slides[d].getAttribute("data-swiper-slide-index") || d,
                    10
                  )
                : d),
              Object.assign(t, {
                previousSnapIndex: o,
                snapIndex: l,
                previousRealIndex: a,
                realIndex: u,
                previousIndex: n,
                activeIndex: d,
              }),
              t.initialized && O(t),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              a !== u && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              r = t.params,
              i = e.closest(`.${r.slideClass}, swiper-slide`);
            let s,
              n = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  (n = !0), (s = e);
                  break;
                }
            if (!i || !n)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    i.getAttribute("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = s),
              r.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {
              params: t,
              rtlTranslate: r,
              translate: i,
              wrapperEl: s,
            } = this;
            if (t.virtualTranslate) return r ? -i : i;
            if (t.cssMode) return i;
            let n = l(s, e);
            return (n += this.cssOverflowAdjustment()), r && (n = -n), n || 0;
          },
          setTranslate: function (e, t) {
            const r = this,
              { rtlTranslate: i, params: s, wrapperEl: n, progress: a } = r;
            let o,
              l = 0,
              d = 0;
            r.isHorizontal() ? (l = i ? -e : e) : (d = e),
              s.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
              (r.previousTranslate = r.translate),
              (r.translate = r.isHorizontal() ? l : d),
              s.cssMode
                ? (n[r.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    r.isHorizontal() ? -l : -d)
                : s.virtualTranslate ||
                  (r.isHorizontal()
                    ? (l -= r.cssOverflowAdjustment())
                    : (d -= r.cssOverflowAdjustment()),
                  (n.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
            const c = r.maxTranslate() - r.minTranslate();
            (o = 0 === c ? 0 : (e - r.minTranslate()) / c) !== a &&
              r.updateProgress(e),
              r.emit("setTranslate", r.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, r, i, s) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === r && (r = !0),
              void 0 === i && (i = !0);
            const n = this,
              { params: a, wrapperEl: o } = n;
            if (n.animating && a.preventInteractionOnTransition) return !1;
            const l = n.minTranslate(),
              d = n.maxTranslate();
            let c;
            if (
              ((c = i && e > l ? l : i && e < d ? d : e),
              n.updateProgress(c),
              a.cssMode)
            ) {
              const e = n.isHorizontal();
              if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
              else {
                if (!n.support.smoothScroll)
                  return (
                    f({
                      swiper: n,
                      targetPosition: -c,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (n.setTransition(0),
                  n.setTranslate(c),
                  r &&
                    (n.emit("beforeTransitionStart", t, s),
                    n.emit("transitionEnd")))
                : (n.setTransition(t),
                  n.setTranslate(c),
                  r &&
                    (n.emit("beforeTransitionStart", t, s),
                    n.emit("transitionStart")),
                  n.animating ||
                    ((n.animating = !0),
                    n.onTranslateToWrapperTransitionEnd ||
                      (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (n.wrapperEl.removeEventListener(
                            "transitionend",
                            n.onTranslateToWrapperTransitionEnd
                          ),
                          (n.onTranslateToWrapperTransitionEnd = null),
                          delete n.onTranslateToWrapperTransitionEnd,
                          r && n.emit("transitionEnd"));
                      }),
                    n.wrapperEl.addEventListener(
                      "transitionend",
                      n.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const r = this;
            r.params.cssMode ||
              (r.wrapperEl.style.transitionDuration = `${e}ms`),
              r.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const r = this,
              { params: i } = r;
            i.cssMode ||
              (i.autoHeight && r.updateAutoHeight(),
              L({ swiper: r, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const r = this,
              { params: i } = r;
            (r.animating = !1),
              i.cssMode ||
                (r.setTransition(0),
                L({ swiper: r, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: {
          slideTo: function (e, t, r, i, s) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === r && (r = !0),
              "string" == typeof e && (e = parseInt(e, 10));
            const n = this;
            let a = e;
            a < 0 && (a = 0);
            const {
              params: o,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: u,
              rtlTranslate: p,
              wrapperEl: h,
              enabled: m,
            } = n;
            if (
              (n.animating && o.preventInteractionOnTransition) ||
              (!m && !i && !s)
            )
              return !1;
            const g = Math.min(n.params.slidesPerGroupSkip, a);
            let v = g + Math.floor((a - g) / n.params.slidesPerGroup);
            v >= l.length && (v = l.length - 1);
            const y = -l[v];
            if (o.normalizeSlideIndex)
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * y),
                  r = Math.floor(100 * d[e]),
                  i = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1]
                  ? t >= r && t < i - (i - r) / 2
                    ? (a = e)
                    : t >= r && t < i && (a = e + 1)
                  : t >= r && (a = e);
              }
            if (n.initialized && a !== u) {
              if (!n.allowSlideNext && y < n.translate && y < n.minTranslate())
                return !1;
              if (
                !n.allowSlidePrev &&
                y > n.translate &&
                y > n.maxTranslate() &&
                (u || 0) !== a
              )
                return !1;
            }
            let w;
            if (
              (a !== (c || 0) && r && n.emit("beforeSlideChangeStart"),
              n.updateProgress(y),
              (w = a > u ? "next" : a < u ? "prev" : "reset"),
              (p && -y === n.translate) || (!p && y === n.translate))
            )
              return (
                n.updateActiveIndex(a),
                o.autoHeight && n.updateAutoHeight(),
                n.updateSlidesClasses(),
                "slide" !== o.effect && n.setTranslate(y),
                "reset" !== w &&
                  (n.transitionStart(r, w), n.transitionEnd(r, w)),
                !1
              );
            if (o.cssMode) {
              const e = n.isHorizontal(),
                r = p ? y : -y;
              if (0 === t) {
                const t = n.virtual && n.params.virtual.enabled;
                t &&
                  ((n.wrapperEl.style.scrollSnapType = "none"),
                  (n._immediateVirtual = !0)),
                  t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                    ? ((n._cssModeVirtualInitialSet = !0),
                      requestAnimationFrame(() => {
                        h[e ? "scrollLeft" : "scrollTop"] = r;
                      }))
                    : (h[e ? "scrollLeft" : "scrollTop"] = r),
                  t &&
                    requestAnimationFrame(() => {
                      (n.wrapperEl.style.scrollSnapType = ""),
                        (n._immediateVirtual = !1);
                    });
              } else {
                if (!n.support.smoothScroll)
                  return (
                    f({
                      swiper: n,
                      targetPosition: r,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                h.scrollTo({ [e ? "left" : "top"]: r, behavior: "smooth" });
              }
              return !0;
            }
            return (
              n.setTransition(t),
              n.setTranslate(y),
              n.updateActiveIndex(a),
              n.updateSlidesClasses(),
              n.emit("beforeTransitionStart", t, i),
              n.transitionStart(r, w),
              0 === t
                ? n.transitionEnd(r, w)
                : n.animating ||
                  ((n.animating = !0),
                  n.onSlideToWrapperTransitionEnd ||
                    (n.onSlideToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.wrapperEl.removeEventListener(
                          "transitionend",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        (n.onSlideToWrapperTransitionEnd = null),
                        delete n.onSlideToWrapperTransitionEnd,
                        n.transitionEnd(r, w));
                    }),
                  n.wrapperEl.addEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e, t, r, i) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === r && (r = !0),
              "string" == typeof e && (e = parseInt(e, 10));
            const s = this;
            let n = e;
            return (
              s.params.loop &&
                (s.virtual && s.params.virtual.enabled
                  ? (n += s.virtual.slidesBefore)
                  : (n = s.getSlideIndexByData(n))),
              s.slideTo(n, t, r, i)
            );
          },
          slideNext: function (e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              { enabled: s, params: n, animating: a } = i;
            if (!s) return i;
            let o = n.slidesPerGroup;
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
              d = i.virtual && n.virtual.enabled;
            if (n.loop) {
              if (a && !d && n.loopPreventsSliding) return !1;
              i.loopFix({ direction: "next" }),
                (i._clientLeft = i.wrapperEl.clientLeft);
            }
            return n.rewind && i.isEnd
              ? i.slideTo(0, e, t, r)
              : i.slideTo(i.activeIndex + l, e, t, r);
          },
          slidePrev: function (e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                params: s,
                snapGrid: n,
                slidesGrid: a,
                rtlTranslate: o,
                enabled: l,
                animating: d,
              } = i;
            if (!l) return i;
            const c = i.virtual && s.virtual.enabled;
            if (s.loop) {
              if (d && !c && s.loopPreventsSliding) return !1;
              i.loopFix({ direction: "prev" }),
                (i._clientLeft = i.wrapperEl.clientLeft);
            }
            function u(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = u(o ? i.translate : -i.translate),
              f = n.map((e) => u(e));
            let h = n[f.indexOf(p) - 1];
            if (void 0 === h && s.cssMode) {
              let e;
              n.forEach((t, r) => {
                p >= t && (e = r);
              }),
                void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
            }
            let m = 0;
            if (
              (void 0 !== h &&
                ((m = a.indexOf(h)) < 0 && (m = i.activeIndex - 1),
                "auto" === s.slidesPerView &&
                  1 === s.slidesPerGroup &&
                  s.slidesPerGroupAuto &&
                  ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
                  (m = Math.max(m, 0)))),
              s.rewind && i.isBeginning)
            ) {
              const s =
                i.params.virtual && i.params.virtual.enabled && i.virtual
                  ? i.virtual.slides.length - 1
                  : i.slides.length - 1;
              return i.slideTo(s, e, t, r);
            }
            return i.slideTo(m, e, t, r);
          },
          slideReset: function (e, t, r) {
            return (
              void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              this.slideTo(this.activeIndex, e, t, r)
            );
          },
          slideToClosest: function (e, t, r, i) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === i && (i = 0.5);
            const s = this;
            let n = s.activeIndex;
            const a = Math.min(s.params.slidesPerGroupSkip, n),
              o = a + Math.floor((n - a) / s.params.slidesPerGroup),
              l = s.rtlTranslate ? s.translate : -s.translate;
            if (l >= s.snapGrid[o]) {
              const e = s.snapGrid[o];
              l - e > (s.snapGrid[o + 1] - e) * i &&
                (n += s.params.slidesPerGroup);
            } else {
              const e = s.snapGrid[o - 1];
              l - e <= (s.snapGrid[o] - e) * i &&
                (n -= s.params.slidesPerGroup);
            }
            return (
              (n = Math.max(n, 0)),
              (n = Math.min(n, s.slidesGrid.length - 1)),
              s.slideTo(n, e, t, r)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, slidesEl: r } = e,
              i =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let s,
              n = e.clickedIndex;
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              (s = parseInt(
                e.clickedSlide.getAttribute("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? n < e.loopedSlides - i / 2 ||
                    n > e.slides.length - e.loopedSlides + i / 2
                    ? (e.loopFix(),
                      (n = e.getSlideIndex(
                        m(r, `${o}[data-swiper-slide-index="${s}"]`)[0]
                      )),
                      a(() => {
                        e.slideTo(n);
                      }))
                    : e.slideTo(n)
                  : n > e.slides.length - i
                  ? (e.loopFix(),
                    (n = e.getSlideIndex(
                      m(r, `${o}[data-swiper-slide-index="${s}"]`)[0]
                    )),
                    a(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n);
            } else e.slideTo(n);
          },
        },
        loop: {
          loopCreate: function (e) {
            const t = this,
              { params: r, slidesEl: i } = t;
            !r.loop ||
              (t.virtual && t.params.virtual.enabled) ||
              (m(i, `.${r.slideClass}, swiper-slide`).forEach((e, t) => {
                e.setAttribute("data-swiper-slide-index", t);
              }),
              t.loopFix({
                slideRealIndex: e,
                direction: r.centeredSlides ? void 0 : "next",
              }));
          },
          loopFix: function (e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: i,
              setTranslate: s,
              activeSlideIndex: n,
              byController: a,
              byMousewheel: o,
            } = void 0 === e ? {} : e;
            const l = this;
            if (!l.params.loop) return;
            l.emit("beforeLoopFix");
            const {
              slides: d,
              allowSlidePrev: c,
              allowSlideNext: u,
              slidesEl: p,
              params: f,
            } = l;
            if (
              ((l.allowSlidePrev = !0),
              (l.allowSlideNext = !0),
              l.virtual && f.virtual.enabled)
            )
              return (
                r &&
                  (f.centeredSlides || 0 !== l.snapIndex
                    ? f.centeredSlides && l.snapIndex < f.slidesPerView
                      ? l.slideTo(
                          l.virtual.slides.length + l.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : l.snapIndex === l.snapGrid.length - 1 &&
                        l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                    : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
                (l.allowSlidePrev = c),
                (l.allowSlideNext = u),
                void l.emit("loopFix")
              );
            const h =
              "auto" === f.slidesPerView
                ? l.slidesPerViewDynamic()
                : Math.ceil(parseFloat(f.slidesPerView, 10));
            let m = f.loopedSlides || h;
            m % f.slidesPerGroup != 0 &&
              (m += f.slidesPerGroup - (m % f.slidesPerGroup)),
              (l.loopedSlides = m);
            const g = [],
              v = [];
            let y = l.activeIndex;
            void 0 === n
              ? (n = l.getSlideIndex(
                  l.slides.filter((e) =>
                    e.classList.contains(f.slideActiveClass)
                  )[0]
                ))
              : (y = n);
            const w = "next" === i || !i,
              b = "prev" === i || !i;
            let x = 0,
              _ = 0;
            if (n < m) {
              x = Math.max(m - n, f.slidesPerGroup);
              for (let e = 0; e < m - n; e += 1) {
                const t = e - Math.floor(e / d.length) * d.length;
                g.push(d.length - t - 1);
              }
            } else if (n > l.slides.length - 2 * m) {
              _ = Math.max(n - (l.slides.length - 2 * m), f.slidesPerGroup);
              for (let e = 0; e < _; e += 1) {
                const t = e - Math.floor(e / d.length) * d.length;
                v.push(t);
              }
            }
            if (
              (b &&
                g.forEach((e) => {
                  (l.slides[e].swiperLoopMoveDOM = !0),
                    p.prepend(l.slides[e]),
                    (l.slides[e].swiperLoopMoveDOM = !1);
                }),
              w &&
                v.forEach((e) => {
                  (l.slides[e].swiperLoopMoveDOM = !0),
                    p.append(l.slides[e]),
                    (l.slides[e].swiperLoopMoveDOM = !1);
                }),
              l.recalcSlides(),
              "auto" === f.slidesPerView && l.updateSlides(),
              f.watchSlidesProgress && l.updateSlidesOffset(),
              r)
            )
              if (g.length > 0 && b)
                if (void 0 === t) {
                  const e = l.slidesGrid[y],
                    t = l.slidesGrid[y + x] - e;
                  o
                    ? l.setTranslate(l.translate - t)
                    : (l.slideTo(y + x, 0, !1, !0),
                      s &&
                        (l.touches[l.isHorizontal() ? "startX" : "startY"] +=
                          t));
                } else s && l.slideToLoop(t, 0, !1, !0);
              else if (v.length > 0 && w)
                if (void 0 === t) {
                  const e = l.slidesGrid[y],
                    t = l.slidesGrid[y - _] - e;
                  o
                    ? l.setTranslate(l.translate - t)
                    : (l.slideTo(y - _, 0, !1, !0),
                      s &&
                        (l.touches[l.isHorizontal() ? "startX" : "startY"] +=
                          t));
                } else l.slideToLoop(t, 0, !1, !0);
            if (
              ((l.allowSlidePrev = c),
              (l.allowSlideNext = u),
              l.controller && l.controller.control && !a)
            ) {
              const e = {
                slideRealIndex: t,
                slideTo: !1,
                direction: i,
                setTranslate: s,
                activeSlideIndex: n,
                byController: !0,
              };
              Array.isArray(l.controller.control)
                ? l.controller.control.forEach((t) => {
                    !t.destroyed && t.params.loop && t.loopFix(e);
                  })
                : l.controller.control instanceof l.constructor &&
                  l.controller.control.params.loop &&
                  l.controller.control.loopFix(e);
            }
            l.emit("loopFix");
          },
          loopDestroy: function () {
            const e = this,
              { params: t, slidesEl: r } = e;
            if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach((e) => {
              const t =
                void 0 === e.swiperSlideIndex
                  ? 1 * e.getAttribute("data-swiper-slide-index")
                  : e.swiperSlideIndex;
              i[t] = e;
            }),
              e.slides.forEach((e) => {
                e.removeAttribute("data-swiper-slide-index");
              }),
              i.forEach((e) => {
                r.append(e);
              }),
              e.recalcSlides(),
              e.slideTo(e.realIndex, 0);
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const r =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (r.style.cursor = "move"),
              (r.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = i(),
              { params: r } = e;
            (e.onTouchStart = function (e) {
              const t = this,
                r = i(),
                s = n(),
                a = t.touchEventsData;
              a.evCache.push(e);
              const { params: l, touches: d, enabled: c } = t;
              if (!c) return;
              if (!l.simulateTouch && "mouse" === e.pointerType) return;
              if (t.animating && l.preventInteractionOnTransition) return;
              !t.animating && l.cssMode && l.loop && t.loopFix();
              let u = e;
              u.originalEvent && (u = u.originalEvent);
              let p = u.target;
              if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p))
                return;
              if ("which" in u && 3 === u.which) return;
              if ("button" in u && u.button > 0) return;
              if (a.isTouched && a.isMoved) return;
              const f = !!l.noSwipingClass && "" !== l.noSwipingClass,
                h = e.composedPath ? e.composedPath() : e.path;
              f && u.target && u.target.shadowRoot && h && (p = h[0]);
              const m = l.noSwipingSelector
                  ? l.noSwipingSelector
                  : `.${l.noSwipingClass}`,
                g = !(!u.target || !u.target.shadowRoot);
              if (
                l.noSwiping &&
                (g
                  ? (function (e, t) {
                      return (
                        void 0 === t && (t = this),
                        (function t(r) {
                          if (!r || r === i() || r === n()) return null;
                          r.assignedSlot && (r = r.assignedSlot);
                          const s = r.closest(e);
                          return s || r.getRootNode
                            ? s || t(r.getRootNode().host)
                            : null;
                        })(t)
                      );
                    })(m, p)
                  : p.closest(m))
              )
                return void (t.allowClick = !0);
              if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
              (d.currentX = u.pageX), (d.currentY = u.pageY);
              const v = d.currentX,
                y = d.currentY,
                w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
              if (w && (v <= b || v >= s.innerWidth - b)) {
                if ("prevent" !== w) return;
                e.preventDefault();
              }
              Object.assign(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
                (d.startX = v),
                (d.startY = y),
                (a.touchStartTime = o()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                l.threshold > 0 && (a.allowThresholdMove = !1);
              let x = !0;
              p.matches(a.focusableElements) &&
                ((x = !1), "SELECT" === p.nodeName && (a.isTouched = !1)),
                r.activeElement &&
                  r.activeElement.matches(a.focusableElements) &&
                  r.activeElement !== p &&
                  r.activeElement.blur();
              const _ = x && t.allowTouchMove && l.touchStartPreventDefault;
              (!l.touchStartForcePreventDefault && !_) ||
                p.isContentEditable ||
                u.preventDefault(),
                t.params.freeMode &&
                  t.params.freeMode.enabled &&
                  t.freeMode &&
                  t.animating &&
                  !l.cssMode &&
                  t.freeMode.onTouchStart(),
                t.emit("touchStart", u);
            }.bind(e)),
              (e.onTouchMove = function (e) {
                const t = i(),
                  r = this,
                  s = r.touchEventsData,
                  { params: n, touches: a, rtlTranslate: l, enabled: d } = r;
                if (!d) return;
                if (!n.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if ((c.originalEvent && (c = c.originalEvent), !s.isTouched))
                  return void (
                    s.startMoving &&
                    s.isScrolling &&
                    r.emit("touchMoveOpposite", c)
                  );
                const u = s.evCache.findIndex(
                  (e) => e.pointerId === c.pointerId
                );
                u >= 0 && (s.evCache[u] = c);
                const p = s.evCache.length > 1 ? s.evCache[0] : c,
                  f = p.pageX,
                  h = p.pageY;
                if (c.preventedByNestedSwiper)
                  return (a.startX = f), void (a.startY = h);
                if (!r.allowTouchMove)
                  return (
                    c.target.matches(s.focusableElements) ||
                      (r.allowClick = !1),
                    void (
                      s.isTouched &&
                      (Object.assign(a, {
                        startX: f,
                        startY: h,
                        prevX: r.touches.currentX,
                        prevY: r.touches.currentY,
                        currentX: f,
                        currentY: h,
                      }),
                      (s.touchStartTime = o()))
                    )
                  );
                if (n.touchReleaseOnEdges && !n.loop)
                  if (r.isVertical()) {
                    if (
                      (h < a.startY && r.translate <= r.maxTranslate()) ||
                      (h > a.startY && r.translate >= r.minTranslate())
                    )
                      return (s.isTouched = !1), void (s.isMoved = !1);
                  } else if (
                    (f < a.startX && r.translate <= r.maxTranslate()) ||
                    (f > a.startX && r.translate >= r.minTranslate())
                  )
                    return;
                if (
                  t.activeElement &&
                  c.target === t.activeElement &&
                  c.target.matches(s.focusableElements)
                )
                  return (s.isMoved = !0), void (r.allowClick = !1);
                if (
                  (s.allowTouchCallbacks && r.emit("touchMove", c),
                  c.targetTouches && c.targetTouches.length > 1)
                )
                  return;
                (a.currentX = f), (a.currentY = h);
                const m = a.currentX - a.startX,
                  g = a.currentY - a.startY;
                if (
                  r.params.threshold &&
                  Math.sqrt(m ** 2 + g ** 2) < r.params.threshold
                )
                  return;
                if (void 0 === s.isScrolling) {
                  let e;
                  (r.isHorizontal() && a.currentY === a.startY) ||
                  (r.isVertical() && a.currentX === a.startX)
                    ? (s.isScrolling = !1)
                    : m * m + g * g >= 25 &&
                      ((e =
                        (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
                      (s.isScrolling = r.isHorizontal()
                        ? e > n.touchAngle
                        : 90 - e > n.touchAngle));
                }
                if (
                  (s.isScrolling && r.emit("touchMoveOpposite", c),
                  void 0 === s.startMoving &&
                    ((a.currentX === a.startX && a.currentY === a.startY) ||
                      (s.startMoving = !0)),
                  s.isScrolling ||
                    (r.zoom &&
                      r.params.zoom &&
                      r.params.zoom.enabled &&
                      s.evCache.length > 1))
                )
                  return void (s.isTouched = !1);
                if (!s.startMoving) return;
                (r.allowClick = !1),
                  !n.cssMode && c.cancelable && c.preventDefault(),
                  n.touchMoveStopPropagation &&
                    !n.nested &&
                    c.stopPropagation();
                let v = r.isHorizontal() ? m : g,
                  y = r.isHorizontal()
                    ? a.currentX - a.previousX
                    : a.currentY - a.previousY;
                n.oneWayMovement &&
                  ((v = Math.abs(v) * (l ? 1 : -1)),
                  (y = Math.abs(y) * (l ? 1 : -1))),
                  (a.diff = v),
                  (v *= n.touchRatio),
                  l && ((v = -v), (y = -y));
                const w = r.touchesDirection;
                (r.swipeDirection = v > 0 ? "prev" : "next"),
                  (r.touchesDirection = y > 0 ? "prev" : "next");
                const b = r.params.loop && !n.cssMode;
                if (!s.isMoved) {
                  if (
                    (b && r.loopFix({ direction: r.swipeDirection }),
                    (s.startTranslate = r.getTranslate()),
                    r.setTransition(0),
                    r.animating)
                  ) {
                    const e = new window.CustomEvent("transitionend", {
                      bubbles: !0,
                      cancelable: !0,
                    });
                    r.wrapperEl.dispatchEvent(e);
                  }
                  (s.allowMomentumBounce = !1),
                    !n.grabCursor ||
                      (!0 !== r.allowSlideNext && !0 !== r.allowSlidePrev) ||
                      r.setGrabCursor(!0),
                    r.emit("sliderFirstMove", c);
                }
                let x;
                s.isMoved &&
                  w !== r.touchesDirection &&
                  b &&
                  Math.abs(v) >= 1 &&
                  (r.loopFix({ direction: r.swipeDirection, setTranslate: !0 }),
                  (x = !0)),
                  r.emit("sliderMove", c),
                  (s.isMoved = !0),
                  (s.currentTranslate = v + s.startTranslate);
                let _ = !0,
                  T = n.resistanceRatio;
                if (
                  (n.touchReleaseOnEdges && (T = 0),
                  v > 0
                    ? (b &&
                        !x &&
                        s.currentTranslate >
                          (n.centeredSlides
                            ? r.minTranslate() - r.size / 2
                            : r.minTranslate()) &&
                        r.loopFix({
                          direction: "prev",
                          setTranslate: !0,
                          activeSlideIndex: 0,
                        }),
                      s.currentTranslate > r.minTranslate() &&
                        ((_ = !1),
                        n.resistance &&
                          (s.currentTranslate =
                            r.minTranslate() -
                            1 +
                            (-r.minTranslate() + s.startTranslate + v) ** T)))
                    : v < 0 &&
                      (b &&
                        !x &&
                        s.currentTranslate <
                          (n.centeredSlides
                            ? r.maxTranslate() + r.size / 2
                            : r.maxTranslate()) &&
                        r.loopFix({
                          direction: "next",
                          setTranslate: !0,
                          activeSlideIndex:
                            r.slides.length -
                            ("auto" === n.slidesPerView
                              ? r.slidesPerViewDynamic()
                              : Math.ceil(parseFloat(n.slidesPerView, 10))),
                        }),
                      s.currentTranslate < r.maxTranslate() &&
                        ((_ = !1),
                        n.resistance &&
                          (s.currentTranslate =
                            r.maxTranslate() +
                            1 -
                            (r.maxTranslate() - s.startTranslate - v) ** T))),
                  _ && (c.preventedByNestedSwiper = !0),
                  !r.allowSlideNext &&
                    "next" === r.swipeDirection &&
                    s.currentTranslate < s.startTranslate &&
                    (s.currentTranslate = s.startTranslate),
                  !r.allowSlidePrev &&
                    "prev" === r.swipeDirection &&
                    s.currentTranslate > s.startTranslate &&
                    (s.currentTranslate = s.startTranslate),
                  r.allowSlidePrev ||
                    r.allowSlideNext ||
                    (s.currentTranslate = s.startTranslate),
                  n.threshold > 0)
                ) {
                  if (!(Math.abs(v) > n.threshold || s.allowThresholdMove))
                    return void (s.currentTranslate = s.startTranslate);
                  if (!s.allowThresholdMove)
                    return (
                      (s.allowThresholdMove = !0),
                      (a.startX = a.currentX),
                      (a.startY = a.currentY),
                      (s.currentTranslate = s.startTranslate),
                      void (a.diff = r.isHorizontal()
                        ? a.currentX - a.startX
                        : a.currentY - a.startY)
                    );
                }
                n.followFinger &&
                  !n.cssMode &&
                  (((n.freeMode && n.freeMode.enabled && r.freeMode) ||
                    n.watchSlidesProgress) &&
                    (r.updateActiveIndex(), r.updateSlidesClasses()),
                  r.params.freeMode &&
                    n.freeMode.enabled &&
                    r.freeMode &&
                    r.freeMode.onTouchMove(),
                  r.updateProgress(s.currentTranslate),
                  r.setTranslate(s.currentTranslate));
              }.bind(e)),
              (e.onTouchEnd = function (e) {
                const t = this,
                  r = t.touchEventsData,
                  i = r.evCache.findIndex((t) => t.pointerId === e.pointerId);
                if (
                  (i >= 0 && r.evCache.splice(i, 1),
                  ["pointercancel", "pointerout", "pointerleave"].includes(
                    e.type
                  ) &&
                    ("pointercancel" !== e.type ||
                      (!t.browser.isSafari && !t.browser.isWebView)))
                )
                  return;
                const {
                  params: s,
                  touches: n,
                  rtlTranslate: l,
                  slidesGrid: d,
                  enabled: c,
                } = t;
                if (!c) return;
                if (!s.simulateTouch && "mouse" === e.pointerType) return;
                let u = e;
                if (
                  (u.originalEvent && (u = u.originalEvent),
                  r.allowTouchCallbacks && t.emit("touchEnd", u),
                  (r.allowTouchCallbacks = !1),
                  !r.isTouched)
                )
                  return (
                    r.isMoved && s.grabCursor && t.setGrabCursor(!1),
                    (r.isMoved = !1),
                    void (r.startMoving = !1)
                  );
                s.grabCursor &&
                  r.isMoved &&
                  r.isTouched &&
                  (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                  t.setGrabCursor(!1);
                const p = o(),
                  f = p - r.touchStartTime;
                if (t.allowClick) {
                  const e = u.path || (u.composedPath && u.composedPath());
                  t.updateClickedSlide((e && e[0]) || u.target),
                    t.emit("tap click", u),
                    f < 300 &&
                      p - r.lastClickTime < 300 &&
                      t.emit("doubleTap doubleClick", u);
                }
                if (
                  ((r.lastClickTime = o()),
                  a(() => {
                    t.destroyed || (t.allowClick = !0);
                  }),
                  !r.isTouched ||
                    !r.isMoved ||
                    !t.swipeDirection ||
                    0 === n.diff ||
                    r.currentTranslate === r.startTranslate)
                )
                  return (
                    (r.isTouched = !1),
                    (r.isMoved = !1),
                    void (r.startMoving = !1)
                  );
                let h;
                if (
                  ((r.isTouched = !1),
                  (r.isMoved = !1),
                  (r.startMoving = !1),
                  (h = s.followFinger
                    ? l
                      ? t.translate
                      : -t.translate
                    : -r.currentTranslate),
                  s.cssMode)
                )
                  return;
                if (t.params.freeMode && s.freeMode.enabled)
                  return void t.freeMode.onTouchEnd({ currentPos: h });
                let m = 0,
                  g = t.slidesSizesGrid[0];
                for (
                  let e = 0;
                  e < d.length;
                  e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
                ) {
                  const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                  void 0 !== d[e + t]
                    ? h >= d[e] &&
                      h < d[e + t] &&
                      ((m = e), (g = d[e + t] - d[e]))
                    : h >= d[e] &&
                      ((m = e), (g = d[d.length - 1] - d[d.length - 2]));
                }
                let v = null,
                  y = null;
                s.rewind &&
                  (t.isBeginning
                    ? (y =
                        t.params.virtual &&
                        t.params.virtual.enabled &&
                        t.virtual
                          ? t.virtual.slides.length - 1
                          : t.slides.length - 1)
                    : t.isEnd && (v = 0));
                const w = (h - d[m]) / g,
                  b = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (f > s.longSwipesMs) {
                  if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                  "next" === t.swipeDirection &&
                    (w >= s.longSwipesRatio
                      ? t.slideTo(s.rewind && t.isEnd ? v : m + b)
                      : t.slideTo(m)),
                    "prev" === t.swipeDirection &&
                      (w > 1 - s.longSwipesRatio
                        ? t.slideTo(m + b)
                        : null !== y && w < 0 && Math.abs(w) > s.longSwipesRatio
                        ? t.slideTo(y)
                        : t.slideTo(m));
                } else {
                  if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                  !t.navigation ||
                  (u.target !== t.navigation.nextEl &&
                    u.target !== t.navigation.prevEl)
                    ? ("next" === t.swipeDirection &&
                        t.slideTo(null !== v ? v : m + b),
                      "prev" === t.swipeDirection &&
                        t.slideTo(null !== y ? y : m))
                    : u.target === t.navigation.nextEl
                    ? t.slideTo(m + b)
                    : t.slideTo(m);
                }
              }.bind(e)),
              r.cssMode &&
                (e.onScroll = function () {
                  const e = this,
                    { wrapperEl: t, rtlTranslate: r, enabled: i } = e;
                  if (!i) return;
                  let s;
                  (e.previousTranslate = e.translate),
                    e.isHorizontal()
                      ? (e.translate = -t.scrollLeft)
                      : (e.translate = -t.scrollTop),
                    0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                  const n = e.maxTranslate() - e.minTranslate();
                  (s = 0 === n ? 0 : (e.translate - e.minTranslate()) / n) !==
                    e.progress &&
                    e.updateProgress(r ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1);
                }.bind(e)),
              (e.onClick = function (e) {
                const t = this;
                t.enabled &&
                  (t.allowClick ||
                    (t.params.preventClicks && e.preventDefault(),
                    t.params.preventClicksPropagation &&
                      t.animating &&
                      (e.stopPropagation(), e.stopImmediatePropagation())));
              }.bind(e)),
              (e.onLoad = function (e) {
                k(this, e.target), this.update();
              }.bind(e)),
              D || (t.addEventListener("touchstart", I), (D = !0)),
              $(e, "on");
          },
          detachEvents: function () {
            $(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: r, params: i, el: s } = e,
              n = i.breakpoints;
            if (!n || (n && 0 === Object.keys(n).length)) return;
            const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const o = (a in n ? n[a] : void 0) || e.originalParams,
              l = R(e, i),
              d = R(e, o),
              c = i.enabled;
            l && !d
              ? (s.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !l &&
                d &&
                (s.classList.add(`${i.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === i.grid.fill)) &&
                  s.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const r = i[t] && i[t].enabled,
                  s = o[t] && o[t].enabled;
                r && !s && e[t].disable(), !r && s && e[t].enable();
              });
            const p = o.direction && o.direction !== i.direction,
              f = i.loop && (o.slidesPerView !== i.slidesPerView || p);
            p && r && e.changeDirection(), u(e.params, o);
            const h = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !h ? e.disable() : !c && h && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", o),
              f && r && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t, r) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !r))
            )
              return;
            let i = !1;
            const s = n(),
              a = "window" === t ? s.innerHeight : r.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: a * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: n, value: a } = o[e];
              "window" === t
                ? s.matchMedia(`(min-width: ${a}px)`).matches && (i = n)
                : a <= r.clientWidth && (i = n);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: r } = e,
              { slidesOffsetBefore: i } = r;
            if (i) {
              const t = e.slides.length - 1,
                r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > r;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: r, rtl: i, el: s, device: n } = e,
              a = (function (e, t) {
                const r = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && r.push(t + i);
                        })
                      : "string" == typeof e && r.push(t + e);
                  }),
                  r
                );
              })(
                [
                  "initialized",
                  r.direction,
                  { "free-mode": e.params.freeMode && r.freeMode.enabled },
                  { autoheight: r.autoHeight },
                  { rtl: i },
                  { grid: r.grid && r.grid.rows > 1 },
                  {
                    "grid-column":
                      r.grid && r.grid.rows > 1 && "column" === r.grid.fill,
                  },
                  { android: n.android },
                  { ios: n.ios },
                  { "css-mode": r.cssMode },
                  { centered: r.cssMode && r.centeredSlides },
                  { "watch-progress": r.watchSlidesProgress },
                ],
                r.containerModifierClass
              );
            t.push(...a), s.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      F = {};
    class G {
      constructor() {
        let e, t;
        for (var r = arguments.length, s = new Array(r), n = 0; n < r; n++)
          s[n] = arguments[n];
        1 === s.length &&
        s[0].constructor &&
        "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
          ? (t = s[0])
          : ([e, t] = s),
          t || (t = {}),
          (t = u({}, t)),
          e && !t.el && (t.el = e);
        const a = i();
        if (
          t.el &&
          "string" == typeof t.el &&
          a.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            a.querySelectorAll(t.el).forEach((r) => {
              const i = u({}, t, { el: r });
              e.push(new G(i));
            }),
            e
          );
        }
        const o = this;
        (o.__swiper__ = !0),
          (o.support = M()),
          (o.device = C({ userAgent: t.userAgent })),
          (o.browser = P()),
          (o.eventsListeners = {}),
          (o.eventsAnyListeners = []),
          (o.modules = [...o.__modules__]),
          t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const l = {};
        o.modules.forEach((e) => {
          e({
            params: t,
            swiper: o,
            extendParams: X(t, l),
            on: o.on.bind(o),
            once: o.once.bind(o),
            off: o.off.bind(o),
            emit: o.emit.bind(o),
          });
        });
        const d = u({}, B, l);
        return (
          (o.params = u({}, d, F, t)),
          (o.originalParams = u({}, o.params)),
          (o.passedParams = u({}, t)),
          o.params &&
            o.params.on &&
            Object.keys(o.params.on).forEach((e) => {
              o.on(e, o.params.on[e]);
            }),
          o.params && o.params.onAny && o.onAny(o.params.onAny),
          Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === o.params.direction,
            isVertical: () => "vertical" === o.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: o.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          o.emit("_swiper"),
          o.params.init && o.init(),
          o
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: r } = this,
          i = w(m(t, `.${r.slideClass}, swiper-slide`)[0]);
        return w(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
          )[0]
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = m(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const r = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = r.minTranslate(),
          s = (r.maxTranslate() - i) * e + i;
        r.translateTo(s, void 0 === t ? 0 : t),
          r.updateActiveIndex(),
          r.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((r) => {
          const i = e.getSlideClasses(r);
          t.push({ slideEl: r, classNames: i }), e.emit("_slideClass", r, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: r,
          slides: i,
          slidesGrid: s,
          slidesSizesGrid: n,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (r.centeredSlides) {
          let e,
            t = i[o].swiperSlideSize;
          for (let r = o + 1; r < i.length; r += 1)
            i[r] &&
              !e &&
              ((l += 1), (t += i[r].swiperSlideSize) > a && (e = !0));
          for (let r = o - 1; r >= 0; r -= 1)
            i[r] &&
              !e &&
              ((l += 1), (t += i[r].swiperSlideSize) > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1)
            (t ? s[e] + n[e] - s[o] < a : s[e] - s[o] < a) && (l += 1);
        else for (let e = o - 1; e >= 0; e -= 1) s[o] - s[e] < a && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: r } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        if (
          (r.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && k(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled)
        )
          i(), e.params.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
            e.isEnd &&
            !e.params.centeredSlides
          ) {
            const t =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides
                : e.slides;
            s = e.slideTo(t.length - 1, 0, !1, !0);
          } else s = e.slideTo(e.activeIndex, 0, !1, !0);
          s || i();
        }
        r.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const r = this,
          i = r.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
            r.el.classList.add(`${r.params.containerModifierClass}${e}`),
            r.emitContainerClasses(),
            (r.params.direction = e),
            r.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            r.emit("changeDirection"),
            t && r.update()),
          r
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let r = e || t.params.el;
        if (("string" == typeof r && (r = document.querySelector(r)), !r))
          return !1;
        (r.swiper = t), r.shadowEl && (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (() =>
          r && r.shadowRoot && r.shadowRoot.querySelector
            ? r.shadowRoot.querySelector(i())
            : m(r, i())[0])();
        return (
          !s &&
            t.params.createElements &&
            ((s = g("div", t.params.wrapperClass)),
            r.append(s),
            m(r, `.${t.params.slideClass}`).forEach((e) => {
              s.append(e);
            })),
          Object.assign(t, {
            el: r,
            wrapperEl: s,
            slidesEl: t.isElement ? r : s,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === y(r, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === r.dir.toLowerCase() || "rtl" === y(r, "direction")),
            wrongRTL: "-webkit-box" === y(s, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        return t.initialized
          ? t
          : (!1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.loop && t.virtual && t.params.virtual.enabled
                ? t.slideTo(
                    t.params.initialSlide + t.virtual.slidesBefore,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.params.loop && t.loopCreate(),
              t.attachEvents(),
              [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
                e.complete
                  ? k(t, e)
                  : e.addEventListener("load", (e) => {
                      k(t, e.target);
                    });
              }),
              O(t),
              (t.initialized = !0),
              O(t),
              t.emit("init"),
              t.emit("afterInit")),
            t);
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const r = this,
          { params: i, el: s, wrapperEl: n, slides: a } = r;
        return (
          void 0 === r.params ||
            r.destroyed ||
            (r.emit("beforeDestroy"),
            (r.initialized = !1),
            r.detachEvents(),
            i.loop && r.loopDestroy(),
            t &&
              (r.removeClasses(),
              s.removeAttribute("style"),
              n.removeAttribute("style"),
              a &&
                a.length &&
                a.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            r.emit("destroy"),
            Object.keys(r.eventsListeners).forEach((e) => {
              r.off(e);
            }),
            !1 !== e &&
              ((r.el.swiper = null),
              (function (e) {
                const t = r;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })()),
            (r.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        u(F, e);
      }
      static get extendedDefaults() {
        return F;
      }
      static get defaults() {
        return B;
      }
      static installModule(e) {
        G.prototype.__modules__ || (G.prototype.__modules__ = []);
        const t = G.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => G.installModule(e)), G)
          : (G.installModule(e), G);
      }
    }
    function H(e, t, r, i) {
      return (
        e.params.createElements &&
          Object.keys(i).forEach((s) => {
            if (!r[s] && !0 === r.auto) {
              let n = m(e.el, `.${i[s]}`)[0];
              n || (((n = g("div", i[s])).className = i[s]), e.el.append(n)),
                (r[s] = n),
                (t[s] = n);
            }
          }),
        r
      );
    }
    function N(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!+\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function q(e) {
      const t = this,
        { params: r, slidesEl: i } = t;
      r.loop && t.loopDestroy();
      const s = (e) => {
        if ("string" == typeof e) {
          const t = document.createElement("div");
          (t.innerHTML = e), i.append(t.children[0]), (t.innerHTML = "");
        } else i.append(e);
      };
      if ("object" == typeof e && "length" in e)
        for (let t = 0; t < e.length; t += 1) e[t] && s(e[t]);
      else s(e);
      t.recalcSlides(),
        r.loop && t.loopCreate(),
        (r.observer && !t.isElement) || t.update();
    }
    function V(e) {
      const t = this,
        { params: r, activeIndex: i, slidesEl: s } = t;
      r.loop && t.loopDestroy();
      let n = i + 1;
      const a = (e) => {
        if ("string" == typeof e) {
          const t = document.createElement("div");
          (t.innerHTML = e), s.prepend(t.children[0]), (t.innerHTML = "");
        } else s.prepend(e);
      };
      if ("object" == typeof e && "length" in e) {
        for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
        n = i + e.length;
      } else a(e);
      t.recalcSlides(),
        r.loop && t.loopCreate(),
        (r.observer && !t.isElement) || t.update(),
        t.slideTo(n, 0, !1);
    }
    function W(e, t) {
      const r = this,
        { params: i, activeIndex: s, slidesEl: n } = r;
      let a = s;
      i.loop && ((a -= r.loopedSlides), r.loopDestroy(), r.recalcSlides());
      const o = r.slides.length;
      if (e <= 0) return void r.prependSlide(t);
      if (e >= o) return void r.appendSlide(t);
      let l = a > e ? a + 1 : a;
      const d = [];
      for (let t = o - 1; t >= e; t -= 1) {
        const e = r.slides[t];
        e.remove(), d.unshift(e);
      }
      if ("object" == typeof t && "length" in t) {
        for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
        l = a > e ? a + t.length : a;
      } else n.append(t);
      for (let e = 0; e < d.length; e += 1) n.append(d[e]);
      r.recalcSlides(),
        i.loop && r.loopCreate(),
        (i.observer && !r.isElement) || r.update(),
        i.loop ? r.slideTo(l + r.loopedSlides, 0, !1) : r.slideTo(l, 0, !1);
    }
    function j(e) {
      const t = this,
        { params: r, activeIndex: i } = t;
      let s = i;
      r.loop && ((s -= t.loopedSlides), t.loopDestroy());
      let n,
        a = s;
      if ("object" == typeof e && "length" in e) {
        for (let r = 0; r < e.length; r += 1)
          (n = e[r]), t.slides[n] && t.slides[n].remove(), n < a && (a -= 1);
        a = Math.max(a, 0);
      } else (n = e), t.slides[n] && t.slides[n].remove(), n < a && (a -= 1), (a = Math.max(a, 0));
      t.recalcSlides(),
        r.loop && t.loopCreate(),
        (r.observer && !t.isElement) || t.update(),
        r.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1);
    }
    function U() {
      const e = this,
        t = [];
      for (let r = 0; r < e.slides.length; r += 1) t.push(r);
      e.removeSlide(t);
    }
    function K(e) {
      const {
        effect: t,
        swiper: r,
        on: i,
        setTranslate: s,
        setTransition: n,
        overwriteParams: a,
        perspective: o,
        recreateShadows: l,
        getEffectParams: d,
      } = e;
      let c;
      i("beforeInit", () => {
        if (r.params.effect !== t) return;
        r.classNames.push(`${r.params.containerModifierClass}${t}`),
          o && o() && r.classNames.push(`${r.params.containerModifierClass}3d`);
        const e = a ? a() : {};
        Object.assign(r.params, e), Object.assign(r.originalParams, e);
      }),
        i("setTranslate", () => {
          r.params.effect === t && s();
        }),
        i("setTransition", (e, i) => {
          r.params.effect === t && n(i);
        }),
        i("transitionEnd", () => {
          if (r.params.effect === t && l) {
            if (!d || !d().slideShadows) return;
            r.slides.forEach((e) => {
              e.querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              ).forEach((e) => e.remove());
            }),
              l();
          }
        }),
        i("virtualUpdate", () => {
          r.params.effect === t &&
            (r.slides.length || (c = !0),
            requestAnimationFrame(() => {
              c && r.slides && r.slides.length && (s(), (c = !1));
            }));
        });
    }
    function Q(e, t) {
      const r = h(t);
      return (
        r !== t &&
          ((r.style.backfaceVisibility = "hidden"),
          (r.style["-webkit-backface-visibility"] = "hidden")),
        r
      );
    }
    function Z(e) {
      let { swiper: t, duration: r, transformElements: i, allSlides: s } = e;
      const { activeIndex: n } = t;
      if (t.params.virtualTranslate && 0 !== r) {
        let e,
          r = !1;
        (e = s
          ? i
          : i.filter((e) => {
              const r = e.classList.contains("swiper-slide-transform")
                ? ((e) =>
                    e.parentElement
                      ? e.parentElement
                      : t.slides.filter(
                          (t) => t.shadowEl && t.shadowEl === e.parentNode
                        )[0])(e)
                : e;
              return t.getSlideIndex(r) === n;
            })).forEach((e) => {
          x(e, () => {
            if (r) return;
            if (!t || t.destroyed) return;
            (r = !0), (t.animating = !1);
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            t.wrapperEl.dispatchEvent(e);
          });
        });
      }
    }
    function J(e, t, r) {
      const i = "swiper-slide-shadow" + (r ? `-${r}` : ""),
        s = h(t);
      let n = s.querySelector(`.${i}`);
      return (
        n ||
          ((n = g("div", "swiper-slide-shadow" + (r ? `-${r}` : ""))),
          s.append(n)),
        n
      );
    }
    Object.keys(Y).forEach((e) => {
      Object.keys(Y[e]).forEach((t) => {
        G.prototype[t] = Y[e][t];
      });
    }),
      G.use([
        function (e) {
          let { swiper: t, on: r, emit: i } = e;
          const s = n();
          let a = null,
            o = null;
          const l = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            d = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          r("init", () => {
            t.params.resizeObserver && void 0 !== s.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                (a = new ResizeObserver((e) => {
                  o = s.requestAnimationFrame(() => {
                    const { width: r, height: i } = t;
                    let s = r,
                      n = i;
                    e.forEach((e) => {
                      let { contentBoxSize: r, contentRect: i, target: a } = e;
                      (a && a !== t.el) ||
                        ((s = i ? i.width : (r[0] || r).inlineSize),
                        (n = i ? i.height : (r[0] || r).blockSize));
                    }),
                      (s === r && n === i) || l();
                  });
                })).observe(t.el)
              : (s.addEventListener("resize", l),
                s.addEventListener("orientationchange", d));
          }),
            r("destroy", () => {
              o && s.cancelAnimationFrame(o),
                a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
                s.removeEventListener("resize", l),
                s.removeEventListener("orientationchange", d);
            });
        },
        function (e) {
          let { swiper: t, extendParams: r, on: i, emit: s } = e;
          const a = [],
            o = n(),
            l = function (e, r) {
              void 0 === r && (r = {});
              const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void s("observerUpdate", e[0]);
                  const r = function () {
                    s("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(r)
                    : o.setTimeout(r, 0);
                }
              );
              i.observe(e, {
                attributes: void 0 === r.attributes || r.attributes,
                childList: void 0 === r.childList || r.childList,
                characterData: void 0 === r.characterData || r.characterData,
              }),
                a.push(i);
            };
          r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = b(t.el);
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                l(t.el, { childList: t.params.observeSlideChildren }),
                  l(t.wrapperEl, { attributes: !1 });
              }
            }),
            i("destroy", () => {
              a.forEach((e) => {
                e.disconnect();
              }),
                a.splice(0, a.length);
            });
        },
      ]);
    const ee = [
      function (e) {
        let t,
          { swiper: r, extendParams: s, on: n, emit: a } = e;
        s({
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        });
        const o = i();
        r.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: [],
        };
        const l = o.createElement("div");
        function d(e, t) {
          const i = r.params.virtual;
          if (i.cache && r.virtual.cache[t]) return r.virtual.cache[t];
          let s;
          return (
            i.renderSlide
              ? "string" == typeof (s = i.renderSlide.call(r, e, t)) &&
                ((l.innerHTML = s), (s = l.children[0]))
              : (s = r.isElement
                  ? g("swiper-slide")
                  : g("div", r.params.slideClass)),
            s.setAttribute("data-swiper-slide-index", t),
            i.renderSlide || (s.innerHTML = e),
            i.cache && (r.virtual.cache[t] = s),
            s
          );
        }
        function c(e) {
          const {
              slidesPerView: t,
              slidesPerGroup: i,
              centeredSlides: s,
              loop: n,
            } = r.params,
            { addSlidesBefore: o, addSlidesAfter: l } = r.params.virtual,
            { from: c, to: u, slides: p, slidesGrid: f, offset: h } = r.virtual;
          r.params.cssMode || r.updateActiveIndex();
          const g = r.activeIndex || 0;
          let v, y, w;
          (v = r.rtlTranslate ? "right" : r.isHorizontal() ? "left" : "top"),
            s
              ? ((y = Math.floor(t / 2) + i + l),
                (w = Math.floor(t / 2) + i + o))
              : ((y = t + (i - 1) + l), (w = (n ? t : i) + o));
          let b = g - w,
            x = g + y;
          n || ((b = Math.max(b, 0)), (x = Math.min(x, p.length - 1)));
          let _ = (r.slidesGrid[b] || 0) - (r.slidesGrid[0] || 0);
          function T() {
            r.updateSlides(),
              r.updateProgress(),
              r.updateSlidesClasses(),
              a("virtualUpdate");
          }
          if (
            (n && g >= w
              ? ((b -= w), s || (_ += r.slidesGrid[0]))
              : n && g < w && ((b = -w), s && (_ += r.slidesGrid[0])),
            Object.assign(r.virtual, {
              from: b,
              to: x,
              offset: _,
              slidesGrid: r.slidesGrid,
              slidesBefore: w,
              slidesAfter: y,
            }),
            c === b && u === x && !e)
          )
            return (
              r.slidesGrid !== f &&
                _ !== h &&
                r.slides.forEach((e) => {
                  e.style[v] = _ - Math.abs(r.cssOverflowAdjustment()) + "px";
                }),
              r.updateProgress(),
              void a("virtualUpdate")
            );
          if (r.params.virtual.renderExternal)
            return (
              r.params.virtual.renderExternal.call(r, {
                offset: _,
                from: b,
                to: x,
                slides: (function () {
                  const e = [];
                  for (let t = b; t <= x; t += 1) e.push(p[t]);
                  return e;
                })(),
              }),
              void (r.params.virtual.renderExternalUpdate
                ? T()
                : a("virtualUpdate"))
            );
          const E = [],
            S = [],
            M = (e) => {
              let t = e;
              return (
                e < 0 ? (t = p.length + e) : t >= p.length && (t -= p.length), t
              );
            };
          if (e)
            r.slidesEl
              .querySelectorAll(`.${r.params.slideClass}, swiper-slide`)
              .forEach((e) => {
                e.remove();
              });
          else
            for (let e = c; e <= u; e += 1)
              if (e < b || e > x) {
                const t = M(e);
                r.slidesEl
                  .querySelectorAll(
                    `.${r.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
                  )
                  .forEach((e) => {
                    e.remove();
                  });
              }
          const C = n ? -p.length : 0,
            P = n ? 2 * p.length : p.length;
          for (let t = C; t < P; t += 1)
            if (t >= b && t <= x) {
              const r = M(t);
              void 0 === u || e
                ? S.push(r)
                : (t > u && S.push(r), t < c && E.push(r));
            }
          if (
            (S.forEach((e) => {
              r.slidesEl.append(d(p[e], e));
            }),
            n)
          )
            for (let e = E.length - 1; e >= 0; e -= 1) {
              const t = E[e];
              r.slidesEl.prepend(d(p[t], t));
            }
          else
            E.sort((e, t) => t - e),
              E.forEach((e) => {
                r.slidesEl.prepend(d(p[e], e));
              });
          m(r.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
            e.style[v] = _ - Math.abs(r.cssOverflowAdjustment()) + "px";
          }),
            T();
        }
        n("beforeInit", () => {
          if (!r.params.virtual.enabled) return;
          let e;
          if (void 0 === r.passedParams.virtual.slides) {
            const t = [...r.slidesEl.children].filter((e) =>
              e.matches(`.${r.params.slideClass}, swiper-slide`)
            );
            t &&
              t.length &&
              ((r.virtual.slides = [...t]),
              (e = !0),
              t.forEach((e, t) => {
                e.setAttribute("data-swiper-slide-index", t),
                  (r.virtual.cache[t] = e),
                  e.remove();
              }));
          }
          e || (r.virtual.slides = r.params.virtual.slides),
            r.classNames.push(`${r.params.containerModifierClass}virtual`),
            (r.params.watchSlidesProgress = !0),
            (r.originalParams.watchSlidesProgress = !0),
            r.params.initialSlide || c();
        }),
          n("setTranslate", () => {
            r.params.virtual.enabled &&
              (r.params.cssMode && !r._immediateVirtual
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    c();
                  }, 100)))
                : c());
          }),
          n("init update resize", () => {
            r.params.virtual.enabled &&
              r.params.cssMode &&
              p(r.wrapperEl, "--swiper-virtual-size", `${r.virtualSize}px`);
          }),
          Object.assign(r.virtual, {
            appendSlide: function (e) {
              if ("object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1)
                  e[t] && r.virtual.slides.push(e[t]);
              else r.virtual.slides.push(e);
              c(!0);
            },
            prependSlide: function (e) {
              const t = r.activeIndex;
              let i = t + 1,
                s = 1;
              if (Array.isArray(e)) {
                for (let t = 0; t < e.length; t += 1)
                  e[t] && r.virtual.slides.unshift(e[t]);
                (i = t + e.length), (s = e.length);
              } else r.virtual.slides.unshift(e);
              if (r.params.virtual.cache) {
                const e = r.virtual.cache,
                  t = {};
                Object.keys(e).forEach((r) => {
                  const i = e[r],
                    n = i.getAttribute("data-swiper-slide-index");
                  n &&
                    i.setAttribute(
                      "data-swiper-slide-index",
                      parseInt(n, 10) + s
                    ),
                    (t[parseInt(r, 10) + s] = i);
                }),
                  (r.virtual.cache = t);
              }
              c(!0), r.slideTo(i, 0);
            },
            removeSlide: function (e) {
              if (null == e) return;
              let t = r.activeIndex;
              if (Array.isArray(e))
                for (let i = e.length - 1; i >= 0; i -= 1)
                  r.virtual.slides.splice(e[i], 1),
                    r.params.virtual.cache && delete r.virtual.cache[e[i]],
                    e[i] < t && (t -= 1),
                    (t = Math.max(t, 0));
              else
                r.virtual.slides.splice(e, 1),
                  r.params.virtual.cache && delete r.virtual.cache[e],
                  e < t && (t -= 1),
                  (t = Math.max(t, 0));
              c(!0), r.slideTo(t, 0);
            },
            removeAllSlides: function () {
              (r.virtual.slides = []),
                r.params.virtual.cache && (r.virtual.cache = {}),
                c(!0),
                r.slideTo(0, 0);
            },
            update: c,
          });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: s, emit: a } = e;
        const o = i(),
          l = n();
        function d(e) {
          if (!t.enabled) return;
          const { rtlTranslate: r } = t;
          let i = e;
          i.originalEvent && (i = i.originalEvent);
          const s = i.keyCode || i.charCode,
            n = t.params.keyboard.pageUpDown,
            d = n && 33 === s,
            c = n && 34 === s,
            u = 37 === s,
            p = 39 === s,
            f = 38 === s,
            h = 40 === s;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && p) || (t.isVertical() && h) || c)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && u) || (t.isVertical() && f) || d)
          )
            return !1;
          if (
            !(
              i.shiftKey ||
              i.altKey ||
              i.ctrlKey ||
              i.metaKey ||
              (o.activeElement &&
                o.activeElement.nodeName &&
                ("input" === o.activeElement.nodeName.toLowerCase() ||
                  "textarea" === o.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (d || c || u || p || f || h)
            ) {
              let e = !1;
              if (
                b(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
                0 === b(t.el, `.${t.params.slideActiveClass}`).length
              )
                return;
              const i = t.el,
                s = i.clientWidth,
                n = i.clientHeight,
                a = l.innerWidth,
                o = l.innerHeight,
                d = v(i);
              r && (d.left -= i.scrollLeft);
              const c = [
                [d.left, d.top],
                [d.left + s, d.top],
                [d.left, d.top + n],
                [d.left + s, d.top + n],
              ];
              for (let t = 0; t < c.length; t += 1) {
                const r = c[t];
                if (r[0] >= 0 && r[0] <= a && r[1] >= 0 && r[1] <= o) {
                  if (0 === r[0] && 0 === r[1]) continue;
                  e = !0;
                }
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((d || c || u || p) &&
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                (((c || p) && !r) || ((d || u) && r)) && t.slideNext(),
                (((d || u) && !r) || ((c || p) && r)) && t.slidePrev())
              : ((d || c || f || h) &&
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                (c || h) && t.slideNext(),
                (d || f) && t.slidePrev()),
              a("keyPress", s);
          }
        }
        function c() {
          t.keyboard.enabled ||
            (o.addEventListener("keydown", d), (t.keyboard.enabled = !0));
        }
        function u() {
          t.keyboard.enabled &&
            (o.removeEventListener("keydown", d), (t.keyboard.enabled = !1));
        }
        (t.keyboard = { enabled: !1 }),
          r({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          s("init", () => {
            t.params.keyboard.enabled && c();
          }),
          s("destroy", () => {
            t.keyboard.enabled && u();
          }),
          Object.assign(t.keyboard, { enable: c, disable: u });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i, emit: s } = e;
        const l = n();
        let d;
        r({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        }),
          (t.mousewheel = { enabled: !1 });
        let c,
          u = o();
        const p = [];
        function f() {
          t.enabled && (t.mouseEntered = !0);
        }
        function h() {
          t.enabled && (t.mouseEntered = !1);
        }
        function m(e) {
          return !(
            (t.params.mousewheel.thresholdDelta &&
              e.delta < t.params.mousewheel.thresholdDelta) ||
            (t.params.mousewheel.thresholdTime &&
              o() - u < t.params.mousewheel.thresholdTime) ||
            (!(e.delta >= 6 && o() - u < 60) &&
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), s("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), s("scroll", e.raw)),
              (u = new l.Date().getTime()),
              1))
          );
        }
        function g(e) {
          let r = e,
            i = !0;
          if (!t.enabled) return;
          const n = t.params.mousewheel;
          t.params.cssMode && r.preventDefault();
          let l = t.el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (l = document.querySelector(t.params.mousewheel.eventsTarget));
          const u = l && l.contains(r.target);
          if (!t.mouseEntered && !u && !n.releaseOnEdges) return !0;
          r.originalEvent && (r = r.originalEvent);
          let f = 0;
          const h = t.rtlTranslate ? -1 : 1,
            g = (function (e) {
              let t = 0,
                r = 0,
                i = 0,
                s = 0;
              return (
                "detail" in e && (r = e.detail),
                "wheelDelta" in e && (r = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = r), (r = 0)),
                (i = 10 * t),
                (s = 10 * r),
                "deltaY" in e && (s = e.deltaY),
                "deltaX" in e && (i = e.deltaX),
                e.shiftKey && !i && ((i = s), (s = 0)),
                (i || s) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((i *= 40), (s *= 40))
                    : ((i *= 800), (s *= 800))),
                i && !t && (t = i < 1 ? -1 : 1),
                s && !r && (r = s < 1 ? -1 : 1),
                { spinX: t, spinY: r, pixelX: i, pixelY: s }
              );
            })(r);
          if (n.forceToAxis)
            if (t.isHorizontal()) {
              if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
              f = -g.pixelX * h;
            } else {
              if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
              f = -g.pixelY;
            }
          else
            f =
              Math.abs(g.pixelX) > Math.abs(g.pixelY)
                ? -g.pixelX * h
                : -g.pixelY;
          if (0 === f) return !0;
          n.invert && (f = -f);
          let v = t.getTranslate() + f * n.sensitivity;
          if (
            (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            (i =
              !!t.params.loop ||
              !(v === t.minTranslate() || v === t.maxTranslate())) &&
              t.params.nested &&
              r.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
          ) {
            const e = {
                time: o(),
                delta: Math.abs(f),
                direction: Math.sign(f),
              },
              i =
                c &&
                e.time < c.time + 500 &&
                e.delta <= c.delta &&
                e.direction === c.direction;
            if (!i) {
              c = void 0;
              let o = t.getTranslate() + f * n.sensitivity;
              const l = t.isBeginning,
                u = t.isEnd;
              if (
                (o >= t.minTranslate() && (o = t.minTranslate()),
                o <= t.maxTranslate() && (o = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(o),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!l && t.isBeginning) || (!u && t.isEnd)) &&
                  t.updateSlidesClasses(),
                t.params.loop &&
                  t.loopFix({
                    direction: e.direction < 0 ? "next" : "prev",
                    byMousewheel: !0,
                  }),
                t.params.freeMode.sticky)
              ) {
                clearTimeout(d), (d = void 0), p.length >= 15 && p.shift();
                const r = p.length ? p[p.length - 1] : void 0,
                  i = p[0];
                if (
                  (p.push(e),
                  r && (e.delta > r.delta || e.direction !== r.direction))
                )
                  p.splice(0);
                else if (
                  p.length >= 15 &&
                  e.time - i.time < 500 &&
                  i.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const r = f > 0 ? 0.8 : 0.2;
                  (c = e),
                    p.splice(0),
                    (d = a(() => {
                      t.slideToClosest(t.params.speed, !0, void 0, r);
                    }, 0));
                }
                d ||
                  (d = a(() => {
                    (c = e),
                      p.splice(0),
                      t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (i || s("scroll", r),
                t.params.autoplay &&
                  t.params.autoplayDisableOnInteraction &&
                  t.autoplay.stop(),
                o === t.minTranslate() || o === t.maxTranslate())
              )
                return !0;
            }
          } else {
            const r = {
              time: o(),
              delta: Math.abs(f),
              direction: Math.sign(f),
              raw: e,
            };
            p.length >= 2 && p.shift();
            const i = p.length ? p[p.length - 1] : void 0;
            if (
              (p.push(r),
              i
                ? (r.direction !== i.direction ||
                    r.delta > i.delta ||
                    r.time > i.time + 150) &&
                  m(r)
                : m(r),
              (function (e) {
                const r = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && r.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && r.releaseOnEdges)
                  return !0;
                return !1;
              })(r))
            )
              return !0;
          }
          return (
            r.preventDefault ? r.preventDefault() : (r.returnValue = !1), !1
          );
        }
        function v(e) {
          let r = t.el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (r = document.querySelector(t.params.mousewheel.eventsTarget)),
            r[e]("mouseenter", f),
            r[e]("mouseleave", h),
            r[e]("wheel", g);
        }
        function y() {
          return t.params.cssMode
            ? (t.wrapperEl.removeEventListener("wheel", g), !0)
            : !t.mousewheel.enabled &&
                (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
        }
        function w() {
          return t.params.cssMode
            ? (t.wrapperEl.addEventListener(event, g), !0)
            : !!t.mousewheel.enabled &&
                (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
        }
        i("init", () => {
          !t.params.mousewheel.enabled && t.params.cssMode && w(),
            t.params.mousewheel.enabled && y();
        }),
          i("destroy", () => {
            t.params.cssMode && y(), t.mousewheel.enabled && w();
          }),
          Object.assign(t.mousewheel, { enable: y, disable: w });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i, emit: s } = e;
        r({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null });
        const n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
        function a(e) {
          let r;
          return e &&
            "string" == typeof e &&
            t.isElement &&
            (r = t.el.shadowRoot.querySelector(e))
            ? r
            : (e &&
                ("string" == typeof e &&
                  (r = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                  "string" == typeof e &&
                  r.length > 1 &&
                  1 === t.el.querySelectorAll(e).length &&
                  (r = t.el.querySelector(e))),
              e && !r ? e : r);
        }
        function o(e, r) {
          const i = t.params.navigation;
          (e = n(e)).forEach((e) => {
            e &&
              (e.classList[r ? "add" : "remove"](...i.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = r),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
          });
        }
        function l() {
          const { nextEl: e, prevEl: r } = t.navigation;
          if (t.params.loop) return o(r, !1), void o(e, !1);
          o(r, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function d(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), s("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), s("navigationNext"));
        }
        function u() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = H(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          let r = a(e.nextEl),
            i = a(e.prevEl);
          Object.assign(t.navigation, { nextEl: r, prevEl: i }),
            (r = n(r)),
            (i = n(i));
          const s = (r, i) => {
            r && r.addEventListener("click", "next" === i ? c : d),
              !t.enabled && r && r.classList.add(...e.lockClass.split(" "));
          };
          r.forEach((e) => s(e, "next")), i.forEach((e) => s(e, "prev"));
        }
        function p() {
          let { nextEl: e, prevEl: r } = t.navigation;
          (e = n(e)), (r = n(r));
          const i = (e, r) => {
            e.removeEventListener("click", "next" === r ? c : d),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => i(e, "next")), r.forEach((e) => i(e, "prev"));
        }
        i("init", () => {
          !1 === t.params.navigation.enabled ? f() : (u(), l());
        }),
          i("toEdge fromEdge lock unlock", () => {
            l();
          }),
          i("destroy", () => {
            p();
          }),
          i("enable disable", () => {
            let { nextEl: e, prevEl: r } = t.navigation;
            (e = n(e)),
              (r = n(r)),
              [...e, ...r]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList[t.enabled ? "remove" : "add"](
                    t.params.navigation.lockClass
                  )
                );
          }),
          i("click", (e, r) => {
            let { nextEl: i, prevEl: a } = t.navigation;
            (i = n(i)), (a = n(a));
            const o = r.target;
            if (
              t.params.navigation.hideOnClick &&
              !a.includes(o) &&
              !i.includes(o)
            ) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === o || t.pagination.el.contains(o))
              )
                return;
              let e;
              i.length
                ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
                : a.length &&
                  (e = a[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                s(!0 === e ? "navigationShow" : "navigationHide"),
                [...i, ...a]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        const f = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            p();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              u(),
              l();
          },
          disable: f,
          update: l,
          init: u,
          destroy: p,
        });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i, emit: s } = e;
        const n = "swiper-pagination";
        let a;
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
            paginationDisabledClass: `${n}-disabled`,
          },
        }),
          (t.pagination = { el: null, bullets: [] });
        let o = 0;
        const l = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
        function d() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
          );
        }
        function c(e, r) {
          const { bulletActiveClass: i } = t.params.pagination;
          e &&
            (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) &&
            (e.classList.add(`${i}-${r}`),
            (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) &&
              e.classList.add(`${i}-${r}-${r}`));
        }
        function u(e) {
          const r = e.target.closest(N(t.params.pagination.bulletClass));
          if (!r) return;
          e.preventDefault();
          const i = w(r) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === i) return;
            const e = t.getSlideIndexByData(i),
              r = t.getSlideIndexByData(t.realIndex);
            e > t.slides.length - t.loopedSlides &&
              t.loopFix({
                direction: e > r ? "next" : "prev",
                activeSlideIndex: e,
                slideTo: !1,
              }),
              t.slideToLoop(i);
          } else t.slideTo(i);
        }
        function p() {
          const e = t.rtl,
            r = t.params.pagination;
          if (d()) return;
          let i,
            n,
            u = t.pagination.el;
          u = l(u);
          const p =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            f = t.params.loop
              ? Math.ceil(p / t.params.slidesPerGroup)
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((n = t.previousRealIndex || 0),
                (i =
                  t.params.slidesPerGroup > 1
                    ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                    : t.realIndex))
              : void 0 !== t.snapIndex
              ? ((i = t.snapIndex), (n = t.previousSnapIndex))
              : ((n = t.previousIndex || 0), (i = t.activeIndex || 0)),
            "bullets" === r.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const s = t.pagination.bullets;
            let l, d, p;
            if (
              (r.dynamicBullets &&
                ((a = _(s[0], t.isHorizontal() ? "width" : "height", !0)),
                u.forEach((e) => {
                  e.style[t.isHorizontal() ? "width" : "height"] =
                    a * (r.dynamicMainBullets + 4) + "px";
                }),
                r.dynamicMainBullets > 1 &&
                  void 0 !== n &&
                  ((o += i - (n || 0)) > r.dynamicMainBullets - 1
                    ? (o = r.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (l = Math.max(i - o, 0)),
                (p =
                  ((d = l + (Math.min(s.length, r.dynamicMainBullets) - 1)) +
                    l) /
                  2)),
              s.forEach((e) => {
                const t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => `${r.bulletActiveClass}${e}`),
                ]
                  .map((e) =>
                    "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              u.length > 1)
            )
              s.forEach((e) => {
                const t = w(e);
                t === i && e.classList.add(...r.bulletActiveClass.split(" ")),
                  r.dynamicBullets &&
                    (t >= l &&
                      t <= d &&
                      e.classList.add(
                        ...`${r.bulletActiveClass}-main`.split(" ")
                      ),
                    t === l && c(e, "prev"),
                    t === d && c(e, "next"));
              });
            else {
              const e = s[i];
              if (
                (e && e.classList.add(...r.bulletActiveClass.split(" ")),
                r.dynamicBullets)
              ) {
                const e = s[l],
                  t = s[d];
                for (let e = l; e <= d; e += 1)
                  s[e] &&
                    s[e].classList.add(
                      ...`${r.bulletActiveClass}-main`.split(" ")
                    );
                c(e, "prev"), c(t, "next");
              }
            }
            if (r.dynamicBullets) {
              const i = Math.min(s.length, r.dynamicMainBullets + 4),
                n = (a * i - a) / 2 - p * a,
                o = e ? "right" : "left";
              s.forEach((e) => {
                e.style[t.isHorizontal() ? o : "top"] = `${n}px`;
              });
            }
          }
          u.forEach((e, n) => {
            if (
              ("fraction" === r.type &&
                (e.querySelectorAll(N(r.currentClass)).forEach((e) => {
                  e.textContent = r.formatFractionCurrent(i + 1);
                }),
                e.querySelectorAll(N(r.totalClass)).forEach((e) => {
                  e.textContent = r.formatFractionTotal(f);
                })),
              "progressbar" === r.type)
            ) {
              let s;
              s = r.progressbarOpposite
                ? t.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : t.isHorizontal()
                ? "horizontal"
                : "vertical";
              const n = (i + 1) / f;
              let a = 1,
                o = 1;
              "horizontal" === s ? (a = n) : (o = n),
                e.querySelectorAll(N(r.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`),
                    (e.style.transitionDuration = `${t.params.speed}ms`);
                });
            }
            "custom" === r.type && r.renderCustom
              ? ((e.innerHTML = r.renderCustom(t, i + 1, f)),
                0 === n && s("paginationRender", e))
              : (0 === n && s("paginationRender", e), s("paginationUpdate", e)),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](r.lockClass);
          });
        }
        function f() {
          const e = t.params.pagination;
          if (d()) return;
          const r =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length;
          let i = t.pagination.el;
          i = l(i);
          let n = "";
          if ("bullets" === e.type) {
            let i = t.params.loop
              ? Math.ceil(r / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && i > r && (i = r);
            for (let r = 0; r < i; r += 1)
              e.renderBullet
                ? (n += e.renderBullet.call(t, r, e.bulletClass))
                : (n += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          }
          "fraction" === e.type &&
            (n = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            "progressbar" === e.type &&
              (n = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
            (t.pagination.bullets = []),
            i.forEach((r) => {
              "custom" !== e.type && (r.innerHTML = n || ""),
                "bullets" === e.type &&
                  t.pagination.bullets.push(
                    ...r.querySelectorAll(N(e.bulletClass))
                  );
            }),
            "custom" !== e.type && s("paginationRender", i[0]);
        }
        function h() {
          t.params.pagination = H(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let r;
          "string" == typeof e.el &&
            t.isElement &&
            (r = t.el.shadowRoot.querySelector(e.el)),
            r ||
              "string" != typeof e.el ||
              (r = [...document.querySelectorAll(e.el)]),
            r || (r = e.el),
            r &&
              0 !== r.length &&
              (t.params.uniqueNavElements &&
                "string" == typeof e.el &&
                Array.isArray(r) &&
                r.length > 1 &&
                (r = [...t.el.querySelectorAll(e.el)]).length > 1 &&
                (r = r.filter((e) => b(e, ".swiper")[0] === t.el)[0]),
              Array.isArray(r) && 1 === r.length && (r = r[0]),
              Object.assign(t.pagination, { el: r }),
              (r = l(r)).forEach((r) => {
                "bullets" === e.type &&
                  e.clickable &&
                  r.classList.add(e.clickableClass),
                  r.classList.add(e.modifierClass + e.type),
                  r.classList.add(
                    t.isHorizontal() ? e.horizontalClass : e.verticalClass
                  ),
                  "bullets" === e.type &&
                    e.dynamicBullets &&
                    (r.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                    (o = 0),
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                  "progressbar" === e.type &&
                    e.progressbarOpposite &&
                    r.classList.add(e.progressbarOppositeClass),
                  e.clickable && r.addEventListener("click", u),
                  t.enabled || r.classList.add(e.lockClass);
              }));
        }
        function m() {
          const e = t.params.pagination;
          if (d()) return;
          let r = t.pagination.el;
          r &&
            (r = l(r)).forEach((r) => {
              r.classList.remove(e.hiddenClass),
                r.classList.remove(e.modifierClass + e.type),
                r.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable && r.removeEventListener("click", u);
            }),
            t.pagination.bullets &&
              t.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        i("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let { el: r } = t.pagination;
          (r = l(r)).forEach((r) => {
            r.classList.remove(e.horizontalClass, e.verticalClass),
              r.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
        }),
          i("init", () => {
            !1 === t.params.pagination.enabled ? g() : (h(), f(), p());
          }),
          i("activeIndexChange", () => {
            void 0 === t.snapIndex && p();
          }),
          i("snapIndexChange", () => {
            p();
          }),
          i("snapGridLengthChange", () => {
            f(), p();
          }),
          i("destroy", () => {
            m();
          }),
          i("enable disable", () => {
            let { el: e } = t.pagination;
            e &&
              (e = l(e)).forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.pagination.lockClass
                )
              );
          }),
          i("lock unlock", () => {
            p();
          }),
          i("click", (e, r) => {
            const i = r.target;
            let { el: n } = t.pagination;
            if (
              (Array.isArray(n) || (n = [n].filter((e) => !!e)),
              t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                n &&
                n.length > 0 &&
                !i.classList.contains(t.params.pagination.bulletClass))
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                  (t.navigation.prevEl && i === t.navigation.prevEl))
              )
                return;
              const e = n[0].classList.contains(
                t.params.pagination.hiddenClass
              );
              s(!0 === e ? "paginationShow" : "paginationHide"),
                n.forEach((e) =>
                  e.classList.toggle(t.params.pagination.hiddenClass)
                );
            }
          });
        const g = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            (e = l(e)).forEach((e) =>
              e.classList.add(t.params.pagination.paginationDisabledClass)
            ),
            m();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e &&
              (e = l(e)).forEach((e) =>
                e.classList.remove(t.params.pagination.paginationDisabledClass)
              ),
              h(),
              f(),
              p();
          },
          disable: g,
          render: f,
          update: p,
          init: h,
          destroy: m,
        });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: s, emit: n } = e;
        const o = i();
        let l,
          d,
          c,
          u,
          p = !1,
          f = null,
          h = null;
        function m() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e, rtlTranslate: r } = t,
            { dragEl: i, el: s } = e,
            n = t.params.scrollbar,
            a = t.params.loop ? t.progressLoop : t.progress;
          let o = d,
            l = (c - d) * a;
          r
            ? (l = -l) > 0
              ? ((o = d - l), (l = 0))
              : -l + d > c && (o = c + l)
            : l < 0
            ? ((o = d + l), (l = 0))
            : l + d > c && (o = c - l),
            t.isHorizontal()
              ? ((i.style.transform = `translate3d(${l}px, 0, 0)`),
                (i.style.width = `${o}px`))
              : ((i.style.transform = `translate3d(0px, ${l}px, 0)`),
                (i.style.height = `${o}px`)),
            n.hide &&
              (clearTimeout(f),
              (s.style.opacity = 1),
              (f = setTimeout(() => {
                (s.style.opacity = 0), (s.style.transitionDuration = "400ms");
              }, 1e3)));
        }
        function y() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e } = t,
            { dragEl: r, el: i } = e;
          (r.style.width = ""),
            (r.style.height = ""),
            (c = t.isHorizontal() ? i.offsetWidth : i.offsetHeight),
            (u =
              t.size /
              (t.virtualSize +
                t.params.slidesOffsetBefore -
                (t.params.centeredSlides ? t.snapGrid[0] : 0))),
            (d =
              "auto" === t.params.scrollbar.dragSize
                ? c * u
                : parseInt(t.params.scrollbar.dragSize, 10)),
            t.isHorizontal()
              ? (r.style.width = `${d}px`)
              : (r.style.height = `${d}px`),
            (i.style.display = u >= 1 ? "none" : ""),
            t.params.scrollbar.hide && (i.style.opacity = 0),
            t.params.watchOverflow &&
              t.enabled &&
              e.el.classList[t.isLocked ? "add" : "remove"](
                t.params.scrollbar.lockClass
              );
        }
        function w(e) {
          return t.isHorizontal() ? e.clientX : e.clientY;
        }
        function b(e) {
          const { scrollbar: r, rtlTranslate: i } = t,
            { el: s } = r;
          let n;
          (n =
            (w(e) -
              v(s)[t.isHorizontal() ? "left" : "top"] -
              (null !== l ? l : d / 2)) /
            (c - d)),
            (n = Math.max(Math.min(n, 1), 0)),
            i && (n = 1 - n);
          const a =
            t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * n;
          t.updateProgress(a),
            t.setTranslate(a),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        }
        function x(e) {
          const r = t.params.scrollbar,
            { scrollbar: i, wrapperEl: s } = t,
            { el: a, dragEl: o } = i;
          (p = !0),
            (l =
              e.target === o
                ? w(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            (s.style.transitionDuration = "100ms"),
            (o.style.transitionDuration = "100ms"),
            b(e),
            clearTimeout(h),
            (a.style.transitionDuration = "0ms"),
            r.hide && (a.style.opacity = 1),
            t.params.cssMode &&
              (t.wrapperEl.style["scroll-snap-type"] = "none"),
            n("scrollbarDragStart", e);
        }
        function _(e) {
          const { scrollbar: r, wrapperEl: i } = t,
            { el: s, dragEl: a } = r;
          p &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            b(e),
            (i.style.transitionDuration = "0ms"),
            (s.style.transitionDuration = "0ms"),
            (a.style.transitionDuration = "0ms"),
            n("scrollbarDragMove", e));
        }
        function T(e) {
          const r = t.params.scrollbar,
            { scrollbar: i, wrapperEl: s } = t,
            { el: o } = i;
          p &&
            ((p = !1),
            t.params.cssMode &&
              ((t.wrapperEl.style["scroll-snap-type"] = ""),
              (s.style.transitionDuration = "")),
            r.hide &&
              (clearTimeout(h),
              (h = a(() => {
                (o.style.opacity = 0), (o.style.transitionDuration = "400ms");
              }, 1e3))),
            n("scrollbarDragEnd", e),
            r.snapOnRelease && t.slideToClosest());
        }
        function E(e) {
          const { scrollbar: r, params: i } = t,
            s = r.el;
          if (!s) return;
          const n = s,
            a = !!i.passiveListeners && { passive: !1, capture: !1 },
            l = !!i.passiveListeners && { passive: !0, capture: !1 };
          if (!n) return;
          const d = "on" === e ? "addEventListener" : "removeEventListener";
          n[d]("pointerdown", x, a),
            o[d]("pointermove", _, a),
            o[d]("pointerup", T, l);
        }
        function S() {
          const { scrollbar: e, el: r } = t;
          t.params.scrollbar = H(
            t,
            t.originalParams.scrollbar,
            t.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const i = t.params.scrollbar;
          if (!i.el) return;
          let s, n;
          "string" == typeof i.el &&
            t.isElement &&
            (s = t.el.shadowRoot.querySelector(i.el)),
            s || "string" != typeof i.el
              ? s || (s = i.el)
              : (s = o.querySelectorAll(i.el)),
            t.params.uniqueNavElements &&
              "string" == typeof i.el &&
              s.length > 1 &&
              1 === r.querySelectorAll(i.el).length &&
              (s = r.querySelector(i.el)),
            s.length > 0 && (s = s[0]),
            s.classList.add(
              t.isHorizontal() ? i.horizontalClass : i.verticalClass
            ),
            s &&
              ((n = s.querySelector(`.${t.params.scrollbar.dragClass}`)) ||
                ((n = g("div", t.params.scrollbar.dragClass)), s.append(n))),
            Object.assign(e, { el: s, dragEl: n }),
            i.draggable && t.params.scrollbar.el && t.scrollbar.el && E("on"),
            s &&
              s.classList[t.enabled ? "remove" : "add"](
                t.params.scrollbar.lockClass
              );
        }
        function M() {
          const e = t.params.scrollbar,
            r = t.scrollbar.el;
          r &&
            r.classList.remove(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.params.scrollbar.el && t.scrollbar.el && E("off");
        }
        r({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical",
          },
        }),
          (t.scrollbar = { el: null, dragEl: null }),
          s("init", () => {
            !1 === t.params.scrollbar.enabled ? C() : (S(), y(), m());
          }),
          s("update resize observerUpdate lock unlock", () => {
            y();
          }),
          s("setTranslate", () => {
            m();
          }),
          s("setTransition", (e, r) => {
            !(function (e) {
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
            })(r);
          }),
          s("enable disable", () => {
            const { el: e } = t.scrollbar;
            e &&
              e.classList[t.enabled ? "remove" : "add"](
                t.params.scrollbar.lockClass
              );
          }),
          s("destroy", () => {
            M();
          });
        const C = () => {
          t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
            t.scrollbar.el &&
              t.scrollbar.el.classList.add(
                t.params.scrollbar.scrollbarDisabledClass
              ),
            M();
        };
        Object.assign(t.scrollbar, {
          enable: () => {
            t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
              t.scrollbar.el &&
                t.scrollbar.el.classList.remove(
                  t.params.scrollbar.scrollbarDisabledClass
                ),
              S(),
              y(),
              m();
          },
          disable: C,
          updateSize: y,
          setTranslate: m,
          init: S,
          destroy: M,
        });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        r({ parallax: { enabled: !1 } });
        const s = (e, r) => {
            const { rtl: i } = t,
              s = i ? -1 : 1,
              n = e.getAttribute("data-swiper-parallax") || "0";
            let a = e.getAttribute("data-swiper-parallax-x"),
              o = e.getAttribute("data-swiper-parallax-y");
            const l = e.getAttribute("data-swiper-parallax-scale"),
              d = e.getAttribute("data-swiper-parallax-opacity"),
              c = e.getAttribute("data-swiper-parallax-rotate");
            if (
              (a || o
                ? ((a = a || "0"), (o = o || "0"))
                : t.isHorizontal()
                ? ((a = n), (o = "0"))
                : ((o = n), (a = "0")),
              (a =
                a.indexOf("%") >= 0
                  ? parseInt(a, 10) * r * s + "%"
                  : a * r * s + "px"),
              (o =
                o.indexOf("%") >= 0 ? parseInt(o, 10) * r + "%" : o * r + "px"),
              null != d)
            ) {
              const t = d - (d - 1) * (1 - Math.abs(r));
              e.style.opacity = t;
            }
            let u = `translate3d(${a}, ${o}, 0px)`;
            null != l && (u += ` scale(${l - (l - 1) * (1 - Math.abs(r))})`),
              c && null != c && (u += ` rotate(${c * r * -1}deg)`),
              (e.style.transform = u);
          },
          n = () => {
            const { el: e, slides: r, progress: i, snapGrid: n } = t;
            m(
              e,
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            ).forEach((e) => {
              s(e, i);
            }),
              r.forEach((e, r) => {
                let a = e.progress;
                t.params.slidesPerGroup > 1 &&
                  "auto" !== t.params.slidesPerView &&
                  (a += Math.ceil(r / 2) - i * (n.length - 1)),
                  (a = Math.min(Math.max(a, -1), 1)),
                  e
                    .querySelectorAll(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]"
                    )
                    .forEach((e) => {
                      s(e, a);
                    });
              });
          };
        i("beforeInit", () => {
          t.params.parallax.enabled &&
            ((t.params.watchSlidesProgress = !0),
            (t.originalParams.watchSlidesProgress = !0));
        }),
          i("init", () => {
            t.params.parallax.enabled && n();
          }),
          i("setTranslate", () => {
            t.params.parallax.enabled && n();
          }),
          i("setTransition", (e, r) => {
            t.params.parallax.enabled &&
              (function (e) {
                void 0 === e && (e = t.params.speed);
                const { el: r } = t;
                r.querySelectorAll(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                ).forEach((t) => {
                  let r =
                    parseInt(
                      t.getAttribute("data-swiper-parallax-duration"),
                      10
                    ) || e;
                  0 === e && (r = 0), (t.style.transitionDuration = `${r}ms`);
                });
              })(r);
          });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i, emit: s } = e;
        const a = n();
        r({
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        }),
          (t.zoom = { enabled: !1 });
        let o,
          d,
          c = 1,
          u = !1;
        const p = [],
          f = {
            originX: 0,
            originY: 0,
            slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            imageEl: void 0,
            imageWrapEl: void 0,
            maxRatio: 3,
          },
          h = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {},
          },
          g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          };
        let y = 1;
        function w() {
          if (p.length < 2) return 1;
          const e = p[0].pageX,
            t = p[0].pageY,
            r = p[1].pageX,
            i = p[1].pageY;
          return Math.sqrt((r - e) ** 2 + (i - t) ** 2);
        }
        function x(e) {
          const r = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
          return (
            !!e.target.matches(r) ||
            t.slides.filter((t) => t.contains(e.target)).length > 0
          );
        }
        function _(e) {
          if (("mouse" === e.pointerType && p.splice(0, p.length), !x(e)))
            return;
          const r = t.params.zoom;
          if (((o = !1), (d = !1), p.push(e), !(p.length < 2))) {
            if (((o = !0), (f.scaleStart = w()), !f.slideEl)) {
              (f.slideEl = e.target.closest(
                `.${t.params.slideClass}, swiper-slide`
              )),
                f.slideEl || (f.slideEl = t.slides[t.activeIndex]);
              let i = f.slideEl.querySelector(`.${r.containerClass}`);
              if (
                (i &&
                  (i = i.querySelectorAll(
                    "picture, img, svg, canvas, .swiper-zoom-target"
                  )[0]),
                (f.imageEl = i),
                (f.imageWrapEl = i
                  ? b(f.imageEl, `.${r.containerClass}`)[0]
                  : void 0),
                !f.imageWrapEl)
              )
                return void (f.imageEl = void 0);
              f.maxRatio =
                f.imageWrapEl.getAttribute("data-swiper-zoom") || r.maxRatio;
            }
            if (f.imageEl) {
              const [e, t] = (function () {
                if (p.length < 2) return { x: null, y: null };
                const e = f.imageEl.getBoundingClientRect();
                return [
                  (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - e.x) / c,
                  (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - e.y) / c,
                ];
              })();
              (f.originX = e),
                (f.originY = t),
                (f.imageEl.style.transitionDuration = "0ms");
            }
            u = !0;
          }
        }
        function T(e) {
          if (!x(e)) return;
          const r = t.params.zoom,
            i = t.zoom,
            s = p.findIndex((t) => t.pointerId === e.pointerId);
          s >= 0 && (p[s] = e),
            p.length < 2 ||
              ((d = !0),
              (f.scaleMove = w()),
              f.imageEl &&
                ((i.scale = (f.scaleMove / f.scaleStart) * c),
                i.scale > f.maxRatio &&
                  (i.scale =
                    f.maxRatio - 1 + (i.scale - f.maxRatio + 1) ** 0.5),
                i.scale < r.minRatio &&
                  (i.scale =
                    r.minRatio + 1 - (r.minRatio - i.scale + 1) ** 0.5),
                (f.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`)));
        }
        function E(e) {
          if (!x(e)) return;
          if ("mouse" === e.pointerType && "pointerout" === e.type) return;
          const r = t.params.zoom,
            i = t.zoom,
            s = p.findIndex((t) => t.pointerId === e.pointerId);
          s >= 0 && p.splice(s, 1),
            o &&
              d &&
              ((o = !1),
              (d = !1),
              f.imageEl &&
                ((i.scale = Math.max(
                  Math.min(i.scale, f.maxRatio),
                  r.minRatio
                )),
                (f.imageEl.style.transitionDuration = `${t.params.speed}ms`),
                (f.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
                (c = i.scale),
                (u = !1),
                i.scale > 1 && f.slideEl
                  ? f.slideEl.classList.add(`${r.zoomedSlideClass}`)
                  : i.scale <= 1 &&
                    f.slideEl &&
                    f.slideEl.classList.remove(`${r.zoomedSlideClass}`),
                1 === i.scale &&
                  ((f.originX = 0), (f.originY = 0), (f.slideEl = void 0))));
        }
        function S(e) {
          if (
            !x(e) ||
            !(function (e) {
              const r = `.${t.params.zoom.containerClass}`;
              return (
                !!e.target.matches(r) ||
                [...t.el.querySelectorAll(r)].filter((t) =>
                  t.contains(e.target)
                ).length > 0
              );
            })(e)
          )
            return;
          const r = t.zoom;
          if (!f.imageEl) return;
          if (!h.isTouched || !f.slideEl) return;
          h.isMoved ||
            ((h.width = f.imageEl.offsetWidth),
            (h.height = f.imageEl.offsetHeight),
            (h.startX = l(f.imageWrapEl, "x") || 0),
            (h.startY = l(f.imageWrapEl, "y") || 0),
            (f.slideWidth = f.slideEl.offsetWidth),
            (f.slideHeight = f.slideEl.offsetHeight),
            (f.imageWrapEl.style.transitionDuration = "0ms"));
          const i = h.width * r.scale,
            s = h.height * r.scale;
          if (i < f.slideWidth && s < f.slideHeight) return;
          if (
            ((h.minX = Math.min(f.slideWidth / 2 - i / 2, 0)),
            (h.maxX = -h.minX),
            (h.minY = Math.min(f.slideHeight / 2 - s / 2, 0)),
            (h.maxY = -h.minY),
            (h.touchesCurrent.x = p.length > 0 ? p[0].pageX : e.pageX),
            (h.touchesCurrent.y = p.length > 0 ? p[0].pageY : e.pageY),
            Math.max(
              Math.abs(h.touchesCurrent.x - h.touchesStart.x),
              Math.abs(h.touchesCurrent.y - h.touchesStart.y)
            ) > 5 && (t.allowClick = !1),
            !h.isMoved && !u)
          ) {
            if (
              t.isHorizontal() &&
              ((Math.floor(h.minX) === Math.floor(h.startX) &&
                h.touchesCurrent.x < h.touchesStart.x) ||
                (Math.floor(h.maxX) === Math.floor(h.startX) &&
                  h.touchesCurrent.x > h.touchesStart.x))
            )
              return void (h.isTouched = !1);
            if (
              !t.isHorizontal() &&
              ((Math.floor(h.minY) === Math.floor(h.startY) &&
                h.touchesCurrent.y < h.touchesStart.y) ||
                (Math.floor(h.maxY) === Math.floor(h.startY) &&
                  h.touchesCurrent.y > h.touchesStart.y))
            )
              return void (h.isTouched = !1);
          }
          e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            (h.isMoved = !0);
          const n = (r.scale - c) / (f.maxRatio - t.params.zoom.minRatio),
            { originX: a, originY: o } = f;
          (h.currentX =
            h.touchesCurrent.x -
            h.touchesStart.x +
            h.startX +
            n * (h.width - 2 * a)),
            (h.currentY =
              h.touchesCurrent.y -
              h.touchesStart.y +
              h.startY +
              n * (h.height - 2 * o)),
            h.currentX < h.minX &&
              (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** 0.8),
            h.currentX > h.maxX &&
              (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** 0.8),
            h.currentY < h.minY &&
              (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** 0.8),
            h.currentY > h.maxY &&
              (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** 0.8),
            g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x),
            g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y),
            g.prevTime || (g.prevTime = Date.now()),
            (g.x =
              (h.touchesCurrent.x - g.prevPositionX) /
              (Date.now() - g.prevTime) /
              2),
            (g.y =
              (h.touchesCurrent.y - g.prevPositionY) /
              (Date.now() - g.prevTime) /
              2),
            Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
            Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
            (g.prevPositionX = h.touchesCurrent.x),
            (g.prevPositionY = h.touchesCurrent.y),
            (g.prevTime = Date.now()),
            (f.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
        }
        function M() {
          const e = t.zoom;
          f.slideEl &&
            t.activeIndex !== t.slides.indexOf(f.slideEl) &&
            (f.imageEl &&
              (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            f.imageWrapEl &&
              (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            f.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
            (e.scale = 1),
            (c = 1),
            (f.slideEl = void 0),
            (f.imageEl = void 0),
            (f.imageWrapEl = void 0),
            (f.originX = 0),
            (f.originY = 0));
        }
        function C(e) {
          const r = t.zoom,
            i = t.params.zoom;
          if (!f.slideEl) {
            e &&
              e.target &&
              (f.slideEl = e.target.closest(
                `.${t.params.slideClass}, swiper-slide`
              )),
              f.slideEl ||
                (t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? (f.slideEl = m(
                      t.slidesEl,
                      `.${t.params.slideActiveClass}`
                    )[0])
                  : (f.slideEl = t.slides[t.activeIndex]));
            let r = f.slideEl.querySelector(`.${i.containerClass}`);
            r &&
              (r = r.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
              (f.imageEl = r),
              (f.imageWrapEl = r
                ? b(f.imageEl, `.${i.containerClass}`)[0]
                : void 0);
          }
          if (!f.imageEl || !f.imageWrapEl) return;
          let s, n, o, l, d, u, p, g, y, w, x, _, T, E, S, M, C, P;
          t.params.cssMode &&
            ((t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.touchAction = "none")),
            f.slideEl.classList.add(`${i.zoomedSlideClass}`),
            void 0 === h.touchesStart.x && e
              ? ((s = e.pageX), (n = e.pageY))
              : ((s = h.touchesStart.x), (n = h.touchesStart.y));
          const k = "number" == typeof e ? e : null;
          1 === c && k && ((s = void 0), (n = void 0)),
            (r.scale =
              k ||
              f.imageWrapEl.getAttribute("data-swiper-zoom") ||
              i.maxRatio),
            (c =
              k ||
              f.imageWrapEl.getAttribute("data-swiper-zoom") ||
              i.maxRatio),
            !e || (1 === c && k)
              ? ((p = 0), (g = 0))
              : ((C = f.slideEl.offsetWidth),
                (P = f.slideEl.offsetHeight),
                (d = (o = v(f.slideEl).left + a.scrollX) + C / 2 - s),
                (u = (l = v(f.slideEl).top + a.scrollY) + P / 2 - n),
                (y = f.imageEl.offsetWidth),
                (w = f.imageEl.offsetHeight),
                (x = y * r.scale),
                (_ = w * r.scale),
                (S = -(T = Math.min(C / 2 - x / 2, 0))),
                (M = -(E = Math.min(P / 2 - _ / 2, 0))),
                (p = d * r.scale) < T && (p = T),
                p > S && (p = S),
                (g = u * r.scale) < E && (g = E),
                g > M && (g = M)),
            k && 1 === r.scale && ((f.originX = 0), (f.originY = 0)),
            (f.imageWrapEl.style.transitionDuration = "300ms"),
            (f.imageWrapEl.style.transform = `translate3d(${p}px, ${g}px,0)`),
            (f.imageEl.style.transitionDuration = "300ms"),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${r.scale})`);
        }
        function P() {
          const e = t.zoom,
            r = t.params.zoom;
          if (!f.slideEl) {
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (f.slideEl = m(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
              : (f.slideEl = t.slides[t.activeIndex]);
            let e = f.slideEl.querySelector(`.${r.containerClass}`);
            e &&
              (e = e.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
              (f.imageEl = e),
              (f.imageWrapEl = e
                ? b(f.imageEl, `.${r.containerClass}`)[0]
                : void 0);
          }
          f.imageEl &&
            f.imageWrapEl &&
            (t.params.cssMode &&
              ((t.wrapperEl.style.overflow = ""),
              (t.wrapperEl.style.touchAction = "")),
            (e.scale = 1),
            (c = 1),
            (f.imageWrapEl.style.transitionDuration = "300ms"),
            (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            (f.imageEl.style.transitionDuration = "300ms"),
            (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            f.slideEl.classList.remove(`${r.zoomedSlideClass}`),
            (f.slideEl = void 0),
            (f.originX = 0),
            (f.originY = 0));
        }
        function k(e) {
          const r = t.zoom;
          r.scale && 1 !== r.scale ? P() : C(e);
        }
        function A() {
          return {
            passiveListener: !!t.params.passiveListeners && {
              passive: !0,
              capture: !1,
            },
            activeListenerWithCapture: !t.params.passiveListeners || {
              passive: !1,
              capture: !0,
            },
          };
        }
        function O() {
          const e = t.zoom;
          if (e.enabled) return;
          e.enabled = !0;
          const { passiveListener: r, activeListenerWithCapture: i } = A();
          t.wrapperEl.addEventListener("pointerdown", _, r),
            t.wrapperEl.addEventListener("pointermove", T, i),
            ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
              t.wrapperEl.addEventListener(e, E, r);
            }),
            t.wrapperEl.addEventListener("pointermove", S, i);
        }
        function L() {
          const e = t.zoom;
          if (!e.enabled) return;
          e.enabled = !1;
          const { passiveListener: r, activeListenerWithCapture: i } = A();
          t.wrapperEl.removeEventListener("pointerdown", _, r),
            t.wrapperEl.removeEventListener("pointermove", T, i),
            ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
              t.wrapperEl.removeEventListener(e, E, r);
            }),
            t.wrapperEl.removeEventListener("pointermove", S, i);
        }
        Object.defineProperty(t.zoom, "scale", {
          get: () => y,
          set(e) {
            if (y !== e) {
              const t = f.imageEl,
                r = f.slideEl;
              s("zoomChange", e, t, r);
            }
            y = e;
          },
        }),
          i("init", () => {
            t.params.zoom.enabled && O();
          }),
          i("destroy", () => {
            L();
          }),
          i("touchStart", (e, r) => {
            t.zoom.enabled &&
              (function (e) {
                const r = t.device;
                if (!f.imageEl) return;
                if (h.isTouched) return;
                r.android && e.cancelable && e.preventDefault(),
                  (h.isTouched = !0);
                const i = p.length > 0 ? p[0] : e;
                (h.touchesStart.x = i.pageX), (h.touchesStart.y = i.pageY);
              })(r);
          }),
          i("touchEnd", (e, r) => {
            t.zoom.enabled &&
              (function () {
                const e = t.zoom;
                if (!f.imageEl) return;
                if (!h.isTouched || !h.isMoved)
                  return (h.isTouched = !1), void (h.isMoved = !1);
                (h.isTouched = !1), (h.isMoved = !1);
                let r = 300,
                  i = 300;
                const s = g.x * r,
                  n = h.currentX + s,
                  a = g.y * i,
                  o = h.currentY + a;
                0 !== g.x && (r = Math.abs((n - h.currentX) / g.x)),
                  0 !== g.y && (i = Math.abs((o - h.currentY) / g.y));
                const l = Math.max(r, i);
                (h.currentX = n), (h.currentY = o);
                const d = h.width * e.scale,
                  c = h.height * e.scale;
                (h.minX = Math.min(f.slideWidth / 2 - d / 2, 0)),
                  (h.maxX = -h.minX),
                  (h.minY = Math.min(f.slideHeight / 2 - c / 2, 0)),
                  (h.maxY = -h.minY),
                  (h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX)),
                  (h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY)),
                  (f.imageWrapEl.style.transitionDuration = `${l}ms`),
                  (f.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
              })();
          }),
          i("doubleTap", (e, r) => {
            !t.animating &&
              t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              k(r);
          }),
          i("transitionEnd", () => {
            t.zoom.enabled && t.params.zoom.enabled && M();
          }),
          i("slideChange", () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && M();
          }),
          Object.assign(t.zoom, {
            enable: O,
            disable: L,
            in: C,
            out: P,
            toggle: k,
          });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        function s(e, t) {
          const r = (function () {
            let e, t, r;
            return (i, s) => {
              for (t = -1, e = i.length; e - t > 1; )
                i[(r = (e + t) >> 1)] <= s ? (t = r) : (e = r);
              return e;
            };
          })();
          let i, s;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((s = r(this.x, e)),
                  (i = s - 1),
                  ((e - this.x[i]) * (this.y[s] - this.y[i])) /
                    (this.x[s] - this.x[i]) +
                    this.y[i])
                : 0;
            }),
            this
          );
        }
        function n() {
          t.controller.control &&
            t.controller.spline &&
            ((t.controller.spline = void 0), delete t.controller.spline);
        }
        r({ controller: { control: void 0, inverse: !1, by: "slide" } }),
          (t.controller = { control: void 0 }),
          i("beforeInit", () => {
            if (
              "undefined" != typeof window &&
              ("string" == typeof t.params.controller.control ||
                t.params.controller.control instanceof HTMLElement)
            ) {
              const e = document.querySelector(t.params.controller.control);
              if (e && e.swiper) t.controller.control = e.swiper;
              else if (e) {
                const r = (i) => {
                  (t.controller.control = i.detail[0]),
                    t.update(),
                    e.removeEventListener("init", r);
                };
                e.addEventListener("init", r);
              }
            } else t.controller.control = t.params.controller.control;
          }),
          i("update", () => {
            n();
          }),
          i("resize", () => {
            n();
          }),
          i("observerUpdate", () => {
            n();
          }),
          i("setTranslate", (e, r, i) => {
            t.controller.control &&
              !t.controller.control.destroyed &&
              t.controller.setTranslate(r, i);
          }),
          i("setTransition", (e, r, i) => {
            t.controller.control &&
              !t.controller.control.destroyed &&
              t.controller.setTransition(r, i);
          }),
          Object.assign(t.controller, {
            setTranslate: function (e, r) {
              const i = t.controller.control;
              let n, a;
              const o = t.constructor;
              function l(e) {
                if (e.destroyed) return;
                const r = t.rtlTranslate ? -t.translate : t.translate;
                "slide" === t.params.controller.by &&
                  ((function (e) {
                    t.controller.spline = t.params.loop
                      ? new s(t.slidesGrid, e.slidesGrid)
                      : new s(t.snapGrid, e.snapGrid);
                  })(e),
                  (a = -t.controller.spline.interpolate(-r))),
                  (a && "container" !== t.params.controller.by) ||
                    ((n =
                      (e.maxTranslate() - e.minTranslate()) /
                      (t.maxTranslate() - t.minTranslate())),
                    (!Number.isNaN(n) && Number.isFinite(n)) || (n = 1),
                    (a = (r - t.minTranslate()) * n + e.minTranslate())),
                  t.params.controller.inverse && (a = e.maxTranslate() - a),
                  e.updateProgress(a),
                  e.setTranslate(a, t),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              if (Array.isArray(i))
                for (let e = 0; e < i.length; e += 1)
                  i[e] !== r && i[e] instanceof o && l(i[e]);
              else i instanceof o && r !== i && l(i);
            },
            setTransition: function (e, r) {
              const i = t.constructor,
                s = t.controller.control;
              let n;
              function o(r) {
                r.destroyed ||
                  (r.setTransition(e, t),
                  0 !== e &&
                    (r.transitionStart(),
                    r.params.autoHeight &&
                      a(() => {
                        r.updateAutoHeight();
                      }),
                    x(r.wrapperEl, () => {
                      s && r.transitionEnd();
                    })));
              }
              if (Array.isArray(s))
                for (n = 0; n < s.length; n += 1)
                  s[n] !== r && s[n] instanceof i && o(s[n]);
              else s instanceof i && r !== s && o(s);
            },
          });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        r({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
          },
        }),
          (t.a11y = { clicked: !1 });
        let s = null;
        function n(e) {
          const t = s;
          0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
        }
        const a = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
        function o(e) {
          (e = a(e)).forEach((e) => {
            e.setAttribute("tabIndex", "0");
          });
        }
        function l(e) {
          (e = a(e)).forEach((e) => {
            e.setAttribute("tabIndex", "-1");
          });
        }
        function d(e, t) {
          (e = a(e)).forEach((e) => {
            e.setAttribute("role", t);
          });
        }
        function c(e, t) {
          (e = a(e)).forEach((e) => {
            e.setAttribute("aria-roledescription", t);
          });
        }
        function u(e, t) {
          (e = a(e)).forEach((e) => {
            e.setAttribute("aria-label", t);
          });
        }
        function p(e) {
          (e = a(e)).forEach((e) => {
            e.setAttribute("aria-disabled", !0);
          });
        }
        function f(e) {
          (e = a(e)).forEach((e) => {
            e.setAttribute("aria-disabled", !1);
          });
        }
        function h(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const r = t.params.a11y,
            i = e.target;
          (t.pagination &&
            t.pagination.el &&
            (i === t.pagination.el || t.pagination.el.contains(e.target)) &&
            !e.target.matches(N(t.params.pagination.bulletClass))) ||
            (t.navigation &&
              t.navigation.nextEl &&
              i === t.navigation.nextEl &&
              ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd ? n(r.lastSlideMessage) : n(r.nextSlideMessage)),
            t.navigation &&
              t.navigation.prevEl &&
              i === t.navigation.prevEl &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning ? n(r.firstSlideMessage) : n(r.prevSlideMessage)),
            t.pagination &&
              i.matches(N(t.params.pagination.bulletClass)) &&
              i.click());
        }
        function m() {
          return (
            t.pagination && t.pagination.bullets && t.pagination.bullets.length
          );
        }
        function v() {
          return m() && t.params.pagination.clickable;
        }
        const y = (e, t, r) => {
            o(e),
              "BUTTON" !== e.tagName &&
                (d(e, "button"), e.addEventListener("keydown", h)),
              u(e, r),
              (function (e, t) {
                (e = a(e)).forEach((e) => {
                  e.setAttribute("aria-controls", t);
                });
              })(e, t);
          },
          b = () => {
            t.a11y.clicked = !0;
          },
          x = () => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1);
              });
            });
          },
          _ = (e) => {
            if (t.a11y.clicked) return;
            const r = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!r || !t.slides.includes(r)) return;
            const i = t.slides.indexOf(r) === t.activeIndex,
              s =
                t.params.watchSlidesProgress &&
                t.visibleSlides &&
                t.visibleSlides.includes(r);
            i ||
              s ||
              (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
              (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
              t.slideTo(t.slides.indexOf(r), 0));
          },
          T = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage &&
              c(t.slides, e.itemRoleDescriptionMessage),
              e.slideRole && d(t.slides, e.slideRole);
            const r = t.slides.length;
            e.slideLabelMessage &&
              t.slides.forEach((i, s) => {
                const n = t.params.loop
                  ? parseInt(i.getAttribute("data-swiper-slide-index"), 10)
                  : s;
                u(
                  i,
                  e.slideLabelMessage
                    .replace(/\{\{index\}\}/, n + 1)
                    .replace(/\{\{slidesLength\}\}/, r)
                );
              });
          };
        i("beforeInit", () => {
          (s = g("span", t.params.a11y.notificationClass)).setAttribute(
            "aria-live",
            "assertive"
          ),
            s.setAttribute("aria-atomic", "true");
        }),
          i("afterInit", () => {
            t.params.a11y.enabled &&
              (() => {
                const e = t.params.a11y;
                t.isElement ? t.el.shadowEl.append(s) : t.el.append(s);
                const r = t.el;
                e.containerRoleDescriptionMessage &&
                  c(r, e.containerRoleDescriptionMessage),
                  e.containerMessage && u(r, e.containerMessage);
                const i = t.wrapperEl,
                  n =
                    e.id ||
                    i.getAttribute("id") ||
                    `swiper-wrapper-${
                      ((o = 16),
                      void 0 === o && (o = 16),
                      "x"
                        .repeat(o)
                        .replace(/x/g, () =>
                          Math.round(16 * Math.random()).toString(16)
                        ))
                    }`;
                var o;
                const l =
                  t.params.autoplay && t.params.autoplay.enabled
                    ? "off"
                    : "polite";
                var d;
                (d = n),
                  a(i).forEach((e) => {
                    e.setAttribute("id", d);
                  }),
                  (function (e, t) {
                    a(i).forEach((e) => {
                      e.setAttribute("aria-live", t);
                    });
                  })(0, l),
                  T();
                let { nextEl: p, prevEl: f } = t.navigation ? t.navigation : {};
                (p = a(p)),
                  (f = a(f)),
                  p && p.forEach((t) => y(t, n, e.nextSlideMessage)),
                  f && f.forEach((t) => y(t, n, e.prevSlideMessage)),
                  v() &&
                    (Array.isArray(t.pagination.el)
                      ? t.pagination.el
                      : [t.pagination.el]
                    ).forEach((e) => {
                      e.addEventListener("keydown", h);
                    }),
                  t.el.addEventListener("focus", _, !0),
                  t.el.addEventListener("pointerdown", b, !0),
                  t.el.addEventListener("pointerup", x, !0);
              })();
          }),
          i(
            "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
            () => {
              t.params.a11y.enabled && T();
            }
          ),
          i("fromEdge toEdge afterInit lock unlock", () => {
            t.params.a11y.enabled &&
              (function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const { nextEl: e, prevEl: r } = t.navigation;
                r && (t.isBeginning ? (p(r), l(r)) : (f(r), o(r))),
                  e && (t.isEnd ? (p(e), l(e)) : (f(e), o(e)));
              })();
          }),
          i("paginationUpdate", () => {
            t.params.a11y.enabled &&
              (function () {
                const e = t.params.a11y;
                m() &&
                  t.pagination.bullets.forEach((r) => {
                    t.params.pagination.clickable &&
                      (o(r),
                      t.params.pagination.renderBullet ||
                        (d(r, "button"),
                        u(
                          r,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            w(r) + 1
                          )
                        ))),
                      r.matches(N(t.params.pagination.bulletActiveClass))
                        ? r.setAttribute("aria-current", "true")
                        : r.removeAttribute("aria-current");
                  });
              })();
          }),
          i("destroy", () => {
            t.params.a11y.enabled &&
              (function () {
                s && s.remove();
                let { nextEl: e, prevEl: r } = t.navigation ? t.navigation : {};
                (e = a(e)),
                  (r = a(r)),
                  e && e.forEach((e) => e.removeEventListener("keydown", h)),
                  r && r.forEach((e) => e.removeEventListener("keydown", h)),
                  v() &&
                    (Array.isArray(t.pagination.el)
                      ? t.pagination.el
                      : [t.pagination.el]
                    ).forEach((e) => {
                      e.removeEventListener("keydown", h);
                    }),
                  t.el.removeEventListener("focus", _, !0),
                  t.el.removeEventListener("pointerdown", b, !0),
                  t.el.removeEventListener("pointerup", x, !0);
              })();
          });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        r({
          history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1,
          },
        });
        let s = !1,
          a = {};
        const o = (e) =>
            e
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, ""),
          l = (e) => {
            const t = n();
            let r;
            const i = (r = e ? new URL(e) : t.location).pathname
                .slice(1)
                .split("/")
                .filter((e) => "" !== e),
              s = i.length;
            return { key: i[s - 2], value: i[s - 1] };
          },
          d = (e, r) => {
            const i = n();
            if (!s || !t.params.history.enabled) return;
            let a;
            a = t.params.url ? new URL(t.params.url) : i.location;
            const l = t.slides[r];
            let d = o(l.getAttribute("data-history"));
            if (t.params.history.root.length > 0) {
              let r = t.params.history.root;
              "/" === r[r.length - 1] && (r = r.slice(0, r.length - 1)),
                (d = `${r}/${e ? `${e}/` : ""}${d}`);
            } else a.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
            t.params.history.keepQuery && (d += a.search);
            const c = i.history.state;
            (c && c.value === d) ||
              (t.params.history.replaceState
                ? i.history.replaceState({ value: d }, null, d)
                : i.history.pushState({ value: d }, null, d));
          },
          c = (e, r, i) => {
            if (r)
              for (let s = 0, n = t.slides.length; s < n; s += 1) {
                const n = t.slides[s];
                if (o(n.getAttribute("data-history")) === r) {
                  const r = t.getSlideIndex(n);
                  t.slideTo(r, e, i);
                }
              }
            else t.slideTo(0, e, i);
          },
          u = () => {
            (a = l(t.params.url)), c(t.params.speed, a.value, !1);
          };
        i("init", () => {
          t.params.history.enabled &&
            (() => {
              const e = n();
              if (t.params.history) {
                if (!e.history || !e.history.pushState)
                  return (
                    (t.params.history.enabled = !1),
                    void (t.params.hashNavigation.enabled = !0)
                  );
                (s = !0),
                  (a = l(t.params.url)).key || a.value
                    ? (c(0, a.value, t.params.runCallbacksOnInit),
                      t.params.history.replaceState ||
                        e.addEventListener("popstate", u))
                    : t.params.history.replaceState ||
                      e.addEventListener("popstate", u);
              }
            })();
        }),
          i("destroy", () => {
            t.params.history.enabled &&
              (() => {
                const e = n();
                t.params.history.replaceState ||
                  e.removeEventListener("popstate", u);
              })();
          }),
          i("transitionEnd _freeModeNoMomentumRelease", () => {
            s && d(t.params.history.key, t.activeIndex);
          }),
          i("slideChange", () => {
            s && t.params.cssMode && d(t.params.history.key, t.activeIndex);
          });
      },
      function (e) {
        let { swiper: t, extendParams: r, emit: s, on: a } = e,
          o = !1;
        const l = i(),
          d = n();
        r({
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
            getSlideIndex(e, r) {
              if (t.virtual && t.params.virtual.enabled) {
                const e = t.slides.filter(
                  (e) => e.getAttribute("data-hash") === r
                )[0];
                return e
                  ? parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                  : 0;
              }
              return t.getSlideIndex(
                m(
                  t.slidesEl,
                  `.${t.params.slideClass}[data-hash="${r}"], swiper-slide[data-hash="${r}"]`
                )[0]
              );
            },
          },
        });
        const c = () => {
            s("hashChange");
            const e = l.location.hash.replace("#", ""),
              r = t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`
              );
            if (e !== (r ? r.getAttribute("data-hash") : "")) {
              const r = t.params.hashNavigation.getSlideIndex(t, e);
              if ((console.log(r), void 0 === r)) return;
              t.slideTo(r);
            }
          },
          u = () => {
            if (!o || !t.params.hashNavigation.enabled) return;
            const e = t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`
              ),
              r = e
                ? e.getAttribute("data-hash") || e.getAttribute("data-history")
                : "";
            t.params.hashNavigation.replaceState &&
            d.history &&
            d.history.replaceState
              ? (d.history.replaceState(null, null, `#${r}` || ""),
                s("hashSet"))
              : ((l.location.hash = r || ""), s("hashSet"));
          };
        a("init", () => {
          t.params.hashNavigation.enabled &&
            (() => {
              if (
                !t.params.hashNavigation.enabled ||
                (t.params.history && t.params.history.enabled)
              )
                return;
              o = !0;
              const e = l.location.hash.replace("#", "");
              if (e) {
                const r = 0,
                  i = t.params.hashNavigation.getSlideIndex(t, e);
                t.slideTo(i || 0, r, t.params.runCallbacksOnInit, !0);
              }
              t.params.hashNavigation.watchState &&
                d.addEventListener("hashchange", c);
            })();
        }),
          a("destroy", () => {
            t.params.hashNavigation.enabled &&
              t.params.hashNavigation.watchState &&
              d.removeEventListener("hashchange", c);
          }),
          a("transitionEnd _freeModeNoMomentumRelease", () => {
            o && u();
          }),
          a("slideChange", () => {
            o && t.params.cssMode && u();
          });
      },
      function (e) {
        let t,
          r,
          { swiper: s, extendParams: n, on: a, emit: o, params: l } = e;
        (s.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          n({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let d,
          c,
          u,
          p,
          f,
          h,
          m,
          g = l && l.autoplay ? l.autoplay.delay : 3e3,
          v = l && l.autoplay ? l.autoplay.delay : 3e3,
          y = new Date().getTime;
        function w(e) {
          s &&
            !s.destroyed &&
            s.wrapperEl &&
            e.target === s.wrapperEl &&
            (s.wrapperEl.removeEventListener("transitionend", w), S());
        }
        const b = () => {
            if (s.destroyed || !s.autoplay.running) return;
            s.autoplay.paused ? (c = !0) : c && ((v = d), (c = !1));
            const e = s.autoplay.paused ? d : y + v - new Date().getTime();
            (s.autoplay.timeLeft = e),
              o("autoplayTimeLeft", e, e / g),
              (r = requestAnimationFrame(() => {
                b();
              }));
          },
          x = (e) => {
            if (s.destroyed || !s.autoplay.running) return;
            cancelAnimationFrame(r), b();
            let i = void 0 === e ? s.params.autoplay.delay : e;
            (g = s.params.autoplay.delay), (v = s.params.autoplay.delay);
            const n = (() => {
              let e;
              if (
                (e =
                  s.virtual && s.params.virtual.enabled
                    ? s.slides.filter((e) =>
                        e.classList.contains("swiper-slide-active")
                      )[0]
                    : s.slides[s.activeIndex])
              )
                return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
            })();
            !Number.isNaN(n) &&
              n > 0 &&
              void 0 === e &&
              ((i = n), (g = n), (v = n)),
              (d = i);
            const a = s.params.speed,
              l = () => {
                s &&
                  !s.destroyed &&
                  (s.params.autoplay.reverseDirection
                    ? !s.isBeginning || s.params.loop || s.params.rewind
                      ? (s.slidePrev(a, !0, !0), o("autoplay"))
                      : s.params.autoplay.stopOnLastSlide ||
                        (s.slideTo(s.slides.length - 1, a, !0, !0),
                        o("autoplay"))
                    : !s.isEnd || s.params.loop || s.params.rewind
                    ? (s.slideNext(a, !0, !0), o("autoplay"))
                    : s.params.autoplay.stopOnLastSlide ||
                      (s.slideTo(0, a, !0, !0), o("autoplay")),
                  s.params.cssMode &&
                    ((y = new Date().getTime()),
                    requestAnimationFrame(() => {
                      x();
                    })));
              };
            return (
              i > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    l();
                  }, i)))
                : requestAnimationFrame(() => {
                    l();
                  }),
              i
            );
          },
          _ = () => {
            (s.autoplay.running = !0), x(), o("autoplayStart");
          },
          T = () => {
            (s.autoplay.running = !1),
              clearTimeout(t),
              cancelAnimationFrame(r),
              o("autoplayStop");
          },
          E = (e, r) => {
            if (s.destroyed || !s.autoplay.running) return;
            clearTimeout(t), e || (m = !0);
            const i = () => {
              o("autoplayPause"),
                s.params.autoplay.waitForTransition
                  ? s.wrapperEl.addEventListener("transitionend", w)
                  : S();
            };
            if (((s.autoplay.paused = !0), r))
              return h && (d = s.params.autoplay.delay), (h = !1), void i();
            const n = d || s.params.autoplay.delay;
            (d = n - (new Date().getTime() - y)),
              (s.isEnd && d < 0 && !s.params.loop) || (d < 0 && (d = 0), i());
          },
          S = () => {
            (s.isEnd && d < 0 && !s.params.loop) ||
              s.destroyed ||
              !s.autoplay.running ||
              ((y = new Date().getTime()),
              m ? ((m = !1), x(d)) : x(),
              (s.autoplay.paused = !1),
              o("autoplayResume"));
          },
          M = () => {
            if (s.destroyed || !s.autoplay.running) return;
            const e = i();
            "hidden" === e.visibilityState && ((m = !0), E(!0)),
              "visible" === e.visibilityState && S();
          },
          C = (e) => {
            "mouse" === e.pointerType && ((m = !0), E(!0));
          },
          P = (e) => {
            "mouse" === e.pointerType && s.autoplay.paused && S();
          };
        a("init", () => {
          s.params.autoplay.enabled &&
            (s.params.autoplay.pauseOnMouseEnter &&
              (s.el.addEventListener("pointerenter", C),
              s.el.addEventListener("pointerleave", P)),
            i().addEventListener("visibilitychange", M),
            (y = new Date().getTime()),
            _());
        }),
          a("destroy", () => {
            s.el.removeEventListener("pointerenter", C),
              s.el.removeEventListener("pointerleave", P),
              i().removeEventListener("visibilitychange", M),
              s.autoplay.running && T();
          }),
          a("beforeTransitionStart", (e, t, r) => {
            !s.destroyed &&
              s.autoplay.running &&
              (r || !s.params.autoplay.disableOnInteraction ? E(!0, !0) : T());
          }),
          a("sliderFirstMove", () => {
            !s.destroyed &&
              s.autoplay.running &&
              (s.params.autoplay.disableOnInteraction
                ? T()
                : ((u = !0),
                  (p = !1),
                  (m = !1),
                  (f = setTimeout(() => {
                    (m = !0), (p = !0), E(!0);
                  }, 200))));
          }),
          a("touchEnd", () => {
            if (!s.destroyed && s.autoplay.running && u) {
              if (
                (clearTimeout(f),
                clearTimeout(t),
                s.params.autoplay.disableOnInteraction)
              )
                return (p = !1), void (u = !1);
              p && s.params.cssMode && S(), (p = !1), (u = !1);
            }
          }),
          a("slideChange", () => {
            !s.destroyed && s.autoplay.running && (h = !0);
          }),
          Object.assign(s.autoplay, { start: _, stop: T, pause: E, resume: S });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: s } = e;
        r({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let n = !1,
          a = !1;
        function o() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const r = e.clickedIndex,
            i = e.clickedSlide;
          if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass))
            return;
          if (null == r) return;
          let s;
          (s = e.params.loop
            ? parseInt(
                e.clickedSlide.getAttribute("data-swiper-slide-index"),
                10
              )
            : r),
            t.params.loop ? t.slideToLoop(s) : t.slideTo(s);
        }
        function l() {
          const { thumbs: e } = t.params;
          if (n) return !1;
          n = !0;
          const r = t.constructor;
          if (e.swiper instanceof r)
            (t.thumbs.swiper = e.swiper),
              Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              t.thumbs.swiper.update();
          else if (d(e.swiper)) {
            const i = Object.assign({}, e.swiper);
            Object.assign(i, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (t.thumbs.swiper = new r(i)),
              (a = !0);
          }
          return (
            t.thumbs.swiper.el.classList.add(
              t.params.thumbs.thumbsContainerClass
            ),
            t.thumbs.swiper.on("tap", o),
            !0
          );
        }
        function c(e) {
          const r = t.thumbs.swiper;
          if (!r || r.destroyed) return;
          const i =
            "auto" === r.params.slidesPerView
              ? r.slidesPerViewDynamic()
              : r.params.slidesPerView;
          let s = 1;
          const n = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (s = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (s = 1),
            (s = Math.floor(s)),
            r.slides.forEach((e) => e.classList.remove(n)),
            r.params.loop || (r.params.virtual && r.params.virtual.enabled))
          )
            for (let e = 0; e < s; e += 1)
              m(
                r.slidesEl,
                `[data-swiper-slide-index="${t.realIndex + e}"]`
              ).forEach((e) => {
                e.classList.add(n);
              });
          else
            for (let e = 0; e < s; e += 1)
              r.slides[t.realIndex + e] &&
                r.slides[t.realIndex + e].classList.add(n);
          const a = t.params.thumbs.autoScrollOffset,
            o = a && !r.params.loop;
          if (t.realIndex !== r.realIndex || o) {
            const s = r.activeIndex;
            let n, l;
            if (r.params.loop) {
              const e = r.slides.filter(
                (e) =>
                  e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`
              )[0];
              (n = r.slides.indexOf(e)),
                (l = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
            o && (n += "next" === l ? a : -1 * a),
              r.visibleSlidesIndexes &&
                r.visibleSlidesIndexes.indexOf(n) < 0 &&
                (r.params.centeredSlides
                  ? (n =
                      n > s
                        ? n - Math.floor(i / 2) + 1
                        : n + Math.floor(i / 2) - 1)
                  : n > s && r.params.slidesPerGroup,
                r.slideTo(n, e ? 0 : void 0));
          }
        }
        (t.thumbs = { swiper: null }),
          s("beforeInit", () => {
            const { thumbs: e } = t.params;
            if (e && e.swiper)
              if (
                "string" == typeof e.swiper ||
                e.swiper instanceof HTMLElement
              ) {
                const r = i(),
                  s = () => {
                    const i =
                      "string" == typeof e.swiper
                        ? r.querySelector(e.swiper)
                        : e.swiper;
                    if (i && i.swiper) (e.swiper = i.swiper), l(), c(!0);
                    else if (i) {
                      const r = (s) => {
                        (e.swiper = s.detail[0]),
                          i.removeEventListener("init", r),
                          l(),
                          c(!0),
                          e.swiper.update(),
                          t.update();
                      };
                      i.addEventListener("init", r);
                    }
                    return i;
                  },
                  n = () => {
                    t.destroyed || s() || requestAnimationFrame(n);
                  };
                requestAnimationFrame(n);
              } else l(), c(!0);
          }),
          s("slideChange update resize observerUpdate", () => {
            c();
          }),
          s("setTransition", (e, r) => {
            const i = t.thumbs.swiper;
            i && !i.destroyed && i.setTransition(r);
          }),
          s("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && a && e.destroy();
          }),
          Object.assign(t.thumbs, { init: l, update: c });
      },
      function (e) {
        let { swiper: t, extendParams: r, emit: i, once: s } = e;
        r({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(t, {
            freeMode: {
              onTouchStart: function () {
                const e = t.getTranslate();
                t.setTranslate(e),
                  t.setTransition(0),
                  (t.touchEventsData.velocities.length = 0),
                  t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate,
                  });
              },
              onTouchMove: function () {
                const { touchEventsData: e, touches: r } = t;
                0 === e.velocities.length &&
                  e.velocities.push({
                    position: r[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime,
                  }),
                  e.velocities.push({
                    position: r[t.isHorizontal() ? "currentX" : "currentY"],
                    time: o(),
                  });
              },
              onTouchEnd: function (e) {
                let { currentPos: r } = e;
                const {
                    params: n,
                    wrapperEl: a,
                    rtlTranslate: l,
                    snapGrid: d,
                    touchEventsData: c,
                  } = t,
                  u = o() - c.touchStartTime;
                if (r < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (r > -t.maxTranslate())
                  t.slides.length < d.length
                    ? t.slideTo(d.length - 1)
                    : t.slideTo(t.slides.length - 1);
                else {
                  if (n.freeMode.momentum) {
                    if (c.velocities.length > 1) {
                      const e = c.velocities.pop(),
                        r = c.velocities.pop(),
                        i = e.position - r.position,
                        s = e.time - r.time;
                      (t.velocity = i / s),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < n.freeMode.minimumVelocity &&
                          (t.velocity = 0),
                        (s > 150 || o() - e.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= n.freeMode.momentumVelocityRatio),
                      (c.velocities.length = 0);
                    let e = 1e3 * n.freeMode.momentumRatio;
                    const r = t.velocity * e;
                    let u = t.translate + r;
                    l && (u = -u);
                    let p,
                      f = !1;
                    const h =
                      20 *
                      Math.abs(t.velocity) *
                      n.freeMode.momentumBounceRatio;
                    let m;
                    if (u < t.maxTranslate())
                      n.freeMode.momentumBounce
                        ? (u + t.maxTranslate() < -h &&
                            (u = t.maxTranslate() - h),
                          (p = t.maxTranslate()),
                          (f = !0),
                          (c.allowMomentumBounce = !0))
                        : (u = t.maxTranslate()),
                        n.loop && n.centeredSlides && (m = !0);
                    else if (u > t.minTranslate())
                      n.freeMode.momentumBounce
                        ? (u - t.minTranslate() > h &&
                            (u = t.minTranslate() + h),
                          (p = t.minTranslate()),
                          (f = !0),
                          (c.allowMomentumBounce = !0))
                        : (u = t.minTranslate()),
                        n.loop && n.centeredSlides && (m = !0);
                    else if (n.freeMode.sticky) {
                      let e;
                      for (let t = 0; t < d.length; t += 1)
                        if (d[t] > -u) {
                          e = t;
                          break;
                        }
                      u = -(u =
                        Math.abs(d[e] - u) < Math.abs(d[e - 1] - u) ||
                        "next" === t.swipeDirection
                          ? d[e]
                          : d[e - 1]);
                    }
                    if (
                      (m &&
                        s("transitionEnd", () => {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    ) {
                      if (
                        ((e = l
                          ? Math.abs((-u - t.translate) / t.velocity)
                          : Math.abs((u - t.translate) / t.velocity)),
                        n.freeMode.sticky)
                      ) {
                        const r = Math.abs((l ? -u : u) - t.translate),
                          i = t.slidesSizesGrid[t.activeIndex];
                        e =
                          r < i
                            ? n.speed
                            : r < 2 * i
                            ? 1.5 * n.speed
                            : 2.5 * n.speed;
                      }
                    } else if (n.freeMode.sticky)
                      return void t.slideToClosest();
                    n.freeMode.momentumBounce && f
                      ? (t.updateProgress(p),
                        t.setTransition(e),
                        t.setTranslate(u),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        x(a, () => {
                          t &&
                            !t.destroyed &&
                            c.allowMomentumBounce &&
                            (i("momentumBounce"),
                            t.setTransition(n.speed),
                            setTimeout(() => {
                              t.setTranslate(p),
                                x(a, () => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        }))
                      : t.velocity
                      ? (i("_freeModeNoMomentumRelease"),
                        t.updateProgress(u),
                        t.setTransition(e),
                        t.setTranslate(u),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          x(a, () => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(u),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else {
                    if (n.freeMode.sticky) return void t.slideToClosest();
                    n.freeMode && i("_freeModeNoMomentumRelease");
                  }
                  (!n.freeMode.momentum || u >= n.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                }
              },
            },
          });
      },
      function (e) {
        let t,
          r,
          i,
          { swiper: s, extendParams: n } = e;
        n({ grid: { rows: 1, fill: "column" } });
        const a = () => {
          let e = s.params.spaceBetween;
          return (
            "string" == typeof e && e.indexOf("%") >= 0
              ? (e = (parseFloat(e.replace("%", "")) / 100) * s.size)
              : "string" == typeof e && (e = parseFloat(e)),
            e
          );
        };
        s.grid = {
          initSlides: (e) => {
            const { slidesPerView: n } = s.params,
              { rows: a, fill: o } = s.params.grid;
            (r = t / a),
              (i = Math.floor(e / a)),
              (t = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a),
              "auto" !== n && "row" === o && (t = Math.max(t, n * a));
          },
          updateSlide: (e, n, o, l) => {
            const { slidesPerGroup: d } = s.params,
              c = a(),
              { rows: u, fill: p } = s.params.grid;
            let f, h, m;
            if ("row" === p && d > 1) {
              const r = Math.floor(e / (d * u)),
                i = e - u * d * r,
                s = 0 === r ? d : Math.min(Math.ceil((o - r * u * d) / u), d);
              (f = (h = i - (m = Math.floor(i / s)) * s + r * d) + (m * t) / u),
                (n.style.order = f);
            } else
              "column" === p
                ? ((m = e - (h = Math.floor(e / u)) * u),
                  (h > i || (h === i && m === u - 1)) &&
                    (m += 1) >= u &&
                    ((m = 0), (h += 1)))
                : (h = e - (m = Math.floor(e / r)) * r);
            n.style[l("margin-top")] = 0 !== m ? c && `${c}px` : "";
          },
          updateWrapperSize: (e, r, i) => {
            const { centeredSlides: n, roundLengths: o } = s.params,
              l = a(),
              { rows: d } = s.params.grid;
            if (
              ((s.virtualSize = (e + l) * t),
              (s.virtualSize = Math.ceil(s.virtualSize / d) - l),
              (s.wrapperEl.style[i("width")] = `${s.virtualSize + l}px`),
              n)
            ) {
              const e = [];
              for (let t = 0; t < r.length; t += 1) {
                let i = r[t];
                o && (i = Math.floor(i)),
                  r[t] < s.virtualSize + r[0] && e.push(i);
              }
              r.splice(0, r.length), r.push(...e);
            }
          },
        };
      },
      function (e) {
        let { swiper: t } = e;
        Object.assign(t, {
          appendSlide: q.bind(t),
          prependSlide: V.bind(t),
          addSlide: W.bind(t),
          removeSlide: j.bind(t),
          removeAllSlides: U.bind(t),
        });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        r({ fadeEffect: { crossFade: !1 } }),
          K({
            effect: "fade",
            swiper: t,
            on: i,
            setTranslate: () => {
              const { slides: e } = t;
              t.params.fadeEffect;
              for (let r = 0; r < e.length; r += 1) {
                const e = t.slides[r];
                let i = -e.swiperSlideOffset;
                t.params.virtualTranslate || (i -= t.translate);
                let s = 0;
                t.isHorizontal() || ((s = i), (i = 0));
                const n = t.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(e.progress), 0)
                    : 1 + Math.min(Math.max(e.progress, -1), 0),
                  a = Q(0, e);
                (a.style.opacity = n),
                  (a.style.transform = `translate3d(${i}px, ${s}px, 0px)`);
              }
            },
            setTransition: (e) => {
              const r = t.slides.map((e) => h(e));
              r.forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              }),
                Z({
                  swiper: t,
                  duration: e,
                  transformElements: r,
                  allSlides: !0,
                });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        r({
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        });
        const s = (e, t, r) => {
          let i = r
              ? e.querySelector(".swiper-slide-shadow-left")
              : e.querySelector(".swiper-slide-shadow-top"),
            s = r
              ? e.querySelector(".swiper-slide-shadow-right")
              : e.querySelector(".swiper-slide-shadow-bottom");
          i ||
            ((i = g("div", "swiper-slide-shadow-" + (r ? "left" : "top"))),
            e.append(i)),
            s ||
              ((s = g(
                "div",
                "swiper-slide-shadow-" + (r ? "right" : "bottom")
              )),
              e.append(s)),
            i && (i.style.opacity = Math.max(-t, 0)),
            s && (s.style.opacity = Math.max(t, 0));
        };
        K({
          effect: "cube",
          swiper: t,
          on: i,
          setTranslate: () => {
            const {
                el: e,
                wrapperEl: r,
                slides: i,
                width: n,
                height: a,
                rtlTranslate: o,
                size: l,
                browser: d,
              } = t,
              c = t.params.cubeEffect,
              u = t.isHorizontal(),
              p = t.virtual && t.params.virtual.enabled;
            let f,
              h = 0;
            c.shadow &&
              (u
                ? ((f = t.slidesEl.querySelector(".swiper-cube-shadow")) ||
                    ((f = g("div", "swiper-cube-shadow")),
                    t.slidesEl.append(f)),
                  (f.style.height = `${n}px`))
                : (f = e.querySelector(".swiper-cube-shadow")) ||
                  ((f = g("div", "swiper-cube-shadow")), e.append(f)));
            for (let e = 0; e < i.length; e += 1) {
              const t = i[e];
              let r = e;
              p &&
                (r = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
              let n = 90 * r,
                a = Math.floor(n / 360);
              o && ((n = -n), (a = Math.floor(-n / 360)));
              const d = Math.max(Math.min(t.progress, 1), -1);
              let f = 0,
                m = 0,
                g = 0;
              r % 4 == 0
                ? ((f = 4 * -a * l), (g = 0))
                : (r - 1) % 4 == 0
                ? ((f = 0), (g = 4 * -a * l))
                : (r - 2) % 4 == 0
                ? ((f = l + 4 * a * l), (g = l))
                : (r - 3) % 4 == 0 && ((f = -l), (g = 3 * l + 4 * l * a)),
                o && (f = -f),
                u || ((m = f), (f = 0));
              const v = `rotateX(${u ? 0 : -n}deg) rotateY(${
                u ? n : 0
              }deg) translate3d(${f}px, ${m}px, ${g}px)`;
              d <= 1 &&
                d > -1 &&
                ((h = 90 * r + 90 * d), o && (h = 90 * -r - 90 * d)),
                (t.style.transform = v),
                c.slideShadows && s(t, d, u);
            }
            if (
              ((r.style.transformOrigin = `50% 50% -${l / 2}px`),
              (r.style["-webkit-transform-origin"] = `50% 50% -${l / 2}px`),
              c.shadow)
            )
              if (u)
                f.style.transform = `translate3d(0px, ${
                  n / 2 + c.shadowOffset
                }px, ${-n / 2}px) rotateX(90deg) rotateZ(0deg) scale(${
                  c.shadowScale
                })`;
              else {
                const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                  t =
                    1.5 -
                    (Math.sin((2 * e * Math.PI) / 360) / 2 +
                      Math.cos((2 * e * Math.PI) / 360) / 2),
                  r = c.shadowScale,
                  i = c.shadowScale / t,
                  s = c.shadowOffset;
                f.style.transform = `scale3d(${r}, 1, ${i}) translate3d(0px, ${
                  a / 2 + s
                }px, ${-a / 2 / i}px) rotateX(-90deg)`;
              }
            const m =
              (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -l / 2 : 0;
            (r.style.transform = `translate3d(0px,0,${m}px) rotateX(${
              t.isHorizontal() ? 0 : h
            }deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`),
              r.style.setProperty("--swiper-cube-translate-z", `${m}px`);
          },
          setTransition: (e) => {
            const { el: r, slides: i } = t;
            if (
              (i.forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    });
              }),
              t.params.cubeEffect.shadow && !t.isHorizontal())
            ) {
              const t = r.querySelector(".swiper-cube-shadow");
              t && (t.style.transitionDuration = `${e}ms`);
            }
          },
          recreateShadows: () => {
            const e = t.isHorizontal();
            t.slides.forEach((t) => {
              const r = Math.max(Math.min(t.progress, 1), -1);
              s(t, r, e);
            });
          },
          getEffectParams: () => t.params.cubeEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        r({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
        const s = (e, r, i) => {
          let s = t.isHorizontal()
              ? e.querySelector(".swiper-slide-shadow-left")
              : e.querySelector(".swiper-slide-shadow-top"),
            n = t.isHorizontal()
              ? e.querySelector(".swiper-slide-shadow-right")
              : e.querySelector(".swiper-slide-shadow-bottom");
          s || (s = J(0, e, t.isHorizontal() ? "left" : "top")),
            n || (n = J(0, e, t.isHorizontal() ? "right" : "bottom")),
            s && (s.style.opacity = Math.max(-r, 0)),
            n && (n.style.opacity = Math.max(r, 0));
        };
        K({
          effect: "flip",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e, rtlTranslate: r } = t,
              i = t.params.flipEffect;
            for (let n = 0; n < e.length; n += 1) {
              const a = e[n];
              let o = a.progress;
              t.params.flipEffect.limitRotation &&
                (o = Math.max(Math.min(a.progress, 1), -1));
              const l = a.swiperSlideOffset;
              let d = -180 * o,
                c = 0,
                u = t.params.cssMode ? -l - t.translate : -l,
                p = 0;
              t.isHorizontal()
                ? r && (d = -d)
                : ((p = u), (u = 0), (c = -d), (d = 0)),
                (a.style.zIndex = -Math.abs(Math.round(o)) + e.length),
                i.slideShadows && s(a, o);
              const f = `translate3d(${u}px, ${p}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
              Q(0, a).style.transform = f;
            }
          },
          setTransition: (e) => {
            const r = t.slides.map((e) => h(e));
            r.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
            }),
              Z({ swiper: t, duration: e, transformElements: r });
          },
          recreateShadows: () => {
            t.params.flipEffect,
              t.slides.forEach((e) => {
                let r = e.progress;
                t.params.flipEffect.limitRotation &&
                  (r = Math.max(Math.min(e.progress, 1), -1)),
                  s(e, r);
              });
          },
          getEffectParams: () => t.params.flipEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        r({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        }),
          K({
            effect: "coverflow",
            swiper: t,
            on: i,
            setTranslate: () => {
              const { width: e, height: r, slides: i, slidesSizesGrid: s } = t,
                n = t.params.coverflowEffect,
                a = t.isHorizontal(),
                o = t.translate,
                l = a ? e / 2 - o : r / 2 - o,
                d = a ? n.rotate : -n.rotate,
                c = n.depth;
              for (let e = 0, t = i.length; e < t; e += 1) {
                const t = i[e],
                  r = s[e],
                  o = (l - t.swiperSlideOffset - r / 2) / r,
                  u =
                    "function" == typeof n.modifier
                      ? n.modifier(o)
                      : o * n.modifier;
                let p = a ? d * u : 0,
                  f = a ? 0 : d * u,
                  h = -c * Math.abs(u),
                  m = n.stretch;
                "string" == typeof m &&
                  -1 !== m.indexOf("%") &&
                  (m = (parseFloat(n.stretch) / 100) * r);
                let g = a ? 0 : m * u,
                  v = a ? m * u : 0,
                  y = 1 - (1 - n.scale) * Math.abs(u);
                Math.abs(v) < 0.001 && (v = 0),
                  Math.abs(g) < 0.001 && (g = 0),
                  Math.abs(h) < 0.001 && (h = 0),
                  Math.abs(p) < 0.001 && (p = 0),
                  Math.abs(f) < 0.001 && (f = 0),
                  Math.abs(y) < 0.001 && (y = 0);
                const w = `translate3d(${v}px,${g}px,${h}px)  rotateX(${f}deg) rotateY(${p}deg) scale(${y})`;
                if (
                  ((Q(0, t).style.transform = w),
                  (t.style.zIndex = 1 - Math.abs(Math.round(u))),
                  n.slideShadows)
                ) {
                  let e = a
                      ? t.querySelector(".swiper-slide-shadow-left")
                      : t.querySelector(".swiper-slide-shadow-top"),
                    r = a
                      ? t.querySelector(".swiper-slide-shadow-right")
                      : t.querySelector(".swiper-slide-shadow-bottom");
                  e || (e = J(0, t, a ? "left" : "top")),
                    r || (r = J(0, t, a ? "right" : "bottom")),
                    e && (e.style.opacity = u > 0 ? u : 0),
                    r && (r.style.opacity = -u > 0 ? -u : 0);
                }
              }
            },
            setTransition: (e) => {
              t.slides
                .map((e) => h(e))
                .forEach((t) => {
                  (t.style.transitionDuration = `${e}ms`),
                    t
                      .querySelectorAll(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                      )
                      .forEach((t) => {
                        t.style.transitionDuration = `${e}ms`;
                      });
                });
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        r({
          creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
            next: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
          },
        });
        const s = (e) => ("string" == typeof e ? e : `${e}px`);
        K({
          effect: "creative",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e, wrapperEl: r, slidesSizesGrid: i } = t,
              n = t.params.creativeEffect,
              { progressMultiplier: a } = n,
              o = t.params.centeredSlides;
            if (o) {
              const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
              r.style.transform = `translateX(calc(50% - ${e}px))`;
            }
            for (let r = 0; r < e.length; r += 1) {
              const i = e[r],
                l = i.progress,
                d = Math.min(
                  Math.max(i.progress, -n.limitProgress),
                  n.limitProgress
                );
              let c = d;
              o ||
                (c = Math.min(
                  Math.max(i.originalProgress, -n.limitProgress),
                  n.limitProgress
                ));
              const u = i.swiperSlideOffset,
                p = [t.params.cssMode ? -u - t.translate : -u, 0, 0],
                f = [0, 0, 0];
              let h = !1;
              t.isHorizontal() || ((p[1] = p[0]), (p[0] = 0));
              let m = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1,
              };
              d < 0
                ? ((m = n.next), (h = !0))
                : d > 0 && ((m = n.prev), (h = !0)),
                p.forEach((e, t) => {
                  p[t] = `calc(${e}px + (${s(m.translate[t])} * ${Math.abs(
                    d * a
                  )}))`;
                }),
                f.forEach((e, t) => {
                  f[t] = m.rotate[t] * Math.abs(d * a);
                }),
                (i.style.zIndex = -Math.abs(Math.round(l)) + e.length);
              const g = p.join(", "),
                v = `rotateX(${f[0]}deg) rotateY(${f[1]}deg) rotateZ(${f[2]}deg)`,
                y =
                  c < 0
                    ? `scale(${1 + (1 - m.scale) * c * a})`
                    : `scale(${1 - (1 - m.scale) * c * a})`,
                w =
                  c < 0
                    ? 1 + (1 - m.opacity) * c * a
                    : 1 - (1 - m.opacity) * c * a,
                b = `translate3d(${g}) ${v} ${y}`;
              if ((h && m.shadow) || !h) {
                let e = i.querySelector(".swiper-slide-shadow");
                if ((!e && m.shadow && (e = J(0, i)), e)) {
                  const t = n.shadowPerProgress ? d * (1 / n.limitProgress) : d;
                  e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                }
              }
              const x = Q(0, i);
              (x.style.transform = b),
                (x.style.opacity = w),
                m.origin && (x.style.transformOrigin = m.origin);
            }
          },
          setTransition: (e) => {
            const r = t.slides.map((e) => h(e));
            r.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
            }),
              Z({
                swiper: t,
                duration: e,
                transformElements: r,
                allSlides: !0,
              });
          },
          perspective: () => t.params.creativeEffect.perspective,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i } = e;
        r({
          cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8,
          },
        }),
          K({
            effect: "cards",
            swiper: t,
            on: i,
            setTranslate: () => {
              const { slides: e, activeIndex: r } = t,
                i = t.params.cardsEffect,
                { startTranslate: s, isTouched: n } = t.touchEventsData,
                a = t.translate;
              for (let o = 0; o < e.length; o += 1) {
                const l = e[o],
                  d = l.progress,
                  c = Math.min(Math.max(d, -4), 4);
                let u = l.swiperSlideOffset;
                t.params.centeredSlides &&
                  !t.params.cssMode &&
                  (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                  t.params.centeredSlides &&
                    t.params.cssMode &&
                    (u -= e[0].swiperSlideOffset);
                let p = t.params.cssMode ? -u - t.translate : -u,
                  f = 0;
                const h = -100 * Math.abs(c);
                let m = 1,
                  g = -i.perSlideRotate * c,
                  v = i.perSlideOffset - 0.75 * Math.abs(c);
                const y =
                    t.virtual && t.params.virtual.enabled
                      ? t.virtual.from + o
                      : o,
                  w =
                    (y === r || y === r - 1) &&
                    c > 0 &&
                    c < 1 &&
                    (n || t.params.cssMode) &&
                    a < s,
                  b =
                    (y === r || y === r + 1) &&
                    c < 0 &&
                    c > -1 &&
                    (n || t.params.cssMode) &&
                    a > s;
                if (w || b) {
                  const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                  (g += -28 * c * e),
                    (m += -0.5 * e),
                    (v += 96 * e),
                    (f = -25 * e * Math.abs(c) + "%");
                }
                if (
                  ((p =
                    c < 0
                      ? `calc(${p}px + (${v * Math.abs(c)}%))`
                      : c > 0
                      ? `calc(${p}px + (-${v * Math.abs(c)}%))`
                      : `${p}px`),
                  !t.isHorizontal())
                ) {
                  const e = f;
                  (f = p), (p = e);
                }
                const x =
                    c < 0 ? "" + (1 + (1 - m) * c) : "" + (1 - (1 - m) * c),
                  _ = `\n        translate3d(${p}, ${f}, ${h}px)\n        rotateZ(${
                    i.rotate ? g : 0
                  }deg)\n        scale(${x})\n      `;
                if (i.slideShadows) {
                  let e = l.querySelector(".swiper-slide-shadow");
                  e || (e = J(0, l)),
                    e &&
                      (e.style.opacity = Math.min(
                        Math.max((Math.abs(c) - 0.5) / 0.5, 0),
                        1
                      ));
                }
                (l.style.zIndex = -Math.abs(Math.round(d)) + e.length),
                  (Q(0, l).style.transform = _);
              }
            },
            setTransition: (e) => {
              const r = t.slides.map((e) => h(e));
              r.forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
              }),
                Z({ swiper: t, duration: e, transformElements: r });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
    ];
    return G.use(ee), G;
  });
