//Tue Aug 27 2024 06:30:43 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    post,
    sleep
  } = require("./tool"),
  {
    pusherTxt
  } = require("../common/wx_pusher2"),
  moment = require("moment");
let hosturl = process.env.wx_check_url;
!hosturl && console.log("wx_check_url 未配置,请查看wx_read_num文件配置说明");
hosturl = hosturl + "/get_read_num";
let headers = {
    sign: "dsadaskjhkfhasdfds546416dsada"
  },
  wx_keys = (process.env.wx_key || "").split("@"),
  wx_key_index = 0;
function getNextWxKey() {
  wx_key_index++;
  if (wx_keys[wx_key_index]) {
    return wx_keys[wx_key_index];
  }
  wx_key_index = 0;
  return wx_keys[wx_key_index];
}
async function wx_read_num(_0x826943, _0x452e14, _0xc30d4e, _0x5bdb01) {
  let _0x378159 = await new Promise(async (_0x22542a, _0x58c857) => {
    let _0x54dd2b;
    while (true) {
      _0x54dd2b = await post(hosturl, null, {
        url: _0x826943,
        key: _0x452e14,
        wx_key: _0x5bdb01,
        not_check: _0xc30d4e
      }, headers);
      if (!_0x54dd2b) {
        _0x22542a(false);
        return;
      }
      if (_0x54dd2b.data.code == -2) {
        await sleep(1000);
      } else {
        break;
      }
    }
    if (_0x54dd2b) {
      _0x22542a(_0x54dd2b.data);
    } else {
      _0x22542a(false);
    }
  });
  return _0x378159;
}
let key_times = {};
module.exports = {
  async get_wx_read_num(_0x17731a, _0x149392, _0x22acf2) {
    let _0x44fba8 = getNextWxKey();
    if (!_0x44fba8) {
      console.log("未获取到wx_key");
      return false;
    }
    let _0x57c091 = moment().unix(),
      _0x3f743f = 0;
    while (true) {
      let _0x513706 = await wx_read_num(_0x17731a, _0x149392, _0x22acf2, _0x44fba8);
      const _0x255345 = /未获取到wx_cookie/;
      if (_0x513706.msg && _0x255345.test(_0x513706.msg)) {
        _0x3f743f++;
        !key_times[_0x44fba8] && (key_times[_0x44fba8] = 0);
        if (_0x57c091 > key_times[_0x44fba8] + 600) {
          pusherTxt("过检APP", _0x513706.msg);
          key_times[_0x44fba8] = _0x57c091;
        }
        if (_0x3f743f >= wx_keys.length) {
          return _0x513706;
        }
      } else {
        return _0x513706;
      }
    }
  }
};