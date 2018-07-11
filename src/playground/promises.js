const promise = new Promise( ( resolve, reject ) => {
  
  const millis = 5000;
  
  console.log( `Starting a wait of ${millis / 1000} seconds` );
  
  setTimeout( () => {
    reject( {
              error: 'Something went wrong!'
            } );
    
    resolve( {
               name: 'Steve Ingram',
               age: 53,
               comment: `This got resolved after ${millis / 1000} seconds.`
             } );
  }, millis );
} );

console.log( 'before' );

promise.then( ( data ) => {
  console.log( '1', data );
}, ( error ) => {
  console.log( 'error: ', error );
} );

console.log( 'after' );
