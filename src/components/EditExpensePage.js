import React from 'react';
import { connect } from 'react-redux';

import { editExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';


const EditExpensePage = ( props ) => {
  console.log( props );
  
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
      
      <p>Edit Expense</p>
      
      <ExpenseForm
        onSubmit={( expense ) => {
          console.log( 'EDIT!' );
          
          props.dispatch( editExpense( expense.id, ...expense ) );
        }}
      />
    
    </div>
  );
};

export default connect()( EditExpensePage );