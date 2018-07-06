import { combineReducers, createStore } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {
  
  /* eslint-disable no-underscore-dangle */
  return createStore(
    combineReducers( {
                       expenses: expensesReducer,
                       filters: filtersReducer
                     } ), /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */
}
