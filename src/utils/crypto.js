const CryptoJS = require("crypto-js");
const AES = require("crypto-js/aes");
const utf8 = require("crypto-js/enc-utf8");
const md5 = require("crypto-js/md5");

const iv = utf8.parse("qwertyuiop123456");
const mode = CryptoJS.mode.CBC;
const padding = require("crypto-js/pad-pkcs7");

const default_key = "yuikey0123456789";

export default {
  encrypt(data, key) {
    if (typeof data !== "string") data = JSON.stringify(data);
    let real_key = utf8.parse(md5(key || default_key).toString().slice(0, 16));
    let bytes = AES.encrypt(data, real_key, {
      iv: iv,
      mode: mode,
      padding: padding
    });
    return bytes.toString();
  },
  decrypt(data, key) {
    if (!data || typeof data !== "string") return '';
    let real_key = utf8.parse(md5(key || default_key).toString().slice(0, 16));
    let bytes = AES.decrypt(data, real_key, {
      iv: iv,
      mode: mode,
      padding: padding
    });
    return bytes.toString(utf8);
  }
};
