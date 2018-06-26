var template = 'Steve';

console.log( `${template}, app.js is running` );

template = <p>This is JSX from app.js</p>;

xtemplate = React.createElement(
  'h1',
  { id: 'someid' },
  'Something new'
);

var appRoot = document.getElementById( 'app' );

ReactDOM.render( template, appRoot );