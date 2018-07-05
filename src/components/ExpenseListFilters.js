import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';


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
  </div>
);

const mapStateToProps = ( state ) => {
  return {
    filters: state.filters
  };
};

export default connect( mapStateToProps )( ExpenseListFilters );
