
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
        api.loadItems(cat, size)
            .then(response => response.data)
            .then(items => {
                dispatch({ type: 'LOAD_ITEMS_SUCCESS', items }) // async action
            })
    }

}