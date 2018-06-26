var template = 'Steve';

console.log( `${template}, app.js is running` );

template = <p>This is JSX from app.js</p>;

ReactDom.render( template, document.getElementById( 'id' ) );