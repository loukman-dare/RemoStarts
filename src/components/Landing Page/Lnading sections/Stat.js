import React from 'react'
import logo1 from "../../../images/Logo 1.png"
import logo2 from "../../../images/Logo 2.png"
import logo3 from "../../../images/Logo 3.png"
import logo4 from "../../../images/Logo 4.png"

function Stat() {
  return (
    <div className='stat component'> 
        <div className='stat-cards'>
            <div className='card1'>
                <h3>500+</h3>
                <p>Successful projects</p>
            </div>
            <div className='card1'>
                <h3>98%</h3>
                <p>Satisfied Clients</p>
            </div>
            <div className='card1'>
                <h3>35+</h3>
                <p>Handled Countries</p>
            </div>
        </div>
        <div className='companies'>
            <img src={logo1}/>
            <img src={logo4}/>
            <img src={logo3}/>
            <img src={logo2}/>
        </div>
    </div>
  )
}

export default Stat