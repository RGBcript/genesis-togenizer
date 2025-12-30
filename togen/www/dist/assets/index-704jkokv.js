(async () => {
  (function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) c(s);
    new MutationObserver((s) => {
      for (const f of s) if (f.type === "childList") for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && c(d);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function u(s) {
      const f = {};
      return s.integrity && (f.integrity = s.integrity), s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? f.credentials = "include" : s.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
    }
    function c(s) {
      if (s.ep) return;
      s.ep = true;
      const f = u(s);
      fetch(s.href, f);
    }
  })();
  function ny(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  }
  var Ks = {
    exports: {}
  }, $i = {};
  var Og;
  function I1() {
    if (Og) return $i;
    Og = 1;
    var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
    function u(c, s, f) {
      var d = null;
      if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
        f = {};
        for (var m in s) m !== "key" && (f[m] = s[m]);
      } else f = s;
      return s = f.ref, {
        $$typeof: n,
        type: c,
        key: d,
        ref: s !== void 0 ? s : null,
        props: f
      };
    }
    return $i.Fragment = i, $i.jsx = u, $i.jsxs = u, $i;
  }
  var Hg;
  function P1() {
    return Hg || (Hg = 1, Ks.exports = I1()), Ks.exports;
  }
  var H = P1(), $s = {
    exports: {}
  }, xt = {};
  var Rg;
  function tx() {
    if (Rg) return xt;
    Rg = 1;
    var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
    function E(N) {
      return N === null || typeof N != "object" ? null : (N = x && N[x] || N["@@iterator"], typeof N == "function" ? N : null);
    }
    var _ = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, z = Object.assign, C = {};
    function M(N, R, P) {
      this.props = N, this.context = R, this.refs = C, this.updater = P || _;
    }
    M.prototype.isReactComponent = {}, M.prototype.setState = function(N, R) {
      if (typeof N != "object" && typeof N != "function" && N != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, N, R, "setState");
    }, M.prototype.forceUpdate = function(N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    };
    function V() {
    }
    V.prototype = M.prototype;
    function S(N, R, P) {
      this.props = N, this.context = R, this.refs = C, this.updater = P || _;
    }
    var A = S.prototype = new V();
    A.constructor = S, z(A, M.prototype), A.isPureReactComponent = true;
    var X = Array.isArray;
    function j() {
    }
    var U = {
      H: null,
      A: null,
      T: null,
      S: null
    }, L = Object.prototype.hasOwnProperty;
    function G(N, R, P) {
      var tt = P.ref;
      return {
        $$typeof: n,
        type: N,
        key: R,
        ref: tt !== void 0 ? tt : null,
        props: P
      };
    }
    function ot(N, R) {
      return G(N.type, R, N.props);
    }
    function $(N) {
      return typeof N == "object" && N !== null && N.$$typeof === n;
    }
    function F(N) {
      var R = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + N.replace(/[=:]/g, function(P) {
        return R[P];
      });
    }
    var it = /\/+/g;
    function T(N, R) {
      return typeof N == "object" && N !== null && N.key != null ? F("" + N.key) : R.toString(36);
    }
    function Z(N) {
      switch (N.status) {
        case "fulfilled":
          return N.value;
        case "rejected":
          throw N.reason;
        default:
          switch (typeof N.status == "string" ? N.then(j, j) : (N.status = "pending", N.then(function(R) {
            N.status === "pending" && (N.status = "fulfilled", N.value = R);
          }, function(R) {
            N.status === "pending" && (N.status = "rejected", N.reason = R);
          })), N.status) {
            case "fulfilled":
              return N.value;
            case "rejected":
              throw N.reason;
          }
      }
      throw N;
    }
    function w(N, R, P, tt, ct) {
      var st = typeof N;
      (st === "undefined" || st === "boolean") && (N = null);
      var rt = false;
      if (N === null) rt = true;
      else switch (st) {
        case "bigint":
        case "string":
        case "number":
          rt = true;
          break;
        case "object":
          switch (N.$$typeof) {
            case n:
            case i:
              rt = true;
              break;
            case v:
              return rt = N._init, w(rt(N._payload), R, P, tt, ct);
          }
      }
      if (rt) return ct = ct(N), rt = tt === "" ? "." + T(N, 0) : tt, X(ct) ? (P = "", rt != null && (P = rt.replace(it, "$&/") + "/"), w(ct, R, P, "", function(_t) {
        return _t;
      })) : ct != null && ($(ct) && (ct = ot(ct, P + (ct.key == null || N && N.key === ct.key ? "" : ("" + ct.key).replace(it, "$&/") + "/") + rt)), R.push(ct)), 1;
      rt = 0;
      var ut = tt === "" ? "." : tt + ":";
      if (X(N)) for (var ft = 0; ft < N.length; ft++) tt = N[ft], st = ut + T(tt, ft), rt += w(tt, R, P, st, ct);
      else if (ft = E(N), typeof ft == "function") for (N = ft.call(N), ft = 0; !(tt = N.next()).done; ) tt = tt.value, st = ut + T(tt, ft++), rt += w(tt, R, P, st, ct);
      else if (st === "object") {
        if (typeof N.then == "function") return w(Z(N), R, P, tt, ct);
        throw R = String(N), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
      }
      return rt;
    }
    function O(N, R, P) {
      if (N == null) return N;
      var tt = [], ct = 0;
      return w(N, tt, "", "", function(st) {
        return R.call(P, st, ct++);
      }), tt;
    }
    function Y(N) {
      if (N._status === -1) {
        var R = N._result;
        R = R(), R.then(function(P) {
          (N._status === 0 || N._status === -1) && (N._status = 1, N._result = P);
        }, function(P) {
          (N._status === 0 || N._status === -1) && (N._status = 2, N._result = P);
        }), N._status === -1 && (N._status = 0, N._result = R);
      }
      if (N._status === 1) return N._result.default;
      throw N._result;
    }
    var Q = typeof reportError == "function" ? reportError : function(N) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var R = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof N == "object" && N !== null && typeof N.message == "string" ? String(N.message) : String(N),
          error: N
        });
        if (!window.dispatchEvent(R)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", N);
        return;
      }
      console.error(N);
    }, et = {
      map: O,
      forEach: function(N, R, P) {
        O(N, function() {
          R.apply(this, arguments);
        }, P);
      },
      count: function(N) {
        var R = 0;
        return O(N, function() {
          R++;
        }), R;
      },
      toArray: function(N) {
        return O(N, function(R) {
          return R;
        }) || [];
      },
      only: function(N) {
        if (!$(N)) throw Error("React.Children.only expected to receive a single React element child.");
        return N;
      }
    };
    return xt.Activity = p, xt.Children = et, xt.Component = M, xt.Fragment = u, xt.Profiler = s, xt.PureComponent = S, xt.StrictMode = c, xt.Suspense = y, xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, xt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(N) {
        return U.H.useMemoCache(N);
      }
    }, xt.cache = function(N) {
      return function() {
        return N.apply(null, arguments);
      };
    }, xt.cacheSignal = function() {
      return null;
    }, xt.cloneElement = function(N, R, P) {
      if (N == null) throw Error("The argument must be a React element, but you passed " + N + ".");
      var tt = z({}, N.props), ct = N.key;
      if (R != null) for (st in R.key !== void 0 && (ct = "" + R.key), R) !L.call(R, st) || st === "key" || st === "__self" || st === "__source" || st === "ref" && R.ref === void 0 || (tt[st] = R[st]);
      var st = arguments.length - 2;
      if (st === 1) tt.children = P;
      else if (1 < st) {
        for (var rt = Array(st), ut = 0; ut < st; ut++) rt[ut] = arguments[ut + 2];
        tt.children = rt;
      }
      return G(N.type, ct, tt);
    }, xt.createContext = function(N) {
      return N = {
        $$typeof: d,
        _currentValue: N,
        _currentValue2: N,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, N.Provider = N, N.Consumer = {
        $$typeof: f,
        _context: N
      }, N;
    }, xt.createElement = function(N, R, P) {
      var tt, ct = {}, st = null;
      if (R != null) for (tt in R.key !== void 0 && (st = "" + R.key), R) L.call(R, tt) && tt !== "key" && tt !== "__self" && tt !== "__source" && (ct[tt] = R[tt]);
      var rt = arguments.length - 2;
      if (rt === 1) ct.children = P;
      else if (1 < rt) {
        for (var ut = Array(rt), ft = 0; ft < rt; ft++) ut[ft] = arguments[ft + 2];
        ct.children = ut;
      }
      if (N && N.defaultProps) for (tt in rt = N.defaultProps, rt) ct[tt] === void 0 && (ct[tt] = rt[tt]);
      return G(N, st, ct);
    }, xt.createRef = function() {
      return {
        current: null
      };
    }, xt.forwardRef = function(N) {
      return {
        $$typeof: m,
        render: N
      };
    }, xt.isValidElement = $, xt.lazy = function(N) {
      return {
        $$typeof: v,
        _payload: {
          _status: -1,
          _result: N
        },
        _init: Y
      };
    }, xt.memo = function(N, R) {
      return {
        $$typeof: h,
        type: N,
        compare: R === void 0 ? null : R
      };
    }, xt.startTransition = function(N) {
      var R = U.T, P = {};
      U.T = P;
      try {
        var tt = N(), ct = U.S;
        ct !== null && ct(P, tt), typeof tt == "object" && tt !== null && typeof tt.then == "function" && tt.then(j, Q);
      } catch (st) {
        Q(st);
      } finally {
        R !== null && P.types !== null && (R.types = P.types), U.T = R;
      }
    }, xt.unstable_useCacheRefresh = function() {
      return U.H.useCacheRefresh();
    }, xt.use = function(N) {
      return U.H.use(N);
    }, xt.useActionState = function(N, R, P) {
      return U.H.useActionState(N, R, P);
    }, xt.useCallback = function(N, R) {
      return U.H.useCallback(N, R);
    }, xt.useContext = function(N) {
      return U.H.useContext(N);
    }, xt.useDebugValue = function() {
    }, xt.useDeferredValue = function(N, R) {
      return U.H.useDeferredValue(N, R);
    }, xt.useEffect = function(N, R) {
      return U.H.useEffect(N, R);
    }, xt.useEffectEvent = function(N) {
      return U.H.useEffectEvent(N);
    }, xt.useId = function() {
      return U.H.useId();
    }, xt.useImperativeHandle = function(N, R, P) {
      return U.H.useImperativeHandle(N, R, P);
    }, xt.useInsertionEffect = function(N, R) {
      return U.H.useInsertionEffect(N, R);
    }, xt.useLayoutEffect = function(N, R) {
      return U.H.useLayoutEffect(N, R);
    }, xt.useMemo = function(N, R) {
      return U.H.useMemo(N, R);
    }, xt.useOptimistic = function(N, R) {
      return U.H.useOptimistic(N, R);
    }, xt.useReducer = function(N, R, P) {
      return U.H.useReducer(N, R, P);
    }, xt.useRef = function(N) {
      return U.H.useRef(N);
    }, xt.useState = function(N) {
      return U.H.useState(N);
    }, xt.useSyncExternalStore = function(N, R, P) {
      return U.H.useSyncExternalStore(N, R, P);
    }, xt.useTransition = function() {
      return U.H.useTransition();
    }, xt.version = "19.2.3", xt;
  }
  var Bg;
  function gu() {
    return Bg || (Bg = 1, $s.exports = tx()), $s.exports;
  }
  var I = gu();
  const ex = ny(I);
  var Js = {
    exports: {}
  }, Ji = {}, Fs = {
    exports: {}
  }, Ws = {};
  var Ug;
  function nx() {
    return Ug || (Ug = 1, (function(n) {
      function i(w, O) {
        var Y = w.length;
        w.push(O);
        t: for (; 0 < Y; ) {
          var Q = Y - 1 >>> 1, et = w[Q];
          if (0 < s(et, O)) w[Q] = O, w[Y] = et, Y = Q;
          else break t;
        }
      }
      function u(w) {
        return w.length === 0 ? null : w[0];
      }
      function c(w) {
        if (w.length === 0) return null;
        var O = w[0], Y = w.pop();
        if (Y !== O) {
          w[0] = Y;
          t: for (var Q = 0, et = w.length, N = et >>> 1; Q < N; ) {
            var R = 2 * (Q + 1) - 1, P = w[R], tt = R + 1, ct = w[tt];
            if (0 > s(P, Y)) tt < et && 0 > s(ct, P) ? (w[Q] = ct, w[tt] = Y, Q = tt) : (w[Q] = P, w[R] = Y, Q = R);
            else if (tt < et && 0 > s(ct, Y)) w[Q] = ct, w[tt] = Y, Q = tt;
            else break t;
          }
        }
        return O;
      }
      function s(w, O) {
        var Y = w.sortIndex - O.sortIndex;
        return Y !== 0 ? Y : w.id - O.id;
      }
      if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var f = performance;
        n.unstable_now = function() {
          return f.now();
        };
      } else {
        var d = Date, m = d.now();
        n.unstable_now = function() {
          return d.now() - m;
        };
      }
      var y = [], h = [], v = 1, p = null, x = 3, E = false, _ = false, z = false, C = false, M = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, S = typeof setImmediate < "u" ? setImmediate : null;
      function A(w) {
        for (var O = u(h); O !== null; ) {
          if (O.callback === null) c(h);
          else if (O.startTime <= w) c(h), O.sortIndex = O.expirationTime, i(y, O);
          else break;
          O = u(h);
        }
      }
      function X(w) {
        if (z = false, A(w), !_) if (u(y) !== null) _ = true, j || (j = true, F());
        else {
          var O = u(h);
          O !== null && Z(X, O.startTime - w);
        }
      }
      var j = false, U = -1, L = 5, G = -1;
      function ot() {
        return C ? true : !(n.unstable_now() - G < L);
      }
      function $() {
        if (C = false, j) {
          var w = n.unstable_now();
          G = w;
          var O = true;
          try {
            t: {
              _ = false, z && (z = false, V(U), U = -1), E = true;
              var Y = x;
              try {
                e: {
                  for (A(w), p = u(y); p !== null && !(p.expirationTime > w && ot()); ) {
                    var Q = p.callback;
                    if (typeof Q == "function") {
                      p.callback = null, x = p.priorityLevel;
                      var et = Q(p.expirationTime <= w);
                      if (w = n.unstable_now(), typeof et == "function") {
                        p.callback = et, A(w), O = true;
                        break e;
                      }
                      p === u(y) && c(y), A(w);
                    } else c(y);
                    p = u(y);
                  }
                  if (p !== null) O = true;
                  else {
                    var N = u(h);
                    N !== null && Z(X, N.startTime - w), O = false;
                  }
                }
                break t;
              } finally {
                p = null, x = Y, E = false;
              }
              O = void 0;
            }
          } finally {
            O ? F() : j = false;
          }
        }
      }
      var F;
      if (typeof S == "function") F = function() {
        S($);
      };
      else if (typeof MessageChannel < "u") {
        var it = new MessageChannel(), T = it.port2;
        it.port1.onmessage = $, F = function() {
          T.postMessage(null);
        };
      } else F = function() {
        M($, 0);
      };
      function Z(w, O) {
        U = M(function() {
          w(n.unstable_now());
        }, O);
      }
      n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(w) {
        w.callback = null;
      }, n.unstable_forceFrameRate = function(w) {
        0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < w ? Math.floor(1e3 / w) : 5;
      }, n.unstable_getCurrentPriorityLevel = function() {
        return x;
      }, n.unstable_next = function(w) {
        switch (x) {
          case 1:
          case 2:
          case 3:
            var O = 3;
            break;
          default:
            O = x;
        }
        var Y = x;
        x = O;
        try {
          return w();
        } finally {
          x = Y;
        }
      }, n.unstable_requestPaint = function() {
        C = true;
      }, n.unstable_runWithPriority = function(w, O) {
        switch (w) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            w = 3;
        }
        var Y = x;
        x = w;
        try {
          return O();
        } finally {
          x = Y;
        }
      }, n.unstable_scheduleCallback = function(w, O, Y) {
        var Q = n.unstable_now();
        switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? Q + Y : Q) : Y = Q, w) {
          case 1:
            var et = -1;
            break;
          case 2:
            et = 250;
            break;
          case 5:
            et = 1073741823;
            break;
          case 4:
            et = 1e4;
            break;
          default:
            et = 5e3;
        }
        return et = Y + et, w = {
          id: v++,
          callback: O,
          priorityLevel: w,
          startTime: Y,
          expirationTime: et,
          sortIndex: -1
        }, Y > Q ? (w.sortIndex = Y, i(h, w), u(y) === null && w === u(h) && (z ? (V(U), U = -1) : z = true, Z(X, Y - Q))) : (w.sortIndex = et, i(y, w), _ || E || (_ = true, j || (j = true, F()))), w;
      }, n.unstable_shouldYield = ot, n.unstable_wrapCallback = function(w) {
        var O = x;
        return function() {
          var Y = x;
          x = O;
          try {
            return w.apply(this, arguments);
          } finally {
            x = Y;
          }
        };
      };
    })(Ws)), Ws;
  }
  var jg;
  function lx() {
    return jg || (jg = 1, Fs.exports = nx()), Fs.exports;
  }
  var Is = {
    exports: {}
  }, ge = {};
  var Yg;
  function ax() {
    if (Yg) return ge;
    Yg = 1;
    var n = gu();
    function i(y) {
      var h = "https://react.dev/errors/" + y;
      if (1 < arguments.length) {
        h += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var v = 2; v < arguments.length; v++) h += "&args[]=" + encodeURIComponent(arguments[v]);
      }
      return "Minified React error #" + y + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function u() {
    }
    var c = {
      d: {
        f: u,
        r: function() {
          throw Error(i(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u
      },
      p: 0,
      findDOMNode: null
    }, s = /* @__PURE__ */ Symbol.for("react.portal");
    function f(y, h, v) {
      var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: s,
        key: p == null ? null : "" + p,
        children: y,
        containerInfo: h,
        implementation: v
      };
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(y, h) {
      if (y === "font") return "";
      if (typeof h == "string") return h === "use-credentials" ? h : "";
    }
    return ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, ge.createPortal = function(y, h) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(i(299));
      return f(y, h, null, v);
    }, ge.flushSync = function(y) {
      var h = d.T, v = c.p;
      try {
        if (d.T = null, c.p = 2, y) return y();
      } finally {
        d.T = h, c.p = v, c.d.f();
      }
    }, ge.preconnect = function(y, h) {
      typeof y == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, c.d.C(y, h));
    }, ge.prefetchDNS = function(y) {
      typeof y == "string" && c.d.D(y);
    }, ge.preinit = function(y, h) {
      if (typeof y == "string" && h && typeof h.as == "string") {
        var v = h.as, p = m(v, h.crossOrigin), x = typeof h.integrity == "string" ? h.integrity : void 0, E = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        v === "style" ? c.d.S(y, typeof h.precedence == "string" ? h.precedence : void 0, {
          crossOrigin: p,
          integrity: x,
          fetchPriority: E
        }) : v === "script" && c.d.X(y, {
          crossOrigin: p,
          integrity: x,
          fetchPriority: E,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0
        });
      }
    }, ge.preinitModule = function(y, h) {
      if (typeof y == "string") if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var v = m(h.as, h.crossOrigin);
          c.d.M(y, {
            crossOrigin: v,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && c.d.M(y);
    }, ge.preload = function(y, h) {
      if (typeof y == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
        var v = h.as, p = m(v, h.crossOrigin);
        c.d.L(y, v, {
          crossOrigin: p,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0
        });
      }
    }, ge.preloadModule = function(y, h) {
      if (typeof y == "string") if (h) {
        var v = m(h.as, h.crossOrigin);
        c.d.m(y, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: v,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else c.d.m(y);
    }, ge.requestFormReset = function(y) {
      c.d.r(y);
    }, ge.unstable_batchedUpdates = function(y, h) {
      return y(h);
    }, ge.useFormState = function(y, h, v) {
      return d.H.useFormState(y, h, v);
    }, ge.useFormStatus = function() {
      return d.H.useHostTransitionStatus();
    }, ge.version = "19.2.3", ge;
  }
  var Lg;
  function ly() {
    if (Lg) return Is.exports;
    Lg = 1;
    function n() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
    }
    return n(), Is.exports = ax(), Is.exports;
  }
  var Vg;
  function ix() {
    if (Vg) return Ji;
    Vg = 1;
    var n = lx(), i = gu(), u = ly();
    function c(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function s(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function f(t) {
      var e = t, l = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? l : null;
    }
    function d(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function m(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function y(t) {
      if (f(t) !== t) throw Error(c(188));
    }
    function h(t) {
      var e = t.alternate;
      if (!e) {
        if (e = f(t), e === null) throw Error(c(188));
        return e !== t ? null : t;
      }
      for (var l = t, a = e; ; ) {
        var o = l.return;
        if (o === null) break;
        var r = o.alternate;
        if (r === null) {
          if (a = o.return, a !== null) {
            l = a;
            continue;
          }
          break;
        }
        if (o.child === r.child) {
          for (r = o.child; r; ) {
            if (r === l) return y(o), t;
            if (r === a) return y(o), e;
            r = r.sibling;
          }
          throw Error(c(188));
        }
        if (l.return !== a.return) l = o, a = r;
        else {
          for (var g = false, b = o.child; b; ) {
            if (b === l) {
              g = true, l = o, a = r;
              break;
            }
            if (b === a) {
              g = true, a = o, l = r;
              break;
            }
            b = b.sibling;
          }
          if (!g) {
            for (b = r.child; b; ) {
              if (b === l) {
                g = true, l = r, a = o;
                break;
              }
              if (b === a) {
                g = true, a = r, l = o;
                break;
              }
              b = b.sibling;
            }
            if (!g) throw Error(c(189));
          }
        }
        if (l.alternate !== a) throw Error(c(190));
      }
      if (l.tag !== 3) throw Error(c(188));
      return l.stateNode.current === l ? t : e;
    }
    function v(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = v(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var p = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), _ = /* @__PURE__ */ Symbol.for("react.portal"), z = /* @__PURE__ */ Symbol.for("react.fragment"), C = /* @__PURE__ */ Symbol.for("react.strict_mode"), M = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), ot = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), $ = Symbol.iterator;
    function F(t) {
      return t === null || typeof t != "object" ? null : (t = $ && t[$] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var it = /* @__PURE__ */ Symbol.for("react.client.reference");
    function T(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === it ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case z:
          return "Fragment";
        case M:
          return "Profiler";
        case C:
          return "StrictMode";
        case X:
          return "Suspense";
        case j:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case _:
          return "Portal";
        case S:
          return t.displayName || "Context";
        case V:
          return (t._context.displayName || "Context") + ".Consumer";
        case A:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case U:
          return e = t.displayName || null, e !== null ? e : T(t.type) || "Memo";
        case L:
          e = t._payload, t = t._init;
          try {
            return T(t(e));
          } catch {
          }
      }
      return null;
    }
    var Z = Array.isArray, w = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, Q = [], et = -1;
    function N(t) {
      return {
        current: t
      };
    }
    function R(t) {
      0 > et || (t.current = Q[et], Q[et] = null, et--);
    }
    function P(t, e) {
      et++, Q[et] = t.current, t.current = e;
    }
    var tt = N(null), ct = N(null), st = N(null), rt = N(null);
    function ut(t, e) {
      switch (P(st, e), P(ct, t), P(tt, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? eg(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = eg(e), t = ng(e, t);
          else switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
      }
      R(tt), P(tt, t);
    }
    function ft() {
      R(tt), R(ct), R(st);
    }
    function _t(t) {
      t.memoizedState !== null && P(rt, t);
      var e = tt.current, l = ng(e, t.type);
      e !== l && (P(ct, t), P(tt, l));
    }
    function bt(t) {
      ct.current === t && (R(tt), R(ct)), rt.current === t && (R(rt), Gi._currentValue = Y);
    }
    var yt, vt;
    function Mt(t) {
      if (yt === void 0) try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        yt = e && e[1] || "", vt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + yt + t + vt;
    }
    var jt = false;
    function Rt(t, e) {
      if (!t || jt) return "";
      jt = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var at = function() {
                  throw Error();
                };
                if (Object.defineProperty(at.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(at, []);
                  } catch (W) {
                    var J = W;
                  }
                  Reflect.construct(t, [], at);
                } else {
                  try {
                    at.call();
                  } catch (W) {
                    J = W;
                  }
                  t.call(at.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (W) {
                  J = W;
                }
                (at = t()) && typeof at.catch == "function" && at.catch(function() {
                });
              }
            } catch (W) {
              if (W && J && typeof W.stack == "string") return [
                W.stack,
                J.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var o = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        o && o.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var r = a.DetermineComponentFrameRoot(), g = r[0], b = r[1];
        if (g && b) {
          var D = g.split(`
`), K = b.split(`
`);
          for (o = a = 0; a < D.length && !D[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; o < K.length && !K[o].includes("DetermineComponentFrameRoot"); ) o++;
          if (a === D.length || o === K.length) for (a = D.length - 1, o = K.length - 1; 1 <= a && 0 <= o && D[a] !== K[o]; ) o--;
          for (; 1 <= a && 0 <= o; a--, o--) if (D[a] !== K[o]) {
            if (a !== 1 || o !== 1) do
              if (a--, o--, 0 > o || D[a] !== K[o]) {
                var nt = `
` + D[a].replace(" at new ", " at ");
                return t.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", t.displayName)), nt;
              }
            while (1 <= a && 0 <= o);
            break;
          }
        }
      } finally {
        jt = false, Error.prepareStackTrace = l;
      }
      return (l = t ? t.displayName || t.name : "") ? Mt(l) : "";
    }
    function ue(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Mt(t.type);
        case 16:
          return Mt("Lazy");
        case 13:
          return t.child !== e && e !== null ? Mt("Suspense Fallback") : Mt("Suspense");
        case 19:
          return Mt("SuspenseList");
        case 0:
        case 15:
          return Rt(t.type, false);
        case 11:
          return Rt(t.type.render, false);
        case 1:
          return Rt(t.type, true);
        case 31:
          return Mt("Activity");
        default:
          return "";
      }
    }
    function Qe(t) {
      try {
        var e = "", l = null;
        do
          e += ue(t, l), l = t, t = t.return;
        while (t);
        return e;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var Ae = Object.prototype.hasOwnProperty, ke = n.unstable_scheduleCallback, hn = n.unstable_cancelCallback, bl = n.unstable_shouldYield, Sl = n.unstable_requestPaint, ce = n.unstable_now, ta = n.unstable_getCurrentPriorityLevel, gn = n.unstable_ImmediatePriority, qn = n.unstable_UserBlockingPriority, _l = n.unstable_NormalPriority, Cc = n.unstable_LowPriority, ea = n.unstable_IdlePriority, Dc = n.log, Oc = n.unstable_setDisableYieldValue, El = null, me = null;
    function nn(t) {
      if (typeof Dc == "function" && Oc(t), me && typeof me.setStrictMode == "function") try {
        me.setStrictMode(El, t);
      } catch {
      }
    }
    var ye = Math.clz32 ? Math.clz32 : Bc, Hc = Math.log, Rc = Math.LN2;
    function Bc(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Hc(t) / Rc | 0) | 0;
    }
    var na = 256, la = 262144, aa = 4194304;
    function mn(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return t;
      }
    }
    function ia(t, e, l) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var o = 0, r = t.suspendedLanes, g = t.pingedLanes;
      t = t.warmLanes;
      var b = a & 134217727;
      return b !== 0 ? (a = b & ~r, a !== 0 ? o = mn(a) : (g &= b, g !== 0 ? o = mn(g) : l || (l = b & ~t, l !== 0 && (o = mn(l))))) : (b = a & ~r, b !== 0 ? o = mn(b) : g !== 0 ? o = mn(g) : l || (l = a & ~t, l !== 0 && (o = mn(l)))), o === 0 ? 0 : e !== 0 && e !== o && (e & r) === 0 && (r = o & -o, l = e & -e, r >= l || r === 32 && (l & 4194048) !== 0) ? e : o;
    }
    function wl(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Uc(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Su() {
      var t = aa;
      return aa <<= 1, (aa & 62914560) === 0 && (aa = 4194304), t;
    }
    function ei(t) {
      for (var e = [], l = 0; 31 > l; l++) e.push(t);
      return e;
    }
    function Nl(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function jc(t, e, l, a, o, r) {
      var g = t.pendingLanes;
      t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
      var b = t.entanglements, D = t.expirationTimes, K = t.hiddenUpdates;
      for (l = g & ~l; 0 < l; ) {
        var nt = 31 - ye(l), at = 1 << nt;
        b[nt] = 0, D[nt] = -1;
        var J = K[nt];
        if (J !== null) for (K[nt] = null, nt = 0; nt < J.length; nt++) {
          var W = J[nt];
          W !== null && (W.lane &= -536870913);
        }
        l &= ~at;
      }
      a !== 0 && _u(t, a, 0), r !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(g & ~e));
    }
    function _u(t, e, l) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var a = 31 - ye(e);
      t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
    }
    function Eu(t, e) {
      var l = t.entangledLanes |= e;
      for (t = t.entanglements; l; ) {
        var a = 31 - ye(l), o = 1 << a;
        o & e | t[a] & e && (t[a] |= e), l &= ~o;
      }
    }
    function wu(t, e) {
      var l = e & -e;
      return l = (l & 42) !== 0 ? 1 : ni(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
    }
    function ni(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function li(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Nu() {
      var t = O.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ng(t.type));
    }
    function Mu(t, e) {
      var l = O.p;
      try {
        return O.p = t, e();
      } finally {
        O.p = l;
      }
    }
    var ln = Math.random().toString(36).slice(2), ae = "__reactFiber$" + ln, he = "__reactProps$" + ln, yn = "__reactContainer$" + ln, ua = "__reactEvents$" + ln, Au = "__reactListeners$" + ln, Yc = "__reactHandles$" + ln, zu = "__reactResources$" + ln, Ml = "__reactMarker$" + ln;
    function ai(t) {
      delete t[ae], delete t[he], delete t[ua], delete t[Au], delete t[Yc];
    }
    function Xn(t) {
      var e = t[ae];
      if (e) return e;
      for (var l = t.parentNode; l; ) {
        if (e = l[yn] || l[ae]) {
          if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = rg(t); t !== null; ) {
            if (l = t[ae]) return l;
            t = rg(t);
          }
          return e;
        }
        t = l, l = t.parentNode;
      }
      return null;
    }
    function Zn(t) {
      if (t = t[ae] || t[yn]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function Gn(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(c(33));
    }
    function Qn(t) {
      var e = t[zu];
      return e || (e = t[zu] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), e;
    }
    function It(t) {
      t[Ml] = true;
    }
    var Tu = /* @__PURE__ */ new Set(), Cu = {};
    function pn(t, e) {
      kn(t, e), kn(t + "Capture", e);
    }
    function kn(t, e) {
      for (Cu[t] = e, t = 0; t < e.length; t++) Tu.add(e[t]);
    }
    var Lc = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ii = {}, Du = {};
    function Vc(t) {
      return Ae.call(Du, t) ? true : Ae.call(ii, t) ? false : Lc.test(t) ? Du[t] = true : (ii[t] = true, false);
    }
    function oa(t, e, l) {
      if (Vc(e)) if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
    }
    function ca(t, e, l) {
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + l);
      }
    }
    function Ke(t, e, l, a) {
      if (a === null) t.removeAttribute(l);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(l);
            return;
        }
        t.setAttributeNS(e, l, "" + a);
      }
    }
    function ve(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function Ou(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function qc(t, e, l) {
      var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, r = a.set;
        return Object.defineProperty(t, e, {
          configurable: true,
          get: function() {
            return o.call(this);
          },
          set: function(g) {
            l = "" + g, r.call(this, g);
          }
        }), Object.defineProperty(t, e, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return l;
          },
          setValue: function(g) {
            l = "" + g;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function ra(t) {
      if (!t._valueTracker) {
        var e = Ou(t) ? "checked" : "value";
        t._valueTracker = qc(t, e, "" + t[e]);
      }
    }
    function Hu(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var l = e.getValue(), a = "";
      return t && (a = Ou(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), true) : false;
    }
    function Al(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var Xc = /[\n"\\]/g;
    function xe(t) {
      return t.replace(Xc, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function zl(t, e, l, a, o, r, g, b) {
      t.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.type = g : t.removeAttribute("type"), e != null ? g === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ve(e)) : t.value !== "" + ve(e) && (t.value = "" + ve(e)) : g !== "submit" && g !== "reset" || t.removeAttribute("value"), e != null ? ui(t, g, ve(e)) : l != null ? ui(t, g, ve(l)) : a != null && t.removeAttribute("value"), o == null && r != null && (t.defaultChecked = !!r), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + ve(b) : t.removeAttribute("name");
    }
    function Ru(t, e, l, a, o, r, g, b) {
      if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || l != null) {
        if (!(r !== "submit" && r !== "reset" || e != null)) {
          ra(t);
          return;
        }
        l = l != null ? "" + ve(l) : "", e = e != null ? "" + ve(e) : l, b || e === t.value || (t.value = e), t.defaultValue = e;
      }
      a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = b ? t.checked : !!a, t.defaultChecked = !!a, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (t.name = g), ra(t);
    }
    function ui(t, e, l) {
      e === "number" && Al(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
    }
    function vn(t, e, l, a) {
      if (t = t.options, e) {
        e = {};
        for (var o = 0; o < l.length; o++) e["$" + l[o]] = true;
        for (l = 0; l < t.length; l++) o = e.hasOwnProperty("$" + t[l].value), t[l].selected !== o && (t[l].selected = o), o && a && (t[l].defaultSelected = true);
      } else {
        for (l = "" + ve(l), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === l) {
            t[o].selected = true, a && (t[o].defaultSelected = true);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = true);
      }
    }
    function Ff(t, e, l) {
      if (e != null && (e = "" + ve(e), e !== t.value && (t.value = e), l == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = l != null ? "" + ve(l) : "";
    }
    function Wf(t, e, l, a) {
      if (e == null) {
        if (a != null) {
          if (l != null) throw Error(c(92));
          if (Z(a)) {
            if (1 < a.length) throw Error(c(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), e = l;
      }
      l = ve(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), ra(t);
    }
    function sa(t, e) {
      if (e) {
        var l = t.firstChild;
        if (l && l === t.lastChild && l.nodeType === 3) {
          l.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var Kp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function If(t, e, l) {
      var a = e.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Kp.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
    }
    function Pf(t, e, l) {
      if (e != null && typeof e != "object") throw Error(c(62));
      if (t = t.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var o in e) a = e[o], e.hasOwnProperty(o) && l[o] !== a && If(t, o, a);
      } else for (var r in e) e.hasOwnProperty(r) && If(t, r, e[r]);
    }
    function Zc(t) {
      if (t.indexOf("-") === -1) return false;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var $p = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), Jp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Bu(t) {
      return Jp.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function xn() {
    }
    var Gc = null;
    function Qc(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var fa = null, da = null;
    function td(t) {
      var e = Zn(t);
      if (e && (t = e.stateNode)) {
        var l = t[he] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (zl(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
              for (l = t; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + xe("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                var a = l[e];
                if (a !== t && a.form === t.form) {
                  var o = a[he] || null;
                  if (!o) throw Error(c(90));
                  zl(a, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                }
              }
              for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && Hu(a);
            }
            break t;
          case "textarea":
            Ff(t, l.value, l.defaultValue);
            break t;
          case "select":
            e = l.value, e != null && vn(t, !!l.multiple, e, false);
        }
      }
    }
    var kc = false;
    function ed(t, e, l) {
      if (kc) return t(e, l);
      kc = true;
      try {
        var a = t(e);
        return a;
      } finally {
        if (kc = false, (fa !== null || da !== null) && (Eo(), fa && (e = fa, t = da, da = fa = null, td(e), t))) for (e = 0; e < t.length; e++) td(t[e]);
      }
    }
    function oi(t, e) {
      var l = t.stateNode;
      if (l === null) return null;
      var a = l[he] || null;
      if (a === null) return null;
      l = a[e];
      t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
          break t;
        default:
          t = false;
      }
      if (t) return null;
      if (l && typeof l != "function") throw Error(c(231, e, typeof l));
      return l;
    }
    var bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kc = false;
    if (bn) try {
      var ci = {};
      Object.defineProperty(ci, "passive", {
        get: function() {
          Kc = true;
        }
      }), window.addEventListener("test", ci, ci), window.removeEventListener("test", ci, ci);
    } catch {
      Kc = false;
    }
    var Kn = null, $c = null, Uu = null;
    function nd() {
      if (Uu) return Uu;
      var t, e = $c, l = e.length, a, o = "value" in Kn ? Kn.value : Kn.textContent, r = o.length;
      for (t = 0; t < l && e[t] === o[t]; t++) ;
      var g = l - t;
      for (a = 1; a <= g && e[l - a] === o[r - a]; a++) ;
      return Uu = o.slice(t, 1 < a ? 1 - a : void 0);
    }
    function ju(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function Yu() {
      return true;
    }
    function ld() {
      return false;
    }
    function be(t) {
      function e(l, a, o, r, g) {
        this._reactName = l, this._targetInst = o, this.type = a, this.nativeEvent = r, this.target = g, this.currentTarget = null;
        for (var b in t) t.hasOwnProperty(b) && (l = t[b], this[b] = l ? l(r) : r[b]);
        return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === false) ? Yu : ld, this.isPropagationStopped = ld, this;
      }
      return p(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = Yu);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = Yu);
        },
        persist: function() {
        },
        isPersistent: Yu
      }), e;
    }
    var Tl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Lu = be(Tl), ri = p({}, Tl, {
      view: 0,
      detail: 0
    }), Fp = be(ri), Jc, Fc, si, Vu = p({}, ri, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ic,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== si && (si && t.type === "mousemove" ? (Jc = t.screenX - si.screenX, Fc = t.screenY - si.screenY) : Fc = Jc = 0, si = t), Jc);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : Fc;
      }
    }), ad = be(Vu), Wp = p({}, Vu, {
      dataTransfer: 0
    }), Ip = be(Wp), Pp = p({}, ri, {
      relatedTarget: 0
    }), Wc = be(Pp), tv = p({}, Tl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ev = be(tv), nv = p({}, Tl, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), lv = be(nv), av = p({}, Tl, {
      data: 0
    }), id = be(av), iv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, uv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, ov = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function cv(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = ov[t]) ? !!e[t] : false;
    }
    function Ic() {
      return cv;
    }
    var rv = p({}, ri, {
      key: function(t) {
        if (t.key) {
          var e = iv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = ju(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? uv[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ic,
      charCode: function(t) {
        return t.type === "keypress" ? ju(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? ju(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), sv = be(rv), fv = p({}, Vu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), ud = be(fv), dv = p({}, ri, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ic
    }), hv = be(dv), gv = p({}, Tl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), mv = be(gv), yv = p({}, Vu, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), pv = be(yv), vv = p({}, Tl, {
      newState: 0,
      oldState: 0
    }), xv = be(vv), bv = [
      9,
      13,
      27,
      32
    ], Pc = bn && "CompositionEvent" in window, fi = null;
    bn && "documentMode" in document && (fi = document.documentMode);
    var Sv = bn && "TextEvent" in window && !fi, od = bn && (!Pc || fi && 8 < fi && 11 >= fi), cd = " ", rd = false;
    function sd(t, e) {
      switch (t) {
        case "keyup":
          return bv.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function fd(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var ha = false;
    function _v(t, e) {
      switch (t) {
        case "compositionend":
          return fd(e);
        case "keypress":
          return e.which !== 32 ? null : (rd = true, cd);
        case "textInput":
          return t = e.data, t === cd && rd ? null : t;
        default:
          return null;
      }
    }
    function Ev(t, e) {
      if (ha) return t === "compositionend" || !Pc && sd(t, e) ? (t = nd(), Uu = $c = Kn = null, ha = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return od && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var wv = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function dd(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!wv[t.type] : e === "textarea";
    }
    function hd(t, e, l, a) {
      fa ? da ? da.push(a) : da = [
        a
      ] : fa = a, e = Co(e, "onChange"), 0 < e.length && (l = new Lu("onChange", "change", null, l, a), t.push({
        event: l,
        listeners: e
      }));
    }
    var di = null, hi = null;
    function Nv(t) {
      J0(t, 0);
    }
    function qu(t) {
      var e = Gn(t);
      if (Hu(e)) return t;
    }
    function gd(t, e) {
      if (t === "change") return e;
    }
    var md = false;
    if (bn) {
      var tr;
      if (bn) {
        var er = "oninput" in document;
        if (!er) {
          var yd = document.createElement("div");
          yd.setAttribute("oninput", "return;"), er = typeof yd.oninput == "function";
        }
        tr = er;
      } else tr = false;
      md = tr && (!document.documentMode || 9 < document.documentMode);
    }
    function pd() {
      di && (di.detachEvent("onpropertychange", vd), hi = di = null);
    }
    function vd(t) {
      if (t.propertyName === "value" && qu(hi)) {
        var e = [];
        hd(e, hi, t, Qc(t)), ed(Nv, e);
      }
    }
    function Mv(t, e, l) {
      t === "focusin" ? (pd(), di = e, hi = l, di.attachEvent("onpropertychange", vd)) : t === "focusout" && pd();
    }
    function Av(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return qu(hi);
    }
    function zv(t, e) {
      if (t === "click") return qu(e);
    }
    function Tv(t, e) {
      if (t === "input" || t === "change") return qu(e);
    }
    function Cv(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var ze = typeof Object.is == "function" ? Object.is : Cv;
    function gi(t, e) {
      if (ze(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var l = Object.keys(t), a = Object.keys(e);
      if (l.length !== a.length) return false;
      for (a = 0; a < l.length; a++) {
        var o = l[a];
        if (!Ae.call(e, o) || !ze(t[o], e[o])) return false;
      }
      return true;
    }
    function xd(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function bd(t, e) {
      var l = xd(t);
      t = 0;
      for (var a; l; ) {
        if (l.nodeType === 3) {
          if (a = t + l.textContent.length, t <= e && a >= e) return {
            node: l,
            offset: e - t
          };
          t = a;
        }
        t: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break t;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = xd(l);
      }
    }
    function Sd(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Sd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function _d(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = Al(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var l = typeof e.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) t = e.contentWindow;
        else break;
        e = Al(t.document);
      }
      return e;
    }
    function nr(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var Dv = bn && "documentMode" in document && 11 >= document.documentMode, ga = null, lr = null, mi = null, ar = false;
    function Ed(t, e, l) {
      var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      ar || ga == null || ga !== Al(a) || (a = ga, "selectionStart" in a && nr(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), mi && gi(mi, a) || (mi = a, a = Co(lr, "onSelect"), 0 < a.length && (e = new Lu("onSelect", "select", null, e, l), t.push({
        event: e,
        listeners: a
      }), e.target = ga)));
    }
    function Cl(t, e) {
      var l = {};
      return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
    }
    var ma = {
      animationend: Cl("Animation", "AnimationEnd"),
      animationiteration: Cl("Animation", "AnimationIteration"),
      animationstart: Cl("Animation", "AnimationStart"),
      transitionrun: Cl("Transition", "TransitionRun"),
      transitionstart: Cl("Transition", "TransitionStart"),
      transitioncancel: Cl("Transition", "TransitionCancel"),
      transitionend: Cl("Transition", "TransitionEnd")
    }, ir = {}, wd = {};
    bn && (wd = document.createElement("div").style, "AnimationEvent" in window || (delete ma.animationend.animation, delete ma.animationiteration.animation, delete ma.animationstart.animation), "TransitionEvent" in window || delete ma.transitionend.transition);
    function Dl(t) {
      if (ir[t]) return ir[t];
      if (!ma[t]) return t;
      var e = ma[t], l;
      for (l in e) if (e.hasOwnProperty(l) && l in wd) return ir[t] = e[l];
      return t;
    }
    var Nd = Dl("animationend"), Md = Dl("animationiteration"), Ad = Dl("animationstart"), Ov = Dl("transitionrun"), Hv = Dl("transitionstart"), Rv = Dl("transitioncancel"), zd = Dl("transitionend"), Td = /* @__PURE__ */ new Map(), ur = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ur.push("scrollEnd");
    function $e(t, e) {
      Td.set(t, e), pn(e, [
        t
      ]);
    }
    var Xu = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, je = [], ya = 0, or = 0;
    function Zu() {
      for (var t = ya, e = or = ya = 0; e < t; ) {
        var l = je[e];
        je[e++] = null;
        var a = je[e];
        je[e++] = null;
        var o = je[e];
        je[e++] = null;
        var r = je[e];
        if (je[e++] = null, a !== null && o !== null) {
          var g = a.pending;
          g === null ? o.next = o : (o.next = g.next, g.next = o), a.pending = o;
        }
        r !== 0 && Cd(l, o, r);
      }
    }
    function Gu(t, e, l, a) {
      je[ya++] = t, je[ya++] = e, je[ya++] = l, je[ya++] = a, or |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function cr(t, e, l, a) {
      return Gu(t, e, l, a), Qu(t);
    }
    function Ol(t, e) {
      return Gu(t, null, null, e), Qu(t);
    }
    function Cd(t, e, l) {
      t.lanes |= l;
      var a = t.alternate;
      a !== null && (a.lanes |= l);
      for (var o = false, r = t.return; r !== null; ) r.childLanes |= l, a = r.alternate, a !== null && (a.childLanes |= l), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (o = true)), t = r, r = r.return;
      return t.tag === 3 ? (r = t.stateNode, o && e !== null && (o = 31 - ye(l), t = r.hiddenUpdates, a = t[o], a === null ? t[o] = [
        e
      ] : a.push(e), e.lane = l | 536870912), r) : null;
    }
    function Qu(t) {
      if (50 < ji) throw ji = 0, ps = null, Error(c(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var pa = {};
    function Bv(t, e, l, a) {
      this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Te(t, e, l, a) {
      return new Bv(t, e, l, a);
    }
    function rr(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Sn(t, e) {
      var l = t.alternate;
      return l === null ? (l = Te(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
    }
    function Dd(t, e) {
      t.flags &= 65011714;
      var l = t.alternate;
      return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }), t;
    }
    function ku(t, e, l, a, o, r) {
      var g = 0;
      if (a = t, typeof t == "function") rr(t) && (g = 1);
      else if (typeof t == "string") g = V1(t, l, tt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case G:
          return t = Te(31, l, e, o), t.elementType = G, t.lanes = r, t;
        case z:
          return Hl(l.children, o, r, e);
        case C:
          g = 8, o |= 24;
          break;
        case M:
          return t = Te(12, l, e, o | 2), t.elementType = M, t.lanes = r, t;
        case X:
          return t = Te(13, l, e, o), t.elementType = X, t.lanes = r, t;
        case j:
          return t = Te(19, l, e, o), t.elementType = j, t.lanes = r, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case S:
              g = 10;
              break t;
            case V:
              g = 9;
              break t;
            case A:
              g = 11;
              break t;
            case U:
              g = 14;
              break t;
            case L:
              g = 16, a = null;
              break t;
          }
          g = 29, l = Error(c(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return e = Te(g, l, e, o), e.elementType = t, e.type = a, e.lanes = r, e;
    }
    function Hl(t, e, l, a) {
      return t = Te(7, t, a, e), t.lanes = l, t;
    }
    function sr(t, e, l) {
      return t = Te(6, t, null, e), t.lanes = l, t;
    }
    function Od(t) {
      var e = Te(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function fr(t, e, l) {
      return e = Te(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    var Hd = /* @__PURE__ */ new WeakMap();
    function Ye(t, e) {
      if (typeof t == "object" && t !== null) {
        var l = Hd.get(t);
        return l !== void 0 ? l : (e = {
          value: t,
          source: e,
          stack: Qe(e)
        }, Hd.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Qe(e)
      };
    }
    var va = [], xa = 0, Ku = null, yi = 0, Le = [], Ve = 0, $n = null, an = 1, un = "";
    function _n(t, e) {
      va[xa++] = yi, va[xa++] = Ku, Ku = t, yi = e;
    }
    function Rd(t, e, l) {
      Le[Ve++] = an, Le[Ve++] = un, Le[Ve++] = $n, $n = t;
      var a = an;
      t = un;
      var o = 32 - ye(a) - 1;
      a &= ~(1 << o), l += 1;
      var r = 32 - ye(e) + o;
      if (30 < r) {
        var g = o - o % 5;
        r = (a & (1 << g) - 1).toString(32), a >>= g, o -= g, an = 1 << 32 - ye(e) + o | l << o | a, un = r + t;
      } else an = 1 << r | l << o | a, un = t;
    }
    function dr(t) {
      t.return !== null && (_n(t, 1), Rd(t, 1, 0));
    }
    function hr(t) {
      for (; t === Ku; ) Ku = va[--xa], va[xa] = null, yi = va[--xa], va[xa] = null;
      for (; t === $n; ) $n = Le[--Ve], Le[Ve] = null, un = Le[--Ve], Le[Ve] = null, an = Le[--Ve], Le[Ve] = null;
    }
    function Bd(t, e) {
      Le[Ve++] = an, Le[Ve++] = un, Le[Ve++] = $n, an = e.id, un = e.overflow, $n = t;
    }
    var re = null, Zt = null, Tt = false, Jn = null, qe = false, gr = Error(c(519));
    function Fn(t) {
      var e = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw pi(Ye(e, t)), gr;
    }
    function Ud(t) {
      var e = t.stateNode, l = t.type, a = t.memoizedProps;
      switch (e[ae] = t, e[he] = a, l) {
        case "dialog":
          Nt("cancel", e), Nt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Nt("load", e);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Li.length; l++) Nt(Li[l], e);
          break;
        case "source":
          Nt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Nt("error", e), Nt("load", e);
          break;
        case "details":
          Nt("toggle", e);
          break;
        case "input":
          Nt("invalid", e), Ru(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          Nt("invalid", e);
          break;
        case "textarea":
          Nt("invalid", e), Wf(e, a.value, a.defaultValue, a.children);
      }
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === true || P0(e.textContent, l) ? (a.popover != null && (Nt("beforetoggle", e), Nt("toggle", e)), a.onScroll != null && Nt("scroll", e), a.onScrollEnd != null && Nt("scrollend", e), a.onClick != null && (e.onclick = xn), e = true) : e = false, e || Fn(t, true);
    }
    function jd(t) {
      for (re = t.return; re; ) switch (re.tag) {
        case 5:
        case 31:
        case 13:
          qe = false;
          return;
        case 27:
        case 3:
          qe = true;
          return;
        default:
          re = re.return;
      }
    }
    function ba(t) {
      if (t !== re) return false;
      if (!Tt) return jd(t), Tt = true, false;
      var e = t.tag, l;
      if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Os(t.type, t.memoizedProps)), l = !l), l && Zt && Fn(t), jd(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
        Zt = cg(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
        Zt = cg(t);
      } else e === 27 ? (e = Zt, sl(t.type) ? (t = js, js = null, Zt = t) : Zt = e) : Zt = re ? Ze(t.stateNode.nextSibling) : null;
      return true;
    }
    function Rl() {
      Zt = re = null, Tt = false;
    }
    function mr() {
      var t = Jn;
      return t !== null && (we === null ? we = t : we.push.apply(we, t), Jn = null), t;
    }
    function pi(t) {
      Jn === null ? Jn = [
        t
      ] : Jn.push(t);
    }
    var yr = N(null), Bl = null, En = null;
    function Wn(t, e, l) {
      P(yr, e._currentValue), e._currentValue = l;
    }
    function wn(t) {
      t._currentValue = yr.current, R(yr);
    }
    function pr(t, e, l) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
        t = t.return;
      }
    }
    function vr(t, e, l, a) {
      var o = t.child;
      for (o !== null && (o.return = t); o !== null; ) {
        var r = o.dependencies;
        if (r !== null) {
          var g = o.child;
          r = r.firstContext;
          t: for (; r !== null; ) {
            var b = r;
            r = o;
            for (var D = 0; D < e.length; D++) if (b.context === e[D]) {
              r.lanes |= l, b = r.alternate, b !== null && (b.lanes |= l), pr(r.return, l, t), a || (g = null);
              break t;
            }
            r = b.next;
          }
        } else if (o.tag === 18) {
          if (g = o.return, g === null) throw Error(c(341));
          g.lanes |= l, r = g.alternate, r !== null && (r.lanes |= l), pr(g, l, t), g = null;
        } else g = o.child;
        if (g !== null) g.return = o;
        else for (g = o; g !== null; ) {
          if (g === t) {
            g = null;
            break;
          }
          if (o = g.sibling, o !== null) {
            o.return = g.return, g = o;
            break;
          }
          g = g.return;
        }
        o = g;
      }
    }
    function Sa(t, e, l, a) {
      t = null;
      for (var o = e, r = false; o !== null; ) {
        if (!r) {
          if ((o.flags & 524288) !== 0) r = true;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var g = o.alternate;
          if (g === null) throw Error(c(387));
          if (g = g.memoizedProps, g !== null) {
            var b = o.type;
            ze(o.pendingProps.value, g.value) || (t !== null ? t.push(b) : t = [
              b
            ]);
          }
        } else if (o === rt.current) {
          if (g = o.alternate, g === null) throw Error(c(387));
          g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(Gi) : t = [
            Gi
          ]);
        }
        o = o.return;
      }
      t !== null && vr(e, t, l, a), e.flags |= 262144;
    }
    function $u(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!ze(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function Ul(t) {
      Bl = t, En = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function se(t) {
      return Yd(Bl, t);
    }
    function Ju(t, e) {
      return Bl === null && Ul(t), Yd(t, e);
    }
    function Yd(t, e) {
      var l = e._currentValue;
      if (e = {
        context: e,
        memoizedValue: l,
        next: null
      }, En === null) {
        if (t === null) throw Error(c(308));
        En = e, t.dependencies = {
          lanes: 0,
          firstContext: e
        }, t.flags |= 524288;
      } else En = En.next = e;
      return l;
    }
    var Uv = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: false,
        addEventListener: function(l, a) {
          t.push(a);
        }
      };
      this.abort = function() {
        e.aborted = true, t.forEach(function(l) {
          return l();
        });
      };
    }, jv = n.unstable_scheduleCallback, Yv = n.unstable_NormalPriority, Pt = {
      $$typeof: S,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function xr() {
      return {
        controller: new Uv(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function vi(t) {
      t.refCount--, t.refCount === 0 && jv(Yv, function() {
        t.controller.abort();
      });
    }
    var xi = null, br = 0, _a = 0, Ea = null;
    function Lv(t, e) {
      if (xi === null) {
        var l = xi = [];
        br = 0, _a = Es(), Ea = {
          status: "pending",
          value: void 0,
          then: function(a) {
            l.push(a);
          }
        };
      }
      return br++, e.then(Ld, Ld), e;
    }
    function Ld() {
      if (--br === 0 && xi !== null) {
        Ea !== null && (Ea.status = "fulfilled");
        var t = xi;
        xi = null, _a = 0, Ea = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function Vv(t, e) {
      var l = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          l.push(o);
        }
      };
      return t.then(function() {
        a.status = "fulfilled", a.value = e;
        for (var o = 0; o < l.length; o++) (0, l[o])(e);
      }, function(o) {
        for (a.status = "rejected", a.reason = o, o = 0; o < l.length; o++) (0, l[o])(void 0);
      }), a;
    }
    var Vd = w.S;
    w.S = function(t, e) {
      E0 = ce(), typeof e == "object" && e !== null && typeof e.then == "function" && Lv(t, e), Vd !== null && Vd(t, e);
    };
    var jl = N(null);
    function Sr() {
      var t = jl.current;
      return t !== null ? t : qt.pooledCache;
    }
    function Fu(t, e) {
      e === null ? P(jl, jl.current) : P(jl, e.pool);
    }
    function qd() {
      var t = Sr();
      return t === null ? null : {
        parent: Pt._currentValue,
        pool: t
      };
    }
    var wa = Error(c(460)), _r = Error(c(474)), Wu = Error(c(542)), Iu = {
      then: function() {
      }
    };
    function Xd(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Zd(t, e, l) {
      switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(xn, xn), e = l), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, Qd(t), t;
        default:
          if (typeof e.status == "string") e.then(xn, xn);
          else {
            if (t = qt, t !== null && 100 < t.shellSuspendCounter) throw Error(c(482));
            t = e, t.status = "pending", t.then(function(a) {
              if (e.status === "pending") {
                var o = e;
                o.status = "fulfilled", o.value = a;
              }
            }, function(a) {
              if (e.status === "pending") {
                var o = e;
                o.status = "rejected", o.reason = a;
              }
            });
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, Qd(t), t;
          }
          throw Ll = e, wa;
      }
    }
    function Yl(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Ll = l, wa) : l;
      }
    }
    var Ll = null;
    function Gd() {
      if (Ll === null) throw Error(c(459));
      var t = Ll;
      return Ll = null, t;
    }
    function Qd(t) {
      if (t === wa || t === Wu) throw Error(c(483));
    }
    var Na = null, bi = 0;
    function Pu(t) {
      var e = bi;
      return bi += 1, Na === null && (Na = []), Zd(Na, t, e);
    }
    function Si(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function to(t, e) {
      throw e.$$typeof === x ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(c(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function kd(t) {
      function e(q, B) {
        if (t) {
          var k = q.deletions;
          k === null ? (q.deletions = [
            B
          ], q.flags |= 16) : k.push(B);
        }
      }
      function l(q, B) {
        if (!t) return null;
        for (; B !== null; ) e(q, B), B = B.sibling;
        return null;
      }
      function a(q) {
        for (var B = /* @__PURE__ */ new Map(); q !== null; ) q.key !== null ? B.set(q.key, q) : B.set(q.index, q), q = q.sibling;
        return B;
      }
      function o(q, B) {
        return q = Sn(q, B), q.index = 0, q.sibling = null, q;
      }
      function r(q, B, k) {
        return q.index = k, t ? (k = q.alternate, k !== null ? (k = k.index, k < B ? (q.flags |= 67108866, B) : k) : (q.flags |= 67108866, B)) : (q.flags |= 1048576, B);
      }
      function g(q) {
        return t && q.alternate === null && (q.flags |= 67108866), q;
      }
      function b(q, B, k, lt) {
        return B === null || B.tag !== 6 ? (B = sr(k, q.mode, lt), B.return = q, B) : (B = o(B, k), B.return = q, B);
      }
      function D(q, B, k, lt) {
        var gt = k.type;
        return gt === z ? nt(q, B, k.props.children, lt, k.key) : B !== null && (B.elementType === gt || typeof gt == "object" && gt !== null && gt.$$typeof === L && Yl(gt) === B.type) ? (B = o(B, k.props), Si(B, k), B.return = q, B) : (B = ku(k.type, k.key, k.props, null, q.mode, lt), Si(B, k), B.return = q, B);
      }
      function K(q, B, k, lt) {
        return B === null || B.tag !== 4 || B.stateNode.containerInfo !== k.containerInfo || B.stateNode.implementation !== k.implementation ? (B = fr(k, q.mode, lt), B.return = q, B) : (B = o(B, k.children || []), B.return = q, B);
      }
      function nt(q, B, k, lt, gt) {
        return B === null || B.tag !== 7 ? (B = Hl(k, q.mode, lt, gt), B.return = q, B) : (B = o(B, k), B.return = q, B);
      }
      function at(q, B, k) {
        if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return B = sr("" + B, q.mode, k), B.return = q, B;
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case E:
              return k = ku(B.type, B.key, B.props, null, q.mode, k), Si(k, B), k.return = q, k;
            case _:
              return B = fr(B, q.mode, k), B.return = q, B;
            case L:
              return B = Yl(B), at(q, B, k);
          }
          if (Z(B) || F(B)) return B = Hl(B, q.mode, k, null), B.return = q, B;
          if (typeof B.then == "function") return at(q, Pu(B), k);
          if (B.$$typeof === S) return at(q, Ju(q, B), k);
          to(q, B);
        }
        return null;
      }
      function J(q, B, k, lt) {
        var gt = B !== null ? B.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return gt !== null ? null : b(q, B, "" + k, lt);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case E:
              return k.key === gt ? D(q, B, k, lt) : null;
            case _:
              return k.key === gt ? K(q, B, k, lt) : null;
            case L:
              return k = Yl(k), J(q, B, k, lt);
          }
          if (Z(k) || F(k)) return gt !== null ? null : nt(q, B, k, lt, null);
          if (typeof k.then == "function") return J(q, B, Pu(k), lt);
          if (k.$$typeof === S) return J(q, B, Ju(q, k), lt);
          to(q, k);
        }
        return null;
      }
      function W(q, B, k, lt, gt) {
        if (typeof lt == "string" && lt !== "" || typeof lt == "number" || typeof lt == "bigint") return q = q.get(k) || null, b(B, q, "" + lt, gt);
        if (typeof lt == "object" && lt !== null) {
          switch (lt.$$typeof) {
            case E:
              return q = q.get(lt.key === null ? k : lt.key) || null, D(B, q, lt, gt);
            case _:
              return q = q.get(lt.key === null ? k : lt.key) || null, K(B, q, lt, gt);
            case L:
              return lt = Yl(lt), W(q, B, k, lt, gt);
          }
          if (Z(lt) || F(lt)) return q = q.get(k) || null, nt(B, q, lt, gt, null);
          if (typeof lt.then == "function") return W(q, B, k, Pu(lt), gt);
          if (lt.$$typeof === S) return W(q, B, k, Ju(B, lt), gt);
          to(B, lt);
        }
        return null;
      }
      function dt(q, B, k, lt) {
        for (var gt = null, Dt = null, ht = B, Et = B = 0, zt = null; ht !== null && Et < k.length; Et++) {
          ht.index > Et ? (zt = ht, ht = null) : zt = ht.sibling;
          var Ot = J(q, ht, k[Et], lt);
          if (Ot === null) {
            ht === null && (ht = zt);
            break;
          }
          t && ht && Ot.alternate === null && e(q, ht), B = r(Ot, B, Et), Dt === null ? gt = Ot : Dt.sibling = Ot, Dt = Ot, ht = zt;
        }
        if (Et === k.length) return l(q, ht), Tt && _n(q, Et), gt;
        if (ht === null) {
          for (; Et < k.length; Et++) ht = at(q, k[Et], lt), ht !== null && (B = r(ht, B, Et), Dt === null ? gt = ht : Dt.sibling = ht, Dt = ht);
          return Tt && _n(q, Et), gt;
        }
        for (ht = a(ht); Et < k.length; Et++) zt = W(ht, q, Et, k[Et], lt), zt !== null && (t && zt.alternate !== null && ht.delete(zt.key === null ? Et : zt.key), B = r(zt, B, Et), Dt === null ? gt = zt : Dt.sibling = zt, Dt = zt);
        return t && ht.forEach(function(ml) {
          return e(q, ml);
        }), Tt && _n(q, Et), gt;
      }
      function pt(q, B, k, lt) {
        if (k == null) throw Error(c(151));
        for (var gt = null, Dt = null, ht = B, Et = B = 0, zt = null, Ot = k.next(); ht !== null && !Ot.done; Et++, Ot = k.next()) {
          ht.index > Et ? (zt = ht, ht = null) : zt = ht.sibling;
          var ml = J(q, ht, Ot.value, lt);
          if (ml === null) {
            ht === null && (ht = zt);
            break;
          }
          t && ht && ml.alternate === null && e(q, ht), B = r(ml, B, Et), Dt === null ? gt = ml : Dt.sibling = ml, Dt = ml, ht = zt;
        }
        if (Ot.done) return l(q, ht), Tt && _n(q, Et), gt;
        if (ht === null) {
          for (; !Ot.done; Et++, Ot = k.next()) Ot = at(q, Ot.value, lt), Ot !== null && (B = r(Ot, B, Et), Dt === null ? gt = Ot : Dt.sibling = Ot, Dt = Ot);
          return Tt && _n(q, Et), gt;
        }
        for (ht = a(ht); !Ot.done; Et++, Ot = k.next()) Ot = W(ht, q, Et, Ot.value, lt), Ot !== null && (t && Ot.alternate !== null && ht.delete(Ot.key === null ? Et : Ot.key), B = r(Ot, B, Et), Dt === null ? gt = Ot : Dt.sibling = Ot, Dt = Ot);
        return t && ht.forEach(function(W1) {
          return e(q, W1);
        }), Tt && _n(q, Et), gt;
      }
      function Vt(q, B, k, lt) {
        if (typeof k == "object" && k !== null && k.type === z && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case E:
              t: {
                for (var gt = k.key; B !== null; ) {
                  if (B.key === gt) {
                    if (gt = k.type, gt === z) {
                      if (B.tag === 7) {
                        l(q, B.sibling), lt = o(B, k.props.children), lt.return = q, q = lt;
                        break t;
                      }
                    } else if (B.elementType === gt || typeof gt == "object" && gt !== null && gt.$$typeof === L && Yl(gt) === B.type) {
                      l(q, B.sibling), lt = o(B, k.props), Si(lt, k), lt.return = q, q = lt;
                      break t;
                    }
                    l(q, B);
                    break;
                  } else e(q, B);
                  B = B.sibling;
                }
                k.type === z ? (lt = Hl(k.props.children, q.mode, lt, k.key), lt.return = q, q = lt) : (lt = ku(k.type, k.key, k.props, null, q.mode, lt), Si(lt, k), lt.return = q, q = lt);
              }
              return g(q);
            case _:
              t: {
                for (gt = k.key; B !== null; ) {
                  if (B.key === gt) if (B.tag === 4 && B.stateNode.containerInfo === k.containerInfo && B.stateNode.implementation === k.implementation) {
                    l(q, B.sibling), lt = o(B, k.children || []), lt.return = q, q = lt;
                    break t;
                  } else {
                    l(q, B);
                    break;
                  }
                  else e(q, B);
                  B = B.sibling;
                }
                lt = fr(k, q.mode, lt), lt.return = q, q = lt;
              }
              return g(q);
            case L:
              return k = Yl(k), Vt(q, B, k, lt);
          }
          if (Z(k)) return dt(q, B, k, lt);
          if (F(k)) {
            if (gt = F(k), typeof gt != "function") throw Error(c(150));
            return k = gt.call(k), pt(q, B, k, lt);
          }
          if (typeof k.then == "function") return Vt(q, B, Pu(k), lt);
          if (k.$$typeof === S) return Vt(q, B, Ju(q, k), lt);
          to(q, k);
        }
        return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, B !== null && B.tag === 6 ? (l(q, B.sibling), lt = o(B, k), lt.return = q, q = lt) : (l(q, B), lt = sr(k, q.mode, lt), lt.return = q, q = lt), g(q)) : l(q, B);
      }
      return function(q, B, k, lt) {
        try {
          bi = 0;
          var gt = Vt(q, B, k, lt);
          return Na = null, gt;
        } catch (ht) {
          if (ht === wa || ht === Wu) throw ht;
          var Dt = Te(29, ht, null, q.mode);
          return Dt.lanes = lt, Dt.return = q, Dt;
        }
      };
    }
    var Vl = kd(true), Kd = kd(false), In = false;
    function Er(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function wr(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function Pn(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function tl(t, e, l) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (Ht & 2) !== 0) {
        var o = a.pending;
        return o === null ? e.next = e : (e.next = o.next, o.next = e), a.pending = e, e = Qu(t), Cd(t, null, l), e;
      }
      return Gu(t, a, e, l), Qu(t);
    }
    function _i(t, e, l) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Eu(t, l);
      }
    }
    function Nr(t, e) {
      var l = t.updateQueue, a = t.alternate;
      if (a !== null && (a = a.updateQueue, l === a)) {
        var o = null, r = null;
        if (l = l.firstBaseUpdate, l !== null) {
          do {
            var g = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null
            };
            r === null ? o = r = g : r = r.next = g, l = l.next;
          } while (l !== null);
          r === null ? o = r = e : r = r.next = e;
        } else o = r = e;
        l = {
          baseState: a.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: r,
          shared: a.shared,
          callbacks: a.callbacks
        }, t.updateQueue = l;
        return;
      }
      t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
    }
    var Mr = false;
    function Ei() {
      if (Mr) {
        var t = Ea;
        if (t !== null) throw t;
      }
    }
    function wi(t, e, l, a) {
      Mr = false;
      var o = t.updateQueue;
      In = false;
      var r = o.firstBaseUpdate, g = o.lastBaseUpdate, b = o.shared.pending;
      if (b !== null) {
        o.shared.pending = null;
        var D = b, K = D.next;
        D.next = null, g === null ? r = K : g.next = K, g = D;
        var nt = t.alternate;
        nt !== null && (nt = nt.updateQueue, b = nt.lastBaseUpdate, b !== g && (b === null ? nt.firstBaseUpdate = K : b.next = K, nt.lastBaseUpdate = D));
      }
      if (r !== null) {
        var at = o.baseState;
        g = 0, nt = K = D = null, b = r;
        do {
          var J = b.lane & -536870913, W = J !== b.lane;
          if (W ? (At & J) === J : (a & J) === J) {
            J !== 0 && J === _a && (Mr = true), nt !== null && (nt = nt.next = {
              lane: 0,
              tag: b.tag,
              payload: b.payload,
              callback: null,
              next: null
            });
            t: {
              var dt = t, pt = b;
              J = e;
              var Vt = l;
              switch (pt.tag) {
                case 1:
                  if (dt = pt.payload, typeof dt == "function") {
                    at = dt.call(Vt, at, J);
                    break t;
                  }
                  at = dt;
                  break t;
                case 3:
                  dt.flags = dt.flags & -65537 | 128;
                case 0:
                  if (dt = pt.payload, J = typeof dt == "function" ? dt.call(Vt, at, J) : dt, J == null) break t;
                  at = p({}, at, J);
                  break t;
                case 2:
                  In = true;
              }
            }
            J = b.callback, J !== null && (t.flags |= 64, W && (t.flags |= 8192), W = o.callbacks, W === null ? o.callbacks = [
              J
            ] : W.push(J));
          } else W = {
            lane: J,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, nt === null ? (K = nt = W, D = at) : nt = nt.next = W, g |= J;
          if (b = b.next, b === null) {
            if (b = o.shared.pending, b === null) break;
            W = b, b = W.next, W.next = null, o.lastBaseUpdate = W, o.shared.pending = null;
          }
        } while (true);
        nt === null && (D = at), o.baseState = D, o.firstBaseUpdate = K, o.lastBaseUpdate = nt, r === null && (o.shared.lanes = 0), il |= g, t.lanes = g, t.memoizedState = at;
      }
    }
    function $d(t, e) {
      if (typeof t != "function") throw Error(c(191, t));
      t.call(e);
    }
    function Jd(t, e) {
      var l = t.callbacks;
      if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) $d(l[t], e);
    }
    var Ma = N(null), eo = N(0);
    function Fd(t, e) {
      t = Hn, P(eo, t), P(Ma, e), Hn = t | e.baseLanes;
    }
    function Ar() {
      P(eo, Hn), P(Ma, Ma.current);
    }
    function zr() {
      Hn = eo.current, R(Ma), R(eo);
    }
    var Ce = N(null), Xe = null;
    function el(t) {
      var e = t.alternate;
      P(Ft, Ft.current & 1), P(Ce, t), Xe === null && (e === null || Ma.current !== null || e.memoizedState !== null) && (Xe = t);
    }
    function Tr(t) {
      P(Ft, Ft.current), P(Ce, t), Xe === null && (Xe = t);
    }
    function Wd(t) {
      t.tag === 22 ? (P(Ft, Ft.current), P(Ce, t), Xe === null && (Xe = t)) : nl();
    }
    function nl() {
      P(Ft, Ft.current), P(Ce, Ce.current);
    }
    function De(t) {
      R(Ce), Xe === t && (Xe = null), R(Ft);
    }
    var Ft = N(0);
    function no(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var l = e.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || Bs(l) || Us(l))) return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    var Nn = 0, St = null, Yt = null, te = null, lo = false, Aa = false, ql = false, ao = 0, Ni = 0, za = null, qv = 0;
    function $t() {
      throw Error(c(321));
    }
    function Cr(t, e) {
      if (e === null) return false;
      for (var l = 0; l < e.length && l < t.length; l++) if (!ze(t[l], e[l])) return false;
      return true;
    }
    function Dr(t, e, l, a, o, r) {
      return Nn = r, St = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, w.H = t === null || t.memoizedState === null ? Rh : kr, ql = false, r = l(a, o), ql = false, Aa && (r = Pd(e, l, a, o)), Id(t), r;
    }
    function Id(t) {
      w.H = zi;
      var e = Yt !== null && Yt.next !== null;
      if (Nn = 0, te = Yt = St = null, lo = false, Ni = 0, za = null, e) throw Error(c(300));
      t === null || ee || (t = t.dependencies, t !== null && $u(t) && (ee = true));
    }
    function Pd(t, e, l, a) {
      St = t;
      var o = 0;
      do {
        if (Aa && (za = null), Ni = 0, Aa = false, 25 <= o) throw Error(c(301));
        if (o += 1, te = Yt = null, t.updateQueue != null) {
          var r = t.updateQueue;
          r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
        }
        w.H = Bh, r = e(l, a);
      } while (Aa);
      return r;
    }
    function Xv() {
      var t = w.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? Mi(e) : e, t = t.useState()[0], (Yt !== null ? Yt.memoizedState : null) !== t && (St.flags |= 1024), e;
    }
    function Or() {
      var t = ao !== 0;
      return ao = 0, t;
    }
    function Hr(t, e, l) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
    }
    function Rr(t) {
      if (lo) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        lo = false;
      }
      Nn = 0, te = Yt = St = null, Aa = false, Ni = ao = 0, za = null;
    }
    function pe() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return te === null ? St.memoizedState = te = t : te = te.next = t, te;
    }
    function Wt() {
      if (Yt === null) {
        var t = St.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Yt.next;
      var e = te === null ? St.memoizedState : te.next;
      if (e !== null) te = e, Yt = t;
      else {
        if (t === null) throw St.alternate === null ? Error(c(467)) : Error(c(310));
        Yt = t, t = {
          memoizedState: Yt.memoizedState,
          baseState: Yt.baseState,
          baseQueue: Yt.baseQueue,
          queue: Yt.queue,
          next: null
        }, te === null ? St.memoizedState = te = t : te = te.next = t;
      }
      return te;
    }
    function io() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function Mi(t) {
      var e = Ni;
      return Ni += 1, za === null && (za = []), t = Zd(za, t, e), e = St, (te === null ? e.memoizedState : te.next) === null && (e = e.alternate, w.H = e === null || e.memoizedState === null ? Rh : kr), t;
    }
    function uo(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return Mi(t);
        if (t.$$typeof === S) return se(t);
      }
      throw Error(c(438, String(t)));
    }
    function Br(t) {
      var e = null, l = St.updateQueue;
      if (l !== null && (e = l.memoCache), e == null) {
        var a = St.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
          data: a.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = {
        data: [],
        index: 0
      }), l === null && (l = io(), St.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = ot;
      return e.index++, l;
    }
    function Mn(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function oo(t) {
      var e = Wt();
      return Ur(e, Yt, t);
    }
    function Ur(t, e, l) {
      var a = t.queue;
      if (a === null) throw Error(c(311));
      a.lastRenderedReducer = l;
      var o = t.baseQueue, r = a.pending;
      if (r !== null) {
        if (o !== null) {
          var g = o.next;
          o.next = r.next, r.next = g;
        }
        e.baseQueue = o = r, a.pending = null;
      }
      if (r = t.baseState, o === null) t.memoizedState = r;
      else {
        e = o.next;
        var b = g = null, D = null, K = e, nt = false;
        do {
          var at = K.lane & -536870913;
          if (at !== K.lane ? (At & at) === at : (Nn & at) === at) {
            var J = K.revertLane;
            if (J === 0) D !== null && (D = D.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            }), at === _a && (nt = true);
            else if ((Nn & J) === J) {
              K = K.next, J === _a && (nt = true);
              continue;
            } else at = {
              lane: 0,
              revertLane: K.revertLane,
              gesture: null,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            }, D === null ? (b = D = at, g = r) : D = D.next = at, St.lanes |= J, il |= J;
            at = K.action, ql && l(r, at), r = K.hasEagerState ? K.eagerState : l(r, at);
          } else J = {
            lane: at,
            revertLane: K.revertLane,
            gesture: K.gesture,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          }, D === null ? (b = D = J, g = r) : D = D.next = J, St.lanes |= at, il |= at;
          K = K.next;
        } while (K !== null && K !== e);
        if (D === null ? g = r : D.next = b, !ze(r, t.memoizedState) && (ee = true, nt && (l = Ea, l !== null))) throw l;
        t.memoizedState = r, t.baseState = g, t.baseQueue = D, a.lastRenderedState = r;
      }
      return o === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function jr(t) {
      var e = Wt(), l = e.queue;
      if (l === null) throw Error(c(311));
      l.lastRenderedReducer = t;
      var a = l.dispatch, o = l.pending, r = e.memoizedState;
      if (o !== null) {
        l.pending = null;
        var g = o = o.next;
        do
          r = t(r, g.action), g = g.next;
        while (g !== o);
        ze(r, e.memoizedState) || (ee = true), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), l.lastRenderedState = r;
      }
      return [
        r,
        a
      ];
    }
    function th(t, e, l) {
      var a = St, o = Wt(), r = Tt;
      if (r) {
        if (l === void 0) throw Error(c(407));
        l = l();
      } else l = e();
      var g = !ze((Yt || o).memoizedState, l);
      if (g && (o.memoizedState = l, ee = true), o = o.queue, Vr(lh.bind(null, a, o, t), [
        t
      ]), o.getSnapshot !== e || g || te !== null && te.memoizedState.tag & 1) {
        if (a.flags |= 2048, Ta(9, {
          destroy: void 0
        }, nh.bind(null, a, o, l, e), null), qt === null) throw Error(c(349));
        r || (Nn & 127) !== 0 || eh(a, e, l);
      }
      return l;
    }
    function eh(t, e, l) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: l
      }, e = St.updateQueue, e === null ? (e = io(), St.updateQueue = e, e.stores = [
        t
      ]) : (l = e.stores, l === null ? e.stores = [
        t
      ] : l.push(t));
    }
    function nh(t, e, l, a) {
      e.value = l, e.getSnapshot = a, ah(e) && ih(t);
    }
    function lh(t, e, l) {
      return l(function() {
        ah(e) && ih(t);
      });
    }
    function ah(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var l = e();
        return !ze(t, l);
      } catch {
        return true;
      }
    }
    function ih(t) {
      var e = Ol(t, 2);
      e !== null && Ne(e, t, 2);
    }
    function Yr(t) {
      var e = pe();
      if (typeof t == "function") {
        var l = t;
        if (t = l(), ql) {
          nn(true);
          try {
            l();
          } finally {
            nn(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mn,
        lastRenderedState: t
      }, e;
    }
    function uh(t, e, l, a) {
      return t.baseState = l, Ur(t, Yt, typeof a == "function" ? a : Mn);
    }
    function Zv(t, e, l, a, o) {
      if (so(t)) throw Error(c(485));
      if (t = e.action, t !== null) {
        var r = {
          payload: o,
          action: t,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(g) {
            r.listeners.push(g);
          }
        };
        w.T !== null ? l(true) : r.isTransition = false, a(r), l = e.pending, l === null ? (r.next = e.pending = r, oh(e, r)) : (r.next = l.next, e.pending = l.next = r);
      }
    }
    function oh(t, e) {
      var l = e.action, a = e.payload, o = t.state;
      if (e.isTransition) {
        var r = w.T, g = {};
        w.T = g;
        try {
          var b = l(o, a), D = w.S;
          D !== null && D(g, b), ch(t, e, b);
        } catch (K) {
          Lr(t, e, K);
        } finally {
          r !== null && g.types !== null && (r.types = g.types), w.T = r;
        }
      } else try {
        r = l(o, a), ch(t, e, r);
      } catch (K) {
        Lr(t, e, K);
      }
    }
    function ch(t, e, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
        rh(t, e, a);
      }, function(a) {
        return Lr(t, e, a);
      }) : rh(t, e, l);
    }
    function rh(t, e, l) {
      e.status = "fulfilled", e.value = l, sh(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, oh(t, l)));
    }
    function Lr(t, e, l) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          e.status = "rejected", e.reason = l, sh(e), e = e.next;
        while (e !== a);
      }
      t.action = null;
    }
    function sh(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function fh(t, e) {
      return e;
    }
    function dh(t, e) {
      if (Tt) {
        var l = qt.formState;
        if (l !== null) {
          t: {
            var a = St;
            if (Tt) {
              if (Zt) {
                e: {
                  for (var o = Zt, r = qe; o.nodeType !== 8; ) {
                    if (!r) {
                      o = null;
                      break e;
                    }
                    if (o = Ze(o.nextSibling), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  r = o.data, o = r === "F!" || r === "F" ? o : null;
                }
                if (o) {
                  Zt = Ze(o.nextSibling), a = o.data === "F!";
                  break t;
                }
              }
              Fn(a);
            }
            a = false;
          }
          a && (e = l[0]);
        }
      }
      return l = pe(), l.memoizedState = l.baseState = e, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fh,
        lastRenderedState: e
      }, l.queue = a, l = Dh.bind(null, St, a), a.dispatch = l, a = Yr(false), r = Qr.bind(null, St, false, a.queue), a = pe(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, a.queue = o, l = Zv.bind(null, St, o, r, l), o.dispatch = l, a.memoizedState = t, [
        e,
        l,
        false
      ];
    }
    function hh(t) {
      var e = Wt();
      return gh(e, Yt, t);
    }
    function gh(t, e, l) {
      if (e = Ur(t, e, fh)[0], t = oo(Mn)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var a = Mi(e);
      } catch (g) {
        throw g === wa ? Wu : g;
      }
      else a = e;
      e = Wt();
      var o = e.queue, r = o.dispatch;
      return l !== e.memoizedState && (St.flags |= 2048, Ta(9, {
        destroy: void 0
      }, Gv.bind(null, o, l), null)), [
        a,
        r,
        t
      ];
    }
    function Gv(t, e) {
      t.action = e;
    }
    function mh(t) {
      var e = Wt(), l = Yt;
      if (l !== null) return gh(e, l, t);
      Wt(), e = e.memoizedState, l = Wt();
      var a = l.queue.dispatch;
      return l.memoizedState = t, [
        e,
        a,
        false
      ];
    }
    function Ta(t, e, l, a) {
      return t = {
        tag: t,
        create: l,
        deps: a,
        inst: e,
        next: null
      }, e = St.updateQueue, e === null && (e = io(), St.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
    }
    function yh() {
      return Wt().memoizedState;
    }
    function co(t, e, l, a) {
      var o = pe();
      St.flags |= t, o.memoizedState = Ta(1 | e, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function ro(t, e, l, a) {
      var o = Wt();
      a = a === void 0 ? null : a;
      var r = o.memoizedState.inst;
      Yt !== null && a !== null && Cr(a, Yt.memoizedState.deps) ? o.memoizedState = Ta(e, r, l, a) : (St.flags |= t, o.memoizedState = Ta(1 | e, r, l, a));
    }
    function ph(t, e) {
      co(8390656, 8, t, e);
    }
    function Vr(t, e) {
      ro(2048, 8, t, e);
    }
    function Qv(t) {
      St.flags |= 4;
      var e = St.updateQueue;
      if (e === null) e = io(), St.updateQueue = e, e.events = [
        t
      ];
      else {
        var l = e.events;
        l === null ? e.events = [
          t
        ] : l.push(t);
      }
    }
    function vh(t) {
      var e = Wt().memoizedState;
      return Qv({
        ref: e,
        nextImpl: t
      }), function() {
        if ((Ht & 2) !== 0) throw Error(c(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function xh(t, e) {
      return ro(4, 2, t, e);
    }
    function bh(t, e) {
      return ro(4, 4, t, e);
    }
    function Sh(t, e) {
      if (typeof e == "function") {
        t = t();
        var l = e(t);
        return function() {
          typeof l == "function" ? l() : e(null);
        };
      }
      if (e != null) return t = t(), e.current = t, function() {
        e.current = null;
      };
    }
    function _h(t, e, l) {
      l = l != null ? l.concat([
        t
      ]) : null, ro(4, 4, Sh.bind(null, e, t), l);
    }
    function qr() {
    }
    function Eh(t, e) {
      var l = Wt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      return e !== null && Cr(e, a[1]) ? a[0] : (l.memoizedState = [
        t,
        e
      ], t);
    }
    function wh(t, e) {
      var l = Wt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      if (e !== null && Cr(e, a[1])) return a[0];
      if (a = t(), ql) {
        nn(true);
        try {
          t();
        } finally {
          nn(false);
        }
      }
      return l.memoizedState = [
        a,
        e
      ], a;
    }
    function Xr(t, e, l) {
      return l === void 0 || (Nn & 1073741824) !== 0 && (At & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = N0(), St.lanes |= t, il |= t, l);
    }
    function Nh(t, e, l, a) {
      return ze(l, e) ? l : Ma.current !== null ? (t = Xr(t, l, a), ze(t, e) || (ee = true), t) : (Nn & 42) === 0 || (Nn & 1073741824) !== 0 && (At & 261930) === 0 ? (ee = true, t.memoizedState = l) : (t = N0(), St.lanes |= t, il |= t, e);
    }
    function Mh(t, e, l, a, o) {
      var r = O.p;
      O.p = r !== 0 && 8 > r ? r : 8;
      var g = w.T, b = {};
      w.T = b, Qr(t, false, e, l);
      try {
        var D = o(), K = w.S;
        if (K !== null && K(b, D), D !== null && typeof D == "object" && typeof D.then == "function") {
          var nt = Vv(D, a);
          Ai(t, e, nt, Re(t));
        } else Ai(t, e, a, Re(t));
      } catch (at) {
        Ai(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: at
        }, Re());
      } finally {
        O.p = r, g !== null && b.types !== null && (g.types = b.types), w.T = g;
      }
    }
    function kv() {
    }
    function Zr(t, e, l, a) {
      if (t.tag !== 5) throw Error(c(476));
      var o = Ah(t).queue;
      Mh(t, o, e, Y, l === null ? kv : function() {
        return zh(t), l(a);
      });
    }
    function Ah(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Y,
        baseState: Y,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Mn,
          lastRenderedState: Y
        },
        next: null
      };
      var l = {};
      return e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Mn,
          lastRenderedState: l
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function zh(t) {
      var e = Ah(t);
      e.next === null && (e = t.alternate.memoizedState), Ai(t, e.next.queue, {}, Re());
    }
    function Gr() {
      return se(Gi);
    }
    function Th() {
      return Wt().memoizedState;
    }
    function Ch() {
      return Wt().memoizedState;
    }
    function Kv(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var l = Re();
            t = Pn(l);
            var a = tl(e, t, l);
            a !== null && (Ne(a, e, l), _i(a, e, l)), e = {
              cache: xr()
            }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function $v(t, e, l) {
      var a = Re();
      l = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, so(t) ? Oh(e, l) : (l = cr(t, e, l, a), l !== null && (Ne(l, t, a), Hh(l, e, a)));
    }
    function Dh(t, e, l) {
      var a = Re();
      Ai(t, e, l, a);
    }
    function Ai(t, e, l, a) {
      var o = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (so(t)) Oh(e, o);
      else {
        var r = t.alternate;
        if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null)) try {
          var g = e.lastRenderedState, b = r(g, l);
          if (o.hasEagerState = true, o.eagerState = b, ze(b, g)) return Gu(t, e, o, 0), qt === null && Zu(), false;
        } catch {
        }
        if (l = cr(t, e, o, a), l !== null) return Ne(l, t, a), Hh(l, e, a), true;
      }
      return false;
    }
    function Qr(t, e, l, a) {
      if (a = {
        lane: 2,
        revertLane: Es(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, so(t)) {
        if (e) throw Error(c(479));
      } else e = cr(t, l, a, 2), e !== null && Ne(e, t, 2);
    }
    function so(t) {
      var e = t.alternate;
      return t === St || e !== null && e === St;
    }
    function Oh(t, e) {
      Aa = lo = true;
      var l = t.pending;
      l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
    }
    function Hh(t, e, l) {
      if ((l & 4194048) !== 0) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Eu(t, l);
      }
    }
    var zi = {
      readContext: se,
      use: uo,
      useCallback: $t,
      useContext: $t,
      useEffect: $t,
      useImperativeHandle: $t,
      useLayoutEffect: $t,
      useInsertionEffect: $t,
      useMemo: $t,
      useReducer: $t,
      useRef: $t,
      useState: $t,
      useDebugValue: $t,
      useDeferredValue: $t,
      useTransition: $t,
      useSyncExternalStore: $t,
      useId: $t,
      useHostTransitionStatus: $t,
      useFormState: $t,
      useActionState: $t,
      useOptimistic: $t,
      useMemoCache: $t,
      useCacheRefresh: $t
    };
    zi.useEffectEvent = $t;
    var Rh = {
      readContext: se,
      use: uo,
      useCallback: function(t, e) {
        return pe().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      },
      useContext: se,
      useEffect: ph,
      useImperativeHandle: function(t, e, l) {
        l = l != null ? l.concat([
          t
        ]) : null, co(4194308, 4, Sh.bind(null, e, t), l);
      },
      useLayoutEffect: function(t, e) {
        return co(4194308, 4, t, e);
      },
      useInsertionEffect: function(t, e) {
        co(4, 2, t, e);
      },
      useMemo: function(t, e) {
        var l = pe();
        e = e === void 0 ? null : e;
        var a = t();
        if (ql) {
          nn(true);
          try {
            t();
          } finally {
            nn(false);
          }
        }
        return l.memoizedState = [
          a,
          e
        ], a;
      },
      useReducer: function(t, e, l) {
        var a = pe();
        if (l !== void 0) {
          var o = l(e);
          if (ql) {
            nn(true);
            try {
              l(e);
            } finally {
              nn(false);
            }
          }
        } else o = e;
        return a.memoizedState = a.baseState = o, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: o
        }, a.queue = t, t = t.dispatch = $v.bind(null, St, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var e = pe();
        return t = {
          current: t
        }, e.memoizedState = t;
      },
      useState: function(t) {
        t = Yr(t);
        var e = t.queue, l = Dh.bind(null, St, e);
        return e.dispatch = l, [
          t.memoizedState,
          l
        ];
      },
      useDebugValue: qr,
      useDeferredValue: function(t, e) {
        var l = pe();
        return Xr(l, t, e);
      },
      useTransition: function() {
        var t = Yr(false);
        return t = Mh.bind(null, St, t.queue, true, false), pe().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, e, l) {
        var a = St, o = pe();
        if (Tt) {
          if (l === void 0) throw Error(c(407));
          l = l();
        } else {
          if (l = e(), qt === null) throw Error(c(349));
          (At & 127) !== 0 || eh(a, e, l);
        }
        o.memoizedState = l;
        var r = {
          value: l,
          getSnapshot: e
        };
        return o.queue = r, ph(lh.bind(null, a, r, t), [
          t
        ]), a.flags |= 2048, Ta(9, {
          destroy: void 0
        }, nh.bind(null, a, r, l, e), null), l;
      },
      useId: function() {
        var t = pe(), e = qt.identifierPrefix;
        if (Tt) {
          var l = un, a = an;
          l = (a & ~(1 << 32 - ye(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = ao++, 0 < l && (e += "H" + l.toString(32)), e += "_";
        } else l = qv++, e = "_" + e + "r_" + l.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: Gr,
      useFormState: dh,
      useActionState: dh,
      useOptimistic: function(t) {
        var e = pe();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = l, e = Qr.bind(null, St, true, l), l.dispatch = e, [
          t,
          e
        ];
      },
      useMemoCache: Br,
      useCacheRefresh: function() {
        return pe().memoizedState = Kv.bind(null, St);
      },
      useEffectEvent: function(t) {
        var e = pe(), l = {
          impl: t
        };
        return e.memoizedState = l, function() {
          if ((Ht & 2) !== 0) throw Error(c(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, kr = {
      readContext: se,
      use: uo,
      useCallback: Eh,
      useContext: se,
      useEffect: Vr,
      useImperativeHandle: _h,
      useInsertionEffect: xh,
      useLayoutEffect: bh,
      useMemo: wh,
      useReducer: oo,
      useRef: yh,
      useState: function() {
        return oo(Mn);
      },
      useDebugValue: qr,
      useDeferredValue: function(t, e) {
        var l = Wt();
        return Nh(l, Yt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = oo(Mn)[0], e = Wt().memoizedState;
        return [
          typeof t == "boolean" ? t : Mi(t),
          e
        ];
      },
      useSyncExternalStore: th,
      useId: Th,
      useHostTransitionStatus: Gr,
      useFormState: hh,
      useActionState: hh,
      useOptimistic: function(t, e) {
        var l = Wt();
        return uh(l, Yt, t, e);
      },
      useMemoCache: Br,
      useCacheRefresh: Ch
    };
    kr.useEffectEvent = vh;
    var Bh = {
      readContext: se,
      use: uo,
      useCallback: Eh,
      useContext: se,
      useEffect: Vr,
      useImperativeHandle: _h,
      useInsertionEffect: xh,
      useLayoutEffect: bh,
      useMemo: wh,
      useReducer: jr,
      useRef: yh,
      useState: function() {
        return jr(Mn);
      },
      useDebugValue: qr,
      useDeferredValue: function(t, e) {
        var l = Wt();
        return Yt === null ? Xr(l, t, e) : Nh(l, Yt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = jr(Mn)[0], e = Wt().memoizedState;
        return [
          typeof t == "boolean" ? t : Mi(t),
          e
        ];
      },
      useSyncExternalStore: th,
      useId: Th,
      useHostTransitionStatus: Gr,
      useFormState: mh,
      useActionState: mh,
      useOptimistic: function(t, e) {
        var l = Wt();
        return Yt !== null ? uh(l, Yt, t, e) : (l.baseState = t, [
          t,
          l.queue.dispatch
        ]);
      },
      useMemoCache: Br,
      useCacheRefresh: Ch
    };
    Bh.useEffectEvent = vh;
    function Kr(t, e, l, a) {
      e = t.memoizedState, l = l(a, e), l = l == null ? e : p({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
    }
    var $r = {
      enqueueSetState: function(t, e, l) {
        t = t._reactInternals;
        var a = Re(), o = Pn(a);
        o.payload = e, l != null && (o.callback = l), e = tl(t, o, a), e !== null && (Ne(e, t, a), _i(e, t, a));
      },
      enqueueReplaceState: function(t, e, l) {
        t = t._reactInternals;
        var a = Re(), o = Pn(a);
        o.tag = 1, o.payload = e, l != null && (o.callback = l), e = tl(t, o, a), e !== null && (Ne(e, t, a), _i(e, t, a));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var l = Re(), a = Pn(l);
        a.tag = 2, e != null && (a.callback = e), e = tl(t, a, l), e !== null && (Ne(e, t, l), _i(e, t, l));
      }
    };
    function Uh(t, e, l, a, o, r, g) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, r, g) : e.prototype && e.prototype.isPureReactComponent ? !gi(l, a) || !gi(o, r) : true;
    }
    function jh(t, e, l, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && $r.enqueueReplaceState(e, e.state, null);
    }
    function Xl(t, e) {
      var l = e;
      if ("ref" in e) {
        l = {};
        for (var a in e) a !== "ref" && (l[a] = e[a]);
      }
      if (t = t.defaultProps) {
        l === e && (l = p({}, l));
        for (var o in t) l[o] === void 0 && (l[o] = t[o]);
      }
      return l;
    }
    function Yh(t) {
      Xu(t);
    }
    function Lh(t) {
      console.error(t);
    }
    function Vh(t) {
      Xu(t);
    }
    function fo(t, e) {
      try {
        var l = t.onUncaughtError;
        l(e.value, {
          componentStack: e.stack
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function qh(t, e, l) {
      try {
        var a = t.onCaughtError;
        a(l.value, {
          componentStack: l.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Jr(t, e, l) {
      return l = Pn(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        fo(t, e);
      }, l;
    }
    function Xh(t) {
      return t = Pn(t), t.tag = 3, t;
    }
    function Zh(t, e, l, a) {
      var o = l.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var r = a.value;
        t.payload = function() {
          return o(r);
        }, t.callback = function() {
          qh(e, l, a);
        };
      }
      var g = l.stateNode;
      g !== null && typeof g.componentDidCatch == "function" && (t.callback = function() {
        qh(e, l, a), typeof o != "function" && (ul === null ? ul = /* @__PURE__ */ new Set([
          this
        ]) : ul.add(this));
        var b = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: b !== null ? b : ""
        });
      });
    }
    function Jv(t, e, l, a, o) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (e = l.alternate, e !== null && Sa(e, l, o, true), l = Ce.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return Xe === null ? wo() : l.alternate === null && Jt === 0 && (Jt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = o, a === Iu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a), bs(t, a, o)), false;
            case 22:
              return l.flags |= 65536, a === Iu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a)), bs(t, a, o)), false;
          }
          throw Error(c(435, l.tag));
        }
        return bs(t, a, o), wo(), false;
      }
      if (Tt) return e = Ce.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, a !== gr && (t = Error(c(422), {
        cause: a
      }), pi(Ye(t, l)))) : (a !== gr && (e = Error(c(423), {
        cause: a
      }), pi(Ye(e, l))), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, a = Ye(a, l), o = Jr(t.stateNode, a, o), Nr(t, o), Jt !== 4 && (Jt = 2)), false;
      var r = Error(c(520), {
        cause: a
      });
      if (r = Ye(r, l), Ui === null ? Ui = [
        r
      ] : Ui.push(r), Jt !== 4 && (Jt = 2), e === null) return true;
      a = Ye(a, l), l = e;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, t = o & -o, l.lanes |= t, t = Jr(l.stateNode, a, t), Nr(l, t), false;
          case 1:
            if (e = l.type, r = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (ul === null || !ul.has(r)))) return l.flags |= 65536, o &= -o, l.lanes |= o, o = Xh(o), Zh(o, t, l, a), Nr(l, o), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var Fr = Error(c(461)), ee = false;
    function fe(t, e, l, a) {
      e.child = t === null ? Kd(e, null, l, a) : Vl(e, t.child, l, a);
    }
    function Gh(t, e, l, a, o) {
      l = l.render;
      var r = e.ref;
      if ("ref" in a) {
        var g = {};
        for (var b in a) b !== "ref" && (g[b] = a[b]);
      } else g = a;
      return Ul(e), a = Dr(t, e, l, g, r, o), b = Or(), t !== null && !ee ? (Hr(t, e, o), An(t, e, o)) : (Tt && b && dr(e), e.flags |= 1, fe(t, e, a, o), e.child);
    }
    function Qh(t, e, l, a, o) {
      if (t === null) {
        var r = l.type;
        return typeof r == "function" && !rr(r) && r.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = r, kh(t, e, r, a, o)) : (t = ku(l.type, null, a, e, e.mode, o), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (r = t.child, !as(t, o)) {
        var g = r.memoizedProps;
        if (l = l.compare, l = l !== null ? l : gi, l(g, a) && t.ref === e.ref) return An(t, e, o);
      }
      return e.flags |= 1, t = Sn(r, a), t.ref = e.ref, t.return = e, e.child = t;
    }
    function kh(t, e, l, a, o) {
      if (t !== null) {
        var r = t.memoizedProps;
        if (gi(r, a) && t.ref === e.ref) if (ee = false, e.pendingProps = a = r, as(t, o)) (t.flags & 131072) !== 0 && (ee = true);
        else return e.lanes = t.lanes, An(t, e, o);
      }
      return Wr(t, e, l, a, o);
    }
    function Kh(t, e, l, a) {
      var o = a.children, r = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (r = r !== null ? r.baseLanes | l : l, t !== null) {
            for (a = e.child = t.child, o = 0; a !== null; ) o = o | a.lanes | a.childLanes, a = a.sibling;
            a = o & ~r;
          } else a = 0, e.child = null;
          return $h(t, e, r, l, a);
        }
        if ((l & 536870912) !== 0) e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && Fu(e, r !== null ? r.cachePool : null), r !== null ? Fd(e, r) : Ar(), Wd(e);
        else return a = e.lanes = 536870912, $h(t, e, r !== null ? r.baseLanes | l : l, l, a);
      } else r !== null ? (Fu(e, r.cachePool), Fd(e, r), nl(), e.memoizedState = null) : (t !== null && Fu(e, null), Ar(), nl());
      return fe(t, e, o, l), e.child;
    }
    function Ti(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function $h(t, e, l, a, o) {
      var r = Sr();
      return r = r === null ? null : {
        parent: Pt._currentValue,
        pool: r
      }, e.memoizedState = {
        baseLanes: l,
        cachePool: r
      }, t !== null && Fu(e, null), Ar(), Wd(e), t !== null && Sa(t, e, a, true), e.childLanes = o, null;
    }
    function ho(t, e) {
      return e = mo({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Jh(t, e, l) {
      return Vl(e, t.child, null, l), t = ho(e, e.pendingProps), t.flags |= 2, De(e), e.memoizedState = null, t;
    }
    function Fv(t, e, l) {
      var a = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (Tt) {
          if (a.mode === "hidden") return t = ho(e, a), e.lanes = 536870912, Ti(null, t);
          if (Tr(e), (t = Zt) ? (t = og(t, qe), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: $n !== null ? {
              id: an,
              overflow: un
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Od(t), l.return = e, e.child = l, re = e, Zt = null)) : t = null, t === null) throw Fn(e);
          return e.lanes = 536870912, null;
        }
        return ho(e, a);
      }
      var r = t.memoizedState;
      if (r !== null) {
        var g = r.dehydrated;
        if (Tr(e), o) if (e.flags & 256) e.flags &= -257, e = Jh(t, e, l);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
        else if (ee || Sa(t, e, l, false), o = (l & t.childLanes) !== 0, ee || o) {
          if (a = qt, a !== null && (g = wu(a, l), g !== 0 && g !== r.retryLane)) throw r.retryLane = g, Ol(t, g), Ne(a, t, g), Fr;
          wo(), e = Jh(t, e, l);
        } else t = r.treeContext, Zt = Ze(g.nextSibling), re = e, Tt = true, Jn = null, qe = false, t !== null && Bd(e, t), e = ho(e, a), e.flags |= 4096;
        return e;
      }
      return t = Sn(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function go(t, e) {
      var l = e.ref;
      if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(c(284));
        (t === null || t.ref !== l) && (e.flags |= 4194816);
      }
    }
    function Wr(t, e, l, a, o) {
      return Ul(e), l = Dr(t, e, l, a, void 0, o), a = Or(), t !== null && !ee ? (Hr(t, e, o), An(t, e, o)) : (Tt && a && dr(e), e.flags |= 1, fe(t, e, l, o), e.child);
    }
    function Fh(t, e, l, a, o, r) {
      return Ul(e), e.updateQueue = null, l = Pd(e, a, l, o), Id(t), a = Or(), t !== null && !ee ? (Hr(t, e, r), An(t, e, r)) : (Tt && a && dr(e), e.flags |= 1, fe(t, e, l, r), e.child);
    }
    function Wh(t, e, l, a, o) {
      if (Ul(e), e.stateNode === null) {
        var r = pa, g = l.contextType;
        typeof g == "object" && g !== null && (r = se(g)), r = new l(a, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = $r, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = a, r.state = e.memoizedState, r.refs = {}, Er(e), g = l.contextType, r.context = typeof g == "object" && g !== null ? se(g) : pa, r.state = e.memoizedState, g = l.getDerivedStateFromProps, typeof g == "function" && (Kr(e, l, g, a), r.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (g = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), g !== r.state && $r.enqueueReplaceState(r, r.state, null), wi(e, a, r, o), Ei(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = true;
      } else if (t === null) {
        r = e.stateNode;
        var b = e.memoizedProps, D = Xl(l, b);
        r.props = D;
        var K = r.context, nt = l.contextType;
        g = pa, typeof nt == "object" && nt !== null && (g = se(nt));
        var at = l.getDerivedStateFromProps;
        nt = typeof at == "function" || typeof r.getSnapshotBeforeUpdate == "function", b = e.pendingProps !== b, nt || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (b || K !== g) && jh(e, r, a, g), In = false;
        var J = e.memoizedState;
        r.state = J, wi(e, a, r, o), Ei(), K = e.memoizedState, b || J !== K || In ? (typeof at == "function" && (Kr(e, l, at, a), K = e.memoizedState), (D = In || Uh(e, l, D, a, J, K, g)) ? (nt || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = K), r.props = a, r.state = K, r.context = g, a = D) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = false);
      } else {
        r = e.stateNode, wr(t, e), g = e.memoizedProps, nt = Xl(l, g), r.props = nt, at = e.pendingProps, J = r.context, K = l.contextType, D = pa, typeof K == "object" && K !== null && (D = se(K)), b = l.getDerivedStateFromProps, (K = typeof b == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g !== at || J !== D) && jh(e, r, a, D), In = false, J = e.memoizedState, r.state = J, wi(e, a, r, o), Ei();
        var W = e.memoizedState;
        g !== at || J !== W || In || t !== null && t.dependencies !== null && $u(t.dependencies) ? (typeof b == "function" && (Kr(e, l, b, a), W = e.memoizedState), (nt = In || Uh(e, l, nt, a, J, W, D) || t !== null && t.dependencies !== null && $u(t.dependencies)) ? (K || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, W, D), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(a, W, D)), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || g === t.memoizedProps && J === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && J === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = W), r.props = a, r.state = W, r.context = D, a = nt) : (typeof r.componentDidUpdate != "function" || g === t.memoizedProps && J === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && J === t.memoizedState || (e.flags |= 1024), a = false);
      }
      return r = a, go(t, e), a = (e.flags & 128) !== 0, r || a ? (r = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && a ? (e.child = Vl(e, t.child, null, o), e.child = Vl(e, null, l, o)) : fe(t, e, l, o), e.memoizedState = r.state, t = e.child) : t = An(t, e, o), t;
    }
    function Ih(t, e, l, a) {
      return Rl(), e.flags |= 256, fe(t, e, l, a), e.child;
    }
    var Ir = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Pr(t) {
      return {
        baseLanes: t,
        cachePool: qd()
      };
    }
    function ts(t, e, l) {
      return t = t !== null ? t.childLanes & ~l : 0, e && (t |= He), t;
    }
    function Ph(t, e, l) {
      var a = e.pendingProps, o = false, r = (e.flags & 128) !== 0, g;
      if ((g = r) || (g = t !== null && t.memoizedState === null ? false : (Ft.current & 2) !== 0), g && (o = true, e.flags &= -129), g = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (Tt) {
          if (o ? el(e) : nl(), (t = Zt) ? (t = og(t, qe), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: $n !== null ? {
              id: an,
              overflow: un
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Od(t), l.return = e, e.child = l, re = e, Zt = null)) : t = null, t === null) throw Fn(e);
          return Us(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var b = a.children;
        return a = a.fallback, o ? (nl(), o = e.mode, b = mo({
          mode: "hidden",
          children: b
        }, o), a = Hl(a, o, l, null), b.return = e, a.return = e, b.sibling = a, e.child = b, a = e.child, a.memoizedState = Pr(l), a.childLanes = ts(t, g, l), e.memoizedState = Ir, Ti(null, a)) : (el(e), es(e, b));
      }
      var D = t.memoizedState;
      if (D !== null && (b = D.dehydrated, b !== null)) {
        if (r) e.flags & 256 ? (el(e), e.flags &= -257, e = ns(t, e, l)) : e.memoizedState !== null ? (nl(), e.child = t.child, e.flags |= 128, e = null) : (nl(), b = a.fallback, o = e.mode, a = mo({
          mode: "visible",
          children: a.children
        }, o), b = Hl(b, o, l, null), b.flags |= 2, a.return = e, b.return = e, a.sibling = b, e.child = a, Vl(e, t.child, null, l), a = e.child, a.memoizedState = Pr(l), a.childLanes = ts(t, g, l), e.memoizedState = Ir, e = Ti(null, a));
        else if (el(e), Us(b)) {
          if (g = b.nextSibling && b.nextSibling.dataset, g) var K = g.dgst;
          g = K, a = Error(c(419)), a.stack = "", a.digest = g, pi({
            value: a,
            source: null,
            stack: null
          }), e = ns(t, e, l);
        } else if (ee || Sa(t, e, l, false), g = (l & t.childLanes) !== 0, ee || g) {
          if (g = qt, g !== null && (a = wu(g, l), a !== 0 && a !== D.retryLane)) throw D.retryLane = a, Ol(t, a), Ne(g, t, a), Fr;
          Bs(b) || wo(), e = ns(t, e, l);
        } else Bs(b) ? (e.flags |= 192, e.child = t.child, e = null) : (t = D.treeContext, Zt = Ze(b.nextSibling), re = e, Tt = true, Jn = null, qe = false, t !== null && Bd(e, t), e = es(e, a.children), e.flags |= 4096);
        return e;
      }
      return o ? (nl(), b = a.fallback, o = e.mode, D = t.child, K = D.sibling, a = Sn(D, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = D.subtreeFlags & 65011712, K !== null ? b = Sn(K, b) : (b = Hl(b, o, l, null), b.flags |= 2), b.return = e, a.return = e, a.sibling = b, e.child = a, Ti(null, a), a = e.child, b = t.child.memoizedState, b === null ? b = Pr(l) : (o = b.cachePool, o !== null ? (D = Pt._currentValue, o = o.parent !== D ? {
        parent: D,
        pool: D
      } : o) : o = qd(), b = {
        baseLanes: b.baseLanes | l,
        cachePool: o
      }), a.memoizedState = b, a.childLanes = ts(t, g, l), e.memoizedState = Ir, Ti(t.child, a)) : (el(e), l = t.child, t = l.sibling, l = Sn(l, {
        mode: "visible",
        children: a.children
      }), l.return = e, l.sibling = null, t !== null && (g = e.deletions, g === null ? (e.deletions = [
        t
      ], e.flags |= 16) : g.push(t)), e.child = l, e.memoizedState = null, l);
    }
    function es(t, e) {
      return e = mo({
        mode: "visible",
        children: e
      }, t.mode), e.return = t, t.child = e;
    }
    function mo(t, e) {
      return t = Te(22, t, null, e), t.lanes = 0, t;
    }
    function ns(t, e, l) {
      return Vl(e, t.child, null, l), t = es(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function t0(t, e, l) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e), pr(t.return, e, l);
    }
    function ls(t, e, l, a, o, r) {
      var g = t.memoizedState;
      g === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: o,
        treeForkCount: r
      } : (g.isBackwards = e, g.rendering = null, g.renderingStartTime = 0, g.last = a, g.tail = l, g.tailMode = o, g.treeForkCount = r);
    }
    function e0(t, e, l) {
      var a = e.pendingProps, o = a.revealOrder, r = a.tail;
      a = a.children;
      var g = Ft.current, b = (g & 2) !== 0;
      if (b ? (g = g & 1 | 2, e.flags |= 128) : g &= 1, P(Ft, g), fe(t, e, a, l), a = Tt ? yi : 0, !b && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && t0(t, l, e);
        else if (t.tag === 19) t0(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      switch (o) {
        case "forwards":
          for (l = e.child, o = null; l !== null; ) t = l.alternate, t !== null && no(t) === null && (o = l), l = l.sibling;
          l = o, l === null ? (o = e.child, e.child = null) : (o = l.sibling, l.sibling = null), ls(e, false, o, l, r, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, o = e.child, e.child = null; o !== null; ) {
            if (t = o.alternate, t !== null && no(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = l, l = o, o = t;
          }
          ls(e, true, l, null, r, a);
          break;
        case "together":
          ls(e, false, null, null, void 0, a);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function An(t, e, l) {
      if (t !== null && (e.dependencies = t.dependencies), il |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
        if (Sa(t, e, l, false), (l & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(c(153));
      if (e.child !== null) {
        for (t = e.child, l = Sn(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = Sn(t, t.pendingProps), l.return = e;
        l.sibling = null;
      }
      return e.child;
    }
    function as(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && $u(t)));
    }
    function Wv(t, e, l) {
      switch (e.tag) {
        case 3:
          ut(e, e.stateNode.containerInfo), Wn(e, Pt, t.memoizedState.cache), Rl();
          break;
        case 27:
        case 5:
          _t(e);
          break;
        case 4:
          ut(e, e.stateNode.containerInfo);
          break;
        case 10:
          Wn(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, Tr(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (el(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Ph(t, e, l) : (el(e), t = An(t, e, l), t !== null ? t.sibling : null);
          el(e);
          break;
        case 19:
          var o = (t.flags & 128) !== 0;
          if (a = (l & e.childLanes) !== 0, a || (Sa(t, e, l, false), a = (l & e.childLanes) !== 0), o) {
            if (a) return e0(t, e, l);
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), P(Ft, Ft.current), a) break;
          return null;
        case 22:
          return e.lanes = 0, Kh(t, e, l, e.pendingProps);
        case 24:
          Wn(e, Pt, t.memoizedState.cache);
      }
      return An(t, e, l);
    }
    function n0(t, e, l) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) ee = true;
      else {
        if (!as(t, l) && (e.flags & 128) === 0) return ee = false, Wv(t, e, l);
        ee = (t.flags & 131072) !== 0;
      }
      else ee = false, Tt && (e.flags & 1048576) !== 0 && Rd(e, yi, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (t = Yl(e.elementType), e.type = t, typeof t == "function") rr(t) ? (a = Xl(t, a), e.tag = 1, e = Wh(null, e, t, a, l)) : (e.tag = 0, e = Wr(null, e, t, a, l));
            else {
              if (t != null) {
                var o = t.$$typeof;
                if (o === A) {
                  e.tag = 11, e = Gh(null, e, t, a, l);
                  break t;
                } else if (o === U) {
                  e.tag = 14, e = Qh(null, e, t, a, l);
                  break t;
                }
              }
              throw e = T(t) || t, Error(c(306, e, ""));
            }
          }
          return e;
        case 0:
          return Wr(t, e, e.type, e.pendingProps, l);
        case 1:
          return a = e.type, o = Xl(a, e.pendingProps), Wh(t, e, a, o, l);
        case 3:
          t: {
            if (ut(e, e.stateNode.containerInfo), t === null) throw Error(c(387));
            a = e.pendingProps;
            var r = e.memoizedState;
            o = r.element, wr(t, e), wi(e, a, null, l);
            var g = e.memoizedState;
            if (a = g.cache, Wn(e, Pt, a), a !== r.cache && vr(e, [
              Pt
            ], l, true), Ei(), a = g.element, r.isDehydrated) if (r = {
              element: a,
              isDehydrated: false,
              cache: g.cache
            }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
              e = Ih(t, e, a, l);
              break t;
            } else if (a !== o) {
              o = Ye(Error(c(424)), e), pi(o), e = Ih(t, e, a, l);
              break t;
            } else for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Zt = Ze(t.firstChild), re = e, Tt = true, Jn = null, qe = true, l = Kd(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            else {
              if (Rl(), a === o) {
                e = An(t, e, l);
                break t;
              }
              fe(t, e, a, l);
            }
            e = e.child;
          }
          return e;
        case 26:
          return go(t, e), t === null ? (l = hg(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : Tt || (l = e.type, t = e.pendingProps, a = Do(st.current).createElement(l), a[ae] = e, a[he] = t, de(a, l, t), It(a), e.stateNode = a) : e.memoizedState = hg(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return _t(e), t === null && Tt && (a = e.stateNode = sg(e.type, e.pendingProps, st.current), re = e, qe = true, o = Zt, sl(e.type) ? (js = o, Zt = Ze(a.firstChild)) : Zt = o), fe(t, e, e.pendingProps.children, l), go(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && Tt && ((o = a = Zt) && (a = A1(a, e.type, e.pendingProps, qe), a !== null ? (e.stateNode = a, re = e, Zt = Ze(a.firstChild), qe = false, o = true) : o = false), o || Fn(e)), _t(e), o = e.type, r = e.pendingProps, g = t !== null ? t.memoizedProps : null, a = r.children, Os(o, r) ? a = null : g !== null && Os(o, g) && (e.flags |= 32), e.memoizedState !== null && (o = Dr(t, e, Xv, null, null, l), Gi._currentValue = o), go(t, e), fe(t, e, a, l), e.child;
        case 6:
          return t === null && Tt && ((t = l = Zt) && (l = z1(l, e.pendingProps, qe), l !== null ? (e.stateNode = l, re = e, Zt = null, t = true) : t = false), t || Fn(e)), null;
        case 13:
          return Ph(t, e, l);
        case 4:
          return ut(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = Vl(e, null, a, l) : fe(t, e, a, l), e.child;
        case 11:
          return Gh(t, e, e.type, e.pendingProps, l);
        case 7:
          return fe(t, e, e.pendingProps, l), e.child;
        case 8:
          return fe(t, e, e.pendingProps.children, l), e.child;
        case 12:
          return fe(t, e, e.pendingProps.children, l), e.child;
        case 10:
          return a = e.pendingProps, Wn(e, e.type, a.value), fe(t, e, a.children, l), e.child;
        case 9:
          return o = e.type._context, a = e.pendingProps.children, Ul(e), o = se(o), a = a(o), e.flags |= 1, fe(t, e, a, l), e.child;
        case 14:
          return Qh(t, e, e.type, e.pendingProps, l);
        case 15:
          return kh(t, e, e.type, e.pendingProps, l);
        case 19:
          return e0(t, e, l);
        case 31:
          return Fv(t, e, l);
        case 22:
          return Kh(t, e, l, e.pendingProps);
        case 24:
          return Ul(e), a = se(Pt), t === null ? (o = Sr(), o === null && (o = qt, r = xr(), o.pooledCache = r, r.refCount++, r !== null && (o.pooledCacheLanes |= l), o = r), e.memoizedState = {
            parent: a,
            cache: o
          }, Er(e), Wn(e, Pt, o)) : ((t.lanes & l) !== 0 && (wr(t, e), wi(e, null, null, l), Ei()), o = t.memoizedState, r = e.memoizedState, o.parent !== a ? (o = {
            parent: a,
            cache: a
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Wn(e, Pt, a)) : (a = r.cache, Wn(e, Pt, a), a !== o.cache && vr(e, [
            Pt
          ], l, true))), fe(t, e, e.pendingProps.children, l), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(c(156, e.tag));
    }
    function zn(t) {
      t.flags |= 4;
    }
    function is(t, e, l, a, o) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (o & 335544128) === o) if (t.stateNode.complete) t.flags |= 8192;
        else if (T0()) t.flags |= 8192;
        else throw Ll = Iu, _r;
      } else t.flags &= -16777217;
    }
    function l0(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !vg(e)) if (T0()) t.flags |= 8192;
      else throw Ll = Iu, _r;
    }
    function yo(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Su() : 536870912, t.lanes |= e, Ha |= e);
    }
    function Ci(t, e) {
      if (!Tt) switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; ) e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; ) l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
    }
    function Gt(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
      if (e) for (var o = t.child; o !== null; ) l |= o.lanes | o.childLanes, a |= o.subtreeFlags & 65011712, a |= o.flags & 65011712, o.return = t, o = o.sibling;
      else for (o = t.child; o !== null; ) l |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= a, t.childLanes = l, e;
    }
    function Iv(t, e, l) {
      var a = e.pendingProps;
      switch (hr(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Gt(e), null;
        case 1:
          return Gt(e), null;
        case 3:
          return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), wn(Pt), ft(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ba(e) ? zn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, mr())), Gt(e), null;
        case 26:
          var o = e.type, r = e.memoizedState;
          return t === null ? (zn(e), r !== null ? (Gt(e), l0(e, r)) : (Gt(e), is(e, o, null, a, l))) : r ? r !== t.memoizedState ? (zn(e), Gt(e), l0(e, r)) : (Gt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && zn(e), Gt(e), is(e, o, t, a, l)), null;
        case 27:
          if (bt(e), l = st.current, o = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && zn(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(c(166));
              return Gt(e), null;
            }
            t = tt.current, ba(e) ? Ud(e) : (t = sg(o, a, l), e.stateNode = t, zn(e));
          }
          return Gt(e), null;
        case 5:
          if (bt(e), o = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && zn(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(c(166));
              return Gt(e), null;
            }
            if (r = tt.current, ba(e)) Ud(e);
            else {
              var g = Do(st.current);
              switch (r) {
                case 1:
                  r = g.createElementNS("http://www.w3.org/2000/svg", o);
                  break;
                case 2:
                  r = g.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                  break;
                default:
                  switch (o) {
                    case "svg":
                      r = g.createElementNS("http://www.w3.org/2000/svg", o);
                      break;
                    case "math":
                      r = g.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                      break;
                    case "script":
                      r = g.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild);
                      break;
                    case "select":
                      r = typeof a.is == "string" ? g.createElement("select", {
                        is: a.is
                      }) : g.createElement("select"), a.multiple ? r.multiple = true : a.size && (r.size = a.size);
                      break;
                    default:
                      r = typeof a.is == "string" ? g.createElement(o, {
                        is: a.is
                      }) : g.createElement(o);
                  }
              }
              r[ae] = e, r[he] = a;
              t: for (g = e.child; g !== null; ) {
                if (g.tag === 5 || g.tag === 6) r.appendChild(g.stateNode);
                else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                  g.child.return = g, g = g.child;
                  continue;
                }
                if (g === e) break t;
                for (; g.sibling === null; ) {
                  if (g.return === null || g.return === e) break t;
                  g = g.return;
                }
                g.sibling.return = g.return, g = g.sibling;
              }
              e.stateNode = r;
              t: switch (de(r, o, a), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break t;
                case "img":
                  a = true;
                  break t;
                default:
                  a = false;
              }
              a && zn(e);
            }
          }
          return Gt(e), is(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== a && zn(e);
          else {
            if (typeof a != "string" && e.stateNode === null) throw Error(c(166));
            if (t = st.current, ba(e)) {
              if (t = e.stateNode, l = e.memoizedProps, a = null, o = re, o !== null) switch (o.tag) {
                case 27:
                case 5:
                  a = o.memoizedProps;
              }
              t[ae] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === true || P0(t.nodeValue, l)), t || Fn(e, true);
            } else t = Do(t).createTextNode(a), t[ae] = e, e.stateNode = t;
          }
          return Gt(e), null;
        case 31:
          if (l = e.memoizedState, t === null || t.memoizedState !== null) {
            if (a = ba(e), l !== null) {
              if (t === null) {
                if (!a) throw Error(c(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
                t[ae] = e;
              } else Rl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Gt(e), t = false;
            } else l = mr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
            if (!t) return e.flags & 256 ? (De(e), e) : (De(e), null);
            if ((e.flags & 128) !== 0) throw Error(c(558));
          }
          return Gt(e), null;
        case 13:
          if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = ba(e), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!o) throw Error(c(318));
                if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(c(317));
                o[ae] = e;
              } else Rl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Gt(e), o = false;
            } else o = mr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = true;
            if (!o) return e.flags & 256 ? (De(e), e) : (De(e), null);
          }
          return De(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool), r = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool), r !== o && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), yo(e, e.updateQueue), Gt(e), null);
        case 4:
          return ft(), t === null && As(e.stateNode.containerInfo), Gt(e), null;
        case 10:
          return wn(e.type), Gt(e), null;
        case 19:
          if (R(Ft), a = e.memoizedState, a === null) return Gt(e), null;
          if (o = (e.flags & 128) !== 0, r = a.rendering, r === null) if (o) Ci(a, false);
          else {
            if (Jt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (r = no(t), r !== null) {
                for (e.flags |= 128, Ci(a, false), t = r.updateQueue, e.updateQueue = t, yo(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) Dd(l, t), l = l.sibling;
                return P(Ft, Ft.current & 1 | 2), Tt && _n(e, a.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            a.tail !== null && ce() > So && (e.flags |= 128, o = true, Ci(a, false), e.lanes = 4194304);
          }
          else {
            if (!o) if (t = no(r), t !== null) {
              if (e.flags |= 128, o = true, t = t.updateQueue, e.updateQueue = t, yo(e, t), Ci(a, true), a.tail === null && a.tailMode === "hidden" && !r.alternate && !Tt) return Gt(e), null;
            } else 2 * ce() - a.renderingStartTime > So && l !== 536870912 && (e.flags |= 128, o = true, Ci(a, false), e.lanes = 4194304);
            a.isBackwards ? (r.sibling = e.child, e.child = r) : (t = a.last, t !== null ? t.sibling = r : e.child = r, a.last = r);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ce(), t.sibling = null, l = Ft.current, P(Ft, o ? l & 1 | 2 : l & 1), Tt && _n(e, a.treeForkCount), t) : (Gt(e), null);
        case 22:
        case 23:
          return De(e), zr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e), l = e.updateQueue, l !== null && yo(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && R(jl), null;
        case 24:
          return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), wn(Pt), Gt(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(c(156, e.tag));
    }
    function Pv(t, e) {
      switch (hr(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return wn(Pt), ft(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return bt(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (De(e), e.alternate === null) throw Error(c(340));
            Rl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (De(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(c(340));
            Rl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return R(Ft), null;
        case 4:
          return ft(), null;
        case 10:
          return wn(e.type), null;
        case 22:
        case 23:
          return De(e), zr(), t !== null && R(jl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return wn(Pt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function a0(t, e) {
      switch (hr(e), e.tag) {
        case 3:
          wn(Pt), ft();
          break;
        case 26:
        case 27:
        case 5:
          bt(e);
          break;
        case 4:
          ft();
          break;
        case 31:
          e.memoizedState !== null && De(e);
          break;
        case 13:
          De(e);
          break;
        case 19:
          R(Ft);
          break;
        case 10:
          wn(e.type);
          break;
        case 22:
        case 23:
          De(e), zr(), t !== null && R(jl);
          break;
        case 24:
          wn(Pt);
      }
    }
    function Di(t, e) {
      try {
        var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
        if (a !== null) {
          var o = a.next;
          l = o;
          do {
            if ((l.tag & t) === t) {
              a = void 0;
              var r = l.create, g = l.inst;
              a = r(), g.destroy = a;
            }
            l = l.next;
          } while (l !== o);
        }
      } catch (b) {
        Ut(e, e.return, b);
      }
    }
    function ll(t, e, l) {
      try {
        var a = e.updateQueue, o = a !== null ? a.lastEffect : null;
        if (o !== null) {
          var r = o.next;
          a = r;
          do {
            if ((a.tag & t) === t) {
              var g = a.inst, b = g.destroy;
              if (b !== void 0) {
                g.destroy = void 0, o = e;
                var D = l, K = b;
                try {
                  K();
                } catch (nt) {
                  Ut(o, D, nt);
                }
              }
            }
            a = a.next;
          } while (a !== r);
        }
      } catch (nt) {
        Ut(e, e.return, nt);
      }
    }
    function i0(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var l = t.stateNode;
        try {
          Jd(e, l);
        } catch (a) {
          Ut(t, t.return, a);
        }
      }
    }
    function u0(t, e, l) {
      l.props = Xl(t.type, t.memoizedProps), l.state = t.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (a) {
        Ut(t, e, a);
      }
    }
    function Oi(t, e) {
      try {
        var l = t.ref;
        if (l !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var a = t.stateNode;
              break;
            case 30:
              a = t.stateNode;
              break;
            default:
              a = t.stateNode;
          }
          typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
        }
      } catch (o) {
        Ut(t, e, o);
      }
    }
    function on(t, e) {
      var l = t.ref, a = t.refCleanup;
      if (l !== null) if (typeof a == "function") try {
        a();
      } catch (o) {
        Ut(t, e, o);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (o) {
        Ut(t, e, o);
      }
      else l.current = null;
    }
    function o0(t) {
      var e = t.type, l = t.memoizedProps, a = t.stateNode;
      try {
        t: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            l.autoFocus && a.focus();
            break t;
          case "img":
            l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
        }
      } catch (o) {
        Ut(t, t.return, o);
      }
    }
    function us(t, e, l) {
      try {
        var a = t.stateNode;
        S1(a, t.type, l, e), a[he] = e;
      } catch (o) {
        Ut(t, t.return, o);
      }
    }
    function c0(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && sl(t.type) || t.tag === 4;
    }
    function os(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || c0(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && sl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function cs(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = xn));
      else if (a !== 4 && (a === 27 && sl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (cs(t, e, l), t = t.sibling; t !== null; ) cs(t, e, l), t = t.sibling;
    }
    function po(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
      else if (a !== 4 && (a === 27 && sl(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (po(t, e, l), t = t.sibling; t !== null; ) po(t, e, l), t = t.sibling;
    }
    function r0(t) {
      var e = t.stateNode, l = t.memoizedProps;
      try {
        for (var a = t.type, o = e.attributes; o.length; ) e.removeAttributeNode(o[0]);
        de(e, a, l), e[ae] = t, e[he] = l;
      } catch (r) {
        Ut(t, t.return, r);
      }
    }
    var Tn = false, ne = false, rs = false, s0 = typeof WeakSet == "function" ? WeakSet : Set, oe = null;
    function t1(t, e) {
      if (t = t.containerInfo, Cs = Yo, t = _d(t), nr(t)) {
        if ("selectionStart" in t) var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var o = a.anchorOffset, r = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, r.nodeType;
            } catch {
              l = null;
              break t;
            }
            var g = 0, b = -1, D = -1, K = 0, nt = 0, at = t, J = null;
            e: for (; ; ) {
              for (var W; at !== l || o !== 0 && at.nodeType !== 3 || (b = g + o), at !== r || a !== 0 && at.nodeType !== 3 || (D = g + a), at.nodeType === 3 && (g += at.nodeValue.length), (W = at.firstChild) !== null; ) J = at, at = W;
              for (; ; ) {
                if (at === t) break e;
                if (J === l && ++K === o && (b = g), J === r && ++nt === a && (D = g), (W = at.nextSibling) !== null) break;
                at = J, J = at.parentNode;
              }
              at = W;
            }
            l = b === -1 || D === -1 ? null : {
              start: b,
              end: D
            };
          } else l = null;
        }
        l = l || {
          start: 0,
          end: 0
        };
      } else l = null;
      for (Ds = {
        focusedElem: t,
        selectionRange: l
      }, Yo = false, oe = e; oe !== null; ) if (e = oe, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, oe = t;
      else for (; oe !== null; ) {
        switch (e = oe, r = e.alternate, t = e.flags, e.tag) {
          case 0:
            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (l = 0; l < t.length; l++) o = t[l], o.ref.impl = o.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((t & 1024) !== 0 && r !== null) {
              t = void 0, l = e, o = r.memoizedProps, r = r.memoizedState, a = l.stateNode;
              try {
                var dt = Xl(l.type, o);
                t = a.getSnapshotBeforeUpdate(dt, r), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (pt) {
                Ut(l, l.return, pt);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) Rs(t);
              else if (l === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Rs(t);
                  break;
                default:
                  t.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((t & 1024) !== 0) throw Error(c(163));
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, oe = t;
          break;
        }
        oe = e.return;
      }
    }
    function f0(t, e, l) {
      var a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Dn(t, l), a & 4 && Di(5, l);
          break;
        case 1:
          if (Dn(t, l), a & 4) if (t = l.stateNode, e === null) try {
            t.componentDidMount();
          } catch (g) {
            Ut(l, l.return, g);
          }
          else {
            var o = Xl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              Ut(l, l.return, g);
            }
          }
          a & 64 && i0(l), a & 512 && Oi(l, l.return);
          break;
        case 3:
          if (Dn(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
            if (e = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
            try {
              Jd(t, e);
            } catch (g) {
              Ut(l, l.return, g);
            }
          }
          break;
        case 27:
          e === null && a & 4 && r0(l);
        case 26:
        case 5:
          Dn(t, l), e === null && a & 4 && o0(l), a & 512 && Oi(l, l.return);
          break;
        case 12:
          Dn(t, l);
          break;
        case 31:
          Dn(t, l), a & 4 && g0(t, l);
          break;
        case 13:
          Dn(t, l), a & 4 && m0(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = r1.bind(null, l), T1(t, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || Tn, !a) {
            e = e !== null && e.memoizedState !== null || ne, o = Tn;
            var r = ne;
            Tn = a, (ne = e) && !r ? On(t, l, (l.subtreeFlags & 8772) !== 0) : Dn(t, l), Tn = o, ne = r;
          }
          break;
        case 30:
          break;
        default:
          Dn(t, l);
      }
    }
    function d0(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, d0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ai(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var Qt = null, Se = false;
    function Cn(t, e, l) {
      for (l = l.child; l !== null; ) h0(t, e, l), l = l.sibling;
    }
    function h0(t, e, l) {
      if (me && typeof me.onCommitFiberUnmount == "function") try {
        me.onCommitFiberUnmount(El, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          ne || on(l, e), Cn(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          ne || on(l, e);
          var a = Qt, o = Se;
          sl(l.type) && (Qt = l.stateNode, Se = false), Cn(t, e, l), qi(l.stateNode), Qt = a, Se = o;
          break;
        case 5:
          ne || on(l, e);
        case 6:
          if (a = Qt, o = Se, Qt = null, Cn(t, e, l), Qt = a, Se = o, Qt !== null) if (Se) try {
            (Qt.nodeType === 9 ? Qt.body : Qt.nodeName === "HTML" ? Qt.ownerDocument.body : Qt).removeChild(l.stateNode);
          } catch (r) {
            Ut(l, e, r);
          }
          else try {
            Qt.removeChild(l.stateNode);
          } catch (r) {
            Ut(l, e, r);
          }
          break;
        case 18:
          Qt !== null && (Se ? (t = Qt, ig(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), qa(t)) : ig(Qt, l.stateNode));
          break;
        case 4:
          a = Qt, o = Se, Qt = l.stateNode.containerInfo, Se = true, Cn(t, e, l), Qt = a, Se = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ll(2, l, e), ne || ll(4, l, e), Cn(t, e, l);
          break;
        case 1:
          ne || (on(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && u0(l, e, a)), Cn(t, e, l);
          break;
        case 21:
          Cn(t, e, l);
          break;
        case 22:
          ne = (a = ne) || l.memoizedState !== null, Cn(t, e, l), ne = a;
          break;
        default:
          Cn(t, e, l);
      }
    }
    function g0(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          qa(t);
        } catch (l) {
          Ut(e, e.return, l);
        }
      }
    }
    function m0(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        qa(t);
      } catch (l) {
        Ut(e, e.return, l);
      }
    }
    function e1(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new s0()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new s0()), e;
        default:
          throw Error(c(435, t.tag));
      }
    }
    function vo(t, e) {
      var l = e1(t);
      e.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var o = s1.bind(null, t, a);
          a.then(o, o);
        }
      });
    }
    function _e(t, e) {
      var l = e.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var o = l[a], r = t, g = e, b = g;
        t: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (sl(b.type)) {
                Qt = b.stateNode, Se = false;
                break t;
              }
              break;
            case 5:
              Qt = b.stateNode, Se = false;
              break t;
            case 3:
            case 4:
              Qt = b.stateNode.containerInfo, Se = true;
              break t;
          }
          b = b.return;
        }
        if (Qt === null) throw Error(c(160));
        h0(r, g, o), Qt = null, Se = false, r = o.alternate, r !== null && (r.return = null), o.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) y0(e, t), e = e.sibling;
    }
    var Je = null;
    function y0(t, e) {
      var l = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _e(e, t), Ee(t), a & 4 && (ll(3, t, t.return), Di(3, t), ll(5, t, t.return));
          break;
        case 1:
          _e(e, t), Ee(t), a & 512 && (ne || l === null || on(l, l.return)), a & 64 && Tn && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
          break;
        case 26:
          var o = Je;
          if (_e(e, t), Ee(t), a & 512 && (ne || l === null || on(l, l.return)), a & 4) {
            var r = l !== null ? l.memoizedState : null;
            if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
              t: {
                a = t.type, l = t.memoizedProps, o = o.ownerDocument || o;
                e: switch (a) {
                  case "title":
                    r = o.getElementsByTagName("title")[0], (!r || r[Ml] || r[ae] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = o.createElement(a), o.head.insertBefore(r, o.querySelector("head > title"))), de(r, a, l), r[ae] = t, It(r), a = r;
                    break t;
                  case "link":
                    var g = yg("link", "href", o).get(a + (l.href || ""));
                    if (g) {
                      for (var b = 0; b < g.length; b++) if (r = g[b], r.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && r.getAttribute("rel") === (l.rel == null ? null : l.rel) && r.getAttribute("title") === (l.title == null ? null : l.title) && r.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        g.splice(b, 1);
                        break e;
                      }
                    }
                    r = o.createElement(a), de(r, a, l), o.head.appendChild(r);
                    break;
                  case "meta":
                    if (g = yg("meta", "content", o).get(a + (l.content || ""))) {
                      for (b = 0; b < g.length; b++) if (r = g[b], r.getAttribute("content") === (l.content == null ? null : "" + l.content) && r.getAttribute("name") === (l.name == null ? null : l.name) && r.getAttribute("property") === (l.property == null ? null : l.property) && r.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && r.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        g.splice(b, 1);
                        break e;
                      }
                    }
                    r = o.createElement(a), de(r, a, l), o.head.appendChild(r);
                    break;
                  default:
                    throw Error(c(468, a));
                }
                r[ae] = t, It(r), a = r;
              }
              t.stateNode = a;
            } else pg(o, t.type, t.stateNode);
            else t.stateNode = mg(o, a, t.memoizedProps);
            else r !== a ? (r === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : r.count--, a === null ? pg(o, t.type, t.stateNode) : mg(o, a, t.memoizedProps)) : a === null && t.stateNode !== null && us(t, t.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          _e(e, t), Ee(t), a & 512 && (ne || l === null || on(l, l.return)), l !== null && a & 4 && us(t, t.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (_e(e, t), Ee(t), a & 512 && (ne || l === null || on(l, l.return)), t.flags & 32) {
            o = t.stateNode;
            try {
              sa(o, "");
            } catch (dt) {
              Ut(t, t.return, dt);
            }
          }
          a & 4 && t.stateNode != null && (o = t.memoizedProps, us(t, o, l !== null ? l.memoizedProps : o)), a & 1024 && (rs = true);
          break;
        case 6:
          if (_e(e, t), Ee(t), a & 4) {
            if (t.stateNode === null) throw Error(c(162));
            a = t.memoizedProps, l = t.stateNode;
            try {
              l.nodeValue = a;
            } catch (dt) {
              Ut(t, t.return, dt);
            }
          }
          break;
        case 3:
          if (Ro = null, o = Je, Je = Oo(e.containerInfo), _e(e, t), Je = o, Ee(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            qa(e.containerInfo);
          } catch (dt) {
            Ut(t, t.return, dt);
          }
          rs && (rs = false, p0(t));
          break;
        case 4:
          a = Je, Je = Oo(t.stateNode.containerInfo), _e(e, t), Ee(t), Je = a;
          break;
        case 12:
          _e(e, t), Ee(t);
          break;
        case 31:
          _e(e, t), Ee(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, vo(t, a)));
          break;
        case 13:
          _e(e, t), Ee(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (bo = ce()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, vo(t, a)));
          break;
        case 22:
          o = t.memoizedState !== null;
          var D = l !== null && l.memoizedState !== null, K = Tn, nt = ne;
          if (Tn = K || o, ne = nt || D, _e(e, t), ne = nt, Tn = K, Ee(t), a & 8192) t: for (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, o && (l === null || D || Tn || ne || Zl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                D = l = e;
                try {
                  if (r = D.stateNode, o) g = r.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    b = D.stateNode;
                    var at = D.memoizedProps.style, J = at != null && at.hasOwnProperty("display") ? at.display : null;
                    b.style.display = J == null || typeof J == "boolean" ? "" : ("" + J).trim();
                  }
                } catch (dt) {
                  Ut(D, D.return, dt);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                D = e;
                try {
                  D.stateNode.nodeValue = o ? "" : D.memoizedProps;
                } catch (dt) {
                  Ut(D, D.return, dt);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                D = e;
                try {
                  var W = D.stateNode;
                  o ? ug(W, true) : ug(D.stateNode, false);
                } catch (dt) {
                  Ut(D, D.return, dt);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
          a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, vo(t, l))));
          break;
        case 19:
          _e(e, t), Ee(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, vo(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          _e(e, t), Ee(t);
      }
    }
    function Ee(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var l, a = t.return; a !== null; ) {
            if (c0(a)) {
              l = a;
              break;
            }
            a = a.return;
          }
          if (l == null) throw Error(c(160));
          switch (l.tag) {
            case 27:
              var o = l.stateNode, r = os(t);
              po(t, r, o);
              break;
            case 5:
              var g = l.stateNode;
              l.flags & 32 && (sa(g, ""), l.flags &= -33);
              var b = os(t);
              po(t, b, g);
              break;
            case 3:
            case 4:
              var D = l.stateNode.containerInfo, K = os(t);
              cs(t, K, D);
              break;
            default:
              throw Error(c(161));
          }
        } catch (nt) {
          Ut(t, t.return, nt);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function p0(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var e = t;
        p0(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
    }
    function Dn(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) f0(t, e.alternate, e), e = e.sibling;
    }
    function Zl(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ll(4, e, e.return), Zl(e);
            break;
          case 1:
            on(e, e.return);
            var l = e.stateNode;
            typeof l.componentWillUnmount == "function" && u0(e, e.return, l), Zl(e);
            break;
          case 27:
            qi(e.stateNode);
          case 26:
          case 5:
            on(e, e.return), Zl(e);
            break;
          case 22:
            e.memoizedState === null && Zl(e);
            break;
          case 30:
            Zl(e);
            break;
          default:
            Zl(e);
        }
        t = t.sibling;
      }
    }
    function On(t, e, l) {
      for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var a = e.alternate, o = t, r = e, g = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            On(o, r, l), Di(4, r);
            break;
          case 1:
            if (On(o, r, l), a = r, o = a.stateNode, typeof o.componentDidMount == "function") try {
              o.componentDidMount();
            } catch (K) {
              Ut(a, a.return, K);
            }
            if (a = r, o = a.updateQueue, o !== null) {
              var b = a.stateNode;
              try {
                var D = o.shared.hiddenCallbacks;
                if (D !== null) for (o.shared.hiddenCallbacks = null, o = 0; o < D.length; o++) $d(D[o], b);
              } catch (K) {
                Ut(a, a.return, K);
              }
            }
            l && g & 64 && i0(r), Oi(r, r.return);
            break;
          case 27:
            r0(r);
          case 26:
          case 5:
            On(o, r, l), l && a === null && g & 4 && o0(r), Oi(r, r.return);
            break;
          case 12:
            On(o, r, l);
            break;
          case 31:
            On(o, r, l), l && g & 4 && g0(o, r);
            break;
          case 13:
            On(o, r, l), l && g & 4 && m0(o, r);
            break;
          case 22:
            r.memoizedState === null && On(o, r, l), Oi(r, r.return);
            break;
          case 30:
            break;
          default:
            On(o, r, l);
        }
        e = e.sibling;
      }
    }
    function ss(t, e) {
      var l = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && vi(l));
    }
    function fs(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && vi(t));
    }
    function Fe(t, e, l, a) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) v0(t, e, l, a), e = e.sibling;
    }
    function v0(t, e, l, a) {
      var o = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Fe(t, e, l, a), o & 2048 && Di(9, e);
          break;
        case 1:
          Fe(t, e, l, a);
          break;
        case 3:
          Fe(t, e, l, a), o & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && vi(t)));
          break;
        case 12:
          if (o & 2048) {
            Fe(t, e, l, a), t = e.stateNode;
            try {
              var r = e.memoizedProps, g = r.id, b = r.onPostCommit;
              typeof b == "function" && b(g, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (D) {
              Ut(e, e.return, D);
            }
          } else Fe(t, e, l, a);
          break;
        case 31:
          Fe(t, e, l, a);
          break;
        case 13:
          Fe(t, e, l, a);
          break;
        case 23:
          break;
        case 22:
          r = e.stateNode, g = e.alternate, e.memoizedState !== null ? r._visibility & 2 ? Fe(t, e, l, a) : Hi(t, e) : r._visibility & 2 ? Fe(t, e, l, a) : (r._visibility |= 2, Ca(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || false)), o & 2048 && ss(g, e);
          break;
        case 24:
          Fe(t, e, l, a), o & 2048 && fs(e.alternate, e);
          break;
        default:
          Fe(t, e, l, a);
      }
    }
    function Ca(t, e, l, a, o) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var r = t, g = e, b = l, D = a, K = g.flags;
        switch (g.tag) {
          case 0:
          case 11:
          case 15:
            Ca(r, g, b, D, o), Di(8, g);
            break;
          case 23:
            break;
          case 22:
            var nt = g.stateNode;
            g.memoizedState !== null ? nt._visibility & 2 ? Ca(r, g, b, D, o) : Hi(r, g) : (nt._visibility |= 2, Ca(r, g, b, D, o)), o && K & 2048 && ss(g.alternate, g);
            break;
          case 24:
            Ca(r, g, b, D, o), o && K & 2048 && fs(g.alternate, g);
            break;
          default:
            Ca(r, g, b, D, o);
        }
        e = e.sibling;
      }
    }
    function Hi(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var l = t, a = e, o = a.flags;
        switch (a.tag) {
          case 22:
            Hi(l, a), o & 2048 && ss(a.alternate, a);
            break;
          case 24:
            Hi(l, a), o & 2048 && fs(a.alternate, a);
            break;
          default:
            Hi(l, a);
        }
        e = e.sibling;
      }
    }
    var Ri = 8192;
    function Da(t, e, l) {
      if (t.subtreeFlags & Ri) for (t = t.child; t !== null; ) x0(t, e, l), t = t.sibling;
    }
    function x0(t, e, l) {
      switch (t.tag) {
        case 26:
          Da(t, e, l), t.flags & Ri && t.memoizedState !== null && q1(l, Je, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Da(t, e, l);
          break;
        case 3:
        case 4:
          var a = Je;
          Je = Oo(t.stateNode.containerInfo), Da(t, e, l), Je = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Ri, Ri = 16777216, Da(t, e, l), Ri = a) : Da(t, e, l));
          break;
        default:
          Da(t, e, l);
      }
    }
    function b0(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function Bi(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          oe = a, _0(a, t);
        }
        b0(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) S0(t), t = t.sibling;
    }
    function S0(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Bi(t), t.flags & 2048 && ll(9, t, t.return);
          break;
        case 3:
          Bi(t);
          break;
        case 12:
          Bi(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, xo(t)) : Bi(t);
          break;
        default:
          Bi(t);
      }
    }
    function xo(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          oe = a, _0(a, t);
        }
        b0(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            ll(8, e, e.return), xo(e);
            break;
          case 22:
            l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, xo(e));
            break;
          default:
            xo(e);
        }
        t = t.sibling;
      }
    }
    function _0(t, e) {
      for (; oe !== null; ) {
        var l = oe;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            ll(8, l, e);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var a = l.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            vi(l.memoizedState.cache);
        }
        if (a = l.child, a !== null) a.return = l, oe = a;
        else t: for (l = t; oe !== null; ) {
          a = oe;
          var o = a.sibling, r = a.return;
          if (d0(a), a === l) {
            oe = null;
            break t;
          }
          if (o !== null) {
            o.return = r, oe = o;
            break t;
          }
          oe = r;
        }
      }
    }
    var n1 = {
      getCacheForType: function(t) {
        var e = se(Pt), l = e.data.get(t);
        return l === void 0 && (l = t(), e.data.set(t, l)), l;
      },
      cacheSignal: function() {
        return se(Pt).controller.signal;
      }
    }, l1 = typeof WeakMap == "function" ? WeakMap : Map, Ht = 0, qt = null, wt = null, At = 0, Bt = 0, Oe = null, al = false, Oa = false, ds = false, Hn = 0, Jt = 0, il = 0, Gl = 0, hs = 0, He = 0, Ha = 0, Ui = null, we = null, gs = false, bo = 0, E0 = 0, So = 1 / 0, _o = null, ul = null, ie = 0, ol = null, Ra = null, Rn = 0, ms = 0, ys = null, w0 = null, ji = 0, ps = null;
    function Re() {
      return (Ht & 2) !== 0 && At !== 0 ? At & -At : w.T !== null ? Es() : Nu();
    }
    function N0() {
      if (He === 0) if ((At & 536870912) === 0 || Tt) {
        var t = la;
        la <<= 1, (la & 3932160) === 0 && (la = 262144), He = t;
      } else He = 536870912;
      return t = Ce.current, t !== null && (t.flags |= 32), He;
    }
    function Ne(t, e, l) {
      (t === qt && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null) && (Ba(t, 0), cl(t, At, He, false)), Nl(t, l), ((Ht & 2) === 0 || t !== qt) && (t === qt && ((Ht & 2) === 0 && (Gl |= l), Jt === 4 && cl(t, At, He, false)), cn(t));
    }
    function M0(t, e, l) {
      if ((Ht & 6) !== 0) throw Error(c(327));
      var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || wl(t, e), o = a ? u1(t, e) : xs(t, e, true), r = a;
      do {
        if (o === 0) {
          Oa && !a && cl(t, e, 0, false);
          break;
        } else {
          if (l = t.current.alternate, r && !a1(l)) {
            o = xs(t, e, false), r = false;
            continue;
          }
          if (o === 2) {
            if (r = e, t.errorRecoveryDisabledLanes & r) var g = 0;
            else g = t.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
            if (g !== 0) {
              e = g;
              t: {
                var b = t;
                o = Ui;
                var D = b.current.memoizedState.isDehydrated;
                if (D && (Ba(b, g).flags |= 256), g = xs(b, g, false), g !== 2) {
                  if (ds && !D) {
                    b.errorRecoveryDisabledLanes |= r, Gl |= r, o = 4;
                    break t;
                  }
                  r = we, we = o, r !== null && (we === null ? we = r : we.push.apply(we, r));
                }
                o = g;
              }
              if (r = false, o !== 2) continue;
            }
          }
          if (o === 1) {
            Ba(t, 0), cl(t, e, 0, true);
            break;
          }
          t: {
            switch (a = t, r = o, r) {
              case 0:
              case 1:
                throw Error(c(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                cl(a, e, He, !al);
                break t;
              case 2:
                we = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(c(329));
            }
            if ((e & 62914560) === e && (o = bo + 300 - ce(), 10 < o)) {
              if (cl(a, e, He, !al), ia(a, 0, true) !== 0) break t;
              Rn = e, a.timeoutHandle = lg(A0.bind(null, a, l, we, _o, gs, e, He, Gl, Ha, al, r, "Throttled", -0, 0), o);
              break t;
            }
            A0(a, l, we, _o, gs, e, He, Gl, Ha, al, r, null, -0, 0);
          }
        }
        break;
      } while (true);
      cn(t);
    }
    function A0(t, e, l, a, o, r, g, b, D, K, nt, at, J, W) {
      if (t.timeoutHandle = -1, at = e.subtreeFlags, at & 8192 || (at & 16785408) === 16785408) {
        at = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: xn
        }, x0(e, r, at);
        var dt = (r & 62914560) === r ? bo - ce() : (r & 4194048) === r ? E0 - ce() : 0;
        if (dt = X1(at, dt), dt !== null) {
          Rn = r, t.cancelPendingCommit = dt(B0.bind(null, t, e, r, l, a, o, g, b, D, nt, at, null, J, W)), cl(t, r, g, !K);
          return;
        }
      }
      B0(t, e, r, l, a, o, g, b, D);
    }
    function a1(t) {
      for (var e = t; ; ) {
        var l = e.tag;
        if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
          var o = l[a], r = o.getSnapshot;
          o = o.value;
          try {
            if (!ze(r(), o)) return false;
          } catch {
            return false;
          }
        }
        if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return true;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return true;
    }
    function cl(t, e, l, a) {
      e &= ~hs, e &= ~Gl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var r = 31 - ye(o), g = 1 << r;
        a[r] = -1, o &= ~g;
      }
      l !== 0 && _u(t, l, e);
    }
    function Eo() {
      return (Ht & 6) === 0 ? (Yi(0), false) : true;
    }
    function vs() {
      if (wt !== null) {
        if (Bt === 0) var t = wt.return;
        else t = wt, En = Bl = null, Rr(t), Na = null, bi = 0, t = wt;
        for (; t !== null; ) a0(t.alternate, t), t = t.return;
        wt = null;
      }
    }
    function Ba(t, e) {
      var l = t.timeoutHandle;
      l !== -1 && (t.timeoutHandle = -1, w1(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Rn = 0, vs(), qt = t, wt = l = Sn(t.current, null), At = e, Bt = 0, Oe = null, al = false, Oa = wl(t, e), ds = false, Ha = He = hs = Gl = il = Jt = 0, we = Ui = null, gs = false, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
        var o = 31 - ye(a), r = 1 << o;
        e |= t[o], a &= ~r;
      }
      return Hn = e, Zu(), l;
    }
    function z0(t, e) {
      St = null, w.H = zi, e === wa || e === Wu ? (e = Gd(), Bt = 3) : e === _r ? (e = Gd(), Bt = 4) : Bt = e === Fr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Oe = e, wt === null && (Jt = 1, fo(t, Ye(e, t.current)));
    }
    function T0() {
      var t = Ce.current;
      return t === null ? true : (At & 4194048) === At ? Xe === null : (At & 62914560) === At || (At & 536870912) !== 0 ? t === Xe : false;
    }
    function C0() {
      var t = w.H;
      return w.H = zi, t === null ? zi : t;
    }
    function D0() {
      var t = w.A;
      return w.A = n1, t;
    }
    function wo() {
      Jt = 4, al || (At & 4194048) !== At && Ce.current !== null || (Oa = true), (il & 134217727) === 0 && (Gl & 134217727) === 0 || qt === null || cl(qt, At, He, false);
    }
    function xs(t, e, l) {
      var a = Ht;
      Ht |= 2;
      var o = C0(), r = D0();
      (qt !== t || At !== e) && (_o = null, Ba(t, e)), e = false;
      var g = Jt;
      t: do
        try {
          if (Bt !== 0 && wt !== null) {
            var b = wt, D = Oe;
            switch (Bt) {
              case 8:
                vs(), g = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                Ce.current === null && (e = true);
                var K = Bt;
                if (Bt = 0, Oe = null, Ua(t, b, D, K), l && Oa) {
                  g = 0;
                  break t;
                }
                break;
              default:
                K = Bt, Bt = 0, Oe = null, Ua(t, b, D, K);
            }
          }
          i1(), g = Jt;
          break;
        } catch (nt) {
          z0(t, nt);
        }
      while (true);
      return e && t.shellSuspendCounter++, En = Bl = null, Ht = a, w.H = o, w.A = r, wt === null && (qt = null, At = 0, Zu()), g;
    }
    function i1() {
      for (; wt !== null; ) O0(wt);
    }
    function u1(t, e) {
      var l = Ht;
      Ht |= 2;
      var a = C0(), o = D0();
      qt !== t || At !== e ? (_o = null, So = ce() + 500, Ba(t, e)) : Oa = wl(t, e);
      t: do
        try {
          if (Bt !== 0 && wt !== null) {
            e = wt;
            var r = Oe;
            e: switch (Bt) {
              case 1:
                Bt = 0, Oe = null, Ua(t, e, r, 1);
                break;
              case 2:
              case 9:
                if (Xd(r)) {
                  Bt = 0, Oe = null, H0(e);
                  break;
                }
                e = function() {
                  Bt !== 2 && Bt !== 9 || qt !== t || (Bt = 7), cn(t);
                }, r.then(e, e);
                break t;
              case 3:
                Bt = 7;
                break t;
              case 4:
                Bt = 5;
                break t;
              case 7:
                Xd(r) ? (Bt = 0, Oe = null, H0(e)) : (Bt = 0, Oe = null, Ua(t, e, r, 7));
                break;
              case 5:
                var g = null;
                switch (wt.tag) {
                  case 26:
                    g = wt.memoizedState;
                  case 5:
                  case 27:
                    var b = wt;
                    if (g ? vg(g) : b.stateNode.complete) {
                      Bt = 0, Oe = null;
                      var D = b.sibling;
                      if (D !== null) wt = D;
                      else {
                        var K = b.return;
                        K !== null ? (wt = K, No(K)) : wt = null;
                      }
                      break e;
                    }
                }
                Bt = 0, Oe = null, Ua(t, e, r, 5);
                break;
              case 6:
                Bt = 0, Oe = null, Ua(t, e, r, 6);
                break;
              case 8:
                vs(), Jt = 6;
                break t;
              default:
                throw Error(c(462));
            }
          }
          o1();
          break;
        } catch (nt) {
          z0(t, nt);
        }
      while (true);
      return En = Bl = null, w.H = a, w.A = o, Ht = l, wt !== null ? 0 : (qt = null, At = 0, Zu(), Jt);
    }
    function o1() {
      for (; wt !== null && !bl(); ) O0(wt);
    }
    function O0(t) {
      var e = n0(t.alternate, t, Hn);
      t.memoizedProps = t.pendingProps, e === null ? No(t) : wt = e;
    }
    function H0(t) {
      var e = t, l = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = Fh(l, e, e.pendingProps, e.type, void 0, At);
          break;
        case 11:
          e = Fh(l, e, e.pendingProps, e.type.render, e.ref, At);
          break;
        case 5:
          Rr(e);
        default:
          a0(l, e), e = wt = Dd(e, Hn), e = n0(l, e, Hn);
      }
      t.memoizedProps = t.pendingProps, e === null ? No(t) : wt = e;
    }
    function Ua(t, e, l, a) {
      En = Bl = null, Rr(e), Na = null, bi = 0;
      var o = e.return;
      try {
        if (Jv(t, o, e, l, At)) {
          Jt = 1, fo(t, Ye(l, t.current)), wt = null;
          return;
        }
      } catch (r) {
        if (o !== null) throw wt = o, r;
        Jt = 1, fo(t, Ye(l, t.current)), wt = null;
        return;
      }
      e.flags & 32768 ? (Tt || a === 1 ? t = true : Oa || (At & 536870912) !== 0 ? t = false : (al = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ce.current, a !== null && a.tag === 13 && (a.flags |= 16384))), R0(e, t)) : No(e);
    }
    function No(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          R0(e, al);
          return;
        }
        t = e.return;
        var l = Iv(e.alternate, e, Hn);
        if (l !== null) {
          wt = l;
          return;
        }
        if (e = e.sibling, e !== null) {
          wt = e;
          return;
        }
        wt = e = t;
      } while (e !== null);
      Jt === 0 && (Jt = 5);
    }
    function R0(t, e) {
      do {
        var l = Pv(t.alternate, t);
        if (l !== null) {
          l.flags &= 32767, wt = l;
          return;
        }
        if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
          wt = t;
          return;
        }
        wt = t = l;
      } while (t !== null);
      Jt = 6, wt = null;
    }
    function B0(t, e, l, a, o, r, g, b, D) {
      t.cancelPendingCommit = null;
      do
        Mo();
      while (ie !== 0);
      if ((Ht & 6) !== 0) throw Error(c(327));
      if (e !== null) {
        if (e === t.current) throw Error(c(177));
        if (r = e.lanes | e.childLanes, r |= or, jc(t, l, r, g, b, D), t === qt && (wt = qt = null, At = 0), Ra = e, ol = t, Rn = l, ms = r, ys = o, w0 = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, f1(_l, function() {
          return V0(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
          a = w.T, w.T = null, o = O.p, O.p = 2, g = Ht, Ht |= 4;
          try {
            t1(t, e, l);
          } finally {
            Ht = g, O.p = o, w.T = a;
          }
        }
        ie = 1, U0(), j0(), Y0();
      }
    }
    function U0() {
      if (ie === 1) {
        ie = 0;
        var t = ol, e = Ra, l = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || l) {
          l = w.T, w.T = null;
          var a = O.p;
          O.p = 2;
          var o = Ht;
          Ht |= 4;
          try {
            y0(e, t);
            var r = Ds, g = _d(t.containerInfo), b = r.focusedElem, D = r.selectionRange;
            if (g !== b && b && b.ownerDocument && Sd(b.ownerDocument.documentElement, b)) {
              if (D !== null && nr(b)) {
                var K = D.start, nt = D.end;
                if (nt === void 0 && (nt = K), "selectionStart" in b) b.selectionStart = K, b.selectionEnd = Math.min(nt, b.value.length);
                else {
                  var at = b.ownerDocument || document, J = at && at.defaultView || window;
                  if (J.getSelection) {
                    var W = J.getSelection(), dt = b.textContent.length, pt = Math.min(D.start, dt), Vt = D.end === void 0 ? pt : Math.min(D.end, dt);
                    !W.extend && pt > Vt && (g = Vt, Vt = pt, pt = g);
                    var q = bd(b, pt), B = bd(b, Vt);
                    if (q && B && (W.rangeCount !== 1 || W.anchorNode !== q.node || W.anchorOffset !== q.offset || W.focusNode !== B.node || W.focusOffset !== B.offset)) {
                      var k = at.createRange();
                      k.setStart(q.node, q.offset), W.removeAllRanges(), pt > Vt ? (W.addRange(k), W.extend(B.node, B.offset)) : (k.setEnd(B.node, B.offset), W.addRange(k));
                    }
                  }
                }
              }
              for (at = [], W = b; W = W.parentNode; ) W.nodeType === 1 && at.push({
                element: W,
                left: W.scrollLeft,
                top: W.scrollTop
              });
              for (typeof b.focus == "function" && b.focus(), b = 0; b < at.length; b++) {
                var lt = at[b];
                lt.element.scrollLeft = lt.left, lt.element.scrollTop = lt.top;
              }
            }
            Yo = !!Cs, Ds = Cs = null;
          } finally {
            Ht = o, O.p = a, w.T = l;
          }
        }
        t.current = e, ie = 2;
      }
    }
    function j0() {
      if (ie === 2) {
        ie = 0;
        var t = ol, e = Ra, l = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || l) {
          l = w.T, w.T = null;
          var a = O.p;
          O.p = 2;
          var o = Ht;
          Ht |= 4;
          try {
            f0(t, e.alternate, e);
          } finally {
            Ht = o, O.p = a, w.T = l;
          }
        }
        ie = 3;
      }
    }
    function Y0() {
      if (ie === 4 || ie === 3) {
        ie = 0, Sl();
        var t = ol, e = Ra, l = Rn, a = w0;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ie = 5 : (ie = 0, Ra = ol = null, L0(t, t.pendingLanes));
        var o = t.pendingLanes;
        if (o === 0 && (ul = null), li(l), e = e.stateNode, me && typeof me.onCommitFiberRoot == "function") try {
          me.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          e = w.T, o = O.p, O.p = 2, w.T = null;
          try {
            for (var r = t.onRecoverableError, g = 0; g < a.length; g++) {
              var b = a[g];
              r(b.value, {
                componentStack: b.stack
              });
            }
          } finally {
            w.T = e, O.p = o;
          }
        }
        (Rn & 3) !== 0 && Mo(), cn(t), o = t.pendingLanes, (l & 261930) !== 0 && (o & 42) !== 0 ? t === ps ? ji++ : (ji = 0, ps = t) : ji = 0, Yi(0);
      }
    }
    function L0(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, vi(e)));
    }
    function Mo() {
      return U0(), j0(), Y0(), V0();
    }
    function V0() {
      if (ie !== 5) return false;
      var t = ol, e = ms;
      ms = 0;
      var l = li(Rn), a = w.T, o = O.p;
      try {
        O.p = 32 > l ? 32 : l, w.T = null, l = ys, ys = null;
        var r = ol, g = Rn;
        if (ie = 0, Ra = ol = null, Rn = 0, (Ht & 6) !== 0) throw Error(c(331));
        var b = Ht;
        if (Ht |= 4, S0(r.current), v0(r, r.current, g, l), Ht = b, Yi(0, false), me && typeof me.onPostCommitFiberRoot == "function") try {
          me.onPostCommitFiberRoot(El, r);
        } catch {
        }
        return true;
      } finally {
        O.p = o, w.T = a, L0(t, e);
      }
    }
    function q0(t, e, l) {
      e = Ye(l, e), e = Jr(t.stateNode, e, 2), t = tl(t, e, 2), t !== null && (Nl(t, 2), cn(t));
    }
    function Ut(t, e, l) {
      if (t.tag === 3) q0(t, t, l);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          q0(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ul === null || !ul.has(a))) {
            t = Ye(l, t), l = Xh(2), a = tl(e, l, 2), a !== null && (Zh(l, a, e, t), Nl(a, 2), cn(a));
            break;
          }
        }
        e = e.return;
      }
    }
    function bs(t, e, l) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new l1();
        var o = /* @__PURE__ */ new Set();
        a.set(e, o);
      } else o = a.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(e, o));
      o.has(l) || (ds = true, o.add(l), t = c1.bind(null, t, e, l), e.then(t, t));
    }
    function c1(t, e, l) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, qt === t && (At & l) === l && (Jt === 4 || Jt === 3 && (At & 62914560) === At && 300 > ce() - bo ? (Ht & 2) === 0 && Ba(t, 0) : hs |= l, Ha === At && (Ha = 0)), cn(t);
    }
    function X0(t, e) {
      e === 0 && (e = Su()), t = Ol(t, e), t !== null && (Nl(t, e), cn(t));
    }
    function r1(t) {
      var e = t.memoizedState, l = 0;
      e !== null && (l = e.retryLane), X0(t, l);
    }
    function s1(t, e) {
      var l = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var a = t.stateNode, o = t.memoizedState;
          o !== null && (l = o.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        case 22:
          a = t.stateNode._retryCache;
          break;
        default:
          throw Error(c(314));
      }
      a !== null && a.delete(e), X0(t, l);
    }
    function f1(t, e) {
      return ke(t, e);
    }
    var Ao = null, ja = null, Ss = false, zo = false, _s = false, rl = 0;
    function cn(t) {
      t !== ja && t.next === null && (ja === null ? Ao = ja = t : ja = ja.next = t), zo = true, Ss || (Ss = true, h1());
    }
    function Yi(t, e) {
      if (!_s && zo) {
        _s = true;
        do
          for (var l = false, a = Ao; a !== null; ) {
            if (t !== 0) {
              var o = a.pendingLanes;
              if (o === 0) var r = 0;
              else {
                var g = a.suspendedLanes, b = a.pingedLanes;
                r = (1 << 31 - ye(42 | t) + 1) - 1, r &= o & ~(g & ~b), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
              }
              r !== 0 && (l = true, k0(a, r));
            } else r = At, r = ia(a, a === qt ? r : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (r & 3) === 0 || wl(a, r) || (l = true, k0(a, r));
            a = a.next;
          }
        while (l);
        _s = false;
      }
    }
    function d1() {
      Z0();
    }
    function Z0() {
      zo = Ss = false;
      var t = 0;
      rl !== 0 && E1() && (t = rl);
      for (var e = ce(), l = null, a = Ao; a !== null; ) {
        var o = a.next, r = G0(a, e);
        r === 0 ? (a.next = null, l === null ? Ao = o : l.next = o, o === null && (ja = l)) : (l = a, (t !== 0 || (r & 3) !== 0) && (zo = true)), a = o;
      }
      ie !== 0 && ie !== 5 || Yi(t), rl !== 0 && (rl = 0);
    }
    function G0(t, e) {
      for (var l = t.suspendedLanes, a = t.pingedLanes, o = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
        var g = 31 - ye(r), b = 1 << g, D = o[g];
        D === -1 ? ((b & l) === 0 || (b & a) !== 0) && (o[g] = Uc(b, e)) : D <= e && (t.expiredLanes |= b), r &= ~b;
      }
      if (e = qt, l = At, l = ia(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && hn(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((l & 3) === 0 || wl(t, l)) {
        if (e = l & -l, e === t.callbackPriority) return e;
        switch (a !== null && hn(a), li(l)) {
          case 2:
          case 8:
            l = qn;
            break;
          case 32:
            l = _l;
            break;
          case 268435456:
            l = ea;
            break;
          default:
            l = _l;
        }
        return a = Q0.bind(null, t), l = ke(l, a), t.callbackPriority = e, t.callbackNode = l, e;
      }
      return a !== null && a !== null && hn(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Q0(t, e) {
      if (ie !== 0 && ie !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var l = t.callbackNode;
      if (Mo() && t.callbackNode !== l) return null;
      var a = At;
      return a = ia(t, t === qt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (M0(t, a, e), G0(t, ce()), t.callbackNode != null && t.callbackNode === l ? Q0.bind(null, t) : null);
    }
    function k0(t, e) {
      if (Mo()) return null;
      M0(t, e, true);
    }
    function h1() {
      N1(function() {
        (Ht & 6) !== 0 ? ke(gn, d1) : Z0();
      });
    }
    function Es() {
      if (rl === 0) {
        var t = _a;
        t === 0 && (t = na, na <<= 1, (na & 261888) === 0 && (na = 256)), rl = t;
      }
      return rl;
    }
    function K0(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Bu("" + t);
    }
    function $0(t, e) {
      var l = e.ownerDocument.createElement("input");
      return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
    }
    function g1(t, e, l, a, o) {
      if (e === "submit" && l && l.stateNode === o) {
        var r = K0((o[he] || null).action), g = a.submitter;
        g && (e = (e = g[he] || null) ? K0(e.formAction) : g.getAttribute("formAction"), e !== null && (r = e, g = null));
        var b = new Lu("action", "action", null, a, o);
        t.push({
          event: b,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (rl !== 0) {
                    var D = g ? $0(o, g) : new FormData(o);
                    Zr(l, {
                      pending: true,
                      data: D,
                      method: o.method,
                      action: r
                    }, null, D);
                  }
                } else typeof r == "function" && (b.preventDefault(), D = g ? $0(o, g) : new FormData(o), Zr(l, {
                  pending: true,
                  data: D,
                  method: o.method,
                  action: r
                }, r, D));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    for (var ws = 0; ws < ur.length; ws++) {
      var Ns = ur[ws], m1 = Ns.toLowerCase(), y1 = Ns[0].toUpperCase() + Ns.slice(1);
      $e(m1, "on" + y1);
    }
    $e(Nd, "onAnimationEnd"), $e(Md, "onAnimationIteration"), $e(Ad, "onAnimationStart"), $e("dblclick", "onDoubleClick"), $e("focusin", "onFocus"), $e("focusout", "onBlur"), $e(Ov, "onTransitionRun"), $e(Hv, "onTransitionStart"), $e(Rv, "onTransitionCancel"), $e(zd, "onTransitionEnd"), kn("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), kn("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), kn("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), kn("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), pn("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Li = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), p1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Li));
    function J0(t, e) {
      e = (e & 4) !== 0;
      for (var l = 0; l < t.length; l++) {
        var a = t[l], o = a.event;
        a = a.listeners;
        t: {
          var r = void 0;
          if (e) for (var g = a.length - 1; 0 <= g; g--) {
            var b = a[g], D = b.instance, K = b.currentTarget;
            if (b = b.listener, D !== r && o.isPropagationStopped()) break t;
            r = b, o.currentTarget = K;
            try {
              r(o);
            } catch (nt) {
              Xu(nt);
            }
            o.currentTarget = null, r = D;
          }
          else for (g = 0; g < a.length; g++) {
            if (b = a[g], D = b.instance, K = b.currentTarget, b = b.listener, D !== r && o.isPropagationStopped()) break t;
            r = b, o.currentTarget = K;
            try {
              r(o);
            } catch (nt) {
              Xu(nt);
            }
            o.currentTarget = null, r = D;
          }
        }
      }
    }
    function Nt(t, e) {
      var l = e[ua];
      l === void 0 && (l = e[ua] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      l.has(a) || (F0(e, t, 2, false), l.add(a));
    }
    function Ms(t, e, l) {
      var a = 0;
      e && (a |= 4), F0(l, t, a, e);
    }
    var To = "_reactListening" + Math.random().toString(36).slice(2);
    function As(t) {
      if (!t[To]) {
        t[To] = true, Tu.forEach(function(l) {
          l !== "selectionchange" && (p1.has(l) || Ms(l, false, t), Ms(l, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[To] || (e[To] = true, Ms("selectionchange", false, e));
      }
    }
    function F0(t, e, l, a) {
      switch (Ng(e)) {
        case 2:
          var o = Q1;
          break;
        case 8:
          o = k1;
          break;
        default:
          o = Xs;
      }
      l = o.bind(null, e, l, t), o = void 0, !Kc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = true), a ? o !== void 0 ? t.addEventListener(e, l, {
        capture: true,
        passive: o
      }) : t.addEventListener(e, l, true) : o !== void 0 ? t.addEventListener(e, l, {
        passive: o
      }) : t.addEventListener(e, l, false);
    }
    function zs(t, e, l, a, o) {
      var r = a;
      if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ; ) {
        if (a === null) return;
        var g = a.tag;
        if (g === 3 || g === 4) {
          var b = a.stateNode.containerInfo;
          if (b === o) break;
          if (g === 4) for (g = a.return; g !== null; ) {
            var D = g.tag;
            if ((D === 3 || D === 4) && g.stateNode.containerInfo === o) return;
            g = g.return;
          }
          for (; b !== null; ) {
            if (g = Xn(b), g === null) return;
            if (D = g.tag, D === 5 || D === 6 || D === 26 || D === 27) {
              a = r = g;
              continue t;
            }
            b = b.parentNode;
          }
        }
        a = a.return;
      }
      ed(function() {
        var K = r, nt = Qc(l), at = [];
        t: {
          var J = Td.get(t);
          if (J !== void 0) {
            var W = Lu, dt = t;
            switch (t) {
              case "keypress":
                if (ju(l) === 0) break t;
              case "keydown":
              case "keyup":
                W = sv;
                break;
              case "focusin":
                dt = "focus", W = Wc;
                break;
              case "focusout":
                dt = "blur", W = Wc;
                break;
              case "beforeblur":
              case "afterblur":
                W = Wc;
                break;
              case "click":
                if (l.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                W = ad;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                W = Ip;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                W = hv;
                break;
              case Nd:
              case Md:
              case Ad:
                W = ev;
                break;
              case zd:
                W = mv;
                break;
              case "scroll":
              case "scrollend":
                W = Fp;
                break;
              case "wheel":
                W = pv;
                break;
              case "copy":
              case "cut":
              case "paste":
                W = lv;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                W = ud;
                break;
              case "toggle":
              case "beforetoggle":
                W = xv;
            }
            var pt = (e & 4) !== 0, Vt = !pt && (t === "scroll" || t === "scrollend"), q = pt ? J !== null ? J + "Capture" : null : J;
            pt = [];
            for (var B = K, k; B !== null; ) {
              var lt = B;
              if (k = lt.stateNode, lt = lt.tag, lt !== 5 && lt !== 26 && lt !== 27 || k === null || q === null || (lt = oi(B, q), lt != null && pt.push(Vi(B, lt, k))), Vt) break;
              B = B.return;
            }
            0 < pt.length && (J = new W(J, dt, null, l, nt), at.push({
              event: J,
              listeners: pt
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (J = t === "mouseover" || t === "pointerover", W = t === "mouseout" || t === "pointerout", J && l !== Gc && (dt = l.relatedTarget || l.fromElement) && (Xn(dt) || dt[yn])) break t;
            if ((W || J) && (J = nt.window === nt ? nt : (J = nt.ownerDocument) ? J.defaultView || J.parentWindow : window, W ? (dt = l.relatedTarget || l.toElement, W = K, dt = dt ? Xn(dt) : null, dt !== null && (Vt = f(dt), pt = dt.tag, dt !== Vt || pt !== 5 && pt !== 27 && pt !== 6) && (dt = null)) : (W = null, dt = K), W !== dt)) {
              if (pt = ad, lt = "onMouseLeave", q = "onMouseEnter", B = "mouse", (t === "pointerout" || t === "pointerover") && (pt = ud, lt = "onPointerLeave", q = "onPointerEnter", B = "pointer"), Vt = W == null ? J : Gn(W), k = dt == null ? J : Gn(dt), J = new pt(lt, B + "leave", W, l, nt), J.target = Vt, J.relatedTarget = k, lt = null, Xn(nt) === K && (pt = new pt(q, B + "enter", dt, l, nt), pt.target = k, pt.relatedTarget = Vt, lt = pt), Vt = lt, W && dt) e: {
                for (pt = v1, q = W, B = dt, k = 0, lt = q; lt; lt = pt(lt)) k++;
                lt = 0;
                for (var gt = B; gt; gt = pt(gt)) lt++;
                for (; 0 < k - lt; ) q = pt(q), k--;
                for (; 0 < lt - k; ) B = pt(B), lt--;
                for (; k--; ) {
                  if (q === B || B !== null && q === B.alternate) {
                    pt = q;
                    break e;
                  }
                  q = pt(q), B = pt(B);
                }
                pt = null;
              }
              else pt = null;
              W !== null && W0(at, J, W, pt, false), dt !== null && Vt !== null && W0(at, Vt, dt, pt, true);
            }
          }
          t: {
            if (J = K ? Gn(K) : window, W = J.nodeName && J.nodeName.toLowerCase(), W === "select" || W === "input" && J.type === "file") var Dt = gd;
            else if (dd(J)) if (md) Dt = Tv;
            else {
              Dt = Av;
              var ht = Mv;
            }
            else W = J.nodeName, !W || W.toLowerCase() !== "input" || J.type !== "checkbox" && J.type !== "radio" ? K && Zc(K.elementType) && (Dt = gd) : Dt = zv;
            if (Dt && (Dt = Dt(t, K))) {
              hd(at, Dt, l, nt);
              break t;
            }
            ht && ht(t, J, K), t === "focusout" && K && J.type === "number" && K.memoizedProps.value != null && ui(J, "number", J.value);
          }
          switch (ht = K ? Gn(K) : window, t) {
            case "focusin":
              (dd(ht) || ht.contentEditable === "true") && (ga = ht, lr = K, mi = null);
              break;
            case "focusout":
              mi = lr = ga = null;
              break;
            case "mousedown":
              ar = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ar = false, Ed(at, l, nt);
              break;
            case "selectionchange":
              if (Dv) break;
            case "keydown":
            case "keyup":
              Ed(at, l, nt);
          }
          var Et;
          if (Pc) t: {
            switch (t) {
              case "compositionstart":
                var zt = "onCompositionStart";
                break t;
              case "compositionend":
                zt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                zt = "onCompositionUpdate";
                break t;
            }
            zt = void 0;
          }
          else ha ? sd(t, l) && (zt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (zt = "onCompositionStart");
          zt && (od && l.locale !== "ko" && (ha || zt !== "onCompositionStart" ? zt === "onCompositionEnd" && ha && (Et = nd()) : (Kn = nt, $c = "value" in Kn ? Kn.value : Kn.textContent, ha = true)), ht = Co(K, zt), 0 < ht.length && (zt = new id(zt, t, null, l, nt), at.push({
            event: zt,
            listeners: ht
          }), Et ? zt.data = Et : (Et = fd(l), Et !== null && (zt.data = Et)))), (Et = Sv ? _v(t, l) : Ev(t, l)) && (zt = Co(K, "onBeforeInput"), 0 < zt.length && (ht = new id("onBeforeInput", "beforeinput", null, l, nt), at.push({
            event: ht,
            listeners: zt
          }), ht.data = Et)), g1(at, t, K, l, nt);
        }
        J0(at, e);
      });
    }
    function Vi(t, e, l) {
      return {
        instance: t,
        listener: e,
        currentTarget: l
      };
    }
    function Co(t, e) {
      for (var l = e + "Capture", a = []; t !== null; ) {
        var o = t, r = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || r === null || (o = oi(t, l), o != null && a.unshift(Vi(t, o, r)), o = oi(t, e), o != null && a.push(Vi(t, o, r))), t.tag === 3) return a;
        t = t.return;
      }
      return [];
    }
    function v1(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function W0(t, e, l, a, o) {
      for (var r = e._reactName, g = []; l !== null && l !== a; ) {
        var b = l, D = b.alternate, K = b.stateNode;
        if (b = b.tag, D !== null && D === a) break;
        b !== 5 && b !== 26 && b !== 27 || K === null || (D = K, o ? (K = oi(l, r), K != null && g.unshift(Vi(l, K, D))) : o || (K = oi(l, r), K != null && g.push(Vi(l, K, D)))), l = l.return;
      }
      g.length !== 0 && t.push({
        event: e,
        listeners: g
      });
    }
    var x1 = /\r\n?/g, b1 = /\u0000|\uFFFD/g;
    function I0(t) {
      return (typeof t == "string" ? t : "" + t).replace(x1, `
`).replace(b1, "");
    }
    function P0(t, e) {
      return e = I0(e), I0(t) === e;
    }
    function Lt(t, e, l, a, o, r) {
      switch (l) {
        case "children":
          typeof a == "string" ? e === "body" || e === "textarea" && a === "" || sa(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && sa(t, "" + a);
          break;
        case "className":
          ca(t, "class", a);
          break;
        case "tabIndex":
          ca(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ca(t, l, a);
          break;
        case "style":
          Pf(t, a, r);
          break;
        case "data":
          if (e !== "object") {
            ca(t, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (e !== "a" || l !== "href")) {
            t.removeAttribute(l);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(l);
            break;
          }
          a = Bu("" + a), t.setAttribute(l, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof r == "function" && (l === "formAction" ? (e !== "input" && Lt(t, e, "name", o.name, o, null), Lt(t, e, "formEncType", o.formEncType, o, null), Lt(t, e, "formMethod", o.formMethod, o, null), Lt(t, e, "formTarget", o.formTarget, o, null)) : (Lt(t, e, "encType", o.encType, o, null), Lt(t, e, "method", o.method, o, null), Lt(t, e, "target", o.target, o, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(l);
            break;
          }
          a = Bu("" + a), t.setAttribute(l, a);
          break;
        case "onClick":
          a != null && (t.onclick = xn);
          break;
        case "onScroll":
          a != null && Nt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && Nt("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
            if (l = a.__html, l != null) {
              if (o.children != null) throw Error(c(60));
              t.innerHTML = l;
            }
          }
          break;
        case "multiple":
          t.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          t.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          l = Bu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
          break;
        case "capture":
        case "download":
          a === true ? t.setAttribute(l, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
          break;
        case "popover":
          Nt("beforetoggle", t), Nt("toggle", t), oa(t, "popover", a);
          break;
        case "xlinkActuate":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Ke(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Ke(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Ke(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          oa(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = $p.get(l) || l, oa(t, l, a));
      }
    }
    function Ts(t, e, l, a, o, r) {
      switch (l) {
        case "style":
          Pf(t, a, r);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
            if (l = a.__html, l != null) {
              if (o.children != null) throw Error(c(60));
              t.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof a == "string" ? sa(t, a) : (typeof a == "number" || typeof a == "bigint") && sa(t, "" + a);
          break;
        case "onScroll":
          a != null && Nt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && Nt("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = xn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Cu.hasOwnProperty(l)) t: {
            if (l[0] === "o" && l[1] === "n" && (o = l.endsWith("Capture"), e = l.slice(2, o ? l.length - 7 : void 0), r = t[he] || null, r = r != null ? r[l] : null, typeof r == "function" && t.removeEventListener(e, r, o), typeof a == "function")) {
              typeof r != "function" && r !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, o);
              break t;
            }
            l in t ? t[l] = a : a === true ? t.setAttribute(l, "") : oa(t, l, a);
          }
      }
    }
    function de(t, e, l) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Nt("error", t), Nt("load", t);
          var a = false, o = false, r;
          for (r in l) if (l.hasOwnProperty(r)) {
            var g = l[r];
            if (g != null) switch (r) {
              case "src":
                a = true;
                break;
              case "srcSet":
                o = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                Lt(t, e, r, g, l, null);
            }
          }
          o && Lt(t, e, "srcSet", l.srcSet, l, null), a && Lt(t, e, "src", l.src, l, null);
          return;
        case "input":
          Nt("invalid", t);
          var b = r = g = o = null, D = null, K = null;
          for (a in l) if (l.hasOwnProperty(a)) {
            var nt = l[a];
            if (nt != null) switch (a) {
              case "name":
                o = nt;
                break;
              case "type":
                g = nt;
                break;
              case "checked":
                D = nt;
                break;
              case "defaultChecked":
                K = nt;
                break;
              case "value":
                r = nt;
                break;
              case "defaultValue":
                b = nt;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (nt != null) throw Error(c(137, e));
                break;
              default:
                Lt(t, e, a, nt, l, null);
            }
          }
          Ru(t, r, b, D, K, g, o, false);
          return;
        case "select":
          Nt("invalid", t), a = g = r = null;
          for (o in l) if (l.hasOwnProperty(o) && (b = l[o], b != null)) switch (o) {
            case "value":
              r = b;
              break;
            case "defaultValue":
              g = b;
              break;
            case "multiple":
              a = b;
            default:
              Lt(t, e, o, b, l, null);
          }
          e = r, l = g, t.multiple = !!a, e != null ? vn(t, !!a, e, false) : l != null && vn(t, !!a, l, true);
          return;
        case "textarea":
          Nt("invalid", t), r = o = a = null;
          for (g in l) if (l.hasOwnProperty(g) && (b = l[g], b != null)) switch (g) {
            case "value":
              a = b;
              break;
            case "defaultValue":
              o = b;
              break;
            case "children":
              r = b;
              break;
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(c(91));
              break;
            default:
              Lt(t, e, g, b, l, null);
          }
          Wf(t, a, o, r);
          return;
        case "option":
          for (D in l) l.hasOwnProperty(D) && (a = l[D], a != null) && (D === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Lt(t, e, D, a, l, null));
          return;
        case "dialog":
          Nt("beforetoggle", t), Nt("toggle", t), Nt("cancel", t), Nt("close", t);
          break;
        case "iframe":
        case "object":
          Nt("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Li.length; a++) Nt(Li[a], t);
          break;
        case "image":
          Nt("error", t), Nt("load", t);
          break;
        case "details":
          Nt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          Nt("error", t), Nt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (K in l) if (l.hasOwnProperty(K) && (a = l[K], a != null)) switch (K) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(c(137, e));
            default:
              Lt(t, e, K, a, l, null);
          }
          return;
        default:
          if (Zc(e)) {
            for (nt in l) l.hasOwnProperty(nt) && (a = l[nt], a !== void 0 && Ts(t, e, nt, a, l, void 0));
            return;
          }
      }
      for (b in l) l.hasOwnProperty(b) && (a = l[b], a != null && Lt(t, e, b, a, l, null));
    }
    function S1(t, e, l, a) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, r = null, g = null, b = null, D = null, K = null, nt = null;
          for (W in l) {
            var at = l[W];
            if (l.hasOwnProperty(W) && at != null) switch (W) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = at;
              default:
                a.hasOwnProperty(W) || Lt(t, e, W, null, a, at);
            }
          }
          for (var J in a) {
            var W = a[J];
            if (at = l[J], a.hasOwnProperty(J) && (W != null || at != null)) switch (J) {
              case "type":
                r = W;
                break;
              case "name":
                o = W;
                break;
              case "checked":
                K = W;
                break;
              case "defaultChecked":
                nt = W;
                break;
              case "value":
                g = W;
                break;
              case "defaultValue":
                b = W;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (W != null) throw Error(c(137, e));
                break;
              default:
                W !== at && Lt(t, e, J, W, a, at);
            }
          }
          zl(t, g, b, D, K, nt, r, o);
          return;
        case "select":
          W = g = b = J = null;
          for (r in l) if (D = l[r], l.hasOwnProperty(r) && D != null) switch (r) {
            case "value":
              break;
            case "multiple":
              W = D;
            default:
              a.hasOwnProperty(r) || Lt(t, e, r, null, a, D);
          }
          for (o in a) if (r = a[o], D = l[o], a.hasOwnProperty(o) && (r != null || D != null)) switch (o) {
            case "value":
              J = r;
              break;
            case "defaultValue":
              b = r;
              break;
            case "multiple":
              g = r;
            default:
              r !== D && Lt(t, e, o, r, a, D);
          }
          e = b, l = g, a = W, J != null ? vn(t, !!l, J, false) : !!a != !!l && (e != null ? vn(t, !!l, e, true) : vn(t, !!l, l ? [] : "", false));
          return;
        case "textarea":
          W = J = null;
          for (b in l) if (o = l[b], l.hasOwnProperty(b) && o != null && !a.hasOwnProperty(b)) switch (b) {
            case "value":
              break;
            case "children":
              break;
            default:
              Lt(t, e, b, null, a, o);
          }
          for (g in a) if (o = a[g], r = l[g], a.hasOwnProperty(g) && (o != null || r != null)) switch (g) {
            case "value":
              J = o;
              break;
            case "defaultValue":
              W = o;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (o != null) throw Error(c(91));
              break;
            default:
              o !== r && Lt(t, e, g, o, a, r);
          }
          Ff(t, J, W);
          return;
        case "option":
          for (var dt in l) J = l[dt], l.hasOwnProperty(dt) && J != null && !a.hasOwnProperty(dt) && (dt === "selected" ? t.selected = false : Lt(t, e, dt, null, a, J));
          for (D in a) J = a[D], W = l[D], a.hasOwnProperty(D) && J !== W && (J != null || W != null) && (D === "selected" ? t.selected = J && typeof J != "function" && typeof J != "symbol" : Lt(t, e, D, J, a, W));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var pt in l) J = l[pt], l.hasOwnProperty(pt) && J != null && !a.hasOwnProperty(pt) && Lt(t, e, pt, null, a, J);
          for (K in a) if (J = a[K], W = l[K], a.hasOwnProperty(K) && J !== W && (J != null || W != null)) switch (K) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (J != null) throw Error(c(137, e));
              break;
            default:
              Lt(t, e, K, J, a, W);
          }
          return;
        default:
          if (Zc(e)) {
            for (var Vt in l) J = l[Vt], l.hasOwnProperty(Vt) && J !== void 0 && !a.hasOwnProperty(Vt) && Ts(t, e, Vt, void 0, a, J);
            for (nt in a) J = a[nt], W = l[nt], !a.hasOwnProperty(nt) || J === W || J === void 0 && W === void 0 || Ts(t, e, nt, J, a, W);
            return;
          }
      }
      for (var q in l) J = l[q], l.hasOwnProperty(q) && J != null && !a.hasOwnProperty(q) && Lt(t, e, q, null, a, J);
      for (at in a) J = a[at], W = l[at], !a.hasOwnProperty(at) || J === W || J == null && W == null || Lt(t, e, at, J, a, W);
    }
    function tg(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function _1() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var o = l[a], r = o.transferSize, g = o.initiatorType, b = o.duration;
          if (r && b && tg(g)) {
            for (g = 0, b = o.responseEnd, a += 1; a < l.length; a++) {
              var D = l[a], K = D.startTime;
              if (K > b) break;
              var nt = D.transferSize, at = D.initiatorType;
              nt && tg(at) && (D = D.responseEnd, g += nt * (D < b ? 1 : (b - K) / (D - K)));
            }
            if (--a, e += 8 * (r + g) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var Cs = null, Ds = null;
    function Do(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function eg(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function ng(t, e) {
      if (t === 0) switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function Os(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var Hs = null;
    function E1() {
      var t = window.event;
      return t && t.type === "popstate" ? t === Hs ? false : (Hs = t, true) : (Hs = null, false);
    }
    var lg = typeof setTimeout == "function" ? setTimeout : void 0, w1 = typeof clearTimeout == "function" ? clearTimeout : void 0, ag = typeof Promise == "function" ? Promise : void 0, N1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ag < "u" ? function(t) {
      return ag.resolve(null).then(t).catch(M1);
    } : lg;
    function M1(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function sl(t) {
      return t === "head";
    }
    function ig(t, e) {
      var l = e, a = 0;
      do {
        var o = l.nextSibling;
        if (t.removeChild(l), o && o.nodeType === 8) if (l = o.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(o), qa(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
        else if (l === "html") qi(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, qi(l);
          for (var r = l.firstChild; r; ) {
            var g = r.nextSibling, b = r.nodeName;
            r[Ml] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && r.rel.toLowerCase() === "stylesheet" || l.removeChild(r), r = g;
          }
        } else l === "body" && qi(t.ownerDocument.body);
        l = o;
      } while (l);
      qa(e);
    }
    function ug(t, e) {
      var l = t;
      t = 0;
      do {
        var a = l.nextSibling;
        if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8) if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
        l = a;
      } while (l);
    }
    function Rs(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var l = e;
        switch (e = e.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Rs(l), ai(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(l);
      }
    }
    function A1(t, e, l, a) {
      for (; t.nodeType === 1; ) {
        var o = l;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (a) {
          if (!t[Ml]) switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (r = t.getAttribute("rel"), r === "stylesheet" && t.hasAttribute("data-precedence")) break;
              if (r !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title)) break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (r = t.getAttribute("src"), (r !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
              return t;
            default:
              return t;
          }
        } else if (e === "input" && t.type === "hidden") {
          var r = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === r) return t;
        } else return t;
        if (t = Ze(t.nextSibling), t === null) break;
      }
      return null;
    }
    function z1(t, e, l) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ze(t.nextSibling), t === null)) return null;
      return t;
    }
    function og(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ze(t.nextSibling), t === null)) return null;
      return t;
    }
    function Bs(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function Us(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function T1(t, e) {
      var l = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = e;
      else if (t.data !== "$?" || l.readyState !== "loading") e();
      else {
        var a = function() {
          e(), l.removeEventListener("DOMContentLoaded", a);
        };
        l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
      }
    }
    function Ze(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
          if (e === "/$" || e === "/&") return null;
        }
      }
      return t;
    }
    var js = null;
    function cg(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "/$" || l === "/&") {
            if (e === 0) return Ze(t.nextSibling);
            e--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function rg(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
            if (e === 0) return t;
            e--;
          } else l !== "/$" && l !== "/&" || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function sg(t, e, l) {
      switch (e = Do(l), t) {
        case "html":
          if (t = e.documentElement, !t) throw Error(c(452));
          return t;
        case "head":
          if (t = e.head, !t) throw Error(c(453));
          return t;
        case "body":
          if (t = e.body, !t) throw Error(c(454));
          return t;
        default:
          throw Error(c(451));
      }
    }
    function qi(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      ai(t);
    }
    var Ge = /* @__PURE__ */ new Map(), fg = /* @__PURE__ */ new Set();
    function Oo(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var Bn = O.d;
    O.d = {
      f: C1,
      r: D1,
      D: O1,
      C: H1,
      L: R1,
      m: B1,
      X: j1,
      S: U1,
      M: Y1
    };
    function C1() {
      var t = Bn.f(), e = Eo();
      return t || e;
    }
    function D1(t) {
      var e = Zn(t);
      e !== null && e.tag === 5 && e.type === "form" ? zh(e) : Bn.r(t);
    }
    var Ya = typeof document > "u" ? null : document;
    function dg(t, e, l) {
      var a = Ya;
      if (a && typeof e == "string" && e) {
        var o = xe(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof l == "string" && (o += '[crossorigin="' + l + '"]'), fg.has(o) || (fg.add(o), t = {
          rel: t,
          crossOrigin: l,
          href: e
        }, a.querySelector(o) === null && (e = a.createElement("link"), de(e, "link", t), It(e), a.head.appendChild(e)));
      }
    }
    function O1(t) {
      Bn.D(t), dg("dns-prefetch", t, null);
    }
    function H1(t, e) {
      Bn.C(t, e), dg("preconnect", t, e);
    }
    function R1(t, e, l) {
      Bn.L(t, e, l);
      var a = Ya;
      if (a && t && e) {
        var o = 'link[rel="preload"][as="' + xe(e) + '"]';
        e === "image" && l && l.imageSrcSet ? (o += '[imagesrcset="' + xe(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (o += '[imagesizes="' + xe(l.imageSizes) + '"]')) : o += '[href="' + xe(t) + '"]';
        var r = o;
        switch (e) {
          case "style":
            r = La(t);
            break;
          case "script":
            r = Va(t);
        }
        Ge.has(r) || (t = p({
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        }, l), Ge.set(r, t), a.querySelector(o) !== null || e === "style" && a.querySelector(Xi(r)) || e === "script" && a.querySelector(Zi(r)) || (e = a.createElement("link"), de(e, "link", t), It(e), a.head.appendChild(e)));
      }
    }
    function B1(t, e) {
      Bn.m(t, e);
      var l = Ya;
      if (l && t) {
        var a = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + xe(a) + '"][href="' + xe(t) + '"]', r = o;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            r = Va(t);
        }
        if (!Ge.has(r) && (t = p({
          rel: "modulepreload",
          href: t
        }, e), Ge.set(r, t), l.querySelector(o) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(Zi(r))) return;
          }
          a = l.createElement("link"), de(a, "link", t), It(a), l.head.appendChild(a);
        }
      }
    }
    function U1(t, e, l) {
      Bn.S(t, e, l);
      var a = Ya;
      if (a && t) {
        var o = Qn(a).hoistableStyles, r = La(t);
        e = e || "default";
        var g = o.get(r);
        if (!g) {
          var b = {
            loading: 0,
            preload: null
          };
          if (g = a.querySelector(Xi(r))) b.loading = 5;
          else {
            t = p({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, l), (l = Ge.get(r)) && Ys(t, l);
            var D = g = a.createElement("link");
            It(D), de(D, "link", t), D._p = new Promise(function(K, nt) {
              D.onload = K, D.onerror = nt;
            }), D.addEventListener("load", function() {
              b.loading |= 1;
            }), D.addEventListener("error", function() {
              b.loading |= 2;
            }), b.loading |= 4, Ho(g, e, a);
          }
          g = {
            type: "stylesheet",
            instance: g,
            count: 1,
            state: b
          }, o.set(r, g);
        }
      }
    }
    function j1(t, e) {
      Bn.X(t, e);
      var l = Ya;
      if (l && t) {
        var a = Qn(l).hoistableScripts, o = Va(t), r = a.get(o);
        r || (r = l.querySelector(Zi(o)), r || (t = p({
          src: t,
          async: true
        }, e), (e = Ge.get(o)) && Ls(t, e), r = l.createElement("script"), It(r), de(r, "link", t), l.head.appendChild(r)), r = {
          type: "script",
          instance: r,
          count: 1,
          state: null
        }, a.set(o, r));
      }
    }
    function Y1(t, e) {
      Bn.M(t, e);
      var l = Ya;
      if (l && t) {
        var a = Qn(l).hoistableScripts, o = Va(t), r = a.get(o);
        r || (r = l.querySelector(Zi(o)), r || (t = p({
          src: t,
          async: true,
          type: "module"
        }, e), (e = Ge.get(o)) && Ls(t, e), r = l.createElement("script"), It(r), de(r, "link", t), l.head.appendChild(r)), r = {
          type: "script",
          instance: r,
          count: 1,
          state: null
        }, a.set(o, r));
      }
    }
    function hg(t, e, l, a) {
      var o = (o = st.current) ? Oo(o) : null;
      if (!o) throw Error(c(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (e = La(l.href), l = Qn(o).hoistableStyles, a = l.get(e), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, l.set(e, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
            t = La(l.href);
            var r = Qn(o).hoistableStyles, g = r.get(t);
            if (g || (o = o.ownerDocument || o, g = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, r.set(t, g), (r = o.querySelector(Xi(t))) && !r._p && (g.instance = r, g.state.loading = 5), Ge.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ge.set(t, l), r || L1(o, t, l, g.state))), e && a === null) throw Error(c(528, ""));
            return g;
          }
          if (e && a !== null) throw Error(c(529, ""));
          return null;
        case "script":
          return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Va(l), l = Qn(o).hoistableScripts, a = l.get(e), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, l.set(e, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(c(444, t));
      }
    }
    function La(t) {
      return 'href="' + xe(t) + '"';
    }
    function Xi(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function gg(t) {
      return p({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function L1(t, e, l, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
        return a.loading |= 1;
      }), e.addEventListener("error", function() {
        return a.loading |= 2;
      }), de(e, "link", l), It(e), t.head.appendChild(e));
    }
    function Va(t) {
      return '[src="' + xe(t) + '"]';
    }
    function Zi(t) {
      return "script[async]" + t;
    }
    function mg(t, e, l) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + xe(l.href) + '"]');
          if (a) return e.instance = a, It(a), a;
          var o = p({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), It(a), de(a, "style", o), Ho(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          o = La(l.href);
          var r = t.querySelector(Xi(o));
          if (r) return e.state.loading |= 4, e.instance = r, It(r), r;
          a = gg(l), (o = Ge.get(o)) && Ys(a, o), r = (t.ownerDocument || t).createElement("link"), It(r);
          var g = r;
          return g._p = new Promise(function(b, D) {
            g.onload = b, g.onerror = D;
          }), de(r, "link", a), e.state.loading |= 4, Ho(r, l.precedence, t), e.instance = r;
        case "script":
          return r = Va(l.src), (o = t.querySelector(Zi(r))) ? (e.instance = o, It(o), o) : (a = l, (o = Ge.get(r)) && (a = p({}, l), Ls(a, o)), t = t.ownerDocument || t, o = t.createElement("script"), It(o), de(o, "link", a), t.head.appendChild(o), e.instance = o);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Ho(a, l.precedence, t));
      return e.instance;
    }
    function Ho(t, e, l) {
      for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = a.length ? a[a.length - 1] : null, r = o, g = 0; g < a.length; g++) {
        var b = a[g];
        if (b.dataset.precedence === e) r = b;
        else if (r !== o) break;
      }
      r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
    }
    function Ys(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function Ls(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var Ro = null;
    function yg(t, e, l) {
      if (Ro === null) {
        var a = /* @__PURE__ */ new Map(), o = Ro = /* @__PURE__ */ new Map();
        o.set(l, a);
      } else o = Ro, a = o.get(l), a || (a = /* @__PURE__ */ new Map(), o.set(l, a));
      if (a.has(t)) return a;
      for (a.set(t, null), l = l.getElementsByTagName(t), o = 0; o < l.length; o++) {
        var r = l[o];
        if (!(r[Ml] || r[ae] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
          var g = r.getAttribute(e) || "";
          g = t + g;
          var b = a.get(g);
          b ? b.push(r) : a.set(g, [
            r
          ]);
        }
      }
      return a;
    }
    function pg(t, e, l) {
      t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
    }
    function V1(t, e, l) {
      if (l === 1 || e.itemProp != null) return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
          return true;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
          return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : true;
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
      }
      return false;
    }
    function vg(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function q1(t, e, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var o = La(a.href), r = e.querySelector(Xi(o));
          if (r) {
            e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Bo.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = r, It(r);
            return;
          }
          r = e.ownerDocument || e, a = gg(a), (o = Ge.get(o)) && Ys(a, o), r = r.createElement("link"), It(r);
          var g = r;
          g._p = new Promise(function(b, D) {
            g.onload = b, g.onerror = D;
          }), de(r, "link", a), l.instance = r;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Bo.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
      }
    }
    var Vs = 0;
    function X1(t, e) {
      return t.stylesheets && t.count === 0 && jo(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (t.stylesheets && jo(t, t.stylesheets), t.unsuspend) {
            var r = t.unsuspend;
            t.unsuspend = null, r();
          }
        }, 6e4 + e);
        0 < t.imgBytes && Vs === 0 && (Vs = 62500 * _1());
        var o = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && jo(t, t.stylesheets), t.unsuspend)) {
            var r = t.unsuspend;
            t.unsuspend = null, r();
          }
        }, (t.imgBytes > Vs ? 50 : 800) + e);
        return t.unsuspend = l, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(o);
        };
      } : null;
    }
    function Bo() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) jo(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var Uo = null;
    function jo(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Uo = /* @__PURE__ */ new Map(), e.forEach(Z1, t), Uo = null, Bo.call(t));
    }
    function Z1(t, e) {
      if (!(e.state.loading & 4)) {
        var l = Uo.get(t);
        if (l) var a = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), Uo.set(t, l);
          for (var o = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < o.length; r++) {
            var g = o[r];
            (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (l.set(g.dataset.precedence, g), a = g);
          }
          a && l.set(null, a);
        }
        o = e.instance, g = o.getAttribute("data-precedence"), r = l.get(g) || a, r === a && l.set(null, o), l.set(g, o), this.count++, a = Bo.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), r ? r.parentNode.insertBefore(o, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= 4;
      }
    }
    var Gi = {
      $$typeof: S,
      Provider: null,
      Consumer: null,
      _currentValue: Y,
      _currentValue2: Y,
      _threadCount: 0
    };
    function G1(t, e, l, a, o, r, g, b, D) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ei(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ei(0), this.hiddenUpdates = ei(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = r, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function xg(t, e, l, a, o, r, g, b, D, K, nt, at) {
      return t = new G1(t, e, l, g, D, K, nt, at, b), e = 1, r === true && (e |= 24), r = Te(3, null, null, e), t.current = r, r.stateNode = t, e = xr(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: e
      }, Er(r), t;
    }
    function bg(t) {
      return t ? (t = pa, t) : pa;
    }
    function Sg(t, e, l, a, o, r) {
      o = bg(o), a.context === null ? a.context = o : a.pendingContext = o, a = Pn(e), a.payload = {
        element: l
      }, r = r === void 0 ? null : r, r !== null && (a.callback = r), l = tl(t, a, e), l !== null && (Ne(l, t, e), _i(l, t, e));
    }
    function _g(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var l = t.retryLane;
        t.retryLane = l !== 0 && l < e ? l : e;
      }
    }
    function qs(t, e) {
      _g(t, e), (t = t.alternate) && _g(t, e);
    }
    function Eg(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Ol(t, 67108864);
        e !== null && Ne(e, t, 67108864), qs(t, 67108864);
      }
    }
    function wg(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Re();
        e = ni(e);
        var l = Ol(t, e);
        l !== null && Ne(l, t, e), qs(t, e);
      }
    }
    var Yo = true;
    function Q1(t, e, l, a) {
      var o = w.T;
      w.T = null;
      var r = O.p;
      try {
        O.p = 2, Xs(t, e, l, a);
      } finally {
        O.p = r, w.T = o;
      }
    }
    function k1(t, e, l, a) {
      var o = w.T;
      w.T = null;
      var r = O.p;
      try {
        O.p = 8, Xs(t, e, l, a);
      } finally {
        O.p = r, w.T = o;
      }
    }
    function Xs(t, e, l, a) {
      if (Yo) {
        var o = Zs(a);
        if (o === null) zs(t, e, a, Lo, l), Mg(t, a);
        else if ($1(o, t, e, l, a)) a.stopPropagation();
        else if (Mg(t, a), e & 4 && -1 < K1.indexOf(t)) {
          for (; o !== null; ) {
            var r = Zn(o);
            if (r !== null) switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var g = mn(r.pendingLanes);
                  if (g !== 0) {
                    var b = r;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; g; ) {
                      var D = 1 << 31 - ye(g);
                      b.entanglements[1] |= D, g &= ~D;
                    }
                    cn(r), (Ht & 6) === 0 && (So = ce() + 500, Yi(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = Ol(r, 2), b !== null && Ne(b, r, 2), Eo(), qs(r, 2);
            }
            if (r = Zs(a), r === null && zs(t, e, a, Lo, l), r === o) break;
            o = r;
          }
          o !== null && a.stopPropagation();
        } else zs(t, e, a, null, l);
      }
    }
    function Zs(t) {
      return t = Qc(t), Gs(t);
    }
    var Lo = null;
    function Gs(t) {
      if (Lo = null, t = Xn(t), t !== null) {
        var e = f(t);
        if (e === null) t = null;
        else {
          var l = e.tag;
          if (l === 13) {
            if (t = d(e), t !== null) return t;
            t = null;
          } else if (l === 31) {
            if (t = m(e), t !== null) return t;
            t = null;
          } else if (l === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return Lo = t, null;
    }
    function Ng(t) {
      switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (ta()) {
            case gn:
              return 2;
            case qn:
              return 8;
            case _l:
            case Cc:
              return 32;
            case ea:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Qs = false, fl = null, dl = null, hl = null, Qi = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), gl = [], K1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Mg(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          fl = null;
          break;
        case "dragenter":
        case "dragleave":
          dl = null;
          break;
        case "mouseover":
        case "mouseout":
          hl = null;
          break;
        case "pointerover":
        case "pointerout":
          Qi.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ki.delete(e.pointerId);
      }
    }
    function Ki(t, e, l, a, o, r) {
      return t === null || t.nativeEvent !== r ? (t = {
        blockedOn: e,
        domEventName: l,
        eventSystemFlags: a,
        nativeEvent: r,
        targetContainers: [
          o
        ]
      }, e !== null && (e = Zn(e), e !== null && Eg(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function $1(t, e, l, a, o) {
      switch (e) {
        case "focusin":
          return fl = Ki(fl, t, e, l, a, o), true;
        case "dragenter":
          return dl = Ki(dl, t, e, l, a, o), true;
        case "mouseover":
          return hl = Ki(hl, t, e, l, a, o), true;
        case "pointerover":
          var r = o.pointerId;
          return Qi.set(r, Ki(Qi.get(r) || null, t, e, l, a, o)), true;
        case "gotpointercapture":
          return r = o.pointerId, ki.set(r, Ki(ki.get(r) || null, t, e, l, a, o)), true;
      }
      return false;
    }
    function Ag(t) {
      var e = Xn(t.target);
      if (e !== null) {
        var l = f(e);
        if (l !== null) {
          if (e = l.tag, e === 13) {
            if (e = d(l), e !== null) {
              t.blockedOn = e, Mu(t.priority, function() {
                wg(l);
              });
              return;
            }
          } else if (e === 31) {
            if (e = m(l), e !== null) {
              t.blockedOn = e, Mu(t.priority, function() {
                wg(l);
              });
              return;
            }
          } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function Vo(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var l = Zs(t.nativeEvent);
        if (l === null) {
          l = t.nativeEvent;
          var a = new l.constructor(l.type, l);
          Gc = a, l.target.dispatchEvent(a), Gc = null;
        } else return e = Zn(l), e !== null && Eg(e), t.blockedOn = l, false;
        e.shift();
      }
      return true;
    }
    function zg(t, e, l) {
      Vo(t) && l.delete(e);
    }
    function J1() {
      Qs = false, fl !== null && Vo(fl) && (fl = null), dl !== null && Vo(dl) && (dl = null), hl !== null && Vo(hl) && (hl = null), Qi.forEach(zg), ki.forEach(zg);
    }
    function qo(t, e) {
      t.blockedOn === e && (t.blockedOn = null, Qs || (Qs = true, n.unstable_scheduleCallback(n.unstable_NormalPriority, J1)));
    }
    var Xo = null;
    function Tg(t) {
      Xo !== t && (Xo = t, n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
        Xo === t && (Xo = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], o = t[e + 2];
          if (typeof a != "function") {
            if (Gs(a || l) === null) continue;
            break;
          }
          var r = Zn(l);
          r !== null && (t.splice(e, 3), e -= 3, Zr(r, {
            pending: true,
            data: o,
            method: l.method,
            action: a
          }, a, o));
        }
      }));
    }
    function qa(t) {
      function e(D) {
        return qo(D, t);
      }
      fl !== null && qo(fl, t), dl !== null && qo(dl, t), hl !== null && qo(hl, t), Qi.forEach(e), ki.forEach(e);
      for (var l = 0; l < gl.length; l++) {
        var a = gl[l];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < gl.length && (l = gl[0], l.blockedOn === null); ) Ag(l), l.blockedOn === null && gl.shift();
      if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var o = l[a], r = l[a + 1], g = o[he] || null;
        if (typeof r == "function") g || Tg(l);
        else if (g) {
          var b = null;
          if (r && r.hasAttribute("formAction")) {
            if (o = r, g = r[he] || null) b = g.formAction;
            else if (Gs(o) !== null) continue;
          } else b = g.action;
          typeof b == "function" ? l[a + 1] = b : (l.splice(a, 3), a -= 3), Tg(l);
        }
      }
    }
    function Cg() {
      function t(r) {
        r.canIntercept && r.info === "react-transition" && r.intercept({
          handler: function() {
            return new Promise(function(g) {
              return o = g;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        o !== null && (o(), o = null), a || setTimeout(l, 20);
      }
      function l() {
        if (!a && !navigation.transition) {
          var r = navigation.currentEntry;
          r && r.url != null && navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var a = false, o = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
          a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), o !== null && (o(), o = null);
        };
      }
    }
    function ks(t) {
      this._internalRoot = t;
    }
    Zo.prototype.render = ks.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(c(409));
      var l = e.current, a = Re();
      Sg(l, a, t, e, null, null);
    }, Zo.prototype.unmount = ks.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Sg(t.current, 2, null, t, null, null), Eo(), e[yn] = null;
      }
    };
    function Zo(t) {
      this._internalRoot = t;
    }
    Zo.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = Nu();
        t = {
          blockedOn: null,
          target: t,
          priority: e
        };
        for (var l = 0; l < gl.length && e !== 0 && e < gl[l].priority; l++) ;
        gl.splice(l, 0, t), l === 0 && Ag(t);
      }
    };
    var Dg = i.version;
    if (Dg !== "19.2.3") throw Error(c(527, Dg, "19.2.3"));
    O.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
      return t = h(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var F1 = {
      bundleType: 0,
      version: "19.2.3",
      rendererPackageName: "react-dom",
      currentDispatcherRef: w,
      reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Go.isDisabled && Go.supportsFiber) try {
        El = Go.inject(F1), me = Go;
      } catch {
      }
    }
    return Ji.createRoot = function(t, e) {
      if (!s(t)) throw Error(c(299));
      var l = false, a = "", o = Yh, r = Lh, g = Vh;
      return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (g = e.onRecoverableError)), e = xg(t, 1, false, null, null, l, a, null, o, r, g, Cg), t[yn] = e.current, As(t), new ks(e);
    }, Ji.hydrateRoot = function(t, e, l) {
      if (!s(t)) throw Error(c(299));
      var a = false, o = "", r = Yh, g = Lh, b = Vh, D = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (o = l.identifierPrefix), l.onUncaughtError !== void 0 && (r = l.onUncaughtError), l.onCaughtError !== void 0 && (g = l.onCaughtError), l.onRecoverableError !== void 0 && (b = l.onRecoverableError), l.formState !== void 0 && (D = l.formState)), e = xg(t, 1, true, e, l ?? null, a, o, D, r, g, b, Cg), e.context = bg(null), l = e.current, a = Re(), a = ni(a), o = Pn(a), o.callback = null, tl(l, o, a), l = a, e.current.lanes = l, Nl(e, l), cn(e), t[yn] = e.current, As(t), new Zo(e);
    }, Ji.version = "19.2.3", Ji;
  }
  var qg;
  function ux() {
    if (qg) return Js.exports;
    qg = 1;
    function n() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
    }
    return n(), Js.exports = ix(), Js.exports;
  }
  var ox = ux();
  const cx = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rx = (n) => n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, u, c) => c ? c.toUpperCase() : u.toLowerCase()), Xg = (n) => {
    const i = rx(n);
    return i.charAt(0).toUpperCase() + i.slice(1);
  }, ay = (...n) => n.filter((i, u, c) => !!i && i.trim() !== "" && c.indexOf(i) === u).join(" ").trim(), sx = (n) => {
    for (const i in n) if (i.startsWith("aria-") || i === "role" || i === "title") return true;
  };
  var fx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const dx = I.forwardRef(({ color: n = "currentColor", size: i = 24, strokeWidth: u = 2, absoluteStrokeWidth: c, className: s = "", children: f, iconNode: d, ...m }, y) => I.createElement("svg", {
    ref: y,
    ...fx,
    width: i,
    height: i,
    stroke: n,
    strokeWidth: c ? Number(u) * 24 / Number(i) : u,
    className: ay("lucide", s),
    ...!f && !sx(m) && {
      "aria-hidden": "true"
    },
    ...m
  }, [
    ...d.map(([h, v]) => I.createElement(h, v)),
    ...Array.isArray(f) ? f : [
      f
    ]
  ]));
  const Pl = (n, i) => {
    const u = I.forwardRef(({ className: c, ...s }, f) => I.createElement(dx, {
      ref: f,
      iconNode: i,
      className: ay(`lucide-${cx(Xg(n))}`, `lucide-${n}`, c),
      ...s
    }));
    return u.displayName = Xg(n), u;
  };
  const hx = [
    [
      "path",
      {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja"
      }
    ],
    [
      "path",
      {
        d: "M9 13a4.5 4.5 0 0 0 3-4",
        key: "10igwf"
      }
    ],
    [
      "path",
      {
        d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
        key: "105sqy"
      }
    ],
    [
      "path",
      {
        d: "M3.477 10.896a4 4 0 0 1 .585-.396",
        key: "ql3yin"
      }
    ],
    [
      "path",
      {
        d: "M6 18a4 4 0 0 1-1.967-.516",
        key: "2e4loj"
      }
    ],
    [
      "path",
      {
        d: "M12 13h4",
        key: "1ku699"
      }
    ],
    [
      "path",
      {
        d: "M12 18h6a2 2 0 0 1 2 2v1",
        key: "105ag5"
      }
    ],
    [
      "path",
      {
        d: "M12 8h8",
        key: "1lhi5i"
      }
    ],
    [
      "path",
      {
        d: "M16 8V5a2 2 0 0 1 2-2",
        key: "u6izg6"
      }
    ],
    [
      "circle",
      {
        cx: "16",
        cy: "13",
        r: ".5",
        key: "ry7gng"
      }
    ],
    [
      "circle",
      {
        cx: "18",
        cy: "3",
        r: ".5",
        key: "1aiba7"
      }
    ],
    [
      "circle",
      {
        cx: "20",
        cy: "21",
        r: ".5",
        key: "yhc1fs"
      }
    ],
    [
      "circle",
      {
        cx: "20",
        cy: "8",
        r: ".5",
        key: "1e43v0"
      }
    ]
  ], gx = Pl("brain-circuit", hx);
  const mx = [
    [
      "path",
      {
        d: "m16 18 6-6-6-6",
        key: "eg8j8"
      }
    ],
    [
      "path",
      {
        d: "m8 6-6 6 6 6",
        key: "ppft3o"
      }
    ]
  ], Zg = Pl("code", mx);
  const yx = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    [
      "path",
      {
        d: "M14 2v5a1 1 0 0 0 1 1h5",
        key: "wfsgrz"
      }
    ],
    [
      "path",
      {
        d: "M10 9H8",
        key: "b1mrlr"
      }
    ],
    [
      "path",
      {
        d: "M16 13H8",
        key: "t4e002"
      }
    ],
    [
      "path",
      {
        d: "M16 17H8",
        key: "z1uh3a"
      }
    ]
  ], Ps = Pl("file-text", yx);
  const px = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    [
      "path",
      {
        d: "M14 2v5a1 1 0 0 0 1 1h5",
        key: "wfsgrz"
      }
    ],
    [
      "path",
      {
        d: "M12 12v6",
        key: "3ahymv"
      }
    ],
    [
      "path",
      {
        d: "m15 15-3-3-3 3",
        key: "15xj92"
      }
    ]
  ], Gg = Pl("file-up", px);
  const vx = [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn"
      }
    ],
    [
      "circle",
      {
        cx: "9",
        cy: "9",
        r: "2",
        key: "af1f0g"
      }
    ],
    [
      "path",
      {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
        key: "1xmnt7"
      }
    ]
  ], Qg = Pl("image", vx);
  const xx = [
    [
      "path",
      {
        d: "M14 4.1 12 6",
        key: "ita8i4"
      }
    ],
    [
      "path",
      {
        d: "m5.1 8-2.9-.8",
        key: "1go3kf"
      }
    ],
    [
      "path",
      {
        d: "m6 12-1.9 2",
        key: "mnht97"
      }
    ],
    [
      "path",
      {
        d: "M7.2 2.2 8 5.1",
        key: "1cfko1"
      }
    ],
    [
      "path",
      {
        d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
        key: "s0h3yz"
      }
    ]
  ], kg = Pl("mouse-pointer-click", xx);
  const bx = [
    [
      "path",
      {
        d: "M9 18V5l12-2v13",
        key: "1jmyc2"
      }
    ],
    [
      "circle",
      {
        cx: "6",
        cy: "18",
        r: "3",
        key: "fqmcym"
      }
    ],
    [
      "circle",
      {
        cx: "18",
        cy: "16",
        r: "3",
        key: "1hluhg"
      }
    ]
  ], Kg = Pl("music", bx);
  let Xt;
  function ti(n, i) {
    return n = n >>> 0, _x(n, i);
  }
  let Ii = null;
  function eu() {
    return (Ii === null || Ii.byteLength === 0) && (Ii = new Uint8Array(Xt.memory.buffer)), Ii;
  }
  function iy(n, i) {
    const u = i(n.length * 1, 1) >>> 0;
    return eu().set(n, u / 1), xl = n.length, u;
  }
  function Cf(n, i, u) {
    if (u === void 0) {
      const m = nu.encode(n), y = i(m.length, 1) >>> 0;
      return eu().subarray(y, y + m.length).set(m), xl = m.length, y;
    }
    let c = n.length, s = i(c, 1) >>> 0;
    const f = eu();
    let d = 0;
    for (; d < c; d++) {
      const m = n.charCodeAt(d);
      if (m > 127) break;
      f[s + d] = m;
    }
    if (d !== c) {
      d !== 0 && (n = n.slice(d)), s = u(s, c, c = d + n.length * 3, 1) >>> 0;
      const m = eu().subarray(s + d, s + c), y = nu.encodeInto(n, m);
      d += y.written, s = u(s, c, d, 1) >>> 0;
    }
    return xl = d, s;
  }
  let tc = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  tc.decode();
  const Sx = 2146435072;
  let tf = 0;
  function _x(n, i) {
    return tf += i, tf >= Sx && (tc = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), tc.decode(), tf = i), tc.decode(eu().subarray(n, n + i));
  }
  const nu = new TextEncoder();
  "encodeInto" in nu || (nu.encodeInto = function(n, i) {
    const u = nu.encode(n);
    return i.set(u), {
      read: n.length,
      written: u.length
    };
  });
  let xl = 0;
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => Xt.__wbg_togen_free(n >>> 0, 1));
  function $g(n) {
    let i, u;
    try {
      const c = Cf(n, Xt.__wbindgen_malloc, Xt.__wbindgen_realloc), s = xl, f = Xt.togen_from_action(c, s);
      return i = f[0], u = f[1], ti(f[0], f[1]);
    } finally {
      Xt.__wbindgen_free(i, u, 1);
    }
  }
  function Ex(n) {
    let i, u;
    try {
      const c = iy(n, Xt.__wbindgen_malloc), s = xl, f = Xt.togen_from_bytes_audio(c, s);
      return i = f[0], u = f[1], ti(f[0], f[1]);
    } finally {
      Xt.__wbindgen_free(i, u, 1);
    }
  }
  function wx(n) {
    let i, u;
    try {
      const c = iy(n, Xt.__wbindgen_malloc), s = xl, f = Xt.togen_from_bytes_image(c, s);
      return i = f[0], u = f[1], ti(f[0], f[1]);
    } finally {
      Xt.__wbindgen_free(i, u, 1);
    }
  }
  function ef(n) {
    let i, u;
    try {
      const c = Cf(n, Xt.__wbindgen_malloc, Xt.__wbindgen_realloc), s = xl, f = Xt.togen_from_code(c, s);
      return i = f[0], u = f[1], ti(f[0], f[1]);
    } finally {
      Xt.__wbindgen_free(i, u, 1);
    }
  }
  function Jg(n) {
    let i, u;
    try {
      const c = Cf(n, Xt.__wbindgen_malloc, Xt.__wbindgen_realloc), s = xl, f = Xt.togen_from_string(c, s);
      return i = f[0], u = f[1], ti(f[0], f[1]);
    } finally {
      Xt.__wbindgen_free(i, u, 1);
    }
  }
  const Nx = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function Mx(n, i) {
    if (typeof Response == "function" && n instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(n, i);
      } catch (c) {
        if (n.ok && Nx.has(n.type) && n.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", c);
        else throw c;
      }
      const u = await n.arrayBuffer();
      return await WebAssembly.instantiate(u, i);
    } else {
      const u = await WebAssembly.instantiate(n, i);
      return u instanceof WebAssembly.Instance ? {
        instance: u,
        module: n
      } : u;
    }
  }
  function Ax() {
    const n = {};
    return n.wbg = {}, n.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(i, u) {
      throw new Error(ti(i, u));
    }, n.wbg.__wbindgen_init_externref_table = function() {
      const i = Xt.__wbindgen_externrefs, u = i.grow(4);
      i.set(0, void 0), i.set(u + 0, void 0), i.set(u + 1, null), i.set(u + 2, true), i.set(u + 3, false);
    }, n;
  }
  function zx(n, i) {
    return Xt = n.exports, Df.__wbindgen_wasm_module = i, Ii = null, Xt.__wbindgen_start(), Xt;
  }
  async function Df(n) {
    if (Xt !== void 0) return Xt;
    typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("/assets/genesis_togenizer_bg-u0wiCBdn.wasm", import.meta.url));
    const i = Ax();
    (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
    const { instance: u, module: c } = await Mx(await n, i);
    return zx(u, c);
  }
  function le(n) {
    if (typeof n == "string" || typeof n == "number") return "" + n;
    let i = "";
    if (Array.isArray(n)) for (let u = 0, c; u < n.length; u++) (c = le(n[u])) !== "" && (i += (i && " ") + c);
    else for (let u in n) n[u] && (i += (i && " ") + u);
    return i;
  }
  var Tx = {
    value: () => {
    }
  };
  function vc() {
    for (var n = 0, i = arguments.length, u = {}, c; n < i; ++n) {
      if (!(c = arguments[n] + "") || c in u || /[\s.]/.test(c)) throw new Error("illegal type: " + c);
      u[c] = [];
    }
    return new ec(u);
  }
  function ec(n) {
    this._ = n;
  }
  function Cx(n, i) {
    return n.trim().split(/^|\s+/).map(function(u) {
      var c = "", s = u.indexOf(".");
      if (s >= 0 && (c = u.slice(s + 1), u = u.slice(0, s)), u && !i.hasOwnProperty(u)) throw new Error("unknown type: " + u);
      return {
        type: u,
        name: c
      };
    });
  }
  ec.prototype = vc.prototype = {
    constructor: ec,
    on: function(n, i) {
      var u = this._, c = Cx(n + "", u), s, f = -1, d = c.length;
      if (arguments.length < 2) {
        for (; ++f < d; ) if ((s = (n = c[f]).type) && (s = Dx(u[s], n.name))) return s;
        return;
      }
      if (i != null && typeof i != "function") throw new Error("invalid callback: " + i);
      for (; ++f < d; ) if (s = (n = c[f]).type) u[s] = Fg(u[s], n.name, i);
      else if (i == null) for (s in u) u[s] = Fg(u[s], n.name, null);
      return this;
    },
    copy: function() {
      var n = {}, i = this._;
      for (var u in i) n[u] = i[u].slice();
      return new ec(n);
    },
    call: function(n, i) {
      if ((s = arguments.length - 2) > 0) for (var u = new Array(s), c = 0, s, f; c < s; ++c) u[c] = arguments[c + 2];
      if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
      for (f = this._[n], c = 0, s = f.length; c < s; ++c) f[c].value.apply(i, u);
    },
    apply: function(n, i, u) {
      if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
      for (var c = this._[n], s = 0, f = c.length; s < f; ++s) c[s].value.apply(i, u);
    }
  };
  function Dx(n, i) {
    for (var u = 0, c = n.length, s; u < c; ++u) if ((s = n[u]).name === i) return s.value;
  }
  function Fg(n, i, u) {
    for (var c = 0, s = n.length; c < s; ++c) if (n[c].name === i) {
      n[c] = Tx, n = n.slice(0, c).concat(n.slice(c + 1));
      break;
    }
    return u != null && n.push({
      name: i,
      value: u
    }), n;
  }
  var yf = "http://www.w3.org/1999/xhtml";
  const Wg = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: yf,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function xc(n) {
    var i = n += "", u = i.indexOf(":");
    return u >= 0 && (i = n.slice(0, u)) !== "xmlns" && (n = n.slice(u + 1)), Wg.hasOwnProperty(i) ? {
      space: Wg[i],
      local: n
    } : n;
  }
  function Ox(n) {
    return function() {
      var i = this.ownerDocument, u = this.namespaceURI;
      return u === yf && i.documentElement.namespaceURI === yf ? i.createElement(n) : i.createElementNS(u, n);
    };
  }
  function Hx(n) {
    return function() {
      return this.ownerDocument.createElementNS(n.space, n.local);
    };
  }
  function uy(n) {
    var i = xc(n);
    return (i.local ? Hx : Ox)(i);
  }
  function Rx() {
  }
  function Of(n) {
    return n == null ? Rx : function() {
      return this.querySelector(n);
    };
  }
  function Bx(n) {
    typeof n != "function" && (n = Of(n));
    for (var i = this._groups, u = i.length, c = new Array(u), s = 0; s < u; ++s) for (var f = i[s], d = f.length, m = c[s] = new Array(d), y, h, v = 0; v < d; ++v) (y = f[v]) && (h = n.call(y, y.__data__, v, f)) && ("__data__" in y && (h.__data__ = y.__data__), m[v] = h);
    return new Ue(c, this._parents);
  }
  function Ux(n) {
    return n == null ? [] : Array.isArray(n) ? n : Array.from(n);
  }
  function jx() {
    return [];
  }
  function oy(n) {
    return n == null ? jx : function() {
      return this.querySelectorAll(n);
    };
  }
  function Yx(n) {
    return function() {
      return Ux(n.apply(this, arguments));
    };
  }
  function Lx(n) {
    typeof n == "function" ? n = Yx(n) : n = oy(n);
    for (var i = this._groups, u = i.length, c = [], s = [], f = 0; f < u; ++f) for (var d = i[f], m = d.length, y, h = 0; h < m; ++h) (y = d[h]) && (c.push(n.call(y, y.__data__, h, d)), s.push(y));
    return new Ue(c, s);
  }
  function cy(n) {
    return function() {
      return this.matches(n);
    };
  }
  function ry(n) {
    return function(i) {
      return i.matches(n);
    };
  }
  var Vx = Array.prototype.find;
  function qx(n) {
    return function() {
      return Vx.call(this.children, n);
    };
  }
  function Xx() {
    return this.firstElementChild;
  }
  function Zx(n) {
    return this.select(n == null ? Xx : qx(typeof n == "function" ? n : ry(n)));
  }
  var Gx = Array.prototype.filter;
  function Qx() {
    return Array.from(this.children);
  }
  function kx(n) {
    return function() {
      return Gx.call(this.children, n);
    };
  }
  function Kx(n) {
    return this.selectAll(n == null ? Qx : kx(typeof n == "function" ? n : ry(n)));
  }
  function $x(n) {
    typeof n != "function" && (n = cy(n));
    for (var i = this._groups, u = i.length, c = new Array(u), s = 0; s < u; ++s) for (var f = i[s], d = f.length, m = c[s] = [], y, h = 0; h < d; ++h) (y = f[h]) && n.call(y, y.__data__, h, f) && m.push(y);
    return new Ue(c, this._parents);
  }
  function sy(n) {
    return new Array(n.length);
  }
  function Jx() {
    return new Ue(this._enter || this._groups.map(sy), this._parents);
  }
  function uc(n, i) {
    this.ownerDocument = n.ownerDocument, this.namespaceURI = n.namespaceURI, this._next = null, this._parent = n, this.__data__ = i;
  }
  uc.prototype = {
    constructor: uc,
    appendChild: function(n) {
      return this._parent.insertBefore(n, this._next);
    },
    insertBefore: function(n, i) {
      return this._parent.insertBefore(n, i);
    },
    querySelector: function(n) {
      return this._parent.querySelector(n);
    },
    querySelectorAll: function(n) {
      return this._parent.querySelectorAll(n);
    }
  };
  function Fx(n) {
    return function() {
      return n;
    };
  }
  function Wx(n, i, u, c, s, f) {
    for (var d = 0, m, y = i.length, h = f.length; d < h; ++d) (m = i[d]) ? (m.__data__ = f[d], c[d] = m) : u[d] = new uc(n, f[d]);
    for (; d < y; ++d) (m = i[d]) && (s[d] = m);
  }
  function Ix(n, i, u, c, s, f, d) {
    var m, y, h = /* @__PURE__ */ new Map(), v = i.length, p = f.length, x = new Array(v), E;
    for (m = 0; m < v; ++m) (y = i[m]) && (x[m] = E = d.call(y, y.__data__, m, i) + "", h.has(E) ? s[m] = y : h.set(E, y));
    for (m = 0; m < p; ++m) E = d.call(n, f[m], m, f) + "", (y = h.get(E)) ? (c[m] = y, y.__data__ = f[m], h.delete(E)) : u[m] = new uc(n, f[m]);
    for (m = 0; m < v; ++m) (y = i[m]) && h.get(x[m]) === y && (s[m] = y);
  }
  function Px(n) {
    return n.__data__;
  }
  function tb(n, i) {
    if (!arguments.length) return Array.from(this, Px);
    var u = i ? Ix : Wx, c = this._parents, s = this._groups;
    typeof n != "function" && (n = Fx(n));
    for (var f = s.length, d = new Array(f), m = new Array(f), y = new Array(f), h = 0; h < f; ++h) {
      var v = c[h], p = s[h], x = p.length, E = eb(n.call(v, v && v.__data__, h, c)), _ = E.length, z = m[h] = new Array(_), C = d[h] = new Array(_), M = y[h] = new Array(x);
      u(v, p, z, C, M, E, i);
      for (var V = 0, S = 0, A, X; V < _; ++V) if (A = z[V]) {
        for (V >= S && (S = V + 1); !(X = C[S]) && ++S < _; ) ;
        A._next = X || null;
      }
    }
    return d = new Ue(d, c), d._enter = m, d._exit = y, d;
  }
  function eb(n) {
    return typeof n == "object" && "length" in n ? n : Array.from(n);
  }
  function nb() {
    return new Ue(this._exit || this._groups.map(sy), this._parents);
  }
  function lb(n, i, u) {
    var c = this.enter(), s = this, f = this.exit();
    return typeof n == "function" ? (c = n(c), c && (c = c.selection())) : c = c.append(n + ""), i != null && (s = i(s), s && (s = s.selection())), u == null ? f.remove() : u(f), c && s ? c.merge(s).order() : s;
  }
  function ab(n) {
    for (var i = n.selection ? n.selection() : n, u = this._groups, c = i._groups, s = u.length, f = c.length, d = Math.min(s, f), m = new Array(s), y = 0; y < d; ++y) for (var h = u[y], v = c[y], p = h.length, x = m[y] = new Array(p), E, _ = 0; _ < p; ++_) (E = h[_] || v[_]) && (x[_] = E);
    for (; y < s; ++y) m[y] = u[y];
    return new Ue(m, this._parents);
  }
  function ib() {
    for (var n = this._groups, i = -1, u = n.length; ++i < u; ) for (var c = n[i], s = c.length - 1, f = c[s], d; --s >= 0; ) (d = c[s]) && (f && d.compareDocumentPosition(f) ^ 4 && f.parentNode.insertBefore(d, f), f = d);
    return this;
  }
  function ub(n) {
    n || (n = ob);
    function i(p, x) {
      return p && x ? n(p.__data__, x.__data__) : !p - !x;
    }
    for (var u = this._groups, c = u.length, s = new Array(c), f = 0; f < c; ++f) {
      for (var d = u[f], m = d.length, y = s[f] = new Array(m), h, v = 0; v < m; ++v) (h = d[v]) && (y[v] = h);
      y.sort(i);
    }
    return new Ue(s, this._parents).order();
  }
  function ob(n, i) {
    return n < i ? -1 : n > i ? 1 : n >= i ? 0 : NaN;
  }
  function cb() {
    var n = arguments[0];
    return arguments[0] = this, n.apply(null, arguments), this;
  }
  function rb() {
    return Array.from(this);
  }
  function sb() {
    for (var n = this._groups, i = 0, u = n.length; i < u; ++i) for (var c = n[i], s = 0, f = c.length; s < f; ++s) {
      var d = c[s];
      if (d) return d;
    }
    return null;
  }
  function fb() {
    let n = 0;
    for (const i of this) ++n;
    return n;
  }
  function db() {
    return !this.node();
  }
  function hb(n) {
    for (var i = this._groups, u = 0, c = i.length; u < c; ++u) for (var s = i[u], f = 0, d = s.length, m; f < d; ++f) (m = s[f]) && n.call(m, m.__data__, f, s);
    return this;
  }
  function gb(n) {
    return function() {
      this.removeAttribute(n);
    };
  }
  function mb(n) {
    return function() {
      this.removeAttributeNS(n.space, n.local);
    };
  }
  function yb(n, i) {
    return function() {
      this.setAttribute(n, i);
    };
  }
  function pb(n, i) {
    return function() {
      this.setAttributeNS(n.space, n.local, i);
    };
  }
  function vb(n, i) {
    return function() {
      var u = i.apply(this, arguments);
      u == null ? this.removeAttribute(n) : this.setAttribute(n, u);
    };
  }
  function xb(n, i) {
    return function() {
      var u = i.apply(this, arguments);
      u == null ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, u);
    };
  }
  function bb(n, i) {
    var u = xc(n);
    if (arguments.length < 2) {
      var c = this.node();
      return u.local ? c.getAttributeNS(u.space, u.local) : c.getAttribute(u);
    }
    return this.each((i == null ? u.local ? mb : gb : typeof i == "function" ? u.local ? xb : vb : u.local ? pb : yb)(u, i));
  }
  function fy(n) {
    return n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView;
  }
  function Sb(n) {
    return function() {
      this.style.removeProperty(n);
    };
  }
  function _b(n, i, u) {
    return function() {
      this.style.setProperty(n, i, u);
    };
  }
  function Eb(n, i, u) {
    return function() {
      var c = i.apply(this, arguments);
      c == null ? this.style.removeProperty(n) : this.style.setProperty(n, c, u);
    };
  }
  function wb(n, i, u) {
    return arguments.length > 1 ? this.each((i == null ? Sb : typeof i == "function" ? Eb : _b)(n, i, u ?? "")) : Ka(this.node(), n);
  }
  function Ka(n, i) {
    return n.style.getPropertyValue(i) || fy(n).getComputedStyle(n, null).getPropertyValue(i);
  }
  function Nb(n) {
    return function() {
      delete this[n];
    };
  }
  function Mb(n, i) {
    return function() {
      this[n] = i;
    };
  }
  function Ab(n, i) {
    return function() {
      var u = i.apply(this, arguments);
      u == null ? delete this[n] : this[n] = u;
    };
  }
  function zb(n, i) {
    return arguments.length > 1 ? this.each((i == null ? Nb : typeof i == "function" ? Ab : Mb)(n, i)) : this.node()[n];
  }
  function dy(n) {
    return n.trim().split(/^|\s+/);
  }
  function Hf(n) {
    return n.classList || new hy(n);
  }
  function hy(n) {
    this._node = n, this._names = dy(n.getAttribute("class") || "");
  }
  hy.prototype = {
    add: function(n) {
      var i = this._names.indexOf(n);
      i < 0 && (this._names.push(n), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function(n) {
      var i = this._names.indexOf(n);
      i >= 0 && (this._names.splice(i, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function(n) {
      return this._names.indexOf(n) >= 0;
    }
  };
  function gy(n, i) {
    for (var u = Hf(n), c = -1, s = i.length; ++c < s; ) u.add(i[c]);
  }
  function my(n, i) {
    for (var u = Hf(n), c = -1, s = i.length; ++c < s; ) u.remove(i[c]);
  }
  function Tb(n) {
    return function() {
      gy(this, n);
    };
  }
  function Cb(n) {
    return function() {
      my(this, n);
    };
  }
  function Db(n, i) {
    return function() {
      (i.apply(this, arguments) ? gy : my)(this, n);
    };
  }
  function Ob(n, i) {
    var u = dy(n + "");
    if (arguments.length < 2) {
      for (var c = Hf(this.node()), s = -1, f = u.length; ++s < f; ) if (!c.contains(u[s])) return false;
      return true;
    }
    return this.each((typeof i == "function" ? Db : i ? Tb : Cb)(u, i));
  }
  function Hb() {
    this.textContent = "";
  }
  function Rb(n) {
    return function() {
      this.textContent = n;
    };
  }
  function Bb(n) {
    return function() {
      var i = n.apply(this, arguments);
      this.textContent = i ?? "";
    };
  }
  function Ub(n) {
    return arguments.length ? this.each(n == null ? Hb : (typeof n == "function" ? Bb : Rb)(n)) : this.node().textContent;
  }
  function jb() {
    this.innerHTML = "";
  }
  function Yb(n) {
    return function() {
      this.innerHTML = n;
    };
  }
  function Lb(n) {
    return function() {
      var i = n.apply(this, arguments);
      this.innerHTML = i ?? "";
    };
  }
  function Vb(n) {
    return arguments.length ? this.each(n == null ? jb : (typeof n == "function" ? Lb : Yb)(n)) : this.node().innerHTML;
  }
  function qb() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function Xb() {
    return this.each(qb);
  }
  function Zb() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function Gb() {
    return this.each(Zb);
  }
  function Qb(n) {
    var i = typeof n == "function" ? n : uy(n);
    return this.select(function() {
      return this.appendChild(i.apply(this, arguments));
    });
  }
  function kb() {
    return null;
  }
  function Kb(n, i) {
    var u = typeof n == "function" ? n : uy(n), c = i == null ? kb : typeof i == "function" ? i : Of(i);
    return this.select(function() {
      return this.insertBefore(u.apply(this, arguments), c.apply(this, arguments) || null);
    });
  }
  function $b() {
    var n = this.parentNode;
    n && n.removeChild(this);
  }
  function Jb() {
    return this.each($b);
  }
  function Fb() {
    var n = this.cloneNode(false), i = this.parentNode;
    return i ? i.insertBefore(n, this.nextSibling) : n;
  }
  function Wb() {
    var n = this.cloneNode(true), i = this.parentNode;
    return i ? i.insertBefore(n, this.nextSibling) : n;
  }
  function Ib(n) {
    return this.select(n ? Wb : Fb);
  }
  function Pb(n) {
    return arguments.length ? this.property("__data__", n) : this.node().__data__;
  }
  function t2(n) {
    return function(i) {
      n.call(this, i, this.__data__);
    };
  }
  function e2(n) {
    return n.trim().split(/^|\s+/).map(function(i) {
      var u = "", c = i.indexOf(".");
      return c >= 0 && (u = i.slice(c + 1), i = i.slice(0, c)), {
        type: i,
        name: u
      };
    });
  }
  function n2(n) {
    return function() {
      var i = this.__on;
      if (i) {
        for (var u = 0, c = -1, s = i.length, f; u < s; ++u) f = i[u], (!n.type || f.type === n.type) && f.name === n.name ? this.removeEventListener(f.type, f.listener, f.options) : i[++c] = f;
        ++c ? i.length = c : delete this.__on;
      }
    };
  }
  function l2(n, i, u) {
    return function() {
      var c = this.__on, s, f = t2(i);
      if (c) {
        for (var d = 0, m = c.length; d < m; ++d) if ((s = c[d]).type === n.type && s.name === n.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = f, s.options = u), s.value = i;
          return;
        }
      }
      this.addEventListener(n.type, f, u), s = {
        type: n.type,
        name: n.name,
        value: i,
        listener: f,
        options: u
      }, c ? c.push(s) : this.__on = [
        s
      ];
    };
  }
  function a2(n, i, u) {
    var c = e2(n + ""), s, f = c.length, d;
    if (arguments.length < 2) {
      var m = this.node().__on;
      if (m) {
        for (var y = 0, h = m.length, v; y < h; ++y) for (s = 0, v = m[y]; s < f; ++s) if ((d = c[s]).type === v.type && d.name === v.name) return v.value;
      }
      return;
    }
    for (m = i ? l2 : n2, s = 0; s < f; ++s) this.each(m(c[s], i, u));
    return this;
  }
  function yy(n, i, u) {
    var c = fy(n), s = c.CustomEvent;
    typeof s == "function" ? s = new s(i, u) : (s = c.document.createEvent("Event"), u ? (s.initEvent(i, u.bubbles, u.cancelable), s.detail = u.detail) : s.initEvent(i, false, false)), n.dispatchEvent(s);
  }
  function i2(n, i) {
    return function() {
      return yy(this, n, i);
    };
  }
  function u2(n, i) {
    return function() {
      return yy(this, n, i.apply(this, arguments));
    };
  }
  function o2(n, i) {
    return this.each((typeof i == "function" ? u2 : i2)(n, i));
  }
  function* c2() {
    for (var n = this._groups, i = 0, u = n.length; i < u; ++i) for (var c = n[i], s = 0, f = c.length, d; s < f; ++s) (d = c[s]) && (yield d);
  }
  var py = [
    null
  ];
  function Ue(n, i) {
    this._groups = n, this._parents = i;
  }
  function mu() {
    return new Ue([
      [
        document.documentElement
      ]
    ], py);
  }
  function r2() {
    return this;
  }
  Ue.prototype = mu.prototype = {
    constructor: Ue,
    select: Bx,
    selectAll: Lx,
    selectChild: Zx,
    selectChildren: Kx,
    filter: $x,
    data: tb,
    enter: Jx,
    exit: nb,
    join: lb,
    merge: ab,
    selection: r2,
    order: ib,
    sort: ub,
    call: cb,
    nodes: rb,
    node: sb,
    size: fb,
    empty: db,
    each: hb,
    attr: bb,
    style: wb,
    property: zb,
    classed: Ob,
    text: Ub,
    html: Vb,
    raise: Xb,
    lower: Gb,
    append: Qb,
    insert: Kb,
    remove: Jb,
    clone: Ib,
    datum: Pb,
    on: a2,
    dispatch: o2,
    [Symbol.iterator]: c2
  };
  function Be(n) {
    return typeof n == "string" ? new Ue([
      [
        document.querySelector(n)
      ]
    ], [
      document.documentElement
    ]) : new Ue([
      [
        n
      ]
    ], py);
  }
  function s2(n) {
    let i;
    for (; i = n.sourceEvent; ) n = i;
    return n;
  }
  function We(n, i) {
    if (n = s2(n), i === void 0 && (i = n.currentTarget), i) {
      var u = i.ownerSVGElement || i;
      if (u.createSVGPoint) {
        var c = u.createSVGPoint();
        return c.x = n.clientX, c.y = n.clientY, c = c.matrixTransform(i.getScreenCTM().inverse()), [
          c.x,
          c.y
        ];
      }
      if (i.getBoundingClientRect) {
        var s = i.getBoundingClientRect();
        return [
          n.clientX - s.left - i.clientLeft,
          n.clientY - s.top - i.clientTop
        ];
      }
    }
    return [
      n.pageX,
      n.pageY
    ];
  }
  const f2 = {
    passive: false
  }, iu = {
    capture: true,
    passive: false
  };
  function nf(n) {
    n.stopImmediatePropagation();
  }
  function Qa(n) {
    n.preventDefault(), n.stopImmediatePropagation();
  }
  function vy(n) {
    var i = n.document.documentElement, u = Be(n).on("dragstart.drag", Qa, iu);
    "onselectstart" in i ? u.on("selectstart.drag", Qa, iu) : (i.__noselect = i.style.MozUserSelect, i.style.MozUserSelect = "none");
  }
  function xy(n, i) {
    var u = n.document.documentElement, c = Be(n).on("dragstart.drag", null);
    i && (c.on("click.drag", Qa, iu), setTimeout(function() {
      c.on("click.drag", null);
    }, 0)), "onselectstart" in u ? c.on("selectstart.drag", null) : (u.style.MozUserSelect = u.__noselect, delete u.__noselect);
  }
  const Qo = (n) => () => n;
  function pf(n, { sourceEvent: i, subject: u, target: c, identifier: s, active: f, x: d, y: m, dx: y, dy: h, dispatch: v }) {
    Object.defineProperties(this, {
      type: {
        value: n,
        enumerable: true,
        configurable: true
      },
      sourceEvent: {
        value: i,
        enumerable: true,
        configurable: true
      },
      subject: {
        value: u,
        enumerable: true,
        configurable: true
      },
      target: {
        value: c,
        enumerable: true,
        configurable: true
      },
      identifier: {
        value: s,
        enumerable: true,
        configurable: true
      },
      active: {
        value: f,
        enumerable: true,
        configurable: true
      },
      x: {
        value: d,
        enumerable: true,
        configurable: true
      },
      y: {
        value: m,
        enumerable: true,
        configurable: true
      },
      dx: {
        value: y,
        enumerable: true,
        configurable: true
      },
      dy: {
        value: h,
        enumerable: true,
        configurable: true
      },
      _: {
        value: v
      }
    });
  }
  pf.prototype.on = function() {
    var n = this._.on.apply(this._, arguments);
    return n === this._ ? this : n;
  };
  function d2(n) {
    return !n.ctrlKey && !n.button;
  }
  function h2() {
    return this.parentNode;
  }
  function g2(n, i) {
    return i ?? {
      x: n.x,
      y: n.y
    };
  }
  function m2() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function by() {
    var n = d2, i = h2, u = g2, c = m2, s = {}, f = vc("start", "drag", "end"), d = 0, m, y, h, v, p = 0;
    function x(A) {
      A.on("mousedown.drag", E).filter(c).on("touchstart.drag", C).on("touchmove.drag", M, f2).on("touchend.drag touchcancel.drag", V).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function E(A, X) {
      if (!(v || !n.call(this, A, X))) {
        var j = S(this, i.call(this, A, X), A, X, "mouse");
        j && (Be(A.view).on("mousemove.drag", _, iu).on("mouseup.drag", z, iu), vy(A.view), nf(A), h = false, m = A.clientX, y = A.clientY, j("start", A));
      }
    }
    function _(A) {
      if (Qa(A), !h) {
        var X = A.clientX - m, j = A.clientY - y;
        h = X * X + j * j > p;
      }
      s.mouse("drag", A);
    }
    function z(A) {
      Be(A.view).on("mousemove.drag mouseup.drag", null), xy(A.view, h), Qa(A), s.mouse("end", A);
    }
    function C(A, X) {
      if (n.call(this, A, X)) {
        var j = A.changedTouches, U = i.call(this, A, X), L = j.length, G, ot;
        for (G = 0; G < L; ++G) (ot = S(this, U, A, X, j[G].identifier, j[G])) && (nf(A), ot("start", A, j[G]));
      }
    }
    function M(A) {
      var X = A.changedTouches, j = X.length, U, L;
      for (U = 0; U < j; ++U) (L = s[X[U].identifier]) && (Qa(A), L("drag", A, X[U]));
    }
    function V(A) {
      var X = A.changedTouches, j = X.length, U, L;
      for (v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, 500), U = 0; U < j; ++U) (L = s[X[U].identifier]) && (nf(A), L("end", A, X[U]));
    }
    function S(A, X, j, U, L, G) {
      var ot = f.copy(), $ = We(G || j, X), F, it, T;
      if ((T = u.call(A, new pf("beforestart", {
        sourceEvent: j,
        target: x,
        identifier: L,
        active: d,
        x: $[0],
        y: $[1],
        dx: 0,
        dy: 0,
        dispatch: ot
      }), U)) != null) return F = T.x - $[0] || 0, it = T.y - $[1] || 0, function Z(w, O, Y) {
        var Q = $, et;
        switch (w) {
          case "start":
            s[L] = Z, et = d++;
            break;
          case "end":
            delete s[L], --d;
          case "drag":
            $ = We(Y || O, X), et = d;
            break;
        }
        ot.call(w, A, new pf(w, {
          sourceEvent: O,
          subject: T,
          target: x,
          identifier: L,
          active: et,
          x: $[0] + F,
          y: $[1] + it,
          dx: $[0] - Q[0],
          dy: $[1] - Q[1],
          dispatch: ot
        }), U);
      };
    }
    return x.filter = function(A) {
      return arguments.length ? (n = typeof A == "function" ? A : Qo(!!A), x) : n;
    }, x.container = function(A) {
      return arguments.length ? (i = typeof A == "function" ? A : Qo(A), x) : i;
    }, x.subject = function(A) {
      return arguments.length ? (u = typeof A == "function" ? A : Qo(A), x) : u;
    }, x.touchable = function(A) {
      return arguments.length ? (c = typeof A == "function" ? A : Qo(!!A), x) : c;
    }, x.on = function() {
      var A = f.on.apply(f, arguments);
      return A === f ? x : A;
    }, x.clickDistance = function(A) {
      return arguments.length ? (p = (A = +A) * A, x) : Math.sqrt(p);
    }, x;
  }
  function Rf(n, i, u) {
    n.prototype = i.prototype = u, u.constructor = n;
  }
  function Sy(n, i) {
    var u = Object.create(n.prototype);
    for (var c in i) u[c] = i[c];
    return u;
  }
  function yu() {
  }
  var uu = 0.7, oc = 1 / uu, ka = "\\s*([+-]?\\d+)\\s*", ou = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", sn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", y2 = /^#([0-9a-f]{3,8})$/, p2 = new RegExp(`^rgb\\(${ka},${ka},${ka}\\)$`), v2 = new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`), x2 = new RegExp(`^rgba\\(${ka},${ka},${ka},${ou}\\)$`), b2 = new RegExp(`^rgba\\(${sn},${sn},${sn},${ou}\\)$`), S2 = new RegExp(`^hsl\\(${ou},${sn},${sn}\\)$`), _2 = new RegExp(`^hsla\\(${ou},${sn},${sn},${ou}\\)$`), Ig = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  Rf(yu, Jl, {
    copy(n) {
      return Object.assign(new this.constructor(), this, n);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: Pg,
    formatHex: Pg,
    formatHex8: E2,
    formatHsl: w2,
    formatRgb: tm,
    toString: tm
  });
  function Pg() {
    return this.rgb().formatHex();
  }
  function E2() {
    return this.rgb().formatHex8();
  }
  function w2() {
    return _y(this).formatHsl();
  }
  function tm() {
    return this.rgb().formatRgb();
  }
  function Jl(n) {
    var i, u;
    return n = (n + "").trim().toLowerCase(), (i = y2.exec(n)) ? (u = i[1].length, i = parseInt(i[1], 16), u === 6 ? em(i) : u === 3 ? new Me(i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, (i & 15) << 4 | i & 15, 1) : u === 8 ? ko(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, (i & 255) / 255) : u === 4 ? ko(i >> 12 & 15 | i >> 8 & 240, i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, ((i & 15) << 4 | i & 15) / 255) : null) : (i = p2.exec(n)) ? new Me(i[1], i[2], i[3], 1) : (i = v2.exec(n)) ? new Me(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, 1) : (i = x2.exec(n)) ? ko(i[1], i[2], i[3], i[4]) : (i = b2.exec(n)) ? ko(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, i[4]) : (i = S2.exec(n)) ? am(i[1], i[2] / 100, i[3] / 100, 1) : (i = _2.exec(n)) ? am(i[1], i[2] / 100, i[3] / 100, i[4]) : Ig.hasOwnProperty(n) ? em(Ig[n]) : n === "transparent" ? new Me(NaN, NaN, NaN, 0) : null;
  }
  function em(n) {
    return new Me(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
  }
  function ko(n, i, u, c) {
    return c <= 0 && (n = i = u = NaN), new Me(n, i, u, c);
  }
  function N2(n) {
    return n instanceof yu || (n = Jl(n)), n ? (n = n.rgb(), new Me(n.r, n.g, n.b, n.opacity)) : new Me();
  }
  function vf(n, i, u, c) {
    return arguments.length === 1 ? N2(n) : new Me(n, i, u, c ?? 1);
  }
  function Me(n, i, u, c) {
    this.r = +n, this.g = +i, this.b = +u, this.opacity = +c;
  }
  Rf(Me, vf, Sy(yu, {
    brighter(n) {
      return n = n == null ? oc : Math.pow(oc, n), new Me(this.r * n, this.g * n, this.b * n, this.opacity);
    },
    darker(n) {
      return n = n == null ? uu : Math.pow(uu, n), new Me(this.r * n, this.g * n, this.b * n, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Me(Kl(this.r), Kl(this.g), Kl(this.b), cc(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: nm,
    formatHex: nm,
    formatHex8: M2,
    formatRgb: lm,
    toString: lm
  }));
  function nm() {
    return `#${kl(this.r)}${kl(this.g)}${kl(this.b)}`;
  }
  function M2() {
    return `#${kl(this.r)}${kl(this.g)}${kl(this.b)}${kl((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function lm() {
    const n = cc(this.opacity);
    return `${n === 1 ? "rgb(" : "rgba("}${Kl(this.r)}, ${Kl(this.g)}, ${Kl(this.b)}${n === 1 ? ")" : `, ${n})`}`;
  }
  function cc(n) {
    return isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
  }
  function Kl(n) {
    return Math.max(0, Math.min(255, Math.round(n) || 0));
  }
  function kl(n) {
    return n = Kl(n), (n < 16 ? "0" : "") + n.toString(16);
  }
  function am(n, i, u, c) {
    return c <= 0 ? n = i = u = NaN : u <= 0 || u >= 1 ? n = i = NaN : i <= 0 && (n = NaN), new Ie(n, i, u, c);
  }
  function _y(n) {
    if (n instanceof Ie) return new Ie(n.h, n.s, n.l, n.opacity);
    if (n instanceof yu || (n = Jl(n)), !n) return new Ie();
    if (n instanceof Ie) return n;
    n = n.rgb();
    var i = n.r / 255, u = n.g / 255, c = n.b / 255, s = Math.min(i, u, c), f = Math.max(i, u, c), d = NaN, m = f - s, y = (f + s) / 2;
    return m ? (i === f ? d = (u - c) / m + (u < c) * 6 : u === f ? d = (c - i) / m + 2 : d = (i - u) / m + 4, m /= y < 0.5 ? f + s : 2 - f - s, d *= 60) : m = y > 0 && y < 1 ? 0 : d, new Ie(d, m, y, n.opacity);
  }
  function A2(n, i, u, c) {
    return arguments.length === 1 ? _y(n) : new Ie(n, i, u, c ?? 1);
  }
  function Ie(n, i, u, c) {
    this.h = +n, this.s = +i, this.l = +u, this.opacity = +c;
  }
  Rf(Ie, A2, Sy(yu, {
    brighter(n) {
      return n = n == null ? oc : Math.pow(oc, n), new Ie(this.h, this.s, this.l * n, this.opacity);
    },
    darker(n) {
      return n = n == null ? uu : Math.pow(uu, n), new Ie(this.h, this.s, this.l * n, this.opacity);
    },
    rgb() {
      var n = this.h % 360 + (this.h < 0) * 360, i = isNaN(n) || isNaN(this.s) ? 0 : this.s, u = this.l, c = u + (u < 0.5 ? u : 1 - u) * i, s = 2 * u - c;
      return new Me(lf(n >= 240 ? n - 240 : n + 120, s, c), lf(n, s, c), lf(n < 120 ? n + 240 : n - 120, s, c), this.opacity);
    },
    clamp() {
      return new Ie(im(this.h), Ko(this.s), Ko(this.l), cc(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
      const n = cc(this.opacity);
      return `${n === 1 ? "hsl(" : "hsla("}${im(this.h)}, ${Ko(this.s) * 100}%, ${Ko(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
    }
  }));
  function im(n) {
    return n = (n || 0) % 360, n < 0 ? n + 360 : n;
  }
  function Ko(n) {
    return Math.max(0, Math.min(1, n || 0));
  }
  function lf(n, i, u) {
    return (n < 60 ? i + (u - i) * n / 60 : n < 180 ? u : n < 240 ? i + (u - i) * (240 - n) / 60 : i) * 255;
  }
  const Bf = (n) => () => n;
  function z2(n, i) {
    return function(u) {
      return n + u * i;
    };
  }
  function T2(n, i, u) {
    return n = Math.pow(n, u), i = Math.pow(i, u) - n, u = 1 / u, function(c) {
      return Math.pow(n + c * i, u);
    };
  }
  function C2(n) {
    return (n = +n) == 1 ? Ey : function(i, u) {
      return u - i ? T2(i, u, n) : Bf(isNaN(i) ? u : i);
    };
  }
  function Ey(n, i) {
    var u = i - n;
    return u ? z2(n, u) : Bf(isNaN(n) ? i : n);
  }
  const rc = (function n(i) {
    var u = C2(i);
    function c(s, f) {
      var d = u((s = vf(s)).r, (f = vf(f)).r), m = u(s.g, f.g), y = u(s.b, f.b), h = Ey(s.opacity, f.opacity);
      return function(v) {
        return s.r = d(v), s.g = m(v), s.b = y(v), s.opacity = h(v), s + "";
      };
    }
    return c.gamma = n, c;
  })(1);
  function D2(n, i) {
    i || (i = []);
    var u = n ? Math.min(i.length, n.length) : 0, c = i.slice(), s;
    return function(f) {
      for (s = 0; s < u; ++s) c[s] = n[s] * (1 - f) + i[s] * f;
      return c;
    };
  }
  function O2(n) {
    return ArrayBuffer.isView(n) && !(n instanceof DataView);
  }
  function H2(n, i) {
    var u = i ? i.length : 0, c = n ? Math.min(u, n.length) : 0, s = new Array(c), f = new Array(u), d;
    for (d = 0; d < c; ++d) s[d] = lu(n[d], i[d]);
    for (; d < u; ++d) f[d] = i[d];
    return function(m) {
      for (d = 0; d < c; ++d) f[d] = s[d](m);
      return f;
    };
  }
  function R2(n, i) {
    var u = /* @__PURE__ */ new Date();
    return n = +n, i = +i, function(c) {
      return u.setTime(n * (1 - c) + i * c), u;
    };
  }
  function rn(n, i) {
    return n = +n, i = +i, function(u) {
      return n * (1 - u) + i * u;
    };
  }
  function B2(n, i) {
    var u = {}, c = {}, s;
    (n === null || typeof n != "object") && (n = {}), (i === null || typeof i != "object") && (i = {});
    for (s in i) s in n ? u[s] = lu(n[s], i[s]) : c[s] = i[s];
    return function(f) {
      for (s in u) c[s] = u[s](f);
      return c;
    };
  }
  var xf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, af = new RegExp(xf.source, "g");
  function U2(n) {
    return function() {
      return n;
    };
  }
  function j2(n) {
    return function(i) {
      return n(i) + "";
    };
  }
  function wy(n, i) {
    var u = xf.lastIndex = af.lastIndex = 0, c, s, f, d = -1, m = [], y = [];
    for (n = n + "", i = i + ""; (c = xf.exec(n)) && (s = af.exec(i)); ) (f = s.index) > u && (f = i.slice(u, f), m[d] ? m[d] += f : m[++d] = f), (c = c[0]) === (s = s[0]) ? m[d] ? m[d] += s : m[++d] = s : (m[++d] = null, y.push({
      i: d,
      x: rn(c, s)
    })), u = af.lastIndex;
    return u < i.length && (f = i.slice(u), m[d] ? m[d] += f : m[++d] = f), m.length < 2 ? y[0] ? j2(y[0].x) : U2(i) : (i = y.length, function(h) {
      for (var v = 0, p; v < i; ++v) m[(p = y[v]).i] = p.x(h);
      return m.join("");
    });
  }
  function lu(n, i) {
    var u = typeof i, c;
    return i == null || u === "boolean" ? Bf(i) : (u === "number" ? rn : u === "string" ? (c = Jl(i)) ? (i = c, rc) : wy : i instanceof Jl ? rc : i instanceof Date ? R2 : O2(i) ? D2 : Array.isArray(i) ? H2 : typeof i.valueOf != "function" && typeof i.toString != "function" || isNaN(i) ? B2 : rn)(n, i);
  }
  var um = 180 / Math.PI, bf = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function Ny(n, i, u, c, s, f) {
    var d, m, y;
    return (d = Math.sqrt(n * n + i * i)) && (n /= d, i /= d), (y = n * u + i * c) && (u -= n * y, c -= i * y), (m = Math.sqrt(u * u + c * c)) && (u /= m, c /= m, y /= m), n * c < i * u && (n = -n, i = -i, y = -y, d = -d), {
      translateX: s,
      translateY: f,
      rotate: Math.atan2(i, n) * um,
      skewX: Math.atan(y) * um,
      scaleX: d,
      scaleY: m
    };
  }
  var $o;
  function Y2(n) {
    const i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(n + "");
    return i.isIdentity ? bf : Ny(i.a, i.b, i.c, i.d, i.e, i.f);
  }
  function L2(n) {
    return n == null || ($o || ($o = document.createElementNS("http://www.w3.org/2000/svg", "g")), $o.setAttribute("transform", n), !(n = $o.transform.baseVal.consolidate())) ? bf : (n = n.matrix, Ny(n.a, n.b, n.c, n.d, n.e, n.f));
  }
  function My(n, i, u, c) {
    function s(h) {
      return h.length ? h.pop() + " " : "";
    }
    function f(h, v, p, x, E, _) {
      if (h !== p || v !== x) {
        var z = E.push("translate(", null, i, null, u);
        _.push({
          i: z - 4,
          x: rn(h, p)
        }, {
          i: z - 2,
          x: rn(v, x)
        });
      } else (p || x) && E.push("translate(" + p + i + x + u);
    }
    function d(h, v, p, x) {
      h !== v ? (h - v > 180 ? v += 360 : v - h > 180 && (h += 360), x.push({
        i: p.push(s(p) + "rotate(", null, c) - 2,
        x: rn(h, v)
      })) : v && p.push(s(p) + "rotate(" + v + c);
    }
    function m(h, v, p, x) {
      h !== v ? x.push({
        i: p.push(s(p) + "skewX(", null, c) - 2,
        x: rn(h, v)
      }) : v && p.push(s(p) + "skewX(" + v + c);
    }
    function y(h, v, p, x, E, _) {
      if (h !== p || v !== x) {
        var z = E.push(s(E) + "scale(", null, ",", null, ")");
        _.push({
          i: z - 4,
          x: rn(h, p)
        }, {
          i: z - 2,
          x: rn(v, x)
        });
      } else (p !== 1 || x !== 1) && E.push(s(E) + "scale(" + p + "," + x + ")");
    }
    return function(h, v) {
      var p = [], x = [];
      return h = n(h), v = n(v), f(h.translateX, h.translateY, v.translateX, v.translateY, p, x), d(h.rotate, v.rotate, p, x), m(h.skewX, v.skewX, p, x), y(h.scaleX, h.scaleY, v.scaleX, v.scaleY, p, x), h = v = null, function(E) {
        for (var _ = -1, z = x.length, C; ++_ < z; ) p[(C = x[_]).i] = C.x(E);
        return p.join("");
      };
    };
  }
  var V2 = My(Y2, "px, ", "px)", "deg)"), q2 = My(L2, ", ", ")", ")"), X2 = 1e-12;
  function om(n) {
    return ((n = Math.exp(n)) + 1 / n) / 2;
  }
  function Z2(n) {
    return ((n = Math.exp(n)) - 1 / n) / 2;
  }
  function G2(n) {
    return ((n = Math.exp(2 * n)) - 1) / (n + 1);
  }
  const nc = (function n(i, u, c) {
    function s(f, d) {
      var m = f[0], y = f[1], h = f[2], v = d[0], p = d[1], x = d[2], E = v - m, _ = p - y, z = E * E + _ * _, C, M;
      if (z < X2) M = Math.log(x / h) / i, C = function(U) {
        return [
          m + U * E,
          y + U * _,
          h * Math.exp(i * U * M)
        ];
      };
      else {
        var V = Math.sqrt(z), S = (x * x - h * h + c * z) / (2 * h * u * V), A = (x * x - h * h - c * z) / (2 * x * u * V), X = Math.log(Math.sqrt(S * S + 1) - S), j = Math.log(Math.sqrt(A * A + 1) - A);
        M = (j - X) / i, C = function(U) {
          var L = U * M, G = om(X), ot = h / (u * V) * (G * G2(i * L + X) - Z2(X));
          return [
            m + ot * E,
            y + ot * _,
            h * G / om(i * L + X)
          ];
        };
      }
      return C.duration = M * 1e3 * i / Math.SQRT2, C;
    }
    return s.rho = function(f) {
      var d = Math.max(1e-3, +f), m = d * d, y = m * m;
      return n(d, m, y);
    }, s;
  })(Math.SQRT2, 2, 4);
  var $a = 0, Pi = 0, Fi = 0, Ay = 1e3, sc, tu, fc = 0, Fl = 0, bc = 0, cu = typeof performance == "object" && performance.now ? performance : Date, zy = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
    setTimeout(n, 17);
  };
  function Uf() {
    return Fl || (zy(Q2), Fl = cu.now() + bc);
  }
  function Q2() {
    Fl = 0;
  }
  function dc() {
    this._call = this._time = this._next = null;
  }
  dc.prototype = Ty.prototype = {
    constructor: dc,
    restart: function(n, i, u) {
      if (typeof n != "function") throw new TypeError("callback is not a function");
      u = (u == null ? Uf() : +u) + (i == null ? 0 : +i), !this._next && tu !== this && (tu ? tu._next = this : sc = this, tu = this), this._call = n, this._time = u, Sf();
    },
    stop: function() {
      this._call && (this._call = null, this._time = 1 / 0, Sf());
    }
  };
  function Ty(n, i, u) {
    var c = new dc();
    return c.restart(n, i, u), c;
  }
  function k2() {
    Uf(), ++$a;
    for (var n = sc, i; n; ) (i = Fl - n._time) >= 0 && n._call.call(void 0, i), n = n._next;
    --$a;
  }
  function cm() {
    Fl = (fc = cu.now()) + bc, $a = Pi = 0;
    try {
      k2();
    } finally {
      $a = 0, $2(), Fl = 0;
    }
  }
  function K2() {
    var n = cu.now(), i = n - fc;
    i > Ay && (bc -= i, fc = n);
  }
  function $2() {
    for (var n, i = sc, u, c = 1 / 0; i; ) i._call ? (c > i._time && (c = i._time), n = i, i = i._next) : (u = i._next, i._next = null, i = n ? n._next = u : sc = u);
    tu = n, Sf(c);
  }
  function Sf(n) {
    if (!$a) {
      Pi && (Pi = clearTimeout(Pi));
      var i = n - Fl;
      i > 24 ? (n < 1 / 0 && (Pi = setTimeout(cm, n - cu.now() - bc)), Fi && (Fi = clearInterval(Fi))) : (Fi || (fc = cu.now(), Fi = setInterval(K2, Ay)), $a = 1, zy(cm));
    }
  }
  function rm(n, i, u) {
    var c = new dc();
    return i = i == null ? 0 : +i, c.restart((s) => {
      c.stop(), n(s + i);
    }, i, u), c;
  }
  var J2 = vc("start", "end", "cancel", "interrupt"), F2 = [], Cy = 0, sm = 1, _f = 2, lc = 3, fm = 4, Ef = 5, ac = 6;
  function Sc(n, i, u, c, s, f) {
    var d = n.__transition;
    if (!d) n.__transition = {};
    else if (u in d) return;
    W2(n, u, {
      name: i,
      index: c,
      group: s,
      on: J2,
      tween: F2,
      time: f.time,
      delay: f.delay,
      duration: f.duration,
      ease: f.ease,
      timer: null,
      state: Cy
    });
  }
  function jf(n, i) {
    var u = en(n, i);
    if (u.state > Cy) throw new Error("too late; already scheduled");
    return u;
  }
  function dn(n, i) {
    var u = en(n, i);
    if (u.state > lc) throw new Error("too late; already running");
    return u;
  }
  function en(n, i) {
    var u = n.__transition;
    if (!u || !(u = u[i])) throw new Error("transition not found");
    return u;
  }
  function W2(n, i, u) {
    var c = n.__transition, s;
    c[i] = u, u.timer = Ty(f, 0, u.time);
    function f(h) {
      u.state = sm, u.timer.restart(d, u.delay, u.time), u.delay <= h && d(h - u.delay);
    }
    function d(h) {
      var v, p, x, E;
      if (u.state !== sm) return y();
      for (v in c) if (E = c[v], E.name === u.name) {
        if (E.state === lc) return rm(d);
        E.state === fm ? (E.state = ac, E.timer.stop(), E.on.call("interrupt", n, n.__data__, E.index, E.group), delete c[v]) : +v < i && (E.state = ac, E.timer.stop(), E.on.call("cancel", n, n.__data__, E.index, E.group), delete c[v]);
      }
      if (rm(function() {
        u.state === lc && (u.state = fm, u.timer.restart(m, u.delay, u.time), m(h));
      }), u.state = _f, u.on.call("start", n, n.__data__, u.index, u.group), u.state === _f) {
        for (u.state = lc, s = new Array(x = u.tween.length), v = 0, p = -1; v < x; ++v) (E = u.tween[v].value.call(n, n.__data__, u.index, u.group)) && (s[++p] = E);
        s.length = p + 1;
      }
    }
    function m(h) {
      for (var v = h < u.duration ? u.ease.call(null, h / u.duration) : (u.timer.restart(y), u.state = Ef, 1), p = -1, x = s.length; ++p < x; ) s[p].call(n, v);
      u.state === Ef && (u.on.call("end", n, n.__data__, u.index, u.group), y());
    }
    function y() {
      u.state = ac, u.timer.stop(), delete c[i];
      for (var h in c) return;
      delete n.__transition;
    }
  }
  function ic(n, i) {
    var u = n.__transition, c, s, f = true, d;
    if (u) {
      i = i == null ? null : i + "";
      for (d in u) {
        if ((c = u[d]).name !== i) {
          f = false;
          continue;
        }
        s = c.state > _f && c.state < Ef, c.state = ac, c.timer.stop(), c.on.call(s ? "interrupt" : "cancel", n, n.__data__, c.index, c.group), delete u[d];
      }
      f && delete n.__transition;
    }
  }
  function I2(n) {
    return this.each(function() {
      ic(this, n);
    });
  }
  function P2(n, i) {
    var u, c;
    return function() {
      var s = dn(this, n), f = s.tween;
      if (f !== u) {
        c = u = f;
        for (var d = 0, m = c.length; d < m; ++d) if (c[d].name === i) {
          c = c.slice(), c.splice(d, 1);
          break;
        }
      }
      s.tween = c;
    };
  }
  function tS(n, i, u) {
    var c, s;
    if (typeof u != "function") throw new Error();
    return function() {
      var f = dn(this, n), d = f.tween;
      if (d !== c) {
        s = (c = d).slice();
        for (var m = {
          name: i,
          value: u
        }, y = 0, h = s.length; y < h; ++y) if (s[y].name === i) {
          s[y] = m;
          break;
        }
        y === h && s.push(m);
      }
      f.tween = s;
    };
  }
  function eS(n, i) {
    var u = this._id;
    if (n += "", arguments.length < 2) {
      for (var c = en(this.node(), u).tween, s = 0, f = c.length, d; s < f; ++s) if ((d = c[s]).name === n) return d.value;
      return null;
    }
    return this.each((i == null ? P2 : tS)(u, n, i));
  }
  function Yf(n, i, u) {
    var c = n._id;
    return n.each(function() {
      var s = dn(this, c);
      (s.value || (s.value = {}))[i] = u.apply(this, arguments);
    }), function(s) {
      return en(s, c).value[i];
    };
  }
  function Dy(n, i) {
    var u;
    return (typeof i == "number" ? rn : i instanceof Jl ? rc : (u = Jl(i)) ? (i = u, rc) : wy)(n, i);
  }
  function nS(n) {
    return function() {
      this.removeAttribute(n);
    };
  }
  function lS(n) {
    return function() {
      this.removeAttributeNS(n.space, n.local);
    };
  }
  function aS(n, i, u) {
    var c, s = u + "", f;
    return function() {
      var d = this.getAttribute(n);
      return d === s ? null : d === c ? f : f = i(c = d, u);
    };
  }
  function iS(n, i, u) {
    var c, s = u + "", f;
    return function() {
      var d = this.getAttributeNS(n.space, n.local);
      return d === s ? null : d === c ? f : f = i(c = d, u);
    };
  }
  function uS(n, i, u) {
    var c, s, f;
    return function() {
      var d, m = u(this), y;
      return m == null ? void this.removeAttribute(n) : (d = this.getAttribute(n), y = m + "", d === y ? null : d === c && y === s ? f : (s = y, f = i(c = d, m)));
    };
  }
  function oS(n, i, u) {
    var c, s, f;
    return function() {
      var d, m = u(this), y;
      return m == null ? void this.removeAttributeNS(n.space, n.local) : (d = this.getAttributeNS(n.space, n.local), y = m + "", d === y ? null : d === c && y === s ? f : (s = y, f = i(c = d, m)));
    };
  }
  function cS(n, i) {
    var u = xc(n), c = u === "transform" ? q2 : Dy;
    return this.attrTween(n, typeof i == "function" ? (u.local ? oS : uS)(u, c, Yf(this, "attr." + n, i)) : i == null ? (u.local ? lS : nS)(u) : (u.local ? iS : aS)(u, c, i));
  }
  function rS(n, i) {
    return function(u) {
      this.setAttribute(n, i.call(this, u));
    };
  }
  function sS(n, i) {
    return function(u) {
      this.setAttributeNS(n.space, n.local, i.call(this, u));
    };
  }
  function fS(n, i) {
    var u, c;
    function s() {
      var f = i.apply(this, arguments);
      return f !== c && (u = (c = f) && sS(n, f)), u;
    }
    return s._value = i, s;
  }
  function dS(n, i) {
    var u, c;
    function s() {
      var f = i.apply(this, arguments);
      return f !== c && (u = (c = f) && rS(n, f)), u;
    }
    return s._value = i, s;
  }
  function hS(n, i) {
    var u = "attr." + n;
    if (arguments.length < 2) return (u = this.tween(u)) && u._value;
    if (i == null) return this.tween(u, null);
    if (typeof i != "function") throw new Error();
    var c = xc(n);
    return this.tween(u, (c.local ? fS : dS)(c, i));
  }
  function gS(n, i) {
    return function() {
      jf(this, n).delay = +i.apply(this, arguments);
    };
  }
  function mS(n, i) {
    return i = +i, function() {
      jf(this, n).delay = i;
    };
  }
  function yS(n) {
    var i = this._id;
    return arguments.length ? this.each((typeof n == "function" ? gS : mS)(i, n)) : en(this.node(), i).delay;
  }
  function pS(n, i) {
    return function() {
      dn(this, n).duration = +i.apply(this, arguments);
    };
  }
  function vS(n, i) {
    return i = +i, function() {
      dn(this, n).duration = i;
    };
  }
  function xS(n) {
    var i = this._id;
    return arguments.length ? this.each((typeof n == "function" ? pS : vS)(i, n)) : en(this.node(), i).duration;
  }
  function bS(n, i) {
    if (typeof i != "function") throw new Error();
    return function() {
      dn(this, n).ease = i;
    };
  }
  function SS(n) {
    var i = this._id;
    return arguments.length ? this.each(bS(i, n)) : en(this.node(), i).ease;
  }
  function _S(n, i) {
    return function() {
      var u = i.apply(this, arguments);
      if (typeof u != "function") throw new Error();
      dn(this, n).ease = u;
    };
  }
  function ES(n) {
    if (typeof n != "function") throw new Error();
    return this.each(_S(this._id, n));
  }
  function wS(n) {
    typeof n != "function" && (n = cy(n));
    for (var i = this._groups, u = i.length, c = new Array(u), s = 0; s < u; ++s) for (var f = i[s], d = f.length, m = c[s] = [], y, h = 0; h < d; ++h) (y = f[h]) && n.call(y, y.__data__, h, f) && m.push(y);
    return new Ln(c, this._parents, this._name, this._id);
  }
  function NS(n) {
    if (n._id !== this._id) throw new Error();
    for (var i = this._groups, u = n._groups, c = i.length, s = u.length, f = Math.min(c, s), d = new Array(c), m = 0; m < f; ++m) for (var y = i[m], h = u[m], v = y.length, p = d[m] = new Array(v), x, E = 0; E < v; ++E) (x = y[E] || h[E]) && (p[E] = x);
    for (; m < c; ++m) d[m] = i[m];
    return new Ln(d, this._parents, this._name, this._id);
  }
  function MS(n) {
    return (n + "").trim().split(/^|\s+/).every(function(i) {
      var u = i.indexOf(".");
      return u >= 0 && (i = i.slice(0, u)), !i || i === "start";
    });
  }
  function AS(n, i, u) {
    var c, s, f = MS(i) ? jf : dn;
    return function() {
      var d = f(this, n), m = d.on;
      m !== c && (s = (c = m).copy()).on(i, u), d.on = s;
    };
  }
  function zS(n, i) {
    var u = this._id;
    return arguments.length < 2 ? en(this.node(), u).on.on(n) : this.each(AS(u, n, i));
  }
  function TS(n) {
    return function() {
      var i = this.parentNode;
      for (var u in this.__transition) if (+u !== n) return;
      i && i.removeChild(this);
    };
  }
  function CS() {
    return this.on("end.remove", TS(this._id));
  }
  function DS(n) {
    var i = this._name, u = this._id;
    typeof n != "function" && (n = Of(n));
    for (var c = this._groups, s = c.length, f = new Array(s), d = 0; d < s; ++d) for (var m = c[d], y = m.length, h = f[d] = new Array(y), v, p, x = 0; x < y; ++x) (v = m[x]) && (p = n.call(v, v.__data__, x, m)) && ("__data__" in v && (p.__data__ = v.__data__), h[x] = p, Sc(h[x], i, u, x, h, en(v, u)));
    return new Ln(f, this._parents, i, u);
  }
  function OS(n) {
    var i = this._name, u = this._id;
    typeof n != "function" && (n = oy(n));
    for (var c = this._groups, s = c.length, f = [], d = [], m = 0; m < s; ++m) for (var y = c[m], h = y.length, v, p = 0; p < h; ++p) if (v = y[p]) {
      for (var x = n.call(v, v.__data__, p, y), E, _ = en(v, u), z = 0, C = x.length; z < C; ++z) (E = x[z]) && Sc(E, i, u, z, x, _);
      f.push(x), d.push(v);
    }
    return new Ln(f, d, i, u);
  }
  var HS = mu.prototype.constructor;
  function RS() {
    return new HS(this._groups, this._parents);
  }
  function BS(n, i) {
    var u, c, s;
    return function() {
      var f = Ka(this, n), d = (this.style.removeProperty(n), Ka(this, n));
      return f === d ? null : f === u && d === c ? s : s = i(u = f, c = d);
    };
  }
  function Oy(n) {
    return function() {
      this.style.removeProperty(n);
    };
  }
  function US(n, i, u) {
    var c, s = u + "", f;
    return function() {
      var d = Ka(this, n);
      return d === s ? null : d === c ? f : f = i(c = d, u);
    };
  }
  function jS(n, i, u) {
    var c, s, f;
    return function() {
      var d = Ka(this, n), m = u(this), y = m + "";
      return m == null && (y = m = (this.style.removeProperty(n), Ka(this, n))), d === y ? null : d === c && y === s ? f : (s = y, f = i(c = d, m));
    };
  }
  function YS(n, i) {
    var u, c, s, f = "style." + i, d = "end." + f, m;
    return function() {
      var y = dn(this, n), h = y.on, v = y.value[f] == null ? m || (m = Oy(i)) : void 0;
      (h !== u || s !== v) && (c = (u = h).copy()).on(d, s = v), y.on = c;
    };
  }
  function LS(n, i, u) {
    var c = (n += "") == "transform" ? V2 : Dy;
    return i == null ? this.styleTween(n, BS(n, c)).on("end.style." + n, Oy(n)) : typeof i == "function" ? this.styleTween(n, jS(n, c, Yf(this, "style." + n, i))).each(YS(this._id, n)) : this.styleTween(n, US(n, c, i), u).on("end.style." + n, null);
  }
  function VS(n, i, u) {
    return function(c) {
      this.style.setProperty(n, i.call(this, c), u);
    };
  }
  function qS(n, i, u) {
    var c, s;
    function f() {
      var d = i.apply(this, arguments);
      return d !== s && (c = (s = d) && VS(n, d, u)), c;
    }
    return f._value = i, f;
  }
  function XS(n, i, u) {
    var c = "style." + (n += "");
    if (arguments.length < 2) return (c = this.tween(c)) && c._value;
    if (i == null) return this.tween(c, null);
    if (typeof i != "function") throw new Error();
    return this.tween(c, qS(n, i, u ?? ""));
  }
  function ZS(n) {
    return function() {
      this.textContent = n;
    };
  }
  function GS(n) {
    return function() {
      var i = n(this);
      this.textContent = i ?? "";
    };
  }
  function QS(n) {
    return this.tween("text", typeof n == "function" ? GS(Yf(this, "text", n)) : ZS(n == null ? "" : n + ""));
  }
  function kS(n) {
    return function(i) {
      this.textContent = n.call(this, i);
    };
  }
  function KS(n) {
    var i, u;
    function c() {
      var s = n.apply(this, arguments);
      return s !== u && (i = (u = s) && kS(s)), i;
    }
    return c._value = n, c;
  }
  function $S(n) {
    var i = "text";
    if (arguments.length < 1) return (i = this.tween(i)) && i._value;
    if (n == null) return this.tween(i, null);
    if (typeof n != "function") throw new Error();
    return this.tween(i, KS(n));
  }
  function JS() {
    for (var n = this._name, i = this._id, u = Hy(), c = this._groups, s = c.length, f = 0; f < s; ++f) for (var d = c[f], m = d.length, y, h = 0; h < m; ++h) if (y = d[h]) {
      var v = en(y, i);
      Sc(y, n, u, h, d, {
        time: v.time + v.delay + v.duration,
        delay: 0,
        duration: v.duration,
        ease: v.ease
      });
    }
    return new Ln(c, this._parents, n, u);
  }
  function FS() {
    var n, i, u = this, c = u._id, s = u.size();
    return new Promise(function(f, d) {
      var m = {
        value: d
      }, y = {
        value: function() {
          --s === 0 && f();
        }
      };
      u.each(function() {
        var h = dn(this, c), v = h.on;
        v !== n && (i = (n = v).copy(), i._.cancel.push(m), i._.interrupt.push(m), i._.end.push(y)), h.on = i;
      }), s === 0 && f();
    });
  }
  var WS = 0;
  function Ln(n, i, u, c) {
    this._groups = n, this._parents = i, this._name = u, this._id = c;
  }
  function Hy() {
    return ++WS;
  }
  var Un = mu.prototype;
  Ln.prototype = {
    constructor: Ln,
    select: DS,
    selectAll: OS,
    selectChild: Un.selectChild,
    selectChildren: Un.selectChildren,
    filter: wS,
    merge: NS,
    selection: RS,
    transition: JS,
    call: Un.call,
    nodes: Un.nodes,
    node: Un.node,
    size: Un.size,
    empty: Un.empty,
    each: Un.each,
    on: zS,
    attr: cS,
    attrTween: hS,
    style: LS,
    styleTween: XS,
    text: QS,
    textTween: $S,
    remove: CS,
    tween: eS,
    delay: yS,
    duration: xS,
    ease: SS,
    easeVarying: ES,
    end: FS,
    [Symbol.iterator]: Un[Symbol.iterator]
  };
  function IS(n) {
    return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
  }
  var PS = {
    time: null,
    delay: 0,
    duration: 250,
    ease: IS
  };
  function t_(n, i) {
    for (var u; !(u = n.__transition) || !(u = u[i]); ) if (!(n = n.parentNode)) throw new Error(`transition ${i} not found`);
    return u;
  }
  function e_(n) {
    var i, u;
    n instanceof Ln ? (i = n._id, n = n._name) : (i = Hy(), (u = PS).time = Uf(), n = n == null ? null : n + "");
    for (var c = this._groups, s = c.length, f = 0; f < s; ++f) for (var d = c[f], m = d.length, y, h = 0; h < m; ++h) (y = d[h]) && Sc(y, n, i, h, d, u || t_(y, i));
    return new Ln(c, this._parents, n, i);
  }
  mu.prototype.interrupt = I2;
  mu.prototype.transition = e_;
  const Jo = (n) => () => n;
  function n_(n, { sourceEvent: i, target: u, transform: c, dispatch: s }) {
    Object.defineProperties(this, {
      type: {
        value: n,
        enumerable: true,
        configurable: true
      },
      sourceEvent: {
        value: i,
        enumerable: true,
        configurable: true
      },
      target: {
        value: u,
        enumerable: true,
        configurable: true
      },
      transform: {
        value: c,
        enumerable: true,
        configurable: true
      },
      _: {
        value: s
      }
    });
  }
  function jn(n, i, u) {
    this.k = n, this.x = i, this.y = u;
  }
  jn.prototype = {
    constructor: jn,
    scale: function(n) {
      return n === 1 ? this : new jn(this.k * n, this.x, this.y);
    },
    translate: function(n, i) {
      return n === 0 & i === 0 ? this : new jn(this.k, this.x + this.k * n, this.y + this.k * i);
    },
    apply: function(n) {
      return [
        n[0] * this.k + this.x,
        n[1] * this.k + this.y
      ];
    },
    applyX: function(n) {
      return n * this.k + this.x;
    },
    applyY: function(n) {
      return n * this.k + this.y;
    },
    invert: function(n) {
      return [
        (n[0] - this.x) / this.k,
        (n[1] - this.y) / this.k
      ];
    },
    invertX: function(n) {
      return (n - this.x) / this.k;
    },
    invertY: function(n) {
      return (n - this.y) / this.k;
    },
    rescaleX: function(n) {
      return n.copy().domain(n.range().map(this.invertX, this).map(n.invert, n));
    },
    rescaleY: function(n) {
      return n.copy().domain(n.range().map(this.invertY, this).map(n.invert, n));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var _c = new jn(1, 0, 0);
  Ry.prototype = jn.prototype;
  function Ry(n) {
    for (; !n.__zoom; ) if (!(n = n.parentNode)) return _c;
    return n.__zoom;
  }
  function uf(n) {
    n.stopImmediatePropagation();
  }
  function Wi(n) {
    n.preventDefault(), n.stopImmediatePropagation();
  }
  function l_(n) {
    return (!n.ctrlKey || n.type === "wheel") && !n.button;
  }
  function a_() {
    var n = this;
    return n instanceof SVGElement ? (n = n.ownerSVGElement || n, n.hasAttribute("viewBox") ? (n = n.viewBox.baseVal, [
      [
        n.x,
        n.y
      ],
      [
        n.x + n.width,
        n.y + n.height
      ]
    ]) : [
      [
        0,
        0
      ],
      [
        n.width.baseVal.value,
        n.height.baseVal.value
      ]
    ]) : [
      [
        0,
        0
      ],
      [
        n.clientWidth,
        n.clientHeight
      ]
    ];
  }
  function dm() {
    return this.__zoom || _c;
  }
  function i_(n) {
    return -n.deltaY * (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 2e-3) * (n.ctrlKey ? 10 : 1);
  }
  function u_() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function o_(n, i, u) {
    var c = n.invertX(i[0][0]) - u[0][0], s = n.invertX(i[1][0]) - u[1][0], f = n.invertY(i[0][1]) - u[0][1], d = n.invertY(i[1][1]) - u[1][1];
    return n.translate(s > c ? (c + s) / 2 : Math.min(0, c) || Math.max(0, s), d > f ? (f + d) / 2 : Math.min(0, f) || Math.max(0, d));
  }
  function By() {
    var n = l_, i = a_, u = o_, c = i_, s = u_, f = [
      0,
      1 / 0
    ], d = [
      [
        -1 / 0,
        -1 / 0
      ],
      [
        1 / 0,
        1 / 0
      ]
    ], m = 250, y = nc, h = vc("start", "zoom", "end"), v, p, x, E = 500, _ = 150, z = 0, C = 10;
    function M(T) {
      T.property("__zoom", dm).on("wheel.zoom", L, {
        passive: false
      }).on("mousedown.zoom", G).on("dblclick.zoom", ot).filter(s).on("touchstart.zoom", $).on("touchmove.zoom", F).on("touchend.zoom touchcancel.zoom", it).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    M.transform = function(T, Z, w, O) {
      var Y = T.selection ? T.selection() : T;
      Y.property("__zoom", dm), T !== Y ? X(T, Z, w, O) : Y.interrupt().each(function() {
        j(this, arguments).event(O).start().zoom(null, typeof Z == "function" ? Z.apply(this, arguments) : Z).end();
      });
    }, M.scaleBy = function(T, Z, w, O) {
      M.scaleTo(T, function() {
        var Y = this.__zoom.k, Q = typeof Z == "function" ? Z.apply(this, arguments) : Z;
        return Y * Q;
      }, w, O);
    }, M.scaleTo = function(T, Z, w, O) {
      M.transform(T, function() {
        var Y = i.apply(this, arguments), Q = this.__zoom, et = w == null ? A(Y) : typeof w == "function" ? w.apply(this, arguments) : w, N = Q.invert(et), R = typeof Z == "function" ? Z.apply(this, arguments) : Z;
        return u(S(V(Q, R), et, N), Y, d);
      }, w, O);
    }, M.translateBy = function(T, Z, w, O) {
      M.transform(T, function() {
        return u(this.__zoom.translate(typeof Z == "function" ? Z.apply(this, arguments) : Z, typeof w == "function" ? w.apply(this, arguments) : w), i.apply(this, arguments), d);
      }, null, O);
    }, M.translateTo = function(T, Z, w, O, Y) {
      M.transform(T, function() {
        var Q = i.apply(this, arguments), et = this.__zoom, N = O == null ? A(Q) : typeof O == "function" ? O.apply(this, arguments) : O;
        return u(_c.translate(N[0], N[1]).scale(et.k).translate(typeof Z == "function" ? -Z.apply(this, arguments) : -Z, typeof w == "function" ? -w.apply(this, arguments) : -w), Q, d);
      }, O, Y);
    };
    function V(T, Z) {
      return Z = Math.max(f[0], Math.min(f[1], Z)), Z === T.k ? T : new jn(Z, T.x, T.y);
    }
    function S(T, Z, w) {
      var O = Z[0] - w[0] * T.k, Y = Z[1] - w[1] * T.k;
      return O === T.x && Y === T.y ? T : new jn(T.k, O, Y);
    }
    function A(T) {
      return [
        (+T[0][0] + +T[1][0]) / 2,
        (+T[0][1] + +T[1][1]) / 2
      ];
    }
    function X(T, Z, w, O) {
      T.on("start.zoom", function() {
        j(this, arguments).event(O).start();
      }).on("interrupt.zoom end.zoom", function() {
        j(this, arguments).event(O).end();
      }).tween("zoom", function() {
        var Y = this, Q = arguments, et = j(Y, Q).event(O), N = i.apply(Y, Q), R = w == null ? A(N) : typeof w == "function" ? w.apply(Y, Q) : w, P = Math.max(N[1][0] - N[0][0], N[1][1] - N[0][1]), tt = Y.__zoom, ct = typeof Z == "function" ? Z.apply(Y, Q) : Z, st = y(tt.invert(R).concat(P / tt.k), ct.invert(R).concat(P / ct.k));
        return function(rt) {
          if (rt === 1) rt = ct;
          else {
            var ut = st(rt), ft = P / ut[2];
            rt = new jn(ft, R[0] - ut[0] * ft, R[1] - ut[1] * ft);
          }
          et.zoom(null, rt);
        };
      });
    }
    function j(T, Z, w) {
      return !w && T.__zooming || new U(T, Z);
    }
    function U(T, Z) {
      this.that = T, this.args = Z, this.active = 0, this.sourceEvent = null, this.extent = i.apply(T, Z), this.taps = 0;
    }
    U.prototype = {
      event: function(T) {
        return T && (this.sourceEvent = T), this;
      },
      start: function() {
        return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
      },
      zoom: function(T, Z) {
        return this.mouse && T !== "mouse" && (this.mouse[1] = Z.invert(this.mouse[0])), this.touch0 && T !== "touch" && (this.touch0[1] = Z.invert(this.touch0[0])), this.touch1 && T !== "touch" && (this.touch1[1] = Z.invert(this.touch1[0])), this.that.__zoom = Z, this.emit("zoom"), this;
      },
      end: function() {
        return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
      },
      emit: function(T) {
        var Z = Be(this.that).datum();
        h.call(T, this.that, new n_(T, {
          sourceEvent: this.sourceEvent,
          target: M,
          transform: this.that.__zoom,
          dispatch: h
        }), Z);
      }
    };
    function L(T, ...Z) {
      if (!n.apply(this, arguments)) return;
      var w = j(this, Z).event(T), O = this.__zoom, Y = Math.max(f[0], Math.min(f[1], O.k * Math.pow(2, c.apply(this, arguments)))), Q = We(T);
      if (w.wheel) (w.mouse[0][0] !== Q[0] || w.mouse[0][1] !== Q[1]) && (w.mouse[1] = O.invert(w.mouse[0] = Q)), clearTimeout(w.wheel);
      else {
        if (O.k === Y) return;
        w.mouse = [
          Q,
          O.invert(Q)
        ], ic(this), w.start();
      }
      Wi(T), w.wheel = setTimeout(et, _), w.zoom("mouse", u(S(V(O, Y), w.mouse[0], w.mouse[1]), w.extent, d));
      function et() {
        w.wheel = null, w.end();
      }
    }
    function G(T, ...Z) {
      if (x || !n.apply(this, arguments)) return;
      var w = T.currentTarget, O = j(this, Z, true).event(T), Y = Be(T.view).on("mousemove.zoom", R, true).on("mouseup.zoom", P, true), Q = We(T, w), et = T.clientX, N = T.clientY;
      vy(T.view), uf(T), O.mouse = [
        Q,
        this.__zoom.invert(Q)
      ], ic(this), O.start();
      function R(tt) {
        if (Wi(tt), !O.moved) {
          var ct = tt.clientX - et, st = tt.clientY - N;
          O.moved = ct * ct + st * st > z;
        }
        O.event(tt).zoom("mouse", u(S(O.that.__zoom, O.mouse[0] = We(tt, w), O.mouse[1]), O.extent, d));
      }
      function P(tt) {
        Y.on("mousemove.zoom mouseup.zoom", null), xy(tt.view, O.moved), Wi(tt), O.event(tt).end();
      }
    }
    function ot(T, ...Z) {
      if (n.apply(this, arguments)) {
        var w = this.__zoom, O = We(T.changedTouches ? T.changedTouches[0] : T, this), Y = w.invert(O), Q = w.k * (T.shiftKey ? 0.5 : 2), et = u(S(V(w, Q), O, Y), i.apply(this, Z), d);
        Wi(T), m > 0 ? Be(this).transition().duration(m).call(X, et, O, T) : Be(this).call(M.transform, et, O, T);
      }
    }
    function $(T, ...Z) {
      if (n.apply(this, arguments)) {
        var w = T.touches, O = w.length, Y = j(this, Z, T.changedTouches.length === O).event(T), Q, et, N, R;
        for (uf(T), et = 0; et < O; ++et) N = w[et], R = We(N, this), R = [
          R,
          this.__zoom.invert(R),
          N.identifier
        ], Y.touch0 ? !Y.touch1 && Y.touch0[2] !== R[2] && (Y.touch1 = R, Y.taps = 0) : (Y.touch0 = R, Q = true, Y.taps = 1 + !!v);
        v && (v = clearTimeout(v)), Q && (Y.taps < 2 && (p = R[0], v = setTimeout(function() {
          v = null;
        }, E)), ic(this), Y.start());
      }
    }
    function F(T, ...Z) {
      if (this.__zooming) {
        var w = j(this, Z).event(T), O = T.changedTouches, Y = O.length, Q, et, N, R;
        for (Wi(T), Q = 0; Q < Y; ++Q) et = O[Q], N = We(et, this), w.touch0 && w.touch0[2] === et.identifier ? w.touch0[0] = N : w.touch1 && w.touch1[2] === et.identifier && (w.touch1[0] = N);
        if (et = w.that.__zoom, w.touch1) {
          var P = w.touch0[0], tt = w.touch0[1], ct = w.touch1[0], st = w.touch1[1], rt = (rt = ct[0] - P[0]) * rt + (rt = ct[1] - P[1]) * rt, ut = (ut = st[0] - tt[0]) * ut + (ut = st[1] - tt[1]) * ut;
          et = V(et, Math.sqrt(rt / ut)), N = [
            (P[0] + ct[0]) / 2,
            (P[1] + ct[1]) / 2
          ], R = [
            (tt[0] + st[0]) / 2,
            (tt[1] + st[1]) / 2
          ];
        } else if (w.touch0) N = w.touch0[0], R = w.touch0[1];
        else return;
        w.zoom("touch", u(S(et, N, R), w.extent, d));
      }
    }
    function it(T, ...Z) {
      if (this.__zooming) {
        var w = j(this, Z).event(T), O = T.changedTouches, Y = O.length, Q, et;
        for (uf(T), x && clearTimeout(x), x = setTimeout(function() {
          x = null;
        }, E), Q = 0; Q < Y; ++Q) et = O[Q], w.touch0 && w.touch0[2] === et.identifier ? delete w.touch0 : w.touch1 && w.touch1[2] === et.identifier && delete w.touch1;
        if (w.touch1 && !w.touch0 && (w.touch0 = w.touch1, delete w.touch1), w.touch0) w.touch0[1] = this.__zoom.invert(w.touch0[0]);
        else if (w.end(), w.taps === 2 && (et = We(et, this), Math.hypot(p[0] - et[0], p[1] - et[1]) < C)) {
          var N = Be(this).on("dblclick.zoom");
          N && N.apply(this, arguments);
        }
      }
    }
    return M.wheelDelta = function(T) {
      return arguments.length ? (c = typeof T == "function" ? T : Jo(+T), M) : c;
    }, M.filter = function(T) {
      return arguments.length ? (n = typeof T == "function" ? T : Jo(!!T), M) : n;
    }, M.touchable = function(T) {
      return arguments.length ? (s = typeof T == "function" ? T : Jo(!!T), M) : s;
    }, M.extent = function(T) {
      return arguments.length ? (i = typeof T == "function" ? T : Jo([
        [
          +T[0][0],
          +T[0][1]
        ],
        [
          +T[1][0],
          +T[1][1]
        ]
      ]), M) : i;
    }, M.scaleExtent = function(T) {
      return arguments.length ? (f[0] = +T[0], f[1] = +T[1], M) : [
        f[0],
        f[1]
      ];
    }, M.translateExtent = function(T) {
      return arguments.length ? (d[0][0] = +T[0][0], d[1][0] = +T[1][0], d[0][1] = +T[0][1], d[1][1] = +T[1][1], M) : [
        [
          d[0][0],
          d[0][1]
        ],
        [
          d[1][0],
          d[1][1]
        ]
      ];
    }, M.constrain = function(T) {
      return arguments.length ? (u = T, M) : u;
    }, M.duration = function(T) {
      return arguments.length ? (m = +T, M) : m;
    }, M.interpolate = function(T) {
      return arguments.length ? (y = T, M) : y;
    }, M.on = function() {
      var T = h.on.apply(h, arguments);
      return T === h ? M : T;
    }, M.clickDistance = function(T) {
      return arguments.length ? (z = (T = +T) * T, M) : Math.sqrt(z);
    }, M.tapDistance = function(T) {
      return arguments.length ? (C = +T, M) : C;
    }, M;
  }
  const fn = {
    error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
    error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
    error003: (n) => `Node type "${n}" not found. Using fallback type "default".`,
    error004: () => "The React Flow parent container needs a width and a height to render the graph.",
    error005: () => "Only child nodes can use a parent extent.",
    error006: () => "Can't create edge. An edge needs a source and a target.",
    error007: (n) => `The old edge with id=${n} does not exist.`,
    error009: (n) => `Marker type "${n}" doesn't exist.`,
    error008: (n, { id: i, sourceHandle: u, targetHandle: c }) => `Couldn't create edge for ${n} handle id: "${n === "source" ? u : c}", edge id: ${i}.`,
    error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
    error011: (n) => `Edge type "${n}" not found. Using fallback type "default".`,
    error012: (n) => `Node with id "${n}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
    error013: (n = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${n}/dist/style.css' or base.css to make sure everything is working properly.`,
    error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
    error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
  }, ru = [
    [
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY
    ],
    [
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY
    ]
  ], Uy = [
    "Enter",
    " ",
    "Escape"
  ], jy = {
    "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.ariaLiveMessage": ({ direction: n, x: i, y: u }) => `Moved selected node ${n}. New position, x: ${i}, y: ${u}`,
    "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
    "controls.ariaLabel": "Control Panel",
    "controls.zoomIn.ariaLabel": "Zoom In",
    "controls.zoomOut.ariaLabel": "Zoom Out",
    "controls.fitView.ariaLabel": "Fit View",
    "controls.interactive.ariaLabel": "Toggle Interactivity",
    "minimap.ariaLabel": "Mini Map",
    "handle.ariaLabel": "Handle"
  };
  var Ja;
  (function(n) {
    n.Strict = "strict", n.Loose = "loose";
  })(Ja || (Ja = {}));
  var $l;
  (function(n) {
    n.Free = "free", n.Vertical = "vertical", n.Horizontal = "horizontal";
  })($l || ($l = {}));
  var su;
  (function(n) {
    n.Partial = "partial", n.Full = "full";
  })(su || (su = {}));
  const Yy = {
    inProgress: false,
    isValid: null,
    from: null,
    fromHandle: null,
    fromPosition: null,
    fromNode: null,
    to: null,
    toHandle: null,
    toPosition: null,
    toNode: null,
    pointer: null
  };
  var vl;
  (function(n) {
    n.Bezier = "default", n.Straight = "straight", n.Step = "step", n.SmoothStep = "smoothstep", n.SimpleBezier = "simplebezier";
  })(vl || (vl = {}));
  var hc;
  (function(n) {
    n.Arrow = "arrow", n.ArrowClosed = "arrowclosed";
  })(hc || (hc = {}));
  var mt;
  (function(n) {
    n.Left = "left", n.Top = "top", n.Right = "right", n.Bottom = "bottom";
  })(mt || (mt = {}));
  const hm = {
    [mt.Left]: mt.Right,
    [mt.Right]: mt.Left,
    [mt.Top]: mt.Bottom,
    [mt.Bottom]: mt.Top
  };
  function Ly(n) {
    return n === null ? null : n ? "valid" : "invalid";
  }
  const Vy = (n) => "id" in n && "source" in n && "target" in n, c_ = (n) => "id" in n && "position" in n && !("source" in n) && !("target" in n), Lf = (n) => "id" in n && "internals" in n && !("source" in n) && !("target" in n), pu = (n, i = [
    0,
    0
  ]) => {
    const { width: u, height: c } = Vn(n), s = n.origin ?? i, f = u * s[0], d = c * s[1];
    return {
      x: n.position.x - f,
      y: n.position.y - d
    };
  }, r_ = (n, i = {
    nodeOrigin: [
      0,
      0
    ]
  }) => {
    if (n.length === 0) return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    const u = n.reduce((c, s) => {
      const f = typeof s == "string";
      let d = !i.nodeLookup && !f ? s : void 0;
      i.nodeLookup && (d = f ? i.nodeLookup.get(s) : Lf(s) ? s : i.nodeLookup.get(s.id));
      const m = d ? gc(d, i.nodeOrigin) : {
        x: 0,
        y: 0,
        x2: 0,
        y2: 0
      };
      return Ec(c, m);
    }, {
      x: 1 / 0,
      y: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0
    });
    return wc(u);
  }, vu = (n, i = {}) => {
    let u = {
      x: 1 / 0,
      y: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0
    }, c = false;
    return n.forEach((s) => {
      (i.filter === void 0 || i.filter(s)) && (u = Ec(u, gc(s)), c = true);
    }), c ? wc(u) : {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }, Vf = (n, i, [u, c, s] = [
    0,
    0,
    1
  ], f = false, d = false) => {
    const m = {
      ...bu(i, [
        u,
        c,
        s
      ]),
      width: i.width / s,
      height: i.height / s
    }, y = [];
    for (const h of n.values()) {
      const { measured: v, selectable: p = true, hidden: x = false } = h;
      if (d && !p || x) continue;
      const E = v.width ?? h.width ?? h.initialWidth ?? null, _ = v.height ?? h.height ?? h.initialHeight ?? null, z = fu(m, Wa(h)), C = (E ?? 0) * (_ ?? 0), M = f && z > 0;
      (!h.internals.handleBounds || M || z >= C || h.dragging) && y.push(h);
    }
    return y;
  }, s_ = (n, i) => {
    const u = /* @__PURE__ */ new Set();
    return n.forEach((c) => {
      u.add(c.id);
    }), i.filter((c) => u.has(c.source) || u.has(c.target));
  };
  function f_(n, i) {
    const u = /* @__PURE__ */ new Map(), c = (i == null ? void 0 : i.nodes) ? new Set(i.nodes.map((s) => s.id)) : null;
    return n.forEach((s) => {
      s.measured.width && s.measured.height && ((i == null ? void 0 : i.includeHiddenNodes) || !s.hidden) && (!c || c.has(s.id)) && u.set(s.id, s);
    }), u;
  }
  async function d_({ nodes: n, width: i, height: u, panZoom: c, minZoom: s, maxZoom: f }, d) {
    if (n.size === 0) return Promise.resolve(true);
    const m = f_(n, d), y = vu(m), h = qf(y, i, u, (d == null ? void 0 : d.minZoom) ?? s, (d == null ? void 0 : d.maxZoom) ?? f, (d == null ? void 0 : d.padding) ?? 0.1);
    return await c.setViewport(h, {
      duration: d == null ? void 0 : d.duration,
      ease: d == null ? void 0 : d.ease,
      interpolate: d == null ? void 0 : d.interpolate
    }), Promise.resolve(true);
  }
  function qy({ nodeId: n, nextPosition: i, nodeLookup: u, nodeOrigin: c = [
    0,
    0
  ], nodeExtent: s, onError: f }) {
    const d = u.get(n), m = d.parentId ? u.get(d.parentId) : void 0, { x: y, y: h } = m ? m.internals.positionAbsolute : {
      x: 0,
      y: 0
    }, v = d.origin ?? c;
    let p = d.extent || s;
    if (d.extent === "parent" && !d.expandParent) if (!m) f == null ? void 0 : f("005", fn.error005());
    else {
      const E = m.measured.width, _ = m.measured.height;
      E && _ && (p = [
        [
          y,
          h
        ],
        [
          y + E,
          h + _
        ]
      ]);
    }
    else m && Ia(d.extent) && (p = [
      [
        d.extent[0][0] + y,
        d.extent[0][1] + h
      ],
      [
        d.extent[1][0] + y,
        d.extent[1][1] + h
      ]
    ]);
    const x = Ia(p) ? Wl(i, p, d.measured) : i;
    return (d.measured.width === void 0 || d.measured.height === void 0) && (f == null ? void 0 : f("015", fn.error015())), {
      position: {
        x: x.x - y + (d.measured.width ?? 0) * v[0],
        y: x.y - h + (d.measured.height ?? 0) * v[1]
      },
      positionAbsolute: x
    };
  }
  async function h_({ nodesToRemove: n = [], edgesToRemove: i = [], nodes: u, edges: c, onBeforeDelete: s }) {
    const f = new Set(n.map((x) => x.id)), d = [];
    for (const x of u) {
      if (x.deletable === false) continue;
      const E = f.has(x.id), _ = !E && x.parentId && d.find((z) => z.id === x.parentId);
      (E || _) && d.push(x);
    }
    const m = new Set(i.map((x) => x.id)), y = c.filter((x) => x.deletable !== false), v = s_(d, y);
    for (const x of y) m.has(x.id) && !v.find((_) => _.id === x.id) && v.push(x);
    if (!s) return {
      edges: v,
      nodes: d
    };
    const p = await s({
      nodes: d,
      edges: v
    });
    return typeof p == "boolean" ? p ? {
      edges: v,
      nodes: d
    } : {
      edges: [],
      nodes: []
    } : p;
  }
  const Fa = (n, i = 0, u = 1) => Math.min(Math.max(n, i), u), Wl = (n = {
    x: 0,
    y: 0
  }, i, u) => ({
    x: Fa(n.x, i[0][0], i[1][0] - ((u == null ? void 0 : u.width) ?? 0)),
    y: Fa(n.y, i[0][1], i[1][1] - ((u == null ? void 0 : u.height) ?? 0))
  });
  function Xy(n, i, u) {
    const { width: c, height: s } = Vn(u), { x: f, y: d } = u.internals.positionAbsolute;
    return Wl(n, [
      [
        f,
        d
      ],
      [
        f + c,
        d + s
      ]
    ], i);
  }
  const gm = (n, i, u) => n < i ? Fa(Math.abs(n - i), 1, i) / i : n > u ? -Fa(Math.abs(n - u), 1, i) / i : 0, Zy = (n, i, u = 15, c = 40) => {
    const s = gm(n.x, c, i.width - c) * u, f = gm(n.y, c, i.height - c) * u;
    return [
      s,
      f
    ];
  }, Ec = (n, i) => ({
    x: Math.min(n.x, i.x),
    y: Math.min(n.y, i.y),
    x2: Math.max(n.x2, i.x2),
    y2: Math.max(n.y2, i.y2)
  }), wf = ({ x: n, y: i, width: u, height: c }) => ({
    x: n,
    y: i,
    x2: n + u,
    y2: i + c
  }), wc = ({ x: n, y: i, x2: u, y2: c }) => ({
    x: n,
    y: i,
    width: u - n,
    height: c - i
  }), Wa = (n, i = [
    0,
    0
  ]) => {
    var _a, _b2;
    const { x: u, y: c } = Lf(n) ? n.internals.positionAbsolute : pu(n, i);
    return {
      x: u,
      y: c,
      width: ((_a = n.measured) == null ? void 0 : _a.width) ?? n.width ?? n.initialWidth ?? 0,
      height: ((_b2 = n.measured) == null ? void 0 : _b2.height) ?? n.height ?? n.initialHeight ?? 0
    };
  }, gc = (n, i = [
    0,
    0
  ]) => {
    var _a, _b2;
    const { x: u, y: c } = Lf(n) ? n.internals.positionAbsolute : pu(n, i);
    return {
      x: u,
      y: c,
      x2: u + (((_a = n.measured) == null ? void 0 : _a.width) ?? n.width ?? n.initialWidth ?? 0),
      y2: c + (((_b2 = n.measured) == null ? void 0 : _b2.height) ?? n.height ?? n.initialHeight ?? 0)
    };
  }, Gy = (n, i) => wc(Ec(wf(n), wf(i))), fu = (n, i) => {
    const u = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), c = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
    return Math.ceil(u * c);
  }, mm = (n) => Pe(n.width) && Pe(n.height) && Pe(n.x) && Pe(n.y), Pe = (n) => !isNaN(n) && isFinite(n), g_ = (n, i) => {
  }, xu = (n, i = [
    1,
    1
  ]) => ({
    x: i[0] * Math.round(n.x / i[0]),
    y: i[1] * Math.round(n.y / i[1])
  }), bu = ({ x: n, y: i }, [u, c, s], f = false, d = [
    1,
    1
  ]) => {
    const m = {
      x: (n - u) / s,
      y: (i - c) / s
    };
    return f ? xu(m, d) : m;
  }, mc = ({ x: n, y: i }, [u, c, s]) => ({
    x: n * s + u,
    y: i * s + c
  });
  function Xa(n, i) {
    if (typeof n == "number") return Math.floor((i - i / (1 + n)) * 0.5);
    if (typeof n == "string" && n.endsWith("px")) {
      const u = parseFloat(n);
      if (!Number.isNaN(u)) return Math.floor(u);
    }
    if (typeof n == "string" && n.endsWith("%")) {
      const u = parseFloat(n);
      if (!Number.isNaN(u)) return Math.floor(i * u * 0.01);
    }
    return console.error(`[React Flow] The padding value "${n}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
  }
  function m_(n, i, u) {
    if (typeof n == "string" || typeof n == "number") {
      const c = Xa(n, u), s = Xa(n, i);
      return {
        top: c,
        right: s,
        bottom: c,
        left: s,
        x: s * 2,
        y: c * 2
      };
    }
    if (typeof n == "object") {
      const c = Xa(n.top ?? n.y ?? 0, u), s = Xa(n.bottom ?? n.y ?? 0, u), f = Xa(n.left ?? n.x ?? 0, i), d = Xa(n.right ?? n.x ?? 0, i);
      return {
        top: c,
        right: d,
        bottom: s,
        left: f,
        x: f + d,
        y: c + s
      };
    }
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      x: 0,
      y: 0
    };
  }
  function y_(n, i, u, c, s, f) {
    const { x: d, y: m } = mc(n, [
      i,
      u,
      c
    ]), { x: y, y: h } = mc({
      x: n.x + n.width,
      y: n.y + n.height
    }, [
      i,
      u,
      c
    ]), v = s - y, p = f - h;
    return {
      left: Math.floor(d),
      top: Math.floor(m),
      right: Math.floor(v),
      bottom: Math.floor(p)
    };
  }
  const qf = (n, i, u, c, s, f) => {
    const d = m_(f, i, u), m = (i - d.x) / n.width, y = (u - d.y) / n.height, h = Math.min(m, y), v = Fa(h, c, s), p = n.x + n.width / 2, x = n.y + n.height / 2, E = i / 2 - p * v, _ = u / 2 - x * v, z = y_(n, E, _, v, i, u), C = {
      left: Math.min(z.left - d.left, 0),
      top: Math.min(z.top - d.top, 0),
      right: Math.min(z.right - d.right, 0),
      bottom: Math.min(z.bottom - d.bottom, 0)
    };
    return {
      x: E - C.left + C.right,
      y: _ - C.top + C.bottom,
      zoom: v
    };
  }, du = () => {
    var _a;
    return typeof navigator < "u" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.indexOf("Mac")) >= 0;
  };
  function Ia(n) {
    return n != null && n !== "parent";
  }
  function Vn(n) {
    var _a, _b2;
    return {
      width: ((_a = n.measured) == null ? void 0 : _a.width) ?? n.width ?? n.initialWidth ?? 0,
      height: ((_b2 = n.measured) == null ? void 0 : _b2.height) ?? n.height ?? n.initialHeight ?? 0
    };
  }
  function Qy(n) {
    var _a, _b2;
    return (((_a = n.measured) == null ? void 0 : _a.width) ?? n.width ?? n.initialWidth) !== void 0 && (((_b2 = n.measured) == null ? void 0 : _b2.height) ?? n.height ?? n.initialHeight) !== void 0;
  }
  function ky(n, i = {
    width: 0,
    height: 0
  }, u, c, s) {
    const f = {
      ...n
    }, d = c.get(u);
    if (d) {
      const m = d.origin || s;
      f.x += d.internals.positionAbsolute.x - (i.width ?? 0) * m[0], f.y += d.internals.positionAbsolute.y - (i.height ?? 0) * m[1];
    }
    return f;
  }
  function ym(n, i) {
    if (n.size !== i.size) return false;
    for (const u of n) if (!i.has(u)) return false;
    return true;
  }
  function p_() {
    let n, i;
    return {
      promise: new Promise((c, s) => {
        n = c, i = s;
      }),
      resolve: n,
      reject: i
    };
  }
  function v_(n) {
    return {
      ...jy,
      ...n || {}
    };
  }
  function au(n, { snapGrid: i = [
    0,
    0
  ], snapToGrid: u = false, transform: c, containerBounds: s }) {
    const { x: f, y: d } = tn(n), m = bu({
      x: f - ((s == null ? void 0 : s.left) ?? 0),
      y: d - ((s == null ? void 0 : s.top) ?? 0)
    }, c), { x: y, y: h } = u ? xu(m, i) : m;
    return {
      xSnapped: y,
      ySnapped: h,
      ...m
    };
  }
  const Xf = (n) => ({
    width: n.offsetWidth,
    height: n.offsetHeight
  }), Ky = (n) => {
    var _a;
    return ((_a = n == null ? void 0 : n.getRootNode) == null ? void 0 : _a.call(n)) || (window == null ? void 0 : window.document);
  }, x_ = [
    "INPUT",
    "SELECT",
    "TEXTAREA"
  ];
  function $y(n) {
    var _a, _b2;
    const i = ((_b2 = (_a = n.composedPath) == null ? void 0 : _a.call(n)) == null ? void 0 : _b2[0]) || n.target;
    return (i == null ? void 0 : i.nodeType) !== 1 ? false : x_.includes(i.nodeName) || i.hasAttribute("contenteditable") || !!i.closest(".nokey");
  }
  const Jy = (n) => "clientX" in n, tn = (n, i) => {
    var _a, _b2;
    const u = Jy(n), c = u ? n.clientX : (_a = n.touches) == null ? void 0 : _a[0].clientX, s = u ? n.clientY : (_b2 = n.touches) == null ? void 0 : _b2[0].clientY;
    return {
      x: c - ((i == null ? void 0 : i.left) ?? 0),
      y: s - ((i == null ? void 0 : i.top) ?? 0)
    };
  }, pm = (n, i, u, c, s) => {
    const f = i.querySelectorAll(`.${n}`);
    return !f || !f.length ? null : Array.from(f).map((d) => {
      const m = d.getBoundingClientRect();
      return {
        id: d.getAttribute("data-handleid"),
        type: n,
        nodeId: s,
        position: d.getAttribute("data-handlepos"),
        x: (m.left - u.left) / c,
        y: (m.top - u.top) / c,
        ...Xf(d)
      };
    });
  };
  function Fy({ sourceX: n, sourceY: i, targetX: u, targetY: c, sourceControlX: s, sourceControlY: f, targetControlX: d, targetControlY: m }) {
    const y = n * 0.125 + s * 0.375 + d * 0.375 + u * 0.125, h = i * 0.125 + f * 0.375 + m * 0.375 + c * 0.125, v = Math.abs(y - n), p = Math.abs(h - i);
    return [
      y,
      h,
      v,
      p
    ];
  }
  function Fo(n, i) {
    return n >= 0 ? 0.5 * n : i * 25 * Math.sqrt(-n);
  }
  function vm({ pos: n, x1: i, y1: u, x2: c, y2: s, c: f }) {
    switch (n) {
      case mt.Left:
        return [
          i - Fo(i - c, f),
          u
        ];
      case mt.Right:
        return [
          i + Fo(c - i, f),
          u
        ];
      case mt.Top:
        return [
          i,
          u - Fo(u - s, f)
        ];
      case mt.Bottom:
        return [
          i,
          u + Fo(s - u, f)
        ];
    }
  }
  function Wy({ sourceX: n, sourceY: i, sourcePosition: u = mt.Bottom, targetX: c, targetY: s, targetPosition: f = mt.Top, curvature: d = 0.25 }) {
    const [m, y] = vm({
      pos: u,
      x1: n,
      y1: i,
      x2: c,
      y2: s,
      c: d
    }), [h, v] = vm({
      pos: f,
      x1: c,
      y1: s,
      x2: n,
      y2: i,
      c: d
    }), [p, x, E, _] = Fy({
      sourceX: n,
      sourceY: i,
      targetX: c,
      targetY: s,
      sourceControlX: m,
      sourceControlY: y,
      targetControlX: h,
      targetControlY: v
    });
    return [
      `M${n},${i} C${m},${y} ${h},${v} ${c},${s}`,
      p,
      x,
      E,
      _
    ];
  }
  function Iy({ sourceX: n, sourceY: i, targetX: u, targetY: c }) {
    const s = Math.abs(u - n) / 2, f = u < n ? u + s : u - s, d = Math.abs(c - i) / 2, m = c < i ? c + d : c - d;
    return [
      f,
      m,
      s,
      d
    ];
  }
  function b_({ sourceNode: n, targetNode: i, selected: u = false, zIndex: c = 0, elevateOnSelect: s = false, zIndexMode: f = "basic" }) {
    if (f === "manual") return c;
    const d = s && u ? c + 1e3 : c, m = Math.max(n.parentId || s && n.selected ? n.internals.z : 0, i.parentId || s && i.selected ? i.internals.z : 0);
    return d + m;
  }
  function S_({ sourceNode: n, targetNode: i, width: u, height: c, transform: s }) {
    const f = Ec(gc(n), gc(i));
    f.x === f.x2 && (f.x2 += 1), f.y === f.y2 && (f.y2 += 1);
    const d = {
      x: -s[0] / s[2],
      y: -s[1] / s[2],
      width: u / s[2],
      height: c / s[2]
    };
    return fu(d, wc(f)) > 0;
  }
  const __ = ({ source: n, sourceHandle: i, target: u, targetHandle: c }) => `xy-edge__${n}${i || ""}-${u}${c || ""}`, E_ = (n, i) => i.some((u) => u.source === n.source && u.target === n.target && (u.sourceHandle === n.sourceHandle || !u.sourceHandle && !n.sourceHandle) && (u.targetHandle === n.targetHandle || !u.targetHandle && !n.targetHandle)), Py = (n, i, u = {}) => {
    if (!n.source || !n.target) return i;
    const c = u.getEdgeId || __;
    let s;
    return Vy(n) ? s = {
      ...n
    } : s = {
      ...n,
      id: c(n)
    }, E_(s, i) ? i : (s.sourceHandle === null && delete s.sourceHandle, s.targetHandle === null && delete s.targetHandle, i.concat(s));
  };
  function tp({ sourceX: n, sourceY: i, targetX: u, targetY: c }) {
    const [s, f, d, m] = Iy({
      sourceX: n,
      sourceY: i,
      targetX: u,
      targetY: c
    });
    return [
      `M ${n},${i}L ${u},${c}`,
      s,
      f,
      d,
      m
    ];
  }
  const xm = {
    [mt.Left]: {
      x: -1,
      y: 0
    },
    [mt.Right]: {
      x: 1,
      y: 0
    },
    [mt.Top]: {
      x: 0,
      y: -1
    },
    [mt.Bottom]: {
      x: 0,
      y: 1
    }
  }, w_ = ({ source: n, sourcePosition: i = mt.Bottom, target: u }) => i === mt.Left || i === mt.Right ? n.x < u.x ? {
    x: 1,
    y: 0
  } : {
    x: -1,
    y: 0
  } : n.y < u.y ? {
    x: 0,
    y: 1
  } : {
    x: 0,
    y: -1
  }, bm = (n, i) => Math.sqrt(Math.pow(i.x - n.x, 2) + Math.pow(i.y - n.y, 2));
  function N_({ source: n, sourcePosition: i = mt.Bottom, target: u, targetPosition: c = mt.Top, center: s, offset: f, stepPosition: d }) {
    const m = xm[i], y = xm[c], h = {
      x: n.x + m.x * f,
      y: n.y + m.y * f
    }, v = {
      x: u.x + y.x * f,
      y: u.y + y.y * f
    }, p = w_({
      source: h,
      sourcePosition: i,
      target: v
    }), x = p.x !== 0 ? "x" : "y", E = p[x];
    let _ = [], z, C;
    const M = {
      x: 0,
      y: 0
    }, V = {
      x: 0,
      y: 0
    }, [, , S, A] = Iy({
      sourceX: n.x,
      sourceY: n.y,
      targetX: u.x,
      targetY: u.y
    });
    if (m[x] * y[x] === -1) {
      x === "x" ? (z = s.x ?? h.x + (v.x - h.x) * d, C = s.y ?? (h.y + v.y) / 2) : (z = s.x ?? (h.x + v.x) / 2, C = s.y ?? h.y + (v.y - h.y) * d);
      const j = [
        {
          x: z,
          y: h.y
        },
        {
          x: z,
          y: v.y
        }
      ], U = [
        {
          x: h.x,
          y: C
        },
        {
          x: v.x,
          y: C
        }
      ];
      m[x] === E ? _ = x === "x" ? j : U : _ = x === "x" ? U : j;
    } else {
      const j = [
        {
          x: h.x,
          y: v.y
        }
      ], U = [
        {
          x: v.x,
          y: h.y
        }
      ];
      if (x === "x" ? _ = m.x === E ? U : j : _ = m.y === E ? j : U, i === c) {
        const F = Math.abs(n[x] - u[x]);
        if (F <= f) {
          const it = Math.min(f - 1, f - F);
          m[x] === E ? M[x] = (h[x] > n[x] ? -1 : 1) * it : V[x] = (v[x] > u[x] ? -1 : 1) * it;
        }
      }
      if (i !== c) {
        const F = x === "x" ? "y" : "x", it = m[x] === y[F], T = h[F] > v[F], Z = h[F] < v[F];
        (m[x] === 1 && (!it && T || it && Z) || m[x] !== 1 && (!it && Z || it && T)) && (_ = x === "x" ? j : U);
      }
      const L = {
        x: h.x + M.x,
        y: h.y + M.y
      }, G = {
        x: v.x + V.x,
        y: v.y + V.y
      }, ot = Math.max(Math.abs(L.x - _[0].x), Math.abs(G.x - _[0].x)), $ = Math.max(Math.abs(L.y - _[0].y), Math.abs(G.y - _[0].y));
      ot >= $ ? (z = (L.x + G.x) / 2, C = _[0].y) : (z = _[0].x, C = (L.y + G.y) / 2);
    }
    return [
      [
        n,
        {
          x: h.x + M.x,
          y: h.y + M.y
        },
        ..._,
        {
          x: v.x + V.x,
          y: v.y + V.y
        },
        u
      ],
      z,
      C,
      S,
      A
    ];
  }
  function M_(n, i, u, c) {
    const s = Math.min(bm(n, i) / 2, bm(i, u) / 2, c), { x: f, y: d } = i;
    if (n.x === f && f === u.x || n.y === d && d === u.y) return `L${f} ${d}`;
    if (n.y === d) {
      const h = n.x < u.x ? -1 : 1, v = n.y < u.y ? 1 : -1;
      return `L ${f + s * h},${d}Q ${f},${d} ${f},${d + s * v}`;
    }
    const m = n.x < u.x ? 1 : -1, y = n.y < u.y ? -1 : 1;
    return `L ${f},${d + s * y}Q ${f},${d} ${f + s * m},${d}`;
  }
  function Nf({ sourceX: n, sourceY: i, sourcePosition: u = mt.Bottom, targetX: c, targetY: s, targetPosition: f = mt.Top, borderRadius: d = 5, centerX: m, centerY: y, offset: h = 20, stepPosition: v = 0.5 }) {
    const [p, x, E, _, z] = N_({
      source: {
        x: n,
        y: i
      },
      sourcePosition: u,
      target: {
        x: c,
        y: s
      },
      targetPosition: f,
      center: {
        x: m,
        y
      },
      offset: h,
      stepPosition: v
    });
    return [
      p.reduce((M, V, S) => {
        let A = "";
        return S > 0 && S < p.length - 1 ? A = M_(p[S - 1], V, p[S + 1], d) : A = `${S === 0 ? "M" : "L"}${V.x} ${V.y}`, M += A, M;
      }, ""),
      x,
      E,
      _,
      z
    ];
  }
  function Sm(n) {
    var _a;
    return n && !!(n.internals.handleBounds || ((_a = n.handles) == null ? void 0 : _a.length)) && !!(n.measured.width || n.width || n.initialWidth);
  }
  function A_(n) {
    var _a;
    const { sourceNode: i, targetNode: u } = n;
    if (!Sm(i) || !Sm(u)) return null;
    const c = i.internals.handleBounds || _m(i.handles), s = u.internals.handleBounds || _m(u.handles), f = Em((c == null ? void 0 : c.source) ?? [], n.sourceHandle), d = Em(n.connectionMode === Ja.Strict ? (s == null ? void 0 : s.target) ?? [] : ((s == null ? void 0 : s.target) ?? []).concat((s == null ? void 0 : s.source) ?? []), n.targetHandle);
    if (!f || !d) return (_a = n.onError) == null ? void 0 : _a.call(n, "008", fn.error008(f ? "target" : "source", {
      id: n.id,
      sourceHandle: n.sourceHandle,
      targetHandle: n.targetHandle
    })), null;
    const m = (f == null ? void 0 : f.position) || mt.Bottom, y = (d == null ? void 0 : d.position) || mt.Top, h = Il(i, f, m), v = Il(u, d, y);
    return {
      sourceX: h.x,
      sourceY: h.y,
      targetX: v.x,
      targetY: v.y,
      sourcePosition: m,
      targetPosition: y
    };
  }
  function _m(n) {
    if (!n) return null;
    const i = [], u = [];
    for (const c of n) c.width = c.width ?? 1, c.height = c.height ?? 1, c.type === "source" ? i.push(c) : c.type === "target" && u.push(c);
    return {
      source: i,
      target: u
    };
  }
  function Il(n, i, u = mt.Left, c = false) {
    const s = ((i == null ? void 0 : i.x) ?? 0) + n.internals.positionAbsolute.x, f = ((i == null ? void 0 : i.y) ?? 0) + n.internals.positionAbsolute.y, { width: d, height: m } = i ?? Vn(n);
    if (c) return {
      x: s + d / 2,
      y: f + m / 2
    };
    switch ((i == null ? void 0 : i.position) ?? u) {
      case mt.Top:
        return {
          x: s + d / 2,
          y: f
        };
      case mt.Right:
        return {
          x: s + d,
          y: f + m / 2
        };
      case mt.Bottom:
        return {
          x: s + d / 2,
          y: f + m
        };
      case mt.Left:
        return {
          x: s,
          y: f + m / 2
        };
    }
  }
  function Em(n, i) {
    return n && (i ? n.find((u) => u.id === i) : n[0]) || null;
  }
  function Mf(n, i) {
    return n ? typeof n == "string" ? n : `${i ? `${i}__` : ""}${Object.keys(n).sort().map((c) => `${c}=${n[c]}`).join("&")}` : "";
  }
  function z_(n, { id: i, defaultColor: u, defaultMarkerStart: c, defaultMarkerEnd: s }) {
    const f = /* @__PURE__ */ new Set();
    return n.reduce((d, m) => ([
      m.markerStart || c,
      m.markerEnd || s
    ].forEach((y) => {
      if (y && typeof y == "object") {
        const h = Mf(y, i);
        f.has(h) || (d.push({
          id: h,
          color: y.color || u,
          ...y
        }), f.add(h));
      }
    }), d), []).sort((d, m) => d.id.localeCompare(m.id));
  }
  const ep = 1e3, T_ = 10, Zf = {
    nodeOrigin: [
      0,
      0
    ],
    nodeExtent: ru,
    elevateNodesOnSelect: true,
    zIndexMode: "basic",
    defaults: {}
  }, C_ = {
    ...Zf,
    checkEquality: true
  };
  function Gf(n, i) {
    const u = {
      ...n
    };
    for (const c in i) i[c] !== void 0 && (u[c] = i[c]);
    return u;
  }
  function D_(n, i, u) {
    const c = Gf(Zf, u);
    for (const s of n.values()) if (s.parentId) kf(s, n, i, c);
    else {
      const f = pu(s, c.nodeOrigin), d = Ia(s.extent) ? s.extent : c.nodeExtent, m = Wl(f, d, Vn(s));
      s.internals.positionAbsolute = m;
    }
  }
  function O_(n, i) {
    if (!n.handles) return n.measured ? i == null ? void 0 : i.internals.handleBounds : void 0;
    const u = [], c = [];
    for (const s of n.handles) {
      const f = {
        id: s.id,
        width: s.width ?? 1,
        height: s.height ?? 1,
        nodeId: n.id,
        x: s.x,
        y: s.y,
        position: s.position,
        type: s.type
      };
      s.type === "source" ? u.push(f) : s.type === "target" && c.push(f);
    }
    return {
      source: u,
      target: c
    };
  }
  function Qf(n) {
    return n === "manual";
  }
  function Af(n, i, u, c = {}) {
    var _a, _b2;
    const s = Gf(C_, c), f = {
      i: 0
    }, d = new Map(i), m = (s == null ? void 0 : s.elevateNodesOnSelect) && !Qf(s.zIndexMode) ? ep : 0;
    let y = n.length > 0;
    i.clear(), u.clear();
    for (const h of n) {
      let v = d.get(h.id);
      if (s.checkEquality && h === (v == null ? void 0 : v.internals.userNode)) i.set(h.id, v);
      else {
        const p = pu(h, s.nodeOrigin), x = Ia(h.extent) ? h.extent : s.nodeExtent, E = Wl(p, x, Vn(h));
        v = {
          ...s.defaults,
          ...h,
          measured: {
            width: (_a = h.measured) == null ? void 0 : _a.width,
            height: (_b2 = h.measured) == null ? void 0 : _b2.height
          },
          internals: {
            positionAbsolute: E,
            handleBounds: O_(h, v),
            z: np(h, m, s.zIndexMode),
            userNode: h
          }
        }, i.set(h.id, v);
      }
      (v.measured === void 0 || v.measured.width === void 0 || v.measured.height === void 0) && !v.hidden && (y = false), h.parentId && kf(v, i, u, c, f);
    }
    return y;
  }
  function H_(n, i) {
    if (!n.parentId) return;
    const u = i.get(n.parentId);
    u ? u.set(n.id, n) : i.set(n.parentId, /* @__PURE__ */ new Map([
      [
        n.id,
        n
      ]
    ]));
  }
  function kf(n, i, u, c, s) {
    const { elevateNodesOnSelect: f, nodeOrigin: d, nodeExtent: m, zIndexMode: y } = Gf(Zf, c), h = n.parentId, v = i.get(h);
    if (!v) {
      console.warn(`Parent node ${h} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
      return;
    }
    H_(n, u), s && !v.parentId && v.internals.rootParentIndex === void 0 && y === "auto" && (v.internals.rootParentIndex = ++s.i, v.internals.z = v.internals.z + s.i * T_), s && v.internals.rootParentIndex !== void 0 && (s.i = v.internals.rootParentIndex);
    const p = f && !Qf(y) ? ep : 0, { x, y: E, z: _ } = R_(n, v, d, m, p, y), { positionAbsolute: z } = n.internals, C = x !== z.x || E !== z.y;
    (C || _ !== n.internals.z) && i.set(n.id, {
      ...n,
      internals: {
        ...n.internals,
        positionAbsolute: C ? {
          x,
          y: E
        } : z,
        z: _
      }
    });
  }
  function np(n, i, u) {
    const c = Pe(n.zIndex) ? n.zIndex : 0;
    return Qf(u) ? c : c + (n.selected ? i : 0);
  }
  function R_(n, i, u, c, s, f) {
    const { x: d, y: m } = i.internals.positionAbsolute, y = Vn(n), h = pu(n, u), v = Ia(n.extent) ? Wl(h, n.extent, y) : h;
    let p = Wl({
      x: d + v.x,
      y: m + v.y
    }, c, y);
    n.extent === "parent" && (p = Xy(p, y, i));
    const x = np(n, s, f), E = i.internals.z ?? 0;
    return {
      x: p.x,
      y: p.y,
      z: E >= x ? E + 1 : x
    };
  }
  function Kf(n, i, u, c = [
    0,
    0
  ]) {
    var _a;
    const s = [], f = /* @__PURE__ */ new Map();
    for (const d of n) {
      const m = i.get(d.parentId);
      if (!m) continue;
      const y = ((_a = f.get(d.parentId)) == null ? void 0 : _a.expandedRect) ?? Wa(m), h = Gy(y, d.rect);
      f.set(d.parentId, {
        expandedRect: h,
        parent: m
      });
    }
    return f.size > 0 && f.forEach(({ expandedRect: d, parent: m }, y) => {
      var _a2;
      const h = m.internals.positionAbsolute, v = Vn(m), p = m.origin ?? c, x = d.x < h.x ? Math.round(Math.abs(h.x - d.x)) : 0, E = d.y < h.y ? Math.round(Math.abs(h.y - d.y)) : 0, _ = Math.max(v.width, Math.round(d.width)), z = Math.max(v.height, Math.round(d.height)), C = (_ - v.width) * p[0], M = (z - v.height) * p[1];
      (x > 0 || E > 0 || C || M) && (s.push({
        id: y,
        type: "position",
        position: {
          x: m.position.x - x + C,
          y: m.position.y - E + M
        }
      }), (_a2 = u.get(y)) == null ? void 0 : _a2.forEach((V) => {
        n.some((S) => S.id === V.id) || s.push({
          id: V.id,
          type: "position",
          position: {
            x: V.position.x + x,
            y: V.position.y + E
          }
        });
      })), (v.width < d.width || v.height < d.height || x || E) && s.push({
        id: y,
        type: "dimensions",
        setAttributes: true,
        dimensions: {
          width: _ + (x ? p[0] * x - C : 0),
          height: z + (E ? p[1] * E - M : 0)
        }
      });
    }), s;
  }
  function B_(n, i, u, c, s, f, d) {
    const m = c == null ? void 0 : c.querySelector(".xyflow__viewport");
    let y = false;
    if (!m) return {
      changes: [],
      updatedInternals: y
    };
    const h = [], v = window.getComputedStyle(m), { m22: p } = new window.DOMMatrixReadOnly(v.transform), x = [];
    for (const E of n.values()) {
      const _ = i.get(E.id);
      if (!_) continue;
      if (_.hidden) {
        i.set(_.id, {
          ..._,
          internals: {
            ..._.internals,
            handleBounds: void 0
          }
        }), y = true;
        continue;
      }
      const z = Xf(E.nodeElement), C = _.measured.width !== z.width || _.measured.height !== z.height;
      if (!!(z.width && z.height && (C || !_.internals.handleBounds || E.force))) {
        const V = E.nodeElement.getBoundingClientRect(), S = Ia(_.extent) ? _.extent : f;
        let { positionAbsolute: A } = _.internals;
        _.parentId && _.extent === "parent" ? A = Xy(A, z, i.get(_.parentId)) : S && (A = Wl(A, S, z));
        const X = {
          ..._,
          measured: z,
          internals: {
            ..._.internals,
            positionAbsolute: A,
            handleBounds: {
              source: pm("source", E.nodeElement, V, p, _.id),
              target: pm("target", E.nodeElement, V, p, _.id)
            }
          }
        };
        i.set(_.id, X), _.parentId && kf(X, i, u, {
          nodeOrigin: s,
          zIndexMode: d
        }), y = true, C && (h.push({
          id: _.id,
          type: "dimensions",
          dimensions: z
        }), _.expandParent && _.parentId && x.push({
          id: _.id,
          parentId: _.parentId,
          rect: Wa(X, s)
        }));
      }
    }
    if (x.length > 0) {
      const E = Kf(x, i, u, s);
      h.push(...E);
    }
    return {
      changes: h,
      updatedInternals: y
    };
  }
  async function U_({ delta: n, panZoom: i, transform: u, translateExtent: c, width: s, height: f }) {
    if (!i || !n.x && !n.y) return Promise.resolve(false);
    const d = await i.setViewportConstrained({
      x: u[0] + n.x,
      y: u[1] + n.y,
      zoom: u[2]
    }, [
      [
        0,
        0
      ],
      [
        s,
        f
      ]
    ], c), m = !!d && (d.x !== u[0] || d.y !== u[1] || d.k !== u[2]);
    return Promise.resolve(m);
  }
  function wm(n, i, u, c, s, f) {
    let d = s;
    const m = c.get(d) || /* @__PURE__ */ new Map();
    c.set(d, m.set(u, i)), d = `${s}-${n}`;
    const y = c.get(d) || /* @__PURE__ */ new Map();
    if (c.set(d, y.set(u, i)), f) {
      d = `${s}-${n}-${f}`;
      const h = c.get(d) || /* @__PURE__ */ new Map();
      c.set(d, h.set(u, i));
    }
  }
  function lp(n, i, u) {
    n.clear(), i.clear();
    for (const c of u) {
      const { source: s, target: f, sourceHandle: d = null, targetHandle: m = null } = c, y = {
        edgeId: c.id,
        source: s,
        target: f,
        sourceHandle: d,
        targetHandle: m
      }, h = `${s}-${d}--${f}-${m}`, v = `${f}-${m}--${s}-${d}`;
      wm("source", y, v, n, s, d), wm("target", y, h, n, f, m), i.set(c.id, c);
    }
  }
  function ap(n, i) {
    if (!n.parentId) return false;
    const u = i.get(n.parentId);
    return u ? u.selected ? true : ap(u, i) : false;
  }
  function Nm(n, i, u) {
    var _a;
    let c = n;
    do {
      if ((_a = c == null ? void 0 : c.matches) == null ? void 0 : _a.call(c, i)) return true;
      if (c === u) return false;
      c = c == null ? void 0 : c.parentElement;
    } while (c);
    return false;
  }
  function j_(n, i, u, c) {
    const s = /* @__PURE__ */ new Map();
    for (const [f, d] of n) if ((d.selected || d.id === c) && (!d.parentId || !ap(d, n)) && (d.draggable || i && typeof d.draggable > "u")) {
      const m = n.get(f);
      m && s.set(f, {
        id: f,
        position: m.position || {
          x: 0,
          y: 0
        },
        distance: {
          x: u.x - m.internals.positionAbsolute.x,
          y: u.y - m.internals.positionAbsolute.y
        },
        extent: m.extent,
        parentId: m.parentId,
        origin: m.origin,
        expandParent: m.expandParent,
        internals: {
          positionAbsolute: m.internals.positionAbsolute || {
            x: 0,
            y: 0
          }
        },
        measured: {
          width: m.measured.width ?? 0,
          height: m.measured.height ?? 0
        }
      });
    }
    return s;
  }
  function of({ nodeId: n, dragItems: i, nodeLookup: u, dragging: c = true }) {
    var _a, _b2, _c2;
    const s = [];
    for (const [d, m] of i) {
      const y = (_a = u.get(d)) == null ? void 0 : _a.internals.userNode;
      y && s.push({
        ...y,
        position: m.position,
        dragging: c
      });
    }
    if (!n) return [
      s[0],
      s
    ];
    const f = (_b2 = u.get(n)) == null ? void 0 : _b2.internals.userNode;
    return [
      f ? {
        ...f,
        position: ((_c2 = i.get(n)) == null ? void 0 : _c2.position) || f.position,
        dragging: c
      } : s[0],
      s
    ];
  }
  function Y_({ dragItems: n, snapGrid: i, x: u, y: c }) {
    const s = n.values().next().value;
    if (!s) return null;
    const f = {
      x: u - s.distance.x,
      y: c - s.distance.y
    }, d = xu(f, i);
    return {
      x: d.x - f.x,
      y: d.y - f.y
    };
  }
  function L_({ onNodeMouseDown: n, getStoreItems: i, onDragStart: u, onDrag: c, onDragStop: s }) {
    let f = {
      x: null,
      y: null
    }, d = 0, m = /* @__PURE__ */ new Map(), y = false, h = {
      x: 0,
      y: 0
    }, v = null, p = false, x = null, E = false, _ = false, z = null;
    function C({ noDragClassName: V, handleSelector: S, domNode: A, isSelectable: X, nodeId: j, nodeClickDistance: U = 0 }) {
      x = Be(A);
      function L({ x: F, y: it }) {
        const { nodeLookup: T, nodeExtent: Z, snapGrid: w, snapToGrid: O, nodeOrigin: Y, onNodeDrag: Q, onSelectionDrag: et, onError: N, updateNodePositions: R } = i();
        f = {
          x: F,
          y: it
        };
        let P = false;
        const tt = m.size > 1, ct = tt && Z ? wf(vu(m)) : null, st = tt && O ? Y_({
          dragItems: m,
          snapGrid: w,
          x: F,
          y: it
        }) : null;
        for (const [rt, ut] of m) {
          if (!T.has(rt)) continue;
          let ft = {
            x: F - ut.distance.x,
            y: it - ut.distance.y
          };
          O && (ft = st ? {
            x: Math.round(ft.x + st.x),
            y: Math.round(ft.y + st.y)
          } : xu(ft, w));
          let _t = null;
          if (tt && Z && !ut.extent && ct) {
            const { positionAbsolute: vt } = ut.internals, Mt = vt.x - ct.x + Z[0][0], jt = vt.x + ut.measured.width - ct.x2 + Z[1][0], Rt = vt.y - ct.y + Z[0][1], ue = vt.y + ut.measured.height - ct.y2 + Z[1][1];
            _t = [
              [
                Mt,
                Rt
              ],
              [
                jt,
                ue
              ]
            ];
          }
          const { position: bt, positionAbsolute: yt } = qy({
            nodeId: rt,
            nextPosition: ft,
            nodeLookup: T,
            nodeExtent: _t || Z,
            nodeOrigin: Y,
            onError: N
          });
          P = P || ut.position.x !== bt.x || ut.position.y !== bt.y, ut.position = bt, ut.internals.positionAbsolute = yt;
        }
        if (_ = _ || P, !!P && (R(m, true), z && (c || Q || !j && et))) {
          const [rt, ut] = of({
            nodeId: j,
            dragItems: m,
            nodeLookup: T
          });
          c == null ? void 0 : c(z, m, rt, ut), Q == null ? void 0 : Q(z, rt, ut), j || (et == null ? void 0 : et(z, ut));
        }
      }
      async function G() {
        if (!v) return;
        const { transform: F, panBy: it, autoPanSpeed: T, autoPanOnNodeDrag: Z } = i();
        if (!Z) {
          y = false, cancelAnimationFrame(d);
          return;
        }
        const [w, O] = Zy(h, v, T);
        (w !== 0 || O !== 0) && (f.x = (f.x ?? 0) - w / F[2], f.y = (f.y ?? 0) - O / F[2], await it({
          x: w,
          y: O
        }) && L(f)), d = requestAnimationFrame(G);
      }
      function ot(F) {
        var _a;
        const { nodeLookup: it, multiSelectionActive: T, nodesDraggable: Z, transform: w, snapGrid: O, snapToGrid: Y, selectNodesOnDrag: Q, onNodeDragStart: et, onSelectionDragStart: N, unselectNodesAndEdges: R } = i();
        p = true, (!Q || !X) && !T && j && (((_a = it.get(j)) == null ? void 0 : _a.selected) || R()), X && Q && j && (n == null ? void 0 : n(j));
        const P = au(F.sourceEvent, {
          transform: w,
          snapGrid: O,
          snapToGrid: Y,
          containerBounds: v
        });
        if (f = P, m = j_(it, Z, P, j), m.size > 0 && (u || et || !j && N)) {
          const [tt, ct] = of({
            nodeId: j,
            dragItems: m,
            nodeLookup: it
          });
          u == null ? void 0 : u(F.sourceEvent, m, tt, ct), et == null ? void 0 : et(F.sourceEvent, tt, ct), j || (N == null ? void 0 : N(F.sourceEvent, ct));
        }
      }
      const $ = by().clickDistance(U).on("start", (F) => {
        const { domNode: it, nodeDragThreshold: T, transform: Z, snapGrid: w, snapToGrid: O } = i();
        v = (it == null ? void 0 : it.getBoundingClientRect()) || null, E = false, _ = false, z = F.sourceEvent, T === 0 && ot(F), f = au(F.sourceEvent, {
          transform: Z,
          snapGrid: w,
          snapToGrid: O,
          containerBounds: v
        }), h = tn(F.sourceEvent, v);
      }).on("drag", (F) => {
        const { autoPanOnNodeDrag: it, transform: T, snapGrid: Z, snapToGrid: w, nodeDragThreshold: O, nodeLookup: Y } = i(), Q = au(F.sourceEvent, {
          transform: T,
          snapGrid: Z,
          snapToGrid: w,
          containerBounds: v
        });
        if (z = F.sourceEvent, (F.sourceEvent.type === "touchmove" && F.sourceEvent.touches.length > 1 || j && !Y.has(j)) && (E = true), !E) {
          if (!y && it && p && (y = true, G()), !p) {
            const et = tn(F.sourceEvent, v), N = et.x - h.x, R = et.y - h.y;
            Math.sqrt(N * N + R * R) > O && ot(F);
          }
          (f.x !== Q.xSnapped || f.y !== Q.ySnapped) && m && p && (h = tn(F.sourceEvent, v), L(Q));
        }
      }).on("end", (F) => {
        if (!(!p || E) && (y = false, p = false, cancelAnimationFrame(d), m.size > 0)) {
          const { nodeLookup: it, updateNodePositions: T, onNodeDragStop: Z, onSelectionDragStop: w } = i();
          if (_ && (T(m, false), _ = false), s || Z || !j && w) {
            const [O, Y] = of({
              nodeId: j,
              dragItems: m,
              nodeLookup: it,
              dragging: false
            });
            s == null ? void 0 : s(F.sourceEvent, m, O, Y), Z == null ? void 0 : Z(F.sourceEvent, O, Y), j || (w == null ? void 0 : w(F.sourceEvent, Y));
          }
        }
      }).filter((F) => {
        const it = F.target;
        return !F.button && (!V || !Nm(it, `.${V}`, A)) && (!S || Nm(it, S, A));
      });
      x.call($);
    }
    function M() {
      x == null ? void 0 : x.on(".drag", null);
    }
    return {
      update: C,
      destroy: M
    };
  }
  function V_(n, i, u) {
    const c = [], s = {
      x: n.x - u,
      y: n.y - u,
      width: u * 2,
      height: u * 2
    };
    for (const f of i.values()) fu(s, Wa(f)) > 0 && c.push(f);
    return c;
  }
  const q_ = 250;
  function X_(n, i, u, c) {
    var _a, _b2;
    let s = [], f = 1 / 0;
    const d = V_(n, u, i + q_);
    for (const m of d) {
      const y = [
        ...((_a = m.internals.handleBounds) == null ? void 0 : _a.source) ?? [],
        ...((_b2 = m.internals.handleBounds) == null ? void 0 : _b2.target) ?? []
      ];
      for (const h of y) {
        if (c.nodeId === h.nodeId && c.type === h.type && c.id === h.id) continue;
        const { x: v, y: p } = Il(m, h, h.position, true), x = Math.sqrt(Math.pow(v - n.x, 2) + Math.pow(p - n.y, 2));
        x > i || (x < f ? (s = [
          {
            ...h,
            x: v,
            y: p
          }
        ], f = x) : x === f && s.push({
          ...h,
          x: v,
          y: p
        }));
      }
    }
    if (!s.length) return null;
    if (s.length > 1) {
      const m = c.type === "source" ? "target" : "source";
      return s.find((y) => y.type === m) ?? s[0];
    }
    return s[0];
  }
  function ip(n, i, u, c, s, f = false) {
    var _a, _b2, _c2;
    const d = c.get(n);
    if (!d) return null;
    const m = s === "strict" ? (_a = d.internals.handleBounds) == null ? void 0 : _a[i] : [
      ...((_b2 = d.internals.handleBounds) == null ? void 0 : _b2.source) ?? [],
      ...((_c2 = d.internals.handleBounds) == null ? void 0 : _c2.target) ?? []
    ], y = (u ? m == null ? void 0 : m.find((h) => h.id === u) : m == null ? void 0 : m[0]) ?? null;
    return y && f ? {
      ...y,
      ...Il(d, y, y.position, true)
    } : y;
  }
  function up(n, i) {
    return n || ((i == null ? void 0 : i.classList.contains("target")) ? "target" : (i == null ? void 0 : i.classList.contains("source")) ? "source" : null);
  }
  function Z_(n, i) {
    let u = null;
    return i ? u = true : n && !i && (u = false), u;
  }
  const op = () => true;
  function G_(n, { connectionMode: i, connectionRadius: u, handleId: c, nodeId: s, edgeUpdaterType: f, isTarget: d, domNode: m, nodeLookup: y, lib: h, autoPanOnConnect: v, flowId: p, panBy: x, cancelConnection: E, onConnectStart: _, onConnect: z, onConnectEnd: C, isValidConnection: M = op, onReconnectEnd: V, updateConnection: S, getTransform: A, getFromHandle: X, autoPanSpeed: j, dragThreshold: U = 1, handleDomNode: L }) {
    const G = Ky(n.target);
    let ot = 0, $;
    const { x: F, y: it } = tn(n), T = up(f, L), Z = m == null ? void 0 : m.getBoundingClientRect();
    let w = false;
    if (!Z || !T) return;
    const O = ip(s, T, c, y, i);
    if (!O) return;
    let Y = tn(n, Z), Q = false, et = null, N = false, R = null;
    function P() {
      if (!v || !Z) return;
      const [bt, yt] = Zy(Y, Z, j);
      x({
        x: bt,
        y: yt
      }), ot = requestAnimationFrame(P);
    }
    const tt = {
      ...O,
      nodeId: s,
      type: T,
      position: O.position
    }, ct = y.get(s);
    let rt = {
      inProgress: true,
      isValid: null,
      from: Il(ct, tt, mt.Left, true),
      fromHandle: tt,
      fromPosition: tt.position,
      fromNode: ct,
      to: Y,
      toHandle: null,
      toPosition: hm[tt.position],
      toNode: null,
      pointer: Y
    };
    function ut() {
      w = true, S(rt), _ == null ? void 0 : _(n, {
        nodeId: s,
        handleId: c,
        handleType: T
      });
    }
    U === 0 && ut();
    function ft(bt) {
      if (!w) {
        const { x: ue, y: Qe } = tn(bt), Ae = ue - F, ke = Qe - it;
        if (!(Ae * Ae + ke * ke > U * U)) return;
        ut();
      }
      if (!X() || !tt) {
        _t(bt);
        return;
      }
      const yt = A();
      Y = tn(bt, Z), $ = X_(bu(Y, yt, false, [
        1,
        1
      ]), u, y, tt), Q || (P(), Q = true);
      const vt = cp(bt, {
        handle: $,
        connectionMode: i,
        fromNodeId: s,
        fromHandleId: c,
        fromType: d ? "target" : "source",
        isValidConnection: M,
        doc: G,
        lib: h,
        flowId: p,
        nodeLookup: y
      });
      R = vt.handleDomNode, et = vt.connection, N = Z_(!!$, vt.isValid);
      const Mt = y.get(s), jt = Mt ? Il(Mt, tt, mt.Left, true) : rt.from, Rt = {
        ...rt,
        from: jt,
        isValid: N,
        to: vt.toHandle && N ? mc({
          x: vt.toHandle.x,
          y: vt.toHandle.y
        }, yt) : Y,
        toHandle: vt.toHandle,
        toPosition: N && vt.toHandle ? vt.toHandle.position : hm[tt.position],
        toNode: vt.toHandle ? y.get(vt.toHandle.nodeId) : null,
        pointer: Y
      };
      S(Rt), rt = Rt;
    }
    function _t(bt) {
      if (!("touches" in bt && bt.touches.length > 0)) {
        if (w) {
          ($ || R) && et && N && (z == null ? void 0 : z(et));
          const { inProgress: yt, ...vt } = rt, Mt = {
            ...vt,
            toPosition: rt.toHandle ? rt.toPosition : null
          };
          C == null ? void 0 : C(bt, Mt), f && (V == null ? void 0 : V(bt, Mt));
        }
        E(), cancelAnimationFrame(ot), Q = false, N = false, et = null, R = null, G.removeEventListener("mousemove", ft), G.removeEventListener("mouseup", _t), G.removeEventListener("touchmove", ft), G.removeEventListener("touchend", _t);
      }
    }
    G.addEventListener("mousemove", ft), G.addEventListener("mouseup", _t), G.addEventListener("touchmove", ft), G.addEventListener("touchend", _t);
  }
  function cp(n, { handle: i, connectionMode: u, fromNodeId: c, fromHandleId: s, fromType: f, doc: d, lib: m, flowId: y, isValidConnection: h = op, nodeLookup: v }) {
    const p = f === "target", x = i ? d.querySelector(`.${m}-flow__handle[data-id="${y}-${i == null ? void 0 : i.nodeId}-${i == null ? void 0 : i.id}-${i == null ? void 0 : i.type}"]`) : null, { x: E, y: _ } = tn(n), z = d.elementFromPoint(E, _), C = (z == null ? void 0 : z.classList.contains(`${m}-flow__handle`)) ? z : x, M = {
      handleDomNode: C,
      isValid: false,
      connection: null,
      toHandle: null
    };
    if (C) {
      const V = up(void 0, C), S = C.getAttribute("data-nodeid"), A = C.getAttribute("data-handleid"), X = C.classList.contains("connectable"), j = C.classList.contains("connectableend");
      if (!S || !V) return M;
      const U = {
        source: p ? S : c,
        sourceHandle: p ? A : s,
        target: p ? c : S,
        targetHandle: p ? s : A
      };
      M.connection = U;
      const G = X && j && (u === Ja.Strict ? p && V === "source" || !p && V === "target" : S !== c || A !== s);
      M.isValid = G && h(U), M.toHandle = ip(S, V, A, v, u, true);
    }
    return M;
  }
  const zf = {
    onPointerDown: G_,
    isValid: cp
  };
  function Q_({ domNode: n, panZoom: i, getTransform: u, getViewScale: c }) {
    const s = Be(n);
    function f({ translateExtent: m, width: y, height: h, zoomStep: v = 1, pannable: p = true, zoomable: x = true, inversePan: E = false }) {
      const _ = (S) => {
        if (S.sourceEvent.type !== "wheel" || !i) return;
        const A = u(), X = S.sourceEvent.ctrlKey && du() ? 10 : 1, j = -S.sourceEvent.deltaY * (S.sourceEvent.deltaMode === 1 ? 0.05 : S.sourceEvent.deltaMode ? 1 : 2e-3) * v, U = A[2] * Math.pow(2, j * X);
        i.scaleTo(U);
      };
      let z = [
        0,
        0
      ];
      const C = (S) => {
        (S.sourceEvent.type === "mousedown" || S.sourceEvent.type === "touchstart") && (z = [
          S.sourceEvent.clientX ?? S.sourceEvent.touches[0].clientX,
          S.sourceEvent.clientY ?? S.sourceEvent.touches[0].clientY
        ]);
      }, M = (S) => {
        const A = u();
        if (S.sourceEvent.type !== "mousemove" && S.sourceEvent.type !== "touchmove" || !i) return;
        const X = [
          S.sourceEvent.clientX ?? S.sourceEvent.touches[0].clientX,
          S.sourceEvent.clientY ?? S.sourceEvent.touches[0].clientY
        ], j = [
          X[0] - z[0],
          X[1] - z[1]
        ];
        z = X;
        const U = c() * Math.max(A[2], Math.log(A[2])) * (E ? -1 : 1), L = {
          x: A[0] - j[0] * U,
          y: A[1] - j[1] * U
        }, G = [
          [
            0,
            0
          ],
          [
            y,
            h
          ]
        ];
        i.setViewportConstrained({
          x: L.x,
          y: L.y,
          zoom: A[2]
        }, G, m);
      }, V = By().on("start", C).on("zoom", p ? M : null).on("zoom.wheel", x ? _ : null);
      s.call(V, {});
    }
    function d() {
      s.on("zoom", null);
    }
    return {
      update: f,
      destroy: d,
      pointer: We
    };
  }
  const Nc = (n) => ({
    x: n.x,
    y: n.y,
    zoom: n.k
  }), cf = ({ x: n, y: i, zoom: u }) => _c.translate(n, i).scale(u), Za = (n, i) => n.target.closest(`.${i}`), rp = (n, i) => i === 2 && Array.isArray(n) && n.includes(2), k_ = (n) => ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2, rf = (n, i = 0, u = k_, c = () => {
  }) => {
    const s = typeof i == "number" && i > 0;
    return s || c(), s ? n.transition().duration(i).ease(u).on("end", c) : n;
  }, sp = (n) => {
    const i = n.ctrlKey && du() ? 10 : 1;
    return -n.deltaY * (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 2e-3) * i;
  };
  function K_({ zoomPanValues: n, noWheelClassName: i, d3Selection: u, d3Zoom: c, panOnScrollMode: s, panOnScrollSpeed: f, zoomOnPinch: d, onPanZoomStart: m, onPanZoom: y, onPanZoomEnd: h }) {
    return (v) => {
      if (Za(v, i)) return v.ctrlKey && v.preventDefault(), false;
      v.preventDefault(), v.stopImmediatePropagation();
      const p = u.property("__zoom").k || 1;
      if (v.ctrlKey && d) {
        const C = We(v), M = sp(v), V = p * Math.pow(2, M);
        c.scaleTo(u, V, C, v);
        return;
      }
      const x = v.deltaMode === 1 ? 20 : 1;
      let E = s === $l.Vertical ? 0 : v.deltaX * x, _ = s === $l.Horizontal ? 0 : v.deltaY * x;
      !du() && v.shiftKey && s !== $l.Vertical && (E = v.deltaY * x, _ = 0), c.translateBy(u, -(E / p) * f, -(_ / p) * f, {
        internal: true
      });
      const z = Nc(u.property("__zoom"));
      clearTimeout(n.panScrollTimeout), n.isPanScrolling ? (y == null ? void 0 : y(v, z), n.panScrollTimeout = setTimeout(() => {
        h == null ? void 0 : h(v, z), n.isPanScrolling = false;
      }, 150)) : (n.isPanScrolling = true, m == null ? void 0 : m(v, z));
    };
  }
  function $_({ noWheelClassName: n, preventScrolling: i, d3ZoomHandler: u }) {
    return function(c, s) {
      const f = c.type === "wheel", d = !i && f && !c.ctrlKey, m = Za(c, n);
      if (c.ctrlKey && f && m && c.preventDefault(), d || m) return null;
      c.preventDefault(), u.call(this, c, s);
    };
  }
  function J_({ zoomPanValues: n, onDraggingChange: i, onPanZoomStart: u }) {
    return (c) => {
      var _a, _b2, _c2;
      if ((_a = c.sourceEvent) == null ? void 0 : _a.internal) return;
      const s = Nc(c.transform);
      n.mouseButton = ((_b2 = c.sourceEvent) == null ? void 0 : _b2.button) || 0, n.isZoomingOrPanning = true, n.prevViewport = s, ((_c2 = c.sourceEvent) == null ? void 0 : _c2.type) === "mousedown" && i(true), u && (u == null ? void 0 : u(c.sourceEvent, s));
    };
  }
  function F_({ zoomPanValues: n, panOnDrag: i, onPaneContextMenu: u, onTransformChange: c, onPanZoom: s }) {
    return (f) => {
      var _a, _b2;
      n.usedRightMouseButton = !!(u && rp(i, n.mouseButton ?? 0)), ((_a = f.sourceEvent) == null ? void 0 : _a.sync) || c([
        f.transform.x,
        f.transform.y,
        f.transform.k
      ]), s && !((_b2 = f.sourceEvent) == null ? void 0 : _b2.internal) && (s == null ? void 0 : s(f.sourceEvent, Nc(f.transform)));
    };
  }
  function W_({ zoomPanValues: n, panOnDrag: i, panOnScroll: u, onDraggingChange: c, onPanZoomEnd: s, onPaneContextMenu: f }) {
    return (d) => {
      var _a;
      if (!((_a = d.sourceEvent) == null ? void 0 : _a.internal) && (n.isZoomingOrPanning = false, f && rp(i, n.mouseButton ?? 0) && !n.usedRightMouseButton && d.sourceEvent && f(d.sourceEvent), n.usedRightMouseButton = false, c(false), s)) {
        const m = Nc(d.transform);
        n.prevViewport = m, clearTimeout(n.timerId), n.timerId = setTimeout(() => {
          s == null ? void 0 : s(d.sourceEvent, m);
        }, u ? 150 : 0);
      }
    };
  }
  function I_({ zoomActivationKeyPressed: n, zoomOnScroll: i, zoomOnPinch: u, panOnDrag: c, panOnScroll: s, zoomOnDoubleClick: f, userSelectionActive: d, noWheelClassName: m, noPanClassName: y, lib: h, connectionInProgress: v }) {
    return (p) => {
      var _a;
      const x = n || i, E = u && p.ctrlKey, _ = p.type === "wheel";
      if (p.button === 1 && p.type === "mousedown" && (Za(p, `${h}-flow__node`) || Za(p, `${h}-flow__edge`))) return true;
      if (!c && !x && !s && !f && !u || d || v && !_ || Za(p, m) && _ || Za(p, y) && (!_ || s && _ && !n) || !u && p.ctrlKey && _) return false;
      if (!u && p.type === "touchstart" && ((_a = p.touches) == null ? void 0 : _a.length) > 1) return p.preventDefault(), false;
      if (!x && !s && !E && _ || !c && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(c) && !c.includes(p.button) && p.type === "mousedown") return false;
      const z = Array.isArray(c) && c.includes(p.button) || !p.button || p.button <= 1;
      return (!p.ctrlKey || _) && z;
    };
  }
  function P_({ domNode: n, minZoom: i, maxZoom: u, translateExtent: c, viewport: s, onPanZoom: f, onPanZoomStart: d, onPanZoomEnd: m, onDraggingChange: y }) {
    const h = {
      isZoomingOrPanning: false,
      usedRightMouseButton: false,
      prevViewport: {},
      mouseButton: 0,
      timerId: void 0,
      panScrollTimeout: void 0,
      isPanScrolling: false
    }, v = n.getBoundingClientRect(), p = By().scaleExtent([
      i,
      u
    ]).translateExtent(c), x = Be(n).call(p);
    V({
      x: s.x,
      y: s.y,
      zoom: Fa(s.zoom, i, u)
    }, [
      [
        0,
        0
      ],
      [
        v.width,
        v.height
      ]
    ], c);
    const E = x.on("wheel.zoom"), _ = x.on("dblclick.zoom");
    p.wheelDelta(sp);
    function z($, F) {
      return x ? new Promise((it) => {
        p == null ? void 0 : p.interpolate((F == null ? void 0 : F.interpolate) === "linear" ? lu : nc).transform(rf(x, F == null ? void 0 : F.duration, F == null ? void 0 : F.ease, () => it(true)), $);
      }) : Promise.resolve(false);
    }
    function C({ noWheelClassName: $, noPanClassName: F, onPaneContextMenu: it, userSelectionActive: T, panOnScroll: Z, panOnDrag: w, panOnScrollMode: O, panOnScrollSpeed: Y, preventScrolling: Q, zoomOnPinch: et, zoomOnScroll: N, zoomOnDoubleClick: R, zoomActivationKeyPressed: P, lib: tt, onTransformChange: ct, connectionInProgress: st, paneClickDistance: rt, selectionOnDrag: ut }) {
      T && !h.isZoomingOrPanning && M();
      const ft = Z && !P && !T;
      p.clickDistance(ut ? 1 / 0 : !Pe(rt) || rt < 0 ? 0 : rt);
      const _t = ft ? K_({
        zoomPanValues: h,
        noWheelClassName: $,
        d3Selection: x,
        d3Zoom: p,
        panOnScrollMode: O,
        panOnScrollSpeed: Y,
        zoomOnPinch: et,
        onPanZoomStart: d,
        onPanZoom: f,
        onPanZoomEnd: m
      }) : $_({
        noWheelClassName: $,
        preventScrolling: Q,
        d3ZoomHandler: E
      });
      if (x.on("wheel.zoom", _t, {
        passive: false
      }), !T) {
        const yt = J_({
          zoomPanValues: h,
          onDraggingChange: y,
          onPanZoomStart: d
        });
        p.on("start", yt);
        const vt = F_({
          zoomPanValues: h,
          panOnDrag: w,
          onPaneContextMenu: !!it,
          onPanZoom: f,
          onTransformChange: ct
        });
        p.on("zoom", vt);
        const Mt = W_({
          zoomPanValues: h,
          panOnDrag: w,
          panOnScroll: Z,
          onPaneContextMenu: it,
          onPanZoomEnd: m,
          onDraggingChange: y
        });
        p.on("end", Mt);
      }
      const bt = I_({
        zoomActivationKeyPressed: P,
        panOnDrag: w,
        zoomOnScroll: N,
        panOnScroll: Z,
        zoomOnDoubleClick: R,
        zoomOnPinch: et,
        userSelectionActive: T,
        noPanClassName: F,
        noWheelClassName: $,
        lib: tt,
        connectionInProgress: st
      });
      p.filter(bt), R ? x.on("dblclick.zoom", _) : x.on("dblclick.zoom", null);
    }
    function M() {
      p.on("zoom", null);
    }
    async function V($, F, it) {
      const T = cf($), Z = p == null ? void 0 : p.constrain()(T, F, it);
      return Z && await z(Z), new Promise((w) => w(Z));
    }
    async function S($, F) {
      const it = cf($);
      return await z(it, F), new Promise((T) => T(it));
    }
    function A($) {
      if (x) {
        const F = cf($), it = x.property("__zoom");
        (it.k !== $.zoom || it.x !== $.x || it.y !== $.y) && (p == null ? void 0 : p.transform(x, F, null, {
          sync: true
        }));
      }
    }
    function X() {
      const $ = x ? Ry(x.node()) : {
        x: 0,
        y: 0,
        k: 1
      };
      return {
        x: $.x,
        y: $.y,
        zoom: $.k
      };
    }
    function j($, F) {
      return x ? new Promise((it) => {
        p == null ? void 0 : p.interpolate((F == null ? void 0 : F.interpolate) === "linear" ? lu : nc).scaleTo(rf(x, F == null ? void 0 : F.duration, F == null ? void 0 : F.ease, () => it(true)), $);
      }) : Promise.resolve(false);
    }
    function U($, F) {
      return x ? new Promise((it) => {
        p == null ? void 0 : p.interpolate((F == null ? void 0 : F.interpolate) === "linear" ? lu : nc).scaleBy(rf(x, F == null ? void 0 : F.duration, F == null ? void 0 : F.ease, () => it(true)), $);
      }) : Promise.resolve(false);
    }
    function L($) {
      p == null ? void 0 : p.scaleExtent($);
    }
    function G($) {
      p == null ? void 0 : p.translateExtent($);
    }
    function ot($) {
      const F = !Pe($) || $ < 0 ? 0 : $;
      p == null ? void 0 : p.clickDistance(F);
    }
    return {
      update: C,
      destroy: M,
      setViewport: S,
      setViewportConstrained: V,
      getViewport: X,
      scaleTo: j,
      scaleBy: U,
      setScaleExtent: L,
      setTranslateExtent: G,
      syncViewport: A,
      setClickDistance: ot
    };
  }
  var Pa;
  (function(n) {
    n.Line = "line", n.Handle = "handle";
  })(Pa || (Pa = {}));
  function tE({ width: n, prevWidth: i, height: u, prevHeight: c, affectsX: s, affectsY: f }) {
    const d = n - i, m = u - c, y = [
      d > 0 ? 1 : d < 0 ? -1 : 0,
      m > 0 ? 1 : m < 0 ? -1 : 0
    ];
    return d && s && (y[0] = y[0] * -1), m && f && (y[1] = y[1] * -1), y;
  }
  function Mm(n) {
    const i = n.includes("right") || n.includes("left"), u = n.includes("bottom") || n.includes("top"), c = n.includes("left"), s = n.includes("top");
    return {
      isHorizontal: i,
      isVertical: u,
      affectsX: c,
      affectsY: s
    };
  }
  function yl(n, i) {
    return Math.max(0, i - n);
  }
  function pl(n, i) {
    return Math.max(0, n - i);
  }
  function Wo(n, i, u) {
    return Math.max(0, i - n, n - u);
  }
  function Am(n, i) {
    return n ? !i : i;
  }
  function eE(n, i, u, c, s, f, d, m) {
    let { affectsX: y, affectsY: h } = i;
    const { isHorizontal: v, isVertical: p } = i, x = v && p, { xSnapped: E, ySnapped: _ } = u, { minWidth: z, maxWidth: C, minHeight: M, maxHeight: V } = c, { x: S, y: A, width: X, height: j, aspectRatio: U } = n;
    let L = Math.floor(v ? E - n.pointerX : 0), G = Math.floor(p ? _ - n.pointerY : 0);
    const ot = X + (y ? -L : L), $ = j + (h ? -G : G), F = -f[0] * X, it = -f[1] * j;
    let T = Wo(ot, z, C), Z = Wo($, M, V);
    if (d) {
      let Y = 0, Q = 0;
      y && L < 0 ? Y = yl(S + L + F, d[0][0]) : !y && L > 0 && (Y = pl(S + ot + F, d[1][0])), h && G < 0 ? Q = yl(A + G + it, d[0][1]) : !h && G > 0 && (Q = pl(A + $ + it, d[1][1])), T = Math.max(T, Y), Z = Math.max(Z, Q);
    }
    if (m) {
      let Y = 0, Q = 0;
      y && L > 0 ? Y = pl(S + L, m[0][0]) : !y && L < 0 && (Y = yl(S + ot, m[1][0])), h && G > 0 ? Q = pl(A + G, m[0][1]) : !h && G < 0 && (Q = yl(A + $, m[1][1])), T = Math.max(T, Y), Z = Math.max(Z, Q);
    }
    if (s) {
      if (v) {
        const Y = Wo(ot / U, M, V) * U;
        if (T = Math.max(T, Y), d) {
          let Q = 0;
          !y && !h || y && !h && x ? Q = pl(A + it + ot / U, d[1][1]) * U : Q = yl(A + it + (y ? L : -L) / U, d[0][1]) * U, T = Math.max(T, Q);
        }
        if (m) {
          let Q = 0;
          !y && !h || y && !h && x ? Q = yl(A + ot / U, m[1][1]) * U : Q = pl(A + (y ? L : -L) / U, m[0][1]) * U, T = Math.max(T, Q);
        }
      }
      if (p) {
        const Y = Wo($ * U, z, C) / U;
        if (Z = Math.max(Z, Y), d) {
          let Q = 0;
          !y && !h || h && !y && x ? Q = pl(S + $ * U + F, d[1][0]) / U : Q = yl(S + (h ? G : -G) * U + F, d[0][0]) / U, Z = Math.max(Z, Q);
        }
        if (m) {
          let Q = 0;
          !y && !h || h && !y && x ? Q = yl(S + $ * U, m[1][0]) / U : Q = pl(S + (h ? G : -G) * U, m[0][0]) / U, Z = Math.max(Z, Q);
        }
      }
    }
    G = G + (G < 0 ? Z : -Z), L = L + (L < 0 ? T : -T), s && (x ? ot > $ * U ? G = (Am(y, h) ? -L : L) / U : L = (Am(y, h) ? -G : G) * U : v ? (G = L / U, h = y) : (L = G * U, y = h));
    const w = y ? S + L : S, O = h ? A + G : A;
    return {
      width: X + (y ? -L : L),
      height: j + (h ? -G : G),
      x: f[0] * L * (y ? -1 : 1) + w,
      y: f[1] * G * (h ? -1 : 1) + O
    };
  }
  const fp = {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }, nE = {
    ...fp,
    pointerX: 0,
    pointerY: 0,
    aspectRatio: 1
  };
  function lE(n) {
    return [
      [
        0,
        0
      ],
      [
        n.measured.width,
        n.measured.height
      ]
    ];
  }
  function aE(n, i, u) {
    const c = i.position.x + n.position.x, s = i.position.y + n.position.y, f = n.measured.width ?? 0, d = n.measured.height ?? 0, m = u[0] * f, y = u[1] * d;
    return [
      [
        c - m,
        s - y
      ],
      [
        c + f - m,
        s + d - y
      ]
    ];
  }
  function iE({ domNode: n, nodeId: i, getStoreItems: u, onChange: c, onEnd: s }) {
    const f = Be(n);
    let d = {
      controlDirection: Mm("bottom-right"),
      boundaries: {
        minWidth: 0,
        minHeight: 0,
        maxWidth: Number.MAX_VALUE,
        maxHeight: Number.MAX_VALUE
      },
      resizeDirection: void 0,
      keepAspectRatio: false
    };
    function m({ controlPosition: h, boundaries: v, keepAspectRatio: p, resizeDirection: x, onResizeStart: E, onResize: _, onResizeEnd: z, shouldResize: C }) {
      let M = {
        ...fp
      }, V = {
        ...nE
      };
      d = {
        boundaries: v,
        resizeDirection: x,
        keepAspectRatio: p,
        controlDirection: Mm(h)
      };
      let S, A = null, X = [], j, U, L, G = false;
      const ot = by().on("start", ($) => {
        const { nodeLookup: F, transform: it, snapGrid: T, snapToGrid: Z, nodeOrigin: w, paneDomNode: O } = u();
        if (S = F.get(i), !S) return;
        A = (O == null ? void 0 : O.getBoundingClientRect()) ?? null;
        const { xSnapped: Y, ySnapped: Q } = au($.sourceEvent, {
          transform: it,
          snapGrid: T,
          snapToGrid: Z,
          containerBounds: A
        });
        M = {
          width: S.measured.width ?? 0,
          height: S.measured.height ?? 0,
          x: S.position.x ?? 0,
          y: S.position.y ?? 0
        }, V = {
          ...M,
          pointerX: Y,
          pointerY: Q,
          aspectRatio: M.width / M.height
        }, j = void 0, S.parentId && (S.extent === "parent" || S.expandParent) && (j = F.get(S.parentId), U = j && S.extent === "parent" ? lE(j) : void 0), X = [], L = void 0;
        for (const [et, N] of F) if (N.parentId === i && (X.push({
          id: et,
          position: {
            ...N.position
          },
          extent: N.extent
        }), N.extent === "parent" || N.expandParent)) {
          const R = aE(N, S, N.origin ?? w);
          L ? L = [
            [
              Math.min(R[0][0], L[0][0]),
              Math.min(R[0][1], L[0][1])
            ],
            [
              Math.max(R[1][0], L[1][0]),
              Math.max(R[1][1], L[1][1])
            ]
          ] : L = R;
        }
        E == null ? void 0 : E($, {
          ...M
        });
      }).on("drag", ($) => {
        const { transform: F, snapGrid: it, snapToGrid: T, nodeOrigin: Z } = u(), w = au($.sourceEvent, {
          transform: F,
          snapGrid: it,
          snapToGrid: T,
          containerBounds: A
        }), O = [];
        if (!S) return;
        const { x: Y, y: Q, width: et, height: N } = M, R = {}, P = S.origin ?? Z, { width: tt, height: ct, x: st, y: rt } = eE(V, d.controlDirection, w, d.boundaries, d.keepAspectRatio, P, U, L), ut = tt !== et, ft = ct !== N, _t = st !== Y && ut, bt = rt !== Q && ft;
        if (!_t && !bt && !ut && !ft) return;
        if ((_t || bt || P[0] === 1 || P[1] === 1) && (R.x = _t ? st : M.x, R.y = bt ? rt : M.y, M.x = R.x, M.y = R.y, X.length > 0)) {
          const jt = st - Y, Rt = rt - Q;
          for (const ue of X) ue.position = {
            x: ue.position.x - jt + P[0] * (tt - et),
            y: ue.position.y - Rt + P[1] * (ct - N)
          }, O.push(ue);
        }
        if ((ut || ft) && (R.width = ut && (!d.resizeDirection || d.resizeDirection === "horizontal") ? tt : M.width, R.height = ft && (!d.resizeDirection || d.resizeDirection === "vertical") ? ct : M.height, M.width = R.width, M.height = R.height), j && S.expandParent) {
          const jt = P[0] * (R.width ?? 0);
          R.x && R.x < jt && (M.x = jt, V.x = V.x - (R.x - jt));
          const Rt = P[1] * (R.height ?? 0);
          R.y && R.y < Rt && (M.y = Rt, V.y = V.y - (R.y - Rt));
        }
        const yt = tE({
          width: M.width,
          prevWidth: et,
          height: M.height,
          prevHeight: N,
          affectsX: d.controlDirection.affectsX,
          affectsY: d.controlDirection.affectsY
        }), vt = {
          ...M,
          direction: yt
        };
        (C == null ? void 0 : C($, vt)) !== false && (G = true, _ == null ? void 0 : _($, vt), c(R, O));
      }).on("end", ($) => {
        G && (z == null ? void 0 : z($, {
          ...M
        }), s == null ? void 0 : s({
          ...M
        }), G = false);
      });
      f.call(ot);
    }
    function y() {
      f.on(".drag", null);
    }
    return {
      update: m,
      destroy: y
    };
  }
  var sf = {
    exports: {}
  }, ff = {}, df = {
    exports: {}
  }, hf = {};
  var zm;
  function uE() {
    if (zm) return hf;
    zm = 1;
    var n = gu();
    function i(p, x) {
      return p === x && (p !== 0 || 1 / p === 1 / x) || p !== p && x !== x;
    }
    var u = typeof Object.is == "function" ? Object.is : i, c = n.useState, s = n.useEffect, f = n.useLayoutEffect, d = n.useDebugValue;
    function m(p, x) {
      var E = x(), _ = c({
        inst: {
          value: E,
          getSnapshot: x
        }
      }), z = _[0].inst, C = _[1];
      return f(function() {
        z.value = E, z.getSnapshot = x, y(z) && C({
          inst: z
        });
      }, [
        p,
        E,
        x
      ]), s(function() {
        return y(z) && C({
          inst: z
        }), p(function() {
          y(z) && C({
            inst: z
          });
        });
      }, [
        p
      ]), d(E), E;
    }
    function y(p) {
      var x = p.getSnapshot;
      p = p.value;
      try {
        var E = x();
        return !u(p, E);
      } catch {
        return true;
      }
    }
    function h(p, x) {
      return x();
    }
    var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : m;
    return hf.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : v, hf;
  }
  var Tm;
  function oE() {
    return Tm || (Tm = 1, df.exports = uE()), df.exports;
  }
  var Cm;
  function cE() {
    if (Cm) return ff;
    Cm = 1;
    var n = gu(), i = oE();
    function u(h, v) {
      return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
    }
    var c = typeof Object.is == "function" ? Object.is : u, s = i.useSyncExternalStore, f = n.useRef, d = n.useEffect, m = n.useMemo, y = n.useDebugValue;
    return ff.useSyncExternalStoreWithSelector = function(h, v, p, x, E) {
      var _ = f(null);
      if (_.current === null) {
        var z = {
          hasValue: false,
          value: null
        };
        _.current = z;
      } else z = _.current;
      _ = m(function() {
        function M(j) {
          if (!V) {
            if (V = true, S = j, j = x(j), E !== void 0 && z.hasValue) {
              var U = z.value;
              if (E(U, j)) return A = U;
            }
            return A = j;
          }
          if (U = A, c(S, j)) return U;
          var L = x(j);
          return E !== void 0 && E(U, L) ? (S = j, U) : (S = j, A = L);
        }
        var V = false, S, A, X = p === void 0 ? null : p;
        return [
          function() {
            return M(v());
          },
          X === null ? void 0 : function() {
            return M(X());
          }
        ];
      }, [
        v,
        p,
        x,
        E
      ]);
      var C = s(h, _[0], _[1]);
      return d(function() {
        z.hasValue = true, z.value = C;
      }, [
        C
      ]), y(C), C;
    }, ff;
  }
  var Dm;
  function rE() {
    return Dm || (Dm = 1, sf.exports = cE()), sf.exports;
  }
  var sE = rE();
  const fE = ny(sE), dE = {}, Om = (n) => {
    let i;
    const u = /* @__PURE__ */ new Set(), c = (v, p) => {
      const x = typeof v == "function" ? v(i) : v;
      if (!Object.is(x, i)) {
        const E = i;
        i = p ?? (typeof x != "object" || x === null) ? x : Object.assign({}, i, x), u.forEach((_) => _(i, E));
      }
    }, s = () => i, y = {
      setState: c,
      getState: s,
      getInitialState: () => h,
      subscribe: (v) => (u.add(v), () => u.delete(v)),
      destroy: () => {
        (dE ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), u.clear();
      }
    }, h = i = n(c, s, y);
    return y;
  }, hE = (n) => n ? Om(n) : Om, { useDebugValue: gE } = ex, { useSyncExternalStoreWithSelector: mE } = fE, yE = (n) => n;
  function dp(n, i = yE, u) {
    const c = mE(n.subscribe, n.getState, n.getServerState || n.getInitialState, i, u);
    return gE(c), c;
  }
  const Hm = (n, i) => {
    const u = hE(n), c = (s, f = i) => dp(u, s, f);
    return Object.assign(c, u), c;
  }, pE = (n, i) => n ? Hm(n, i) : Hm;
  function kt(n, i) {
    if (Object.is(n, i)) return true;
    if (typeof n != "object" || n === null || typeof i != "object" || i === null) return false;
    if (n instanceof Map && i instanceof Map) {
      if (n.size !== i.size) return false;
      for (const [c, s] of n) if (!Object.is(s, i.get(c))) return false;
      return true;
    }
    if (n instanceof Set && i instanceof Set) {
      if (n.size !== i.size) return false;
      for (const c of n) if (!i.has(c)) return false;
      return true;
    }
    const u = Object.keys(n);
    if (u.length !== Object.keys(i).length) return false;
    for (const c of u) if (!Object.prototype.hasOwnProperty.call(i, c) || !Object.is(n[c], i[c])) return false;
    return true;
  }
  ly();
  const Mc = I.createContext(null), vE = Mc.Provider, hp = fn.error001();
  function Ct(n, i) {
    const u = I.useContext(Mc);
    if (u === null) throw new Error(hp);
    return dp(u, n, i);
  }
  function Kt() {
    const n = I.useContext(Mc);
    if (n === null) throw new Error(hp);
    return I.useMemo(() => ({
      getState: n.getState,
      setState: n.setState,
      subscribe: n.subscribe
    }), [
      n
    ]);
  }
  const Rm = {
    display: "none"
  }, xE = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)"
  }, gp = "react-flow__node-desc", mp = "react-flow__edge-desc", bE = "react-flow__aria-live", SE = (n) => n.ariaLiveMessage, _E = (n) => n.ariaLabelConfig;
  function EE({ rfId: n }) {
    const i = Ct(SE);
    return H.jsx("div", {
      id: `${bE}-${n}`,
      "aria-live": "assertive",
      "aria-atomic": "true",
      style: xE,
      children: i
    });
  }
  function wE({ rfId: n, disableKeyboardA11y: i }) {
    const u = Ct(_E);
    return H.jsxs(H.Fragment, {
      children: [
        H.jsx("div", {
          id: `${gp}-${n}`,
          style: Rm,
          children: i ? u["node.a11yDescription.default"] : u["node.a11yDescription.keyboardDisabled"]
        }),
        H.jsx("div", {
          id: `${mp}-${n}`,
          style: Rm,
          children: u["edge.a11yDescription.default"]
        }),
        !i && H.jsx(EE, {
          rfId: n
        })
      ]
    });
  }
  const Ac = I.forwardRef(({ position: n = "top-left", children: i, className: u, style: c, ...s }, f) => {
    const d = `${n}`.split("-");
    return H.jsx("div", {
      className: le([
        "react-flow__panel",
        u,
        ...d
      ]),
      style: c,
      ref: f,
      ...s,
      children: i
    });
  });
  Ac.displayName = "Panel";
  function NE({ proOptions: n, position: i = "bottom-right" }) {
    return (n == null ? void 0 : n.hideAttribution) ? null : H.jsx(Ac, {
      position: i,
      className: "react-flow__attribution",
      "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
      children: H.jsx("a", {
        href: "https://reactflow.dev",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "React Flow attribution",
        children: "React Flow"
      })
    });
  }
  const ME = (n) => {
    const i = [], u = [];
    for (const [, c] of n.nodeLookup) c.selected && i.push(c.internals.userNode);
    for (const [, c] of n.edgeLookup) c.selected && u.push(c);
    return {
      selectedNodes: i,
      selectedEdges: u
    };
  }, Io = (n) => n.id;
  function AE(n, i) {
    return kt(n.selectedNodes.map(Io), i.selectedNodes.map(Io)) && kt(n.selectedEdges.map(Io), i.selectedEdges.map(Io));
  }
  function zE({ onSelectionChange: n }) {
    const i = Kt(), { selectedNodes: u, selectedEdges: c } = Ct(ME, AE);
    return I.useEffect(() => {
      const s = {
        nodes: u,
        edges: c
      };
      n == null ? void 0 : n(s), i.getState().onSelectionChangeHandlers.forEach((f) => f(s));
    }, [
      u,
      c,
      n
    ]), null;
  }
  const TE = (n) => !!n.onSelectionChangeHandlers;
  function CE({ onSelectionChange: n }) {
    const i = Ct(TE);
    return n || i ? H.jsx(zE, {
      onSelectionChange: n
    }) : null;
  }
  const yp = [
    0,
    0
  ], DE = {
    x: 0,
    y: 0,
    zoom: 1
  }, OE = [
    "nodes",
    "edges",
    "defaultNodes",
    "defaultEdges",
    "onConnect",
    "onConnectStart",
    "onConnectEnd",
    "onClickConnectStart",
    "onClickConnectEnd",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "nodesFocusable",
    "edgesFocusable",
    "edgesReconnectable",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "minZoom",
    "maxZoom",
    "nodeExtent",
    "onNodesChange",
    "onEdgesChange",
    "elementsSelectable",
    "connectionMode",
    "snapGrid",
    "snapToGrid",
    "translateExtent",
    "connectOnClick",
    "defaultEdgeOptions",
    "fitView",
    "fitViewOptions",
    "onNodesDelete",
    "onEdgesDelete",
    "onDelete",
    "onNodeDrag",
    "onNodeDragStart",
    "onNodeDragStop",
    "onSelectionDrag",
    "onSelectionDragStart",
    "onSelectionDragStop",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "noPanClassName",
    "nodeOrigin",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onError",
    "connectionRadius",
    "isValidConnection",
    "selectNodesOnDrag",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "onBeforeDelete",
    "debug",
    "autoPanSpeed",
    "ariaLabelConfig",
    "zIndexMode"
  ], Bm = [
    ...OE,
    "rfId"
  ], HE = (n) => ({
    setNodes: n.setNodes,
    setEdges: n.setEdges,
    setMinZoom: n.setMinZoom,
    setMaxZoom: n.setMaxZoom,
    setTranslateExtent: n.setTranslateExtent,
    setNodeExtent: n.setNodeExtent,
    reset: n.reset,
    setDefaultNodesAndEdges: n.setDefaultNodesAndEdges
  }), Um = {
    translateExtent: ru,
    nodeOrigin: yp,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: true,
    noPanClassName: "nopan",
    rfId: "1"
  };
  function RE(n) {
    const { setNodes: i, setEdges: u, setMinZoom: c, setMaxZoom: s, setTranslateExtent: f, setNodeExtent: d, reset: m, setDefaultNodesAndEdges: y } = Ct(HE, kt), h = Kt();
    I.useEffect(() => (y(n.defaultNodes, n.defaultEdges), () => {
      v.current = Um, m();
    }), []);
    const v = I.useRef(Um);
    return I.useEffect(() => {
      for (const p of Bm) {
        const x = n[p], E = v.current[p];
        x !== E && (typeof n[p] > "u" || (p === "nodes" ? i(x) : p === "edges" ? u(x) : p === "minZoom" ? c(x) : p === "maxZoom" ? s(x) : p === "translateExtent" ? f(x) : p === "nodeExtent" ? d(x) : p === "ariaLabelConfig" ? h.setState({
          ariaLabelConfig: v_(x)
        }) : p === "fitView" ? h.setState({
          fitViewQueued: x
        }) : p === "fitViewOptions" ? h.setState({
          fitViewOptions: x
        }) : h.setState({
          [p]: x
        })));
      }
      v.current = n;
    }, Bm.map((p) => n[p])), null;
  }
  function jm() {
    return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
  }
  function BE(n) {
    var _a;
    const [i, u] = I.useState(n === "system" ? null : n);
    return I.useEffect(() => {
      if (n !== "system") {
        u(n);
        return;
      }
      const c = jm(), s = () => u((c == null ? void 0 : c.matches) ? "dark" : "light");
      return s(), c == null ? void 0 : c.addEventListener("change", s), () => {
        c == null ? void 0 : c.removeEventListener("change", s);
      };
    }, [
      n
    ]), i !== null ? i : ((_a = jm()) == null ? void 0 : _a.matches) ? "dark" : "light";
  }
  const Ym = typeof document < "u" ? document : null;
  function hu(n = null, i = {
    target: Ym,
    actInsideInputWithModifier: true
  }) {
    const [u, c] = I.useState(false), s = I.useRef(false), f = I.useRef(/* @__PURE__ */ new Set([])), [d, m] = I.useMemo(() => {
      if (n !== null) {
        const h = (Array.isArray(n) ? n : [
          n
        ]).filter((p) => typeof p == "string").map((p) => p.replace("+", `
`).replace(`

`, `
+`).split(`
`)), v = h.reduce((p, x) => p.concat(...x), []);
        return [
          h,
          v
        ];
      }
      return [
        [],
        []
      ];
    }, [
      n
    ]);
    return I.useEffect(() => {
      const y = (i == null ? void 0 : i.target) ?? Ym, h = (i == null ? void 0 : i.actInsideInputWithModifier) ?? true;
      if (n !== null) {
        const v = (E) => {
          var _a, _b2;
          if (s.current = E.ctrlKey || E.metaKey || E.shiftKey || E.altKey, (!s.current || s.current && !h) && $y(E)) return false;
          const z = Vm(E.code, m);
          if (f.current.add(E[z]), Lm(d, f.current, false)) {
            const C = ((_b2 = (_a = E.composedPath) == null ? void 0 : _a.call(E)) == null ? void 0 : _b2[0]) || E.target, M = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
            i.preventDefault !== false && (s.current || !M) && E.preventDefault(), c(true);
          }
        }, p = (E) => {
          const _ = Vm(E.code, m);
          Lm(d, f.current, true) ? (c(false), f.current.clear()) : f.current.delete(E[_]), E.key === "Meta" && f.current.clear(), s.current = false;
        }, x = () => {
          f.current.clear(), c(false);
        };
        return y == null ? void 0 : y.addEventListener("keydown", v), y == null ? void 0 : y.addEventListener("keyup", p), window.addEventListener("blur", x), window.addEventListener("contextmenu", x), () => {
          y == null ? void 0 : y.removeEventListener("keydown", v), y == null ? void 0 : y.removeEventListener("keyup", p), window.removeEventListener("blur", x), window.removeEventListener("contextmenu", x);
        };
      }
    }, [
      n,
      c
    ]), u;
  }
  function Lm(n, i, u) {
    return n.filter((c) => u || c.length === i.size).some((c) => c.every((s) => i.has(s)));
  }
  function Vm(n, i) {
    return i.includes(n) ? "code" : "key";
  }
  const UE = () => {
    const n = Kt();
    return I.useMemo(() => ({
      zoomIn: (i) => {
        const { panZoom: u } = n.getState();
        return u ? u.scaleBy(1.2, {
          duration: i == null ? void 0 : i.duration
        }) : Promise.resolve(false);
      },
      zoomOut: (i) => {
        const { panZoom: u } = n.getState();
        return u ? u.scaleBy(1 / 1.2, {
          duration: i == null ? void 0 : i.duration
        }) : Promise.resolve(false);
      },
      zoomTo: (i, u) => {
        const { panZoom: c } = n.getState();
        return c ? c.scaleTo(i, {
          duration: u == null ? void 0 : u.duration
        }) : Promise.resolve(false);
      },
      getZoom: () => n.getState().transform[2],
      setViewport: async (i, u) => {
        const { transform: [c, s, f], panZoom: d } = n.getState();
        return d ? (await d.setViewport({
          x: i.x ?? c,
          y: i.y ?? s,
          zoom: i.zoom ?? f
        }, u), Promise.resolve(true)) : Promise.resolve(false);
      },
      getViewport: () => {
        const [i, u, c] = n.getState().transform;
        return {
          x: i,
          y: u,
          zoom: c
        };
      },
      setCenter: async (i, u, c) => n.getState().setCenter(i, u, c),
      fitBounds: async (i, u) => {
        const { width: c, height: s, minZoom: f, maxZoom: d, panZoom: m } = n.getState(), y = qf(i, c, s, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
        return m ? (await m.setViewport(y, {
          duration: u == null ? void 0 : u.duration,
          ease: u == null ? void 0 : u.ease,
          interpolate: u == null ? void 0 : u.interpolate
        }), Promise.resolve(true)) : Promise.resolve(false);
      },
      screenToFlowPosition: (i, u = {}) => {
        const { transform: c, snapGrid: s, snapToGrid: f, domNode: d } = n.getState();
        if (!d) return i;
        const { x: m, y } = d.getBoundingClientRect(), h = {
          x: i.x - m,
          y: i.y - y
        }, v = u.snapGrid ?? s, p = u.snapToGrid ?? f;
        return bu(h, c, p, v);
      },
      flowToScreenPosition: (i) => {
        const { transform: u, domNode: c } = n.getState();
        if (!c) return i;
        const { x: s, y: f } = c.getBoundingClientRect(), d = mc(i, u);
        return {
          x: d.x + s,
          y: d.y + f
        };
      }
    }), []);
  };
  function pp(n, i) {
    const u = [], c = /* @__PURE__ */ new Map(), s = [];
    for (const f of n) if (f.type === "add") {
      s.push(f);
      continue;
    } else if (f.type === "remove" || f.type === "replace") c.set(f.id, [
      f
    ]);
    else {
      const d = c.get(f.id);
      d ? d.push(f) : c.set(f.id, [
        f
      ]);
    }
    for (const f of i) {
      const d = c.get(f.id);
      if (!d) {
        u.push(f);
        continue;
      }
      if (d[0].type === "remove") continue;
      if (d[0].type === "replace") {
        u.push({
          ...d[0].item
        });
        continue;
      }
      const m = {
        ...f
      };
      for (const y of d) jE(y, m);
      u.push(m);
    }
    return s.length && s.forEach((f) => {
      f.index !== void 0 ? u.splice(f.index, 0, {
        ...f.item
      }) : u.push({
        ...f.item
      });
    }), u;
  }
  function jE(n, i) {
    switch (n.type) {
      case "select": {
        i.selected = n.selected;
        break;
      }
      case "position": {
        typeof n.position < "u" && (i.position = n.position), typeof n.dragging < "u" && (i.dragging = n.dragging);
        break;
      }
      case "dimensions": {
        typeof n.dimensions < "u" && (i.measured = {
          ...n.dimensions
        }, n.setAttributes && ((n.setAttributes === true || n.setAttributes === "width") && (i.width = n.dimensions.width), (n.setAttributes === true || n.setAttributes === "height") && (i.height = n.dimensions.height))), typeof n.resizing == "boolean" && (i.resizing = n.resizing);
        break;
      }
    }
  }
  function vp(n, i) {
    return pp(n, i);
  }
  function xp(n, i) {
    return pp(n, i);
  }
  function Ql(n, i) {
    return {
      id: n,
      type: "select",
      selected: i
    };
  }
  function Ga(n, i = /* @__PURE__ */ new Set(), u = false) {
    const c = [];
    for (const [s, f] of n) {
      const d = i.has(s);
      !(f.selected === void 0 && !d) && f.selected !== d && (u && (f.selected = d), c.push(Ql(f.id, d)));
    }
    return c;
  }
  function qm({ items: n = [], lookup: i }) {
    var _a;
    const u = [], c = new Map(n.map((s) => [
      s.id,
      s
    ]));
    for (const [s, f] of n.entries()) {
      const d = i.get(f.id), m = ((_a = d == null ? void 0 : d.internals) == null ? void 0 : _a.userNode) ?? d;
      m !== void 0 && m !== f && u.push({
        id: f.id,
        item: f,
        type: "replace"
      }), m === void 0 && u.push({
        item: f,
        type: "add",
        index: s
      });
    }
    for (const [s] of i) c.get(s) === void 0 && u.push({
      id: s,
      type: "remove"
    });
    return u;
  }
  function Xm(n) {
    return {
      id: n.id,
      type: "remove"
    };
  }
  const Zm = (n) => c_(n), YE = (n) => Vy(n);
  function bp(n) {
    return I.forwardRef(n);
  }
  const LE = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
  function Gm(n) {
    const [i, u] = I.useState(BigInt(0)), [c] = I.useState(() => VE(() => u((s) => s + BigInt(1))));
    return LE(() => {
      const s = c.get();
      s.length && (n(s), c.reset());
    }, [
      i
    ]), c;
  }
  function VE(n) {
    let i = [];
    return {
      get: () => i,
      reset: () => {
        i = [];
      },
      push: (u) => {
        i.push(u), n();
      }
    };
  }
  const Sp = I.createContext(null);
  function qE({ children: n }) {
    const i = Kt(), u = I.useCallback((m) => {
      const { nodes: y = [], setNodes: h, hasDefaultNodes: v, onNodesChange: p, nodeLookup: x, fitViewQueued: E, onNodesChangeMiddlewareMap: _ } = i.getState();
      let z = y;
      for (const M of m) z = typeof M == "function" ? M(z) : M;
      let C = qm({
        items: z,
        lookup: x
      });
      for (const M of _.values()) C = M(C);
      v && h(z), C.length > 0 ? p == null ? void 0 : p(C) : E && window.requestAnimationFrame(() => {
        const { fitViewQueued: M, nodes: V, setNodes: S } = i.getState();
        M && S(V);
      });
    }, []), c = Gm(u), s = I.useCallback((m) => {
      const { edges: y = [], setEdges: h, hasDefaultEdges: v, onEdgesChange: p, edgeLookup: x } = i.getState();
      let E = y;
      for (const _ of m) E = typeof _ == "function" ? _(E) : _;
      v ? h(E) : p && p(qm({
        items: E,
        lookup: x
      }));
    }, []), f = Gm(s), d = I.useMemo(() => ({
      nodeQueue: c,
      edgeQueue: f
    }), []);
    return H.jsx(Sp.Provider, {
      value: d,
      children: n
    });
  }
  function XE() {
    const n = I.useContext(Sp);
    if (!n) throw new Error("useBatchContext must be used within a BatchProvider");
    return n;
  }
  const ZE = (n) => !!n.panZoom;
  function $f() {
    const n = UE(), i = Kt(), u = XE(), c = Ct(ZE), s = I.useMemo(() => {
      const f = (p) => i.getState().nodeLookup.get(p), d = (p) => {
        u.nodeQueue.push(p);
      }, m = (p) => {
        u.edgeQueue.push(p);
      }, y = (p) => {
        var _a, _b2;
        const { nodeLookup: x, nodeOrigin: E } = i.getState(), _ = Zm(p) ? p : x.get(p.id), z = _.parentId ? ky(_.position, _.measured, _.parentId, x, E) : _.position, C = {
          ..._,
          position: z,
          width: ((_a = _.measured) == null ? void 0 : _a.width) ?? _.width,
          height: ((_b2 = _.measured) == null ? void 0 : _b2.height) ?? _.height
        };
        return Wa(C);
      }, h = (p, x, E = {
        replace: false
      }) => {
        d((_) => _.map((z) => {
          if (z.id === p) {
            const C = typeof x == "function" ? x(z) : x;
            return E.replace && Zm(C) ? C : {
              ...z,
              ...C
            };
          }
          return z;
        }));
      }, v = (p, x, E = {
        replace: false
      }) => {
        m((_) => _.map((z) => {
          if (z.id === p) {
            const C = typeof x == "function" ? x(z) : x;
            return E.replace && YE(C) ? C : {
              ...z,
              ...C
            };
          }
          return z;
        }));
      };
      return {
        getNodes: () => i.getState().nodes.map((p) => ({
          ...p
        })),
        getNode: (p) => {
          var _a;
          return (_a = f(p)) == null ? void 0 : _a.internals.userNode;
        },
        getInternalNode: f,
        getEdges: () => {
          const { edges: p = [] } = i.getState();
          return p.map((x) => ({
            ...x
          }));
        },
        getEdge: (p) => i.getState().edgeLookup.get(p),
        setNodes: d,
        setEdges: m,
        addNodes: (p) => {
          const x = Array.isArray(p) ? p : [
            p
          ];
          u.nodeQueue.push((E) => [
            ...E,
            ...x
          ]);
        },
        addEdges: (p) => {
          const x = Array.isArray(p) ? p : [
            p
          ];
          u.edgeQueue.push((E) => [
            ...E,
            ...x
          ]);
        },
        toObject: () => {
          const { nodes: p = [], edges: x = [], transform: E } = i.getState(), [_, z, C] = E;
          return {
            nodes: p.map((M) => ({
              ...M
            })),
            edges: x.map((M) => ({
              ...M
            })),
            viewport: {
              x: _,
              y: z,
              zoom: C
            }
          };
        },
        deleteElements: async ({ nodes: p = [], edges: x = [] }) => {
          const { nodes: E, edges: _, onNodesDelete: z, onEdgesDelete: C, triggerNodeChanges: M, triggerEdgeChanges: V, onDelete: S, onBeforeDelete: A } = i.getState(), { nodes: X, edges: j } = await h_({
            nodesToRemove: p,
            edgesToRemove: x,
            nodes: E,
            edges: _,
            onBeforeDelete: A
          }), U = j.length > 0, L = X.length > 0;
          if (U) {
            const G = j.map(Xm);
            C == null ? void 0 : C(j), V(G);
          }
          if (L) {
            const G = X.map(Xm);
            z == null ? void 0 : z(X), M(G);
          }
          return (L || U) && (S == null ? void 0 : S({
            nodes: X,
            edges: j
          })), {
            deletedNodes: X,
            deletedEdges: j
          };
        },
        getIntersectingNodes: (p, x = true, E) => {
          const _ = mm(p), z = _ ? p : y(p), C = E !== void 0;
          return z ? (E || i.getState().nodes).filter((M) => {
            const V = i.getState().nodeLookup.get(M.id);
            if (V && !_ && (M.id === p.id || !V.internals.positionAbsolute)) return false;
            const S = Wa(C ? M : V), A = fu(S, z);
            return x && A > 0 || A >= S.width * S.height || A >= z.width * z.height;
          }) : [];
        },
        isNodeIntersecting: (p, x, E = true) => {
          const z = mm(p) ? p : y(p);
          if (!z) return false;
          const C = fu(z, x);
          return E && C > 0 || C >= x.width * x.height || C >= z.width * z.height;
        },
        updateNode: h,
        updateNodeData: (p, x, E = {
          replace: false
        }) => {
          h(p, (_) => {
            const z = typeof x == "function" ? x(_) : x;
            return E.replace ? {
              ..._,
              data: z
            } : {
              ..._,
              data: {
                ..._.data,
                ...z
              }
            };
          }, E);
        },
        updateEdge: v,
        updateEdgeData: (p, x, E = {
          replace: false
        }) => {
          v(p, (_) => {
            const z = typeof x == "function" ? x(_) : x;
            return E.replace ? {
              ..._,
              data: z
            } : {
              ..._,
              data: {
                ..._.data,
                ...z
              }
            };
          }, E);
        },
        getNodesBounds: (p) => {
          const { nodeLookup: x, nodeOrigin: E } = i.getState();
          return r_(p, {
            nodeLookup: x,
            nodeOrigin: E
          });
        },
        getHandleConnections: ({ type: p, id: x, nodeId: E }) => {
          var _a;
          return Array.from(((_a = i.getState().connectionLookup.get(`${E}-${p}${x ? `-${x}` : ""}`)) == null ? void 0 : _a.values()) ?? []);
        },
        getNodeConnections: ({ type: p, handleId: x, nodeId: E }) => {
          var _a;
          return Array.from(((_a = i.getState().connectionLookup.get(`${E}${p ? x ? `-${p}-${x}` : `-${p}` : ""}`)) == null ? void 0 : _a.values()) ?? []);
        },
        fitView: async (p) => {
          const x = i.getState().fitViewResolver ?? p_();
          return i.setState({
            fitViewQueued: true,
            fitViewOptions: p,
            fitViewResolver: x
          }), u.nodeQueue.push((E) => [
            ...E
          ]), x.promise;
        }
      };
    }, []);
    return I.useMemo(() => ({
      ...s,
      ...n,
      viewportInitialized: c
    }), [
      c
    ]);
  }
  const Qm = (n) => n.selected, GE = typeof window < "u" ? window : void 0;
  function QE({ deleteKeyCode: n, multiSelectionKeyCode: i }) {
    const u = Kt(), { deleteElements: c } = $f(), s = hu(n, {
      actInsideInputWithModifier: false
    }), f = hu(i, {
      target: GE
    });
    I.useEffect(() => {
      if (s) {
        const { edges: d, nodes: m } = u.getState();
        c({
          nodes: m.filter(Qm),
          edges: d.filter(Qm)
        }), u.setState({
          nodesSelectionActive: false
        });
      }
    }, [
      s
    ]), I.useEffect(() => {
      u.setState({
        multiSelectionActive: f
      });
    }, [
      f
    ]);
  }
  function kE(n) {
    const i = Kt();
    I.useEffect(() => {
      const u = () => {
        var _a, _b2, _c2, _d;
        if (!n.current || !(((_b2 = (_a = n.current).checkVisibility) == null ? void 0 : _b2.call(_a)) ?? true)) return false;
        const c = Xf(n.current);
        (c.height === 0 || c.width === 0) && ((_d = (_c2 = i.getState()).onError) == null ? void 0 : _d.call(_c2, "004", fn.error004())), i.setState({
          width: c.width || 500,
          height: c.height || 500
        });
      };
      if (n.current) {
        u(), window.addEventListener("resize", u);
        const c = new ResizeObserver(() => u());
        return c.observe(n.current), () => {
          window.removeEventListener("resize", u), c && n.current && c.unobserve(n.current);
        };
      }
    }, []);
  }
  const zc = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  }, KE = (n) => ({
    userSelectionActive: n.userSelectionActive,
    lib: n.lib,
    connectionInProgress: n.connection.inProgress
  });
  function $E({ onPaneContextMenu: n, zoomOnScroll: i = true, zoomOnPinch: u = true, panOnScroll: c = false, panOnScrollSpeed: s = 0.5, panOnScrollMode: f = $l.Free, zoomOnDoubleClick: d = true, panOnDrag: m = true, defaultViewport: y, translateExtent: h, minZoom: v, maxZoom: p, zoomActivationKeyCode: x, preventScrolling: E = true, children: _, noWheelClassName: z, noPanClassName: C, onViewportChange: M, isControlledViewport: V, paneClickDistance: S, selectionOnDrag: A }) {
    const X = Kt(), j = I.useRef(null), { userSelectionActive: U, lib: L, connectionInProgress: G } = Ct(KE, kt), ot = hu(x), $ = I.useRef();
    kE(j);
    const F = I.useCallback((it) => {
      M == null ? void 0 : M({
        x: it[0],
        y: it[1],
        zoom: it[2]
      }), V || X.setState({
        transform: it
      });
    }, [
      M,
      V
    ]);
    return I.useEffect(() => {
      if (j.current) {
        $.current = P_({
          domNode: j.current,
          minZoom: v,
          maxZoom: p,
          translateExtent: h,
          viewport: y,
          onDraggingChange: (w) => X.setState({
            paneDragging: w
          }),
          onPanZoomStart: (w, O) => {
            const { onViewportChangeStart: Y, onMoveStart: Q } = X.getState();
            Q == null ? void 0 : Q(w, O), Y == null ? void 0 : Y(O);
          },
          onPanZoom: (w, O) => {
            const { onViewportChange: Y, onMove: Q } = X.getState();
            Q == null ? void 0 : Q(w, O), Y == null ? void 0 : Y(O);
          },
          onPanZoomEnd: (w, O) => {
            const { onViewportChangeEnd: Y, onMoveEnd: Q } = X.getState();
            Q == null ? void 0 : Q(w, O), Y == null ? void 0 : Y(O);
          }
        });
        const { x: it, y: T, zoom: Z } = $.current.getViewport();
        return X.setState({
          panZoom: $.current,
          transform: [
            it,
            T,
            Z
          ],
          domNode: j.current.closest(".react-flow")
        }), () => {
          var _a;
          (_a = $.current) == null ? void 0 : _a.destroy();
        };
      }
    }, []), I.useEffect(() => {
      var _a;
      (_a = $.current) == null ? void 0 : _a.update({
        onPaneContextMenu: n,
        zoomOnScroll: i,
        zoomOnPinch: u,
        panOnScroll: c,
        panOnScrollSpeed: s,
        panOnScrollMode: f,
        zoomOnDoubleClick: d,
        panOnDrag: m,
        zoomActivationKeyPressed: ot,
        preventScrolling: E,
        noPanClassName: C,
        userSelectionActive: U,
        noWheelClassName: z,
        lib: L,
        onTransformChange: F,
        connectionInProgress: G,
        selectionOnDrag: A,
        paneClickDistance: S
      });
    }, [
      n,
      i,
      u,
      c,
      s,
      f,
      d,
      m,
      ot,
      E,
      C,
      U,
      z,
      L,
      F,
      G,
      A,
      S
    ]), H.jsx("div", {
      className: "react-flow__renderer",
      ref: j,
      style: zc,
      children: _
    });
  }
  const JE = (n) => ({
    userSelectionActive: n.userSelectionActive,
    userSelectionRect: n.userSelectionRect
  });
  function FE() {
    const { userSelectionActive: n, userSelectionRect: i } = Ct(JE, kt);
    return n && i ? H.jsx("div", {
      className: "react-flow__selection react-flow__container",
      style: {
        width: i.width,
        height: i.height,
        transform: `translate(${i.x}px, ${i.y}px)`
      }
    }) : null;
  }
  const gf = (n, i) => (u) => {
    u.target === i.current && (n == null ? void 0 : n(u));
  }, WE = (n) => ({
    userSelectionActive: n.userSelectionActive,
    elementsSelectable: n.elementsSelectable,
    connectionInProgress: n.connection.inProgress,
    dragging: n.paneDragging
  });
  function IE({ isSelecting: n, selectionKeyPressed: i, selectionMode: u = su.Full, panOnDrag: c, paneClickDistance: s, selectionOnDrag: f, onSelectionStart: d, onSelectionEnd: m, onPaneClick: y, onPaneContextMenu: h, onPaneScroll: v, onPaneMouseEnter: p, onPaneMouseMove: x, onPaneMouseLeave: E, children: _ }) {
    const z = Kt(), { userSelectionActive: C, elementsSelectable: M, dragging: V, connectionInProgress: S } = Ct(WE, kt), A = M && (n || C), X = I.useRef(null), j = I.useRef(), U = I.useRef(/* @__PURE__ */ new Set()), L = I.useRef(/* @__PURE__ */ new Set()), G = I.useRef(false), ot = (Y) => {
      if (G.current || S) {
        G.current = false;
        return;
      }
      y == null ? void 0 : y(Y), z.getState().resetSelectedElements(), z.setState({
        nodesSelectionActive: false
      });
    }, $ = (Y) => {
      if (Array.isArray(c) && (c == null ? void 0 : c.includes(2))) {
        Y.preventDefault();
        return;
      }
      h == null ? void 0 : h(Y);
    }, F = v ? (Y) => v(Y) : void 0, it = (Y) => {
      G.current && (Y.stopPropagation(), G.current = false);
    }, T = (Y) => {
      var _a, _b2;
      const { domNode: Q } = z.getState();
      if (j.current = Q == null ? void 0 : Q.getBoundingClientRect(), !j.current) return;
      const et = Y.target === X.current;
      if (!et && !!Y.target.closest(".nokey") || !n || !(f && et || i) || Y.button !== 0 || !Y.isPrimary) return;
      (_b2 = (_a = Y.target) == null ? void 0 : _a.setPointerCapture) == null ? void 0 : _b2.call(_a, Y.pointerId), G.current = false;
      const { x: P, y: tt } = tn(Y.nativeEvent, j.current);
      z.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: P,
          startY: tt,
          x: P,
          y: tt
        }
      }), et || (Y.stopPropagation(), Y.preventDefault());
    }, Z = (Y) => {
      const { userSelectionRect: Q, transform: et, nodeLookup: N, edgeLookup: R, connectionLookup: P, triggerNodeChanges: tt, triggerEdgeChanges: ct, defaultEdgeOptions: st, resetSelectedElements: rt } = z.getState();
      if (!j.current || !Q) return;
      const { x: ut, y: ft } = tn(Y.nativeEvent, j.current), { startX: _t, startY: bt } = Q;
      if (!G.current) {
        const Rt = i ? 0 : s;
        if (Math.hypot(ut - _t, ft - bt) <= Rt) return;
        rt(), d == null ? void 0 : d(Y);
      }
      G.current = true;
      const yt = {
        startX: _t,
        startY: bt,
        x: ut < _t ? ut : _t,
        y: ft < bt ? ft : bt,
        width: Math.abs(ut - _t),
        height: Math.abs(ft - bt)
      }, vt = U.current, Mt = L.current;
      U.current = new Set(Vf(N, yt, et, u === su.Partial, true).map((Rt) => Rt.id)), L.current = /* @__PURE__ */ new Set();
      const jt = (st == null ? void 0 : st.selectable) ?? true;
      for (const Rt of U.current) {
        const ue = P.get(Rt);
        if (ue) for (const { edgeId: Qe } of ue.values()) {
          const Ae = R.get(Qe);
          Ae && (Ae.selectable ?? jt) && L.current.add(Qe);
        }
      }
      if (!ym(vt, U.current)) {
        const Rt = Ga(N, U.current, true);
        tt(Rt);
      }
      if (!ym(Mt, L.current)) {
        const Rt = Ga(R, L.current);
        ct(Rt);
      }
      z.setState({
        userSelectionRect: yt,
        userSelectionActive: true,
        nodesSelectionActive: false
      });
    }, w = (Y) => {
      var _a, _b2;
      Y.button === 0 && ((_b2 = (_a = Y.target) == null ? void 0 : _a.releasePointerCapture) == null ? void 0 : _b2.call(_a, Y.pointerId), !C && Y.target === X.current && z.getState().userSelectionRect && (ot == null ? void 0 : ot(Y)), z.setState({
        userSelectionActive: false,
        userSelectionRect: null
      }), G.current && (m == null ? void 0 : m(Y), z.setState({
        nodesSelectionActive: U.current.size > 0
      })));
    }, O = c === true || Array.isArray(c) && c.includes(0);
    return H.jsxs("div", {
      className: le([
        "react-flow__pane",
        {
          draggable: O,
          dragging: V,
          selection: n
        }
      ]),
      onClick: A ? void 0 : gf(ot, X),
      onContextMenu: gf($, X),
      onWheel: gf(F, X),
      onPointerEnter: A ? void 0 : p,
      onPointerMove: A ? Z : x,
      onPointerUp: A ? w : void 0,
      onPointerDownCapture: A ? T : void 0,
      onClickCapture: A ? it : void 0,
      onPointerLeave: E,
      ref: X,
      style: zc,
      children: [
        _,
        H.jsx(FE, {})
      ]
    });
  }
  function Tf({ id: n, store: i, unselect: u = false, nodeRef: c }) {
    const { addSelectedNodes: s, unselectNodesAndEdges: f, multiSelectionActive: d, nodeLookup: m, onError: y } = i.getState(), h = m.get(n);
    if (!h) {
      y == null ? void 0 : y("012", fn.error012(n));
      return;
    }
    i.setState({
      nodesSelectionActive: false
    }), h.selected ? (u || h.selected && d) && (f({
      nodes: [
        h
      ],
      edges: []
    }), requestAnimationFrame(() => {
      var _a;
      return (_a = c == null ? void 0 : c.current) == null ? void 0 : _a.blur();
    })) : s([
      n
    ]);
  }
  function _p({ nodeRef: n, disabled: i = false, noDragClassName: u, handleSelector: c, nodeId: s, isSelectable: f, nodeClickDistance: d }) {
    const m = Kt(), [y, h] = I.useState(false), v = I.useRef();
    return I.useEffect(() => {
      v.current = L_({
        getStoreItems: () => m.getState(),
        onNodeMouseDown: (p) => {
          Tf({
            id: p,
            store: m,
            nodeRef: n
          });
        },
        onDragStart: () => {
          h(true);
        },
        onDragStop: () => {
          h(false);
        }
      });
    }, []), I.useEffect(() => {
      var _a, _b2;
      if (i) (_a = v.current) == null ? void 0 : _a.destroy();
      else if (n.current) return (_b2 = v.current) == null ? void 0 : _b2.update({
        noDragClassName: u,
        handleSelector: c,
        domNode: n.current,
        isSelectable: f,
        nodeId: s,
        nodeClickDistance: d
      }), () => {
        var _a2;
        (_a2 = v.current) == null ? void 0 : _a2.destroy();
      };
    }, [
      u,
      c,
      i,
      f,
      n,
      s
    ]), y;
  }
  const PE = (n) => (i) => i.selected && (i.draggable || n && typeof i.draggable > "u");
  function Ep() {
    const n = Kt();
    return I.useCallback((u) => {
      const { nodeExtent: c, snapToGrid: s, snapGrid: f, nodesDraggable: d, onError: m, updateNodePositions: y, nodeLookup: h, nodeOrigin: v } = n.getState(), p = /* @__PURE__ */ new Map(), x = PE(d), E = s ? f[0] : 5, _ = s ? f[1] : 5, z = u.direction.x * E * u.factor, C = u.direction.y * _ * u.factor;
      for (const [, M] of h) {
        if (!x(M)) continue;
        let V = {
          x: M.internals.positionAbsolute.x + z,
          y: M.internals.positionAbsolute.y + C
        };
        s && (V = xu(V, f));
        const { position: S, positionAbsolute: A } = qy({
          nodeId: M.id,
          nextPosition: V,
          nodeLookup: h,
          nodeExtent: c,
          nodeOrigin: v,
          onError: m
        });
        M.position = S, M.internals.positionAbsolute = A, p.set(M.id, M);
      }
      y(p);
    }, []);
  }
  const Jf = I.createContext(null), tw = Jf.Provider;
  Jf.Consumer;
  const wp = () => I.useContext(Jf), ew = (n) => ({
    connectOnClick: n.connectOnClick,
    noPanClassName: n.noPanClassName,
    rfId: n.rfId
  }), nw = (n, i, u) => (c) => {
    const { connectionClickStartHandle: s, connectionMode: f, connection: d } = c, { fromHandle: m, toHandle: y, isValid: h } = d, v = (y == null ? void 0 : y.nodeId) === n && (y == null ? void 0 : y.id) === i && (y == null ? void 0 : y.type) === u;
    return {
      connectingFrom: (m == null ? void 0 : m.nodeId) === n && (m == null ? void 0 : m.id) === i && (m == null ? void 0 : m.type) === u,
      connectingTo: v,
      clickConnecting: (s == null ? void 0 : s.nodeId) === n && (s == null ? void 0 : s.id) === i && (s == null ? void 0 : s.type) === u,
      isPossibleEndHandle: f === Ja.Strict ? (m == null ? void 0 : m.type) !== u : n !== (m == null ? void 0 : m.nodeId) || i !== (m == null ? void 0 : m.id),
      connectionInProcess: !!m,
      clickConnectionInProcess: !!s,
      valid: v && h
    };
  };
  function lw({ type: n = "source", position: i = mt.Top, isValidConnection: u, isConnectable: c = true, isConnectableStart: s = true, isConnectableEnd: f = true, id: d, onConnect: m, children: y, className: h, onMouseDown: v, onTouchStart: p, ...x }, E) {
    var _a, _b2;
    const _ = d || null, z = n === "target", C = Kt(), M = wp(), { connectOnClick: V, noPanClassName: S, rfId: A } = Ct(ew, kt), { connectingFrom: X, connectingTo: j, clickConnecting: U, isPossibleEndHandle: L, connectionInProcess: G, clickConnectionInProcess: ot, valid: $ } = Ct(nw(M, _, n), kt);
    M || ((_b2 = (_a = C.getState()).onError) == null ? void 0 : _b2.call(_a, "010", fn.error010()));
    const F = (Z) => {
      const { defaultEdgeOptions: w, onConnect: O, hasDefaultEdges: Y } = C.getState(), Q = {
        ...w,
        ...Z
      };
      if (Y) {
        const { edges: et, setEdges: N } = C.getState();
        N(Py(Q, et));
      }
      O == null ? void 0 : O(Q), m == null ? void 0 : m(Q);
    }, it = (Z) => {
      if (!M) return;
      const w = Jy(Z.nativeEvent);
      if (s && (w && Z.button === 0 || !w)) {
        const O = C.getState();
        zf.onPointerDown(Z.nativeEvent, {
          handleDomNode: Z.currentTarget,
          autoPanOnConnect: O.autoPanOnConnect,
          connectionMode: O.connectionMode,
          connectionRadius: O.connectionRadius,
          domNode: O.domNode,
          nodeLookup: O.nodeLookup,
          lib: O.lib,
          isTarget: z,
          handleId: _,
          nodeId: M,
          flowId: O.rfId,
          panBy: O.panBy,
          cancelConnection: O.cancelConnection,
          onConnectStart: O.onConnectStart,
          onConnectEnd: O.onConnectEnd,
          updateConnection: O.updateConnection,
          onConnect: F,
          isValidConnection: u || O.isValidConnection,
          getTransform: () => C.getState().transform,
          getFromHandle: () => C.getState().connection.fromHandle,
          autoPanSpeed: O.autoPanSpeed,
          dragThreshold: O.connectionDragThreshold
        });
      }
      w ? v == null ? void 0 : v(Z) : p == null ? void 0 : p(Z);
    }, T = (Z) => {
      const { onClickConnectStart: w, onClickConnectEnd: O, connectionClickStartHandle: Y, connectionMode: Q, isValidConnection: et, lib: N, rfId: R, nodeLookup: P, connection: tt } = C.getState();
      if (!M || !Y && !s) return;
      if (!Y) {
        w == null ? void 0 : w(Z.nativeEvent, {
          nodeId: M,
          handleId: _,
          handleType: n
        }), C.setState({
          connectionClickStartHandle: {
            nodeId: M,
            type: n,
            id: _
          }
        });
        return;
      }
      const ct = Ky(Z.target), st = u || et, { connection: rt, isValid: ut } = zf.isValid(Z.nativeEvent, {
        handle: {
          nodeId: M,
          id: _,
          type: n
        },
        connectionMode: Q,
        fromNodeId: Y.nodeId,
        fromHandleId: Y.id || null,
        fromType: Y.type,
        isValidConnection: st,
        flowId: R,
        doc: ct,
        lib: N,
        nodeLookup: P
      });
      ut && rt && F(rt);
      const ft = structuredClone(tt);
      delete ft.inProgress, ft.toPosition = ft.toHandle ? ft.toHandle.position : null, O == null ? void 0 : O(Z, ft), C.setState({
        connectionClickStartHandle: null
      });
    };
    return H.jsx("div", {
      "data-handleid": _,
      "data-nodeid": M,
      "data-handlepos": i,
      "data-id": `${A}-${M}-${_}-${n}`,
      className: le([
        "react-flow__handle",
        `react-flow__handle-${i}`,
        "nodrag",
        S,
        h,
        {
          source: !z,
          target: z,
          connectable: c,
          connectablestart: s,
          connectableend: f,
          clickconnecting: U,
          connectingfrom: X,
          connectingto: j,
          valid: $,
          connectionindicator: c && (!G || L) && (G || ot ? f : s)
        }
      ]),
      onMouseDown: it,
      onTouchStart: it,
      onClick: V ? T : void 0,
      ref: E,
      ...x,
      children: y
    });
  }
  const yc = I.memo(bp(lw));
  function aw({ data: n, isConnectable: i, sourcePosition: u = mt.Bottom }) {
    return H.jsxs(H.Fragment, {
      children: [
        n == null ? void 0 : n.label,
        H.jsx(yc, {
          type: "source",
          position: u,
          isConnectable: i
        })
      ]
    });
  }
  function iw({ data: n, isConnectable: i, targetPosition: u = mt.Top, sourcePosition: c = mt.Bottom }) {
    return H.jsxs(H.Fragment, {
      children: [
        H.jsx(yc, {
          type: "target",
          position: u,
          isConnectable: i
        }),
        n == null ? void 0 : n.label,
        H.jsx(yc, {
          type: "source",
          position: c,
          isConnectable: i
        })
      ]
    });
  }
  function uw() {
    return null;
  }
  function ow({ data: n, isConnectable: i, targetPosition: u = mt.Top }) {
    return H.jsxs(H.Fragment, {
      children: [
        H.jsx(yc, {
          type: "target",
          position: u,
          isConnectable: i
        }),
        n == null ? void 0 : n.label
      ]
    });
  }
  const pc = {
    ArrowUp: {
      x: 0,
      y: -1
    },
    ArrowDown: {
      x: 0,
      y: 1
    },
    ArrowLeft: {
      x: -1,
      y: 0
    },
    ArrowRight: {
      x: 1,
      y: 0
    }
  }, km = {
    input: aw,
    default: iw,
    output: ow,
    group: uw
  };
  function cw(n) {
    var _a, _b2, _c2, _d;
    return n.internals.handleBounds === void 0 ? {
      width: n.width ?? n.initialWidth ?? ((_a = n.style) == null ? void 0 : _a.width),
      height: n.height ?? n.initialHeight ?? ((_b2 = n.style) == null ? void 0 : _b2.height)
    } : {
      width: n.width ?? ((_c2 = n.style) == null ? void 0 : _c2.width),
      height: n.height ?? ((_d = n.style) == null ? void 0 : _d.height)
    };
  }
  const rw = (n) => {
    const { width: i, height: u, x: c, y: s } = vu(n.nodeLookup, {
      filter: (f) => !!f.selected
    });
    return {
      width: Pe(i) ? i : null,
      height: Pe(u) ? u : null,
      userSelectionActive: n.userSelectionActive,
      transformString: `translate(${n.transform[0]}px,${n.transform[1]}px) scale(${n.transform[2]}) translate(${c}px,${s}px)`
    };
  };
  function sw({ onSelectionContextMenu: n, noPanClassName: i, disableKeyboardA11y: u }) {
    const c = Kt(), { width: s, height: f, transformString: d, userSelectionActive: m } = Ct(rw, kt), y = Ep(), h = I.useRef(null);
    if (I.useEffect(() => {
      var _a;
      u || ((_a = h.current) == null ? void 0 : _a.focus({
        preventScroll: true
      }));
    }, [
      u
    ]), _p({
      nodeRef: h
    }), m || !s || !f) return null;
    const v = n ? (x) => {
      const E = c.getState().nodes.filter((_) => _.selected);
      n(x, E);
    } : void 0, p = (x) => {
      Object.prototype.hasOwnProperty.call(pc, x.key) && (x.preventDefault(), y({
        direction: pc[x.key],
        factor: x.shiftKey ? 4 : 1
      }));
    };
    return H.jsx("div", {
      className: le([
        "react-flow__nodesselection",
        "react-flow__container",
        i
      ]),
      style: {
        transform: d
      },
      children: H.jsx("div", {
        ref: h,
        className: "react-flow__nodesselection-rect",
        onContextMenu: v,
        tabIndex: u ? void 0 : -1,
        onKeyDown: u ? void 0 : p,
        style: {
          width: s,
          height: f
        }
      })
    });
  }
  const Km = typeof window < "u" ? window : void 0, fw = (n) => ({
    nodesSelectionActive: n.nodesSelectionActive,
    userSelectionActive: n.userSelectionActive
  });
  function Np({ children: n, onPaneClick: i, onPaneMouseEnter: u, onPaneMouseMove: c, onPaneMouseLeave: s, onPaneContextMenu: f, onPaneScroll: d, paneClickDistance: m, deleteKeyCode: y, selectionKeyCode: h, selectionOnDrag: v, selectionMode: p, onSelectionStart: x, onSelectionEnd: E, multiSelectionKeyCode: _, panActivationKeyCode: z, zoomActivationKeyCode: C, elementsSelectable: M, zoomOnScroll: V, zoomOnPinch: S, panOnScroll: A, panOnScrollSpeed: X, panOnScrollMode: j, zoomOnDoubleClick: U, panOnDrag: L, defaultViewport: G, translateExtent: ot, minZoom: $, maxZoom: F, preventScrolling: it, onSelectionContextMenu: T, noWheelClassName: Z, noPanClassName: w, disableKeyboardA11y: O, onViewportChange: Y, isControlledViewport: Q }) {
    const { nodesSelectionActive: et, userSelectionActive: N } = Ct(fw, kt), R = hu(h, {
      target: Km
    }), P = hu(z, {
      target: Km
    }), tt = P || L, ct = P || A, st = v && tt !== true, rt = R || N || st;
    return QE({
      deleteKeyCode: y,
      multiSelectionKeyCode: _
    }), H.jsx($E, {
      onPaneContextMenu: f,
      elementsSelectable: M,
      zoomOnScroll: V,
      zoomOnPinch: S,
      panOnScroll: ct,
      panOnScrollSpeed: X,
      panOnScrollMode: j,
      zoomOnDoubleClick: U,
      panOnDrag: !R && tt,
      defaultViewport: G,
      translateExtent: ot,
      minZoom: $,
      maxZoom: F,
      zoomActivationKeyCode: C,
      preventScrolling: it,
      noWheelClassName: Z,
      noPanClassName: w,
      onViewportChange: Y,
      isControlledViewport: Q,
      paneClickDistance: m,
      selectionOnDrag: st,
      children: H.jsxs(IE, {
        onSelectionStart: x,
        onSelectionEnd: E,
        onPaneClick: i,
        onPaneMouseEnter: u,
        onPaneMouseMove: c,
        onPaneMouseLeave: s,
        onPaneContextMenu: f,
        onPaneScroll: d,
        panOnDrag: tt,
        isSelecting: !!rt,
        selectionMode: p,
        selectionKeyPressed: R,
        paneClickDistance: m,
        selectionOnDrag: st,
        children: [
          n,
          et && H.jsx(sw, {
            onSelectionContextMenu: T,
            noPanClassName: w,
            disableKeyboardA11y: O
          })
        ]
      })
    });
  }
  Np.displayName = "FlowRenderer";
  const dw = I.memo(Np), hw = (n) => (i) => n ? Vf(i.nodeLookup, {
    x: 0,
    y: 0,
    width: i.width,
    height: i.height
  }, i.transform, true).map((u) => u.id) : Array.from(i.nodeLookup.keys());
  function gw(n) {
    return Ct(I.useCallback(hw(n), [
      n
    ]), kt);
  }
  const mw = (n) => n.updateNodeInternals;
  function yw() {
    const n = Ct(mw), [i] = I.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((u) => {
      const c = /* @__PURE__ */ new Map();
      u.forEach((s) => {
        const f = s.target.getAttribute("data-id");
        c.set(f, {
          id: f,
          nodeElement: s.target,
          force: true
        });
      }), n(c);
    }));
    return I.useEffect(() => () => {
      i == null ? void 0 : i.disconnect();
    }, [
      i
    ]), i;
  }
  function pw({ node: n, nodeType: i, hasDimensions: u, resizeObserver: c }) {
    const s = Kt(), f = I.useRef(null), d = I.useRef(null), m = I.useRef(n.sourcePosition), y = I.useRef(n.targetPosition), h = I.useRef(i), v = u && !!n.internals.handleBounds;
    return I.useEffect(() => {
      f.current && !n.hidden && (!v || d.current !== f.current) && (d.current && (c == null ? void 0 : c.unobserve(d.current)), c == null ? void 0 : c.observe(f.current), d.current = f.current);
    }, [
      v,
      n.hidden
    ]), I.useEffect(() => () => {
      d.current && (c == null ? void 0 : c.unobserve(d.current), d.current = null);
    }, []), I.useEffect(() => {
      if (f.current) {
        const p = h.current !== i, x = m.current !== n.sourcePosition, E = y.current !== n.targetPosition;
        (p || x || E) && (h.current = i, m.current = n.sourcePosition, y.current = n.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([
          [
            n.id,
            {
              id: n.id,
              nodeElement: f.current,
              force: true
            }
          ]
        ])));
      }
    }, [
      n.id,
      i,
      n.sourcePosition,
      n.targetPosition
    ]), f;
  }
  function vw({ id: n, onClick: i, onMouseEnter: u, onMouseMove: c, onMouseLeave: s, onContextMenu: f, onDoubleClick: d, nodesDraggable: m, elementsSelectable: y, nodesConnectable: h, nodesFocusable: v, resizeObserver: p, noDragClassName: x, noPanClassName: E, disableKeyboardA11y: _, rfId: z, nodeTypes: C, nodeClickDistance: M, onError: V }) {
    const { node: S, internals: A, isParent: X } = Ct((ut) => {
      const ft = ut.nodeLookup.get(n), _t = ut.parentLookup.has(n);
      return {
        node: ft,
        internals: ft.internals,
        isParent: _t
      };
    }, kt);
    let j = S.type || "default", U = (C == null ? void 0 : C[j]) || km[j];
    U === void 0 && (V == null ? void 0 : V("003", fn.error003(j)), j = "default", U = (C == null ? void 0 : C.default) || km.default);
    const L = !!(S.draggable || m && typeof S.draggable > "u"), G = !!(S.selectable || y && typeof S.selectable > "u"), ot = !!(S.connectable || h && typeof S.connectable > "u"), $ = !!(S.focusable || v && typeof S.focusable > "u"), F = Kt(), it = Qy(S), T = pw({
      node: S,
      nodeType: j,
      hasDimensions: it,
      resizeObserver: p
    }), Z = _p({
      nodeRef: T,
      disabled: S.hidden || !L,
      noDragClassName: x,
      handleSelector: S.dragHandle,
      nodeId: n,
      isSelectable: G,
      nodeClickDistance: M
    }), w = Ep();
    if (S.hidden) return null;
    const O = Vn(S), Y = cw(S), Q = G || L || i || u || c || s, et = u ? (ut) => u(ut, {
      ...A.userNode
    }) : void 0, N = c ? (ut) => c(ut, {
      ...A.userNode
    }) : void 0, R = s ? (ut) => s(ut, {
      ...A.userNode
    }) : void 0, P = f ? (ut) => f(ut, {
      ...A.userNode
    }) : void 0, tt = d ? (ut) => d(ut, {
      ...A.userNode
    }) : void 0, ct = (ut) => {
      const { selectNodesOnDrag: ft, nodeDragThreshold: _t } = F.getState();
      G && (!ft || !L || _t > 0) && Tf({
        id: n,
        store: F,
        nodeRef: T
      }), i && i(ut, {
        ...A.userNode
      });
    }, st = (ut) => {
      if (!($y(ut.nativeEvent) || _)) {
        if (Uy.includes(ut.key) && G) {
          const ft = ut.key === "Escape";
          Tf({
            id: n,
            store: F,
            unselect: ft,
            nodeRef: T
          });
        } else if (L && S.selected && Object.prototype.hasOwnProperty.call(pc, ut.key)) {
          ut.preventDefault();
          const { ariaLabelConfig: ft } = F.getState();
          F.setState({
            ariaLiveMessage: ft["node.a11yDescription.ariaLiveMessage"]({
              direction: ut.key.replace("Arrow", "").toLowerCase(),
              x: ~~A.positionAbsolute.x,
              y: ~~A.positionAbsolute.y
            })
          }), w({
            direction: pc[ut.key],
            factor: ut.shiftKey ? 4 : 1
          });
        }
      }
    }, rt = () => {
      var _a;
      if (_ || !((_a = T.current) == null ? void 0 : _a.matches(":focus-visible"))) return;
      const { transform: ut, width: ft, height: _t, autoPanOnNodeFocus: bt, setCenter: yt } = F.getState();
      if (!bt) return;
      Vf(/* @__PURE__ */ new Map([
        [
          n,
          S
        ]
      ]), {
        x: 0,
        y: 0,
        width: ft,
        height: _t
      }, ut, true).length > 0 || yt(S.position.x + O.width / 2, S.position.y + O.height / 2, {
        zoom: ut[2]
      });
    };
    return H.jsx("div", {
      className: le([
        "react-flow__node",
        `react-flow__node-${j}`,
        {
          [E]: L
        },
        S.className,
        {
          selected: S.selected,
          selectable: G,
          parent: X,
          draggable: L,
          dragging: Z
        }
      ]),
      ref: T,
      style: {
        zIndex: A.z,
        transform: `translate(${A.positionAbsolute.x}px,${A.positionAbsolute.y}px)`,
        pointerEvents: Q ? "all" : "none",
        visibility: it ? "visible" : "hidden",
        ...S.style,
        ...Y
      },
      "data-id": n,
      "data-testid": `rf__node-${n}`,
      onMouseEnter: et,
      onMouseMove: N,
      onMouseLeave: R,
      onContextMenu: P,
      onClick: ct,
      onDoubleClick: tt,
      onKeyDown: $ ? st : void 0,
      tabIndex: $ ? 0 : void 0,
      onFocus: $ ? rt : void 0,
      role: S.ariaRole ?? ($ ? "group" : void 0),
      "aria-roledescription": "node",
      "aria-describedby": _ ? void 0 : `${gp}-${z}`,
      "aria-label": S.ariaLabel,
      ...S.domAttributes,
      children: H.jsx(tw, {
        value: n,
        children: H.jsx(U, {
          id: n,
          data: S.data,
          type: j,
          positionAbsoluteX: A.positionAbsolute.x,
          positionAbsoluteY: A.positionAbsolute.y,
          selected: S.selected ?? false,
          selectable: G,
          draggable: L,
          deletable: S.deletable ?? true,
          isConnectable: ot,
          sourcePosition: S.sourcePosition,
          targetPosition: S.targetPosition,
          dragging: Z,
          dragHandle: S.dragHandle,
          zIndex: A.z,
          parentId: S.parentId,
          ...O
        })
      })
    });
  }
  var xw = I.memo(vw);
  const bw = (n) => ({
    nodesDraggable: n.nodesDraggable,
    nodesConnectable: n.nodesConnectable,
    nodesFocusable: n.nodesFocusable,
    elementsSelectable: n.elementsSelectable,
    onError: n.onError
  });
  function Mp(n) {
    const { nodesDraggable: i, nodesConnectable: u, nodesFocusable: c, elementsSelectable: s, onError: f } = Ct(bw, kt), d = gw(n.onlyRenderVisibleElements), m = yw();
    return H.jsx("div", {
      className: "react-flow__nodes",
      style: zc,
      children: d.map((y) => H.jsx(xw, {
        id: y,
        nodeTypes: n.nodeTypes,
        nodeExtent: n.nodeExtent,
        onClick: n.onNodeClick,
        onMouseEnter: n.onNodeMouseEnter,
        onMouseMove: n.onNodeMouseMove,
        onMouseLeave: n.onNodeMouseLeave,
        onContextMenu: n.onNodeContextMenu,
        onDoubleClick: n.onNodeDoubleClick,
        noDragClassName: n.noDragClassName,
        noPanClassName: n.noPanClassName,
        rfId: n.rfId,
        disableKeyboardA11y: n.disableKeyboardA11y,
        resizeObserver: m,
        nodesDraggable: i,
        nodesConnectable: u,
        nodesFocusable: c,
        elementsSelectable: s,
        nodeClickDistance: n.nodeClickDistance,
        onError: f
      }, y))
    });
  }
  Mp.displayName = "NodeRenderer";
  const Sw = I.memo(Mp);
  function _w(n) {
    return Ct(I.useCallback((u) => {
      if (!n) return u.edges.map((s) => s.id);
      const c = [];
      if (u.width && u.height) for (const s of u.edges) {
        const f = u.nodeLookup.get(s.source), d = u.nodeLookup.get(s.target);
        f && d && S_({
          sourceNode: f,
          targetNode: d,
          width: u.width,
          height: u.height,
          transform: u.transform
        }) && c.push(s.id);
      }
      return c;
    }, [
      n
    ]), kt);
  }
  const Ew = ({ color: n = "none", strokeWidth: i = 1 }) => {
    const u = {
      strokeWidth: i,
      ...n && {
        stroke: n
      }
    };
    return H.jsx("polyline", {
      className: "arrow",
      style: u,
      strokeLinecap: "round",
      fill: "none",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4"
    });
  }, ww = ({ color: n = "none", strokeWidth: i = 1 }) => {
    const u = {
      strokeWidth: i,
      ...n && {
        stroke: n,
        fill: n
      }
    };
    return H.jsx("polyline", {
      className: "arrowclosed",
      style: u,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4 -5,-4"
    });
  }, $m = {
    [hc.Arrow]: Ew,
    [hc.ArrowClosed]: ww
  };
  function Nw(n) {
    const i = Kt();
    return I.useMemo(() => {
      var _a, _b2;
      return Object.prototype.hasOwnProperty.call($m, n) ? $m[n] : ((_b2 = (_a = i.getState()).onError) == null ? void 0 : _b2.call(_a, "009", fn.error009(n)), null);
    }, [
      n
    ]);
  }
  const Mw = ({ id: n, type: i, color: u, width: c = 12.5, height: s = 12.5, markerUnits: f = "strokeWidth", strokeWidth: d, orient: m = "auto-start-reverse" }) => {
    const y = Nw(i);
    return y ? H.jsx("marker", {
      className: "react-flow__arrowhead",
      id: n,
      markerWidth: `${c}`,
      markerHeight: `${s}`,
      viewBox: "-10 -10 20 20",
      markerUnits: f,
      orient: m,
      refX: "0",
      refY: "0",
      children: H.jsx(y, {
        color: u,
        strokeWidth: d
      })
    }) : null;
  }, Ap = ({ defaultColor: n, rfId: i }) => {
    const u = Ct((f) => f.edges), c = Ct((f) => f.defaultEdgeOptions), s = I.useMemo(() => z_(u, {
      id: i,
      defaultColor: n,
      defaultMarkerStart: c == null ? void 0 : c.markerStart,
      defaultMarkerEnd: c == null ? void 0 : c.markerEnd
    }), [
      u,
      c,
      i,
      n
    ]);
    return s.length ? H.jsx("svg", {
      className: "react-flow__marker",
      "aria-hidden": "true",
      children: H.jsx("defs", {
        children: s.map((f) => H.jsx(Mw, {
          id: f.id,
          type: f.type,
          color: f.color,
          width: f.width,
          height: f.height,
          markerUnits: f.markerUnits,
          strokeWidth: f.strokeWidth,
          orient: f.orient
        }, f.id))
      })
    }) : null;
  };
  Ap.displayName = "MarkerDefinitions";
  var Aw = I.memo(Ap);
  function zp({ x: n, y: i, label: u, labelStyle: c, labelShowBg: s = true, labelBgStyle: f, labelBgPadding: d = [
    2,
    4
  ], labelBgBorderRadius: m = 2, children: y, className: h, ...v }) {
    const [p, x] = I.useState({
      x: 1,
      y: 0,
      width: 0,
      height: 0
    }), E = le([
      "react-flow__edge-textwrapper",
      h
    ]), _ = I.useRef(null);
    return I.useEffect(() => {
      if (_.current) {
        const z = _.current.getBBox();
        x({
          x: z.x,
          y: z.y,
          width: z.width,
          height: z.height
        });
      }
    }, [
      u
    ]), u ? H.jsxs("g", {
      transform: `translate(${n - p.width / 2} ${i - p.height / 2})`,
      className: E,
      visibility: p.width ? "visible" : "hidden",
      ...v,
      children: [
        s && H.jsx("rect", {
          width: p.width + 2 * d[0],
          x: -d[0],
          y: -d[1],
          height: p.height + 2 * d[1],
          className: "react-flow__edge-textbg",
          style: f,
          rx: m,
          ry: m
        }),
        H.jsx("text", {
          className: "react-flow__edge-text",
          y: p.height / 2,
          dy: "0.3em",
          ref: _,
          style: c,
          children: u
        }),
        y
      ]
    }) : null;
  }
  zp.displayName = "EdgeText";
  const zw = I.memo(zp);
  function Tc({ path: n, labelX: i, labelY: u, label: c, labelStyle: s, labelShowBg: f, labelBgStyle: d, labelBgPadding: m, labelBgBorderRadius: y, interactionWidth: h = 20, ...v }) {
    return H.jsxs(H.Fragment, {
      children: [
        H.jsx("path", {
          ...v,
          d: n,
          fill: "none",
          className: le([
            "react-flow__edge-path",
            v.className
          ])
        }),
        h ? H.jsx("path", {
          d: n,
          fill: "none",
          strokeOpacity: 0,
          strokeWidth: h,
          className: "react-flow__edge-interaction"
        }) : null,
        c && Pe(i) && Pe(u) ? H.jsx(zw, {
          x: i,
          y: u,
          label: c,
          labelStyle: s,
          labelShowBg: f,
          labelBgStyle: d,
          labelBgPadding: m,
          labelBgBorderRadius: y
        }) : null
      ]
    });
  }
  function Jm({ pos: n, x1: i, y1: u, x2: c, y2: s }) {
    return n === mt.Left || n === mt.Right ? [
      0.5 * (i + c),
      u
    ] : [
      i,
      0.5 * (u + s)
    ];
  }
  function Tp({ sourceX: n, sourceY: i, sourcePosition: u = mt.Bottom, targetX: c, targetY: s, targetPosition: f = mt.Top }) {
    const [d, m] = Jm({
      pos: u,
      x1: n,
      y1: i,
      x2: c,
      y2: s
    }), [y, h] = Jm({
      pos: f,
      x1: c,
      y1: s,
      x2: n,
      y2: i
    }), [v, p, x, E] = Fy({
      sourceX: n,
      sourceY: i,
      targetX: c,
      targetY: s,
      sourceControlX: d,
      sourceControlY: m,
      targetControlX: y,
      targetControlY: h
    });
    return [
      `M${n},${i} C${d},${m} ${y},${h} ${c},${s}`,
      v,
      p,
      x,
      E
    ];
  }
  function Cp(n) {
    return I.memo(({ id: i, sourceX: u, sourceY: c, targetX: s, targetY: f, sourcePosition: d, targetPosition: m, label: y, labelStyle: h, labelShowBg: v, labelBgStyle: p, labelBgPadding: x, labelBgBorderRadius: E, style: _, markerEnd: z, markerStart: C, interactionWidth: M }) => {
      const [V, S, A] = Tp({
        sourceX: u,
        sourceY: c,
        sourcePosition: d,
        targetX: s,
        targetY: f,
        targetPosition: m
      }), X = n.isInternal ? void 0 : i;
      return H.jsx(Tc, {
        id: X,
        path: V,
        labelX: S,
        labelY: A,
        label: y,
        labelStyle: h,
        labelShowBg: v,
        labelBgStyle: p,
        labelBgPadding: x,
        labelBgBorderRadius: E,
        style: _,
        markerEnd: z,
        markerStart: C,
        interactionWidth: M
      });
    });
  }
  const Tw = Cp({
    isInternal: false
  }), Dp = Cp({
    isInternal: true
  });
  Tw.displayName = "SimpleBezierEdge";
  Dp.displayName = "SimpleBezierEdgeInternal";
  function Op(n) {
    return I.memo(({ id: i, sourceX: u, sourceY: c, targetX: s, targetY: f, label: d, labelStyle: m, labelShowBg: y, labelBgStyle: h, labelBgPadding: v, labelBgBorderRadius: p, style: x, sourcePosition: E = mt.Bottom, targetPosition: _ = mt.Top, markerEnd: z, markerStart: C, pathOptions: M, interactionWidth: V }) => {
      const [S, A, X] = Nf({
        sourceX: u,
        sourceY: c,
        sourcePosition: E,
        targetX: s,
        targetY: f,
        targetPosition: _,
        borderRadius: M == null ? void 0 : M.borderRadius,
        offset: M == null ? void 0 : M.offset,
        stepPosition: M == null ? void 0 : M.stepPosition
      }), j = n.isInternal ? void 0 : i;
      return H.jsx(Tc, {
        id: j,
        path: S,
        labelX: A,
        labelY: X,
        label: d,
        labelStyle: m,
        labelShowBg: y,
        labelBgStyle: h,
        labelBgPadding: v,
        labelBgBorderRadius: p,
        style: x,
        markerEnd: z,
        markerStart: C,
        interactionWidth: V
      });
    });
  }
  const Hp = Op({
    isInternal: false
  }), Rp = Op({
    isInternal: true
  });
  Hp.displayName = "SmoothStepEdge";
  Rp.displayName = "SmoothStepEdgeInternal";
  function Bp(n) {
    return I.memo(({ id: i, ...u }) => {
      var _a;
      const c = n.isInternal ? void 0 : i;
      return H.jsx(Hp, {
        ...u,
        id: c,
        pathOptions: I.useMemo(() => {
          var _a2;
          return {
            borderRadius: 0,
            offset: (_a2 = u.pathOptions) == null ? void 0 : _a2.offset
          };
        }, [
          (_a = u.pathOptions) == null ? void 0 : _a.offset
        ])
      });
    });
  }
  const Cw = Bp({
    isInternal: false
  }), Up = Bp({
    isInternal: true
  });
  Cw.displayName = "StepEdge";
  Up.displayName = "StepEdgeInternal";
  function jp(n) {
    return I.memo(({ id: i, sourceX: u, sourceY: c, targetX: s, targetY: f, label: d, labelStyle: m, labelShowBg: y, labelBgStyle: h, labelBgPadding: v, labelBgBorderRadius: p, style: x, markerEnd: E, markerStart: _, interactionWidth: z }) => {
      const [C, M, V] = tp({
        sourceX: u,
        sourceY: c,
        targetX: s,
        targetY: f
      }), S = n.isInternal ? void 0 : i;
      return H.jsx(Tc, {
        id: S,
        path: C,
        labelX: M,
        labelY: V,
        label: d,
        labelStyle: m,
        labelShowBg: y,
        labelBgStyle: h,
        labelBgPadding: v,
        labelBgBorderRadius: p,
        style: x,
        markerEnd: E,
        markerStart: _,
        interactionWidth: z
      });
    });
  }
  const Dw = jp({
    isInternal: false
  }), Yp = jp({
    isInternal: true
  });
  Dw.displayName = "StraightEdge";
  Yp.displayName = "StraightEdgeInternal";
  function Lp(n) {
    return I.memo(({ id: i, sourceX: u, sourceY: c, targetX: s, targetY: f, sourcePosition: d = mt.Bottom, targetPosition: m = mt.Top, label: y, labelStyle: h, labelShowBg: v, labelBgStyle: p, labelBgPadding: x, labelBgBorderRadius: E, style: _, markerEnd: z, markerStart: C, pathOptions: M, interactionWidth: V }) => {
      const [S, A, X] = Wy({
        sourceX: u,
        sourceY: c,
        sourcePosition: d,
        targetX: s,
        targetY: f,
        targetPosition: m,
        curvature: M == null ? void 0 : M.curvature
      }), j = n.isInternal ? void 0 : i;
      return H.jsx(Tc, {
        id: j,
        path: S,
        labelX: A,
        labelY: X,
        label: y,
        labelStyle: h,
        labelShowBg: v,
        labelBgStyle: p,
        labelBgPadding: x,
        labelBgBorderRadius: E,
        style: _,
        markerEnd: z,
        markerStart: C,
        interactionWidth: V
      });
    });
  }
  const Ow = Lp({
    isInternal: false
  }), Vp = Lp({
    isInternal: true
  });
  Ow.displayName = "BezierEdge";
  Vp.displayName = "BezierEdgeInternal";
  const Fm = {
    default: Vp,
    straight: Yp,
    step: Up,
    smoothstep: Rp,
    simplebezier: Dp
  }, Wm = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null
  }, Hw = (n, i, u) => u === mt.Left ? n - i : u === mt.Right ? n + i : n, Rw = (n, i, u) => u === mt.Top ? n - i : u === mt.Bottom ? n + i : n, Im = "react-flow__edgeupdater";
  function Pm({ position: n, centerX: i, centerY: u, radius: c = 10, onMouseDown: s, onMouseEnter: f, onMouseOut: d, type: m }) {
    return H.jsx("circle", {
      onMouseDown: s,
      onMouseEnter: f,
      onMouseOut: d,
      className: le([
        Im,
        `${Im}-${m}`
      ]),
      cx: Hw(i, c, n),
      cy: Rw(u, c, n),
      r: c,
      stroke: "transparent",
      fill: "transparent"
    });
  }
  function Bw({ isReconnectable: n, reconnectRadius: i, edge: u, sourceX: c, sourceY: s, targetX: f, targetY: d, sourcePosition: m, targetPosition: y, onReconnect: h, onReconnectStart: v, onReconnectEnd: p, setReconnecting: x, setUpdateHover: E }) {
    const _ = Kt(), z = (A, X) => {
      if (A.button !== 0) return;
      const { autoPanOnConnect: j, domNode: U, isValidConnection: L, connectionMode: G, connectionRadius: ot, lib: $, onConnectStart: F, onConnectEnd: it, cancelConnection: T, nodeLookup: Z, rfId: w, panBy: O, updateConnection: Y } = _.getState(), Q = X.type === "target", et = (P, tt) => {
        x(false), p == null ? void 0 : p(P, u, X.type, tt);
      }, N = (P) => h == null ? void 0 : h(u, P), R = (P, tt) => {
        x(true), v == null ? void 0 : v(A, u, X.type), F == null ? void 0 : F(P, tt);
      };
      zf.onPointerDown(A.nativeEvent, {
        autoPanOnConnect: j,
        connectionMode: G,
        connectionRadius: ot,
        domNode: U,
        handleId: X.id,
        nodeId: X.nodeId,
        nodeLookup: Z,
        isTarget: Q,
        edgeUpdaterType: X.type,
        lib: $,
        flowId: w,
        cancelConnection: T,
        panBy: O,
        isValidConnection: L,
        onConnect: N,
        onConnectStart: R,
        onConnectEnd: it,
        onReconnectEnd: et,
        updateConnection: Y,
        getTransform: () => _.getState().transform,
        getFromHandle: () => _.getState().connection.fromHandle,
        dragThreshold: _.getState().connectionDragThreshold,
        handleDomNode: A.currentTarget
      });
    }, C = (A) => z(A, {
      nodeId: u.target,
      id: u.targetHandle ?? null,
      type: "target"
    }), M = (A) => z(A, {
      nodeId: u.source,
      id: u.sourceHandle ?? null,
      type: "source"
    }), V = () => E(true), S = () => E(false);
    return H.jsxs(H.Fragment, {
      children: [
        (n === true || n === "source") && H.jsx(Pm, {
          position: m,
          centerX: c,
          centerY: s,
          radius: i,
          onMouseDown: C,
          onMouseEnter: V,
          onMouseOut: S,
          type: "source"
        }),
        (n === true || n === "target") && H.jsx(Pm, {
          position: y,
          centerX: f,
          centerY: d,
          radius: i,
          onMouseDown: M,
          onMouseEnter: V,
          onMouseOut: S,
          type: "target"
        })
      ]
    });
  }
  function Uw({ id: n, edgesFocusable: i, edgesReconnectable: u, elementsSelectable: c, onClick: s, onDoubleClick: f, onContextMenu: d, onMouseEnter: m, onMouseMove: y, onMouseLeave: h, reconnectRadius: v, onReconnect: p, onReconnectStart: x, onReconnectEnd: E, rfId: _, edgeTypes: z, noPanClassName: C, onError: M, disableKeyboardA11y: V }) {
    let S = Ct((yt) => yt.edgeLookup.get(n));
    const A = Ct((yt) => yt.defaultEdgeOptions);
    S = A ? {
      ...A,
      ...S
    } : S;
    let X = S.type || "default", j = (z == null ? void 0 : z[X]) || Fm[X];
    j === void 0 && (M == null ? void 0 : M("011", fn.error011(X)), X = "default", j = (z == null ? void 0 : z.default) || Fm.default);
    const U = !!(S.focusable || i && typeof S.focusable > "u"), L = typeof p < "u" && (S.reconnectable || u && typeof S.reconnectable > "u"), G = !!(S.selectable || c && typeof S.selectable > "u"), ot = I.useRef(null), [$, F] = I.useState(false), [it, T] = I.useState(false), Z = Kt(), { zIndex: w, sourceX: O, sourceY: Y, targetX: Q, targetY: et, sourcePosition: N, targetPosition: R } = Ct(I.useCallback((yt) => {
      const vt = yt.nodeLookup.get(S.source), Mt = yt.nodeLookup.get(S.target);
      if (!vt || !Mt) return {
        zIndex: S.zIndex,
        ...Wm
      };
      const jt = A_({
        id: n,
        sourceNode: vt,
        targetNode: Mt,
        sourceHandle: S.sourceHandle || null,
        targetHandle: S.targetHandle || null,
        connectionMode: yt.connectionMode,
        onError: M
      });
      return {
        zIndex: b_({
          selected: S.selected,
          zIndex: S.zIndex,
          sourceNode: vt,
          targetNode: Mt,
          elevateOnSelect: yt.elevateEdgesOnSelect,
          zIndexMode: yt.zIndexMode
        }),
        ...jt || Wm
      };
    }, [
      S.source,
      S.target,
      S.sourceHandle,
      S.targetHandle,
      S.selected,
      S.zIndex
    ]), kt), P = I.useMemo(() => S.markerStart ? `url('#${Mf(S.markerStart, _)}')` : void 0, [
      S.markerStart,
      _
    ]), tt = I.useMemo(() => S.markerEnd ? `url('#${Mf(S.markerEnd, _)}')` : void 0, [
      S.markerEnd,
      _
    ]);
    if (S.hidden || O === null || Y === null || Q === null || et === null) return null;
    const ct = (yt) => {
      var _a;
      const { addSelectedEdges: vt, unselectNodesAndEdges: Mt, multiSelectionActive: jt } = Z.getState();
      G && (Z.setState({
        nodesSelectionActive: false
      }), S.selected && jt ? (Mt({
        nodes: [],
        edges: [
          S
        ]
      }), (_a = ot.current) == null ? void 0 : _a.blur()) : vt([
        n
      ])), s && s(yt, S);
    }, st = f ? (yt) => {
      f(yt, {
        ...S
      });
    } : void 0, rt = d ? (yt) => {
      d(yt, {
        ...S
      });
    } : void 0, ut = m ? (yt) => {
      m(yt, {
        ...S
      });
    } : void 0, ft = y ? (yt) => {
      y(yt, {
        ...S
      });
    } : void 0, _t = h ? (yt) => {
      h(yt, {
        ...S
      });
    } : void 0, bt = (yt) => {
      var _a;
      if (!V && Uy.includes(yt.key) && G) {
        const { unselectNodesAndEdges: vt, addSelectedEdges: Mt } = Z.getState();
        yt.key === "Escape" ? ((_a = ot.current) == null ? void 0 : _a.blur(), vt({
          edges: [
            S
          ]
        })) : Mt([
          n
        ]);
      }
    };
    return H.jsx("svg", {
      style: {
        zIndex: w
      },
      children: H.jsxs("g", {
        className: le([
          "react-flow__edge",
          `react-flow__edge-${X}`,
          S.className,
          C,
          {
            selected: S.selected,
            animated: S.animated,
            inactive: !G && !s,
            updating: $,
            selectable: G
          }
        ]),
        onClick: ct,
        onDoubleClick: st,
        onContextMenu: rt,
        onMouseEnter: ut,
        onMouseMove: ft,
        onMouseLeave: _t,
        onKeyDown: U ? bt : void 0,
        tabIndex: U ? 0 : void 0,
        role: S.ariaRole ?? (U ? "group" : "img"),
        "aria-roledescription": "edge",
        "data-id": n,
        "data-testid": `rf__edge-${n}`,
        "aria-label": S.ariaLabel === null ? void 0 : S.ariaLabel || `Edge from ${S.source} to ${S.target}`,
        "aria-describedby": U ? `${mp}-${_}` : void 0,
        ref: ot,
        ...S.domAttributes,
        children: [
          !it && H.jsx(j, {
            id: n,
            source: S.source,
            target: S.target,
            type: S.type,
            selected: S.selected,
            animated: S.animated,
            selectable: G,
            deletable: S.deletable ?? true,
            label: S.label,
            labelStyle: S.labelStyle,
            labelShowBg: S.labelShowBg,
            labelBgStyle: S.labelBgStyle,
            labelBgPadding: S.labelBgPadding,
            labelBgBorderRadius: S.labelBgBorderRadius,
            sourceX: O,
            sourceY: Y,
            targetX: Q,
            targetY: et,
            sourcePosition: N,
            targetPosition: R,
            data: S.data,
            style: S.style,
            sourceHandleId: S.sourceHandle,
            targetHandleId: S.targetHandle,
            markerStart: P,
            markerEnd: tt,
            pathOptions: "pathOptions" in S ? S.pathOptions : void 0,
            interactionWidth: S.interactionWidth
          }),
          L && H.jsx(Bw, {
            edge: S,
            isReconnectable: L,
            reconnectRadius: v,
            onReconnect: p,
            onReconnectStart: x,
            onReconnectEnd: E,
            sourceX: O,
            sourceY: Y,
            targetX: Q,
            targetY: et,
            sourcePosition: N,
            targetPosition: R,
            setUpdateHover: F,
            setReconnecting: T
          })
        ]
      })
    });
  }
  var jw = I.memo(Uw);
  const Yw = (n) => ({
    edgesFocusable: n.edgesFocusable,
    edgesReconnectable: n.edgesReconnectable,
    elementsSelectable: n.elementsSelectable,
    connectionMode: n.connectionMode,
    onError: n.onError
  });
  function qp({ defaultMarkerColor: n, onlyRenderVisibleElements: i, rfId: u, edgeTypes: c, noPanClassName: s, onReconnect: f, onEdgeContextMenu: d, onEdgeMouseEnter: m, onEdgeMouseMove: y, onEdgeMouseLeave: h, onEdgeClick: v, reconnectRadius: p, onEdgeDoubleClick: x, onReconnectStart: E, onReconnectEnd: _, disableKeyboardA11y: z }) {
    const { edgesFocusable: C, edgesReconnectable: M, elementsSelectable: V, onError: S } = Ct(Yw, kt), A = _w(i);
    return H.jsxs("div", {
      className: "react-flow__edges",
      children: [
        H.jsx(Aw, {
          defaultColor: n,
          rfId: u
        }),
        A.map((X) => H.jsx(jw, {
          id: X,
          edgesFocusable: C,
          edgesReconnectable: M,
          elementsSelectable: V,
          noPanClassName: s,
          onReconnect: f,
          onContextMenu: d,
          onMouseEnter: m,
          onMouseMove: y,
          onMouseLeave: h,
          onClick: v,
          reconnectRadius: p,
          onDoubleClick: x,
          onReconnectStart: E,
          onReconnectEnd: _,
          rfId: u,
          onError: S,
          edgeTypes: c,
          disableKeyboardA11y: z
        }, X))
      ]
    });
  }
  qp.displayName = "EdgeRenderer";
  const Lw = I.memo(qp), Vw = (n) => `translate(${n.transform[0]}px,${n.transform[1]}px) scale(${n.transform[2]})`;
  function qw({ children: n }) {
    const i = Ct(Vw);
    return H.jsx("div", {
      className: "react-flow__viewport xyflow__viewport react-flow__container",
      style: {
        transform: i
      },
      children: n
    });
  }
  function Xw(n) {
    const i = $f(), u = I.useRef(false);
    I.useEffect(() => {
      !u.current && i.viewportInitialized && n && (setTimeout(() => n(i), 1), u.current = true);
    }, [
      n,
      i.viewportInitialized
    ]);
  }
  const Zw = (n) => {
    var _a;
    return (_a = n.panZoom) == null ? void 0 : _a.syncViewport;
  };
  function Gw(n) {
    const i = Ct(Zw), u = Kt();
    return I.useEffect(() => {
      n && (i == null ? void 0 : i(n), u.setState({
        transform: [
          n.x,
          n.y,
          n.zoom
        ]
      }));
    }, [
      n,
      i
    ]), null;
  }
  function Qw(n) {
    return n.connection.inProgress ? {
      ...n.connection,
      to: bu(n.connection.to, n.transform)
    } : {
      ...n.connection
    };
  }
  function kw(n) {
    return Qw;
  }
  function Kw(n) {
    const i = kw();
    return Ct(i, kt);
  }
  const $w = (n) => ({
    nodesConnectable: n.nodesConnectable,
    isValid: n.connection.isValid,
    inProgress: n.connection.inProgress,
    width: n.width,
    height: n.height
  });
  function Jw({ containerStyle: n, style: i, type: u, component: c }) {
    const { nodesConnectable: s, width: f, height: d, isValid: m, inProgress: y } = Ct($w, kt);
    return !(f && s && y) ? null : H.jsx("svg", {
      style: n,
      width: f,
      height: d,
      className: "react-flow__connectionline react-flow__container",
      children: H.jsx("g", {
        className: le([
          "react-flow__connection",
          Ly(m)
        ]),
        children: H.jsx(Xp, {
          style: i,
          type: u,
          CustomComponent: c,
          isValid: m
        })
      })
    });
  }
  const Xp = ({ style: n, type: i = vl.Bezier, CustomComponent: u, isValid: c }) => {
    const { inProgress: s, from: f, fromNode: d, fromHandle: m, fromPosition: y, to: h, toNode: v, toHandle: p, toPosition: x, pointer: E } = Kw();
    if (!s) return;
    if (u) return H.jsx(u, {
      connectionLineType: i,
      connectionLineStyle: n,
      fromNode: d,
      fromHandle: m,
      fromX: f.x,
      fromY: f.y,
      toX: h.x,
      toY: h.y,
      fromPosition: y,
      toPosition: x,
      connectionStatus: Ly(c),
      toNode: v,
      toHandle: p,
      pointer: E
    });
    let _ = "";
    const z = {
      sourceX: f.x,
      sourceY: f.y,
      sourcePosition: y,
      targetX: h.x,
      targetY: h.y,
      targetPosition: x
    };
    switch (i) {
      case vl.Bezier:
        [_] = Wy(z);
        break;
      case vl.SimpleBezier:
        [_] = Tp(z);
        break;
      case vl.Step:
        [_] = Nf({
          ...z,
          borderRadius: 0
        });
        break;
      case vl.SmoothStep:
        [_] = Nf(z);
        break;
      default:
        [_] = tp(z);
    }
    return H.jsx("path", {
      d: _,
      fill: "none",
      className: "react-flow__connection-path",
      style: n
    });
  };
  Xp.displayName = "ConnectionLine";
  const Fw = {};
  function ty(n = Fw) {
    I.useRef(n), Kt(), I.useEffect(() => {
    }, [
      n
    ]);
  }
  function Ww() {
    Kt(), I.useRef(false), I.useEffect(() => {
    }, []);
  }
  function Zp({ nodeTypes: n, edgeTypes: i, onInit: u, onNodeClick: c, onEdgeClick: s, onNodeDoubleClick: f, onEdgeDoubleClick: d, onNodeMouseEnter: m, onNodeMouseMove: y, onNodeMouseLeave: h, onNodeContextMenu: v, onSelectionContextMenu: p, onSelectionStart: x, onSelectionEnd: E, connectionLineType: _, connectionLineStyle: z, connectionLineComponent: C, connectionLineContainerStyle: M, selectionKeyCode: V, selectionOnDrag: S, selectionMode: A, multiSelectionKeyCode: X, panActivationKeyCode: j, zoomActivationKeyCode: U, deleteKeyCode: L, onlyRenderVisibleElements: G, elementsSelectable: ot, defaultViewport: $, translateExtent: F, minZoom: it, maxZoom: T, preventScrolling: Z, defaultMarkerColor: w, zoomOnScroll: O, zoomOnPinch: Y, panOnScroll: Q, panOnScrollSpeed: et, panOnScrollMode: N, zoomOnDoubleClick: R, panOnDrag: P, onPaneClick: tt, onPaneMouseEnter: ct, onPaneMouseMove: st, onPaneMouseLeave: rt, onPaneScroll: ut, onPaneContextMenu: ft, paneClickDistance: _t, nodeClickDistance: bt, onEdgeContextMenu: yt, onEdgeMouseEnter: vt, onEdgeMouseMove: Mt, onEdgeMouseLeave: jt, reconnectRadius: Rt, onReconnect: ue, onReconnectStart: Qe, onReconnectEnd: Ae, noDragClassName: ke, noWheelClassName: hn, noPanClassName: bl, disableKeyboardA11y: Sl, nodeExtent: ce, rfId: ta, viewport: gn, onViewportChange: qn }) {
    return ty(n), ty(i), Ww(), Xw(u), Gw(gn), H.jsx(dw, {
      onPaneClick: tt,
      onPaneMouseEnter: ct,
      onPaneMouseMove: st,
      onPaneMouseLeave: rt,
      onPaneContextMenu: ft,
      onPaneScroll: ut,
      paneClickDistance: _t,
      deleteKeyCode: L,
      selectionKeyCode: V,
      selectionOnDrag: S,
      selectionMode: A,
      onSelectionStart: x,
      onSelectionEnd: E,
      multiSelectionKeyCode: X,
      panActivationKeyCode: j,
      zoomActivationKeyCode: U,
      elementsSelectable: ot,
      zoomOnScroll: O,
      zoomOnPinch: Y,
      zoomOnDoubleClick: R,
      panOnScroll: Q,
      panOnScrollSpeed: et,
      panOnScrollMode: N,
      panOnDrag: P,
      defaultViewport: $,
      translateExtent: F,
      minZoom: it,
      maxZoom: T,
      onSelectionContextMenu: p,
      preventScrolling: Z,
      noDragClassName: ke,
      noWheelClassName: hn,
      noPanClassName: bl,
      disableKeyboardA11y: Sl,
      onViewportChange: qn,
      isControlledViewport: !!gn,
      children: H.jsxs(qw, {
        children: [
          H.jsx(Lw, {
            edgeTypes: i,
            onEdgeClick: s,
            onEdgeDoubleClick: d,
            onReconnect: ue,
            onReconnectStart: Qe,
            onReconnectEnd: Ae,
            onlyRenderVisibleElements: G,
            onEdgeContextMenu: yt,
            onEdgeMouseEnter: vt,
            onEdgeMouseMove: Mt,
            onEdgeMouseLeave: jt,
            reconnectRadius: Rt,
            defaultMarkerColor: w,
            noPanClassName: bl,
            disableKeyboardA11y: Sl,
            rfId: ta
          }),
          H.jsx(Jw, {
            style: z,
            type: _,
            component: C,
            containerStyle: M
          }),
          H.jsx("div", {
            className: "react-flow__edgelabel-renderer"
          }),
          H.jsx(Sw, {
            nodeTypes: n,
            onNodeClick: c,
            onNodeDoubleClick: f,
            onNodeMouseEnter: m,
            onNodeMouseMove: y,
            onNodeMouseLeave: h,
            onNodeContextMenu: v,
            nodeClickDistance: bt,
            onlyRenderVisibleElements: G,
            noPanClassName: bl,
            noDragClassName: ke,
            disableKeyboardA11y: Sl,
            nodeExtent: ce,
            rfId: ta
          }),
          H.jsx("div", {
            className: "react-flow__viewport-portal"
          })
        ]
      })
    });
  }
  Zp.displayName = "GraphView";
  const Iw = I.memo(Zp), ey = ({ nodes: n, edges: i, defaultNodes: u, defaultEdges: c, width: s, height: f, fitView: d, fitViewOptions: m, minZoom: y = 0.5, maxZoom: h = 2, nodeOrigin: v, nodeExtent: p, zIndexMode: x = "basic" } = {}) => {
    const E = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), M = c ?? i ?? [], V = u ?? n ?? [], S = v ?? [
      0,
      0
    ], A = p ?? ru;
    lp(z, C, M);
    const X = Af(V, E, _, {
      nodeOrigin: S,
      nodeExtent: A,
      zIndexMode: x
    });
    let j = [
      0,
      0,
      1
    ];
    if (d && s && f) {
      const U = vu(E, {
        filter: ($) => !!(($.width || $.initialWidth) && ($.height || $.initialHeight))
      }), { x: L, y: G, zoom: ot } = qf(U, s, f, y, h, (m == null ? void 0 : m.padding) ?? 0.1);
      j = [
        L,
        G,
        ot
      ];
    }
    return {
      rfId: "1",
      width: s ?? 0,
      height: f ?? 0,
      transform: j,
      nodes: V,
      nodesInitialized: X,
      nodeLookup: E,
      parentLookup: _,
      edges: M,
      edgeLookup: C,
      connectionLookup: z,
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: u !== void 0,
      hasDefaultEdges: c !== void 0,
      panZoom: null,
      minZoom: y,
      maxZoom: h,
      translateExtent: ru,
      nodeExtent: A,
      nodesSelectionActive: false,
      userSelectionActive: false,
      userSelectionRect: null,
      connectionMode: Ja.Strict,
      domNode: null,
      paneDragging: false,
      noPanClassName: "nopan",
      nodeOrigin: S,
      nodeDragThreshold: 1,
      connectionDragThreshold: 1,
      snapGrid: [
        15,
        15
      ],
      snapToGrid: false,
      nodesDraggable: true,
      nodesConnectable: true,
      nodesFocusable: true,
      edgesFocusable: true,
      edgesReconnectable: true,
      elementsSelectable: true,
      elevateNodesOnSelect: true,
      elevateEdgesOnSelect: true,
      selectNodesOnDrag: true,
      multiSelectionActive: false,
      fitViewQueued: d ?? false,
      fitViewOptions: m,
      fitViewResolver: null,
      connection: {
        ...Yy
      },
      connectionClickStartHandle: null,
      connectOnClick: true,
      ariaLiveMessage: "",
      autoPanOnConnect: true,
      autoPanOnNodeDrag: true,
      autoPanOnNodeFocus: true,
      autoPanSpeed: 15,
      connectionRadius: 20,
      onError: g_,
      isValidConnection: void 0,
      onSelectionChangeHandlers: [],
      lib: "react",
      debug: false,
      ariaLabelConfig: jy,
      zIndexMode: x,
      onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
      onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
    };
  }, Pw = ({ nodes: n, edges: i, defaultNodes: u, defaultEdges: c, width: s, height: f, fitView: d, fitViewOptions: m, minZoom: y, maxZoom: h, nodeOrigin: v, nodeExtent: p, zIndexMode: x }) => pE((E, _) => {
    async function z() {
      const { nodeLookup: C, panZoom: M, fitViewOptions: V, fitViewResolver: S, width: A, height: X, minZoom: j, maxZoom: U } = _();
      M && (await d_({
        nodes: C,
        width: A,
        height: X,
        panZoom: M,
        minZoom: j,
        maxZoom: U
      }, V), S == null ? void 0 : S.resolve(true), E({
        fitViewResolver: null
      }));
    }
    return {
      ...ey({
        nodes: n,
        edges: i,
        width: s,
        height: f,
        fitView: d,
        fitViewOptions: m,
        minZoom: y,
        maxZoom: h,
        nodeOrigin: v,
        nodeExtent: p,
        defaultNodes: u,
        defaultEdges: c,
        zIndexMode: x
      }),
      setNodes: (C) => {
        const { nodeLookup: M, parentLookup: V, nodeOrigin: S, elevateNodesOnSelect: A, fitViewQueued: X, zIndexMode: j } = _(), U = Af(C, M, V, {
          nodeOrigin: S,
          nodeExtent: p,
          elevateNodesOnSelect: A,
          checkEquality: true,
          zIndexMode: j
        });
        X && U ? (z(), E({
          nodes: C,
          nodesInitialized: U,
          fitViewQueued: false,
          fitViewOptions: void 0
        })) : E({
          nodes: C,
          nodesInitialized: U
        });
      },
      setEdges: (C) => {
        const { connectionLookup: M, edgeLookup: V } = _();
        lp(M, V, C), E({
          edges: C
        });
      },
      setDefaultNodesAndEdges: (C, M) => {
        if (C) {
          const { setNodes: V } = _();
          V(C), E({
            hasDefaultNodes: true
          });
        }
        if (M) {
          const { setEdges: V } = _();
          V(M), E({
            hasDefaultEdges: true
          });
        }
      },
      updateNodeInternals: (C) => {
        const { triggerNodeChanges: M, nodeLookup: V, parentLookup: S, domNode: A, nodeOrigin: X, nodeExtent: j, debug: U, fitViewQueued: L, zIndexMode: G } = _(), { changes: ot, updatedInternals: $ } = B_(C, V, S, A, X, j, G);
        $ && (D_(V, S, {
          nodeOrigin: X,
          nodeExtent: j,
          zIndexMode: G
        }), L ? (z(), E({
          fitViewQueued: false,
          fitViewOptions: void 0
        })) : E({}), (ot == null ? void 0 : ot.length) > 0 && (U && console.log("React Flow: trigger node changes", ot), M == null ? void 0 : M(ot)));
      },
      updateNodePositions: (C, M = false) => {
        const V = [];
        let S = [];
        const { nodeLookup: A, triggerNodeChanges: X, connection: j, updateConnection: U, onNodesChangeMiddlewareMap: L } = _();
        for (const [G, ot] of C) {
          const $ = A.get(G), F = !!(($ == null ? void 0 : $.expandParent) && ($ == null ? void 0 : $.parentId) && (ot == null ? void 0 : ot.position)), it = {
            id: G,
            type: "position",
            position: F ? {
              x: Math.max(0, ot.position.x),
              y: Math.max(0, ot.position.y)
            } : ot.position,
            dragging: M
          };
          if ($ && j.inProgress && j.fromNode.id === $.id) {
            const T = Il($, j.fromHandle, mt.Left, true);
            U({
              ...j,
              from: T
            });
          }
          F && $.parentId && V.push({
            id: G,
            parentId: $.parentId,
            rect: {
              ...ot.internals.positionAbsolute,
              width: ot.measured.width ?? 0,
              height: ot.measured.height ?? 0
            }
          }), S.push(it);
        }
        if (V.length > 0) {
          const { parentLookup: G, nodeOrigin: ot } = _(), $ = Kf(V, A, G, ot);
          S.push(...$);
        }
        for (const G of L.values()) S = G(S);
        X(S);
      },
      triggerNodeChanges: (C) => {
        const { onNodesChange: M, setNodes: V, nodes: S, hasDefaultNodes: A, debug: X } = _();
        if (C == null ? void 0 : C.length) {
          if (A) {
            const j = vp(C, S);
            V(j);
          }
          X && console.log("React Flow: trigger node changes", C), M == null ? void 0 : M(C);
        }
      },
      triggerEdgeChanges: (C) => {
        const { onEdgesChange: M, setEdges: V, edges: S, hasDefaultEdges: A, debug: X } = _();
        if (C == null ? void 0 : C.length) {
          if (A) {
            const j = xp(C, S);
            V(j);
          }
          X && console.log("React Flow: trigger edge changes", C), M == null ? void 0 : M(C);
        }
      },
      addSelectedNodes: (C) => {
        const { multiSelectionActive: M, edgeLookup: V, nodeLookup: S, triggerNodeChanges: A, triggerEdgeChanges: X } = _();
        if (M) {
          const j = C.map((U) => Ql(U, true));
          A(j);
          return;
        }
        A(Ga(S, /* @__PURE__ */ new Set([
          ...C
        ]), true)), X(Ga(V));
      },
      addSelectedEdges: (C) => {
        const { multiSelectionActive: M, edgeLookup: V, nodeLookup: S, triggerNodeChanges: A, triggerEdgeChanges: X } = _();
        if (M) {
          const j = C.map((U) => Ql(U, true));
          X(j);
          return;
        }
        X(Ga(V, /* @__PURE__ */ new Set([
          ...C
        ]))), A(Ga(S, /* @__PURE__ */ new Set(), true));
      },
      unselectNodesAndEdges: ({ nodes: C, edges: M } = {}) => {
        const { edges: V, nodes: S, nodeLookup: A, triggerNodeChanges: X, triggerEdgeChanges: j } = _(), U = C || S, L = M || V, G = U.map(($) => {
          const F = A.get($.id);
          return F && (F.selected = false), Ql($.id, false);
        }), ot = L.map(($) => Ql($.id, false));
        X(G), j(ot);
      },
      setMinZoom: (C) => {
        const { panZoom: M, maxZoom: V } = _();
        M == null ? void 0 : M.setScaleExtent([
          C,
          V
        ]), E({
          minZoom: C
        });
      },
      setMaxZoom: (C) => {
        const { panZoom: M, minZoom: V } = _();
        M == null ? void 0 : M.setScaleExtent([
          V,
          C
        ]), E({
          maxZoom: C
        });
      },
      setTranslateExtent: (C) => {
        var _a;
        (_a = _().panZoom) == null ? void 0 : _a.setTranslateExtent(C), E({
          translateExtent: C
        });
      },
      resetSelectedElements: () => {
        const { edges: C, nodes: M, triggerNodeChanges: V, triggerEdgeChanges: S, elementsSelectable: A } = _();
        if (!A) return;
        const X = M.reduce((U, L) => L.selected ? [
          ...U,
          Ql(L.id, false)
        ] : U, []), j = C.reduce((U, L) => L.selected ? [
          ...U,
          Ql(L.id, false)
        ] : U, []);
        V(X), S(j);
      },
      setNodeExtent: (C) => {
        const { nodes: M, nodeLookup: V, parentLookup: S, nodeOrigin: A, elevateNodesOnSelect: X, nodeExtent: j, zIndexMode: U } = _();
        C[0][0] === j[0][0] && C[0][1] === j[0][1] && C[1][0] === j[1][0] && C[1][1] === j[1][1] || (Af(M, V, S, {
          nodeOrigin: A,
          nodeExtent: C,
          elevateNodesOnSelect: X,
          checkEquality: false,
          zIndexMode: U
        }), E({
          nodeExtent: C
        }));
      },
      panBy: (C) => {
        const { transform: M, width: V, height: S, panZoom: A, translateExtent: X } = _();
        return U_({
          delta: C,
          panZoom: A,
          transform: M,
          translateExtent: X,
          width: V,
          height: S
        });
      },
      setCenter: async (C, M, V) => {
        const { width: S, height: A, maxZoom: X, panZoom: j } = _();
        if (!j) return Promise.resolve(false);
        const U = typeof (V == null ? void 0 : V.zoom) < "u" ? V.zoom : X;
        return await j.setViewport({
          x: S / 2 - C * U,
          y: A / 2 - M * U,
          zoom: U
        }, {
          duration: V == null ? void 0 : V.duration,
          ease: V == null ? void 0 : V.ease,
          interpolate: V == null ? void 0 : V.interpolate
        }), Promise.resolve(true);
      },
      cancelConnection: () => {
        E({
          connection: {
            ...Yy
          }
        });
      },
      updateConnection: (C) => {
        E({
          connection: C
        });
      },
      reset: () => E({
        ...ey()
      })
    };
  }, Object.is);
  function t3({ initialNodes: n, initialEdges: i, defaultNodes: u, defaultEdges: c, initialWidth: s, initialHeight: f, initialMinZoom: d, initialMaxZoom: m, initialFitViewOptions: y, fitView: h, nodeOrigin: v, nodeExtent: p, zIndexMode: x, children: E }) {
    const [_] = I.useState(() => Pw({
      nodes: n,
      edges: i,
      defaultNodes: u,
      defaultEdges: c,
      width: s,
      height: f,
      fitView: h,
      minZoom: d,
      maxZoom: m,
      fitViewOptions: y,
      nodeOrigin: v,
      nodeExtent: p,
      zIndexMode: x
    }));
    return H.jsx(vE, {
      value: _,
      children: H.jsx(qE, {
        children: E
      })
    });
  }
  function e3({ children: n, nodes: i, edges: u, defaultNodes: c, defaultEdges: s, width: f, height: d, fitView: m, fitViewOptions: y, minZoom: h, maxZoom: v, nodeOrigin: p, nodeExtent: x, zIndexMode: E }) {
    return I.useContext(Mc) ? H.jsx(H.Fragment, {
      children: n
    }) : H.jsx(t3, {
      initialNodes: i,
      initialEdges: u,
      defaultNodes: c,
      defaultEdges: s,
      initialWidth: f,
      initialHeight: d,
      fitView: m,
      initialFitViewOptions: y,
      initialMinZoom: h,
      initialMaxZoom: v,
      nodeOrigin: p,
      nodeExtent: x,
      zIndexMode: E,
      children: n
    });
  }
  const n3 = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    zIndex: 0
  };
  function l3({ nodes: n, edges: i, defaultNodes: u, defaultEdges: c, className: s, nodeTypes: f, edgeTypes: d, onNodeClick: m, onEdgeClick: y, onInit: h, onMove: v, onMoveStart: p, onMoveEnd: x, onConnect: E, onConnectStart: _, onConnectEnd: z, onClickConnectStart: C, onClickConnectEnd: M, onNodeMouseEnter: V, onNodeMouseMove: S, onNodeMouseLeave: A, onNodeContextMenu: X, onNodeDoubleClick: j, onNodeDragStart: U, onNodeDrag: L, onNodeDragStop: G, onNodesDelete: ot, onEdgesDelete: $, onDelete: F, onSelectionChange: it, onSelectionDragStart: T, onSelectionDrag: Z, onSelectionDragStop: w, onSelectionContextMenu: O, onSelectionStart: Y, onSelectionEnd: Q, onBeforeDelete: et, connectionMode: N, connectionLineType: R = vl.Bezier, connectionLineStyle: P, connectionLineComponent: tt, connectionLineContainerStyle: ct, deleteKeyCode: st = "Backspace", selectionKeyCode: rt = "Shift", selectionOnDrag: ut = false, selectionMode: ft = su.Full, panActivationKeyCode: _t = "Space", multiSelectionKeyCode: bt = du() ? "Meta" : "Control", zoomActivationKeyCode: yt = du() ? "Meta" : "Control", snapToGrid: vt, snapGrid: Mt, onlyRenderVisibleElements: jt = false, selectNodesOnDrag: Rt, nodesDraggable: ue, autoPanOnNodeFocus: Qe, nodesConnectable: Ae, nodesFocusable: ke, nodeOrigin: hn = yp, edgesFocusable: bl, edgesReconnectable: Sl, elementsSelectable: ce = true, defaultViewport: ta = DE, minZoom: gn = 0.5, maxZoom: qn = 2, translateExtent: _l = ru, preventScrolling: Cc = true, nodeExtent: ea, defaultMarkerColor: Dc = "#b1b1b7", zoomOnScroll: Oc = true, zoomOnPinch: El = true, panOnScroll: me = false, panOnScrollSpeed: nn = 0.5, panOnScrollMode: ye = $l.Free, zoomOnDoubleClick: Hc = true, panOnDrag: Rc = true, onPaneClick: Bc, onPaneMouseEnter: na, onPaneMouseMove: la, onPaneMouseLeave: aa, onPaneScroll: mn, onPaneContextMenu: ia, paneClickDistance: wl = 1, nodeClickDistance: Uc = 0, children: Su, onReconnect: ei, onReconnectStart: Nl, onReconnectEnd: jc, onEdgeContextMenu: _u, onEdgeDoubleClick: Eu, onEdgeMouseEnter: wu, onEdgeMouseMove: ni, onEdgeMouseLeave: li, reconnectRadius: Nu = 10, onNodesChange: Mu, onEdgesChange: ln, noDragClassName: ae = "nodrag", noWheelClassName: he = "nowheel", noPanClassName: yn = "nopan", fitView: ua, fitViewOptions: Au, connectOnClick: Yc, attributionPosition: zu, proOptions: Ml, defaultEdgeOptions: ai, elevateNodesOnSelect: Xn = true, elevateEdgesOnSelect: Zn = false, disableKeyboardA11y: Gn = false, autoPanOnConnect: Qn, autoPanOnNodeDrag: It, autoPanSpeed: Tu, connectionRadius: Cu, isValidConnection: pn, onError: kn, style: Lc, id: ii, nodeDragThreshold: Du, connectionDragThreshold: Vc, viewport: oa, onViewportChange: ca, width: Ke, height: ve, colorMode: Ou = "light", debug: qc, onScroll: ra, ariaLabelConfig: Hu, zIndexMode: Al = "basic", ...Xc }, xe) {
    const zl = ii || "1", Ru = BE(Ou), ui = I.useCallback((vn) => {
      vn.currentTarget.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      }), ra == null ? void 0 : ra(vn);
    }, [
      ra
    ]);
    return H.jsx("div", {
      "data-testid": "rf__wrapper",
      ...Xc,
      onScroll: ui,
      style: {
        ...Lc,
        ...n3
      },
      ref: xe,
      className: le([
        "react-flow",
        s,
        Ru
      ]),
      id: ii,
      role: "application",
      children: H.jsxs(e3, {
        nodes: n,
        edges: i,
        width: Ke,
        height: ve,
        fitView: ua,
        fitViewOptions: Au,
        minZoom: gn,
        maxZoom: qn,
        nodeOrigin: hn,
        nodeExtent: ea,
        zIndexMode: Al,
        children: [
          H.jsx(Iw, {
            onInit: h,
            onNodeClick: m,
            onEdgeClick: y,
            onNodeMouseEnter: V,
            onNodeMouseMove: S,
            onNodeMouseLeave: A,
            onNodeContextMenu: X,
            onNodeDoubleClick: j,
            nodeTypes: f,
            edgeTypes: d,
            connectionLineType: R,
            connectionLineStyle: P,
            connectionLineComponent: tt,
            connectionLineContainerStyle: ct,
            selectionKeyCode: rt,
            selectionOnDrag: ut,
            selectionMode: ft,
            deleteKeyCode: st,
            multiSelectionKeyCode: bt,
            panActivationKeyCode: _t,
            zoomActivationKeyCode: yt,
            onlyRenderVisibleElements: jt,
            defaultViewport: ta,
            translateExtent: _l,
            minZoom: gn,
            maxZoom: qn,
            preventScrolling: Cc,
            zoomOnScroll: Oc,
            zoomOnPinch: El,
            zoomOnDoubleClick: Hc,
            panOnScroll: me,
            panOnScrollSpeed: nn,
            panOnScrollMode: ye,
            panOnDrag: Rc,
            onPaneClick: Bc,
            onPaneMouseEnter: na,
            onPaneMouseMove: la,
            onPaneMouseLeave: aa,
            onPaneScroll: mn,
            onPaneContextMenu: ia,
            paneClickDistance: wl,
            nodeClickDistance: Uc,
            onSelectionContextMenu: O,
            onSelectionStart: Y,
            onSelectionEnd: Q,
            onReconnect: ei,
            onReconnectStart: Nl,
            onReconnectEnd: jc,
            onEdgeContextMenu: _u,
            onEdgeDoubleClick: Eu,
            onEdgeMouseEnter: wu,
            onEdgeMouseMove: ni,
            onEdgeMouseLeave: li,
            reconnectRadius: Nu,
            defaultMarkerColor: Dc,
            noDragClassName: ae,
            noWheelClassName: he,
            noPanClassName: yn,
            rfId: zl,
            disableKeyboardA11y: Gn,
            nodeExtent: ea,
            viewport: oa,
            onViewportChange: ca
          }),
          H.jsx(RE, {
            nodes: n,
            edges: i,
            defaultNodes: u,
            defaultEdges: c,
            onConnect: E,
            onConnectStart: _,
            onConnectEnd: z,
            onClickConnectStart: C,
            onClickConnectEnd: M,
            nodesDraggable: ue,
            autoPanOnNodeFocus: Qe,
            nodesConnectable: Ae,
            nodesFocusable: ke,
            edgesFocusable: bl,
            edgesReconnectable: Sl,
            elementsSelectable: ce,
            elevateNodesOnSelect: Xn,
            elevateEdgesOnSelect: Zn,
            minZoom: gn,
            maxZoom: qn,
            nodeExtent: ea,
            onNodesChange: Mu,
            onEdgesChange: ln,
            snapToGrid: vt,
            snapGrid: Mt,
            connectionMode: N,
            translateExtent: _l,
            connectOnClick: Yc,
            defaultEdgeOptions: ai,
            fitView: ua,
            fitViewOptions: Au,
            onNodesDelete: ot,
            onEdgesDelete: $,
            onDelete: F,
            onNodeDragStart: U,
            onNodeDrag: L,
            onNodeDragStop: G,
            onSelectionDrag: Z,
            onSelectionDragStart: T,
            onSelectionDragStop: w,
            onMove: v,
            onMoveStart: p,
            onMoveEnd: x,
            noPanClassName: yn,
            nodeOrigin: hn,
            rfId: zl,
            autoPanOnConnect: Qn,
            autoPanOnNodeDrag: It,
            autoPanSpeed: Tu,
            onError: kn,
            connectionRadius: Cu,
            isValidConnection: pn,
            selectNodesOnDrag: Rt,
            nodeDragThreshold: Du,
            connectionDragThreshold: Vc,
            onBeforeDelete: et,
            debug: qc,
            ariaLabelConfig: Hu,
            zIndexMode: Al
          }),
          H.jsx(CE, {
            onSelectionChange: it
          }),
          Su,
          H.jsx(NE, {
            proOptions: Ml,
            position: zu
          }),
          H.jsx(wE, {
            rfId: zl,
            disableKeyboardA11y: Gn
          })
        ]
      })
    });
  }
  var a3 = bp(l3);
  function i3(n) {
    const [i, u] = I.useState(n), c = I.useCallback((s) => u((f) => vp(s, f)), []);
    return [
      i,
      u,
      c
    ];
  }
  function u3(n) {
    const [i, u] = I.useState(n), c = I.useCallback((s) => u((f) => xp(s, f)), []);
    return [
      i,
      u,
      c
    ];
  }
  function o3({ dimensions: n, lineWidth: i, variant: u, className: c }) {
    return H.jsx("path", {
      strokeWidth: i,
      d: `M${n[0] / 2} 0 V${n[1]} M0 ${n[1] / 2} H${n[0]}`,
      className: le([
        "react-flow__background-pattern",
        u,
        c
      ])
    });
  }
  function c3({ radius: n, className: i }) {
    return H.jsx("circle", {
      cx: n,
      cy: n,
      r: n,
      className: le([
        "react-flow__background-pattern",
        "dots",
        i
      ])
    });
  }
  var Yn;
  (function(n) {
    n.Lines = "lines", n.Dots = "dots", n.Cross = "cross";
  })(Yn || (Yn = {}));
  const r3 = {
    [Yn.Dots]: 1,
    [Yn.Lines]: 1,
    [Yn.Cross]: 6
  }, s3 = (n) => ({
    transform: n.transform,
    patternId: `pattern-${n.rfId}`
  });
  function Gp({ id: n, variant: i = Yn.Dots, gap: u = 20, size: c, lineWidth: s = 1, offset: f = 0, color: d, bgColor: m, style: y, className: h, patternClassName: v }) {
    const p = I.useRef(null), { transform: x, patternId: E } = Ct(s3, kt), _ = c || r3[i], z = i === Yn.Dots, C = i === Yn.Cross, M = Array.isArray(u) ? u : [
      u,
      u
    ], V = [
      M[0] * x[2] || 1,
      M[1] * x[2] || 1
    ], S = _ * x[2], A = Array.isArray(f) ? f : [
      f,
      f
    ], X = C ? [
      S,
      S
    ] : V, j = [
      A[0] * x[2] || 1 + X[0] / 2,
      A[1] * x[2] || 1 + X[1] / 2
    ], U = `${E}${n || ""}`;
    return H.jsxs("svg", {
      className: le([
        "react-flow__background",
        h
      ]),
      style: {
        ...y,
        ...zc,
        "--xy-background-color-props": m,
        "--xy-background-pattern-color-props": d
      },
      ref: p,
      "data-testid": "rf__background",
      children: [
        H.jsx("pattern", {
          id: U,
          x: x[0] % V[0],
          y: x[1] % V[1],
          width: V[0],
          height: V[1],
          patternUnits: "userSpaceOnUse",
          patternTransform: `translate(-${j[0]},-${j[1]})`,
          children: z ? H.jsx(c3, {
            radius: S / 2,
            className: v
          }) : H.jsx(o3, {
            dimensions: X,
            lineWidth: s,
            variant: i,
            className: v
          })
        }),
        H.jsx("rect", {
          x: "0",
          y: "0",
          width: "100%",
          height: "100%",
          fill: `url(#${U})`
        })
      ]
    });
  }
  Gp.displayName = "Background";
  const f3 = I.memo(Gp);
  function d3() {
    return H.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      children: H.jsx("path", {
        d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"
      })
    });
  }
  function h3() {
    return H.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 5",
      children: H.jsx("path", {
        d: "M0 0h32v4.2H0z"
      })
    });
  }
  function g3() {
    return H.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 30",
      children: H.jsx("path", {
        d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"
      })
    });
  }
  function m3() {
    return H.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32",
      children: H.jsx("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"
      })
    });
  }
  function y3() {
    return H.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32",
      children: H.jsx("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"
      })
    });
  }
  function Po({ children: n, className: i, ...u }) {
    return H.jsx("button", {
      type: "button",
      className: le([
        "react-flow__controls-button",
        i
      ]),
      ...u,
      children: n
    });
  }
  const p3 = (n) => ({
    isInteractive: n.nodesDraggable || n.nodesConnectable || n.elementsSelectable,
    minZoomReached: n.transform[2] <= n.minZoom,
    maxZoomReached: n.transform[2] >= n.maxZoom,
    ariaLabelConfig: n.ariaLabelConfig
  });
  function Qp({ style: n, showZoom: i = true, showFitView: u = true, showInteractive: c = true, fitViewOptions: s, onZoomIn: f, onZoomOut: d, onFitView: m, onInteractiveChange: y, className: h, children: v, position: p = "bottom-left", orientation: x = "vertical", "aria-label": E }) {
    const _ = Kt(), { isInteractive: z, minZoomReached: C, maxZoomReached: M, ariaLabelConfig: V } = Ct(p3, kt), { zoomIn: S, zoomOut: A, fitView: X } = $f(), j = () => {
      S(), f == null ? void 0 : f();
    }, U = () => {
      A(), d == null ? void 0 : d();
    }, L = () => {
      X(s), m == null ? void 0 : m();
    }, G = () => {
      _.setState({
        nodesDraggable: !z,
        nodesConnectable: !z,
        elementsSelectable: !z
      }), y == null ? void 0 : y(!z);
    }, ot = x === "horizontal" ? "horizontal" : "vertical";
    return H.jsxs(Ac, {
      className: le([
        "react-flow__controls",
        ot,
        h
      ]),
      position: p,
      style: n,
      "data-testid": "rf__controls",
      "aria-label": E ?? V["controls.ariaLabel"],
      children: [
        i && H.jsxs(H.Fragment, {
          children: [
            H.jsx(Po, {
              onClick: j,
              className: "react-flow__controls-zoomin",
              title: V["controls.zoomIn.ariaLabel"],
              "aria-label": V["controls.zoomIn.ariaLabel"],
              disabled: M,
              children: H.jsx(d3, {})
            }),
            H.jsx(Po, {
              onClick: U,
              className: "react-flow__controls-zoomout",
              title: V["controls.zoomOut.ariaLabel"],
              "aria-label": V["controls.zoomOut.ariaLabel"],
              disabled: C,
              children: H.jsx(h3, {})
            })
          ]
        }),
        u && H.jsx(Po, {
          className: "react-flow__controls-fitview",
          onClick: L,
          title: V["controls.fitView.ariaLabel"],
          "aria-label": V["controls.fitView.ariaLabel"],
          children: H.jsx(g3, {})
        }),
        c && H.jsx(Po, {
          className: "react-flow__controls-interactive",
          onClick: G,
          title: V["controls.interactive.ariaLabel"],
          "aria-label": V["controls.interactive.ariaLabel"],
          children: z ? H.jsx(y3, {}) : H.jsx(m3, {})
        }),
        v
      ]
    });
  }
  Qp.displayName = "Controls";
  const v3 = I.memo(Qp);
  function x3({ id: n, x: i, y: u, width: c, height: s, style: f, color: d, strokeColor: m, strokeWidth: y, className: h, borderRadius: v, shapeRendering: p, selected: x, onClick: E }) {
    const { background: _, backgroundColor: z } = f || {}, C = d || _ || z;
    return H.jsx("rect", {
      className: le([
        "react-flow__minimap-node",
        {
          selected: x
        },
        h
      ]),
      x: i,
      y: u,
      rx: v,
      ry: v,
      width: c,
      height: s,
      style: {
        fill: C,
        stroke: m,
        strokeWidth: y
      },
      shapeRendering: p,
      onClick: E ? (M) => E(M, n) : void 0
    });
  }
  const b3 = I.memo(x3), S3 = (n) => n.nodes.map((i) => i.id), mf = (n) => n instanceof Function ? n : () => n;
  function _3({ nodeStrokeColor: n, nodeColor: i, nodeClassName: u = "", nodeBorderRadius: c = 5, nodeStrokeWidth: s, nodeComponent: f = b3, onClick: d }) {
    const m = Ct(S3, kt), y = mf(i), h = mf(n), v = mf(u), p = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
    return H.jsx(H.Fragment, {
      children: m.map((x) => H.jsx(w3, {
        id: x,
        nodeColorFunc: y,
        nodeStrokeColorFunc: h,
        nodeClassNameFunc: v,
        nodeBorderRadius: c,
        nodeStrokeWidth: s,
        NodeComponent: f,
        onClick: d,
        shapeRendering: p
      }, x))
    });
  }
  function E3({ id: n, nodeColorFunc: i, nodeStrokeColorFunc: u, nodeClassNameFunc: c, nodeBorderRadius: s, nodeStrokeWidth: f, shapeRendering: d, NodeComponent: m, onClick: y }) {
    const { node: h, x: v, y: p, width: x, height: E } = Ct((_) => {
      const { internals: z } = _.nodeLookup.get(n), C = z.userNode, { x: M, y: V } = z.positionAbsolute, { width: S, height: A } = Vn(C);
      return {
        node: C,
        x: M,
        y: V,
        width: S,
        height: A
      };
    }, kt);
    return !h || h.hidden || !Qy(h) ? null : H.jsx(m, {
      x: v,
      y: p,
      width: x,
      height: E,
      style: h.style,
      selected: !!h.selected,
      className: c(h),
      color: i(h),
      borderRadius: s,
      strokeColor: u(h),
      strokeWidth: f,
      shapeRendering: d,
      onClick: y,
      id: h.id
    });
  }
  const w3 = I.memo(E3);
  var N3 = I.memo(_3);
  const M3 = 200, A3 = 150, z3 = (n) => !n.hidden, T3 = (n) => {
    const i = {
      x: -n.transform[0] / n.transform[2],
      y: -n.transform[1] / n.transform[2],
      width: n.width / n.transform[2],
      height: n.height / n.transform[2]
    };
    return {
      viewBB: i,
      boundingRect: n.nodeLookup.size > 0 ? Gy(vu(n.nodeLookup, {
        filter: z3
      }), i) : i,
      rfId: n.rfId,
      panZoom: n.panZoom,
      translateExtent: n.translateExtent,
      flowWidth: n.width,
      flowHeight: n.height,
      ariaLabelConfig: n.ariaLabelConfig
    };
  }, C3 = "react-flow__minimap-desc";
  function kp({ style: n, className: i, nodeStrokeColor: u, nodeColor: c, nodeClassName: s = "", nodeBorderRadius: f = 5, nodeStrokeWidth: d, nodeComponent: m, bgColor: y, maskColor: h, maskStrokeColor: v, maskStrokeWidth: p, position: x = "bottom-right", onClick: E, onNodeClick: _, pannable: z = false, zoomable: C = false, ariaLabel: M, inversePan: V, zoomStep: S = 1, offsetScale: A = 5 }) {
    const X = Kt(), j = I.useRef(null), { boundingRect: U, viewBB: L, rfId: G, panZoom: ot, translateExtent: $, flowWidth: F, flowHeight: it, ariaLabelConfig: T } = Ct(T3, kt), Z = (n == null ? void 0 : n.width) ?? M3, w = (n == null ? void 0 : n.height) ?? A3, O = U.width / Z, Y = U.height / w, Q = Math.max(O, Y), et = Q * Z, N = Q * w, R = A * Q, P = U.x - (et - U.width) / 2 - R, tt = U.y - (N - U.height) / 2 - R, ct = et + R * 2, st = N + R * 2, rt = `${C3}-${G}`, ut = I.useRef(0), ft = I.useRef();
    ut.current = Q, I.useEffect(() => {
      if (j.current && ot) return ft.current = Q_({
        domNode: j.current,
        panZoom: ot,
        getTransform: () => X.getState().transform,
        getViewScale: () => ut.current
      }), () => {
        var _a;
        (_a = ft.current) == null ? void 0 : _a.destroy();
      };
    }, [
      ot
    ]), I.useEffect(() => {
      var _a;
      (_a = ft.current) == null ? void 0 : _a.update({
        translateExtent: $,
        width: F,
        height: it,
        inversePan: V,
        pannable: z,
        zoomStep: S,
        zoomable: C
      });
    }, [
      z,
      C,
      V,
      S,
      $,
      F,
      it
    ]);
    const _t = E ? (vt) => {
      var _a;
      const [Mt, jt] = ((_a = ft.current) == null ? void 0 : _a.pointer(vt)) || [
        0,
        0
      ];
      E(vt, {
        x: Mt,
        y: jt
      });
    } : void 0, bt = _ ? I.useCallback((vt, Mt) => {
      const jt = X.getState().nodeLookup.get(Mt).internals.userNode;
      _(vt, jt);
    }, []) : void 0, yt = M ?? T["minimap.ariaLabel"];
    return H.jsx(Ac, {
      position: x,
      style: {
        ...n,
        "--xy-minimap-background-color-props": typeof y == "string" ? y : void 0,
        "--xy-minimap-mask-background-color-props": typeof h == "string" ? h : void 0,
        "--xy-minimap-mask-stroke-color-props": typeof v == "string" ? v : void 0,
        "--xy-minimap-mask-stroke-width-props": typeof p == "number" ? p * Q : void 0,
        "--xy-minimap-node-background-color-props": typeof c == "string" ? c : void 0,
        "--xy-minimap-node-stroke-color-props": typeof u == "string" ? u : void 0,
        "--xy-minimap-node-stroke-width-props": typeof d == "number" ? d : void 0
      },
      className: le([
        "react-flow__minimap",
        i
      ]),
      "data-testid": "rf__minimap",
      children: H.jsxs("svg", {
        width: Z,
        height: w,
        viewBox: `${P} ${tt} ${ct} ${st}`,
        className: "react-flow__minimap-svg",
        role: "img",
        "aria-labelledby": rt,
        ref: j,
        onClick: _t,
        children: [
          yt && H.jsx("title", {
            id: rt,
            children: yt
          }),
          H.jsx(N3, {
            onClick: bt,
            nodeColor: c,
            nodeStrokeColor: u,
            nodeBorderRadius: f,
            nodeClassName: s,
            nodeStrokeWidth: d,
            nodeComponent: m
          }),
          H.jsx("path", {
            className: "react-flow__minimap-mask",
            d: `M${P - R},${tt - R}h${ct + R * 2}v${st + R * 2}h${-ct - R * 2}z
        M${L.x},${L.y}h${L.width}v${L.height}h${-L.width}z`,
            fillRule: "evenodd",
            pointerEvents: "none"
          })
        ]
      })
    });
  }
  kp.displayName = "MiniMap";
  const D3 = I.memo(kp), O3 = (n) => (i) => n ? `${Math.max(1 / i.transform[2], 1)}` : void 0, H3 = {
    [Pa.Line]: "right",
    [Pa.Handle]: "bottom-right"
  };
  function R3({ nodeId: n, position: i, variant: u = Pa.Handle, className: c, style: s = void 0, children: f, color: d, minWidth: m = 10, minHeight: y = 10, maxWidth: h = Number.MAX_VALUE, maxHeight: v = Number.MAX_VALUE, keepAspectRatio: p = false, resizeDirection: x, autoScale: E = true, shouldResize: _, onResizeStart: z, onResize: C, onResizeEnd: M }) {
    const V = wp(), S = typeof n == "string" ? n : V, A = Kt(), X = I.useRef(null), j = u === Pa.Handle, U = Ct(I.useCallback(O3(j && E), [
      j,
      E
    ]), kt), L = I.useRef(null), G = i ?? H3[u];
    I.useEffect(() => {
      if (!(!X.current || !S)) return L.current || (L.current = iE({
        domNode: X.current,
        nodeId: S,
        getStoreItems: () => {
          const { nodeLookup: $, transform: F, snapGrid: it, snapToGrid: T, nodeOrigin: Z, domNode: w } = A.getState();
          return {
            nodeLookup: $,
            transform: F,
            snapGrid: it,
            snapToGrid: T,
            nodeOrigin: Z,
            paneDomNode: w
          };
        },
        onChange: ($, F) => {
          const { triggerNodeChanges: it, nodeLookup: T, parentLookup: Z, nodeOrigin: w } = A.getState(), O = [], Y = {
            x: $.x,
            y: $.y
          }, Q = T.get(S);
          if (Q && Q.expandParent && Q.parentId) {
            const et = Q.origin ?? w, N = $.width ?? Q.measured.width ?? 0, R = $.height ?? Q.measured.height ?? 0, P = {
              id: Q.id,
              parentId: Q.parentId,
              rect: {
                width: N,
                height: R,
                ...ky({
                  x: $.x ?? Q.position.x,
                  y: $.y ?? Q.position.y
                }, {
                  width: N,
                  height: R
                }, Q.parentId, T, et)
              }
            }, tt = Kf([
              P
            ], T, Z, w);
            O.push(...tt), Y.x = $.x ? Math.max(et[0] * N, $.x) : void 0, Y.y = $.y ? Math.max(et[1] * R, $.y) : void 0;
          }
          if (Y.x !== void 0 && Y.y !== void 0) {
            const et = {
              id: S,
              type: "position",
              position: {
                ...Y
              }
            };
            O.push(et);
          }
          if ($.width !== void 0 && $.height !== void 0) {
            const N = {
              id: S,
              type: "dimensions",
              resizing: true,
              setAttributes: x ? x === "horizontal" ? "width" : "height" : true,
              dimensions: {
                width: $.width,
                height: $.height
              }
            };
            O.push(N);
          }
          for (const et of F) {
            const N = {
              ...et,
              type: "position"
            };
            O.push(N);
          }
          it(O);
        },
        onEnd: ({ width: $, height: F }) => {
          const it = {
            id: S,
            type: "dimensions",
            resizing: false,
            dimensions: {
              width: $,
              height: F
            }
          };
          A.getState().triggerNodeChanges([
            it
          ]);
        }
      })), L.current.update({
        controlPosition: G,
        boundaries: {
          minWidth: m,
          minHeight: y,
          maxWidth: h,
          maxHeight: v
        },
        keepAspectRatio: p,
        resizeDirection: x,
        onResizeStart: z,
        onResize: C,
        onResizeEnd: M,
        shouldResize: _
      }), () => {
        var _a;
        (_a = L.current) == null ? void 0 : _a.destroy();
      };
    }, [
      G,
      m,
      y,
      h,
      v,
      p,
      z,
      C,
      M,
      _
    ]);
    const ot = G.split("-");
    return H.jsx("div", {
      className: le([
        "react-flow__resize-control",
        "nodrag",
        ...ot,
        u,
        c
      ]),
      ref: X,
      style: {
        ...s,
        scale: U,
        ...d && {
          [j ? "backgroundColor" : "borderColor"]: d
        }
      },
      children: f
    });
  }
  I.memo(R3);
  const B3 = [
    {
      id: "eye",
      position: {
        x: 0,
        y: 100
      },
      data: {
        label: "\u{1F441}\uFE0F Ojo (Sensor)"
      },
      type: "input",
      style: {
        background: "#fef3c7",
        border: "1px solid #d97706"
      }
    },
    {
      id: "ear",
      position: {
        x: 0,
        y: 300
      },
      data: {
        label: "\u{1F442} O\xEDdo (Sensor)"
      },
      type: "input",
      style: {
        background: "#fef3c7",
        border: "1px solid #d97706"
      }
    },
    {
      id: "visual_cortex",
      position: {
        x: 250,
        y: 100
      },
      data: {
        label: "\u{1F3A8} Visual Cortex"
      },
      style: {
        background: "#dbeafe",
        border: "1px solid #2563eb"
      }
    },
    {
      id: "auditory_cortex",
      position: {
        x: 250,
        y: 300
      },
      data: {
        label: "\u{1F3B5} Auditory Cortex"
      },
      style: {
        background: "#dbeafe",
        border: "1px solid #2563eb"
      }
    },
    {
      id: "broca",
      position: {
        x: 500,
        y: 200
      },
      data: {
        label: "\u{1F5E3}\uFE0F Broca's Arc (Language)"
      },
      style: {
        background: "#fce7f3",
        border: "1px solid #db2777",
        width: 180
      }
    },
    {
      id: "hippocampus",
      position: {
        x: 500,
        y: 50
      },
      data: {
        label: "\u{1F9E0} Hippocampus (Memory)"
      },
      style: {
        background: "#d1fae5",
        border: "1px solid #059669"
      }
    },
    {
      id: "amygdala",
      position: {
        x: 500,
        y: 350
      },
      data: {
        label: "\u{1F525} Amygdala (Emotion)"
      },
      style: {
        background: "#fee2e2",
        border: "1px solid #dc2626"
      }
    },
    {
      id: "motor",
      position: {
        x: 750,
        y: 200
      },
      data: {
        label: "\u{1F9BE} Motor Output"
      },
      type: "output",
      style: {
        background: "#e5e7eb",
        border: "1px solid #4b5563"
      }
    }
  ], U3 = [
    {
      id: "e1-1",
      source: "eye",
      target: "visual_cortex",
      animated: true,
      label: "Raw Data"
    },
    {
      id: "e1-2",
      source: "ear",
      target: "auditory_cortex",
      animated: true,
      label: "Raw Audio"
    },
    {
      id: "e2-1",
      source: "visual_cortex",
      target: "broca",
      animated: true,
      label: "Togen Visual"
    },
    {
      id: "e2-2",
      source: "auditory_cortex",
      target: "broca",
      animated: true,
      label: "Togen Auditivo"
    },
    {
      id: "e2-3",
      source: "visual_cortex",
      target: "hippocampus",
      animated: false
    },
    {
      id: "e2-4",
      source: "visual_cortex",
      target: "amygdala",
      animated: false
    },
    {
      id: "e3-1",
      source: "broca",
      target: "motor",
      animated: true,
      label: "Action"
    }
  ];
  function j3() {
    const [n, , i] = i3(B3), [u, c, s] = u3(U3), f = I.useCallback((d) => c((m) => Py(d, m)), [
      c
    ]);
    return H.jsx("div", {
      style: {
        width: "100%",
        height: "80vh",
        border: "1px solid #ccc",
        borderRadius: "8px"
      },
      children: H.jsxs(a3, {
        nodes: n,
        edges: u,
        onNodesChange: i,
        onEdgesChange: s,
        onConnect: f,
        fitView: true,
        children: [
          H.jsx(v3, {}),
          H.jsx(D3, {}),
          H.jsx(f3, {
            variant: Yn.Dots,
            gap: 12,
            size: 1
          })
        ]
      })
    });
  }
  await Df();
  function Y3() {
    const [n, i] = I.useState(""), [u, c] = I.useState(null), [s, f] = I.useState(false), [d, m] = I.useState(""), [y, h] = I.useState(""), [v, p] = I.useState("text"), x = I.useRef(null);
    I.useEffect(() => {
      Df().then(() => {
        console.log("WASM initialized");
      });
    }, []);
    const E = () => {
      const L = n.trim();
      if (!L) return;
      if (/^ACT:/i.test(L)) {
        const T = L.substring(4).trim(), Z = $g(T);
        _(Z);
        return;
      }
      if (/^CODE:/i.test(L)) {
        const T = L.substring(5).trim(), Z = ef(T);
        _(Z);
        return;
      }
      if ([
        "function",
        "const ",
        "let ",
        "var ",
        "import ",
        "class ",
        "def ",
        "fn ",
        "pub ",
        "impl ",
        "return",
        "if (",
        "for (",
        "while (",
        "=>",
        "();",
        "[]",
        "{}",
        "#include",
        "package ",
        "using namespace",
        "std::",
        "println!"
      ].some((T) => L.includes(T)) || L.includes(";") && L.includes("{")) {
        const T = ef(L);
        _(T);
        return;
      }
      const $ = [
        "Click",
        "Move",
        "Key",
        "Scroll",
        "Drag",
        "Press",
        "Release",
        "Type"
      ];
      if (L.length < 50 && $.some((T) => L.includes(T))) {
        const T = $g(L);
        _(T);
        return;
      }
      const it = Jg(L);
      _(it);
    }, _ = (L) => {
      const G = BigInt("0x" + L), ot = Number(G & 0xFFn), $ = Number(G >> 8n & 0xFFn), F = Number(G >> 16n & 0xFFFFFFFFn), it = Number(G >> 48n & 0xFFFFFFFFn), T = G >> 80n & 0xFFFFFFFFFFFFn;
      c({
        hex: L,
        header: ot,
        meta: $,
        semantico: F,
        estructural: it,
        exacto: T
      });
    }, z = (L) => {
      var _a;
      const G = (_a = L.target.files) == null ? void 0 : _a[0];
      G && C(G);
    }, C = (L) => {
      m(L.name), h(A(L.name));
      const G = new FileReader();
      G.onload = () => {
        var _a;
        const ot = G.result, $ = new Uint8Array(ot), F = (_a = L.name.split(".").pop()) == null ? void 0 : _a.toLowerCase();
        let it = "";
        if ([
          "jpg",
          "jpeg",
          "png",
          "gif",
          "webp"
        ].includes(F || "")) it = wx($);
        else if (F === "wav") it = Ex($);
        else {
          const T = new FileReader();
          T.onload = () => {
            const Z = T.result;
            if ([
              "rs",
              "py",
              "js",
              "ts",
              "json",
              "cpp",
              "java",
              "go",
              "c",
              "h",
              "html",
              "css",
              "sh",
              "bat",
              "ps1"
            ].includes(F || "")) {
              const O = ef(Z);
              _(O);
            } else {
              const O = Jg(Z);
              _(O);
            }
          }, T.readAsText(L);
          return;
        }
        _(it);
      }, L.type.startsWith("image/") || L.type.startsWith("audio/"), G.readAsArrayBuffer(L);
    }, M = (L) => {
      L.preventDefault(), f(true);
    }, V = (L) => {
      L.preventDefault(), f(false);
    }, S = (L) => {
      var _a;
      L.preventDefault(), f(false);
      const G = (_a = L.dataTransfer.files) == null ? void 0 : _a[0];
      G && C(G);
    }, A = (L) => {
      var _a;
      const G = (_a = L.split(".").pop()) == null ? void 0 : _a.toLowerCase();
      return [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "webp"
      ].includes(G || "") ? "image" : G === "wav" ? "audio" : [
        "rs",
        "py",
        "js",
        "ts",
        "json",
        "cpp",
        "java",
        "go"
      ].includes(G || "") ? "code" : "text";
    }, X = () => {
      switch (y) {
        case "image":
          return H.jsx(Qg, {
            className: "w-8 h-8 text-cyan-400"
          });
        case "audio":
          return H.jsx(Kg, {
            className: "w-8 h-8 text-purple-400"
          });
        case "code":
          return H.jsx(Zg, {
            className: "w-8 h-8 text-green-400"
          });
        default:
          return H.jsx(Ps, {
            className: "w-8 h-8 text-blue-400"
          });
      }
    }, j = (L) => {
      switch (L) {
        case 1:
          return {
            name: "Text",
            icon: H.jsx(Ps, {
              className: "w-4 h-4"
            })
          };
        case 2:
          return {
            name: "Code",
            icon: H.jsx(Zg, {
              className: "w-4 h-4"
            })
          };
        case 3:
          return {
            name: "Image",
            icon: H.jsx(Qg, {
              className: "w-4 h-4"
            })
          };
        case 4:
          return {
            name: "Audio",
            icon: H.jsx(Kg, {
              className: "w-4 h-4"
            })
          };
        case 5:
          return {
            name: "Action",
            icon: H.jsx(kg, {
              className: "w-4 h-4"
            })
          };
        default:
          return {
            name: "Unknown",
            icon: null
          };
      }
    }, U = (L, G) => {
      if (L === 5) switch (G) {
        case 1:
          return "Keyboard";
        case 2:
          return "Mouse";
        default:
          return "Other";
      }
      return "N/A";
    };
    return H.jsx("div", {
      className: "min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8",
      children: H.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          H.jsxs("div", {
            className: "text-center mb-8",
            children: [
              H.jsxs("h1", {
                className: "text-4xl md:text-5xl font-bold mb-2",
                children: [
                  H.jsx("span", {
                    className: "text-cyan-400",
                    children: "GENESIS"
                  }),
                  " ",
                  H.jsx("span", {
                    className: "text-white",
                    children: "TOGENIZER"
                  })
                ]
              }),
              H.jsx("p", {
                className: "text-gray-400 text-lg",
                children: "v1.1 - Multimodal Hashing Protocol"
              })
            ]
          }),
          H.jsxs("div", {
            className: "flex mb-6 border-b border-gray-700",
            children: [
              H.jsxs("button", {
                className: `px-4 py-2 flex items-center gap-2 ${v === "text" ? "border-b-2 border-cyan-400 text-cyan-400" : "text-gray-400"}`,
                onClick: () => p("text"),
                children: [
                  H.jsx(Ps, {
                    className: "w-4 h-4"
                  }),
                  "Text/Code"
                ]
              }),
              H.jsxs("button", {
                className: `px-4 py-2 flex items-center gap-2 ${v === "file" ? "border-b-2 border-cyan-400 text-cyan-400" : "text-gray-400"}`,
                onClick: () => p("file"),
                children: [
                  H.jsx(Gg, {
                    className: "w-4 h-4"
                  }),
                  "File Upload"
                ]
              }),
              H.jsxs("button", {
                className: `px-4 py-2 flex items-center gap-2 ${v === "visual" ? "border-b-2 border-cyan-400 text-cyan-400" : "text-gray-400"}`,
                onClick: () => p("visual"),
                children: [
                  H.jsx(gx, {
                    className: "w-4 h-4"
                  }),
                  "Neuro-Link"
                ]
              })
            ]
          }),
          v === "visual" ? H.jsx("div", {
            className: "mb-6 h-[600px] bg-gray-800 border border-gray-700 rounded-lg overflow-hidden",
            children: H.jsx(j3, {})
          }) : v === "text" ? H.jsxs("div", {
            className: "mb-6",
            children: [
              H.jsx("textarea", {
                className: "w-full h-32 p-4 bg-gray-800 border border-gray-700 rounded-lg text-white font-mono resize-none focus:outline-none focus:border-cyan-400",
                placeholder: "Enter text, code (fn main...), or action (ClickLeft). Auto-detection enabled.",
                value: n,
                onChange: (L) => i(L.target.value)
              }),
              H.jsxs("button", {
                className: "mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors flex items-center gap-2",
                onClick: E,
                children: [
                  H.jsx(kg, {
                    className: "w-4 h-4"
                  }),
                  "Generate Togen"
                ]
              })
            ]
          }) : H.jsxs("div", {
            className: `mb-6 border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${s ? "border-cyan-400 bg-gray-800" : "border-gray-700 bg-gray-800 hover:border-gray-600"}`,
            onDragOver: M,
            onDragLeave: V,
            onDrop: S,
            onClick: () => {
              var _a;
              return (_a = x.current) == null ? void 0 : _a.click();
            },
            children: [
              H.jsx("input", {
                type: "file",
                ref: x,
                className: "hidden",
                onChange: z,
                accept: ".txt,.rs,.py,.js,.ts,.json,.cpp,.java,.go,.jpg,.jpeg,.png,.gif,.webp,.wav"
              }),
              H.jsx("div", {
                className: "mb-4",
                children: d ? H.jsxs("div", {
                  className: "flex items-center justify-center gap-4",
                  children: [
                    X(),
                    H.jsx("span", {
                      className: "text-white font-medium",
                      children: d
                    })
                  ]
                }) : H.jsx(Gg, {
                  className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                })
              }),
              H.jsx("p", {
                className: "text-gray-400 mb-2",
                children: d ? "Click to replace or drop new file" : "Drag & drop files here or click to browse"
              }),
              H.jsx("p", {
                className: "text-gray-500 text-sm",
                children: "Supported: Images, Audio, Code, Text"
              })
            ]
          }),
          u && H.jsxs("div", {
            className: "mt-8",
            children: [
              H.jsx("h2", {
                className: "text-2xl font-bold mb-4 text-white",
                children: "Togen Result"
              }),
              H.jsx("div", {
                className: "bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6",
                children: H.jsxs("div", {
                  className: "flex items-center gap-2 mb-2",
                  children: [
                    H.jsx("span", {
                      className: "text-gray-400",
                      children: "0x"
                    }),
                    H.jsx("span", {
                      className: "text-white font-mono text-lg break-all",
                      children: u.hex
                    }),
                    H.jsx("button", {
                      className: "ml-auto text-gray-400 hover:text-white",
                      onClick: () => navigator.clipboard.writeText(u.hex),
                      children: "Copy"
                    })
                  ]
                })
              }),
              H.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",
                children: [
                  H.jsxs("div", {
                    className: "bg-gray-800 border border-gray-700 rounded-lg p-4",
                    children: [
                      H.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                          j(u.header).icon,
                          H.jsx("h3", {
                            className: "text-cyan-400 font-semibold",
                            children: "Header"
                          })
                        ]
                      }),
                      H.jsxs("p", {
                        className: "text-white font-mono",
                        children: [
                          "0x",
                          u.header.toString(16).toUpperCase().padStart(2, "0")
                        ]
                      }),
                      H.jsx("p", {
                        className: "text-gray-400 text-sm mt-1",
                        children: j(u.header).name
                      })
                    ]
                  }),
                  H.jsxs("div", {
                    className: "bg-gray-800 border border-gray-700 rounded-lg p-4",
                    children: [
                      H.jsx("h3", {
                        className: "text-purple-400 font-semibold mb-2",
                        children: "Meta"
                      }),
                      H.jsxs("p", {
                        className: "text-white font-mono",
                        children: [
                          "0x",
                          u.meta.toString(16).toUpperCase().padStart(2, "0")
                        ]
                      }),
                      H.jsx("p", {
                        className: "text-gray-400 text-sm mt-1",
                        children: U(u.header, u.meta)
                      })
                    ]
                  }),
                  H.jsxs("div", {
                    className: "bg-gray-800 border border-gray-700 rounded-lg p-4",
                    children: [
                      H.jsx("h3", {
                        className: "text-green-400 font-semibold mb-2",
                        children: "Sem\xE1ntico"
                      }),
                      H.jsxs("p", {
                        className: "text-white font-mono",
                        children: [
                          "0x",
                          u.semantico.toString(16).toUpperCase().padStart(8, "0")
                        ]
                      })
                    ]
                  }),
                  H.jsxs("div", {
                    className: "bg-gray-800 border border-gray-700 rounded-lg p-4",
                    children: [
                      H.jsx("h3", {
                        className: "text-blue-400 font-semibold mb-2",
                        children: "Estructural"
                      }),
                      H.jsxs("p", {
                        className: "text-white font-mono",
                        children: [
                          "0x",
                          u.estructural.toString(16).toUpperCase().padStart(8, "0")
                        ]
                      })
                    ]
                  }),
                  H.jsxs("div", {
                    className: "bg-gray-800 border border-gray-700 rounded-lg p-4",
                    children: [
                      H.jsx("h3", {
                        className: "text-yellow-400 font-semibold mb-2",
                        children: "Exacto"
                      }),
                      H.jsxs("p", {
                        className: "text-white font-mono",
                        children: [
                          "0x",
                          u.exacto.toString(16).toUpperCase().padStart(12, "0")
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          H.jsxs("div", {
            className: "mt-12 text-center text-gray-500 text-sm",
            children: [
              H.jsx("p", {
                children: "Genesis Togenizer v1.1 | Multimodal Hashing Protocol"
              }),
              H.jsx("p", {
                className: "mt-1",
                children: "Deterministic 128-bit hashing for Text, Code, Images, Audio, and Actions"
              })
            ]
          })
        ]
      })
    });
  }
  ox.createRoot(document.getElementById("root")).render(H.jsx(I.StrictMode, {
    children: H.jsx(Y3, {})
  }));
})();
