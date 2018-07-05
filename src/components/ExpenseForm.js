import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ExpenseForm extends Component {
  
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
          />
          
          <input
            type="number"
            placeholder="Amount"
          />
          
          <textarea
            placeholder={'Add a note for your expense (optional)'}
          >
          
          </textarea>
          
          <button>Add Expense</button>
        </form>
      
      </div>
    );
  }
}
