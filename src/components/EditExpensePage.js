import React from 'react';
import { connect } from 'react-redux';

import { editExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';


const EditExpensePage = ( props ) => {
  console.log( props );
  
  return (
    <div>
      <p>Edit Expense</p>
      
      <ExpenseForm
        expense={props.expense}
        
        onSubmit={( expense ) => {
          // console.log( 'EDIT!' );
          // console.log( expense );
          // console.log( props.match.params.id );
          props.dispatch( editExpense( props.match.params.id, expense ) );
          
          props.history.push( '/' );
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

