import moment from 'moment';
import selectExpenses from '../../selectors/expenses';


console.log( moment() );

const expenses = [{
  id: 1,
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: 2,
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: -1000
}, {
  id: 3,
  description: 'Credit Card',
  note: '',
  amount: 66600,
  createdAt: 1000
}];

test( 'should filter by text value', () => {
  
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  
  const result = selectExpenses( expenses, filters );
  
  expect( result ).toEqual( [
                              expenses[2],
                              expenses[3]
                            ] );
  
} );

test( 'should filter by startDate', () => {
  
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(),
    endDate: undefined
  };
  
  const result = selectExpenses( expenses, filters );
  
  expect( result ).toEqual( [
                              expenses[2],
                              expenses[3]
                            ] );
  
} );