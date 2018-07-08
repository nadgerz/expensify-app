import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test( 'should setup default filter values', () => {
  const state = filtersReducer( undefined, { type: '@@INIT' } );
  
  expect( state ).toEqual( {
                             'text': '',
                             'sortBy': 'date',
                             'startDate': moment().startOf( 'month' ),
                             'endDate': moment().endOf( 'month' )
                           }
  );
} );

test( 'should set sortBy to amount', () => {
  const state = filtersReducer( undefined, { type: 'SORT_BY_AMOUNT' } );
  
  expect( state.sortBy ).toBe( 'amount' );
  
} );

test( 'should set sortBy to date', () => {
  
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  
  const state = filtersReducer( currentState, action );
  
  expect( state.sortBy ).toBe( 'date' );
  
} );

test( 'should set text filter', () => {
  
  const currentState = {
    text: 'BIBBLE',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'BIBBLE'
  };
  
  const state = filtersReducer( currentState, action );
  
  expect( state.text ).toBe( 'BIBBLE' );
  
} );

