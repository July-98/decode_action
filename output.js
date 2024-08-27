//Tue Aug 27 2024 09:26:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
module.exports = {
  getRandomInt(_0x238e08, _0x12d648) {
    return Math.floor(Math.random() * (_0x12d648 - _0x238e08 + 1)) + _0x238e08;
  },
  async sleep(_0x17de59) {
    return await new Promise(_0x593468 => setTimeout(_0x593468, _0x17de59));
  },
  async get(_0x5c0154, _0x30b73b, _0x55986c) {
    let _0x4c8f63 = await new Promise(function (_0x46e61a, _0x4ec0e8) {
      axios({
        url: _0x5c0154,
        method: "GET",
        headers: _0x55986c,
        params: _0x30b73b,
        timeout: 10000
      }).then(_0x4808d1 => {
        _0x46e61a(_0x4808d1);
      }).catch(_0x509725 => {
        console.log(_0x5c0154, _0x509725.message);
        _0x46e61a(false);
      });
    });
    return _0x4c8f63;
  },
  async post(_0x183806, _0x554671, _0x5a5a1f, _0x2be79e) {
    let _0x57c0e0 = await new Promise(function (_0x3cb912, _0x3a488b) {
      axios({
        url: _0x183806,
        method: "POST",
        headers: _0x2be79e,
        params: _0x554671,
        data: _0x5a5a1f,
        timeout: 10000
      }).then(_0x35b9fc => {
        _0x3cb912(_0x35b9fc);
      }).catch(_0x164652 => {
        console.log(_0x183806, _0x164652.message);
        _0x3cb912(false);
      });
    });
    return _0x57c0e0;
  }
};