


export function loadItems(cat, size) {
    //...
    let items = [
        {
            id: 1,
            name: 'Veg',
            price: 70.00,
            canBuy: true,
            imgPath: '/images/veg.png',
            description: 'yummy'
        },
        {
            id: 2,
            name: 'Non-Veg',
            price: 70.00,
            canBuy: true,
            imgPath: '/images/non-veg.png',
            description: 'yummy'
        }
    ]

    return { type: 'LOAD_ITEMS_SUCCESS', items }

}