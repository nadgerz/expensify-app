import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editExpense, removeExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';


export class EditExpensePage extends Component {
  
  render() {
    
    return (
      <div>
        <p>Edit Expense</p>
        
        <ExpenseForm
          expense={this.props.expense}
          
          onSubmit={( expense ) => {
            this.props.dispatch( editExpense( this.props.expense.id, expense ) );
            
            this.props.history.push( '/' );
          }}
        />
        
        <button onClick={() => {
          this.props.dispatch( removeExpense( { id: this.props.expense.id } ) );
          
          this.props.history.push( '/' );
        }}>
          Remove
        </button>
      
      
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    expense: state.expenses.find( ( expense ) => {
      return expense.id === props.match.params.id;
    } )
  };
};

const mapDispatchToProps = ( dispatch ) => (
  {
    editExpense: ( expense ) => dispatch( editExpense( expense ) ),
    removeExpense: ( expense ) => dispatch( removeExpense( expense ) )
  });

export default connect( mapStateToProps, mapDispatchToProps )( EditExpensePage );