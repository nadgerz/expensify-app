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
  const state = filtersReducer( undefined, { type: 'SORT_BY_DATE' } );
  
  expect( state.sortBy ).toBe( 'date' );
  
} );