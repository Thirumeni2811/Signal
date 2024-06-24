import React from 'react'
import './Signal.css'
import Mobile from '../assets/Mobile.png'
import Desktop from '../assets/Desktop.png'

const Signal = () => {
  return (
    <section className='sig'>
        <div className='contain'>
            <div className='mobile'>
                <div className='topic'>
                  <h2>Signal for Mobile</h2>
                </div>
                <div className='img-pad'>
                  <div className='img'>
                    <img src={Mobile} alt='Mobile'/>
                  </div>
                </div>
                <div className='button-align'>
                  <a className="button-img" href="/download/"> Android </a>
                  <a className="button-img" href="/download/"> iPhone or iPad </a>
                </div>
                <div className='install'>
                  <p>Or visit <a href='https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms'>signal.org/install</a> from your phone</p>
                </div>
            </div>
            <div className='desktop'>
                <div className='topic'>
                  <h2>Signal for Desktop</h2>
                </div>
                <div className='img-pad'>
                  <div className='img'>
                    <img src={Desktop} alt='Desktop'/>
                  </div>
                </div>
                <div className='button-align'>
                <a className="button-img" href="/download/"> Download for Windows </a>
                </div>
                <div className='install'>
                  <p>To use the Signal desktop app, Signal must first be installed on your phone.</p>
                  <h3>Not on Windows ?</h3>
                  <ul>
                    <li><a href="#">Signal for Mac</a></li>
                    <li><a href="#" className='linux'>Signal for Linux - Debian - based distros</a></li>
                  </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signal