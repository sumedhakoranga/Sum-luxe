import React from 'react'
import './Footer.css'
import linkedin_icon from '../Assets/linkedin_icon.png'
import github_icon from '../Assets/github_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <p>💥Sumélux</p>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <a href="https://www.linkedin.com/in/sumedhakoranga/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} alt='LinkedIn' style={{ width: '50px' }} />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://github.com/sumedhakoranga" target="_blank" rel="noopener noreferrer">
            <img src={github_icon} alt='LinkedIn' style={{ width: '50px' }} />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>No Copyright</p>
      </div>
    </div>
  )
}

export default Footer