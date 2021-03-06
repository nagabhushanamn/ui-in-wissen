


export function loadReviews(itemId, size) {
    //....
    let reviews = [
        { author: 'who@mail.com', stars: 5, body: 'sample-review-1' },
        { author: 'who@mail.com', stars: 3, body: 'sample-review-2' }
    ]
    return { type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews }
}


export function addNewReview(itemId, review) {
    //....
    return { type: 'ADD_NEW_REVIEW_SUCCESS', itemId, review }
}