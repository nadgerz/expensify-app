import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter, { history } from './routers/AppRouter';

import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { firebase } from './firebase/firebase';
// import getVisibleExpenses from './selectors/expenses';

// console.clear();

const store = configureStore();

/*
store.dispatch( addExpense( {
                              description: 'Water Bill',
                              amount: 10,
                              createdAt: 1000
                            } ) );

store.dispatch( addExpense( {
                              description: 'Gas Bill',
                              amount: 50,
                              createdAt: 800
                            } ) );

store.dispatch( addExpense( {
                              description: 'Lekky Bill',
                              amount: 60,
                              createdAt: 1800
                            } ) );

store.dispatch( addExpense( {
                              description: 'Rent Bill',
                              amount: 109500,
                              createdAt: 400
                            } ) );
*/
/*
const wait = 500;

setTimeout( () => {
  const setFilter1 = store.dispatch( setTextFilter( 'water' ) );
  
  setTimeout( () => {
    const setFilter2 = store.dispatch( setTextFilter( 'gas' ) );
    
    setTimeout( () => {
      const setFilter3 = store.dispatch( setTextFilter( 'bill' ) );
    }, wait );
  }, wait );
}, wait );
*/

// store.dispatch( setTextFilter() );
// store.dispatch( setTextFilter( 'bill' ) );

/*
const unsubscribe1 = store.subscribe( () => {
  const state = store.getState();
  // console.log( state );
  
  const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
  console.log( visibleExpenses );
  console.log( visibleExpenses.length );
} );
*/

// const state = store.getState();
// console.log( state );
// console.log( state.expenses );

// const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
// console.log( visibleExpenses );
// console.log( visibleExpenses.length );

// console.log( 'ACTUAL STATE' );
// console.log( store.getState() );

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if ( !hasRendered ) {
    ReactDOM.render( jsx, document.getElementById( 'app' ) );
    hasRendered = true;
  }
};

// ReactDOM.render( <p>Loading...</p>, document.getElementById( 'app' ) );
ReactDOM.render( jsx, document.getElementById( 'app' ) );

firebase.auth().onAuthStateChanged( ( user ) => {
  if ( user ) {
    // console.log( 'Hello' );
    console.dir( user );
    // console.dir( user.uid );
    
    store.dispatch( login( user.uid ) );
    
    store.dispatch( startSetExpenses() ).then( () => {
      renderApp();
      
      if ( history.location.pathname === '/' ) {
        history.push( '/dashboard' );
      }
    } );
  }
  else {
    // console.log( 'Bye!' );
    
    store.dispatch( logout() );
    
    renderApp();
    
    history.push( '/' );
  }
} );
