//Mon Jul 22 2024 15:06:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
 * cron 5 15 * * *  得间免费小说.js
 * Show:必要模块 zlib jsrsasign
 * 变量名:dejian
 * 变量值:https://dj.palmestore.com/zycl/gold headers的refer
 * scriptVersionNow = "0.0.1";
 */
const xianjin = 30; //到多少现金停止运行此脚本 默认30
const shua = 1; //1为全任务运行 0为只跑刷金币任务 刷金币任务1秒一个号 半分钟或一分钟跑一次收益最佳
const yuedu = 0; //1为跑提现阅读任务 0为不跑提现阅读任务  尽量等到提现的时候再开此模式
const sleep1 = 2000; //号之间的延迟 单位：ms

var _0xodt = "jsjiami.com.v7";
const _0x59a748 = _0x578d;
if (function (_0x5e5517, _0x21979e, _0x402d58, _0x3bf7ae, _0x753990, _0x2925f6, _0x5c7594) {
  return _0x5e5517 = _0x5e5517 >> 2, _0x2925f6 = "hs", _0x5c7594 = "hs", function (_0xf1fabe, _0x54b750, _0x3333f1, _0x4e2352, _0x2c3b2b) {
    const _0x4724b0 = _0x578d;
    _0x4e2352 = "tfi", _0x2925f6 = _0x4e2352 + _0x2925f6, _0x2c3b2b = "up", _0x5c7594 += _0x2c3b2b, _0x2925f6 = _0x3333f1(_0x2925f6), _0x5c7594 = _0x3333f1(_0x5c7594), _0x3333f1 = 0;
    const _0x482da2 = _0xf1fabe();
    while (!![] && --_0x3bf7ae + _0x54b750) {
      try {
        _0x4e2352 = parseInt(_0x4724b0(925, "v1ox")) / 1 * (-parseInt(_0x4724b0(838, "[U*D")) / 2) + parseInt(_0x4724b0(678, "drE]")) / 3 * (parseInt(_0x4724b0(823, "CQ4*")) / 4) + -parseInt(_0x4724b0(502, "8m^2")) / 5 * (parseInt(_0x4724b0(447, "(%T6")) / 6) + parseInt(_0x4724b0(299, "#a%H")) / 7 * (-parseInt(_0x4724b0(574, "gptZ")) / 8) + -parseInt(_0x4724b0(593, "wA72")) / 9 + parseInt(_0x4724b0(433, "fU8G")) / 10 * (parseInt(_0x4724b0(1039, "I*]p")) / 11) + -parseInt(_0x4724b0(752, "[Gg*")) / 12 * (-parseInt(_0x4724b0(602, "nB0E")) / 13);
      } catch (_0x1c47b7) {
        _0x4e2352 = _0x3333f1;
      } finally {
        _0x2c3b2b = _0x482da2[_0x2925f6]();
        if (_0x5e5517 <= _0x3bf7ae) _0x3333f1 ? _0x753990 ? _0x4e2352 = _0x2c3b2b : _0x753990 = _0x2c3b2b : _0x3333f1 = _0x2c3b2b;else {
          if (_0x3333f1 == _0x753990["replace"](/[tbPHBTMYQhNILSeuFV=]/g, "")) {
            if (_0x4e2352 === _0x54b750) {
              _0x482da2["un" + _0x2925f6](_0x2c3b2b);
              break;
            }
            _0x482da2[_0x5c7594](_0x2c3b2b);
          }
        }
      }
    }
  }(_0x402d58, _0x21979e, function (_0x12dda8, _0x258ef1, _0x2040bd, _0x14a6d0, _0x573baf, _0x6d8ba1, _0x3b71ae) {
    return _0x258ef1 = "split", _0x12dda8 = arguments[0], _0x12dda8 = _0x12dda8[_0x258ef1](""), _0x2040bd = "reverse", _0x12dda8 = _0x12dda8[_0x2040bd]("v"), _0x14a6d0 = "join", (1415203, _0x12dda8[_0x14a6d0](""));
  });
}(808, 535970, _0x44df, 204), _0x44df) {}
const $ = new Env(_0x59a748(859, "QR)n")),
  notify = $[_0x59a748(681, "gxNC")]() ? require("./sendNotify") : "",
  zlib = require(_0x59a748(829, "CQ4*")),
  rs = require("jsrsasign");
console[_0x59a748(526, "3con")](_0x59a748(832, "wA72")), console[_0x59a748(795, "(%T6")]("------------------------------------------"), console["log"](_0x59a748(579, "gptZ")), console[_0x59a748(1073, "YLV&")]("2\u3001\u7531\u4E8E\u6B64\u811A\u672C\u4EC5\u7528\u4E8E\u5B66\u4E60\u7814\u7A76\uFF0C\u60A8\u5FC5\u987B\u5728\u4E0B\u8F7D\u540E 24 \u5C0F\u65F6\u5185\u5C06\u6240\u6709\u5185\u5BB9\u4ECE\u60A8\u7684\u8BA1\u7B97\u673A\u6216\u624B\u673A\u6216\u4EFB\u4F55\u5B58\u50A8\u8BBE\u5907\u4E2D\u5B8C\u5168\u5220\u9664\uFF0C\u82E5\u8FDD\u53CD\u89C4\u5B9A\u5F15\u8D77\u4EFB\u4F55\u4E8B\u4EF6\u672C\u4EBA\u5BF9\u6B64\u5747\u4E0D\u8D1F\u8D23\u3002"), console[_0x59a748(462, "fxnj")](_0x59a748(323, "8m^2")), console["log"]("4\u3001\u6B64\u811A\u672C\u6D89\u53CA\u5E94\u7528\u4E0E\u672C\u4EBA\u65E0\u5173\uFF0C\u672C\u4EBA\u5BF9\u56E0\u6B64\u5F15\u8D77\u7684\u4EFB\u4F55\u9690\u79C1\u6CC4\u6F0F\u6216\u5176\u4ED6\u540E\u679C\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"), console[_0x59a748(907, "#a%H")]("5\u3001\u672C\u4EBA\u5BF9\u4EFB\u4F55\u811A\u672C\u5F15\u53D1\u7684\u95EE\u9898\u6982\u4E0D\u8D1F\u8D23\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7531\u811A\u672C\u9519\u8BEF\u5F15\u8D77\u7684\u4EFB\u4F55\u635F\u5931\u548C\u635F\u5BB3\u3002"), console[_0x59a748(893, "SteG")](_0x59a748(601, "gxNC")), console[_0x59a748(707, "8YAN")](_0x59a748(699, ")#[a")), console[_0x59a748(524, "UJpX")]("------------------------------------------"), console[_0x59a748(624, "eki$")](_0x59a748(876, "3con")), console[_0x59a748(928, "WhP5")](""), console[_0x59a748(1059, "jcyg")]("");
function sleep(_0x251867 = 1000) {
  const _0x121d17 = _0x59a748,
    _0x12bdbd = {
      "hPtZT": "path",
      "EHmJY": function (_0x56df7a, _0x49a020) {
        return _0x56df7a !== _0x49a020;
      },
      "VXtQk": _0x121d17(442, "@EdC"),
      "RwspR": _0x121d17(1090, "U(UW"),
      "PIWXr": function (_0x4bd8a5, _0x5838f3, _0x36304d) {
        return _0x4bd8a5(_0x5838f3, _0x36304d);
      }
    },
    _0x54f084 = new Promise(_0x5bb952 => {
      const _0x55ddd5 = _0x121d17;
      if (_0x12bdbd[_0x55ddd5(724, "#a%H")](_0x12bdbd["VXtQk"], _0x12bdbd[_0x55ddd5(307, "WhP5")])) _0x12bdbd[_0x55ddd5(955, "fxnj")](setTimeout, () => {
        _0x5bb952(!![]);
      }, _0x251867);else {
        this["fs"] = this["fs"] ? this["fs"] : _0xfa6275("fs"), this[_0x55ddd5(732, "JQ5o")] = this[_0x55ddd5(468, "i9xe")] ? this[_0x55ddd5(908, "[Gg*")] : _0x28d5cd(_0x12bdbd["hPtZT"]);
        const _0x42b424 = this[_0x55ddd5(839, "Yvqf")][_0x55ddd5(1094, "gxNC")](this["dataFile"]),
          _0x51734c = this["path"][_0x55ddd5(637, "UJpX")](_0x2532e5[_0x55ddd5(615, "eC^l")](), this[_0x55ddd5(802, "fxnj")]),
          _0x52cc4c = this["fs"][_0x55ddd5(552, "eC^l")](_0x42b424),
          _0x38ef72 = !_0x52cc4c && this["fs"][_0x55ddd5(351, "nB0E")](_0x51734c),
          _0x325371 = _0x28cc27["stringify"](this[_0x55ddd5(773, "eC^l")]);
        _0x52cc4c ? this[_0x55ddd5(488, "fU8G")](_0x42b424, _0x325371) : _0x38ef72 ? this["fs"][_0x55ddd5(857, "8m^2")](_0x51734c, _0x325371) : this["fs"][_0x55ddd5(531, "R1Qv")](_0x42b424, _0x325371);
      }
    });
  return _0x54f084;
}
let ckName = _0x59a748(672, "fxnj"),
  envSplitor = ["@", "\n"],
  strSplitor = "#",
  userIdx = 0,
  userList = [];
function _0x44df() {
  const _0x40ff98 = function () {
    return [_0xodt, "eSYHjQsjIiLaHLmMiub.QQcFBoTmt.evV7NuhLHP==", "ESkGWRtcUtBcIgJdJwq", "W61Vr145", "umoUW6hcJSoJC8kRWRzenYffWQD7WO4IsxZdGfLbrqpdM8kMWRlcNa/cId3dOu/cHHJcI8o8sYjHW47dQ8oZWOTHW6X2WOVcKaVdHG", "WPJdNgW", "rmocWPGMkSo1WQSyshC6wXxdS8ogW5KmaxJdP0aWW49HWObNW7zEW5jbWOBcGu/cO8kdvtVdR1ewW67cNCkAW4ZcG3RcV8orW4lcLcxdVeNcOCkaW7DaW5bRWOdcH1CWpfJcId4jCSoxagddRbqt", "f8obW54", "W6hcM8oWWOdcLCkO", "W7i6mCoVWRFdRa", "i8kjqeStW4OQma", "vaNdJxldRMabfCovW6RcTI4", "W78/WRfsiq", "W73cJGvMgJddKSoWWO7cLrTxcZSiW4W", "nmo8W7LJsq", "EsddKw7cPLG", "Cczdvq8", "W4RcMg3cT3CqW7lcGq", "WOVcQHJdVSkuW6O", "W5VdOMSjcL7cIYb5WOzqp8o7WQ0ztCkghW", "pCkCWOxcKt/cQfS", "W7fkW4VdHmokWRm", "zZjdv3G", "EcCpo8ocErbQjtq", "WOaJDmoNAmkC", "W7WnAZuV", "C8k4WQ/cSG", "55A75OUK5l6r5Oo45AsM6lAO", "t8oDWPpdLh0", "4PUj77IQ44gT5yAx6lwR5Agq5PQT44ka4PMT77M044oS5yEE6lwT5Ac45PIW44gC", "EgddOaHss8oWWP/dRSkSsfVdVCkJWR0GiSoMoJa", "wh/cIx/dOMq", "zCk7WQe", "WPftBNiWWRG9", "W5D6xL8DmM5sW6v+l8oNqSooW5dcUq", "WQFdSY7cUamNDxW7W68", "W6pcSGtdVW", "W7ddLmogWPHe", "W6SnBtan", "W6dcPWldVNNdQLhdQ24", "ySozW7dcTSoH", "nmkXtrFdOG", "WQJdQIHpfmkrW4qi", "W5JdGrtdPCk9W5/dJvtdRq", "WPNcOqJdRCktW69GusC", "C8osn8o9W4qbW5PUrXlcLSkeWR7cQSo7W7TOWOpdRca", "rZ3dLNBcJW", "w8kMqrVdMG", "erBcMYe", "W4BdOX7dMCkl", "bHXrWO4", "F8ogrCot", "W6JcHGRcIYytq8kR", "htZcUrhcKq", "W4u0WP9WjCorW4q+W6ZdLCkDW7Ss", "qx3dJs4ywq", "5B6h6zAN5yEq6ls45Bog6k+c", "qt7dVq", "WQ0LW7pdKCkMWRVcNY7cGG", "W6/dTK8paa", "FdLDrYPXW7C", "f8o8B1xcOmkeW4tdJYTGW78", "WPhdI39tW68vjmo3rwC4drtdJwhcUc5h", "qCoWW4pcISoc", "W5tcPbpdG1q", "W7TsW5BdN8opWQldUSkJ", "W7VdMSohWOznkCkqrCk3WOZdGZ/cTL4uWQPZW5DvzmkxW6/dJ8k+mmkDe0ZcUmkZBbC/W7BcOeJdKNO4crqAlSkCWOrqnWfBsNFcMmo6WRe", "omoppSoSWOb1WPr/gKm", "WR3dQJ1kha", "W5y2F8oKAa", "c8obW79UBCkIW78", "FdLDxIPWW77cJCoDWR/dJSotACkNW7K", "xmoCWR/dRg4", "5Bcd5BUr6iwT5P2JW5a0qtzXz8o0umktW4OwWOVcKmo9WOJLV5RKVixLJR3VV67dJSoPuCkaW5dcMCoSW53dP8kl", "B8oDu8oFnXNdNWJcUG", "W6S6WO5JW50", "W7e4CWiz", "xZjlqXK", "kJjeFmoqAHnMyJNcOqZdGCknq8kyW4tcKSoqfCkal8kgWQZdGM3dO8o/W7xcQmkhW4ZcILtcUmkNW7LNhCkZWQpdPSoGWPP/WRNdQZVdT1RcR8o2oCkrW5CSWQKGcCo+", "WPJcGf/cTmoQWONcLvRdRCkkASoDjG", "WOqzW7WXW7O", "dSoxW4j8A8kT", "WOaneSofaG", "hchdQd3cOeJdHCoqnHS2W4FdKZmDW5DvW65No0tcK1rrpSk/WRZcRsZdNCo3WOPJWPSOWQOiBb8iWOaEW4tdGdJcK8k0uCoaW6ldVt9SW6qNW4NdSI/dV8kQmmkDWOBcTCkHW5ZdKvWTWQZdPvn8W6RdHhNcHSkgW6tdKrXXW7aFiCkGW5XYWOGQBbTDyLNdNCkNW78WjCoDzvreWO3dLKzbsWzDWQ3cQCktEviyW4RdLqCIWROEWOZdIWBdIZeTgCoEWPJdRmo8wwuKewVcV8kcEmkYe8ouEMJcOCoaWR3dMwWwrdVcUwBdUmo4W5xdLdpdKCkWW7BcR8oODK7cLmofuNJcVmoXW7u6gZreW7VdUYldHmkTW45RWRhcV8oyWOFdMKFdO3BcMSo3WO/dLCozWQOXWRPPhCoFWPVdImkqWP3cUCk9EmoAWR0GWQ/dRK3dK8oercJcSrBcHNycW5ngW4HJlvqHW6uxbmkdW5pdLmkXW4iuCmkbWQiQW6JdGL7cJCo/t1xcNmk0W6i9WQ9HhSkbrZm8W4DeACoqW4NdRXNcJ8otW6LUWPeOW5hcKCkCW6BcIhhcRJDBhX7cHCkze8k3W6JdOXVdG3JdKdWIgmkBo8kudXf3W4tdM8ohCuOxWR03ECkHW5WxiXlcLsujWOHcjJVcL8kdb8kQWQrQWRBcRmorWPXaWOSbWRRcLmohWQ3dIHmdW5aFlvDurmohoSo5dvmxCdT0WOBdNmoNWPGFWRmRWRlcVCo/dmkBemo5itvHWR8yW47cJ8kkbSkWWQddMq1afmkcW5FdRrtcPGpdQYWbW7j/qSobamoKW6NcLgCUxxJdGSkSjmkTxSohz0hcSGK2WP0SWRbvm8oIWRpcRCkqW4ZcSmk3WQeFpSoAW7m1WOdcOmoUvSoXW7S/W7JcUSoWf8oggfxcKmo5W5FdR8keW53dJmkuaSoHwmoBW45ZzCkSW7fQzHHlWQ9bWPFcH8o8W7zOW58tWOpcUseCCf0Pi8k1E1z4W6tcLgJdL8olts89WQ3cSmoXWO1wFMbeWP/cKmkvomotWPldKCo8W77dPCkRsmk8hCocWQtcOCkyB8kjtWhdVmkiW5NcTSo7lhhdHNZcKcZdQCoWWP7cPW3cHeNcLez6WRtdJLfyW6ZcGG1lW4pcOc0TWP1ErSkXCMBcJbK3kGRdLSoee8ocWQvZtHzHWORdPr8Nb3aWF33cLCkbAmoNlSoig1BdHZ4TW4hdIxOkW5NcP8kTW7i4W4KJWOhdGdzGBCoFWQXXgSk+WRDMmCkFWQm5nSkfDfeNj8khWRtcNSkzW4VcVSkyW7RcOx4Ovmk2imohW6BcLw01hHVdGCoJWPFdL8o4q2tcVSkjbHZdO8k7vmorWQvfW5RdP8k+wCoZENRdMXtdQIVdTCobrSkAWOxcSNhcVMRcSSkqWQFdHmoOfSk8nWpdUSo6dCoYA8kGqCk5uCk6W5pdLsieBSobANGMW55IWP7dIdFcOSkuW4ZdSmouWR5lsfDOD8oVECkmESkJlmknW4Tfs8oAWP/cRwBdQanFW5XgamkzW5PIuHfcECkOD8oKB0TjW5RcUmoMW53dKCk4W43cThBdGCkJh8kykGhcLZRdJSo8nYZcSJdcRqTuWRT5uCoRW5hdVqKNWOy0W6mWcvZcJNv6WPVcJCk8xHpcQIBdV0JcL8o0WP4cW7FdGYFdQvCxadNdSSk4W4zeqCobyCowrh/cImkhmtWxW7y9WO/cLmk2Cf/cK8kCeZmDdHCzW7W+W7VcUeivWPBdNfj6xCocW64qW7ZdMmo+B8o6hSkBumoKdmouWPZdQSkcWPVcISouqXtdL1/dS8kBFLnVc8opCcFcTKXMFqBdRMpdMSowWOVcHGJcQmkmcaeYmmkipSk3W67dTSowy1tdSreDqCoOWRNdH0ZcT8kWpcmHd8o7fSo/t8kvASorC8kYzmoKW5qiW7ldOmkEWRxcJSoylCogAmoLWOVdT1FcR0FcG2fbBSoOzdddSHL5W6jNWQ7dTCoPWPhcQHZcL8olWQJcUCkzDSkqW6G1W6S6dSkEW7BcHSkzW65KW4VdTCo5kSoFcCkwW5O5W4vgW5pcK8k8E8kIACk/FSkQWOxdSmkYW6NdRSk5dSodb8o1W4O1kYdcVqL9W6dcP8oTW49qWOfUdXxcQeBcPCkxlCkEpSkEu8oXW5xcRSoVW5z9W7ZcLeBcQ8k2W5bcW4XN", "F1hcMsLDvMZdOmo5WR4", "auGEWQKh", "W7FdJ8ohWPC", "WRxdVsnHja", "W4pcRLVcRua", "WRtcNSoXWPldNmk5CNeDW6/cLSk8re/dTqmikKmvjmod", "bbjB", "mSobwMVcTG", "W64ZWPRdK8ot", "WQNcK0ZdShrpdSoLW47cTmoddq", "W7rwW6ldMa", "jwGBWPC4", "W7WmWO5q", "W5L6xuOrbwnGW6b1jmoOuCoEW7dcUt3cQvpcVq", "W7igWOroW6xcRG", "WPbixuqH", "nSkCEcBdG2L0W6pdSW", "WPpdLN9SW6CyjCotqwy", "xwpcOG", "W5ldGZGvWRmUoCogs3GWrJlcNZ7dScHBBIRdHSo+WR7dLCkKmeBcSsFdS8okvGFdRJ8IWRvOmxe2W4XopG", "W5GBWQK", "BmoivCoE", "kSkwxLK9", "W7VcMrXKdIFdG8oZWOBcGbrBks8wW5XwjG", "BmoykCo0W5WHW5C", "W7WXiCo8WQ4", "WQNdHepcJW", "t1uEWRT1W4pdI8oWWQmvWPNdV2pcVLC+W5u+raRdQfe", "W6BcTtf8gW", "W7hcQwJdPXiWEG", "WPJdLMvgW7OE", "EwddQq", "WRpdUfhcRh4", "duOtWR8", "fcePcY81WOaEWPuZsfdcQmk4WO06wxjhE8kYzKJcStXWWPpdIrZcTSkExdxcLuxdPWi", "WRddQHW", "rHZdN0xcRq", "W4iYtG", "c8kJWQFcQSoNmCoTW49W", "WO83W5VdSmkk", "W7tcTGtdKwldOvtdLhlcKZ4", "W7lcJG8", "WO/cTrNdPSkp", "DKZcNJ1Dtq", "bSkArCkqjG", "WOqvW58qW4G", "W7hcQxBdQru", "W6NcPXNdH18", "DeRcMs9V", "W5aPWPj9", "W7iWmq", "FHJdRulcVG", "W7FcKJLJdIRdRW", "qCkHtWxdIq", "FZiBjSkz", "WPjZwL0fE1nOW612lmoV", "kvekaq", "k1mkaSkcWQtcNSkTW74+", "cSo5W4FcSa", "wCo4kbG", "WRGtW5Gu", "W5ObWQldRG", "WPqJW5BdImks", "W73cHH3cOYaluSkvWOS", "W4S2zmo5", "W7hdIMuPcG", "ESkmAq", "ECoylComW5qVW5C", "WPWxq8oDW74", "WOtcQHtdVmkAW6q4ady", "W43dKq/dMSkJ", "m1eNWPSG", "wCk2WOFcOtK", "tSo/WOFdGva", "b2uahCkB", "W7i6mConWR/dRwa", "xmoXW5hcUSoO", "W7yYWPb2mW", "W4qHF8oBDq", "g0aoWRuKW5BdHG", "WQqAnCo+ka", "nIpcRZW", "i8kjqe4vW5m0kSo9WQxcTr9PoCkK", "CSkcEIi", "WQxdH0jNW4a", "vbBdL3tcOW", "W4JdU3modNVcKajtWPfi", "EuBcNsPCuvRdISo+WRO4W6SyWP/dIxm", "W7yUEciA", "tG0oW5y", "EMBcVx7dVq", "cCkEsa", "x+EmUoMhIG", "peOnfCkzWRO", "wmoGWPJdQa", "W4ZdT2Wzhq", "W5fTvKW", "WPq2W4u1Fq", "W70nkCoyWQa", "sCoVW7dcJmoPgSoWW6S", "DMddOa5kFa", "W4pcIg/dOX0", "WQ4XBmkRW6JcS8oU", "dmkKFSkbeW", "W6K9W5rWoCoNW4HWWRpcSmoiWRCvAvVdOctcLqdcJa", "WRGLW6KOW4O", "pmoNDe7cM8ke", "l8kMWQhcPgxdMcFdMYZcOG", "W5yYtGqCtq", "W4NcIhJcQw8GW6m", "W586vqmt", "zSkcEIS", "WRddQHXi", "B3BdQWrp", "W4G2ymoY", "CJZdUxG", "W48yAZWT", "W4RcV17cTq", "vqm/nSkD", "i8kwxxmVW4y2ia", "gLepWRmMW4FdISo3WRq", "DcXmFw5PW6dcIa", "W7xcP2JdVGy7", "W4RcLcjoaa", "cSkgyuSQ", "WO7dIM5iW6O", "p8kCFIm", "W7lcJG9fcJtdLSorWOBcHHPe", "WPJdQXLRpa", "W5pcMxZcTx15WQNdNmo7W7TkaHFcSSkxWQ7dJ3ZcL0KOESkNWQ3cVqSZWRVdISkdzmkBW4hcGIBdPwdcOmoSosZdLSkQxCkfW43cJCoeWO/cGIZdPLVdMga", "W7JcKrFcSIW7xSkVW5VdLCkcxNC", "WOmsuCo8W4C", "pwxdVdez", "gHZcNIdcTIbl", "eSotW5HZ", "W4FcTIRcPqC", "C8kbCdNcLZSyW7lcSg0", "FcmdjW", "WOqdfmoxcZjgW5xcMq", "nSkjyIpdKa", "WPHxC3m", "WR47DCoHW6xcVmo9WRbWimkc5AAn6lAU", "lJraCsrYW6y", "W4NcTwZcSxK", "CI94zIjYW4O", "W7GjpComWO4", "BcVdOeldMW", "W5NcQ8olWQBcTCktvG", "W5xcUZVdN0C", "gW1qWOldQW", "CSkcEIldPmkbWRbs", "W58ZWQfgW6q", "W4qoA1GcWRSCBq", "W7jZW7pdNCk7WOJcJZJcNMBdOMdcJComW7Oyj8krWRXVWPxdPSoPvJb7omkQs8oEbmoRW73dQCk9WQddUdRcT00BnIDLWRqSW4/cN8ooAmoZcW", "iSkaw2Wo", "WR47z8oQW6dcPmo/", "WPX5weGp", "tGLvWOBdUGernSkSdvC", "WRO0W4RdUSk8", "W7eWk8o8", "q8oRWP/dQeVdVq", "W6VcGGRcPW8uw8kM", "gvaoWRi", "WQldRhlcG1S", "tmkBWPZcUHe", "WQRdPWHmeq", "AdLDzsjW", "qYRdTK3cNq", "dCkfw8kbbKuxW7zSWONdVG", "kJjeFSoq", "W6hcTN3dUHmdE0ys", "WQddQ0f1W6y", "hHBcMa", "WPyEd8oB", "W6BcGZldNMq", "WOlcRGhdRq", "gcpcMYlcQq", "WQW0W7hdLmkPWR/cKW", "W4ZcMwFcQLO", "WQ/dSqLscmkFW4mjDa", "fZVcJa", "EwhcIhtdPG", "W7pcG8o9WOBcJ8kU", "W5yNWOjL", "cSoMF0dcLmkiW5VdNYO", "WP7cGGFdPmkC", "W5H6va", "W5SRWQrTeG", "CSospSoR", "DZBdQuFcVfRcT1FcG8oeW54", "WOmyeSoFcrzoW4dcIa", "amkjsSks", "m3ZdPWPfnq", "WP8wvCk0W7VcU8oUWOXlhSkM", "5PYX5OII5yIzuaG", "W7VcSvhdVrmY", "W5OvWQpdPW", "FdZdUNi", "sZJdS0ddNa", "W7RdTuGpw8kGW4moyMy3wdpcS8owsCoVW7/cGJHqn8k9wSklWQ5HsK3dGCoFwrVdSSociY/dMmonlmkngSo3W4G", "tmkXkxhcHCkzW5ZdRb4", "CmogrG", "lCo5W6nEFq", "W5vdW5hdQSoI", "zmolrCoXdG", "xCoTAmobaW", "W6xcSHZdONldI1FdV1ZcLZu"].concat(function () {
      return ["W6WgWPLgW73cSmoL", "55sK5OM15l6w5OcG5AEC6lsS", "AGVdJg7dHXq", "WROWW7xdMq", "zmkXWRlcUdFcIW", "WRmyW6OcW5ufWOCbW7y", "xJr+uwL7", "deVdGZOZ", "W7NdGCoAWPG", "uCopW4pcKCoE", "cSo6WPZdQKBcTa", "W4K4xq", "EsddJNtcU1hcVG", "bWRcJq", "W6XnW4NdQSoj", "eCogW414Da", "D0JcHdLb", "o8kCyYtdIwLOW6VdPtvWWPNdN+wNJoI1Ua", "c2BdKW", "W7CzWOTgW6e", "oSozqSklAe7cKb7dSCk0", "weJdPsHa", "ySkzr3fb", "j0ukbCkXWRJcUCkrW74R", "ptDDlG", "WP5M6zEV6k+Ryq", "wCo4EetdJ8kcW53dMYb9W64/WO7cL8oweGnvWQ3dT8krAG", "cKqjWRKG", "omoikSoQWOa", "hCk4W4xcOXNcUa", "EdneyZzOW7FcT8ohWR3dG8oDC8k2W7JdGq", "WOhdG3dcU28", "t8o7WOZdVvZdPG", "W5JdKaJdQmkEW4VdGW", "AZCCpmky", "W7RcKaW", "cGhcHZZcQYPas8kiWQddTMSMmtNdQ8kUwZtdRCkXrSohW5/dN3jKc8ovW50TqCk2mr5T", "t8oMWPRdPKhdRmk0WQJcGG", "c3Wfe8kD", "5Q+c6lwX5y+655M55yMa6ywW5BQP", "tCk7kbFdGmowWO3dJa9GW5OHW7S", "W5S1WRPRl8o5", "W61kW7C", "W4e2WPPTna", "W7rwW6tdJ8okWRFdU8kX", "WQ81r8oXW63cPSoVWPC", "tuFcUY1V", "E8ofmmoRW4KXW6f2rr0", "lCkFz3yoW5G9", "AGhdHq", "ECoylCovW5iSW4zN", "W7lcVH/dONNdUq", "W4tdSr/dUSk8", "WPXzD3G", "EcCeoW", "vt5K", "duqnbCktWRNcUCo5W4qKW6tdNq", "WR7dMfu", "W4NdMGldTq", "W7G6mCoXWRNdPa", "q8kxrSkdor0+W6POWPxdP8kuW63dICksW4ddQ8oZca", "oCkCCa", "FGxdRxFcJq", "jSkduhO", "vMNcSq", "W6BcH8o/WPBcSSkUE30d", "WObExq", "zmkgBYFdPmkbWRbsBNVdUqq", "f8oTEKhcL8ktW4y", "dXHiWQ/dVGya", "WOhcQGJdOCkuWQT7rI8", "W5WNWPTH", "W7imWO0", "Ctjhv1a", "WOzmWOFdHmobpConW6O", "WPldN2roW7W", "W77cQN7cH14", "WQzGueKT", "WRJcKqDLuGBdUmo7WRJcSZz1oGi/W7TYaCoVW7dcKSk0W5OTWPRdQ8o4agRdN8oFW7RdSttcOCoRAaZdHmoPW5JcT8kYAcxdKXnzW4PpW6NdNmovWRCPnmoACConW6aYd8o1W6i/WRmLBx5fWQBdOCkZWO3dRgpdQh7cNmoAWORcTCkUW75RWP7cISkUWQNdQSktWOZcOwJcRhHVWPbogSk0W5hdVh3dVmo9WROcFCo6W4nQWP8AWRFdUaeQn2RdKSooWP7cHJCNpSoMgmkFWOxdMZ5ncL3dKZhdVhrTk8oU", "kNCPWPe9", "WP5DDhOXWRC", "l8k8ts/dVG", "W4ZcLHTMpq", "d2ZdLtOyfSkw", "sCoPg8otW78", "W4qNsH4uqIpdT2RcTsBdHmkeWOFdKmoR", "WQldMhBcG3VdUmof", "WPFdMgfaW7W", "qdhdNhdcQa", "W4mgWQFdTSopcSoEW4hcN3ZdQ1WE", "WRldVXfHjW", "W6hcI8oMWOxcGmk2", "psWAlG", "mCkcugyAW5y2jSoQ", "ymk5WPtcUqO", "W4aJWOvRlmoHW4G", "WOddLNHv", "hNnIu25hWOLFW4ySpZVdSCoLW4CseNT/imk/ksq", "WOhJGyFORihLI7VLSyBMR7pOHRFMNB7NLQhKUiJKUj/KV4dLLlFKUjlMIlNPN5/MS5pNMyhNM7/VVQlOIyZOV4NLJ6BOP5hLRzZOR53OH6dOORtLRzJMR53OTQ3OTzJJGOy", "c8k6x8kYiW", "BX3dRMBdNbi", "WQKjWR3dV8ohWP3dHmk0W4a", "xJ53", "ysvmEIC", "W6nSWRZcHCo1W6hdI3xdHNNdPx/dGSku8lMIN+EZVUE4S+MdU+EFT/gfKBJcIu19kMtdOXdcJeVcU8kjWRdcVCkO", "W4LrW6pdHCoM", "WRNdIKNcKNxdUW", "W7/cVbC", "W7pcVwpcKKS", "rcz4wNO", "W7PIxuCU", "W73cOhBdRqqJ", "CJxdMvdcQW", "C8knEa", "A8k7WQlcQq", "zqxdSx3dKGJdIcW", "e2ddMtS", "W5H6v04BlLrYW6LT", "W4K4xqe", "CZLiDYzUW6e", "WQuTxSowW4pcNmojWPbRjmkjW5S", "W6VcKG1KjIRdKCom", "WOu6W4r4DmoRWPqUWRJdUSosW6LaofpcUxRcNWFcNCoviq", "WRyLW7xdImkAWRNcHZ3cNJFcRa", "W7RcJrRcOY8uwCkMW5O", "W5z6v1y", "WPhdI2jsW7Ofa8oEsNy", "BZnLFdr5W6dcP8opWQNdIa", "W5y2F8o2ymos", "WRVdObz5lW", "kN0/WPKe", "FHFdHuxdIG", "W4rgW7y", "W6dcI8oIWP/cGmk5FW", "u8oIBSoZoW", "BSkXWRlcGZ3cJg7dHxNdRa", "vmo1W7i", "WRupW7eBW50dWRKWW6v6WR/cS8oUWRxcIrNcLSkY", "A1tcVgtdGW", "WRK+W7u", "hSoQWQFdImkTE8k9WR9qBZCi", "WP9xDhG8WPW9ymkdW50YWO4muwpdPSkKWPBcSSkB", "x8oiW4xcPmod", "W5OBlmoHWPe", "jZf5WPldLa", "WOxcOqxdVmkYW6L6Cs3cJG", "nmoEcq", "W5hcQIDtdq", "W6q5WOzpW4m", "F8onkCo0W5qHW5n7qHhcNCofWQhdOSoEW6LVW4hdUdTaW7NdPqhdJHaFW4pcL8kcWRddOSkM", "vCkmydFdH8kgWQGAAxVdPWi", "DZBdQxFcQfO", "W5WrWQ/dPSoppSoe", "W4HsW6NdVmoO", "W4ZcNKlcSMi", "auaCWR4TW5ldKa", "aSkuwW", "W5NdV2SncLe", "Et3dUwtcSq", "rmogW5vRESo4", "cSo7Aq", "WRhdPaS", "xGNdIKpcUq", "aCozW79VFSkXW69D", "W7VdI8osWPjByCom", "nL/cKdRcH0NcI2GxCq", "B1RcGG", "m2tdULa", "WRi+W6y", "W4i2ECo2", "W7SPWPXUnG", "hmoNF0a", "W6b+6zsn6k2QWQ0", "ge8e", "WPWwW5ldISkD", "wbO9g8kf", "vYLKrhXWWOr/W4j8zhtdLCoHW4Odvxu", "5P6y5OI45yUgrWS", "DSouFuuxW44Iba", "W5rnAw94", "W4xcTcBcOtW", "qmoOW4ZcRmoQ", "c8oNBKlcMSomW5BdLsf4W6i2", "W7GLW6JdLCkTWQ/cGINcLJtdPq", "xmoRW7lcLCoF", "WQi9FCoWW4O", "A2dcJx/dQq", "WORdObPDnq", "W4GWxtWZ", "W7RdOXjjc8ofW7igBgqZfW", "WOtcGtm", "rbH/whK", "dKajWO4HW43dHG", "W6FcHrNcJsu", "WQaXC8owW6NcOSo7WPz4oCkiW44", "W7CpWP5iW7C", "agZdGbmucSkqWPOzWPy", "tSoMWPhdTa", "d1m4WPyV", "wuBcNZfaqhxdUmoL", "W6WgWPPfW7dcPCoL", "D8orW5RcU8oY", "cSkhw0em", "W5XWuKSnnhG", "W5ldGZ8CWRTgyCkresn/ehFcKtZdTg1endK", "tmkwWP0", "W5OwWPHkW6m", "W4zWq0mjjw4", "W4fFumkgv0mxW4dcUKhcGCktWRa", "t8oQW4/cISo5", "FZ1DCG", "W60YdCoyWR8", "vmo1W7tcMSo0kmoWW7G", "W7a1xbWs", "CX3dKa", "ugdcRhhdVJFcSCkMgZr0W7xdP0GPW7vKWPXZfMpcReeACSkJWQhcLtRdHCk0W4L1W59SWRKrErLmWQWJW6ZcVGFcUCoFz8o4W5BdMvmuWRvGWPRdVIxdOSkmk8oqW43dLq", "WP5M57IL5P2ByCk38lseICkP", "W4GFCdGU", "v8kfWPSIlmo9W7X5oIXAFq", "W556wKe", "x3JcKZjN", "EwddQGXyymohWPNdP8k0", "sSk/lbZdGCozW5pdRqL+W40f", "DSoAC8oAkq", "mo+9N+s6KoI/KEIIHEIeRoAFTW", "W4tcUYFdLvW", "W5pcQCotWOhcIG", "nmknrMirW4W", "WOOvbCoFaW", "D2NcPLVdUa", "wd3dIwJcJG", "W5/dKGJdLSk/", "W5ZcIhZcKwCUW6m", "WOxcVd/dVCkhW6fR", "W4aNWPHGl8o6", "zNVdVarfBW", "lmkjx2CT", "WQaXCW", "W5BdRMSlgaFdKf98WP4FiSomWQayxCkqgmkvWQWYqCozs8k8uuvYBSk9WQ7cSmknWQTWvqBcRSowqsRdNSk/WRhdP8kpch0yW6VcL8ovi8kMWQmYW4RdN8orFWKJWQ7dIG", "W6FcNSo2WPlcLCk/swqbW6JcNCk3", "F8ogtSoDmbVdVa/cSq", "WRJdPa9A", "W4O4AG", "W6u+mCoX", "zHONimkx", "bSotW5H6wCkSW7zl", "W5/cJhZcPa", "sSo7W7VcMSo/ja", "54YL6yAo5BA35yQP", "W6vTFq", "gHHpWOtdSWqa", "5ysd5OIh5yUp", "abRcNsxcOG", "W6FdGCo/WPLjDSonkCkYWPxcIa", "rsqbg8k3", "W7GHW6ddISkPWRhdIW", "arnvWP8", "W6BcOai", "W5P3rLG5", "W6pdOu0", "uMpcRh7dJgFdR8oIese", "W7JcGMBcSwSTW7ldNSotW7qkfqlcTG", "W6FcRmoLWPdcTq", "WOCEcCocaJDoW4RcLglcS8kqWRq", "qxNcH2PapmkmWO8tWOJcPCkbWPVdUmkJbmkGW683WQ7dQCoNWQu7W7buWQ7dJgJdVeFcG3yGvdyylvNdTCoaWQ7cLSoY", "WQuTwmoQW6pcVa", "W6hcH8o1WP0", "WPibWR3dSmkx", "W7jnW75lW5HrW69AW59ZW7ZcVmorWRddH1BdKCoWFSoko8oSr2uUbSo4WRvAWQevW4ddTSk7ECkXdSkab8oRj8otWRGRc1xcTYVcLCk4W5eH", "qt7dS0RdOG", "qdnlEsz/W6BdHmobWRJdH8ozzmk3W5C", "W6FcVcpdO2xdPfBdQG", "W4hcLg3cRgO", "j8kdugy", "5BMn6lYY77Ys", "kSkkCgyj", "5BEN5A6d5OQE5ysf6yod5lUZ5yI5W5lNR4VLVyxLU5VOV6RLKPtNUkhNUilKUy7KUzlKUQpOTA7LJRm", "WOCUWP9Mj8o5W5K", "uM3cQxW", "W7/dGCou", "W5LWr0ChiG", "WOm8t08", "W5JcHMlcPhW", "DMtdNrLkFmoTWO0", "os/NUz3MNlikkpc5LQxcOG", "mmktBZhdG8kfW6e", "dSk4BeaS", "WPTlvhiHWRO", "vZZdIvlcUW", "emk1ushdIq", "EMmGmmkrWPdcLW"].concat(function () {
        return ["WOpcIXxdVSkA", "BZLAzW", "yZBdQvFcQfRcRMVcOmokW55kWQqg", "W7/dTbFdVmkJ", "W5NdLaJdQmk8W5xdQKFdUCk7s8oC", "WRJdJLpcOhVdUSoOWPHBWQ/dSmoBqCkX", "W47dR2Wt", "W7BcQ8ozWRdcRW", "CSospG", "k8kBESk5aG", "yc0q", "x8oSWOhdQuNdVCkF", "E8otW5lcL8o6", "WOFdMMXpW4Cy", "W7xcP2JdNa46DW", "w8o7WPZdUu3dJ8kxWQxcLsJcLun4", "uCoPW4tcI8oXj8oC", "nCocW7zbEq", "o0u5jSkY", "s8oUW7tcJmoKhCoTW7rf", "WP8ocSotbau", "yaFdIK7cRG", "wh/cLMxdV23dPq", "W4hcQ8obWRFcUa", "W6RcHw7cQ0y", "W4FcHWz6pW", "tG0pW5RcOG", "dKOj", "WRxdM8oaWOqd", "z2RdQHHiBq", "yI0djSkoBcPIkd/cPJVcMW", "FmkNWRq", "B8oCq8oflqW", "W4hcTeFcIw0", "W4/cGLVcSxWQW6JcLa", "WOCXBSodW6e", "amkjrSkcifm1W7PNWPK", "nSkCFIpdQ2frW7FdRYq", "WRGXyCoIW6tdV8o5WOT2jSkoW5K", "s8kbWRBcPIS", "WQacW7yb", "W7ykdmoFWRi", "WRqwW7eiW7OjWQef", "WOindSoscbW", "WPtcNbRdKSkr", "W73cLGW", "DJ/dSM7cUW", "W4ldHIJdO8k3W50", "FdLDvYjOW7C", "W7ddQM8kdW", "W7RcIx7cVeC", "BteejSkkzW", "bCoxW5HtCmkWW6HD", "W77cGCo2WPlcKSkYrxCwW7u", "pvZdOWS8", "W484DmoytW", "W4RdV2Wp", "AJm1kSkQ", "W67cTumovSooWP4aAe8YlY8", "WRLbvMOq", "FdZdVgxcRvFcR28", "WP7cQG/dRCkCW7bRyNy", "W7RcKri", "W63JGOtMRj/OHkhMNyRKUl3NLOlKU6hLRAVKUAVNOyRNQiJVVy/KUO3KVlJORRxLH7RLKPJMSlRMGlhJGllLHPNNORlMGjlJG7dMN4/MLiFMGitVVjpORzpMOOFMJzpMGRVLHlxOHiBOOiVLIAhMLzpVVRVMNBNKUzlLRORMR7FKU7JMIllMI7ZKUiNKVzlKVQZORBZOT77KUO/JGzi", "W5RcLZO", "W6pcJbK", "W7WSfmoSWRFdRL0", "zmomrCoslW", "u8kO6zsc6k+kW5m", "xL3cLIHA", "dSoDW4S", "d8oxW5HZCmkH", "zSotASo+nG", "a8oqW58", "WQ7dPbvFcCkv", "EmkHWQpcOIhcVhxdMq", "t8oMWPhdQa", "wHbeW6jXWPhcKSo5WRqOWRJdOcq", "WRxdTJvuaSkD", "sx7cNeldTW", "aCkqw8kqeKKkW6y", "oCkwEsRdNMq", "FKJcHdTVtfpdVa", "EGVdJuNcHa", "DZnoya", "WQJJGAlLPAJMNRxKUARKVPpLJ5xKVPVMIk/KUkJKURlORkBKUjtMRkdOH6dMNjFLJjhOGihMTP7LQ7BKVBNNIQZLHyhMNPZLIO7VVOhLUPJLJ6pMLO3PGPVNN6pLU5NMJ5hKVj3OUjFKUQlORPBMMjlVVlFMIkZMN7VMNQVORRVMMA3VVkNMIAtKUAVLSlFLNAZMLPRLI5xORAhORlZMLR/KU6pNO4VORk/LKBZLIjVPMitMR5NOHRRMNzJJGRy", "W4BcGdGtWRXbAmorzwyieHO", "cGPjWRJdJW", "WPWdb8oLaGfgW5tcKexcPCkm", "o1Gr", "DeJcNt8", "zw7dVb5o", "DaVdKMxdKH/dMa", "D8oof8o3W5KN", "W4eYWOrTlSoWW4q0W7a", "W7VcNCoCWPZcHCk/", "W5vVrum5", "W5FdGmorWQzK", "WRGdW7ezW49AW6jpW6bIW7dcRSozWRJcIaNcGmk1i8kbzSo7hd57c8kUW65FWQjiW4ZdP8kMDmoSq8kwgSkHoSojWRrSxJtcQYpcLmkXWPz1wSk0mmkfW6yOW68lvauKW43dPY/cKq", "bSkgsW", "BcBdPu3dNG", "yH/dVepcGG", "W4r6qfS", "WO3dHvxcSq", "W50RmSo9WRS", "W7rwW6hdISoDWR7dKmkJW4rt", "oCo+BwNcGG", "gXrBWOu", "iKqe", "rGW5hmkl", "W6jWuKK7", "DSoZrCoqiW", "WRJdKwtcNL8", "xNNcGgRdMq", "t1veW6D6WOBdK8kGW7TgWRhdMMxdSbubW5u+b0FdRv7dQCoXmWFcSIr3wIVdLCkdW7/dUSohdG", "dmoTB1pcK8kn", "W5OYWOj0m8kTWOj9W63dRmokW6uqzeldPhxdMXtdNmomoKH6WQSfCmkbW4ldLCkDhmoRvSoVWO8CWQTLW5qYuJ5hjmoxWROnoSk4cCotWOVdVMK", "jCoblW", "W61lW6K", "WPWdbmoxfbL4W5xcLeu", "k8koxMyFW4S", "BmoykSo3W5e0W5C", "WQawW7CAW5K", "WRZdHv1gW5O", "W4dcNmo3WQdcQW", "FdLDDYjOW7m", "DSojlCoOW68NW4n6tG3cHW", "WPWdbW", "W5Lds3OW", "W5/dV3ytoa", "BmoyoSo9W5q0W5DzhG", "W7NdPmoAWRnx", "W5StWQbRdG", "z8k1WQVcTq", "WRNdVq9jb8kBW54/BhK/eXxdOCkjaCoPW6m", "e8key0e3", "W5iLuWyyzYVdR2BcIthcHCkn", "hq5o", "W7lcVXW", "gbXiWOm", "qxVdKYPau8odWP5nW5G", "W7NcHbXGdIG", "AcmdlG", "WPNdLtvYhW", "WPqGWP92lCkQW7u7W6JdQCkjW7XxEe7dS2FdGKBcN8kzjHSNW6bzy8kFW4/cHa", "WQZdHfm", "W7tcRNpdPXu", "odFcSrFcTq", "aq3cNIFcUa", "buatWR08W4G", "W5ePWPLVkCoYW6CZW7S", "WQhcKSkLWO/dK8kMi2XhW73dHCkSwexcRuaDAXLolCog", "qxNdL2nmvmodWP5oW5G", "qrNdGv3dSa", "BX3dSxZdGrVdMa", "W5ddGCoCWP1xDG", "WQG7FSoSW63cVa", "5lUH6lAn5y+q", "hSo4A0NcM8kcW5tdJID8W6v8W4NcKSoqdW", "WRFdVXf9kG", "q8kAwSom", "W5ldTxSAgfxcOan9WOa", "umkcWPKRkCoYWQ59hcrEx3u", "W4NdU3yp", "vSorW6xcVCoN", "W7CqWQrgW7xcOW", "WPG7W4BdNSk8", "W78tcmoEWPG", "W7xdNmoCWPS", "aCozW5H0ASkIW7i", "W6RcTtNcVae", "l1SthCkFWRtcRmkGW7KYW7RcL1jCemkpWRrNkSkHrCkBW6BdLCkhpSk5WP8gc8oYWOml", "55AC5OII5l+s5Oga5Awz6lwJ", "W7ynWOzVmG", "kbxcTYVcTW", "nIpcQtZdVaBdQJJdK8ktWOPXW7rcuKaPeh0JWO3dOLv5sCkpveKcWO4ymqCHWP3cTWCfkCkUW7uvW6TYrSkIW4ddRIfwWQXVc8olpSogamkLWQKcjZVcI8k/WOBcVCkwWPjIWOGfW5dcKJtcGrBcQmo3WRivW6ifWOqWxhX+qCkttsFcLSowtmogW7tdOSkuz8kk", "W5FcUmovWRtcUa", "q2NcTxZdRgNdPq", "W7LYW6RdSSof", "WOhcQaVdHSk7", "E8kXWRBcVdNcJgq", "W4XNAN0s", "WRSSFCoXW6NcLmoZWOH8hSkEW5ldQa", "lEoaQoAkSoADK+EBNEAoGoAiQEMvREAmSUs+OUEvVUocI+AEIEEFOEAVN+IeJoADGoEBMUs4HUwDVUw4SoIUOEs6VUE7PEMzP+ISJEASSowHQEABLEodMUACMUs5GEs8IEEuNUMBVoAxKEAAUoAxSEAlQ+IHIUweMoASTUwGOUAyRUEzNoAFQowiUoocJEs7JUAwOEAbHEs/MUExQEAkVUwNLUwlV+s7KEASLEIgTUAEQo+8GowoQ+IKMos7TEAcJUw3I+AmSowmG+AUGEwgKUI3L+wIQ+ABVEobNG", "W6dcOXZdVMm", "W6HyW7hdGW", "W43dQNmshW", "pKJdVcCn", "hfyyWQGbW47dHCo+", "W6dcTGtdOxBdOq", "W4m+vbmrttS", "W5ldTxG", "WQ7dObPFd8kwW407zgy7", "W7yCW7fu", "AmoBtbpcJfevWQS", "WOvkC2KGWRS0DCko", "WOddNh9aW6i1mCouta", "b2eHacGL", "fXRcJYNdRG", "W6GPWR5ukq", "C8kdDJ/dI2edWRpcSwiVW73dJmkjnhtdTmoZuL7cOq/dJG", "a8oqW49/ESkJW71gfcT3r03cOmkyWPbBaZZcRMOzWOGVW4X+W7qjWOeuW5hcHuhcOSoDxW", "W7awWOzf", "tmo/W6BcIG", "W7RdTrPjb8kvWPDEidT4ds7dOSkkdmoLW7tdKLqbo8kjq8ojWR4yD0ZdPCoez03cUCkykHxcV8oNdmkHo8kGWPD0hmoartJdTSoUbxuRAXtdSCkyW7pcMSo6h8oZtcVcRCogW4iBCCo9W7nmtmkhcJCCdZpcKSkvW7FcIhXZW5LhtgZcIfX5W5S8W6FcULRdOSk9W7jznCkaW5vAlNpcQCoLWPzxWOhcONbje2LNiq8I", "WOa8ECkQ", "jSkwyZVdI2a", "sInjzgC", "W7e8WQpdImoZ", "W4NdGHpdN8kd", "f8oLW59TrG", "mmktpx4", "W7NcHbXDcJ0", "hhWBgSkh", "W4C1WOq", "eCkHDSkxpW", "DG/dLMe", "t8oIWP/dRfO", "rh/cTW", "Fr5cDvK", "WRGsW6qnW5KsWR4", "W63dMudcGIFcOCk7WO0SW70", "WOb2W44XCmkHWPK9W6ZdGSkiW4qD", "W5xcJgxcOa", "t1aoWQH1", "EmoqySoypa", "umoUW6hcJSoJC8kRWRzenYffWQD7WO4IsxZdGfLbrqpdM8kMWRlcNa/cId3dOvZcGr3cNCkNqabRW43dTSkQWP1EWR4NW4hcLGRcIwG", "W67cIGRcQsC", "ymknrGBdUG", "6zQU6k2o5OM25yIt", "sSo/W7tcMG", "W5G8WR5qma", "WRJcKqLKdINcISksW4RdGLncfImFW5PhnmohWQBdNW", "FCoAbs4", "l8kTu3y3", "gSoqDNxcQW", "lCkzgCoImdxdVqRcOG", "EsddL3lcPLG", "W5n6rW", "55AW5OIo5l2K5Ooe", "BGVdG23dLG7dJG", "WQpdG+MvP+ISQwG", "B3pcHq1T", "W7PwW6hdKG", "wglcOxxdTuxdPG", "WQJcHbZdO8kh", "W5VcOG/cTJK", "FbFdH2ddLW", "W4RcTr7dU0C", "W5RdU2SA", "kSogW7vbrG", "WRXZBMGG", "pCoSDKhcKW", "mmktpxpcN8ooWQWedd8", "W79CW7hdV8ohWRVdQG", "Bmoiu8ofpa", "irjwWOhdQq", "aCkqw8kq", "abZcJcVcVYrD", "bSkEqSkbivqdW5bGWP3dPmkCWR/dJmkbW5C", "BCojomoQW4KwW5TItG", "WQNcK03dT3q", "vMNcSv3dOMtdTmo/", "WR5jW6BdISktWRxdP8kXW49jdSkxEX4gAmoPWRTrWQtdRSkc", "EdDDFdz7W7O", "W6BdM8oAWPi", "aHJcIYW", "WPRcLJZdHSk8", "ErTfza", "WQ81rCoYW4G", "dKaj", "W50tWQfVW6G", "rYjI", "eCohW45OA8k3", "WPq2W4qYFCkLWPr0W7NcTmoCWQG", "FcLcydy", "W6hcMSoGWPRcJ8k9C3yk", "WP3cNtVdStmBW6/cKSoWW7WnvaBdRCojW7BdN2FcLruUpmkLWQ3cQKXNWQVdU8kkkSkyW4VcNgZcRMpdQmoYjthdRCkRbG", "W4VcLXJcTdO", "e8oNFa", "WOK8gSooaq", "EsWtkSklybjUka", "WP3cMwhcQgSWW7lcKSoYW6fz", "WRtdObPFa8kkW5K", "W7dcGCo2WOO", "x8o1W6e", "WQG/ymoKW4RcU8o2WOe", "WRCsW7e", "W6BcKdtcLqyZzmk3W4ZdR8kvvW"];
      }());
    }());
  }();
  _0x44df = function () {
    return _0x40ff98;
  };
  return _0x44df();
}
;
class UserInfo {
  constructor(_0x5175ff) {
    const _0x4d8d19 = _0x59a748,
      _0x2bd204 = {
        "VOBDd": _0x4d8d19(667, "xlhI")
      },
      _0x289c18 = _0x2bd204[_0x4d8d19(923, "QR)n")][_0x4d8d19(268, "8m^2")]("|");
    let _0x832af6 = 0;
    while (!![]) {
      switch (_0x289c18[_0x832af6++]) {
        case "0":
          this[_0x4d8d19(633, "ms*h")] = "";
          continue;
        case "1":
          this["p2"] = "";
          continue;
        case "2":
          this[_0x4d8d19(270, "fxnj")] = !![];
          continue;
        case "3":
          this[_0x4d8d19(383, "QR)n")] = ++userIdx;
          continue;
        case "4":
          this["usr"] = "";
          continue;
        case "5":
          this["p7"] = "";
          continue;
        case "6":
          this["kt"] = "";
          continue;
        case "7":
          this["ck"] = _0x5175ff["split"](strSplitor)[0];
          continue;
        case "8":
          this["p1"] = "";
          continue;
        case "9":
          this[_0x4d8d19(1012, "nB0E")] = "";
          continue;
        case "10":
          this["p3"] = "";
          continue;
      }
      break;
    }
  }
  async ["main"]() {
    const _0x20776e = _0x59a748,
      _0x113e67 = {
        "QfZHB": _0x20776e(580, "nB0E"),
        "TucOu": function (_0x1cdb63, _0x4ff0af) {
          return _0x1cdb63 === _0x4ff0af;
        },
        "jWeUm": _0x20776e(347, "8m^2"),
        "cfCft": "0123456789",
        "zmoqn": _0x20776e(453, "fU8G"),
        "Tnral": _0x20776e(1067, "*#pD"),
        "AGArk": "\u7528\u6237\u4FE1\u606F",
        "EInZg": _0x20776e(289, "race"),
        "GpWEa": function (_0x1f9339, _0x50e706) {
          return _0x1f9339 == _0x50e706;
        },
        "nPFWs": function (_0x207a9f, _0x245722) {
          return _0x207a9f >= _0x245722;
        },
        "rMkli": _0x20776e(1003, "@EdC"),
        "uZuWD": function (_0x37c0de, _0x196e6e) {
          return _0x37c0de !== _0x196e6e;
        },
        "VnZLK": _0x20776e(843, "v1ox"),
        "CIGij": _0x20776e(686, "gJDJ"),
        "dKWTL": "IrPKf",
        "ZUWUA": _0x20776e(565, "8YAN"),
        "MyGVa": _0x20776e(817, "drE]"),
        "TbZyt": _0x20776e(629, "race"),
        "czunz": function (_0x5e93fb, _0x309956) {
          return _0x5e93fb + _0x309956;
        },
        "zYOLc": _0x20776e(449, "QR)n"),
        "YfnlP": _0x20776e(1123, "R1Qv"),
        "vwhlg": function (_0x4b6358, _0xf81fa7) {
          return _0x4b6358 == _0xf81fa7;
        },
        "iUVoN": function (_0x308838, _0x2abcfc) {
          return _0x308838(_0x2abcfc);
        },
        "WBAFk": function (_0x3f7b96, _0x24b8bf) {
          return _0x3f7b96 < _0x24b8bf;
        },
        "rXdtw": "10348-0",
        "tgnZl": function (_0x328004, _0x5a85bd) {
          return _0x328004 == _0x5a85bd;
        },
        "iltaf": _0x20776e(501, "m(XK"),
        "FhKHP": _0x20776e(499, "H4#!")
      },
      _0x4cfb5d = this["ck"];
    this[_0x20776e(497, "H4#!")] = this["extractParamValues"](_0x4cfb5d, _0x113e67[_0x20776e(997, "@EdC")]), this["usr"] = this[_0x20776e(910, "WhP5")](_0x4cfb5d, _0x20776e(810, "drE]")), this["kt"] = this[_0x20776e(650, "gptZ")](_0x4cfb5d, "kt"), this["p1"] = this["extractParamValues"](_0x4cfb5d, "p1"), this["p2"] = this["extractParamValues"](_0x4cfb5d, "p2"), this["p3"] = this[_0x20776e(401, "s5*X")](_0x4cfb5d, "p3"), this["p7"] = this[_0x20776e(822, "8YAN")](_0x4cfb5d, "p7"), this[_0x20776e(398, "SteG")] = this[_0x20776e(362, "@IdH")](_0x4cfb5d, _0x113e67["Tnral"]);
    try {
      let _0xcb2d = {
          "fn": _0x113e67[_0x20776e(451, "xlhI")],
          "method": _0x113e67["EInZg"],
          "url": _0x20776e(632, "8m^2") + this[_0x20776e(482, "Yvqf")] + "&rgt=7&p1=" + this["p1"] + _0x20776e(1004, "*rU%") + this["p2"] + _0x20776e(317, "Wh6L") + this["p3"] + "&p4=501656&p5=19&p7=" + this["p7"] + _0x20776e(921, "s5*X") + this["p3"] + _0x20776e(896, "gJDJ") + this[_0x20776e(860, "race")] + _0x20776e(984, "8m^2") + this["p7"] + _0x20776e(906, "nB0E") + this[_0x20776e(497, "H4#!")] + _0x20776e(892, "xlhI") + this[_0x20776e(439, "JQ5o")] + "&kt=" + this["kt"] + _0x20776e(414, "gptZ"),
          "headers": {}
        },
        {
          body: _0x2f35c6
        } = await $[_0x20776e(642, "UJpX")](_0xcb2d);
      if (_0x113e67["GpWEa"](_0x2f35c6[_0x20776e(592, "R1Qv")], 0)) {
        $["log"]("\u91D1\u5E01" + _0x2f35c6[_0x20776e(800, "xlhI")][_0x20776e(553, "ms*h")][_0x20776e(1069, "xlhI")] + _0x20776e(979, "(%T6") + _0x2f35c6[_0x20776e(759, "U(UW")][_0x20776e(712, "nB0E")]);
        if (_0x113e67["nPFWs"](_0x2f35c6[_0x20776e(288, "(Pxo")][_0x20776e(1025, "fU8G")], xianjin)) {
          if (_0x113e67[_0x20776e(1072, "*rU%")] !== _0x20776e(431, "gxNC")) var _0x5d0ae5 = 1;else {
            const _0x340bae = _0x1ee292[_0x20776e(1064, "K7Xb")](/\[(\d+)\]/g, _0x113e67[_0x20776e(926, "K7Xb")])[_0x20776e(941, "3con")](".");
            let _0x3006bf = _0x56d875;
            for (const _0x24e616 of _0x340bae) if (_0x3006bf = _0x329fde(_0x3006bf)[_0x24e616], _0x113e67["TucOu"](void 0, _0x3006bf)) return _0x1f3060;
            return _0x3006bf;
          }
        }
        this["ckStatus"] = !![];
      } else {
        if (_0x113e67[_0x20776e(758, ")#[a")](_0x113e67["VnZLK"], _0x113e67[_0x20776e(528, "v1ox")])) console[_0x20776e(953, "bavJ")](_0x20776e(830, "Yvqf")), this["ckStatus"] = ![];else {
          const _0x10f909 = _0x113e67["jWeUm"]["split"]("|");
          let _0x329567 = 0;
          while (!![]) {
            switch (_0x10f909[_0x329567++]) {
              case "0":
                this["p7"] = "";
                continue;
              case "1":
                this["usr"] = "";
                continue;
              case "2":
                this["ck"] = _0x3848bc["split"](_0x34896a)[0];
                continue;
              case "3":
                this["p28"] = "";
                continue;
              case "4":
                this["ckStatus"] = !![];
                continue;
              case "5":
                this["p1"] = "";
                continue;
              case "6":
                this["kt"] = "";
                continue;
              case "7":
                this[_0x20776e(912, "i9xe")] = ++_0x11d852;
                continue;
              case "8":
                this["p3"] = "";
                continue;
              case "9":
                this["zyeid"] = "";
                continue;
              case "10":
                this["p2"] = "";
                continue;
            }
            break;
          }
        }
      }
    } catch (_0x519907) {
      console[_0x20776e(1105, "@EdC")](_0x519907);
    }
    if (this[_0x20776e(868, "U(UW")]) {
      if (_0x113e67["TucOu"](_0x113e67["dKWTL"], _0x113e67[_0x20776e(570, "*#pD")])) {
        const _0x6d9f85 = _0x113e67["cfCft"];
        return _0x164e47["from"]({
          "length": _0xf3dbeb
        }, () => _0x6d9f85[_0x3260ab["floor"](_0x3298c8[_0x20776e(590, "gptZ")]() * _0x6d9f85[_0x20776e(884, "drE]")])])["join"]("");
      } else {
        if (_0x113e67["GpWEa"](_0x5d0ae5, 1)) {
          if (_0x113e67[_0x20776e(815, "8m^2")] !== _0x113e67[_0x20776e(932, "@IdH")]) console["log"](_0x113e67[_0x20776e(1026, "ms*h")](_0x113e67[_0x20776e(840, "vdg*")](_0x20776e(473, "i9xe"), xianjin), _0x113e67[_0x20776e(549, "H4#!")]));else var _0x2a686c = 1;
        } else {
          await this[_0x20776e(900, "YLV&")](_0x113e67[_0x20776e(764, "Yvqf")], 1), await this["moneyChallengeReport"](_0x113e67[_0x20776e(541, "WhP5")], 2);
          if (_0x113e67[_0x20776e(334, "s5*X")](shua, 1)) {
            console[_0x20776e(795, "(%T6")]("\u6B63\u5728\u8DD1\u5176\u4ED6\u4EFB\u52A1\u8BF7\u7A0D\u7B49======="), await this["signIn"]();
            let _0xe11325 = [73, 74, 133, 125, 75, 134, 76, 77, 135, 126];
            for (let _0x1a9031 of _0xe11325) {
              await this["receiveV5"](1, _0x20776e(749, "(Pxo") + _0x1a9031);
            }
            await _0x113e67[_0x20776e(648, "8m^2")](sleep, 20000);
            for (let _0x2a7908 = 0; _0x113e67[_0x20776e(940, "bavJ")](_0x2a7908, 10); _0x2a7908++) {
              await this[_0x20776e(577, "*rU%")](1002, _0x113e67[_0x20776e(1030, "H4#!")]);
            }
            _0x113e67[_0x20776e(456, "2$1i")](yuedu, 1) && (await this["readingTime"]()), console[_0x20776e(274, "JQ5o")](_0x113e67[_0x20776e(420, "gxNC")]), console["log"](_0x113e67[_0x20776e(929, "*rU%")](_0x113e67[_0x20776e(1035, "Yvqf")], sleep1) + "ms"), await _0x113e67[_0x20776e(1103, "v1ox")](sleep, sleep1);
          }
          await this[_0x20776e(346, "WhP5")]();
        }
        console[_0x20776e(1088, "[Gg*")](""), console[_0x20776e(835, "CQ4*")]("--------\u5F00\u59CB\u4E0B\u4E00\u4E2A\u8D26\u53F7--------");
      }
    }
  }
  [_0x59a748(865, "nB0E")](_0x7a4946, _0x2fbbe3) {
    const _0xc515f5 = _0x59a748,
      _0x203fc4 = new RegExp(_0x2fbbe3 + _0xc515f5(710, "ms*h")),
      _0x1ad6c0 = _0x7a4946["match"](_0x203fc4);
    return _0x1ad6c0 ? _0x1ad6c0[1] : null;
  }
  async [_0x59a748(704, "wA72")]() {
    const _0x5b5572 = _0x59a748,
      _0x2e8b72 = {
        "OPzRa": _0x5b5572(298, "s5*X"),
        "Ubfno": _0x5b5572(768, "(%T6"),
        "XZnPB": _0x5b5572(755, "U(UW"),
        "fdiVp": _0x5b5572(803, "@IdH"),
        "uBwcT": function (_0x5b9d3a, _0x3ee8c7) {
          return _0x5b9d3a == _0x3ee8c7;
        }
      };
    try {
      if (_0x2e8b72[_0x5b5572(952, "8YAN")] !== _0x2e8b72[_0x5b5572(438, "@EdC")]) {
        let _0x1a332f = {
            "fn": _0x2e8b72["XZnPB"],
            "method": _0x2e8b72[_0x5b5572(957, "2$1i")],
            "url": _0x5b5572(1016, "H4#!") + this["usr"] + _0x5b5572(656, "*#pD") + this["p1"] + _0x5b5572(945, "R1Qv") + this["p2"] + "&p3=" + this["p3"] + _0x5b5572(429, "nB0E") + this["p7"] + _0x5b5572(630, "wA72") + this["p3"] + _0x5b5572(365, "v1ox") + this["p28"] + _0x5b5572(777, "gJDJ") + this["p7"] + _0x5b5572(489, "*#pD") + this[_0x5b5572(328, "Wh6L")] + _0x5b5572(1120, "(%T6") + this[_0x5b5572(439, "JQ5o")] + _0x5b5572(1118, "Wh6L") + this["kt"] + _0x5b5572(942, "YLV&"),
            "headers": {}
          },
          {
            body: _0x2ac7f2
          } = await $["httpRequest"](_0x1a332f);
        _0x2e8b72[_0x5b5572(487, "xlhI")](_0x2ac7f2[_0x5b5572(498, "(Pxo")], 0) ? ($[_0x5b5572(361, "v1ox")](_0x5b5572(264, "Sb5T") + _0x2ac7f2[_0x5b5572(283, "2$1i")][_0x5b5572(485, "race")][_0x5b5572(276, "Yvqf")] + _0x5b5572(979, "(%T6") + _0x2ac7f2["body"]["totalCash"]), this[_0x5b5572(388, "drE]")] = !![]) : (console[_0x5b5572(707, "8YAN")](_0x5b5572(1095, "3con")), this[_0x5b5572(508, "m(XK")] = ![]);
      } else _0x2d2894["log"](_0x5b5572(833, "m(XK")), _0x34abc2[_0x5b5572(327, "s5*X")]("1");
    } catch (_0x12f781) {
      console[_0x5b5572(643, "fU8G")](_0x12f781);
    }
  }
  async [_0x59a748(529, "nB0E")]() {
    const _0x4c5893 = _0x59a748,
      _0x2a2e1a = {
        "nVvMI": _0x4c5893(623, "SteG"),
        "TuJXo": "get",
        "BwYcf": function (_0x4fd15a, _0x7142a7) {
          return _0x4fd15a == _0x7142a7;
        },
        "JrWpZ": "\u8D26\u53F7\u7B26\u5408\u65B0\u4EBA\u798F\u5229\u9886\u53D6\u8981\u6C42,\u65B0\u624B\u5956\u52B1\u9886\u53D6\u6210\u529F",
        "UcSae": function (_0x213e3e, _0x44831f) {
          return _0x213e3e !== _0x44831f;
        },
        "EFFlc": "cIHfM",
        "INclm": "\u6B64\u8D26\u53F7\u8DF3\u8FC7\u65B0\u624B\u5956\u52B1\u4EFB\u52A1"
      };
    let _0x3e098e = new Date()[_0x4c5893(417, "wA72")](),
      _0x3f6924 = this[_0x4c5893(1124, "Wh6L")](_0x4c5893(291, "fU8G") + this["p2"] + _0x4c5893(748, "WhP5") + _0x3e098e + _0x4c5893(1122, "UJpX") + this[_0x4c5893(730, "8m^2")]);
    try {
      let _0x30c221 = {
          "fn": _0x2a2e1a["nVvMI"],
          "method": _0x2a2e1a[_0x4c5893(1010, "WhP5")],
          "url": _0x4c5893(742, "v1ox") + this[_0x4c5893(391, ")#[a")] + _0x4c5893(870, "UJpX") + this["p1"] + _0x4c5893(976, "SteG") + this["p2"] + _0x4c5893(946, "(%T6") + this["p3"] + _0x4c5893(809, "drE]") + this["p3"] + "&p26=29&p28=" + this["p28"] + _0x4c5893(542, "SteG") + this["p7"] + "&p34=Xiaomi&p33=com.chaozh.iReader.dj&zyeid=" + this[_0x4c5893(763, "JQ5o")] + _0x4c5893(914, "wA72") + this[_0x4c5893(653, "SteG")] + "&kt=" + this["kt"] + "&firm=Xiaomi&param=1-0&sign=" + _0x3f6924 + "&timestamp=" + _0x3e098e + _0x4c5893(720, "gptZ"),
          "headers": {}
        },
        {
          body: _0x2bee04
        } = await $["httpRequest"](_0x30c221);
      _0x2a2e1a["BwYcf"](_0x2bee04[_0x4c5893(498, "(Pxo")], 0) ? $[_0x4c5893(361, "v1ox")](_0x2a2e1a[_0x4c5893(949, "K7Xb")]) : _0x2a2e1a[_0x4c5893(825, "s5*X")](_0x2a2e1a[_0x4c5893(514, "ms*h")], _0x2a2e1a["EFFlc"]) ? _0x42d0f8 = _0x4c5893(374, "UJpX") : $["log"](_0x2a2e1a[_0x4c5893(961, "eki$")]);
    } catch (_0x23c493) {
      console[_0x4c5893(332, "Yvqf")](_0x23c493);
    }
  }
  async ["boxSpeed"]() {
    const _0x1c826e = _0x59a748,
      _0xb7398 = {
        "JNNSf": _0x1c826e(309, "UJpX"),
        "fdukv": _0x1c826e(546, "3con"),
        "hmcsO": _0x1c826e(381, "eC^l"),
        "HPkWE": function (_0x3f7d6b, _0x27b181) {
          return _0x3f7d6b == _0x27b181;
        },
        "CRTKu": "OORCD"
      };
    let _0x2b97b3 = new Date()[_0x1c826e(863, "Wh6L")](),
      _0xe9e460 = this[_0x1c826e(816, "WhP5")](_0x1c826e(484, "Yvqf") + this["p2"] + _0x1c826e(716, "ms*h") + _0x2b97b3 + _0x1c826e(544, "vdg*") + this[_0x1c826e(482, "Yvqf")]);
    try {
      if (_0xb7398[_0x1c826e(663, "jcyg")] === _0xb7398[_0x1c826e(625, "3con")]) {
        let _0x1200e3 = {
            "fn": _0xb7398["fdukv"],
            "method": _0xb7398[_0x1c826e(888, "wA72")],
            "url": _0x1c826e(869, "vdg*") + this[_0x1c826e(267, "U(UW")] + _0x1c826e(1023, "ms*h") + this["p1"] + _0x1c826e(968, "QR)n") + this["p2"] + _0x1c826e(727, "bavJ") + this["p3"] + "&p4=501656&p5=19&p7=__065c2fafc186f316&p9=2&p16=MI+8+Lite&p21=3&p22=10&p25=" + this["p3"] + _0x1c826e(790, "8m^2") + this[_0x1c826e(415, "nB0E")] + "&p31=" + this["p7"] + _0x1c826e(1086, "gptZ") + this["zyeid"] + "&pca=channel-visit&ku=" + this[_0x1c826e(1129, "gJDJ")] + _0x1c826e(392, "m(XK") + this["kt"] + _0x1c826e(660, "8m^2") + _0xe9e460 + "&timestamp=" + _0x2b97b3 + _0x1c826e(303, "WhP5"),
            "headers": {}
          },
          {
            body: _0x86adf6
          } = await $["httpRequest"](_0x1200e3);
        _0xb7398[_0x1c826e(333, "H4#!")](_0x86adf6[_0x1c826e(851, "jcyg")], 0) ? _0xb7398[_0x1c826e(304, "wA72")] === _0x1c826e(735, "s5*X") ? $[_0x1c826e(953, "bavJ")](JSON[_0x1c826e(846, "2$1i")](_0x86adf6)) : _0x588c90["msg"](_0x2c989a["name"], "", _0x256c28) : console[_0x1c826e(918, "m(XK")](_0x1c826e(1111, "ms*h"));
      } else _0x61b3b8["log"](_0x240d34);
    } catch (_0x47cb1e) {
      console[_0x1c826e(504, "vdg*")](_0x47cb1e);
    }
  }
  async [_0x59a748(950, "gJDJ")](_0x117184, _0x499bd5) {
    const _0x2e9761 = _0x59a748,
      _0x4fa798 = {
        "jHGDm": function (_0xfe1e87, _0x151905) {
          return _0xfe1e87 !== _0x151905;
        },
        "guksu": _0x2e9761(934, "Yvqf")
      };
    let _0x15b56d = new Date()[_0x2e9761(962, "i9xe")](),
      _0x5e21ec = this[_0x2e9761(974, ")#[a")](_0x2e9761(371, "(Pxo") + this["p2"] + _0x2e9761(510, "bavJ") + _0x499bd5 + _0x2e9761(1044, "SteG") + _0x15b56d + _0x2e9761(492, "#a%H") + this["usr"]);
    try {
      let _0x5eb844 = {
          "fn": _0x2e9761(646, "UJpX"),
          "method": "get",
          "url": _0x2e9761(807, "v1ox") + this[_0x2e9761(385, "(%T6")] + "&rgt=7&p1=" + this["p1"] + _0x2e9761(947, "gxNC") + this["p2"] + "&p3=" + this["p3"] + "&p4=501656&p5=19&p7=__065c2fafc186f316&p9=2&p16=MI+8+Lite&p21=3&p22=10&p25=" + this["p3"] + _0x2e9761(365, "v1ox") + this[_0x2e9761(860, "race")] + _0x2e9761(1056, "3con") + this["p7"] + _0x2e9761(793, "H4#!") + this[_0x2e9761(453, "fU8G")] + _0x2e9761(779, "U(UW") + this[_0x2e9761(282, "US*&")] + "&kt=" + this["kt"] + _0x2e9761(285, "eC^l") + _0x499bd5 + _0x2e9761(1104, "R1Qv") + _0x5e21ec + _0x2e9761(408, "K7Xb") + _0x15b56d + _0x2e9761(858, "*#pD") + _0x117184 + _0x2e9761(480, "K7Xb") + _0x499bd5 + "&smboxid=B2dUv8xWTSAzZ39tmPAPYIH3b9%2BIK3q%2BBlbqOwFewGkaLg6vIJuPFBZWUYvbg9c8eE2s2t%2FSMHN0j8f%2Bulg%2BRow%3D%3D",
          "headers": {}
        },
        {
          body: _0x2065d0
        } = await $[_0x2e9761(864, "(%T6")](_0x5eb844);
    } catch (_0x54b6f2) {
      if (_0x4fa798[_0x2e9761(616, "JQ5o")](_0x4fa798[_0x2e9761(1128, "3con")], _0x4fa798[_0x2e9761(791, "Wh6L")])) return ![];else console["log"](_0x54b6f2);
    }
  }
  async [_0x59a748(848, "UJpX")](_0x36aba3, _0x5a5e2b) {
    const _0x18e416 = _0x59a748,
      _0x5eda15 = {
        "uYdJL": _0x18e416(848, "UJpX"),
        "jsRlp": _0x18e416(786, "wA72"),
        "JhWMu": function (_0x14cba6, _0x4040c1) {
          return _0x14cba6 == _0x4040c1;
        },
        "NkoBp": function (_0x4f1195, _0x120d71) {
          return _0x4f1195 !== _0x120d71;
        },
        "YAHyp": _0x18e416(1092, "[Gg*"),
        "SyBPg": "\u5237\u91D1\u5E01\u6210\u529F",
        "ioyOB": "xmHAi"
      };
    let _0x3e7203 = new Date()["getTime"](),
      _0x21dfa5 = this["computeSignature"](_0x18e416(714, "jcyg") + _0x36aba3 + _0x18e416(798, "H4#!") + _0x3e7203 + _0x18e416(827, "Sb5T") + _0x5a5e2b + _0x18e416(1116, "(Pxo") + this[_0x18e416(605, "eki$")]);
    try {
      let _0x3f28b2 = {
          "fn": _0x5eda15[_0x18e416(878, "gxNC")],
          "method": _0x5eda15[_0x18e416(448, "[Gg*")],
          "url": _0x18e416(614, "@IdH") + _0x36aba3 + _0x18e416(740, "wA72") + this[_0x18e416(547, "CQ4*")] + _0x18e416(1079, "m(XK") + _0x21dfa5 + _0x18e416(384, "drE]") + _0x5a5e2b + "&timestamp=" + _0x3e7203 + "&zyeid=" + this[_0x18e416(1000, "m(XK")] + _0x18e416(404, "I*]p") + this[_0x18e416(1107, "jcyg")] + _0x18e416(737, "US*&") + this["p1"] + _0x18e416(676, "eC^l") + this[_0x18e416(788, "s5*X")] + _0x18e416(709, "@IdH") + this["kt"] + _0x18e416(1114, "[Gg*") + this["p2"] + _0x18e416(619, "2$1i") + this["p3"] + "&p4=501656&p5=19&p7=__065c2fafc186f316&p9=2&p12=&p16=MI+8+Lite&p21=3&p22=10&p25=" + this["p3"] + _0x18e416(814, "jcyg") + this[_0x18e416(474, "i9xe")] + _0x18e416(769, "bavJ") + this["p7"] + _0x18e416(881, "3con"),
          "headers": {}
        },
        {
          body: _0x527550
        } = await $[_0x18e416(1055, "eC^l")](_0x3f28b2);
      if (_0x5eda15[_0x18e416(1125, "US*&")](_0x527550[_0x18e416(854, "[Gg*")], 0)) _0x5eda15[_0x18e416(427, "(Pxo")](_0x5eda15[_0x18e416(703, "*#pD")], _0x5eda15[_0x18e416(1005, "3con")]) ? _0x7111a8[_0x18e416(297, "gxNC")](_0x2fb083[_0x18e416(1007, "wA72")](_0x36404a)) : $["log"](_0x5eda15[_0x18e416(975, "@EdC")]);else {
        if (_0x5eda15["NkoBp"](_0x18e416(436, "i9xe"), _0x5eda15[_0x18e416(571, "Sb5T")])) {
          const _0x284633 = _0x3ba34a["parse"](_0x35bc0d);
          this["lodash_set"](_0x284633, _0x25901e, _0x535ee3), _0x3d8576 = this["setval"](_0x4293bc["stringify"](_0x284633), _0x2d11b6);
        } else console["log"](_0x18e416(366, "I*]p")), $["log"]("1");
      }
    } catch (_0x4f6d46) {
      console[_0x18e416(393, "K7Xb")](_0x4f6d46);
    }
  }
  async ["readingTime"]() {
    const _0x43e109 = _0x59a748,
      _0x59b6ba = {
        "BGSrU": _0x43e109(717, "drE]"),
        "iGUuA": function (_0x4af730, _0x101265) {
          return _0x4af730 * _0x101265;
        },
        "zZlfR": function (_0x148ef2, _0x403345) {
          return _0x148ef2 + _0x403345;
        },
        "HmMdk": function (_0x3ffd27, _0x640161) {
          return _0x3ffd27 + _0x640161;
        },
        "jLMGN": _0x43e109(991, "8m^2"),
        "ZmEql": _0x43e109(493, "@IdH"),
        "QJskz": _0x43e109(322, "s5*X"),
        "fqBeG": function (_0x256f11, _0x286de6) {
          return _0x256f11 !== _0x286de6;
        },
        "eXmPY": _0x43e109(1038, "gxNC"),
        "koHqS": "post",
        "ossZC": function (_0x5df2ac, _0x59b33b) {
          return _0x5df2ac + _0x59b33b;
        },
        "HtYZY": _0x43e109(463, "8YAN"),
        "oEFUB": _0x43e109(943, "eki$"),
        "pVKKW": function (_0x5a1eb6, _0x2eae8f) {
          return _0x5a1eb6 == _0x2eae8f;
        },
        "jTcWU": function (_0x4916c6, _0x4ab1d0) {
          return _0x4916c6 === _0x4ab1d0;
        },
        "QhfnH": _0x43e109(1043, "I*]p")
      };
    let _0x3c9c22 = [1, 3, 5, 7, 10, 15, 30, 60, 120, 180];
    for (let _0x2f9b14 of _0x3c9c22) {
      let _0xc50a7a = _0x59b6ba[_0x43e109(1050, "US*&")](_0x2f9b14, 60),
        _0x12c604 = new Date()[_0x43e109(770, "U(UW")]() + _0xc50a7a,
        _0x4d9045 = $[_0x43e109(981, "R1Qv")]("yyyy-MM-dd");
      const _0x2ffe2c = _0x43e109(440, "race") + _0x4d9045 + "\":{\"d1\":[{\"bid\":\"12989848\",\"format\":\"zyepub\",\"time\":" + _0xc50a7a + _0x43e109(1040, "K7Xb") + _0x12c604 + "&user_name=" + this["usr"],
        _0x1f7ce6 = this[_0x43e109(775, "eC^l")](_0x2ffe2c),
        _0x1529f0 = {
          "alias": "11dabbf2bce74fbf8fa10268cc6dd395",
          "data": _0x59b6ba[_0x43e109(373, "gxNC")](_0x59b6ba[_0x43e109(1068, "race")](_0x59b6ba[_0x43e109(683, "i9xe")], _0x4d9045), _0x59b6ba["ZmEql"]) + _0xc50a7a + _0x59b6ba[_0x43e109(988, "[U*D")],
          "platformId": _0x43e109(713, "s5*X"),
          "sign": _0x1f7ce6,
          "timestamp": _0x12c604,
          "user_name": this["usr"]
        };
      try {
        if (_0x59b6ba[_0x43e109(573, "3con")](_0x59b6ba[_0x43e109(751, "(%T6")], "APKou")) {
          const _0x48064b = _0x59b6ba[_0x43e109(399, "K7Xb")];
          return _0x572982[_0x43e109(684, "vdg*")]({
            "length": _0x5a167a
          }, () => _0x48064b[_0x51d8b2[_0x43e109(300, "nB0E")](_0x4dea17[_0x43e109(559, "fU8G")]() * _0x48064b[_0x43e109(665, "wA72")])])[_0x43e109(1102, "vdg*")]("");
        } else {
          let _0x4c4929 = {
              "fn": _0x43e109(708, "gptZ"),
              "method": _0x59b6ba["koHqS"],
              "url": _0x59b6ba["ossZC"](_0x59b6ba["ossZC"](_0x59b6ba[_0x43e109(766, "drE]")], this[_0x43e109(734, "race")]), _0x43e109(994, "CQ4*") + this["p1"] + _0x43e109(506, "@EdC") + this[_0x43e109(267, "U(UW")] + _0x43e109(721, "Sb5T") + this["kt"] + _0x43e109(668, "*#pD") + this["p2"] + "&p3=" + this["p3"] + _0x43e109(691, "QR)n") + this[_0x43e109(357, "#a%H")] + "&p30=__626771052468310&p31=" + this["p7"] + "&p33=com.chaozh.iReader.dj&p34=Xiaomi&firm=Xiaomi&d1=5.0.9.1&pkgName=com.chaozh.iReader.dj"),
              "headers": {
                "Content-Type": _0x43e109(826, "3con"),
                "Accept-Encoding": _0x59b6ba[_0x43e109(856, "jcyg")]
              },
              "body": zlib[_0x43e109(1006, "(Pxo")](JSON[_0x43e109(861, "K7Xb")](_0x1529f0, {
                "separators": [",", ":"]
              }))
            },
            {
              body: _0x5ca520
            } = await $[_0x43e109(348, "K7Xb")](_0x4c4929);
          _0x59b6ba["pVKKW"](_0x5ca520[_0x43e109(396, "(%T6")], 0) ? _0x59b6ba["jTcWU"](_0x59b6ba[_0x43e109(330, "U(UW")], _0x59b6ba[_0x43e109(540, "H4#!")]) ? $[_0x43e109(1112, "*#pD")](_0x43e109(745, "2$1i")) : _0x3e57c5[_0x43e109(467, "Sb5T")](_0x468ae0) : console[_0x43e109(707, "8YAN")]("readingTime\u5931\u8D25");
        }
      } catch (_0x1335c2) {
        console[_0x43e109(795, "(%T6")](_0x1335c2);
      }
    }
  }
  [_0x59a748(837, "YLV&")](_0xf4939d) {
    const _0x500d76 = _0x59a748,
      _0x5b262 = {
        "GcdBl": function (_0x5c2fba, _0x39b536) {
          return _0x5c2fba === _0x39b536;
        },
        "EQchN": _0x500d76(948, "#a%H"),
        "vYPNI": function (_0x96ca03, _0x3fb936) {
          return _0x96ca03 || _0x3fb936;
        },
        "TYAYN": _0x500d76(960, "R1Qv"),
        "hCpVZ": _0x500d76(1080, "fxnj")
      },
      _0x393b81 = _0x500d76(886, "race");
    function _0x4887b4(_0x556e7b) {
      const _0x3af03e = _0x500d76;
      if (_0x5b262["TYAYN"] === _0x3af03e(965, "Sb5T")) {
        const _0x37339a = rs[_0x3af03e(1034, "xlhI")][_0x3af03e(728, "WhP5")](_0x393b81),
          _0x169ec5 = new rs[_0x3af03e(784, "s5*X")][_0x3af03e(1126, "R1Qv")]["Signature"]({
            "alg": _0x5b262["hCpVZ"]
          });
        _0x169ec5[_0x3af03e(481, "SteG")](_0x37339a), _0x169ec5[_0x3af03e(464, "xlhI")](_0x556e7b);
        const _0x1d8fba = _0x169ec5[_0x3af03e(491, "xlhI")](),
          _0x41cb5f = rs[_0x3af03e(956, "*rU%")](_0x1d8fba);
        return _0x41cb5f;
      } else {
        const [, _0x37f24c, _0x5e936b] = /^@(.*?)\.(.*?)$/["exec"](_0x30d9db),
          _0x1b4bef = this[_0x3af03e(812, "i9xe")](_0x37f24c),
          _0x54e12f = _0x37f24c ? _0x5b262["GcdBl"](_0x5b262[_0x3af03e(445, ")#[a")], _0x1b4bef) ? null : _0x5b262[_0x3af03e(783, "*rU%")](_0x1b4bef, "{}") : "{}";
        try {
          const _0x413158 = _0x3bf51e[_0x3af03e(607, "m(XK")](_0x54e12f);
          this[_0x3af03e(621, "U(UW")](_0x413158, _0x5e936b, _0x5b7d28), _0x1d65ae = this[_0x3af03e(1053, "Wh6L")](_0x55901a[_0x3af03e(1066, "gptZ")](_0x413158), _0x37f24c);
        } catch (_0x34eaaf) {
          const _0x2d4ffe = {};
          this[_0x3af03e(342, "YLV&")](_0x2d4ffe, _0x5e936b, _0x449cf7), _0x12ea5d = this[_0x3af03e(995, "@EdC")](_0x99e227[_0x3af03e(792, "xlhI")](_0x2d4ffe), _0x37f24c);
        }
      }
    }
    const _0x5a19e4 = _0x4887b4(_0xf4939d),
      _0x24ec5a = _0x5a19e4[_0x500d76(696, "CQ4*")](/_/g, "/")[_0x500d76(996, "H4#!")](/-/g, "+");
    return _0x24ec5a;
  }
}
async function start() {
  const _0x3a4a1b = _0x59a748,
    _0x43c43b = {
      "CpKFy": function (_0x562d05, _0x1754e2) {
        return _0x562d05 !== _0x1754e2;
      },
      "wtooT": _0x3a4a1b(895, "#a%H")
    };
  let _0x332e07 = [];
  for (let _0x1f3fa3 of userList) {
    _0x43c43b[_0x3a4a1b(787, "gxNC")](_0x43c43b[_0x3a4a1b(1065, "H4#!")], "ZGTQy") ? _0x540613["log"](_0x250f84) : _0x1f3fa3[_0x3a4a1b(340, "JQ5o")] && _0x332e07[_0x3a4a1b(522, "8YAN")](await _0x1f3fa3[_0x3a4a1b(951, "Sb5T")]());
  }
  await Promise[_0x3a4a1b(654, "Yvqf")](_0x332e07);
}
function _0x578d(_0x1337f8, _0x2052e1) {
  const _0x44dfeb = _0x44df();
  return _0x578d = function (_0x578dfe, _0x3fc9c5) {
    _0x578dfe = _0x578dfe - 261;
    let _0x3659cb = _0x44dfeb[_0x578dfe];
    if (_0x578d["Ryvesi"] === undefined) {
      var _0x593259 = function (_0x768ca) {
        const _0x3d4741 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x2167a3 = "",
          _0x2195e9 = "";
        for (let _0x6122a1 = 0, _0x970490, _0xff9be3, _0x3d0996 = 0; _0xff9be3 = _0x768ca["charAt"](_0x3d0996++); ~_0xff9be3 && (_0x970490 = _0x6122a1 % 4 ? _0x970490 * 64 + _0xff9be3 : _0xff9be3, _0x6122a1++ % 4) ? _0x2167a3 += String["fromCharCode"](255 & _0x970490 >> (-2 * _0x6122a1 & 6)) : 0) {
          _0xff9be3 = _0x3d4741["indexOf"](_0xff9be3);
        }
        for (let _0x20501d = 0, _0x27796c = _0x2167a3["length"]; _0x20501d < _0x27796c; _0x20501d++) {
          _0x2195e9 += "%" + ("00" + _0x2167a3["charCodeAt"](_0x20501d)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x2195e9);
      };
      const _0x4cbd5b = function (_0x3b5519, _0x12fe76) {
        let _0x1ea414 = [],
          _0x47f54a = 0,
          _0x496086,
          _0x179fee = "";
        _0x3b5519 = _0x593259(_0x3b5519);
        let _0x2c4d2a;
        for (_0x2c4d2a = 0; _0x2c4d2a < 256; _0x2c4d2a++) {
          _0x1ea414[_0x2c4d2a] = _0x2c4d2a;
        }
        for (_0x2c4d2a = 0; _0x2c4d2a < 256; _0x2c4d2a++) {
          _0x47f54a = (_0x47f54a + _0x1ea414[_0x2c4d2a] + _0x12fe76["charCodeAt"](_0x2c4d2a % _0x12fe76["length"])) % 256, _0x496086 = _0x1ea414[_0x2c4d2a], _0x1ea414[_0x2c4d2a] = _0x1ea414[_0x47f54a], _0x1ea414[_0x47f54a] = _0x496086;
        }
        _0x2c4d2a = 0, _0x47f54a = 0;
        for (let _0x335920 = 0; _0x335920 < _0x3b5519["length"]; _0x335920++) {
          _0x2c4d2a = (_0x2c4d2a + 1) % 256, _0x47f54a = (_0x47f54a + _0x1ea414[_0x2c4d2a]) % 256, _0x496086 = _0x1ea414[_0x2c4d2a], _0x1ea414[_0x2c4d2a] = _0x1ea414[_0x47f54a], _0x1ea414[_0x47f54a] = _0x496086, _0x179fee += String["fromCharCode"](_0x3b5519["charCodeAt"](_0x335920) ^ _0x1ea414[(_0x1ea414[_0x2c4d2a] + _0x1ea414[_0x47f54a]) % 256]);
        }
        return _0x179fee;
      };
      _0x578d["UCUhfp"] = _0x4cbd5b, _0x1337f8 = arguments, _0x578d["Ryvesi"] = !![];
    }
    const _0x2e7229 = _0x44dfeb[0],
      _0x57fb99 = _0x578dfe + _0x2e7229,
      _0x49743e = _0x1337f8[_0x57fb99];
    return !_0x49743e ? (_0x578d["Xozrdo"] === undefined && (_0x578d["Xozrdo"] = !![]), _0x3659cb = _0x578d["UCUhfp"](_0x3659cb, _0x3fc9c5), _0x1337f8[_0x57fb99] = _0x3659cb) : _0x3659cb = _0x49743e, _0x3659cb;
  }, _0x578d(_0x1337f8, _0x2052e1);
}
!(async () => {
  const _0x5ea594 = _0x59a748,
    _0x159e7c = {
      "QtIFN": function (_0x51279a, _0x49db42) {
        return _0x51279a + _0x49db42;
      },
      "NjUHV": function (_0x465c4e) {
        return _0x465c4e();
      },
      "xCShN": function (_0x3f1e27, _0x71f33b) {
        return _0x3f1e27 === _0x71f33b;
      }
    };
  if (!(await _0x159e7c[_0x5ea594(525, "eC^l")](checkEnv))) return;
  userList["length"] > 0 && (_0x159e7c[_0x5ea594(891, "H4#!")](_0x5ea594(409, "v1ox"), _0x5ea594(1022, "gJDJ")) ? _0x370e1e[_0x5ea594(578, "gJDJ")] += _0x159e7c[_0x5ea594(971, "nB0E")]("?", this[_0x5ea594(986, "v1ox")](_0x4a204f[_0x5ea594(452, "(Pxo")])) : await _0x159e7c[_0x5ea594(1011, "(Pxo")](start)), await $[_0x5ea594(1127, "2$1i")]($[_0x5ea594(897, "U(UW")]["join"]("\n"));
})()[_0x59a748(1121, "wA72")](_0x3dcb30 => console[_0x59a748(586, "drE]")](_0x3dcb30))[_0x59a748(706, "@EdC")](() => $[_0x59a748(920, "wA72")]());
async function checkEnv() {
  const _0x542d6e = _0x59a748,
    _0x414892 = {
      "qCGws": function (_0x3aabb0, _0x1598b3) {
        return _0x3aabb0 === _0x1598b3;
      },
      "ToIpd": function (_0x28c877, _0x37eaca) {
        return _0x28c877 === _0x37eaca;
      },
      "vfBva": _0x542d6e(318, "(Pxo"),
      "dyCne": function (_0xcf4173, _0x3ea881) {
        return _0xcf4173 > _0x3ea881;
      },
      "MVQIo": _0x542d6e(434, "v1ox"),
      "zOZbT": _0x542d6e(402, "8m^2")
    };
  let _0x199df7 = ($["isNode"]() ? process[_0x542d6e(338, "bavJ")][ckName] : $["getdata"](ckName)) || "";
  if (_0x199df7) {
    let _0x37954a = envSplitor[0];
    for (let _0x39d9fe of envSplitor) if (_0x414892[_0x542d6e(741, "[Gg*")](_0x199df7[_0x542d6e(760, "race")](_0x39d9fe), -1)) {
      if (_0x414892[_0x542d6e(1085, "JQ5o")] !== "RlMuu") {
        _0x37954a = _0x39d9fe;
        break;
      } else _0x11468c[_0x542d6e(799, "gptZ")] = _0x311054[_0x542d6e(756, "JQ5o")] ? _0x574fee["headers"] : {}, _0x414892["qCGws"](typeof _0x95ed36[_0x542d6e(344, "Wh6L")][_0x542d6e(671, "vdg*")], _0x542d6e(847, "*rU%")) && _0x414892[_0x542d6e(879, "@EdC")](typeof _0x49514e[_0x542d6e(903, "ms*h")], _0x414892["vfBva"]) && (_0x29ad4d[_0x542d6e(666, "8m^2")] = this[_0x542d6e(733, "R1Qv")]);
    }
    for (let _0x376cf7 of _0x199df7["split"](_0x37954a)) _0x376cf7 && userList[_0x542d6e(556, "@IdH")](new UserInfo(_0x376cf7));
  } else {
    console["log"](_0x414892[_0x542d6e(306, "ms*h")]);
    return;
  }
  return console["log"](_0x542d6e(476, "jcyg") + userList[_0x542d6e(1100, "s5*X")] + _0x542d6e(673, "US*&")), !![];
}
function Env(_0x1fd2cb, _0x3f53d5) {
  const _0x4f37da = _0x59a748,
    _0x4197b2 = {
      "aoFqz": "xYxSD",
      "nzjZA": _0x4f37da(989, "fxnj"),
      "jXPoz": _0x4f37da(1108, "U(UW"),
      "RhYiu": function (_0x4afb5a, _0x55eb70) {
        return _0x4afb5a != _0x55eb70;
      },
      "xrYRz": "undefined",
      "DEJuj": function (_0x1c9e89, _0xa98cd2) {
        return _0x1c9e89 != _0xa98cd2;
      },
      "jcqhJ": function (_0x258958, _0xdebcd7) {
        return _0x258958 != _0xdebcd7;
      },
      "WhWBK": function (_0x5a0d50, _0x1924eb) {
        return _0x5a0d50 == _0x1924eb;
      },
      "nKpCw": function (_0x3dd2bd, _0x123cad) {
        return _0x3dd2bd === _0x123cad;
      },
      "HunuC": "cTfiv",
      "aeihS": "tgdZk",
      "Htwdm": function (_0x351ec9, _0x1209a6) {
        return _0x351ec9 != _0x1209a6;
      },
      "nciuF": _0x4f37da(336, "[U*D"),
      "yPzxf": function (_0x53dc76, _0x2f5bf6) {
        return _0x53dc76 !== _0x2f5bf6;
      },
      "kBwdN": _0x4f37da(767, "I*]p"),
      "TXJTh": function (_0x4d3613, _0x37f59e) {
        return _0x4d3613(_0x37f59e);
      },
      "mVxUX": function (_0x7933ae, _0x2358dc) {
        return _0x7933ae(_0x2358dc);
      },
      "uPBIs": _0x4f37da(655, "SteG"),
      "hfgKl": function (_0x396c05, _0x10a833) {
        return _0x396c05 && _0x10a833;
      },
      "keliJ": _0x4f37da(1063, "jcyg"),
      "HvVgT": _0x4f37da(430, "drE]"),
      "DnbPZ": function (_0x1e4c12, _0x533606) {
        return _0x1e4c12 === _0x533606;
      },
      "UfnWz": function (_0x22376c, _0x525f9a) {
        return _0x22376c(_0x525f9a);
      },
      "mggNN": _0x4f37da(785, "fxnj"),
      "Iojjv": "rnVpi",
      "GPQCQ": function (_0x3e82cd, _0xbd1895) {
        return _0x3e82cd / _0xbd1895;
      },
      "WfnsY": "\u6B64\u8D26\u53F7\u8DF3\u8FC7\u65B0\u624B\u5956\u52B1\u4EFB\u52A1",
      "ZlqoS": _0x4f37da(271, ")#[a"),
      "nbuwQ": _0x4f37da(500, "(Pxo"),
      "AWNwV": function (_0x595b0e, _0x3a4d0f) {
        return _0x595b0e === _0x3a4d0f;
      },
      "vIond": _0x4f37da(718, "gxNC"),
      "OLEyK": function (_0x334fb4, _0x2e5454) {
        return _0x334fb4 === _0x2e5454;
      },
      "xTYjt": _0x4f37da(1051, "CQ4*"),
      "rmsbv": _0x4f37da(356, "JQ5o"),
      "dEKCN": function (_0x20573b, _0x14c7ed) {
        return _0x20573b(_0x14c7ed);
      },
      "OKOEb": function (_0x390c1d, _0x2b4b31) {
        return _0x390c1d === _0x2b4b31;
      },
      "jJiEi": function (_0x5660fe, _0x9e7980) {
        return _0x5660fe !== _0x9e7980;
      },
      "KyLwU": _0x4f37da(850, "bavJ"),
      "bfDQb": _0x4f37da(729, "eki$"),
      "Kjxnp": "WvEcx",
      "Dtfrs": function (_0x595037, _0x2b0d06) {
        return _0x595037 === _0x2b0d06;
      },
      "EVGGY": "gemBI",
      "uTyjl": _0x4f37da(750, "(Pxo"),
      "MGkEk": "PeLOV",
      "LWyQQ": _0x4f37da(682, "K7Xb"),
      "rcbaq": _0x4f37da(511, "(Pxo"),
      "FvvLp": function (_0x59fbf9, _0x244544) {
        return _0x59fbf9(_0x244544);
      },
      "BUpvs": _0x4f37da(407, "(%T6"),
      "szChE": "vCSbc",
      "HzMHj": _0x4f37da(1045, "K7Xb"),
      "bwuSP": function (_0x357038, _0x5bafb9) {
        return _0x357038 + _0x5bafb9;
      },
      "jzHTp": function (_0x345acf, _0x3fe635) {
        return _0x345acf / _0x3fe635;
      },
      "kzjFL": function (_0xc64d62, _0x38d632) {
        return _0xc64d62 - _0x38d632;
      },
      "nVpvD": _0x4f37da(301, "H4#!"),
      "aKoYk": _0x4f37da(367, "v1ox"),
      "DKpkr": _0x4f37da(743, "gJDJ"),
      "unZWD": function (_0x1943b3, _0x56d18a) {
        return _0x1943b3 == _0x56d18a;
      },
      "MIAND": _0x4f37da(495, "Wh6L"),
      "ZoHPi": "GnxaG",
      "AdvyI": "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
      "xMRnb": function (_0x38fc5e, _0x3829a9) {
        return _0x38fc5e | _0x3829a9;
      },
      "xeddv": function (_0x18f44d, _0x3d1e2f) {
        return _0x18f44d * _0x3d1e2f;
      },
      "TvUHO": function (_0x3d232a, _0x2acc8a) {
        return _0x3d232a | _0x2acc8a;
      },
      "YztqQ": function (_0x4e46fe, _0xd14d14) {
        return _0x4e46fe !== _0xd14d14;
      },
      "FecKu": _0x4f37da(513, "QR)n"),
      "CXBCL": _0x4f37da(599, "QR)n"),
      "SykLT": _0x4f37da(1091, "[Gg*"),
      "imRiR": function (_0x2f1833, _0xa871ef) {
        return _0x2f1833 === _0xa871ef;
      },
      "MSFhZ": _0x4f37da(924, "@EdC"),
      "GwcTC": _0x4f37da(375, "bavJ"),
      "dkDDx": _0x4f37da(1002, "QR)n"),
      "NZWBp": function (_0x23d18a, _0x4d02c9) {
        return _0x23d18a === _0x4d02c9;
      },
      "gpuuz": _0x4f37da(618, "YLV&"),
      "uWsvY": "zzKHo",
      "cTfYU": _0x4f37da(516, "*rU%"),
      "thkMj": _0x4f37da(460, "m(XK"),
      "ZtZAh": _0x4f37da(731, "eC^l"),
      "iXZDd": _0x4f37da(875, "R1Qv"),
      "izaop": _0x4f37da(674, "(%T6"),
      "TnyXF": _0x4f37da(390, "JQ5o"),
      "fvELg": "abcdefghijklmnopqrstuvwxyz0123456789",
      "qOjKD": function (_0x4273f2, _0x4647aa) {
        return _0x4273f2 == _0x4647aa;
      },
      "UaRxp": function (_0x3bacf7, _0xb7f591) {
        return _0x3bacf7 & _0xb7f591;
      },
      "IfvTZ": function (_0x2fb488, _0x332083) {
        return _0x2fb488 === _0x332083;
      },
      "hRlAv": _0x4f37da(902, "I*]p"),
      "VeafS": function (_0x116439, _0x53c577) {
        return _0x116439 + _0x53c577;
      },
      "LMfMp": function (_0x21e95c, _0x4ad01b) {
        return _0x21e95c / _0x4ad01b;
      },
      "Ngeyi": function (_0x51729a, _0x275c9a, _0x11883f) {
        return _0x51729a(_0x275c9a, _0x11883f);
      },
      "wsJwl": _0x4f37da(659, "gptZ"),
      "rLaBK": function (_0x449a2b, _0x3db0bb) {
        return _0x449a2b(_0x3db0bb);
      },
      "jEBKh": _0x4f37da(329, "K7Xb"),
      "yjVtR": _0x4f37da(919, "US*&"),
      "azvlQ": function (_0x231b4e, _0x2c9429) {
        return _0x231b4e > _0x2c9429;
      },
      "ZXytN": _0x4f37da(990, "eC^l"),
      "aBZZH": "YueIn",
      "kcXmU": _0x4f37da(539, "xlhI"),
      "fTjgL": function (_0x5aa643, _0x24f08c) {
        return _0x5aa643 / _0x24f08c;
      },
      "ODixG": function (_0x3eff8d, _0x46e4d6) {
        return _0x3eff8d - _0x46e4d6;
      }
    };
  return new class {
    constructor(_0x3e3c97, _0x51e73f) {
      const _0x584c44 = _0x4f37da;
      if (_0x4197b2[_0x584c44(871, "gptZ")] === _0x584c44(461, "(Pxo")) {
        const _0x2e000c = {};
        this[_0x584c44(635, "fU8G")](_0x2e000c, _0x28cce9, _0xa25272), _0x19c910 = this[_0x584c44(722, "ms*h")](_0x34ddc3[_0x584c44(805, "CQ4*")](_0x2e000c), _0x15345a);
      } else {
        const _0x315815 = "6|0|7|1|3|4|2|5"[_0x584c44(700, "Yvqf")]("|");
        let _0x5ce7dc = 0;
        while (!![]) {
          switch (_0x315815[_0x5ce7dc++]) {
            case "0":
              this[_0x584c44(394, "Sb5T")] = null;
              continue;
            case "1":
              this[_0x584c44(343, "@EdC")] = [];
              continue;
            case "2":
              Object["assign"](this, _0x51e73f);
              continue;
            case "3":
              this[_0x584c44(419, "fxnj")] = "\n";
              continue;
            case "4":
              this[_0x584c44(776, "UJpX")] = new Date()[_0x584c44(530, "[U*D")]();
              continue;
            case "5":
              this[_0x584c44(905, "race")]("", "\uD83D\uDD14" + this[_0x584c44(606, ")#[a")] + ", \u5F00\u59CB!");
              continue;
            case "6":
              this["name"] = _0x3e3c97;
              continue;
            case "7":
              this[_0x584c44(596, "eC^l")] = _0x4197b2[_0x584c44(909, "(Pxo")];
              continue;
          }
          break;
        }
      }
    }
    [_0x4f37da(512, "I*]p")]() {
      const _0x21de82 = _0x4f37da;
      if (_0x4197b2["jXPoz"] === _0x4197b2[_0x21de82(469, "3con")]) return _0x4197b2["RhYiu"](_0x4197b2[_0x21de82(595, "race")], typeof module) && !!module["exports"];else _0x5bfc47["body"] = _0x20a966["parse"](_0x358f74[_0x21de82(759, "U(UW")]);
    }
    ["isQuanX"]() {
      const _0x29cce6 = _0x4f37da;
      return _0x4197b2[_0x29cce6(972, "QR)n")](_0x29cce6(797, "3con"), typeof $task);
    }
    [_0x4f37da(538, "race")]() {
      const _0x242499 = _0x4f37da;
      return _0x4197b2["jcqhJ"](_0x4197b2["xrYRz"], typeof $httpClient) && _0x4197b2[_0x242499(651, "(Pxo")](_0x242499(349, "gJDJ"), typeof $loon);
    }
    ["isLoon"]() {
      const _0x55ee7d = _0x4f37da;
      if (_0x4197b2[_0x55ee7d(680, "v1ox")](_0x4197b2["HunuC"], _0x4197b2[_0x55ee7d(645, "8YAN")])) {
        const [, _0x582be3, _0x5d8238] = /^@(.*?)\.(.*?)$/["exec"](_0x5edd1a),
          _0x5242ad = _0x582be3 ? this["getval"](_0x582be3) : "";
        if (_0x5242ad) try {
          const _0x179872 = _0xf6a5fd[_0x55ee7d(607, "m(XK")](_0x5242ad);
          _0x2e6fbb = _0x179872 ? this["lodash_get"](_0x179872, _0x5d8238, "") : _0x545a8b;
        } catch (_0x55214d) {
          _0x26d1b4 = "";
        }
      } else return _0x4197b2[_0x55ee7d(620, "i9xe")](_0x55ee7d(1071, "(%T6"), typeof $loon);
    }
    [_0x4f37da(576, "QR)n")]() {
      const _0x83f6c = _0x4f37da;
      if (_0x4197b2["yPzxf"](_0x83f6c(537, "QR)n"), _0x4197b2[_0x83f6c(1101, "*#pD")])) {
        if (!this[_0x83f6c(563, "2$1i")]()) return {};
        {
          this["fs"] = this["fs"] ? this["fs"] : _0x4197b2[_0x83f6c(302, "I*]p")](require, "fs"), this[_0x83f6c(839, "Yvqf")] = this[_0x83f6c(908, "[Gg*")] ? this["path"] : _0x4197b2[_0x83f6c(852, "2$1i")](require, _0x4197b2[_0x83f6c(1061, "Yvqf")]);
          const _0xdc44c6 = this[_0x83f6c(701, "U(UW")][_0x83f6c(320, "8m^2")](this[_0x83f6c(1048, "gJDJ")]),
            _0x25b968 = this[_0x83f6c(782, "jcyg")][_0x83f6c(1042, "fxnj")](process["cwd"](), this[_0x83f6c(598, ")#[a")]),
            _0x1640bc = this["fs"]["existsSync"](_0xdc44c6),
            _0x46fa75 = !_0x1640bc && this["fs"][_0x83f6c(944, "eki$")](_0x25b968);
          if (_0x4197b2[_0x83f6c(418, "gJDJ")](!_0x1640bc, !_0x46fa75)) return {};
          {
            const _0x4fbef8 = _0x1640bc ? _0xdc44c6 : _0x25b968;
            try {
              return JSON["parse"](this["fs"]["readFileSync"](_0x4fbef8));
            } catch (_0x4f9fe7) {
              return {};
            }
          }
        }
      } else {
        var _0x424597 = _0x547202["parse"](_0x5387a1);
        return _0x4197b2[_0x83f6c(450, "Yvqf")](typeof _0x424597, _0x4197b2[_0x83f6c(935, ")#[a")]) && _0x424597 ? !![] : ![];
      }
    }
    [_0x4f37da(711, "I*]p")]() {
      const _0x48979a = _0x4f37da;
      if (this[_0x48979a(609, "UJpX")]()) {
        this["fs"] = this["fs"] ? this["fs"] : require("fs"), this["path"] = this[_0x48979a(1024, "3con")] ? this["path"] : _0x4197b2[_0x48979a(644, "YLV&")](require, _0x4197b2["uPBIs"]);
        const _0x33d463 = this[_0x48979a(908, "[Gg*")][_0x48979a(774, "jcyg")](this["dataFile"]),
          _0x297336 = this["path"][_0x48979a(475, "SteG")](process[_0x48979a(561, "WhP5")](), this[_0x48979a(558, "@IdH")]),
          _0x4f8278 = this["fs"]["existsSync"](_0x33d463),
          _0xb2c6a9 = !_0x4f8278 && this["fs"][_0x48979a(887, ")#[a")](_0x297336),
          _0xfa1e2d = JSON[_0x48979a(877, "[Gg*")](this[_0x48979a(658, "3con")]);
        _0x4f8278 ? this["writeFileSync"](_0x33d463, _0xfa1e2d) : _0xb2c6a9 ? this["fs"][_0x48979a(314, "#a%H")](_0x297336, _0xfa1e2d) : this["fs"][_0x48979a(652, "@EdC")](_0x33d463, _0xfa1e2d);
      }
    }
    ["lodash_get"](_0x44e44d, _0x4fd6ef, _0x5ecd82) {
      const _0x6abe02 = _0x4f37da;
      if (_0x4197b2["keliJ"] !== _0x6abe02(627, "[Gg*")) return "undefined" != typeof _0xfec739;else {
        const _0x58e579 = _0x4fd6ef[_0x6abe02(358, "xlhI")](/\[(\d+)\]/g, _0x4197b2[_0x6abe02(639, "nB0E")])[_0x6abe02(1036, "SteG")](".");
        let _0x17c307 = _0x44e44d;
        for (const _0x29b81f of _0x58e579) if (_0x17c307 = Object(_0x17c307)[_0x29b81f], _0x4197b2[_0x6abe02(613, "vdg*")](void 0, _0x17c307)) return _0x5ecd82;
        return _0x17c307;
      }
    }
    ["lodash_set"](_0x55ed5c, _0x5f1ad8, _0x272673) {
      const _0x1d9f6b = _0x4f37da;
      return _0x4197b2["UfnWz"](Object, _0x55ed5c) !== _0x55ed5c ? _0x55ed5c : (Array["isArray"](_0x5f1ad8) || (_0x5f1ad8 = _0x5f1ad8["toString"]()[_0x1d9f6b(1110, ")#[a")](/[^.[\]]+/g) || []), _0x5f1ad8["slice"](0, -1)[_0x1d9f6b(545, "m(XK")]((_0x35c771, _0xa6a057, _0x2bdfc3) => Object(_0x35c771[_0xa6a057]) === _0x35c771[_0xa6a057] ? _0x35c771[_0xa6a057] : _0x35c771[_0xa6a057] = Math[_0x1d9f6b(589, "drE]")](_0x5f1ad8[_0x2bdfc3 + 1]) >> 0 == +_0x5f1ad8[_0x2bdfc3 + 1] ? [] : {}, _0x55ed5c)[_0x5f1ad8[_0x5f1ad8[_0x1d9f6b(917, "nB0E")] - 1]] = _0x272673, _0x55ed5c);
    }
    [_0x4f37da(641, "Wh6L")](_0x293e54) {
      const _0x7d107a = _0x4f37da;
      let _0x5bf835 = this[_0x7d107a(376, "QR)n")](_0x293e54);
      if (/^@/["test"](_0x293e54)) {
        if (_0x4197b2[_0x7d107a(796, "fU8G")](_0x4197b2[_0x7d107a(413, "@EdC")], _0x4197b2[_0x7d107a(695, "*rU%")])) _0x4045e7[_0x7d107a(978, "eC^l")]("\u8D26\u53F7\u7B26\u5408\u65B0\u4EBA\u798F\u5229\u9886\u53D6\u8981\u6C42,\u65B0\u624B\u5956\u52B1\u9886\u53D6\u6210\u529F");else {
          const [, _0xaea54c, _0x29b4e5] = /^@(.*?)\.(.*?)$/["exec"](_0x293e54),
            _0x2fb4a2 = _0xaea54c ? this["getval"](_0xaea54c) : "";
          if (_0x2fb4a2) try {
            const _0x14d70a = JSON["parse"](_0x2fb4a2);
            _0x5bf835 = _0x14d70a ? this[_0x7d107a(569, "xlhI")](_0x14d70a, _0x29b4e5, "") : _0x5bf835;
          } catch (_0x18a0c1) {
            if (_0x4197b2[_0x7d107a(1015, "gptZ")](_0x4197b2[_0x7d107a(772, "SteG")], _0x4197b2[_0x7d107a(395, "8m^2")])) _0x5bf835 = "";else return new _0x234762()[_0x7d107a(457, "H4#!")]();
          }
        }
      }
      return _0x5bf835;
    }
    [_0x4f37da(527, "R1Qv")](_0x575881, _0x579627) {
      const _0x598b39 = _0x4f37da;
      if (_0x4197b2["ZlqoS"] === _0x598b39(849, "QR)n")) {
        let _0x2c201c = !1;
        if (/^@/["test"](_0x579627)) {
          if (_0x4197b2[_0x598b39(938, "QR)n")]("nfDeu", _0x4197b2[_0x598b39(483, "YLV&")])) {
            const [, _0x4c389c, _0x6ab1c1] = /^@(.*?)\.(.*?)$/[_0x598b39(1078, "eC^l")](_0x579627),
              _0x515a7d = this[_0x598b39(1009, "[U*D")](_0x4c389c),
              _0x142195 = _0x4c389c ? _0x4197b2["AWNwV"](_0x4197b2[_0x598b39(416, "s5*X")], _0x515a7d) ? null : _0x515a7d || "{}" : "{}";
            try {
              if (_0x4197b2[_0x598b39(1018, "fxnj")](_0x4197b2[_0x598b39(915, "WhP5")], _0x4197b2[_0x598b39(982, "8YAN")])) return {};else {
                const _0x46bede = JSON["parse"](_0x142195);
                this["lodash_set"](_0x46bede, _0x6ab1c1, _0x575881), _0x2c201c = this[_0x598b39(631, "(%T6")](JSON[_0x598b39(610, "8m^2")](_0x46bede), _0x4c389c);
              }
            } catch (_0x14b4ee) {
              if (_0x4197b2["AWNwV"](_0x598b39(890, "gptZ"), _0x598b39(640, "xlhI"))) return this[_0x598b39(1070, "8m^2")] = this[_0x598b39(437, "v1ox")](), this["data"][_0x179983];else {
                const _0x382a23 = {};
                this[_0x598b39(677, "8YAN")](_0x382a23, _0x6ab1c1, _0x575881), _0x2c201c = this["setval"](JSON[_0x598b39(1077, "fU8G")](_0x382a23), _0x4c389c);
              }
            }
          } else {
            const _0x47b103 = new _0x10859f()["getTime"](),
              _0x1d3b24 = _0x4197b2[_0x598b39(494, "JQ5o")](_0x47b103 - this[_0x598b39(535, "v1ox")], 1000);
            this[_0x598b39(922, "gptZ")]("", "\uD83D\uDD14" + this[_0x598b39(739, "H4#!")] + _0x598b39(509, "m(XK") + _0x1d3b24 + " \u79D2"), this[_0x598b39(1088, "[Gg*")](), (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && _0x4197b2[_0x598b39(1032, "i9xe")](_0x514401, _0x185d90);
          }
        } else _0x2c201c = this[_0x598b39(316, "xlhI")](_0x575881, _0x579627);
        return _0x2c201c;
      } else _0x3d6241["log"](_0x4197b2["WfnsY"]);
    }
    [_0x4f37da(821, "*rU%")](_0x1d3019) {
      const _0x440168 = _0x4f37da;
      if (this[_0x440168(458, "*rU%")]() || this["isLoon"]()) return _0x4197b2["jJiEi"]("MEOXx", _0x4197b2[_0x440168(575, "I*]p")]) ? ![] : $persistentStore[_0x440168(746, "v1ox")](_0x1d3019);else {
        if (this["isQuanX"]()) {
          if (_0x4197b2[_0x440168(324, "eC^l")](_0x4197b2[_0x440168(337, "QR)n")], _0x4197b2[_0x440168(977, "race")])) {
            const _0x212ec9 = _0x702da4 ? _0x30e9df : _0x4c5cfc;
            try {
              return _0x1574a9[_0x440168(872, "Sb5T")](this["fs"][_0x440168(292, "bavJ")](_0x212ec9));
            } catch (_0x4e935a) {
              return {};
            }
          } else return $prefs[_0x440168(1093, "Yvqf")](_0x1d3019);
        } else {
          if (this[_0x440168(611, "xlhI")]()) return this[_0x440168(889, "vdg*")] = this["loaddata"](), this[_0x440168(1070, "8m^2")][_0x1d3019];else {
            if (_0x4197b2[_0x440168(585, ")#[a")](_0x440168(354, "gptZ"), _0x4197b2[_0x440168(692, "xlhI")])) return this[_0x440168(466, "gptZ")] && this[_0x440168(1097, "K7Xb")][_0x1d3019] || null;else this[_0x440168(754, "YLV&")] = this[_0x440168(364, "K7Xb")] ? this["got"] : _0x4197b2[_0x440168(400, "3con")](_0x200842, _0x440168(280, "s5*X")), this["cktough"] = this["cktough"] ? this["cktough"] : _0x4197b2[_0x440168(523, "xlhI")](_0x312005, _0x440168(554, "fxnj")), this[_0x440168(507, "H4#!")] = this["ckjar"] ? this[_0x440168(931, "eC^l")] : new this[_0x440168(685, "drE]")][_0x440168(424, ")#[a")](), _0x26d729 && (_0x176f91[_0x440168(389, "vdg*")] = _0x29746f[_0x440168(308, "*#pD")] ? _0xe8e4f4[_0x440168(428, "YLV&")] : {}, _0x4197b2[_0x440168(369, "SteG")](typeof _0xd02ac8["headers"]["Cookie"], _0x4197b2[_0x440168(406, "v1ox")]) && _0x4197b2[_0x440168(1089, "drE]")](typeof _0x359b71[_0x440168(1099, "@IdH")], _0x4197b2[_0x440168(697, "YLV&")]) && (_0x19f071["cookieJar"] = this[_0x440168(933, "[U*D")]));
          }
        }
      }
    }
    [_0x4f37da(705, "Yvqf")](_0x37eb4d, _0x44e64e) {
      const _0x44f40d = _0x4f37da;
      if (this[_0x44f40d(873, "drE]")]() || this[_0x44f40d(490, "fxnj")]()) return $persistentStore["write"](_0x37eb4d, _0x44e64e);else {
        if (this["isQuanX"]()) {
          if (_0x4197b2[_0x44f40d(964, "8m^2")](_0x4197b2["uTyjl"], _0x4197b2[_0x44f40d(1115, "m(XK")])) {
            _0x5cbd75[_0x44f40d(808, "nB0E")](_0x44f40d(1081, "Wh6L"));
            return;
          } else return $prefs[_0x44f40d(521, "US*&")](_0x37eb4d, _0x44e64e);
        } else {
          if (this["isNode"]()) {
            if (_0x4197b2["yPzxf"](_0x4197b2["LWyQQ"], _0x44f40d(557, "i9xe"))) return this[_0x44f40d(970, "bavJ")] = this[_0x44f40d(269, "U(UW")](), this["data"][_0x44e64e] = _0x37eb4d, this["writedata"](), !![];else {
              if (this[_0x44f40d(824, "U(UW")]()) {
                this["fs"] = this["fs"] ? this["fs"] : _0x16ab05("fs"), this[_0x44f40d(1021, "drE]")] = this[_0x44f40d(998, "bavJ")] ? this["path"] : _0x46de48("path");
                const _0x4b2487 = this[_0x44f40d(782, "jcyg")][_0x44f40d(966, "wA72")](this[_0x44f40d(470, "drE]")]),
                  _0x3c1606 = this["path"]["resolve"](_0x4be6f["cwd"](), this[_0x44f40d(598, ")#[a")]),
                  _0x48c3d7 = this["fs"][_0x44f40d(272, "UJpX")](_0x4b2487),
                  _0x1b8825 = !_0x48c3d7 && this["fs"]["existsSync"](_0x3c1606),
                  _0x119823 = _0x11f032["stringify"](this[_0x44f40d(435, "Wh6L")]);
                _0x48c3d7 ? this[_0x44f40d(652, "@EdC")](_0x4b2487, _0x119823) : _0x1b8825 ? this["fs"][_0x44f40d(1017, "gJDJ")](_0x3c1606, _0x119823) : this["fs"][_0x44f40d(698, "fxnj")](_0x4b2487, _0x119823);
              }
            }
          } else return this[_0x44f40d(471, "H4#!")] && this[_0x44f40d(1097, "K7Xb")][_0x44e64e] || null;
        }
      }
    }
    [_0x4f37da(370, "*rU%")](_0x4b666e) {
      const _0xdc931c = _0x4f37da;
      if (_0x4197b2[_0xdc931c(647, "vdg*")](_0x4197b2["rcbaq"], _0x4197b2[_0xdc931c(477, "jcyg")])) return _0x39d3d8[_0xdc931c(973, "8YAN")](_0x5bfebd);else this[_0xdc931c(801, "v1ox")] = this[_0xdc931c(661, "US*&")] ? this[_0xdc931c(937, "i9xe")] : _0x4197b2[_0xdc931c(622, "(%T6")](require, _0xdc931c(543, "wA72")), this[_0xdc931c(780, "Wh6L")] = this["cktough"] ? this[_0xdc931c(836, "I*]p")] : _0x4197b2[_0xdc931c(1058, "nB0E")](require, _0x4197b2[_0xdc931c(555, "CQ4*")]), this["ckjar"] = this[_0xdc931c(312, "nB0E")] ? this["ckjar"] : new this[_0xdc931c(916, "[U*D")]["CookieJar"](), _0x4b666e && (_0x4b666e["headers"] = _0x4b666e["headers"] ? _0x4b666e[_0xdc931c(377, "#a%H")] : {}, typeof _0x4b666e["headers"][_0xdc931c(993, "(%T6")] === _0x4197b2["xrYRz"] && typeof _0x4b666e[_0xdc931c(262, "R1Qv")] === "undefined" && (_0x4b666e[_0xdc931c(465, "[Gg*")] = this["ckjar"]));
    }
    [_0x4f37da(591, "CQ4*")](_0xc9e800) {
      const _0x33259d = _0x4f37da;
      if (_0x4197b2[_0x33259d(372, "WhP5")](_0x4197b2[_0x33259d(628, "US*&")], _0x4197b2["HzMHj"])) _0x5b50cc[_0x33259d(581, "gJDJ")]("\u7528\u6237\u4FE1\u606F\u5931\u8D25"), this["ckStatus"] = ![];else return Object["entries"](_0xc9e800)[_0x33259d(386, "gptZ")](([_0x4626d3, _0x5185ba]) => _0x4626d3 + "=" + (typeof _0x5185ba === _0x33259d(1047, "R1Qv") ? JSON["stringify"](_0x5185ba) : _0x5185ba))[_0x33259d(444, "YLV&")]("&");
    }
    [_0x4f37da(345, "fxnj")](_0x3de450) {
      const _0x541ee2 = _0x4f37da,
        _0x580cff = {
          "ZlHod": function (_0x3dcfbe, _0x295240) {
            const _0x571092 = _0x578d;
            return _0x4197b2[_0x571092(603, "SteG")](_0x3dcfbe, _0x295240);
          },
          "CMELg": function (_0x48afa8, _0x56c002) {
            const _0x5757c2 = _0x578d;
            return _0x4197b2[_0x5757c2(747, "8m^2")](_0x48afa8, _0x56c002);
          },
          "EWfbk": function (_0x38f9ef, _0x414619) {
            const _0xfb105b = _0x578d;
            return _0x4197b2[_0xfb105b(725, "2$1i")](_0x38f9ef, _0x414619);
          },
          "fDHcJ": function (_0x23e273, _0x22fb62) {
            const _0x38ae62 = _0x578d;
            return _0x4197b2[_0x38ae62(819, "Wh6L")](_0x23e273, _0x22fb62);
          },
          "vnHEX": function (_0x5ef658, _0x174aa7) {
            return _0x4197b2["bwuSP"](_0x5ef658, _0x174aa7);
          },
          "QlPtk": function (_0xd4aabd, _0x1d6dd0) {
            return _0xd4aabd == _0x1d6dd0;
          },
          "TAqpp": function (_0x25f4a5, _0x49bb7f) {
            return _0x25f4a5 + _0x49bb7f;
          }
        };
      try {
        var _0x1daedf = JSON[_0x541ee2(771, "[Gg*")](_0x3de450);
        if (typeof _0x1daedf == _0x4197b2[_0x541ee2(410, "fxnj")] && _0x1daedf) {
          if (_0x4197b2[_0x541ee2(426, "v1ox")](_0x4197b2[_0x541ee2(287, "QR)n")], _0x4197b2[_0x541ee2(694, "U(UW")])) {
            let _0x45e1a9 = {
              "M+": _0x580cff[_0x541ee2(1019, "*#pD")](new _0x3903a8()[_0x541ee2(778, "race")](), 1),
              "d+": new _0x1f6c0e()[_0x541ee2(294, "SteG")](),
              "H+": new _0x18b685()[_0x541ee2(813, "(Pxo")](),
              "m+": new _0x5afd56()[_0x541ee2(421, "*#pD")](),
              "s+": new _0x22d1ac()["getSeconds"](),
              "q+": _0x42ccba[_0x541ee2(562, "QR)n")](_0x580cff["CMELg"](_0x580cff[_0x541ee2(690, "jcyg")](new _0x4cb989()[_0x541ee2(855, "gJDJ")](), 3), 3)),
              "S": new _0x3befee()[_0x541ee2(874, "Wh6L")]()
            };
            /(y+)/[_0x541ee2(572, "8YAN")](_0x4dd22b) && (_0x2eacf8 = _0xe7484d[_0x541ee2(608, "JQ5o")](_0x4bf033["$1"], _0x580cff[_0x541ee2(263, "eki$")](new _0x76a526()[_0x541ee2(1076, "QR)n")](), "")["substr"](_0x580cff["fDHcJ"](4, _0x34a414["$1"][_0x541ee2(1096, "JQ5o")]))));
            for (let _0x271f86 in _0x45e1a9) new _0x2eb38d(_0x580cff[_0x541ee2(744, "bavJ")](_0x580cff[_0x541ee2(411, "race")]("(", _0x271f86), ")"))[_0x541ee2(279, "3con")](_0x3cd7ce) && (_0x1801e4 = _0x2beb81[_0x541ee2(693, "race")](_0x215b55["$1"], _0x580cff[_0x541ee2(862, "8YAN")](1, _0x44c2cf["$1"]["length"]) ? _0x45e1a9[_0x271f86] : _0x580cff[_0x541ee2(762, "gJDJ")]("00", _0x45e1a9[_0x271f86])[_0x541ee2(789, "drE]")](_0x580cff[_0x541ee2(519, "2$1i")]("", _0x45e1a9[_0x271f86])["length"])));
            return _0x5115c4;
          } else return !![];
        } else return ![];
      } catch (_0x3cd271) {
        return ![];
      }
    }
    [_0x4f37da(753, "QR)n")](_0x259e7b) {
      const _0x2d9100 = _0x4f37da;
      if (_0x4197b2["Dtfrs"](_0x4197b2[_0x2d9100(761, "*rU%")], _0x4197b2[_0x2d9100(689, "8m^2")])) {
        var _0x135d33 = typeof _0x259e7b == _0x2d9100(636, "(Pxo") && _0x4197b2[_0x2d9100(534, "eki$")](Object["prototype"][_0x2d9100(496, "Yvqf")][_0x2d9100(503, "race")](_0x259e7b)[_0x2d9100(352, "Wh6L")](), _0x4197b2[_0x2d9100(894, "(%T6")]) && !_0x259e7b["length"];
        return _0x135d33;
      } else _0x56a9b9[_0x2d9100(297, "gxNC")](_0x2d9100(1028, "fxnj"));
    }
    async ["sendMsg"](_0xe0b72b) {
      const _0x582765 = _0x4f37da;
      if ("GnxaG" !== _0x4197b2[_0x582765(715, "8m^2")]) _0x1e70e4 = "";else {
        if (!_0xe0b72b) return;
        $[_0x582765(594, "gptZ")]() ? await notify["sendNotify"]($[_0x582765(296, "8m^2")], _0xe0b72b) : $["msg"]($[_0x582765(1083, "#a%H")], "", _0xe0b72b);
      }
    }
    async ["httpRequest"](_0x2706ee) {
      const _0x160762 = _0x4f37da,
        _0x529304 = {
          "WpZZf": function (_0x8ebc51, _0x5698c1) {
            return _0x8ebc51 != _0x5698c1;
          },
          "PbAqa": function (_0x33c3d1, _0x169bee) {
            return _0x33c3d1 == _0x169bee;
          },
          "PklWF": _0x4197b2["xrYRz"],
          "fhqVH": function (_0x5d16e1, _0x5e7a51) {
            return _0x4197b2["xMRnb"](_0x5d16e1, _0x5e7a51);
          },
          "JWXgu": function (_0x4b15ed, _0x26bb26) {
            const _0x521f07 = _0x578d;
            return _0x4197b2[_0x521f07(583, "[Gg*")](_0x4b15ed, _0x26bb26);
          },
          "HnTiG": function (_0x522102, _0x178532) {
            const _0x7aa62c = _0x578d;
            return _0x4197b2[_0x7aa62c(967, "fU8G")](_0x522102, _0x178532);
          },
          "CDxGo": function (_0x42bea6, _0x475399) {
            return _0x42bea6 & _0x475399;
          }
        };
      if (_0x4197b2[_0x160762(806, "YLV&")](_0x4197b2[_0x160762(454, "race")], _0x4197b2[_0x160762(355, "wA72")])) {
        const _0x161f86 = {
          ..._0x2706ee
        };
        if (!_0x161f86[_0x160762(293, "(%T6")]) {
          if (_0x4197b2["SykLT"] === _0x4197b2[_0x160762(1054, "QR)n")]) _0x161f86[_0x160762(1020, "jcyg")] = {};else return _0x529304[_0x160762(533, "drE]")]("undefined", typeof _0x44a50f) && _0x529304[_0x160762(313, "QR)n")](_0x529304[_0x160762(378, "U(UW")], typeof _0x898634);
        }
        _0x161f86[_0x160762(452, "(Pxo")] && (_0x161f86[_0x160762(634, "U(UW")] += "?" + this[_0x160762(820, "H4#!")](_0x161f86[_0x160762(353, "Sb5T")]));
        _0x161f86[_0x160762(505, "YLV&")] = _0x161f86[_0x160762(587, "drE]")][_0x160762(478, "vdg*")]();
        _0x4197b2[_0x160762(319, "CQ4*")](_0x161f86[_0x160762(1098, "CQ4*")], _0x4197b2["MSFhZ"]) && (delete _0x161f86["headers"][_0x4197b2[_0x160762(669, "JQ5o")]], delete _0x161f86["headers"]["Content-Length"], delete _0x161f86[_0x4197b2[_0x160762(963, "v1ox")]]);
        if (_0x4197b2[_0x160762(387, "QR)n")](_0x161f86[_0x160762(284, "i9xe")], _0x4197b2["gpuuz"])) {
          if (_0x4197b2[_0x160762(1074, "8m^2")](_0x4197b2[_0x160762(726, "drE]")], _0x160762(588, "[Gg*"))) {
            let _0x53a515;
            if (!_0x161f86["body"]) _0x161f86["body"] = "";else {
              if (_0x160762(277, "2$1i") !== _0x4197b2[_0x160762(831, "R1Qv")]) _0xd5d6a2[_0x160762(286, "ms*h")](_0x768d41);else {
                if (typeof _0x161f86["body"] == _0x4197b2["thkMj"]) {
                  if (_0x4197b2[_0x160762(359, "[Gg*")](_0x160762(828, "@EdC"), _0x4197b2[_0x160762(958, "wA72")])) {
                    const _0x41326a = !this[_0x160762(1106, "QR)n")]() && !this[_0x160762(1031, "Wh6L")]() && !this["isLoon"]();
                    _0x41326a ? this["log"]("", "\u2757\uFE0F" + this[_0x160762(278, "I*]p")] + _0x160762(757, "gJDJ"), _0x3e8095[_0x160762(1109, "drE]")]) : this["log"]("", "\u2757\uFE0F" + this[_0x160762(853, "SteG")] + _0x160762(1119, "8m^2"), _0x2c9176);
                  } else {
                    if (this["isJSONString"](_0x161f86[_0x160762(800, "xlhI")])) {
                      if (_0x4197b2["iXZDd"] === _0x4197b2["iXZDd"]) _0x53a515 = _0x160762(310, "@EdC");else return _0x4197b2[_0x160762(566, "H4#!")][_0x160762(911, "UJpX")](/[xy]/g, function (_0x113d75) {
                        const _0x5a7dd4 = _0x160762;
                        var _0x1d2a32 = _0x529304["fhqVH"](_0x529304[_0x5a7dd4(405, "gJDJ")](_0x1e0759[_0x5a7dd4(331, "US*&")](), 16), 0),
                          _0x2179d9 = _0x529304[_0x5a7dd4(959, "CQ4*")](_0x113d75, "x") ? _0x1d2a32 : _0x529304[_0x5a7dd4(455, "QR)n")](_0x529304["CDxGo"](_0x1d2a32, 3), 8);
                        return _0x2179d9[_0x5a7dd4(845, "gptZ")](16);
                      });
                    } else _0x53a515 = _0x160762(687, "eki$");
                  }
                } else this["isJson"](_0x161f86[_0x160762(936, "8m^2")]) && (_0x161f86[_0x160762(339, "CQ4*")] = JSON[_0x160762(842, "Yvqf")](_0x161f86[_0x160762(422, "R1Qv")]), _0x53a515 = _0x4197b2[_0x160762(1113, "gxNC")]);
              }
            }
            !_0x161f86[_0x160762(736, "@IdH")][_0x4197b2[_0x160762(867, "Yvqf")]] && (_0x161f86[_0x160762(380, "wA72")][_0x160762(281, "eki$")] = _0x53a515), delete _0x161f86["headers"][_0x160762(486, "H4#!")];
          } else {
            let _0x579089 = this[_0x160762(657, "WhP5")](_0x20ec23);
            if (/^@/[_0x160762(517, "Wh6L")](_0x1110bd)) {
              const [, _0x47bf22, _0x4e03c9] = /^@(.*?)\.(.*?)$/[_0x160762(983, "YLV&")](_0x3a88f9),
                _0x3a40fe = _0x47bf22 ? this[_0x160762(382, "8YAN")](_0x47bf22) : "";
              if (_0x3a40fe) try {
                const _0x1b203e = _0x1ef682[_0x160762(885, "fU8G")](_0x3a40fe);
                _0x579089 = _0x1b203e ? this[_0x160762(446, "m(XK")](_0x1b203e, _0x4e03c9, "") : _0x579089;
              } catch (_0x260fbc) {
                _0x579089 = "";
              }
            }
            return _0x579089;
          }
        }
        if (this[_0x160762(611, "xlhI")]()) {
          this[_0x160762(1117, "eki$")](_0x161f86);
          let _0x613239 = await this["got"](_0x161f86);
          return this[_0x160762(804, "gJDJ")](_0x613239[_0x160762(899, "gxNC")]) && (_0x613239[_0x160762(350, "YLV&")] = JSON["parse"](_0x613239[_0x160762(913, "US*&")])), _0x613239;
        }
      } else return _0xe03909[_0x160762(518, "QR)n")](_0x58ce32, _0x1198f1);
    }
    [_0x4f37da(520, "2$1i")](_0x24483e) {
      const _0x13c17e = _0x4f37da,
        _0x44c566 = _0x4197b2[_0x13c17e(883, "@IdH")];
      return Array[_0x13c17e(1060, "fU8G")]({
        "length": _0x24483e
      }, () => _0x44c566[Math[_0x13c17e(662, "[U*D")](Math[_0x13c17e(472, "v1ox")]() * _0x44c566[_0x13c17e(930, ")#[a")])])[_0x13c17e(1013, "ms*h")]("");
    }
    ["randomString"](_0x3fbdac) {
      const _0xdcceb = _0x4f37da,
        _0x3084d7 = _0x4197b2[_0xdcceb(423, "wA72")];
      return Array["from"]({
        "length": _0x3fbdac
      }, () => _0x3084d7[Math[_0xdcceb(1041, "(Pxo")](Math[_0xdcceb(980, "eki$")]() * _0x3084d7[_0xdcceb(305, "I*]p")])])[_0xdcceb(1027, "I*]p")]("");
    }
    [_0x4f37da(290, "xlhI")]() {
      return new Date()["getTime"]();
    }
    [_0x4f37da(781, "vdg*")]() {
      const _0xfaccef = _0x4f37da,
        _0x5483d7 = {
          "sHQSy": function (_0x595324, _0x7697fc) {
            return _0x595324 !== _0x7697fc;
          },
          "DeGfC": _0xfaccef(335, "YLV&"),
          "bRymx": function (_0x2e5ab1, _0x305005) {
            return _0x4197b2["qOjKD"](_0x2e5ab1, _0x305005);
          },
          "vbsww": function (_0x2889ca, _0xe3aec8) {
            return _0x4197b2["xMRnb"](_0x2889ca, _0xe3aec8);
          },
          "KozFm": function (_0x51b0f5, _0x512e70) {
            return _0x4197b2["UaRxp"](_0x51b0f5, _0x512e70);
          },
          "bQjgt": _0x4197b2[_0xfaccef(315, "gptZ")]
        };
      if (_0x4197b2[_0xfaccef(479, "3con")](_0x4197b2[_0xfaccef(992, "@IdH")], _0x4197b2[_0xfaccef(985, "i9xe")])) return _0xfaccef(261, "jcyg")[_0xfaccef(425, "gxNC")](/[xy]/g, function (_0x19018b) {
        const _0x5c0578 = _0xfaccef;
        if (_0x5483d7["sHQSy"](_0x5c0578(335, "YLV&"), _0x5483d7["DeGfC"])) return _0x5d8be1[_0x5c0578(638, "@IdH")](this["fs"]["readFileSync"](_0x419c9b));else {
          var _0x54312e = Math[_0x5c0578(459, "8m^2")]() * 16 | 0,
            _0x2f7efd = _0x5483d7["bRymx"](_0x19018b, "x") ? _0x54312e : _0x5483d7[_0x5c0578(1052, "gptZ")](_0x5483d7[_0x5c0578(551, "fxnj")](_0x54312e, 3), 8);
          return _0x2f7efd[_0x5c0578(550, "H4#!")](16);
        }
      });else {
        const _0x3510a8 = "4|5|3|0|7|6|2|1"[_0xfaccef(702, "8YAN")]("|");
        let _0x5dda35 = 0;
        while (!![]) {
          switch (_0x3510a8[_0x5dda35++]) {
            case "0":
              this[_0xfaccef(999, "gptZ")] = [];
              continue;
            case "1":
              this[_0xfaccef(795, "(%T6")]("", "\uD83D\uDD14" + this[_0xfaccef(649, "CQ4*")] + ", \u5F00\u59CB!");
              continue;
            case "2":
              _0x4588b8[_0xfaccef(567, "3con")](this, _0x2fe0e7);
              continue;
            case "3":
              this[_0xfaccef(1037, "bavJ")] = _0x5483d7["bQjgt"];
              continue;
            case "4":
              this["name"] = _0x5beb8d;
              continue;
            case "5":
              this[_0xfaccef(765, "8YAN")] = null;
              continue;
            case "6":
              this["startTime"] = new _0x574140()[_0xfaccef(954, "UJpX")]();
              continue;
            case "7":
              this[_0xfaccef(1014, "WhP5")] = "\n";
              continue;
          }
          break;
        }
      }
    }
    [_0x4f37da(341, "*#pD")](_0x4ee7a0) {
      const _0x182602 = _0x4f37da;
      let _0x443c44 = {
        "M+": _0x4197b2[_0x182602(626, "YLV&")](new Date()["getMonth"](), 1),
        "d+": new Date()[_0x182602(564, "Wh6L")](),
        "H+": new Date()[_0x182602(568, "drE]")](),
        "m+": new Date()[_0x182602(904, "nB0E")](),
        "s+": new Date()[_0x182602(360, "CQ4*")](),
        "q+": Math["floor"](_0x4197b2[_0x182602(898, "wA72")](new Date()[_0x182602(275, "UJpX")]() + 3, 3)),
        "S": new Date()[_0x182602(969, "(Pxo")]()
      };
      /(y+)/[_0x182602(719, "v1ox")](_0x4ee7a0) && (_0x4ee7a0 = _0x4ee7a0[_0x182602(432, "YLV&")](RegExp["$1"], (new Date()[_0x182602(927, "Yvqf")]() + "")[_0x182602(811, "xlhI")](_0x4197b2[_0x182602(675, "gptZ")](4, RegExp["$1"][_0x182602(901, "gxNC")]))));
      for (let _0x3d5fba in _0x443c44) new RegExp("(" + _0x3d5fba + ")")[_0x182602(321, "nB0E")](_0x4ee7a0) && (_0x4ee7a0 = _0x4ee7a0["replace"](RegExp["$1"], _0x4197b2["unZWD"](1, RegExp["$1"][_0x182602(597, "ms*h")]) ? _0x443c44[_0x3d5fba] : _0x4197b2[_0x182602(412, "gptZ")]("00", _0x443c44[_0x3d5fba])[_0x182602(548, "[Gg*")](("" + _0x443c44[_0x3d5fba])["length"])));
      return _0x4ee7a0;
    }
    ["msg"](_0xf7a802 = _0x1fd2cb, _0x18ebdc = "", _0x28a6eb = "", _0x3a142f) {
      const _0x4408af = _0x4f37da,
        _0x12ac88 = {
          "EKozk": function (_0x54c057, _0x391144, _0xee78dd) {
            return _0x4197b2["Ngeyi"](_0x54c057, _0x391144, _0xee78dd);
          }
        };
      if (_0x4197b2[_0x4408af(880, "Wh6L")](_0x4197b2["wsJwl"], _0x4197b2[_0x4408af(379, "H4#!")])) {
        const _0x2ea1cc = _0x49ebfd => !_0x49ebfd || !this["isLoon"]() && this[_0x4408af(873, "drE]")]() ? _0x49ebfd : "string" == typeof _0x49ebfd ? this[_0x4408af(266, "8m^2")]() ? _0x49ebfd : this[_0x4408af(582, "i9xe")]() ? {
          "open-url": _0x49ebfd
        } : void 0 : _0x4408af(536, "fU8G") == typeof _0x49ebfd && (_0x49ebfd[_0x4408af(1008, "Wh6L")] || _0x49ebfd[_0x4408af(295, "*rU%")]) ? this[_0x4408af(834, "race")]() ? _0x49ebfd["open-url"] : this[_0x4408af(532, "v1ox")]() ? _0x49ebfd : void 0 : void 0;
        this[_0x4408af(1082, "[U*D")] || (this[_0x4408af(458, "*rU%")]() || this[_0x4408af(818, "QR)n")]() ? $notification["post"](_0xf7a802, _0x18ebdc, _0x28a6eb, _0x2ea1cc(_0x3a142f)) : this[_0x4408af(311, "US*&")]() && $notify(_0xf7a802, _0x18ebdc, _0x28a6eb, _0x4197b2[_0x4408af(617, "QR)n")](_0x2ea1cc, _0x3a142f)));
        let _0x25e5e6 = ["", _0x4197b2[_0x4408af(1033, "JQ5o")]];
        _0x25e5e6["push"](_0x1fd2cb), _0x18ebdc ? _0x25e5e6["push"](_0x18ebdc) : "", _0x28a6eb ? _0x25e5e6[_0x4408af(1049, "wA72")](_0x28a6eb) : "", console["log"](_0x25e5e6["join"]("\n")), this[_0x4408af(1084, "QR)n")] = this[_0x4408af(1084, "QR)n")][_0x4408af(987, "m(XK")](_0x25e5e6);
      } else {
        const _0x2cbc1d = new _0x2167a3(_0x330026 => {
          _0x12ac88["EKozk"](_0x970490, () => {
            _0x330026(!![]);
          }, _0xff9be3);
        });
        return _0x2cbc1d;
      }
    }
    [_0x4f37da(795, "(%T6")](..._0x3fbe95) {
      const _0x21bd11 = _0x4f37da;
      _0x4197b2[_0x21bd11(866, "v1ox")] !== _0x21bd11(560, "*rU%") ? _0x98b491 = _0x4197b2["izaop"] : (_0x4197b2[_0x21bd11(612, "YLV&")](_0x3fbe95[_0x21bd11(930, ")#[a")], 0) && (this[_0x21bd11(1075, "UJpX")] = [...this[_0x21bd11(600, "Wh6L")], ..._0x3fbe95]), console[_0x21bd11(893, "SteG")](_0x3fbe95[_0x21bd11(444, "YLV&")](this[_0x21bd11(604, "fU8G")])));
    }
    ["logErr"](_0x39e782, _0xbaa729) {
      const _0x574b21 = _0x4f37da;
      if (_0x4197b2[_0x574b21(363, "race")] === _0x4197b2[_0x574b21(844, "ms*h")]) return this["data"] && this["data"][_0x5fc3b7] || null;else {
        const _0x11fb14 = !this[_0x574b21(273, "(Pxo")]() && !this["isQuanX"]() && !this[_0x574b21(325, "JQ5o")]();
        _0x11fb14 ? this[_0x574b21(1073, "YLV&")]("", "\u2757\uFE0F" + this[_0x574b21(1062, "*rU%")] + _0x574b21(584, "(%T6"), _0x39e782[_0x574b21(664, "jcyg")]) : this[_0x574b21(922, "gptZ")]("", "\u2757\uFE0F" + this[_0x574b21(1001, "Sb5T")] + _0x574b21(397, "fxnj"), _0x39e782);
      }
    }
    [_0x4f37da(679, "8YAN")](_0x549d22) {
      const _0x2da849 = _0x4f37da;
      if (_0x4197b2[_0x2da849(794, "gJDJ")](_0x4197b2["kcXmU"], _0x4197b2["kcXmU"])) return new Promise(_0x150aef => setTimeout(_0x150aef, _0x549d22));else _0x5aee4b[_0x2da849(835, "CQ4*")](_0x2da849(688, "YLV&")), this["ckStatus"] = ![];
    }
    [_0x4f37da(1046, "i9xe")](_0x722351 = {}) {
      const _0x2765f6 = _0x4f37da,
        _0x5c3ba2 = {
          "RSFUq": _0x4197b2[_0x2765f6(723, "s5*X")]
        };
      if (_0x4197b2[_0x2765f6(841, "@EdC")]("zaHHJ", "zaHHJ")) {
        const _0x32cefa = new Date()["getTime"](),
          _0x3e2b48 = _0x4197b2["fTjgL"](_0x4197b2[_0x2765f6(368, "i9xe")](_0x32cefa, this[_0x2765f6(1057, "[U*D")]), 1000);
        this[_0x2765f6(624, "eki$")]("", "\uD83D\uDD14" + this["name"] + _0x2765f6(441, "8m^2") + _0x3e2b48 + " \u79D2"), this["log"](), (this[_0x2765f6(670, "JQ5o")]() || this[_0x2765f6(939, "WhP5")]() || this[_0x2765f6(490, "fxnj")]()) && $done(_0x722351);
      } else return _0x5c3ba2["RSFUq"] != typeof _0x1a8920;
    }
  }(_0x1fd2cb, _0x3f53d5);
}
var version_ = "jsjiami.com.v7";