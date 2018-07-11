const promise = new Promise( ( resolve, reject ) => {
  
  console.log( 'Starting a wait of 1.5 seconds' );
  
  setTimeout( () => {
    resolve( 'This got resolved after 1.5 seconds' );
  }, 5000 );
  
/*
  setTimeout( () => {
    console.log( 'This waited 1.5 seconds' );
  }, 5000 );
*/
} );

console.log( 'before' );

promise.then( ( data ) => {
  console.log( '1', data );
} );

promise.then( ( data ) => {
  console.log( '2', data );
} );

console.log( 'after' );
