import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Log({ logClick, setLogClick }) {
  // State to manage the visibility of the password
  const [showPassword, setShowPassword] = useState(false);

  // Ref to the form element
  const formRef = useRef(null);

  // Function to handle the exit button click
  function handleExit() {
    setLogClick(false);
  }

  // Function to handle the eye icon click for showing/hiding the password
  function handleShowPass() {
    setShowPassword(!showPassword);
  }

  // Function to handle the log-in button click
  function handleLogClick() {
    setLogClick(false);
  }

  // Effect to handle clicks outside the log-in form to close the modal
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to check if the click is outside the log-in form and close the modal
  function handleClickOutside(event) {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setLogClick(false);
    }
  }

  return (
    <div className={`sign ${logClick ? "d-block" : ""}`}>
      <form ref={formRef}>
        {/* Log-in form header */}
        <div className='head-log d-flex flex-row'>
          <p className='col-6'>Welcome to Log in</p>
          <p className='col-6 d-flex flex-wrap'>
            No Account ? <span className='col-12'>Sign up</span>
          </p>
        </div>

        {/* Username/email input */}
        <div>
          <label>Enter your username or email address</label>
          <input type='text' placeholder='Username' />
        </div>

        {/* Password input */}
        <div className='position-relative'>
          <label>Enter your password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='Password'
          />
          {/* Show/Hide password toggle */}
          <div className='show-pass'>
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={handleShowPass}
            />
          </div>
        </div>

        {/* Remember me and Forget password options */}
        <div className='d-flex flex-row'>
          <input type='checkbox' />
          <label>Remember me</label>
          <label>Forget password</label>
        </div>

        {/* Sign-in button */}
        <button>Sign in</button>

        {/* Exit button */}
        <span className='exit' onClick={handleExit}>X</span>
      </form>
    </div>
  );
}

export default Log;
