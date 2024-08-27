//Tue Aug 27 2024 09:27:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  post,
  sleep
} = require("./tool");
let hosturl = "http://146.56.128.138:8003",
  headers = {
    sign: "dsadaskjhkfhasdfds546416dsada"
  };
module.exports = {
  async get_wx_read_num(_0xd86cc9, _0x33e892, _0xb986f4) {
    let _0x1041ac = await new Promise(async (_0x2c51ed, _0x610f63) => {
      let _0x3e86ff;
      while (true) {
        _0x3e86ff = await post(hosturl, null, {
          url: _0xd86cc9,
          key: _0x33e892,
          wx_key: process.env.wx_key,
          not_check: _0xb986f4
        }, headers);
        if (!_0x3e86ff) {
          _0x2c51ed(false);
          return;
        }
        if (_0x3e86ff.data.code == -2) {
          await sleep(1000);
        } else {
          break;
        }
      }
      if (_0x3e86ff) {
        _0x2c51ed(_0x3e86ff.data);
      } else {
        _0x2c51ed(false);
      }
    });
    return _0x1041ac;
  }
};