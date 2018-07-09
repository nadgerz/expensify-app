import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
// import toJson from 'enzyme-to-json';

test( 'should render Header correctly', () => {
  const wrapper = shallow( <Header/> );
  
  // expect( wrapper.find( 'h1' ).length ).toBe( 1 );
  // expect( wrapper.find( 'h1' ).text() ).toBe( 'Expensify' );
  expect( wrapper ).toMatchSnapshot();
} );
