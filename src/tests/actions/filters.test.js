import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';


test( 'should setup set start date filter action object', () => {
  const action = setStartDate( { startDate: 666 } );
  
  expect( action ).toEqual( {
                              type: 'SET_START_DATE',
                              startDate: 666
                            } );
} );

test( 'should setup set start date filter action object with defaults', () => {
  const action = setStartDate();
  
  expect( action ).toEqual( {
                              type: 'SET_START_DATE',
                              startDate: 666
                            } );
} );

test( 'should setup set text filter action object', () => {
  const action = setTextFilter( { text: 'bill' } );
  
  expect( action ).toEqual( {
                              type: 'SET_TEXT_FILTER',
                              text: 'bill'
                            } );
} );

test( 'should setup set end date filter action object', () => {
  const action = setEndDate( { endDate: 123 } );
  
  expect( action ).toEqual( {
                              type: 'SET_END_DATE',
                              endDate: 123
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
