import { combineReducers, createStore } from 'redux';

import uuid from 'uuid';


console.clear();

// ADD_EXPENSE
const addExpense = ( {
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
    createdAt,
    amount
  }
});

// REMOVE_EXPENSE
const removeExpense = ( {
                          id
                        } = {} ) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = ( startDate = 'undefined' ) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = ( endDate = 'undefined' ) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
  
  switch ( action.type ) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    
    case 'REMOVE_EXPENSE':
      return state.filter( ( { id } ) => id !== action.id );
    
    case 'EDIT_EXPENSE':
      // console.log( 'hmm' );
      // console.log( action.id );
      // console.log( action.updates );
      
      return state.map( ( expense ) => {
                          // console.log( `EXPENSE AMOUNT: ${expense.amount}` );
        
                          if ( expense.id === action.id ) {
                            return {
                              ...expense,
                              ...action.updates
                            };
                          }
                          else {
                            return expense;
                          }
                        }
      );
    
    default:
      // console.log( `WARNING: Unknown action type: ${action.type}` );
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
    
    case 'SET_TEXT_FILTER':
      // console.log( action.text );
      // console.log( state );
      return {
        ...state,
        text: action.text
      };
    
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    
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

/*
const expense1 = store.dispatch( addExpense( {
                                               description: 'Beer',
                                               amount: 500
                                             } ) );
console.log( expense1 );
const expense2 = store.dispatch( addExpense( {
                                               description: 'Sex',
                                               amount: 5
                                             } ) );
console.log( expense2 );

const removeExpense1 = store.dispatch( removeExpense( { id: expense1.expense.id } ) );
console.log( removeExpense1 );

// console.log( expense2.expense.id );
const editExpense2 = store.dispatch( editExpense( expense2.expense.id, { amount: 666 } ) );
console.log( editExpense2 );
*/

/*
const setFilter1 = store.dispatch( setTextFilter( 'rent' ) );
console.log( setFilter1 );

const setFilter2 = store.dispatch( setTextFilter() );
console.log( setFilter2 );

const sortBy1 = store.dispatch( sortByAmount() );
console.log( sortBy1 );

const sortBy2 = store.dispatch( sortByDate() );
console.log( sortBy2 );
*/

const setStartDate1 = store.dispatch( setStartDate( 125 ) );
console.log( setStartDate1 );

const setStartDate2 = store.dispatch();
console.log( setStartDate2 );

const setEndDate1 = store.dispatch( setEndDate( 1250 ) );
console.log( setEndDate1 );

const setEndDate2 = store.dispatch();
console.log( setEndDate2 );

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

