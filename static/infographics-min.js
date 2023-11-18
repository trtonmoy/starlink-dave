const dpr = window.devicePixelRatio || 1,
  simplex = new SimplexNoise("1234567890abcdefghijklmnopqrstuvwxyz"),
  translate =
    ([e, t]) =>
    ({ r: a, theta: s }) =>
      [e + a * Math.cos(s), t + a * Math.sin(s)],
  range = (e) => Array.from(Array(e).keys()),
  degreesToRadians = (e) => (Math.PI * e) / 180,
  arcs = (e, t, a = 0) => {
    const s = 360 / e;
    return range(e).map((e) => ({ theta: degreesToRadians(a + s * e), r: t }));
  },
  displacePt =
    (e, t, a) =>
    ({ r: a, theta: s }, r) => ({
      r: a + a * e * simplex.noise3D(Math.cos(s), Math.sin(s), t),
      theta: s,
    }),
  generateCircle = (e, t, a, { segmentCount: s, displacement: r }) =>
    R.pipe(
      (e) => arcs(s, e),
      R.map(displacePt(r, a)),
      R.map(translate([e / 2, t / 2]))
    ),
  drawShape = (e, [t, ...a], s = !0) => {
    e.beginPath(),
      e.moveTo(...t),
      a.forEach((t) => {
        e.lineTo(...t);
      }),
      s && e.closePath();
  },
  Infographics = () => {
    const e = { hover: queryAll(".js-hover"), step: queryAll(".js-step") },
      t = {
        lines: [
          { scale: 0, alpha: 0, displacement: 0 },
          { scale: 0, alpha: 0, displacement: 0 },
          { scale: 0, alpha: 0, displacement: 0 },
        ],
      },
      a = PERF >= PERFS.PERF_HIGH ? 180 : PERF >= PERFS.PERF_GOOD ? 180 : 90,
      s = [
        { el: document.createElement("canvas"), ctx: null, playing: !1 },
        { el: document.createElement("canvas"), ctx: null, playing: !1 },
      ];
    scroller || document.body;
    s.forEach((e) => {
      (e.ctx = e.el.getContext("2d")), scroller.appendChild(e.el);
    });
    let r;
    s.forEach((e) => {
      e.ctx.scale(dpr, dpr),
        (e.el.width = 200 * dpr),
        (e.el.height = 200 * dpr),
        assign(e.el.style, {
          position: "absolute",
          top: 0,
          left: 0,
          width: "200px",
          height: "200px",
          pointerEvents: "none",
          mixBlendMode: "difference",
        });
    });
    let n = 0,
      o = !1;
    const l = () => {
      (o = !0),
        (n += 0.001),
        s.forEach((e) => {
          if (e.playing) {
            e.ctx.clearRect(0, 0, 200 * dpr, 200 * dpr),
              (e.ctx.lineWidth = 1.5),
              (e.ctx.strokeStyle = "#fff");
            for (let s = t.lines.length - 1; s >= 0; s--) {
              const { scale: r, alpha: o, displacement: l } = t.lines[s],
                i = ((200 * dpr) / 2) * r,
                c = generateCircle(200 * dpr, 200 * dpr, n, {
                  segmentCount: a,
                  displacement: l,
                })(i);
              (e.ctx.globalAlpha = o),
                drawShape(e.ctx, c, !0),
                e.ctx.stroke(),
                (e.ctx.globalAlpha = 1);
            }
          }
        });
    };
    let i = 0,
      c = 0;
    const p = (e) => {
        s.forEach((e) => (e.playing = !1)),
          e.forEach((e, t) => {
            const a = e.getBoundingClientRect(),
              r = a.width / 2;
            (i = a.left - 100 + r),
              (c = SMOOTH_SCROLLING + a.top - 100 + r),
              gsap.set(s[t].el, { x: i, y: c }),
              (s[t].playing = !0);
          }),
          (r = gsap
            .timeline({
              paused: !0,
              repeat: -1,
              repeatDelay: 0,
              onUpdate: l,
              onComplete: () => (o = !1),
            })
            .staggerTo(t.lines, 1, { alpha: 1, ease: Linear.easeNone }, -1, 1)
            .staggerFromTo(
              t.lines,
              5,
              { scale: 0 },
              {
                scale: gsap.utils.wrap([0.8, 0.75, 0.7]),
                ease: Linear.easeNone,
              },
              -1,
              0.5
            )
            .staggerFromTo(
              t.lines,
              5,
              { displacement: 0 },
              { displacement: 0.075, ease: Linear.easeNone },
              -1.5,
              1.75
            )
            .staggerTo(
              t.lines,
              2,
              { alpha: 0, ease: Linear.easeNone },
              -0.5,
              3.5
            )
            .restart());
      },
      d = (e = () => {}) => {
        gsap.killTweensOf(t.lines),
          gsap.to(t.lines, 0.2, {
            alpha: 0,
            ease: Expo.easeOut,
            onComplete: () => {
              r && r.clear(), s.forEach((e) => (e.playing = !1)), e();
            },
          });
      };
    let g = null;
    const h = (a) => {
        const s = a.currentTarget,
          r = s.querySelector(".img"),
          n = s.querySelector("small"),
          l = e.step.filter(
            (e) => e.getAttribute("data-index") === s.getAttribute("data-index")
          );
        e.hover.forEach((e) =>
          gsap.to(e, 0.3, { autoAlpha: e === s ? 1 : 0.25 })
        ),
          gsap.to(l, 0.5, {
            attr: { r: 18 },
            repeat: -1,
            yoyo: !0,
            ease: Power2.easeOut,
          }),
          gsap.fromTo(
            s.querySelector("p"),
            0.4,
            { x: 10, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, force3D: !0 }
          ),
          n &&
            gsap.fromTo(
              n,
              0.45,
              { scrambleText: { text: "00.00.00" } },
              {
                scrambleText: {
                  text: s.getAttribute("data-timecode"),
                  chars: "01",
                },
              }
            ),
          r &&
            (g = gsap.fromTo(
              r,
              1,
              { autoAlpha: 0, y: "-105%" },
              {
                autoAlpha: 1,
                y: "-100%",
                repeat: 2,
                ease: Quint.easeOut,
                yoyo: !0,
                force3D: !0,
              }
            )),
          ((e) => {
            gsap.killTweensOf(t.lines);
            const a = () => p(e);
            o ? d(a) : a();
          })(l);
      },
      u = (t) => {
        const a = t.currentTarget,
          s = a.querySelector(".img"),
          r = a.querySelector("p");
        s && (gsap.killTweensOf(s), gsap.to(s, 0.2, { autoAlpha: 0 })),
          gsap.to(e.hover, 0.3, { autoAlpha: 1 }),
          gsap.to(e.step, 0.4, { attr: { r: 10 } }),
          gsap.to(r, 0.2, { autoAlpha: 0 }),
          d();
      },
      m = (t) => {
        const a = t.currentTarget.getAttribute("data-index"),
          s = e.hover.find((e) => e.getAttribute("data-index") === a);
        h({ currentTarget: s });
      },
      f = (t) => {
        const a = t.currentTarget.getAttribute("data-index"),
          s = e.hover.find((e) => e.getAttribute("data-index") === a);
        u({ currentTarget: s });
      };
    let x = !1;
    const y = (e) => {
      const t = e.currentTarget,
        a = { currentTarget: t };
      if (x) {
        const e = t.querySelector("img"),
          s = t.querySelector("p");
        e && (gsap.killTweensOf(e), gsap.to(e, 0.2, { autoAlpha: 0 })),
          gsap.to(s, 0.2, { autoAlpha: 0 }),
          setTimeout(() => h(a), 1);
      } else (x = !0), h(a);
    };
    e.hover.forEach((e) => {
      deviceSettings.isDesktop
        ? (e.addEventListener("mouseenter", h),
          e.addEventListener("mouseleave", u))
        : e.addEventListener("click", y);
    }),
      e.step.length &&
        e.step.forEach((e) => {
          e.addEventListener("click", m),
            deviceSettings.isDesktop &&
              (e.addEventListener("mouseenter", m),
              e.addEventListener("mouseleave", f));
        }),
      window.addEventListener("scroll", () => {
        deviceSettings.isDesktop && o && d();
      });
  };
deviceSettings.isDesktop &&
  ("loading" != document.readyState
    ? Infographics()
    : document.addEventListener("DOMContentLoaded", Infographics));
