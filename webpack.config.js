const path = require( 'path' );

module.exports = ( env ) => {
  console.log( env );
  return {
    entry: './src/app.js',
    output: {
      path: path.resolve( __dirname, 'public' ),
      filename: 'bundle.js'
    },
    // mode: 'development',
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.resolve( __dirname, 'public' ),
      historyApiFallback: true
    }
  };
};
