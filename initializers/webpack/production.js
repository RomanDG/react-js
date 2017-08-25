import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

const root = path.join(process.cwd(), 'src');

export default {
  devtool: 'source-map',

  entry: {
    bundle: './src/index.js'
  },

  output: {
    path: path.join(process.cwd(), 'src', 'static', 'assets'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
			},
			{
				test: /\.(eot|png|ttf|svg|woff|woff2)$/,
				loader: 'url-loader'
			}      
    ],
  },

  resolve: {
    modules: [
      path.join(process.cwd(), 'src'),
      'node_modules'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
			__SERVER__: false,
			__CLIENT__: true,
      __DEVELOPMENT__: false, 
      'process.ENV.NODE_ENV': 'production'  
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|ru)$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => (module.context && module.context.includes('node_modules'))
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'source-map'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
}