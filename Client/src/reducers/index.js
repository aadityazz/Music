import { combineReducers } from 'redux';

import musicReducer from './musicReducer';
import auth from './auth';
import songs from './songs'

export const reducers = combineReducers({ musicReducer, auth, songs });
