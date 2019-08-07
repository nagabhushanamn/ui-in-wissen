


import reducer from '../reducers';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const preloadedState = {
    items: [],
    reviews: {}
}

const store = createStore(reducer, preloadedState, composeEnhancers(
    // other store enhancers if any
));

export default store;