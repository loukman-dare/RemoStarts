import React from 'react'
import dubai from "../../../images/Rectangle 1506.png"
import italy from "../../../images/Italy card image.png"
import icland from "../../../images/Iceland card image.png"
import img1 from '../../../images/Rectangle 1504.png'
import img2 from '../../../images/Rectangle 1505.png'

function DiscoverVeiw() {
  return (
    <div className='discover-veiw component'>
        <p>Discover <span>the</span><img src={img1}/></p>
        <p>world <span>with</span> Us </p>
        <p><span>Travel</span> easy <span>via</span> app</p>
        <p><span>and</span> Exciting! <img src={img2}/></p>
        <div className='disc-imgs'>
            <div><img src={dubai} /></div>
            <div><img src={italy} /></div>
            <div><img src={icland} /></div>
        </div>
    </div>
  )
}

export default DiscoverVeiw