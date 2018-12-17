const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'src', 'public'),
    publicPath: "",
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({ use: 'css-loader!sass-loader' })
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({ use: 'css-loader' })
			},
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          'file-loader'
        ]
      },
      {
				test: /\.jpe?g$|\.gif$|\.png$/i,
				loader:'file-loader'
			},
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/views/index.html',
    }),
    new ExtractTextPlugin('styles/[name].bundle.css')
  ]
};
