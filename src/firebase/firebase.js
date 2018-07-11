import * as firebase from 'firebase';

// <script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDZKMs7gzhi3Bz0UzSv2n_SNHpfMZhHNaU',
  authDomain: 'expensify-11951.firebaseapp.com',
  databaseURL: 'https://expensify-11951.firebaseio.com',
  projectId: 'expensify-11951',
  storageBucket: 'expensify-11951.appspot.com',
  messagingSenderId: '426252954500'
};

firebase.initializeApp( config );

const database = firebase.database();

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
        } );

// database.ref().set( 'This is my data' );

database.ref( 'age' ).set( 53 );
database.ref( 'location/city' ).set( 'Augsburg' );

const attrs = {
  height: 50,
  weight: 180
};

database.ref( 'attributes' ).set( attrs );


