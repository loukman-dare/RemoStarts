import React, { useState, useRef, useEffect } from 'react';
import down from '../../images/down.png';

function BookCity({ city, setCity, citySelected, setCitySelected }) {
  const cityRef = useRef(null);
  let pa = document.querySelectorAll(".book-city > div p");
  const paArray = Array.from(pa);

  const handleClick = (event) => {
    setCitySelected(event.target.textContent);
    paArray.map((p) => {
      return p.classList.remove("choose");
    });
    event.target.className = "choose";
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (cityRef.current && !cityRef.current.contains(event.target)) {
      setCity(false);
    }
  }

  return (
    <div className={`book-city justify-content-around flex-wrap ${city ? "d-flex" : "d-none"}`} ref={cityRef}>
      <div className='europe col-4'>
        <h5>EUROPE</h5>
        <p onClick={handleClick}>Acland</p>
        <p onClick={handleClick}>Paris</p>
        <p onClick={handleClick}>Italy</p>
        <p onClick={handleClick}>London</p>
        <p onClick={handleClick}>Icland</p>
        <p onClick={handleClick}>Troms</p>
        <p onClick={handleClick}>USA</p>
        <p onClick={handleClick}>Tabita</p>
        <p onClick={handleClick}>Berlin</p>
        <p onClick={handleClick}>Reykjavik</p>
        <p onClick={handleClick}>Salzburg</p>
        <p onClick={handleClick}>Malmo</p>
      </div>
      <div className='unitedstates col-5'>
        <h5>UNITED STATES</h5>
        <p onClick={handleClick}>Atlantes</p>
        <p onClick={handleClick}>Charlotte</p>
        <p onClick={handleClick}>Memphis</p>
        <p onClick={handleClick}>Austin</p>
        <p onClick={handleClick}>Denver</p>
        <p onClick={handleClick}>Miami</p>
        <p onClick={handleClick}>Boston</p>
        <p onClick={handleClick}>Detroit</p>
        <p onClick={handleClick}>New York</p>
        <p onClick={handleClick}>Baltimore</p>
        <p onClick={handleClick}>Kansas</p>
        <p onClick={handleClick}>Oakland</p>
        <p onClick={handleClick}>Chicago</p>
        <p onClick={handleClick}>Las Vegas</p>
        <p onClick={handleClick}>Omaha</p>
        <p onClick={handleClick}>Cinematic</p>
        <p onClick={handleClick}>Houston</p>
        <p onClick={handleClick}>Phoenix</p>
      </div>
      <div className='asia col-2'>
        <h5>Asia</h5>
        <p onClick={handleClick}>Dubai</p>
        <p onClick={handleClick}>Seoul</p>
        <p onClick={handleClick}>Mumba</p>
        <p onClick={handleClick}>Osaka</p>
      </div>
      <img src={down} alt="Dropdown Icon" />
    </div>
  );
}

export default BookCity;
