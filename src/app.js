const name = 'Steve';

console.log( `${name}, app.js is running` );

const template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
  </div>
);

var appRoot = document.getElementById( 'app' );

ReactDOM.render( template, appRoot );