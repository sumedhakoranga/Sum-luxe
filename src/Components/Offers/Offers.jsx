import React from 'react'
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';


function Offers() {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Summer</h1>
        <h1>Colection is HERE</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt='' />
      </div>
    </div>
  )
}

export default Offers
