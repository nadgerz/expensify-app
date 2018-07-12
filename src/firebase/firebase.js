import * as firebase from 'firebase';

// <script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>

/*
const expandedLog = (function(){
  var MAX_DEPTH = 100;
  
  return function(item, depth){
    
    depth = depth || 0;
    
    if (depth > MAX_DEPTH ) {
      console.log(item);
      return;
    }
    
    if (_.isObject(item)) {
      _.each(item, function(value, key) {
        console.group(key + ' : ' +(typeof value));
        expandedLog(value, depth + 1);
        console.groupEnd();
      });
    } else {
      console.log(item);
    }
  }
})();
*/

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyACcP7_rN3n3Zrz2GSF10HlJwSmetmznuo',
  authDomain: 'expensify-ce9e6.firebaseapp.com',
  databaseURL: 'https://expensify-ce9e6.firebaseio.com',
  projectId: 'expensify-ce9e6',
  storageBucket: 'expensify-ce9e6.appspot.com',
  messagingSenderId: '386378967206'
};

firebase.initializeApp( config );

const database = firebase.database();

const tableName = 'expenses';

const seed = () => {
  
  console.clear();
  
  const database = firebase.database();
  
  const tableName = 'expenses';
  
  database.ref( tableName ).set( null );
  
  database.ref( tableName ).push( {
                                    description: 'Water Bill',
                                    amount: 10,
                                    createdAt: 1000,
                                    note: 'Splishy'
                                  } );
  
  database.ref( tableName ).push( {
                                    description: 'Gas Bill',
                                    amount: 50,
                                    createdAt: 800,
                                    note: 'Gassy'
                                  } );
  
  database.ref( tableName ).push( {
                                    description: 'Lekky Bill',
                                    amount: 60,
                                    createdAt: 1800,
                                    note: 'Licky'
                                  } );
  
  database.ref( tableName ).push( {
                                    description: 'Rent Bill',
                                    amount: 109500,
                                    createdAt: 400,
                                    note: 'Rentboy'
                                  } );
};

seed();

/*
const ref1 = database.ref( tableName );
console.log( ref1 );

ref1.once( 'value' )
    .then( ( snapshot ) => {
      console.log( 'Fetching data', snapshot );
  
      const data = snapshot.val();
  
      console.log( 'DATA1', data );
    } )
    .catch( ( error ) => {
      console.log( 'Error fetching data', error.message );
    } );
*/

const ref1 = database.ref( tableName );

ref1.once( 'value' )
    .then( ( snapshot ) => {
  
      const expenses = [];
  
      snapshot.forEach( ( childSnapshot ) => {
        expenses.push( {
                         id: childSnapshot.key,
                         ...childSnapshot.val()
                       } );
      } );
  
      console.log( JSON.stringify( expenses, true, 1 ) );
    } )
    .catch( ( error ) => {
      console.log( 'Error fetching data', error.message );
    } );

ref1.on( 'value', ( snapshot ) => {
  const expenses = [];
  
  snapshot.forEach( ( childSnapshot ) => {
    expenses.push( {
                     id: childSnapshot.key,
                     ...childSnapshot.val()
                   } );
  } );
  
  console.log( JSON.stringify( expenses, true, 2 ) );
} );

ref1.on( 'child_removed', ( snapshot ) => {
  console.log( 'DELETED:', snapshot.key, snapshot.val() );
} );

ref1.on( 'child_changed', ( snapshot ) => {
  console.log( 'CHANGED:', snapshot.key, snapshot.val() );
} );

/*
const numbers = [1, 2, 3];

const notes = [
  {
    id: 1,
    title: 'Banzai!'
  }, {
    id: 2,
    title: 'Glibble!'
  }, {
    id: 3,
    title: 'Neep!'
  }
];

const firebaseNotes = {
  notes: {
    banzai: {
      title: 'Banzai!'
    },
    glibble: {
      title: 'Glibble!'
    },
    neep: {
      title: 'Neep!'
    }
  }
};

database.ref( 'notes' ).push( {
                                title: 'todo',
                                cost: 123
                              } );

*/
/*
database.ref( 'notes' )
        .set( notes )
        .then( () => {
          console.log( 'Data is saved.' );
        } )
        .catch( ( error ) => {
          console.log( 'This failed.', error );
        } );
*/

/*
database.ref()
        .set( {
                name: 'Steve Ingram',
                age: 52,
                isSingle: false,
                job: {
                  company: 'Arcos',
                  title: 'Software Developer'
                },
                location: {
                  city: 'Berlin',
                  postcode: 12105,
                  country: 'Germany'
                },
                stressLevel: 11
              } )
        .then( () => {
          console.log( 'Data is saved' );
        } )
        .catch( ( error ) => {
          console.log( 'This failed.', error );
        } );
*/

/*
const ref1 = database.ref();

ref1.once( 'value' )
    .then( ( snapshot ) => {
      console.log( 'Fetching data ALL:', snapshot );
      const val = snapshot.val();
      console.log( val );
    } )
    .catch( ( error ) => {
      console.log( 'Error fetching data', error.message );
    } );
*/

/*
const ref2 = database.ref( 'location/city' );

ref2.once( 'value' )
    .then( ( snapshot ) => {
      console.log( 'Fetching data 2:', snapshot );
      const val = snapshot.val();
      console.log( val );
    } )
    .catch( ( error ) => {
      console.log( 'Error fetching data', error.message );
    } );
*/

/*
const ref3 = database.ref( 'location/city' );

ref3.on( 'value', ( snapshot ) => {
  console.log( 'Fetching data by subscribing', snapshot );
  const val = snapshot.val();
  console.log( val );
} );
*/

/*
const ref4 = database.ref();

ref4.on( 'value', ( snapshot ) => {
  console.log( 'Fetching data by subscribing ALL', snapshot );
  const val = snapshot.val();
  console.log( val );
} );

ref4.off();
*/

/*
setTimeout( () => {
  database.ref( 'age' ).set( 50 );
}, 5000 );

setTimeout( () => {
  database.ref().off();
}, 10000 );

setTimeout( () => {
  database.ref( 'age' ).set( 100 );
}, 15000 );
*/

/*
const field = 'age';

const ref5 = database.ref( field );

const onValueChange = ref5.on( 'value', ( snapshot ) => {
  const value = snapshot.val();
  console.log( `VALUE CHANGED for ${field} field => [${value}]` );
}, ( error ) => {
  console.log( 'summin blew up!', error.message );
} );

setTimeout( () => {
  ref5.set( 666 );
}, 5000 );

setTimeout( () => {
  ref5.off( 'value', onValueChange );
}, 10000 );

setTimeout( () => {
  console.log( 'no subscription' );
  ref5.set( 667 );
}, 15000 );
*/

// const field = 'name';

/*
const ref5 = database.ref();

const onValueChange = ref5.on( 'value', ( snapshot ) => {
  const data = snapshot.val();
  // console.log( data );
  
  const name = data.name;
  const title = data.job.title;
  const company = data.job.company;
  
  console.log( `${name} is a ${title} at ${company}` );
}, ( error ) => {
  console.log( 'summin blew up!', error.message );
} );

setTimeout( () => {
  ref5.update( {
                 name: 'Fred Bloggs'
               }
  );
}, 5000 );

setTimeout( () => {
  ref5.off( 'value', onValueChange );
}, 10000 );

setTimeout( () => {
  ref5.update( {
                 name: 'Steve Ingram'
               }
  );
}, 15000 );
*/

// var ref = firebase.database().ref();

/*
const updateAttrs1 = {
  location: {
    city: 'New York'
  }
};

ref.update( updateAttrs1 )
   .then( function() {
     console.log( 'Update succeeded.' );
   } )
   .catch( function( error ) {
     console.log( 'Update failed: ' + error.message );
   } );

const updateAttrs2 = {
  'location/city': {
    city: 'Boston'
  }
};

ref.update( updateAttrs2 )
   .then( function() {
     console.log( 'Update succeeded.' );
   } )
   .catch( function( error ) {
     console.log( 'Update failed: ' + error.message );
   } );
*/

/*
var isSingleRef = firebase.database().ref( 'isSingle' );

isSingleRef.set( null )
           .then( function() {
             console.log( 'Remove succeeded set by null.' );
           } )
           .catch( function( error ) {
             console.log( 'Remove failed by set null: ' + error.message );
           } );
*/

/*
var isSingleRef = firebase.database().ref( 'isSingle' );

isSingleRef.remove()
           .then( function() {
             console.log( 'Remove succeeded.' );
           } )
           .catch( function( error ) {
             console.log( 'Remove failed: ' + error.message );
           } );
*/

/*
var ref = firebase.database().ref();

ref.remove()
   .then( function() {
     console.log( 'Remove succeeded.' );
   } )
   .catch( function( error ) {
     console.log( 'Remove failed: ' + error.message );
   } );
*/

// database.ref().set( 'This is my data' );
//
// database.ref( 'age' ).set( 53 );
// database.ref( 'location/city' ).set( 'Augsburg' );

// const attrs = {
//   height: 45,
//   weight: 280
// };

// database.ref( 'attributes' )
//         .set( attrs )
//         .then( () => {
//           console.log( 'Attributes were saved' );
//         } )
//         .catch( ( error ) => {
//           console.log( 'Attributes died on the vine.', error );
//         } );
//
// console.log( 'I made a request to change the data.' );
