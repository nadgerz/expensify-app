import React, { Component } from 'react';


export default class ExpenseForm extends Component {
  
  state = {
    description: ''
  };
  
  onDescriptionChange = ( event ) => {
    const description = event.target.value;
    
    this.setState( () => ({ description }) );
  };
  
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
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
