import React, { Component } from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';


export default class IndecisionApp extends Component {
  
  constructor( props ) {
    super( props );
    
    this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
    this.handlePick = this.handlePick.bind( this );
    this.handleAddOption = this.handleAddOption.bind( this );
    this.handleDeleteOption = this.handleDeleteOption.bind( this );
    
    this.state = {
      subTitle: 'Put your life in the hands of a computer',
      options: props.options
    };
  }
  
  componentDidMount() {
    // console.log( 'Indecision: componentDidMount()' );
    // console.log( 'fetch data' );
    
    try {
      const json = localStorage.getItem( 'options' );
      const options = JSON.parse( json );
      
      if ( options ) {
        this.setState( () => ({ options }) );
      }
    }
    catch ( e ) {
      // Do nothing at all. Default to empty array.
    }
  }
  
  componentDidUpdate( prevProps, prevState ) {
    // console.log( 'Indecision: componentDidUpdate()' );
    //
    // console.log( prevState );
    // console.log( this.state );
    
    // console.log( prevProps );
    // console.log( this.props );
    
    if ( prevState.options.length !== this.state.options.length ) {
      // console.log( 'save data' );
      
      const json = JSON.stringify( this.state.options );
      localStorage.setItem( 'options', json );
    }
  }
  
  componentWillUnmount() {
    console.log( 'Indecision: componentWillUnmount()' );
  }
  
  handleDeleteOptions() {
    this.setState( () => ({ options: [] }) );
  }
  
  handleDeleteOption( optionToRemove ) {
    
    this.setState( ( prevState ) => ({
      options: prevState.options.filter( ( option ) => optionToRemove !== option )
    }) );
  }
  
  handlePick() {
    const randomNum = Math.floor( Math.random() * this.state.options.length );
    
    console.log( this.state.options[randomNum] );
  }
  
  handleAddOption( option ) {
    
    if ( !option ) {
      return 'Enter valid value to add item';
    }
    else if ( this.state.options.indexOf( option ) > -1 ) {
      return 'This option already exists';
    }
    
    this.setState( ( prevState ) => (
      {
        options: prevState.options.concat( option )
      }
    ) );
  }
  
  render() {
    
    return (
      <div>
        <Header
          subTitle={this.state.subTitle}
        />
        
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
