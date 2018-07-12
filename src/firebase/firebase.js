import * as firebase from 'firebase';

// <script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAfKHmjjJqNI1RlcBolbUSiu_LIrb80iiQ',
  authDomain: 'expensify-98b1c.firebaseapp.com',
  databaseURL: 'https://expensify-98b1c.firebaseio.com',
  projectId: 'expensify-98b1c',
  storageBucket: '',
  messagingSenderId: '74233013279'
};

firebase.initializeApp( config );

const database = firebase.database();

/*
database.ref()
        .set( {
                name: 'Steve Ingram',
                age: 52,
                isSingle: false,
                location: {
                  city: 'Berlin',
                  postcode: 12105,
                  country: 'Germany'
                }
              } )
        .then( () => {
          console.log( 'Data is saved' );
        } )
        .catch( ( error ) => {
          console.log( 'This failed.', error );
        } );
*/

// database.ref().set( 'This is my data' );

// database.ref( 'age' ).set( 53 );
// database.ref( 'location/city' ).set( 'Augsburg' );

/*
const attrs = {
  height: 45,
  weight: 280
};

database.ref( 'attributes' )
        .set( attrs )
        .then( () => {
          console.log( 'Attributes were saved' );
        } )
        .catch( ( error ) => {
          console.log( 'Attributes died on the vine.', error );
        } );
*/

// console.log( 'I made a request to change the data.' );