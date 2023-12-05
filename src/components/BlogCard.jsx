import React from 'react'
import '../App.css'
import blog1 from '../../src/images/blog-1.jpg'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className="col-3">
            <div className="blog-card">
                <div className="card-image">
                    <img src={blog1} className='img-fluid' alt="blog" />
                </div>
                <div className="blog-content">
                    <p className='date'>21 Nov 2023</p>
                    <h5 className='title'>A beautiful sunday morning renaissance</h5>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quam doloremque quas, at dolore ipsa libero doloribus nesciunt dignissimos laudantium, esse veniam debitis, quasi atque 
                    ipsum magnam officiis et ducimus rerum.</p>
                    <Link to="" className='button'>Read More</Link>    
                </div>
            </div>
        </div>
    )
}

export default BlogCard