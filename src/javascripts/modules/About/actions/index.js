import {createAction} from 'redux-actions';
import {actions} from '../constants/index';

export const enableDeveloperMode = createAction(actions.ABOUT_DEV_MODE);
