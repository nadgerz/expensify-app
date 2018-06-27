const square = function( x ) {
  return x * x;
};

function namedFunc( x ) {
  return x * x;
}

const squareArrow = ( x ) => {
  return x * x;
};

const tripleArrow = ( x ) => x ** 3;

console.log( square( 8 ) );
console.log( namedFunc( 7 ) );
console.log( squareArrow( 5 ) );
console.log( tripleArrow( 3 ) );

const getFirstName1 = ( name ) => {
  return name.split( ' ' )[0];
};

const getFirstName2 = ( name ) => name.split( ' ' )[0];

const name = 'Steve Ingram';

console.log( getFirstName1( name ) );
console.log( getFirstName2( name ) );