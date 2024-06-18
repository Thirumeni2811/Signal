import React from 'react';
import Iphone from '../assets/Iphone.png';
import Pixel from '../assets/Pixel.png';
import Media from '../assets/Media.png';
import Calls from '../assets/Calls.png';
import Sticker from '../assets/Stickers.png';
import Ad from '../assets/No-Ads.png';
import Free from '../assets/Nonprofit503.png';
import Group from '../assets/Groups.png';

import './Content.css'; 

const HeroSection = () => (
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
);

const UsesSection = () => (
  <section className="uses-main uses">
    <div className='container'>
      <div className='columns'>
        <div className="column">
          <h2>Why use Signal?</h2>
          <p className='body'>Explore below to see why Signal is a simple, powerful, and secure messenger</p>
        </div>
      </div>
    </div>
  </section>
);

const ShareSection = () => (
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
);

const FeatureBox = ({ imgSrc, title, description }) => (
  <div className='box'>
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section className='features'>
    <div className='container'>
      <FeatureBox imgSrc={Media} title="Say Anything" description="Share text, voice messages, photos, videos, GIFs and files for free. Signal uses your phone's data connection so you can avoid SMS and MMS fees." />
      <FeatureBox imgSrc={Calls} title="Speak Freely" description="Make crystal-clear voice and video calls to people who live across town, or across the ocean, with no long-distance charges." />
      <FeatureBox imgSrc={Sticker} title="Make Privacy Stick" description="Add a new layer of expression to your conversations with encrypted stickers. You can also create and share your own sticker packs." />
      <FeatureBox imgSrc={Group} title="Get Together with Groups" description="Group chats make it easy to stay connected to your family, friends, and coworkers." />
    </div>
  </section>
);

const InformationSection = () => (
  <section className='information'>
    <div className='container'>
      <div className='left'>
        <h2>No ads. No trackers. No kidding.</h2>
        <p>There are no ads, no affiliate marketers, and no creepy tracking in Signal. So focus on sharing the moments that matter with the people who matter to you.</p>
      </div>
      <div className='right'>
        <img src={Ad} alt='No ADs' />
      </div>
    </div>
  </section>
);

const FreeSection = () => (
  <section className='freeuses'>
    <div className='container'>
      <div className='free-img'>
        <img src={Free} alt='Free'/>
      </div>
      <div className='free-cnt'>
        <h2>Free for Everyone</h2>
        <p>Signal is an independent nonprofit. We're not tied to any major tech companies, and we can never be acquired by one either. Development is supported by grants and donations from people like you.</p>
        <p>
          <a className="Donate to Signal button button-white" href="/Donate/"> Donate to Signal </a>
        </p>
      </div>
    </div>
  </section>
);

const Content = () => {
  return (
    <div className='Home-Content'>
      <HeroSection />
      <UsesSection />
      <ShareSection />
      <FeaturesSection />
      <InformationSection />
      <FreeSection />
    </div>
  );
}

export default Content;
