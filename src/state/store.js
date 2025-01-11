import { compose, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(thunk));

export const store = createStore(
    reducers,
    {},
    composedEnhancers
  );

