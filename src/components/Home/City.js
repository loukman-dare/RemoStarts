import React from 'react';
import iceland from '../../images/Iceland card image.png';
import dubai from '../../images/Dubai card image.png';
import italy from '../../images/Italy card image.png';
import patagonia from '../../images/Patagonia Card Image.png';

function City() {
  return (
    <div className='cities'>
      {/* Text section */}
      <div className='text m-auto'>
        <p>Join our adventures</p>
        <h3>Discover the world with us</h3>
      </div>

      {/* Cities Cards */}
      <div className='cities-cards d-flex gap-2 flex-wrap justify-content-around col-10 m-auto mt-5'>
        {/* Iceland Card */}
        <div className='city-card'>
          <img src={iceland} className='img-fluid' alt='Iceland' />
          <h3 className='city-name'>Iceland</h3>
          <p>Discover</p>
        </div>

        {/* Italy Card */}
        <div className='city-card'>
          <img src={italy} className='img-fluid' alt='Italy' />
          <h3 className='city-name'>Italy</h3>
          <p>Discover</p>
        </div>

        {/* Dubai Card */}
        <div className='city-card'>
          <img src={dubai} className='img-fluid' alt='Dubai' />
          <h3 className='city-name'>Dubai</h3>
          <p>Discover</p>
        </div>

        {/* Patagonia Card */}
        <div className='city-card'>
          <img src={patagonia} className='img-fluid' alt='Patagonia' />
          <h3 className='city-name'>Patagonia</h3>
          <p>Discover</p>
        </div>
      </div>
    </div>
  );
}

export default City;
