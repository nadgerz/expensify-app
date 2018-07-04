import { createStore } from 'redux';


console.clear();

// Action generators - functions that return action objects.

const incrementCount = () => {
  return {
    type: 'INCREMENT'
  };
};

const store = createStore( ( state = { count: 0 }, action ) => {
  
                             switch ( action.type ) {
                               case 'INCREMENT':
                                 const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      
                                 return {
                                   count: state.count + incrementBy
                                 };
    
                               case 'DECREMENT':
                                 const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      
                                 return {
                                   count: state.count - decrementBy
                                 };
    
                               case 'RESET':
                                 return {
                                   count: 0
                                 };
    
                               case 'SET':
                                 return {
                                   count: action.count
                                 };
    
                               default:
                                 return state;
                             }
                           }
);

const unsubscribe1 = store.subscribe( () => {
  console.log( store.getState() );
} );

store.dispatch( {
                  type: 'INCREMENT',
                  incrementBy: 5
                } );

// unsubscribe1();

store.dispatch( incrementCount() );

store.dispatch( {
                  type: 'INCREMENTT'
                } );

store.dispatch( {
                  type: 'RESET'
                } );

/*
const unsubscribe2 = store.subscribe( () => {
  console.log( store.getState() );
} );
*/

store.dispatch( {
                  type: 'DECREMENT',
                  decrementBy: 10
                } );

store.dispatch( {
                  type: 'DECREMENT'
                } );

store.dispatch( {
                  type: 'SET',
                  count: 101
                } );
