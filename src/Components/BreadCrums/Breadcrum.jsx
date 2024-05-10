import React from 'react'
import './Breadcrum.css'
import arrows_icon from '../Assets/breadcrum_arrow.png'

function Breadcrum(props) {
  const {product} = props;

  return (
    <div className='breadcrum'>
      HOME <img src={arrows_icon} alt="" /> SHOP <img src={arrows_icon} alt="" /> {product.category} <img src={arrows_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum