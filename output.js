//Tue Aug 27 2024 06:43:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const log4js = require("log4js");
module.exports = {
  init(_0x5b4254) {
    log4js.configure({
      appenders: {
        console: {
          type: "console",
          layout: {
            type: "pattern",
            pattern: "[%d{yyyy-MM-dd hh:mm:ss}] [%p] [%f{3}:%l] %m"
          }
        },
        file: {
          type: "file",
          filename: _0x5b4254,
          layout: {
            type: "pattern",
            pattern: "%r %p - %m"
          }
        }
      },
      categories: {
        default: {
          appenders: ["console", "file"],
          level: "debug"
        }
      }
    });
    let _0x3874b2 = console.log,
      _0x2fedd1 = log4js.getLogger();
    _0x3874b2("启动日志");
    _0x2fedd1.info("启动日志");
    console.log = (..._0x211f2c) => {
      _0x3874b2(..._0x211f2c);
      _0x2fedd1.info(..._0x211f2c);
    };
  }
};