import React, { useState, useEffect } from 'react';
import laptop from '../../../images/Frame.png';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Land() {
  const [showTitle1, setShowTitle1] = useState(true);
  const [showTitle2, setShowTitle2] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    // Change the state of elements to show them in sequence after a certain time period
    const delay = 1000; // Change every 1000 milliseconds (1 second)

    const timeout1 = setTimeout(() => {
      setShowTitle1(true);
    }, delay);

    const timeout2 = setTimeout(() => {
      setShowTitle2(true);
    }, delay * 2); // Change after 2 seconds

    const timeout3 = setTimeout(() => {
      setShowParagraph(true);
    }, delay * 3); // Change after 3 seconds

    // Clean up timeouts when the component unmounts
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className='land component d-flex flex-column flex-lg-row'>
      <div className='text-land'>
        <div className='heading-land'>
          <TransitionGroup>
            {showTitle1 && (
              <CSSTransition timeout={500} classNames='fade'>
                <h1 className='head-one'>Great <span>Product</span> is </h1>
              </CSSTransition>
            )}
          </TransitionGroup>
          <TransitionGroup>
            {showTitle2 && (
              <CSSTransition timeout={500} classNames='fade'>
                <h1 className='head-two'>Build by great <span>teams</span></h1>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        <div className='par-land'>
          <TransitionGroup>
            {showParagraph && (
              <CSSTransition timeout={500} classNames='fade'>
                <p>We are a team of 150+ <span>software engineers & Designers</span> ready to Build & maintenance your mobile and web application. </p>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        <div className='price-land'>
          <button></button>
          <button>Price Your Project &#8599;</button>
        </div>
      </div>
      <div className='img-land d-none d-lg-block'>
        <img src={laptop} className='img-fluid' alt='Laptop' />
      </div>
    </div>
  );
}


export default Land;
