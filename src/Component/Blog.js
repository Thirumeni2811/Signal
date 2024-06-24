import React from 'react';
import './Blog.css';
import Signal from '../assets/signalapp.png';
import Phone from '../assets/user-phone.png';
import Lady from '../assets/lady.jpeg'
import Clothes from '../assets/clothes4.png'
import Money from '../assets/rupee.jpg'

const blogContent = () => {
  return (
    <section className='blogContent'>
      <div className='contain'>
        <div className='columns'>
          <div className='columnBlog'>
            <div className='blog'>
              <div className='prof'>
                <img src={Signal} alt='Signal' />
                <h3>Keep your phone number private with Signal usernames</h3>
                <p className='body7'><a href='https://github.com/signalapp'>Signal</a> on 20 Feb 2024</p>
              </div>
              <div className='blogInfo'>
                <img src={Phone} alt='Phone'/>
                <p>Signal’s mission and sole focus is private communication. For years, Signal has kept your messages private, your profile information (like your name and profile photo) private, your contacts private, and your groups private – among much else. Now we’re taking that one step further, by making your phone number on Signal more private.</p>
                <div className='feet'>
                  <p>Here's how : </p>
                  <a href="#">Read more..</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='columns'>
          <div className='columnBlog'>
            <div className='blog'>
              <div className='prof'>
                <img src={Lady} alt='Signal' />
                <h3>Trend report: Use Signal</h3>
                <p className='body7'><a href='https://github.com/nina-signal'>nina-signal</a> on 13 Dec 2023</p>
              </div>
              <div className='blogInfo'>
                <p>New long-sleeve shirts and tote bags fresh from the Signal test kitchen:</p>
                <img src={Clothes} alt='Phone'/>
                <p>We build Signal for people all over the world. So, of course we wanted to reflect that same global outlook in our merch.</p>
                <p>To make these shirts and totes, some multilingual friends of Signal helped us get the Cantonese phrasing just right.</p>
                <div className='feet'>
                  <p>Here's how : </p>
                  <a href="#">Read more..</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='columns'>
          <div className='columnBlog'>
            <div className='blog'>
              <div className='prof'>
                <img src={Signal} alt='Signal' />
                <h3>Privacy is Priceless, but Signal is Expensive</h3>
                <p className='body7'>
                  <a href='https://github.com/meredith-signal'>Meredith Whittaker</a>
                  <span> and </span>
                  <a href='https://github.com/jlund'>Joshua Lund</a>
                  <span> on 16 Nov 2023</span>
                </p>
              </div>
              <div className='blogInfo'>
                <img src={Money} alt='Phone'/>
                <p>Signal is the world’s most widely used truly private messaging app, and our cryptographic technologies provide extra layers of privacy beyond the Signal app itself. Since launching in 2013, the Signal Protocol—our end-to-end encryption technology—has become the de facto standard for private communication, protecting the contents of billions of conversations in WhatsApp, Google Messages, and many others. Signal also continues to invest in research and development in the pursuit of extending communications privacy. This commitment underlies our recent work to add a layer of <a href="#">quantum resistance</a> to the Signal Protocol, and our previous work on <a href="#">metadata protection technologies</a> that help keep personal details like your <a href="#">contact list, group membership, profile name</a>, and other intimate information secure.</p>
                <div className='feet'>
                  <a href="#">Read more..</a>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default blogContent;
