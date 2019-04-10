import { combineReducers } from 'redux';
import players from './players';
import loaded from './loaded';

export default combineReducers({loaded, players});