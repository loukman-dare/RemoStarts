import React from 'react';
import logo from "../../images/Frame 76.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header({ signClick, setSignClick, logClick, setLogClick }) {
  // Function to handle the "Sign Up" button click
  function handleSign() {
    setSignClick(true);
  }

  // Function to handle the "Log In" button click
  function handleLog() {
    setLogClick(true);
  }

  return (
    // Header Section - Main container for the header
    <div className='header d-flex flex-wrap flex-md-row justify-content-around col-12 align-items-center'>
      {/* Logo Section */}
      <div className='logo col-4 col-md-2'>
        <img src={logo} className='img-fluid' alt="Logo" />
      </div>

      {/* Search Section for Small Devices */}
      <div className='input d-flex d-md-none col-6'>
        {/* Search Icon */}
        <FontAwesomeIcon icon={faSearch} className='search' />
        {/* Search Input */}
        <input type='search' placeholder="Search" className='w-100' />
      </div>

      {/* Main Navigation Links */}
      <div className='navbar d-flex col-11 col-md-6 col-lg-5 mb-5 mb-md-0'>
        {/* Home Link */}
        <li to="/projectTravel" className='display-2 link' >Home</li>
        {/* Services Link */}
        <a href="#services" className='display-md-2 link'>Services</a>

        {/* Booking Link */}
        <a href="#booking" className='display-md-2 link'>Booking</a>
        {/* Contact Us Link */}
        <a href="#contact" className='display-md-2 link'>Contact Us</a>
        {/* About Us Link */}
        <a href="#about" className='display-md-2 link'>About Us</a>
      </div>

      {/* Registration and Log In Section */}
      <div className="registration-container col-6 col-md-2 d-flex flex-column flex-lg-row">
        {/* Sign Up Button */}
        <button className='mb-1 w-100  h-50 h-lg-100' onClick={() => handleSign()}>Sign Up</button>
        {/* Log In Button */}
        <button className='w-100 h-50 h-lg-100 ml-2' onClick={() => handleLog()}>Log In</button>
      </div>
    </div>
  );
}

export default Header;
