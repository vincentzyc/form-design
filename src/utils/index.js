import Vue from "vue"
import Crypto from "./crypto";

const vm = new Vue();

export default {
  /**
   * 判断是否存在 key
   * @param obj 判断对象
   * @param key 判断 key值
   * @return {Boolean} 是否存在标识
   */
  hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key)
  },
  /**
   * 获取数据类型
   * @param value 需要判断的值
   * @return {String} 类型   String Number Object......
   */
  getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
  },
  /**
   * 获取url参数值
   * @param name  name
   */
  getUrlParam(name) {
    var reg = new RegExp("(^|/?|&)" + name + "=([^&]*)(&|$)", "i");
    var l = window.location.href;
    var i = l.indexOf("?");
    if (i < 0) return null;
    var str = l.slice(i + 1, l.length);
    if (str) {
      var r = str.match(reg);
      if (r) {
        return unescape(r[2]);
      }
    }
    return null;
  },
	/**
	 * 设置cookie
	 * @param key  key
	 * @param value 值
	 * @param time  保存时间（天）
	 */
  setCookie(key, value, time) {
    var cur = new Date();
    cur.setTime(cur.getTime() + time * 24 * 3600 * 1000);
    document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + (time ? cur.toGMTString() : "");
  },
  getCookie(key) {
    var data = document.cookie;
    var startIndex = data.indexOf(key + "=");
    if (startIndex > -1) {
      startIndex = startIndex + key.length + 1;
      var endIndex = data.indexOf(";", startIndex);
      endIndex = endIndex < 0 ? data.length : endIndex;
      return decodeURIComponent(data.substring(startIndex, endIndex));
    } else {
      return "";
    }
  },
  delCookie(key) {
    var data = this.getCookie(key);
    if (data !== false) this.setCookie(key, data, -1);
  },
	/**
	 *
	 * @param key key
	 * @param value value
	 * @param encode 是否加密存储
	 */
  setSStorage(key, value, encode) {
    let str = window.JSON.stringify(value);
    if (encode) {
      str = Crypto.encrypt(str);
    }
    window.sessionStorage.setItem(key, str);
  },
  getSStorage(key, decode) {
    var str = "";
    str = window.sessionStorage.getItem(key);
    if (!str) return "";
    if (decode) {
      str = Crypto.decrypt(str);
    }
    try {
      return window.JSON.parse(str);
    } catch (error) {
      window.sessionStorage.removeItem(key);
      window.location.reload();
    }
  },
  setLStorage(key, value, encode) {
    let str = window.JSON.stringify(value);
    if (encode) {
      str = Crypto.encrypt(str);
    }
    window.localStorage.setItem(key, str);
  },
  getLStorage(key, decode) {
    var str = "";
    str = window.localStorage.getItem(key);
    if (!str) return "";
    try {
      if (decode) str = Crypto.decrypt(str);
      return window.JSON.parse(str);
    } catch (error) {
      window.localStorage.removeItem(key);
      window.location.reload();
    }
  },
  checkMobile(nub) {
    return /^1[0-9]{10}$/.test(nub);
  },
  isNumber(val) {
    let pattern = /^[1-9]{1}\d*$/g;
    let isNumber = pattern.test(val);
    return isNumber;
  },
  isLink(val) {
    let pattern = /^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/;
    let isLink = pattern.test(val);
    return isLink;
  },
  checkLink(val) {
    let isLink = this.isLink(val);
    if (!isLink) vm.$message.error('请输入正确的网址');
  },
	/**
	 * 缓冲函数
	 * @param {Object} dom 目标dom
	 * @param {Number} destination 目标位置
	 * @param {Number} rate 缓动率
	 * 示例用法
	  var dom = document.documentElement || document.body;
	  this.$util.easeout(dom, 0, 5);
	 */
  easeout(dom, destination = 0, rate = 3) {
    let position = dom.scrollTop;
    if (position === destination || typeof destination !== "number" || rate === 0) {
      return false;
    }
    // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (fn) {
        return setTimeout(fn, 17);
      };
    }
    let step = function () {
      position = position + (destination - position) / rate;
      if (Math.abs(destination - position) < 1) {
        //动画结束
        dom.scrollTop = destination;
        return;
      }
      dom.scrollTop = position;
      requestAnimationFrame(step);
    };
    step();
  },
	/**
	 * 对象深拷贝
	 * @param {Object} obj 初始对象
	 * @return {Object} result 拷贝后对象
	 */
  deepClone(obj) {
    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === 'object') {
          result[key] = this.deepClone(obj[key]); //递归复制
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }
};