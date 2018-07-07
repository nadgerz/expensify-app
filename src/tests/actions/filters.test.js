import moment from 'moment';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';


console.log( moment() );

test( 'should generate set start date filter action object', () => {
  const action = setStartDate( moment( 0 ) );
  
  expect( action ).toEqual( {
                              type: 'SET_START_DATE',
                              startDate: moment( 0 )
                            } );
} );

test( 'should generate set end date filter action object', () => {
  const action = setEndDate( moment( 0 ) );
  
  expect( action ).toEqual( {
                              type: 'SET_END_DATE',
                              endDate: moment( 0 )
                            } );
} );

test( 'should generate set text filter action object', () => {
  
  const text = 'sex';
  const action = setTextFilter( text );
  
  expect( action ).toEqual( {
                              type: 'SET_TEXT_FILTER',
                              text
                            } );
} );

test( 'should generate set text filter action object with default', () => {
  const action = setTextFilter();
  
  expect( action ).toEqual( {
                              type: 'SET_TEXT_FILTER',
                              text: ''
                            } );
} );

test( 'should generate set sort by amount filter action object', () => {
  const action = sortByAmount();
  
  expect( action ).toEqual( {
                              type: 'SORT_BY_AMOUNT'
                            } );
} );

test( 'should generate set sort by date filter action object', () => {
  const action = sortByDate();
  
  expect( action ).toEqual( {
                              type: 'SORT_BY_DATE'
                            } );
} );

test( 'should generate set sort by date filter action object [2]', () => {
  expect( sortByDate() ).toEqual( { type: 'SORT_BY_DATE' } );
} );
