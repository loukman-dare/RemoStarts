import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Sign({ signClick, setSignClick }) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPass() {
    setShowPassword(!showPassword);
  }

  const formRef = useRef(null);

  function handleExit() {
    setSignClick(false);
  }

  function handleSignClick() {
    setSignClick(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setSignClick(false);
    }
  }

  return (
    <div className={`sign ${signClick ? "d-block" : ""}`}>
      <form ref={formRef}>
        <h3 className='text-center'>Registration</h3>

        {/* Name Input */}
        <div>
          <label>Enter your Name</label>
          <input type='text' placeholder='Username' />
        </div>

        {/* Email Address Input */}
        <div>
          <label>Enter your Email address</label>
          <input type='email' placeholder='Email address' />
        </div>

        {/* Password Input */}
        <div className='position-relative'>
          <label>Enter your password</label>
          <input type={showPassword ? "password" : "text"} placeholder='Password' />
          <div className='show-pass'>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={handleShowPass} />
          </div>
        </div>

        {/* Checkbox for Terms & Conditions */}
        <div className='d-flex flex-row'>
          <input type='checkbox' />
          <label>I agree to the terms & Conditions</label>
        </div>

        {/* Sign Up Button */}
        <button>Sign up</button>

        {/* Exit Button */}
        <span className='exit' onClick={handleExit}>X</span>
      </form>
    </div>
  );
}

export default Sign;
