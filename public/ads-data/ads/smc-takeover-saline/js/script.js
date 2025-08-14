/*! For license information please see tsparticles.confetti.bundle.min.js.LICENSE.txt */
!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var i = e();
    for (var s in i) ("object" == typeof exports ? exports : t)[s] = i[s];
  }
})(this, () =>
  (() => {
    "use strict";
    var t = {
        d: (e, i) => {
          for (var s in i)
            t.o(i, s) &&
              !t.o(e, s) &&
              Object.defineProperty(e, s, { enumerable: !0, get: i[s] });
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: (t) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        },
      },
      e = {};
    t.r(e),
      t.d(e, {
        AnimatableColor: () => De,
        AnimationOptions: () => Ce,
        AnimationValueWithRandom: () => Ee,
        Background: () => le,
        BackgroundMask: () => de,
        BackgroundMaskCover: () => he,
        Circle: () => vi,
        ClickEvent: () => pe,
        Collisions: () => Ae,
        CollisionsAbsorb: () => Oe,
        CollisionsOverlap: () => Te,
        ColorAnimation: () => Se,
        DivEvent: () => fe,
        Events: () => ge,
        ExternalInteractorBase: () => Di,
        FullScreen: () => ue,
        HoverEvent: () => ve,
        HslAnimation: () => ke,
        HslColorManager: () => Si,
        Interactivity: () => be,
        ManualParticle: () => xe,
        Modes: () => we,
        Move: () => Xe,
        MoveAngle: () => Ve,
        MoveAttract: () => Ue,
        MoveCenter: () => $e,
        MoveGravity: () => qe,
        MovePath: () => Ge,
        MoveTrail: () => je,
        Opacity: () => Ze,
        OpacityAnimation: () => Ye,
        Options: () => li,
        OptionsColor: () => ce,
        OutModes: () => We,
        Parallax: () => me,
        ParticlesBounce: () => Le,
        ParticlesBounceFactor: () => Fe,
        ParticlesDensity: () => Qe,
        ParticlesInteractorBase: () => Oi,
        ParticlesNumber: () => Ke,
        ParticlesNumberLimit: () => Je,
        ParticlesOptions: () => ai,
        Point: () => pi,
        Range: () => fi,
        RangedAnimationOptions: () => Pe,
        RangedAnimationValueWithRandom: () => Re,
        Rectangle: () => mi,
        ResizeEvent: () => ye,
        Responsive: () => _e,
        RgbColorManager: () => ki,
        Shadow: () => ti,
        Shape: () => ei,
        Size: () => si,
        SizeAnimation: () => ii,
        Spin: () => Ne,
        Stroke: () => oi,
        Theme: () => Me,
        ThemeDefault: () => ze,
        ValueWithRandom: () => Ie,
        Vector: () => v,
        Vector3d: () => m,
        ZIndex: () => ni,
        addColorManager: () => St,
        addEasing: () => w,
        alterHsl: () => se,
        areBoundsInside: () => et,
        arrayRandomIndex: () => J,
        calcExactPositionOrRandomFromSize: () => B,
        calcExactPositionOrRandomFromSizeRanged: () => V,
        calcPositionFromSize: () => F,
        calcPositionOrRandomFromSize: () => L,
        calcPositionOrRandomFromSizeRanged: () => A,
        calculateBounds: () => it,
        circleBounce: () => lt,
        circleBounceDataFromParticle: () => ct,
        clamp: () => z,
        clear: () => Zt,
        collisionVelocity: () => R,
        colorMix: () => $t,
        colorToHsl: () => Tt,
        colorToRgb: () => Ot,
        confetti: () => ro,
        deepExtend: () => st,
        divMode: () => rt,
        divModeExecute: () => nt,
        drawEffect: () => Jt,
        drawLine: () => Nt,
        drawParticle: () => Qt,
        drawParticlePlugin: () => ie,
        drawPlugin: () => ee,
        drawShape: () => Kt,
        drawShapeAfterDraw: () => te,
        errorPrefix: () => f,
        executeOnSingleOrMultiple: () => dt,
        findItemFromSingleOrMultiple: () => pt,
        generatedAttribute: () => i,
        getDistance: () => T,
        getDistances: () => O,
        getEasing: () => b,
        getHslAnimationFromHsl: () => jt,
        getHslFromAnimation: () => Ht,
        getLinkColor: () => qt,
        getLinkRandomColor: () => Gt,
        getLogger: () => G,
        getParticleBaseVelocity: () => E,
        getParticleDirectionAngle: () => I,
        getPosition: () => vt,
        getRandom: () => _,
        getRandomRgbColor: () => Bt,
        getRangeMax: () => k,
        getRangeMin: () => S,
        getRangeValue: () => P,
        getSize: () => yt,
        getStyleFromHsl: () => Ut,
        getStyleFromRgb: () => Vt,
        hasMatchMedia: () => W,
        hslToRgb: () => Lt,
        hslaToRgba: () => At,
        initParticleNumericAnimationValue: () => ft,
        isArray: () => zt,
        isBoolean: () => gt,
        isDivModeEnabled: () => ot,
        isFunction: () => xt,
        isInArray: () => Z,
        isNumber: () => bt,
        isObject: () => _t,
        isPointInside: () => tt,
        isSsr: () => j,
        isString: () => wt,
        itemFromArray: () => K,
        itemFromSingleOrMultiple: () => ut,
        loadFont: () => Q,
        loadOptions: () => ri,
        loadParticlesOptions: () => ci,
        mix: () => M,
        mouseDownEvent: () => s,
        mouseLeaveEvent: () => n,
        mouseMoveEvent: () => r,
        mouseOutEvent: () => a,
        mouseUpEvent: () => o,
        paintBase: () => Xt,
        paintImage: () => Yt,
        parseAlpha: () => U,
        randomInRange: () => C,
        rangeColorToHsl: () => It,
        rangeColorToRgb: () => Dt,
        rectBounce: () => ht,
        resizeEvent: () => u,
        rgbToHsl: () => Et,
        safeIntersectionObserver: () => X,
        safeMatchMedia: () => N,
        safeMutationObserver: () => Y,
        setLogger: () => q,
        setRandom: () => x,
        setRangeValue: () => D,
        singleDivModeExecute: () => at,
        stringToAlpha: () => Rt,
        stringToRgb: () => Ft,
        touchCancelEvent: () => d,
        touchEndEvent: () => l,
        touchMoveEvent: () => h,
        touchStartEvent: () => c,
        tsParticles: () => Ti,
        visibilityChangeEvent: () => p,
      });
    const i = "generated",
      s = "pointerdown",
      o = "pointerup",
      n = "pointerleave",
      a = "pointerout",
      r = "pointermove",
      c = "touchstart",
      l = "touchend",
      h = "touchmove",
      d = "touchcancel",
      u = "resize",
      p = "visibilitychange",
      f = "tsParticles - Error";
    class m {
      constructor(t, e, i) {
        if (
          ((this._updateFromAngle = (t, e) => {
            (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
          }),
          !bt(t) && t)
        ) {
          (this.x = t.x), (this.y = t.y);
          const e = t;
          this.z = e.z ? e.z : 0;
        } else {
          if (void 0 === t || void 0 === e)
            throw new Error(`${f} Vector3d not initialized correctly`);
          (this.x = t), (this.y = e), (this.z = i ?? 0);
        }
      }
      static get origin() {
        return m.create(0, 0, 0);
      }
      get angle() {
        return Math.atan2(this.y, this.x);
      }
      set angle(t) {
        this._updateFromAngle(t, this.length);
      }
      get length() {
        return Math.sqrt(this.getLengthSq());
      }
      set length(t) {
        this._updateFromAngle(this.angle, t);
      }
      static clone(t) {
        return m.create(t.x, t.y, t.z);
      }
      static create(t, e, i) {
        return new m(t, e, i);
      }
      add(t) {
        return m.create(this.x + t.x, this.y + t.y, this.z + t.z);
      }
      addTo(t) {
        (this.x += t.x), (this.y += t.y), (this.z += t.z);
      }
      copy() {
        return m.clone(this);
      }
      distanceTo(t) {
        return this.sub(t).length;
      }
      distanceToSq(t) {
        return this.sub(t).getLengthSq();
      }
      div(t) {
        return m.create(this.x / t, this.y / t, this.z / t);
      }
      divTo(t) {
        (this.x /= t), (this.y /= t), (this.z /= t);
      }
      getLengthSq() {
        return this.x ** 2 + this.y ** 2;
      }
      mult(t) {
        return m.create(this.x * t, this.y * t, this.z * t);
      }
      multTo(t) {
        (this.x *= t), (this.y *= t), (this.z *= t);
      }
      normalize() {
        const t = this.length;
        0 != t && this.multTo(1 / t);
      }
      rotate(t) {
        return m.create(
          this.x * Math.cos(t) - this.y * Math.sin(t),
          this.x * Math.sin(t) + this.y * Math.cos(t),
          0
        );
      }
      setTo(t) {
        (this.x = t.x), (this.y = t.y);
        const e = t;
        this.z = e.z ? e.z : 0;
      }
      sub(t) {
        return m.create(this.x - t.x, this.y - t.y, this.z - t.z);
      }
      subFrom(t) {
        (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
      }
    }
    class v extends m {
      constructor(t, e) {
        super(t, e, 0);
      }
      static get origin() {
        return v.create(0, 0);
      }
      static clone(t) {
        return v.create(t.x, t.y);
      }
      static create(t, e) {
        return new v(t, e);
      }
    }
    let y = Math.random;
    const g = new Map();
    function w(t, e) {
      g.get(t) || g.set(t, e);
    }
    function b(t) {
      return g.get(t) || ((t) => t);
    }
    function x(t = Math.random) {
      y = t;
    }
    function _() {
      return z(y(), 0, 1 - 1e-16);
    }
    function z(t, e, i) {
      return Math.min(Math.max(t, e), i);
    }
    function M(t, e, i, s) {
      return Math.floor((t * i + e * s) / (i + s));
    }
    function C(t) {
      const e = k(t);
      let i = S(t);
      return e === i && (i = 0), _() * (e - i) + i;
    }
    function P(t) {
      return bt(t) ? t : C(t);
    }
    function S(t) {
      return bt(t) ? t : t.min;
    }
    function k(t) {
      return bt(t) ? t : t.max;
    }
    function D(t, e) {
      if (t === e || (void 0 === e && bt(t))) return t;
      const i = S(t),
        s = k(t);
      return void 0 !== e
        ? { min: Math.min(i, e), max: Math.max(s, e) }
        : D(i, s);
    }
    function O(t, e) {
      const i = t.x - e.x,
        s = t.y - e.y;
      return { dx: i, dy: s, distance: Math.sqrt(i ** 2 + s ** 2) };
    }
    function T(t, e) {
      return O(t, e).distance;
    }
    function I(t, e, i) {
      if (bt(t)) return (t * Math.PI) / 180;
      switch (t) {
        case "top":
          return 0.5 * -Math.PI;
        case "top-right":
          return 0.25 * -Math.PI;
        case "right":
          return 0;
        case "bottom-right":
          return 0.25 * Math.PI;
        case "bottom":
          return 0.5 * Math.PI;
        case "bottom-left":
          return 0.75 * Math.PI;
        case "left":
          return Math.PI;
        case "top-left":
          return 0.75 * -Math.PI;
        case "inside":
          return Math.atan2(i.y - e.y, i.x - e.x);
        case "outside":
          return Math.atan2(e.y - i.y, e.x - i.x);
        default:
          return _() * Math.PI * 2;
      }
    }
    function E(t) {
      const e = v.origin;
      return (e.length = 1), (e.angle = t), e;
    }
    function R(t, e, i, s) {
      return v.create((t.x * (i - s)) / (i + s) + (2 * e.x * s) / (i + s), t.y);
    }
    function F(t) {
      return t.position && void 0 !== t.position.x && void 0 !== t.position.y
        ? {
            x: (t.position.x * t.size.width) / 100,
            y: (t.position.y * t.size.height) / 100,
          }
        : void 0;
    }
    function L(t) {
      return {
        x: ((t.position?.x ?? 100 * _()) * t.size.width) / 100,
        y: ((t.position?.y ?? 100 * _()) * t.size.height) / 100,
      };
    }
    function A(t) {
      const e = {
        x: void 0 !== t.position?.x ? P(t.position.x) : void 0,
        y: void 0 !== t.position?.y ? P(t.position.y) : void 0,
      };
      return L({ size: t.size, position: e });
    }
    function B(t) {
      return {
        x: t.position?.x ?? _() * t.size.width,
        y: t.position?.y ?? _() * t.size.height,
      };
    }
    function V(t) {
      const e = {
        x: void 0 !== t.position?.x ? P(t.position.x) : void 0,
        y: void 0 !== t.position?.y ? P(t.position.y) : void 0,
      };
      return B({ size: t.size, position: e });
    }
    function U(t) {
      return t ? (t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t)) : 1;
    }
    const $ = {
      debug: console.debug,
      error: console.error,
      info: console.info,
      log: console.log,
      verbose: console.log,
      warning: console.warn,
    };
    function q(t) {
      ($.debug = t.debug || $.debug),
        ($.error = t.error || $.error),
        ($.info = t.info || $.info),
        ($.log = t.log || $.log),
        ($.verbose = t.verbose || $.verbose),
        ($.warning = t.warning || $.warning);
    }
    function G() {
      return $;
    }
    function H(t) {
      const e = { bounced: !1 },
        {
          pSide: i,
          pOtherSide: s,
          rectSide: o,
          rectOtherSide: n,
          velocity: a,
          factor: r,
        } = t;
      return (
        s.min < n.min ||
          s.min > n.max ||
          s.max < n.min ||
          s.max > n.max ||
          (((i.max >= o.min && i.max <= 0.5 * (o.max + o.min) && a > 0) ||
            (i.min <= o.max && i.min > 0.5 * (o.max + o.min) && a < 0)) &&
            ((e.velocity = a * -r), (e.bounced = !0))),
        e
      );
    }
    function j() {
      return (
        "undefined" == typeof window ||
        !window ||
        void 0 === window.document ||
        !window.document
      );
    }
    function W() {
      return !j() && "undefined" != typeof matchMedia;
    }
    function N(t) {
      if (W()) return matchMedia(t);
    }
    function X(t) {
      if (!j() && "undefined" != typeof IntersectionObserver)
        return new IntersectionObserver(t);
    }
    function Y(t) {
      if (!j() && "undefined" != typeof MutationObserver)
        return new MutationObserver(t);
    }
    function Z(t, e) {
      return t === e || (zt(e) && e.indexOf(t) > -1);
    }
    async function Q(t, e) {
      try {
        await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
      } catch {}
    }
    function J(t) {
      return Math.floor(_() * t.length);
    }
    function K(t, e, i = !0) {
      return t[void 0 !== e && i ? e % t.length : J(t)];
    }
    function tt(t, e, i, s, o) {
      return et(it(t, s ?? 0), e, i, o);
    }
    function et(t, e, i, s) {
      let o = !0;
      return (
        (s && "bottom" !== s) || (o = t.top < e.height + i.x),
        !o || (s && "left" !== s) || (o = t.right > i.x),
        !o || (s && "right" !== s) || (o = t.left < e.width + i.y),
        !o || (s && "top" !== s) || (o = t.bottom > i.y),
        o
      );
    }
    function it(t, e) {
      return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
    }
    function st(t, ...e) {
      for (const i of e) {
        if (null == i) continue;
        if (!_t(i)) {
          t = i;
          continue;
        }
        const e = Array.isArray(i);
        !e || (!_t(t) && t && Array.isArray(t))
          ? e || (!_t(t) && t && !Array.isArray(t)) || (t = {})
          : (t = []);
        for (const e in i) {
          if ("__proto__" === e) continue;
          const s = i[e],
            o = t;
          o[e] =
            _t(s) && Array.isArray(s) ? s.map((t) => st(o[e], t)) : st(o[e], s);
        }
      }
      return t;
    }
    function ot(t, e) {
      return !!pt(e, (e) => e.enable && Z(t, e.mode));
    }
    function nt(t, e, i) {
      dt(e, (e) => {
        const s = e.mode;
        e.enable && Z(t, s) && at(e, i);
      });
    }
    function at(t, e) {
      dt(t.selectors, (i) => {
        e(i, t);
      });
    }
    function rt(t, e) {
      if (e && t)
        return pt(t, (t) =>
          (function (t, e) {
            const i = dt(e, (e) => t.matches(e));
            return zt(i) ? i.some((t) => t) : i;
          })(e, t.selectors)
        );
    }
    function ct(t) {
      return {
        position: t.getPosition(),
        radius: t.getRadius(),
        mass: t.getMass(),
        velocity: t.velocity,
        factor: v.create(
          P(t.options.bounce.horizontal.value),
          P(t.options.bounce.vertical.value)
        ),
      };
    }
    function lt(t, e) {
      const { x: i, y: s } = t.velocity.sub(e.velocity),
        [o, n] = [t.position, e.position],
        { dx: a, dy: r } = O(n, o);
      if (i * a + s * r < 0) return;
      const c = -Math.atan2(r, a),
        l = t.mass,
        h = e.mass,
        d = t.velocity.rotate(c),
        u = e.velocity.rotate(c),
        p = R(d, u, l, h),
        f = R(u, d, l, h),
        m = p.rotate(-c),
        v = f.rotate(-c);
      (t.velocity.x = m.x * t.factor.x),
        (t.velocity.y = m.y * t.factor.y),
        (e.velocity.x = v.x * e.factor.x),
        (e.velocity.y = v.y * e.factor.y);
    }
    function ht(t, e) {
      const i = it(t.getPosition(), t.getRadius()),
        s = t.options.bounce,
        o = H({
          pSide: { min: i.left, max: i.right },
          pOtherSide: { min: i.top, max: i.bottom },
          rectSide: { min: e.left, max: e.right },
          rectOtherSide: { min: e.top, max: e.bottom },
          velocity: t.velocity.x,
          factor: P(s.horizontal.value),
        });
      o.bounced &&
        (void 0 !== o.velocity && (t.velocity.x = o.velocity),
        void 0 !== o.position && (t.position.x = o.position));
      const n = H({
        pSide: { min: i.top, max: i.bottom },
        pOtherSide: { min: i.left, max: i.right },
        rectSide: { min: e.top, max: e.bottom },
        rectOtherSide: { min: e.left, max: e.right },
        velocity: t.velocity.y,
        factor: P(s.vertical.value),
      });
      n.bounced &&
        (void 0 !== n.velocity && (t.velocity.y = n.velocity),
        void 0 !== n.position && (t.position.y = n.position));
    }
    function dt(t, e) {
      return zt(t) ? t.map((t, i) => e(t, i)) : e(t, 0);
    }
    function ut(t, e, i) {
      return zt(t) ? K(t, e, i) : t;
    }
    function pt(t, e) {
      return zt(t) ? t.find((t, i) => e(t, i)) : e(t, 0) ? t : void 0;
    }
    function ft(t, e) {
      const i = t.value,
        s = t.animation,
        o = {
          delayTime: 1e3 * P(s.delay),
          enable: s.enable,
          value: P(t.value) * e,
          max: k(i) * e,
          min: S(i) * e,
          loops: 0,
          maxLoops: P(s.count),
          time: 0,
        };
      if (s.enable) {
        switch (((o.decay = 1 - P(s.decay)), s.mode)) {
          case "increase":
            o.status = "increasing";
            break;
          case "decrease":
            o.status = "decreasing";
            break;
          case "random":
            o.status = _() >= 0.5 ? "increasing" : "decreasing";
        }
        const t = "auto" === s.mode;
        switch (s.startValue) {
          case "min":
            (o.value = o.min), t && (o.status = "increasing");
            break;
          case "max":
            (o.value = o.max), t && (o.status = "decreasing");
            break;
          default:
            (o.value = C(o)),
              t && (o.status = _() >= 0.5 ? "increasing" : "decreasing");
        }
      }
      return (o.initialValue = o.value), o;
    }
    function mt(t, e) {
      if (!("percent" === t.mode)) {
        const { mode: e, ...i } = t;
        return i;
      }
      return "x" in t
        ? { x: (t.x / 100) * e.width, y: (t.y / 100) * e.height }
        : {
            width: (t.width / 100) * e.width,
            height: (t.height / 100) * e.height,
          };
    }
    function vt(t, e) {
      return mt(t, e);
    }
    function yt(t, e) {
      return mt(t, e);
    }
    function gt(t) {
      return "boolean" == typeof t;
    }
    function wt(t) {
      return "string" == typeof t;
    }
    function bt(t) {
      return "number" == typeof t;
    }
    function xt(t) {
      return "function" == typeof t;
    }
    function _t(t) {
      return "object" == typeof t && null !== t;
    }
    function zt(t) {
      return Array.isArray(t);
    }
    const Mt = "random",
      Ct = "mid",
      Pt = new Map();
    function St(t) {
      Pt.set(t.key, t);
    }
    function kt(t) {
      for (const [, e] of Pt)
        if (t.startsWith(e.stringPrefix)) return e.parseString(t);
      const e = t.replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
          (t, e, i, s, o) => e + e + i + i + s + s + (void 0 !== o ? o + o : "")
        ),
        i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
      return i
        ? {
            a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
            b: parseInt(i[3], 16),
            g: parseInt(i[2], 16),
            r: parseInt(i[1], 16),
          }
        : void 0;
    }
    function Dt(t, e, i = !0) {
      if (!t) return;
      const s = wt(t) ? { value: t } : t;
      if (wt(s.value)) return Ot(s.value, e, i);
      if (zt(s.value)) return Dt({ value: K(s.value, e, i) });
      for (const [, t] of Pt) {
        const e = t.handleRangeColor(s);
        if (e) return e;
      }
    }
    function Ot(t, e, i = !0) {
      if (!t) return;
      const s = wt(t) ? { value: t } : t;
      if (wt(s.value)) return s.value === Mt ? Bt() : Ft(s.value);
      if (zt(s.value)) return Ot({ value: K(s.value, e, i) });
      for (const [, t] of Pt) {
        const e = t.handleColor(s);
        if (e) return e;
      }
    }
    function Tt(t, e, i = !0) {
      const s = Ot(t, e, i);
      return s ? Et(s) : void 0;
    }
    function It(t, e, i = !0) {
      const s = Dt(t, e, i);
      return s ? Et(s) : void 0;
    }
    function Et(t) {
      const e = t.r / 255,
        i = t.g / 255,
        s = t.b / 255,
        o = Math.max(e, i, s),
        n = Math.min(e, i, s),
        a = { h: 0, l: 0.5 * (o + n), s: 0 };
      return (
        o !== n &&
          ((a.s = a.l < 0.5 ? (o - n) / (o + n) : (o - n) / (2 - o - n)),
          (a.h =
            e === o
              ? (i - s) / (o - n)
              : (a.h =
                  i === o ? 2 + (s - e) / (o - n) : 4 + (e - i) / (o - n)))),
        (a.l *= 100),
        (a.s *= 100),
        (a.h *= 60),
        a.h < 0 && (a.h += 360),
        a.h >= 360 && (a.h -= 360),
        a
      );
    }
    function Rt(t) {
      return kt(t)?.a;
    }
    function Ft(t) {
      return kt(t);
    }
    function Lt(t) {
      const e = ((t.h % 360) + 360) % 360,
        i = Math.max(0, Math.min(100, t.s)),
        s = e / 360,
        o = i / 100,
        n = Math.max(0, Math.min(100, t.l)) / 100;
      if (0 === i) {
        const t = Math.round(255 * n);
        return { r: t, g: t, b: t };
      }
      const a = (t, e, i) => (
          i < 0 && (i += 1),
          i > 1 && (i -= 1),
          6 * i < 1
            ? t + 6 * (e - t) * i
            : 2 * i < 1
            ? e
            : 3 * i < 2
            ? t + (e - t) * (2 / 3 - i) * 6
            : t
        ),
        r = n < 0.5 ? n * (1 + o) : n + o - n * o,
        c = 2 * n - r,
        l = Math.min(255, 255 * a(c, r, s + 1 / 3)),
        h = Math.min(255, 255 * a(c, r, s)),
        d = Math.min(255, 255 * a(c, r, s - 1 / 3));
      return { r: Math.round(l), g: Math.round(h), b: Math.round(d) };
    }
    function At(t) {
      const e = Lt(t);
      return { a: t.a, b: e.b, g: e.g, r: e.r };
    }
    function Bt(t) {
      const e = t ?? 0;
      return {
        b: Math.floor(C(D(e, 256))),
        g: Math.floor(C(D(e, 256))),
        r: Math.floor(C(D(e, 256))),
      };
    }
    function Vt(t, e) {
      return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
    }
    function Ut(t, e) {
      return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
    }
    function $t(t, e, i, s) {
      let o = t,
        n = e;
      return (
        void 0 === o.r && (o = Lt(t)),
        void 0 === n.r && (n = Lt(e)),
        { b: M(o.b, n.b, i, s), g: M(o.g, n.g, i, s), r: M(o.r, n.r, i, s) }
      );
    }
    function qt(t, e, i) {
      if (i === Mt) return Bt();
      if (i !== Ct) return i;
      {
        const i = t.getFillColor() ?? t.getStrokeColor(),
          s = e?.getFillColor() ?? e?.getStrokeColor();
        if (i && s && e) return $t(i, s, t.getRadius(), e.getRadius());
        {
          const t = i ?? s;
          if (t) return Lt(t);
        }
      }
    }
    function Gt(t, e, i) {
      const s = wt(t) ? t : t.value;
      return s === Mt
        ? i
          ? Dt({ value: s })
          : e
          ? Mt
          : Ct
        : s === Ct
        ? Ct
        : Dt({ value: s });
    }
    function Ht(t) {
      return void 0 !== t
        ? { h: t.h.value, s: t.s.value, l: t.l.value }
        : void 0;
    }
    function jt(t, e, i) {
      const s = {
        h: { enable: !1, value: t.h },
        s: { enable: !1, value: t.s },
        l: { enable: !1, value: t.l },
      };
      return e && (Wt(s.h, e.h, i), Wt(s.s, e.s, i), Wt(s.l, e.l, i)), s;
    }
    function Wt(t, e, i) {
      (t.enable = e.enable),
        t.enable
          ? ((t.velocity = (P(e.speed) / 100) * i),
            (t.decay = 1 - P(e.decay)),
            (t.status = "increasing"),
            (t.loops = 0),
            (t.maxLoops = P(e.count)),
            (t.time = 0),
            (t.delayTime = 1e3 * P(e.delay)),
            e.sync || ((t.velocity *= _()), (t.value *= _())),
            (t.initialValue = t.value))
          : (t.velocity = 0);
    }
    function Nt(t, e, i) {
      t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
    }
    function Xt(t, e, i) {
      (t.fillStyle = i ?? "rgba(0,0,0,0)"), t.fillRect(0, 0, e.width, e.height);
    }
    function Yt(t, e, i, s) {
      i &&
        ((t.globalAlpha = s),
        t.drawImage(i, 0, 0, e.width, e.height),
        (t.globalAlpha = 1));
    }
    function Zt(t, e) {
      t.clearRect(0, 0, e.width, e.height);
    }
    function Qt(t) {
      const {
          container: e,
          context: i,
          particle: s,
          delta: o,
          colorStyles: n,
          backgroundMask: a,
          composite: r,
          radius: c,
          opacity: l,
          shadow: h,
          transform: d,
        } = t,
        u = s.getPosition(),
        p = s.rotation + (s.pathRotation ? s.velocity.angle : 0),
        f = Math.sin(p),
        m = Math.cos(p),
        v = {
          a: m * (d.a ?? 1),
          b: f * (d.b ?? 1),
          c: -f * (d.c ?? 1),
          d: m * (d.d ?? 1),
        };
      i.setTransform(v.a, v.b, v.c, v.d, u.x, u.y),
        a && (i.globalCompositeOperation = r);
      const y = s.shadowColor;
      h.enable &&
        y &&
        ((i.shadowBlur = h.blur),
        (i.shadowColor = Vt(y)),
        (i.shadowOffsetX = h.offset.x),
        (i.shadowOffsetY = h.offset.y)),
        n.fill && (i.fillStyle = n.fill);
      const g = s.strokeWidth ?? 0;
      (i.lineWidth = g), n.stroke && (i.strokeStyle = n.stroke);
      const w = {
        container: e,
        context: i,
        particle: s,
        radius: c,
        opacity: l,
        delta: o,
        transformData: v,
      };
      i.beginPath(),
        Kt(w),
        s.shapeClose && i.closePath(),
        g > 0 && i.stroke(),
        s.shapeFill && i.fill(),
        te(w),
        Jt(w),
        (i.globalCompositeOperation = "source-over"),
        i.setTransform(1, 0, 0, 1, 0, 0);
    }
    function Jt(t) {
      const {
        container: e,
        context: i,
        particle: s,
        radius: o,
        opacity: n,
        delta: a,
        transformData: r,
      } = t;
      if (!s.effect) return;
      const c = e.effectDrawers.get(s.effect);
      c &&
        c.draw({
          context: i,
          particle: s,
          radius: o,
          opacity: n,
          delta: a,
          pixelRatio: e.retina.pixelRatio,
          transformData: { ...r },
        });
    }
    function Kt(t) {
      const {
        container: e,
        context: i,
        particle: s,
        radius: o,
        opacity: n,
        delta: a,
        transformData: r,
      } = t;
      if (!s.shape) return;
      const c = e.shapeDrawers.get(s.shape);
      c &&
        c.draw({
          context: i,
          particle: s,
          radius: o,
          opacity: n,
          delta: a,
          pixelRatio: e.retina.pixelRatio,
          transformData: { ...r },
        });
    }
    function te(t) {
      const {
        container: e,
        context: i,
        particle: s,
        radius: o,
        opacity: n,
        delta: a,
        transformData: r,
      } = t;
      if (!s.shape) return;
      const c = e.shapeDrawers.get(s.shape);
      c &&
        c.afterDraw &&
        c.afterDraw({
          context: i,
          particle: s,
          radius: o,
          opacity: n,
          delta: a,
          pixelRatio: e.retina.pixelRatio,
          transformData: { ...r },
        });
    }
    function ee(t, e, i) {
      e.draw && e.draw(t, i);
    }
    function ie(t, e, i, s) {
      e.drawParticle && e.drawParticle(t, i, s);
    }
    function se(t, e, i) {
      return { h: t.h, s: t.s, l: t.l + ("darken" === e ? -1 : 1) * i };
    }
    function oe(t, e, i) {
      const s = e[i];
      void 0 !== s && (t[i] = (t[i] ?? 1) * s);
    }
    class ne {
      constructor(t) {
        (this.container = t),
          (this._applyPostDrawUpdaters = (t) => {
            for (const e of this._postDrawUpdaters)
              e.afterDraw && e.afterDraw(t);
          }),
          (this._applyPreDrawUpdaters = (t, e, i, s, o, n) => {
            for (const a of this._preDrawUpdaters) {
              if (a.getColorStyles) {
                const { fill: n, stroke: r } = a.getColorStyles(e, t, i, s);
                n && (o.fill = n), r && (o.stroke = r);
              }
              if (a.getTransformValues) {
                const t = a.getTransformValues(e);
                for (const e in t) oe(n, t, e);
              }
              a.beforeDraw && a.beforeDraw(e);
            }
          }),
          (this._applyResizePlugins = () => {
            for (const t of this._resizePlugins) t.resize && t.resize();
          }),
          (this._getPluginParticleColors = (t) => {
            let e, i;
            for (const s of this._colorPlugins)
              if (
                (!e && s.particleFillColor && (e = It(s.particleFillColor(t))),
                !i &&
                  s.particleStrokeColor &&
                  (i = It(s.particleStrokeColor(t))),
                e && i)
              )
                break;
            return [e, i];
          }),
          (this._initCover = () => {
            const t = this.container.actualOptions.backgroundMask.cover,
              e = Dt(t.color);
            if (e) {
              const i = { ...e, a: t.opacity };
              this._coverColorStyle = Vt(i, i.a);
            }
          }),
          (this._initStyle = () => {
            const t = this.element,
              e = this.container.actualOptions;
            if (t) {
              this._fullScreen
                ? ((this._originalStyle = st({}, t.style)),
                  this._setFullScreenStyle())
                : this._resetOriginalStyle();
              for (const i in e.style) {
                if (!i || !e.style) continue;
                const s = e.style[i];
                s && t.style.setProperty(i, s, "important");
              }
            }
          }),
          (this._initTrail = async () => {
            const t = this.container.actualOptions,
              e = t.particles.move.trail,
              i = e.fill;
            if (e.enable)
              if (i.color) {
                const e = Dt(i.color);
                if (!e) return;
                const s = t.particles.move.trail;
                this._trailFill = { color: { ...e }, opacity: 1 / s.length };
              } else
                await new Promise((t, s) => {
                  if (!i.image) return;
                  const o = document.createElement("img");
                  o.addEventListener("load", () => {
                    (this._trailFill = { image: o, opacity: 1 / e.length }),
                      t();
                  }),
                    o.addEventListener("error", (t) => {
                      s(t.error);
                    }),
                    (o.src = i.image);
                });
          }),
          (this._paintBase = (t) => {
            this.draw((e) => Xt(e, this.size, t));
          }),
          (this._paintImage = (t, e) => {
            this.draw((i) => Yt(i, this.size, t, e));
          }),
          (this._repairStyle = () => {
            const t = this.element;
            t &&
              (this._safeMutationObserver((t) => t.disconnect()),
              this._initStyle(),
              this.initBackground(),
              this._safeMutationObserver((e) =>
                e.observe(t, { attributes: !0 })
              ));
          }),
          (this._resetOriginalStyle = () => {
            const t = this.element,
              e = this._originalStyle;
            if (!t || !e) return;
            const i = t.style;
            (i.position = e.position),
              (i.zIndex = e.zIndex),
              (i.top = e.top),
              (i.left = e.left),
              (i.width = e.width),
              (i.height = e.height);
          }),
          (this._safeMutationObserver = (t) => {
            this._mutationObserver && t(this._mutationObserver);
          }),
          (this._setFullScreenStyle = () => {
            const t = this.element;
            if (!t) return;
            const e = "important",
              i = t.style;
            i.setProperty("position", "fixed", e),
              i.setProperty(
                "z-index",
                this.container.actualOptions.fullScreen.zIndex.toString(10),
                e
              ),
              i.setProperty("top", "0", e),
              i.setProperty("left", "0", e),
              i.setProperty("width", "100%", e),
              i.setProperty("height", "100%", e);
          }),
          (this.size = { height: 0, width: 0 }),
          (this._context = null),
          (this._generated = !1),
          (this._preDrawUpdaters = []),
          (this._postDrawUpdaters = []),
          (this._resizePlugins = []),
          (this._colorPlugins = []);
      }
      get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
      }
      clear() {
        const t = this.container.actualOptions,
          e = t.particles.move.trail,
          i = this._trailFill;
        t.backgroundMask.enable
          ? this.paint()
          : e.enable && e.length > 0 && i
          ? i.color
            ? this._paintBase(Vt(i.color, i.opacity))
            : i.image && this._paintImage(i.image, i.opacity)
          : t.clear &&
            this.draw((t) => {
              Zt(t, this.size);
            });
      }
      destroy() {
        if ((this.stop(), this._generated)) {
          const t = this.element;
          t && t.remove();
        } else this._resetOriginalStyle();
        (this._preDrawUpdaters = []),
          (this._postDrawUpdaters = []),
          (this._resizePlugins = []),
          (this._colorPlugins = []);
      }
      draw(t) {
        const e = this._context;
        if (e) return t(e);
      }
      drawParticle(t, e) {
        if (t.spawning || t.destroyed) return;
        const i = t.getRadius();
        if (i <= 0) return;
        const s = t.getFillColor(),
          o = t.getStrokeColor() ?? s;
        let [n, a] = this._getPluginParticleColors(t);
        n || (n = s),
          a || (a = o),
          (n || a) &&
            this.draw((s) => {
              const o = this.container,
                r = o.actualOptions,
                c = t.options.zIndex,
                l = (1 - t.zIndexFactor) ** c.opacityRate,
                h = t.bubble.opacity ?? t.opacity?.value ?? 1,
                d = h * l,
                u = (t.strokeOpacity ?? h) * l,
                p = {},
                f = { fill: n ? Ut(n, d) : void 0 };
              (f.stroke = a ? Ut(a, u) : f.fill),
                this._applyPreDrawUpdaters(s, t, i, d, f, p),
                Qt({
                  container: o,
                  context: s,
                  particle: t,
                  delta: e,
                  colorStyles: f,
                  backgroundMask: r.backgroundMask.enable,
                  composite: r.backgroundMask.composite,
                  radius: i * (1 - t.zIndexFactor) ** c.sizeRate,
                  opacity: d,
                  shadow: t.options.shadow,
                  transform: p,
                }),
                this._applyPostDrawUpdaters(t);
            });
      }
      drawParticlePlugin(t, e, i) {
        this.draw((s) => ie(s, t, e, i));
      }
      drawPlugin(t, e) {
        this.draw((i) => ee(i, t, e));
      }
      async init() {
        this._safeMutationObserver((t) => t.disconnect()),
          (this._mutationObserver = Y((t) => {
            for (const e of t)
              "attributes" === e.type &&
                "style" === e.attributeName &&
                this._repairStyle();
          })),
          this.resize(),
          this._initStyle(),
          this._initCover();
        try {
          await this._initTrail();
        } catch (t) {
          G().error(t);
        }
        this.initBackground(),
          this._safeMutationObserver((t) => {
            this.element && t.observe(this.element, { attributes: !0 });
          }),
          this.initUpdaters(),
          this.initPlugins(),
          this.paint();
      }
      initBackground() {
        const t = this.container.actualOptions.background,
          e = this.element;
        if (!e) return;
        const i = e.style;
        if (i) {
          if (t.color) {
            const e = Dt(t.color);
            i.backgroundColor = e ? Vt(e, t.opacity) : "";
          } else i.backgroundColor = "";
          (i.backgroundImage = t.image || ""),
            (i.backgroundPosition = t.position || ""),
            (i.backgroundRepeat = t.repeat || ""),
            (i.backgroundSize = t.size || "");
        }
      }
      initPlugins() {
        this._resizePlugins = [];
        for (const [, t] of this.container.plugins)
          t.resize && this._resizePlugins.push(t),
            (t.particleFillColor || t.particleStrokeColor) &&
              this._colorPlugins.push(t);
      }
      initUpdaters() {
        (this._preDrawUpdaters = []), (this._postDrawUpdaters = []);
        for (const t of this.container.particles.updaters)
          t.afterDraw && this._postDrawUpdaters.push(t),
            (t.getColorStyles || t.getTransformValues || t.beforeDraw) &&
              this._preDrawUpdaters.push(t);
      }
      loadCanvas(t) {
        this._generated && this.element && this.element.remove(),
          (this._generated =
            t.dataset && i in t.dataset
              ? "true" === t.dataset[i]
              : this._generated),
          (this.element = t),
          (this.element.ariaHidden = "true"),
          (this._originalStyle = st({}, this.element.style)),
          (this.size.height = t.offsetHeight),
          (this.size.width = t.offsetWidth),
          (this._context = this.element.getContext("2d")),
          this._safeMutationObserver((t) => {
            this.element && t.observe(this.element, { attributes: !0 });
          }),
          this.container.retina.init(),
          this.initBackground();
      }
      paint() {
        const t = this.container.actualOptions;
        this.draw((e) => {
          t.backgroundMask.enable && t.backgroundMask.cover
            ? (Zt(e, this.size), this._paintBase(this._coverColorStyle))
            : this._paintBase();
        });
      }
      resize() {
        if (!this.element) return !1;
        const t = this.container,
          e = t.retina.pixelRatio,
          i = t.canvas.size,
          s = this.element.offsetWidth * e,
          o = this.element.offsetHeight * e;
        if (
          o === i.height &&
          s === i.width &&
          o === this.element.height &&
          s === this.element.width
        )
          return !1;
        const n = { ...i };
        return (
          (this.element.width = i.width = this.element.offsetWidth * e),
          (this.element.height = i.height = this.element.offsetHeight * e),
          this.container.started &&
            t.particles.setResizeFactor({
              width: i.width / n.width,
              height: i.height / n.height,
            }),
          !0
        );
      }
      stop() {
        this._safeMutationObserver((t) => t.disconnect()),
          (this._mutationObserver = void 0),
          this.draw((t) => Zt(t, this.size));
      }
      async windowResize() {
        if (!this.element || !this.resize()) return;
        const t = this.container,
          e = t.updateActualOptions();
        t.particles.setDensity(),
          this._applyResizePlugins(),
          e && (await t.refresh());
      }
    }
    function ae(t, e, i, s, o) {
      if (s) {
        let s = { passive: !0 };
        gt(o) ? (s.capture = o) : void 0 !== o && (s = o),
          t.addEventListener(e, i, s);
      } else {
        const s = o;
        t.removeEventListener(e, i, s);
      }
    }
    class re {
      constructor(t) {
        (this.container = t),
          (this._doMouseTouchClick = (t) => {
            const e = this.container,
              i = e.actualOptions;
            if (this._canPush) {
              const t = e.interactivity.mouse,
                s = t.position;
              if (!s) return;
              (t.clickPosition = { ...s }),
                (t.clickTime = new Date().getTime());
              dt(i.interactivity.events.onClick.mode, (t) =>
                this.container.handleClickMode(t)
              );
            }
            "touchend" === t.type &&
              setTimeout(() => this._mouseTouchFinish(), 500);
          }),
          (this._handleThemeChange = (t) => {
            const e = t,
              i = this.container,
              s = i.options,
              o = s.defaultThemes,
              n = e.matches ? o.dark : o.light,
              a = s.themes.find((t) => t.name === n);
            a && a.default.auto && i.loadTheme(n);
          }),
          (this._handleVisibilityChange = () => {
            const t = this.container,
              e = t.actualOptions;
            this._mouseTouchFinish(),
              e.pauseOnBlur &&
                (document && document.hidden
                  ? ((t.pageHidden = !0), t.pause())
                  : ((t.pageHidden = !1),
                    t.getAnimationStatus() ? t.play(!0) : t.draw(!0)));
          }),
          (this._handleWindowResize = async () => {
            this._resizeTimeout &&
              (clearTimeout(this._resizeTimeout), delete this._resizeTimeout),
              (this._resizeTimeout = setTimeout(async () => {
                const t = this.container.canvas;
                t && (await t.windowResize());
              }, 1e3 * this.container.actualOptions.interactivity.events.resize.delay));
          }),
          (this._manageInteractivityListeners = (t, e) => {
            const i = this._handlers,
              n = this.container,
              a = n.actualOptions,
              u = n.interactivity.element;
            if (!u) return;
            const p = u,
              f = n.canvas.element;
            f && (f.style.pointerEvents = p === f ? "initial" : "none"),
              (a.interactivity.events.onHover.enable ||
                a.interactivity.events.onClick.enable) &&
                (ae(u, r, i.mouseMove, e),
                ae(u, c, i.touchStart, e),
                ae(u, h, i.touchMove, e),
                a.interactivity.events.onClick.enable
                  ? (ae(u, l, i.touchEndClick, e),
                    ae(u, o, i.mouseUp, e),
                    ae(u, s, i.mouseDown, e))
                  : ae(u, l, i.touchEnd, e),
                ae(u, t, i.mouseLeave, e),
                ae(u, d, i.touchCancel, e));
          }),
          (this._manageListeners = (t) => {
            const e = this._handlers,
              i = this.container,
              s = i.actualOptions.interactivity.detectsOn,
              o = i.canvas.element;
            let r = n;
            "window" === s
              ? ((i.interactivity.element = window), (r = a))
              : (i.interactivity.element =
                  "parent" === s && o ? o.parentElement ?? o.parentNode : o),
              this._manageMediaMatch(t),
              this._manageResize(t),
              this._manageInteractivityListeners(r, t),
              document && ae(document, p, e.visibilityChange, t, !1);
          }),
          (this._manageMediaMatch = (t) => {
            const e = this._handlers,
              i = N("(prefers-color-scheme: dark)");
            i &&
              (void 0 === i.addEventListener
                ? void 0 !== i.addListener &&
                  (t
                    ? i.addListener(e.oldThemeChange)
                    : i.removeListener(e.oldThemeChange))
                : ae(i, "change", e.themeChange, t));
          }),
          (this._manageResize = (t) => {
            const e = this._handlers,
              i = this.container;
            if (!i.actualOptions.interactivity.events.resize) return;
            if ("undefined" == typeof ResizeObserver)
              return void ae(window, u, e.resize, t);
            const s = i.canvas.element;
            this._resizeObserver && !t
              ? (s && this._resizeObserver.unobserve(s),
                this._resizeObserver.disconnect(),
                delete this._resizeObserver)
              : !this._resizeObserver &&
                t &&
                s &&
                ((this._resizeObserver = new ResizeObserver(async (t) => {
                  t.find((t) => t.target === s) &&
                    (await this._handleWindowResize());
                })),
                this._resizeObserver.observe(s));
          }),
          (this._mouseDown = () => {
            const { interactivity: t } = this.container;
            if (!t) return;
            const { mouse: e } = t;
            (e.clicking = !0), (e.downPosition = e.position);
          }),
          (this._mouseTouchClick = (t) => {
            const e = this.container,
              i = e.actualOptions,
              { mouse: s } = e.interactivity;
            s.inside = !0;
            let o = !1;
            const n = s.position;
            if (n && i.interactivity.events.onClick.enable) {
              for (const [, t] of e.plugins)
                if (t.clickPositionValid && ((o = t.clickPositionValid(n)), o))
                  break;
              o || this._doMouseTouchClick(t), (s.clicking = !1);
            }
          }),
          (this._mouseTouchFinish = () => {
            const t = this.container.interactivity;
            if (!t) return;
            const e = t.mouse;
            delete e.position,
              delete e.clickPosition,
              delete e.downPosition,
              (t.status = n),
              (e.inside = !1),
              (e.clicking = !1);
          }),
          (this._mouseTouchMove = (t) => {
            const e = this.container,
              i = e.actualOptions,
              s = e.interactivity,
              o = e.canvas.element;
            if (!s || !s.element) return;
            let n;
            if (((s.mouse.inside = !0), t.type.startsWith("pointer"))) {
              this._canPush = !0;
              const e = t;
              if (s.element === window) {
                if (o) {
                  const t = o.getBoundingClientRect();
                  n = { x: e.clientX - t.left, y: e.clientY - t.top };
                }
              } else if ("parent" === i.interactivity.detectsOn) {
                const t = e.target,
                  i = e.currentTarget;
                if (t && i && o) {
                  const s = t.getBoundingClientRect(),
                    a = i.getBoundingClientRect(),
                    r = o.getBoundingClientRect();
                  n = {
                    x: e.offsetX + 2 * s.left - (a.left + r.left),
                    y: e.offsetY + 2 * s.top - (a.top + r.top),
                  };
                } else
                  n = { x: e.offsetX ?? e.clientX, y: e.offsetY ?? e.clientY };
              } else
                e.target === o &&
                  (n = {
                    x: e.offsetX ?? e.clientX,
                    y: e.offsetY ?? e.clientY,
                  });
            } else if (((this._canPush = "touchmove" !== t.type), o)) {
              const e = t,
                i = e.touches[e.touches.length - 1],
                s = o.getBoundingClientRect();
              n = { x: i.clientX - (s.left ?? 0), y: i.clientY - (s.top ?? 0) };
            }
            const a = e.retina.pixelRatio;
            n && ((n.x *= a), (n.y *= a)),
              (s.mouse.position = n),
              (s.status = r);
          }),
          (this._touchEnd = (t) => {
            const e = t,
              i = Array.from(e.changedTouches);
            for (const t of i) this._touches.delete(t.identifier);
            this._mouseTouchFinish();
          }),
          (this._touchEndClick = (t) => {
            const e = t,
              i = Array.from(e.changedTouches);
            for (const t of i) this._touches.delete(t.identifier);
            this._mouseTouchClick(t);
          }),
          (this._touchStart = (t) => {
            const e = t,
              i = Array.from(e.changedTouches);
            for (const t of i)
              this._touches.set(t.identifier, performance.now());
            this._mouseTouchMove(t);
          }),
          (this._canPush = !0),
          (this._touches = new Map()),
          (this._handlers = {
            mouseDown: () => this._mouseDown(),
            mouseLeave: () => this._mouseTouchFinish(),
            mouseMove: (t) => this._mouseTouchMove(t),
            mouseUp: (t) => this._mouseTouchClick(t),
            touchStart: (t) => this._touchStart(t),
            touchMove: (t) => this._mouseTouchMove(t),
            touchEnd: (t) => this._touchEnd(t),
            touchCancel: (t) => this._touchEnd(t),
            touchEndClick: (t) => this._touchEndClick(t),
            visibilityChange: () => this._handleVisibilityChange(),
            themeChange: (t) => this._handleThemeChange(t),
            oldThemeChange: (t) => this._handleThemeChange(t),
            resize: () => {
              this._handleWindowResize();
            },
          });
      }
      addListeners() {
        this._manageListeners(!0);
      }
      removeListeners() {
        this._manageListeners(!1);
      }
    }
    class ce {
      constructor() {
        this.value = "";
      }
      static create(t, e) {
        const i = new ce();
        return (
          i.load(t),
          void 0 !== e && (wt(e) || zt(e) ? i.load({ value: e }) : i.load(e)),
          i
        );
      }
      load(t) {
        void 0 !== t?.value && (this.value = t.value);
      }
    }
    class le {
      constructor() {
        (this.color = new ce()),
          (this.color.value = ""),
          (this.image = ""),
          (this.position = ""),
          (this.repeat = ""),
          (this.size = ""),
          (this.opacity = 1);
      }
      load(t) {
        t &&
          (void 0 !== t.color && (this.color = ce.create(this.color, t.color)),
          void 0 !== t.image && (this.image = t.image),
          void 0 !== t.position && (this.position = t.position),
          void 0 !== t.repeat && (this.repeat = t.repeat),
          void 0 !== t.size && (this.size = t.size),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class he {
      constructor() {
        (this.color = new ce()),
          (this.color.value = "#fff"),
          (this.opacity = 1);
      }
      load(t) {
        t &&
          (void 0 !== t.color && (this.color = ce.create(this.color, t.color)),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class de {
      constructor() {
        (this.composite = "destination-out"),
          (this.cover = new he()),
          (this.enable = !1);
      }
      load(t) {
        if (t) {
          if (
            (void 0 !== t.composite && (this.composite = t.composite),
            void 0 !== t.cover)
          ) {
            const e = t.cover,
              i = wt(t.cover) ? { color: t.cover } : t.cover;
            this.cover.load(void 0 !== e.color ? e : { color: i });
          }
          void 0 !== t.enable && (this.enable = t.enable);
        }
      }
    }
    class ue {
      constructor() {
        (this.enable = !0), (this.zIndex = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.zIndex && (this.zIndex = t.zIndex));
      }
    }
    class pe {
      constructor() {
        (this.enable = !1), (this.mode = []);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode));
      }
    }
    class fe {
      constructor() {
        (this.selectors = []),
          (this.enable = !1),
          (this.mode = []),
          (this.type = "circle");
      }
      load(t) {
        t &&
          (void 0 !== t.selectors && (this.selectors = t.selectors),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.type && (this.type = t.type));
      }
    }
    class me {
      constructor() {
        (this.enable = !1), (this.force = 2), (this.smooth = 10);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.force && (this.force = t.force),
          void 0 !== t.smooth && (this.smooth = t.smooth));
      }
    }
    class ve {
      constructor() {
        (this.enable = !1), (this.mode = []), (this.parallax = new me());
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          this.parallax.load(t.parallax));
      }
    }
    class ye {
      constructor() {
        (this.delay = 0.5), (this.enable = !0);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.delay && (this.delay = t.delay),
          void 0 !== t.enable && (this.enable = t.enable));
      }
    }
    class ge {
      constructor() {
        (this.onClick = new pe()),
          (this.onDiv = new fe()),
          (this.onHover = new ve()),
          (this.resize = new ye());
      }
      load(t) {
        if (!t) return;
        this.onClick.load(t.onClick);
        const e = t.onDiv;
        void 0 !== e &&
          (this.onDiv = dt(e, (t) => {
            const e = new fe();
            return e.load(t), e;
          })),
          this.onHover.load(t.onHover),
          this.resize.load(t.resize);
      }
    }
    class we {
      constructor(t, e) {
        (this._engine = t), (this._container = e);
      }
      load(t) {
        if (!t) return;
        if (!this._container) return;
        const e = this._engine.interactors.get(this._container);
        if (e)
          for (const i of e) i.loadModeOptions && i.loadModeOptions(this, t);
      }
    }
    class be {
      constructor(t, e) {
        (this.detectsOn = "window"),
          (this.events = new ge()),
          (this.modes = new we(t, e));
      }
      load(t) {
        if (!t) return;
        const e = t.detectsOn;
        void 0 !== e && (this.detectsOn = e),
          this.events.load(t.events),
          this.modes.load(t.modes);
      }
    }
    class xe {
      load(t) {
        t &&
          (t.position &&
            (this.position = {
              x: t.position.x ?? 50,
              y: t.position.y ?? 50,
              mode: t.position.mode ?? "percent",
            }),
          t.options && (this.options = st({}, t.options)));
      }
    }
    class _e {
      constructor() {
        (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
      }
      load(t) {
        t &&
          (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
          void 0 !== t.mode &&
            ("screen" === t.mode
              ? (this.mode = "screen")
              : (this.mode = "canvas")),
          void 0 !== t.options && (this.options = st({}, t.options)));
      }
    }
    class ze {
      constructor() {
        (this.auto = !1), (this.mode = "any"), (this.value = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.auto && (this.auto = t.auto),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class Me {
      constructor() {
        (this.name = ""), (this.default = new ze());
      }
      load(t) {
        t &&
          (void 0 !== t.name && (this.name = t.name),
          this.default.load(t.default),
          void 0 !== t.options && (this.options = st({}, t.options)));
      }
    }
    class Ce {
      constructor() {
        (this.count = 0),
          (this.enable = !1),
          (this.speed = 1),
          (this.decay = 0),
          (this.delay = 0),
          (this.sync = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = D(t.count)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = D(t.speed)),
          void 0 !== t.decay && (this.decay = D(t.decay)),
          void 0 !== t.delay && (this.delay = D(t.delay)),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Pe extends Ce {
      constructor() {
        super(), (this.mode = "auto"), (this.startValue = "random");
      }
      load(t) {
        super.load(t),
          t &&
            (void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.startValue && (this.startValue = t.startValue));
      }
    }
    class Se extends Ce {
      constructor() {
        super(), (this.offset = 0), (this.sync = !0);
      }
      load(t) {
        super.load(t), t && void 0 !== t.offset && (this.offset = D(t.offset));
      }
    }
    class ke {
      constructor() {
        (this.h = new Se()), (this.s = new Se()), (this.l = new Se());
      }
      load(t) {
        t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
      }
    }
    class De extends ce {
      constructor() {
        super(), (this.animation = new ke());
      }
      static create(t, e) {
        const i = new De();
        return (
          i.load(t),
          void 0 !== e && (wt(e) || zt(e) ? i.load({ value: e }) : i.load(e)),
          i
        );
      }
      load(t) {
        if ((super.load(t), !t)) return;
        const e = t.animation;
        void 0 !== e &&
          (void 0 !== e.enable
            ? this.animation.h.load(e)
            : this.animation.load(t.animation));
      }
    }
    class Oe {
      constructor() {
        this.speed = 2;
      }
      load(t) {
        t && void 0 !== t.speed && (this.speed = t.speed);
      }
    }
    class Te {
      constructor() {
        (this.enable = !0), (this.retries = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.retries && (this.retries = t.retries));
      }
    }
    class Ie {
      constructor() {
        this.value = 0;
      }
      load(t) {
        t && void 0 !== t.value && (this.value = D(t.value));
      }
    }
    class Ee extends Ie {
      constructor() {
        super(), (this.animation = new Ce());
      }
      load(t) {
        if ((super.load(t), !t)) return;
        const e = t.animation;
        void 0 !== e && this.animation.load(e);
      }
    }
    class Re extends Ee {
      constructor() {
        super(), (this.animation = new Pe());
      }
      load(t) {
        super.load(t);
      }
    }
    class Fe extends Ie {
      constructor() {
        super(), (this.value = 1);
      }
    }
    class Le {
      constructor() {
        (this.horizontal = new Fe()), (this.vertical = new Fe());
      }
      load(t) {
        t &&
          (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical));
      }
    }
    class Ae {
      constructor() {
        (this.absorb = new Oe()),
          (this.bounce = new Le()),
          (this.enable = !1),
          (this.maxSpeed = 50),
          (this.mode = "bounce"),
          (this.overlap = new Te());
      }
      load(t) {
        t &&
          (this.absorb.load(t.absorb),
          this.bounce.load(t.bounce),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.maxSpeed && (this.maxSpeed = D(t.maxSpeed)),
          void 0 !== t.mode && (this.mode = t.mode),
          this.overlap.load(t.overlap));
      }
    }
    class Be {
      constructor() {
        (this.close = !0),
          (this.fill = !0),
          (this.options = {}),
          (this.type = []);
      }
      load(t) {
        if (!t) return;
        const e = t.options;
        if (void 0 !== e)
          for (const t in e) {
            const i = e[t];
            i && (this.options[t] = st(this.options[t] ?? {}, i));
          }
        void 0 !== t.close && (this.close = t.close),
          void 0 !== t.fill && (this.fill = t.fill),
          void 0 !== t.type && (this.type = t.type);
      }
    }
    class Ve {
      constructor() {
        (this.offset = 0), (this.value = 90);
      }
      load(t) {
        t &&
          (void 0 !== t.offset && (this.offset = D(t.offset)),
          void 0 !== t.value && (this.value = D(t.value)));
      }
    }
    class Ue {
      constructor() {
        (this.distance = 200),
          (this.enable = !1),
          (this.rotate = { x: 3e3, y: 3e3 });
      }
      load(t) {
        if (
          t &&
          (void 0 !== t.distance && (this.distance = D(t.distance)),
          void 0 !== t.enable && (this.enable = t.enable),
          t.rotate)
        ) {
          const e = t.rotate.x;
          void 0 !== e && (this.rotate.x = e);
          const i = t.rotate.y;
          void 0 !== i && (this.rotate.y = i);
        }
      }
    }
    class $e {
      constructor() {
        (this.x = 50),
          (this.y = 50),
          (this.mode = "percent"),
          (this.radius = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.x && (this.x = t.x),
          void 0 !== t.y && (this.y = t.y),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.radius && (this.radius = t.radius));
      }
    }
    class qe {
      constructor() {
        (this.acceleration = 9.81),
          (this.enable = !1),
          (this.inverse = !1),
          (this.maxSpeed = 50);
      }
      load(t) {
        t &&
          (void 0 !== t.acceleration && (this.acceleration = D(t.acceleration)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.inverse && (this.inverse = t.inverse),
          void 0 !== t.maxSpeed && (this.maxSpeed = D(t.maxSpeed)));
      }
    }
    class Ge {
      constructor() {
        (this.clamp = !0),
          (this.delay = new Ie()),
          (this.enable = !1),
          (this.options = {});
      }
      load(t) {
        t &&
          (void 0 !== t.clamp && (this.clamp = t.clamp),
          this.delay.load(t.delay),
          void 0 !== t.enable && (this.enable = t.enable),
          (this.generator = t.generator),
          t.options && (this.options = st(this.options, t.options)));
      }
    }
    class He {
      load(t) {
        t &&
          (void 0 !== t.color && (this.color = ce.create(this.color, t.color)),
          void 0 !== t.image && (this.image = t.image));
      }
    }
    class je {
      constructor() {
        (this.enable = !1), (this.length = 10), (this.fill = new He());
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.fill && this.fill.load(t.fill),
          void 0 !== t.length && (this.length = t.length));
      }
    }
    class We {
      constructor() {
        this.default = "out";
      }
      load(t) {
        t &&
          (void 0 !== t.default && (this.default = t.default),
          (this.bottom = t.bottom ?? t.default),
          (this.left = t.left ?? t.default),
          (this.right = t.right ?? t.default),
          (this.top = t.top ?? t.default));
      }
    }
    class Ne {
      constructor() {
        (this.acceleration = 0), (this.enable = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.acceleration && (this.acceleration = D(t.acceleration)),
          void 0 !== t.enable && (this.enable = t.enable),
          t.position && (this.position = st({}, t.position)));
      }
    }
    class Xe {
      constructor() {
        (this.angle = new Ve()),
          (this.attract = new Ue()),
          (this.center = new $e()),
          (this.decay = 0),
          (this.distance = {}),
          (this.direction = "none"),
          (this.drift = 0),
          (this.enable = !1),
          (this.gravity = new qe()),
          (this.path = new Ge()),
          (this.outModes = new We()),
          (this.random = !1),
          (this.size = !1),
          (this.speed = 2),
          (this.spin = new Ne()),
          (this.straight = !1),
          (this.trail = new je()),
          (this.vibrate = !1),
          (this.warp = !1);
      }
      load(t) {
        if (!t) return;
        this.angle.load(bt(t.angle) ? { value: t.angle } : t.angle),
          this.attract.load(t.attract),
          this.center.load(t.center),
          void 0 !== t.decay && (this.decay = D(t.decay)),
          void 0 !== t.direction && (this.direction = t.direction),
          void 0 !== t.distance &&
            (this.distance = bt(t.distance)
              ? { horizontal: t.distance, vertical: t.distance }
              : { ...t.distance }),
          void 0 !== t.drift && (this.drift = D(t.drift)),
          void 0 !== t.enable && (this.enable = t.enable),
          this.gravity.load(t.gravity);
        const e = t.outModes;
        void 0 !== e &&
          (_t(e) ? this.outModes.load(e) : this.outModes.load({ default: e })),
          this.path.load(t.path),
          void 0 !== t.random && (this.random = t.random),
          void 0 !== t.size && (this.size = t.size),
          void 0 !== t.speed && (this.speed = D(t.speed)),
          this.spin.load(t.spin),
          void 0 !== t.straight && (this.straight = t.straight),
          this.trail.load(t.trail),
          void 0 !== t.vibrate && (this.vibrate = t.vibrate),
          void 0 !== t.warp && (this.warp = t.warp);
      }
    }
    class Ye extends Pe {
      constructor() {
        super(), (this.destroy = "none"), (this.speed = 2);
      }
      load(t) {
        super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy);
      }
    }
    class Ze extends Re {
      constructor() {
        super(), (this.animation = new Ye()), (this.value = 1);
      }
      load(t) {
        if (!t) return;
        super.load(t);
        const e = t.animation;
        void 0 !== e && this.animation.load(e);
      }
    }
    class Qe {
      constructor() {
        (this.enable = !1), (this.width = 1920), (this.height = 1080);
      }
      load(t) {
        if (!t) return;
        void 0 !== t.enable && (this.enable = t.enable);
        const e = t.width;
        void 0 !== e && (this.width = e);
        const i = t.height;
        void 0 !== i && (this.height = i);
      }
    }
    class Je {
      constructor() {
        (this.mode = "delete"), (this.value = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class Ke {
      constructor() {
        (this.density = new Qe()), (this.limit = new Je()), (this.value = 0);
      }
      load(t) {
        t &&
          (this.density.load(t.density),
          this.limit.load(t.limit),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class ti {
      constructor() {
        (this.blur = 0),
          (this.color = new ce()),
          (this.enable = !1),
          (this.offset = { x: 0, y: 0 }),
          (this.color.value = "#000");
      }
      load(t) {
        t &&
          (void 0 !== t.blur && (this.blur = t.blur),
          (this.color = ce.create(this.color, t.color)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.offset &&
            (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
            void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
      }
    }
    class ei {
      constructor() {
        (this.close = !0),
          (this.fill = !0),
          (this.options = {}),
          (this.type = "circle");
      }
      load(t) {
        if (!t) return;
        const e = t.options;
        if (void 0 !== e)
          for (const t in e) {
            const i = e[t];
            i && (this.options[t] = st(this.options[t] ?? {}, i));
          }
        void 0 !== t.close && (this.close = t.close),
          void 0 !== t.fill && (this.fill = t.fill),
          void 0 !== t.type && (this.type = t.type);
      }
    }
    class ii extends Pe {
      constructor() {
        super(), (this.destroy = "none"), (this.speed = 5);
      }
      load(t) {
        super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy);
      }
    }
    class si extends Re {
      constructor() {
        super(), (this.animation = new ii()), (this.value = 3);
      }
      load(t) {
        if ((super.load(t), !t)) return;
        const e = t.animation;
        void 0 !== e && this.animation.load(e);
      }
    }
    class oi {
      constructor() {
        this.width = 0;
      }
      load(t) {
        t &&
          (void 0 !== t.color && (this.color = De.create(this.color, t.color)),
          void 0 !== t.width && (this.width = D(t.width)),
          void 0 !== t.opacity && (this.opacity = D(t.opacity)));
      }
    }
    class ni extends Ie {
      constructor() {
        super(),
          (this.opacityRate = 1),
          (this.sizeRate = 1),
          (this.velocityRate = 1);
      }
      load(t) {
        super.load(t),
          t &&
            (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
            void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
            void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate));
      }
    }
    class ai {
      constructor(t, e) {
        (this._engine = t),
          (this._container = e),
          (this.bounce = new Le()),
          (this.collisions = new Ae()),
          (this.color = new De()),
          (this.color.value = "#fff"),
          (this.effect = new Be()),
          (this.groups = {}),
          (this.move = new Xe()),
          (this.number = new Ke()),
          (this.opacity = new Ze()),
          (this.reduceDuplicates = !1),
          (this.shadow = new ti()),
          (this.shape = new ei()),
          (this.size = new si()),
          (this.stroke = new oi()),
          (this.zIndex = new ni());
      }
      load(t) {
        if (!t) return;
        if (void 0 !== t.groups)
          for (const e of Object.keys(t.groups)) {
            if (!Object.hasOwn(t.groups, e)) continue;
            const i = t.groups[e];
            void 0 !== i && (this.groups[e] = st(this.groups[e] ?? {}, i));
          }
        void 0 !== t.reduceDuplicates &&
          (this.reduceDuplicates = t.reduceDuplicates),
          this.bounce.load(t.bounce),
          this.color.load(De.create(this.color, t.color)),
          this.effect.load(t.effect),
          this.move.load(t.move),
          this.number.load(t.number),
          this.opacity.load(t.opacity),
          this.shape.load(t.shape),
          this.size.load(t.size),
          this.shadow.load(t.shadow),
          this.zIndex.load(t.zIndex),
          this.collisions.load(t.collisions),
          void 0 !== t.interactivity &&
            (this.interactivity = st({}, t.interactivity));
        const e = t.stroke;
        if (
          (e &&
            (this.stroke = dt(e, (t) => {
              const e = new oi();
              return e.load(t), e;
            })),
          this._container)
        ) {
          const e = this._engine.updaters.get(this._container);
          if (e) for (const i of e) i.loadOptions && i.loadOptions(this, t);
          const i = this._engine.interactors.get(this._container);
          if (i)
            for (const e of i)
              e.loadParticlesOptions && e.loadParticlesOptions(this, t);
        }
      }
    }
    function ri(t, ...e) {
      for (const i of e) t.load(i);
    }
    function ci(t, e, ...i) {
      const s = new ai(t, e);
      return ri(s, ...i), s;
    }
    class li {
      constructor(t, e) {
        (this._findDefaultTheme = (t) =>
          this.themes.find((e) => e.default.value && e.default.mode === t) ??
          this.themes.find((t) => t.default.value && "any" === t.default.mode)),
          (this._importPreset = (t) => {
            this.load(this._engine.getPreset(t));
          }),
          (this._engine = t),
          (this._container = e),
          (this.autoPlay = !0),
          (this.background = new le()),
          (this.backgroundMask = new de()),
          (this.clear = !0),
          (this.defaultThemes = {}),
          (this.delay = 0),
          (this.fullScreen = new ue()),
          (this.detectRetina = !0),
          (this.duration = 0),
          (this.fpsLimit = 120),
          (this.interactivity = new be(t, e)),
          (this.manualParticles = []),
          (this.particles = ci(this._engine, this._container)),
          (this.pauseOnBlur = !0),
          (this.pauseOnOutsideViewport = !0),
          (this.responsive = []),
          (this.smooth = !1),
          (this.style = {}),
          (this.themes = []),
          (this.zLayers = 100);
      }
      load(t) {
        if (!t) return;
        void 0 !== t.preset && dt(t.preset, (t) => this._importPreset(t)),
          void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
          void 0 !== t.clear && (this.clear = t.clear),
          void 0 !== t.name && (this.name = t.name),
          void 0 !== t.delay && (this.delay = D(t.delay));
        const e = t.detectRetina;
        void 0 !== e && (this.detectRetina = e),
          void 0 !== t.duration && (this.duration = D(t.duration));
        const i = t.fpsLimit;
        void 0 !== i && (this.fpsLimit = i),
          void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
          void 0 !== t.pauseOnOutsideViewport &&
            (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
          void 0 !== t.zLayers && (this.zLayers = t.zLayers),
          this.background.load(t.background);
        const s = t.fullScreen;
        gt(s) ? (this.fullScreen.enable = s) : this.fullScreen.load(s),
          this.backgroundMask.load(t.backgroundMask),
          this.interactivity.load(t.interactivity),
          t.manualParticles &&
            (this.manualParticles = t.manualParticles.map((t) => {
              const e = new xe();
              return e.load(t), e;
            })),
          this.particles.load(t.particles),
          (this.style = st(this.style, t.style)),
          this._engine.loadOptions(this, t),
          void 0 !== t.smooth && (this.smooth = t.smooth);
        const o = this._engine.interactors.get(this._container);
        if (o) for (const e of o) e.loadOptions && e.loadOptions(this, t);
        if (void 0 !== t.responsive)
          for (const e of t.responsive) {
            const t = new _e();
            t.load(e), this.responsive.push(t);
          }
        if (
          (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth),
          void 0 !== t.themes)
        )
          for (const e of t.themes) {
            const t = this.themes.find((t) => t.name === e.name);
            if (t) t.load(e);
            else {
              const t = new Me();
              t.load(e), this.themes.push(t);
            }
          }
        (this.defaultThemes.dark = this._findDefaultTheme("dark")?.name),
          (this.defaultThemes.light = this._findDefaultTheme("light")?.name);
      }
      setResponsive(t, e, i) {
        this.load(i);
        const s = this.responsive.find((i) =>
          "screen" === i.mode && screen
            ? i.maxWidth > screen.availWidth
            : i.maxWidth * e > t
        );
        return this.load(s?.options), s?.maxWidth;
      }
      setTheme(t) {
        if (t) {
          const e = this.themes.find((e) => e.name === t);
          e && this.load(e.options);
        } else {
          const t = N("(prefers-color-scheme: dark)"),
            e = t && t.matches,
            i = this._findDefaultTheme(e ? "dark" : "light");
          i && this.load(i.options);
        }
      }
    }
    class hi {
      constructor(t, e) {
        (this.container = e),
          (this._engine = t),
          (this._interactors = t.getInteractors(this.container, !0)),
          (this._externalInteractors = []),
          (this._particleInteractors = []);
      }
      async externalInteract(t) {
        for (const e of this._externalInteractors)
          e.isEnabled() && (await e.interact(t));
      }
      handleClickMode(t) {
        for (const e of this._externalInteractors)
          e.handleClickMode && e.handleClickMode(t);
      }
      init() {
        (this._externalInteractors = []), (this._particleInteractors = []);
        for (const t of this._interactors) {
          switch (t.type) {
            case "external":
              this._externalInteractors.push(t);
              break;
            case "particles":
              this._particleInteractors.push(t);
          }
          t.init();
        }
      }
      async particlesInteract(t, e) {
        for (const i of this._externalInteractors) i.clear(t, e);
        for (const i of this._particleInteractors)
          i.isEnabled(t) && (await i.interact(t, e));
      }
      async reset(t) {
        for (const e of this._externalInteractors) e.isEnabled() && e.reset(t);
        for (const e of this._particleInteractors) e.isEnabled(t) && e.reset(t);
      }
    }
    function di(t) {
      if (!Z(t.outMode, t.checkModes)) return;
      const e = 2 * t.radius;
      t.coord > t.maxCoord - e
        ? t.setCb(-t.radius)
        : t.coord < e && t.setCb(t.radius);
    }
    class ui {
      constructor(t, e, i, s, o, n) {
        (this.container = i),
          (this._calcPosition = (t, e, i, s = 0) => {
            for (const [, s] of t.plugins) {
              const t =
                void 0 !== s.particlePosition
                  ? s.particlePosition(e, this)
                  : void 0;
              if (t) return m.create(t.x, t.y, i);
            }
            const o = B({ size: t.canvas.size, position: e }),
              n = m.create(o.x, o.y, i),
              a = this.getRadius(),
              r = this.options.move.outModes,
              c = (e) => {
                di({
                  outMode: e,
                  checkModes: ["bounce", "bounce-horizontal"],
                  coord: n.x,
                  maxCoord: t.canvas.size.width,
                  setCb: (t) => (n.x += t),
                  radius: a,
                });
              },
              l = (e) => {
                di({
                  outMode: e,
                  checkModes: ["bounce", "bounce-vertical"],
                  coord: n.y,
                  maxCoord: t.canvas.size.height,
                  setCb: (t) => (n.y += t),
                  radius: a,
                });
              };
            return (
              c(r.left ?? r.default),
              c(r.right ?? r.default),
              l(r.top ?? r.default),
              l(r.bottom ?? r.default),
              this._checkOverlap(n, s)
                ? this._calcPosition(t, void 0, i, s + 1)
                : n
            );
          }),
          (this._calculateVelocity = () => {
            const t = E(this.direction).copy(),
              e = this.options.move;
            if ("inside" === e.direction || "outside" === e.direction) return t;
            const i = (Math.PI / 180) * P(e.angle.value),
              s = (Math.PI / 180) * P(e.angle.offset),
              o = { left: s - 0.5 * i, right: s + 0.5 * i };
            return (
              e.straight || (t.angle += C(D(o.left, o.right))),
              e.random && "number" == typeof e.speed && (t.length *= _()),
              t
            );
          }),
          (this._checkOverlap = (t, e = 0) => {
            const i = this.options.collisions,
              s = this.getRadius();
            if (!i.enable) return !1;
            const o = i.overlap;
            if (o.enable) return !1;
            const n = o.retries;
            if (n >= 0 && e > n)
              throw new Error(
                `${f} particle is overlapping and can't be placed`
              );
            return !!this.container.particles.find(
              (e) => T(t, e.position) < s + e.getRadius()
            );
          }),
          (this._getRollColor = (t) => {
            if (!t || !this.roll || (!this.backColor && !this.roll.alter))
              return t;
            const e = this.roll.horizontal && this.roll.vertical ? 2 : 1,
              i = this.roll.horizontal ? 0.5 * Math.PI : 0;
            return Math.floor(((this.roll.angle ?? 0) + i) / (Math.PI / e)) % 2
              ? this.backColor
                ? this.backColor
                : this.roll.alter
                ? se(t, this.roll.alter.type, this.roll.alter.value)
                : t
              : t;
          }),
          (this._initPosition = (t) => {
            const e = this.container,
              i = P(this.options.zIndex.value);
            (this.position = this._calcPosition(e, t, z(i, 0, e.zLayers))),
              (this.initialPosition = this.position.copy());
            const s = e.canvas.size;
            switch (
              ((this.moveCenter = {
                ...vt(this.options.move.center, s),
                radius: this.options.move.center.radius ?? 0,
                mode: this.options.move.center.mode ?? "percent",
              }),
              (this.direction = I(
                this.options.move.direction,
                this.position,
                this.moveCenter
              )),
              this.options.move.direction)
            ) {
              case "inside":
                this.outType = "inside";
                break;
              case "outside":
                this.outType = "outside";
            }
            this.offset = v.origin;
          }),
          (this._engine = t),
          this.init(e, s, o, n);
      }
      destroy(t) {
        if (this.unbreakable || this.destroyed) return;
        (this.destroyed = !0),
          (this.bubble.inRange = !1),
          (this.slow.inRange = !1);
        const e = this.container,
          i = this.pathGenerator,
          s = e.shapeDrawers.get(this.shape);
        s && s.particleDestroy && s.particleDestroy(this);
        for (const [, i] of e.plugins)
          i.particleDestroyed && i.particleDestroyed(this, t);
        for (const i of e.particles.updaters)
          i.particleDestroyed && i.particleDestroyed(this, t);
        i && i.reset(this),
          this._engine.dispatchEvent("particleDestroyed", {
            container: this.container,
            data: { particle: this },
          });
      }
      draw(t) {
        const e = this.container,
          i = e.canvas;
        for (const [, s] of e.plugins) i.drawParticlePlugin(s, this, t);
        i.drawParticle(this, t);
      }
      getFillColor() {
        return this._getRollColor(this.bubble.color ?? Ht(this.color));
      }
      getMass() {
        return this.getRadius() ** 2 * Math.PI * 0.5;
      }
      getPosition() {
        return {
          x: this.position.x + this.offset.x,
          y: this.position.y + this.offset.y,
          z: this.position.z,
        };
      }
      getRadius() {
        return this.bubble.radius ?? this.size.value;
      }
      getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? Ht(this.strokeColor));
      }
      init(t, e, i, s) {
        const o = this.container,
          n = this._engine;
        (this.id = t),
          (this.group = s),
          (this.effectClose = !0),
          (this.effectFill = !0),
          (this.shapeClose = !0),
          (this.shapeFill = !0),
          (this.pathRotation = !1),
          (this.lastPathTime = 0),
          (this.destroyed = !1),
          (this.unbreakable = !1),
          (this.rotation = 0),
          (this.misplaced = !1),
          (this.retina = { maxDistance: {} }),
          (this.outType = "normal"),
          (this.ignoresResizeRatio = !0);
        const a = o.retina.pixelRatio,
          r = o.actualOptions,
          c = ci(this._engine, o, r.particles),
          l = c.effect.type,
          h = c.shape.type,
          { reduceDuplicates: d } = c;
        (this.effect = ut(l, this.id, d)), (this.shape = ut(h, this.id, d));
        const u = c.effect,
          p = c.shape;
        if (i) {
          if (i.effect && i.effect.type) {
            const t = ut(i.effect.type, this.id, d);
            t && ((this.effect = t), u.load(i.effect));
          }
          if (i.shape && i.shape.type) {
            const t = ut(i.shape.type, this.id, d);
            t && ((this.shape = t), p.load(i.shape));
          }
        }
        (this.effectData = (function (t, e, i, s) {
          const o = e.options[t];
          if (o) return st({ close: e.close, fill: e.fill }, ut(o, i, s));
        })(this.effect, u, this.id, d)),
          (this.shapeData = (function (t, e, i, s) {
            const o = e.options[t];
            if (o) return st({ close: e.close, fill: e.fill }, ut(o, i, s));
          })(this.shape, p, this.id, d)),
          c.load(i);
        const f = this.effectData;
        f && c.load(f.particles);
        const m = this.shapeData;
        m && c.load(m.particles);
        const v = new be(n, o);
        v.load(o.actualOptions.interactivity),
          v.load(c.interactivity),
          (this.interactivity = v),
          (this.effectFill = f?.fill ?? c.effect.fill),
          (this.effectClose = f?.close ?? c.effect.close),
          (this.shapeFill = m?.fill ?? c.shape.fill),
          (this.shapeClose = m?.close ?? c.shape.close),
          (this.options = c);
        const y = this.options.move.path;
        (this.pathDelay = 1e3 * P(y.delay.value)),
          y.generator &&
            ((this.pathGenerator = this._engine.getPathGenerator(y.generator)),
            this.pathGenerator &&
              o.addPath(y.generator, this.pathGenerator) &&
              this.pathGenerator.init(o)),
          o.retina.initParticle(this),
          (this.size = ft(this.options.size, a)),
          (this.bubble = { inRange: !1 }),
          (this.slow = { inRange: !1, factor: 1 }),
          this._initPosition(e),
          (this.initialVelocity = this._calculateVelocity()),
          (this.velocity = this.initialVelocity.copy()),
          (this.moveDecay = 1 - P(this.options.move.decay));
        const g = o.particles;
        g.setLastZIndex(this.position.z),
          (this.zIndexFactor = this.position.z / o.zLayers),
          (this.sides = 24);
        let w = o.effectDrawers.get(this.effect);
        w ||
          ((w = this._engine.getEffectDrawer(this.effect)),
          w && o.effectDrawers.set(this.effect, w)),
          w && w.loadEffect && w.loadEffect(this);
        let b = o.shapeDrawers.get(this.shape);
        b ||
          ((b = this._engine.getShapeDrawer(this.shape)),
          b && o.shapeDrawers.set(this.shape, b)),
          b && b.loadShape && b.loadShape(this);
        const x = b?.getSidesCount;
        x && (this.sides = x(this)),
          (this.spawning = !1),
          (this.shadowColor = Dt(this.options.shadow.color));
        for (const t of g.updaters) t.init(this);
        for (const t of g.movers) t.init && t.init(this);
        w && w.particleInit && w.particleInit(o, this),
          b && b.particleInit && b.particleInit(o, this);
        for (const [, t] of o.plugins)
          t.particleCreated && t.particleCreated(this);
      }
      isInsideCanvas() {
        const t = this.getRadius(),
          e = this.container.canvas.size,
          i = this.position;
        return (
          i.x >= -t && i.y >= -t && i.y <= e.height + t && i.x <= e.width + t
        );
      }
      isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
      }
      reset() {
        for (const t of this.container.particles.updaters)
          t.reset && t.reset(this);
      }
    }
    class pi {
      constructor(t, e) {
        (this.position = t), (this.particle = e);
      }
    }
    class fi {
      constructor(t, e) {
        this.position = { x: t, y: e };
      }
    }
    class mi extends fi {
      constructor(t, e, i, s) {
        super(t, e), (this.size = { height: s, width: i });
      }
      contains(t) {
        const e = this.size.width,
          i = this.size.height,
          s = this.position;
        return t.x >= s.x && t.x <= s.x + e && t.y >= s.y && t.y <= s.y + i;
      }
      intersects(t) {
        t instanceof vi && t.intersects(this);
        const e = this.size.width,
          i = this.size.height,
          s = this.position,
          o = t.position,
          n = t instanceof mi ? t.size : { width: 0, height: 0 },
          a = n.width,
          r = n.height;
        return o.x < s.x + e && o.x + a > s.x && o.y < s.y + i && o.y + r > s.y;
      }
    }
    class vi extends fi {
      constructor(t, e, i) {
        super(t, e), (this.radius = i);
      }
      contains(t) {
        return T(t, this.position) <= this.radius;
      }
      intersects(t) {
        const e = this.position,
          i = t.position,
          s = Math.abs(i.x - e.x),
          o = Math.abs(i.y - e.y),
          n = this.radius;
        if (t instanceof vi) {
          return n + t.radius > Math.sqrt(s ** 2 + o ** 2);
        }
        if (t instanceof mi) {
          const { width: e, height: i } = t.size;
          return (
            Math.pow(s - e, 2) + Math.pow(o - i, 2) <= n ** 2 ||
            (s <= n + e && o <= n + i) ||
            s <= e ||
            o <= i
          );
        }
        return !1;
      }
    }
    class yi {
      constructor(t, e) {
        (this.rectangle = t),
          (this.capacity = e),
          (this._subdivide = () => {
            const { x: t, y: e } = this.rectangle.position,
              { width: i, height: s } = this.rectangle.size,
              { capacity: o } = this;
            for (let n = 0; n < 4; n++)
              this._subs.push(
                new yi(
                  new mi(
                    t + 0.5 * i * (n % 2),
                    e + 0.5 * s * (Math.round(0.5 * n) - (n % 2)),
                    0.5 * i,
                    0.5 * s
                  ),
                  o
                )
              );
            this._divided = !0;
          }),
          (this._points = []),
          (this._divided = !1),
          (this._subs = []);
      }
      insert(t) {
        return (
          !!this.rectangle.contains(t.position) &&
          (this._points.length < this.capacity
            ? (this._points.push(t), !0)
            : (this._divided || this._subdivide(),
              this._subs.some((e) => e.insert(t))))
        );
      }
      query(t, e, i) {
        const s = i || [];
        if (!t.intersects(this.rectangle)) return [];
        for (const i of this._points)
          (!t.contains(i.position) &&
            T(t.position, i.position) > i.particle.getRadius() &&
            (!e || e(i.particle))) ||
            s.push(i.particle);
        if (this._divided) for (const i of this._subs) i.query(t, e, s);
        return s;
      }
      queryCircle(t, e, i) {
        return this.query(new vi(t.x, t.y, e), i);
      }
      queryRectangle(t, e, i) {
        return this.query(new mi(t.x, t.y, e.width, e.height), i);
      }
    }
    const gi = (t) => {
      const { height: e, width: i } = t;
      return new mi(-0.25 * i, -0.25 * e, 1.5 * i, 1.5 * e);
    };
    class wi {
      constructor(t, e) {
        (this._addToPool = (...t) => {
          for (const e of t) this._pool.push(e);
        }),
          (this._applyDensity = (t, e, i) => {
            const s = t.number;
            if (!t.number.density?.enable)
              return void (void 0 === i
                ? (this._limit = s.limit.value)
                : s.limit && this._groupLimits.set(i, s.limit.value));
            const o = this._initDensityFactor(s.density),
              n = s.value,
              a = s.limit.value > 0 ? s.limit.value : n,
              r = Math.min(n, a) * o + e,
              c = Math.min(
                this.count,
                this.filter((t) => t.group === i).length
              );
            void 0 === i
              ? (this._limit = s.limit.value * o)
              : this._groupLimits.set(i, s.limit.value * o),
              c < r
                ? this.push(Math.abs(r - c), void 0, t, i)
                : c > r && this.removeQuantity(c - r, i);
          }),
          (this._initDensityFactor = (t) => {
            const e = this._container;
            if (!e.canvas.element || !t.enable) return 1;
            const i = e.canvas.element,
              s = e.retina.pixelRatio;
            return (i.width * i.height) / (t.height * t.width * s ** 2);
          }),
          (this._pushParticle = (t, e, i, s) => {
            try {
              let o = this._pool.pop();
              o
                ? o.init(this._nextId, t, e, i)
                : (o = new ui(
                    this._engine,
                    this._nextId,
                    this._container,
                    t,
                    e,
                    i
                  ));
              let n = !0;
              if ((s && (n = s(o)), !n)) return;
              return (
                this._array.push(o),
                this._zArray.push(o),
                this._nextId++,
                this._engine.dispatchEvent("particleAdded", {
                  container: this._container,
                  data: { particle: o },
                }),
                o
              );
            } catch (t) {
              return void G().warning(`${f} adding particle: ${t}`);
            }
          }),
          (this._removeParticle = (t, e, i) => {
            const s = this._array[t];
            if (!s || s.group !== e) return !1;
            const o = this._zArray.indexOf(s);
            return (
              this._array.splice(t, 1),
              this._zArray.splice(o, 1),
              s.destroy(i),
              this._engine.dispatchEvent("particleRemoved", {
                container: this._container,
                data: { particle: s },
              }),
              this._addToPool(s),
              !0
            );
          }),
          (this._engine = t),
          (this._container = e),
          (this._nextId = 0),
          (this._array = []),
          (this._zArray = []),
          (this._pool = []),
          (this._limit = 0),
          (this._groupLimits = new Map()),
          (this._needsSort = !1),
          (this._lastZIndex = 0),
          (this._interactionManager = new hi(t, e));
        const i = e.canvas.size;
        (this.quadTree = new yi(gi(i), 4)),
          (this.movers = this._engine.getMovers(e, !0)),
          (this.updaters = this._engine.getUpdaters(e, !0));
      }
      get count() {
        return this._array.length;
      }
      addManualParticles() {
        const t = this._container,
          e = t.actualOptions;
        for (const i of e.manualParticles)
          this.addParticle(
            i.position ? vt(i.position, t.canvas.size) : void 0,
            i.options
          );
      }
      addParticle(t, e, i, s) {
        const o = this._container.actualOptions.particles.number.limit,
          n =
            void 0 === i
              ? this._limit
              : this._groupLimits.get(i) ?? this._limit,
          a = this.count;
        if (n > 0)
          if ("delete" === o.mode) {
            const t = a + 1 - n;
            t > 0 && this.removeQuantity(t);
          } else if ("wait" === o.mode && a >= n) return;
        return this._pushParticle(t, e, i, s);
      }
      clear() {
        (this._array = []), (this._zArray = []);
      }
      destroy() {
        (this._array = []),
          (this._zArray = []),
          (this.movers = []),
          (this.updaters = []);
      }
      async draw(t) {
        const e = this._container,
          i = e.canvas;
        i.clear(), await this.update(t);
        for (const [, s] of e.plugins) i.drawPlugin(s, t);
        for (const e of this._zArray) e.draw(t);
      }
      filter(t) {
        return this._array.filter(t);
      }
      find(t) {
        return this._array.find(t);
      }
      get(t) {
        return this._array[t];
      }
      handleClickMode(t) {
        this._interactionManager.handleClickMode(t);
      }
      init() {
        const t = this._container,
          e = t.actualOptions;
        (this._lastZIndex = 0), (this._needsSort = !1);
        let i = !1;
        (this.updaters = this._engine.getUpdaters(t, !0)),
          this._interactionManager.init();
        for (const [, e] of t.plugins)
          if (
            (void 0 !== e.particlesInitialization &&
              (i = e.particlesInitialization()),
            i)
          )
            break;
        this._interactionManager.init();
        for (const [, e] of t.pathGenerators) e.init(t);
        if ((this.addManualParticles(), !i)) {
          const t = e.particles,
            i = t.groups;
          for (const e in i) {
            const s = i[e];
            for (
              let i = this.count, o = 0;
              o < s.number?.value && i < t.number.value;
              i++, o++
            )
              this.addParticle(void 0, s, e);
          }
          for (let e = this.count; e < t.number.value; e++) this.addParticle();
        }
      }
      push(t, e, i, s) {
        for (let o = 0; o < t; o++) this.addParticle(e?.position, i, s);
      }
      async redraw() {
        this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
      }
      remove(t, e, i) {
        this.removeAt(this._array.indexOf(t), void 0, e, i);
      }
      removeAt(t, e = 1, i, s) {
        if (t < 0 || t > this.count) return;
        let o = 0;
        for (let n = t; o < e && n < this.count; n++)
          this._removeParticle(n--, i, s) && o++;
      }
      removeQuantity(t, e) {
        this.removeAt(0, t, e);
      }
      setDensity() {
        const t = this._container.actualOptions,
          e = t.particles.groups;
        for (const t in e) this._applyDensity(e[t], 0, t);
        this._applyDensity(t.particles, t.manualParticles.length);
      }
      setLastZIndex(t) {
        (this._lastZIndex = t),
          (this._needsSort = this._needsSort || this._lastZIndex < t);
      }
      setResizeFactor(t) {
        this._resizeFactor = t;
      }
      async update(t) {
        const e = this._container,
          i = new Set();
        this.quadTree = new yi(gi(e.canvas.size), 4);
        for (const [, t] of e.pathGenerators) t.update();
        for (const [, i] of e.plugins) i.update && (await i.update(t));
        const s = this._resizeFactor;
        for (const e of this._array) {
          s &&
            !e.ignoresResizeRatio &&
            ((e.position.x *= s.width),
            (e.position.y *= s.height),
            (e.initialPosition.x *= s.width),
            (e.initialPosition.y *= s.height)),
            (e.ignoresResizeRatio = !1),
            await this._interactionManager.reset(e);
          for (const [, i] of this._container.plugins) {
            if (e.destroyed) break;
            i.particleUpdate && i.particleUpdate(e, t);
          }
          for (const i of this.movers) i.isEnabled(e) && i.move(e, t);
          e.destroyed
            ? i.add(e)
            : this.quadTree.insert(new pi(e.getPosition(), e));
        }
        if (i.size) {
          const t = (t) => !i.has(t);
          (this._array = this.filter(t)),
            (this._zArray = this._zArray.filter(t));
          for (const t of i)
            this._engine.dispatchEvent("particleRemoved", {
              container: this._container,
              data: { particle: t },
            });
          this._addToPool(...i);
        }
        await this._interactionManager.externalInteract(t);
        for (const e of this._array) {
          for (const i of this.updaters) i.update(e, t);
          e.destroyed ||
            e.spawning ||
            (await this._interactionManager.particlesInteract(e, t));
        }
        if ((delete this._resizeFactor, this._needsSort)) {
          const t = this._zArray;
          t.sort((t, e) => e.position.z - t.position.z || t.id - e.id),
            (this._lastZIndex = t[t.length - 1].position.z),
            (this._needsSort = !1);
        }
      }
    }
    class bi {
      constructor(t) {
        (this.container = t), (this.pixelRatio = 1), (this.reduceFactor = 1);
      }
      init() {
        const t = this.container,
          e = t.actualOptions;
        (this.pixelRatio =
          !e.detectRetina || j() ? 1 : window.devicePixelRatio),
          (this.reduceFactor = 1);
        const i = this.pixelRatio,
          s = t.canvas;
        if (s.element) {
          const t = s.element;
          (s.size.width = t.offsetWidth * i),
            (s.size.height = t.offsetHeight * i);
        }
        const o = e.particles,
          n = o.move;
        (this.maxSpeed = P(n.gravity.maxSpeed) * i),
          (this.sizeAnimationSpeed = P(o.size.animation.speed) * i);
      }
      initParticle(t) {
        const e = t.options,
          i = this.pixelRatio,
          s = e.move,
          o = s.distance,
          n = t.retina;
        (n.moveDrift = P(s.drift) * i),
          (n.moveSpeed = P(s.speed) * i),
          (n.sizeAnimationSpeed = P(e.size.animation.speed) * i);
        const a = n.maxDistance;
        (a.horizontal = void 0 !== o.horizontal ? o.horizontal * i : void 0),
          (a.vertical = void 0 !== o.vertical ? o.vertical * i : void 0),
          (n.maxSpeed = P(s.gravity.maxSpeed) * i);
      }
    }
    function xi(t) {
      return t && !t.destroyed;
    }
    function _i(t, e, ...i) {
      const s = new li(t, e);
      return ri(s, ...i), s;
    }
    class zi {
      constructor(t, e, i) {
        (this._intersectionManager = (t) => {
          if (xi(this) && this.actualOptions.pauseOnOutsideViewport)
            for (const e of t)
              e.target === this.interactivity.element &&
                (e.isIntersecting ? this.play : this.pause)();
        }),
          (this._nextFrame = async (t) => {
            try {
              if (
                !this._smooth &&
                void 0 !== this._lastFrameTime &&
                t < this._lastFrameTime + 1e3 / this.fpsLimit
              )
                return void this.draw(!1);
              this._lastFrameTime ??= t;
              const e = (function (t, e = 60, i = !1) {
                return { value: t, factor: i ? 60 / e : (60 * t) / 1e3 };
              })(t - this._lastFrameTime, this.fpsLimit, this._smooth);
              if (
                (this.addLifeTime(e.value),
                (this._lastFrameTime = t),
                e.value > 1e3)
              )
                return void this.draw(!1);
              if ((await this.particles.draw(e), !this.alive()))
                return void this.destroy();
              this.getAnimationStatus() && this.draw(!1);
            } catch (t) {
              G().error(`${f} in animation loop`, t);
            }
          }),
          (this._engine = t),
          (this.id = Symbol(e)),
          (this.fpsLimit = 120),
          (this._smooth = !1),
          (this._delay = 0),
          (this._duration = 0),
          (this._lifeTime = 0),
          (this._firstStart = !0),
          (this.started = !1),
          (this.destroyed = !1),
          (this._paused = !0),
          (this._lastFrameTime = 0),
          (this.zLayers = 100),
          (this.pageHidden = !1),
          (this._sourceOptions = i),
          (this._initialSourceOptions = i),
          (this.retina = new bi(this)),
          (this.canvas = new ne(this)),
          (this.particles = new wi(this._engine, this)),
          (this.pathGenerators = new Map()),
          (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
          (this.plugins = new Map()),
          (this.effectDrawers = new Map()),
          (this.shapeDrawers = new Map()),
          (this._options = _i(this._engine, this)),
          (this.actualOptions = _i(this._engine, this)),
          (this._eventListeners = new re(this)),
          (this._intersectionObserver = X((t) => this._intersectionManager(t))),
          this._engine.dispatchEvent("containerBuilt", { container: this });
      }
      get options() {
        return this._options;
      }
      get sourceOptions() {
        return this._sourceOptions;
      }
      addClickHandler(t) {
        if (!xi(this)) return;
        const e = this.interactivity.element;
        if (!e) return;
        const i = (e, i, s) => {
          if (!xi(this)) return;
          const o = this.retina.pixelRatio,
            n = { x: i.x * o, y: i.y * o },
            a = this.particles.quadTree.queryCircle(n, s * o);
          t(e, a);
        };
        let s = !1,
          o = !1;
        e.addEventListener("click", (t) => {
          if (!xi(this)) return;
          const e = t,
            s = { x: e.offsetX || e.clientX, y: e.offsetY || e.clientY };
          i(t, s, 1);
        }),
          e.addEventListener("touchstart", () => {
            xi(this) && ((s = !0), (o = !1));
          }),
          e.addEventListener("touchmove", () => {
            xi(this) && (o = !0);
          }),
          e.addEventListener("touchend", (t) => {
            if (xi(this)) {
              if (s && !o) {
                const e = t;
                let s = e.touches[e.touches.length - 1];
                if (
                  !s &&
                  ((s = e.changedTouches[e.changedTouches.length - 1]), !s)
                )
                  return;
                const o = this.canvas.element,
                  n = o ? o.getBoundingClientRect() : void 0,
                  a = {
                    x: s.clientX - (n ? n.left : 0),
                    y: s.clientY - (n ? n.top : 0),
                  };
                i(t, a, Math.max(s.radiusX, s.radiusY));
              }
              (s = !1), (o = !1);
            }
          }),
          e.addEventListener("touchcancel", () => {
            xi(this) && ((s = !1), (o = !1));
          });
      }
      addLifeTime(t) {
        this._lifeTime += t;
      }
      addPath(t, e, i = !1) {
        return (
          !(!xi(this) || (!i && this.pathGenerators.has(t))) &&
          (this.pathGenerators.set(t, e), !0)
        );
      }
      alive() {
        return !this._duration || this._lifeTime <= this._duration;
      }
      destroy() {
        if (!xi(this)) return;
        this.stop(), this.particles.destroy(), this.canvas.destroy();
        for (const [, t] of this.effectDrawers) t.destroy && t.destroy(this);
        for (const [, t] of this.shapeDrawers) t.destroy && t.destroy(this);
        for (const t of this.effectDrawers.keys()) this.effectDrawers.delete(t);
        for (const t of this.shapeDrawers.keys()) this.shapeDrawers.delete(t);
        this._engine.clearPlugins(this), (this.destroyed = !0);
        const t = this._engine.dom(),
          e = t.findIndex((t) => t === this);
        e >= 0 && t.splice(e, 1),
          this._engine.dispatchEvent("containerDestroyed", { container: this });
      }
      draw(t) {
        if (!xi(this)) return;
        let e = t;
        this._drawAnimationFrame = requestAnimationFrame(async (t) => {
          e && ((this._lastFrameTime = void 0), (e = !1)),
            await this._nextFrame(t);
        });
      }
      async export(t, e = {}) {
        for (const [, i] of this.plugins) {
          if (!i.export) continue;
          const s = await i.export(t, e);
          if (s.supported) return s.blob;
        }
        G().error(`${f} - Export plugin with type ${t} not found`);
      }
      getAnimationStatus() {
        return !this._paused && !this.pageHidden && xi(this);
      }
      handleClickMode(t) {
        if (xi(this)) {
          this.particles.handleClickMode(t);
          for (const [, e] of this.plugins)
            e.handleClickMode && e.handleClickMode(t);
        }
      }
      async init() {
        if (!xi(this)) return;
        const t = this._engine.getSupportedEffects();
        for (const e of t) {
          const t = this._engine.getEffectDrawer(e);
          t && this.effectDrawers.set(e, t);
        }
        const e = this._engine.getSupportedShapes();
        for (const t of e) {
          const e = this._engine.getShapeDrawer(t);
          e && this.shapeDrawers.set(t, e);
        }
        (this._options = _i(
          this._engine,
          this,
          this._initialSourceOptions,
          this.sourceOptions
        )),
          (this.actualOptions = _i(this._engine, this, this._options));
        const i = this._engine.getAvailablePlugins(this);
        for (const [t, e] of i) this.plugins.set(t, e);
        this.retina.init(),
          await this.canvas.init(),
          this.updateActualOptions(),
          this.canvas.initBackground(),
          this.canvas.resize(),
          (this.zLayers = this.actualOptions.zLayers),
          (this._duration = 1e3 * P(this.actualOptions.duration)),
          (this._delay = 1e3 * P(this.actualOptions.delay)),
          (this._lifeTime = 0),
          (this.fpsLimit =
            this.actualOptions.fpsLimit > 0
              ? this.actualOptions.fpsLimit
              : 120),
          (this._smooth = this.actualOptions.smooth);
        for (const [, t] of this.effectDrawers) t.init && (await t.init(this));
        for (const [, t] of this.shapeDrawers) t.init && (await t.init(this));
        for (const [, t] of this.plugins) t.init && (await t.init());
        this._engine.dispatchEvent("containerInit", { container: this }),
          this.particles.init(),
          this.particles.setDensity();
        for (const [, t] of this.plugins)
          t.particlesSetup && t.particlesSetup();
        this._engine.dispatchEvent("particlesSetup", { container: this });
      }
      async loadTheme(t) {
        xi(this) && ((this._currentTheme = t), await this.refresh());
      }
      pause() {
        if (
          xi(this) &&
          (void 0 !== this._drawAnimationFrame &&
            (cancelAnimationFrame(this._drawAnimationFrame),
            delete this._drawAnimationFrame),
          !this._paused)
        ) {
          for (const [, t] of this.plugins) t.pause && t.pause();
          this.pageHidden || (this._paused = !0),
            this._engine.dispatchEvent("containerPaused", { container: this });
        }
      }
      play(t) {
        if (!xi(this)) return;
        const e = this._paused || t;
        if (!this._firstStart || this.actualOptions.autoPlay) {
          if ((this._paused && (this._paused = !1), e))
            for (const [, t] of this.plugins) t.play && t.play();
          this._engine.dispatchEvent("containerPlay", { container: this }),
            this.draw(e || !1);
        } else this._firstStart = !1;
      }
      async refresh() {
        if (xi(this)) return this.stop(), this.start();
      }
      async reset() {
        if (xi(this))
          return (
            (this._initialSourceOptions = void 0),
            (this._options = _i(this._engine, this)),
            (this.actualOptions = _i(this._engine, this, this._options)),
            this.refresh()
          );
      }
      async start() {
        xi(this) &&
          !this.started &&
          (await this.init(),
          (this.started = !0),
          await new Promise((t) => {
            this._delayTimeout = setTimeout(async () => {
              this._eventListeners.addListeners(),
                this.interactivity.element instanceof HTMLElement &&
                  this._intersectionObserver &&
                  this._intersectionObserver.observe(
                    this.interactivity.element
                  );
              for (const [, t] of this.plugins) t.start && (await t.start());
              this._engine.dispatchEvent("containerStarted", {
                container: this,
              }),
                this.play(),
                t();
            }, this._delay);
          }));
      }
      stop() {
        if (xi(this) && this.started) {
          this._delayTimeout &&
            (clearTimeout(this._delayTimeout), delete this._delayTimeout),
            (this._firstStart = !0),
            (this.started = !1),
            this._eventListeners.removeListeners(),
            this.pause(),
            this.particles.clear(),
            this.canvas.stop(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.unobserve(this.interactivity.element);
          for (const [, t] of this.plugins) t.stop && t.stop();
          for (const t of this.plugins.keys()) this.plugins.delete(t);
          (this._sourceOptions = this._options),
            this._engine.dispatchEvent("containerStopped", { container: this });
        }
      }
      updateActualOptions() {
        this.actualOptions.responsive = [];
        const t = this.actualOptions.setResponsive(
          this.canvas.size.width,
          this.retina.pixelRatio,
          this._options
        );
        return (
          this.actualOptions.setTheme(this._currentTheme),
          this._responsiveMaxWidth !== t && ((this._responsiveMaxWidth = t), !0)
        );
      }
    }
    class Mi {
      constructor() {
        this._listeners = new Map();
      }
      addEventListener(t, e) {
        this.removeEventListener(t, e);
        let i = this._listeners.get(t);
        i || ((i = []), this._listeners.set(t, i)), i.push(e);
      }
      dispatchEvent(t, e) {
        const i = this._listeners.get(t);
        i && i.forEach((t) => t(e));
      }
      hasEventListener(t) {
        return !!this._listeners.get(t);
      }
      removeAllEventListeners(t) {
        t ? this._listeners.delete(t) : (this._listeners = new Map());
      }
      removeEventListener(t, e) {
        const i = this._listeners.get(t);
        if (!i) return;
        const s = i.length,
          o = i.indexOf(e);
        o < 0 || (1 === s ? this._listeners.delete(t) : i.splice(o, 1));
      }
    }
    function Ci(t, e, i, s = !1) {
      let o = e.get(t);
      return (
        (o && !s) || ((o = [...i.values()].map((e) => e(t))), e.set(t, o)), o
      );
    }
    class Pi {
      constructor() {
        (this._configs = new Map()),
          (this._domArray = []),
          (this._eventDispatcher = new Mi()),
          (this._initialized = !1),
          (this.plugins = []),
          (this._initializers = {
            interactors: new Map(),
            movers: new Map(),
            updaters: new Map(),
          }),
          (this.interactors = new Map()),
          (this.movers = new Map()),
          (this.updaters = new Map()),
          (this.presets = new Map()),
          (this.effectDrawers = new Map()),
          (this.shapeDrawers = new Map()),
          (this.pathGenerators = new Map());
      }
      get configs() {
        const t = {};
        for (const [e, i] of this._configs) t[e] = i;
        return t;
      }
      get version() {
        return "3.0.3";
      }
      addConfig(t) {
        const e = t.name ?? "default";
        this._configs.set(e, t),
          this._eventDispatcher.dispatchEvent("configAdded", {
            data: { name: e, config: t },
          });
      }
      async addEffect(t, e, i = !0) {
        dt(t, (t) => {
          !this.getEffectDrawer(t) && this.effectDrawers.set(t, e);
        }),
          await this.refresh(i);
      }
      addEventListener(t, e) {
        this._eventDispatcher.addEventListener(t, e);
      }
      async addInteractor(t, e, i = !0) {
        this._initializers.interactors.set(t, e), await this.refresh(i);
      }
      async addMover(t, e, i = !0) {
        this._initializers.movers.set(t, e), await this.refresh(i);
      }
      async addParticleUpdater(t, e, i = !0) {
        this._initializers.updaters.set(t, e), await this.refresh(i);
      }
      async addPathGenerator(t, e, i = !0) {
        !this.getPathGenerator(t) && this.pathGenerators.set(t, e),
          await this.refresh(i);
      }
      async addPlugin(t, e = !0) {
        !this.getPlugin(t.id) && this.plugins.push(t), await this.refresh(e);
      }
      async addPreset(t, e, i = !1, s = !0) {
        (i || !this.getPreset(t)) && this.presets.set(t, e),
          await this.refresh(s);
      }
      async addShape(t, e, i = !0) {
        dt(t, (t) => {
          !this.getShapeDrawer(t) && this.shapeDrawers.set(t, e);
        }),
          await this.refresh(i);
      }
      clearPlugins(t) {
        this.updaters.delete(t),
          this.movers.delete(t),
          this.interactors.delete(t);
      }
      dispatchEvent(t, e) {
        this._eventDispatcher.dispatchEvent(t, e);
      }
      dom() {
        return this._domArray;
      }
      domItem(t) {
        const e = this.dom(),
          i = e[t];
        if (i && !i.destroyed) return i;
        e.splice(t, 1);
      }
      getAvailablePlugins(t) {
        const e = new Map();
        for (const i of this.plugins)
          i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t));
        return e;
      }
      getEffectDrawer(t) {
        return this.effectDrawers.get(t);
      }
      getInteractors(t, e = !1) {
        return Ci(t, this.interactors, this._initializers.interactors, e);
      }
      getMovers(t, e = !1) {
        return Ci(t, this.movers, this._initializers.movers, e);
      }
      getPathGenerator(t) {
        return this.pathGenerators.get(t);
      }
      getPlugin(t) {
        return this.plugins.find((e) => e.id === t);
      }
      getPreset(t) {
        return this.presets.get(t);
      }
      getShapeDrawer(t) {
        return this.shapeDrawers.get(t);
      }
      getSupportedEffects() {
        return this.effectDrawers.keys();
      }
      getSupportedShapes() {
        return this.shapeDrawers.keys();
      }
      getUpdaters(t, e = !1) {
        return Ci(t, this.updaters, this._initializers.updaters, e);
      }
      init() {
        this._initialized || (this._initialized = !0);
      }
      async load(t) {
        const e =
            t.id ?? t.element?.id ?? `tsparticles${Math.floor(1e4 * _())}`,
          { index: s, url: o } = t,
          n = o
            ? await (async function (t) {
                const e = ut(t.url, t.index);
                if (!e) return t.fallback;
                const i = await fetch(e);
                return i.ok
                  ? i.json()
                  : (G().error(`${f} ${i.status} while retrieving config file`),
                    t.fallback);
              })({ fallback: t.options, url: o, index: s })
            : t.options;
        let a = t.element ?? document.getElementById(e);
        a ||
          ((a = document.createElement("div")),
          (a.id = e),
          document.body.append(a));
        const r = ut(n, s),
          c = this.dom(),
          l = c.findIndex((t) => t.id.description === e);
        if (l >= 0) {
          const t = this.domItem(l);
          t && !t.destroyed && (t.destroy(), c.splice(l, 1));
        }
        let h;
        if ("canvas" === a.tagName.toLowerCase())
          (h = a), (h.dataset[i] = "false");
        else {
          const t = a.getElementsByTagName("canvas");
          t.length
            ? ((h = t[0]), (h.dataset[i] = "false"))
            : ((h = document.createElement("canvas")),
              (h.dataset[i] = "true"),
              a.appendChild(h));
        }
        h.style.width || (h.style.width = "100%"),
          h.style.height || (h.style.height = "100%");
        const d = new zi(this, e, r);
        return (
          l >= 0 ? c.splice(l, 0, d) : c.push(d),
          d.canvas.loadCanvas(h),
          await d.start(),
          d
        );
      }
      loadOptions(t, e) {
        for (const i of this.plugins) i.loadOptions(t, e);
      }
      loadParticlesOptions(t, e, ...i) {
        const s = this.updaters.get(t);
        if (s) for (const t of s) t.loadOptions && t.loadOptions(e, ...i);
      }
      async refresh(t = !0) {
        t && this.dom().forEach((t) => t.refresh());
      }
      removeEventListener(t, e) {
        this._eventDispatcher.removeEventListener(t, e);
      }
      setOnClickHandler(t) {
        const e = this.dom();
        if (!e.length)
          throw new Error(
            `${f} can only set click handlers after calling tsParticles.load()`
          );
        for (const i of e) i.addClickHandler(t);
      }
    }
    class Si {
      constructor() {
        (this.key = "hsl"), (this.stringPrefix = "hsl");
      }
      handleColor(t) {
        const e = t.value.hsl ?? t.value;
        if (void 0 !== e.h && void 0 !== e.s && void 0 !== e.l) return Lt(e);
      }
      handleRangeColor(t) {
        const e = t.value.hsl ?? t.value;
        if (void 0 !== e.h && void 0 !== e.l)
          return Lt({ h: P(e.h), l: P(e.l), s: P(e.s) });
      }
      parseString(t) {
        if (!t.startsWith("hsl")) return;
        const e =
          /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
            t
          );
        return e
          ? At({
              a: e.length > 4 ? U(e[5]) : 1,
              h: parseInt(e[1], 10),
              l: parseInt(e[3], 10),
              s: parseInt(e[2], 10),
            })
          : void 0;
      }
    }
    class ki {
      constructor() {
        (this.key = "rgb"), (this.stringPrefix = "rgb");
      }
      handleColor(t) {
        const e = t.value.rgb ?? t.value;
        if (void 0 !== e.r) return e;
      }
      handleRangeColor(t) {
        const e = t.value.rgb ?? t.value;
        if (void 0 !== e.r) return { r: P(e.r), g: P(e.g), b: P(e.b) };
      }
      parseString(t) {
        if (!t.startsWith(this.stringPrefix)) return;
        const e =
          /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
            t
          );
        return e
          ? {
              a: e.length > 4 ? U(e[5]) : 1,
              b: parseInt(e[3], 10),
              g: parseInt(e[2], 10),
              r: parseInt(e[1], 10),
            }
          : void 0;
      }
    }
    class Di {
      constructor(t) {
        (this.container = t), (this.type = "external");
      }
    }
    class Oi {
      constructor(t) {
        (this.container = t), (this.type = "particles");
      }
    }
    const Ti = (function () {
      const t = new ki(),
        e = new Si();
      St(t), St(e);
      const i = new Pi();
      return i.init(), i;
    })();
    j() || (window.tsParticles = Ti);
    class Ii {
      constructor() {
        (this.angle = 90),
          (this.count = 50),
          (this.spread = 45),
          (this.startVelocity = 45),
          (this.decay = 0.9),
          (this.gravity = 1),
          (this.drift = 0),
          (this.ticks = 200),
          (this.position = { x: 50, y: 50 }),
          (this.colors = [
            "#26ccff",
            "#a25afd",
            "#ff5e7e",
            "#88ff5a",
            "#fcff42",
            "#ffa62d",
            "#ff36ff",
          ]),
          (this.shapes = ["square", "circle"]),
          (this.scalar = 1),
          (this.zIndex = 100),
          (this.disableForReducedMotion = !0),
          (this.flat = !1),
          (this.shapeOptions = {});
      }
      get origin() {
        return { x: this.position.x / 100, y: this.position.y / 100 };
      }
      set origin(t) {
        (this.position.x = 100 * t.x), (this.position.y = 100 * t.y);
      }
      get particleCount() {
        return this.count;
      }
      set particleCount(t) {
        this.count = t;
      }
      load(t) {
        if (!t) return;
        void 0 !== t.angle && (this.angle = t.angle);
        const e = t.count ?? t.particleCount;
        void 0 !== e && (this.count = e),
          void 0 !== t.spread && (this.spread = t.spread),
          void 0 !== t.startVelocity && (this.startVelocity = t.startVelocity),
          void 0 !== t.decay && (this.decay = t.decay),
          void 0 !== t.flat && (this.flat = t.flat),
          void 0 !== t.gravity && (this.gravity = t.gravity),
          void 0 !== t.drift && (this.drift = t.drift),
          void 0 !== t.ticks && (this.ticks = t.ticks);
        const i = t.origin;
        i &&
          !t.position &&
          (t.position = {
            x: void 0 !== i.x ? 100 * i.x : void 0,
            y: void 0 !== i.y ? 100 * i.y : void 0,
          });
        const s = t.position;
        s &&
          (void 0 !== s.x && (this.position.x = s.x),
          void 0 !== s.y && (this.position.y = s.y)),
          void 0 !== t.colors &&
            (zt(t.colors)
              ? (this.colors = [...t.colors])
              : (this.colors = t.colors));
        const o = t.shapeOptions;
        if (void 0 !== o)
          for (const t in o) {
            const e = o[t];
            e && (this.shapeOptions[t] = st(this.shapeOptions[t] ?? {}, e));
          }
        void 0 !== t.shapes &&
          (zt(t.shapes)
            ? (this.shapes = [...t.shapes])
            : (this.shapes = t.shapes)),
          void 0 !== t.scalar && (this.scalar = t.scalar),
          void 0 !== t.zIndex && (this.zIndex = t.zIndex),
          void 0 !== t.disableForReducedMotion &&
            (this.disableForReducedMotion = t.disableForReducedMotion);
      }
    }
    function Ei(t, e, i, s, o, n) {
      !(function (t, e) {
        const i = t.options,
          s = i.move.path;
        if (!s.enable) return;
        if (t.lastPathTime <= t.pathDelay)
          return void (t.lastPathTime += e.value);
        const o = t.pathGenerator?.generate(t, e);
        o && t.velocity.addTo(o);
        s.clamp &&
          ((t.velocity.x = z(t.velocity.x, -1, 1)),
          (t.velocity.y = z(t.velocity.y, -1, 1)));
        t.lastPathTime -= t.pathDelay;
      })(t, n);
      const a = t.gravity,
        r = a?.enable && a.inverse ? -1 : 1;
      o && i && (t.velocity.x += (o * n.factor) / (60 * i)),
        a?.enable &&
          i &&
          (t.velocity.y += (r * (a.acceleration * n.factor)) / (60 * i));
      const c = t.moveDecay;
      t.velocity.multTo(c);
      const l = t.velocity.mult(i);
      a?.enable &&
        s > 0 &&
        ((!a.inverse && l.y >= 0 && l.y >= s) ||
          (a.inverse && l.y <= 0 && l.y <= -s)) &&
        ((l.y = r * s), i && (t.velocity.y = l.y / i));
      const h = t.options.zIndex,
        d = (1 - t.zIndexFactor) ** h.velocityRate;
      l.multTo(d);
      const { position: u } = t;
      u.addTo(l),
        e.vibrate &&
          ((u.x += Math.sin(u.x * Math.cos(u.y))),
          (u.y += Math.cos(u.y * Math.sin(u.x))));
    }
    class Ri {
      constructor() {
        this._initSpin = (t) => {
          const e = t.container,
            i = t.options.move.spin;
          if (!i.enable) return;
          const s = i.position ?? { x: 50, y: 50 },
            o = {
              x: 0.01 * s.x * e.canvas.size.width,
              y: 0.01 * s.y * e.canvas.size.height,
            },
            n = T(t.getPosition(), o),
            a = P(i.acceleration);
          (t.retina.spinAcceleration = a * e.retina.pixelRatio),
            (t.spin = {
              center: o,
              direction: t.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
              angle: t.velocity.angle,
              radius: n,
              acceleration: t.retina.spinAcceleration,
            });
        };
      }
      init(t) {
        const e = t.options.move.gravity;
        (t.gravity = {
          enable: e.enable,
          acceleration: P(e.acceleration),
          inverse: e.inverse,
        }),
          this._initSpin(t);
      }
      isEnabled(t) {
        return !t.destroyed && t.options.move.enable;
      }
      move(t, e) {
        const i = t.options,
          s = i.move;
        if (!s.enable) return;
        const o = t.container,
          n = o.retina.pixelRatio,
          a = (function (t) {
            return t.slow.inRange ? t.slow.factor : 1;
          })(t),
          r = (t.retina.moveSpeed ??= P(s.speed) * n) * o.retina.reduceFactor,
          c = (t.retina.moveDrift ??= P(t.options.move.drift) * n),
          l = k(i.size.value) * n,
          h = (r * (s.size ? t.getRadius() / l : 1) * a * (e.factor || 1)) / 2,
          d = t.retina.maxSpeed ?? o.retina.maxSpeed;
        s.spin.enable
          ? (function (t, e) {
              const i = t.container;
              if (!t.spin) return;
              const s = {
                x: "clockwise" === t.spin.direction ? Math.cos : Math.sin,
                y: "clockwise" === t.spin.direction ? Math.sin : Math.cos,
              };
              (t.position.x =
                t.spin.center.x + t.spin.radius * s.x(t.spin.angle)),
                (t.position.y =
                  t.spin.center.y + t.spin.radius * s.y(t.spin.angle)),
                (t.spin.radius += t.spin.acceleration);
              const o = Math.max(i.canvas.size.width, i.canvas.size.height),
                n = 0.5 * o;
              t.spin.radius > n
                ? ((t.spin.radius = n), (t.spin.acceleration *= -1))
                : t.spin.radius < 0 &&
                  ((t.spin.radius = 0), (t.spin.acceleration *= -1)),
                (t.spin.angle += 0.01 * e * (1 - t.spin.radius / o));
            })(t, h)
          : Ei(t, s, h, d, c, e),
          (function (t) {
            const e = t.initialPosition,
              { dx: i, dy: s } = O(e, t.position),
              o = Math.abs(i),
              n = Math.abs(s),
              { maxDistance: a } = t.retina,
              r = a.horizontal,
              c = a.vertical;
            if (r || c)
              if (((r && o >= r) || (c && n >= c)) && !t.misplaced)
                (t.misplaced = (!!r && o > r) || (!!c && n > c)),
                  r && (t.velocity.x = 0.5 * t.velocity.y - t.velocity.x),
                  c && (t.velocity.y = 0.5 * t.velocity.x - t.velocity.y);
              else if ((!r || o < r) && (!c || n < c) && t.misplaced)
                t.misplaced = !1;
              else if (t.misplaced) {
                const i = t.position,
                  s = t.velocity;
                r &&
                  ((i.x < e.x && s.x < 0) || (i.x > e.x && s.x > 0)) &&
                  (s.x *= -_()),
                  c &&
                    ((i.y < e.y && s.y < 0) || (i.y > e.y && s.y > 0)) &&
                    (s.y *= -_());
              }
          })(t);
      }
    }
    class Fi {
      draw(t) {
        const { context: e, particle: i, radius: s } = t;
        i.circleRange || (i.circleRange = { min: 0, max: 2 * Math.PI });
        const o = i.circleRange;
        e.arc(0, 0, s, o.min, o.max, !1);
      }
      getSidesCount() {
        return 12;
      }
      particleInit(t, e) {
        const i = e.shapeData,
          s = i?.angle ?? { max: 360, min: 0 };
        e.circleRange = _t(s)
          ? { min: (s.min * Math.PI) / 180, max: (s.max * Math.PI) / 180 }
          : { min: 0, max: (s * Math.PI) / 180 };
      }
    }
    function Li(t, e, i, s, o) {
      if (
        !e ||
        !i.enable ||
        ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0))
      )
        return;
      if (
        (e.time || (e.time = 0),
        (e.delayTime ?? 0) > 0 &&
          e.time < (e.delayTime ?? 0) &&
          (e.time += t.value),
        (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))
      )
        return;
      const n = C(i.offset),
        a = (e.velocity ?? 0) * t.factor + 3.6 * n,
        r = e.decay ?? 1;
      o && "increasing" !== e.status
        ? ((e.value -= a),
          e.value < 0 &&
            (e.loops || (e.loops = 0),
            e.loops++,
            (e.status = "increasing"),
            (e.value += e.value)))
        : ((e.value += a),
          e.value > s &&
            (e.loops || (e.loops = 0),
            e.loops++,
            o && ((e.status = "decreasing"), (e.value -= e.value % s)))),
        e.velocity && 1 !== r && (e.velocity *= r),
        e.value > s && (e.value %= s);
    }
    class Ai {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = It(t.options.color, t.id, t.options.reduceDuplicates);
        e &&
          (t.color = jt(
            e,
            t.options.color.animation,
            this.container.retina.reduceFactor
          ));
      }
      isEnabled(t) {
        const { h: e, s: i, l: s } = t.options.color.animation,
          { color: o } = t;
        return (
          !t.destroyed &&
          !t.spawning &&
          ((void 0 !== o?.h.value && e.enable) ||
            (void 0 !== o?.s.value && i.enable) ||
            (void 0 !== o?.l.value && s.enable))
        );
      }
      update(t, e) {
        !(function (t, e) {
          const { h: i, s, l: o } = t.options.color.animation,
            { color: n } = t;
          if (!n) return;
          const { h: a, s: r, l: c } = n;
          a && Li(e, a, i, 360, !1),
            r && Li(e, r, s, 100, !0),
            c && Li(e, c, o, 100, !0);
        })(t, e);
      }
    }
    class Bi {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.opacity;
        t.opacity = ft(e, 1);
        const i = e.animation;
        i.enable &&
          ((t.opacity.velocity =
            (P(i.speed) / 100) * this.container.retina.reduceFactor),
          i.sync || (t.opacity.velocity *= _()));
      }
      isEnabled(t) {
        return (
          !t.destroyed &&
          !t.spawning &&
          !!t.opacity &&
          t.opacity.enable &&
          ((t.opacity.maxLoops ?? 0) <= 0 ||
            ((t.opacity.maxLoops ?? 0) > 0 &&
              (t.opacity.loops ?? 0) < (t.opacity.maxLoops ?? 0)))
        );
      }
      reset(t) {
        t.opacity && ((t.opacity.time = 0), (t.opacity.loops = 0));
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            const i = t.opacity;
            if (
              t.destroyed ||
              !i?.enable ||
              ((i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0))
            )
              return;
            const s = i.min,
              o = i.max,
              n = i.decay ?? 1;
            if (
              (i.time || (i.time = 0),
              (i.delayTime ?? 0) > 0 &&
                i.time < (i.delayTime ?? 0) &&
                (i.time += e.value),
              !((i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0)))
            ) {
              switch (i.status) {
                case "increasing":
                  i.value >= o
                    ? ((i.status = "decreasing"),
                      i.loops || (i.loops = 0),
                      i.loops++)
                    : (i.value += (i.velocity ?? 0) * e.factor);
                  break;
                case "decreasing":
                  i.value <= s
                    ? ((i.status = "increasing"),
                      i.loops || (i.loops = 0),
                      i.loops++)
                    : (i.value -= (i.velocity ?? 0) * e.factor);
              }
              i.velocity && 1 !== i.decay && (i.velocity *= n),
                (function (t, e, i, s) {
                  switch (t.options.opacity.animation.destroy) {
                    case "max":
                      e >= s && t.destroy();
                      break;
                    case "min":
                      e <= i && t.destroy();
                  }
                })(t, i.value, s, o),
                t.destroyed || (i.value = z(i.value, s, o));
            }
          })(t, e);
      }
    }
    class Vi {
      constructor(t) {
        (this.container = t),
          (this.modes = [
            "bounce",
            "bounce-vertical",
            "bounce-horizontal",
            "bounceVertical",
            "bounceHorizontal",
            "split",
          ]);
      }
      update(t, e, i, s) {
        if (!this.modes.includes(s)) return;
        const o = this.container;
        let n = !1;
        for (const [, s] of o.plugins)
          if (
            (void 0 !== s.particleBounce && (n = s.particleBounce(t, i, e)), n)
          )
            break;
        if (n) return;
        const a = t.getPosition(),
          r = t.offset,
          c = t.getRadius(),
          l = it(a, c),
          h = o.canvas.size;
        !(function (t) {
          if (
            ("bounce" !== t.outMode &&
              "bounce-horizontal" !== t.outMode &&
              "bounceHorizontal" !== t.outMode &&
              "split" !== t.outMode) ||
            ("left" !== t.direction && "right" !== t.direction)
          )
            return;
          t.bounds.right < 0 && "left" === t.direction
            ? (t.particle.position.x = t.size + t.offset.x)
            : t.bounds.left > t.canvasSize.width &&
              "right" === t.direction &&
              (t.particle.position.x =
                t.canvasSize.width - t.size - t.offset.x);
          const e = t.particle.velocity.x;
          let i = !1;
          if (
            ("right" === t.direction &&
              t.bounds.right >= t.canvasSize.width &&
              e > 0) ||
            ("left" === t.direction && t.bounds.left <= 0 && e < 0)
          ) {
            const e = P(t.particle.options.bounce.horizontal.value);
            (t.particle.velocity.x *= -e), (i = !0);
          }
          if (!i) return;
          const s = t.offset.x + t.size;
          t.bounds.right >= t.canvasSize.width && "right" === t.direction
            ? (t.particle.position.x = t.canvasSize.width - s)
            : t.bounds.left <= 0 &&
              "left" === t.direction &&
              (t.particle.position.x = s),
            "split" === t.outMode && t.particle.destroy();
        })({
          particle: t,
          outMode: s,
          direction: e,
          bounds: l,
          canvasSize: h,
          offset: r,
          size: c,
        }),
          (function (t) {
            if (
              ("bounce" !== t.outMode &&
                "bounce-vertical" !== t.outMode &&
                "bounceVertical" !== t.outMode &&
                "split" !== t.outMode) ||
              ("bottom" !== t.direction && "top" !== t.direction)
            )
              return;
            t.bounds.bottom < 0 && "top" === t.direction
              ? (t.particle.position.y = t.size + t.offset.y)
              : t.bounds.top > t.canvasSize.height &&
                "bottom" === t.direction &&
                (t.particle.position.y =
                  t.canvasSize.height - t.size - t.offset.y);
            const e = t.particle.velocity.y;
            let i = !1;
            if (
              ("bottom" === t.direction &&
                t.bounds.bottom >= t.canvasSize.height &&
                e > 0) ||
              ("top" === t.direction && t.bounds.top <= 0 && e < 0)
            ) {
              const e = P(t.particle.options.bounce.vertical.value);
              (t.particle.velocity.y *= -e), (i = !0);
            }
            if (!i) return;
            const s = t.offset.y + t.size;
            t.bounds.bottom >= t.canvasSize.height && "bottom" === t.direction
              ? (t.particle.position.y = t.canvasSize.height - s)
              : t.bounds.top <= 0 &&
                "top" === t.direction &&
                (t.particle.position.y = s),
              "split" === t.outMode && t.particle.destroy();
          })({
            particle: t,
            outMode: s,
            direction: e,
            bounds: l,
            canvasSize: h,
            offset: r,
            size: c,
          });
      }
    }
    class Ui {
      constructor(t) {
        (this.container = t), (this.modes = ["destroy"]);
      }
      update(t, e, i, s) {
        if (!this.modes.includes(s)) return;
        const o = this.container;
        switch (t.outType) {
          case "normal":
          case "outside":
            if (tt(t.position, o.canvas.size, v.origin, t.getRadius(), e))
              return;
            break;
          case "inside": {
            const { dx: e, dy: i } = O(t.position, t.moveCenter),
              { x: s, y: o } = t.velocity;
            if (
              (s < 0 && e > t.moveCenter.radius) ||
              (o < 0 && i > t.moveCenter.radius) ||
              (s >= 0 && e < -t.moveCenter.radius) ||
              (o >= 0 && i < -t.moveCenter.radius)
            )
              return;
            break;
          }
        }
        o.particles.remove(t, void 0, !0);
      }
    }
    class $i {
      constructor(t) {
        (this.container = t), (this.modes = ["none"]);
      }
      update(t, e, i, s) {
        if (!this.modes.includes(s)) return;
        if (
          (t.options.move.distance.horizontal &&
            ("left" === e || "right" === e)) ||
          (t.options.move.distance.vertical && ("top" === e || "bottom" === e))
        )
          return;
        const o = t.options.move.gravity,
          n = this.container,
          a = n.canvas.size,
          r = t.getRadius();
        if (o.enable) {
          const i = t.position;
          ((!o.inverse && i.y > a.height + r && "bottom" === e) ||
            (o.inverse && i.y < -r && "top" === e)) &&
            n.particles.remove(t);
        } else {
          if (
            (t.velocity.y > 0 && t.position.y <= a.height + r) ||
            (t.velocity.y < 0 && t.position.y >= -r) ||
            (t.velocity.x > 0 && t.position.x <= a.width + r) ||
            (t.velocity.x < 0 && t.position.x >= -r)
          )
            return;
          tt(t.position, n.canvas.size, v.origin, r, e) ||
            n.particles.remove(t);
        }
      }
    }
    class qi {
      constructor(t) {
        (this.container = t), (this.modes = ["out"]);
      }
      update(t, e, i, s) {
        if (!this.modes.includes(s)) return;
        const o = this.container;
        switch (t.outType) {
          case "inside": {
            const { x: e, y: i } = t.velocity,
              s = v.origin;
            (s.length = t.moveCenter.radius),
              (s.angle = t.velocity.angle + Math.PI),
              s.addTo(v.create(t.moveCenter));
            const { dx: n, dy: a } = O(t.position, s);
            if (
              (e <= 0 && n >= 0) ||
              (i <= 0 && a >= 0) ||
              (e >= 0 && n <= 0) ||
              (i >= 0 && a <= 0)
            )
              return;
            (t.position.x = Math.floor(
              C({ min: 0, max: o.canvas.size.width })
            )),
              (t.position.y = Math.floor(
                C({ min: 0, max: o.canvas.size.height })
              ));
            const { dx: r, dy: c } = O(t.position, t.moveCenter);
            (t.direction = Math.atan2(-c, -r)),
              (t.velocity.angle = t.direction);
            break;
          }
          default:
            if (tt(t.position, o.canvas.size, v.origin, t.getRadius(), e))
              return;
            switch (t.outType) {
              case "outside": {
                (t.position.x =
                  Math.floor(
                    C({ min: -t.moveCenter.radius, max: t.moveCenter.radius })
                  ) + t.moveCenter.x),
                  (t.position.y =
                    Math.floor(
                      C({ min: -t.moveCenter.radius, max: t.moveCenter.radius })
                    ) + t.moveCenter.y);
                const { dx: e, dy: i } = O(t.position, t.moveCenter);
                t.moveCenter.radius &&
                  ((t.direction = Math.atan2(i, e)),
                  (t.velocity.angle = t.direction));
                break;
              }
              case "normal": {
                const i = t.options.move.warp,
                  s = o.canvas.size,
                  n = {
                    bottom: s.height + t.getRadius() + t.offset.y,
                    left: -t.getRadius() - t.offset.x,
                    right: s.width + t.getRadius() + t.offset.x,
                    top: -t.getRadius() - t.offset.y,
                  },
                  a = t.getRadius(),
                  r = it(t.position, a);
                "right" === e && r.left > s.width + t.offset.x
                  ? ((t.position.x = n.left),
                    (t.initialPosition.x = t.position.x),
                    i ||
                      ((t.position.y = _() * s.height),
                      (t.initialPosition.y = t.position.y)))
                  : "left" === e &&
                    r.right < -t.offset.x &&
                    ((t.position.x = n.right),
                    (t.initialPosition.x = t.position.x),
                    i ||
                      ((t.position.y = _() * s.height),
                      (t.initialPosition.y = t.position.y))),
                  "bottom" === e && r.top > s.height + t.offset.y
                    ? (i ||
                        ((t.position.x = _() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = n.top),
                      (t.initialPosition.y = t.position.y))
                    : "top" === e &&
                      r.bottom < -t.offset.y &&
                      (i ||
                        ((t.position.x = _() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = n.bottom),
                      (t.initialPosition.y = t.position.y));
                break;
              }
            }
        }
      }
    }
    class Gi {
      constructor(t) {
        (this.container = t),
          (this._updateOutMode = (t, e, i, s) => {
            for (const o of this.updaters) o.update(t, s, e, i);
          }),
          (this.updaters = [new Vi(t), new Ui(t), new qi(t), new $i(t)]);
      }
      init() {}
      isEnabled(t) {
        return !t.destroyed && !t.spawning;
      }
      update(t, e) {
        const i = t.options.move.outModes;
        this._updateOutMode(t, e, i.bottom ?? i.default, "bottom"),
          this._updateOutMode(t, e, i.left ?? i.default, "left"),
          this._updateOutMode(t, e, i.right ?? i.default, "right"),
          this._updateOutMode(t, e, i.top ?? i.default, "top");
      }
    }
    class Hi {
      init(t) {
        const e = t.container,
          i = t.options.size.animation;
        i.enable &&
          ((t.size.velocity =
            ((t.retina.sizeAnimationSpeed ?? e.retina.sizeAnimationSpeed) /
              100) *
            e.retina.reduceFactor),
          i.sync || (t.size.velocity *= _()));
      }
      isEnabled(t) {
        return (
          !t.destroyed &&
          !t.spawning &&
          t.size.enable &&
          ((t.size.maxLoops ?? 0) <= 0 ||
            ((t.size.maxLoops ?? 0) > 0 &&
              (t.size.loops ?? 0) < (t.size.maxLoops ?? 0)))
        );
      }
      reset(t) {
        t.size.loops = 0;
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            const i = t.size;
            if (
              t.destroyed ||
              !i ||
              !i.enable ||
              ((i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0))
            )
              return;
            const s = (i.velocity ?? 0) * e.factor,
              o = i.min,
              n = i.max,
              a = i.decay ?? 1;
            if (
              (i.time || (i.time = 0),
              (i.delayTime ?? 0) > 0 &&
                i.time < (i.delayTime ?? 0) &&
                (i.time += e.value),
              !((i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0)))
            ) {
              switch (i.status) {
                case "increasing":
                  i.value >= n
                    ? ((i.status = "decreasing"),
                      i.loops || (i.loops = 0),
                      i.loops++)
                    : (i.value += s);
                  break;
                case "decreasing":
                  i.value <= o
                    ? ((i.status = "increasing"),
                      i.loops || (i.loops = 0),
                      i.loops++)
                    : (i.value -= s);
              }
              i.velocity && 1 !== a && (i.velocity *= a),
                (function (t, e, i, s) {
                  switch (t.options.size.animation.destroy) {
                    case "max":
                      e >= s && t.destroy();
                      break;
                    case "min":
                      e <= i && t.destroy();
                  }
                })(t, i.value, o, n),
                t.destroyed || (i.value = z(i.value, o, n));
            }
          })(t, e);
      }
    }
    async function ji(t, e = !0) {
      await (async function (t, e = !0) {
        await t.addMover("base", () => new Ri(), e);
      })(t, !1),
        await (async function (t, e = !0) {
          await t.addShape("circle", new Fi(), e);
        })(t, !1),
        await (async function (t, e = !0) {
          await t.addParticleUpdater("color", (t) => new Ai(t), e);
        })(t, !1),
        await (async function (t, e = !0) {
          await t.addParticleUpdater("opacity", (t) => new Bi(t), e);
        })(t, !1),
        await (async function (t, e = !0) {
          await t.addParticleUpdater("outModes", (t) => new Gi(t), e);
        })(t, !1),
        await (async function (t, e = !0) {
          await t.addParticleUpdater("size", () => new Hi(), e);
        })(t, !1),
        await t.refresh(e);
    }
    function Wi(t, e) {
      if (!e.segments.length || !e.segments[0].values.length) return;
      const { context: i, radius: s } = t;
      i.moveTo(e.segments[0].values[0].x * s, e.segments[0].values[0].y * s);
      for (let t = 0; t < e.segments.length; t++) {
        const o = e.segments[t];
        i.bezierCurveTo(
          o.values[1].x * s,
          o.values[1].y * s,
          o.values[2].x * s,
          o.values[2].y * s,
          o.values[3].x * s,
          o.values[3].y * s
        );
      }
      for (let t = e.segments.length - 1; t >= 0; t--) {
        const o = e.segments[t];
        i.bezierCurveTo(
          -o.values[2].x * s,
          o.values[2].y * s,
          -o.values[1].x * s,
          o.values[1].y * s,
          -o.values[0].x * s,
          o.values[0].y * s
        );
      }
    }
    const Ni = 0.5,
      Xi = {
        heart: {
          segments: [
            {
              values: [
                { x: 0, y: Ni },
                { x: 0, y: Ni },
                { x: Ni, y: 0 },
                { x: Ni, y: -Ni / 2 },
              ],
            },
            {
              values: [
                { x: Ni, y: -Ni / 2 },
                { x: Ni, y: -Ni / 2 },
                { x: Ni, y: -Ni },
                { x: Ni / 2, y: -Ni },
              ],
            },
            {
              values: [
                { x: Ni / 2, y: -Ni },
                { x: Ni / 2, y: -Ni },
                { x: 0, y: -Ni },
                { x: 0, y: -Ni / 2 },
              ],
            },
          ],
        },
        diamond: {
          segments: [
            {
              values: [
                { x: 0, y: Ni },
                { x: 0, y: Ni },
                { x: 0.375, y: 0 },
                { x: 0.375, y: 0 },
              ],
            },
            {
              values: [
                { x: 0.375, y: 0 },
                { x: 0.375, y: 0 },
                { x: 0, y: -Ni },
                { x: 0, y: -Ni },
              ],
            },
          ],
        },
        club: {
          segments: [
            {
              values: [
                { x: 0, y: -Ni },
                { x: 0, y: -Ni },
                { x: Ni / 2, y: -Ni },
                { x: Ni / 2, y: -Ni / 2 },
              ],
            },
            {
              values: [
                { x: Ni / 2, y: -Ni / 2 },
                { x: Ni / 2, y: -Ni / 2 },
                { x: Ni, y: -Ni / 2 },
                { x: Ni, y: 0 },
              ],
            },
            {
              values: [
                { x: Ni, y: 0 },
                { x: Ni, y: 0 },
                { x: Ni, y: Ni / 2 },
                { x: Ni / 2, y: Ni / 2 },
              ],
            },
            {
              values: [
                { x: Ni / 2, y: Ni / 2 },
                { x: Ni / 2, y: Ni / 2 },
                { x: Ni / 8, y: Ni / 2 },
                { x: Ni / 8, y: Ni / 8 },
              ],
            },
            {
              values: [
                { x: Ni / 8, y: Ni / 8 },
                { x: Ni / 8, y: Ni / 2 },
                { x: Ni / 2, y: Ni },
                { x: Ni / 2, y: Ni },
              ],
            },
            {
              values: [
                { x: Ni / 2, y: Ni },
                { x: Ni / 2, y: Ni },
                { x: 0, y: Ni },
                { x: 0, y: Ni },
              ],
            },
          ],
        },
        spade: {
          segments: [
            {
              values: [
                { x: 0, y: -Ni },
                { x: 0, y: -Ni },
                { x: Ni, y: -Ni / 2 },
                { x: Ni, y: 0 },
              ],
            },
            {
              values: [
                { x: Ni, y: 0 },
                { x: Ni, y: 0 },
                { x: Ni, y: Ni / 2 },
                { x: Ni / 2, y: Ni / 2 },
              ],
            },
            {
              values: [
                { x: Ni / 2, y: Ni / 2 },
                { x: Ni / 2, y: Ni / 2 },
                { x: Ni / 8, y: Ni / 2 },
                { x: Ni / 8, y: Ni / 8 },
              ],
            },
            {
              values: [
                { x: Ni / 8, y: Ni / 8 },
                { x: Ni / 8, y: Ni / 2 },
                { x: Ni / 2, y: Ni },
                { x: Ni / 2, y: Ni },
              ],
            },
            {
              values: [
                { x: Ni / 2, y: Ni },
                { x: Ni / 2, y: Ni },
                { x: 0, y: Ni },
                { x: 0, y: Ni },
              ],
            },
          ],
        },
      };
    class Yi {
      draw(t) {
        Wi(t, Xi.spade);
      }
    }
    class Zi {
      draw(t) {
        Wi(t, Xi.heart);
      }
    }
    class Qi {
      draw(t) {
        Wi(t, Xi.diamond);
      }
    }
    class Ji {
      draw(t) {
        Wi(t, Xi.club);
      }
    }
    class Ki {
      constructor() {
        this.wait = !1;
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = t.count),
          void 0 !== t.delay && (this.delay = D(t.delay)),
          void 0 !== t.duration && (this.duration = D(t.duration)),
          void 0 !== t.wait && (this.wait = t.wait));
      }
    }
    class ts {
      constructor() {
        (this.quantity = 1), (this.delay = 0.1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.quantity && (this.quantity = D(t.quantity)),
          void 0 !== t.delay && (this.delay = D(t.delay)));
      }
    }
    class es {
      constructor() {
        (this.color = !1), (this.opacity = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.color && (this.color = t.color),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class is {
      constructor() {
        (this.options = {}), (this.replace = new es()), (this.type = "square");
      }
      load(t) {
        t &&
          (void 0 !== t.options && (this.options = st({}, t.options ?? {})),
          this.replace.load(t.replace),
          void 0 !== t.type && (this.type = t.type));
      }
    }
    class ss {
      constructor() {
        (this.mode = "percent"), (this.height = 0), (this.width = 0);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.height && (this.height = t.height),
          void 0 !== t.width && (this.width = t.width));
      }
    }
    class os {
      constructor() {
        (this.autoPlay = !0),
          (this.fill = !0),
          (this.life = new Ki()),
          (this.rate = new ts()),
          (this.shape = new is()),
          (this.startCount = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
          void 0 !== t.size &&
            (this.size || (this.size = new ss()), this.size.load(t.size)),
          void 0 !== t.direction && (this.direction = t.direction),
          (this.domId = t.domId),
          void 0 !== t.fill && (this.fill = t.fill),
          this.life.load(t.life),
          (this.name = t.name),
          (this.particles = dt(t.particles, (t) => st({}, t))),
          this.rate.load(t.rate),
          this.shape.load(t.shape),
          void 0 !== t.position &&
            ((this.position = {}),
            void 0 !== t.position.x && (this.position.x = D(t.position.x)),
            void 0 !== t.position.y && (this.position.y = D(t.position.y))),
          void 0 !== t.spawnColor &&
            (void 0 === this.spawnColor && (this.spawnColor = new De()),
            this.spawnColor.load(t.spawnColor)),
          void 0 !== t.startCount && (this.startCount = t.startCount));
      }
    }
    function ns(t, e) {
      t.color ? (t.color.value = e) : (t.color = { value: e });
    }
    class as {
      constructor(t, e, i, s, o) {
        (this.emitters = e),
          (this.container = i),
          (this._destroy = () => {
            this._mutationObserver?.disconnect(),
              (this._mutationObserver = void 0),
              this._resizeObserver?.disconnect(),
              (this._resizeObserver = void 0),
              this.emitters.removeEmitter(this),
              this._engine.dispatchEvent("emitterDestroyed", {
                container: this.container,
                data: { emitter: this },
              });
          }),
          (this._prepareToDie = () => {
            if (this._paused) return;
            const t =
              void 0 !== this.options.life?.duration
                ? P(this.options.life.duration)
                : void 0;
            this.container.retina.reduceFactor &&
              (this._lifeCount > 0 || this._immortal) &&
              void 0 !== t &&
              t > 0 &&
              (this._duration = 1e3 * t);
          }),
          (this._setColorAnimation = (t, e, i) => {
            const s = this.container;
            if (!t.enable) return e;
            const o = C(t.offset),
              n = (1e3 * P(this.options.rate.delay)) / s.retina.reduceFactor;
            return (e + (P(t.speed ?? 0) * s.fpsLimit) / n + 3.6 * o) % i;
          }),
          (this._engine = t),
          (this._currentDuration = 0),
          (this._currentEmitDelay = 0),
          (this._currentSpawnDelay = 0),
          (this._initialPosition = o),
          s instanceof os
            ? (this.options = s)
            : ((this.options = new os()), this.options.load(s)),
          (this._spawnDelay =
            (1e3 * P(this.options.life.delay ?? 0)) /
            this.container.retina.reduceFactor),
          (this.position = this._initialPosition ?? this._calcPosition()),
          (this.name = this.options.name),
          (this.fill = this.options.fill),
          (this._firstSpawn = !this.options.life.wait),
          (this._startParticlesAdded = !1);
        let n = st({}, this.options.particles);
        if (
          ((n ??= {}),
          (n.move ??= {}),
          (n.move.direction ??= this.options.direction),
          this.options.spawnColor &&
            (this.spawnColor = It(this.options.spawnColor)),
          (this._paused = !this.options.autoPlay),
          (this._particlesOptions = n),
          (this._size = this._calcSize()),
          (this.size = yt(this._size, this.container.canvas.size)),
          (this._lifeCount = this.options.life.count ?? -1),
          (this._immortal = this._lifeCount <= 0),
          this.options.domId)
        ) {
          const t = document.getElementById(this.options.domId);
          t &&
            ((this._mutationObserver = new MutationObserver(() => {
              this.resize();
            })),
            (this._resizeObserver = new ResizeObserver(() => {
              this.resize();
            })),
            this._mutationObserver.observe(t, {
              attributes: !0,
              attributeFilter: ["style", "width", "height"],
            }),
            this._resizeObserver.observe(t));
        }
        const a = this.options.shape,
          r = this._engine.emitterShapeManager?.getShapeGenerator(a.type);
        r &&
          (this._shape = r.generate(
            this.position,
            this.size,
            this.fill,
            a.options
          )),
          this._engine.dispatchEvent("emitterCreated", {
            container: i,
            data: { emitter: this },
          }),
          this.play();
      }
      externalPause() {
        (this._paused = !0), this.pause();
      }
      externalPlay() {
        (this._paused = !1), this.play();
      }
      async init() {
        await this._shape?.init();
      }
      pause() {
        this._paused || delete this._emitDelay;
      }
      play() {
        if (
          !this._paused &&
          this.container.retina.reduceFactor &&
          (this._lifeCount > 0 || this._immortal || !this.options.life.count) &&
          (this._firstSpawn ||
            this._currentSpawnDelay >= (this._spawnDelay ?? 0))
        ) {
          if (void 0 === this._emitDelay) {
            const t = P(this.options.rate.delay);
            this._emitDelay = (1e3 * t) / this.container.retina.reduceFactor;
          }
          (this._lifeCount > 0 || this._immortal) && this._prepareToDie();
        }
      }
      resize() {
        const t = this._initialPosition;
        (this.position =
          t && tt(t, this.container.canvas.size, v.origin)
            ? t
            : this._calcPosition()),
          (this._size = this._calcSize()),
          (this.size = yt(this._size, this.container.canvas.size)),
          this._shape?.resize(this.position, this.size);
      }
      async update(t) {
        this._paused ||
          (this._firstSpawn &&
            ((this._firstSpawn = !1),
            (this._currentSpawnDelay = this._spawnDelay ?? 0),
            (this._currentEmitDelay = this._emitDelay ?? 0)),
          this._startParticlesAdded ||
            ((this._startParticlesAdded = !0),
            await this._emitParticles(this.options.startCount)),
          void 0 !== this._duration &&
            ((this._currentDuration += t.value),
            this._currentDuration >= this._duration &&
              (this.pause(),
              void 0 !== this._spawnDelay && delete this._spawnDelay,
              this._immortal || this._lifeCount--,
              this._lifeCount > 0 || this._immortal
                ? ((this.position = this._calcPosition()),
                  this._shape?.resize(this.position, this.size),
                  (this._spawnDelay =
                    (1e3 * P(this.options.life.delay ?? 0)) /
                    this.container.retina.reduceFactor))
                : this._destroy(),
              (this._currentDuration -= this._duration),
              delete this._duration)),
          void 0 !== this._spawnDelay &&
            ((this._currentSpawnDelay += t.value),
            this._currentSpawnDelay >= this._spawnDelay &&
              (this._engine.dispatchEvent("emitterPlay", {
                container: this.container,
              }),
              this.play(),
              (this._currentSpawnDelay -= this._currentSpawnDelay),
              delete this._spawnDelay)),
          void 0 !== this._emitDelay &&
            ((this._currentEmitDelay += t.value),
            this._currentEmitDelay >= this._emitDelay &&
              (this._emit(), (this._currentEmitDelay -= this._emitDelay))));
      }
      _calcPosition() {
        if (this.options.domId) {
          const t = this.container,
            e = document.getElementById(this.options.domId);
          if (e) {
            const i = e.getBoundingClientRect();
            return {
              x: (i.x + i.width / 2) * t.retina.pixelRatio,
              y: (i.y + i.height / 2) * t.retina.pixelRatio,
            };
          }
        }
        return A({
          size: this.container.canvas.size,
          position: this.options.position,
        });
      }
      _calcSize() {
        const t = this.container;
        if (this.options.domId) {
          const e = document.getElementById(this.options.domId);
          if (e) {
            const i = e.getBoundingClientRect();
            return {
              width: i.width * t.retina.pixelRatio,
              height: i.height * t.retina.pixelRatio,
              mode: "precise",
            };
          }
        }
        return (
          this.options.size ??
          (() => {
            const t = new ss();
            return t.load({ height: 0, mode: "percent", width: 0 }), t;
          })()
        );
      }
      async _emit() {
        if (this._paused) return;
        const t = P(this.options.rate.quantity);
        await this._emitParticles(t);
      }
      async _emitParticles(t) {
        const e = ut(this._particlesOptions);
        for (let i = 0; i < t; i++) {
          const t = st({}, e);
          if (this.spawnColor) {
            const e = this.options.spawnColor?.animation;
            e &&
              ((this.spawnColor.h = this._setColorAnimation(
                e.h,
                this.spawnColor.h,
                360
              )),
              (this.spawnColor.s = this._setColorAnimation(
                e.s,
                this.spawnColor.s,
                100
              )),
              (this.spawnColor.l = this._setColorAnimation(
                e.l,
                this.spawnColor.l,
                100
              ))),
              ns(t, this.spawnColor);
          }
          const i = this.options.shape;
          let s = this.position;
          if (this._shape) {
            const e = await this._shape.randomPosition();
            if (e) {
              s = e.position;
              const o = i.replace;
              o.color && e.color && ns(t, e.color),
                o.opacity &&
                  (t.opacity
                    ? (t.opacity.value = e.opacity)
                    : (t.opacity = { value: e.opacity }));
            } else s = null;
          }
          s && this.container.particles.addParticle(s, t);
        }
      }
    }
    class rs {
      constructor(t, e) {
        (this.container = e),
          (this._engine = t),
          (this.array = []),
          (this.emitters = []),
          (this.interactivityEmitters = {
            random: { count: 1, enable: !1 },
            value: [],
          }),
          (e.getEmitter = (t) =>
            void 0 === t || bt(t)
              ? this.array[t || 0]
              : this.array.find((e) => e.name === t)),
          (e.addEmitter = async (t, e) => this.addEmitter(t, e)),
          (e.removeEmitter = (t) => {
            const i = e.getEmitter(t);
            i && this.removeEmitter(i);
          }),
          (e.playEmitter = (t) => {
            const i = e.getEmitter(t);
            i && i.externalPlay();
          }),
          (e.pauseEmitter = (t) => {
            const i = e.getEmitter(t);
            i && i.externalPause();
          });
      }
      async addEmitter(t, e) {
        const i = new os();
        i.load(t);
        const s = new as(this._engine, this, this.container, i, e);
        return await s.init(), this.array.push(s), s;
      }
      handleClickMode(t) {
        const e = this.emitters,
          i = this.interactivityEmitters;
        if ("emitter" !== t) return;
        let s;
        if (i && zt(i.value))
          if (i.value.length > 0 && i.random.enable) {
            s = [];
            const t = [];
            for (let e = 0; e < i.random.count; e++) {
              const o = J(i.value);
              t.includes(o) && t.length < i.value.length
                ? e--
                : (t.push(o), s.push(K(i.value, o)));
            }
          } else s = i.value;
        else s = i?.value;
        const o = s ?? e,
          n = this.container.interactivity.mouse.clickPosition;
        dt(o, (t) => {
          this.addEmitter(t, n);
        });
      }
      async init() {
        if (
          ((this.emitters = this.container.actualOptions.emitters),
          (this.interactivityEmitters =
            this.container.actualOptions.interactivity.modes.emitters),
          this.emitters)
        )
          if (zt(this.emitters))
            for (const t of this.emitters) await this.addEmitter(t);
          else await this.addEmitter(this.emitters);
      }
      pause() {
        for (const t of this.array) t.pause();
      }
      play() {
        for (const t of this.array) t.play();
      }
      removeEmitter(t) {
        const e = this.array.indexOf(t);
        e >= 0 && this.array.splice(e, 1);
      }
      resize() {
        for (const t of this.array) t.resize();
      }
      stop() {
        this.array = [];
      }
      async update(t) {
        for (const e of this.array) await e.update(t);
      }
    }
    const cs = new Map();
    class ls {
      constructor(t) {
        this._engine = t;
      }
      addShapeGenerator(t, e) {
        this.getShapeGenerator(t) || cs.set(t, e);
      }
      getShapeGenerator(t) {
        return cs.get(t);
      }
      getSupportedShapeGenerators() {
        return cs.keys();
      }
    }
    class hs {
      constructor(t) {
        (this._engine = t), (this.id = "emitters");
      }
      getPlugin(t) {
        return new rs(this._engine, t);
      }
      loadOptions(t, e) {
        if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
        e?.emitters &&
          (t.emitters = dt(e.emitters, (t) => {
            const e = new os();
            return e.load(t), e;
          }));
        const i = e?.interactivity?.modes?.emitters;
        if (i)
          if (zt(i))
            t.interactivity.modes.emitters = {
              random: { count: 1, enable: !0 },
              value: i.map((t) => {
                const e = new os();
                return e.load(t), e;
              }),
            };
          else {
            const e = i;
            if (void 0 !== e.value)
              if (zt(e.value))
                t.interactivity.modes.emitters = {
                  random: {
                    count: e.random.count ?? 1,
                    enable: e.random.enable ?? !1,
                  },
                  value: e.value.map((t) => {
                    const e = new os();
                    return e.load(t), e;
                  }),
                };
              else {
                const i = new os();
                i.load(e.value),
                  (t.interactivity.modes.emitters = {
                    random: {
                      count: e.random.count ?? 1,
                      enable: e.random.enable ?? !1,
                    },
                    value: i,
                  });
              }
            else {
              (t.interactivity.modes.emitters = {
                random: { count: 1, enable: !1 },
                value: new os(),
              }).value.load(i);
            }
          }
      }
      needsPlugin(t) {
        if (!t) return !1;
        const e = t.emitters;
        return (
          (zt(e) && !!e.length) ||
          void 0 !== e ||
          (!!t.interactivity?.events?.onClick?.mode &&
            Z("emitter", t.interactivity.events.onClick.mode))
        );
      }
    }
    const ds = ["emoji"],
      us =
        '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
    class ps {
      constructor() {
        this._emojiShapeDict = new Map();
      }
      destroy() {
        for (const [t, e] of this._emojiShapeDict)
          e instanceof ImageBitmap && e?.close(),
            this._emojiShapeDict.delete(t);
      }
      draw(t) {
        const { context: e, particle: i, radius: s, opacity: o } = t,
          n = i.emojiData;
        n &&
          ((e.globalAlpha = o),
          e.drawImage(n, -s, -s, 2 * s, 2 * s),
          (e.globalAlpha = 1));
      }
      async init(t) {
        const e = t.actualOptions;
        if (ds.find((t) => Z(t, e.particles.shape.type))) {
          const t = [Q(us)],
            i = ds.map((t) => e.particles.shape.options[t]).find((t) => !!t);
          i &&
            dt(i, (e) => {
              e.font && t.push(Q(e.font));
            }),
            await Promise.all(t);
        }
      }
      particleDestroy(t) {
        delete t.emojiData;
      }
      particleInit(t, e) {
        const i = e.shapeData;
        if (!i?.value) return;
        const s = ut(i.value, e.randomIndexData),
          o = i.font ?? us;
        if (!s) return;
        const n = `${s}_${o}`,
          a = this._emojiShapeDict.get(n);
        if (a) return void (e.emojiData = a);
        const r = 2 * k(e.size.value);
        let c;
        if ("undefined" != typeof OffscreenCanvas) {
          const t = new OffscreenCanvas(r, r),
            i = t.getContext("2d");
          if (!i) return;
          (i.font = `400 ${2 * k(e.size.value)}px ${o}`),
            (i.textBaseline = "middle"),
            (i.textAlign = "center"),
            i.fillText(s, k(e.size.value), k(e.size.value)),
            (c = t.transferToImageBitmap());
        } else {
          const t = document.createElement("canvas");
          (t.width = r), (t.height = r);
          const i = t.getContext("2d");
          if (!i) return;
          (i.font = `400 ${2 * k(e.size.value)}px ${o}`),
            (i.textBaseline = "middle"),
            (i.textAlign = "center"),
            i.fillText(s, k(e.size.value), k(e.size.value)),
            (c = t);
        }
        this._emojiShapeDict.set(n, c), (e.emojiData = c);
      }
    }
    class fs {
      draw(t) {
        const { context: e, radius: i } = t,
          s = 2 * i,
          o = 0.5 * i,
          n = i + o,
          a = -i,
          r = -i;
        e.moveTo(a, r + i / 2),
          e.quadraticCurveTo(a, r, a + o, r),
          e.quadraticCurveTo(a + i, r, a + i, r + o),
          e.quadraticCurveTo(a + i, r, a + n, r),
          e.quadraticCurveTo(a + s, r, a + s, r + o),
          e.quadraticCurveTo(a + s, r + i, a + n, r + n),
          e.lineTo(a + i, r + s),
          e.lineTo(a + o, r + n),
          e.quadraticCurveTo(a, r + i, a, r + o);
      }
    }
    const ms = [0, 4, 2, 1],
      vs = [8, 8, 4, 2];
    class ys {
      constructor(t) {
        (this.pos = 0), (this.data = new Uint8ClampedArray(t));
      }
      getString(t) {
        const e = this.data.slice(this.pos, this.pos + t);
        return (
          (this.pos += e.length),
          e.reduce((t, e) => t + String.fromCharCode(e), "")
        );
      }
      nextByte() {
        return this.data[this.pos++];
      }
      nextTwoBytes() {
        return (
          (this.pos += 2),
          this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
        );
      }
      readSubBlocks() {
        let t = "",
          e = 0;
        do {
          e = this.data[this.pos++];
          for (
            let i = e;
            --i >= 0;
            t += String.fromCharCode(this.data[this.pos++])
          );
        } while (0 !== e);
        return t;
      }
      readSubBlocksBin() {
        let t = 0,
          e = 0;
        for (let i = 0; 0 !== (t = this.data[this.pos + i]); i += t + 1) e += t;
        const i = new Uint8Array(e);
        for (let e = 0; 0 !== (t = this.data[this.pos++]); )
          for (let s = t; --s >= 0; i[e++] = this.data[this.pos++]);
        return i;
      }
      skipSubBlocks() {
        for (; 0 !== this.data[this.pos]; this.pos += this.data[this.pos] + 1);
        this.pos++;
      }
    }
    function gs(t, e) {
      const i = [];
      for (let s = 0; s < e; s++)
        i.push({
          r: t.data[t.pos],
          g: t.data[t.pos + 1],
          b: t.data[t.pos + 2],
        }),
          (t.pos += 3);
      return i;
    }
    async function ws(t, e, i, s, o, n) {
      switch (t.nextByte()) {
        case 59:
          return !0;
        case 44:
          await (async function (t, e, i, s, o, n) {
            const a = e.frames[s(!0)];
            (a.left = t.nextTwoBytes()),
              (a.top = t.nextTwoBytes()),
              (a.width = t.nextTwoBytes()),
              (a.height = t.nextTwoBytes());
            const r = t.nextByte(),
              c = 128 == (128 & r),
              l = 64 == (64 & r);
            (a.sortFlag = 32 == (32 & r)), (a.reserved = (24 & r) >>> 3);
            const h = 1 << (1 + (7 & r));
            c && (a.localColorTable = gs(t, h));
            const d = (t) => {
                const {
                  r: s,
                  g: n,
                  b: r,
                } = (c ? a.localColorTable : e.globalColorTable)[t];
                return {
                  r: s,
                  g: n,
                  b: r,
                  a: t === o(null) ? (i ? ~~((s + n + r) / 3) : 0) : 255,
                };
              },
              u = (() => {
                try {
                  return new ImageData(a.width, a.height, {
                    colorSpace: "srgb",
                  });
                } catch (t) {
                  if (t instanceof DOMException && "IndexSizeError" === t.name)
                    return null;
                  throw t;
                }
              })();
            if (null == u) throw new EvalError("GIF frame size is to large");
            const p = t.nextByte(),
              f = t.readSubBlocksBin(),
              m = 1 << p,
              v = (t, e) => {
                const i = t >>> 3,
                  s = 7 & t;
                return (
                  ((f[i] + (f[i + 1] << 8) + (f[i + 2] << 16)) &
                    (((1 << e) - 1) << s)) >>>
                  s
                );
              };
            if (l) {
              for (let i = 0, o = p + 1, r = 0, c = [[0]], l = 0; l < 4; l++) {
                if (ms[l] < a.height)
                  for (let t = 0, e = 0; ; ) {
                    const s = i;
                    if (((i = v(r, o)), (r += o + 1), i === m)) {
                      (o = p + 1), (c.length = m + 2);
                      for (let t = 0; t < c.length; t++)
                        c[t] = t < m ? [t] : [];
                    } else {
                      i >= c.length
                        ? c.push(c[s].concat(c[s][0]))
                        : s !== m && c.push(c[s].concat(c[i][0]));
                      for (let s = 0; s < c[i].length; s++) {
                        const { r: o, g: n, b: r, a: h } = d(c[i][s]);
                        u.data.set(
                          [o, n, r, h],
                          ms[l] * a.width + vs[l] * e + (t % (4 * a.width))
                        ),
                          (t += 4);
                      }
                      c.length === 1 << o && o < 12 && o++;
                    }
                    if (
                      t === 4 * a.width * (e + 1) &&
                      (e++, ms[l] + vs[l] * e >= a.height)
                    )
                      break;
                  }
                n?.(
                  t.pos / (t.data.length - 1),
                  s(!1) + 1,
                  u,
                  { x: a.left, y: a.top },
                  { width: e.width, height: e.height }
                );
              }
              (a.image = u), (a.bitmap = await createImageBitmap(u));
            } else {
              for (let t = 0, e = p + 1, i = 0, s = [[0]], o = -4; ; ) {
                const n = t;
                if (((t = v(i, e)), (i += e), t === m)) {
                  (e = p + 1), (s.length = m + 2);
                  for (let t = 0; t < s.length; t++) s[t] = t < m ? [t] : [];
                } else {
                  if (t === m + 1) break;
                  t >= s.length
                    ? s.push(s[n].concat(s[n][0]))
                    : n !== m && s.push(s[n].concat(s[t][0]));
                  for (let e = 0; e < s[t].length; e++) {
                    const { r: i, g: n, b: a, a: r } = d(s[t][e]);
                    u.data.set([i, n, a, r], (o += 4));
                  }
                  s.length >= 1 << e && e < 12 && e++;
                }
              }
              (a.image = u),
                (a.bitmap = await createImageBitmap(u)),
                n?.(
                  (t.pos + 1) / t.data.length,
                  s(!1) + 1,
                  a.image,
                  { x: a.left, y: a.top },
                  { width: e.width, height: e.height }
                );
            }
          })(t, e, i, s, o, n);
          break;
        case 33:
          await (async function (t, e, i, s) {
            switch (t.nextByte()) {
              case 249: {
                const o = e.frames[i(!1)];
                t.pos++;
                const n = t.nextByte();
                (o.GCreserved = (224 & n) >>> 5),
                  (o.disposalMethod = (28 & n) >>> 2),
                  (o.userInputDelayFlag = 2 == (2 & n));
                const a = 1 == (1 & n);
                o.delayTime = 10 * t.nextTwoBytes();
                const r = t.nextByte();
                a && s(r), t.pos++;
                break;
              }
              case 255: {
                t.pos++;
                const i = {
                  identifier: t.getString(8),
                  authenticationCode: t.getString(3),
                  data: t.readSubBlocksBin(),
                };
                e.applicationExtensions.push(i);
                break;
              }
              case 254:
                e.comments.push([i(!1), t.readSubBlocks()]);
                break;
              case 1:
                if (0 === e.globalColorTable.length)
                  throw new EvalError(
                    "plain text extension without global color table"
                  );
                t.pos++,
                  (e.frames[i(!1)].plainTextData = {
                    left: t.nextTwoBytes(),
                    top: t.nextTwoBytes(),
                    width: t.nextTwoBytes(),
                    height: t.nextTwoBytes(),
                    charSize: {
                      width: t.nextTwoBytes(),
                      height: t.nextTwoBytes(),
                    },
                    foregroundColor: t.nextByte(),
                    backgroundColor: t.nextByte(),
                    text: t.readSubBlocks(),
                  });
                break;
              default:
                t.skipSubBlocks();
            }
          })(t, e, s, o);
          break;
        default:
          throw new EvalError("undefined block found");
      }
      return !1;
    }
    const bs =
      /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
    async function xs(t) {
      return new Promise((e) => {
        t.loading = !0;
        const i = new Image();
        (t.element = i),
          i.addEventListener("load", () => {
            (t.loading = !1), e();
          }),
          i.addEventListener("error", () => {
            (t.element = void 0),
              (t.error = !0),
              (t.loading = !1),
              G().error(`${f} loading image: ${t.source}`),
              e();
          }),
          (i.src = t.source);
      });
    }
    async function _s(t) {
      if ("gif" === t.type) {
        t.loading = !0;
        try {
          (t.gifData = await (async function (t, e, i) {
            i || (i = !1);
            const s = await fetch(t);
            if (!s.ok && 404 === s.status)
              throw new EvalError("file not found");
            const o = await s.arrayBuffer(),
              n = {
                width: 0,
                height: 0,
                totalTime: 0,
                colorRes: 0,
                pixelAspectRatio: 0,
                frames: [],
                sortFlag: !1,
                globalColorTable: [],
                backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
                comments: [],
                applicationExtensions: [],
              },
              a = new ys(new Uint8ClampedArray(o));
            if ("GIF89a" !== a.getString(6))
              throw new Error("not a supported GIF file");
            (n.width = a.nextTwoBytes()), (n.height = a.nextTwoBytes());
            const r = a.nextByte(),
              c = 128 == (128 & r);
            (n.colorRes = (112 & r) >>> 4), (n.sortFlag = 8 == (8 & r));
            const l = 1 << (1 + (7 & r)),
              h = a.nextByte();
            (n.pixelAspectRatio = a.nextByte()),
              0 !== n.pixelAspectRatio &&
                (n.pixelAspectRatio = (n.pixelAspectRatio + 15) / 64),
              c && (n.globalColorTable = gs(a, l));
            const d = (() => {
              try {
                return new ImageData(n.width, n.height, { colorSpace: "srgb" });
              } catch (t) {
                if (t instanceof DOMException && "IndexSizeError" === t.name)
                  return null;
                throw t;
              }
            })();
            if (null == d) throw new Error("GIF frame size is to large");
            const { r: u, g: p, b: f } = n.globalColorTable[h];
            d.data.set(c ? [u, p, f, 255] : [0, 0, 0, 0]);
            for (let t = 4; t < d.data.length; t *= 2)
              d.data.copyWithin(t, 0, t);
            n.backgroundImage = d;
            let m = -1,
              v = !0,
              y = -1;
            const g = (t) => (t && (v = !0), m),
              w = (t) => (null != t && (y = t), y);
            try {
              do {
                v &&
                  (n.frames.push({
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    disposalMethod: 0,
                    image: new ImageData(1, 1, { colorSpace: "srgb" }),
                    plainTextData: null,
                    userInputDelayFlag: !1,
                    delayTime: 0,
                    sortFlag: !1,
                    localColorTable: [],
                    reserved: 0,
                    GCreserved: 0,
                  }),
                  m++,
                  (y = -1),
                  (v = !1));
              } while (!(await ws(a, n, i, g, w, e)));
              n.frames.length--;
              for (const t of n.frames) {
                if (t.userInputDelayFlag && 0 === t.delayTime) {
                  n.totalTime = 1 / 0;
                  break;
                }
                n.totalTime += t.delayTime;
              }
              return n;
            } catch (t) {
              if (t instanceof EvalError)
                throw new Error(
                  `error while parsing frame ${m} "${t.message}"`
                );
              throw t;
            }
          })(t.source)),
            (t.gifLoopCount =
              (function (t) {
                for (const e of t.applicationExtensions)
                  if (e.identifier + e.authenticationCode === "NETSCAPE2.0")
                    return e.data[1] + (e.data[2] << 8);
                return NaN;
              })(t.gifData) ?? 0),
            0 === t.gifLoopCount && (t.gifLoopCount = 1 / 0);
        } catch {
          t.error = !0;
        }
        t.loading = !1;
      } else await xs(t);
    }
    async function zs(t) {
      if ("svg" !== t.type) return void (await xs(t));
      t.loading = !0;
      const e = await fetch(t.source);
      e.ok
        ? (t.svgData = await e.text())
        : (G().error(`${f} Image not found`), (t.error = !0)),
        (t.loading = !1);
    }
    function Ms(t, e, i, s) {
      const o = (function (t, e, i) {
          const { svgData: s } = t;
          if (!s) return "";
          const o = Ut(e, i);
          if (s.includes("fill")) return s.replace(bs, () => o);
          const n = s.indexOf(">");
          return `${s.substring(0, n)} fill="${o}"${s.substring(n)}`;
        })(t, i, s.opacity?.value ?? 1),
        n = {
          color: i,
          gif: e.gif,
          data: { ...t, svgData: o },
          loaded: !1,
          ratio: e.width / e.height,
          replaceColor: e.replaceColor,
          source: e.src,
        };
      return new Promise((e) => {
        const i = new Blob([o], { type: "image/svg+xml" }),
          s = URL || window.URL || window.webkitURL || window,
          a = s.createObjectURL(i),
          r = new Image();
        r.addEventListener("load", () => {
          (n.loaded = !0), (n.element = r), e(n), s.revokeObjectURL(a);
        }),
          r.addEventListener("error", async () => {
            s.revokeObjectURL(a);
            const i = { ...t, error: !1, loading: !0 };
            await xs(i), (n.loaded = !0), (n.element = i.element), e(n);
          }),
          (r.src = a);
      });
    }
    class Cs {
      constructor(t) {
        (this.loadImageShape = async (t) => {
          if (!this._engine.loadImage)
            throw new Error(`${f} image shape not initialized`);
          await this._engine.loadImage({
            gif: t.gif,
            name: t.name,
            replaceColor: t.replaceColor ?? !1,
            src: t.src,
          });
        }),
          (this._engine = t);
      }
      addImage(t) {
        this._engine.images || (this._engine.images = []),
          this._engine.images.push(t);
      }
      draw(t) {
        const { context: e, radius: i, particle: s, opacity: o, delta: n } = t,
          a = s.image,
          r = a?.element;
        if (a) {
          if (((e.globalAlpha = o), a.gif && a.gifData)) {
            const t = new OffscreenCanvas(a.gifData.width, a.gifData.height),
              o = t.getContext("2d");
            if (!o)
              throw new Error("could not create offscreen canvas context");
            (o.imageSmoothingQuality = "low"),
              (o.imageSmoothingEnabled = !1),
              o.clearRect(0, 0, t.width, t.height),
              void 0 === s.gifLoopCount &&
                (s.gifLoopCount = a.gifLoopCount ?? 0);
            let r = s.gifFrame ?? 0;
            const c = { x: 0.5 * -a.gifData.width, y: 0.5 * -a.gifData.height },
              l = a.gifData.frames[r];
            if ((void 0 === s.gifTime && (s.gifTime = 0), !l.bitmap)) return;
            switch (
              (e.scale(i / a.gifData.width, i / a.gifData.height),
              l.disposalMethod)
            ) {
              case 4:
              case 5:
              case 6:
              case 7:
              case 0:
                o.drawImage(l.bitmap, l.left, l.top),
                  e.drawImage(t, c.x, c.y),
                  o.clearRect(0, 0, t.width, t.height);
                break;
              case 1:
                o.drawImage(l.bitmap, l.left, l.top), e.drawImage(t, c.x, c.y);
                break;
              case 2:
                o.drawImage(l.bitmap, l.left, l.top),
                  e.drawImage(t, c.x, c.y),
                  o.clearRect(0, 0, t.width, t.height),
                  0 === a.gifData.globalColorTable.length
                    ? o.putImageData(
                        a.gifData.frames[0].image,
                        c.x + l.left,
                        c.y + l.top
                      )
                    : o.putImageData(a.gifData.backgroundImage, c.x, c.y);
                break;
              case 3: {
                const i = o.getImageData(0, 0, t.width, t.height);
                o.drawImage(l.bitmap, l.left, l.top),
                  e.drawImage(t, c.x, c.y),
                  o.clearRect(0, 0, t.width, t.height),
                  o.putImageData(i, 0, 0);
              }
            }
            if (((s.gifTime += n.value), s.gifTime > l.delayTime)) {
              if (
                ((s.gifTime -= l.delayTime), ++r >= a.gifData.frames.length)
              ) {
                if (--s.gifLoopCount <= 0) return;
                (r = 0), o.clearRect(0, 0, t.width, t.height);
              }
              s.gifFrame = r;
            }
            e.scale(a.gifData.width / i, a.gifData.height / i);
          } else if (r) {
            const t = a.ratio,
              s = { x: -i, y: -i },
              o = 2 * i;
            e.drawImage(r, s.x, s.y, o, o / t);
          }
          e.globalAlpha = 1;
        }
      }
      getSidesCount() {
        return 12;
      }
      async init(t) {
        const e = t.actualOptions;
        if (e.preload && this._engine.loadImage)
          for (const t of e.preload) await this._engine.loadImage(t);
      }
      loadShape(t) {
        if ("image" !== t.shape && "images" !== t.shape) return;
        this._engine.images || (this._engine.images = []);
        const e = t.shapeData;
        if (!e) return;
        this._engine.images.find(
          (t) => t.name === e.name || t.source === e.src
        ) ||
          this.loadImageShape(e).then(() => {
            this.loadShape(t);
          });
      }
      particleInit(t, e) {
        if ("image" !== e.shape && "images" !== e.shape) return;
        this._engine.images || (this._engine.images = []);
        const i = this._engine.images,
          s = e.shapeData;
        if (!s) return;
        const o = e.getFillColor(),
          n = i.find((t) => t.name === s.name || t.source === s.src);
        if (!n) return;
        const a = s.replaceColor ?? n.replaceColor;
        n.loading
          ? setTimeout(() => {
              this.particleInit(t, e);
            })
          : (async () => {
              let t;
              (t =
                n.svgData && o
                  ? await Ms(n, s, o, e)
                  : {
                      color: o,
                      data: n,
                      element: n.element,
                      gif: n.gif,
                      gifData: n.gifData,
                      gifLoopCount: n.gifLoopCount,
                      loaded: !0,
                      ratio:
                        s.width && s.height ? s.width / s.height : n.ratio ?? 1,
                      replaceColor: a,
                      source: s.src,
                    }),
                t.ratio || (t.ratio = 1);
              const i = {
                image: t,
                fill: s.fill ?? e.shapeFill,
                close: s.close ?? e.shapeClose,
              };
              (e.image = i.image),
                (e.shapeFill = i.fill),
                (e.shapeClose = i.close);
            })();
      }
    }
    class Ps {
      constructor() {
        (this.src = ""), (this.gif = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.gif && (this.gif = t.gif),
          void 0 !== t.height && (this.height = t.height),
          void 0 !== t.name && (this.name = t.name),
          void 0 !== t.replaceColor && (this.replaceColor = t.replaceColor),
          void 0 !== t.src && (this.src = t.src),
          void 0 !== t.width && (this.width = t.width));
      }
    }
    class Ss {
      constructor(t) {
        (this.id = "imagePreloader"), (this._engine = t);
      }
      getPlugin() {
        return {};
      }
      loadOptions(t, e) {
        if (!e || !e.preload) return;
        t.preload || (t.preload = []);
        const i = t.preload;
        for (const t of e.preload) {
          const e = i.find((e) => e.name === t.name || e.src === t.src);
          if (e) e.load(t);
          else {
            const e = new Ps();
            e.load(t), i.push(e);
          }
        }
      }
      needsPlugin() {
        return !0;
      }
    }
    async function ks(t, e = !0) {
      !(function (t) {
        t.loadImage ||
          (t.loadImage = async (e) => {
            if (!e.name && !e.src)
              throw new Error(`${f} no image source provided`);
            if (
              (t.images || (t.images = []),
              !t.images.find((t) => t.name === e.name || t.source === e.src))
            )
              try {
                const i = {
                  gif: e.gif ?? !1,
                  name: e.name ?? e.src,
                  source: e.src,
                  type: e.src.substring(e.src.length - 3),
                  error: !1,
                  loading: !0,
                  replaceColor: e.replaceColor,
                  ratio: e.width && e.height ? e.width / e.height : void 0,
                };
                t.images.push(i);
                const s = e.gif ? _s : e.replaceColor ? zs : xs;
                await s(i);
              } catch {
                throw new Error(`${f} ${e.name ?? e.src} not found`);
              }
          });
      })(t);
      const i = new Ss(t);
      await t.addPlugin(i, e),
        await t.addShape(["image", "images"], new Cs(t), e);
    }
    class Ds extends Ie {
      constructor() {
        super(), (this.sync = !1);
      }
      load(t) {
        t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Os extends Ie {
      constructor() {
        super(), (this.sync = !1);
      }
      load(t) {
        t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Ts {
      constructor() {
        (this.count = 0), (this.delay = new Ds()), (this.duration = new Os());
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = t.count),
          this.delay.load(t.delay),
          this.duration.load(t.duration));
      }
    }
    class Is {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = this.container,
          i = t.options.life;
        i &&
          ((t.life = {
            delay: e.retina.reduceFactor
              ? ((P(i.delay.value) * (i.delay.sync ? 1 : _())) /
                  e.retina.reduceFactor) *
                1e3
              : 0,
            delayTime: 0,
            duration: e.retina.reduceFactor
              ? ((P(i.duration.value) * (i.duration.sync ? 1 : _())) /
                  e.retina.reduceFactor) *
                1e3
              : 0,
            time: 0,
            count: i.count,
          }),
          t.life.duration <= 0 && (t.life.duration = -1),
          t.life.count <= 0 && (t.life.count = -1),
          t.life && (t.spawning = t.life.delay > 0));
      }
      isEnabled(t) {
        return !t.destroyed;
      }
      loadOptions(t, ...e) {
        t.life || (t.life = new Ts());
        for (const i of e) t.life.load(i?.life);
      }
      update(t, e) {
        if (!this.isEnabled(t) || !t.life) return;
        const i = t.life;
        let s = !1;
        if (t.spawning) {
          if (((i.delayTime += e.value), !(i.delayTime >= t.life.delay)))
            return;
          (s = !0), (t.spawning = !1), (i.delayTime = 0), (i.time = 0);
        }
        if (-1 === i.duration) return;
        if (t.spawning) return;
        if ((s ? (i.time = 0) : (i.time += e.value), i.time < i.duration))
          return;
        if (
          ((i.time = 0), t.life.count > 0 && t.life.count--, 0 === t.life.count)
        )
          return void t.destroy();
        const o = this.container.canvas.size,
          n = D(0, o.width),
          a = D(0, o.width);
        (t.position.x = C(n)),
          (t.position.y = C(a)),
          (t.spawning = !0),
          (i.delayTime = 0),
          (i.time = 0),
          t.reset();
        const r = t.options.life;
        r &&
          ((i.delay = 1e3 * P(r.delay.value)),
          (i.duration = 1e3 * P(r.duration.value)));
      }
    }
    class Es {
      constructor() {
        (this.factor = 4), (this.value = !0);
      }
      load(t) {
        t &&
          (void 0 !== t.factor && (this.factor = t.factor),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class Rs {
      constructor() {
        (this.disable = !1), (this.reduce = new Es());
      }
      load(t) {
        t &&
          (void 0 !== t.disable && (this.disable = t.disable),
          this.reduce.load(t.reduce));
      }
    }
    class Fs {
      constructor(t, e) {
        (this._handleMotionChange = (t) => {
          const e = this._container,
            i = e.actualOptions.motion;
          i &&
            (e.retina.reduceFactor = t.matches
              ? i.disable
                ? 0
                : i.reduce.value
                ? 1 / i.reduce.factor
                : 1
              : 1);
        }),
          (this._container = t),
          (this._engine = e);
      }
      async init() {
        const t = this._container,
          e = t.actualOptions.motion;
        if (!e || (!e.disable && !e.reduce.value))
          return void (t.retina.reduceFactor = 1);
        const i = N("(prefers-reduced-motion: reduce)");
        if (!i) return void (t.retina.reduceFactor = 1);
        this._handleMotionChange(i);
        const s = async () => {
          this._handleMotionChange(i);
          try {
            await t.refresh();
          } catch {}
        };
        void 0 !== i.addEventListener
          ? i.addEventListener("change", s)
          : void 0 !== i.addListener && i.addListener(s);
      }
    }
    class Ls {
      constructor(t) {
        (this.id = "motion"), (this._engine = t);
      }
      getPlugin(t) {
        return new Fs(t, this._engine);
      }
      loadOptions(t, e) {
        if (!this.needsPlugin()) return;
        let i = t.motion;
        i?.load || (t.motion = i = new Rs()), i.load(e?.motion);
      }
      needsPlugin() {
        return !0;
      }
    }
    class As {
      draw(t) {
        const { context: e, particle: i, radius: s } = t,
          o = this.getCenter(i, s),
          n = this.getSidesData(i, s),
          a = n.count.numerator * n.count.denominator,
          r = n.count.numerator / n.count.denominator,
          c = (180 * (r - 2)) / r,
          l = Math.PI - (Math.PI * c) / 180;
        if (e) {
          e.beginPath(), e.translate(o.x, o.y), e.moveTo(0, 0);
          for (let t = 0; t < a; t++)
            e.lineTo(n.length, 0), e.translate(n.length, 0), e.rotate(l);
        }
      }
      getSidesCount(t) {
        const e = t.shapeData;
        return Math.round(P(e?.sides ?? 5));
      }
    }
    class Bs extends As {
      getCenter(t, e) {
        return { x: -e / (t.sides / 3.5), y: -e / 0.76 };
      }
      getSidesData(t, e) {
        const i = t.sides;
        return {
          count: { denominator: 1, numerator: i },
          length: (2.66 * e) / (i / 3),
        };
      }
    }
    class Vs extends As {
      getCenter(t, e) {
        return { x: -e, y: e / 1.66 };
      }
      getSidesCount() {
        return 3;
      }
      getSidesData(t, e) {
        return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
      }
    }
    async function Us(t, e = !0) {
      await (async function (t, e = !0) {
        await t.addShape("polygon", new Bs(), e);
      })(t, e),
        await (async function (t, e = !0) {
          await t.addShape("triangle", new Vs(), e);
        })(t, e);
    }
    class $s {
      constructor() {
        (this.enable = !1), (this.value = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.value && (this.value = D(t.value)));
      }
    }
    class qs {
      constructor() {
        (this.darken = new $s()),
          (this.enable = !1),
          (this.enlighten = new $s()),
          (this.mode = "vertical"),
          (this.speed = 25);
      }
      load(t) {
        t &&
          (void 0 !== t.backColor &&
            (this.backColor = ce.create(this.backColor, t.backColor)),
          this.darken.load(t.darken),
          void 0 !== t.enable && (this.enable = t.enable),
          this.enlighten.load(t.enlighten),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.speed && (this.speed = D(t.speed)));
      }
    }
    class Gs {
      getTransformValues(t) {
        const e = t.roll?.enable && t.roll,
          i = e && e.horizontal,
          s = e && e.vertical;
        return {
          a: i ? Math.cos(e.angle) : void 0,
          d: s ? Math.sin(e.angle) : void 0,
        };
      }
      init(t) {
        !(function (t) {
          const e = t.options.roll;
          if (e?.enable)
            if (
              ((t.roll = {
                enable: e.enable,
                horizontal: "horizontal" === e.mode || "both" === e.mode,
                vertical: "vertical" === e.mode || "both" === e.mode,
                angle: _() * Math.PI * 2,
                speed: P(e.speed) / 360,
              }),
              e.backColor)
            )
              t.backColor = It(e.backColor);
            else if (e.darken.enable && e.enlighten.enable) {
              const i = _() >= 0.5 ? "darken" : "enlighten";
              t.roll.alter = {
                type: i,
                value: P("darken" === i ? e.darken.value : e.enlighten.value),
              };
            } else
              e.darken.enable
                ? (t.roll.alter = { type: "darken", value: P(e.darken.value) })
                : e.enlighten.enable &&
                  (t.roll.alter = {
                    type: "enlighten",
                    value: P(e.enlighten.value),
                  });
          else
            t.roll = {
              enable: !1,
              horizontal: !1,
              vertical: !1,
              angle: 0,
              speed: 0,
            };
        })(t);
      }
      isEnabled(t) {
        const e = t.options.roll;
        return !t.destroyed && !t.spawning && !!e?.enable;
      }
      loadOptions(t, ...e) {
        t.roll || (t.roll = new qs());
        for (const i of e) t.roll.load(i?.roll);
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            const i = t.options.roll,
              s = t.roll;
            if (!s || !i?.enable) return;
            const o = s.speed * e.factor,
              n = 2 * Math.PI;
            (s.angle += o), s.angle > n && (s.angle -= n);
          })(t, e);
      }
    }
    class Hs {
      constructor() {
        (this.enable = !1),
          (this.speed = 0),
          (this.decay = 0),
          (this.sync = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = D(t.speed)),
          void 0 !== t.decay && (this.decay = D(t.decay)),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class js extends Ie {
      constructor() {
        super(),
          (this.animation = new Hs()),
          (this.direction = "clockwise"),
          (this.path = !1),
          (this.value = 0);
      }
      load(t) {
        t &&
          (super.load(t),
          void 0 !== t.direction && (this.direction = t.direction),
          this.animation.load(t.animation),
          void 0 !== t.path && (this.path = t.path));
      }
    }
    class Ws {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.rotate;
        if (!e) return;
        (t.rotate = {
          enable: e.animation.enable,
          value: (P(e.value) * Math.PI) / 180,
        }),
          (t.pathRotation = e.path);
        let i = e.direction;
        if ("random" === i) {
          i = Math.floor(2 * _()) > 0 ? "counter-clockwise" : "clockwise";
        }
        switch (i) {
          case "counter-clockwise":
          case "counterClockwise":
            t.rotate.status = "decreasing";
            break;
          case "clockwise":
            t.rotate.status = "increasing";
        }
        const s = e.animation;
        s.enable &&
          ((t.rotate.decay = 1 - P(s.decay)),
          (t.rotate.velocity =
            (P(s.speed) / 360) * this.container.retina.reduceFactor),
          s.sync || (t.rotate.velocity *= _())),
          (t.rotation = t.rotate.value);
      }
      isEnabled(t) {
        const e = t.options.rotate;
        return (
          !!e && !t.destroyed && !t.spawning && e.animation.enable && !e.path
        );
      }
      loadOptions(t, ...e) {
        t.rotate || (t.rotate = new js());
        for (const i of e) t.rotate.load(i?.rotate);
      }
      update(t, e) {
        this.isEnabled(t) &&
          (!(function (t, e) {
            const i = t.rotate,
              s = t.options.rotate;
            if (!i || !s) return;
            const o = s.animation,
              n = (i.velocity ?? 0) * e.factor,
              a = 2 * Math.PI,
              r = i.decay ?? 1;
            o.enable &&
              ("increasing" === i.status
                ? ((i.value += n), i.value > a && (i.value -= a))
                : ((i.value -= n), i.value < 0 && (i.value += a)),
              i.velocity && 1 !== r && (i.velocity *= r));
          })(t, e),
          (t.rotation = t.rotate?.value ?? 0));
      }
    }
    const Ns = Math.sqrt(2);
    class Xs {
      draw(t) {
        const { context: e, radius: i } = t,
          s = i / Ns,
          o = 2 * s;
        e.rect(-s, -s, o, o);
      }
      getSidesCount() {
        return 4;
      }
    }
    class Ys {
      draw(t) {
        const { context: e, particle: i, radius: s } = t,
          o = i.sides,
          n = i.starInset ?? 2;
        e.moveTo(0, 0 - s);
        for (let t = 0; t < o; t++)
          e.rotate(Math.PI / o),
            e.lineTo(0, 0 - s * n),
            e.rotate(Math.PI / o),
            e.lineTo(0, 0 - s);
      }
      getSidesCount(t) {
        const e = t.shapeData;
        return Math.round(P(e?.sides ?? 5));
      }
      particleInit(t, e) {
        const i = e.shapeData;
        e.starInset = P(i?.inset ?? 2);
      }
    }
    class Zs {
      constructor() {
        (this.enable = !1),
          (this.speed = 0),
          (this.decay = 0),
          (this.sync = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = D(t.speed)),
          void 0 !== t.decay && (this.decay = D(t.decay)),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Qs extends Ie {
      constructor() {
        super(),
          (this.animation = new Zs()),
          (this.direction = "clockwise"),
          (this.enable = !1),
          (this.value = 0);
      }
      load(t) {
        super.load(t),
          t &&
            (this.animation.load(t.animation),
            void 0 !== t.direction && (this.direction = t.direction),
            void 0 !== t.enable && (this.enable = t.enable));
      }
    }
    class Js {
      constructor(t) {
        this.container = t;
      }
      getTransformValues(t) {
        const e = t.tilt?.enable && t.tilt;
        return {
          b: e ? Math.cos(e.value) * e.cosDirection : void 0,
          c: e ? Math.sin(e.value) * e.sinDirection : void 0,
        };
      }
      init(t) {
        const e = t.options.tilt;
        if (!e) return;
        t.tilt = {
          enable: e.enable,
          value: (P(e.value) * Math.PI) / 180,
          sinDirection: _() >= 0.5 ? 1 : -1,
          cosDirection: _() >= 0.5 ? 1 : -1,
        };
        let i = e.direction;
        if ("random" === i) {
          i = Math.floor(2 * _()) > 0 ? "counter-clockwise" : "clockwise";
        }
        switch (i) {
          case "counter-clockwise":
          case "counterClockwise":
            t.tilt.status = "decreasing";
            break;
          case "clockwise":
            t.tilt.status = "increasing";
        }
        const s = t.options.tilt?.animation;
        s?.enable &&
          ((t.tilt.decay = 1 - P(s.decay)),
          (t.tilt.velocity =
            (P(s.speed) / 360) * this.container.retina.reduceFactor),
          s.sync || (t.tilt.velocity *= _()));
      }
      isEnabled(t) {
        const e = t.options.tilt?.animation;
        return !t.destroyed && !t.spawning && !!e?.enable;
      }
      loadOptions(t, ...e) {
        t.tilt || (t.tilt = new Qs());
        for (const i of e) t.tilt.load(i?.tilt);
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            if (!t.tilt || !t.options.tilt) return;
            const i = t.options.tilt.animation,
              s = (t.tilt.velocity ?? 0) * e.factor,
              o = 2 * Math.PI,
              n = t.tilt.decay ?? 1;
            i.enable &&
              ("increasing" === t.tilt.status
                ? ((t.tilt.value += s), t.tilt.value > o && (t.tilt.value -= o))
                : ((t.tilt.value -= s),
                  t.tilt.value < 0 && (t.tilt.value += o)),
              t.tilt.velocity && 1 !== n && (t.tilt.velocity *= n));
          })(t, e);
      }
    }
    class Ks {
      constructor() {
        (this.angle = 50), (this.move = 10);
      }
      load(t) {
        t &&
          (void 0 !== t.angle && (this.angle = D(t.angle)),
          void 0 !== t.move && (this.move = D(t.move)));
      }
    }
    class to {
      constructor() {
        (this.distance = 5), (this.enable = !1), (this.speed = new Ks());
      }
      load(t) {
        if (
          t &&
          (void 0 !== t.distance && (this.distance = D(t.distance)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed)
        )
          if (bt(t.speed)) this.speed.load({ angle: t.speed });
          else {
            const e = t.speed;
            void 0 !== e.min
              ? this.speed.load({ angle: e })
              : this.speed.load(t.speed);
          }
      }
    }
    class eo {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.wobble;
        (t.wobble = e?.enable
          ? {
              angle: _() * Math.PI * 2,
              angleSpeed: P(e.speed.angle) / 360,
              moveSpeed: P(e.speed.move) / 10,
            }
          : { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
          (t.retina.wobbleDistance =
            P(e?.distance ?? 0) * this.container.retina.pixelRatio);
      }
      isEnabled(t) {
        return !t.destroyed && !t.spawning && !!t.options.wobble?.enable;
      }
      loadOptions(t, ...e) {
        t.wobble || (t.wobble = new to());
        for (const i of e) t.wobble.load(i?.wobble);
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            const { wobble: i } = t.options,
              { wobble: s } = t;
            if (!i?.enable || !s) return;
            const o = s.angleSpeed * e.factor,
              n =
                (s.moveSpeed *
                  e.factor *
                  ((t.retina.wobbleDistance ?? 0) * e.factor)) /
                (1e3 / 60),
              a = 2 * Math.PI,
              { position: r } = t;
            (s.angle += o),
              s.angle > a && (s.angle -= a),
              (r.x += n * Math.cos(s.angle)),
              (r.y += n * Math.abs(Math.sin(s.angle)));
          })(t, e);
      }
    }
    let io = !1,
      so = !1;
    const oo = new Map();
    async function no(t) {
      if (!io) {
        if (so)
          return new Promise((t) => {
            const e = setInterval(() => {
              io && (clearInterval(e), t());
            }, 100);
          });
        (so = !0),
          await (async function (t, e = !0) {
            t.emitterShapeManager || (t.emitterShapeManager = new ls(t)),
              t.addEmitterShapeGenerator ||
                (t.addEmitterShapeGenerator = (e, i) => {
                  t.emitterShapeManager?.addShapeGenerator(e, i);
                });
            const i = new hs(t);
            await t.addPlugin(i, e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addPlugin(new Ls(t), e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addShape(["spade", "spades"], new Yi(), e),
              await t.addShape(["heart", "hearts"], new Zi(), e),
              await t.addShape(["diamond", "diamonds"], new Qi(), e),
              await t.addShape(["club", "clubs"], new Ji(), e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addShape("heart", new fs(), e);
          })(t, !1),
          await ks(t, !1),
          await Us(t, !1),
          await (async function (t, e = !0) {
            await t.addShape(["edge", "square"], new Xs(), e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addShape("star", new Ys(), e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addShape(ds, new ps(), e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addParticleUpdater("rotate", (t) => new Ws(t), e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addParticleUpdater("life", (t) => new Is(t), e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addParticleUpdater("roll", () => new Gs(), e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addParticleUpdater("tilt", (t) => new Js(t), e);
          })(t, !1),
          await (async function (t, e = !0) {
            await t.addParticleUpdater("wobble", (t) => new eo(t), e);
          })(t, !1),
          await ji(t),
          (so = !1),
          (io = !0);
      }
    }
    async function ao(t) {
      const e = new Ii();
      let i;
      e.load(t.options);
      const s = (1e3 * e.ticks) / 432e3;
      if (oo.has(t.id) && ((i = oo.get(t.id)), i && !i.destroyed)) {
        const t = i;
        if (t.addEmitter)
          return void t.addEmitter({
            startCount: e.count,
            position: e.position,
            size: { width: 0, height: 0 },
            rate: { delay: 0, quantity: 0 },
            life: { duration: 0.1, count: 1 },
            particles: {
              color: { value: e.colors },
              shape: { type: e.shapes, options: e.shapeOptions },
              life: { count: 1 },
              opacity: {
                value: { min: 0, max: 1 },
                animation: {
                  enable: !0,
                  sync: !0,
                  speed: s,
                  startValue: "max",
                  destroy: "min",
                },
              },
              size: { value: 5 * e.scalar },
              move: {
                angle: { value: e.spread, offset: 0 },
                drift: { min: -e.drift, max: e.drift },
                gravity: { acceleration: 9.81 * e.gravity },
                speed: 3 * e.startVelocity,
                decay: 1 - e.decay,
                direction: -e.angle,
              },
            },
          });
      }
      const o = {
        fullScreen: { enable: !t.canvas, zIndex: e.zIndex },
        fpsLimit: 120,
        particles: {
          number: { value: 0 },
          color: { value: e.colors },
          shape: { type: e.shapes, options: e.shapeOptions },
          opacity: {
            value: { min: 0, max: 1 },
            animation: {
              enable: !0,
              sync: !0,
              speed: s,
              startValue: "max",
              destroy: "min",
            },
          },
          size: { value: 5 * e.scalar },
          links: { enable: !1 },
          life: { count: 1 },
          move: {
            angle: { value: e.spread, offset: 0 },
            drift: { min: -e.drift, max: e.drift },
            enable: !0,
            gravity: { enable: !0, acceleration: 9.81 * e.gravity },
            speed: 3 * e.startVelocity,
            decay: 1 - e.decay,
            direction: -e.angle,
            random: !0,
            straight: !1,
            outModes: { default: "none", bottom: "destroy" },
          },
          rotate: {
            value: e.flat ? 0 : { min: 0, max: 360 },
            direction: "random",
            animation: { enable: !e.flat, speed: 60 },
          },
          tilt: {
            direction: "random",
            enable: !e.flat,
            value: e.flat ? 0 : { min: 0, max: 360 },
            animation: { enable: !0, speed: 60 },
          },
          roll: {
            darken: { enable: !0, value: 25 },
            enable: !e.flat,
            speed: { min: 15, max: 25 },
          },
          wobble: {
            distance: 30,
            enable: !e.flat,
            speed: { min: -15, max: 15 },
          },
        },
        detectRetina: !0,
        motion: { disable: e.disableForReducedMotion },
        emitters: {
          name: "confetti",
          startCount: e.count,
          position: e.position,
          size: { width: 0, height: 0 },
          rate: { delay: 0, quantity: 0 },
          life: { duration: 0.1, count: 1 },
        },
      };
      return (
        (i = await Ti.load({ id: t.id, element: t.canvas, options: o })),
        oo.set(t.id, i),
        i
      );
    }
    async function ro(t, e) {
      let i, s;
      return (
        await no(Ti),
        wt(t) ? ((s = t), (i = e ?? {})) : ((s = "confetti"), (i = t)),
        ao({ id: s, options: i })
      );
    }
    return (
      (ro.create = async (t, e) => {
        if (!t) return ro;
        await no(Ti);
        const i = t.getAttribute("id") || "confetti";
        return (
          t.setAttribute("id", i),
          async (s, o) => {
            let n, a;
            return (
              wt(s) ? ((a = s), (n = o ?? e)) : ((a = i), (n = s)),
              ao({ id: a, canvas: t, options: n })
            );
          }
        );
      }),
      (ro.version = Ti.version),
      j() || (window.confetti = ro),
      e
    );
  })()
);

/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function r(t) {
    return "string" == typeof t;
  }
  function s(t) {
    return "function" == typeof t;
  }
  function t(t) {
    return "number" == typeof t;
  }
  function u(t) {
    return void 0 === t;
  }
  function v(t) {
    return "object" == typeof t;
  }
  function w(t) {
    return !1 !== t;
  }
  function x() {
    return "undefined" != typeof window;
  }
  function y(t) {
    return s(t) || r(t);
  }
  function P(t) {
    return (i = yt(t, ot)) && ze;
  }
  function Q(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function R(t, e) {
    return !e && console.warn(t);
  }
  function S(t, e) {
    return (t && (ot[t] = e) && i && (i[t] = e)) || ot;
  }
  function T() {
    return 0;
  }
  function ea(t) {
    var e,
      r,
      i = t[0];
    if ((v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = gt.length; r-- && !gt[r].targetTest(i); );
      e = gt[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new Vt(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  }
  function fa(t) {
    return t._gsap || ea(Mt(t))[0]._gsap;
  }
  function ga(t, e, r) {
    return (r = t[e]) && s(r)
      ? t[e]()
      : (u(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function ha(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function ia(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ja(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function ka(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    );
  }
  function la(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ma() {
    var t,
      e,
      r = dt.length,
      i = dt.slice(0);
    for (ct = {}, t = dt.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function na(t, e, r, i) {
    dt.length && !L && ma(),
      t.render(e, r, i || (L && e < 0 && (t._initted || t._startAt))),
      dt.length && !L && ma();
  }
  function oa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2
      ? e
      : r(t)
      ? t.trim()
      : t;
  }
  function pa(t) {
    return t;
  }
  function qa(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ta(t, e) {
    for (var r in e)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function ua(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function va(t) {
    var e = t.parent || I,
      r = t.keyframes
        ? (function _setKeyframeDefaults(i) {
            return function (t, e) {
              for (var r in e)
                r in t ||
                  ("duration" === r && i) ||
                  "ease" === r ||
                  (t[r] = e[r]);
            };
          })(Z(t.keyframes))
        : qa;
    if (w(t.inherit))
      for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function xa(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
      s = t[i];
    if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)),
      e._next ? (e._next._prev = e) : (t[i] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  }
  function ya(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  }
  function za(t, e) {
    t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  }
  function Aa(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function Ca(t, e, r, i) {
    return (
      t._startAt &&
      (L
        ? t._startAt.revert(ht)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, i))
    );
  }
  function Ea(t) {
    return t._repeat ? Tt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function Ga(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function Ha(t) {
    return (t._end = ja(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0)
    ));
  }
  function Ia(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = ja(
          r._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Ha(t),
        r._dirty || Aa(r, t)),
      t
    );
  }
  function Ja(t, e) {
    var r;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((r = Ga(t.rawTime(), e)),
        (!e._dur || Ot(0, e.totalDuration(), r) - e._tTime > X) &&
          e.render(r, !0)),
      Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -X;
    }
  }
  function Ka(e, r, i, n) {
    return (
      r.parent && za(r),
      (r._start = ja(
        (t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay
      )),
      (r._end = ja(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      xa(e, r, "_first", "_last", e._sort ? "_start" : 0),
      bt(r) || (e._recent = r),
      n || Ja(e, r),
      e._ts < 0 && Ia(e, e._tTime),
      e
    );
  }
  function La(t, e) {
    return (
      (ot.ScrollTrigger || Q("scrollTrigger", e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  }
  function Ma(t, e, r, i, n) {
    return (
      Qt(t, e, n),
      t._initted
        ? !r &&
          t._pt &&
          !L &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          f !== Rt.frame
          ? (dt.push(t), (t._lazy = [n, i]), 1)
          : void 0
        : 1
    );
  }
  function Ra(t, e, r, i) {
    var n = t._repeat,
      a = ja(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !i && (t._time *= a / t._dur),
      (t._dur = a),
      (t._tDur = n ? (n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n)) : a),
      0 < s && !i && Ia(t, (t._tTime = t._tDur * s)),
      t.parent && Ha(t),
      r || Aa(t.parent, t),
      t
    );
  }
  function Sa(t) {
    return t instanceof Xt ? Aa(t) : Ra(t, t._dur);
  }
  function Va(e, r, i) {
    var n,
      a,
      s = t(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if ((s && (u.duration = r[1]), (u.parent = i), e)) {
      for (n = u, a = i; a && !("immediateRender" in n); )
        (n = a.vars.defaults || {}), (a = w(a.vars.inherit) && a.parent);
      (u.immediateRender = w(n.immediateRender)),
        e < 2 ? (u.runBackwards = 1) : (u.startAt = r[o - 1]);
    }
    return new $t(r[0], u, r[1 + o]);
  }
  function Wa(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Ya(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : "";
  }
  function _a(t, e) {
    return (
      t &&
      v(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && v(t[0]))) &&
      !t.nodeType &&
      t !== h
    );
  }
  function cb(r) {
    return (
      (r = Mt(r)[0] || R("Invalid scope") || {}),
      function (t) {
        var e = r.current || r.nativeElement || r;
        return Mt(
          t,
          e.querySelectorAll
            ? e
            : e === r
            ? R("Invalid scope") || a.createElement("div")
            : r
        );
      }
    );
  }
  function db(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function eb(t) {
    if (s(t)) return t;
    var p = v(t) ? t : { each: t },
      _ = jt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      y = {},
      e = 0 < m && m < 1,
      T = isNaN(m) || e,
      b = p.axis,
      w = m,
      x = m;
    return (
      r(m)
        ? (w = x = { center: 0.5, edges: 0.5, end: 1 }[m] || 0)
        : !e && T && ((w = m[0]), (x = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || p).length,
          c = y[d];
        if (!c) {
          if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
            for (
              h = -U;
              h < (h = r[f++].getBoundingClientRect().left) && f < d;

            );
            f < d && f--;
          }
          for (
            c = y[d] = [],
              i = T ? Math.min(f, d) * w - 0.5 : m % f,
              n = f === U ? 0 : T ? (d * x) / f - 0.5 : (m / f) | 0,
              l = U,
              u = h = 0;
            u < d;
            u++
          )
            (a = (u % f) - i),
              (s = n - ((u / f) | 0)),
              (c[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          "random" === m && db(c),
            (c.max = h - l),
            (c.min = l),
            (c.v = d =
              (parseFloat(p.amount) ||
                parseFloat(p.each) *
                  (d < f
                    ? d - 1
                    : b
                    ? "y" === b
                      ? d / f
                      : f
                    : Math.max(f, d / f)) ||
                0) * ("edges" === m ? -1 : 1)),
            (c.b = d < 0 ? g - d : g),
            (c.u = Ya(p.amount || p.each) || 0),
            (_ = _ && d < 0 ? Yt(_) : _);
        }
        return (
          (d = (c[t] - c.min) / c.max || 0),
          ja(c.b + (_ ? _(d) : d) * c.v) + c.u
        );
      }
    );
  }
  function fb(i) {
    var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function (e) {
      var r = ja(Math.round(parseFloat(e) / i) * i * n);
      return (r - (r % 1)) / n + (t(e) ? 0 : Ya(e));
    };
  }
  function gb(h, e) {
    var l,
      f,
      r = Z(h);
    return (
      !r &&
        v(h) &&
        ((l = r = h.radius || U),
        h.values
          ? ((h = Mt(h.values)), (f = !t(h[0])) && (l *= l))
          : (h = fb(h.increment))),
      Wa(
        e,
        r
          ? s(h)
            ? function (t) {
                return (f = h(t)), Math.abs(f - t) <= l ? f : t;
              }
            : function (e) {
                for (
                  var r,
                    i,
                    n = parseFloat(f ? e.x : e),
                    a = parseFloat(f ? e.y : 0),
                    s = U,
                    o = 0,
                    u = h.length;
                  u--;

                )
                  (r = f
                    ? (r = h[u].x - n) * r + (i = h[u].y - a) * i
                    : Math.abs(h[u] - n)) < s && ((s = r), (o = u));
                return (
                  (o = !l || s <= l ? h[o] : e),
                  f || o === e || t(e) ? o : o + Ya(e)
                );
              }
          : fb(h)
      )
    );
  }
  function hb(t, e, r, i) {
    return Wa(Z(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return Z(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) *
                r *
                i
            ) / i;
    });
  }
  function lb(e, r, t) {
    return Wa(t, function (t) {
      return e[~~r(t)];
    });
  }
  function ob(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? at : tt)),
        (s +=
          t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function rb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = U;
    for (i in s)
      (n = s[i] - e) < 0 == !!r &&
        n &&
        o > (n = Math.abs(n)) &&
        ((a = i), (o = n));
    return a;
  }
  function tb(t) {
    return (
      za(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!L),
      t.progress() < 1 && Ct(t, "onInterrupt"),
      t
    );
  }
  function wb(t) {
    if (x() && t) {
      var e = (t = (!t.name && t.default) || t).name,
        r = s(t),
        i =
          e && !r && t.init
            ? function () {
                this._props = [];
              }
            : t,
        n = {
          init: T,
          render: he,
          add: Wt,
          kill: ce,
          modifier: fe,
          rawVars: 0,
        },
        a = { targetTest: 0, get: 0, getSetter: ne, aliases: {}, register: 0 };
      if ((Ft(), t !== i)) {
        if (pt[e]) return;
        qa(i, qa(ua(t, n), a)),
          yt(i.prototype, yt(n, ua(t, a))),
          (pt[(i.prop = e)] = i),
          t.targetTest && (gt.push(i), (ft[e] = 1)),
          (e =
            ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      S(e, i), t.register && t.register(ze, i, _e);
    } else t && At.push(t);
  }
  function zb(t, e, r) {
    return (
      ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        St +
        0.5) |
      0
    );
  }
  function Ab(e, r, i) {
    var n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d,
      c,
      p = e ? (t(e) ? [e >> 16, (e >> 8) & St, e & St] : 0) : zt.black;
    if (!p) {
      if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), zt[e]))
        p = zt[e];
      else if ("#" === e.charAt(0)) {
        if (
          (e.length < 6 &&
            (e =
              "#" +
              (n = e.charAt(1)) +
              n +
              (a = e.charAt(2)) +
              a +
              (s = e.charAt(3)) +
              s +
              (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
          9 === e.length)
        )
          return [
            (p = parseInt(e.substr(1, 6), 16)) >> 16,
            (p >> 8) & St,
            p & St,
            parseInt(e.substr(7), 16) / 255,
          ];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & St, e & St];
      } else if ("hsl" === e.substr(0, 3))
        if (((p = c = e.match(tt)), r)) {
          if (~e.indexOf("="))
            return (p = e.match(et)), i && p.length < 4 && (p[3] = 1), p;
        } else
          (o = (+p[0] % 360) / 360),
            (u = p[1] / 100),
            (n =
              2 * (h = p[2] / 100) -
              (a = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
            3 < p.length && (p[3] *= 1),
            (p[0] = zb(o + 1 / 3, n, a)),
            (p[1] = zb(o, n, a)),
            (p[2] = zb(o - 1 / 3, n, a));
      else p = e.match(tt) || zt.transparent;
      p = p.map(Number);
    }
    return (
      r &&
        !c &&
        ((n = p[0] / St),
        (a = p[1] / St),
        (s = p[2] / St),
        (h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2),
        l === f
          ? (o = u = 0)
          : ((d = l - f),
            (u = 0.5 < h ? d / (2 - l - f) : d / (l + f)),
            (o =
              l === n
                ? (a - s) / d + (a < s ? 6 : 0)
                : l === a
                ? (s - n) / d + 2
                : (n - a) / d + 4),
            (o *= 60)),
        (p[0] = ~~(o + 0.5)),
        (p[1] = ~~(100 * u + 0.5)),
        (p[2] = ~~(100 * h + 0.5))),
      i && p.length < 4 && (p[3] = 1),
      p
    );
  }
  function Bb(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(Et).forEach(function (t) {
        var e = t.match(rt) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function Cb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(Et),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = Ab(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      r && ((a = Bb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(Et, "1").split(rt)).length - 1; l < s; l++)
        o +=
          n[l] +
          (~i.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Et)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function Fb(t) {
    var e,
      r = t.join(" ");
    if (((Et.lastIndex = 0), Et.test(r)))
      return (
        (e = Dt.test(r)),
        (t[1] = Cb(t[1], e)),
        (t[0] = Cb(t[0], e, Bb(t[1]))),
        !0
      );
  }
  function Ob(t) {
    var e = (t + "").split("("),
      r = Lt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      i,
                      n = {},
                      a = t.substr(1, t.length - 3).split(":"),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (i = r.substr(0, e)),
                      (n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i),
                      (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : (function _valueInParentheses(t) {
                var e = t.indexOf("(") + 1,
                  r = t.indexOf(")"),
                  i = t.indexOf("(", e);
                return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
              })(t)
                .split(",")
                .map(oa)
        )
      : Lt._CE && It.test(t)
      ? Lt._CE("", t)
      : r;
  }
  function Qb(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Xt
        ? Qb(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline
            ? Qb(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  }
  function Sb(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      ha(t, function (t) {
        for (var e in ((Lt[t] = ot[t] = a), (Lt[(n = t.toLowerCase())] = r), a))
          Lt[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Lt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function Tb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Ub(r, t, e) {
    function Jm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / N) * (Math.asin(1 / i) || 0),
      s =
        "out" === r
          ? Jm
          : "in" === r
          ? function (t) {
              return 1 - Jm(1 - t);
            }
          : Tb(Jm);
    return (
      (n = N / n),
      (s.config = function (t, e) {
        return Ub(r, t, e);
      }),
      s
    );
  }
  function Vb(e, r) {
    function Rm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Rm
        : "in" === e
        ? function (t) {
            return 1 - Rm(1 - t);
          }
        : Tb(Rm);
    return (
      (t.config = function (t) {
        return Vb(e, t);
      }),
      t
    );
  }
  var F,
    L,
    l,
    I,
    h,
    n,
    a,
    i,
    o,
    f,
    d,
    c,
    p,
    _,
    m,
    g,
    b,
    O,
    k,
    M,
    C,
    A,
    z,
    E,
    D,
    B,
    Y,
    j,
    q = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    V = { duration: 0.5, overwrite: !1, delay: 0 },
    U = 1e8,
    X = 1 / U,
    N = 2 * Math.PI,
    G = N / 4,
    W = 0,
    K = Math.sqrt,
    J = Math.cos,
    H = Math.sin,
    $ =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    Z = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = { suppressEvents: !0, isStart: !0, kill: !1 },
    ht = { suppressEvents: !0, kill: !1 },
    lt = { suppressEvents: !0 },
    ft = {},
    dt = [],
    ct = {},
    pt = {},
    _t = {},
    mt = 30,
    gt = [],
    vt = "",
    yt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Tt = function _animationCycle(t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    bt = function _isFromOrFromStart(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    wt = { _start: 0, endTime: T, totalDuration: T },
    xt = function _parsePosition(t, e, i) {
      var n,
        a,
        s,
        o = t.labels,
        u = t._recent || wt,
        h = t.duration() >= U ? u.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in o)
        ? ((a = e.charAt(0)),
          (s = "%" === e.substr(-1)),
          (n = e.indexOf("=")),
          "<" === a || ">" === a
            ? (0 <= n && (e = e.replace(/=/, "")),
              ("<" === a ? u._start : u.endTime(0 <= u._repeat)) +
                (parseFloat(e.substr(1)) || 0) *
                  (s ? (n < 0 ? u : i).totalDuration() / 100 : 1))
            : n < 0
            ? (e in o || (o[e] = h), o[e])
            : ((a = parseFloat(e.charAt(n - 1) + e.substr(n + 1))),
              s && i && (a = (a / 100) * (Z(i) ? i[0] : i).totalDuration()),
              1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a))
        : null == e
        ? h
        : +e;
    },
    Ot = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    kt = [].slice,
    Mt = function toArray(t, e, i) {
      return l && !e && l.selector
        ? l.selector(t)
        : !r(t) || i || (!n && Ft())
        ? Z(t)
          ? (function _flatten(t, e, i) {
              return (
                void 0 === i && (i = []),
                t.forEach(function (t) {
                  return (r(t) && !e) || _a(t, 1)
                    ? i.push.apply(i, Mt(t))
                    : i.push(t);
                }) || i
              );
            })(t, i)
          : _a(t)
          ? kt.call(t, 0)
          : t
          ? [t]
          : []
        : kt.call((e || a).querySelectorAll(t), 0);
    },
    Pt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Wa(n, function (t) {
        return r + (((t - e) / a) * s || 0);
      });
    },
    Ct = function _callback(t, e, r) {
      var i,
        n,
        a,
        s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
      if (o)
        return (
          (i = s[e + "Params"]),
          (n = s.callbackScope || t),
          r && dt.length && ma(),
          h && (l = h),
          (a = i ? o.apply(n, i) : o.call(n)),
          (l = u),
          a
        );
    },
    At = [],
    St = 255,
    zt = {
      aqua: [0, St, St],
      lime: [0, St, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, St],
      navy: [0, 0, 128],
      white: [St, St, St],
      olive: [128, 128, 0],
      yellow: [St, St, 0],
      orange: [St, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [St, 0, 0],
      pink: [St, 192, 203],
      cyan: [0, St, St],
      transparent: [St, St, St, 0],
    },
    Et = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in zt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Dt = /hsl[a]?\(/,
    Rt =
      ((k = Date.now),
      (M = 500),
      (C = 33),
      (A = k()),
      (z = A),
      (D = E = 1e3 / 240),
      (g = {
        time: 0,
        frame: 0,
        tick: function tick() {
          yl(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return b / (1e3 / (t || 60));
        },
        wake: function wake() {
          o &&
            (!n &&
              x() &&
              ((h = n = window),
              (a = h.document || {}),
              (ot.gsap = ze),
              (h.gsapVersions || (h.gsapVersions = [])).push(ze.version),
              P(i || h.GreenSockGlobals || (!h.gsap && h) || {}),
              (m = h.requestAnimationFrame),
              At.forEach(wb)),
            p && g.sleep(),
            (_ =
              m ||
              function (t) {
                return setTimeout(t, (D - 1e3 * g.time + 1) | 0);
              }),
            (c = 1),
            yl(2));
        },
        sleep: function sleep() {
          (m ? h.cancelAnimationFrame : clearTimeout)(p), (c = 0), (_ = T);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (M = t || 1 / 0), (C = Math.min(e || 33, M));
        },
        fps: function fps(t) {
          (E = 1e3 / (t || 240)), (D = 1e3 * g.time + E);
        },
        add: function add(n, t, e) {
          var a = t
            ? function (t, e, r, i) {
                n(t, e, r, i), g.remove(a);
              }
            : n;
          return g.remove(n), B[e ? "unshift" : "push"](a), Ft(), a;
        },
        remove: function remove(t, e) {
          ~(e = B.indexOf(t)) && B.splice(e, 1) && e <= O && O--;
        },
        _listeners: (B = []),
      })),
    Ft = function _wake() {
      return !c && Rt.wake();
    },
    Lt = {},
    It = /^[\d.\-M][\d.\-,\s]/,
    Bt = /["']/g,
    Yt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    jt = function _parseEase(t, e) {
      return (t && (s(t) ? t : Lt[t] || Ob(t))) || e;
    };
  function yl(t) {
    var e,
      r,
      i,
      n,
      a = k() - z,
      s = !0 === t;
    if (
      (M < a && (A += a - C),
      (0 < (e = (i = (z += a) - A) - D) || s) &&
        ((n = ++g.frame),
        (b = i - 1e3 * g.time),
        (g.time = i /= 1e3),
        (D += e + (E <= e ? 4 : E - e)),
        (r = 1)),
      s || (p = _(yl)),
      r)
    )
      for (O = 0; O < B.length; O++) B[O](i, b, n, t);
  }
  function gn(t) {
    return t < j
      ? Y * t * t
      : t < 0.7272727272727273
      ? Y * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? Y * (t -= 2.25 / 2.75) * t + 0.9375
      : Y * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  ha("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Sb(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Lt.Linear.easeNone = Lt.none = Lt.Linear.easeIn),
    Sb("Elastic", Ub("in"), Ub("out"), Ub()),
    (Y = 7.5625),
    (j = 1 / 2.75),
    Sb(
      "Bounce",
      function (t) {
        return 1 - gn(1 - t);
      },
      gn
    ),
    Sb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Sb("Circ", function (t) {
      return -(K(1 - t * t) - 1);
    }),
    Sb("Sine", function (t) {
      return 1 === t ? 1 : 1 - J(t * G);
    }),
    Sb("Back", Vb("in"), Vb("out"), Vb()),
    (Lt.SteppedEase =
      Lt.steps =
      ot.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * Ot(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (V.ease = Lt["quad.out"]),
    ha(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (vt += t + "," + t + "Params,");
      }
    );
  var qt,
    Vt = function GSCache(t, e) {
      (this.id = W++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : ga),
        (this.set = e ? e.getSetter : ne);
    },
    Ut =
      (((qt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (qt.duration = function duration(t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (qt.totalDuration = function totalDuration(t) {
        return arguments.length
          ? ((this._dirty = 0),
            Ra(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (qt.totalTime = function totalTime(t, e) {
        if ((Ft(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            Ka(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === X) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), na(this, t, e)),
          this
        );
      }),
      (qt.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Ea(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (qt.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : 0 < this.rawTime()
          ? 1
          : 0;
      }),
      (qt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                Ea(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : 0 < this.rawTime()
          ? 1
          : 0;
      }),
      (qt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? Tt(this._tTime, r) + 1
          : 1;
      }),
      (qt.timeScale = function timeScale(t, e) {
        if (!arguments.length) return this._rts === -X ? 0 : this._rts;
        if (this._rts === t) return this;
        var r =
          this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -X ? 0 : this._rts),
          this.totalTime(Ot(-Math.abs(this._delay), this._tDur, r), !1 !== e),
          Ha(this),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this)
        );
      }),
      (qt.paused = function paused(t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ft(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== X &&
                      (this._tTime -= X)
                  ))),
            this)
          : this._ps;
      }),
      (qt.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            !e || (!e._sort && this.parent) || Ka(e, this, t - this._delay),
            this
          );
        }
        return this._start;
      }),
      (qt.endTime = function endTime(t) {
        return (
          this._start +
          (w(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (qt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ga(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (qt.revert = function revert(t) {
        void 0 === t && (t = lt);
        var e = L;
        return (
          (L = t),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          "nested" !== this.data && !1 !== t.kill && this.kill(),
          (L = e),
          this
        );
      }),
      (qt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
        return !this.parent && this._sat ? this._sat.globalTime(t) : r;
      }),
      (qt.repeat = function repeat(t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Sa(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (qt.repeatDelay = function repeatDelay(t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), Sa(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (qt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (qt.seek = function seek(t, e) {
        return this.totalTime(xt(this, t), w(e));
      }),
      (qt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, w(e));
      }),
      (qt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (qt.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (qt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (qt.resume = function resume() {
        return this.paused(!1);
      }),
      (qt.reversed = function reversed(t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -X : 0)),
            this)
          : this._rts < 0;
      }),
      (qt.invalidate = function invalidate() {
        return (this._initted = this._act = 0), (this._zTime = -X), this;
      }),
      (qt.isActive = function isActive() {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - X
          )
        );
      }),
      (qt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((i[t] = e),
                r && (i[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete i[t],
            this)
          : i[t];
      }),
      (qt.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function Co() {
            var t = i.then;
            (i.then = null),
              s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
              e(r),
              (i.then = t);
          }
          var r = s(t) ? t : pa;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
          (!i._tTime && i._ts < 0)
            ? Co()
            : (i._prom = Co);
        });
      }),
      (qt.kill = function kill() {
        tb(this);
      }),
      Animation);
  function Animation(t) {
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Ra(this, +t.duration, 1, 1),
      (this.data = t.data),
      l && (this._ctx = l).data.push(this),
      c || Rt.wake();
  }
  qa(Ut.prototype, {
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
    _zTime: -X,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Xt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = w(t.sortChildren)),
        I && Ka(t.parent || I, _assertThisInitialized(r), e),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var e = Timeline.prototype;
    return (
      (e.to = function to(t, e, r) {
        return Va(0, arguments, this), this;
      }),
      (e.from = function from(t, e, r) {
        return Va(1, arguments, this), this;
      }),
      (e.fromTo = function fromTo(t, e, r, i) {
        return Va(2, arguments, this), this;
      }),
      (e.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          va(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new $t(t, e, xt(this, r), 1),
          this
        );
      }),
      (e.call = function call(t, e, r) {
        return Ka(this, $t.delayedCall(0, t, e), r);
      }),
      (e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new $t(t, r, xt(this, n)),
          this
        );
      }),
      (e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
        return (
          (r.runBackwards = 1),
          (va(r).immediateRender = w(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, a, s)
        );
      }),
      (e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
        return (
          (i.startAt = r),
          (va(i).immediateRender = w(i.immediateRender)),
          this.staggerTo(t, e, i, n, a, s, o)
        );
      }),
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : ja(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (
          (this !== I && m < v && 0 <= t && (v = m),
          v !== this._tTime || r || y)
        ) {
          if (
            (_ !== this._time &&
              g &&
              ((v += this._time - _), (t += this._time - _)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (_ = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((c = this._yoyo),
              (o = g + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * o + t, e, r);
            if (
              ((i = ja(v % o)),
              v === m
                ? ((s = this._repeat), (i = g))
                : ((s = ~~(v / o)) && s === v / o && ((i = g), s--),
                  g < i && (i = g)),
              (d = Tt(this._tTime, o)),
              !_ &&
                this._tTime &&
                d !== s &&
                this._tTime - d * o - this._dur <= 0 &&
                (d = s),
              c && 1 & s && ((i = g - i), (p = 1)),
              s !== d && !this._lock)
            ) {
              var T = c && 1 & d,
                b = T === (c && 1 & s);
              if (
                (s < d && (T = !T),
                (_ = T ? 0 : v % g ? g : v),
                (this._lock = 1),
                (this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0),
                (this._tTime = v),
                !e && this.parent && Ct(this, "onRepeat"),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                (_ && _ !== this._time) ||
                  u != !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((g = this._dur),
                (m = this._tDur),
                b &&
                  ((this._lock = 2),
                  (_ = T ? g : -1e-4),
                  this.render(_, !0),
                  this.vars.repeatRefresh && !p && this.invalidate()),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              Qb(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if ("isPause" === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, ja(_), ja(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (_ = 0)),
            !_ && i && !e && !s && (Ct(this, "onStart"), this._tTime !== v))
          )
            return this;
          if (_ <= i && 0 <= t)
            for (n = this._first; n; ) {
              if (
                ((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = -X);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (
                ((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (w - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (w - n._start) * n._ts,
                    e,
                    r || (L && (n._initted || n._startAt))
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = w ? -X : X);
                  break;
                }
              }
              n = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = f), Ha(this), this.render(t, e, r);
          this._onUpdate && !e && Ct(this, "onUpdate", !0),
            ((v === m && this._tTime >= this.totalDuration()) || (!v && _)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) ||
                  !((v === m && 0 < this._ts) || (!v && this._ts < 0)) ||
                  za(this, 1),
                e ||
                  (t < 0 && !_) ||
                  (!v && !_ && m) ||
                  (Ct(
                    this,
                    v === m && 0 <= t ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  !this._prom ||
                    (v < m && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (e.add = function add(e, i) {
        var n = this;
        if ((t(i) || (i = xt(this, i, e)), !(e instanceof Ut))) {
          if (Z(e))
            return (
              e.forEach(function (t) {
                return n.add(t, i);
              }),
              this
            );
          if (r(e)) return this.addLabel(e, i);
          if (!s(e)) return this;
          e = $t.delayedCall(0, e);
        }
        return this !== e ? Ka(this, e, i) : this;
      }),
      (e.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -U);
        for (var n = [], a = this._first; a; )
          a._start >= i &&
            (a instanceof $t
              ? e && n.push(a)
              : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
            (a = a._next);
        return n;
      }),
      (e.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (e.remove = function remove(t) {
        return r(t)
          ? this.removeLabel(t)
          : s(t)
          ? this.killTweensOf(t)
          : (ya(this, t),
            t === this._recent && (this._recent = this._last),
            Aa(this));
      }),
      (e.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ja(
                Rt.time -
                  (0 < this._ts
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function addLabel(t, e) {
        return (this.labels[t] = xt(this, e)), this;
      }),
      (e.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (e.addPause = function addPause(t, e, r) {
        var i = $t.delayedCall(0, e || T, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Ka(this, i, xt(this, t))
        );
      }),
      (e.removePause = function removePause(t) {
        var e = this._first;
        for (t = xt(this, t); e; )
          e._start === t && "isPause" === e.data && za(e), (e = e._next);
      }),
      (e.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          Nt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (e.getTweensOf = function getTweensOf(e, r) {
        for (var i, n = [], a = Mt(e), s = this._first, o = t(r); s; )
          s instanceof $t
            ? la(s._targets, a) &&
              (o
                ? (!Nt || (s._initted && s._ts)) &&
                  s.globalTime(0) <= r &&
                  s.globalTime(s.totalDuration()) > r
                : !r || s.isActive()) &&
              n.push(s)
            : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i),
            (s = s._next);
        return n;
      }),
      (e.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r,
          i = this,
          n = xt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = $t.to(
            i,
            qa(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (a && "time" in a ? a.time : i._time)) / i.timeScale()
                  ) ||
                  X,
                onStart: function onStart() {
                  if ((i.pause(), !r)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (n - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      );
                    h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0),
                      (r = 1);
                  }
                  s && s.apply(h, o || []);
                },
              },
              e
            )
          );
        return u ? h.render(0) : h;
      }),
      (e.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, qa({ startAt: { time: xt(this, t) } }, r));
      }),
      (e.recent = function recent() {
        return this._recent;
      }),
      (e.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t));
      }),
      (e.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t), 1);
      }),
      (e.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + X);
      }),
      (e.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return Aa(this);
      }),
      (e.invalidate = function invalidate(t) {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(t), (e = e._next);
        return i.prototype.invalidate.call(this, t);
      }),
      (e.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          Aa(this)
        );
      }),
      (e.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = U;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -t : t)
          );
        if (a._dirty) {
          for (i = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              o < (r = s._start) && a._sort && s._ts && !a._lock
                ? ((a._lock = 1), (Ka(a, s, r - s._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                s._ts &&
                ((n -= r),
                ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                  ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)),
                a.shiftChildren(-r, !1, -Infinity),
                (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          Ra(a, a === I && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((I._ts && (na(I, Ga(t, I)), (f = Rt.frame)), Rt.frame >= mt)) {
          mt += q.autoSleep || 120;
          var e = I._first;
          if ((!e || !e._ts) && q.autoSleep && Rt._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Rt.sleep();
          }
        }
      }),
      Timeline
    );
  })(Ut);
  qa(Xt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function ac(t, e, i, n, a, o) {
    var u, h, l, f;
    if (
      pt[t] &&
      !1 !==
        (u = new pt[t]()).init(
          a,
          u.rawVars
            ? e[t]
            : (function _processVars(t, e, i, n, a) {
                if (
                  (s(t) && (t = Kt(t, a, e, i, n)),
                  !v(t) || (t.style && t.nodeType) || Z(t) || $(t))
                )
                  return r(t) ? Kt(t, a, e, i, n) : t;
                var o,
                  u = {};
                for (o in t) u[o] = Kt(t[o], a, e, i, n);
                return u;
              })(e[t], n, a, o, i),
          i,
          n,
          o
        ) &&
      ((i._pt = h = new _e(i._pt, a, t, 0, 1, u.render, u, 0, u.priority)),
      i !== d)
    )
      for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--; )
        l[u._props[f]] = h;
    return u;
  }
  function gc(t, r, e, i) {
    var n,
      a,
      s = r.ease || i || "power1.inOut";
    if (Z(r))
      (a = e[t] || (e[t] = [])),
        r.forEach(function (t, e) {
          return a.push({ t: (e / (r.length - 1)) * 100, v: t, e: s });
        });
    else
      for (n in r)
        (a = e[n] || (e[n] = [])),
          "ease" === n || a.push({ t: parseFloat(t), v: r[n], e: s });
  }
  var Nt,
    Gt,
    Wt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
      s(n) && (n = n(a || 0, t, o));
      var d,
        c = t[e],
        p =
          "get" !== i
            ? i
            : s(c)
            ? l
              ? t[
                  e.indexOf("set") || !s(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : c,
        _ = s(c) ? (l ? re : te) : Zt;
      if (
        (r(n) &&
          (~n.indexOf("random(") && (n = ob(n)),
          "=" === n.charAt(1) &&
            ((!(d = ka(p, n) + (Ya(p) || 0)) && 0 !== d) || (n = d))),
        !f || p !== n || Gt)
      )
        return isNaN(p * n) || "" === n
          ? (c || e in t || Q(e, n),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                d,
                c,
                p,
                _ = new _e(this._pt, t, e, 0, 1, ue, null, n),
                m = 0,
                g = 0;
              for (
                _.b = r,
                  _.e = i,
                  r += "",
                  (c = ~(i += "").indexOf("random(")) && (i = ob(i)),
                  a && (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
                  u = r.match(it) || [];
                (o = it.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((d = parseFloat(u[g - 1]) || 0),
                    (_._pt = {
                      _next: _._pt,
                      p: f || 1 === g ? f : ",",
                      s: d,
                      c: "=" === l.charAt(1) ? ka(d, l) - d : parseFloat(l) - d,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = it.lastIndex));
              return (
                (_.c = m < i.length ? i.substring(m, i.length) : ""),
                (_.fp = s),
                (nt.test(i) || c) && (_.e = 0),
                (this._pt = _)
              );
            }.call(this, t, e, p, n, _, h || q.stringFilter, l))
          : ((d = new _e(
              this._pt,
              t,
              e,
              +p || 0,
              n - (p || 0),
              "boolean" == typeof c ? se : ae,
              0,
              _
            )),
            l && (d.fp = l),
            u && d.modifier(u, this, t),
            (this._pt = d));
    },
    Qt = function _initTween(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        x = m.runBackwards,
        O = m.yoyoEase,
        k = m.keyframes,
        M = m.autoRevert,
        P = t._dur,
        C = t._startAt,
        A = t._targets,
        S = t.parent,
        z = S && "nested" === S.data ? S.vars.targets : A,
        E = "auto" === t._overwrite && !F,
        D = t.timeline;
      if (
        (!D || (k && g) || (g = "none"),
        (t._ease = jt(g, V.ease)),
        (t._yEase = O ? Yt(jt(!0 === O ? g : O, V.ease)) : 0),
        O &&
          t._yoyo &&
          !t._repeat &&
          ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
        (t._from = !D && !!m.runBackwards),
        !D || (k && !m.stagger))
      ) {
        if (
          ((p = (l = A[0] ? fa(A[0]).harness : 0) && m[l.prop]),
          (i = ua(m, ft)),
          C &&
            (C._zTime < 0 && C.progress(1),
            e < 0 && x && y && !M
              ? C.render(-1, !0)
              : C.revert(x && P ? ht : ut),
            (C._lazy = 0)),
          v)
        ) {
          if (
            (za(
              (t._startAt = $t.set(
                A,
                qa(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: !C && w(T),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      b &&
                      function () {
                        return Ct(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  v
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L || (!y && !M)) && t._startAt.revert(ht),
            y && P && e <= 0 && r <= 0)
          )
            return void (e && (t._zTime = e));
        } else if (x && P && !C)
          if (
            (e && (y = !1),
            (a = qa(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: y && !C && w(T),
                immediateRender: y,
                stagger: 0,
                parent: S,
              },
              i
            )),
            p && (a[l.prop] = p),
            za((t._startAt = $t.set(A, a))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            y)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, X, X);
        for (
          t._pt = t._ptCache = 0, T = (P && w(T)) || (T && !P), n = 0;
          n < A.length;
          n++
        ) {
          if (
            ((h = (o = A[n])._gsap || ea(A)[n]._gsap),
            (t._ptLookup[n] = d = {}),
            ct[h.id] && dt.length && ma(),
            (c = z === A ? n : z.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, p || i, t, c, z) &&
              ((t._pt = s =
                new _e(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                d[t] = s;
              }),
              f.priority && (u = 1)),
            !l || p)
          )
            for (a in i)
              pt[a] && (f = ac(a, i, t, c, o, z))
                ? f.priority && (u = 1)
                : (d[a] = s =
                    Wt.call(t, o, a, "get", i[a], c, z, 0, m.stringFilter));
          t._op && t._op[n] && t.kill(o, t._op[n]),
            E &&
              t._pt &&
              ((Nt = t),
              I.killTweensOf(o, d, t.globalTime(e)),
              (_ = !t.parent),
              (Nt = 0)),
            t._pt && T && (ct[h.id] = 1);
        }
        u && pe(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = b),
        (t._initted = (!t._op || t._pt) && !_),
        k && e <= 0 && D.render(U, !0, !0);
    },
    Kt = function _parseFuncOrString(t, e, i, n, a) {
      return s(t)
        ? t.call(e, i, n, a)
        : r(t) && ~t.indexOf("random(")
        ? ob(t)
        : t;
    },
    Jt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ht = {};
  ha(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (Ht[t] = 1);
  });
  var $t = (function (D) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && ((i.duration = r), (r = i), (i = null));
      var s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p = (a = D.call(this, n ? r : va(r)) || this).vars,
        _ = p.duration,
        m = p.delay,
        g = p.immediateRender,
        T = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        O = p.defaults,
        k = p.scrollTrigger,
        M = p.yoyoEase,
        P = r.parent || I,
        C = (Z(e) || $(e) ? t(e[0]) : "length" in r) ? [e] : Mt(e);
      if (
        ((a._targets = C.length
          ? ea(C)
          : R(
              "GSAP target " + e + " not found. https://gsap.com",
              !q.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = b),
        x || T || y(_) || y(m))
      ) {
        if (
          ((r = a.vars),
          (s = a.timeline =
            new Xt({
              data: "nested",
              defaults: O || {},
              targets: P && "nested" === P.data ? P.vars.targets : C,
            })).kill(),
          (s.parent = s._dp = _assertThisInitialized(a)),
          (s._start = 0),
          T || y(_) || y(m))
        ) {
          if (((h = C.length), (d = T && eb(T)), v(T)))
            for (l in T) ~Jt.indexOf(l) && ((c = c || {})[l] = T[l]);
          for (o = 0; o < h; o++)
            ((u = ua(r, Ht)).stagger = 0),
              M && (u.yoyoEase = M),
              c && yt(u, c),
              (f = C[o]),
              (u.duration = +Kt(_, _assertThisInitialized(a), o, f, C)),
              (u.delay =
                (+Kt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay),
              !T &&
                1 === h &&
                u.delay &&
                ((a._delay = m = u.delay), (a._start += m), (u.delay = 0)),
              s.to(f, u, d ? d(o, f, C) : 0),
              (s._ease = Lt.none);
          s.duration() ? (_ = m = 0) : (a.timeline = 0);
        } else if (x) {
          va(qa(s.vars.defaults, { ease: "none" })),
            (s._ease = jt(x.ease || r.ease || "none"));
          var A,
            S,
            z,
            E = 0;
          if (Z(x))
            x.forEach(function (t) {
              return s.to(C, t, ">");
            }),
              s.duration();
          else {
            for (l in ((u = {}), x))
              "ease" === l || "easeEach" === l || gc(l, x[l], u, x.easeEach);
            for (l in u)
              for (
                A = u[l].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  o = E = 0;
                o < A.length;
                o++
              )
                ((z = {
                  ease: (S = A[o]).e,
                  duration: ((S.t - (o ? A[o - 1].t : 0)) / 100) * _,
                })[l] = S.v),
                  s.to(C, z, E),
                  (E += z.duration);
            s.duration() < _ && s.to({}, { duration: _ - s.duration() });
          }
        }
        _ || a.duration((_ = s.duration()));
      } else a.timeline = 0;
      return (
        !0 !== b ||
          F ||
          ((Nt = _assertThisInitialized(a)), I.killTweensOf(C), (Nt = 0)),
        Ka(P, _assertThisInitialized(a), i),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (g ||
          (!_ &&
            !x &&
            a._start === ja(P._time) &&
            w(g) &&
            (function _hasNoPausedAncestors(t) {
              return !t || (t._ts && _hasNoPausedAncestors(t.parent));
            })(_assertThisInitialized(a)) &&
            "nested" !== P.data)) &&
          ((a._tTime = -X), a.render(Math.max(0, -m) || 0)),
        k && La(_assertThisInitialized(a), k),
        a
      );
    }
    _inheritsLoose(Tween, D);
    var e = Tween.prototype;
    return (
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = this._time,
          c = this._tDur,
          p = this._dur,
          _ = t < 0,
          m = c - X < t && !_ ? c : t < X ? 0 : t;
        if (p) {
          if (
            m !== this._tTime ||
            !t ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != _)
          ) {
            if (((i = m), (l = this.timeline), this._repeat)) {
              if (((s = p + this._rDelay), this._repeat < -1 && _))
                return this.totalTime(100 * s + t, e, r);
              if (
                ((i = ja(m % s)),
                m === c
                  ? ((a = this._repeat), (i = p))
                  : ((a = ~~(m / s)) && a === ja(m / s) && ((i = p), a--),
                    p < i && (i = p)),
                (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = p - i)),
                (o = Tt(this._tTime, s)),
                i === d && !r && this._initted && a === o)
              )
                return (this._tTime = m), this;
              a !== o &&
                (l && this._yEase && Qb(l, u),
                this.vars.repeatRefresh &&
                  !u &&
                  !this._lock &&
                  this._time !== p &&
                  this._initted &&
                  ((this._lock = r = 1),
                  (this.render(ja(s * a), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Ma(this, _ ? t : i, r, e, m)) return (this._tTime = 0), this;
              if (
                !(d === this._time || (r && this.vars.repeatRefresh && a !== o))
              )
                return this;
              if (p !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = m),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = h = (f || this._ease)(i / p)),
              this._from && (this.ratio = h = 1 - h),
              i && !d && !e && !a && (Ct(this, "onStart"), this._tTime !== m))
            )
              return this;
            for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
            (l &&
              l.render(
                t < 0 ? t : !i && u ? -X : l._dur * l._ease(i / this._dur),
                e,
                r
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (_ && Ca(this, t, 0, r), Ct(this, "onUpdate")),
              this._repeat &&
                a !== o &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                Ct(this, "onRepeat"),
              (m !== this._tDur && m) ||
                this._tTime !== m ||
                (_ && !this._onUpdate && Ca(this, t, 0, !0),
                (!t && p) ||
                  !(
                    (m === this._tDur && 0 < this._ts) ||
                    (!m && this._ts < 0)
                  ) ||
                  za(this, 1),
                e ||
                  (_ && !d) ||
                  !(m || d || u) ||
                  (Ct(this, m === c ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (m < c && 0 < this.timeScale()) ||
                    this._prom()));
          }
        } else
          !(function _renderZeroDurationTween(t, e, r, i) {
            var n,
              a,
              s,
              o = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start &&
                    (function _parentPlayheadIsBeforeStart(t) {
                      var e = t.parent;
                      return (
                        e &&
                        e._ts &&
                        e._initted &&
                        !e._lock &&
                        (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                      );
                    })(t) &&
                    (t._initted || !bt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !bt(t))))
                  ? 0
                  : 1,
              h = t._rDelay,
              l = 0;
            if (
              (h &&
                t._repeat &&
                ((l = Ot(0, t._tDur, e)),
                (a = Tt(l, h)),
                t._yoyo && 1 & a && (u = 1 - u),
                a !== Tt(t._tTime, h) &&
                  ((o = 1 - u),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== o || L || i || t._zTime === X || (!e && t._zTime))
            ) {
              if (!t._initted && Ma(t, e, i, r, l)) return;
              for (
                s = t._zTime,
                  t._zTime = e || (r ? X : 0),
                  r = r || (e && !s),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = l,
                  n = t._pt;
                n;

              )
                n.r(u, n.d), (n = n._next);
              e < 0 && Ca(t, e, 0, !0),
                t._onUpdate && !r && Ct(t, "onUpdate"),
                l && t._repeat && !r && t.parent && Ct(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && za(t, 1),
                  r ||
                    L ||
                    (Ct(t, u ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (e.targets = function targets() {
        return this._targets;
      }),
      (e.invalidate = function invalidate(t) {
        return (
          (t && this.vars.runBackwards) || (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          D.prototype.invalidate.call(this, t)
        );
      }),
      (e.resetTo = function resetTo(t, e, r, i, n) {
        c || Rt.wake(), this._ts || this.play();
        var a,
          s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Qt(this, s),
          (a = this._ease(s / this._dur)),
          (function _updatePropTweens(t, e, r, i, n, a, s, o) {
            var u,
              h,
              l,
              f,
              d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!d)
              for (
                d = t._ptCache[e] = [], l = t._ptLookup, f = t._targets.length;
                f--;

              ) {
                if ((u = l[f][e]) && u.d && u.d._pt)
                  for (u = u.d._pt; u && u.p !== e && u.fp !== e; ) u = u._next;
                if (!u)
                  return (
                    (Gt = 1),
                    (t.vars[e] = "+=0"),
                    Qt(t, s),
                    (Gt = 0),
                    o ? R(e + " not eligible for reset") : 1
                  );
                d.push(u);
              }
            for (f = d.length; f--; )
              ((u = (h = d[f])._pt || h).s =
                (!i && 0 !== i) || n ? u.s + (i || 0) + a * u.c : i),
                (u.c = r - u.s),
                h.e && (h.e = ia(r) + Ya(h.e)),
                h.b && (h.b = u.s + Ya(h.b));
          })(this, t, e, r, i, a, s, n)
            ? this.resetTo(t, e, r, i, 1)
            : (Ia(this, 0),
              this.parent ||
                xa(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (e.kill = function kill(t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? tb(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)
              ._first || tb(this),
            this.parent &&
              i !== this.timeline.totalDuration() &&
              Ra(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var n,
          a,
          s,
          o,
          u,
          h,
          l,
          f = this._targets,
          d = t ? Mt(t) : f,
          c = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function _arraysMatch(t, e) {
            for (
              var r = t.length, i = r === e.length;
              i && r-- && t[r] === e[r];

            );
            return r < 0;
          })(f, d)
        )
          return "all" === e && (this._pt = 0), tb(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (r(e) &&
                ((u = {}),
                ha(e, function (t) {
                  return (u[t] = 1);
                }),
                (e = u)),
              (e = (function _addAliasesToVars(t, e) {
                var r,
                  i,
                  n,
                  a,
                  s = t[0] ? fa(t[0]).harness : 0,
                  o = s && s.aliases;
                if (!o) return e;
                for (i in ((r = yt({}, e)), o))
                  if ((i in r))
                    for (n = (a = o[i].split(",")).length; n--; )
                      r[a[n]] = r[i];
                return r;
              })(f, e))),
            l = f.length;
          l--;

        )
          if (~d.indexOf(f[l]))
            for (u in ((a = c[l]),
            "all" === e
              ? ((n[l] = e), (o = a), (s = {}))
              : ((s = n[l] = n[l] || {}), (o = e)),
            o))
              (h = a && a[u]) &&
                (("kill" in h.d && !0 !== h.d.kill(u)) || ya(this, h, "_pt"),
                delete a[u]),
                "all" !== s && (s[u] = 1);
        return this._initted && !this._pt && p && tb(this), this;
      }),
      (Tween.to = function to(t, e, r) {
        return new Tween(t, e, r);
      }),
      (Tween.from = function from(t, e) {
        return Va(1, arguments);
      }),
      (Tween.delayedCall = function delayedCall(t, e, r, i) {
        return new Tween(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i,
        });
      }),
      (Tween.fromTo = function fromTo(t, e, r) {
        return Va(2, arguments);
      }),
      (Tween.set = function set(t, e) {
        return (
          (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        );
      }),
      (Tween.killTweensOf = function killTweensOf(t, e, r) {
        return I.killTweensOf(t, e, r);
      }),
      Tween
    );
  })(Ut);
  qa($t.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ha("staggerTo,staggerFrom,staggerFromTo", function (r) {
      $t[r] = function () {
        var t = new Xt(),
          e = kt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function oc(t, e, r) {
    return t.setAttribute(e, r);
  }
  function wc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Zt = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    te = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    re = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    ne = function _getSetter(t, e) {
      return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : Zt;
    },
    ae = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    se = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ue = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    he = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    fe = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; )
        (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    ce = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? ya(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    pe = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a),
          (a._next = r) ? (r._prev = a) : (n = a),
          (a = e);
      }
      t._pt = i;
    },
    _e =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = wc),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = a || ae),
      (this.d = s || this),
      (this.set = o || Zt),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  ha(
    vt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ft[t] = 1);
    }
  ),
    (ot.TweenMax = ot.TweenLite = $t),
    (ot.TimelineLite = ot.TimelineMax = Xt),
    (I = new Xt({
      sortChildren: !1,
      defaults: V,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (q.stringFilter = Fb);
  function Ec(t) {
    return (ye[t] || Te).map(function (t) {
      return t();
    });
  }
  function Fc() {
    var t = Date.now(),
      o = [];
    2 < t - Oe &&
      (Ec("matchMediaInit"),
      ge.forEach(function (t) {
        var e,
          r,
          i,
          n,
          a = t.queries,
          s = t.conditions;
        for (r in a)
          (e = h.matchMedia(a[r]).matches) && (i = 1),
            e !== s[r] && ((s[r] = e), (n = 1));
        n && (t.revert(), i && o.push(t));
      }),
      Ec("matchMediaRevert"),
      o.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (Oe = t),
      Ec("matchMedia"));
  }
  var me,
    ge = [],
    ye = {},
    Te = [],
    Oe = 0,
    Me = 0,
    Pe =
      (((me = Context.prototype).add = function add(t, i, n) {
        function Gw() {
          var t,
            e = l,
            r = a.selector;
          return (
            e && e !== a && e.data.push(a),
            n && (a.selector = cb(n)),
            (l = a),
            (t = i.apply(a, arguments)),
            s(t) && a._r.push(t),
            (l = e),
            (a.selector = r),
            (a.isReverted = !1),
            t
          );
        }
        s(t) && ((n = i), (i = t), (t = s));
        var a = this;
        return (
          (a.last = Gw),
          t === s
            ? Gw(a, function (t) {
                return a.add(null, t);
              })
            : t
            ? (a[t] = Gw)
            : Gw
        );
      }),
      (me.ignore = function ignore(t) {
        var e = l;
        (l = null), t(this), (l = e);
      }),
      (me.getTweens = function getTweens() {
        var e = [];
        return (
          this.data.forEach(function (t) {
            return t instanceof Context
              ? e.push.apply(e, t.getTweens())
              : t instanceof $t &&
                  !(t.parent && "nested" === t.parent.data) &&
                  e.push(t);
          }),
          e
        );
      }),
      (me.clear = function clear() {
        this._r.length = this.data.length = 0;
      }),
      (me.kill = function kill(i, t) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var t, e = n.getTweens(), r = n.data.length; r--; )
                  "isFlip" === (t = n.data[r]).data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (t) {
                      return e.splice(e.indexOf(t), 1);
                    }));
                for (
                  e
                    .map(function (t) {
                      return {
                        g:
                          t._dur ||
                          t._delay ||
                          (t._sat && !t._sat.vars.immediateRender)
                            ? t.globalTime(0)
                            : -1 / 0,
                        t: t,
                      };
                    })
                    .sort(function (t, e) {
                      return e.g - t.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(i);
                    }),
                    r = n.data.length;
                  r--;

                )
                  (t = n.data[r]) instanceof Xt
                    ? "nested" !== t.data &&
                      (t.scrollTrigger && t.scrollTrigger.revert(), t.kill())
                    : t instanceof $t || !t.revert || t.revert(i);
                n._r.forEach(function (t) {
                  return t(i, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (t) {
                return t.kill && t.kill();
              }),
          this.clear(),
          t)
        )
          for (var e = ge.length; e--; )
            ge[e].id === this.id && ge.splice(e, 1);
      }),
      (me.revert = function revert(t) {
        this.kill(t || {});
      }),
      Context);
  function Context(t, e) {
    (this.selector = e && cb(e)),
      (this.data = []),
      (this._r = []),
      (this.isReverted = !1),
      (this.id = Me++),
      t && this.add(t);
  }
  var Ce,
    Ae =
      (((Ce = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = { matches: t });
        var i,
          n,
          a,
          s = new Pe(0, r || this.scope),
          o = (s.conditions = {});
        for (n in (l && !s.selector && (s.selector = l.selector),
        this.contexts.push(s),
        (e = s.add("onMatch", e)),
        (s.queries = t)))
          "all" === n
            ? (a = 1)
            : (i = h.matchMedia(t[n])) &&
              (ge.indexOf(s) < 0 && ge.push(s),
              (o[n] = i.matches) && (a = 1),
              i.addListener
                ? i.addListener(Fc)
                : i.addEventListener("change", Fc));
        return (
          a &&
            e(s, function (t) {
              return s.add(null, t);
            }),
          this
        );
      }),
      (Ce.revert = function revert(t) {
        this.kill(t || {});
      }),
      (Ce.kill = function kill(e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      MatchMedia);
  function MatchMedia(t) {
    (this.contexts = []), (this.scope = t);
  }
  var Se = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return wb(t);
      });
    },
    timeline: function timeline(t) {
      return new Xt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Mt(i)[0]);
      var a = fa(i || {}).get,
        s = e ? pa : oa;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((pt[t] && pt[t].get) || a)(i, t, e, n))
            : function (t, e, r) {
                return s(((pt[t] && pt[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Mt(r)).length) {
        var n = r.map(function (t) {
            return ze.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = pt[e],
        o = fa(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s();
              (d._pt = 0),
                e.init(r, i ? t + i : t, d, 0, [r]),
                e.render(1, e),
                d._pt && he(1, d);
            }
          : o.set(r, u);
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1);
          };
    },
    quickTo: function quickTo(t, i, e) {
      function $x(t, e, r) {
        return n.resetTo(i, t, e, r);
      }
      var r,
        n = ze.to(
          t,
          yt((((r = {})[i] = "+=0.1"), (r.paused = !0), r), e || {})
        );
      return ($x.tween = n), $x;
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = jt(t.ease, V.ease)), ta(V, t || {});
    },
    config: function config(t) {
      return ta(q, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return (
          t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
        );
      }),
        (_t[i] = function (t, e, r) {
          return n(Mt(t), qa(e || {}, a), r);
        }),
        r &&
          (Xt.prototype[i] = function (t, e, r) {
            return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r);
          });
    },
    registerEase: function registerEase(t, e) {
      Lt[t] = jt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? jt(t, e) : Lt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Xt(t);
      for (
        n.smoothChildTiming = w(t.smoothChildTiming),
          I.remove(n),
          n._dp = 0,
          n._time = n._tTime = I._time,
          r = I._first;
        r;

      )
        (i = r._next),
          (!e &&
            !r._dur &&
            r instanceof $t &&
            r.vars.onComplete === r._targets[0]) ||
            Ka(n, r, r._start - r._delay),
          (r = i);
      return Ka(I, n, 0), n;
    },
    context: function context(t, e) {
      return t ? new Pe(t, e) : l;
    },
    matchMedia: function matchMedia(t) {
      return new Ae(t);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return (
        ge.forEach(function (t) {
          var e,
            r,
            i = t.conditions;
          for (r in i) i[r] && ((i[r] = !1), (e = 1));
          e && t.revert();
        }) || Fc()
      );
    },
    addEventListener: function addEventListener(t, e) {
      var r = ye[t] || (ye[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = ye[t],
        i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return Z(e)
          ? lb(e, wrap(0, e.length), t)
          : Wa(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return Z(e)
          ? lb(e, wrapYoyo(0, e.length - 1), t)
          : Wa(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t);
            });
      },
      distribute: eb,
      random: hb,
      snap: gb,
      normalize: function normalize(t, e, r) {
        return Pt(t, e, 0, 1, r);
      },
      getUnit: Ya,
      clamp: function clamp(e, r, t) {
        return Wa(t, function (t) {
          return Ot(e, r, t);
        });
      },
      splitColor: Ab,
      toArray: Mt,
      selector: cb,
      mapRange: Pt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ya(t));
        };
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i)
          ? 0
          : function (t) {
              return (1 - t) * e + t * i;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = r(e),
            d = {};
          if ((!0 === t && (n = 1) && (t = null), f))
            (e = { p: e }), (i = { p: i });
          else if (Z(e) && !Z(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = i);
          } else n || (e = yt(Z(e) ? [] : {}, e));
          if (!u) {
            for (s in i) Wt.call(d, e, s, "get", i[s]);
            a = function func(t) {
              return he(t, d) || (f ? e.p : e);
            };
          }
        }
        return Wa(t, a);
      },
      shuffle: db,
    },
    install: P,
    effects: _t,
    ticker: Rt,
    updateRoot: Xt.updateRoot,
    plugins: pt,
    globalTimeline: I,
    core: {
      PropTween: _e,
      globals: S,
      Tween: $t,
      Timeline: Xt,
      Animation: Ut,
      getCache: fa,
      _removeLinkedListItem: ya,
      reverting: function reverting() {
        return L;
      },
      context: function context(t) {
        return t && l && (l.data.push(t), (t._ctx = l)), l;
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return (F = t);
      },
    },
  };
  ha("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Se[t] = $t[t]);
  }),
    Rt.add(Xt.updateRoot),
    (d = Se.to({}, { duration: 0 }));
  function Jc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function Lc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;
          if (
            (r(n) &&
              ((e = {}),
              ha(n, function (t) {
                return (e[t] = 1);
              }),
              (n = e)),
            a)
          ) {
            for (i in ((e = {}), n)) e[i] = a(n[i]);
            n = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e)
              for (i = a.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = Jc(n, r)),
                  n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, n);
        };
      },
    };
  }
  var ze =
    Se.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, i, n) {
          var a, s, o;
          for (a in ((this.tween = r), e))
            (o = t.getAttribute(a) || ""),
              ((s = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[a],
                i,
                n,
                0,
                0,
                a
              )).op = a),
              (s.b = o),
              this._props.push(a);
        },
        render: function render(t, e) {
          for (var r = e._pt; r; )
            L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; )
            this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Lc("roundProps", fb),
      Lc("modifiers"),
      Lc("snap", gb)
    ) || Se;
  ($t.version = Xt.version = ze.version = "3.12.4"), (o = 1), x() && Ft();
  function vd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function wd(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function xd(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function yd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function zd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Ad(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Bd(t, e, r) {
    return (t.style[e] = r);
  }
  function Cd(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Dd(t, e, r) {
    return (t._gsap[e] = r);
  }
  function Ed(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Fd(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function Gd(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function Jd(t, e) {
    var r = this,
      i = this.target,
      n = i.style,
      a = i._gsap;
    if (t in ar && n) {
      if (((this.tfm = this.tfm || {}), "transform" === t))
        return dr.transform.split(",").forEach(function (t) {
          return Jd.call(r, t, e);
        });
      if (
        (~(t = dr[t] || t).indexOf(",")
          ? t.split(",").forEach(function (t) {
              return (r.tfm[t] = yr(i, t));
            })
          : (this.tfm[t] = a.x ? a[t] : yr(i, t)),
        t === pr && (this.tfm.zOrigin = a.zOrigin),
        0 <= this.props.indexOf(cr))
      )
        return;
      a.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(pr, e, "")),
        (t = cr);
    }
    (n || e) && this.props.push(t, e, n[t]);
  }
  function Kd(t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  }
  function Ld() {
    var t,
      e,
      r = this.props,
      i = this.target,
      n = i.style,
      a = i._gsap;
    for (t = 0; t < r.length; t += 3)
      r[t + 1]
        ? (i[r[t]] = r[t + 2])
        : r[t + 2]
        ? (n[r[t]] = r[t + 2])
        : n.removeProperty(
            "--" === r[t].substr(0, 2)
              ? r[t]
              : r[t].replace(hr, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (e in this.tfm) a[e] = this.tfm[e];
      a.svg &&
        (a.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        ((t = Be()) && t.isStart) ||
          n[cr] ||
          (Kd(n),
          a.zOrigin &&
            n[pr] &&
            ((n[pr] += " " + a.zOrigin + "px"),
            (a.zOrigin = 0),
            a.renderTransform()),
          (a.uncache = 1));
    }
  }
  function Md(t, e) {
    var r = { target: t, props: [], revert: Ld, save: Jd };
    return (
      t._gsap || ze.core.getCache(t),
      e &&
        e.split(",").forEach(function (t) {
          return r.save(t);
        }),
      r
    );
  }
  function Od(t, e) {
    var r = De.createElementNS
      ? De.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : De.createElement(t);
    return r && r.style ? r : De.createElement(t);
  }
  function Pd(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(hr, "-$1").toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && Pd(t, mr(e) || e, 1)) ||
      ""
    );
  }
  function Sd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() &&
      window.document &&
      ((Ee = window),
      (De = Ee.document),
      (Re = De.documentElement),
      (Le = Od("div") || { style: {} }),
      Od("div"),
      (cr = mr(cr)),
      (pr = cr + "Origin"),
      (Le.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ye = !!mr("perspective")),
      (Be = ze.core.reverting),
      (Fe = 1));
  }
  function Td(t) {
    var e,
      r = Od(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (
      (Re.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = Td);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      Re.removeChild(r),
      (this.style.cssText = a),
      e
    );
  }
  function Ud(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Vd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = Td.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === Td || (r = Td.call(e, !0)),
      !r || r.width || r.x || r.y
        ? r
        : {
            x: +Ud(e, ["x", "cx", "x1"]) || 0,
            y: +Ud(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function Wd(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Vd(t));
  }
  function Xd(t, e) {
    if (e) {
      var r,
        i = t.style;
      e in ar && e !== pr && (e = cr),
        i.removeProperty
          ? (("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            i.removeProperty(
              "--" === r ? e : e.replace(hr, "-$1").toLowerCase()
            ))
          : i.removeAttribute(e);
    }
  }
  function Yd(t, e, r, i, n, a) {
    var s = new _e(t._pt, e, r, 0, 1, a ? Ad : zd);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function _d(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = Le.style,
      f = lr.test(e),
      d = "svg" === t.tagName.toLowerCase(),
      c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    if (i === h || !u || gr[i] || gr[h]) return u;
    if (
      ("px" === h || p || (u = _d(t, e, r, "px")),
      (o = t.getCTM && Wd(t)),
      (_ || "%" === h) && (ar[e] || ~e.indexOf("adius")))
    )
      return (
        (n = o ? t.getBBox()[f ? "width" : "height"] : t[c]),
        ia(_ ? (u / n) * 100 : (u / 100) * n)
      );
    if (
      ((l[f ? "width" : "height"] = 100 + (p ? h : i)),
      (a =
        ~e.indexOf("adius") || ("em" === i && t.appendChild && !d)
          ? t
          : t.parentNode),
      o && (a = (t.ownerSVGElement || {}).parentNode),
      (a && a !== De && a.appendChild) || (a = De.body),
      (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache)
    )
      return ia((u / s.width) * 100);
    if (!_ || ("height" !== e && "width" !== e))
      (!_ && "%" !== h) ||
        vr[Pd(a, "display")] ||
        (l.position = Pd(t, "position")),
        a === t && (l.position = "static"),
        a.appendChild(Le),
        (n = Le[c]),
        a.removeChild(Le),
        (l.position = "absolute");
    else {
      var m = t.style[e];
      (t.style[e] = 100 + i), (n = t[c]), m ? (t.style[e] = m) : Xd(t, e);
    }
    return (
      f && _ && (((s = fa(a)).time = Rt.time), (s.width = a[c])),
      ia(p ? (n * u) / 100 : n && u ? (100 / n) * u : 0)
    );
  }
  function be(t, e, r, i) {
    if (!r || "none" === r) {
      var n = mr(e, t, 1),
        a = n && Pd(t, n, 1);
      a && a !== r
        ? ((e = n), (r = a))
        : "borderColor" === e && (r = Pd(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      d,
      c,
      p,
      _,
      m,
      g = new _e(this._pt, t.style, e, 0, 1, ue),
      v = 0,
      y = 0;
    if (
      ((g.b = r),
      (g.e = i),
      (r += ""),
      "auto" === (i += "") &&
        ((f = t.style[e]),
        (t.style[e] = i),
        (i = Pd(t, e) || i),
        f ? (t.style[e] = f) : Xd(t, e)),
      Fb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(rt) || []),
      (i.match(rt) || []).length)
    ) {
      for (; (o = rt.exec(i)); )
        (d = o[0]),
          (p = i.substring(v, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (l = 1),
          d !== (f = u[y++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            "=" === d.charAt(1) && (d = ka(h, d) + m),
            (c = parseFloat(d)),
            (_ = d.substr((c + "").length)),
            (v = rt.lastIndex - _.length),
            _ ||
              ((_ = _ || q.units[e] || m),
              v === i.length && ((i += _), (g.e += _))),
            m !== _ && (h = _d(t, e, f, _) || 0),
            (g._pt = {
              _next: g._pt,
              p: p || 1 === y ? p : ",",
              s: h,
              c: c - h,
              m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
            }));
      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? Ad : zd;
    return nt.test(i) && (g.e = 0), (this._pt = g);
  }
  function de(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) ||
        ((t = r), (r = i), (i = t)),
      (e[0] = Tr[r] || r),
      (e[1] = Tr[i] || i),
      e.join(" ")
    );
  }
  function ee(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
      else
        for (n = (o = o.split(",")).length; -1 < --n; )
          (r = o[n]),
            ar[r] && ((i = 1), (r = "transformOrigin" === r ? pr : cr)),
            Xd(a, r);
      i &&
        (Xd(a, cr),
        u &&
          (u.svg && a.removeAttribute("transform"),
          Or(a, 1),
          (u.uncache = 1),
          Kd(s)));
    }
  }
  function ie(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function je(t) {
    var e = Pd(t, cr);
    return ie(e) ? wr : e.substr(7).match(et).map(ia);
  }
  function ke(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || fa(t),
      o = t.style,
      u = je(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(",")
        ? wr
        : u
      : (u !== wr ||
          t.offsetParent ||
          t === Re ||
          s.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (i = t.nextElementSibling), Re.appendChild(t)),
          (u = je(t)),
          n ? (o.display = n) : Xd(t, "display"),
          a &&
            (i
              ? r.insertBefore(t, i)
              : r
              ? r.appendChild(t)
              : Re.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function le(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || ke(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      c = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r
      ? l !== wr &&
        (o = _ * v - m * g) &&
        ((u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o),
        (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o),
        (x = u))
      : ((w = (s = Vd(t)).x + (~b[0].indexOf("%") ? (w / 100) * s.width : w)),
        (x = s.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth)
        ? ((y = w - f),
          (T = x - d),
          (h.xOffset = c + (y * _ + T * g) - y),
          (h.yOffset = p + (y * m + T * v) - T))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[pr] = "0px 0px"),
      a &&
        (Yd(a, h, "xOrigin", f, w),
        Yd(a, h, "yOrigin", d, x),
        Yd(a, h, "xOffset", c, h.xOffset),
        Yd(a, h, "yOffset", p, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + x);
  }
  function oe(t, e, r) {
    var i = Ya(e);
    return ia(parseFloat(e) + parseFloat(_d(t, "x", r + "px", i))) + i;
  }
  function ve(t, e, i, n, a) {
    var s,
      o,
      u = 360,
      h = r(a),
      l = parseFloat(a) * (h && ~a.indexOf("rad") ? sr : 1) - n,
      f = n + l + "deg";
    return (
      h &&
        ("short" === (s = a.split("_")[1]) &&
          (l %= u) !== l % 180 &&
          (l += l < 0 ? u : -u),
        "cw" === s && l < 0
          ? (l = ((l + 36e9) % u) - ~~(l / u) * u)
          : "ccw" === s && 0 < l && (l = ((l - 36e9) % u) - ~~(l / u) * u)),
      (t._pt = o = new _e(t._pt, e, i, n, l, wd)),
      (o.e = f),
      (o.u = "deg"),
      t._props.push(i),
      o
    );
  }
  function we(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function xe(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = we({}, r._gsap),
      f = r.style;
    for (n in (l.svg
      ? ((a = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (f[cr] = e),
        (i = Or(r, 1)),
        Xd(r, cr),
        r.setAttribute("transform", a))
      : ((a = getComputedStyle(r)[cr]),
        (f[cr] = e),
        (i = Or(r, 1)),
        (f[cr] = a)),
    ar))
      (a = l[n]) !== (s = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = Ya(a) !== (h = Ya(s)) ? _d(r, n, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new _e(t._pt, i, n, o, u - o, vd)),
        (t._pt.u = h || 0),
        t._props.push(n));
    we(i, l);
  }
  var Ee,
    De,
    Re,
    Fe,
    Le,
    Ie,
    Be,
    Ye,
    qe = Lt.Power0,
    Ve = Lt.Power1,
    Ue = Lt.Power2,
    Xe = Lt.Power3,
    Ne = Lt.Power4,
    Ge = Lt.Linear,
    We = Lt.Quad,
    Qe = Lt.Cubic,
    Ke = Lt.Quart,
    Je = Lt.Quint,
    He = Lt.Strong,
    $e = Lt.Elastic,
    Ze = Lt.Back,
    tr = Lt.SteppedEase,
    er = Lt.Bounce,
    rr = Lt.Sine,
    ir = Lt.Expo,
    nr = Lt.Circ,
    ar = {},
    sr = 180 / Math.PI,
    or = Math.PI / 180,
    ur = Math.atan2,
    hr = /([A-Z])/g,
    lr = /(left|right|width|margin|padding|x)/i,
    fr = /[\s,\(]\S/,
    dr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    cr = "transform",
    pr = cr + "Origin",
    _r = "O,Moz,ms,Ms,Webkit".split(","),
    mr = function _checkPropPrefix(t, e, r) {
      var i = (e || Le).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(_r[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? _r[n] : "") + t;
    },
    gr = { deg: 1, rad: 1, turn: 1 },
    vr = { grid: 1, flex: 1 },
    yr = function _get(t, e, r, i) {
      var n;
      return (
        Fe || Sd(),
        e in dr &&
          "transform" !== e &&
          ~(e = dr[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        ar[e] && "transform" !== e
          ? ((n = Or(t, i)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : n.svg
                ? n.origin
                : kr(Pd(t, pr)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]) &&
              "auto" !== n &&
              !i &&
              !~(n + "").indexOf("calc(")) ||
            (n =
              (br[e] && br[e](t, e, r)) ||
              Pd(t, e) ||
              ga(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? _d(t, e, n, r) + r : n
      );
    },
    Tr = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    br = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = (t._pt = new _e(t._pt, e, r, 0, 0, ee));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    wr = [1, 0, 0, 1, 0, 0],
    xr = {},
    Or = function _parseTransform(t, e) {
      var r = t._gsap || new Vt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        O,
        k,
        M,
        P,
        C,
        A,
        S,
        z,
        E,
        D,
        R,
        F = t.style,
        L = r.scaleX < 0,
        I = "deg",
        B = getComputedStyle(t),
        Y = Pd(t, pr) || "0";
      return (
        (i = n = a = u = h = l = f = d = c = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !Wd(t))),
        B.translate &&
          (("none" === B.translate &&
            "none" === B.scale &&
            "none" === B.rotate) ||
            (F[cr] =
              ("none" !== B.translate
                ? "translate3d(" +
                  (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
              ("none" !== B.scale
                ? "scale(" + B.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== B[cr] ? B[cr] : "")),
          (F.scale = F.rotate = F.translate = "none")),
        (m = ke(t, r.svg)),
        r.svg &&
          ((M = r.uncache
            ? ((P = t.getBBox()),
              (Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px"),
              "")
            : !e && t.getAttribute("data-svg-origin")),
          le(t, M || Y, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
        (p = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== wr &&
          ((T = m[0]),
          (b = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = O = m[4]),
          (n = k = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(T * T + b * b)),
              (o = Math.sqrt(x * x + w * w)),
              (u = T || b ? ur(b, T) * sr : 0),
              (f = w || x ? ur(w, x) * sr + u : 0) &&
                (o *= Math.abs(Math.cos(f * or))),
              r.svg && ((i -= p - (p * T + _ * w)), (n -= _ - (p * b + _ * x))))
            : ((R = m[6]),
              (E = m[7]),
              (A = m[8]),
              (S = m[9]),
              (z = m[10]),
              (D = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = ur(R, z)) * sr),
              g &&
                ((M = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g))),
                (P = k * v + S * y),
                (C = R * v + z * y),
                (A = O * -y + A * v),
                (S = k * -y + S * v),
                (z = R * -y + z * v),
                (D = E * -y + D * v),
                (O = M),
                (k = P),
                (R = C)),
              (l = (g = ur(-w, z)) * sr),
              g &&
                ((v = Math.cos(-g)),
                (D = x * (y = Math.sin(-g)) + D * v),
                (T = M = T * v - A * y),
                (b = P = b * v - S * y),
                (w = C = w * v - z * y)),
              (u = (g = ur(b, T)) * sr),
              g &&
                ((M = T * (v = Math.cos(g)) + b * (y = Math.sin(g))),
                (P = O * v + k * y),
                (b = b * v - T * y),
                (k = k * v - O * y),
                (T = M),
                (O = P)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = ia(Math.sqrt(T * T + b * b + w * w))),
              (o = ia(Math.sqrt(k * k + R * R))),
              (g = ur(O, k)),
              (f = 2e-4 < Math.abs(g) ? g * sr : 0),
              (c = D ? 1 / (D < 0 ? -D : D) : 0)),
          r.svg &&
            ((M = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !ie(Pd(t, cr))),
            M && t.setAttribute("transform", M))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (L
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          "px"),
        (r.y =
          n -
          ((r.yPercent =
            n &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          "px"),
        (r.z = a + "px"),
        (r.scaleX = ia(s)),
        (r.scaleY = ia(o)),
        (r.rotation = ia(u) + I),
        (r.rotationX = ia(h) + I),
        (r.rotationY = ia(l) + I),
        (r.skewX = f + I),
        (r.skewY = d + I),
        (r.transformPerspective = c + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
          (F[pr] = kr(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = q.force3D),
        (r.renderTransform = r.svg ? zr : Ye ? Sr : Mr),
        (r.uncache = 0),
        r
      );
    },
    kr = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Mr = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Sr(t, e);
    },
    Pr = "0deg",
    Cr = "0px",
    Ar = ") ",
    Sr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== Pr || h !== Pr)) {
        var b,
          w = parseFloat(h) * or,
          x = Math.sin(w),
          O = Math.cos(w);
        (w = parseFloat(l) * or),
          (b = Math.cos(w)),
          (a = oe(g, a, x * b * -v)),
          (s = oe(g, s, -Math.sin(w) * -v)),
          (o = oe(g, o, O * b * -v + v));
      }
      _ !== Cr && (y += "perspective(" + _ + Ar),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!T && a === Cr && s === Cr && o === Cr) ||
          (y +=
            o !== Cr || T
              ? "translate3d(" + a + ", " + s + ", " + o + ") "
              : "translate(" + a + ", " + s + Ar),
        u !== Pr && (y += "rotate(" + u + Ar),
        h !== Pr && (y += "rotateY(" + h + Ar),
        l !== Pr && (y += "rotateX(" + l + Ar),
        (f === Pr && d === Pr) || (y += "skew(" + f + ", " + d + Ar),
        (1 === c && 1 === p) || (y += "scale(" + c + ", " + p + Ar),
        (g.style[cr] = y || "translate(0, 0)");
    },
    zr = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        O = parseFloat(f);
      (d = parseFloat(d)),
        (c = parseFloat(c)),
        (p = parseFloat(p)) && ((c += p = parseFloat(p)), (d += p)),
        d || c
          ? ((d *= or),
            (c *= or),
            (r = Math.cos(d) * _),
            (i = Math.sin(d) * _),
            (n = Math.sin(d - c) * -m),
            (a = Math.cos(d - c) * m),
            c &&
              ((p *= or),
              (s = Math.tan(c - p)),
              (n *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              p &&
                ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = ia(r)),
            (i = ia(i)),
            (n = ia(n)),
            (a = ia(a)))
          : ((r = _), (a = m), (i = n = 0)),
        ((x && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
          ((x = _d(g, "x", l, "px")), (O = _d(g, "y", f, "px"))),
        (v || y || T || b) &&
          ((x = ia(x + v - (v * r + y * n) + T)),
          (O = ia(O + y - (v * i + y * a) + b))),
        (u || h) &&
          ((s = g.getBBox()),
          (x = ia(x + (u / 100) * s.width)),
          (O = ia(O + (h / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          a +
          "," +
          x +
          "," +
          O +
          ")"),
        g.setAttribute("transform", s),
        w && (g.style[cr] = s);
    };
  ha("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(
        function (t) {
          return r < 2 ? e + t : "border" + t + e;
        }
      );
    br[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return yr(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (i + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var Er,
    Dr,
    Rr,
    Fr = {
      name: "css",
      register: Sd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, i, n, a) {
        var s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w = this._props,
          x = t.style,
          O = i.vars.startAt;
        for (d in (Fe || Sd(),
        (this.styles = this.styles || Md(t)),
        (b = this.styles.props),
        (this.tween = i),
        e))
          if (
            "autoRound" !== d &&
            ((o = e[d]), !pt[d] || !ac(d, e, i, n, t, a))
          )
            if (
              ((l = typeof o),
              (f = br[d]),
              "function" === l && (l = typeof (o = o.call(i, n, t, a))),
              "string" === l && ~o.indexOf("random(") && (o = ob(o)),
              f)
            )
              f(this, t, d, o, i) && (T = 1);
            else if ("--" === d.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                (o += ""),
                (Et.lastIndex = 0),
                Et.test(s) || ((c = Ya(s)), (p = Ya(o))),
                p ? c !== p && (s = _d(t, d, s, p) + p) : c && (o += c),
                this.add(x, "setProperty", s, o, n, a, 0, 0, d),
                w.push(d),
                b.push(d, 0, x[d]);
            else if ("undefined" !== l) {
              if (
                (O && d in O
                  ? ((s =
                      "function" == typeof O[d] ? O[d].call(i, n, t, a) : O[d]),
                    r(s) && ~s.indexOf("random(") && (s = ob(s)),
                    Ya(s + "") ||
                      "auto" === s ||
                      (s += q.units[d] || Ya(yr(t, d)) || ""),
                    "=" === (s + "").charAt(1) && (s = yr(t, d)))
                  : (s = yr(t, d)),
                (h = parseFloat(s)),
                (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (u = parseFloat(o)),
                d in dr &&
                  ("autoAlpha" === d &&
                    (1 === h &&
                      "hidden" === yr(t, "visibility") &&
                      u &&
                      (h = 0),
                    b.push("visibility", 0, x.visibility),
                    Yd(
                      this,
                      x,
                      "visibility",
                      h ? "inherit" : "hidden",
                      u ? "inherit" : "hidden",
                      !u
                    )),
                  "scale" !== d &&
                    "transform" !== d &&
                    ~(d = dr[d]).indexOf(",") &&
                    (d = d.split(",")[0])),
                (m = d in ar))
              )
                if (
                  (this.styles.save(d),
                  g ||
                    (((v = t._gsap).renderTransform && !e.parseTransform) ||
                      Or(t, e.parseTransform),
                    (y = !1 !== e.smoothOrigin && v.smooth),
                    ((g = this._pt =
                      new _e(
                        this._pt,
                        x,
                        cr,
                        0,
                        1,
                        v.renderTransform,
                        v,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === d)
                )
                  (this._pt = new _e(
                    this._pt,
                    v,
                    "scaleY",
                    v.scaleY,
                    (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0,
                    vd
                  )),
                    (this._pt.u = 0),
                    w.push("scaleY", d),
                    (d += "X");
                else {
                  if ("transformOrigin" === d) {
                    b.push(pr, 0, x[pr]),
                      (o = de(o)),
                      v.svg
                        ? le(t, o, 0, y, 0, this)
                        : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                            v.zOrigin && Yd(this, v, "zOrigin", v.zOrigin, p),
                          Yd(this, x, d, kr(s), kr(o)));
                    continue;
                  }
                  if ("svgOrigin" === d) {
                    le(t, o, 1, y, 0, this);
                    continue;
                  }
                  if (d in xr) {
                    ve(this, v, d, h, _ ? ka(h, _ + o) : o);
                    continue;
                  }
                  if ("smoothOrigin" === d) {
                    Yd(this, v, "smooth", v.smooth, o);
                    continue;
                  }
                  if ("force3D" === d) {
                    v[d] = o;
                    continue;
                  }
                  if ("transform" === d) {
                    xe(this, o, t);
                    continue;
                  }
                }
              else d in x || (d = mr(d) || d);
              if (
                m ||
                ((u || 0 === u) && (h || 0 === h) && !fr.test(o) && d in x)
              )
                (u = u || 0),
                  (c = (s + "").substr((h + "").length)) !==
                    (p = Ya(o) || (d in q.units ? q.units[d] : c)) &&
                    (h = _d(t, d, s, p)),
                  (this._pt = new _e(
                    this._pt,
                    m ? v : x,
                    d,
                    h,
                    (_ ? ka(h, _ + u) : u) - h,
                    m || ("px" !== p && "zIndex" !== d) || !1 === e.autoRound
                      ? vd
                      : yd
                  )),
                  (this._pt.u = p || 0),
                  c !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = xd));
              else if (d in x) be.call(this, t, d, s, _ ? _ + o : o);
              else if (d in t) this.add(t, d, s || t[d], _ ? _ + o : o, n, a);
              else if ("parseTransform" !== d) {
                Q(d, o);
                continue;
              }
              m || (d in x ? b.push(d, 0, x[d]) : b.push(d, 1, s || t[d])),
                w.push(d);
            }
        T && pe(this);
      },
      render: function render(t, e) {
        if (e.tween._time || !Be())
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        else e.styles.revert();
      },
      get: yr,
      aliases: dr,
      getSetter: function getSetter(t, e, r) {
        var i = dr[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in ar && e !== pr && (t._gsap.x || yr(t, "x"))
            ? r && Ie === r
              ? "scale" === e
                ? Ed
                : Dd
              : (Ie = r || {}) && ("scale" === e ? Fd : Gd)
            : t.style && !u(t.style[e])
            ? Bd
            : ~e.indexOf("-")
            ? Cd
            : ne(t, e)
        );
      },
      core: { _removeProperty: Xd, _getMatrix: ke },
    };
  (ze.utils.checkPrefix = mr),
    (ze.core.getStyleSaver = Md),
    (Rr = ha(
      (Er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (Dr = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        ar[t] = 1;
      }
    )),
    ha(Dr, function (t) {
      (q.units[t] = "deg"), (xr[t] = 1);
    }),
    (dr[Rr[13]] = Er + "," + Dr),
    ha(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        dr[e[1]] = Rr[e[0]];
      }
    ),
    ha(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        q.units[t] = "px";
      }
    ),
    ze.registerPlugin(Fr);
  var Lr = ze.registerPlugin(Fr) || ze,
    Ir = Lr.core.Tween;
  (e.Back = Ze),
    (e.Bounce = er),
    (e.CSSPlugin = Fr),
    (e.Circ = nr),
    (e.Cubic = Qe),
    (e.Elastic = $e),
    (e.Expo = ir),
    (e.Linear = Ge),
    (e.Power0 = qe),
    (e.Power1 = Ve),
    (e.Power2 = Ue),
    (e.Power3 = Xe),
    (e.Power4 = Ne),
    (e.Quad = We),
    (e.Quart = Ke),
    (e.Quint = Je),
    (e.Sine = rr),
    (e.SteppedEase = tr),
    (e.Strong = He),
    (e.TimelineLite = Xt),
    (e.TimelineMax = Xt),
    (e.TweenLite = $t),
    (e.TweenMax = Ir),
    (e.default = Lr),
    (e.gsap = Lr);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

function removedAll() {
  gsap.to(".ppm_wrapper", {
    opacity: 0,
    display: "none",
    duration: 0.5,
    ease: "none",
    onComplete: () => {
      document.querySelector(".ppm_wrapper").remove();
      document.querySelector(".ppm_closeBtn_takeover").remove();
      document.querySelector(".ppm_logo_linear").remove();
    },
  });
}
document.querySelector(".ppm_wrapper").addEventListener("click", (e) => {
  window.open("https://www.smc-bd.org/", "_blank");
  submitInteraction("landing_clicked", extraData);
});
document
  .querySelector(".ppm_closeBtn_takeover")
  .addEventListener("click", (e) => {
    // e.stopPropagation();
    removedAll();
  });

setTimeout(() => {
  removedAll();
}, 15000);

const isItMobile = window.innerWidth <= 768;
animationBegin();
let bannerClicked = false;

function animationBegin() {
  gsap
    .timeline()
    .set(".ppm_container", { display: "block" })
    .fromTo(
      ".ppm_bg",
      { y: "120%", x: "-50%", display: "none" },
      { y: "0%", x: "-50%", display: "block", scale: isItMobile ? 1.9 : 1 }
    )
    .fromTo(
      [".ppm_ac"],
      { y: "-200%", x: "-50%", opacity: 0, display: "none" },
      {
        y: "0%",
        x: "-50%",
        opacity: 1,
        display: "block",
        duration: 1,
        ease: "none",
      },
      "<.2"
    )
    .fromTo(
      ".ppm_copy",
      { y: "200%", x: "-50%", display: "none" },
      { y: "0%", x: "-50%", display: "block", duration: 1, ease: "none" },
      "<.2"
    )
    .fromTo(
      ".ppm_cta",
      { display: "none", opacity: 0 },
      {
        display: "block",
        opacity: 1,
        onComplete: () => {
          gsap.to(".ppm_cta", {
            scale: 1.05,
            duration: 0.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
          });
        },
      },
      ">"
    )
    .add(clickedBanner, ">2");
}

function clickedBanner() {
  if (bannerClicked) return;
  bannerClicked = true;
  gsap
    .timeline()
    .fromTo(
      ".ppm_ac_clean",
      { opacity: 0, display: "none" },
      { opacity: 1, display: "block", duration: 0.6 }
    )
    .to(".ppm_ac", { opacity: 0, duration: 0.5 }, "<")
    .to([".ppm_cta"], { opacity: 0, duration: 0.5, display: "none" }, "<")
    .to(".ppm_copy", { y: isItMobile ? "30%" : "25%", duration: 0.7 }, ">-0.6")
    .to(".ppm_ac_clean", { opacity: 0, duration: 0.5, display: "none" }, ">2.4")
    .to(".ppm_copy", { y: "-170%", duration: 1 }, "<")
    .to(".ppm_wrapper", { background: "#000000ee" }, "<")
    .add(shootConfetti, "<")
    .to(
      [".ppm_bg", ".ppm_cta"],
      { opacity: 0, duration: 0.5, display: "none" },
      "<"
    )
    .to(".ppm_copy", { rotateY: 180, display: "none", opacity: 0 }, ">.5")
    .fromTo(
      ".ppm_no1",
      { rotateY: -180, display: "none", opacity: 0 },
      { rotateY: 0, display: "block", opacity: 1 },
      "<"
    )
    .fromTo(
      ".ppm_vid_div",
      { opacity: 0, display: "none", rotateY: -180 },
      {
        duration: 0.8,
        opacity: 1,
        display: "block",
        rotateY: 0,
        onComplete: () => {
          document.querySelector(".ppm_video_takeover").play();
        },
      },
      ">0.2"
    )
    .to(
      [".ppm_no1", ".ppm_ac"],
      { rotateY: 0, display: "none", opacity: 0, duration: 0.8 },
      "<"
    );
}
document.querySelector(".ppm_cta").addEventListener("click", (e) => {
  e.stopPropagation();
  clickedBanner();
});

document.querySelector(".ppm_video_takeover").addEventListener("ended", () => {
  // document.querySelector('.ppm_vid_div').remove()
});
document
  .querySelector(".ppm_closeBtn_linear")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".ppm_vid_div").remove();
    document.querySelector(".ppm_container").remove();
  });

var video = document.querySelector("#ppm_video_takeover");
var toggle = document.querySelector("#ppm_toggle");
var sound = document.querySelector("#ppm_sound");

var playIcon = `<i class="material-icons">play_arrow</i>`;
var pauseIcon = `<i class="material-icons">pause</i>`;
var volumeUp = `<i class="material-icons">volume_up</i>`;
var volumeOff = `<i class="material-icons">volume_off</i>`;

function togglePlay(e) {
  e.stopPropagation();
  // submitInteraction('play_pause',extraData)
  var playOrPause = video.paused ? "play" : "pause";
  video[playOrPause]();
}

function updatePlayPause(e) {
  e.stopPropagation();
  var playPauseIcon = this.paused ? playIcon : pauseIcon;
  toggle.innerHTML = playPauseIcon;
}

function toggleSound(e) {
  e.stopPropagation();
  // submitInteraction('mute_unmute',extraData)
  var soundIcon = video.muted ? volumeUp : volumeOff;
  sound.innerHTML = soundIcon;

  if (video.muted) video.muted = false;
  else video.muted = true;
}

video.addEventListener("play", updatePlayPause);
video.addEventListener("pause", updatePlayPause);
toggle.addEventListener("click", togglePlay);
sound.addEventListener("click", toggleSound);

async function shootConfetti() {
  const canvas = document.getElementById("ppm_confetti");
  canvas.confetti =
    canvas.confetti || (await confetti.create(canvas, { resize: true }));
  // you should  only initialize a canvas once, so save this function
  // we'll save it to the canvas itself for the purpose of this demo
  // canvas.confetti = canvas.confetti
  const duration = 130 * 1000,
    animationEnd = Date.now() + duration;

  let skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    const timeLeft = animationEnd - Date.now(),
      ticks = Math.max(100, 300 * (timeLeft / duration));

    skew = Math.max(0.8, skew - 0.001);
    let particleSize = 3;
    if (isMobile()) {
      particleSize = 0.5;
    }
    canvas.confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#FFD700", "#FFC107", "#FFB300", "#FFA000", "#FF8F00"],
      shapes: ["square"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(particleSize, particleSize + 1.5),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
}

function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isMobileUA =
    /android|iPad|iPhone|iPod|BlackBerry|Windows Phone|webOS/i.test(userAgent);
  const isSmallScreen = window.innerWidth <= 768; // Adjust breakpoint if necessary

  return isMobileUA || isSmallScreen;
}
