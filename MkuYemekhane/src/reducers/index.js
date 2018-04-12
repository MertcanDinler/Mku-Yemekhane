import { combineReducers } from 'redux';
import foods from './foodsMenuReducer';
import settings from './settingsReducer';
export default combineReducers({
    foods,
    settings
});