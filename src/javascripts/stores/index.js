import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import { devTools } from 'redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const buildStore = __DEBUG__ ? compose(devTools(), createStoreWithMiddleware) : createStoreWithMiddleware;

export default buildStore(combineReducers(reducers));
