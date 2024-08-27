//Tue Aug 27 2024 08:18:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    post,
    get,
    sleep,
    getRandomInt
  } = require("./common/tool"),
  url = require("url"),
  {
    get_wx_read_num
  } = require("./common/wx_read_num"),
  md5 = require("md5"),
  moment = require("moment"),
  querystring = require("querystring"),
  axios = require("axios"),
  fs = require("fs"),
  http = require("http");
let checkDict = [];
function save_list(_0x241b7c) {
  fs.writeFile(__dirname + "/可乐阅读检测文章.json", JSON.stringify(_0x241b7c), "utf8", _0x5d4978 => {
    if (_0x5d4978) {
      console.log(_0x5d4978);
      return;
    }
  });
}
save_list(checkDict);
function loading_list() {
  fs.readFile(__dirname + "/可乐阅读检测文章.json", "utf8", (_0x1a97a4, _0x376dbe) => {
    if (_0x1a97a4) {
      console.log(_0x1a97a4.message);
      return;
    }
    try {
      cookie_list = JSON.parse(_0x376dbe);
      for (const _0x7e8af8 of cookie_list) {
        !checkDict.includes(_0x7e8af8) && checkDict.push(_0x7e8af8);
      }
    } catch (_0x5dfcc5) {
      console.log(_0x5dfcc5);
    }
  });
}
loading_list();
class App {
  constructor(_0x4144f0) {
    this.headers = {
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      Cookie: _0x4144f0,
      Accept: "Mozilla/5.0 (Linux; Android 13; 2112123AC Build/TKQ1.220829.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5317 MMWEBSDK/20230805 MMWEBID/8978 MicroMessenger/8.0.42.2460(0x28002A58) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64"
    };
    this.cookie = _0x4144f0;
    this.user_info = null;
    this.read_url = "";
    this.cookie_read = "";
    this.read_query = false;
    this.read_host = false;
    this.is_read = false;
    this.host = false;
    this.hostname = false;
  }
  log(..._0x325f98) {
    console.log(this.user_info.username, "---", ..._0x325f98);
  }
  async getuserinfo() {
    if (!this.host) {
      let _0x33560d = await get("https://m.cdcd.plus/entry/new_url");
      if (_0x33560d && _0x33560d.data) {
        if (_0x33560d.data.url_str) {
          let _0xbb4b23 = await new Promise((_0x2c38ee, _0x192bc2) => {
            axios({
              url: _0x33560d.data.url_str,
              method: "GET",
              maxRedirects: 0
            }).then(_0x314e8e => {
              _0x2c38ee(_0x314e8e);
            }).catch(_0x106cc6 => {
              _0x2c38ee(_0x106cc6);
            });
          });
          if (_0xbb4b23 && _0xbb4b23.response && _0xbb4b23.response.headers && _0xbb4b23.response.headers.location) {
            let _0xf0978e = url.parse(_0xbb4b23.response.headers.location, true);
            this.host = _0xf0978e.protocol + "//" + _0xf0978e.hostname;
            this.hostname = _0xf0978e.hostname;
            console.log("获取到入口地址", this.host);
          } else {
            console.log("获取阅读重定向域名失败");
            return;
          }
        } else {
          console.log("获取阅读域名失败", _0x33560d.data);
          return;
        }
      } else {
        console.log("获取阅读域名失败");
        return;
      }
    }
    await get(this.host + "/new", null, this.headers);
    let _0x460581 = await get(this.host + "/tuijian", null, this.headers);
    if (_0x460581 && _0x460581.data) {
      if (_0x460581.data.code == 0) {
        let _0x15b2f2 = _0x460581.data.data;
        if (_0x15b2f2) {
          this.user_info = _0x15b2f2.user;
          console.log("登录成功 " + this.user_info.username + " uid: " + this.user_info.uid + " score:" + Number(this.user_info.score) * 100 + " 已读" + _0x15b2f2.infoView.num + "篇");
          if (_0x15b2f2.infoView.msg && _0x15b2f2.infoView.msg != "") {
            this.log(_0x15b2f2.infoView.msg);
            this.is_read = false;
          } else {
            this.is_read = true;
          }
          if (this.user_info.score * 100 >= 10000) {
            let _0x543a51 = {
              amount: parseInt(this.user_info.score * 100 / 1000) * 10,
              type: "wx"
            };
            _0x543a51 = querystring.stringify(_0x543a51);
            let _0x591b64 = await post(this.host + "/withdrawal/doWithdraw", null, _0x543a51, this.headers);
            if (_0x591b64 && _0x591b64.data) {
              this.log("提现结果", _0x591b64.data);
            } else {
              this.log("提现失败");
            }
          }
        }
      } else {
        console.log("获取用户数据失败", _0x460581.data);
      }
    }
  }
  async get_read_url() {
    let _0x5ef7eb = await get(this.host + "/new/get_read_url", null, this.headers);
    if (_0x5ef7eb && _0x5ef7eb.data && _0x5ef7eb.data.jump) {
      this.log("获取阅读跳转地址成功", _0x5ef7eb.data.jump);
      this.read_url = _0x5ef7eb.data.jump;
      let _0x545313 = url.parse(this.read_url, true);
      this.read_query = _0x545313.query;
      this.read_host = _0x545313.protocol + "//" + _0x545313.hostname;
      await get(this.read_host + "/static/r.js?v=4", null, this.headers);
    }
  }
  url_info(_0x36e2b2) {
    const _0x539bbe = url.parse(_0x36e2b2, true).query,
      _0x29771a = "公众号唯一标识：" + _0x539bbe.__biz + " | mid:" + _0x539bbe.mid;
    this.log(_0x29771a);
    if (_0x539bbe.chksm) {
      if (_0x539bbe.__biz && !checkDict.includes(_0x539bbe.__biz)) {
        checkDict.push(_0x539bbe.__biz);
        save_list(checkDict);
      }
      return 6;
    }
    return _0x539bbe.__biz;
  }
  async read() {
    let _0x18a0a1 = true,
      _0x347418 = {};
    while (true && this.is_read) {
      let _0xc464be = "/tuijian/do_read?for=&zs=&pageshow&r=" + Math.random() + "&iu=" + this.read_query.iu;
      if (_0x347418.jkey) {
        _0xc464be += "&jkey=" + _0x347418.jkey;
      }
      const _0xdd3ee0 = {
        hostname: this.hostname,
        port: 80,
        path: _0xc464be,
        method: "GET",
        headers: {
          Host: this.hostname,
          Connection: "keep-alive",
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 2112123AC Build/TKQ1.220829.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/1110005 MMWEBSDK/20231002 MMWEBID/8978 MicroMessenger/8.0.43.2480(0x28002B3D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
          "X-Requested-With": "XMLHttpRequest",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          Cookie: this.headers.Cookie
        }
      };
      let _0xb74032 = await new Promise((_0x4a0c83, _0x355fb2) => {
        const _0x4b6d9e = http.request(_0xdd3ee0, _0xba1c2d => {
          let _0x482e65 = "";
          _0xba1c2d.on("data", _0x523780 => {
            _0x482e65 += _0x523780;
          });
          _0xba1c2d.on("end", () => {
            try {
              _0x482e65 = JSON.parse(_0x482e65);
              _0x4a0c83(_0x482e65);
            } catch (_0x1e02fe) {
              this.log(_0x1e02fe);
              _0x4a0c83(false);
            }
          });
        });
        _0x4b6d9e.on("error", _0x43905e => {
          this.log(_0x43905e);
          _0x4a0c83(false);
        });
        _0x4b6d9e.end();
      });
      if (_0xb74032) {
        let _0x332d7d = _0xb74032;
        this.log(_0x332d7d);
        if (_0x332d7d.success_msg) {
          this.log(_0x332d7d.success_msg);
        }
        if (_0x332d7d.url == "close" || _0x332d7d.url == "") {
          return;
        }
        let _0x499004 = this.url_info(_0x332d7d.url),
          _0x5a57a1 = true;
        if (_0x499004 === 6 || _0x499004 && checkDict.includes(_0x499004)) {
          _0x5a57a1 = false;
          let _0x5cee7c = moment().unix(),
            _0x25e8c7 = 0,
            _0x4a7504 = await get_wx_read_num(_0x332d7d.url, md5(this.cookie));
          if (_0x4a7504) {
            if (_0x4a7504.code == 0) {
              let _0x2483ad = _0x4a7504.data;
              _0x25e8c7 = _0x2483ad.read_num;
              this.log("当前阅读数" + _0x25e8c7 + ", 等待过检", moment().format("YYYY-MM-DD HH:mm:ss"));
            } else {
              this.log("过检测失败,获取文章阅读数错误1", _0x4a7504);
              return;
            }
          } else {
            this.log("过检测失败,获取文章阅读数错误2", _0x4a7504);
            return;
          }
          while (true) {
            await sleep(getRandomInt(50, 60) * 1000);
            let _0x1e8f12 = await get_wx_read_num(_0x332d7d.url, md5(this.cookie));
            if (_0x1e8f12) {
              if (_0x1e8f12.code == 0) {
                let _0xe85730 = _0x1e8f12.data;
                if (_0xe85730.read_num && _0xe85730.read_num != _0x25e8c7) {
                  this.log("过检成功", "当前阅读数" + _0xe85730.read_num, "开始阅读数" + _0x25e8c7, moment().format("YYYY-MM-DD HH:mm:ss"));
                  _0x5a57a1 = true;
                  _0x18a0a1 = false;
                  _0x347418 = _0x332d7d;
                  break;
                } else {
                  let _0x5c4ae5 = moment().unix();
                  if (_0x5c4ae5 > _0x5cee7c + 120) {
                    this.log("大于2分钟为过检测退出重新获取连接");
                    break;
                  } else {
                    _0x5c4ae5 > _0x5cee7c + 270 && !addpusher;
                  }
                }
              } else {
                this.log("过检测失败,获取文章阅读数错误3", _0x1e8f12);
                return;
              }
            } else {
              this.log("过检测失败,获取文章阅读数错误4", _0x1e8f12);
              return;
            }
          }
        } else {
          _0x347418 = _0x332d7d;
          await sleep(getRandomInt(15, 20) * 1000);
        }
      } else {
        this.log("获取阅读数据失败,阅读190篇以上就是跑满了");
        break;
      }
    }
  }
  async run() {
    await this.getuserinfo();
    this.user_info && this.is_read && (await sleep(200), await this.get_read_url(), await sleep(2000), await this.read(), await sleep(2000), await this.getuserinfo());
  }
}
async function main() {
  let _0x2d433f = await get("https://wxcheck.webljljgw.top/公告/common.txt");
  _0x2d433f && _0x2d433f.data && console.log(_0x2d433f.data);
  console.log("青龙面板添加环境变量isqinglong=1可取消日志日期前缀");
  if (!process.env.isqinglong) {
    const _0xe48a6a = require("./common/log");
    _0xe48a6a.init("可乐阅读.log");
  }
  let _0x248d5f = process.env.keleyudu,
    _0x426094 = _0x248d5f.split("@");
  console.log("===========获取到" + _0x426094.length + "个账号=============");
  let _0x225051 = 0;
  for (const _0x1aadf5 of _0x426094) {
    _0x225051++;
    console.log("===========第" + _0x225051 + "个账号开始=============");
    process.env.keleyudu_sync == 1 ? await new App(_0x1aadf5).run() : new App(_0x1aadf5).run();
    await sleep(getRandomInt(30, 60) * 1000);
  }
}
main();