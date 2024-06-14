import React from 'react';
import Iphone from '../assets/Iphone.png';
import Pixel from '../assets/Pixel.png';
import './Content.css'; 

const Content = () => {
  return (
    <>
      {/* Hero Section */}

      <section className="hero-main hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns"> 
              <div className="column is-two-fifths">
                <h1>Speak Freely</h1>
                <p className="body1">
                  Say "hello" to a different messaging experience. An unexpected focus on privacy, combined with all of the features you expect.
                </p>
                <p>
                  <a className="get-signal button button-white" href="/download/"> Get Signal </a>
                </p>
              </div>
              <div className="column mobile-img">
                <img className="img1" src={Iphone} alt='Iphone' />
                <img className="img2" src={Pixel} alt='Pixel' />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Uses section */}

      <section className="uses-main uses">
        <div className='container'>
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <h2>Why use Signal ?</h2>
              <p className='body'>Explore below to see why Signal is a simple, powerful, and secure messenger</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share without Insecurity */}

      <section className='share'>
        <div>
          <div className="columns">
            <div className='left'>
               <h2>Share Without Insecurity</h2>
               <p>State-of-the-art end-to-end encryption (powered by the open source Signal Protocol) keeps your conversations secure. We can't read your messages or listen to your calls, and no one else can either. Privacy isn’t an optional mode — it’s just the way that Signal works. Every message, every call, every time.</p>
            </div>
            <div className='right'>
              <div className='right-content'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pic Information */}

      <section className='features'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div className='box'>
                <img/>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Content;
