var template = 'Steve';

console.log( `${template}, app.js is running` );

template = <h1>Does this change?</h1>;

var appRoot = document.getElementById( 'app' );

ReactDOM.render( template, appRoot );