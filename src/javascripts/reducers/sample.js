import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as easy to customize as possibility we'll just define
// the constant here.
const SAMPLE_ACTION = 'SAMPLE_ACTION';
const initialState = {
  message: 'Welcome to React-China',
};

export default createReducer(initialState, {
  [SAMPLE_ACTION]: (state, payload) => {
    switch (payload.actionType) {
    case SAMPLE_ACTION:
    default:
      return state;
    }
  },
});
