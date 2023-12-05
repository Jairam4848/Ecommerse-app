import React from 'react'
import main_banner1 from '../../src/images/main-banner-1.jpg'
import catbanner1 from '../../src/images/catbanner-01.jpg'
import catbanner2 from '../../src/images/catbanner-02.jpg'
import catbanner3 from '../../src/images/catbanner-03.jpg'
import catbanner4 from '../../src/images/catbanner-04.jpg'
import service from '../../src/images/service.png'
import services2 from '../../src/images/service-02.png'
import services3 from '../../src/images/service-03.png'
import services4 from '../../src/images/service-04.png'
import services5 from '../../src/images/service-05.png'
import camera from '../../src/images/camera.jpg'
import tv from '../../src/images/tv.jpg'
import headPhone from '../../src/images/headphone.jpg'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import brand1 from '../../src/images/brand-01.png'
import brand2 from '../../src/images/brand-02.png'
import brand3 from '../../src/images/brand-03.png'
import brand4 from '../../src/images/brand-04.png'
import brand5 from '../../src/images/brand-05.png'
import brand6 from '../../src/images/brand-06.png'
import brand7 from '../../src/images/brand-07.png'
import brand8 from '../../src/images/brand-08.png'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className="container xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src={main_banner1} className='img-fluid rounded-3' alt="" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className='d-flex flex-wrap justify-content-between align-items-center' style={{ gap: 10 }}>
                <div className="small-banner position-relative">
                  <img src={catbanner1} className='img-fluid rounded-3' alt="" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src={catbanner2} className='img-fluid rounded-3' alt="" />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival.</h4>
                    <h5>Buy iPad Air.</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src={catbanner3} className='img-fluid rounded-3' alt="" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src={catbanner4} className='img-fluid rounded-3' alt="" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center' style={{ gap: 15 }}>
                  <img src={service} alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all Orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center' style={{ gap: 15 }}>
                  <img src={services2} alt="services" />
                  <div>
                    <h6>daily Suprise Offers</h6>
                    <p className='mb-0'>Save Upto 25% Off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center' style={{ gap: 15 }}>
                  <img src={services3} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center' style={{ gap: 15 }}>
                  <img src={services4} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center' style={{ gap: 15 }}>
                  <img src={services5} alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <div className='categories d-flex align-items-center flex-wrap justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headPhone} alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headPhone} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src={brand1} alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={brand2} alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={brand4} alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={brand5} alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={brand6} alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={brand7} alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={brand8} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="section-heading">Our Latest Blogs</h3>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home