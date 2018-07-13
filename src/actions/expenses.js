// ADD_EXPENSE
import uuid from 'uuid';

// use push
// attach then callback
// dispatch action
// redirect

// WHAT WE DO:
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// components call action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatvere it wants)
export const addExpense = ( {
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

export const startAddExpense = ( expenseData = {} ) => {
  return ( dispatch ) => {
    const {
            description = '',
            note        = '',
            amount      = 0,
            createdAt   = 0
          } = expenseData;
  };
};

// REMOVE_EXPENSE
export const removeExpense = ( {
                                 id
                               } = {} ) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
