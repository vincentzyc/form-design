export default {
	previewUrl() {
		if (window.location.port) {
			let arr = window.location.origin.split(":");
			return `${arr[0]}:${arr[1]}:3000`
		}
		return window.location.origin + "/form-design-h5"
	},
	env() {
		if (process.env.NODE_ENV === "development") return "development";
		if (window.location.href.includes("192.168")) return "test";
		return "production";
	},
	apiUrl() {
		return "http://xxx.com/";
	}
};