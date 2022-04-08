import React from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='home-container'>
                <div className='laptop-details'>
                    <h1>Everything you need to know</h1>
                    <h1 className='color-header'>WQHD Gaming Laptop</h1>
                    <p>
                        This gaming laptop is designed with an aluminum-capped <br />
                        lid to its textured base and it can blend in every day<br />
                        with durability with athletic style.
                    </p>
                    <button className='btn-container'>Live Demo</button>
                </div>
                <div>
                    <img src="Laptop.jpg" alt="" />
                </div>
            </div>


            <div>
                <Review></Review>

            </div>

            <div className='customer-review'>

                <button className='btn-review' > <Link to="/review">See All Reviews</Link> </button>
            </div>
        </div>




    );
};

export default Home;