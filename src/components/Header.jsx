import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import compare from '../../src/images/compare.svg'
import wishlist from '../../src/images/wishlist.svg'
import user from '../../src/images/user.svg'
import cart from '../../src/images/cart.svg'
import menu from '../../src/images/menu.svg'

const Header = () => {
  return (
    <>
      <div className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 Free Returns</p>
            </div>
            <div className="col-6 text-white mb-0">
              <p className='text-end'>Hotline: <a className='text-white' href='tel:+91 8977444222'>+91 8977434562</a></p>
            </div>
          </div>
        </div>
      </div>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2><Link className='text-white'>Dev Corner</Link></h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-item-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center text-white' style={{ gap: 10 }}>
                    <img src={compare} alt='Compare' />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <Link className='d-flex align-items-center text-white' style={{ gap: 10 }}>
                      <img src={wishlist} alt='Wishlist' />
                      <p className='mb-0'>Favourite <br /> Wishlist</p>
                    </Link>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center text-white' style={{ gap: 10 }}>
                    <img src={user} alt='' />
                    <p className='mb-0'>Login <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center text-white' style={{ gap: 10 }}>
                    <img src={cart} alt='' />
                    <div className="d-flex flex-column" style={{ gap: 10 }}>
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-bottom py-3">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center" style={{ gap: 30 }}>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center" style={{ gap: 15 }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={menu} alt="" />
                      <span className='me-5 d-inline block'>Shop Categories</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center" style={{ gap: 15 }}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Our Store</NavLink>
                    <NavLink to='/'>Blogs</NavLink>
                    <NavLink to='/'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header