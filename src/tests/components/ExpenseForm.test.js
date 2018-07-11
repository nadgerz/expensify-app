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

test( 'should set amount if VALID input', () => {
  // 1: Render ExpenseForm.
  const wrapper = shallow( <ExpenseForm/> );
  
  // 2: Change the amount.
  const value = '23.50';
  
  wrapper.find( 'input' ).at( 1 ).simulate( 'change', {
    target: {
      value
    }
  } );
  
  // 3: Make an assertion that the amount state WAS set.
  expect( wrapper.state( 'amount' ) ).toBe( value );
} );

test( 'should NOT set amount if INVALID input', () => {
  // 1: Render ExpenseForm.
  const wrapper = shallow( <ExpenseForm/> );
  
  // 2: Change the amount.
  const value = '12.122';
  
  wrapper.find( 'input' ).at( 1 ).simulate( 'change', {
    target: {
      value
    }
  } );
  
  // 3: Make an assertion that the amount state was NOT set.
  expect( wrapper.state( 'amount' ) ).toBe( '' );
} );

test( 'should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const expense = expenses[2];
  
  // 1: Render ExpenseForm.
  const wrapper = shallow( <ExpenseForm expense={expense} onSubmit={onSubmitSpy}/> );
  // console.log( wrapper );
  
  // 2: Submit the form!
  wrapper.find( 'form' ).simulate( 'submit', {
    preventDefault: () => {
    }
  } );
  
  //
  //    What should have happened?
  //
  expect( onSubmitSpy ).toHaveBeenCalled();
  
  expect( wrapper.state( 'error' ) ).toBe( '' );
  
  expect( onSubmitSpy ).toHaveBeenLastCalledWith( {
                                                    amount: expense.amount,
                                                    createdAt: expense.createdAt,
                                                    description: expense.description,
                                                    note: expense.note
                                                  } );
} );

/*
test( 'should set new date on date change', () => {
  // 1: Render ExpenseForm.
  const wrapper = shallow( <ExpenseForm/> );

  // 2: Find the component
  const now = moment();
  // console.dir( wrapper.find( 'SingleDatePicker' ).props() );
  wrapper.find( 'SingleDatePicker' ).prop( 'onDateChange' )( now );
  
  expect( wrapper.state( 'createdAt' ) ).toEqual( now );
} );
*/
/*
test( 'should set calendar focus on change', () => {
  // 1: Render ExpenseForm.
  const wrapper = shallow( <ExpenseForm/> );
  
  const focused = true;
  wrapper.find( 'SingleDatePicker' ).prop( 'onFocusChange' )( { focused } );
  
  expect( wrapper.state( 'calendarFocused' ) ).toBew( focused );
} );
*/