import React from 'react'
import newletter from '../../src/images/newsletter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center" style={{ gap: 30 }}>
                <img src={newletter} alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for NewLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <address className='text-white'>Hno : 8-138 Akaveedu(V), Rachrala(M), <br />
                PinCode: 523372, Prakasam(D)
              </address>
              <a href='tel:+91 8737737373' className='mt-3 d-block mb-1 text-white'>+91 8737737373</a>
              <a href='mailto:jairam0622@gmail.com' className='mt-2 d-block mb-0 text-white'>jairam0622@gmail.com</a>
              <div className='social_icons d-flex align-items-center mt-4' style={{ gap: 15 }}>
                <a href='#' className='me-4 text-reset'>
                  <i className="fa-brands fa-facebook text-white fs-4"></i>
                </a>
                <a href='#' className='me-4 text-reset'>
                  <i className="fa-brands fa-twitter text-white fs-4"></i>
                </a>
                <a href='#' className='me-4 text-reset'>
                  <i className="fa-brands fa-google text-white fs-4"></i>
                </a>
                <a href='#' className='me-4 text-reset'>
                  <i className="fa-brands fa-instagram text-white fs-4"></i>
                </a>
                <a href='#' className='me-4 text-reset'>
                  <i className="fa-brands fa-linkedin text-white fs-4"></i>
                </a>
                <a href='#' className='me-4 text-reset'>
                  <i className="fa-brands fa-github text-white fs-4"></i>
                </a>

              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>Laptops</Link>
                <Link className='text-white mb-1 py-2'>Headphones</Link>
                <Link className='text-white mb-1 py-2'>Tablets</Link>
                <Link className='text-white mb-1 py-2'>Watch</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>About Us</Link>
                <Link className='text-white mb-1 py-2'>Faq</Link>
                <Link className='text-white mb-1 py-2'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>Laptops</Link>
                <Link className='text-white mb-1 py-2'>Headphones</Link>
                <Link className='text-white mb-1 py-2'>Tablets</Link>
                <Link className='text-white mb-1 py-2'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="py-3">
          <div className="container xxl">
            <div className="row">
              <div className="col-12">
                <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by Jairam</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer