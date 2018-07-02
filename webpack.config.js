const path = require( 'path' );

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve( __dirname, 'public' ),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve( __dirname, 'public' )
  }
};