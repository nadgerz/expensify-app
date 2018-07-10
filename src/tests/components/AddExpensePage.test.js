import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


test( 'should render AddExpensePage correctly', () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  
  const wrapper = shallow( <AddExpensePage onSubmit={onSubmit} history={history}/> );
  
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should handle onSubmit', () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  
  const wrapper = shallow( <AddExpensePage onSubmit={onSubmit} history={history}/> );
  
  const expense = expenses[1];
  wrapper.find( 'ExpenseForm' ).prop( 'onSubmit' )( expense );
  
  expect( history.push ).toHaveBeenLastCalledWith( '/' );
  expect( onSubmit ).toHaveBeenLastCalledWith( expense );
} );