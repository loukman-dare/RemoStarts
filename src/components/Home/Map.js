import React from 'react';
import map from "../../images/Map.png";
import profile from "../../images/unsplash_go2Z8RFJGw4.png";

function Map() {
  return (
    <div className='map-section col-12 d-flex ' id='about'>
      {/* Comments Section */}
      <div className='comments col-10 col-md-6 col-lg-5'>
        <p>See what <span>travelers</span> say about us</p>
        <div className='comment-container'>
          {/* Single Comment */}
          <div className='comment flex-column flex-md-row'>
            <img src={profile} className='m-xs-auto m-auto m-md-2 m-b-1' alt="Profile"/>
            <p>
              “But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth”
            </p>
          </div>
          <p className='user-name col-12'>” GINA AGASA, USA</p>
          {/* Slider Tools */}
          <div className='slider-tools d-flex'>
            <span></span>
            <span></span>
            <span className='active'></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className='map col-7 d-none d-sm-block'>
        <img src={map} alt="Map"/>
      </div>
    </div>
  );
}

export default Map;
