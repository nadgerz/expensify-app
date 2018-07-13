import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';


const createMockStore = configureMockStore( [
                                              thunk
                                            ] );

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
  /*
    const expenseData = {
      description: 'Rent',
      note: 'This was last months rent',
      amount: 109500,
      createdAt: 1000
    };
  */
  
  const expenseData = expenses[2];
  const action = addExpense( expenseData );
  
  expect( action ).toEqual( {
                              type: 'ADD_EXPENSE',
                              expense: {
                                ...expenseData,
                                id: expect.any( String )
                              }
                            } );
  
} );

test( 'should add expense to database and store', ( done ) => {
  //  Section 15: Lecture 153. Testing Async Redux Actions: Part I 16:59
  const store = createMockStore( {} );
  
  const expenseData = {
    description: 'Mouse',
    note: 'This one is better',
    amount: 3000,
    createdAt: 997
  };
  
  // const expense = expenses[1];
  
  store.dispatch( startAddExpense( expenseData ) ).then( () => {
    console.log( 'woo hoo' );
    expect( 1 ).toBe( 2 );
    done();
  } );
} );

test( 'should add expense with defaults to database and store', () => {

} );

/*
test( 'should setup add expense action object with default values', () => {
  
  const defaultExpenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  
  const action = addExpense();
  
  expect( action ).toEqual( {
                              type: 'ADD_EXPENSE',
                              expense: {
                                ...defaultExpenseData,
                                id: expect.any( String )
                              }
                            } );
  
} );
*/

