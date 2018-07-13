import { applyMiddleware, combineReducers, createStore } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  
  /* eslint-disable no-underscore-dangle */
  return createStore(
    combineReducers( {
                       expenses: expensesReducer,
                       filters: filtersReducer
                     } ), /* preloadedState, */
    composeEnhancers( applyMiddleware( thunk ) )
  );
  /* eslint-enable */
}

