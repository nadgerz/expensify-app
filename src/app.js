import anything, { add, square } from './utils';
import isOldFart, { canDrink, isAdult } from './person';


console.clear();
console.log( 'app.js is running!' );

console.log( square( 4 ) );
console.log( add( 4, 23 ) );
console.log( anything( 9, 23 ) );

console.log( canDrink( 4 ) );
console.log( isAdult( 23 ) );
console.log( isOldFart( 66 ) );
