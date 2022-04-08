import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import './Review.css'


const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (

        <div >
            <div className='customer-review'>
                < h3 > Customer Total Reviews: {reviews.length} </h3 >
            </div>
            <div className='review-container'>

                {
                    reviews.map(review => <Reviews review={review}
                        key={review.id}
                    ></Reviews>)

                }
            </div >

        </div >
    );
};

export default Review;