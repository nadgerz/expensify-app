import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters';


class ExpenseListFilters extends Component {
  
  state = {
    calendarFocused: null
  };
  
  onDatesChange = ( { startDate, endDate } ) => {
    console.log( 'onDatesChange' );
    console.log( startDate );
    console.log( endDate );
    
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
          <option value="amount">Amounty</option>
        </select>
        
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="your_unique_start_date_id"
          
          endDate={this.props.filters.endDate}
          endDateId="your_unique_end_date_id"
          
          onDatesChange={this.onDatesChange}
          
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          small={true}
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
