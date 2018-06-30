import React, { Component } from 'react';


export default class AddOption extends Component {
  constructor( props ) {
    super( props );
    
    this.handleAddOption = this.handleAddOption.bind( this );
    
    this.state = {
      error: undefined
    };
  }
  
  handleAddOption( event ) {
    
    event.preventDefault();
    
    const option = event.target.elements.option.value.trim();
    
    const error = this.props.handleAddOption( option );
    
    this.setState( () => ({ error }) );
    
    if ( !error ) {
      event.target.elements.option.value = '';
    }
  }
  
  render() {
    return (
      <div>
        
        {this.state.error && <p>{this.state.error}</p>}
        
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      
      </div>
    );
  }
}
