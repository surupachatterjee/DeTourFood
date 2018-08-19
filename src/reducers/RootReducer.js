import {combineReducers} from 'redux';
import RestaurantReducer from "./RestaurantReducer";
import UserReducer from './UserReducer';
import MenuReducer from './MenuReducer';

const RootReducer = combineReducers({
    RestaurantReducer,
    UserReducer

    RestaurantReducer,
    MenuReducer
});

export default RootReducer;