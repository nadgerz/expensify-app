import React from 'react';
import { connect } from 'react-redux';

import { editExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';


const EditExpensePage = ( props ) => {
  console.log( props );
  
  return (
    <div>
{/*
      <p>
        Editing the expense with id of {props.match.params.id}
      </p>
*/}
      
      <p>Edit Expense</p>
      
      <ExpenseForm
        expense={props.expense}
        
        onSubmit={( expense ) => {
          console.log( 'EDIT!' );
          console.log( expense );
          props.dispatch( editExpense( expense.id, ...expense ) );
        }}
      />
    
    </div>
  );
};

const mapStateToProps = ( state, props ) => {
  return {
    expense: state.expenses.find( ( expense ) => {
      return expense.id === props.match.params.id;
    } )
  };
};

export default connect( mapStateToProps )( EditExpensePage );

