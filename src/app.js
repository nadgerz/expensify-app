var template = 'Steve';

console.log( `${template}, app.js is running` );

template = <h1>YES IT DOES!!!</h1>;

var appRoot = document.getElementById( 'app' );

ReactDOM.render( template, appRoot );