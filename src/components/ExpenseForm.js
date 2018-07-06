import React, { Component } from 'react';

import moment from 'moment'

// const date = new Date();
const now = moment();
console.log( now );

export default class ExpenseForm extends Component {
  
  state = {
    description: '',
    note: '',
    amount: ''
  };
  
  onDescriptionChange = ( event ) => {
    const description = event.target.value;
    
    this.setState( () => ({ description }) );
  };
  
  onNoteChange = ( event ) => {
    const note = event.target.value;
    
    this.setState( () => ({ note }) );
  };
  
  onAmountChange = ( event ) => {
    const amount = event.target.value;
    
    if ( amount.match( /^\d*(\.\d{0,2})?$/ ) ) {
      this.setState( () => ({ amount }) );
    }
  };
  
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            autoFocus
            onChange={this.onDescriptionChange}
          />
          
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          
          <textarea
            placeholder={'Add a note for your expense (optional)'}
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          
          <button>Add Expense</button>
        </form>
      
      </div>
    );
  }
}
