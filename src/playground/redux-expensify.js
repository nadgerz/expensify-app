import { createStore } from 'redux';


console.clear();

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducer = ( state, action ) => {

};
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

const store = createStore( countReducer );

const unsubscribe1 = store.subscribe( () => {
  console.log( store.getState() );
} );

