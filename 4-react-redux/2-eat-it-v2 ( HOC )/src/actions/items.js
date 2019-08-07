


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
        }
    ]

    return { type: 'LOAD_ITEMS_SUCCESS', items }

}