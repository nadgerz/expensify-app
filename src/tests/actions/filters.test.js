import moment from 'moment';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';


console.log( moment() );

test( 'should setup set start date filter action object', () => {
  const action = setStartDate( moment( 0 ) );
  
  expect( action ).toEqual( {
                              type: 'SET_START_DATE',
                              startDate: moment( 0 )
                            } );
} );

test( 'should setup set text filter action object', () => {
  const action = setTextFilter( { text: 'sex' } );
  
  expect( action ).toEqual( {
                              type: 'SET_TEXT_FILTER',
                              text: 'sex'
                            } );
} );
test( 'should setup set text filter action object with default', () => {
  const action = setTextFilter();
  
  expect( action ).toEqual( {
                              type: 'SET_TEXT_FILTER',
                              text: 'bill'
                            } );
} );

test( 'should setup set end date filter action object', () => {
  const action = setEndDate( moment( 0 ) );
  
  expect( action ).toEqual( {
                              type: 'SET_END_DATE',
                              endDate: moment( 0 )
                            } );
} );

test( 'should setup set sort by amount filter action object', () => {
  const action = sortByAmount( { sortBy: 'amount' } );
  
  expect( action ).toEqual( {
                              type: 'SORT_BY_AMOUNT',
                              sortBy: 'amount'
                            } );
} );

test( 'should setup set sort by date filter action object', () => {
  const action = sortByDate( {} );
  
  expect( action ).toEqual( {
                              type: 'SORT_BY_DATE',
                              sortBy: 'date'
                            } );
} );
