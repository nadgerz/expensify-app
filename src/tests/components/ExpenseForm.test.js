import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test( 'should render ExpenseForm correctly', () => {
  const wrapper = shallow( <ExpenseForm/> );
  
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should render ExpenseForm with expense data', () => {
  const wrapper = shallow( <ExpenseForm expense={expenses[1]}/> );
  
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should render error for invalid form submission', () => {
  const wrapper = shallow( <ExpenseForm/> );
  expect( wrapper ).toMatchSnapshot();
  
  wrapper.find( 'form' ).simulate( 'submit', {
    preventDefault: () => {
    }
  } );
  
  expect( wrapper.state( 'error' ).length ).toBeGreaterThan( 0 );
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should set description on input change', () => {
  // 1: Render ExpenseForm.
  const wrapper = shallow( <ExpenseForm/> );
  
  // 2: Change the input.
  const value = 'New description';
  
  wrapper.find( 'input' ).at( 0 ).simulate( 'change', {
    target: {
      value
    }
  } );
  
  // 3: Make an assertion that the description state was set.
  expect( wrapper.state( 'description' ) ).toBe( value );
} );

test( 'should set not on textarea change', () => {
  // 1: Render ExpenseForm.
  const wrapper = shallow( <ExpenseForm/> );
  
  // 2: Change the textarea.
  const value = 'New note';
  
  wrapper.find( 'textarea' ).simulate( 'change', {
    target: {
      value
    }
  } );
  
  // 3: Make an assertion that the note state was set.
  expect( wrapper.state( 'note' ) ).toBe( value );
} );