import React from 'react'
import image from "../../../images/AdobeStock_227421922 1.png"
function SectionDev() {
  return (
    <div className='section-about d-flex component sec-solution'>
        <div className='sec-img'>
            <img src={image} />
        </div>
        <div className='sec-text'>
            <div className='head-sec'>
                <p>we are<br/>Solution</p>
                <svg width="51" height="23" viewBox="0 0 51 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.40571 12.5162C0.819927 11.9304 0.819927 10.9807 1.40571 10.3949L10.9517 0.848965C11.5374 0.263178 12.4872 0.263178 13.073 0.848965C13.6588 1.43475 13.6588 2.3845 13.073 2.97029L4.58769 11.4556L13.073 19.9408C13.6588 20.5266 13.6588 21.4764 13.073 22.0622C12.4872 22.648 11.5374 22.648 10.9517 22.0622L1.40571 12.5162ZM50.7373 12.9556H2.46637V9.95557H50.7373V12.9556Z" fill="#19A5FF"/>
                </svg>
            </div>
            <div className='par'>
                <h2>Lorem ipsum dolor sit amet sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
      
    </div>
  )
}

export default SectionDev