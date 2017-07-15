const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = 'localhost';
const port = 3000;

new webpackDevServer(webpack(config), {
	hot: true,
	historyApiFallback: true,
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
}).listen(port, host, (err) => {
	err ? console.log(err) : console.log(`listenig at host: ${host}, port: ${port}.`)
});