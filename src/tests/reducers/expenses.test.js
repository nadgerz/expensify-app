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
  
  expect( state ).toEqual( expenses );
  
} );

test( 'should add an expense', () => {
  
  const expense = {
    id: 666,
    description: 'Sex',
    note: '',
    amount: 1,
    createdAt: 20000
  };
  
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  
  const state = expensesReducer( expenses, action );
  
  // expect( state ).toEqual( expenses.concat( expense ) );
  expect( state ).toEqual( [...expenses, expense] );
} );

test( 'should edit an expense', () => {
  
  const expense = {
    id: 1,
    description: 'Bum',
    note: '',
    amount: 195,
    createdAt: 0
  };
  
  const action = {
    type: 'EDIT_EXPENSE',
    expense
  };
  
  const state = expensesReducer( expenses, action );
  
  expect( state ).toEqual( expenses );
} );

test( 'should NOT edit an expense if expense NOT found', () => {
  
  const expense = {
    id: 1,
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  };
  
  const action = {
    type: 'EDIT_EXPENSE',
    expense
  };
  
  const state = expensesReducer( expenses, action );
  
  expect( state ).toEqual( expenses );
} );