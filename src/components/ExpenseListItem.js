import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom'

import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ( { description, amount, createdAt, id, dispatch } ) => (
  <div>
    
    <a href="/edit/{id}">
      <h3>{description}</h3>
    </a>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch( removeExpense( { id } ) );
    }}>
      Remove
    </button>
  
  </div>
);

export default connect()( ExpenseListItem );