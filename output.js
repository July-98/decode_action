//Sun Aug 11 2024 11:01:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var __wxAppCurrentFile__ = __wxAppCurrentFile__ || "";
var Component = Component || function () {};
var definePlugin = definePlugin || function () {};
var requirePlugin = requirePlugin || function () {};
var Behavior = Behavior || function () {};
var __vd_version_info__ = __vd_version_info__ || {};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};
try {
  Object.assign(__wxConfig, {
    resolveAlias: {
      "@/*": "/*"
    }
  });
} catch (e) {
  console.error("resolveAlias is illegal", e);
}
if (typeof globalThis !== "object") {
  var globalThis = {};
}
var __webnode__;
(function () {
  "use strict";

  var e = {};
  (function () {
    e.d = function (r, n) {
      for (var t in n) {
        if (e.o(n, t) && !e.o(r, t)) {
          Object.defineProperty(r, t, {
            enumerable: true,
            get: n[t]
          });
        }
      }
    };
  })();
  (function () {
    e.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    };
  })();
  (function () {
    e.r = function (e) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(e, "__esModule", {
        value: true
      });
    };
  })();
  var r = {};
  e.r(r);
  e.d(r, {
    define: function () {
      return c;
    },
    require: function () {
      return O;
    },
    requireOnce: function () {
      return S;
    }
  });
  var n = globalThis;
  var t = 1;
  var i = 2;
  var o = {};
  var a = {};
  var u = 1;
  if (globalThis.wxModuleVersion) {
    var s = ~~globalThis.wxModuleVersion;
    globalThis.enableWxModule = u > s;
  } else {
    globalThis.wxModuleVersion = u;
    globalThis.enableWxModule = true;
  }
  var f = function () {
    return {
      __wxRoute: n.__wxRoute,
      __wxAppCurrentFile__: n.__wxAppCurrentFile__,
      __wxRouteBegin: n.__wxRouteBegin
    };
  };
  var l = function (e) {
    n.__wxRoute = e.__wxRoute;
    n.__wxAppCurrentFile__ = e.__wxAppCurrentFile__;
    n.__wxRouteBegin = e.__wxRouteBegin;
  };
  function c(e, r) {
    var n;
    if ((n = o[e]) !== null && n !== void 0 && n.factory) {
      var i = o[e];
      var a = r.toString();
      if (!i.factoryString) {
        i.factoryString = i.factory.toString();
      }
      if (a !== i.factoryString) {
        o[e] = {
          status: t,
          factory: r,
          factoryString: a
        };
      }
    } else {
      o[e] = {
        status: t,
        factory: r
      };
    }
  }
  var _ = function (e) {
    var r = e.match(/(.*)\/([^/]+)?$/);
    return !r || !r[1] ? "./" : r[1];
  };
  var v = function (e) {
    if (!e) {
      return undefined;
    }
    if (m.subPackages) {
      for (var r = 0, n = m.subPackages.length; r < n; r++) {
        if (e.indexOf(m.subPackages[r].root) === 0) {
          return m.subPackages[r];
        }
      }
    }
    return undefined;
  };
  var d = function (e) {
    var r = [];
    var n = e.split("/");
    for (var t = 0, i = n.length; t < i; ++t) {
      var o = n[t];
      if (o === "" || o === ".") {
        continue;
      }
      if (o === "..") {
        if (r.length === 0) {
          r = null;
          break;
        }
        r.pop();
      } else if (t + 1 < i && n[t + 1] === "..") {
        t++;
      } else {
        r.push(o);
      }
    }
    return r;
  };
  var g = function (e) {
    var r = d(e + "/index.js").join("/");
    if (o[r]) return r;
    r = d(e).join("/");
    if (!/\.js$/.test(r)) r += ".js";
    if (o[r]) return r;
    return "";
  };
  var p = function (e, r, n) {
    var t = e;
    if (!/\.js$/.test(t)) t += ".js";
    if (typeof t === "string" && o[t]) return t;
    var i = d(r);
    if (!i) throw new Error("can not find module : " + n);
    var a = e.substring(i.join("/").length);
    var u;
    var s;
    while (i.length) {
      s = i.join("/") + "/miniprogram_npm" + a;
      u = g(s);
      if (u) break;
      i.pop();
    }
    if (!u) {
      a = a[0] === "/" ? a : "/" + a;
      s = "miniprogram_npm" + a;
      u = g(s);
    }
    return u || e;
  };
  var b = ["wx0354ba48aadc0ab2", "wxfa43a4a7041a84de"];
  function h(e, r) {
    var n = e === "__APP__";
    if (e.slice(-1) !== "/") e += "/";
    if (m.platform === "devtools") {
      WeixinJSBridge.invoke("injectSubPackages", {
        subPackages: [e]
      }, r);
    } else {
      __appServiceSDK__.loadSubpackage({
        name: e,
        success() {
          var t = m.subPackages.find(function (r) {
            return r.root === e;
          });
          var i = Object.keys(t.plugins || {}).map(function (e) {
            var r = t.plugins[e].provider;
            var n = "__plugin__/" + r;
            return {
              plugin_id: r,
              prefix_path: b.includes(r) ? null : n
            };
          });
          __subContextEngine__.injectEntryFile(n ? "" : e, i);
          r();
        }
      });
    }
  }
  var w = function (e) {
    var r;
    var n = (r = m) === null || r === void 0 ? void 0 : r.subPackages;
    if (!n) n = [];
    for (var t = 0; t < n.length; ++t) {
      var i = n[t].root || "";
      if (i && i.slice(-1) !== "/") {
        i += "/";
      }
      if (e.slice(0, i.length) === i) {
        return i;
      }
    }
    return "__APP__";
  };
  var x = false;
  var y = [];
  var j = function (e) {
    Object.keys(e).forEach(function (r) {
      var n = r;
      if (r.endsWith("*")) {
        n = n.slice(0, -1);
      }
      var t = e[r];
      if (e[r].endsWith("*")) {
        t = t.slice(0, -1);
      }
      y.push({
        key: n,
        value: t
      });
    });
  };
  var m = Object.assign({}, __wxConfig);
  if (typeof __wxConfig.onReady === "function") {
    __wxConfig.onReady(function () {
      m = Object.assign({}, __wxConfig);
      if (typeof m.resolveAlias === "object") {
        x = !!Object.keys(m.resolveAlias).length;
        x && j(m.resolveAlias);
      }
    });
  } else {
    if (typeof m.resolveAlias === "object") {
      x = !!Object.keys(m.resolveAlias).length;
      x && j(m.resolveAlias);
    }
  }
  var k = function (e) {
    var r = {
      key: ""
    };
    var n = false;
    y.forEach(function (t) {
      if (e.startsWith(t.key) && "".length < t.key.length) {
        r = t;
        n = true;
      }
    });
    if (!n) {
      return;
    }
    var t = e.replace("", r.value);
    if (t[0] === "/") {
      t = t.slice(1);
    }
    return t;
  };
  var P = function (e) {
    var r = _(e);
    var n = function (n, t) {
      var i = r;
      if (typeof n !== "string") {
        throw new Error("require args must be a string");
      }
      var o;
      if (n === "/__wx__/private-api") {
        o = d(n).join("/");
      } else {
        if (x) {
          o = k(n);
        }
        if (o !== undefined) {
          i = "";
          o = d(o).join("/");
        } else {
          o = d(i + "/" + n).join("/");
        }
      }
      if (!o) throw new Error("can not find module : ".concat(o, ", require args is ").concat(n));
      try {
        var a = p(o, i, n);
        var u = function (e) {
          return d(e)[0] === "functional-pages";
        };
        if (u(a) !== u(e)) {
          Reporter.thirdErrorReport({
            error: new Error("should not require across \"functional-pages\" folder"),
            extend: "at require(\"" + n + "\") in " + e
          });
        }
        if (m.platform === "devtools" && m.subPackages && t === undefined) {
          var s = v(a);
          var f = v(e);
          if (s && s !== f) {
            console.warn("Requires \"".concat(n, "\" from \"").concat(e, "\" without a callback may fail in production, since they are in different subPackages"));
          }
        }
        return O(a, undefined, t, n);
      } catch (e) {
        throw e;
      }
    };
    n.async = function (e) {
      return new Promise(function (r) {
        return n(e, r);
      });
    };
    return n;
  };
  function O(e, r, n) {
    var u = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    if (typeof r === "undefined") {
      r = true;
    }
    if (typeof e !== "string") {
      throw new Error("require args must be a string");
    }
    var s = o[e];
    if (!s) {
      var c = e.indexOf("/") === -1 ? e + "/index.js" : e;
      c = "miniprogram_npm/" + c;
      if (!/\.js$/.test(c)) c += ".js";
      s = o[c];
    }
    if (!e.endsWith(".js")) e += ".js";
    if (!s && m.platform !== "devtools" && typeof __subContextEngine__ !== "undefined") {
      var _ = "/" + e.substr(0, e.length - 3) + ".appservice.js";
      var v = f();
      var d = __subContextEngine__.loadJsFiles([_], null, {
        waitResult: true
      });
      l(v);
      s = o[e];
      d && d(!!s);
    }
    if (typeof n === "function") {
      if (s) {
        setTimeout(function () {
          return n(O(e));
        });
      } else {
        var g = w(e);
        var p = f();
        h(g, function () {
          n(O(e));
          l(p);
        });
      }
      return;
    }
    if (!s) {
      var b = "module '".concat(e, "' is not defined, require args is '").concat(u === "" ? e : u, "'");
      throw new Error(b);
    }
    var x = {
      exports: {}
    };
    var y = s.factory;
    if (!r || a[e]) {
      delete s.exports;
      s.status = t;
      a[e] = true;
      y && y(P(e), x, x.exports);
      return x.exports;
    }
    if (s.status === t) {
      s.exports = x.exports;
      s.status = i;
      var j;
      try {
        y && (j = y(P(e), x, x.exports));
      } catch (e) {
        s.status = t;
        throw e;
      }
      s.exports = x.exports !== undefined ? x.exports : j;
    }
    return s.exports;
  }
  function S(e) {
    return O(e, false);
  }
  n.__modules__ = o;
  __webnode__ = r;
})();
if (globalThis.enableWxModule !== false) {
  requireOnce = __webnode__.requireOnce;
}
global.__wcc_version__ = "v0.5vv_20211229_syb_scopedata";
global.__wcc_version_info__ = {
  "customComponents": true,
  "fixZeroRpx": true,
  "propValueDeepCopy": false
};
var $gwxc;
$gwx = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
  return function (path, global) {
    if (typeof global === "undefined") {
      if (typeof __GWX_GLOBAL__ === "undefined") global = {};else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === "undefined") {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === "undefined") global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === "undefined") global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === "undefined") global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx || [];
    function gz$gwx_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_1) return __WXML_GLOBAL__.ops_cached.$gwx_1;
      __WXML_GLOBAL__.ops_cached.$gwx_1 = [];
      (function (z) {
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "skeleton"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx = z;
    __WXML_GLOBAL__.ops_init.$gwx = true;
    var nv_require = function () {
      var nnm = {
        "p_./component/movable-page/index.wxs": np_0,
        "p_./utils/tools.wxs": np_1
      };
      var nom = {};
      return function (n) {
        if (n[0] === "p" && n[1] === "_" && f_[n.slice(2)]) return f_[n.slice(2)];
        return function () {
          if (!nnm[n]) return undefined;
          try {
            if (!nom[n]) nom[n] = nnm[n]();
            return nom[n];
          } catch (e) {
            e.message = e.message.replace(/nv_/g, "");
            var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
            e.stack = tmp.substring(0, tmp.lastIndexOf("\n"));
            e.stack = e.stack.replace(/\snv_/g, " ");
            e.stack = $gstack(e.stack);
            e.stack += "\n    at " + n.substring(2);
            console.error(e);
          }
        };
      };
    }();
    f_["./component/goods-detail/index.wxml"] = {};
    f_["./component/goods-detail/index.wxml"]._ = f_["./utils/tools.wxs"] || nv_require("p_./utils/tools.wxs");
    f_["./component/goods-detail/index.wxml"]._();
    f_["./component/movable-page/index.wxml"] = {};
    f_["./component/movable-page/index.wxml"]._ = f_["./component/movable-page/index.wxs"] || nv_require("p_./component/movable-page/index.wxs");
    f_["./component/movable-page/index.wxml"]._();
    f_["./component/movable-page/index.wxs"] = nv_require("p_./component/movable-page/index.wxs");
    function np_0() {
      var nv_module = {
        nv_exports: {}
      };
      var nv_startY = 0;
      var nv_scrollTop = 0;
      var nv_y = -1;
      var nv_config = {
        nv_minY: "0rpx",
        nv_maxY: "100rpx",
        nv_maxOffset: "50rpx",
        nv_damping: 100
      };
      var nv_tools = {
        nv_onTouchStart: function (nv_e) {
          nv_startY = nv_e.nv_touches[0].nv_clientY;
          if (nv_y === -1) nv_y = nv_parseInt(nv_e.nv_currentTarget.nv_dataset.nv_y);
        },
        nv_onTouchMove: function (nv_e) {
          if (nv_e.nv_currentTarget.nv_dataset.nv_unFingerMove) return;
          var nv_offset = nv_e.nv_changedTouches[0].nv_clientY - nv_startY;
          var nv_minY = nv_parseInt(nv_e.nv_currentTarget.nv_dataset.nv_minY || nv_config.nv_minY);
          var nv_maxY = nv_parseInt(nv_e.nv_currentTarget.nv_dataset.nv_maxY || nv_config.nv_maxY);
          var nv_moveingY = nv_y + nv_offset * nv_config.nv_damping / 100;
          var nv_canToBottom = nv_moveingY <= nv_maxY && nv_scrollTop < 50 && nv_offset > 0 && nv_offset >= nv_minY && nv_offset <= nv_maxY;
          var nv_canToTop = nv_moveingY >= nv_minY && nv_offset < 0 && Math.nv_abs(nv_offset) >= nv_minY && Math.nv_abs(nv_offset) <= nv_maxY;
          if (nv_canToBottom || nv_canToTop) {
            nv_e.nv_instance.nv_setStyle({
              nv_transition: "none",
              nv_transform: "translate3d(0," + nv_moveingY + "rpx,0)"
            });
          }
        },
        nv_onTouchEnd: function (nv_e, nv_ownerInstance) {
          var nv_offset = nv_e.nv_changedTouches[0].nv_clientY - nv_startY;
          var nv_minY = nv_parseInt(nv_e.nv_currentTarget.nv_dataset.nv_minY || nv_config.nv_minY);
          var nv_maxY = nv_parseInt(nv_e.nv_currentTarget.nv_dataset.nv_maxY || nv_config.nv_maxY);
          var nv_maxOffset = nv_parseInt(nv_e.nv_currentTarget.nv_dataset.nv_maxOffset || nv_config.nv_maxOffset);
          var nv_outMaxOffset = Math.nv_abs(nv_offset) >= nv_maxOffset;
          if (nv_offset < 0) {
            if (nv_outMaxOffset) nv_ownerInstance.nv_callMethod("onTouchToBottom", {
              nv_offset
            });
          } else {
            if (nv_outMaxOffset) nv_ownerInstance.nv_callMethod("onTouchToTop", {
              nv_offset
            });
          }
          if (nv_e.nv_currentTarget.nv_dataset.nv_unFingerMove) return;
          if (nv_y === nv_maxY && nv_offset < 0 && nv_outMaxOffset) {
            nv_y = nv_minY;
            nv_e.nv_instance.nv_setStyle({
              nv_transition: "all 0.5s",
              nv_transform: "translate3d(0," + nv_y + "rpx,0)"
            });
            nv_ownerInstance.nv_callMethod("onMovePositionChange", {
              nv_position: "top"
            });
          } else if (nv_y === nv_maxY && nv_offset < 0 && !nv_outMaxOffset) {
            nv_y = nv_maxY;
            nv_e.nv_instance.nv_setStyle({
              nv_transition: "all 0.5s",
              nv_transform: "translate3d(0," + nv_y + "rpx,0)"
            });
          } else if (nv_y === nv_minY && nv_scrollTop < 50 && nv_offset > 0 && nv_outMaxOffset) {
            nv_y = nv_maxY;
            nv_e.nv_instance.nv_setStyle({
              nv_transition: "all 0.5s",
              nv_transform: "translate3d(0," + nv_y + "rpx,0)"
            });
            nv_ownerInstance.nv_callMethod("onMovePositionChange", {
              nv_position: "bottom"
            });
          } else if (nv_y === nv_minY && nv_scrollTop < 50 && nv_offset > 0 && !nv_outMaxOffset) {
            nv_y = nv_minY;
            nv_e.nv_instance.nv_setStyle({
              nv_transition: "all 0.5s",
              nv_transform: "translate3d(0," + nv_y + "rpx,0)"
            });
          }
        },
        nv_onScroll: function (nv_e) {
          nv_scrollTop = nv_e.nv_detail.nv_scrollTop;
        }
      };
      nv_module.nv_exports = nv_tools;
      return nv_module.nv_exports;
    }
    f_["./component/vtabs/index.wxml"] = {};
    f_["./component/vtabs/index.wxml"]._ = f_["./utils/tools.wxs"] || nv_require("p_./utils/tools.wxs");
    f_["./component/vtabs/index.wxml"]._();
    f_["./pages/goods-search/index.wxml"] = {};
    f_["./pages/goods-search/index.wxml"]._ = f_["./utils/tools.wxs"] || nv_require("p_./utils/tools.wxs");
    f_["./pages/goods-search/index.wxml"]._();
    f_["./pages/menu/index.wxml"] = {};
    f_["./pages/menu/index.wxml"]._ = f_["./utils/tools.wxs"] || nv_require("p_./utils/tools.wxs");
    f_["./pages/menu/index.wxml"]._();
    f_["./utils/tools.wxs"] = nv_require("p_./utils/tools.wxs");
    function np_1() {
      var nv_module = {
        nv_exports: {}
      };
      var nv_filter = {
        nv_substrString: function (nv_str, nv_n) {
          if (!nv_str) return;
          if (typeof nv_str !== "string") return;
          if (nv_str.nv_length < nv_n) return nv_str;
          return nv_str.nv_slice(nv_n);
        },
        nv_setCornerTagStyle: function (nv_corner, nv_type) {
          var nv_borderColor;
          var nv_styleStr = "";
          if (nv_corner.nv_fontColor) {
            var nv__fontColor = nv_corner.nv_fontColor.nv_toLowerCase();
            var nv_colorSlice = [];
            for (var nv_i = 1; nv_i < 7; nv_i += 2) {
              nv_colorSlice.nv_push(nv_parseInt("0x" + nv__fontColor.nv_slice(nv_i, nv_i + 2)));
            }
            nv_borderColor = "rgba(" + nv_colorSlice.nv_join(",") + ", 0.2)";
          }
          if (nv_corner.nv_shapeType === 1) {
            nv_styleStr += "border-radius: 8rpx;";
          } else {
            nv_styleStr += "border-radius: 8rpx 8rpx 8rpx 0;";
          }
          if (nv_type == "goods") {
            nv_styleStr += "border: 1px solid " + nv_borderColor + ";";
          } else {
            nv_styleStr += "background: " + nv_corner.nv_bgColor + ";";
          }
          nv_styleStr += "color:" + nv_corner.nv_fontColor + ";";
          return nv_styleStr;
        },
        nv_filterStringBreak: function (nv_str) {
          if (!nv_str) return nv_str;
          if (typeof nv_str !== "string") return nv_str;
          return nv_str = nv_str.nv_replace(nv_getRegExp("\n", "img"), " ");
        }
      };
      nv_module.nv_exports = nv_filter;
      return nv_module.nv_exports;
    }
    var x = ["./component/goods-detail/index.skeleton.wxml"];
    d_[x[0]] = {};
    d_[x[0]].skeleton = function (e, s, r, gg) {
      var b = x[0] + ":skeleton";
      r.wxVkey = b;
      gg.f = $gdc(f_["./component/goods-detail/index.skeleton.wxml"], "", 1);
      if (p_[b]) {
        _wl(b, x[0]);
        return;
      }
      p_[b] = true;
      try {} catch (err) {
        p_[b] = false;
        throw err;
      }
      p_[b] = false;
      return r;
    };
    var m0 = function (e, s, r, gg) {
      return r;
    };
    e_[x[0]] = {
      f: m0,
      j: [],
      i: [],
      ti: [],
      ic: []
    };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = {
          "tag": "wx-page"
        };
        root.children = [];
        g = "$gwx";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        g = "";
        return root;
      };
    }
  };
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || true) $gwx();
if (__vd_version_info__.delayedGwx) __wxAppCode__["component/goods-detail/index.skeleton.wxml"] = [$gwx, "./component/goods-detail/index.skeleton.wxml"];else __wxAppCode__["component/goods-detail/index.skeleton.wxml"] = $gwx("./component/goods-detail/index.skeleton.wxml");
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/Arrayincludes.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function (r, e) {
      if (null == this) throw new TypeError("\"this\" is null or not defined");
      var t = Object(this),
        n = t.length >>> 0;
      if (0 == n) return !1;
      for (var i, o, a = 0 | e, u = Math.max(0 <= a ? a : n - Math.abs(a), 0); u < n;) {
        if ((i = t[u]) === (o = r) || "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o)) return !0;
        u++;
      }
      return !1;
    }
  });
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/Arrayincludes.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/Objectvalues.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  Object.values || (Object.values = function (e) {
    if (e !== Object(e)) throw new TypeError("Object.values called on a non-object");
    var t,
      r = [];
    for (t in e) Object.prototype.hasOwnProperty.call(e, t) && r.push(e[t]);
    return r;
  });
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/Objectvalues.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/arrayLikeToArray.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = new Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  module.exports = _arrayLikeToArray;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/arrayLikeToArray.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/arrayWithHoles.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  module.exports = _arrayWithHoles;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/arrayWithHoles.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/arrayWithoutHoles.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var arrayLikeToArray = require("./arrayLikeToArray");
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return arrayLikeToArray(r);
  }
  module.exports = _arrayWithoutHoles;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/arrayWithoutHoles.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/assertThisInitialized.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  module.exports = _assertThisInitialized;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/assertThisInitialized.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/asyncToGenerator.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function asyncGeneratorStep(n, e, r, t, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void r(n);
    }
    i.done ? e(u) : Promise.resolve(u).then(t, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var e = this,
        r = arguments;
      return new Promise(function (t, o) {
        var a = n.apply(e, r);
        function c(n) {
          asyncGeneratorStep(a, t, o, c, i, "next", n);
        }
        function i(n) {
          asyncGeneratorStep(a, t, o, c, i, "throw", n);
        }
        c(void 0);
      });
    };
  }
  module.exports = _asyncToGenerator;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/asyncToGenerator.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/classCallCheck.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _classCallCheck(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  module.exports = _classCallCheck;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/classCallCheck.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/createClass.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var n = r[t];
      n.enumerable = n.enumerable || !1;
      n.configurable = !0;
      "value" in n && (n.writable = !0);
      Object.defineProperty(e, n.key, n);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e;
  }
  module.exports = _createClass;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/createClass.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/createForOfIteratorHelper.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var unsupportedIterableToArray = require("./unsupportedIterableToArray");
  function _createForOfIteratorHelper(r, e) {
    var t;
    if ("undefined" == typeof Symbol || null == r[Symbol.iterator]) {
      if (Array.isArray(r) || (t = unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a,
      u = true,
      i = false;
    return {
      s: function () {
        t = r[Symbol.iterator]();
      },
      n: function () {
        var r = t.next();
        return u = r.done, r;
      },
      e: function (r) {
        i = !0;
        a = r;
      },
      f: function () {
        try {
          u || null == t.return || t.return();
        } finally {
          if (i) throw a;
        }
      }
    };
  }
  module.exports = _createForOfIteratorHelper;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/createForOfIteratorHelper.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/createSuper.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var getPrototypeOf = require("./getPrototypeOf"),
    isNativeReflectConstruct = require("./isNativeReflectConstruct"),
    possibleConstructorReturn = require("./possibleConstructorReturn");
  function _createSuper(t) {
    var e = isNativeReflectConstruct();
    return function () {
      var r,
        o = getPrototypeOf(t);
      if (e) {
        var s = getPrototypeOf(this).constructor;
        r = Reflect.construct(o, arguments, s);
      } else r = o.apply(this, arguments);
      return possibleConstructorReturn(this, r);
    };
  }
  module.exports = _createSuper;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/createSuper.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/defineProperty.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _defineProperty(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = n, e;
  }
  module.exports = _defineProperty;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/defineProperty.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/get.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var superPropBase = require("./superPropBase");
  function _get(e, t, r) {
    return "undefined" != typeof Reflect && Reflect.get ? module.exports = _get = Reflect.get : module.exports = _get = function (e, t, r) {
      var o = superPropBase(e, t);
      if (o) {
        var u = Object.getOwnPropertyDescriptor(o, t);
        return u.get ? u.get.call(r) : u.value;
      }
    }, _get(e, t, r || e);
  }
  module.exports = _get;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/get.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/getPrototypeOf.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _getPrototypeOf(t) {
    return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  module.exports = _getPrototypeOf;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/getPrototypeOf.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/inherits.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var setPrototypeOf = require("./setPrototypeOf");
  function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    });
    t && setPrototypeOf(e, t);
  }
  module.exports = _inherits;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/inherits.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/interopRequireDefault.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  module.exports = _interopRequireDefault;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/interopRequireDefault.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/interopRequireWildcard.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var _typeof = require("./typeof");
  function _getRequireWildcardCache() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return _getRequireWildcardCache = function () {
      return e;
    }, e;
  }
  function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    if (null === e || "object" !== _typeof(e) && "function" != typeof e) return {
      default: e
    };
    var r = _getRequireWildcardCache();
    if (r && r.has(e)) return r.get(e);
    var t = {},
      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
      var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
      o && (o.get || o.set) ? Object.defineProperty(t, i, o) : t[i] = e[i];
    }
    return t.default = e, r && r.set(e, t), t;
  }
  module.exports = _interopRequireWildcard;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/interopRequireWildcard.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/isNativeReflectConstruct.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }
  module.exports = _isNativeReflectConstruct;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/isNativeReflectConstruct.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/iterableToArray.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) return Array.from(r);
  }
  module.exports = _iterableToArray;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/iterableToArray.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/iterableToArrayLimit.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _iterableToArrayLimit(r, t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) {
      var e = [],
        i = true,
        o = false,
        l = void 0;
      try {
        for (var n, a = r[Symbol.iterator](); !(i = (n = a.next()).done) && (e.push(n.value), !t || e.length !== t); i = !0) {}
      } catch (r) {
        o = !0;
        l = r;
      } finally {
        try {
          i || null == a.return || a.return();
        } finally {
          if (o) throw l;
        }
      }
      return e;
    }
  }
  module.exports = _iterableToArrayLimit;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/iterableToArrayLimit.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/nonIterableRest.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/nonIterableRest.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/nonIterableSpread.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/nonIterableSpread.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/objectSpread2.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var defineProperty = require("./defineProperty");
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      }));
      t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  module.exports = _objectSpread2;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/objectSpread2.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/possibleConstructorReturn.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var _typeof = require("./typeof"),
    assertThisInitialized = require("./assertThisInitialized");
  function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? assertThisInitialized(e) : t;
  }
  module.exports = _possibleConstructorReturn;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/possibleConstructorReturn.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/setPrototypeOf.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _setPrototypeOf(t, o) {
    return module.exports = _setPrototypeOf = Object.setPrototypeOf || function (t, o) {
      return t.__proto__ = o, t;
    }, _setPrototypeOf(t, o);
  }
  module.exports = _setPrototypeOf;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/setPrototypeOf.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/slicedToArray.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var arrayWithHoles = require("./arrayWithHoles"),
    iterableToArrayLimit = require("./iterableToArrayLimit"),
    unsupportedIterableToArray = require("./unsupportedIterableToArray"),
    nonIterableRest = require("./nonIterableRest");
  function _slicedToArray(r, e) {
    return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
  }
  module.exports = _slicedToArray;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/slicedToArray.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/superPropBase.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var getPrototypeOf = require("./getPrototypeOf");
  function _superPropBase(e, r) {
    for (; !Object.prototype.hasOwnProperty.call(e, r) && null !== (e = getPrototypeOf(e));) {}
    return e;
  }
  module.exports = _superPropBase;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/superPropBase.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/toArray.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var arrayWithHoles = require("./arrayWithHoles"),
    iterableToArray = require("./iterableToArray"),
    unsupportedIterableToArray = require("./unsupportedIterableToArray"),
    nonIterableRest = require("./nonIterableRest");
  function _toArray(r) {
    return arrayWithHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableRest();
  }
  module.exports = _toArray;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/toArray.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/toConsumableArray.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var arrayWithoutHoles = require("./arrayWithoutHoles"),
    iterableToArray = require("./iterableToArray"),
    unsupportedIterableToArray = require("./unsupportedIterableToArray"),
    nonIterableSpread = require("./nonIterableSpread");
  function _toConsumableArray(r) {
    return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
  }
  module.exports = _toConsumableArray;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/toConsumableArray.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/typeof.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  function _typeof(o) {
    return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? module.exports = _typeof = function (o) {
      return typeof o;
    } : module.exports = _typeof = function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  module.exports = _typeof;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/typeof.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/helpers/unsupportedIterableToArray.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  var arrayLikeToArray = require("./arrayLikeToArray");
  function _unsupportedIterableToArray(r, e) {
    if (r) {
      if ("string" == typeof r) return arrayLikeToArray(r, e);
      var t = Object.prototype.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, e) : void 0;
    }
  }
  module.exports = _unsupportedIterableToArray;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/helpers/unsupportedIterableToArray.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("@babel/runtime/regenerator.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  !function (t) {
    "use strict";

    var r,
      e = Object.prototype,
      n = e.hasOwnProperty,
      o = "function" == typeof Symbol ? Symbol : {},
      i = o.iterator || "@@iterator",
      a = o.asyncIterator || "@@asyncIterator",
      c = o.toStringTag || "@@toStringTag",
      u = "object" == typeof module,
      h = t.regeneratorRuntime;
    if (h) u && (module.exports = h);else {
      (h = t.regeneratorRuntime = u ? module.exports : {}).wrap = w;
      var f = "suspendedStart",
        s = "suspendedYield",
        l = "executing",
        p = "completed",
        y = {},
        v = {};
      v[i] = function () {
        return this;
      };
      var d = Object.getPrototypeOf,
        g = d && d(d(P([])));
      g && g !== e && n.call(g, i) && (v = g);
      var m = b.prototype = x.prototype = Object.create(v);
      E.prototype = m.constructor = b;
      b.constructor = E;
      b[c] = E.displayName = "GeneratorFunction";
      h.isGeneratorFunction = function (t) {
        var r = "function" == typeof t && t.constructor;
        return !!r && (r === E || "GeneratorFunction" === (r.displayName || r.name));
      };
      h.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(m), t;
      };
      h.awrap = function (t) {
        return {
          __await: t
        };
      };
      _(j.prototype);
      j.prototype[a] = function () {
        return this;
      };
      h.AsyncIterator = j;
      h.async = function (t, r, e, n) {
        var o = new j(w(t, r, e, n));
        return h.isGeneratorFunction(r) ? o : o.next().then(function (t) {
          return t.done ? t.value : o.next();
        });
      };
      _(m);
      m[c] = "Generator";
      m[i] = function () {
        return this;
      };
      m.toString = function () {
        return "[object Generator]";
      };
      h.keys = function (t) {
        var r = [];
        for (var e in t) r.push(e);
        return r.reverse(), function e() {
          for (; r.length;) {
            var n = r.pop();
            if (n in t) return e.value = n, e.done = !1, e;
          }
          return e.done = !0, e;
        };
      };
      h.values = P;
      N.prototype = {
        constructor: N,
        reset: function (t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(G), !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var e = this;
          function o(n, o) {
            return c.type = "throw", c.arg = t, e.next = n, o && (e.method = "next", e.arg = r), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var u = n.call(a, "catchLoc"),
                h = n.call(a, "finallyLoc");
              if (u && h) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!h) throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, r) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var o = this.tryEntries[e];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function (t, r) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), y;
        },
        finish: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), G(e), y;
          }
        },
        catch: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.tryLoc === t) {
              var n = e.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                G(e);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (t, e, n) {
          return this.delegate = {
            iterator: P(t),
            resultName: e,
            nextLoc: n
          }, "next" === this.method && (this.arg = r), y;
        }
      };
    }
    function w(t, r, e, n) {
      var o = r && r.prototype instanceof x ? r : x,
        i = Object.create(o.prototype),
        a = new N(n || []);
      return i._invoke = function (t, r, e) {
        var n = f;
        return function (o, i) {
          if (n === l) throw new Error("Generator is already running");
          if (n === p) {
            if ("throw" === o) throw i;
            return F();
          }
          for (e.method = o, e.arg = i;;) {
            var a = e.delegate;
            if (a) {
              var c = O(a, e);
              if (c) {
                if (c === y) continue;
                return c;
              }
            }
            if ("next" === e.method) e.sent = e._sent = e.arg;else if ("throw" === e.method) {
              if (n === f) throw n = p, e.arg;
              e.dispatchException(e.arg);
            } else "return" === e.method && e.abrupt("return", e.arg);
            n = l;
            var u = L(t, r, e);
            if ("normal" === u.type) {
              if (n = e.done ? p : s, u.arg === y) continue;
              return {
                value: u.arg,
                done: e.done
              };
            }
            "throw" === u.type && (n = p, e.method = "throw", e.arg = u.arg);
          }
        };
      }(t, e, a), i;
    }
    function L(t, r, e) {
      try {
        return {
          type: "normal",
          arg: t.call(r, e)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    function x() {}
    function E() {}
    function b() {}
    function _(t) {
      ["next", "throw", "return"].forEach(function (r) {
        t[r] = function (t) {
          return this._invoke(r, t);
        };
      });
    }
    function j(t) {
      var r;
      this._invoke = function (e, o) {
        function i() {
          return new Promise(function (r, i) {
            !function r(e, o, i, a) {
              var c = L(t[e], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == typeof h && n.call(h, "__await") ? Promise.resolve(h.__await).then(function (t) {
                  r("next", t, i, a);
                }, function (t) {
                  r("throw", t, i, a);
                }) : Promise.resolve(h).then(function (t) {
                  u.value = t;
                  i(u);
                }, function (t) {
                  return r("throw", t, i, a);
                });
              }
              a(c.arg);
            }(e, o, r, i);
          });
        }
        return r = r ? r.then(i, i) : i();
      };
    }
    function O(t, e) {
      var n = t.iterator[e.method];
      if (n === r) {
        if (e.delegate = null, "throw" === e.method) {
          if (t.iterator.return && (e.method = "return", e.arg = r, O(t, e), "throw" === e.method)) return y;
          e.method = "throw";
          e.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return y;
      }
      var o = L(n, t.iterator, e.arg);
      if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, y;
      var i = o.arg;
      return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, y) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, y);
    }
    function k(t) {
      var r = {
        tryLoc: t[0]
      };
      1 in t && (r.catchLoc = t[1]);
      2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]);
      this.tryEntries.push(r);
    }
    function G(t) {
      var r = t.completion || {};
      r.type = "normal";
      delete r.arg;
      t.completion = r;
    }
    function N(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      t.forEach(k, this);
      this.reset(!0);
    }
    function P(t) {
      if (t) {
        var e = t[i];
        if (e) return e.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            a = function e() {
              for (; ++o < t.length;) if (n.call(t, o)) return e.value = t[o], e.done = !1, e;
              return e.value = r, e.done = !0, e;
            };
          return a.next = a;
        }
      }
      return {
        next: F
      };
    }
    function F() {
      return {
        value: r,
        done: !0
      };
    }
  }(function () {
    return this || "object" == typeof self && self;
  }() || Function("return this")());
}, {
  isPage: false,
  isComponent: false,
  currentFile: "@babel/runtime/regenerator.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("config/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var e = require("./privateKey"),
    r = {
      dev: e.mxbcKey,
      qa: e.xykKey,
      uat: e.xykKey,
      pro: e.xykKey
    };
  exports.default = r;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "config/index.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("config/privateKey.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.xykKey = exports.mxbcKey = void 0;
  exports.mxbcKey = {
    miniAppId_weixin: "wx7696c66d2245d107",
    appId_weixin: "d82be6bbc1da11eb9dd000163e122ecb",
    privateKey_weixin: "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCtypUdHZJKlQ9LL6lIJSphnhqjke7HclgWuWDRWvzov30du235cCm13mqJ3zziqLCwstdQkuXo9sOPIh94t6nzBHTuqYA1whrUnQrKfv9X4/h3QVkzwT+xWflE+KubJZoe+daLKkDeZjVWnUku8ov0E5vwADACfntEhAwiSZUALX9UgNDTPbj5ESeII+VztZ/KOFsRHMTfDb1GIR/dAc1mL5uYbh0h2Fa/fxRPgf7eJOeWGiygesl3CWj0Ue13qwX9PcG7klJXfToI576MY+A7027a0aZ49QhKnysMGhTdtFCksYG0lwPz3bIR16NvlxNLKanc2h+ILTFQbMW/Y3DRAgMBAAECggEBAJGTfX6rE6zX2bzASsu9HhgxKN1VU6/L70/xrtEPp4SLSpHKO9/S/Y1zpsigr86pQYBx/nxm4KFZewx9p+El7/06AX0djOD7HCB2/+AJq3iC5NF4cvEwclrsJCqLJqxKPiSuYPGnzji9YvaPwArMb0Ff36KVdaHRMw58kfFys5Y2HvDqh4x+sgMUS7kSEQT4YDzCDPlAoEFgF9rlXnh0UVS6pZtvq3cR7pR4A9hvDgX9wU6zn1dGdy4MEXIpckuZkhwbqDLmfoHHeJc5RIjRP7WIRh2CodjetgPFE+SV7SdjECmvYJbet4YLg+Qil0OKR9s9S1BbObgcbC9WxUcrTgECgYEA/Yj8BDfxcsPK5ebE9N2teBFUJuDcHEuM1xp4/tFisoFH90JZJMkVbO19rddAMmdYLTGivWTyPVsM1+9stq/NwsFJWHRUiMK7dttGiXuZry+xvq/SAZoitgI8tXdDXMw7368vatr0g6m7ucBKjZWxSHjK9/KVquVr7BoXFm+YxaECgYEAr3sgVNbr5ovx17YriTqe1FLTLMD5gPrzugJj7nypDYY59hLlkrA/TtWbfzE+vfrN3oRIz5OMi9iFk3KXFVJMjGg+M5eO9Y8m14e791/q1jUuuUH4mc6HttNRNh7TdLg/OGKivE+56LEyFPir45zw/dqwQM3jiwIzyPz/+bzmfTECgYATxrOhwJtc0FjrReznDMOTMgbWYYPJ0TrTLIVzmvGP6vWqG8rIS8cYEA5VmQyw4c7G97AyBcW/c3K1BT/9oAj0wA7wj2JoqIfm5YPDBZkfSSEcNqqy5Ur/13zUytC+VE/3SrrwItQf0QWLn6wxDxQdCw8J+CokgnDAoehbH6lTAQKBgQCE67T/zpR9279i8CBmIDszBVHkcoALzQtU+H6NpWvATM4WsRWoWUx7AJ56Z+joqtPKG1WztkYdn/L+TyxWADLvn/6Nwd2N79MyKyScKtGNVFeCCJCwoJp4R/UaE5uErBNnOH+gOJvPwHj5HavGC5kYENC1Jb+YCiEDu3CB0S6d4QKBgQDGYGEFMZYWqO6+LrfQZNDBLCI2G4+UFP+8ZEuBKy5NkDVqXQhHRbqr9S/OkFu+kEjHLuYSpQsclh6XSDks5x/hQJNQszLPJoxvGECvz5TN2lJhuyCupS50aGKGqTxKYtiPHpWa8jZyjmanMKnEdOGyw/X4SFyodv8AEloqd81yGg==",
    miniAppId_alipay: "2021002163601771",
    appId_alipay: "97eddc5632da11ecb5f4005056883e3e",
    privateKey_alipay: "MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDRi0syew1hyKmvge+z4f8GHVvE0gc6agXw61+4IUibvknkTWPxetNNM8aZTk3Xj6GVA+B2crYII2QHEC3CGLRH4aUzcwhRXO2pwRAav1hoYmgZEsIsEDpAZ4VTbXtSWyjOxVD2pPQMXIFVxYGpbZ/4ZlxvCQn996BuTyvW1ofK+ZL2I82GqHPd8cOVWApJW/bBePNb4crxh91Qx24lOdeJK+es0FJEAi2Hup6bBdlzDtmte93kdu1QvZ9p8yioPp9vSlVL0UbtJu6+5GnLiHoV5R0KCnXixwSJVrEShp/8ROMz4DLLQ0vi+NOBDhEPllLAsbDSs8JrClrMLsRh1NU5AgMBAAECggEBAKTOkqk0gRTsdxFT+AyZ7jOH+bp2mjrGUr/m0BUJEIt2AbXvbHDr8q8gzs2a+bxV+ncyYmOm2ybRdwXbIrIrLffvMDij++HKXh6KezkeT9FhvJAj4dY4OSiYgxNX44ulqRXfuUsT9+KVCyBDxDRWxV/gWkj2agZ2sZaw7ED/4DOx5MjEtI+wo/wLRWwYkWxo+WjA5RlFcl0PSgMkjXfuOTPVy39mF/vGWpXeZlDGHr9gJKU5ZP6JBE0YzTEuhVtSUC3i5m7QaXmwGd4rWQDY8xsdodoMzXqaX3ZcDzA89iDlm+TGDHVsFfak90ZULGTZ/dSxVlRDLQeHeUnCiOFgAkUCgYEA8emV5hCkKwJfMwpwRxT3Zm8mbqPOD4jDZ2vee+T5Yr39OIesl/lianEzFUlk4splU9QY80KSly3XQady08dxxJeEy2lOG7/I6dtIuZii25eyIoc2tcQ940jr02ay1MI23sA2G/tHim/JHSn2axyFL/89Dy5gvuKCJ/gaFkfWF7sCgYEA3b8p0SEnDpJwZH4aBXGE2iKzooCl2WyptJgy8xfH8U8ypA3IsvyDgrh6bwuHaHl0sZey5YHc2kuUionCk9WuiWF6c/WADZ7xrmue3ve7GdEP5SbMipkPkE9DyVd5lv/ZKNwNIrMx1tytCIFM/DfSXD/2WipfnMmBtpHO6DNUdZsCgYEAyI8+JZVaZgX7Y1eeKnBphFVWaZgIuLxMNKwrsk/tqj2VeI6TOxQY0eKz1UwaBiSCyXMolFV3LztkIRxwiL/rxG9SO0o85ailK60PqD+xlZk4qIOtihj+rjbAvW2Bif7Seu6kbaJwd4eiFzm5AKiOi3Jy7ukmcFteSUDab+pyxw0CgYEAobBhYn9lBkgbMfuNJ8j1kUVabLSXuil0uR19kSoW/cq850ixvmlHz4qKo+vpKXHeeBxgMt91VatkvXvj6H4YDU6JxoINhGEQYxlQN861nAaIK5QV8z3WTmityeNB4qveAeAqp9G4Fq7EcP4vT324otF05ZweKan5LlG1aDT9cd8CgYEAjMF7+wHmXdwrTL8OO+8I5b9XTryl3f9aUBD5iqCYgISC2XJ4UugX0x++PnRuI1wo5Lh/epCATtdXSugxWpH2sA9bjOmgRS93+LIgcaMxPEujKJUl9WqyEFG+98c9zC74atfSxpHCB68bX5J7027O2iapnzj38ZjFOT18GLi9v4Y="
  };
  exports.xykKey = {
    miniAppId_weixin: "wx060ecb4f74eac0da",
    appId_weixin: "fae0d199f50c8c88a742809706dbbbe6",
    privateKey_weixin: "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsLXAB3UQmNw4lIbF/cq+JV/PvfVeoZrAGd3+HCxnACG0K7tN1/APm1QaVF70ZUM0Nrq+JTBn9JHfRMDz710nZy6SxMLsN7YM3iD0899EflraBjKHNR52SfmeMGtEoCwC/fU2HwLlu7ZTbz5QlmFcxcmMSHCVr6X3nnN+liAbznBkwKui8cLtkenacDhWA3EwH4aCYBdB/v5HQmx9zuTSDuoOiYM1LnGDRrZFymteWRiXStyxpUWqvwKEzjmS+sMVpnbiWqFuc8Nhm0rTGLdt82gp0zYkX++pRUAlC4k9kIZg6t9h6/q9aBYLXBDL3Z75T6FDQzuCkhtrp2eE+0GrLAgMBAAECggEAANPbFPc2S6S6Ga2Wx9EKTPOyRXVpxXJw6CcM4t5Hymd/9qx9MbT7Y9GkTXUmwIdl5OnxCAzolxHkzYmY0XEQds6GxR9B1uhMWCj8el2KkMdNq0O8x1rPxBN9devvE20yHLmCdOOVQJY9v+y4fpHD4YX2OfEOsP0XUNStMoN73RHh+xaKr/SyvzWtyJgjO4uywBSIvORFSHVS9TjBi9vxc6+ussz58ZtGgb0X4qA7cCp3s5CsI9Do9+DfN+qfuZxbTlPPjVdCxR+2DImcFNKfYYXBfwgsg64C4G1Sn2JKabt66Lf8MfeNYtUuu7Pv9hMKpKDG6XA8BxnBw+YFt7Q8GQKBgQDhuo2OFHkBopS3iUETHvCRi/KVvjeFeu94OCMGsZqgkV9aoUAEiWma7bGyKTlE0eEWoMaGCzuiKGHRpEFin9N9zgthj00/yr7o5Pq0Gf5tRTnQtaDEOvdZNrl4hZ/U2vnwYChjcN0D9iuZdia6+tMD02oW6I56Rk/M0SuyK+S+1wKBgQDDRG2WZDNLTiX0fVQO1JFHQtBOxXtBfJlPmlO2vAhh3E3YJ5bVSb2m/yC/0dGsczOXs6r/XgtkvSNntNAk4DhenrpClor3v+y3OpqMGvPwIZJk/gVQxDWwcWKDKWtHUSpinOGcFob4SJHvKQ6A6rMHKgFxzvBgaCR41wZEbSs5LQKBgBiqIreIoyQ7mJZpZ/Pn6I9uxEX6b+Sk5y+yqpkbpPKwj8O+ZNlaDnEAUe9Os9RCPp8TWD3jUlPIp8+ZbA+TuS9A6VtyphU3WR7njkFJqdRUwRl+DyAB9W8JHMD/kNRYTQEn8KHU/kFlj6QIFflOWOpNGoWASbkwn52YqXahdzAnAoGBALRg9crDbQ7XdgBP9eJtQnbNpZfenWl1LDp4mXRoZmXgGJjgmVkV8XfeneYUcNgY40Pz2LZlrai1f4tBYDVwWyItBmqUnnMWfBkWrcVW8JiWqqFYdpiRZ/dCBnqbPFp5A+pseYyy0qNwhj6jcp5sME0h5Iu5Whv0mBx4pXV4U0FRAoGBAKF7tGCKId600S8uvBpy7xIYRJ+rK3WU0UliO5iWWB6LfRp6qIrBMzuVeSVbQQYkwccAGUgBVTpHlz0GVKX+cyI1+bnvZzjx+zGz7+tIUP0bYgd18vMsDHA/bBQHJdybAXDuQEUNZQipnweVO43HD81lAQXDlWOU+9wTRuVvEtR0",
    miniAppId_alipay: "2021003129650060",
    appId_alipay: "674a6d604d1d233763053b109241d72a",
    privateKey_alipay: "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCG5JpZAAxBbrQOKhFFNdOlr8TsNgBo5aVymzul1dPagC5f9c2iKGHl+aQhv3F7xjX5ZbqRuwozjFeNXSRIRHzpF0FrBZcHr5952LVGPHKBKvC1D07DdFG3IYVk1yDvms2HzjKRD02M/xFrXcITpJsYQTA0qUYAhKrulCdSAgVSIWC87JV5FZbFYFsqz011/QwKsNL20wYC/kTUhd5azlvwxn65+YjllVL4obeGbAha5HR0Iz7Ee32F5BFEmTz1pCOlZSfJaX74WNWEhyy0hLqhrXWGth90fBdCfTY9yyJ/JU65c7wjXJmPpqdQ4IltMEuKRKcmXMV9dcDfF21g9B5AgMBAAECggEBAIyTeVKYWMcoFiaMkdkOAexpolJ5ZcayGfG7m26j7liWNZYibtOQ2iMgMJwFF68MvRpGrShYWtomknxfDF+66oxgQfpEqiDnJyB5vgsEuL+M6HP+T6YAGMtQFE913K+Q7YZR0Eg0aXxi49X2jdlXRhX1oYKgS256udji41U1AJ2gFjJF6r288Bn2wFTYxzR0b4E5FvVWjcuZYT1YrmDuEKlKaAOc2mobouAUHR65A3Oyq5ilv6UBtvhAcnnGiE4luLKWWqW46wmoBG4OuVlqG6Xja+9I1eWLC9lAz+RtinebY77ASj1KqxdVRSU5ZwlNaeVjdLqcoTKuB1bGbZLxbv0CgYEA+NarWX/NKDxF++wcfDrv7Jex1z9Bn1hoLpeS2eLoOBxLKedJSiYBIKsmMIRv4X18uk39eJkuI5KNOy3DxoLsj5HcsiLW1XHY5Ygsj0K/EJOEy8YosP5DQ0QstUnvU4X/KVLdyGFJy03oPF9djDhV4Ml+AQQTbl2t0xCsaZN9rzMCgYEAx7Grly8DLQal06igbFjAu0hGpuvsMoLK9e+x/sUYMkm0oZUXDitiuexdqTr3mWak3FGpV39IjMmwXVpbGBNYLmk7XKFdYPqM4lTJSZWpCg2HcOqiOtaDtAxG+WxoBHt/lGxDMx545EECVmWPd13Blcn7K2jYzTTbmNjrJYw5saMCgYEA7suzbBQFIVOWJYgUXfOBQx7f/5wosW35rJywxH/IMfCVAQV/g7Ss6FjWMUEmzNHL3E3zrMPzTxfYiK4Gbn493hkwHZLpb7PtXXgsqt521MV8bsEfU5rtmaPW87KcBR9WGqX3R9B1LLD66NTrxSBa6Xjzfq4Wp5cmtKIPktGDj5kCgYAx9ZVEQZK91QfvqCRadung8PgcErIJAQfd95XEc3LWQfJa6n3WIayVbzkPeZ0wV6mvJQ8EwOdZsavZ7x0TLOPG2LTtO8Gs3YIZrbSeID8mMLRN36WuqrRQezHWfPSZCnykmWFGjL0Z/dmj28zExEQGQX4BIj37ONonpz1NK4PTmQKBgCW7AZHD3eUF0z/2X1Wt/bS6eefN5tbt6mdmrY3QUqL4TEaKfUpJgr7RXur0UUDt+8SJxMndKgYhcPNJ9QGvXdq4YMd9NZ+P3rxfAxdNxyM83iIYkFIhZ2dtta2xNMHLseDSyzUoYr5R9rAjHvNulLP+rTP0v+OZ1Ye/WD8u25+c"
  };
}, {
  isPage: false,
  isComponent: false,
  currentFile: "config/privateKey.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("enum/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var l = require("../@babel/runtime/helpers/objectSpread2"),
    n = l(l({}, e(require("./other")).default), {}, {
      index_placeholder: [{
        adImg: "https://xyk-oss.mxbc.net/mini/main/index_placeholder.png",
        isPlaceholder: 1
      }],
      levelTxt_index: {
        1: "再升1级可享【升级礼包】等6项权益",
        2: "再升1级可享【闲时优惠】等8项权益",
        3: "再升1级可享【攒币加速】等9项权益",
        4: "已达最高等级，享全部9项权益"
      },
      levelTxt_mine: {
        1: "再升1级可享【升级礼包】等6项权益",
        2: "再升1级可享【闲时优惠】等8项权益",
        3: "再升1级可享【攒币加速】等9项权益",
        4: "已达最高等级，享【攒币加速】等9项权益"
      },
      levelTxt_rights: [{
        currentTxt: "再升一级可享【升级礼包】等6项权益",
        nextTxt: ""
      }, {
        currentTxt: "再升一级可享【闲时优惠】等8项权益",
        nextTxt: "享【升级礼包】等6项权益"
      }, {
        currentTxt: "再升一级可享【攒币加速】等9项权益",
        nextTxt: "享【闲时优惠】等8项权益"
      }, {
        currentTxt: "恭喜您已达最高等级，享【攒币加速】等9项权益",
        nextTxt: "享【攒币加速】等9项权益"
      }],
      noNearShop: "搜索不到附近的门店，点击刷新试试",
      noOftenShop: "暂无常去门店",
      noFavoriteShop: "暂无门店",
      markerTipStyle_weixin: {
        bgColor: "#00000099",
        padding: "14rpx",
        color: "#fff",
        fontSize: "24rpx",
        borderRadius: "10rpx"
      },
      markerTipStyle_alipay: {
        fontSize: 12,
        padding: 10,
        borderRadius: 6,
        color: "#333333"
      },
      refundMap: [{
        reasonId: "1",
        name: "个人原因",
        parentId: "0",
        level: 1,
        child: [{
          reasonId: "4",
          name: "点错餐了",
          parentId: "1",
          level: 2,
          child: null
        }, {
          reasonId: "2",
          name: "下错门店了",
          parentId: "1",
          level: 2,
          child: null
        }, {
          reasonId: "13",
          name: "以为是外卖",
          parentId: "1",
          level: 2,
          child: null
        }, {
          reasonId: "14",
          name: "人太多不想等",
          parentId: "1",
          level: 2,
          child: null
        }]
      }, {
        reasonId: "5",
        name: "门店原因",
        parentId: "0",
        level: 1,
        child: [{
          reasonId: "15",
          name: "门店态度问题",
          parentId: "5",
          level: 2,
          child: null
        }, {
          reasonId: "16",
          name: "门店饮品问题",
          parentId: "5",
          level: 2,
          child: null
        }, {
          reasonId: "6",
          name: "门店地址错误",
          parentId: "5",
          level: 2,
          child: null
        }, {
          reasonId: "7",
          name: "门店餐品售罄",
          parentId: "5",
          level: 2,
          child: null
        }, {
          reasonId: "17",
          name: "门店出餐慢",
          parentId: "5",
          level: 2,
          child: null
        }]
      }, {
        reasonId: "12",
        name: "其他",
        parentId: "0",
        level: 1,
        child: null
      }]
    });
  exports.default = n;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "enum/index.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("enum/other.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var e = "L7TyFdOKguXEzY3z6r3EhW_R2D21nwhDilEix4TmOks",
    i = "QbsQG_u3AmEwdQa1onxbwAnA0HhS6Kg4AOd4B4qwMn0",
    n = "2FfPD6Nj6rUvPb8An4OBEbUrCAGxNPjCqzPOW4zpnoM",
    t = "K4W2rOIsEoG6QbxJ2RXevsvhmWJQihkBWoEcE3x9F1g",
    l = {
      brandKey: "xyk",
      brandName: "幸运咖",
      coinName: "幸运币",
      EXPName: "幸运值",
      signAddCoin: 2,
      signAddEXP: 1,
      menu_placeholder: [],
      markerStyle: {
        width: 40,
        height: 40
      },
      mineCell: [{
        icon: "/main/cdkey.png",
        title: "兑换码",
        url: "/pages/coupon/cdKey/index",
        iconType: "image"
      }, {
        icon: "/main/yinsi.png",
        title: "隐私政策",
        url: "https://xyk.mxbc.net/policy.html",
        iconType: "image"
      }, {
        icon: "/main/xieyi.png",
        title: "用户服务协议",
        url: "https://xyk.mxbc.net/agreement.html",
        iconType: "image"
      }, {
        icon: "/main/xxgs.png",
        title: "经营信息公示",
        url: "https://xyk.mxbc.net/#/preview/businessLicense?plateform=xyk",
        iconType: "image"
      }, {
        icon: "/main/jmdh.png",
        title: "招商加盟电话",
        url: "",
        iconType: "image",
        content: "400-900-5000"
      }],
      levelColors: ["#333333", "#333333", "#333333", "#C8DBFF", "#EAC8FF", "#EAC995"],
      tmplIds_weixin: {
        "自提": [n, t],
        "自配送": [n, t],
        "三方配送": ["srheDBHQoPWhpOai8CVnBGxp9DLrm9xSLrepwckWyZI", "0bQZW_b8xtekWdFyGFyL4Gm9mbTsHxOQrYP1Ldewg08"],
        "一键领券活动": [e, t, "6SpcvB9PtOD6Jf0PICd6z8Wj1KGDeDPVnelhojhZfFI"],
        "查看优惠券": [e, t, "thtqwSGkzStC_JL6aaz--yiNLvNAac1E4qjLXduZFik"],
        "查看雪王币": [i, "VgymXBRpb9Yt6otfBih_xLP1Xc8vUB5YSdsRqQ-CeV4", "XFs3Ch9SJ_26lpEw0AjNOMdb_s6bP7XDfmqNSanV3VM"],
        "申请退款": ["j3SN9DKir48j8r5VPg8A6yv0RthZNPvaECbTMJv_vGQ", n],
        "查看会员权益": ["xkeRrtF1xsd-r-9nr43oPOSzZBa1CTFQE1lKZiqzw5Q", e, "w43Qd0lX-ACQ3LpMGIsG5GUhwHtfh-Cq2X7vTddehGY"],
        "口令红包": [n, e],
        "支付有礼": [t],
        "集杯活动": [n, e, t],
        "邀请好友拉新": ["qQmJux7vgkpWredyA1SgcPHCmIbRVQJRoQfX2hXFo48", n, i]
      },
      level_index: {
        1: "再升一级可享【生日赠礼】等4项权益",
        2: "再升一级可享【生日赠礼】等4项权益",
        3: "再升一级可享【冰淇淋免单券】等5项权益",
        4: "再升一级可享【冰淇淋免单券】等5项权益",
        5: "已达最高等级，可享全部5项权益"
      },
      level_name: {
        1: "V1",
        2: "V2",
        3: "V3",
        4: "V4",
        5: "V5"
      }
    };
  exports.default = l;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "enum/other.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("env.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t,
    e,
    n,
    a = require("@babel/runtime/helpers/interopRequireDefault")(require("./enum/index")),
    c = true;
  (function () {
    var i = wx.getStorageSync("env");
    "uat" === i && (i = "qa");
    var r = wx.getAccountInfoSync().miniProgram.envVersion;
    "release" !== r && (c = !1);
    "release" !== r && i && "pro" !== i ? (t = "dev" === i ? "https://mxsa-".concat(i, ".mxbc.net") : "https://xyk-".concat(i, ".mxbc.net"), n = "https://".concat(a.default.brandKey, "-").concat(i, ".mxbc.net"), e = "https://xyk-third-activity-".concat(i, ".mxbc.net/activity")) : (t = "https://".concat(a.default.brandKey, ".mxbc.net"), n = "https://".concat(a.default.brandKey, "-h5.mxbc.net"), e = "https://xyk-third-activity.mxbc.net/activity");
  })();
  module.exports = {
    version: "2.2.8",
    isProMini: c,
    __static__: c ? "https://xyk-oss.mxbc.net/mini" : "https://xyk-qa.mxbc.net/assets/xyk",
    baseUrl: t,
    baseUrl_ThirdActivity: e,
    baseUrl_Web: n
  };
}, {
  isPage: false,
  isComponent: false,
  currentFile: "env.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("mixins/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.createCartData = function (t, e, r) {
    var c = [];
    return (t || []).forEach(function (t) {
      var e = t.maxSelect,
        r = t.selectSpec,
        o = t.specs,
        u = void 0 === o ? [] : o;
      if (1 == e && "" !== r) {
        var n = u[r],
          i = n.specId,
          s = n.specName,
          d = n.specPrice;
        c.push({
          specId: i,
          specName: s,
          specPrice: d,
          selectAmount: 1
        });
      } else e > 1 && u.forEach(function (t) {
        var e = t.specId,
          r = t.specName,
          o = t.specPrice,
          u = t.addNum;
        u && c.push({
          specId: e,
          specName: r,
          specPrice: o,
          selectAmount: u
        });
      });
    }), {
      specs: c,
      cupId: (r || {}).specId || "",
      cupName: (r || {}).specName || "",
      cupPrice: (r || {}).specPrice || 0,
      attrs: (e || []).map(function (t) {
        return t.productAttrs[t.selectAttr];
      }) || []
    };
  };
  exports.generateSelectName = function (t, e, r) {
    var c = (e || []).map(function (t) {
        var e = t.addNum,
          r = t.selectAmount,
          c = t.specName;
        return "".concat((e || r) > 1 ? "".concat(c, "*").concat(e || r) : c);
      }),
      o = (r || []).map(function (t) {
        return t.attributeName;
      });
    return [t || "", c.join("/"), o.join("/")].filter(function (t) {
      return t;
    }).join("/").replace(/^\/|\/$/g, "");
  };
  exports.getDisableClassName = function (t, e) {
    var r = t.productStatus,
      c = t.orderType,
      o = "";
    3 == r && (o += " sale-out");
    2 != e || c.includes(2) || (o += " no-out");
    1 != e || c.includes(1) || (o += " no-in");
    return o;
  };
  exports.getIsNeedMemCheck = function (t) {
    var e,
      r,
      c = t.couponName,
      o = t.products,
      u = t.partitions;
    if (null !== (e = getApp().configData.regGuidanceSettingVo) && void 0 !== e && null !== (r = e.checkCouponName) && void 0 !== r && r.includes(c)) return !0;
    o = u && u.length ? u.flatMap(function (t) {
      return t.products;
    }) : o;
    for (var n = 0; n < o.length; n++) {
      var i,
        s,
        d = o[n];
      if (null !== (i = getApp().configData.regGuidanceSettingVo) && void 0 !== i && null !== (s = i.checkCouponName) && void 0 !== s && s.includes(o.couponName)) return !0;
      if (d.productVoucherList) for (var p = 0; p < d.productVoucherList.length; p++) {
        var a,
          f,
          m = d.productVoucherList[p];
        if (null !== (a = getApp().configData.regGuidanceSettingVo) && void 0 !== a && null !== (f = a.checkCouponName) && void 0 !== f && f.includes(m.couponName)) return !0;
      }
    }
    return !1;
  };
  exports.getParamsByCartGoods = function (t) {
    var e = [];
    (0, o.isObject)(t) && (t = [t]);
    return t.forEach(function (t) {
      var r = [];
      t.comboProductDetail && t.comboProductDetail.length && t.comboProductDetail.forEach(function (t) {
        r.push({
          productId: t.productId,
          cupId: t.cupId,
          specIds: Array.from(t.specs || [], function (t) {
            return {
              specId: t.specId,
              selectAmount: t.selectAmount
            };
          }),
          attributeIds: Array.from(t.attrs || [], function (t) {
            return t.attributeId;
          })
        });
      });
      e.push({
        productId: t.productId,
        cupId: t.cupId,
        modifiedTime: t.productModifiedTime || t.modifiedTime,
        productAmount: t.productAmount,
        specIds: Array.from(t.specs || [], function (t) {
          return {
            specId: t.specId,
            selectAmount: t.selectAmount
          };
        }),
        attributeIds: Array.from(t.attrs || [], function (t) {
          return t.attributeId;
        }),
        comboProductDetail: r
      });
    }), e;
  };
  exports.getPlusDiscountProductList = function (t) {
    var e = [];
    if (t.length > 0) for (var r = t.length - 1; r >= 0; r--) {
      var c = t[r];
      c.addNum && e.push({
        attributeIds: (c.productAttrs || []).map(function (t) {
          return t.productAttrs[0].attributeId;
        }),
        cupId: c.cupId || void 0,
        productAmount: c.addNum,
        productId: c.productId,
        modifiedTime: c.modifiedTime
      });
    }
    return e;
  };
  exports.getSelectedProductVoucherList = function (t) {
    var e = [],
      r = true;
    return t.forEach(function (t) {
      var c = [];
      t.productVoucherList && t.productVoucherList.forEach(function (t) {
        t.couponCode && (c.push(t.couponCode), r = !1);
      });
      e.push({
        cartProductViewId: t.cartProductViewId,
        couponCodeList: c
      });
    }), {
      selectedProductVoucherList: e,
      isUnUsedVoucherCoupon: r
    };
  };
  exports.getUniKeyByParam = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
      o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
      u = "",
      n = "";
    return c.sort().forEach(function (t) {
      u += "".concat(t.specId, ",").concat(t.selectAmount, "|");
    }), o.sort().forEach(function (t) {
      n += "".concat(t.attributeId, "|");
    }), "".concat(t, "|").concat(e, "|").concat(r, "|").concat(u).concat(n);
  };
  exports.initSelectCupAttrSpec = function (t) {
    var e = t.productAttrs,
      r = t.productSpecs,
      c = t.cups,
      o = JSON.parse(getApp().getStorageSync("__xyk__/data/custom_taste/" + t.productId) || "{\"cupId\":\"\",\"attrs\":[],\"specs\":[]}");
    if (c && c.length) {
      var u = c.findIndex(function (t) {
          return t.specId === o.cupId;
        }),
        n = c.findIndex(function (t) {
          return t.cornerTag && t.cornerTag.isRec;
        });
      t.selectCup = -1 !== u ? u : -1 !== n ? n : 0;
    }
    var i = {};
    e && e.length && e.forEach(function (t) {
      var e = -1,
        r = -1;
      t.productAttrs && o.attrs && (e = t.productAttrs.findIndex(function (t) {
        return -1 !== o.attrs.findIndex(function (e) {
          return e === t.attributeId;
        });
      }));
      t.productAttrs && (r = t.productAttrs.findIndex(function (t) {
        return t.cornerTag && t.cornerTag.isRec;
      }));
      t.selectAttr = -1 !== e ? i[t.productAttrs[e].attributeId] ? 0 : e : -1 !== r ? i[t.productAttrs[r].attributeId] ? 0 : r : 0;
      t.selectAttr = function t(e, r, c) {
        if (c[e[r].attributeId]) return t(e, r += 1, c);
        return r;
      }(t.productAttrs, t.selectAttr, i);
      (t.productAttrs[t.selectAttr].mutexAttrs || []).forEach(function (t) {
        i[t] = 1;
      });
    });
    r && r.length && r.forEach(function (t) {
      var e = t.minSelect,
        r = t.maxSelect,
        c = t.specs;
      if (c && 0 !== c.length) if (1 == r && 1 == e ? t.selectSpec = 0 : 1 == r && 0 == e ? t.selectSpec = "" : c.forEach(function (t) {
        t.addNum = 0;
      }), 1 == r) {
        var u,
          n = -1;
        o.specs && (n = c.findIndex(function (t) {
          return -1 !== o.specs.findIndex(function (e) {
            return e.specId === t.specId;
          });
        }));
        u = c.findIndex(function (t) {
          return t.cornerTag && t.cornerTag.isRec;
        });
        -1 !== n ? t.selectSpec = n : -1 !== u && (t.selectSpec = u);
      } else {
        var i;
        c.forEach(function (t) {
          o.specs && (i = o.specs.find(function (e) {
            return e.specId === t.specId;
          }));
          t.addNum = i ? i.selectAmount : 0;
        });
      }
    });
    return i;
  };
  exports.insertSubscribeMessage = function (t) {
    var e = t.key,
      o = void 0 === e ? "" : e,
      n = t.isOnceADay,
      i = void 0 !== n && n,
      s = t.templateIds;
    return new Promise(function (t) {
      var e = r.default.tmplIds_weixin[o] || s || [];
      if (0 == e.length) return t();
      var n = "__".concat(r.default.brandKey, "__/msg/").concat((0, u.default)(e.join("|"))),
        d = wx.getStorageSync(n) || "";
      if ("" != d && d > Date.now()) return t();
      getApp().showLoading();
      wx.getSetting({
        withSubscriptions: !0,
        complete: function (r) {
          var o = r.subscriptionsSetting.mainSwitch;
          wx.hideLoading();
          o ? wx.requestSubscribeMessage({
            tmplIds: e,
            complete: function (e) {
              var r = [];
              if (Object.keys(e).map(function (t) {
                "accept" == e[t] && r.push(t);
              }), c.default.track(r), i) {
                var o = new Date().setHours(24, 0, 0, 0);
                getApp().setStorage(n, o);
              }
              t();
            }
          }) : t();
        }
      });
    });
  };
  exports.menuToCartGoods = function (t) {
    var e = t.productId,
      r = t.addNum,
      c = t.productType,
      o = t.cups,
      u = t.selectCup,
      i = t.productSpecs,
      s = t.productAttrs,
      d = t.combos,
      p = t.modifiedTime,
      a = {
        productId: e,
        productAmount: r,
        modifiedTime: p
      };
    2 == c ? Object.assign(a, {
      comboProductDetail: d.map(function (t) {
        var e = t.productId,
          r = t.productNum,
          c = t.cups,
          o = t.productSpecs,
          u = void 0 === o ? [] : o,
          i = t.productAttrs,
          s = void 0 === i ? [] : i;
        return Object.assign({
          productId: e,
          productNum: r,
          cupId: c[0] && c[0].specId || "",
          cupName: c[0] && c[0].specName || "",
          cupPrice: c[0] && c[0].specPrice || 0
        }, n(u, s));
      })
    }) : Object.assign(a, n(i, s), {
      cupId: o[u] ? o[u].specId : "",
      cupName: o[u] ? o[u].specName : "",
      cupPrice: o[u] ? o[u].specPrice : 0
    });
    return a;
  };
  exports.transImage = function (t) {
    var e = /\.(png|jpg|gif|jpeg|webp)$/;
    if (t.productImg && t.productImgThumbnails) {
      var r = t.productImg.split("?")[0].split(e);
      t.productImg = r[0] + t.productImgThumbnails.combo_detail + "." + r[1];
    }
    if (t.productLogo && t.productLogoThumbnails) {
      var c = t.productLogo.split("?")[0].split(e);
      t.productLogo = c[0] + t.productLogoThumbnails.menu + "." + c[1];
      t.productLogoPop = c[0] + t.productLogoThumbnails.attr_pop + "." + c[1];
      t.productLogoShare = "gif" == c[1] ? void 0 : c[0] + "." + c[1];
    } else {
      t.productLogoPop = t.productLogo;
      t.productLogoShare = -1 != t.productLogo.indexOf(".gif") ? void 0 : t.productLogo.split("?")[0];
    }
    return t;
  };
  exports.transferGoodsImg = function (t, e) {
    return t ? t.map(function (t) {
      return {
        adImg: t
      };
    }) : [{
      adImg: e
    }];
  };
  require("../@babel/runtime/helpers/Arrayincludes");
  var e = require("../@babel/runtime/helpers/objectSpread2"),
    r = t(require("@/enum/index")),
    c = t(require("@/utils/track")),
    o = require("@/utils/index"),
    u = t(require("@/utils/js-md5"));
  function n() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      c = [];
    return t.forEach(function (t) {
      var e = t.maxSelect,
        r = t.selectSpec,
        o = t.specs,
        u = void 0 === o ? [] : o;
      1 == e && "" !== r ? c.push({
        specId: u[r].specId,
        selectAmount: 1,
        specName: u[r].specName,
        specPrice: u[r].specPrice
      }) : e > 1 && u.forEach(function (t) {
        t.addNum && c.push({
          specId: t.specId,
          selectAmount: t.addNum,
          specName: t.specName,
          specPrice: t.specPrice
        });
      });
    }), {
      specs: c,
      attrs: r.map(function (t) {
        return e({}, t.productAttrs[t.selectAttr]);
      })
    };
  }
}, {
  isPage: false,
  isComponent: false,
  currentFile: "mixins/index.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/activity.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.assistAct = function (e) {
    return n.default.post("/v1/marketing/assist-act/assist", e);
  };
  exports.checkReward = function (e) {
    return n.default.get("/v1/h5/marketing/invitingReward/isReward", {
      marketingId: e
    });
  };
  exports.fetchAllActInfo = function (e) {
    return n.default.post("/v2/shop/marketing/order/all-act/info", e);
  };
  exports.fetchCoupon = function (e) {
    return n.default.post("/v2/shop/receiveCouponsByYjlq", {
      marketingId: e,
      customerId: 1
    });
  };
  exports.fetchHotGoods = function () {
    return n.default.get("/v1/hotProduct/list");
  };
  exports.fetchReceiveShareCoupon = function (e, t) {
    return n.default.post("/v2/shop/marketing/share-act-gift/receive-coupons", {
      marketingId: e,
      inviterId: t
    });
  };
  exports.getActivityInfo = function (e) {
    return n.default.get("/v1/preheat/info/".concat(e));
  };
  exports.getAdList = function (e) {
    return i.apply(this, arguments);
  };
  exports.getAssistanceInfo = function (e) {
    return n.default.post("/v1/marketing/assist-act/info/get", e);
  };
  exports.getCouponActivity = function (e) {
    return n.default.post("/v2/shop/getMarketingInfoByYjlq", {
      marketingId: e
    });
  };
  exports.getHotSearch = function () {
    return n.default.post("/v1/searchWord/list", {
      channelType: 1
    });
  };
  exports.getInvitingRewardInfo = function (e) {
    return n.default.get("/v1/h5/marketing/invitingReward/info", {
      marketingId: e
    });
  };
  exports.getInvitingRewardList = function (e) {
    return n.default.post("/v1/h5/marketing/invitingReward/rewardList", e);
  };
  exports.getInvitingRewardRecord = function (e) {
    return n.default.post("/v1/h5/marketing/invitingReward/invitingList", e);
  };
  exports.getMarketing = function (e) {
    return n.default.post(e.cartId ? "/v1/groupcart/settlement/marketing/list" : "/v3/shoppingCart/settlement/marketing/list", e);
  };
  exports.getMultiShopMzhdInfo = function (e) {
    return n.default.post("/v1/accumulatePoint/queryActivityByShopId", {
      shopId: e
    });
  };
  exports.getMzhdInfo = function (e) {
    return n.default.post("/v1/accumulatePoint/querySchedule", {
      shopIds: e
    });
  };
  exports.getNewInvitingRewardNum = function (e) {
    return n.default.get("/v1/h5/marketing/invitingReward/newRewardNum", {
      marketingId: e
    });
  };
  exports.getRedPacketDetail = function (e) {
    return n.default.get("/v1/marketing/redeem-act/community/info", {
      marketingId: e
    });
  };
  exports.getReward = function (e) {
    return n.default.get("/v1/h5/marketing/invitingReward/getReward", {
      marketingId: e
    });
  };
  exports.getShareCouponDetail = function (e) {
    return n.default.post("/v2/shop/marketing/share-act-gift/info", {
      marketingId: e
    });
  };
  exports.getTemplateJson = function (e) {
    return new Promise(function (t, r) {
      wx.request({
        url: e,
        header: {
          "Content-Type": "application/json"
        },
        method: "GET",
        complete: function (e) {
          e && 200 === e.statusCode && e.data ? t(e.data) : r();
        }
      });
    });
  };
  exports.receiveAssistanceReward = function (e) {
    return n.default.post("/v1/marketing/assist-act/receive", e);
  };
  exports.receiveMzhd = function (e) {
    return n.default.post("/v1/accumulatePoint/receiveActivity", e);
  };
  exports.redeemCode = function (e) {
    return n.default.post("/v2/shop/redeem", e);
  };
  exports.redeemRedPacketCode = function (e) {
    return n.default.post("/v1/marketing/redeem-act/community/verify", e);
  };
  var t = e(require("../@babel/runtime/regenerator")),
    r = require("../@babel/runtime/helpers/asyncToGenerator"),
    n = e(require("./index")),
    a = require("@/utils/index");
  function i() {
    return (i = r(t.default.mark(function e(i) {
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", n.default.post("/v1/adinfo/adplace/query", i).then(function () {
              var e = r(t.default.mark(function e(r) {
                var n, i, u, s, c, d, f, p, l, g, v;
                return t.default.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (!(n = r.data) || !n.length) {
                        e.next = 29;
                        break;
                      }
                      i = 0;
                    case 3:
                      if (!(i < n.length)) {
                        e.next = 29;
                        break;
                      }
                      if (!(u = n[i].adInfoList) || !u.length) {
                        e.next = 26;
                        break;
                      }
                      s = 0;
                    case 7:
                      if (!(s < u.length)) {
                        e.next = 26;
                        break;
                      }
                      if (d = u[s], null === (c = d.adUrl) || void 0 === c || !c.startsWith("wxLive://")) {
                        e.next = 23;
                        break;
                      }
                      return f = (0, a.getUrlParam)(d.adUrl), p = f.finderUserName, e.prev = 11, e.next = 14, o(p);
                    case 14:
                      l = e.sent;
                      g = l.feedId;
                      v = l.nonceId;
                      d.adUrl += "&feedId=".concat(g, "&nonceId=").concat(v);
                      e.next = 23;
                      break;
                    case 20:
                      e.prev = 20;
                      e.t0 = e.catch(11);
                      console.log("获取直播信息错误");
                    case 23:
                      s++;
                      e.next = 7;
                      break;
                    case 26:
                      i++;
                      e.next = 3;
                      break;
                    case 29:
                      return e.abrupt("return", n);
                    case 30:
                    case "end":
                      return e.stop();
                  }
                }, e, null, [[11, 20]]);
              }));
              return function (t) {
                return e.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function o(e) {
    return u.apply(this, arguments);
  }
  function u() {
    return (u = r(t.default.mark(function e(r) {
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e, t) {
              wx.getChannelsLiveInfo({
                finderUserName: r,
                success: e,
                fail: t
              });
            }));
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/activity.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/address.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.createAddress = function (e) {
    return r.default.post("/v1/consigneeaddress/save", t({}, e));
  };
  exports.deleteAddress = function (e) {
    return r.default.post("/v1/consigneeaddress/delete/".concat(e));
  };
  exports.getAddressInfo = function (e) {
    return r.default.get("/v1/consigneeaddress/info/".concat(e));
  };
  exports.getAddressList = function (e) {
    return r.default.get("/v3/consigneeaddress/listAll", {
      shopId: e
    });
  };
  exports.getRegeoAddress = function (e) {
    return console.log("paras:", e), new Promise(function (r) {
      wx.request({
        url: "https://restapi.amap.com/v3/geocode/regeo",
        data: t(t({}, e), {}, {
          key: "e9559804bb56502e961f159c14eb6383",
          sig: (0, s.default)("".concat((0, o.createStrBeforeSign)(t({
            key: "e9559804bb56502e961f159c14eb6383"
          }, e)), "ad52007b0582a69696a5138e526af335"))
        }),
        methods: "GET",
        complete: function (e) {
          console.log("result:", e);
          200 === e.statusCode && "10000" === e.data.infocode ? r(e.data.regeocode) : r({
            formatted_address: []
          });
        }
      });
    });
  };
  exports.updateAddress = function (e) {
    return r.default.post("/v1/consigneeaddress/update", t({}, e));
  };
  var t = require("../@babel/runtime/helpers/objectSpread2"),
    r = e(require("./index")),
    s = e(require("@/utils/js-md5")),
    o = require("@/utils/index");
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/address.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/coupon.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var o = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.fetchAcceptCoupons = function (o) {
    return e.default.post("/v1/customercoupons/acceptCoupon", o);
  };
  exports.fetchForwardCouponCancel = function (o) {
    return e.default.post("/v1/customercoupons/couponGiveCancel", {
      couponCode: o
    });
  };
  exports.getAvailableCoupon = function (o) {
    return e.default.post("/v1/customercoupons/availableCouponsNew", o);
  };
  exports.getCouponTotal = function () {
    return e.default.post("/v1/customercoupons/total", {
      couponStatus: 0
    });
  };
  exports.getForwardCoupons = function (o) {
    return e.default.post("/v1/customercoupons/acceptCouponList", o);
  };
  exports.getMyCoupon = function (o) {
    return e.default.post("/v1/customercoupons/coupons", o);
  };
  exports.getOrderCoupon = function (o) {
    return e.default.post("/v1/customercoupons/orderCouponDetail", {
      orderId: o
    });
  };
  exports.getShopCouponTotal = function (o) {
    return e.default.post("/v1/customercoupons/shopTotal", {
      shopId: o
    });
  };
  exports.giveCoupon = function (o) {
    return e.default.post("/v1/customercoupons/giveCoupon", o);
  };
  var e = o(require("./index"));
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/coupon.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  exports.login = m;
  exports.updateUserInfo = w;
  var t = e(require("../@babel/runtime/regenerator")),
    n = require("../@babel/runtime/helpers/objectSpread2"),
    r = require("../@babel/runtime/helpers/asyncToGenerator"),
    o = require("../env.js"),
    a = e(require("@/config/index")),
    i = e(require("@/utils/createSign")),
    s = e(require("@/utils/httpQueue")),
    c = require("@/utils/base64"),
    u = require("./reportWXAd"),
    d = "/v1/app/config",
    p = "/v1/app/regByUnionid",
    l = new s.default(),
    g = {
      version: o.version,
      "x-devops-tenant": "mxbc",
      "x-devops-router": wx.getStorageSync("apiVersion") || [][0] || "",
      "x-devops-env": {
        dev: "dev",
        qa: "test",
        uat: "uat",
        pro: "prod"
      }[wx.getStorageSync("env") || "pro"]
    };
  function f() {
    return h.apply(this, arguments);
  }
  function h() {
    return (h = r(t.default.mark(function e() {
      var r,
        a,
        s,
        c,
        u = arguments;
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (r = u.length > 0 && void 0 !== u[0] ? u[0] : "", a = u.length > 1 && void 0 !== u[1] ? u[1] : {}, s = u.length > 2 && void 0 !== u[2] ? u[2] : {}, c = !(u.length > 3 && void 0 !== u[3]) || u[3], a.customerId && (a.customerId = getApp().customerId || wx.getStorageSync("userInfo").customerId), getApp() && getApp().configData && getApp().configData.timeOffset || r === d) {
              e.next = 8;
              break;
            }
            return e.next = 8, x();
          case 8:
            if (a.sign) {
              e.next = 12;
              break;
            }
            return e.next = 11, (0, i.default)(a);
          case 11:
            a = e.sent;
          case 12:
            return e.abrupt("return", new Promise(function (e, t) {
              wx.request(n(n({
                data: a,
                url: -1 === r.indexOf("://") ? "".concat(o.baseUrl, "/api").concat(r) : r,
                header: n(n({}, g), {}, {
                  "Access-Token": getApp().accessToken
                })
              }, s), {}, {
                complete: function (n) {
                  n && n.statusCode && n.data ? b(n.statusCode) && 0 === n.data.code ? e(n.data) : b(n.statusCode) && 500 === n.data.code ? t({
                    msg: "服务繁忙，请稍后重试"
                  }) : 401 === n.data.code && c ? (getApp().logOut(), m().then(function () {
                    f(r, a, s, !1).then(e).catch(t);
                  }).catch(t)) : t(n.data) : (getApp().showToast("网络异常，请稍后重试"), t());
                }
              }));
            }));
          case 13:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function m() {
    return v.apply(this, arguments);
  }
  function v() {
    return (v = r(t.default.mark(function e() {
      var n, r, o;
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, getApp().getOpenId();
          case 2:
            return n = e.sent, r = n.OPENID, o = n.UNIONID, e.abrupt("return", new Promise(function (e, t) {
              l.add(p, {
                res: e,
                rej: t
              }, function () {
                var e = l.get(p);
                wx.login({
                  success: function (t) {
                    f(p, {
                      code: t.code,
                      openId: r,
                      unionid: o,
                      third: "wxmini",
                      miniAppId: a.default.pro.miniAppId_weixin
                    }, {
                      method: "post"
                    }).then(function (t) {
                      var n = t.data,
                        r = n.accessToken;
                      for (w(n.customerInfo, r, n.mobilePhone); e.length;) e.shift().res();
                      l.delete(p);
                      (0, u.reportWXAd)({
                        action_type: "REGISTER"
                      });
                      getApp().scTrack("LoginResult");
                    }).catch(function (t) {
                      for (t && 5017 === t.code && getApp().showToast("该手机号已注销"); e.length;) e.shift().rej(t);
                      l.delete(p);
                    });
                  }
                });
              });
            }));
          case 6:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function x() {
    return new Promise(function (e) {
      l.add(d, {
        res: e
      }, function () {
        var e = l.get(d);
        wx.request({
          url: "".concat(o.baseUrl, "/api").concat(d),
          header: g,
          complete: function (t) {
            try {
              if (t && t.statusCode && t.data) {
                if (b(t.statusCode) && 0 === t.data.code) {
                  var r = t.data.data,
                    o = r.privacyVersion,
                    a = r.timestamp,
                    i = r.defaultCancelFee;
                  getApp().configData = n(n({}, t.data.data), {}, {
                    timeOffset: Date.now() - a
                  });
                  getApp().globalData.defaultCancelFee = i;
                  wx.getStorageSync("privacyVersion") !== o ? getApp().globalData.isShowPrivacy = !0 : getApp().initScTrack();
                }
              } else getApp().showToast("网络异常，请稍后重试");
            } catch (t) {
              for (; e.length;) e.shift().res();
              l.delete(d);
            }
            for (; e.length;) e.shift().res();
            l.delete(d);
          }
        });
      });
    });
  }
  function b(e) {
    return e >= 200 && e < 300 || 304 === e;
  }
  function w(e, t, n) {
    e && (e.nickname && (e.nickname = c.Base64.decode(e.nickname)), wx.setStorageSync("userInfo", e), getApp().customerId = e.customerId, getApp().globalData.userInfo = e);
    t && (wx.setStorageSync("accessToken", t), getApp().accessToken = t);
    n && wx.setStorageSync("mobilePhone", n);
    try {
      var r, o, a;
      null === (r = getApp().sensors) || void 0 === r || r.setProfile({
        u_nickname: e.nickname,
        u_gender: ["男", "女"][e.gender - 1],
        u_year_of_birth: +(null === (o = e.birthday) || void 0 === o ? void 0 : o.slice(0, 4)),
        u_birthday: e.birthday,
        u_register_time: e.registerTime,
        u_member_level: ["幸运梅花K", "幸运黄金K", "幸运铂金K", "幸运钻石K", "幸运黑金K"][e.customerLevel - 1],
        u_user_luckycoin: e.customerPoint,
        u_member_id: e.customerId
      });
      e.customerId && (null === (a = getApp().sensors) || void 0 === a || a.loginWithKey("$identity_login_id", e.customerId));
    } catch (e) {
      console.log(e);
    }
  }
  var y = {
    isHttpSuccess: b,
    get: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return f(e, t, n);
    },
    post: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return f(e, t, n({
        method: "post"
      }, r));
    },
    upload: function (e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "file";
      return new Promise(function (a, i) {
        wx.uploadFile({
          name: r,
          filePath: t,
          url: -1 === e.indexOf("://") ? "".concat(o.baseUrl, "/api").concat(e) : e,
          header: n(n({}, g), {}, {
            "Access-Token": getApp().accessToken
          }),
          complete: function (e) {
            var t = e.statusCode,
              n = e.data;
            t && n ? (n = "string" == typeof n ? JSON.parse(n) : n, b(t) && 0 === n.code ? a(n) : b(t) && 500 === n.code ? i({
              msg: "服务繁忙，请稍后重试"
            }) : i(n)) : (getApp().showToast("网络异常，请稍后重试"), i());
          }
        });
      });
    }
  };
  exports.default = y;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/index.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/jointOrder.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.clearMyCart = function (t) {
    return r.default.post("/v1/groupcart/product/clear", {
      cartId: t
    });
  };
  exports.confirmSelect = function (t) {
    return r.default.post("/v1/groupcart/product/confirm", t);
  };
  exports.createJointOrder = function (t) {
    return getApp().scTrack("LaunchGroupBuying", this, {
      options: t
    }), r.default.post("/v1/groupcart/create", t);
  };
  exports.getJointOrder = function (t) {
    return r.default.post("/v1/groupcart/allinfo", {
      cartId: t
    });
  };
  exports.getMqToken = function (t) {
    return r.default.post("/v1/groupcart/getToken", {
      cartId: t
    });
  };
  exports.joinOther = function (t) {
    return r.default.post("/v1/groupcart/join", {
      cartId: t
    });
  };
  exports.leaveJointOrder = function (t, e) {
    return r.default.post("/v1/groupcart/".concat(1 == e ? "cancel" : "leave"), {
      cartId: t
    });
  };
  exports.queryExistJointOrder = function () {
    return r.default.post("/v1/groupcart/current");
  };
  exports.switchShop = function (t) {
    return r.default.post("/v1/groupcart/switch-shop", t);
  };
  exports.unlockJointOrder = function (t) {
    return r.default.post("/v1/groupcart/unlock", {
      cartId: t
    });
  };
  var r = t(require("./index"));
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/jointOrder.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/menu.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.clearCart = function (t, e) {
    return r.default.post("/v3/shoppingCart/clearCart", {
      shopId: t,
      orderType: e,
      customerId: 1
    });
  };
  exports.getGoodsDetail = function (t) {
    return r.default.post("/v2/shop/product/detail", t);
  };
  exports.getMarketingInfo = function (t, e) {
    return r.default.post("/v2/shop/listMarketing", {
      shopId: t,
      orderType: e
    });
  };
  exports.getMenuList = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      o = arguments.length > 2 ? arguments[2] : void 0;
    return o ? r.default.post("/v2/shop/menu/groupcart/productlist", {
      shopId: t,
      orderType: e,
      cartId: o
    }) : r.default.post("/v2/shop/menu/info", {
      shopId: t,
      orderType: e
    });
  };
  exports.getSomeProductDetail = function (t, e) {
    for (var o = [], u = 0; u < e.length; u += 10) o.push(r.default.post("/v2/shop/product/multiquery", {
      shopId: t,
      productIdList: e.slice(u, u + 10)
    }));
    return Promise.all(o).then(function (t) {
      return t.reduce(function (t, e) {
        return t.concat(e.data);
      }, []);
    });
  };
  exports.queryCalcPrice = function (t) {
    return r.default.post(t.cartId ? "/v1/groupcart/calcprice" : "/v3/shoppingCart/calcprice", e(e({}, t), {}, {
      customerId: 1
    }));
  };
  exports.queryCart = function (t) {
    return r.default.post("/v3/shoppingCart/listCartProducts", e(e({}, t), {}, {
      customerId: 1
    }));
  };
  exports.queryCartForSettle = function (t) {
    return r.default.post(t.cartId ? "/v1/groupcart/settlement/update" : "/v3/shoppingCart/settlement/update", e(e({}, t), {}, {
      customerId: 1
    }));
  };
  exports.queryOrderGoodsToCart = function (t) {
    return r.default.post("/v3/shoppingCart/order/onemore", {
      orderCode: t
    });
  };
  exports.switchShop = function (t) {
    return r.default.post("/v3/shoppingCart/switch-shop", t);
  };
  exports.updateCart = function (t) {
    return r.default.post("/v3/shoppingCart/updateProductQty", e(e({}, t), {}, {
      customerId: 1
    }));
  };
  var e = require("../@babel/runtime/helpers/objectSpread2"),
    r = t(require("./index"));
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/menu.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/order.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.cancelOrderById = function (e) {
    return r.default.post("/v2/order/cancel", {
      orderCode: e
    });
  };
  exports.getOrderDetail = function (e) {
    return r.default.get("/v2/order/cust/info/".concat(e));
  };
  exports.getOrderList = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
    1 == t && (t = 0);
    return r.default.post("/v2/order/cust/list", {
      page: e,
      limit: o,
      type: t
    });
  };
  exports.getOrderPoint = function (e) {
    return r.default.get("/v1/customer/getOrderPoint", {
      orderId: e
    });
  };
  exports.getOrderPointAndGrowth = function (e) {
    return r.default.post("/v1/customer/getOrderPointAndGrowth", e);
  };
  exports.getReasonTypes = function () {
    return r.default.get("/v1/refundreasonconf/list");
  };
  exports.getVirtualOrderList = function (e) {
    return r.default.post("/v2/order/virtual/list", e);
  };
  exports.preOrderToRealTimeOrder = function (e) {
    return r.default.post("/v2/order/rezAhead", {
      orderCode: e
    });
  };
  exports.prePay = function (e) {
    return getApp().getOpenId().then(function (o) {
      var n = o.OPENID;
      return r.default.post("/v2/order/prepay", {
        miniAppId: t.default.pro.miniAppId_weixin,
        orderCode: e,
        payType: 1,
        openId: n
      });
    });
  };
  exports.refund = function (e) {
    return r.default.post("/v2/order/refund", e);
  };
  exports.refundVirtualOrder = function (e) {
    return r.default.post("/v2/order/virtual/refund", e);
  };
  exports.saveOrder = function (e) {
    return r.default.post(e.cartId ? "/v2/group/order/save" : "/v2/order/save", e);
  };
  exports.saveVirtualOrder = function (e) {
    return r.default.post("/v2/order/virtual/save", e);
  };
  var r = e(require("./index")),
    t = e(require("@/config/index"));
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/order.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/reportWXAd.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.reportWXAd = function (e) {
    return a.apply(this, arguments);
  };
  exports.setWXAdConfig = function (e, t) {
    return o.apply(this, arguments);
  };
  var t = e(require("../@babel/runtime/regenerator")),
    r = require("../@babel/runtime/helpers/asyncToGenerator"),
    n = e(require("./index")),
    i = e(require("@/config/index"));
  function o() {
    return (o = r(t.default.mark(function e(r, n) {
      var i, o;
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            n.clickId = (null == r || null === (i = r.query) || void 0 === i ? void 0 : i.gdt_vid) || (null == r || null === (o = r.query) || void 0 === o ? void 0 : o.qz_gdt) || null;
            n.clickId && console.log("获取朋友圈参数成功", r);
          case 2:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function a() {
    return (a = r(t.default.mark(function e(r) {
      var o, a, u, c;
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (getApp().clickId) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");
          case 2:
            return e.next = 4, getApp().getOpenId();
          case 4:
            return o = e.sent, a = o.OPENID, u = o.UNIONID, (c = {
              actions: [{
                user_id: {
                  wechat_openid: a,
                  wechat_unionid: u,
                  wechat_app_id: i.default.pro.miniAppId_weixin
                },
                trace: {
                  click_id: getApp().clickId || ""
                }
              }]
            }).actions[0] = Object.assign(r, c.actions[0]), console.log("reportWXAd options", c), e.abrupt("return", new Promise(function (e, t) {
              wx.request({
                method: "post",
                url: "https://tracking.e.qq.com/conv",
                data: c,
                complete: function (r) {
                  r && r.statusCode && r.data ? n.default.isHttpSuccess(r.statusCode) && 0 === r.data.code ? (console.log("朋友圈广告埋点，上报成功"), e(r.data)) : t() : (getApp().showToast("网络异常，请稍后重试"), t());
                }
              });
            }));
          case 11:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/reportWXAd.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/store.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.changeShopFavorite = function (e) {
    return e.favorited ? t.default.post("/v3/shopinfo/favorite", {
      shopId: e.shopId
    }) : t.default.post("/v3/shopinfo/cancelFavorite", {
      shopId: e.shopId
    });
  };
  exports.getDeliverableStore = function (e, o) {
    return t.default.post("/v3/shopinfo/findDeliverable", {
      longitude: e,
      latitude: o,
      distance: 10,
      page: 1,
      limit: 20
    }).then(function (e) {
      return e && e.data ? (e.data.inRange.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e.data.outRange.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e) : e;
    });
  };
  exports.getDeliverableStoreV4 = function (e, o) {
    return t.default.post("/v4/shopinfo/findDeliverable", {
      longitude: e,
      latitude: o,
      distance: 10,
      page: 1,
      limit: 20
    }).then(function (e) {
      return e && e.data ? (e.data.inRange.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e.data.outRange.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e.data.isRecommend && (e.data.recommendedShop.shopAddress = (e.data.recommendedShop.regionName || "") + e.data.recommendedShop.shopAddress), e) : e;
    });
  };
  exports.getDeliverableStoreWithCoupon = function (e, o, n, a, d) {
    return t.default.post("/v3/shopinfo/findDeliverableWithCoupon", {
      longitude: e,
      latitude: o,
      distance: 10,
      couponRuleId: n,
      isDynamicShop: a,
      shopIds: d
    }).then(function (e) {
      return e && e.data ? (e.data.inRange.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e.data.outRange.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e) : e;
    });
  };
  exports.getNearStoreWithCoupon = function (e, o, n) {
    return t.default.post("/v2/shopinfo/findNearWithCoupon", {
      longitude: e,
      latitude: o,
      couponRuleId: n,
      distance: 10
    }).then(function (e) {
      return e && e.data && e.data.length ? (e.data.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e) : e;
    });
  };
  exports.getRecommendShop = function (e) {
    return t.default.post("/v3/shopinfo/findRecommend", e);
  };
  exports.getRecommendShopV4 = function (e) {
    return t.default.post("/v4/shopinfo/findRecommend", e).then(function (e) {
      return e && e.data && e.data.length ? (e.data.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e) : e;
    });
  };
  exports.getShopInfo = function (e) {
    return t.default.get("/v2/shopinfo/get/".concat(e)).then(function (e) {
      return e && e.data ? (e.data.shopAddress = (e.data.regionName || "") + e.data.shopAddress, e) : e;
    });
  };
  exports.searchFavoriteStore = function () {
    return t.default.post("/v3/shopinfo/findFavorite").then(function (e) {
      return e && e.data && e.data.length ? (e.data.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e) : e;
    });
  };
  exports.searchNearStore = function (e, o) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
      d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 10;
    return t.default.post("/v2/shopinfo/findNear", {
      longitude: e,
      latitude: o,
      page: n,
      limit: a,
      distance: d
    }).then(function (e) {
      return e && e.data && e.data.length ? (e.data.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e) : e;
    });
  };
  exports.searchOftenStore = function () {
    return t.default.post("/v2/shopinfo/findOften").then(function (e) {
      return e && e.data && e.data.length ? (e.data.forEach(function (e) {
        e.shopAddress = (e.regionName || "") + e.shopAddress;
      }), e) : e;
    });
  };
  var t = e(require("./index"));
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/store.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/thirdActivity.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireWildcard"),
    n = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.bindPhone2 = function (e) {
    return new Promise(function (n, t) {
      wx.login({
        success: function (r) {
          var i = r.code;
          o.default.post("".concat(a.baseUrl_ThirdActivity, "/v1/app/bindToPhone"), {
            mobilePhone: e,
            captcha: i,
            third: "wxmini",
            miniAppId: c.default.pro.miniAppId_weixin
          }).then(function (t) {
            var r = t.data,
              i = r.accessToken,
              c = r.customerInfo,
              a = r.merged;
            (0, o.updateUserInfo)(c, a ? i : null, e);
            getApp().scTrack("RegisterResult");
            n(a);
          }).catch(t);
        },
        fail: t
      });
    });
  };
  exports.code2Session2 = s;
  exports.getIsBindPhone2 = function () {
    return h.apply(this, arguments);
  };
  exports.getUserPhone2 = function (e) {
    return l.apply(this, arguments);
  };
  exports.login2 = function () {
    return b.apply(this, arguments);
  };
  var t = n(require("../@babel/runtime/regenerator")),
    r = require("../@babel/runtime/helpers/objectSpread2"),
    i = require("../@babel/runtime/helpers/asyncToGenerator"),
    o = e(require("./index")),
    c = n(require("@/config/index")),
    a = require("../env"),
    u = n(require("@/utils/js-md5")),
    p = require("@/utils/index");
  function s() {
    return new Promise(function (e) {
      wx.login({
        success: function (n) {
          o.default.post("".concat(a.baseUrl_ThirdActivity, "/v1/app/wx/tiny-app/code2Session"), {
            code: n.code,
            miniAppId: c.default.pro.miniAppId_weixin,
            sign: (0, u.default)("".concat((0, p.createStrBeforeSign)({
              code: n.code,
              s: 2,
              miniAppId: c.default.pro.miniAppId_weixin
            }), "c274bac6493544b89d9c4f9d8d542b84")),
            s: 2
          }).then(function (n) {
            var t = n.data,
              r = t.openid,
              i = t.unionid;
            wx.setStorageSync("wxId", {
              OPENID: r,
              UNIONID: i
            });
            e({
              openid: r,
              unionid: i
            });
          }).catch(function (e) {
            getApp().showToast("网络异常，请稍后重试", null, 2000);
          });
        }
      });
    });
  }
  function d(e) {
    return f.apply(this, arguments);
  }
  function f() {
    return (f = i(t.default.mark(function e(n) {
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", o.default.post("".concat(a.baseUrl_ThirdActivity, "/v1/app/wx/tiny-app/decryptPhoneNum"), r(r({}, n), {}, {
              s: 2,
              sign: (0, u.default)("".concat((0, p.createStrBeforeSign)(r(r({}, n), {}, {
                s: 2
              })), "c274bac6493544b89d9c4f9d8d542b84"))
            })));
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function l() {
    return (l = i(t.default.mark(function e(n) {
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e) {
              d(n).then(function (n) {
                var t = n.data;
                e(t);
              }).catch(function (e) {
                s();
                getApp().showToast("网络异常，请稍后重试", null, 2000);
              });
            }));
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function h() {
    return (h = i(t.default.mark(function e() {
      var n, r;
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, getApp().getOpenId();
          case 2:
            return n = e.sent, r = n.UNIONID, e.abrupt("return", new Promise(function (e) {
              o.default.post("".concat(a.baseUrl_ThirdActivity, "/v1/app/loginByUnionid"), {
                third: "wxmini",
                unionid: r,
                sign: (0, u.default)("".concat((0, p.createStrBeforeSign)({
                  third: "wxmini",
                  unionid: r,
                  s: 2
                }), "c274bac6493544b89d9c4f9d8d542b84")),
                s: 2
              }).then(function (n) {
                var t = n.data;
                e(t);
              }).catch(function () {
                return e({});
              });
            }));
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function b() {
    return (b = i(t.default.mark(function e() {
      var n, r, i;
      return t.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, getApp().getOpenId();
          case 2:
            return n = e.sent, r = n.OPENID, i = n.UNIONID, e.abrupt("return", new Promise(function (e, n) {
              wx.login({
                success: function (t) {
                  o.default.post("".concat(a.baseUrl_ThirdActivity, "/v1/app/regByUnionid"), {
                    code: t.code,
                    openId: r,
                    unionid: i,
                    third: "wxmini",
                    miniAppId: c.default.pro.miniAppId_weixin
                  }, {
                    method: "post"
                  }).then(function (n) {
                    var t = n.data,
                      r = t.accessToken,
                      i = t.customerInfo,
                      c = t.mobilePhone;
                    (0, o.updateUserInfo)(i, r, c);
                    getApp().scTrack("LoginResult");
                    e();
                  }).catch(function (e) {
                    e && 5017 === e.code && getApp().showToast("该手机号已注销");
                    n();
                  });
                }
              });
            }));
          case 6:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/thirdActivity.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/user.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireWildcard"),
    t = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.bindPhone = function (e) {
    var t = e.phoneNumber,
      n = e.uid,
      r = e.mid;
    return new Promise(function (e, o) {
      wx.login({
        success: function (a) {
          var p = a.code;
          i.default.post("/v1/app/bindToPhone", {
            mobilePhone: t,
            inviterCustomerId: n,
            marketingId: r,
            captcha: p,
            third: "wxmini",
            miniAppId: u.default.pro.miniAppId_weixin
          }).then(function (t) {
            var n = t.data,
              r = n.accessToken,
              o = n.customerInfo,
              u = n.merged,
              a = n.mobilePhone;
            (0, i.updateUserInfo)(o, u ? r : null, a);
            getApp().scTrack("RegisterResult");
            e(u);
          }).catch(o);
        },
        fail: o
      });
    });
  };
  exports.changeMobilePhone = function (e, t) {
    return i.default.post("/v1/customer/chgPhone", {
      mobilePhone: e,
      captcha: t
    });
  };
  exports.code2Session = c;
  exports.daySign = function () {
    return i.default.get("/v1/customer/signin");
  };
  exports.fetchCaptcha = function (e, t) {
    return i.default.post("/v1/app/captchaSms", {
      sign: (0, p.default)("captchaVerifyParam=".concat(t, "&mobilePhone=").concat(e, "&s=2c274bac6493544b89d9c4f9d8d542b84")),
      mobilePhone: e,
      captchaVerifyParam: t,
      s: 2
    });
  };
  exports.getCoffeeCalendar = function (e) {
    return i.default.get("/v1/customer/myCoffeeCalendar", e);
  };
  exports.getIsBindPhone = function () {
    return s.apply(this, arguments);
  };
  exports.getPointRecord = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
    return i.default.post("/v1/customer/getPointList", {
      changeType: e,
      pageNumber: t,
      pageSize: n
    });
  };
  exports.getRights = function () {
    return i.default.get("/v1/customer/levels");
  };
  exports.getRights2 = function (e) {
    return i.default.post("/v1/memberRights/levels", e);
  };
  exports.getRightsCoupons = function (e) {
    return i.default.post("/v1/memberRights/getCoupons", e);
  };
  exports.getUserInfo = function () {
    return new Promise(function (e, t) {
      i.default.get("/v1/customer/info").then(function (t) {
        var n = t.data;
        (0, i.updateUserInfo)(n);
        e(n);
      }).catch(t);
    });
  };
  exports.getUserPhone = function (e) {
    return l.apply(this, arguments);
  };
  exports.getVersionInfo = function () {
    return i.default.post("/v1/app/version", {
      versionType: 4
    });
  };
  exports.modifyUserInfo = function (e) {
    return i.default.post("/v1/customer/update", e);
  };
  exports.reportTrack = function (e) {
    return h.apply(this, arguments);
  };
  exports.unbindPhone = function () {
    return i.default.post("/v1/app/thirdUnbind", {
      third: "wxmini"
    });
  };
  exports.upload = function (e) {
    return i.default.upload("/v1/image/upload", e);
  };
  var n = require("../@babel/runtime/helpers/objectSpread2"),
    r = t(require("../@babel/runtime/regenerator")),
    o = require("../@babel/runtime/helpers/asyncToGenerator"),
    i = e(require("./index")),
    u = t(require("@/config/index")),
    a = require("../env"),
    p = t(require("@/utils/js-md5"));
  function s() {
    return (s = o(r.default.mark(function e() {
      var t, n;
      return r.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, getApp().getOpenId();
          case 2:
            return t = e.sent, n = t.UNIONID, e.abrupt("return", new Promise(function (e) {
              i.default.post("/v1/app/loginByUnionid", {
                third: "wxmini",
                unionid: n
              }).then(function (t) {
                var n = t.data;
                e(n);
              }).catch(function () {
                return e({});
              });
            }));
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function c() {
    return new Promise(function (e) {
      wx.login({
        success: function (t) {
          i.default.post("/v1/app/code2Session", {
            miniAppId: u.default.pro.miniAppId_weixin,
            code: t.code
          }).then(function (t) {
            var n = t.data,
              r = n.openid,
              o = n.unionid;
            e({
              openid: r,
              unionid: o
            });
          }).catch(function (e) {
            getApp().showToast("网络异常，请稍后重试", null, 2000);
          });
        }
      });
    });
  }
  function d(e) {
    return f.apply(this, arguments);
  }
  function f() {
    return (f = o(r.default.mark(function e(t) {
      var o, a;
      return r.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, getApp().getOpenId();
          case 2:
            return o = e.sent, a = o.UNIONID, e.abrupt("return", i.default.post("/v1/app/getPhoneByUnionid", n(n({
              miniAppId: u.default.pro.miniAppId_weixin
            }, t), {}, {
              unionid: a
            })));
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function l() {
    return (l = o(r.default.mark(function e(t) {
      return r.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e) {
              d(t).then(function (t) {
                var n = t.data;
                e(n);
              }).catch(function () {
                c();
                getApp().showToast("网络异常，请稍后重试", null, 2000);
              });
            }));
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  function h() {
    return (h = o(r.default.mark(function e(t) {
      var o, u;
      return r.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, getApp().getOpenId();
          case 2:
            return o = e.sent, u = o.OPENID, e.abrupt("return", i.default.post("".concat(a.baseUrl, "/submsg/webapp/v1/subscribe/wechat/report"), n({
              openid: u
            }, t)));
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/user.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("request/webView.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.getDBLoginUrl = function (e) {
    return r.default.get("/v1/duiba/getLoginUrl", {
      dbredirect: e
    });
  };
  var r = e(require("./index"));
}, {
  isPage: false,
  isComponent: false,
  currentFile: "request/webView.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/base64.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = require("../@babel/runtime/helpers/typeof");
  !function (n, r) {
    var e, o;
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (e = n.Base64, (o = r()).noConflict = function () {
      return n.Base64 = e, o;
    }, n.Meteor && (Base64 = o), n.Base64 = o);
  }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0, function () {
    var t,
      n = "function" == typeof atob,
      r = "function" == typeof btoa,
      e = "function" == typeof Buffer,
      o = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
      u = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
      i = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
      f = (t = {}, i.forEach(function (n, r) {
        return t[n] = r;
      }), t),
      c = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
      a = String.fromCharCode.bind(String),
      d = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function (t) {
        return new Uint8Array(Array.prototype.slice.call(t, 0));
      },
      s = function (t) {
        return t.replace(/=/g, "").replace(/[+\/]/g, function (t) {
          return "+" == t ? "-" : "_";
        });
      },
      l = function (t) {
        return t.replace(/[^A-Za-z0-9\+\/]/g, "");
      },
      h = function (t) {
        for (var n, r, e, o, u = "", f = t.length % 3, c = 0; c < t.length;) {
          if ((r = t.charCodeAt(c++)) > 255 || (e = t.charCodeAt(c++)) > 255 || (o = t.charCodeAt(c++)) > 255) throw new TypeError("invalid character found");
          u += i[(n = r << 16 | e << 8 | o) >> 18 & 63] + i[n >> 12 & 63] + i[n >> 6 & 63] + i[63 & n];
        }
        return f ? u.slice(0, f - 3) + "===".substring(f) : u;
      },
      p = r ? function (t) {
        return btoa(t);
      } : e ? function (t) {
        return Buffer.from(t, "binary").toString("base64");
      } : h,
      y = e ? function (t) {
        return Buffer.from(t).toString("base64");
      } : function (t) {
        for (var n = [], r = 0, e = t.length; r < e; r += 4096) n.push(a.apply(null, t.subarray(r, r + 4096)));
        return p(n.join(""));
      },
      A = function (t, n) {
        return void 0 === n && (n = !1), n ? s(y(t)) : y(t);
      },
      b = function (t) {
        if (t.length < 2) return (n = t.charCodeAt(0)) < 128 ? t : n < 2048 ? a(192 | n >>> 6) + a(128 | 63 & n) : a(224 | n >>> 12 & 15) + a(128 | n >>> 6 & 63) + a(128 | 63 & n);
        var n = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
        return a(240 | n >>> 18 & 7) + a(128 | n >>> 12 & 63) + a(128 | n >>> 6 & 63) + a(128 | 63 & n);
      },
      g = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
      B = function (t) {
        return t.replace(g, b);
      },
      x = e ? function (t) {
        return Buffer.from(t, "utf8").toString("base64");
      } : u ? function (t) {
        return y(u.encode(t));
      } : function (t) {
        return p(B(t));
      },
      C = function (t, n) {
        return void 0 === n && (n = !1), n ? s(x(t)) : x(t);
      },
      m = function (t) {
        return C(t, !0);
      },
      v = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
      U = function (t) {
        switch (t.length) {
          case 4:
            var n = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
            return a(55296 + (n >>> 10)) + a(56320 + (1023 & n));
          case 3:
            return a((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
          default:
            return a((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
        }
      },
      F = function (t) {
        return t.replace(v, U);
      },
      w = function (t) {
        if (t = t.replace(/\s+/g, ""), !c.test(t)) throw new TypeError("malformed base64.");
        t += "==".slice(2 - (3 & t.length));
        for (var n, r, e, o = "", u = 0; u < t.length;) {
          n = f[t.charAt(u++)] << 18 | f[t.charAt(u++)] << 12 | (r = f[t.charAt(u++)]) << 6 | (e = f[t.charAt(u++)]);
          o += 64 === r ? a(n >> 16 & 255) : 64 === e ? a(n >> 16 & 255, n >> 8 & 255) : a(n >> 16 & 255, n >> 8 & 255, 255 & n);
        }
        return o;
      },
      S = n ? function (t) {
        return atob(l(t));
      } : e ? function (t) {
        return Buffer.from(t, "base64").toString("binary");
      } : w,
      E = e ? function (t) {
        return d(Buffer.from(t, "base64"));
      } : function (t) {
        return d(S(t).split("").map(function (t) {
          return t.charCodeAt(0);
        }));
      },
      D = function (t) {
        return E(z(t));
      },
      R = e ? function (t) {
        return Buffer.from(t, "base64").toString("utf8");
      } : o ? function (t) {
        return o.decode(E(t));
      } : function (t) {
        return F(S(t));
      },
      z = function (t) {
        return l(t.replace(/[-_]/g, function (t) {
          return "-" == t ? "+" : "/";
        }));
      },
      T = function (t) {
        return R(z(t));
      },
      Z = function (t) {
        return {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        };
      },
      j = function () {
        var t = function (t, n) {
          return Object.defineProperty(String.prototype, t, Z(n));
        };
        t("fromBase64", function () {
          return T(this);
        });
        t("toBase64", function (t) {
          return C(this, t);
        });
        t("toBase64URI", function () {
          return C(this, !0);
        });
        t("toBase64URL", function () {
          return C(this, !0);
        });
        t("toUint8Array", function () {
          return D(this);
        });
      },
      I = function () {
        var t = function (t, n) {
          return Object.defineProperty(Uint8Array.prototype, t, Z(n));
        };
        t("toBase64", function (t) {
          return A(this, t);
        });
        t("toBase64URI", function () {
          return A(this, !0);
        });
        t("toBase64URL", function () {
          return A(this, !0);
        });
      },
      O = {
        version: "3.7.5",
        VERSION: "3.7.5",
        atob: S,
        atobPolyfill: w,
        btoa: p,
        btoaPolyfill: h,
        fromBase64: T,
        toBase64: C,
        encode: C,
        encodeURI: m,
        encodeURL: m,
        utob: B,
        btou: F,
        decode: T,
        isValid: function (t) {
          if ("string" != typeof t) return !1;
          var n = t.replace(/\s+/g, "").replace(/={0,2}$/, "");
          return !/[^\s0-9a-zA-Z\+/]/.test(n) || !/[^\s0-9a-zA-Z\-_]/.test(n);
        },
        fromUint8Array: A,
        toUint8Array: D,
        extendString: j,
        extendUint8Array: I,
        extendBuiltins: function () {
          j();
          I();
        },
        Base64: {}
      };
    return Object.keys(O).forEach(function (t) {
      return O.Base64[t] = O[t];
    }), O;
  });
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/base64.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/createSign.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = function (e) {
    return l.apply(this, arguments);
  };
  var r = e(require("../@babel/runtime/regenerator")),
    t = require("../@babel/runtime/helpers/typeof"),
    n = require("../@babel/runtime/helpers/objectSpread2"),
    a = require("../@babel/runtime/helpers/asyncToGenerator"),
    i = e(require("./wasm/rsa_sign")),
    u = e(require("@/config/index")),
    p = wx.getStorageSync("env") || "pro",
    o = u.default[p],
    s = o.appId_weixin,
    c = o.privateKey_weixin;
  function l() {
    return (l = a(r.default.mark(function e(a) {
      var u, p, o, l, f, b, d;
      return r.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            for (u = "", p = n(n({}, a), {}, {
              t: Date.now() - (getApp().configData.timeOffset || 0),
              appId: s
            }), o = Object.keys(p).sort(), l = 0; l < o.length; l++) {
              f = o[l];
              p[f] || 0 === p[f] ? (b = "object" === t(p[f]) ? JSON.stringify(p[f]) : p[f], u += "".concat(l ? "&" : "").concat(f, "=").concat(b)) : "" !== p[f] && delete p[f];
            }
            return e.next = 6, (0, i.default)(u, c);
          case 6:
            return d = e.sent, e.abrupt("return", n(n({}, p), {}, {
              sign: d.replace(/\//g, "_").replace(/\+/g, "-")
            }));
          case 8:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/createSign.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/globalWatcher/apiProxy.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var t = e(require("../sctrack/index")),
    o = {
      showLoading: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
        wx.showLoading({
          title: e,
          complete: t
        });
      },
      hideLoading: function (e) {
        wx.hideLoading(e || {});
      },
      showToast: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1500,
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none",
          r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        wx.showToast({
          title: e,
          duration: o,
          mask: r,
          icon: n,
          complete: function () {
            if (t) var e = setTimeout(function () {
              t();
              clearTimeout(e);
            }, o);
          }
        });
      },
      getStorageSync: function (e) {
        return wx.getStorageSync(e);
      },
      setStorageSync: function (e, t) {
        wx.setStorageSync(e, t);
      },
      removeStorageSync: function (e) {
        wx.removeStorageSync(e);
      },
      clearStorageSync: function () {
        wx.clearStorageSync();
      },
      getStorage: function (e) {
        return wx.getStorage({
          key: e
        });
      },
      setStorage: function (e, t) {
        wx.setStorage({
          key: e,
          data: t
        });
      },
      removeStorage: function (e) {
        wx.removeStorage({
          key: e
        });
      },
      scTrack: function (e) {
        try {
          if (getApp().configData.shenCeDataEventTracking) {
            for (var o, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            var i = t.default[e](r);
            e = "PageClickEventDelegation" === e ? "PageClick" : e;
            i && (null === (o = getApp().sensors) || void 0 === o || o.track(e, i));
          }
        } catch (e) {
          console.log(e);
        }
      }
    };
  exports.default = o;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/globalWatcher/apiProxy.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/globalWatcher/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = require("../../@babel/runtime/helpers/interopRequireDefault"),
    a = require("../../@babel/runtime/helpers/defineProperty"),
    e = require("@/env"),
    i = t(require("./watcher"));
  function n() {}
  var r = Page;
  Page = function (t) {
    var c = t.onLoad || n,
      s = t.onUnload || n;
    return t.data ? t.data.__static__ = e.__static__ : t.data = {
      __static__: e.__static__
    }, t.onLoad = function () {
      var e = this,
        n = this.setData,
        r = t.data || {},
        s = {};
      if (this.setData = function (e, i, r) {
        n.call(this, e, function () {
          var c = this;
          if (t.computed && Object.keys(s).forEach(function (i) {
            Object.keys(e).forEach(function (e) {
              (s[i].includes(e) || s[i].includes(e.split(".")[0]) || s[i].includes(e.split("[")[0])) && n.call(c, a({}, i, t.computed[i].call(c, c.data)));
            });
          }), i) if (r) var o = setTimeout(function () {
            i.call(c);
            clearTimeout(o);
          }, r);else i.call(this);
        });
      }, this._watcher = this._watcher || new i.default(r, this.setData.bind(this)), t.computed) {
        var o = JSON.parse(JSON.stringify(this.data)),
          u = [],
          _ = function (t) {
            var a = o[t];
            Object.defineProperty(o, t, {
              get: function () {
                return u.push(t), a;
              }
            });
          };
        for (var l in o) _(l);
        var f = function (i) {
          var n = t.computed[i];
          e.setData(a({}, i, n.call(e, o)), function () {
            s[i] = u;
          });
        };
        for (var d in t.computed) f(d);
      }
      return c.apply(this, arguments);
    }, t.onUnload = function () {
      return this._watcher.removeObserver(), s.apply(this, arguments);
    }, r(t);
  };
  var c = Component;
  Component = function (t) {
    return t.data ? t.data.__static__ = e.__static__ : t.data = {
      __static__: e.__static__
    }, c(t);
  };
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/globalWatcher/index.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/globalWatcher/observer.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var e = require("../../@babel/runtime/helpers/classCallCheck"),
    s = require("../../@babel/runtime/helpers/createClass"),
    t = function () {
      function t() {
        e(this, t);
        this.subscribers = {};
      }
      return s(t, [{
        key: "add",
        value: function (e, s) {
          this.subscribers[e] || (this.subscribers[e] = []);
          this.subscribers[e].push(s);
        }
      }, {
        key: "delete",
        value: function () {}
      }, {
        key: "notify",
        value: function (e, s) {
          this.subscribers[e] && this.subscribers[e].forEach(function (t) {
            t.update && "function" == typeof t.update && t.update(e, s);
          });
        }
      }]), t;
    }();
  exports.default = t;
  t.globalDataObserver = new t();
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/globalWatcher/observer.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/globalWatcher/reactive.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = function e(u) {
    return new Proxy(u, {
      get: function (t, u) {
        var n,
          l = Reflect.get(t, u);
        return null !== (n = l) && "object" === r(n) ? e(l) : l;
      },
      set: function (e, r, u) {
        return e[r] === u || (t.default.globalDataObserver.notify(r, u), Reflect.set(e, r, u));
      }
    });
  };
  var r = require("../../@babel/runtime/helpers/typeof"),
    t = e(require("./observer"));
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/globalWatcher/reactive.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/globalWatcher/watcher.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var t = require("../../@babel/runtime/helpers/defineProperty"),
    r = require("../../@babel/runtime/helpers/classCallCheck"),
    a = require("../../@babel/runtime/helpers/createClass"),
    i = e(require("./observer")).default.globalDataObserver,
    s = 0,
    u = function () {
      function e() {
        r(this, e);
        var t = getApp().globalData || {},
          a = JSON.parse(JSON.stringify(arguments[0] ? arguments[0] : {}));
        for (var u in this.updateFn = arguments[1] ? arguments[1] : {}, this.id = ++s, this.reactiveData = {}, a) a.hasOwnProperty(u) && u in t && (this.reactiveData[u] = t[u], this.update(u, t[u]));
        for (var n in this.reactiveData) this.reactiveData.hasOwnProperty(n) && i.add(n, this);
      }
      return a(e, [{
        key: "update",
        value: function (e, r) {
          "function" == typeof this.updateFn && this.updateFn(t({}, e, r));
        }
      }, {
        key: "removeObserver",
        value: function () {
          i.delete(Object.keys(this.reactiveData), this.id);
        }
      }]), e;
    }();
  exports.default = u;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/globalWatcher/watcher.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/httpQueue.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var e = require("../@babel/runtime/helpers/classCallCheck"),
    t = require("../@babel/runtime/helpers/createClass"),
    u = function () {
      function u() {
        e(this, u);
        this.httpQueue = {};
      }
      return t(u, [{
        key: "get",
        value: function (e) {
          return this.httpQueue[e];
        }
      }, {
        key: "add",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
          this.has(e) ? this.httpQueue[e].push(t) : (this.httpQueue[e] = [t], u());
        }
      }, {
        key: "delete",
        value: function (e) {
          delete this.httpQueue[e];
        }
      }, {
        key: "has",
        value: function (e) {
          return this.httpQueue.hasOwnProperty(e);
        }
      }]), u;
    }();
  exports.default = u;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/httpQueue.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.formatDate = n;
  var e = require("../@babel/runtime/helpers/typeof"),
    t = require("../@babel/runtime/helpers/defineProperty"),
    r = require("../@babel/runtime/helpers/slicedToArray");
  function n(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd hh:mm:ss";
    if ("string" == typeof e) return e;
    if (!e || null == e) return null;
    var r = {
      "M+": e.getMonth() + 1,
      "d+": e.getDate(),
      "h+": e.getHours(),
      "m+": e.getMinutes(),
      "s+": e.getSeconds(),
      "q+": Math.floor((e.getMonth() + 3) / 3),
      S: e.getMilliseconds()
    };
    for (var n in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? r[n] : ("00" + r[n]).substr(("" + r[n]).length)));
    return t;
  }
  function i(e) {
    return e * Math.PI / 180;
  }
  var u = {
    getStorage: function (e) {
      var t = wx.getStorageSync(e);
      if (!t || !t.length) return [];
      var r = parseInt(Date.now() / 1000),
        n = t.filter(function (e) {
          return e.expired > r;
        });
      return wx.setStorageSync(e, n), n.map(function (e) {
        return e.value;
      });
    },
    setStorage: function (e, t, r) {
      var n = wx.getStorageSync(e),
        i = {
          value: t,
          expired: parseInt(Date.now() / 1000) + r
        };
      if (n && n.length) {
        if (n.some(function (e) {
          return e.value === t;
        })) return n.map(function (e) {
          return e.value;
        });
        (n = n.slice(0, 19)).unshift(i);
      } else n = [i];
      return wx.setStorageSync(e, n), n.map(function (e) {
        return e.value;
      });
    },
    clearStorage: function (e) {
      wx.removeStorage({
        key: e
      });
    }
  };
  module.exports = {
    formatDate: n,
    getDistance: function (e, t, r, n) {
      if (!e || !r) return null;
      var u = i(e),
        a = i(r),
        o = u - a,
        l = i(t) - i(n),
        c = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(o / 2), 2) + Math.cos(u) * Math.cos(a) * Math.pow(Math.sin(l / 2), 2)));
      return c = (c *= 6378.137) < 1 ? (c = Math.round(1000 * c)).toFixed(0) + "m" : (c = Math.round(10000 * c) / 10000).toFixed(1) + "km";
    },
    debounce: function (e, t, r, n) {
      var i;
      return function () {
        var u = n || this,
          a = arguments,
          o = function () {
            i = null;
            r || e.apply(u, a);
          },
          l = r && !i;
        clearTimeout(i);
        i = setTimeout(o, t);
        l && e.apply(u, a);
      };
    },
    throttle: function (e, t, r) {
      var n, i;
      return t || (t = 250), function () {
        var u = r || this,
          a = +new Date(),
          o = arguments;
        a - n < t ? (clearTimeout(i), i = setTimeout(function () {
          n = a;
          e.apply(u, o);
        }, t)) : (n = a, e.apply(u, o));
      };
    },
    periodicArrStorage: u,
    uniqueArr: function (e, t) {
      var r = new Map();
      return e.filter(function (e) {
        return !r.has(e[t]) && r.set(e[t], 1);
      });
    },
    getUrlParam: function (e) {
      var n = e.match(/([?&])(.+?=[^&]+)/gim);
      return n ? n.reduce(function (e, n) {
        var i = n.slice(1).split("="),
          u = r(i, 2),
          a = u[0],
          o = u[1];
        return Object.assign(e, t({}, a, o));
      }, {}) : {};
    },
    updUrlParam: function (e, t, r) {
      var n = t + "=" + r,
        i = new RegExp("(".concat(t, "=)([^&]*)"));
      return e.match(i) ? e.replace(i, n) : e.match("[?]") ? e + "&" + n : e + "?" + n;
    },
    delUrlParam: function (e, t) {
      if (-1 == e.indexOf(t)) return e;
      for (var r = e.split("?"), n = r[0], i = r[1].split("&"), u = -1, a = 0; a < i.length; a++) {
        if (i[a].split("=")[0] == t) {
          u = a;
          break;
        }
      }
      return -1 == u ? e : (i.splice(u, 1), n + "?" + i.join("&"));
    },
    isLatestVerison: function (e, t) {
      if (!e || !t || "string" != typeof e || "string" != typeof t) return !0;
      e = e.split(".").map(function (e) {
        return +e;
      });
      t = t.split(".").map(function (e) {
        return +e;
      });
      for (var r = 0; r < e.length; r++) if ((e[r] || 0) < (t[r] || 0)) return !1;
      return !0;
    },
    splitSprice: function (e) {
      return e ? (e / 100).toString().split(".") : [0];
    },
    dealTime: function (e) {
      return (e && "string" == typeof e ? e.split(" ")[0] : "").replace(/-/g, ".");
    },
    createStrBeforeSign: function (e) {
      for (var t = "", r = Object.keys(e).sort(), n = 0; n < r.length; n++) {
        var i = r[n];
        (e[i] || 0 === e[i]) && (t += "".concat(n ? "&" : "").concat(i, "=").concat(e[i]));
      }
      return t;
    },
    multiplyArray: function (e, t) {
      return new Array(e).fill(t).flat();
    },
    isObject: function (e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    },
    filterNull: function t(r) {
      if (Array.isArray(r)) return r.map(t);
      if ("object" !== e(r) || null === r) return r;
      var n = {};
      for (var i in r) r.hasOwnProperty(i) && null !== r[i] && "" !== r[i] && (n[i] = t(r[i]));
      return n;
    },
    debounceDouble: function (e, t) {
      var r;
      return function () {
        var n = this,
          i = arguments;
        clearTimeout(r);
        r || e.apply(n, i);
        r = setTimeout(function () {
          r = null;
          e.apply(n, i);
        }, t);
      };
    }
  };
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/index.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/js-md5.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var _typeof2 = require("../@babel/runtime/helpers/typeof");
  module.exports = function () {
    var __MODS__ = {},
      __DEFINE__ = function (t, e, r) {
        __MODS__[t] = {
          status: 0,
          func: e,
          req: r,
          m: {
            exports: {},
            _tempexports: {}
          }
        };
      },
      __REQUIRE__ = function (t, e) {
        var r, s;
        return __MODS__[t] ? (__MODS__[t].status || ((r = __MODS__[t].m)._exports = r._tempexports, (s = Object.getOwnPropertyDescriptor(r, "exports")) && s.configurable && Object.defineProperty(r, "exports", {
          set: function (t) {
            "object" == _typeof2(t) && t !== r._exports && (r._exports.__proto__ = t.__proto__, Object.keys(t).forEach(function (e) {
              r._exports[e] = t[e];
            }));
            r._tempexports = t;
          },
          get: function () {
            return r._tempexports;
          }
        }), __MODS__[t].status = 1, __MODS__[t].func(__MODS__[t].req, r, r.exports)), __MODS__[t].m.exports) : require(e);
      };
    return __DEFINE__(1640656366269, function (require, module, exports) {
      !function () {
        function Md5(t) {
          if (t) {
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            this.blocks = blocks;
            this.buffer8 = buffer8;
          } else if (ARRAY_BUFFER) {
            var e = new ArrayBuffer(68);
            this.buffer8 = new Uint8Array(e);
            this.blocks = new Uint32Array(e);
          } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
          this.finalized = this.hashed = !1;
          this.first = !0;
        }
        var WEB_WORKER,
          NODE_JS,
          COMMON_JS,
          AMD,
          ARRAY_BUFFER,
          HEX_CHARS,
          EXTRA,
          SHIFT,
          OUTPUT_TYPES,
          BASE64_ENCODE_CHAR,
          blocks,
          buffer8,
          buffer,
          createOutputMethod,
          createMethod,
          nodeWrap,
          exports,
          ERROR = "input is invalid type",
          WINDOW = "object" == ("undefined" == typeof window ? "undefined" : _typeof2(window)),
          root = WINDOW ? window : {};
        root.JS_MD5_NO_WINDOW && (WINDOW = !1);
        WEB_WORKER = !WINDOW && "object" == ("undefined" == typeof self ? "undefined" : _typeof2(self));
        NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == ("undefined" == typeof process ? "undefined" : _typeof2(process)) && process.versions && process.versions.node;
        NODE_JS ? root = global : WEB_WORKER && (root = self);
        COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" == _typeof2(module) && module.exports;
        AMD = "function" == typeof define && define.amd;
        ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer;
        HEX_CHARS = "0123456789abcdef".split("");
        EXTRA = [128, 32768, 8388608, -2147483648];
        SHIFT = [0, 8, 16, 24];
        OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"];
        BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        blocks = [];
        ARRAY_BUFFER && (buffer = new ArrayBuffer(68), buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer));
        (root.JS_MD5_NO_NODE_JS || !Array.isArray) && (Array.isArray = function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        });
        !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {
          return "object" == _typeof2(t) && t.buffer && t.buffer.constructor === ArrayBuffer;
        });
        createOutputMethod = function (t) {
          return function (e) {
            return new Md5(!0).update(e)[t]();
          };
        };
        createMethod = function () {
          var t,
            e,
            r = createOutputMethod("hex");
          for (NODE_JS && (r = nodeWrap(r)), r.create = function () {
            return new Md5();
          }, r.update = function (t) {
            return r.create().update(t);
          }, t = 0; t < OUTPUT_TYPES.length; ++t) {
            e = OUTPUT_TYPES[t];
            r[e] = createOutputMethod(e);
          }
          return r;
        };
        nodeWrap = function nodeWrap(method) {
          var crypto = eval("require('crypto')"),
            Buffer = eval("require('buffer').Buffer"),
            nodeMethod = function (t) {
              if ("string" == typeof t) return crypto.createHash("md5").update(t, "utf8").digest("hex");
              if (null == t) throw ERROR;
              return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(t)).digest("hex") : method(t);
            };
          return nodeMethod;
        };
        Md5.prototype.update = function (t) {
          var e, r, s, o, i, _, f, h;
          if (!this.finalized) {
            if ("string" !== (r = _typeof2(t))) {
              if ("object" !== r) throw ERROR;
              if (null === t) throw ERROR;
              if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw ERROR;
              e = !0;
            }
            for (i = 0, _ = t.length, f = this.blocks, h = this.buffer8; _ > i;) {
              if (this.hashed && (this.hashed = !1, f[0] = f[16], f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0), e) {
                if (ARRAY_BUFFER) for (o = this.start; _ > i && 64 > o; ++i) h[o++] = t[i];else for (o = this.start; _ > i && 64 > o; ++i) f[o >> 2] |= t[i] << SHIFT[3 & o++];
              } else if (ARRAY_BUFFER) for (o = this.start; _ > i && 64 > o; ++i) 128 > (s = t.charCodeAt(i)) ? h[o++] = s : 2048 > s ? (h[o++] = 192 | s >> 6, h[o++] = 128 | 63 & s) : 55296 > s || s >= 57344 ? (h[o++] = 224 | s >> 12, h[o++] = 128 | 63 & s >> 6, h[o++] = 128 | 63 & s) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++i)), h[o++] = 240 | s >> 18, h[o++] = 128 | 63 & s >> 12, h[o++] = 128 | 63 & s >> 6, h[o++] = 128 | 63 & s);else for (o = this.start; _ > i && 64 > o; ++i) 128 > (s = t.charCodeAt(i)) ? f[o >> 2] |= s << SHIFT[3 & o++] : 2048 > s ? (f[o >> 2] |= (192 | s >> 6) << SHIFT[3 & o++], f[o >> 2] |= (128 | 63 & s) << SHIFT[3 & o++]) : 55296 > s || s >= 57344 ? (f[o >> 2] |= (224 | s >> 12) << SHIFT[3 & o++], f[o >> 2] |= (128 | 63 & s >> 6) << SHIFT[3 & o++], f[o >> 2] |= (128 | 63 & s) << SHIFT[3 & o++]) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++i)), f[o >> 2] |= (240 | s >> 18) << SHIFT[3 & o++], f[o >> 2] |= (128 | 63 & s >> 12) << SHIFT[3 & o++], f[o >> 2] |= (128 | 63 & s >> 6) << SHIFT[3 & o++], f[o >> 2] |= (128 | 63 & s) << SHIFT[3 & o++]);
              this.lastByteIndex = o;
              this.bytes += o - this.start;
              o >= 64 ? (this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o;
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
          }
        };
        Md5.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var t = this.blocks,
              e = this.lastByteIndex;
            t[e >> 2] |= EXTRA[3 & e];
            e >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0);
            t[14] = this.bytes << 3;
            t[15] = this.hBytes << 3 | this.bytes >>> 29;
            this.hash();
          }
        };
        Md5.prototype.hash = function () {
          var t,
            e,
            r,
            s,
            o,
            i,
            _ = this.blocks;
          this.first ? e = ((e = ((t = ((t = _[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (r = ((r = (-271733879 ^ (s = ((s = (-1732584194 ^ 2004318071 & t) + _[1] - 117830708) << 12 | s >>> 20) + t << 0) & (-271733879 ^ t)) + _[2] - 1126478375) << 17 | r >>> 15) + s << 0) & (s ^ t)) + _[3] - 1316259209) << 22 | e >>> 10) + r << 0 : (t = this.h0, e = this.h1, r = this.h2, e = ((e += ((t = ((t += ((s = this.h3) ^ e & (r ^ s)) + _[0] - 680876936) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (s = ((s += (r ^ t & (e ^ r)) + _[1] - 389564586) << 12 | s >>> 20) + t << 0) & (t ^ e)) + _[2] + 606105819) << 17 | r >>> 15) + s << 0) & (s ^ t)) + _[3] - 1044525330) << 22 | e >>> 10) + r << 0);
          e = ((e += ((t = ((t += (s ^ e & (r ^ s)) + _[4] - 176418897) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (s = ((s += (r ^ t & (e ^ r)) + _[5] + 1200080426) << 12 | s >>> 20) + t << 0) & (t ^ e)) + _[6] - 1473231341) << 17 | r >>> 15) + s << 0) & (s ^ t)) + _[7] - 45705983) << 22 | e >>> 10) + r << 0;
          e = ((e += ((t = ((t += (s ^ e & (r ^ s)) + _[8] + 1770035416) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (s = ((s += (r ^ t & (e ^ r)) + _[9] - 1958414417) << 12 | s >>> 20) + t << 0) & (t ^ e)) + _[10] - 42063) << 17 | r >>> 15) + s << 0) & (s ^ t)) + _[11] - 1990404162) << 22 | e >>> 10) + r << 0;
          e = ((e += ((t = ((t += (s ^ e & (r ^ s)) + _[12] + 1804603682) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (s = ((s += (r ^ t & (e ^ r)) + _[13] - 40341101) << 12 | s >>> 20) + t << 0) & (t ^ e)) + _[14] - 1502002290) << 17 | r >>> 15) + s << 0) & (s ^ t)) + _[15] + 1236535329) << 22 | e >>> 10) + r << 0;
          e = ((e += ((s = ((s += (e ^ r & ((t = ((t += (r ^ s & (e ^ r)) + _[1] - 165796510) << 5 | t >>> 27) + e << 0) ^ e)) + _[6] - 1069501632) << 9 | s >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (s ^ t)) + _[11] + 643717713) << 14 | r >>> 18) + s << 0) ^ s)) + _[0] - 373897302) << 20 | e >>> 12) + r << 0;
          e = ((e += ((s = ((s += (e ^ r & ((t = ((t += (r ^ s & (e ^ r)) + _[5] - 701558691) << 5 | t >>> 27) + e << 0) ^ e)) + _[10] + 38016083) << 9 | s >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (s ^ t)) + _[15] - 660478335) << 14 | r >>> 18) + s << 0) ^ s)) + _[4] - 405537848) << 20 | e >>> 12) + r << 0;
          e = ((e += ((s = ((s += (e ^ r & ((t = ((t += (r ^ s & (e ^ r)) + _[9] + 568446438) << 5 | t >>> 27) + e << 0) ^ e)) + _[14] - 1019803690) << 9 | s >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (s ^ t)) + _[3] - 187363961) << 14 | r >>> 18) + s << 0) ^ s)) + _[8] + 1163531501) << 20 | e >>> 12) + r << 0;
          e = ((e += ((s = ((s += (e ^ r & ((t = ((t += (r ^ s & (e ^ r)) + _[13] - 1444681467) << 5 | t >>> 27) + e << 0) ^ e)) + _[2] - 51403784) << 9 | s >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (s ^ t)) + _[7] + 1735328473) << 14 | r >>> 18) + s << 0) ^ s)) + _[12] - 1926607734) << 20 | e >>> 12) + r << 0;
          e = ((e += ((i = (s = ((s += ((o = e ^ r) ^ (t = ((t += (o ^ s) + _[5] - 378558) << 4 | t >>> 28) + e << 0)) + _[8] - 2022574463) << 11 | s >>> 21) + t << 0) ^ t) ^ (r = ((r += (i ^ e) + _[11] + 1839030562) << 16 | r >>> 16) + s << 0)) + _[14] - 35309556) << 23 | e >>> 9) + r << 0;
          e = ((e += ((i = (s = ((s += ((o = e ^ r) ^ (t = ((t += (o ^ s) + _[1] - 1530992060) << 4 | t >>> 28) + e << 0)) + _[4] + 1272893353) << 11 | s >>> 21) + t << 0) ^ t) ^ (r = ((r += (i ^ e) + _[7] - 155497632) << 16 | r >>> 16) + s << 0)) + _[10] - 1094730640) << 23 | e >>> 9) + r << 0;
          e = ((e += ((i = (s = ((s += ((o = e ^ r) ^ (t = ((t += (o ^ s) + _[13] + 681279174) << 4 | t >>> 28) + e << 0)) + _[0] - 358537222) << 11 | s >>> 21) + t << 0) ^ t) ^ (r = ((r += (i ^ e) + _[3] - 722521979) << 16 | r >>> 16) + s << 0)) + _[6] + 76029189) << 23 | e >>> 9) + r << 0;
          e = ((e += ((i = (s = ((s += ((o = e ^ r) ^ (t = ((t += (o ^ s) + _[9] - 640364487) << 4 | t >>> 28) + e << 0)) + _[12] - 421815835) << 11 | s >>> 21) + t << 0) ^ t) ^ (r = ((r += (i ^ e) + _[15] + 530742520) << 16 | r >>> 16) + s << 0)) + _[2] - 995338651) << 23 | e >>> 9) + r << 0;
          e = ((e += ((s = ((s += (e ^ ((t = ((t += (r ^ (e | ~s)) + _[0] - 198630844) << 6 | t >>> 26) + e << 0) | ~r)) + _[7] + 1126891415) << 10 | s >>> 22) + t << 0) ^ ((r = ((r += (t ^ (s | ~e)) + _[14] - 1416354905) << 15 | r >>> 17) + s << 0) | ~t)) + _[5] - 57434055) << 21 | e >>> 11) + r << 0;
          e = ((e += ((s = ((s += (e ^ ((t = ((t += (r ^ (e | ~s)) + _[12] + 1700485571) << 6 | t >>> 26) + e << 0) | ~r)) + _[3] - 1894986606) << 10 | s >>> 22) + t << 0) ^ ((r = ((r += (t ^ (s | ~e)) + _[10] - 1051523) << 15 | r >>> 17) + s << 0) | ~t)) + _[1] - 2054922799) << 21 | e >>> 11) + r << 0;
          e = ((e += ((s = ((s += (e ^ ((t = ((t += (r ^ (e | ~s)) + _[8] + 1873313359) << 6 | t >>> 26) + e << 0) | ~r)) + _[15] - 30611744) << 10 | s >>> 22) + t << 0) ^ ((r = ((r += (t ^ (s | ~e)) + _[6] - 1560198380) << 15 | r >>> 17) + s << 0) | ~t)) + _[13] + 1309151649) << 21 | e >>> 11) + r << 0;
          e = ((e += ((s = ((s += (e ^ ((t = ((t += (r ^ (e | ~s)) + _[4] - 145523070) << 6 | t >>> 26) + e << 0) | ~r)) + _[11] - 1120210379) << 10 | s >>> 22) + t << 0) ^ ((r = ((r += (t ^ (s | ~e)) + _[2] + 718787259) << 15 | r >>> 17) + s << 0) | ~t)) + _[9] - 343485551) << 21 | e >>> 11) + r << 0;
          this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = e - 271733879 << 0, this.h2 = r - 1732584194 << 0, this.h3 = s + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + e << 0, this.h2 = this.h2 + r << 0, this.h3 = this.h3 + s << 0);
        };
        Md5.prototype.hex = function () {
          this.finalize();
          var t = this.h0,
            e = this.h1,
            r = this.h2,
            s = this.h3;
          return HEX_CHARS[15 & t >> 4] + HEX_CHARS[15 & t] + HEX_CHARS[15 & t >> 12] + HEX_CHARS[15 & t >> 8] + HEX_CHARS[15 & t >> 20] + HEX_CHARS[15 & t >> 16] + HEX_CHARS[15 & t >> 28] + HEX_CHARS[15 & t >> 24] + HEX_CHARS[15 & e >> 4] + HEX_CHARS[15 & e] + HEX_CHARS[15 & e >> 12] + HEX_CHARS[15 & e >> 8] + HEX_CHARS[15 & e >> 20] + HEX_CHARS[15 & e >> 16] + HEX_CHARS[15 & e >> 28] + HEX_CHARS[15 & e >> 24] + HEX_CHARS[15 & r >> 4] + HEX_CHARS[15 & r] + HEX_CHARS[15 & r >> 12] + HEX_CHARS[15 & r >> 8] + HEX_CHARS[15 & r >> 20] + HEX_CHARS[15 & r >> 16] + HEX_CHARS[15 & r >> 28] + HEX_CHARS[15 & r >> 24] + HEX_CHARS[15 & s >> 4] + HEX_CHARS[15 & s] + HEX_CHARS[15 & s >> 12] + HEX_CHARS[15 & s >> 8] + HEX_CHARS[15 & s >> 20] + HEX_CHARS[15 & s >> 16] + HEX_CHARS[15 & s >> 28] + HEX_CHARS[15 & s >> 24];
        };
        Md5.prototype.toString = Md5.prototype.hex;
        Md5.prototype.digest = function () {
          this.finalize();
          var t = this.h0,
            e = this.h1,
            r = this.h2,
            s = this.h3;
          return [255 & t, 255 & t >> 8, 255 & t >> 16, 255 & t >> 24, 255 & e, 255 & e >> 8, 255 & e >> 16, 255 & e >> 24, 255 & r, 255 & r >> 8, 255 & r >> 16, 255 & r >> 24, 255 & s, 255 & s >> 8, 255 & s >> 16, 255 & s >> 24];
        };
        Md5.prototype.array = Md5.prototype.digest;
        Md5.prototype.arrayBuffer = function () {
          var t, e;
          return this.finalize(), t = new ArrayBuffer(16), (e = new Uint32Array(t))[0] = this.h0, e[1] = this.h1, e[2] = this.h2, e[3] = this.h3, t;
        };
        Md5.prototype.buffer = Md5.prototype.arrayBuffer;
        Md5.prototype.base64 = function () {
          var t,
            e,
            r,
            s,
            o = "",
            i = this.array();
          for (s = 0; 15 > s;) {
            t = i[s++];
            e = i[s++];
            r = i[s++];
            o += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & (t << 4 | e >>> 4)] + BASE64_ENCODE_CHAR[63 & (e << 2 | r >>> 6)] + BASE64_ENCODE_CHAR[63 & r];
          }
          return t = i[s], o + (BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & t << 4] + "==");
        };
        exports = createMethod();
        COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && define(function () {
          return exports;
        }));
      }();
    }, function (t) {
      return __REQUIRE__({}[t], t);
    }), __REQUIRE__(1640656366269);
  }();
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/js-md5.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/sctrack/eventDispatcher.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  exports.default = {
    popShareTap: function (e) {
      var t = e[0];
      return {
        element_title: "66幸运季，天天领免单",
        element_name: t.data.isAllReceive ? "新助力" : t.shareId ? "发起我的助力" : 0 === t.data.currentAssistsNum ? "首次分享" : "继续分享"
      };
    },
    mainBtnShareTap: function () {
      return {
        element_title: "66幸运季，天天领免单",
        element_name: "分享页面"
      };
    },
    toRule: function () {
      return {
        element_title: "66幸运季，天天领免单",
        element_name: "活动规则"
      };
    },
    toReward: function () {
      return {
        element_title: "66幸运季，天天领免单",
        element_name: "奖励记录"
      };
    },
    receiveCoupon: function (e) {
      return {
        element_title: "66幸运季，天天领免单",
        element_name: ["领券1", "领券3", "领券5"][e[0]]
      };
    },
    assistance: function (e) {
      return {
        element_title: "66幸运季，天天领免单",
        element_name: e[0]
      };
    },
    inviteSaveImage: function () {
      return {
        element_title: "邀请有礼",
        element_name: "保存图片"
      };
    },
    invitePoster: function () {
      return {
        element_title: "邀请有礼",
        element_name: "生成海报"
      };
    },
    inviteFriends: function () {
      return {
        element_title: "邀请有礼",
        element_name: "邀请好友"
      };
    },
    inviteCue: function () {
      return {
        element_title: "邀请有礼",
        element_name: "提醒TA"
      };
    }
  };
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/sctrack/eventDispatcher.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/sctrack/exposure.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  require("../../@babel/runtime/helpers/Objectvalues");
  var r = require("../../@babel/runtime/helpers/objectSpread2"),
    t = e(require("../js-md5"));
  function o() {}
  var a = Page;
  Page = function (e) {
    var r = e.onShow || o,
      t = e.onHide || o;
    return e.onShow = function () {
      return s.addPageObserver(), r.apply(this, arguments);
    }, e.onHide = function () {
      return s.removePageObserver(), t.apply(this, arguments);
    }, a(e);
  };
  var s = {
      platform: wx,
      config: {
        className: "ad-img",
        area_rate: 1,
        repeated: !1
      },
      tagExposedViewIdMap: {},
      observerMap: {},
      addObserverByClassName: function (e, r) {
        this.config.className = e;
        this.observeIntersection(r);
      },
      observeIntersection: function (e) {
        var o,
          a = this;
        null === (o = this.createObserver(e)) || void 0 === o || o.relativeToViewport().observe("." + this.config.className, function (o) {
          if (o.intersectionRatio >= a.config.area_rate) {
            var s = (0, t.default)(JSON.stringify(r({
              id: o.id
            }, o.dataset)));
            (!a.config.repeated && !a.tagExposedViewIdMap[s] || a.config.repeated) && (a.tagExposedViewIdMap[s] = 1, getApp().scTrack("OperationSpotExposure", e.component, o.dataset));
          }
        });
      },
      createObserver: function (e) {
        var r = e.component || this.platform,
          t = getCurrentPages(),
          o = t[t.length - 1],
          a = {
            observeAll: !0,
            thresholds: [this.config.area_rate]
          },
          s = e.component ? e.component.createIntersectionObserver(a) : r.createIntersectionObserver(o, a);
        return this.observerMap[o.route] || (this.observerMap[o.route] = {}), this.observerMap[o.route][e.component.__wxExparserNodeId__] = {
          component: e.component,
          observer: s
        }, s;
      },
      addPageObserver: function () {
        var e = this,
          r = getCurrentPages(),
          t = r[r.length - 1];
        this.observerMap[t.route] && Object.values(this.observerMap[t.route]).forEach(function (r) {
          e.addObserverByClassName("ad-img", {
            component: r.component
          });
        });
      },
      removePageObserver: function () {
        var e = getCurrentPages(),
          r = e[e.length - 1];
        this.observerMap[r.route] && Object.values(this.observerMap[r.route]).forEach(function (e) {
          var r;
          null === (r = e.observer) || void 0 === r || r.disconnect();
          e.observer = null;
        });
        this.config.repeated && (this.tagExposedViewIdMap = {});
      }
    },
    n = s;
  exports.default = n;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/sctrack/exposure.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/sctrack/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var t = require("../../@babel/runtime/helpers/toArray"),
    o = require("../../@babel/runtime/helpers/objectSpread2"),
    r = e(require("./eventDispatcher.js")),
    i = {
      RegisterResult: function () {},
      LoginResult: function () {},
      PageClick: function (e) {
        var t = e[0],
          o = e[1];
        return {
          e_currentpage_title: "点餐页",
          e_element_id: t.data.vtabs[o].productCategoryId || "",
          e_element_name: t.data.vtabs[o].categoryNameSale || "",
          e_element_rank: o + 1,
          e_element_area: "餐单分类"
        };
      },
      BookmarkTaste: function (e) {
        var t,
          o,
          r = e[0],
          i = r.data.goodsCopy,
          c = i.productAttrs.map(function (e) {
            return e.productAttrs[e.selectAttr];
          }),
          d = i.productSpecs.map(function (e) {
            return 1 != e.maxSelect ? e.specs.map(function (e) {
              if (e.addNum > 0) return {
                specId: e.specId,
                specName: e.specName,
                specPrice: e.specPrice,
                selectAmount: e.addNum
              };
            }) : null !== e.selectSpec && void 0 !== e.selectSpec && "" !== e.selectSpec ? {
              specId: e.specs[e.selectSpec].specId,
              specName: e.specs[e.selectSpec].specName,
              specPrice: e.specs[e.selectSpec].specPrice,
              selectAmount: 1
            } : void 0;
          }).flat().filter(function (e) {
            return e;
          });
        return {
          e_store_id: getApp().globalData.selectedStore.shopId,
          e_is_group_buying: "default" == r.data.type && !r.data.useBuyNow,
          e_commodity_id: i.productId,
          e_commodity_name: i.productName,
          e_commodity_tag: null === (t = i.productTags) || void 0 === t ? void 0 : t.map(function (e) {
            return e.content;
          }),
          e_first_commodity: i.categoryNameSale,
          e_commodity_type: {
            1: "普通商品",
            2: "套餐商品",
            3: "券包商品",
            4: "随心配商品"
          }[i.productType],
          e_cup_name: null === (o = (i.cups || [])[i.selectCup]) || void 0 === o ? void 0 : o.specName,
          e_spec: d.length > 0 ? JSON.stringify(d) : void 0,
          e_attr: c.length > 0 ? JSON.stringify(c) : void 0
        };
      },
      CommodityClick: function (e) {
        var t,
          o,
          r,
          i = e[0],
          c = e[1],
          d = c.currentGoods,
          a = c.indexs,
          n = c.isGroupBuying;
        return {
          e_store_id: i.data.selectedStore.shopId,
          e_is_group_buying: !!n,
          e_currentpage_title: "".concat(n ? "拼单" : "", "点餐页"),
          e_first_commodity: d.categoryNameSale,
          e_dining_method: ["到店取", "外卖送"][i.data.orderType - 1],
          e_commodity_id: d.productId,
          e_commodity_name: d.productName,
          e_commodity_original_price: d.originPrice,
          e_commodity_present_price: d.productPrice,
          e_commodity_type: {
            1: "普通商品",
            2: "套餐商品",
            3: "券包商品",
            4: "随心配商品"
          }[d.productType],
          e_commodity_badge: null === (t = d.cornerTag) || void 0 === t ? void 0 : t.content,
          e_commodity_tag: null === (o = d.productTags) || void 0 === o ? void 0 : o.map(function (e) {
            return e.content;
          }),
          e_commodity_discription: d.productDesc,
          e_activity_label: null === (r = d.productLabels) || void 0 === r ? void 0 : r.join("，"),
          e_element_rank: i.data.vtabs.slice(0, a[0]).reduce(function (e, t) {
            return e + t.products.length;
          }, 0) + a[1] + 1
        };
      },
      CommodityDetailView: function (e) {
        var t,
          o,
          r,
          i = e[0],
          c = e[1],
          d = c.currentGoods,
          a = c.isGroupBuying;
        return {
          e_store_id: i.data.selectedStore.shopId,
          e_is_group_buying: !!a,
          e_page_type: "".concat(a ? "拼单" : "普通", "点餐页"),
          e_first_commodity: d.categoryNameSale,
          e_dining_method: ["到店取", "外卖送"][i.data.orderType - 1],
          e_commodity_id: d.productId,
          e_commodity_name: d.productName,
          e_commodity_original_price: d.originPrice,
          e_commodity_present_price: d.productPrice,
          e_commodity_type: {
            1: "普通商品",
            2: "套餐商品",
            3: "券包商品",
            4: "随心配商品"
          }[d.productType],
          e_commodity_badge: null === (t = d.cornerTag) || void 0 === t ? void 0 : t.content,
          e_commodity_tag: null === (o = d.productTags) || void 0 === o ? void 0 : o.map(function (e) {
            return e.content;
          }),
          e_commodity_discription: d.productDesc,
          e_activity_label: null === (r = d.productLabels) || void 0 === r ? void 0 : r.join("，")
        };
      },
      HotsaleCommodityClick: function (e) {
        var t = e[0],
          o = e[1],
          r = t.data.hotGoodsList[o];
        return {
          e_currentpage_title: "首页",
          e_commodity_id: r.productId,
          e_commodity_name: r.productName,
          e_commodity_present_price: r.productPrice,
          e_element_rank: o + 1
        };
      },
      AddCart: function (e) {
        var t,
          o,
          r,
          i,
          c,
          d,
          a,
          n,
          _ = e[0],
          u = e[1],
          p = u.currentGoods,
          m = u.action,
          s = u.productAmount,
          l = u.isGroupBuying;
        return a = null === (t = p.productAttrs) || void 0 === t ? void 0 : t.map(function (e) {
          return e.productAttrs[e.selectAttr];
        }), n = null === (o = p.productSpecs) || void 0 === o ? void 0 : o.map(function (e) {
          return 1 != e.maxSelect ? e.specs.map(function (e) {
            if (e.addNum > 0) return {
              specId: e.specId,
              specName: e.specName,
              specPrice: e.specPrice,
              selectAmount: e.addNum
            };
          }) : null !== e.selectSpec && void 0 !== e.selectSpec ? {
            specId: e.specs[e.selectSpec].specId,
            specName: e.specs[e.selectSpec].specName,
            specPrice: e.specs[e.selectSpec].specPrice,
            selectAmount: 1
          } : void 0;
        }).flat().filter(function (e) {
          return e;
        }), p.attrs && (a = p.attrs), p.specs && (n = p.specs), {
          e_store_id: "another_order" === m ? p.shopId : _.data.selectedStore.shopId,
          e_is_group_buying: !!l,
          e_add_type: {
            buyNow: "立即购买",
            another_order: "再来一单",
            direct: "直接加购",
            default: "加入购物车"
          }[m] || "加入购物车",
          e_dining_method: ["到店取", "外卖送"][_.data.orderType - 1],
          e_commodity_id: p.productId,
          e_commodity_name: p.productName,
          e_commodity_original_price: p.originPrice,
          e_commodity_present_price: p.productPrice,
          e_commodity_discription: p.productDesc,
          e_commodity_tag: null === (r = p.productTags) || void 0 === r ? void 0 : r.map(function (e) {
            return e.content;
          }),
          e_commodity_quantity: s,
          e_cup_name: null === (i = (p.cups || [])[p.selectCup]) || void 0 === i ? void 0 : i.specName,
          e_spec: (null === (c = n) || void 0 === c ? void 0 : c.length) > 0 ? JSON.stringify(n) : void 0,
          e_attr: (null === (d = a) || void 0 === d ? void 0 : d.length) > 0 ? JSON.stringify(a) : void 0
        };
      },
      SuperValueAddCart: function (e) {
        var t,
          o = e[0],
          r = e[1],
          i = r.currentGoods,
          c = r.quantity;
        return {
          e_store_id: o.data.selectedStore.shopId,
          e_dining_method: ["到店取", "外卖送"][o.data.cartData.orderType - 1],
          e_commodity_id: i.productId,
          e_commodity_name: i.productName,
          e_commodity_original_price: i.originPrice,
          e_commodity_present_price: i.productPrice,
          e_commodity_tag: null === (t = i.productTags) || void 0 === t ? void 0 : t.map(function (e) {
            return e.content;
          }),
          e_commodity_quantity: c || i.addNum
        };
      },
      SelectStore: function (e) {
        var t = e[1],
          o = t.currentShop,
          r = t.tabIndex;
        return {
          e_choose_type: "主动选择",
          e_choose_method: null == r ? "普通列表" : ["附近门店", "常去门店", "收藏门店"][r],
          e_store_id: o.shopId,
          e_store_name: o.shopName,
          e_store_distance_km: o.distance
        };
      },
      BookmarkStore: function (e) {
        var t = e[1].currentShop;
        return {
          e_choose_type: "主动收藏",
          e_store_id: t.shopId,
          e_store_name: t.shopName,
          e_store_distance_km: t.distance
        };
      },
      SearchBoxClick: function (e) {
        return {
          e_currentpage_title: "点餐页"
        };
      },
      SearchEnd: function (e) {
        var t = e[0];
        return {
          e_search_type: {
            default: "直接搜索",
            hotSuggest: "热搜搜索",
            history: "历史搜索"
          }[e[1].type],
          e_search_keywords: t.data.value,
          e_result_number: t.data.resultList.length
        };
      },
      SearchResultClick: function (e) {
        var t,
          o = e[0],
          r = e[1].index,
          i = o.data.resultList[r];
        return {
          e_search_keywords: o.data.value,
          e_result_number: o.data.resultList.length,
          e_click_result_location: r + 1,
          e_commodity_id: i.productId,
          e_commodity_name: i.productName,
          e_commodity_original_price: i.originPrice,
          e_commodity_present_price: i.productPrice,
          e_commodity_tag: null === (t = i.productTags) || void 0 === t ? void 0 : t.map(function (e) {
            return e.content;
          })
        };
      },
      SubmitOrder: function (e) {
        var t = e[0],
          o = e[1],
          r = o.orderCode,
          i = o.selectedProductVoucherList,
          c = t.data,
          d = c.cartData,
          a = d.shopId,
          n = d.couponCode,
          _ = d.orderType,
          u = d.deliveryFee,
          p = d.mealFee,
          m = d.discountPrice,
          s = d.originPrice,
          l = d.price,
          y = d.products,
          g = d.partitions,
          v = c.mzhdData.discountsType,
          f = c.remarkStr,
          h = c.currentAddress,
          S = c.selectedStore,
          N = i.map(function (e) {
            return e.couponCodeList;
          }).flat();
        1 === v && n && N.push(n);
        var b = 0,
          P = 0;
        t.cartId ? g.map(function (e) {
          P += e.products.length;
          e.products.map(function (e) {
            if (e.comboProductDetail) {
              var t = 0;
              e.comboProductDetail.forEach(function (e) {
                return t += e.productAmount;
              });
              b += e.productAmount * t;
            } else b += e.productAmount;
          });
        }) : (P = y.length, y.map(function (e) {
          if (e.comboProductDetail) {
            var t = 0;
            e.comboProductDetail.forEach(function (e) {
              return t += e.productAmount;
            });
            b += e.productAmount * t;
          } else b += e.productAmount;
        }));
        var I = {
          e_store_id: a,
          e_order_id: r,
          e_source: "".concat(t.cartId ? "拼单" : "个人", "订单"),
          e_dining_method: ["到店取", "外卖送"][_ - 1],
          e_receiver_detailed_address: (h.address || "") + (h.detailAddress || ""),
          e_store_distance_km: S.distance,
          e_coupon_id_list: N,
          e_delivery_fee: u,
          e_packing_fee: p,
          e_order_discount_fee: m,
          e_order_original_amount: s,
          e_order_actual_paid_amount: l,
          e_is_order_remarked: !!f,
          e_remark_content: f,
          e_order_commodity_total_quantity: b,
          e_order_commodity_quantity: P,
          e_payment_method: "微信支付"
        };
        return null == y || y.map(function (e, o) {
          getApp().scTrack("SubmitOrderDetail", t, {
            indexs: [o],
            options: I
          });
        }), null == g || g.map(function (e, o) {
          var r;
          null === (r = e.products) || void 0 === r || r.map(function (e, r) {
            getApp().scTrack("SubmitOrderDetail", t, {
              indexs: [o, r],
              options: I
            });
          });
        }), I;
      },
      SubmitOrderDetail: function (e) {
        var t,
          r,
          i,
          c,
          d,
          a = e[0],
          n = e[1],
          _ = n.indexs,
          u = n.options,
          p = a.data.cartData,
          m = p.partitions,
          s = p.products,
          l = null === (t = (d = m ? m[_[0]].products[_[1]] : s[_[0]]).attrs) || void 0 === t ? void 0 : t.map(function (e) {
            return {
              attributeId: e.attributeId,
              attributeName: e.attributeName
            };
          }),
          y = d.specs;
        return o(o({}, u), {}, {
          e_order_user_id: null == m ? void 0 : m.map(function (e) {
            return e.customerInfo.customerId;
          }),
          e_first_commodity: d.categoryNameSale,
          e_commodity_id: d.productId,
          e_commodity_name: d.productName,
          e_commodity_original_price: d.originPrice,
          e_commodity_present_price: d.productPrice,
          e_commodity_badge: null === (r = d.cornerTag) || void 0 === r ? void 0 : r.content,
          e_commodity_tag: null === (i = d.productTags) || void 0 === i ? void 0 : i.map(function (e) {
            return e.content;
          }),
          e_commodity_discription: d.productDesc,
          e_activity_label: null === (c = d.productLabels) || void 0 === c ? void 0 : c.join("，"),
          e_cup_name: d.cupName,
          e_spec: (null == y ? void 0 : y.length) > 0 ? JSON.stringify(y) : void 0,
          e_attr: (null == l ? void 0 : l.length) > 0 ? JSON.stringify(l) : void 0
        });
      },
      CommodityShare: function (e) {
        e[0];
        var t,
          o = e[1].currentGoods;
        return {
          e_first_commodity: o.categoryNameSale,
          e_commodity_id: o.productId,
          e_commodity_name: o.productName,
          e_commodity_original_price: o.originPrice,
          e_commodity_present_price: o.productPrice,
          e_commodity_tag: null === (t = o.productTags) || void 0 === t ? void 0 : t.map(function (e) {
            return e.content;
          })
        };
      },
      LaunchGroupBuying: function (e) {
        e[0];
        return {
          e_dining_method: ["到店取", "外卖送"][e[1].options.orderType - 1]
        };
      },
      CancelGroupBuying: function (e) {
        return {
          e_dining_method: ["到店取", "外卖送"][e[0].data.orderType - 1]
        };
      },
      OperationSpotClick: function (e) {
        var t = e[0],
          o = e[1],
          r = o.index;
        return r = r || 0, "hotSuggest" === o.type ? {
          e_operation_spot_area: "热门推荐",
          e_operation_spot_name: t.data.suggestList[r].keyWord,
          e_operation_spot_rank: r + 1,
          e_destination_url: t.data.suggestList[r].jumpContent
        } : t.data.adData[r].adTitle ? {
          e_operation_spot_area: t.data.adData[r].adPlaceName,
          e_operation_spot_name: t.data.adData[r].adTitle,
          e_operation_spot_rank: r + 1,
          e_destination_url: t.data.adData[r].adUrl
        } : void 0;
      },
      OperationSpotExposure: function (e) {
        var t = e[0],
          o = e[1].index,
          r = void 0 === o ? 0 : o;
        if (t.data.adData[r].adPlaceName && t.data.adData[r].adTitle) return {
          e_operation_spot_area: t.data.adData[r].adPlaceName,
          e_operation_spot_name: t.data.adData[r].adTitle,
          e_operation_spot_rank: r + 1
        };
      },
      PageClickEventDelegation: function (e) {
        var o = t(e),
          i = o[0],
          c = o.slice(1),
          d = r.default[i](c);
        return {
          e_currentpage_title: d.currentpage_title || "",
          e_element_id: d.element_id || "",
          e_element_name: d.element_name || "",
          e_element_rank: d.element_rank || "",
          e_element_area: d.element_area || ""
        };
      }
    };
  exports.default = i;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/sctrack/index.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/sctrack/sensorsdata.esm.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var e = require("../../@babel/runtime/helpers/get"),
    t = require("../../@babel/runtime/helpers/getPrototypeOf"),
    i = require("../../@babel/runtime/helpers/inherits"),
    n = require("../../@babel/runtime/helpers/createSuper"),
    r = require("../../@babel/runtime/helpers/classCallCheck"),
    a = require("../../@babel/runtime/helpers/createClass"),
    s = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
    o = require("../../@babel/runtime/helpers/typeof"),
    u = {},
    c = {
      name: "sensors",
      server_url: "",
      send_timeout: 1000,
      show_log: !1,
      login_id_key: "$identity_login_id",
      allow_amend_share_path: !0,
      max_string_length: 500,
      datasend_timeout: 3000,
      source_channel: [],
      autoTrack: {
        appLaunch: !0,
        appShow: !0,
        appHide: !0,
        pageShow: !0,
        pageShare: !0,
        mpClick: !1,
        mpFavorite: !0,
        pageLeave: !1
      },
      autotrack_exclude_page: {
        pageShow: [],
        pageLeave: []
      },
      is_persistent_save: {
        share: !1,
        utm: !1
      },
      preset_properties: {
        url_path: !0
      },
      preset_events: {
        moments_page: !1,
        defer_track: !1,
        share_info_use_string: !1
      },
      batch_send: !0,
      storage_store_key: "sensorsdata2015_wechat",
      storage_prepare_data_key: "sensors_mp_prepare_data"
    };
  function p() {
    if (c.show_log && "object" == ("undefined" == typeof console ? "undefined" : o(console)) && console.log) try {
      return console.log.apply(console, arguments);
    } catch (e) {
      console.log(arguments[0]);
    }
  }
  var _ = Array.isArray,
    d = Object.prototype,
    l = Array.prototype,
    h = l.forEach,
    f = l.indexOf,
    g = d.toString,
    m = d.hasOwnProperty,
    v = l.slice;
  function y(e, t, i) {
    if (null == e) return !1;
    var n = {};
    if (h && e.forEach === h) e.forEach(t, i);else if (e.length === +e.length) {
      for (var r = 0, a = e.length; r < a; r++) if (r in e && t.call(i, e[r], r, e) === n) return !1;
    } else for (var s in e) if (m.call(e, s) && t.call(i, e[s], s, e) === n) return !1;
  }
  function $(e) {
    return null != e && "[object Object]" == g.call(e);
  }
  var b,
    S = (b = new Date().getTime(), function (e) {
      return Math.ceil((b = (9301 * b + 49297) % 233280) / 233280 * e);
    });
  function k() {
    if ("function" == typeof Uint32Array) {
      var e = "";
      if ("undefined" != typeof crypto ? e = crypto : "undefined" != typeof msCrypto && (e = msCrypto), $(e) && e.getRandomValues) {
        var t = new Uint32Array(1);
        return e.getRandomValues(t)[0] / Math.pow(2, 32);
      }
    }
    return S(10000000000000000000) / 10000000000000000000;
  }
  function w(e) {
    return y(v.call(arguments, 1), function (t) {
      for (var i in t) void 0 !== t[i] && (e[i] = t[i]);
    }), e;
  }
  function q(e) {
    return y(v.call(arguments, 1), function (t) {
      for (var i in t) void 0 !== t[i] && null !== t[i] && ($(t[i]) && $(e[i]) ? w(e[i], t[i]) : e[i] = t[i]);
    }), e;
  }
  var I = _ || function (e) {
    return "[object Array]" === g.call(e);
  };
  function T(e) {
    if (!e) return !1;
    var t = Object.prototype.toString.call(e);
    return "[object Function]" == t || "[object AsyncFunction]" == t;
  }
  function P(e) {
    return !(!e || !m.call(e, "callee"));
  }
  function A(e) {
    var t = [];
    return null == e || y(e, function (e) {
      t[t.length] = e;
    }), t;
  }
  function C(e, t) {
    var i = false;
    return null == e ? i : f && e.indexOf === f ? -1 != e.indexOf(t) : (y(e, function (e) {
      if (i || (i = e === t)) return {};
    }), i);
  }
  function D(e) {
    if ($(e)) {
      for (var t in e) if (m.call(e, t)) return !1;
      return !0;
    }
    return !1;
  }
  function x(e) {
    var t = {};
    return function e(t, i) {
      for (var n in i) {
        var r = i[n];
        I(r) ? (t[n] = [], e(t[n], r)) : $(r) ? (t[n] = {}, e(t[n], r)) : t[n] = r;
      }
    }(t, e), t;
  }
  function O(e) {
    return void 0 === e;
  }
  function L(e) {
    return "[object String]" == g.call(e);
  }
  function F(e) {
    return "[object Date]" == g.call(e);
  }
  function U(e) {
    return "[object Boolean]" == g.call(e);
  }
  function E(e) {
    return "[object Number]" == g.call(e) && /[\d\\.]+/.test(String(e));
  }
  function j(e) {
    try {
      JSON.parse(e);
    } catch (e) {
      return !1;
    }
    return !0;
  }
  var M = Number.isInteger || function (e) {
      return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
    },
    H = Number.isSafeInteger || function (e) {
      return M(e) && Math.abs(e) <= Math.pow(2, 53) - 1;
    },
    N = {
      ENC: {
        "+": "-",
        "/": "_",
        "=": "."
      },
      DEC: {
        "-": "+",
        _: "/",
        ".": "="
      },
      encode: function (e) {
        return e.replace(/[+\/=]/g, function (e) {
          return N.ENC[e];
        });
      },
      decode: function (e) {
        return e.replace(/[-_.]/g, function (e) {
          return N.DEC[e];
        });
      },
      trim: function (e) {
        return e.replace(/[.=]{1,2}$/, "");
      },
      isBase64: function (e) {
        return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e);
      },
      isUrlSafeBase64: function (e) {
        return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e);
      }
    },
    R = ["$latest_utm_source", "$latest_utm_medium", "$latest_utm_campaign", "$latest_utm_content", "$latest_utm_term", "$latest_sa_utm"],
    K = ["$latest_share_distinct_id", "$latest_share_url_path", "$latest_share_depth", "$latest_share_method"],
    B = ["sensors_share_d", "sensors_share_p", "sensors_share_i", "sensors_share_m"],
    V = {
      data: 1,
      onLoad: 1,
      onShow: 1,
      onReady: 1,
      onPullDownRefresh: 1,
      onShareAppMessage: 1,
      onShareTimeline: 1,
      onReachBottom: 1,
      onPageScroll: 1,
      onResize: 1,
      onTabItemTap: 1,
      onHide: 1,
      onUnload: 1
    },
    z = "$identity_email",
    W = "$identity_mobile",
    J = "$identity_login_id",
    Q = {
      init_status: !1,
      life_state: {
        app_launched: !1
      },
      plugin: {
        init_list: [],
        uninitialized_list: []
      },
      privacy: {
        enable_data_collect: !1
      },
      initialState: {
        queue: [],
        isComplete: !1
      },
      preset_properties: {
        $lib: "MiniProgram",
        $lib_version: "1.20.2"
      },
      promise_list: [],
      query_share_depth: 0,
      page_show_time: Date.now(),
      mp_show_time: null,
      share_distinct_id: "",
      share_method: "",
      current_scene: "",
      is_first_launch: !1,
      wx_sdk_version: "",
      global_title: {},
      page_route_map: []
    };
  function Z() {
    if (wx.getAccountInfoSync) {
      var e = wx.getAccountInfoSync(),
        t = e && e.miniProgram ? e.miniProgram : {};
      return {
        appId: t.appId,
        appEnv: t.envVersion,
        appVersion: t.version
      };
    }
    return {};
  }
  function G() {
    var e = Z();
    return e && e.appId ? e.appId : "";
  }
  function Y() {
    var e = G(),
      t = "$identity_mp_openid";
    return e && (t = "$identity_mp_" + e + "_openid"), t;
  }
  function X(e) {
    return ee(e = String(e), 113);
  }
  function ee(e, t) {
    t = "number" == typeof t ? t : 13;
    for (var i = (e = String(e)).split(""), n = 0, r = i.length; n < r; n++) i[n].charCodeAt(0) < 126 && (i[n] = String.fromCharCode((i[n].charCodeAt(0) + t) % 126));
    return i.join("");
  }
  var te = Object.prototype.hasOwnProperty,
    ie = {
      storageInfo: null,
      store_queue: [],
      getUUID: function () {
        return Date.now() + "-" + Math.floor(10000000 * k()) + "-" + k().toString(16).replace(".", "") + "-" + String(31242 * k()).replace(".", "").slice(0, 8);
      },
      getStorage: function () {
        return this.storageInfo || (this.storageInfo = u._.getStorageSync(c.storage_store_key) || ""), this.storageInfo;
      },
      _state: {},
      mem: {
        mdata: [],
        getLength: function () {
          return this.mdata.length;
        },
        add: function (e) {
          this.mdata.push(e);
        },
        clear: function (e) {
          this.mdata.splice(0, e);
        }
      },
      toState: function (e) {
        var t = null,
          i = this;
        function n() {
          t.distinct_id ? i._state = t : i.set("distinct_id", i.getUUID());
        }
        j(e) ? (t = JSON.parse(e), n()) : $(e) ? (t = e, n()) : this.set("distinct_id", this.getUUID());
        var r = this._state._first_id || this._state.first_id,
          a = this._state._distinct_id || this._state.distinct_id,
          s = this._state.openid,
          o = (this._state.history_login_id ? this._state.history_login_id : {}).name;
        if (this._state.identities && L(this._state.identities)) {
          var u = JSON.parse(X(this._state.identities));
          this._state.identities = u;
        }
        var c,
          p,
          _ = Y();
        if (this._state.identities && $(this._state.identities) && !D(this._state.identities)) {
          var d = (p = "$mp_openid", (c = G()) && (p = "$mp_" + c + "_openid"), p);
          te.call(this._state.identities, "$mp_id") && (this._state.identities.$identity_mp_id = this._state.identities.$mp_id, delete this._state.identities.$mp_id);
          te.call(this._state.identities, "$mp_unionid") && (this._state.identities.$identity_mp_unionid = this._state.identities.$mp_unionid, delete this._state.identities.$mp_unionid);
          te.call(this._state.identities, d) && (this._state.identities[_] = this._state.identities[d], delete this._state.identities[d]);
        } else {
          this._state.identities = {};
          this._state.identities.$identity_mp_id = this.getUUID();
        }
        function l(e) {
          for (var t in ie._state.identities) te.call(ie._state.identities, t) && "$identity_mp_id" !== t && t !== e && delete ie._state.identities[t];
        }
        s && (this._state.identities[_] = s);
        r ? o && te.call(this._state.identities, o) ? this._state.identities[o] !== a && (this._state.identities[o] = a, l(o), this._state.history_login_id.value = a) : (this._state.identities[J] = a, l(J), this._state.history_login_id = {
          name: J,
          value: a
        }) : this._state.history_login_id = {
          name: "",
          value: ""
        };
        this.save();
      },
      getFirstId: function () {
        return this._state._first_id || this._state.first_id;
      },
      getDistinctId: function () {
        return this.getLoginDistinctId() || this._state._distinct_id || this._state.distinct_id;
      },
      getUnionId: function () {
        var e = {},
          t = this._state._first_id || this._state.first_id,
          i = this.getDistinctId();
        return t && i ? (e.login_id = i, e.anonymous_id = t) : e.anonymous_id = i, e;
      },
      getHistoryLoginId: function () {
        return $(this._state.history_login_id) ? this._state.history_login_id : null;
      },
      getLoginDistinctId: function () {
        var e = this.getHistoryLoginId();
        return $(e) && e.value ? e.name !== J ? e.name + "+" + e.value : e.value : null;
      },
      getProps: function () {
        return this._state.props || {};
      },
      setProps: function (e, t) {
        var i = this._state.props || {};
        t ? this.set("props", e) : (w(i, e), this.set("props", i));
      },
      set: function (e, t) {
        var i = {};
        for (var n in "string" == typeof e ? i[e] = t : "object" == o(e) && (i = e), this._state = this._state || {}, i) {
          this._state[n] = i[n];
          "first_id" === n ? delete this._state._first_id : "distinct_id" === n && (delete this._state._distinct_id, u.events.emit("changeDistinctId"));
        }
        this.save();
      },
      identitiesSet: function (e) {
        var t = {};
        switch (e.type) {
          case "login":
            t.$identity_mp_id = this._state.identities.$identity_mp_id;
            t[e.id_name] = e.id;
            break;
          case "logout":
            t.$identity_mp_id = this._state.identities.$identity_mp_id;
        }
        this.set("identities", t);
      },
      change: function (e, t) {
        this._state["_" + e] = t;
      },
      encryptStorage: function () {
        var e = this.getStorage(),
          t = "data:enc;";
        $(e) ? e = t + ee(JSON.stringify(e)) : L(e) && -1 === e.indexOf(t) && (e = t + ee(e));
        u._.setStorageSync(c.storage_store_key, e);
      },
      save: function () {
        var e = x(this._state),
          t = ee(JSON.stringify(e.identities));
        e.identities = t;
        delete e._first_id;
        delete e._distinct_id;
        c.encrypt_storage && (e = "data:enc;" + ee(JSON.stringify(e)));
        u._.setStorageSync(c.storage_store_key, e);
      },
      init: function () {
        var e = this.getStorage(),
          t = ie.getUUID();
        if (e) {
          L(e) && -1 !== e.indexOf("data:enc;") && (e = e.substring("data:enc;".length), e = JSON.parse(X(e)));
          this.toState(e);
        } else {
          Q.is_first_launch = !0;
          var i = new Date(),
            n = i.getTime();
          i.setHours(23);
          i.setMinutes(59);
          i.setSeconds(60);
          this.set({
            distinct_id: t,
            first_visit_time: n,
            first_visit_day_time: i.getTime(),
            identities: {
              $identity_mp_id: t
            },
            history_login_id: {
              name: "",
              value: ""
            }
          });
        }
        this.checkStoreInit();
      },
      checkStoreInit: function () {
        Q.init_status && (this.store_queue.length > 0 && y(this.store_queue, function (e) {
          u[e.method].apply(u, v.call(e.params));
        }), this.store_queue = []);
      }
    };
  function ne(e) {
    var t = "";
    try {
      t = decodeURIComponent(e);
    } catch (i) {
      t = e;
    }
    return t;
  }
  var re = Object.prototype.hasOwnProperty,
    ae = ne;
  function se() {
    var e = App;
    App = function (t) {
      t[c.name] = u;
      e.apply(this, arguments);
    };
  }
  function oe() {
    var e = Ee(),
      t = je(),
      i = {
        $referrer: e.route,
        $referrer_title: e.title,
        $title: t.title,
        $url: t.url
      };
    return !0 === c.preset_properties.url_path && (i.$url_path = t.path), i;
  }
  function ue(e) {
    function t(e) {
      return e < 10 ? "0" + e : e;
    }
    return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds());
  }
  function ce(e) {
    ($(e) || I(e)) && y(e, function (t, i) {
      $(t) || I(t) ? ce(e[i]) : F(t) && (e[i] = ue(t));
    });
  }
  function pe(e) {
    return e.length > c.max_string_length ? (p("字符串长度超过限制，已经做截取--" + e), e.slice(0, c.max_string_length)) : e;
  }
  function _e(e) {
    $(e) && y(e, function (t, i) {
      $(t) ? _e(e[i]) : L(t) && (e[i] = pe(t));
    });
  }
  function de(e) {
    $(e) && y(e, function (t, i) {
      if (T(t)) try {
        e[i] = t();
        T(e[i]) && (p("您的属性- " + i + " 格式不满足要求，我们已经将其删除"), delete e[i]);
      } catch (t) {
        delete e[i];
        p("您的属性- " + i + " 抛出了异常，我们已经将其删除");
      }
    });
  }
  var le = {
    checkKeyword: function (e) {
      return /^((?!^distinct_id$|^original_id$|^device_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_group|^user_tag)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i.test(e);
    },
    checkIdLength: function (e) {
      return !(String(e).length > 255 && (p("id 长度超过 255 个字符！"), 1));
    }
  };
  function he(e) {
    return $(e) ? (y(e, function (t, i) {
      if (I(t)) {
        var n = [];
        y(t, function (e) {
          if (L(e)) n.push(e);else if (O(e)) n.push("null");else try {
            n.push(JSON.stringify(e));
          } catch (e) {
            p("您的数据 - " + i + ":" + t + " - 的数组里的值有错误,已经将其删除");
          }
        });
        e[i] = n;
      }
      if ($(t)) try {
        e[i] = JSON.stringify(t);
      } catch (n) {
        delete e[i];
        p("您的数据 - " + i + ":" + t + " - 的数据值有错误,已经将其删除");
      } else L(t) || E(t) || F(t) || U(t) || I(t) || (p("您的数据 - " + i + ":" + t + " - 格式不满足要求，已经将其删除"), delete e[i]);
    }), e) : e;
  }
  function fe(e) {
    var t,
      i,
      n,
      r,
      a,
      s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      o = 0,
      u = 0,
      c = "",
      p = [];
    if (!e) return e;
    e = function (e) {
      var t,
        i,
        n,
        r,
        a = "";
      for (t = i = 0, n = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, r = 0; r < n; r++) {
        var s = e.charCodeAt(r),
          o = null;
        s < 128 ? i++ : o = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128);
        null !== o && (i > t && (a += e.substring(t, i)), a += o, t = i = r + 1);
      }
      return i > t && (a += e.substring(t, e.length)), a;
    }(e);
    do {
      t = (a = e.charCodeAt(o++) << 16 | e.charCodeAt(o++) << 8 | e.charCodeAt(o++)) >> 18 & 63;
      i = a >> 12 & 63;
      n = a >> 6 & 63;
      r = 63 & a;
      p[u++] = s.charAt(t) + s.charAt(i) + s.charAt(n) + s.charAt(r);
    } while (o < e.length);
    switch (c = p.join(""), e.length % 3) {
      case 1:
        c = c.slice(0, -2) + "==";
        break;
      case 2:
        c = c.slice(0, -1) + "=";
    }
    return c;
  }
  function ge(e) {
    for (var t, i, n, r, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = "", o = 0, u = (e = String(e)).length % 3; o < e.length;) {
      ((i = e.charCodeAt(o++)) > 255 || (n = e.charCodeAt(o++)) > 255 || (r = e.charCodeAt(o++)) > 255) && p("Failed to execute 'btoa' : The string to be encoded contains characters outside of the Latin1 range.");
      s += a.charAt((t = i << 16 | n << 8 | r) >> 18 & 63) + a.charAt(t >> 12 & 63) + a.charAt(t >> 6 & 63) + a.charAt(63 & t);
    }
    return u ? s.slice(0, u - 3) + "===".substring(u) : s;
  }
  function me(e) {
    return ge(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
      return String.fromCharCode("0x" + t);
    }));
  }
  function ve() {
    var e = {};
    try {
      var t = getCurrentPages();
      e = t[t.length - 1];
    } catch (e) {
      p(e);
    }
    return e;
  }
  function ye() {
    var e = "未取到";
    try {
      var t = ve();
      e = t ? t.route : e;
    } catch (e) {
      p(e);
    }
    return e;
  }
  function $e() {
    return !!("object" == o(ie._state) && E(ie._state.first_visit_day_time) && ie._state.first_visit_day_time > new Date().getTime());
  }
  function be(e) {
    var t = ye(),
      i = "";
    return $(e) && e.sensors_mp_encode_url_query && (i = e.sensors_mp_encode_url_query), t ? i ? t + "?" + i : t : "未取到";
  }
  function Se(e) {
    return L(e) ? e.replace(/^\//, "") : "取值异常";
  }
  function ke(e, t, i, n) {
    if (!$(e)) return {};
    var r = {};
    if (e.sa_utm) for (var a in e) "sa_utm" !== a ? C(c.source_channel, a) && (r[i + a] = e[a]) : r[n + a] = e[a];else for (var s in e) -1 === " utm_source utm_medium utm_campaign utm_content utm_term ".indexOf(" " + s + " ") ? C(c.source_channel, s) && (r[i + s] = e[s]) : r[t + s] = e[s];
    return r;
  }
  function we(e) {
    var t = e.split("?"),
      i = [],
      n = {};
    return t && t[1] ? (y(t[1].split("&"), function (e) {
      (i = e.split("="))[0] && i[1] && (n[i[0]] = i[1]);
    }), n) : {};
  }
  function qe(e) {
    return E(e) || L(e) && "" !== e ? e = "wx-" + String(e) : "未取到值";
  }
  function Ie(e, t) {
    if (!$(e)) return p("请传入有效对象"), "";
    var i = [];
    for (var n in e) if (re.call(e, n)) {
      var r = e[n];
      void 0 === r ? i.push(n + "=") : (r = t ? encodeURIComponent(r) : r, i.push(n + "=" + r));
    }
    return i.join("&");
  }
  function Te(e) {
    if ($(e)) for (var t = 0; t < B.length; t++) delete e[B[t]];else p("请传入有效对象");
  }
  function Pe(e) {
    var t = {},
      i = {};
    if (c.preset_events.share_info_use_string) {
      i = e.query;
      for (var n = 0; n < B.length; n++) {
        if (!re.call(i, B[n])) return {};
        i[B[n]] = ne(i[B[n]]);
      }
      t = {
        depth: Number(i.sensors_share_d),
        path: i.sensors_share_p || "",
        id: i.sensors_share_i || "",
        method: i.sensors_share_m || ""
      };
    } else {
      if (!e.query.sampshare) return {};
      if (!j(i = ne(e.query.sampshare))) return {};
      t = {
        depth: (i = JSON.parse(i)).d,
        path: i.p,
        id: i.i,
        method: i.m
      };
    }
    return t;
  }
  function Ae(e, t) {
    var i = {},
      n = {},
      r = ie.getDistinctId(),
      a = ie.getFirstId();
    if (e && $(e.query)) {
      if (D(i = Pe(e))) return {};
      var s = i.depth,
        o = i.path,
        u = i.id,
        c = i.method;
    }
    "string" == typeof u ? (t.$share_distinct_id = u, Q.share_distinct_id = u, n.$latest_share_distinct_id = u) : t.$share_distinct_id = "取值异常";
    "number" == typeof s ? !Q.share_distinct_id || Q.share_distinct_id !== r && Q.share_distinct_id !== a ? !Q.share_distinct_id || Q.share_distinct_id === r && Q.share_distinct_id === a ? t.$share_depth = "-1" : (t.$share_depth = s + 1, Q.query_share_depth = s + 1, n.$latest_share_depth = s + 1) : (t.$share_depth = s, Q.query_share_depth = s, n.$latest_share_depth = s) : t.$share_depth = "-1";
    "string" == typeof o ? (t.$share_url_path = o, n.$latest_share_url_path = o) : t.$share_url_path = "取值异常";
    "string" == typeof c ? (t.$share_method = c, n.$latest_share_method = c) : t.$share_method = "取值异常";
    ze(n);
  }
  function Ce() {
    if (c.preset_events.share_info_use_string) return Ie({
      sensors_share_i: ie.getDistinctId() || "取值异常",
      sensors_share_p: ye(),
      sensors_share_d: Q.query_share_depth,
      sensors_share_m: Q.share_method
    }, !0);
    var e = JSON.stringify({
      i: ie.getDistinctId() || "取值异常",
      p: ye(),
      d: Q.query_share_depth,
      m: Q.share_method
    });
    return "sampshare=" + encodeURIComponent(e);
  }
  function De(e) {
    if (!e || !$(e.query)) return {};
    var t,
      i,
      n,
      r,
      a = {};
    return a.query = w({}, e.query), "string" == typeof a.query.scene && (t = a.query, i = ["utm_source", "utm_content", "utm_medium", "utm_campaign", "utm_term", "sa_utm"].concat(c.source_channel), n = new RegExp("(" + i.join("|") + ")%3D", "i"), 1 === (r = Object.keys(t)).length && "scene" === r[0] && n.test(t.scene)) && (a.scene = a.query.scene, delete a.query.scene), e.query.q && e.query.scancode_time && "101" === String(e.scene).slice(0, 3) && (a.q = String(a.query.q), delete a.query.q, delete a.query.scancode_time), a;
  }
  function xe(e) {
    var t = De(e),
      i = t.scene,
      n = t.q,
      r = t.query;
    for (var a in r) r[a] = ne(r[a]);
    return i && w(r, we(i = -1 !== (i = ne(i)).indexOf("?") ? "?" + i.replace(/\?/g, "") : "?" + i)), n && w(r, we(ne(n))), r;
  }
  function Oe(e, t) {
    var i = {},
      n = xe(e),
      r = ke(n, "$", "_", "$"),
      a = ke(n, "$latest_", "_latest_", "$latest_");
    return i.pre1 = r, i.pre2 = a, w(t, r), i;
  }
  function Le(e, t) {
    D(e.query) || e.query && e.query._sfs && (t.$sf_source = e.query._sfs, u.registerApp({
      $latest_sf_source: t.$sf_source
    }));
  }
  function Fe(e) {
    try {
      var t = ve(),
        i = x(t ? t.options : "");
      for (var n in i) i[n] = ne(i[n]);
      !D(i) && i._sfs && (e.$sf_source = i._sfs);
    } catch (e) {
      p(e);
    }
  }
  function Ue() {
    var e = {
      route: "直接打开",
      path: "直接打开",
      title: ""
    };
    try {
      var t = ve();
      if (t && t.route) {
        var i = t.sensors_mp_url_query ? "?" + t.sensors_mp_url_query : "",
          n = t.route,
          r = He(n);
        e.route = n + i;
        e.path = n;
        e.title = r;
        Q.page_route_map.length >= 2 ? (Q.page_route_map.shift(), Q.page_route_map.push(e)) : Q.page_route_map.push(e);
      }
    } catch (e) {
      p(e);
    }
  }
  function Ee() {
    var e = {
      route: "直接打开",
      path: "直接打开",
      title: ""
    };
    return Q.page_route_map.length > 1 && (e.title = Q.page_route_map[0].title, e.route = Q.page_route_map[0].route, e.path = Q.page_route_map[0].path), e;
  }
  function je() {
    var e = ve(),
      t = {
        title: "",
        url: "",
        path: "未取到"
      };
    if (e && e.route) {
      var i = e.sensors_mp_url_query ? "?" + e.sensors_mp_url_query : "";
      t.title = He(e.route);
      t.url = e.route + i;
      t.path = e.route;
    }
    return t;
  }
  function Me(e, t, i) {
    var n = Ee();
    $(e) && (t ? Q.page_route_map.length > 0 && t ? (i = i ? "?" + i : "", e.$referrer = Se(t) + i, e.$referrer_title = He(t)) : (e.$referrer = "直接打开", e.$referrer_title = "") : (e.$referrer = n.route, e.$referrer_title = n.title));
  }
  function He(e) {
    if ("未取到" === e || !e) return "";
    var t = "";
    try {
      if (__wxConfig) {
        var i = __wxConfig,
          n = __wxConfig.page || {},
          r = n[e] || n[e + ".html"],
          a = {},
          s = {};
        if (i.global && i.global.window && i.global.window.navigationBarTitleText && (a.titleVal = i.global.window.navigationBarTitleText), r && r.window && r.window.navigationBarTitleText && (s.titleVal = r.window.navigationBarTitleText), !s.titleVal && __wxAppCode__) {
          var o = __wxAppCode__[e + ".json"];
          o && o.navigationBarTitleText && (s.titleVal = o.navigationBarTitleText);
        }
        if (y(Q.global_title, function (i, n) {
          if (n === e) return t = i;
        }), 0 === t.length) {
          var u = w(a, s);
          t = u.titleVal || "";
        }
      }
    } catch (e) {
      p(e);
    }
    return t;
  }
  function Ne(e) {
    if (Ke(Q.wx_sdk_version, "2.10.0") >= 0) {
      e.timeout = c.datasend_timeout;
      wx.request(e);
    } else {
      var t = wx.request(e);
      setTimeout(function () {
        $(t) && T(t.abort) && t.abort();
      }, c.datasend_timeout);
    }
  }
  function Re(e) {
    return "string" != typeof e && "number" != typeof e || "" === e ? (p("输入 ID 类型错误"), !1) : "number" != typeof e || (e = String(e), /^\d+$/.test(e)) ? !!le.checkIdLength(e) && e : (p("输入 ID 类型错误"), !1);
  }
  function Ke(e, t) {
    e = e.split(".");
    t = t.split(".");
    for (var i = Math.max(e.length, t.length); e.length < i;) e.push("0");
    for (; t.length < i;) t.push("0");
    for (var n = 0; n < i; n++) {
      var r = parseInt(e[n]),
        a = parseInt(t[n]);
      if (r > a) return 1;
      if (r < a) return -1;
    }
    return 0;
  }
  function Be(e) {
    return L(e) ? e.toLocaleUpperCase() : e;
  }
  function Ve(e) {
    D(e) || (function (e, t) {
      var i = false;
      for (var n in t) e[t[n]] && (i = !0);
      return i;
    }(e, R) && (u.clearAppRegister(R), u.clearAllProps(R)), c.is_persistent_save.utm ? u.register(e) : u.registerApp(e));
  }
  function ze(e) {
    (e.$latest_share_depth || e.$latest_share_distinct_id || e.$latest_share_url_path || e.$latest_share_method) && (u.clearAppRegister(K), u.clearAllProps(K), c.is_persistent_save.share ? u.register(e) : u.registerApp(e));
  }
  function We(e, t) {
    if (e && $(e) && !D(e)) {
      var i = [];
      return y(e, function (e, n) {
        "q" === n && L(e) && 0 === e.indexOf("http") || (t ? i.push(n + "=" + e) : i.push(n + "=" + ne(e)));
      }), i.join("&");
    }
    return "";
  }
  function Je() {
    try {
      var e = wx.setNavigationBarTitle;
      Object.defineProperty(wx, "setNavigationBarTitle", {
        get: function () {
          return function (t) {
            var i = ye();
            t = $(t) ? t : {};
            Q.global_title[i] = t.title;
            e.call(this, t);
          };
        }
      });
    } catch (e) {
      p(e);
    }
  }
  function Qe() {
    var e = {};
    try {
      var t = x(ve().options);
      for (var i in t) t[i] = ne(t[i]);
      e = ke(t, "$", "_", "$");
    } catch (e) {
      p(e);
    }
    return e;
  }
  function Ze(e, t) {
    return e !== ie._state.history_login_id.name || ie._state.history_login_id.value !== t;
  }
  function Ge(e) {
    var t = ie.getFirstId(),
      i = ie.getDistinctId();
    return t ? e === t : e === i;
  }
  function Ye(e, t) {
    var i,
      n = ["$identity_anonymous_id"],
      r = s((I(t) && (n = n.concat(t)), n));
    try {
      for (r.s(); !(i = r.n()).done;) {
        if (i.value === e) return !0;
      }
    } catch (e) {
      r.e(e);
    } finally {
      r.f();
    }
    return !1;
  }
  function Xe(e) {
    var t = fe(e = JSON.stringify(e));
    return encodeURIComponent(t);
  }
  function et() {
    wx.onNetworkStatusChange(function (e) {
      u.registerApp({
        $network_type: e.networkType || ""
      });
    });
  }
  function tt() {
    return new Promise(function (e, t) {
      wx.getNetworkType({
        success: function (t) {
          Q.preset_properties.$network_type = Be(t.networkType);
          e();
        },
        fail: function (e) {
          p("获取网络信息失败", e);
          t();
        }
      });
    });
  }
  function it() {
    var e = Q.preset_properties;
    return new Promise(function (t) {
      wx.getSystemInfo({
        success: function (i) {
          var n, r;
          e.$brand = Be(i.brand);
          e.$manufacturer = i.brand;
          e.$model = i.model;
          e.$screen_width = Number(i.screenWidth);
          e.$screen_height = Number(i.screenHeight);
          e.$os = "ios" === (r = (n = i.platform).toLowerCase()) ? "iOS" : "android" === r ? "Android" : n;
          e.$os_version = i.system.indexOf(" ") > -1 ? i.system.split(" ")[1] : i.system;
          Q.wx_sdk_version = i.SDKVersion;
          e.$mp_client_app_version = i.version;
          e.$mp_client_basic_library_version = Q.wx_sdk_version;
          var a = new Date().getTimezoneOffset(),
            s = Z();
          E(a) && (e.$timezone_offset = a);
          s.appId && (e.$app_id = s.appId);
          s.appVersion && (e.$app_version = s.appVersion);
          t();
        }
      });
    });
  }
  var nt = {
      currentProps: Q.preset_properties
    },
    rt = {
      info: function () {
        if (c.show_log && "object" == ("undefined" == typeof console ? "undefined" : o(console)) && console.log) try {
          if (3 === arguments.length) return console.log(arguments[0], arguments[1], arguments[2]);
          if (2 === arguments.length) return console.log(arguments[0], arguments[1]);
          if (1 === arguments.length) return console.log(arguments[0]);
        } catch (e) {
          console.log(arguments[0]);
        }
      }
    };
  function at(e) {
    return "function" == typeof e || !(!e || "object" != o(e)) && at(e.listener);
  }
  var st = function () {
      function e() {
        r(this, e);
        this._events = {};
      }
      return a(e, [{
        key: "on",
        value: function (e, t) {
          if (!e || !t) return !1;
          if (!at(t)) throw new Error("listener must be a function");
          this._events[e] = this._events[e] || [];
          var i = "object" == o(t);
          return this._events[e].push(i ? t : {
            listener: t,
            once: !1
          }), this;
        }
      }, {
        key: "prepend",
        value: function (e, t) {
          if (!e || !t) return !1;
          if (!at(t)) throw new Error("listener must be a function");
          this._events[e] = this._events[e] || [];
          var i = "object" == o(t);
          return this._events[e].unshift(i ? t : {
            listener: t,
            once: !1
          }), this;
        }
      }, {
        key: "prependOnce",
        value: function (e, t) {
          return this.prepend(e, {
            listener: t,
            once: !0
          });
        }
      }, {
        key: "once",
        value: function (e, t) {
          return this.on(e, {
            listener: t,
            once: !0
          });
        }
      }, {
        key: "off",
        value: function (e, t) {
          var i = this._events[e];
          if (!i) return !1;
          if ("number" == typeof t) i.splice(t, 1);else if ("function" == typeof t) for (var n = 0, r = i.length; n < r; n++) i[n] && i[n].listener === t && i.splice(n, 1);
          return this;
        }
      }, {
        key: "emit",
        value: function (e, t) {
          var i = this._events[e];
          if (!i) return !1;
          for (var n = 0; n < i.length; n++) {
            var r = i[n];
            r && (r.listener.call(this, t || {}), r.once && this.off(e, n));
          }
          return this;
        }
      }, {
        key: "removeAllListeners",
        value: function (e) {
          e && this._events[e] ? this._events[e] = [] : this._events = {};
        }
      }, {
        key: "listeners",
        value: function (e) {
          return e && "string" == typeof e ? this._events[e] : this._events;
        }
      }]), e;
    }(),
    ot = function (s) {
      i(u, st);
      var o = n(u);
      function u() {
        var e;
        return r(this, u), (e = o.call(this)).cacheEvents = [], e.maxLen = 20, e;
      }
      return a(u, [{
        key: "replay",
        value: function (e, t) {
          this.on(e, t);
          this.cacheEvents.length > 0 && this.cacheEvents.forEach(function (i) {
            i.type === e && t.call(null, i.data);
          });
        }
      }, {
        key: "emit",
        value: function (i, n) {
          e(t(u.prototype), "emit", this).apply(this, arguments);
          this.cacheEvents.push({
            type: i,
            data: n
          });
          this.cacheEvents.length > this.maxLen && this.cacheEvents.shift();
        }
      }]), u;
    }(),
    ut = Object.freeze({
      __proto__: null,
      decodeURIComponent: ae,
      encodeDates: function e(t) {
        return y(t, function (i, n) {
          F(i) ? t[n] = ue(i) : $(i) && (t[n] = e(i));
        }), t;
      },
      formatDate: ue,
      searchObjDate: ce,
      formatString: pe,
      searchObjString: _e,
      parseSuperProperties: de,
      unique: function (e) {
        for (var t, i = [], n = {}, r = 0; r < e.length; r++) (t = e[r]) in n || (n[t] = !0, i.push(t));
        return i;
      },
      check: le,
      getUtmFromPage: Qe,
      setQuery: We,
      setLatestShare: ze,
      setLatestChannel: Ve,
      setUpperCase: Be,
      compareSDKVersion: Ke,
      validId: Re,
      wxrequest: Ne,
      getPageTitle: He,
      setPageRefData: Me,
      getCurrentPageInfo: je,
      getRefPage: Ee,
      setRefPage: Ue,
      setPageSfSource: Fe,
      setSfSource: Le,
      setUtm: Oe,
      getMixedQuery: xe,
      detectOptionQuery: De,
      getShareInfo: Ce,
      setShareInfo: Ae,
      shareInfoData: Pe,
      delObjectKey: Te,
      objToParam: Ie,
      getMPScene: qe,
      getStorageSync: function (e) {
        var t = "";
        try {
          t = wx.getStorageSync(e);
        } catch (e) {
          p("getStorage fail");
        }
        return t;
      },
      setStorageSync: function (e, t) {
        var i = function () {
          wx.setStorageSync(e, t);
        };
        try {
          i();
        } catch (e) {
          p("set Storage fail --", e);
          try {
            i();
          } catch (e) {
            p("set Storage fail again --", e);
          }
        }
      },
      getObjFromQuery: we,
      getCustomUtmFromQuery: ke,
      getPath: Se,
      getCurrentUrl: be,
      getIsFirstDay: $e,
      getCurrentPath: ye,
      getCurrentPage: ve,
      urlBase64Encode: me,
      btoa: ge,
      base64Encode: fe,
      strip_empty_properties: function (e) {
        var t = {};
        return y(e, function (e, i) {
          null == e && void 0 === e || (t[i] = e);
        }), t;
      },
      strip_sa_properties: he,
      setNavigationBarTitle: Je,
      networkStatusChange: et,
      getNetworkType: tt,
      getSystemInfo: it,
      encodeTrackData: Xe,
      initAppGlobalName: se,
      getPublicPresetProperties: oe,
      setPublicProperties: function (e) {
        if (e && e.properties) {
          var t = Ee(),
            i = je(),
            n = {
              $referrer: t.route,
              $referrer_title: t.title,
              $title: i.title,
              $url: i.url
            };
          for (var r in !0 === c.preset_properties.url_path && (n.$url_path = i.path), n) re.call(e.properties, r) || (e.properties[r] = n[r]);
        }
      },
      isPresetIdKeys: Ye,
      isNewLoginId: Ze,
      isSameAndAnonymousID: Ge,
      info: nt,
      logger: rt,
      getAppId: G,
      getAppInfoSync: Z,
      getOpenidNameByAppid: Y,
      rot13defs: X,
      rot13obfs: ee,
      each: y,
      isObject: $,
      getRandom: k,
      extend: w,
      extend2Lev: q,
      coverExtend: function (e) {
        return y(v.call(arguments, 1), function (t) {
          for (var i in t) void 0 !== t[i] && void 0 === e[i] && (e[i] = t[i]);
        }), e;
      },
      isArray: I,
      isFunction: T,
      isArguments: P,
      toArray: function (e) {
        return e ? e.toArray ? e.toArray() : I(e) || P(e) ? v.call(e) : A(e) : [];
      },
      values: A,
      include: C,
      trim: function (e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      },
      isEmptyObject: D,
      deepCopy: x,
      isUndefined: O,
      isString: L,
      isDate: F,
      isBoolean: U,
      isNumber: E,
      isJSONString: j,
      isInteger: M,
      isSafeInteger: H,
      slice: v,
      urlSafeBase64: N,
      EventEmitterBase: st,
      EventEmitterEx: ot,
      log: p
    });
  var ct = {
    getData: function (e) {
      wx.getStorage({
        key: c.storage_prepare_data_key,
        complete: function (t) {
          var i = t.data && I(t.data) ? t.data : [];
          ct.deleteAesData(i);
          e && e();
        }
      });
    },
    deleteAesData: function (e) {
      var t = [],
        i = e.length;
      if (i > 0) {
        for (var n = 0; n < i; n++) $(e[n]) && t.push(e[n]);
        ie.mem.mdata = t.concat(ie.mem.mdata);
      }
    }
  };
  var pt = {};
  pt.setData = function (e) {
    if (!$(e)) return !1;
    e.current_title && function (e) {
      if (!L(e)) return !1;
      var t = Q.page_route_map.length - 1;
      t >= 0 && (Q.page_route_map[t].title = e);
    }(e.current_title);
  };
  pt.processData = function (e) {
    return e;
  };
  pt.onceTrackData = function (e) {
    return "data=" + Xe(e);
  };
  pt.batchTrackData = function (e) {
    var t = Date.now();
    return e.forEach(function (e) {
      e._flush_time = t;
    }), "data_list=" + Xe(e);
  };
  pt.onEventSend = function () {
    return {};
  };
  var _t = {
    dataHasSend: !0,
    dataHasChange: !1,
    syncStorage: !1,
    failTime: 0,
    init: function () {
      this.sendHasInit = !0;
      ct.getData(_t.syncStorageState.bind(_t));
      this.batchInterval();
      this.onAppHide();
    },
    syncStorageState: function () {
      this.syncStorage = !0;
    },
    onAppHide: function () {
      var e = this;
      wx.onAppHide(function () {
        c.batch_send && e.batchSend();
      });
    },
    send: function (e) {
      this.dataHasChange = !0;
      ie.mem.getLength() >= 500 && (p("storage data is too large"), ie.mem.mdata.shift());
      (e = pt.processData(e)) && ie.mem.add(e);
      this.sendAsOver();
    },
    sendAsOver: function () {
      this.sendHasInit && ie.mem.getLength() >= c.batch_send.max_length && this.batchSend();
    },
    wxrequest: function (e) {
      if (I(e.data) && e.data.length > 0) {
        var t = pt.batchTrackData(e.data);
        u._.wxrequest({
          url: c.server_url,
          method: "POST",
          dataType: "text",
          data: t,
          header: {
            "content-type": "text/plain"
          },
          success: function () {
            e.success(e.len);
          },
          fail: function () {
            e.fail();
          }
        });
      } else e.success(e.len);
    },
    batchSend: function () {
      if (this.dataHasSend) {
        var e,
          t,
          i = ie.mem.mdata;
        (t = (e = i.length >= 100 ? i.slice(0, 100) : i).length) > 0 && (this.dataHasSend = !1, this.wxrequest({
          data: e,
          len: t,
          success: this.batchRemove.bind(this),
          fail: this.sendFail.bind(this)
        }));
      }
    },
    sendFail: function () {
      this.dataHasSend = !0;
      this.failTime++;
    },
    batchRemove: function (e) {
      ie.mem.clear(e);
      this.dataHasSend = !0;
      this.dataHasChange = !0;
      this.batchWrite();
      this.failTime = 0;
    },
    is_first_batch_write: !0,
    batchWrite: function () {
      this.dataHasChange && (this.dataHasChange = !1, this.syncStorage && u._.setStorageSync(c.storage_prepare_data_key, ie.mem.mdata));
    },
    batchInterval: function () {
      var e = this;
      !function t() {
        setTimeout(function () {
          e.batchWrite();
          t();
        }, 500);
      }();
      (function t() {
        setTimeout(function () {
          e.batchSend();
          t();
        }, c.batch_send.send_timeout * Math.pow(2, e.failTime));
      })();
    }
  };
  function dt(e) {
    if (!c.server_url) return !1;
    if (Q.current_scene && 1154 === Q.current_scene && !u.para.preset_events.moments_page) return !1;
    var t = u._.deepCopy(e),
      i = function (e, t) {
        var i = {
          distinct_id: u.store.getDistinctId(),
          identities: w({}, u.store._state.identities),
          lib: {
            $lib: "MiniProgram",
            $lib_method: "code",
            $lib_version: "1.20.2"
          },
          properties: {}
        };
        return "track_id_unbind" === e.type && "$UnbindID" === e.event && (i.identities = x(e.unbind_value), delete e.unbind_value), $(t) || (t = {}), w(i, u.store.getUnionId(), e), $(e.properties) && !D(e.properties) && w(i.properties, e.properties), e.type && "profile" === e.type.slice(0, 7) || (i._track_id = Number(String(k()).slice(2, 5) + String(k()).slice(2, 4) + String(Date.now()).slice(-4)), i.properties = w({}, oe(), Q.preset_properties, u.store.getProps(), t, i.properties), "track" === e.type && (i.properties.$is_first_day = $e())), i.properties.$time && F(i.properties.$time) ? (i.time = 1 * i.properties.$time, delete i.properties.$time) : i.time = 1 * new Date(), u.ee.sdk.emit("createData", i), u.ee.sdk.emit("beforeBuildCheck", i), u.ee.data.emit("beforeBuildCheck", i), de(i.properties), ce(i), he(i.properties), _e(i), u.ee.data.emit("finalAdjustData", i), i;
      }(e, pt.onEventSend(t));
    i ? (p(i), u.events.emit("send", i), u.para.batch_send ? _t.send(i) : function (e) {
      e._flush_time = Date.now();
      var t = pt.onceTrackData(e),
        i = c.server_url + "?" + t;
      -1 !== c.server_url.indexOf("?") && (i = c.server_url + "&" + t);
      Ne({
        url: i,
        method: "GET"
      });
    }(i)) : p("error: 数据异常 " + i);
  }
  u.popupEmitter = {
    attached: function () {
      return !1;
    }
  };
  function lt(e, t, i) {
    var n = u.autoTrackCustom[i];
    if (e[t]) {
      var r = e[t];
      e[t] = function () {
        !u.para.autoTrackIsFirst || $(u.para.autoTrackIsFirst) && !u.para.autoTrackIsFirst[i] ? (r.apply(this, arguments), n.apply(this, arguments)) : (!0 === u.para.autoTrackIsFirst || $(u.para.autoTrackIsFirst) && u.para.autoTrackIsFirst[i]) && (n.apply(this, arguments), r.apply(this, arguments));
        u.ee.page.emit(i);
      };
    } else e[t] = function () {
      n.apply(this, arguments);
      u.ee.page.emit(i);
    };
  }
  function ht(e) {
    var t,
      i = {},
      n = {},
      r = e.currentTarget || {},
      a = e.target || {};
    if ($(u.para.framework) && $(u.para.framework.taro) && !u.para.framework.taro.createApp && a.id && r.id && a.id !== r.id) return !1;
    var s = r.dataset || {};
    if (t = e.type, i.$element_id = r.id, i.$element_type = s.type, i.$element_content = s.content, i.$element_name = s.name, $(e.event_prop) && (n = e.event_prop), t && gt(t)) {
      if (u.para.preset_events && u.para.preset_events.collect_element && !1 === u.para.preset_events.collect_element(arguments[0])) return !1;
      i.$url_path = u._.getCurrentPath();
      u._.setPageRefData(i);
      i = u._.extend(i, n);
      u.track("$MPClick", i);
    }
  }
  function ft(e, t) {
    var i = e[t];
    e[t] = function () {
      var e = i.apply(this, arguments),
        t = arguments[0];
      return $(t) && (u.para.preset_events.defer_track ? setTimeout(function () {
        ht(t);
      }, 0) : ht(t)), e;
    };
  }
  function gt(e) {
    return !!{
      tap: 1,
      longpress: 1,
      longtap: 1
    }[e];
  }
  function mt(e) {
    var t = [];
    if (u.para.autoTrack && u.para.autoTrack.mpClick) {
      t = function (e) {
        var t = V,
          i = [];
        for (var n in e) "function" != typeof e[n] || t[n] || i.push(n);
        return i;
      }(e);
      (function (e) {
        var t = e.onTabItemTap;
        e.onTabItemTap = function (e) {
          t && t.apply(this, arguments);
          var i = {};
          e && (i.$element_content = e.text);
          i.$element_type = "tabBar";
          i.$url_path = u._.getCurrentPath();
          u._.setPageRefData(i);
          u.track("$MPClick", i);
        };
      })(e);
      for (var i = t.length, n = 0; n < i; n++) ft(e, t[n]);
    }
  }
  function vt(e) {
    lt(e, "onLoad", "pageLoad");
    lt(e, "onShow", "pageShow");
    lt(e, "onHide", "pageHide");
    lt(e, "onUnload", "pageHide");
    lt(e, "onAddToFavorites", "pageAddFavorites");
    "function" == typeof e.onShareAppMessage && u.autoTrackCustom.pageShare(e);
    "function" == typeof e.onShareTimeline && u.autoTrackCustom.pageShareTimeline(e);
  }
  var yt = function () {
    this.sub = [];
  };
  yt.prototype = {
    add: function (e) {
      this.sub.push(e);
    },
    emit: function (e, t) {
      this.sub.forEach(function (i) {
        i.on(e, t);
      });
    }
  };
  var $t = function (e) {
    u.events.add(this);
    this._events = [];
    this.handle = e;
    this.ready = !1;
  };
  $t.prototype = {
    on: function (e, t) {
      if (this.ready) {
        if (T(this.handle)) try {
          this.handle(e, t);
        } catch (e) {
          p(e);
        }
      } else this._events.push({
        event: e,
        data: t
      });
    },
    isReady: function () {
      var e = this;
      e.ready = !0;
      e._events.forEach(function (t) {
        if (T(e.handle)) try {
          e.handle(t.event, t.data);
        } catch (e) {
          p(e);
        }
      });
    }
  };
  var bt = {};
  function St() {
    var e;
    return global && global.sensors_data_pre_config && (e = !!global.sensors_data_pre_config.is_compliance_enabled && global.sensors_data_pre_config.is_compliance_enabled), !e || !!Q.init_status || !!Q.privacy.enable_data_collect;
  }
  bt.sdk = new ot();
  bt.data = new ot();
  bt.page = new ot();
  var kt = Object.prototype.hasOwnProperty;
  function wt(e, t) {
    dt({
      type: "profile_set_once",
      properties: e
    });
  }
  function qt(e) {
    var t = Re(e);
    t && Tt("$identity_mp_unionid", t);
  }
  function It(e) {
    var t = Re(e);
    if (t) {
      if (kt.call(ie._state.identities, "$identity_mp_unionid") && t === ie._state.identities.$identity_mp_unionid) {
        var i = Y();
        kt.call(ie._state.identities, i) && (delete ie._state.identities[i], delete ie._state.openid, ie.save());
      }
      Pt("$identity_mp_unionid", t);
    }
  }
  function Tt(e, t) {
    if (E(t)) {
      if (M(t) && !1 === H(t)) return p("Value must be String"), !1;
      t = String(t);
    }
    if (!L(e)) return p("Key must be String"), !1;
    var i = ie.getHistoryLoginId(),
      n = i ? i.name : "";
    return !le.checkKeyword(e) || Ye(e, [J, n, "$mp_id", "$identity_mp_id"]) ? (p("Key [" + e + "] is invalid"), !1) : t && "" !== t ? L(t) ? !!le.checkIdLength(t) && (ie._state.identities[e] = t, ie.save(), void dt({
      type: "track_id_bind",
      event: "$BindID"
    })) : (p("Value must be String"), !1) : (p("Value is empty or null"), !1);
  }
  function Pt(e, t) {
    if (E(t)) {
      if (M(t) && !1 === H(t)) return p("Value must be String"), !1;
      t = String(t);
    }
    if (!L(e)) return p("Key must be String"), !1;
    if (!u._.check.checkKeyword(e) || Ye(e, [J])) return p("Key [" + e + "] is invalid"), !1;
    if (!t || "" === t) return p("Value is empty or null"), !1;
    if (!L(t)) return p("Value must be String"), !1;
    if (!u._.check.checkIdLength(t)) return !1;
    kt.call(ie._state.identities, e) && t === ie._state.identities[e] && ("$mp_id" !== e && "$identity_mp_id" !== e && delete ie._state.identities[e], ie.save());
    var i = ie.getDistinctId(),
      n = ie.getFirstId();
    i === e + "+" + t && (ie.set("first_id", ""), ie.set("distinct_id", n), ie.set("history_login_id", {
      name: "",
      value: ""
    }));
    var r = {};
    r[e] = t;
    dt({
      type: "track_id_unbind",
      event: "$UnbindID",
      unbind_value: r
    });
  }
  var At = {
    trackCustom: function (e, t, i) {
      var n = c.autoTrack[e],
        r = "";
      c.autoTrack && n && ("function" == typeof n ? $(r = n()) && w(t, r) : $(n) && (w(t, n), c.autoTrack[e] = !0), u.track(i, t));
    },
    appLaunch: function (e, t) {
      if (!St()) return !1;
      if (!Q.initialState.isComplete) return Q.initialState.queue.push(["appLaunch", arguments]), Q.life_state.app_launched = !0, !1;
      Q.life_state.app_launched = !0;
      var i = {};
      if (e && e.scene ? (Q.current_scene = e.scene, i.$scene = qe(e.scene)) : i.$scene = "未取到值", e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, Te(e.query)), e && e.path && (i.$url_path = Se(e.path), i.$title = He(e.path), e.query && $(e.query))) {
        var n = We(e.query);
        n = n ? "?" + n : "";
        i.$url = i.$url_path + n;
      }
      Ae(e, i);
      var r = Oe(e, i);
      Q.is_first_launch ? (i.$is_first_time = !0, D(r.pre1) || u.setOnceProfile(r.pre1)) : i.$is_first_time = !1;
      Ve(r.pre2);
      Le(e, i);
      u.registerApp({
        $latest_scene: i.$scene
      });
      i.$url_query = We(e.query);
      Me(i);
      t ? (i = w(i, t), u.track("$MPLaunch", i)) : c.autoTrack && c.autoTrack.appLaunch && u.autoTrackCustom.trackCustom("appLaunch", i, "$MPLaunch");
    },
    appShow: function (e, t) {
      var i = {};
      Q.mp_show_time = new Date().getTime();
      e && e.scene ? (Q.current_scene = e.scene, i.$scene = qe(e.scene)) : i.$scene = "未取到值";
      e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, Te(e.query));
      e && e.path && (i.$url_path = Se(e.path), i.$title = He(e.path));
      Ae(e, i);
      Ve(Oe(e, i).pre2);
      Le(e, i);
      u.registerApp({
        $latest_scene: i.$scene
      });
      i.$url_query = We(e.query);
      Me(i, e.path, i.$url_query);
      e && e.path && (i.$url = e.path + (i.$url_query ? "?" + i.$url_query : ""));
      t ? (i = w(i, t), u.track("$MPShow", i)) : c.autoTrack && c.autoTrack.appShow && u.autoTrackCustom.trackCustom("appShow", i, "$MPShow");
    },
    appHide: function (e) {
      var t = new Date().getTime(),
        i = {};
      i.$url_path = ye();
      Q.mp_show_time && t - Q.mp_show_time > 0 && (t - Q.mp_show_time) / 3600000 < 24 && (i.event_duration = (t - Q.mp_show_time) / 1000);
      Me(i);
      e ? (i = w(i, e), u.track("$MPHide", i)) : c.autoTrack && c.autoTrack.appHide && u.autoTrackCustom.trackCustom("appHide", i, "$MPHide");
    },
    pageLoad: function (e) {
      Q.current_scene && 1010 === Q.current_scene && e && (e.sampshare && delete e.sampshare, Te(e));
      e && $(e) && (this.sensors_mp_url_query = We(e), this.sensors_mp_encode_url_query = We(e, !0));
    },
    pageShow: function () {
      Q.page_show_time = Date.now();
      var e = {},
        t = ye(),
        i = He(t);
      Ue();
      e.$url_path = t;
      e.$url_query = this.sensors_mp_url_query ? this.sensors_mp_url_query : "";
      Me(e = w(e, Qe()));
      Fe(e);
      i && (e.$title = i);
      c.onshow ? c.onshow(u, t, this) : -1 === c.autotrack_exclude_page.pageShow.indexOf(t) && u.autoTrackCustom.trackCustom("pageShow", e, "$MPViewScreen");
    },
    pageShare: function (e) {
      var t = e.onShareAppMessage;
      e.onShareAppMessage = function () {
        var e = this;
        Q.share_method = "转发消息卡片";
        var i,
          n = t.apply(this, arguments);
        if (c.autoTrack && c.autoTrack.pageShare) {
          var r = {
            $url_path: ye(),
            $share_depth: Q.query_share_depth,
            $share_method: Q.share_method
          };
          Me(r);
          u.autoTrackCustom.trackCustom("pageShare", r, "$MPShare");
        }
        function a(t) {
          return $(t) || (t = {}), (O(t.path) || "" === t.path) && (t.path = be(e)), L(t.path) && (-1 === t.path.indexOf("?") ? t.path = t.path + "?" : "&" !== t.path.slice(-1) && (t.path = t.path + "&")), t.path = t.path + Ce(), t;
        }
        if (u.para.allow_amend_share_path && $(n = a(n))) for (var s in n) if ((i = n[s]) && T(i.then) && T(i.catch)) try {
          n[s] = n[s].then(function (e) {
            return a(e);
          });
        } catch (e) {
          p("onShareAppMessage: " + e);
        }
        return n;
      };
    },
    pageShareTimeline: function (e) {
      var t = e.onShareTimeline;
      e.onShareTimeline = function () {
        Q.share_method = "朋友圈分享";
        var e = t.apply(this, arguments);
        if (c.autoTrack && c.autoTrack.pageShare) {
          var i = {
            $url_path: ye(),
            $share_depth: Q.query_share_depth,
            $share_method: Q.share_method
          };
          Me(i);
          u.autoTrackCustom.trackCustom("pageShare", i, "$MPShare");
        }
        return c.allow_amend_share_path && ("object" != o(e) && (e = {}), "object" == o(e) && void 0 === e.query && (e.query = ""), "object" == o(e) && "string" == typeof e.query && "" !== e.query && "&" !== e.query.slice(-1) && (e.query = e.query + "&"), e.query = e.query + Ce()), e;
      };
    },
    pageAddFavorites: function () {
      var e = {};
      e.$url_path = ye();
      c.autoTrack && c.autoTrack.mpFavorite && u.autoTrackCustom.trackCustom("mpFavorite", e, "$MPAddFavorites");
    },
    pageHide: function () {
      u.para.autoTrack && u.para.autoTrack.pageLeave && Ct();
    }
  };
  function Ct() {
    var e = {},
      t = "";
    try {
      t = (e = ve()) ? e.route : "";
    } catch (e) {
      p(e);
    }
    if (Q.page_show_time >= 0 && "" !== t) {
      var i = {},
        n = He(t),
        r = (Date.now() - Q.page_show_time) / 1000;
      (isNaN(r) || r < 0) && (r = 0);
      i.$url_query = e.sensors_mp_url_query ? e.sensors_mp_url_query : "";
      i.$url_path = t;
      i.$title = n;
      i.event_duration = r;
      -1 === c.autotrack_exclude_page.pageLeave.indexOf(t) && u.track("$MPPageLeave", i);
      Q.page_show_time = -1;
    }
  }
  var Dt = {
      getRequest: function (e) {
        wx.login({
          success: function (t) {
            t.code && c.appid && c.openid_url ? Ne({
              url: c.openid_url + "&code=" + t.code + "&appid=" + c.appid,
              method: "GET",
              complete: function (t) {
                $(t) && $(t.data) && t.data.openid ? e(t.data.openid) : e();
              }
            }) : e();
          }
        });
      },
      getWXStorage: function () {
        var e = ie.getStorage();
        if (e && $(e)) return e.openid;
      },
      getOpenid: function (e) {
        if (!c.appid) return e(), !1;
        var t = this.getWXStorage();
        t ? e(t) : this.getRequest(e);
      }
    },
    xt = Object.freeze({
      __proto__: null,
      setProfile: function (e, t) {
        dt({
          type: "profile_set",
          properties: e
        });
      },
      setOnceProfile: wt,
      appendProfile: function (e, t) {
        if (!$(e)) return !1;
        y(e, function (t, i) {
          L(t) ? e[i] = [t] : I(t) ? e[i] = t : (delete e[i], p("appendProfile属性的值必须是字符串或者数组"));
        });
        dt({
          type: "profile_append",
          properties: e
        });
      },
      incrementProfile: function (e, t) {
        if (!$(e)) return !1;
        var i = e;
        L(e) && ((e = {})[i] = 1);
        dt({
          type: "profile_increment",
          properties: e
        });
      },
      track: function (e, t, i) {
        dt({
          type: "track",
          event: e,
          properties: t
        });
      },
      identify: function (e, t) {
        if (!St()) return !1;
        if (!Q.init_status) return ie.store_queue.push({
          method: "identify",
          params: arguments
        }), !1;
        if (e = Re(e)) {
          var i = ie.getFirstId();
          !0 === t ? i ? ie.set("first_id", e) : ie.set("distinct_id", e) : i ? ie.change("first_id", e) : ie.change("distinct_id", e);
        }
      },
      resetAnonymousIdentity: function (e) {
        if (ie.getFirstId()) return p("resetAnonymousIdentity must be used in a logout state ！"), !1;
        if ("number" == typeof e && (e = String(e)), void 0 === e) {
          var t = ie.getUUID();
          ie._state.identities.$identity_mp_id = t;
          ie.set("distinct_id", t);
        } else Re(e) && (ie._state.identities.$identity_mp_id = e, ie.set("distinct_id", e));
      },
      trackSignup: function (e, t, i, n) {
        var r, a, s, o;
        $(e) ? (r = e.id, a = e.event_name, s = e.id_name) : (r = e, a = t);
        ie.set("distinct_id", r);
        o = s && s !== J ? s + "+" + r : r;
        dt({
          original_id: ie.getFirstId() || ie.getDistinctId(),
          distinct_id: o,
          login_id: o,
          type: "track_signup",
          event: a,
          properties: i
        });
      },
      login: function (e) {
        if (!(e = Re(e))) return !1;
        if (Ge(e)) return !1;
        var t = ie.getFirstId(),
          i = ie.getDistinctId(),
          n = J;
        Ze(n, e) && (ie._state.identities[n] = e, ie.set("history_login_id", {
          name: n,
          value: e
        }), t || ie.set("first_id", i), u.trackSignup({
          id: e,
          event_name: "$SignUp"
        }), ie.identitiesSet({
          type: "login",
          id: e,
          id_name: n
        }));
      },
      loginWithKey: function (e, t) {
        if (!L(e)) return p("Key must be String"), !1;
        if (!le.checkKeyword(e) && e.length > 100) p("Key [" + e + "] is invalid");else if (!le.checkKeyword(e)) return p("Key [" + e + "] is invalid"), !1;
        if (Ye(e, ["$mp_openid", "$identity_mp_openid", "$identity_mp_unionid", "$mp_unionid", "$mp_id", "$identity_mp_id"])) return p("Key [" + e + "] is invalid"), !1;
        if (!(t = Re(t))) return !1;
        if (Ge(t)) return !1;
        var i = ie.getFirstId(),
          n = ie.getDistinctId();
        Ze(e, t) && (ie._state.identities[e] = t, ie.set("history_login_id", {
          name: e,
          value: t
        }), i || ie.set("first_id", n), u.trackSignup({
          id: t,
          event_name: "$SignUp",
          id_name: e
        }), ie.identitiesSet({
          type: "login",
          id: t,
          id_name: e
        }));
      },
      getAnonymousID: function () {
        if (!D(ie._state)) return ie._state._first_id || ie._state.first_id || ie._state._distinct_id || ie._state.distinct_id;
        p("请先初始化SDK");
      },
      getIdentities: function () {
        return D(ie._state) ? (p("请先初始化SDK"), null) : ie._state.identities || null;
      },
      logout: function (e) {
        var t = ie.getFirstId();
        ie.identitiesSet({
          type: "logout"
        });
        ie.set("history_login_id", {
          name: "",
          value: ""
        });
        t ? (ie.set("first_id", ""), !0 === e ? ie.set("distinct_id", ie.getUUID()) : ie.set("distinct_id", t)) : p("没有first_id，logout失败");
      },
      getPresetProperties: function () {
        if (Q.preset_properties && Q.preset_properties.$lib) {
          var e = {};
          y(Q.preset_properties, function (t, i) {
            0 === i.indexOf("$") && (e[i] = t);
          });
          var t = {
              $url_path: ye(),
              $is_first_day: $e(),
              $is_first_time: Q.is_first_launch
            },
            i = w(e, t, Q.preset_properties, ie.getProps());
          return delete i.$lib, i;
        }
        return {};
      },
      setOpenid: function (e, t) {
        if (!(e = Re(e))) return !1;
        if (!St()) return !1;
        if (!Q.init_status) return ie.store_queue.push({
          method: "setOpenid",
          params: arguments
        }), !1;
        p("该方法已不建议使用，如果是 id2 用户，请使用 identify 代替，如果是 id3 用户，请使用 bindOpenid 代替");
        t && p("%c 当前版本 setOpenid 接口 已不支持传入第二个参数", "color:#F39C12;font-size: 14px;");
        ie.set("openid", e);
        u.identify(e, !0);
        var i = Y();
        ie._state.identities[i] = e;
        ie.save();
      },
      unsetOpenid: function (e) {
        p("该方法已不建议使用，如果是 id3 用户，请使用 unbindOpenid 代替");
        var t = Re(e);
        if (!t) return !1;
        var i = ie._state.openid;
        i === t && ie.set("openid", "");
        var n = Y();
        if (kt.call(ie._state.identities, n) && t === ie._state.identities[n]) {
          delete ie._state.identities[n];
          var r = ie.getFirstId(),
            a = ie.getDistinctId(),
            s = ie._state && ie._state.identities && ie._state.identities.$identity_mp_id;
          r && r === i && s && ie.change("first_id", s);
          a && a === i && s && ie.change("distinct_id", s);
          ie.save();
        }
      },
      bindOpenid: function (e) {
        if (!(e = Re(e))) return !1;
        var t = Y();
        this.bind(t, e);
      },
      unbindOpenid: function (e) {
        if (!Re(e)) return !1;
        var t = Y();
        this.unbind(t, e);
      },
      setUnionid: qt,
      unsetUnionid: It,
      bindUnionid: qt,
      unbindUnionid: It,
      initWithOpenid: function (e, t) {
        (e = e || {}).appid && (c.appid = e.appid);
        u.openid.getOpenid(function (i) {
          i && u.setOpenid(i, e.isCoverLogin);
          t && T(t) && t(i);
          u.init(e);
        });
      },
      bind: Tt,
      unbind: Pt,
      setWebViewUrl: function (e, t) {
        if (p("setWebViewUrl 方法已从 2022-9-23 开始废弃，请尽快去除该 API 的调用，并使用 use 插件 代替"), !L(e) || "" === e) return p("error:请传入正确的 URL 格式"), !1;
        if (!/^http(s)?:\/\//.test(e)) return p("warning: 请传入正确的 URL 格式"), !1;
        var i = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e);
        if (!i) return !1;
        var n,
          r = i[1] || "",
          a = i[2] || "",
          s = i[3] || "",
          o = "",
          u = ie.getDistinctId() || "",
          c = ie.getFirstId() || "";
        N && N.encode ? u = u ? N.trim(N.encode(me(u))) : "" : ee && (u = u ? ee(u) : "");
        u = encodeURIComponent(u);
        var _ = c ? "f" + u : "d" + u;
        return t ? (n = s.indexOf("_sasdk"), o = s.indexOf("?") > -1 ? n > -1 ? r + a + "#" + s.substring(1, n) + "_sasdk=" + _ : r + a + "#" + s.substring(1) + "&_sasdk=" + _ : r + a + "#" + s.substring(1) + "?_sasdk=" + _) : (n = a.indexOf("_sasdk"), o = /^\?(\w)+/.test(a) ? n > -1 ? r + a.replace(/(_sasdk=)([^&]*)/gi, "_sasdk=" + _) + s : r + "?" + a.substring(1) + "&_sasdk=" + _ + s : r + "?" + a.substring(1) + "_sasdk=" + _ + s), o;
      },
      quick: function () {
        var e = arguments[0],
          t = arguments[1],
          i = arguments[2],
          n = $(i) ? i : {};
        if ("getAnonymousID" === e) {
          if (!D(ie._state)) return ie._state._first_id || ie._state.first_id || ie._state._distinct_id || ie._state.distinct_id;
          p("请先初始化SDK");
        } else "appLaunch" === e || "appShow" === e ? t ? u.autoTrackCustom[e](t, n) : p("App的launch和show，在sensors.quick第二个参数必须传入App的options参数") : "appHide" === e && (n = $(t) ? t : {}, u.autoTrackCustom[e](n));
      },
      appLaunch: function (e, t) {
        var i = {};
        e && e.scene ? (Q.current_scene = e.scene, i.$scene = qe(e.scene)) : i.$scene = "未取到值";
        e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, Te(e.query));
        e && e.path && (i.$url_path = Se(e.path), i.$title = He(e.path));
        Ae(e, i);
        var n = Oe(e, i);
        Q.is_first_launch ? (i.$is_first_time = !0, D(n.pre1) || u.setOnceProfile(n.pre1)) : i.$is_first_time = !1;
        Ve(n.pre2);
        Le(e, i);
        u.registerApp({
          $latest_scene: i.$scene
        });
        i.$url_query = We(e.query);
        i.$url = e.path + (i.$url_query ? "?" + i.$url_query : "");
        Me(t);
        $(t) && (i = w(i, t));
        u.track("$MPLaunch", i);
      },
      appShow: function (e, t) {
        var i = {};
        Q.mp_show_time = new Date().getTime();
        e && e.scene ? (Q.current_scene = e.scene, i.$scene = qe(e.scene)) : i.$scene = "未取到值";
        e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, Te(e.query));
        e && e.path && (i.$url_path = Se(e.path), i.$title = He(e.path));
        Ae(e, i);
        Ve(Oe(e, i).pre2);
        Le(e, i);
        u.registerApp({
          $latest_scene: i.$scene
        });
        i.$url_query = We(e.query);
        e && e.path && (i.$url = e.path + (i.$url_query ? "?" + i.$url_query : ""));
        Me(i, e.path, i.$url_query);
        $(t) && (i = w(i, t));
        u.track("$MPShow", i);
      },
      appHide: function (e) {
        var t = new Date().getTime(),
          i = {};
        i.$url_path = ye();
        Q.mp_show_time && t - Q.mp_show_time > 0 && (t - Q.mp_show_time) / 3600000 < 24 && (i.event_duration = (t - Q.mp_show_time) / 1000);
        Me(i);
        $(e) && (i = w(i, e));
        u.track("$MPHide", i);
        u.sendStrategy.onAppHide();
      },
      pageShow: function (e) {
        var t = {},
          i = ye(),
          n = He(i),
          r = ve();
        n && (t.$title = n);
        t.$url_path = i;
        t.$url_query = r.sensors_mp_url_query ? r.sensors_mp_url_query : "";
        Fe(t = w(t, Qe()));
        Me(t);
        $(e) && (t = w(t, e));
        u.track("$MPViewScreen", t);
      },
      setPara: function (e) {
        u.para = q(c, e);
        var t = [];
        if (I(c.source_channel)) for (var i = c.source_channel.length, n = 0; n < i; n++) -1 === " utm_source utm_medium utm_campaign utm_content utm_term sa_utm ".indexOf(" " + c.source_channel[n] + " ") && t.push(c.source_channel[n]);
        c.source_channel = t;
        $(c.register) && w(Q.preset_properties, c.register);
        c.openid_url || (c.openid_url = c.server_url.replace(/([^\\\/])\/(sa)(\.gif){0,1}/, "$1/mp_login"));
        "number" != typeof c.send_timeout && (c.send_timeout = 1000);
        var r = {
          send_timeout: 6000,
          max_length: 6
        };
        e && e.datasend_timeout || c.batch_send && (c.datasend_timeout = 10000);
        !0 === c.batch_send ? c.batch_send = w({}, r) : $(c.batch_send) && (c.batch_send = w({}, r, c.batch_send));
        var a = {
          share: !1,
          utm: !1
        };
        !0 === c.is_persistent_save ? (c.is_persistent_save = w({}, a), c.is_persistent_save.utm = !0) : $(c.is_persistent_save) && (c.is_persistent_save = w({}, a, c.is_persistent_save));
        c.server_url ? (c.preset_properties = $(c.preset_properties) ? c.preset_properties : {}, $(c.autotrack_exclude_page) || (c.autotrack_exclude_page = {
          pageShow: [],
          pageLeave: []
        }), I(c.autotrack_exclude_page.pageShow) || (c.autotrack_exclude_page.pageShow = []), I(c.autotrack_exclude_page.pageLeave) || (c.autotrack_exclude_page.pageLeave = [])) : p("请使用 setPara() 方法设置 server_url 数据接收地址,详情可查看https://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0");
      },
      getServerUrl: function () {
        return c.server_url;
      },
      sendPageLeave: Ct,
      openid: Dt,
      autoTrackCustom: At,
      registerApp: function (e) {
        $(e) && !D(e) && (Q.preset_properties = w(Q.preset_properties, e));
      },
      register: function (e) {
        $(e) && !D(e) && ie.setProps(e);
      },
      clearAllRegister: function () {
        ie.setProps({}, !0);
      },
      clearAppRegister: function (e) {
        I(e) && y(Q.preset_properties, function (t, i) {
          C(e, i) && delete Q.preset_properties[i];
        });
      },
      clearAllProps: function (e) {
        var t = ie.getProps(),
          i = {};
        I(e) && (y(t, function (t, n) {
          C(e, n) || (i[n] = t);
        }), ie.setProps(i, !0));
      }
    });
  u._ = ut;
  u.modules = {};
  u.meta = Q;
  u.kit = pt;
  u.mergeStorageData = ct;
  u.dataStage = dt;
  u.sendStrategy = _t;
  u.store = ie;
  u.usePlugin = function (e, t) {
    if (!$(e) && !T(e)) return p("plugin must be an object", e), !1;
    if (T(e.init) || p("plugin maybe missing init method", e.plugin_name || e), L(e.plugin_name) && e.plugin_name ? u.modules[e.plugin_name] ? e = u.modules[e.plugin_name] : u.modules[e.plugin_name] = e : p("plugin_name is not defined - ", e.plugin_name || e), $(e) && !0 === e.plugin_is_init) return e;
    if ($(e) && e.plugin_name && (L(e.plugin_version) && "1.20.2" === e.plugin_version || p("warning!" + e.plugin_name + " plugin version do not match SDK version ！！！")), Q.init_status) "function" == typeof e.init && (e.init(u, t), e.plugin_is_init = !0, p(e.plugin_name + " plugin is initialized"));else {
      var i = {
        target: e,
        para: t
      };
      Q.plugin.uninitialized_list.push(i);
    }
    return e;
  };
  u.checkPluginInitStatus = function () {
    if (Q.plugin.uninitialized_list.length > 0) {
      for (var e in Q.plugin.uninitialized_list) {
        var t = Q.plugin.uninitialized_list[e];
        t && t.target && "function" == typeof t.target.init && !t.target.plugin_is_init && (t.target.init(u, t.para), $(t.target) && (t.target.plugin_is_init = !0, L(t.target.plugin_name) && t.target.plugin_name && p(t.target.plugin_name + " plugin is initialized")));
      }
      Q.plugin.uninitialized_list = [];
    }
  };
  u.eventSub = $t;
  u.events = new yt();
  u.ee = bt;
  u.registerPropertyPlugin = function (e) {
    T(e.properties) ? !e.isMatchedWithFilter || T(e.isMatchedWithFilter) ? u.ee.data.on("finalAdjustData", function (t) {
      try {
        T(e.isMatchedWithFilter) ? e.isMatchedWithFilter(t) && e.properties(t) : e.properties(t);
      } catch (e) {
        p("execute registerPropertyPlugin callback error:" + e);
      }
    }) : p("registerPropertyPlugin arguments error, isMatchedWithFilter must be function") : p("registerPropertyPlugin arguments error, properties must be function");
  };
  u.enableDataCollect = function () {
    Q.privacy.enable_data_collect = !0;
  };
  u.initialState = Q.initialState;
  u.IDENTITY_KEY = {
    EMAIL: z,
    MOBILE: W
  };
  (function (e) {
    for (var t in xt) e[t] = xt[t];
  })(u);
  y(["resetAnonymousIdentity", "setProfile", "setOnceProfile", "track", "quick", "incrementProfile", "appendProfile", "login", "logout", "registerApp", "register", "clearAllRegister", "clearAllProps", "clearAppRegister", "bind", "unbind", "unsetOpenid", "setUnionid", "unsetUnionid", "bindOpenid", "unbindOpenid", "bindUnionid", "unbindUnionid"], function (e) {
    var t = u[e];
    u[e] = function () {
      return !!St() && (!T(u.getDisabled) || !u.getDisabled()) && void (Q.initialState.isComplete ? t.apply(u, arguments) : Q.initialState.queue.push([e, arguments]));
    };
  });
  Je();
  et();
  se();
  wx.onAppShow(function (e) {
    if (!Q.life_state.app_launched) {
      var t = wx.getLaunchOptionsSync() || {};
      u.autoTrackCustom.appLaunch(t);
    }
    u.autoTrackCustom.appShow(e);
  });
  wx.onAppHide(function () {
    u.autoTrackCustom.appHide();
  });
  (function () {
    var e = Page;
    Page = function (t) {
      try {
        t || (t = {});
        mt(t);
        vt(t);
        e.apply(this, arguments);
      } catch (t) {
        e.apply(this, arguments);
      }
    };
    var t = Component;
    Component = function (e) {
      try {
        e || (e = {});
        e.methods || (e.methods = {});
        mt(e.methods);
        vt(e.methods);
        t.apply(this, arguments);
      } catch (e) {
        t.apply(this, arguments);
      }
    };
  })();
  u.init = function (e) {
    if (!0 === Q.init_status) return !1;
    function t() {
      Q.initialState.isComplete = !0;
      Q.initialState.queue.length > 0 && (y(Q.initialState.queue, function (e) {
        "appLaunch" === e[0] ? u.autoTrackCustom.appLaunch.apply(u.autoTrackCustom, v.call(e[1])) : u[e[0]].apply(u, v.call(e[1]));
      }), Q.initialState.queue = []);
      (function () {
        if (!Q.life_state.app_launched) {
          var e = wx.getLaunchOptionsSync() || {};
          u.autoTrackCustom.appLaunch(e);
        }
      })();
      u.ee.sdk.emit("ready");
    }
    Q.init_status = !0;
    u.ee.sdk.emit("beforeInit");
    e && $(e) && u.setPara(e);
    u.ee.sdk.emit("initPara");
    u.ee.sdk.emit("afterInitPara");
    u.store.init();
    u.checkPluginInitStatus();
    Q.is_first_launch && wt({
      $first_visit_time: new Date()
    });
    u.para.batch_send && u.sendStrategy.init();
    var i = [tt(), it()].concat(Q.promise_list);
    Promise.all(i).then(function () {
      t();
    }).catch(function () {
      t();
    });
  };
  var Ot = "1.20.2";
  var Lt = function (e) {
    if ("object" == o(e) && "string" == typeof e.plugin_name && "" !== e.plugin_name) return e.plugin_version = Ot, e.log = e.log || function () {
      "object" == ("undefined" == typeof console ? "undefined" : o(console)) && "function" == typeof console.log && console.log.apply(console, arguments);
    }, e;
    "object" == ("undefined" == typeof console ? "undefined" : o(console)) && "function" == typeof console.error && console.error("plugin must contain  proprerty \"plugin_name\"");
  }({
    init: function (e) {
      e.disableSDK = this.disableSDK.bind(this);
      e.enableSDK = this.enableSDK.bind(this);
      e.getDisabled = this.getDisabled.bind(this);
    },
    plugin_name: "DisableSDK",
    disabled: !1,
    disableSDK: function () {
      this.disabled = !0;
    },
    enableSDK: function () {
      this.disabled = !1;
    },
    getDisabled: function () {
      return this.disabled;
    }
  });
  u.usePlugin(Lt);
  var Ft = u;
  exports.default = Ft;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/sctrack/sensorsdata.esm.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/track.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = require("../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = void 0;
  var e = require("@/request/user"),
    i = t(require("@/enum/index")),
    n = {
      data: [],
      isReporting: !1,
      limit: 3,
      init: function () {
        this.data = JSON.parse(wx.getStorageSync("__".concat(i.default.brandKey, "__/track")) || "[]");
        wx.onAppHide(this.onAppHide.bind(this));
        wx.onAppShow(this.onAppShow.bind(this));
      },
      track: function (t) {
        this.data.push(t);
        getApp().setStorage("__".concat(i.default.brandKey, "__/track"), JSON.stringify(this.data));
        this.data.length >= this.limit && this.report();
      },
      report: function () {
        var t = this;
        if (!this.isReporting && 0 != this.data.length && getApp().accessToken) {
          var n = [];
          this.data.map(function (t) {
            t.map(function (t) {
              var e = n.findIndex(function (e) {
                return e.tplId === t;
              });
              -1 !== e ? n[e].times++ : n.push({
                tplId: t,
                times: 1
              });
            });
          });
          0 !== n.length && (this.isReporting = !0, (0, e.reportTrack)({
            templates: n
          }).then(function (e) {
            e.data && (t.data = [], getApp().removeStorage("__".concat(i.default.brandKey, "__/track")));
            t.isReporting = !1;
          }).catch(function () {
            t.isReporting = !1;
          }));
        }
      },
      onAppHide: function () {
        console.log("onAppHide");
        this.report();
      },
      onAppShow: function () {
        this.report();
        wx.offAppShow(this.onAppShow);
      }
    };
  exports.default = n;
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/track.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/wasm/rsa_sign.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../../@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  exports.default = function (e, r) {
    return x.apply(this, arguments);
  };
  var r = e(require("../../@babel/runtime/regenerator")),
    n = require("../../@babel/runtime/helpers/asyncToGenerator"),
    t = e(require("../httpQueue"));
  require("./textencoder");
  var a = global.TextDecoder,
    u = global.TextEncoder,
    i = new a("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
  i.decode();
  var o,
    c = 0,
    s = new Uint8Array(),
    f = new Int32Array(),
    l = new t.default(),
    d = "wasm_init_queue",
    _ = {
      wbg: {
        __wbindgen_throw: function (e, r) {
          throw new Error(g(e, r));
        }
      }
    };
  function b() {
    return w.apply(this, arguments);
  }
  function w() {
    return (w = n(r.default.mark(function e() {
      return r.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e) {
              l.add(d, {
                res: e
              }, function () {
                var e = l.get(d);
                WXWebAssembly.instantiate("/utils/wasm/rsa_sign_bg.wasm.br", _).then(function (r) {
                  var n = r.instance;
                  for (o = n.exports, f = new Int32Array(), s = new Uint8Array(); e.length;) e.shift().res();
                  l.delete(d);
                });
              });
            }));
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }))).apply(this, arguments);
  }
  var p = new u("utf-8");
  function g(e, r) {
    return i.decode(m().subarray(e, e + r));
  }
  var h = "function" == typeof p.encodeInto ? function (e, r) {
    return p.encodeInto(e, r);
  } : function (e, r) {
    var n = p.encode(e);
    return r.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function y(e, r, n) {
    if (void 0 === n) {
      var t = p.encode(e),
        a = r(t.length);
      return m().subarray(a, a + t.length).set(t), c = t.length, a;
    }
    for (var u = e.length, i = r(u), o = m(), s = 0; s < u; s++) {
      var f = e.charCodeAt(s);
      if (f > 127) break;
      o[i + s] = f;
    }
    if (s !== u) {
      0 !== s && (e = e.slice(s));
      i = n(i, u, u = s + 3 * e.length);
      var l = m().subarray(i + s, i + u);
      s += h(e, l).written;
    }
    return c = s, i;
  }
  function v() {
    return 0 === f.byteLength && (f = new Int32Array(o.memory.buffer)), f;
  }
  function m() {
    return 0 === s.byteLength && (s = new Uint8Array(o.memory.buffer)), s;
  }
  function x() {
    return (x = n(r.default.mark(function e(n, t) {
      var a, u, i, s, f, l, d;
      return r.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (o) {
              e.next = 3;
              break;
            }
            return e.next = 3, b();
          case 3:
            return e.prev = 3, a = o.__wbindgen_add_to_stack_pointer(-16), u = y(n, o.__wbindgen_malloc, o.__wbindgen_realloc), i = c, s = y(t, o.__wbindgen_malloc, o.__wbindgen_realloc), f = c, o.rsa_sign(a, u, i, s, f), l = v()[a / 4 + 0], d = v()[a / 4 + 1], e.abrupt("return", g(l, d));
          case 13:
            return e.prev = 13, o.__wbindgen_add_to_stack_pointer(16), o.__wbindgen_free(l, d), e.finish(13);
          case 17:
          case "end":
            return e.stop();
        }
      }, e, null, [[3,, 13, 17]]);
    }))).apply(this, arguments);
  }
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/wasm/rsa_sign.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/wasm/textencoder.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("../../@babel/runtime/helpers/typeof");
  !function (e) {
    function r() {}
    function n() {}
    var o = String.fromCharCode,
      t = {}.toString,
      i = t.call(e.SharedArrayBuffer),
      a = t(),
      f = e.Uint8Array,
      c = f || Array,
      l = f ? ArrayBuffer : c,
      d = l.isView || function (e) {
        return e && "length" in e;
      },
      u = t.call(l.prototype);
    l = n.prototype;
    var s = e.TextEncoder,
      y = new (f ? Uint16Array : c)(32);
    r.prototype.decode = function (e) {
      if (!d(e)) {
        var r = t.call(e);
        if (r !== u && r !== i && r !== a) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
        e = f ? new c(e) : e || [];
      }
      for (var n, l, s, v = r = "", h = 0, p = 0 | e.length, g = p - 32 | 0, A = 0, b = 0, w = 0, T = -1; h < p;) {
        for (n = h <= g ? 32 : p - h | 0; w < n; h = h + 1 | 0, w = w + 1 | 0) {
          switch ((l = 255 & e[h]) >> 4) {
            case 15:
              if (2 != (s = 255 & e[h = h + 1 | 0]) >> 6 || 247 < l) {
                h = h - 1 | 0;
                break;
              }
              A = (7 & l) << 6 | 63 & s;
              b = 5;
              l = 256;
            case 14:
              A <<= 6;
              A |= (15 & l) << 6 | 63 & (s = 255 & e[h = h + 1 | 0]);
              b = 2 == s >> 6 ? b + 4 | 0 : 24;
              l = l + 256 & 768;
            case 13:
            case 12:
              A <<= 6;
              A |= (31 & l) << 6 | 63 & (s = 255 & e[h = h + 1 | 0]);
              b = b + 7 | 0;
              h < p && 2 == s >> 6 && A >> b && 1114112 > A ? (l = A, 0 <= (A = A - 65536 | 0) && (T = 55296 + (A >> 10) | 0, l = 56320 + (1023 & A) | 0, 31 > w ? (y[w] = T, w = w + 1 | 0, T = -1) : (s = T, T = l, l = s))) : (h = h - (l >>= 8) - 1 | 0, l = 65533);
              A = b = 0;
              n = h <= g ? 32 : p - h | 0;
            default:
              y[w] = l;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          y[w] = 65533;
        }
        if (v += o(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15], y[16], y[17], y[18], y[19], y[20], y[21], y[22], y[23], y[24], y[25], y[26], y[27], y[28], y[29], y[30], y[31]), 32 > w && (v = v.slice(0, w - 32 | 0)), h < p) {
          if (y[0] = T, w = ~T >>> 31, T = -1, v.length < r.length) continue;
        } else -1 !== T && (v += o(T));
        r += v;
        v = "";
      }
      return r;
    };
    l.encode = function (e) {
      var r,
        n = 0 | (e = void 0 === e ? "" : "" + e).length,
        o = new c(8 + (n << 1) | 0),
        t = 0,
        i = !f;
      for (r = 0; r < n; r = r + 1 | 0, t = t + 1 | 0) {
        var a = 0 | e.charCodeAt(r);
        if (127 >= a) o[t] = a;else {
          if (2047 >= a) o[t] = 192 | a >> 6;else {
            e: {
              if (55296 <= a) if (56319 >= a) {
                var l = 0 | e.charCodeAt(r = r + 1 | 0);
                if (56320 <= l && 57343 >= l) {
                  if (65535 < (a = (a << 10) + l - 56613888 | 0)) {
                    o[t] = 240 | a >> 18;
                    o[t = t + 1 | 0] = 128 | a >> 12 & 63;
                    o[t = t + 1 | 0] = 128 | a >> 6 & 63;
                    o[t = t + 1 | 0] = 128 | 63 & a;
                    continue;
                  }
                  break e;
                }
                a = 65533;
              } else 57343 >= a && (a = 65533);
              !i && r << 1 < t && r << 1 < (t - 7 | 0) && (i = !0, (l = new c(3 * n)).set(o), o = l);
            }
            o[t] = 224 | a >> 12;
            o[t = t + 1 | 0] = 128 | a >> 6 & 63;
          }
          o[t = t + 1 | 0] = 128 | 63 & a;
        }
      }
      return f ? o.subarray(0, t) : o.slice(0, t);
    };
    s || (e.TextDecoder = r, e.TextEncoder = n);
  }("" + void 0 == ("undefined" == typeof global ? "undefined" : e(global)) ? "" + void 0 == ("undefined" == typeof self ? "undefined" : e(self)) ? void 0 : self : global);
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/wasm/textencoder.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("utils/weapp.qrcode.min.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = require("../@babel/runtime/helpers/typeof");
  !function (e, r) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (void 0).drawQrcode = r();
  }(0, function () {
    var e = Object.prototype.hasOwnProperty,
      r = Object.prototype.toString,
      n = Object.defineProperty,
      o = Object.getOwnPropertyDescriptor,
      i = function (t) {
        return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t);
      },
      a = function (t) {
        if (!t || "[object Object]" !== r.call(t)) return !1;
        var n,
          o = e.call(t, "constructor"),
          i = t.constructor && t.constructor.prototype && e.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !o && !i) return !1;
        for (n in t) {}
        return void 0 === n || e.call(t, n);
      },
      u = function (t, e) {
        n && "__proto__" === e.name ? n(t, e.name, {
          enumerable: !0,
          configurable: !0,
          value: e.newValue,
          writable: !0
        }) : t[e.name] = e.newValue;
      },
      s = function (t, r) {
        if ("__proto__" === r) {
          if (!e.call(t, r)) return;
          if (o) return o(t, r).value;
        }
        return t[r];
      };
    function h(t) {
      this.mode = f.MODE_8BIT_BYTE;
      this.data = t;
    }
    function l(t, e) {
      this.typeNumber = t;
      this.errorCorrectLevel = e;
      this.modules = null;
      this.moduleCount = 0;
      this.dataCache = null;
      this.dataList = new Array();
    }
    h.prototype = {
      getLength: function (t) {
        return this.data.length;
      },
      write: function (t) {
        for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8);
      }
    };
    l.prototype = {
      addData: function (t) {
        var e = new h(t);
        this.dataList.push(e);
        this.dataCache = null;
      },
      isDark: function (t, e) {
        if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
        return this.modules[t][e];
      },
      getModuleCount: function () {
        return this.moduleCount;
      },
      make: function () {
        if (this.typeNumber < 1) {
          var t = 1;
          for (t = 1; t < 40; t++) {
            for (var e = v.getRSBlocks(t, this.errorCorrectLevel), r = new C(), n = 0, o = 0; o < e.length; o++) n += e[o].dataCount;
            for (o = 0; o < this.dataList.length; o++) {
              var i = this.dataList[o];
              r.put(i.mode, 4);
              r.put(i.getLength(), c.getLengthInBits(i.mode, t));
              i.write(r);
            }
            if (r.getLengthInBits() <= 8 * n) break;
          }
          this.typeNumber = t;
        }
        this.makeImpl(!1, this.getBestMaskPattern());
      },
      makeImpl: function (t, e) {
        this.moduleCount = 4 * this.typeNumber + 17;
        this.modules = new Array(this.moduleCount);
        for (var r = 0; r < this.moduleCount; r++) {
          this.modules[r] = new Array(this.moduleCount);
          for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null;
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(t, e);
        this.typeNumber >= 7 && this.setupTypeNumber(t);
        null == this.dataCache && (this.dataCache = l.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
        this.mapData(this.dataCache, e);
      },
      setupPositionProbePattern: function (t, e) {
        for (var r = -1; r <= 7; r++) if (!(t + r <= -1 || this.moduleCount <= t + r)) for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (this.modules[t + r][e + n] = 0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4);
      },
      getBestMaskPattern: function () {
        for (var t = 0, e = 0, r = 0; r < 8; r++) {
          this.makeImpl(!0, r);
          var n = c.getLostPoint(this);
          (0 == r || t > n) && (t = n, e = r);
        }
        return e;
      },
      createMovieClip: function (t, e, r) {
        var n = t.createEmptyMovieClip(e, r);
        this.make();
        for (var o = 0; o < this.modules.length; o++) for (var i = 1 * o, a = 0; a < this.modules[o].length; a++) {
          var u = 1 * a;
          this.modules[o][a] && (n.beginFill(0, 100), n.moveTo(u, i), n.lineTo(u + 1, i), n.lineTo(u + 1, i + 1), n.lineTo(u, i + 1), n.endFill());
        }
        return n;
      },
      setupTimingPattern: function () {
        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
        for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
      },
      setupPositionAdjustPattern: function () {
        for (var t = c.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var r = 0; r < t.length; r++) {
          var n = t[e],
            o = t[r];
          if (null == this.modules[n][o]) for (var i = -2; i <= 2; i++) for (var a = -2; a <= 2; a++) this.modules[n + i][o + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a;
        }
      },
      setupTypeNumber: function (t) {
        for (var e = c.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
          var n = !t && 1 == (e >> r & 1);
          this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n;
        }
        for (r = 0; r < 18; r++) {
          n = !t && 1 == (e >> r & 1);
          this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
        }
      },
      setupTypeInfo: function (t, e) {
        for (var r = this.errorCorrectLevel << 3 | e, n = c.getBCHTypeInfo(r), o = 0; o < 15; o++) {
          var i = !t && 1 == (n >> o & 1);
          o < 6 ? this.modules[o][8] = i : o < 8 ? this.modules[o + 1][8] = i : this.modules[this.moduleCount - 15 + o][8] = i;
        }
        for (o = 0; o < 15; o++) {
          i = !t && 1 == (n >> o & 1);
          o < 8 ? this.modules[8][this.moduleCount - o - 1] = i : o < 9 ? this.modules[8][15 - o - 1 + 1] = i : this.modules[8][15 - o - 1] = i;
        }
        this.modules[this.moduleCount - 8][8] = !t;
      },
      mapData: function (t, e) {
        for (var r = -1, n = this.moduleCount - 1, o = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--;;) {
          for (var u = 0; u < 2; u++) if (null == this.modules[n][a - u]) {
            var s = false;
            i < t.length && (s = 1 == (t[i] >>> o & 1));
            c.getMask(e, n, a - u) && (s = !s);
            this.modules[n][a - u] = s;
            -1 == --o && (i++, o = 7);
          }
          if ((n += r) < 0 || this.moduleCount <= n) {
            n -= r;
            r = -r;
            break;
          }
        }
      }
    };
    l.PAD0 = 236;
    l.PAD1 = 17;
    l.createData = function (t, e, r) {
      for (var n = v.getRSBlocks(t, e), o = new C(), i = 0; i < r.length; i++) {
        var a = r[i];
        o.put(a.mode, 4);
        o.put(a.getLength(), c.getLengthInBits(a.mode, t));
        a.write(o);
      }
      var u = 0;
      for (i = 0; i < n.length; i++) u += n[i].dataCount;
      if (o.getLengthInBits() > 8 * u) throw new Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * u + ")");
      for (o.getLengthInBits() + 4 <= 8 * u && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(!1);
      for (; !(o.getLengthInBits() >= 8 * u || (o.put(l.PAD0, 8), o.getLengthInBits() >= 8 * u));) o.put(l.PAD1, 8);
      return l.createBytes(o, n);
    };
    l.createBytes = function (t, e) {
      for (var r = 0, n = 0, o = 0, i = new Array(e.length), a = new Array(e.length), u = 0; u < e.length; u++) {
        var s = e[u].dataCount,
          h = e[u].totalCount - s;
        n = Math.max(n, s);
        o = Math.max(o, h);
        i[u] = new Array(s);
        for (var l = 0; l < i[u].length; l++) i[u][l] = 255 & t.buffer[l + r];
        r += s;
        var f = c.getErrorCorrectPolynomial(h),
          g = new p(i[u], f.getLength() - 1).mod(f);
        for (a[u] = new Array(f.getLength() - 1), l = 0; l < a[u].length; l++) {
          var d = l + g.getLength() - a[u].length;
          a[u][l] = d >= 0 ? g.get(d) : 0;
        }
      }
      var m = 0;
      for (l = 0; l < e.length; l++) m += e[l].totalCount;
      var v = new Array(m),
        C = 0;
      for (l = 0; l < n; l++) for (u = 0; u < e.length; u++) l < i[u].length && (v[C++] = i[u][l]);
      for (l = 0; l < o; l++) for (u = 0; u < e.length; u++) l < a[u].length && (v[C++] = a[u][l]);
      return v;
    };
    for (var f = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
      }, g = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
      }, c = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (t) {
          for (var e = t << 10; c.getBCHDigit(e) - c.getBCHDigit(c.G15) >= 0;) e ^= c.G15 << c.getBCHDigit(e) - c.getBCHDigit(c.G15);
          return (t << 10 | e) ^ c.G15_MASK;
        },
        getBCHTypeNumber: function (t) {
          for (var e = t << 12; c.getBCHDigit(e) - c.getBCHDigit(c.G18) >= 0;) e ^= c.G18 << c.getBCHDigit(e) - c.getBCHDigit(c.G18);
          return t << 12 | e;
        },
        getBCHDigit: function (t) {
          for (var e = 0; 0 != t;) {
            e++;
            t >>>= 1;
          }
          return e;
        },
        getPatternPosition: function (t) {
          return c.PATTERN_POSITION_TABLE[t - 1];
        },
        getMask: function (t, e, r) {
          switch (t) {
            case 0:
              return (e + r) % 2 == 0;
            case 1:
              return e % 2 == 0;
            case 2:
              return r % 3 == 0;
            case 3:
              return (e + r) % 3 == 0;
            case 4:
              return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
            case 5:
              return e * r % 2 + e * r % 3 == 0;
            case 6:
              return (e * r % 2 + e * r % 3) % 2 == 0;
            case 7:
              return (e * r % 3 + (e + r) % 2) % 2 == 0;
            default:
              throw new Error("bad maskPattern:" + t);
          }
        },
        getErrorCorrectPolynomial: function (t) {
          for (var e = new p([1], 0), r = 0; r < t; r++) e = e.multiply(new p([1, d.gexp(r)], 0));
          return e;
        },
        getLengthInBits: function (t, e) {
          if (1 <= e && e < 10) switch (t) {
            case f.MODE_NUMBER:
              return 10;
            case f.MODE_ALPHA_NUM:
              return 9;
            case f.MODE_8BIT_BYTE:
            case f.MODE_KANJI:
              return 8;
            default:
              throw new Error("mode:" + t);
          } else if (e < 27) switch (t) {
            case f.MODE_NUMBER:
              return 12;
            case f.MODE_ALPHA_NUM:
              return 11;
            case f.MODE_8BIT_BYTE:
              return 16;
            case f.MODE_KANJI:
              return 10;
            default:
              throw new Error("mode:" + t);
          } else {
            if (!(e < 41)) throw new Error("type:" + e);
            switch (t) {
              case f.MODE_NUMBER:
                return 14;
              case f.MODE_ALPHA_NUM:
                return 13;
              case f.MODE_8BIT_BYTE:
                return 16;
              case f.MODE_KANJI:
                return 12;
              default:
                throw new Error("mode:" + t);
            }
          }
        },
        getLostPoint: function (t) {
          for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++) for (var o = 0; o < e; o++) {
            for (var i = 0, a = t.isDark(n, o), u = -1; u <= 1; u++) if (!(n + u < 0 || e <= n + u)) for (var s = -1; s <= 1; s++) o + s < 0 || e <= o + s || 0 == u && 0 == s || a == t.isDark(n + u, o + s) && i++;
            i > 5 && (r += 3 + i - 5);
          }
          for (n = 0; n < e - 1; n++) for (o = 0; o < e - 1; o++) {
            var h = 0;
            t.isDark(n, o) && h++;
            t.isDark(n + 1, o) && h++;
            t.isDark(n, o + 1) && h++;
            t.isDark(n + 1, o + 1) && h++;
            0 != h && 4 != h || (r += 3);
          }
          for (n = 0; n < e; n++) for (o = 0; o < e - 6; o++) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (r += 40);
          for (o = 0; o < e; o++) for (n = 0; n < e - 6; n++) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (r += 40);
          var l = 0;
          for (o = 0; o < e; o++) for (n = 0; n < e; n++) t.isDark(n, o) && l++;
          return r + Math.abs(100 * l / e / e - 50) / 5 * 10;
        }
      }, d = {
        glog: function (t) {
          if (t < 1) throw new Error("glog(" + t + ")");
          return d.LOG_TABLE[t];
        },
        gexp: function (t) {
          for (; t < 0;) t += 255;
          for (; t >= 256;) t -= 255;
          return d.EXP_TABLE[t];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
      }, m = 0; m < 8; m++) d.EXP_TABLE[m] = 1 << m;
    for (m = 8; m < 256; m++) d.EXP_TABLE[m] = d.EXP_TABLE[m - 4] ^ d.EXP_TABLE[m - 5] ^ d.EXP_TABLE[m - 6] ^ d.EXP_TABLE[m - 8];
    for (m = 0; m < 255; m++) d.LOG_TABLE[d.EXP_TABLE[m]] = m;
    function p(t, e) {
      if (null == t.length) throw new Error(t.length + "/" + e);
      for (var r = 0; r < t.length && 0 == t[r];) r++;
      this.num = new Array(t.length - r + e);
      for (var n = 0; n < t.length - r; n++) this.num[n] = t[n + r];
    }
    function v(t, e) {
      this.totalCount = t;
      this.dataCount = e;
    }
    function C() {
      this.buffer = new Array();
      this.length = 0;
    }
    function w(t) {
      var e, r, n, o;
      for (e = "", n = t.length, r = 0; r < n; r++) (o = t.charCodeAt(r)) >= 1 && o <= 127 ? e += t.charAt(r) : o > 2047 ? (e += String.fromCharCode(224 | o >> 12 & 15), e += String.fromCharCode(128 | o >> 6 & 63), e += String.fromCharCode(128 | o >> 0 & 63)) : (e += String.fromCharCode(192 | o >> 6 & 31), e += String.fromCharCode(128 | o >> 0 & 63));
      return e;
    }
    return p.prototype = {
      get: function (t) {
        return this.num[t];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (t) {
        for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++) for (var n = 0; n < t.getLength(); n++) e[r + n] ^= d.gexp(d.glog(this.get(r)) + d.glog(t.get(n)));
        return new p(e, 0);
      },
      mod: function (t) {
        if (this.getLength() - t.getLength() < 0) return this;
        for (var e = d.glog(this.get(0)) - d.glog(t.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++) r[n] = this.get(n);
        for (n = 0; n < t.getLength(); n++) r[n] ^= d.gexp(d.glog(t.get(n)) + e);
        return new p(r, 0).mod(t);
      }
    }, v.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], v.getRSBlocks = function (t, e) {
      var r = v.getRsBlockTable(t, e);
      if (null == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
      for (var n = r.length / 3, o = new Array(), i = 0; i < n; i++) for (var a = r[3 * i + 0], u = r[3 * i + 1], s = r[3 * i + 2], h = 0; h < a; h++) o.push(new v(u, s));
      return o;
    }, v.getRsBlockTable = function (t, e) {
      switch (e) {
        case g.L:
          return v.RS_BLOCK_TABLE[4 * (t - 1) + 0];
        case g.M:
          return v.RS_BLOCK_TABLE[4 * (t - 1) + 1];
        case g.Q:
          return v.RS_BLOCK_TABLE[4 * (t - 1) + 2];
        case g.H:
          return v.RS_BLOCK_TABLE[4 * (t - 1) + 3];
        default:
          return;
      }
    }, C.prototype = {
      get: function (t) {
        var e = Math.floor(t / 8);
        return 1 == (this.buffer[e] >>> 7 - t % 8 & 1);
      },
      put: function (t, e) {
        for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1));
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0);
        t && (this.buffer[e] |= 128 >>> this.length % 8);
        this.length++;
      }
    }, function (e, r) {
      if ((e = function e() {
        var r,
          n,
          o,
          h,
          l,
          f,
          g = arguments[0],
          c = 1,
          d = arguments.length,
          m = false;
        for ("boolean" == typeof g && (m = g, g = arguments[1] || {}, c = 2), (null == g || "object" != t(g) && "function" != typeof g) && (g = {}); c < d; ++c) if (null != (r = arguments[c])) for (n in r) {
          o = s(g, n);
          g !== (h = s(r, n)) && (m && h && (a(h) || (l = i(h))) ? (l ? (l = !1, f = o && i(o) ? o : []) : f = o && a(o) ? o : {}, u(g, {
            name: n,
            newValue: e(m, f, h)
          })) : void 0 !== h && u(g, {
            name: n,
            newValue: h
          }));
        }
        return g;
      }(!0, {
        canvasId: "myQrcode",
        text: "爱一个人就要勇敢说出来",
        width: 260,
        height: 260,
        padding: 20,
        typeNumber: -1,
        correctLevel: g.H,
        background: "#ffffff",
        foreground: "#000000",
        image: {
          imageResource: "",
          width: 80,
          height: 80,
          round: !0
        }
      }, e = e || {})).canvasId || e.canvas) {
        if (e.paddingColor || (e.paddingColor = e.background), r) {
          var n = new l(e.typeNumber, e.correctLevel);
          return n.addData(w(e.text)), n.make(), new Promise(function (t, e) {
            t(n);
          });
        }
        return new Promise(function (t, r) {
          return t(function () {
            var t = new l(e.typeNumber, e.correctLevel);
            t.addData(w(e.text));
            t.make();
            var r = wx.getSystemInfoSync().pixelRatio,
              n = e.canvas,
              o = n.getContext("2d");
            n.width = e.width * r;
            n.height = e.width * r;
            var i = n.width;
            o.fillStyle = e.paddingColor;
            o.fillRect(0, 0, i + 2 * e.padding, i + 2 * e.padding);
            for (var a = (i - 2 * e.padding) / t.getModuleCount(), u = (i - 2 * e.padding) / t.getModuleCount(), s = 0; s < t.getModuleCount(); s++) for (var h = 0; h < t.getModuleCount(); h++) {
              o.fillStyle = t.isDark(s, h) ? e.foreground : e.background;
              var f = Math.ceil((h + 1) * a) - Math.floor(h * a),
                g = Math.ceil((s + 1) * a) - Math.floor(s * a);
              o.fillRect(Math.round(h * a) + e.padding, Math.round(s * u) + e.padding, f, g);
            }
            if (e.image.imageResource) {
              var c = e.image.width * r,
                d = e.image.height * r,
                m = (i - c) / 2,
                p = (i - d) / 2;
              if (e.image.round) {
                var v = e.image.width * r + 30,
                  C = v / 2,
                  L = (i - v) / 2 + C;
                o.beginPath();
                o.arc(L, L, C, 0, 2 * Math.PI);
                o.fillStyle = "#ffffff";
                o.fill();
                o.restore();
                var B = c / 2,
                  y = m + B,
                  E = p + B;
                o.beginPath();
                o.arc(y, E, B, 0, 2 * Math.PI);
                o.clip();
                o.drawImage(e.image.imageResource, m, p, c, c);
                o.restore();
              } else {
                o.drawImage(e.image.imageResource, m, p, c, d);
                o.restore();
              }
            }
            return o;
          }());
        });
      }
      console.warn("please set canvasId or canvas!");
    };
  });
}, {
  isPage: false,
  isComponent: false,
  currentFile: "utils/weapp.qrcode.min.js"
});
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("app.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = require("@babel/runtime/helpers/interopRequireDefault");
  require("@babel/runtime/helpers/Arrayincludes");
  var t = e(require("@babel/runtime/regenerator")),
    a = require("@babel/runtime/helpers/slicedToArray"),
    n = require("@babel/runtime/helpers/asyncToGenerator"),
    r = require("@babel/runtime/helpers/objectSpread2");
  require("./utils/globalWatcher/index");
  var i = e(require("./utils/globalWatcher/apiProxy")),
    o = e(require("./utils/globalWatcher/reactive")),
    s = require("./utils/index"),
    u = e(require("./utils/sctrack/sensorsdata.esm.js")),
    c = e(require("./utils/sctrack/exposure.js")),
    l = require("./request/reportWXAd"),
    d = e(require("./utils/track")),
    g = require("./env"),
    p = require("./request/user"),
    f = require("./request/activity"),
    h = wx.getSystemInfoSync(),
    m = h.statusBarHeight,
    b = h.SDKVersion,
    x = wx.getMenuButtonBoundingClientRect(),
    v = x.width,
    w = x.height,
    I = x.top,
    S = wx.getStorageSync("userInfo") || {},
    D = wx.getStorageSync("accessToken") || "";
  App(r(r({}, i.default), {}, {
    onLaunch: function (e) {
      (0, l.setWXAdConfig)(e, this);
      this.checkUpdate();
      this.globalData = (0, o.default)(this.globalData);
      this.getAdInfo();
      d.default.init();
    },
    checkUpdate: function () {
      (0, p.getVersionInfo)().then(function (e) {
        var t = e.data,
          a = t.versionNo,
          n = t.isForce;
        if (!(0, s.isLatestVerison)(g.version, a) && n) {
          var r = wx.getUpdateManager();
          r.onUpdateReady(function () {
            r.applyUpdate();
          });
          r.onUpdateFailed(function () {
            wx.showModal({
              title: "更新提示",
              content: "请点击右上角“重新进入小程序”，以使用最新功能",
              showCancel: !1,
              success: function (e) {
                e.confirm && "function" == typeof wx.exitMiniProgram && wx.exitMiniProgram() && wx.exitMiniProgram();
              }
            });
          });
        }
      });
    },
    checkPhone: function () {
      var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return new Promise(function (a) {
        e.globalData.userInfo.mobilePhone ? a() : wx.navigateTo({
          url: "/pages/register/index" + t
        });
      });
    },
    getOpenId: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = wx.getStorageSync("wxId") || {},
        a = t.OPENID,
        n = t.UNIONID;
      return new Promise(function (t) {
        if (!n || e) return (0, p.code2Session)().then(function (e) {
          var a = e.openid,
            n = e.unionid;
          wx.setStorageSync("wxId", {
            OPENID: a,
            UNIONID: n
          });
          t({
            OPENID: a,
            UNIONID: n
          });
        });
        t({
          OPENID: a,
          UNIONID: n
        });
      });
    },
    getUserLocation: function () {
      var e = this;
      return new Promise(function (t) {
        if (e.invisibleData.latitude) return t(e.invisibleData);
        wx.getSetting({
          success: function (a) {
            0 == a.authSetting["scope.userLocation"] ? (e.globalData.userLocationPermission = !1, t({})) : wx.getLocation({
              type: "gcj02",
              success: function (a) {
                var n = a.longitude,
                  r = a.latitude;
                e.globalData.userLocationPermission = !0;
                Object.assign(e.invisibleData, {
                  longitude: n,
                  latitude: r
                });
                t({
                  longitude: n,
                  latitude: r
                });
              },
              fail: function () {
                e.invisibleData.latitude || (e.globalData.userLocationPermission = !1);
                t(e.invisibleData);
              }
            });
          },
          fail: function () {
            t({});
          }
        });
      });
    },
    navigate: function (e) {
      var r = this;
      return n(t.default.mark(function n() {
        var i, o, u, c, l, d, g, p, f, h, m, b, x, v, w, I, S, D, P;
        return t.default.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (e) {
                t.next = 2;
                break;
              }
              return t.abrupt("return");
            case 2:
              if (!e.startsWith("http://") && !e.startsWith("https://")) {
                t.next = 6;
                break;
              }
              wx.navigateTo({
                url: "/pages/webView/index?url=".concat(encodeURIComponent(e))
              });
              t.next = 41;
              break;
            case 6:
              if (!e.startsWith("/pages/menu/")) {
                t.next = 14;
                break;
              }
              i = (0, s.getUrlParam)(e);
              o = getCurrentPages().pop() || {};
              getApp().productName = i.productName;
              getApp().categoryNameSale = i.categoryNameSale;
              "pages/menu/index" === o.route ? (o.openGoodsDetail({
                productName: i.productName
              }), o.appointCategory({
                categoryNameSale: i.categoryNameSale
              })) : (getApp().menuOptions = i, wx.switchTab({
                url: "/pages/menu/index"
              }));
              t.next = 41;
              break;
            case 14:
              if (!e.startsWith("/pages")) {
                t.next = 27;
                break;
              }
              if (u = ["/pages/index/", "/pages/order/", "/pages/mine/"].some(function (t) {
                return e.includes(t);
              }), c = ["/pages/coupon/mine/", "/pages/coupon/cdKey/", "/pages/customer-center/rights/", "/pages/customer-center/coin/", "/pages/customer-center/record/"].some(function (t) {
                return e.includes(t);
              }), !u) {
                t.next = 21;
                break;
              }
              wx.switchTab({
                url: e
              });
              t.next = 25;
              break;
            case 21:
              if (!c) {
                t.next = 24;
                break;
              }
              return t.next = 24, r.checkPhone();
            case 24:
              wx.navigateTo({
                url: e
              });
            case 25:
              t.next = 41;
              break;
            case 27:
              if (!e.startsWith("thirdMini://")) {
                t.next = 33;
                break;
              }
              l = e.replace("thirdMini://", "").replace(".html", "").split("?appId=");
              d = a(l, 2);
              g = d[0];
              p = d[1];
              f = p.split("&extraData=");
              h = a(f, 2);
              m = h[0];
              b = h[1];
              wx.navigateToMiniProgram({
                path: g,
                appId: m,
                extraData: b ? JSON.parse(b) : {}
              });
              t.next = 41;
              break;
            case 33:
              if (!e.startsWith("wxVideo://")) {
                t.next = 40;
                break;
              }
              if (!(getApp().SDKVersion < "2.19.2")) {
                t.next = 36;
                break;
              }
              return t.abrupt("return", wx.showModal({
                title: "无法跳转视频号视频",
                content: "当前微信版本过低，请升级到最新微信版本后重试。"
              }));
            case 36:
              x = (0, s.getUrlParam)(e);
              v = x.finderUserName;
              w = x.feedId;
              wx.openChannelsActivity({
                finderUserName: v,
                feedId: w
              });
              t.next = 41;
              break;
            case 40:
              e.startsWith("wxLive://") && (I = (0, s.getUrlParam)(e), S = I.finderUserName, D = I.feedId, P = I.nonceId, wx.openChannelsLive({
                finderUserName: S,
                feedId: D,
                nonceId: P
              }));
            case 41:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    onPageNotFound: function () {
      wx.reLaunch({
        url: "pages/index/index"
      });
    },
    logOut: function () {
      this.accessToken = "";
      this.globalData.userInfo = {};
      this.removeStorageSync("accessToken");
      this.removeStorageSync("userInfo");
      this.removeStorageSync("mobilePhone");
    },
    getAdInfo: function () {
      var e = this;
      (0, f.getAdList)({
        adPlaceCodeList: ["WechartStartSplash"]
      }).then(function (t) {
        if (t.length) {
          var a = t.find(function (e) {
            return "WechartStartSplash" == e.adPlaceCode;
          }) || {};
          e.globalData.fullScreenAd = a.adInfoList && a.adInfoList.length ? a.adInfoList : [];
        }
      });
    },
    initScTrack: function () {
      try {
        global.sensors_data_pre_config = {
          is_compliance_enabled: !0
        };
        this.globalData.isShowPrivacy || (u.default.enableDataCollect(), u.default.init({
          name: "sensors",
          server_url: "https://scr.xingyunka.com/sa?project=".concat(this.globalData.isProMini ? "production" : "default"),
          encrypt_storage: !0,
          autoTrack: {
            appLaunch: !0,
            appShow: !0,
            appHide: !0,
            pageShow: !0,
            pageShare: !0,
            mpClick: !1,
            mpFavorite: !0,
            pageLeave: !1
          },
          show_log: !1
        }), u.default.registerApp({
          platform_name: "微信小程序",
          is_login: function () {
            return !!getApp().globalData.userInfo.mobilePhone;
          }
        }), this.getOpenId().then(function (e) {
          var t = e.OPENID,
            a = e.UNIONID;
          u.default.bindOpenid(t);
          u.default.bindUnionid(a);
        }));
      } catch (e) {
        console.log(e);
      }
    },
    Exposure: c.default,
    globalData: {
      fullScreenAd: [],
      userInfo: S,
      couponNum: 0,
      selectedStore: {},
      currentAddress: {},
      statusBarHeight: m,
      navBarHeight: w + 2 * (I - m),
      menuButtonWidth: v,
      userLocationPermission: !0,
      isShowPrivacy: !1,
      defaultCancelFee: 0,
      fromApp: !1,
      isProMini: g.isProMini
    },
    configData: {},
    menuOptions: {},
    accessToken: D,
    SDKVersion: b,
    invisibleData: {
      longitude: 0,
      latitude: 0
    }
  }));
}, {
  isPage: false,
  isComponent: false,
  currentFile: "app.js"
});
require("app.js");