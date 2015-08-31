import assign from 'object-assign';
import { createReducer } from 'utils';
import { SAMPLE_REFRESH } from 'actions/sampler';

const initialState = {
  message: 'Welcome to React-China',
};

export default createReducer(initialState, {
  [SAMPLE_REFRESH]: (state, payload) => {
    // TODO: do not modify state in here. get value from component;
    return payload ? state : assign({}, state.message, {message: new Date().toUTCString()});
  },
});
