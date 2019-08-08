
import api from '../api';

export function loadItems(cat, size) {
    //...

    // let items = [
    //     {
    //         id: 1,
    //         name: 'Veg',
    //         price: 70.00,
    //         canBuy: true,
    //         imgPath: '/images/veg.png',
    //         description: 'yummy'
    //     }
    // ]
    // return { type: 'LOAD_ITEMS_SUCCESS', items } // sync action

    return function (dispatch) {
        dispatch({ type: 'REQUEST_START', message: 'loading items...' }) // async action
        api.loadItems(cat, size)
            .then(response => response.data)
            .then(items => {
                dispatch({ type: 'REQUEST_END', message: '' }) // async action
                dispatch({ type: 'LOAD_ITEMS_SUCCESS', items }) // async action
            })
            .catch(err => {
                dispatch({ type: 'REQUEST_ERROR', message: err.message }) // async action
            })
    }

}