// Expenses Reducer

const expensesReducerDefaultState = [];

export default ( state = expensesReducerDefaultState, action ) => {
  
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

