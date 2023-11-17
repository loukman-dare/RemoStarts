import React, { useState, useRef, useEffect } from 'react';
import adult from '../../images/Default.png';
import child from '../../images/child.png';
import infant from '../../images/baby.png';
import down from '../../images/down.png';

function BookPerson({
  showPersonBook,
  setShowPersonBook,
  adultCount,
  setAdultCount,
  childCount,
  setChildCount,
  infantCount,
  setInfantCount,
}) {
  const personRef = useRef(null);

  // Function to increment the number of adults
  function incrementAdult() {
    setAdultCount((prevState) => prevState + 1);
  }

  // Function to decrement the number of adults
  function decrementAdult() {
    setAdultCount((prevState) => prevState - 1);
  }

  // Function to increment the number of children
  function incrementChild() {
    setChildCount((prevState) => prevState + 1);
  }

  // Function to decrement the number of children
  function decrementChild() {
    setChildCount((prevState) => prevState - 1);
  }

  // Function to increment the number of infants
  function incrementInfant() {
    setInfantCount((prevState) => prevState + 1);
  }

  // Function to decrement the number of infants
  function decrementInfant() {
    setInfantCount((prevState) => prevState - 1);
  }

  // Handle clicks outside the BookPerson component to close the person picker
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (personRef.current && !personRef.current.contains(event.target)) {
      setShowPersonBook(false);
    }
  }

  return (
    <div className={`book-person ${showPersonBook ? 'd-block' : 'd-none'}`} ref={personRef}>
      {/* Adult Row */}
      <div className='row'>
        <div className='type'>
          <div className='head-type'>
            <img src={adult} alt='Adult Icon' />
            <p>Adult</p>
          </div>
          <div className='tail-type'>
            <p>over 11</p>
          </div>
        </div>
        <div className='count'>
          {/* Decrement Adult Count */}
          <p onClick={() => decrementAdult()}>-</p>
          <p>{adultCount}</p>
          {/* Increment Adult Count */}
          <p onClick={() => incrementAdult()}>+</p>
        </div>
      </div>

      {/* Child Row */}
      <div className='row'>
        <div className='type'>
          <div className='head-type'>
            <img src={child} alt='Child Icon' />
            <p>child</p>
          </div>
          <div className='tail-type'>
            <p>2-11</p>
          </div>
        </div>
        <div className='count'>
          {/* Decrement Child Count */}
          <p onClick={() => decrementChild()}>-</p>
          <p>{childCount}</p>
          {/* Increment Child Count */}
          <p onClick={() => incrementChild()}>+</p>
        </div>
      </div>

      {/* Infant Row */}
      <div className='row'>
        <div className='type'>
          <div className='head-type'>
            <img src={infant} alt='Infant Icon' />
            <p>Infant</p>
          </div>
          <div className='tail-type'>
            <p>0-2</p>
          </div>
        </div>
        <div className='count'>
          {/* Decrement Infant Count */}
          <p onClick={() => decrementInfant()}>-</p>
          <p>{infantCount}</p>
          {/* Increment Infant Count */}
          <p onClick={() => incrementInfant()}>+</p>
        </div>
      </div>

      {/* Dropdown Icon */}
      <img src={down} alt='Dropdown Icon' />
    </div>
  );
}

export default BookPerson;
