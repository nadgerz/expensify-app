import { createStore } from 'redux';


console.clear();

// Action generators - functions that return action objects.

const incrementCount = ( { incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
  type: 'DECREMENT',
  decrementBy
});

const store = createStore( ( state = { count: 0 }, action ) => {
  
                             switch ( action.type ) {
                               case 'INCREMENT':
                                 return {
                                   count: state.count + action.incrementBy
                                 };
    
                               case 'DECREMENT':
                                 return {
                                   count: state.count - action.decrementBy
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

store.dispatch( incrementCount( { incrementBy: 5 } ) );

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

store.dispatch( decrementCount( { decrementBy: 10 } ) );

store.dispatch( decrementCount() );

store.dispatch( {
                  type: 'SET',
                  count: 101
                } );
