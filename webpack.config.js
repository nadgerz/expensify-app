const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = ( env ) => {
  console.log( env );
  
  const isProduction = env === 'production';
  
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
        ],
        use: ExtractTextPlugin.extract( {
                                          fallback: 'style-loader',
                                          use: 'css-loader'
                                        } )
      }]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.resolve( __dirname, 'public' ),
      historyApiFallback: true
    },
    plugins: [
      new ExtractTextPlugin( 'styles.css' )
    ]
  };
};
