const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'https://api.corona-19.kr/',
			changeOrigin: true,
		})
	);
};