import { createStore } from 'redux';


console.clear();

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

