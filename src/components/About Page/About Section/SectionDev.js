import React from 'react'
import image from "../../../images/AdobeStock_170801444 1.png"
function SectionDev() {
  return (
    <div className='section-about d-flex component'>
        <div className='sec-text'>
            <div className='head-sec'>
                <p>we<br/> are dev</p>
                <svg width="50" height="23" viewBox="0 0 50 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.5357 12.3485C50.1215 11.7627 50.1215 10.813 49.5357 10.2272L39.9897 0.68124C39.404 0.0954533 38.4542 0.0954533 37.8684 0.68124C37.2826 1.26703 37.2826 2.21677 37.8684 2.80256L46.3537 11.2878L37.8684 19.7731C37.2826 20.3589 37.2826 21.3087 37.8684 21.8944C38.4542 22.4802 39.404 22.4802 39.9897 21.8944L49.5357 12.3485ZM0.204102 12.7878H48.475V9.78784H0.204102V12.7878Z" fill="#19A5FF"/>
                </svg>
            </div>
            <div className='par'>
                <h2>Lorem ipsum dolor sit amet sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
        <div className='sec-img'>
            <img src={image} />
        </div>
    </div>
  )
}

export default SectionDev