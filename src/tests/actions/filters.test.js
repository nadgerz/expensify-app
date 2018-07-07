import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';


test( 'should setup set start date filter action object', () => {
  const action = setStartDate( { id: '123abc' } );
  
  expect( action ).toEqual( {
                              type: 'REMOVE_EXPENSE',
                              id: '123abc'
                            } );
} );

test( 'should setup set start date filter action object with defaults', () => {
  const action = setStartDate();
  
  expect( action ).toEqual( {
                              type: 'REMOVE_EXPENSE',
                              id: '123abc'
                            } );
} );

test( 'should setup set start date filter action object', () => {
  const action = setTextFilter( { id: '123abc' } );
  
  expect( action ).toEqual( {
                              type: 'REMOVE_EXPENSE',
                              id: '123abc'
                            } );
} );

test( 'should setup set start date filter action object', () => {
  const action = setEndDate( { id: '123abc' } );
  
  expect( action ).toEqual( {
                              type: 'REMOVE_EXPENSE',
                              id: '123abc'
                            } );
} );

test( 'should setup set start date filter action object', () => {
  const action = sortByAmount( { id: '123abc' } );
  
  expect( action ).toEqual( {
                              type: 'REMOVE_EXPENSE',
                              id: '123abc'
                            } );
} );

test( 'should setup set start date filter action object', () => {
  const action = sortByDate( { id: '123abc' } );
  
  expect( action ).toEqual( {
                              type: 'REMOVE_EXPENSE',
                              id: '123abc'
                            } );
} );
