var template = 'Steve';

console.log( `${template}, app.js is running` );

template = <p>This is JSX from app.js</p>;

var appRoot = document.getElementById( 'app' );

ReactDOM.render( template, appRoot );