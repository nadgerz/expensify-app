import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


console.clear();

const store = configureStore();

const expense1 = store.dispatch( addExpense( {
                                               description: 'Water Bill',
                                               amount: 10,
                                               createdAt: 1000
                                             } ) );

const expense2 = store.dispatch( addExpense( {
                                               description: 'Gas Bill',
                                               amount: 50,
                                               createdAt: 800
                                             } ) );

const setFilter1 = store.dispatch( setTextFilter( 'water' ) );

const unsubscribe1 = store.subscribe( () => {
  const state = store.getState();
  // console.log( state );
  
  const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
  console.log( visibleExpenses );
  console.log( visibleExpenses.length );
} );

const state = store.getState();
// console.log( state );

const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
console.log( visibleExpenses );
console.log( visibleExpenses.length );

console.log( 'ACTUAL STATE' );
console.log( store.getState() );

ReactDOM.render( <AppRouter/>, document.getElementById( 'app' ) );