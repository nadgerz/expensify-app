import React, { Component } from 'react';

import moment from 'moment';

import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends Component {
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
    
    if ( !amount || amount.match( /^\d+(\.\d{0,2})?$/ ) ) {
      this.setState( () => ({ amount }) );
    }
  };
  onDateChange = ( createdAt ) => {
    
    this.setState( () => ({ createdAt }) );
  };
  onDateChange = ( createdAt ) => {
    
    if ( createdAt ) {
      this.setState( () => ({ createdAt }) );
    }
  };
  onFocusChange = ( { focused } ) => {
    
    this.setState( () => ({ calendarFocused: focused }) );
  };
  onSubmit = ( event ) => {
    event.preventDefault();
    
    // console.log( event );
    
    if ( !this.state.description || !this.state.amount ) {
      this.setState( () => ({ error: 'Please provide description and amount' }) );
    }
    else {
      this.setState( () => ({ error: '' }) );
      
      this.props.onSubmit( {
                             description: this.state.description,
                             amount: parseFloat( this.state.amount, 10 ) * 100,
                             createdAt: this.state.createdAt.valueOf(),
                             note: this.state.note
                           } );
    }
  };
  
  constructor( props ) {
    super( props );
    
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: '',
      createdAt: moment(),
      calendarFocused: false,
      error: ''
    };
    
  }
  
  render() {
    return (
      <div>
        
        {
          this.state.error && <p>ERROR: {this.state.error}</p>
        }
        
        <form onSubmit={this.onSubmit}>
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
          
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
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
