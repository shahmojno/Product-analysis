import React from 'react';
import './Reviews.css'

const Reviews = (props) => {
    const { name, rating, review } = props.review;

    return (
        <div className='review-cart'>
            <div className='review-cart1'>


                <h3>Name : {name} </h3>
                <h4>Rating : {rating} </h4>
                <h3><small>Review : {review}</small> </h3>

            </div>
        </div>
    );
};

export default Reviews;