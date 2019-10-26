import Crypto from "./crypto";

export default {
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
  isLink(val){
    let pattern = /^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/;
		let isLink = pattern.test(val);
		return isLink;
  },
	/**
	 * 四舍五入强制保留n位小数
	 * @param  x  操作数字
	 * @param  n 保留位数
	 */
  toDecimal(x, n) {
    var f = parseFloat(x);
    if (isNaN(f) && isNaN(n)) {
      return false;
    }
    if (n === 0) return Math.round(x);
    var num = Number("1E" + n);
    f = Math.round(x * num) / num;
    var s = f.toString();
    var rs = s.indexOf(".");
    if (rs < 0) {
      rs = s.length;
      s += ".";
    }
    while (s.length <= rs + n) {
      s += "0";
    }
    return s;
  },
	/**
	 * 获取日期时间 默认格式 "yyyy-mm-dd hh:mm:ss"
	 * @param {String} formatType  可选 格式类型
	 * @param {Date} formatDate  可选 指定日期
	 * @return {String} 所需格式的日期
	 */
  getFormatDate(formatType, formatDate) {
    let type = formatType || "yyyy-mm-dd hh:mm:ss";
    let date = Object.prototype.toString.call(formatDate) === "[object Date]" ? formatDate : new Date();
    let currentdate = "";
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    month >= 1 && month <= 9 ? (month = "0" + month) : "";
    strDate >= 0 && strDate <= 9 ? (strDate = "0" + strDate) : "";
    minutes >= 0 && minutes <= 9 ? (minutes = "0" + minutes) : "";
    seconds >= 0 && seconds <= 9 ? (seconds = "0" + seconds) : "";

    switch (type.toLowerCase()) {
      case "yyyy-mm-dd hh:mm:ss":
        currentdate = date.getFullYear() + "-" + month + "-" + strDate + " " + date.getHours() + ":" + minutes + ":" + seconds;
        break;
      case "yyyy-mm-dd":
        currentdate = date.getFullYear() + "-" + month + "-" + strDate;
        break;
      case "yyyy-mm-dd hh:mm":
        currentdate = date.getFullYear() + "-" + month + "-" + strDate + " " + date.getHours() + ":" + minutes;
        break;
      case "yyyy-mm-dd hh":
        currentdate = date.getFullYear() + "-" + month + "-" + strDate + " " + date.getHours();
        break;
      case "yyyy-mm":
        currentdate = date.getFullYear() + "-" + month;
        break;
      case "yyyy":
        currentdate = date.getFullYear();
        break;
      default:
        currentdate = date.getFullYear() + "-" + month + "-" + strDate + " " + date.getHours() + ":" + minutes + ":" + seconds;
        break;
    }
    return currentdate;
  },
	/**
	 * 数据导出
	 * @param {String} url 导出路径
	 * @param {Object} data  导出参数
	 */
  exportData(url, data) {
    if (typeof data !== "object") {
      console.warn("导出参数错误");
      return;
    }
    let queryData = "",
      downloadUrl = "";
    for (const [key, value] of Object.entries(data)) {
      if (key === "sessionId") break;
      queryData += `${key}=${value}&`;
    }
    downloadUrl = url + "?" + queryData.slice(0, -1);
    window.location.href = downloadUrl;
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
      if (obj.hasOwnProperty(key)) {
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