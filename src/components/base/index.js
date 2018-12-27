import Vue from "vue"

import ImgUpload from './img-upload'; //图片上传组件

let MyPlugin = {};

MyPlugin.install = function(Vue) {

	if (this.installed) return;

	Vue.component(ImgUpload.name, ImgUpload); //注册组件

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	MyPlugin.install(window.Vue);
}

Vue.use(MyPlugin)

export default MyPlugin

/**
 * 使用方法：
 * 1：将此文件夹复制到项目中
 * 2：在mainjs里引入 
 *    import "此文件夹路径";
 * 3：各组件使用方法请查看各组件的.vue文件的注释
 */