import React from 'react'
import watch from '../../src/images/watch.jpg'
import watch1 from '../../src/images/watch-1.png'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import addCart from '../../src/images/add-cart.svg'
import View from '../../src/images/view.svg'
import prodCompare from '../../src/images/prodcompare.svg'
import wish from '../../src/images/wish.svg'

const ProductCard = () => {
    return (
        <div className='col-3'>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link className=''>
                        <img src={wish} alt="" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src={watch} alt="Product image" className='img-fluid' />
                    <img src={watch1} alt="Product image" className='img-fluid' style={{ width: '99%', height: "99%" }} />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className='product-title'>
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        activeColor="#ffd700"
                        edit={false}
                    />
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column" style={{ gap: 15 }}>
                        <Link>
                            <img src={prodCompare} alt="Compare" />
                        </Link>
                        <Link>
                            <img src={View} alt="View" />
                        </Link>
                        <Link>
                            <img src={addCart} alt="Add Cart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard