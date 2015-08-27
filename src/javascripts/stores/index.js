import { compose, createStore, combineReducers } from 'redux';
import { devTools } from 'redux-devtools';
import * as reducers from '../reducers';

const buildStore = __DEBUG__ ? compose(devTools(), createStore) : createStore;

export default buildStore(combineReducers(reducers));
