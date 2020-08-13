import thunk from 'redux-thunk';
import reducer from './reducer.js';
import { createStore, applyMiddleware } from 'redux';

const composeEnhancers = applyMiddleware(thunk);

const store = createStore(reducer, composeEnhancers);

export default store;
