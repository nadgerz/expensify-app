import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


test( 'should render AddExpensePage correctly', () => {
  const onSubmit = jest.fn();
  
  const wrapper = shallow( <AddExpensePage /> );
  
  expect( wrapper ).toMatchSnapshot();
} );