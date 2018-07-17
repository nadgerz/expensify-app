import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';


test( 'should render Header correctly', () => {
  const wrapper = shallow( <Header startLogout={() => {
  }}/> );
  
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should call startLogout on button click', () => {
  
  const startLogout = jest.fn();
  
  const wrapper = shallow( <Header startLogout={startLogout} /> );
  
  expect( wrapper ).toMatchSnapshot();
} );

// LoginPage test file -> should call startLogin on button click

