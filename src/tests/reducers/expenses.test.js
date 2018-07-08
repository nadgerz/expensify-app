import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

// console.log( expenses );

test( 'should setup default state', () => {
  const result = expensesReducer( undefined, { type: '@@INIT' } );
  
  expect( result ).toEqual( [] );
} );

test( 'should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  
  const state = expensesReducer( expenses, action );
  
  expect( state ).toEqual(
    [
      expenses[0],
      expenses[2]
    ]
  );
} );

test( 'should NOT remove expenses if id NOT found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  
  const state = expensesReducer( expenses, action );
  
  expect( state ).toEqual(
    [
      expenses[0],
      expenses[1],
      expenses[2]
    ]
  );
} );