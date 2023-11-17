import React from 'react'
import { useNavigate } from 'react-router-dom'

function CareerHead() {
  const Navigate = useNavigate();
  return (
    <div className='career-head head-page'>
        <div className='heading '>
            <h2>Meet Our Team</h2>
        </div>
        <p>We help build and manage a team of world-class developers to bring your vision to life</p>
        <div className='button'>
            <button></button>
            <button onClick={()=>Navigate("/join")}>Join Us</button>
        </div>
    </div>
  )
}

export default CareerHead