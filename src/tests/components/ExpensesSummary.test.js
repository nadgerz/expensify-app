import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';


test( 'should render ExpensesSummary correctly', () => {
  const wrapper = shallow( <ExpensesSummary expenses={expenses}/> );
  
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should render correct summary for 1 expense', () => {
  const wrapper = shallow( <ExpensesSummary expenses={[expenses[1]]}/> );
  
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should render correct summary for no expense', () => {
  const wrapper = shallow( <ExpensesSummary expenses={[]}/> );
  
  expect( wrapper ).toMatchSnapshot();
} );

