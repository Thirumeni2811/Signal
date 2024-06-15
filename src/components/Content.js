import React from 'react';
import Iphone from '../assets/Iphone.png';
import Pixel from '../assets/Pixel.png';
import Media from '../assets/Media.png';
import Calls from '../assets/Calls.png';
import Sticker from '../assets/Stickers.png';
import Ad from '../assets/No-Ads.png';
import Group from '../assets/Groups.png';

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
          <div className='columns'>
            <div className="column">
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

      <section class='features'>
        <div class='container'>
          <div class='box'>
            <img src={Media} alt='Media' />
            <h3>Say Anything</h3>
            <p>Share text, voice messages, photos, videos, GIFs and files for free. Signal uses your phone's data connection so you can avoid SMS and MMS fees.</p>
          </div>
          <div class='box'>
            <img src={Calls} alt='Calls' />
            <h3>Speak Freely</h3>
            <p>Make crystal-clear voice and video calls to people who live across town, or across the ocean, with no long-distance charges.</p>
          </div>
          <div class='box'>
            <img src={Sticker} alt='Sticker' />
            <h3>Make Privacy Stick</h3>
            <p>Add a new layer of expression to your conversations with encrypted stickers. You can also create and share your own sticker packs.</p>
          </div>
          <div class='box'>
            <img src={Group} alt='Group' />
            <h3>Get Together with Groups</h3>
            <p class='group'>Group chats make it easy to stay connected to your family, friends, and coworkers.</p>
          </div>
        </div>
      </section>

      { /* Information */ }

      <section className='information'>
            <div className='container'>
              <div className='column'>
                <div className='left'>
                    <h2>No ads. No trackers. No kidding.</h2>
                    <p>There are no ads, no affiliate marketers, and no creepy tracking in Signal. So focus on sharing the moments that matter with the people who matter to you.</p>
                </div>
                <div className='right'>
                    <img src={Ad} alt='No ADs' />
                </div>
                </div>
            </div>
        </section>

    </>
  );
}

export default Content;
