// import Vue from "vue";

// const vue = new Vue();

export default {
	previewUrl: "http://192.168.218.113:3000",
	env() {
		if (process.env.NODE_ENV === "development") return "development";
		if (window.location.href.includes("192.168")) return "test";
		return "production";
	},
	apiUrl() {
		return "http://test-api.junjue888.com/";
		// if (this.env() === "development") return "http://192.168.218.185:8022/";
		// if (this.env() === 'test') return "http://test-api.junjue888.com/";
		// return "http://api.junjue888.com/";
	}
};