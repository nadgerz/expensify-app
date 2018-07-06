import React from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


const AddExpensePage = ( props ) => (
  <div>
    <h1>Add Expense</h1>
    
    <ExpenseForm
      onSubmit={( expense ) => {
        // console.log( 'ADD!' );
        // console.log( expense );
        
        props.dispatch( addExpense( expense ) );
        
        props.history.push( '/' );
      }}
    />
  </div>
);

//
//    Do not need anything from state, so we can have an empty connect()
//
export default connect()( AddExpensePage );