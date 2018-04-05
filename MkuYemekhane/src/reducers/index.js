import { combineReducers } from 'redux';
import foodsMenuReducer from './foodsMenuReducer';
export default combineReducers({
    foods: foodsMenuReducer,
});