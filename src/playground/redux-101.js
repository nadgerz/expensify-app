import { createStore } from 'redux';


console.clear();

const store = createStore( ( state = { count: 0 } ) => {
  return state;
} );

console.log( store.getState() );

// Actions - an object that gets sent to the store

// I'd like to increment the count
// I'd like to reset the count to zero

console.log( store.getState() );
