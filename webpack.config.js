// Where does our application kick off?
// Where do we output our bundle.js
const path = require( 'path' );

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve( __dirname, 'public' ),
    filename: 'bundle.js'
  }
};