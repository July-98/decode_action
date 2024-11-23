//Sat Nov 23 2024 17:12:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("霸王茶姬"),
  axios = require("axios"),
  axiosRetry = require("axios-retry").default,
  {
    sendNotify
  } = require("./sendNotify"),
  SyncRequest = require("sync-request"),
  CryptoJS = require("crypto-js");
let notifyStr = "",
  appid = atob("d3hhZmVjNmY4NDIyY2IzNTdi");
(async () => {
  axiosRetry(axios, {
    retries: 3
  });
  checkVersion("bwcj.js", "de183903b7ed807202d712c083672c6c");
  const _0x2fa40b = process.env.bwcj_ck;
  if (!_0x2fa40b) {
    logAndNotify("bwcj_ck");
    return;
  }
  let _0x5a94ec = _0x2fa40b.replaceAll("&", "\n").split("\n");
  for (let _0x53ce86 = 0; _0x53ce86 < _0x5a94ec.length; _0x53ce86++) {
    await delay(5000);
    if (_0x5a94ec[_0x53ce86].indexOf("#") === -1) {
      logAndNotify("账号【" + (_0x53ce86 + 1) + "】 ck格式有变化，新版本需要有userId☹");
      continue;
    }
    const _0x43e2e3 = _0x5a94ec[_0x53ce86].split("#")[0],
      _0xaa5d9b = _0x5a94ec[_0x53ce86].split("#")[1];
    logAndNotify("🧐" + _0xaa5d9b + "🧐");
    const _0x443a83 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x43e2e3);
    if (!_0x443a83.data.status) {
      logAndNotify("账号【" + (_0x53ce86 + 1) + "】 登录失败☹");
      continue;
    }
    const _0x4fdfad = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userSignStatistics", _0x43e2e3, {
      activityId: "947079313798000641",
      appid: appid
    });
    if (_0x4fdfad.data.status) {
      logAndNotify("账号【" + (_0x53ce86 + 1) + "】 连续签到" + _0x4fdfad.data.data.signDays + "天");
      if (_0x4fdfad.data.data.signStatus != 1) {
        const _0x25f523 = new Date().getTime(),
          _0x41195e = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/takePartInSign", _0x43e2e3, {
            activityId: "947079313798000641",
            appid: appid,
            storeId: 49006,
            timestamp: _0x25f523,
            signature: sgin(_0x25f523, _0xaa5d9b),
            store_id: 49006
          });
        if (!_0x41195e.data.status) {
          _0x41195e.data.message.indexOf("已签到") !== -1 && logAndNotify("账号【" + (_0x53ce86 + 1) + "】 签到失败：【" + _0x41195e.data.message + "】");
          if (_0x41195e.data.message.indexOf("请重试") !== -1) {
            logAndNotify("账号【" + (_0x53ce86 + 1) + "】 签到失败：【" + _0x41195e.data.message + "】");
            logAndNotify("账号【" + (_0x53ce86 + 1) + "】 触发ip限制 本次不再执行脚本，号多的每天多运行几次脚本，间隔2小时以上");
            break;
          } else {
            logAndNotify("账号【" + (_0x53ce86 + 1) + "】 签到失败☹：【" + _0x41195e.data.message + "】");
          }
        } else {
          logAndNotify("账号【" + (_0x53ce86 + 1) + "】 签到成功");
        }
      } else {
        logAndNotify("账号【" + (_0x53ce86 + 1) + "】 已签到");
      }
    }
    const _0x3fad70 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x43e2e3);
    _0x3fad70.data.status && logAndNotify("账号【" + (_0x53ce86 + 1) + "】 积分：【" + _0x3fad70.data.data.customerAssertInfo.integral + "】");
    const _0x5a0e9c = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userReward", _0x43e2e3, {
      activityId: "947079313798000641",
      appid: appid,
      pageNo: 1,
      pageSize: 30
    });
    if (_0x5a0e9c.data.status) {
      const _0x56690a = _0x5a0e9c.data.data.list;
      for (let _0x36e2e1 = 0; _0x36e2e1 < _0x56690a.length; _0x36e2e1++) {
        _0x56690a[_0x36e2e1].rewardType === 1 && logAndNotify("账号【" + (_0x53ce86 + 1) + "】 奖品领取时间【" + _0x56690a[_0x36e2e1].date + "】【" + _0x56690a[_0x36e2e1].rewardName + "】");
      }
    }
  }
})().catch(_0x21ce3e => {
  logAndNotify(_0x21ce3e);
}).finally(() => {
  pushLog("bwcj.js", notifyStr);
  sendNotify("霸王茶姬", notifyStr);
  $.done();
});
async function sendPostRequest(_0x1958e1, _0x4a6119, _0x594c50) {
  try {
    const _0xad9fa8 = {
        scene: 1027,
        "Qm-From": "wechat",
        "store-id": 49006,
        "Qm-From-Type": "catering",
        Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
      },
      _0x5daee0 = {
        ..._0xad9fa8,
        ...{
          "Qm-User-Token": _0x4a6119
        }
      },
      _0x410734 = axios.create({
        headers: _0x5daee0,
        timeout: 60000
      });
    return _0x410734.post(_0x1958e1, _0x594c50);
  } catch (_0x348669) {
    if (axios.isAxiosError(_0x348669)) {
      if (_0x348669.code === "ECONNABORTED" && _0x348669.message.includes("timeout")) {
        console.error("请求超时：", _0x348669.message);
      } else {
        console.error("其他错误：", _0x348669.message);
      }
    } else {
      console.error("未知错误：", _0x348669);
    }
    throw _0x348669;
  }
}
async function sendGetRequest(_0x275233, _0x3a5fb5) {
  try {
    const _0x3ce28a = {
        scene: 1027,
        "Qm-From": "wechat",
        "store-id": 49006,
        "Qm-From-Type": "catering",
        Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
      },
      _0x2c3754 = {
        ..._0x3ce28a,
        ...{
          "Qm-User-Token": _0x3a5fb5
        }
      },
      _0x4981fc = axios.create({
        headers: _0x2c3754,
        timeout: 60000
      });
    return _0x4981fc.get(_0x275233);
  } catch (_0x80a85e) {
    if (axios.isAxiosError(_0x80a85e)) {
      if (_0x80a85e.code === "ECONNABORTED" && _0x80a85e.message.includes("timeout")) {
        console.error("请求超时：", _0x80a85e.message);
      } else {
        console.error("其他错误：", _0x80a85e.message);
      }
    } else {
      console.error("未知错误：", _0x80a85e);
    }
    throw _0x80a85e;
  }
}
function delay(_0x73ee40) {
  return new Promise(_0x353c37 => setTimeout(_0x353c37, _0x73ee40));
}
function logAndNotify(_0x5da955) {
  1;
  $.log(_0x5da955);
  notifyStr += _0x5da955;
  notifyStr += "\n";
}
function sgin(_0x3c1a4f, _0x52c117) {
  var _0x5205fc = "947079313798000641",
    _0xffe179 = 49006,
    _0x1b650a = _0xffe179 ? _0xffe179.toString() : undefined,
    _0x47da85 = {
      activityId: _0x5205fc,
      sellerId: _0x1b650a,
      timestamp: _0x3c1a4f,
      userId: _0x52c117
    },
    _0x5137cc = Object.keys(_0x47da85).sort(),
    _0x59eab8 = _0x5137cc.reduce(function (_0x3ffb82, _0x5da7d9) {
      _0x3ffb82[_0x5da7d9] = _0x47da85[_0x5da7d9];
      return _0x3ffb82;
    }, {}),
    _0x424e8e = Object.entries(_0x59eab8).map(function (_0x2ad119) {
      var [_0x2224c1, _0x35592f] = _0x2ad119;
      return _0x2224c1 + "=" + _0x35592f;
    }).join("&") + "&key=" + _0x5205fc.split("").reverse().join(""),
    _0x5b39c0 = CryptoJS.MD5(_0x424e8e).toString(CryptoJS.enc.Hex).toUpperCase();
  return _0x5b39c0;
}
function Env(_0x59dd4b, _0x533201) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x475e19 {
    constructor(_0x36e652) {
      this.env = _0x36e652;
    }
    send(_0x671fb, _0x574886 = "GET") {
      _0x671fb = "string" == typeof _0x671fb ? {
        url: _0x671fb
      } : _0x671fb;
      let _0x1b82c2 = this.get;
      "POST" === _0x574886 && (_0x1b82c2 = this.post);
      return new Promise((_0x435ce2, _0x233837) => {
        _0x1b82c2.call(this, _0x671fb, (_0x2dd81b, _0x22624e, _0x53f202) => {
          _0x2dd81b ? _0x233837(_0x2dd81b) : _0x435ce2(_0x22624e);
        });
      });
    }
    get(_0x143bd4) {
      return this.send.call(this.env, _0x143bd4);
    }
    post(_0x316e2e) {
      return this.send.call(this.env, _0x316e2e, "POST");
    }
  }
  return new class {
    constructor(_0x59b95f, _0x2609e2) {
      this.name = _0x59b95f;
      this.http = new _0x475e19(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2609e2);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x2c8f45, _0x3ae5a0 = null) {
      try {
        return JSON.parse(_0x2c8f45);
      } catch {
        return _0x3ae5a0;
      }
    }
    toStr(_0x22791d, _0x6da56c = null) {
      try {
        return JSON.stringify(_0x22791d);
      } catch {
        return _0x6da56c;
      }
    }
    getjson(_0x3c40bc, _0x1b24f9) {
      let _0x55a8ec = _0x1b24f9;
      const _0x52d941 = this.getdata(_0x3c40bc);
      if (_0x52d941) {
        try {
          _0x55a8ec = JSON.parse(this.getdata(_0x3c40bc));
        } catch {}
      }
      return _0x55a8ec;
    }
    setjson(_0x4af627, _0x11f646) {
      try {
        return this.setdata(JSON.stringify(_0x4af627), _0x11f646);
      } catch {
        return !1;
      }
    }
    getScript(_0x3e1322) {
      return new Promise(_0x6185da => {
        this.get({
          url: _0x3e1322
        }, (_0x1d0942, _0x1c6f01, _0xfbe805) => _0x6185da(_0xfbe805));
      });
    }
    runScript(_0x283496, _0x5cfd29) {
      return new Promise(_0x24c1bc => {
        let _0x10c3cc = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x10c3cc = _0x10c3cc ? _0x10c3cc.replace(/\n/g, "").trim() : _0x10c3cc;
        let _0x45f9a7 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x45f9a7 = _0x45f9a7 ? 1 * _0x45f9a7 : 20;
        _0x45f9a7 = _0x5cfd29 && _0x5cfd29.timeout ? _0x5cfd29.timeout : _0x45f9a7;
        const [_0x446eba, _0x4057b0] = _0x10c3cc.split("@"),
          _0x2cc9f3 = {
            url: "http://" + _0x4057b0 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x283496,
              mock_type: "cron",
              timeout: _0x45f9a7
            },
            headers: {
              "X-Key": _0x446eba,
              Accept: "*/*"
            }
          };
        this.post(_0x2cc9f3, (_0x5a5544, _0x56fc33, _0x89d860) => _0x24c1bc(_0x89d860));
      }).catch(_0x257aad => this.logErr(_0x257aad));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x37caaa = this.path.resolve(this.dataFile),
          _0x2080b7 = this.path.resolve(process.cwd(), this.dataFile),
          _0x33937d = this.fs.existsSync(_0x37caaa),
          _0x4c85d5 = !_0x33937d && this.fs.existsSync(_0x2080b7);
        if (!_0x33937d && !_0x4c85d5) {
          return {};
        }
        {
          const _0x19b428 = _0x33937d ? _0x37caaa : _0x2080b7;
          try {
            return JSON.parse(this.fs.readFileSync(_0x19b428));
          } catch (_0x9a3d38) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2fed48 = this.path.resolve(this.dataFile),
          _0x1d9205 = this.path.resolve(process.cwd(), this.dataFile),
          _0x5ab9a1 = this.fs.existsSync(_0x2fed48),
          _0x42dfcb = !_0x5ab9a1 && this.fs.existsSync(_0x1d9205),
          _0x260302 = JSON.stringify(this.data);
        _0x5ab9a1 ? this.fs.writeFileSync(_0x2fed48, _0x260302) : _0x42dfcb ? this.fs.writeFileSync(_0x1d9205, _0x260302) : this.fs.writeFileSync(_0x2fed48, _0x260302);
      }
    }
    lodash_get(_0x7172f5, _0x4a31e6, _0x4d5706) {
      const _0x4ca94e = _0x4a31e6.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x498a7f = _0x7172f5;
      for (const _0x10e363 of _0x4ca94e) if (_0x498a7f = Object(_0x498a7f)[_0x10e363], void 0 === _0x498a7f) {
        return _0x4d5706;
      }
      return _0x498a7f;
    }
    lodash_set(_0xc0bf9d, _0x28b802, _0x4d8057) {
      return Object(_0xc0bf9d) !== _0xc0bf9d ? _0xc0bf9d : (Array.isArray(_0x28b802) || (_0x28b802 = _0x28b802.toString().match(/[^.[\]]+/g) || []), _0x28b802.slice(0, -1).reduce((_0x25d2a0, _0x5745ae, _0x37e2a5) => Object(_0x25d2a0[_0x5745ae]) === _0x25d2a0[_0x5745ae] ? _0x25d2a0[_0x5745ae] : _0x25d2a0[_0x5745ae] = Math.abs(_0x28b802[_0x37e2a5 + 1]) >> 0 == +_0x28b802[_0x37e2a5 + 1] ? [] : {}, _0xc0bf9d)[_0x28b802[_0x28b802.length - 1]] = _0x4d8057, _0xc0bf9d);
    }
    getdata(_0x491de5) {
      let _0x579616 = this.getval(_0x491de5);
      if (/^@/.test(_0x491de5)) {
        const [, _0x2e90d7, _0x5d6005] = /^@(.*?)\.(.*?)$/.exec(_0x491de5),
          _0x5e36e5 = _0x2e90d7 ? this.getval(_0x2e90d7) : "";
        if (_0x5e36e5) {
          try {
            const _0x5937f2 = JSON.parse(_0x5e36e5);
            _0x579616 = _0x5937f2 ? this.lodash_get(_0x5937f2, _0x5d6005, "") : _0x579616;
          } catch (_0x227b13) {
            _0x579616 = "";
          }
        }
      }
      return _0x579616;
    }
    setdata(_0xa252f2, _0x47df2d) {
      let _0x4bb07b = !1;
      if (/^@/.test(_0x47df2d)) {
        const [, _0x424e99, _0x517e27] = /^@(.*?)\.(.*?)$/.exec(_0x47df2d),
          _0x4a2e0a = this.getval(_0x424e99),
          _0x5e1ffb = _0x424e99 ? "null" === _0x4a2e0a ? null : _0x4a2e0a || "{}" : "{}";
        try {
          const _0x395527 = JSON.parse(_0x5e1ffb);
          this.lodash_set(_0x395527, _0x517e27, _0xa252f2);
          _0x4bb07b = this.setval(JSON.stringify(_0x395527), _0x424e99);
        } catch (_0x209c2a) {
          const _0x26cfb6 = {};
          this.lodash_set(_0x26cfb6, _0x517e27, _0xa252f2);
          _0x4bb07b = this.setval(JSON.stringify(_0x26cfb6), _0x424e99);
        }
      } else {
        _0x4bb07b = this.setval(_0xa252f2, _0x47df2d);
      }
      return _0x4bb07b;
    }
    getval(_0x4cda99) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4cda99) : this.isQuanX() ? $prefs.valueForKey(_0x4cda99) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4cda99]) : this.data && this.data[_0x4cda99] || null;
    }
    setval(_0x4d8e97, _0x20be0d) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4d8e97, _0x20be0d) : this.isQuanX() ? $prefs.setValueForKey(_0x4d8e97, _0x20be0d) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x20be0d] = _0x4d8e97, this.writedata(), !0) : this.data && this.data[_0x20be0d] || null;
    }
    initGotEnv(_0x2a280a) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x2a280a && (_0x2a280a.headers = _0x2a280a.headers ? _0x2a280a.headers : {}, void 0 === _0x2a280a.headers.Cookie && void 0 === _0x2a280a.cookieJar && (_0x2a280a.cookieJar = this.ckjar));
    }
    get(_0xb17a0a, _0x3409a1 = () => {}) {
      _0xb17a0a.headers && (delete _0xb17a0a.headers["Content-Type"], delete _0xb17a0a.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0xb17a0a.headers = _0xb17a0a.headers || {}, Object.assign(_0xb17a0a.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0xb17a0a, (_0x199bfb, _0x6508c5, _0x232e90) => {
        !_0x199bfb && _0x6508c5 && (_0x6508c5.body = _0x232e90, _0x6508c5.statusCode = _0x6508c5.status);
        _0x3409a1(_0x199bfb, _0x6508c5, _0x232e90);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0xb17a0a.opts = _0xb17a0a.opts || {}, Object.assign(_0xb17a0a.opts, {
        hints: !1
      })), $task.fetch(_0xb17a0a).then(_0x2fc9f9 => {
        const {
          statusCode: _0x11c2c5,
          statusCode: _0x5ad534,
          headers: _0x7fb33f,
          body: _0x9474b8
        } = _0x2fc9f9;
        _0x3409a1(null, {
          status: _0x11c2c5,
          statusCode: _0x5ad534,
          headers: _0x7fb33f,
          body: _0x9474b8
        }, _0x9474b8);
      }, _0x5a0c42 => _0x3409a1(_0x5a0c42))) : this.isNode() && (this.initGotEnv(_0xb17a0a), this.got(_0xb17a0a).on("redirect", (_0x203d1a, _0x3578de) => {
        try {
          if (_0x203d1a.headers["set-cookie"]) {
            const _0x2bf8c0 = _0x203d1a.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x2bf8c0 && this.ckjar.setCookieSync(_0x2bf8c0, null);
            _0x3578de.cookieJar = this.ckjar;
          }
        } catch (_0xd229ac) {
          this.logErr(_0xd229ac);
        }
      }).then(_0x14b538 => {
        const {
          statusCode: _0x4bdb93,
          statusCode: _0x243133,
          headers: _0x48626b,
          body: _0xa9e05c
        } = _0x14b538;
        _0x3409a1(null, {
          status: _0x4bdb93,
          statusCode: _0x243133,
          headers: _0x48626b,
          body: _0xa9e05c
        }, _0xa9e05c);
      }, _0x2856ed => {
        const {
          message: _0x1e2e2f,
          response: _0x167abf
        } = _0x2856ed;
        _0x3409a1(_0x1e2e2f, _0x167abf, _0x167abf && _0x167abf.body);
      }));
    }
    post(_0x4b43ad, _0x165fa9 = () => {}) {
      if (_0x4b43ad.body && _0x4b43ad.headers && !_0x4b43ad.headers["Content-Type"] && (_0x4b43ad.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x4b43ad.headers && delete _0x4b43ad.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x4b43ad.headers = _0x4b43ad.headers || {}, Object.assign(_0x4b43ad.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x4b43ad, (_0x28d996, _0x1daac0, _0x4522ec) => {
          !_0x28d996 && _0x1daac0 && (_0x1daac0.body = _0x4522ec, _0x1daac0.statusCode = _0x1daac0.status);
          _0x165fa9(_0x28d996, _0x1daac0, _0x4522ec);
        });
      } else {
        if (this.isQuanX()) {
          _0x4b43ad.method = "POST";
          this.isNeedRewrite && (_0x4b43ad.opts = _0x4b43ad.opts || {}, Object.assign(_0x4b43ad.opts, {
            hints: !1
          }));
          $task.fetch(_0x4b43ad).then(_0x324e89 => {
            const {
              statusCode: _0x2e4df,
              statusCode: _0x1d7ca6,
              headers: _0x10409e,
              body: _0xc0f13f
            } = _0x324e89;
            _0x165fa9(null, {
              status: _0x2e4df,
              statusCode: _0x1d7ca6,
              headers: _0x10409e,
              body: _0xc0f13f
            }, _0xc0f13f);
          }, _0x4e46c9 => _0x165fa9(_0x4e46c9));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4b43ad);
            const {
              url: _0x24cd2b,
              ..._0x2b8bfe
            } = _0x4b43ad;
            this.got.post(_0x24cd2b, _0x2b8bfe).then(_0x28c205 => {
              const {
                statusCode: _0x4be47e,
                statusCode: _0x136174,
                headers: _0x48f617,
                body: _0x4d2967
              } = _0x28c205;
              _0x165fa9(null, {
                status: _0x4be47e,
                statusCode: _0x136174,
                headers: _0x48f617,
                body: _0x4d2967
              }, _0x4d2967);
            }, _0x4645da => {
              const {
                message: _0x268a4e,
                response: _0x4de373
              } = _0x4645da;
              _0x165fa9(_0x268a4e, _0x4de373, _0x4de373 && _0x4de373.body);
            });
          }
        }
      }
    }
    time(_0x1ee2bf, _0x50b198 = null) {
      const _0x5a9a06 = _0x50b198 ? new Date(_0x50b198) : new Date();
      let _0x33cb4b = {
        "M+": _0x5a9a06.getMonth() + 1,
        "d+": _0x5a9a06.getDate(),
        "H+": _0x5a9a06.getHours(),
        "m+": _0x5a9a06.getMinutes(),
        "s+": _0x5a9a06.getSeconds(),
        "q+": Math.floor((_0x5a9a06.getMonth() + 3) / 3),
        S: _0x5a9a06.getMilliseconds()
      };
      /(y+)/.test(_0x1ee2bf) && (_0x1ee2bf = _0x1ee2bf.replace(RegExp.$1, (_0x5a9a06.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x524616 in _0x33cb4b) new RegExp("(" + _0x524616 + ")").test(_0x1ee2bf) && (_0x1ee2bf = _0x1ee2bf.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x33cb4b[_0x524616] : ("00" + _0x33cb4b[_0x524616]).substr(("" + _0x33cb4b[_0x524616]).length)));
      return _0x1ee2bf;
    }
    msg(_0x1269e1 = _0x59dd4b, _0x1285c0 = "", _0x527109 = "", _0x2862c4) {
      const _0x43f4a9 = _0x4f20dd => {
        if (!_0x4f20dd) {
          return _0x4f20dd;
        }
        if ("string" == typeof _0x4f20dd) {
          return this.isLoon() ? _0x4f20dd : this.isQuanX() ? {
            "open-url": _0x4f20dd
          } : this.isSurge() ? {
            url: _0x4f20dd
          } : void 0;
        }
        if ("object" == typeof _0x4f20dd) {
          if (this.isLoon()) {
            let _0x2b26f3 = _0x4f20dd.openUrl || _0x4f20dd.url || _0x4f20dd["open-url"],
              _0x42269a = _0x4f20dd.mediaUrl || _0x4f20dd["media-url"];
            return {
              openUrl: _0x2b26f3,
              mediaUrl: _0x42269a
            };
          }
          if (this.isQuanX()) {
            let _0x17e1ae = _0x4f20dd["open-url"] || _0x4f20dd.url || _0x4f20dd.openUrl,
              _0xc12581 = _0x4f20dd["media-url"] || _0x4f20dd.mediaUrl;
            return {
              "open-url": _0x17e1ae,
              "media-url": _0xc12581
            };
          }
          if (this.isSurge()) {
            let _0x522000 = _0x4f20dd.url || _0x4f20dd.openUrl || _0x4f20dd["open-url"];
            return {
              url: _0x522000
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1269e1, _0x1285c0, _0x527109, _0x43f4a9(_0x2862c4)) : this.isQuanX() && $notify(_0x1269e1, _0x1285c0, _0x527109, _0x43f4a9(_0x2862c4))), !this.isMuteLog) {
        let _0x1f3b55 = ["", "==============📣系统通知📣=============="];
        _0x1f3b55.push(_0x1269e1);
        _0x1285c0 && _0x1f3b55.push(_0x1285c0);
        _0x527109 && _0x1f3b55.push(_0x527109);
        console.log(_0x1f3b55.join("\n"));
        this.logs = this.logs.concat(_0x1f3b55);
      }
    }
    log(..._0x15c007) {
      _0x15c007.length > 0 && (this.logs = [...this.logs, ..._0x15c007]);
      console.log(_0x15c007.join(this.logSeparator));
    }
    logErr(_0x2ae797, _0xc09624) {
      const _0x3eb533 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3eb533 ? this.log("", "❗️" + this.name + ", 错误!", _0x2ae797.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x2ae797);
    }
    wait(_0x9fd04d) {
      return new Promise(_0x58d479 => setTimeout(_0x58d479, _0x9fd04d));
    }
    done(_0x16916f = {}) {
      const _0x833aa2 = new Date().getTime(),
        _0x566931 = (_0x833aa2 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x566931 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x16916f);
    }
  }(_0x59dd4b, _0x533201);
}
function checkVersion(_0x264b30, _0x2ab54d) {
  try {
    logAndNotify("文件md5：" + _0x2ab54d);
    const _0x2ae61f = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x264b30 + "&fileMd5=" + _0x2ab54d),
      _0x13fae9 = JSON.parse(_0x2ae61f.getBody("utf8"));
    _0x13fae9.code === 301 ? process.exit(0) : logAndNotify(_0x13fae9.data);
  } catch (_0x268b1d) {
    logAndNotify("版本检查失败:", _0x268b1d);
  }
}
function pushLog(_0x11c25d, _0x2841c1) {
  try {
    const _0x1d0995 = "fileName=" + encodeURIComponent(_0x11c25d) + "&log=" + encodeURIComponent(_0x2841c1);
    SyncRequest("POST", "https://checktoke.filegear-sg.me/api/update/pushLog", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: _0x1d0995
    });
  } catch (_0x5d657a) {}
}