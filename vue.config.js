module.exports = {
	baseUrl: "./",
	productionSourceMap: false,
	chainWebpack: config => {
		// 移除 prefetch 插件
		config.plugins.delete('prefetch')
	},

	devServer: {
		port: 5000
	}
};