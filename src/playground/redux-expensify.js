import { combineReducers, createStore } from 'redux';

import uuid from 'uuid';


console.clear();

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {} ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    createdAt
  }
});

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
  
  switch ( action.type ) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
  
  switch ( action.type ) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers( {
                     expenses: expensesReducer,
                     filters: filtersReducer
                   } )
);

const unsubscribe1 = store.subscribe( () => {
  console.log( store.getState() );
} );

store.dispatch( addExpense( {
                              description: 'Beer',
                              amount: 500
                            } ) );

store.dispatch( addExpense( {
                              description: 'Sex',
                              amount: 5
                            } ) );

const demoState = {
  expenses: [{
    id: 'sdiufhiah',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',  // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

