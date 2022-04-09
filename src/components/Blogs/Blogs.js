import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div >
            <h3 className='blogs'>Blogs</h3>

            <div className='blogs-text'>
                <div>
                    <h4>Context API : </h4>
                    <p>Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree</p>
                </div>
                <div>
                    <h4>Semantic Elements : </h4>
                    <p>HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.
                        Where the internet was originally intended for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;