const promise = new Promise( ( resolve, reject ) => {
  
  console.log( 'Starting a wait of 1.5 seconds' );
  
  setTimeout( () => {
    resolve( 'This got resolved after 1.5 seconds' );
  }, 1500 );
  
  setTimeout( () => {
    console.log( 'This waited 1.5 seconds' );
  }, 1500 );
} );

promise.then( ( data ) => {
  console.log( data );
} );