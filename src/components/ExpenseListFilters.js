import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';


const ExpenseListFilters = ( props ) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={( event ) => {
        // console.log( event.target.value );
        props.dispatch( setTextFilter( event.target.value ) );
      }}
    />
    
    <select
      value={props.filters.sortBy}
      onChange={( event ) => {
        // console.log( event.target.value );
        
        const selectedValue = event.target.value;
        
        switch ( selectedValue ) {
          case 'amount':
            return props.dispatch( sortByAmount() );
          
          case 'date':
            return props.dispatch( sortByDate() );
          
          default:
            console.log( 'ERROR: No such option' );
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = ( state ) => {
  return {
    filters: state.filters
  };
};

export default connect( mapStateToProps )( ExpenseListFilters );
