const name = 'Steve';

console.log( `${name}, app.js is running` );

const template = <h1>Indecision App</h1><p>This is some infp</p>;

var appRoot = document.getElementById( 'app' );

ReactDOM.render( template, appRoot );