export default {
	env() {
		if (process.env.NODE_ENV === "development") return "development";
		return "production";
	},
	previewUrl() {
		if (this.env() === "development") {
			let arr = window.location.origin.split(":");
			return `${arr[0]}:${arr[1]}:3000`
		}
		return window.location.origin + "/form-design-h5"
	},
	previewOrigin() {
		if (this.env() === "development") {
			let arr = window.location.origin.split(":");
			return `${arr[0]}:${arr[1]}:3000`
		}
		return window.location.origin
	},
	apiUrl() {
		return "http://xxx.com/";
	}
};