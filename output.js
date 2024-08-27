//Tue Aug 27 2024 07:30:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    post,
    sleep,
    getRandomInt,
    get
  } = require("./common/tool"),
  url = require("url"),
  moment = require("moment"),
  crypto = require("crypto"),
  {
    get_wx_read_num
  } = require("./common/wx_read_num"),
  tool = require("./common/tool");
let checkDict = ["MzkyMzI5NjgxMA==", "MzkzMzI5NjQ3MA==", "Mzg5NTU4MzEyNQ==", "Mzg3NzY5Nzg0NQ==", "MzU5OTgxNjg1Mg==", "Mzg4OTY5Njg4Mw==", "MzI1ODcwNTgzNA==", "Mzg2NDY5NzU0Mw==", "Mzg4NjY5NzE4NQ==", "MzkzMzI5Njc0Nw==", "MzkwODI5NzQ4MQ=="];
class App {
  constructor(_0x4571a3, _0x2e5bd8) {
    this.cookie = _0x4571a3.split("@")[0];
    this.appid = _0x2e5bd8;
    this.isActivity = true;
    this.user_info = null;
    this.day_read = 0;
    this.remain = 0;
    this.headers = {
      "User-Agent": "Mozilla/5.0 (Linux; Android 13; 2112123AC Build/TKQ1.220829.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5279 MMWEBSDK/20230805 MMWEBID/8978 MicroMessenger/8.0.41.2441(0x28002952) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
      Cookie: this.cookie
    };
  }
  log(..._0x3d1ffa) {
    console.log("账号:" + (this.appid + 1), ..._0x3d1ffa);
  }
  get_sign(_0x5d8ce4) {
    const _0x1d1d00 = "4fck9x4dqa6linkman3ho9b1quarto49x0yp706qi5185o",
      _0x155588 = "key=" + _0x1d1d00 + "&time=" + _0x5d8ce4,
      _0x233446 = crypto.createHash("sha256");
    _0x233446.update(_0x155588);
    const _0x350c94 = _0x233446.digest("hex");
    return _0x350c94;
  }
  url_info(_0xb51977) {
    const _0x320c1f = url.parse(_0xb51977, true).query,
      _0x5d720c = "公众号唯一标识：" + _0x320c1f.__biz + " | mid:" + _0x320c1f.mid;
    this.log(_0x5d720c);
    return _0x320c1f.__biz;
  }
  async submit() {
    const _0x1b095a = moment().unix();
    let _0x41625b = {
        time: _0x1b095a,
        sign: this.get_sign(_0x1b095a)
      },
      _0xeb5ad4 = await get("http://2477726.9o.10r8cvn6b1.cloud/read/finish", _0x41625b, this.headers),
      _0x23075e = await new Promise((_0x2a68f8, _0x19ca26) => {
        if (_0xeb5ad4) {
          if (_0xeb5ad4.data.code == 0) {
            let _0x5f4592 = _0xeb5ad4.data;
            this.day_read = this.day_read + 1;
            this.log("阅读文章成功---获得钢镚" + _0x5f4592.data.gain + " 当前已阅读次数" + this.day_read);
            _0x2a68f8(true);
            return;
          } else {
            this.log("提交阅读失败1", _0xeb5ad4.data);
          }
        } else {
          this.log("提交阅读失败");
        }
        _0x2a68f8(false);
      });
    return _0x23075e;
  }
  async getuserinfo() {
    const _0x5f2af1 = moment().unix();
    let _0x11d4cd = {
        time: _0x5f2af1,
        sign: this.get_sign(_0x5f2af1)
      },
      _0x2a56e3 = "",
      _0x261bcf = await get("http://2477726.neavbkz.jweiyshi.r0ffky3twj.cloud/share", _0x11d4cd, this.headers);
    if (_0x261bcf && _0x261bcf.data && _0x261bcf.data.data && _0x261bcf.data.data.share_link) {
      _0x2a56e3 = _0x261bcf.data.data.share_link[0];
      this.log("推广链接:" + _0x2a56e3);
    } else {
      this.isActivity = false;
      this.log("获取推广连接失败");
    }
    let _0x2ccb3c = "http://2477726.neavbkz.jweiyshi.r0ffky3twj.cloud/read/info";
    _0x261bcf = await get(_0x2ccb3c, _0x11d4cd, this.headers);
    if (_0x261bcf) {
      if (_0x261bcf.data.code == 0) {
        let _0x5dea23 = _0x261bcf.data.data;
        this.log("钢镚余额:" + _0x5dea23.remain + " 今日阅读量::" + _0x5dea23.read);
        this.day_read = _0x5dea23.read;
        this.remain = _0x5dea23.remain;
      } else {
        this.isActivity = false;
        this.log("获取账号信息失败");
      }
    }
  }
  async getlink(_0xb3c912) {
    const _0x5ce29b = url.parse(_0xb3c912, true).query;
    if (_0x5ce29b.mid) {
      return _0xb3c912;
    }
    let _0x574e99 = await get(_0xb3c912, null, this.headers);
    if (_0x574e99) {
      const _0x44529 = /_g\.msg_link\s*=\s*["']([^"']+)["']/,
        _0x10b0e1 = _0x574e99.data.match(_0x44529);
      if (_0x10b0e1) {
        const _0x373bec = _0x10b0e1[1],
          _0x4f32be = _0x373bec.replace(/amp;/g, "");
        return _0x4f32be;
      } else {
        return false;
      }
    }
    return false;
  }
  async read() {
    let _0x5c6123 = "http://2477726.9o.10r8cvn6b1.cloud/read/task";
    while (true) {
      const _0x2955f6 = moment().unix();
      let _0x1f6844 = {
          time: _0x2955f6,
          sign: this.get_sign(_0x2955f6)
        },
        _0x5cec86 = await get(_0x5c6123, _0x1f6844, this.headers);
      if (_0x5cec86) {
        let _0xb83bed = false,
          _0x335268 = _0x5cec86.data;
        if (_0x335268.code == 0) {
          let _0x22d4f1 = _0x335268.data.link;
          if (_0x22d4f1 && _0x22d4f1 != "") {
            _0x22d4f1 = await this.getlink(_0x22d4f1);
            if (_0x22d4f1) {
              let _0x1d8fdb = this.url_info(_0x22d4f1);
              if (checkDict.includes(_0x1d8fdb)) {
                this.log("出现检测文章!", _0x22d4f1);
                let _0x33e284 = moment().unix();
                this.log("出现检测文章,等待过检", moment().format("YYYY-MM-DD HH:mm:ss"));
                let _0x1064bc = 0,
                  _0x5f1429 = 0,
                  _0x1c19b0 = await get_wx_read_num(_0x22d4f1, this.cookie);
                if (_0x1c19b0) {
                  if (_0x1c19b0.code == 0) {
                    let _0x597635 = _0x1c19b0.data;
                    _0x1064bc = _0x597635.read_num;
                    _0x5f1429 = _0x597635.real_read_num;
                    this.log("当前阅读数" + _0x1064bc);
                  } else {
                    this.log("过检测失败,获取文章阅读数错误1", _0x1c19b0);
                    return;
                  }
                } else {
                  this.log("过检测失败,获取文章阅读数错误2", _0x1c19b0);
                  return;
                }
                let _0xf91ee7 = false;
                while (true) {
                  await sleep(getRandomInt(50, 60) * 1000);
                  let _0x1e5ba7 = await get_wx_read_num(_0x22d4f1, this.cookie);
                  if (_0x1e5ba7) {
                    if (_0x1e5ba7.code == 0) {
                      let _0x43ad20 = _0x1e5ba7.data;
                      if (_0x43ad20.read_num && _0x43ad20.read_num != _0x1064bc) {
                        this.log("过检成功", "当前阅读数" + _0x43ad20.read_num, "开始阅读数" + _0x1064bc, moment().format("YYYY-MM-DD HH:mm:ss"));
                        break;
                      } else {
                        let _0x1b00a5 = moment().unix();
                        if (_0x1b00a5 > _0x33e284 + 420) {
                          this.log("大于7分钟为过检测退出重新获取连接");
                          _0xb83bed = true;
                          break;
                        } else {
                          _0x1b00a5 > _0x33e284 + 270 && !_0xf91ee7 && (_0xf91ee7 = true);
                        }
                      }
                    } else {
                      this.log("过检测失败,获取文章阅读数错误3", _0x1e5ba7);
                      return;
                    }
                  } else {
                    this.log("过检测失败,获取文章阅读数错误4", _0x1e5ba7);
                    return;
                  }
                }
              } else {
                let _0x1ab693 = getRandomInt(15, 20);
                this.log("本次模拟阅读" + _0x1ab693 + "秒");
                await sleep(_0x1ab693 * 1000);
              }
              if (!_0xb83bed) {
                let _0x287372 = await this.submit();
                if (!_0x287372) {
                  this.log("提交阅读错误");
                  break;
                }
              }
            } else {
              this.log("未获取到连接", _0x335268);
              await tool.sleep(3000);
            }
          } else {
            this.log("未获取到连接", _0x335268);
            await tool.sleep(3000);
          }
        } else {
          this.log(_0x335268.message);
          return;
        }
      } else {
        this.log("获取阅读失败");
        break;
      }
    }
  }
  async wechat() {
    const _0x4a2bf5 = moment().unix();
    let _0x223d4b = {
        time: _0x4a2bf5,
        sign: this.get_sign(_0x4a2bf5)
      },
      _0x38f8d8 = await get("http://2477726.84.8agakd6cqn.cloud/withdraw/wechat", _0x223d4b, this.headers);
    if (_0x38f8d8) {
      this.log("提现结果", _0x38f8d8.data);
    } else {
      this.log("提现失败");
    }
  }
  async run(_0x59634e) {
    if (_0x59634e == true) {
      await this.getuserinfo();
      this.isActivity && (await sleep(3000), await this.read());
      await this.getuserinfo();
      if (this.remain > 10000) {
        this.wechat();
      }
      if (this.day_read >= 180) {
        this.log("今日已读满", this.day_read);
        return;
      }
    } else {
      while (true) {
        await this.getuserinfo();
        if (this.isActivity) {
          await sleep(3000);
          await this.read();
        }
        await this.getuserinfo();
        if (this.remain > 10000) {
          this.wechat();
        }
        if (this.day_read >= 180) {
          this.log("今日已读满", this.day_read);
          return;
        }
        await sleep(600000);
      }
    }
  }
}
async function main() {
  let _0x4afe63 = await get("https://wxcheck.webljljgw.top/公告/common.txt");
  _0x4afe63 && _0x4afe63.data && console.log(_0x4afe63.data);
  let _0x6c028f = process.env.ydtoken,
    _0xc554f0 = _0x6c028f.split("====");
  console.log("一共获取到" + _0xc554f0.length + "个账号,开始阅读");
  let _0x4d790c = moment().unix();
  if (process.env.ydtoken_sync != 1) {
    let _0x31ff93 = moment().endOf("day").unix();
    _0x31ff93 = _0x31ff93 - 180;
    _0x4d790c >= _0x31ff93 && (_0x31ff93 = _0x31ff93 + 86400);
    setTimeout(() => {
      process.exit(1);
    }, (_0x31ff93 - _0x4d790c) * 1000);
  }
  for (let _0x8b817a = 0; _0x8b817a < _0xc554f0.length; _0x8b817a++) {
    const _0x2f4914 = _0xc554f0[_0x8b817a];
    let _0x1dc6ad = new App(_0x2f4914, _0x8b817a);
    process.env.ydtoken_sync == 1 ? await _0x1dc6ad.run(true) : _0x1dc6ad.run();
    await sleep(getRandomInt(30, 60) * 1000);
  }
}
main();