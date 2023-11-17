import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import vector from "../../images/Vector.svg";
import play from "../../images/play video.svg";
import image1 from "../../images/Slider.png"
import image2 from "../../images/slider1.png"
import image3 from "../../images/slider2.png"
import image4 from "../../images/slider3.png"
import BookCity from './BookCity';
import BookPerson from './BookPerson';
import BookDating from './BookDating';

function Landing() {
  // State for handling date selection
  const [leftStartNumber, setLeftStartNumber] = useState(null);
  const [leftEndNumber, setLeftEndNumber] = useState(null);
  const [rightStartNumber, setRightStartNumber] = useState(null);
  const [rightEndNumber, setRightEndNumber] = useState(null);

  // State for handling number of adults, children, and infants for booking
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  // State for handling city selection and person booking forms
  const [city, setCity] = useState(false);
  const [citySelected, setCitySelected] = useState("dubai");
  const [showPersonBook, setShowPersonBook] = useState(false);

  // State for handling background image change at regular intervals
  const [backgroundImage, setBackgroundImage] = useState(image1);

  // State for handling date display and selection
  const [viewDate, setViewDate] = useState(false);
  const [monthNum, setMonthNum] = useState(0);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Function to show the date selection pop-up
  function showDate() {
    setViewDate(true);
  }

  // Function to show the person booking form
  function showPopPerson() {
    setShowPersonBook(true)
  }

  // Function to toggle city input display
  function handleClick() {
    setCity(!city);
  }

  // Effect to change background image at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      if (backgroundImage === image1) {
        setBackgroundImage(image2);
      } else if (backgroundImage === image2) {
        setBackgroundImage(image3);
      } else if (backgroundImage === image3) {
        setBackgroundImage(image4);
      } else {
        setBackgroundImage(image1)
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImage]);

  return (
    <div className='landing col-12' style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Discover section */}
      <div className='discover'>
        <h3><span>Discover</span> the Secrets of the Earth !</h3>
        <p>Share your favorite travel destination, and we will feature it in our next blog!</p>
      </div>

      {/* Story section */}
      <div className='story d-flex justify-content-start'>
        <button className='col-3'>Share Your Story</button>
        <img src={play} className='col-1' alt="Play Video" />
        <p className='col-3'>Watch Highlight</p>
      </div>

      {/* Book Now section */}
      <div className='book-now d-flex' id="booking">
        <div className='col-8 form m-auto d-flex flex-wrap justify-content-between'>
          <div className='' onClick={() => handleClick()}>
            <label>Destination</label>
            <input type='text' value={citySelected} />
          </div>
          <div className=''>
            <label>Adults</label>
            <input type='text' value={`${adultCount} Adult, ${childCount} Child, ${infantCount} Infant`} />
            <img src={vector} alt="Vector" onClick={() => showPopPerson()} />
          </div>
          <div className=''>
            <label>From</label>
            <input type='text' value={`sun,${(leftStartNumber) | (rightStartNumber)}th ${leftStartNumber ? months[monthNum] : months[monthNum + 1]}2020`} />
            <img src={vector} alt="Vector" onClick={() => showDate()} />
          </div>
          <div className="">
            <label>To</label>
            <input type='text' value={`sun,${leftEndNumber | rightEndNumber}th ${leftStartNumber ? months[monthNum] : months[monthNum + 1]}2020`} />
            <img src={vector} alt="Vector" onClick={() => showDate()} />
          </div>
        </div>
        <div className='confirm'>
          <p>Book Now</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        {/* Render related components */}
        <BookCity city={city} setCity={setCity} citySelected={citySelected} setCitySelected={setCitySelected} />
        <BookPerson showPersonBook={showPersonBook} setShowPersonBook={setShowPersonBook} adultCount={adultCount} setAdultCount={setAdultCount} childCount={childCount} setChildCount={setChildCount} infantCount={infantCount} setInfantCount={setInfantCount} />
        <BookDating leftStartNumber={leftStartNumber} setLeftStartNumber={setLeftStartNumber} leftEndNumber={leftEndNumber} setLeftEndNumber={setLeftEndNumber} rightStartNumber={rightStartNumber} setRightStartNumber={setRightStartNumber} rightEndNumber={rightEndNumber} setRightEndNumber={setRightEndNumber} months={months} monthNum={monthNum} setMonthNum={setMonthNum} viewDate={viewDate} setViewDate={setViewDate} />
      </div>

      {/* Slider Tools section */}
      <div className='slider-tools d-flex'>
        <span className={(backgroundImage === image1) ? "active" : ""}></span>
        <span className={(backgroundImage === image2) ? "active" : ""}></span>
        <span className={(backgroundImage === image3) ? "active" : ""}></span>
        <span className={(backgroundImage === image4) ? "active" : ""}></span>
      </div>
    </div>
  );
}

export default Landing;
