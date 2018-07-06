import React from 'react';
import { connect } from 'react-redux';

import { editExpense, removeExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';


const EditExpensePage = ( props ) => {
  console.log( props );
  
  const handleOnClick = ( id ) => {
    props.dispatch( removeExpense( { id } ) );
    
    props.history.push( '/' );
  };
  
  return (
    <div>
      <p>Edit Expense</p>
      
      <ExpenseForm
        expense={props.expense}
        
        onSubmit={( expense ) => {
          // console.log( 'EDIT!' );
          // console.log( expense );
          // console.log( props.match.params.id );
          props.dispatch( editExpense( props.expense.id, expense ) );
          
          props.history.push( '/' );
        }}
      />
      
      <button onClick={handleOnClick( props.match.params.id )}>Remove</button>
    
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