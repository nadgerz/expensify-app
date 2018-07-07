const add = ( a, b ) => a + b;
const generateGreeting = ( name = 'Anonymous' ) => `Hello ${name}!`;

test( 'should add two numbers', () => {
  const result = add( 3, 4 );
  
  expect( result ).toBe( 7 );
} );

test( 'should display correct greeting', () => {
  const result = generateGreeting( 'Steve' );
  
  expect( result ).toBe( 'Hello Steve!' );
} );

test( 'should display correct greeting for no name', () => {
  const result = generateGreeting();
  
  expect( result ).toBe( 'Hello Anonymous!' );
} );