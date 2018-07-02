import React, { Component } from 'react';

import OptionModal from './OptionModal';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';


export default class IndecisionApp extends Component {
  
  state = {
    subTitle: 'Put your life in the hands of a computer',
    options: [],
    selectedOption: undefined
  };
  
  handleDeleteOptions = () => {
    this.setState( () => ({ options: [] }) );
  };
  
  handleDeleteOption = ( optionToRemove ) => {
    
    this.setState( ( prevState ) => ({
      options: prevState.options.filter( ( option ) => optionToRemove !== option )
    }) );
  };
  
  handlePick = () => {
    const randomNum = Math.floor( Math.random() * this.state.options.length );
    
    const option = this.state.options[randomNum];
    console.log( option );
    
    this.setState( () => (
      {
        selectedOption: option
      }
    ) );
  };
  
  handleAddOption = ( option ) => {
    
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
  };
  
  componentDidMount() {
    
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
    
    if ( prevState.options.length !== this.state.options.length ) {
      // console.log( 'save data' );
      
      const json = JSON.stringify( this.state.options );
      localStorage.setItem( 'options', json );
    }
  }
  
  /*
    componentWillUnmount() {
      console.log( 'Indecision: componentWillUnmount()' );
    }
  */
  
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
        
        <OptionModal
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
