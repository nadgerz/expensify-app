import React from 'react';

import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = ( props ) => {
  
  const expensStr = props.expenses.length === 1 ? 'expense' : 'expenses';
  console.log( props.expenses );
  
  return (
    <div>
      {expensStr}
    </div>
  );
};

const mapStateToProps = ( state ) => {
  return {
    expenses: selectExpenses( state.expenses, state.filters )
  };
};

export default connect( mapStateToProps )( ExpensesSummary );
