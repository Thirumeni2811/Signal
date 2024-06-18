import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className='contain'>
        <div className='dsgn'>
          <div className='copy'>
            <span>&copy; 2013 - 2024 Signal, a 501c3 nonprofit.</span>
            <p>"Signal", Signal logos, and other trademarks are trademarks or registered trademarks of Signal Technology Foundation in the United States and other countries <a href='/brand/'>(more info here)</a>.</p>
            <p>For media inquiries, contact <a href='/mail/'>press@signal.org</a></p>
          </div>
          <div className='organisation'>
            <strong>Organisation</strong>
            <ul>
              <li>Donate</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Brand Asstes</li>
              <li>Terms & Privacy Policy</li>
            </ul>
          </div>
          <div className='download'>
            <strong>Download</strong>
            <li>Android</li>
            <li>iPhone & iPad</li>
            <li>Windows</li>
            <li>Mac</li>
            <li>Linux</li>
          </div>
          <div className='social'>
            <strong>Social</strong>
            <li>GitHub</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </div>
          <div className='help'>
            <strong>Help</strong>
            <li>Support Center</li>
            <li>Community</li>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer