import React from 'react'
import code from "../../../images/Rectangle 71.png"
function AboutUS() {
  return (
    <div className='about component'>
        <div className='text-about'>
            <div className='heading'>
                <h2>About Us</h2>
            </div>
            <div className='exp '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className='solutions'>
                <h3>Your Solutions</h3>
                <div className='step'>
                    <div className='check'><span></span></div>
                    <h4>Start with your Ideas</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div className='step'>
                    <div className='check'><span></span></div>

                    <h4>Start with your Ideas</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div className='step'>
                    <div className='check'><span></span></div>

                    <h4>Start with your Ideas</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
            </div>
        </div>
        <div className='about-image col-6'>
            <div>
                <img src={code} className='img-fluid' />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default AboutUS