//Tue Aug 27 2024 06:40:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
module.exports = {
  getRandomInt(_0x41db60, _0x5a4c1a) {
    return Math.floor(Math.random() * (_0x5a4c1a - _0x41db60 + 1)) + _0x41db60;
  },
  async sleep(_0x26a8d6) {
    return await new Promise(_0x5515a5 => setTimeout(_0x5515a5, _0x26a8d6));
  },
  async get(_0x2b0bf5, _0x3870dc, _0x360c21) {
    let _0xad64c0 = await new Promise(function (_0x5694d6, _0x5cec63) {
      axios({
        url: _0x2b0bf5,
        method: "GET",
        headers: _0x360c21,
        params: _0x3870dc,
        timeout: 10000
      }).then(_0x308951 => {
        _0x5694d6(_0x308951);
      }).catch(_0x29d08d => {
        console.log(_0x2b0bf5, _0x29d08d.message);
        _0x5694d6(false);
      });
    });
    return _0xad64c0;
  },
  async post(_0x1f7205, _0x1e6549, _0x403437, _0x40b762) {
    let _0x43f234 = await new Promise(function (_0x3272fd, _0x553fac) {
      axios({
        url: _0x1f7205,
        method: "POST",
        headers: _0x40b762,
        params: _0x1e6549,
        data: _0x403437,
        timeout: 10000
      }).then(_0x40bfc0 => {
        _0x3272fd(_0x40bfc0);
      }).catch(_0x49bd79 => {
        console.log(_0x1f7205, _0x49bd79.message);
        _0x3272fd(false);
      });
    });
    return _0x43f234;
  }
};