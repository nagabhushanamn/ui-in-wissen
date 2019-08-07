

import { itemsReducer } from './items';
import { reviewsReducer } from './reviews';
import { cartReducer } from './cart';

import { combineReducers } from 'redux';


export default combineReducers({
    items: itemsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
})
