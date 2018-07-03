import { createStore } from 'redux';


console.clear();

const store = createStore( ( state = { count: 0 }, action ) => {
                             // console.log( 'running' );
  
                             switch ( action.type ) {
                               case 'INCREMENT':
                                 // console.log( action.type );
                                 return {
                                   count: state.count + 1
                                 };
    
                               case 'DECREMENT':
                                 // console.log( action.type );
                                 return {
                                   count: state.count - 1
                                 };
    
                               case 'RESET':
                                 // console.log( action.type );
                                 return {
                                   count: 0
                                 };
    
                               default:
                                 // console.log( action.type );
                                 return state;
                             }
                           }
);

const unsubscribe1 = store.subscribe( () => {
  console.log( store.getState() );
} );

store.dispatch( {
                  type: 'INCREMENT'
                } );

unsubscribe1();

store.dispatch( {
                  type: 'INCREMENT'
                } );

store.dispatch( {
                  type: 'RESET'
                } );

const unsubscribe2 = store.subscribe( () => {
  console.log( store.getState() );
} );


store.dispatch( {
                  type: 'DECREMENT'
                } );
