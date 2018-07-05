import React from 'react';

import { removeExpense } from '../actions/expenses';
// import { connect } from 'react-redux';

const handleRemove = ( id ) => {
  
  removeExpense( id );
};

const ExpenseListItem = ( { description, amount, createdAt, id } ) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={handleRemove}>Remove</button>
  </div>
);

export default ExpenseListItem;