import React from 'react';
import logo from "../../images/logo.png";
import dubai from "../../images/image 5.png";
import extra from "../../images/image 5 (1).png";
import visa from "../../images/credit-card.png";
import stripe from "../../images/credit-card (1).png";
import paypal from "../../images/credit-card (2).png";
import master from "../../images/credit-card (3).png";
import gPay from "../../images/credit-card (4).png";
import { useNavigate } from "react-router-dom";

function Pay() {
  const navigate = useNavigate();

  return (
    <div className='pay d-flex justify-content-between'>
      <div className='left-pay'>
        <div className='logo-pay'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='packages'>
          <h2>Package Travel</h2>
          <div className='package d-flex justify-content-between'>
            <div className='img-package col-5'>
              <img src={dubai} className='img-fluid' alt="Dubai" />
            </div>
            <div className='text-package col-6'>
              <h5>Dubai</h5>
              <div><p>adult</p> <p>3</p></div>
              <div><p>star</p><p>4</p></div>
              <div><p>total price</p> <p>$250</p></div>
            </div>
          </div>
          <div className='package d-flex justify-content-between'>
            <div className='img-package col-5'>
              <img src={extra} className='img-fluid' alt="Extra" />
            </div>
            <div className='text-package col-6'>
              <h5>extra</h5>
              <div><p>booking hotel</p> <p>3</p></div>
              <div><p>rooms</p><p>1</p></div>
              <div><p>total price</p> <p>$50</p></div>
            </div>
          </div>
        </div>
        <div className='tail-pay'>
          <p>Total bill</p>
          <p>$300/-</p>
        </div>
      </div>
      <div className='right-pay'>
        <h2>Complete your order</h2>
        <form className='personal-details'>
          <h2>Personal Details</h2>
          <div className='f-name col-6'>
            <label>First name</label>
            <input type='text' placeholder='Enter your first name' />
          </div>
          <div className='l-name col-6'>
            <label>Last name</label>
            <input type='text' placeholder='Enter your last name' />
          </div>
          <div className='email col-6'>
            <label>Email</label>
            <input type='text' placeholder='Enter your Email' />
          </div>
          <div className='phone col-6'>
            <label>Phone number</label>
            <input type='text' placeholder='Enter your phone number' />
          </div>
        </form>
        <form className='pay-details col-12'>
          <h2 className='col-12'>Payment Details</h2>
          <div className='methods-pay col-12 gap-1 flex-wrap'>
            <img src={visa} alt="Visa" />
            <img src={stripe} alt="Stripe" />
            <img src={paypal} alt="Paypal" />
            <img src={master} alt="Mastercard" />
            <img src={gPay} alt="Google Pay" />
          </div>
          <div className='card-name col-6'>
            <label>Card holder name</label>
            <input type='text' placeholder='Enter your Card holder name' />
          </div>
          <div className='card-number col-6'>
            <label>Card number</label>
            <input type='text' placeholder='Enter your Card number' />
          </div>
          <div className='cvv col-6'>
            <label>CVV</label>
            <input type='text' placeholder='Example 4567' />
          </div>
          <div className='experation-date col-6'>
            <label>Expiration Date</label>
            <input type='text' placeholder='MM/YY' />
          </div>
        </form>
        <form className='shipping col-12'>
          <h2>Shipping Address</h2>

          <div className='address1 col-12'>
            <label className='col-12'>Address line 1</label>
            <input type='text' className='col-12' placeholder='Your Complete address' />
          </div>
          <div className='city col-6'>
            <label>City</label>
            <input type='text' placeholder='Your city' />
          </div>
          <div className='state col-6'>
            <label>State</label>
            <input type='text' placeholder='Your state' />
          </div>
          <div className='landmark col-6'>
            <label>Landmark</label>
            <input type='text' placeholder='Any landmark (famous place or mall)' />
          </div>
          <div className='postal col-6'>
            <label>Postal code</label>
            <input type='text' placeholder='ZIP Code (231216)' />
          </div>
        </form>
        <div className='buttons d-flex justify-content-between flex-wrap'>
          <button onClick={() => navigate("/")}>cancel</button>
          <button>complete purchase</button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
