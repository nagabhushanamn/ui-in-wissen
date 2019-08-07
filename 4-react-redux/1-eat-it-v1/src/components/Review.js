import React from 'react';
import { Wrapper } from './styled-components';

function renderStarIcons(n) {
    let stars = [];
    for (let i = 0; i < n; i++)
        stars.push(<i style={{ color: 'orange' }} key={i} className="fa fa-star"></i>)
    return stars;
}

const Review = (props) => {
    const { value: review } = props;
    let self = review.author === 'Nag@mail.com' ? 'yes' : 'no';
    return (
        <Wrapper self={self}>
            <span>{renderStarIcons(review.stars)}</span>
            &mdash;<span>{review.author}</span>
            <hr />
            <div>{review.body}</div>
        </Wrapper>
    );
};

export default Review; 