import {createAction} from 'redux-actions';
import {ABOUT_DEV_MODE} from '../constants/index';

export const enableDeveloperMode = createAction(ABOUT_DEV_MODE);
