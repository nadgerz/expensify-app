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