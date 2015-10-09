import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

export default handleActions({}, initialState);
