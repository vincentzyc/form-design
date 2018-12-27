import Vue from 'vue';
import Api from './api';
import Util from './util';

"use strict";

let MyPlugin = {}

MyPlugin.install = function(Vue) {
	if (Vue) {
		Vue.prototype.$api = Api;
		Vue.prototype.$util = Util;
	}
};

Vue.use(MyPlugin)

export default MyPlugin;