const promise = new Promise( ( resolve, reject ) => {
  
  const millis = 3000;
  
  console.log( `Starting a wait of ${millis / 1000} seconds` );
  
  setTimeout( () => {
    resolve( {
               name: 'Steve Ingram',
               age: 53,
               comment: `This got resolved after ${millis / 1000} seconds.`
             } );

    reject( {
              error: 'Something went wrong!'
            } );
  
  }, millis );
} );

console.log( 'before' );

promise.then( ( data ) => {
  console.log( '1', data );
  return data;
} ).then( ( data ) => {
  console.log( '2', data );
} ).catch( ( error ) => {
  console.log( 'error: ', error );
} );

console.log( 'after' );
