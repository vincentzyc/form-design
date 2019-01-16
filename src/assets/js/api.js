export default {
	previewUrl: "http://" + window.location.hostname + ":3000", //根据实际情况修改为 form-design-h5 项目地址
	env() {
		if (process.env.NODE_ENV === "development") return "development";
		if (window.location.href.includes("192.168")) return "test";
		return "production";
	},
	apiUrl() {
		return "http://xxx.com/";
	}
};