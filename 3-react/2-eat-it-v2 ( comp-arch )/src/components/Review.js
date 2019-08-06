import React from 'react';

function renderStarIcons(n) {
    let stars = [];
    for (let i = 0; i < n; i++)
        stars.push(<i style={{ color: 'orange' }} key={i} className="fa fa-star"></i>)
    return stars;
}

const Review = (props) => {
    const { value: review } = props;
    return (
        <div className="alert alert-danger">
            <span>{renderStarIcons(review.stars)}</span>
            &mdash;<span>{review.author}</span>
            <hr />
            <div>{review.body}</div>
        </div>
    );
};

export default Review; 