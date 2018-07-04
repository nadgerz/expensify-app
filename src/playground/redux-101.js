import { createStore } from 'redux';


console.clear();

// Action generators - functions that return action objects.

const incrementCount = ( payload = {} ) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const decrementCount = ( payload = {} ) => ({
  type: 'DECREMENT',
  decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
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
