import * as firebase from 'firebase';

// <script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>

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

const ref3 = database.ref( 'location/city' );

ref3.on( 'value', ( snapshot ) => {
  console.log( 'Fetching data by subscribing', snapshot );
  const val = snapshot.val();
  console.log( val );
} );

const ref4 = database.ref();

ref4.on( 'value', ( snapshot ) => {
  console.log( 'Fetching data by subscribing ALL', snapshot );
  const val = snapshot.val();
  console.log( val );
} );

/*
database.ref()
        .set( {
                name: 'Steve Ingram',
                age: 52,
                isSingle: false,
                job: 'Software Developer',
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
