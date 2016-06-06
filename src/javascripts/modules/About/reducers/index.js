import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {actions} from '../constants/index';

const {ABOUT_DEV_MODE} = actions;

const initialState = Immutable.fromJS({
  count: 0,
  hint: 'You are now a developer!',
});

export default handleActions({
  [ABOUT_DEV_MODE]: state => state.update('count', count => count < 5 ? count + 1 : count),
}, initialState);
