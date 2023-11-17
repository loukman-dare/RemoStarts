import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import down from '../../images/down.png';

// Function to create an array of numbers within a range
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function BookDating({
  leftStartNumber,
  setLeftStartNumber,
  leftEndNumber,
  setLeftEndNumber,
  rightStartNumber,
  setRightStartNumber,
  rightEndNumber,
  setRightEndNumber,
  months,
  monthNum,
  setMonthNum,
  viewDate,
  setViewDate,
}) {
  // Function to move to the previous two months
  function monthPrev() {
    monthNum > 0 ? setMonthNum(monthNum - 2) : setMonthNum(monthNum);
  }

  const bookRef = useRef(null);

  // Function to move to the next two months
  function monthNext() {
    monthNum < 12 ? setMonthNum(monthNum + 2) : setMonthNum(monthNum);
  }

  // Function to handle the click on the day numbers
  const handleNumberClick = (num, side) => {
    if (side === 'left') {
      if (leftStartNumber === null) {
        setLeftStartNumber(num);
      } else if (leftStartNumber !== null && leftEndNumber === null) {
        setLeftEndNumber(num);
      } else {
        setLeftStartNumber(null);
        setLeftEndNumber(null);
      }

      // Check if the number belongs to the right section
      if (num >= rightStartNumber && num <= rightEndNumber) {
        setRightStartNumber(null);
        setRightEndNumber(null);
      }
    } else if (side === 'right') {
      if (rightStartNumber === null) {
        setRightStartNumber(num);
      } else if (rightStartNumber !== null && rightEndNumber === null) {
        setRightEndNumber(num);
      } else {
        setRightStartNumber(null);
        setRightEndNumber(null);
      }

      // Check if the number belongs to the left section
      if (num >= leftStartNumber && num <= leftEndNumber) {
        setLeftStartNumber(null);
        setLeftEndNumber(null);
      }
    }
  };

  // Highlight the selected day numbers when their range is chosen
  useEffect(() => {
    if (leftStartNumber !== null && leftEndNumber !== null) {
      const start = Math.min(leftStartNumber, leftEndNumber);
      const end = Math.max(leftStartNumber, leftEndNumber);
      const allLeftSpans = document.querySelectorAll('.left span');
      allLeftSpans.forEach((span, index) => {
        const num = parseInt(span.textContent);
        const isBetween = num >= start && num <= end;
        span.classList.toggle('highlighted', isBetween);
        span.style.borderRadius = num === start ? '50% 0 0 50%' : num === end ? '0 50% 50% 0' : 'initial';
      });
    }
  }, [leftStartNumber, leftEndNumber]);

  useEffect(() => {
    if (rightStartNumber !== null && rightEndNumber !== null) {
      const start = Math.min(rightStartNumber, rightEndNumber);
      const end = Math.max(rightStartNumber, rightEndNumber);
      const allRightSpans = document.querySelectorAll('.right span');
      allRightSpans.forEach((span, index) => {
        const num = parseInt(span.textContent);
        const isBetween = num >= start && num <= end;
        span.classList.toggle('highlighted', isBetween);
        span.style.borderRadius = num === start ? '50% 0 0 50%' : num === end ? '0 50% 50% 0' : 'initial';
      });
    }
  }, [rightStartNumber, rightEndNumber]);

  // Handle clicks outside the BookDating component to close the date picker
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (bookRef.current && !bookRef.current.contains(event.target)) {
      setViewDate(false);
    }
  }

  return (
    <div className={`book-dating  ${viewDate ? `d-block` : `d-none`}`} ref={bookRef}>
      {/* Date Navigation */}
      <div className='month d-flex justify-content-between'>
        {/* Icon to move to the previous two months */}
        <FontAwesomeIcon icon={faAngleLeft} onClick={() => monthPrev()} />
        {/* Display the current and next two months */}
        <p>{months[monthNum]}</p>
        <p>{months[monthNum + 1]}</p>
        {/* Icon to move to the next two months */}
        <FontAwesomeIcon icon={faAngleRight} onClick={() => monthNext()} />
      </div>
      <div className='days d-flex justify-content-between'>
        {/* Left section for day numbers */}
        <div className='left'>
          {range(1, 30).map((num) => (
            <span
              key={num}
              className={num >= leftStartNumber && num <= leftEndNumber ? 'highlighted' : ''}
              onClick={() => handleNumberClick(num, 'left')}
            >
              {num}
            </span>
          ))}
        </div>
        {/* Right section for day numbers between the selected range */}
        <div className='right'>
          {range(1, 30).map((num) => (
            <span
              key={num}
              className={num >= rightStartNumber && num <= rightEndNumber ? 'highlighted' : ''}
              onClick={() => handleNumberClick(num, 'right')}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
      {/* Dropdown Icon */}
      <img src={down} alt='Dropdown Icon' />
    </div>
  );
}

export default BookDating;
