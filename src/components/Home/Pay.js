import React from 'react';
import amico from '../../images/amico.png';
import { useNavigate } from "react-router-dom";

function Pay() {
  const navigate = useNavigate();

  return (
    <div className='pay-section d-flex justify-content-around'>
      {/* Left Section */}
      <div className='left col-10 col-lg-6'>
        <div className='text-pay col-12'>
          <h3>Pay Your Bills Online</h3>
          <p>For shopping, groceries, restaurants, movie tickets booking, flight tickets booking, rent, tuition, utilities, loans</p>
          <p>Simple, Fast & Safe</p>
        </div>
        <div className='buttons-pay d-flex gap-5 col-11 flex-wrap'>
          <button className='col-12 col-lg-5'>Get Our App</button>
          <button className='col-12 col-lg-5' onClick={() => navigate("pay")}>Pay Online Now</button>
        </div>
      </div>

      {/* Right Section */}
      <div className='right col-5 d-none d-lg-block'>
        <img src={amico} className='img-fluid col-12 h-100' alt="Amico" />
      </div>
    </div>
  );
}

export default Pay;
