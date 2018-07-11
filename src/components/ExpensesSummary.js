import React from 'react';

import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expenses-total';


export const ExpensesSummary = ( props ) => {
  // console.log( props.expenses );
  
  const numberOfExpenses = props.expenses.length;
  const expensStr = numberOfExpenses === 1 ? 'expense' : 'expenses';
  const total = getExpenseTotal( props.expenses );
  
  return (
    <div>
      <p>
        Viewing {numberOfExpenses} {expensStr} totalling {numeral( total / 100 ).format( '$0,0.00' )}
      </p>
    </div>
  );
};

const mapStateToProps = ( state ) => {
  return {
    expenses: selectExpenses( state.expenses, state.filters )
  };
};

export default connect( mapStateToProps )( ExpensesSummary );
