import { createStore } from 'redux';


console.clear();

const store = createStore( ( state = { count: 0 } ) => {
  return state;
} );

console.log( store.getState() );