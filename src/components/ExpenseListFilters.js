import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters';


class ExpenseListFilters extends Component {
  
  state = {
    calendarFocused: null
  };
  
  onDatesChange = ( { startDate, endDate } ) => {
    console.log( 'onDatesChange' );
    
    this.props.dispatch( setStartDate( { startDate } ) );
    this.props.dispatch( setEndDate( { endDate } ) );
  };
  
  onFocusChange = ( { focused } ) => {
    
    this.setState( () => ({ calendarFocused: focused }) );
  };
  
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={( event ) => {
            // console.log( event.target.value );
            this.props.dispatch( setTextFilter( event.target.value ) );
          }}
        />
        
        <select
          value={this.props.filters.sortBy}
          onChange={( event ) => {
            // console.log( event.target.value );
            
            const selectedValue = event.target.value;
            
            switch ( selectedValue ) {
              case 'amount':
                return this.props.dispatch( sortByAmount() );
              
              case 'date':
                return this.props.dispatch( sortByDate() );
              
              default:
                console.log( 'ERROR: No such option' );
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          // numberOfMonths={1}
          // isOutsideRange={() => false}
        />
      
      </div>
    );
  }
}


const mapStateToProps = ( state ) => {
  return {
    filters: state.filters
  };
};

export default connect( mapStateToProps )( ExpenseListFilters );
