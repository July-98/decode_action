//Mon Aug 05 2024 07:06:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function uu(E, H, W) {
  if (null == E) {
    return "";
  }
  for (var P, M, K, V, L = {}, N = {}, B = "", Q = 2, R = 3, I = 2, T = [], w = 0, k = 0, v = 0; v < E.length; v += 1) {
    if (K = E.charAt(v), Object.prototype.hasOwnProperty.call(L, K) || (L[K] = R++, N[K] = !0), V = B + K, Object.prototype.hasOwnProperty.call(L, V)) {
      B = V;
    } else {
      if (Object.prototype.hasOwnProperty.call(N, B)) {
        if (B.charCodeAt(0) < 256) {
          for (P = 0; P < I; P++) {
            w <<= 1;
            k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
          }
          for (M = B.charCodeAt(0), P = 0; P < 8; P++) {
            w = w << 1 | 1 & M;
            k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
            M >>= 1;
          }
        } else {
          for (M = 1, P = 0; P < I; P++) {
            w = w << 1 | M;
            k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
            M = 0;
          }
          for (M = B.charCodeAt(0), P = 0; P < 16; P++) {
            w = w << 1 | 1 & M;
            k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
            M >>= 1;
          }
        }
        0 == --Q && (Q = Math.pow(2, I), I++);
        delete N[B];
      } else {
        for (M = L[B], P = 0; P < I; P++) {
          w = w << 1 | 1 & M;
          k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
          M >>= 1;
        }
      }
      0 == --Q && (Q = Math.pow(2, I), I++);
      L[V] = R++;
      B = String(K);
    }
  }
  if ("" !== B) {
    if (Object.prototype.hasOwnProperty.call(N, B)) {
      if (B.charCodeAt(0) < 256) {
        for (P = 0; P < I; P++) {
          w <<= 1;
          k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
        }
        for (M = B.charCodeAt(0), P = 0; P < 8; P++) {
          w = w << 1 | 1 & M;
          k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
          M >>= 1;
        }
      } else {
        for (M = 1, P = 0; P < I; P++) {
          w = w << 1 | M;
          k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
          M = 0;
        }
        for (M = B.charCodeAt(0), P = 0; P < 16; P++) {
          w = w << 1 | 1 & M;
          k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
          M >>= 1;
        }
      }
      0 == --Q && (Q = Math.pow(2, I), I++);
      delete N[B];
    } else {
      for (M = L[B], P = 0; P < I; P++) {
        w = w << 1 | 1 & M;
        k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
        M >>= 1;
      }
    }
    0 == --Q && (Q = Math.pow(2, I), I++);
  }
  for (M = 2, P = 0; P < I; P++) {
    w = w << 1 | 1 & M;
    k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
    M >>= 1;
  }
  for (;;) {
    if (w <<= 1, k == H - 1) {
      T.push(W(w));
      break;
    }
    k++;
  }
  return T.join("");
}
function ua(E, H) {
  var K = {};
  K.uGGDj = "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ";
  var V = K;
  if (null == E) {
    return "";
  }
  var M = uu(E, 6, function (L) {
    return V.uGGDj.charAt(L);
  });
  if (H) {
    return M;
  }
  switch (M.length % 4) {
    default:
    case 0:
      return M;
    case 1:
      return M + "===";
    case 2:
      return M + "==";
    case 3:
      return M + "=";
  }
}
function sig(L) {
  for (var N = 0, g = encodeURIComponent(L), B = 0; B < g.length; B++) {
    N = (N << 7) - N + 398 + g.charCodeAt(B);
    N |= 0;
  }
  return N;
}
var data = "https://mxsa.mxbc.net/api/v1/h5/marketing/secretword/confirm{\"marketingId\":\"1816854086004391938\",\"round\":\"00:36\",\"secretword\":\"safasf\",\"sign\":\"0e4659c0ee96a47821890c8d48a37251\",\"s\":2,\"stamp\":1722434578916}";
var data = "https://mxsa.mxbc.net/api/v1/h5/marketing/secretword/confirm{\"marketingId\":\"1816854086004391938\",\"round\":\"19:00\",\"secretword\":\"王陪 1\",\"sign\":\"4a06f4e3f3eea563269cb6af457ae0b7\",\"s\":2,\"stamp\":1722599647005}";
var random_str = sig(data);
console.log(random_str);
var date = Date.now();
var N = `${random_str}|0|${date}|1`;
var N = "-1442164184|0|1722599647023|1";
var g = ua(N, true);
console.log(g);