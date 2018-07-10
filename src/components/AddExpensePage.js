import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


class AddExpensePage extends Component {
  
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        
        <ExpenseForm
          onSubmit={( expense ) => {
            this.props.onSubmit( expense );
            
            this.props.history.push( '/' );
          }}
        />
      </div>
    );
  }
}


const mapDispatchToProps = ( dispatch ) => ({ onSubmit: ( expense ) => dispatch( addExpense( expense ) ) });

//
//    Do not need anything from state, so we can have an empty connect()
//
export default connect( undefined, mapDispatchToProps )( AddExpensePage );