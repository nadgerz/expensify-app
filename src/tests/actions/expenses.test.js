import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test( 'should setup remove expense action object', () => {
  const action = removeExpense( { id: '123abc' } );
  
  expect( action ).toEqual( {
                              type: 'REMOVE_EXPENSE',
                              id: '123abc'
                            } );
} );

test( 'should setup edit expense action object', () => {
  const action = editExpense(
    '123abc',
    {
      description: 'My Description',
      note: 'My Note',
      amount: 666,
      createdAt: null
    } );
  
  expect( action ).toEqual( {
                              type: 'EDIT_EXPENSE',
                              id: '123abc',
                              updates: {
                                description: 'My Description',
                                note: 'My Note',
                                amount: 666,
                                createdAt: null
                              }
                            } );
} );

test( 'should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This was last months rent',
    amount: 109500,
    createdAt: 1000
  };
  
  const action = addExpense( expenseData );
  
  expect( action ).toEqual( {
                              type: 'ADD_EXPENSE',
                              id: expect.any( String ),
                              expense: {
                                ...expenseData
                              }
                            } );
  
} );

test( 'should setup add expense action object with default values', () => {

} );

