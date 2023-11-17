import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Landing from './Landing';
import City from './City';
import Map from './Map';
import Services from './Services';
import Pay from './Pay';
import Footer from './Footer';
import Sign from './Sign';
import Log from './Log';
import BookCity from './BookCity';

function Home() {
  const [signClick, setSignClick] = useState(false);
  const [logClick, setLogClick] = useState(false);

  function handleSignClick() {
    setSignClick(false);
  }

  function handleLogClick() {
    setLogClick(false);
  }

  return (
    <div className='home'>
      {/* Header Component */}
      <Header
        signClick={signClick}
        setSignClick={setSignClick}
        let logClick={logClick}  // Fix the typo: "let" should be "let"
        setLogClick={setLogClick}
      />

      {/* Landing Component */}
      <Landing />

      {/* City Component */}
      <City />

      {/* Map Component */}
      <Map />

      {/* Services Component */}
      <Services />

      {/* Pay Component */}
      <Pay />

      {/* Footer Component */}
      <Footer />

      {/* Sign Component (Modal) */}
      <Sign
        signClick={signClick}
        setSignClick={setSignClick}
        logClick={logClick}
        handleOutsideClick={handleSignClick}
      />

      {/* Log Component (Modal) */}
      <Log logClick={logClick} setLogClick={setLogClick} />
      {/* Pass signClick as a prop to Sign */}
    </div>
  );
}

export default Home;
