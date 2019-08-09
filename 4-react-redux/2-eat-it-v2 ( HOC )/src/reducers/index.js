

import { itemsReducer } from './items';
import { reviewsReducer } from './reviews';
import { cartReducer } from './cart';

import { combineReducers } from 'redux';
import { createSelector } from 'reselect'


export default combineReducers({
    items: itemsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
})

//-------------------------------------------------------------------
// store state selectors
//-------------------------------------------------------------------
const selectCart = state => {
    console.log('selecting cart...')
    return state.cart
}; ///

const reselectCart = createSelector(selectCart, cart => cart)

const selectItemReviews = (state, itemId) => state.reviews[itemId] || []; ///
const selectItemQty = (state, itemId) => {
    let cartLine = reselectCart(state)[itemId] || {}  // selector
    let { qty } = cartLine;
    qty = qty || 0
    return qty;
}
//-------------------------------------------------------------------

export { selectCart, selectItemReviews, selectItemQty }