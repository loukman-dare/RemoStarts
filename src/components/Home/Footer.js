import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../../images/logo.png';

function Footer() {
  return (
    <div className='footer' id='contact'>
      {/* Links Footer */}
      <div className='links-footer d-flex justify-content-between gap-5 flex-wrap'>
        {/* Menu Section */}
        <div className='menu'>
          <h4>Menu</h4>
          <p>Explore</p>
          <p>Travel</p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>

        {/* Information Section */}
        <div className='Information'>
          <h4>Information</h4>
          <p>Destinations</p>
          <p>Supports</p>
          <p>Terms & Conditions</p>
          <p>Privacy</p>
        </div>

        {/* Contact Info Section */}
        <div className='Contact'>
          <h4>Contact Info</h4>
          <p>+963 97555668</p>
          <p>ranem.omarr@gmail.com</p>
          <p>1245, Damascus, SY</p>
        </div>

        {/* Social Media Icons */}
        <div className='social d-flex gap-3 flex-wrap align-content-start'>
          <h4 className='col-12'>Follow us on</h4>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>

      {/* Copy Right */}
      <div className='copy-right d-flex align-items-end justify-content-between'>
        <img src={logo} className='col-2 img-fluid' alt='Logo' />
        <p className='col-6 p-0 m-0'>Copyright © Travel 2023 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
