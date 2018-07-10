const path = require( 'path' );
const express = require( 'express' );
const app = express();
const publicPath = path.resolve( __dirname, '../public' );

app.use( express.static( publicPath ) );