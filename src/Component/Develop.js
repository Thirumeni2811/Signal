import React from 'react'
import Rocket from '../assets/Rocket.png'
import './Develop.css'
const Develop = () => {
  return (
    <>
    {/* Head */}
    <section className='develop'>
        <div className='containers'>
        <div className='leftText'>
            <h1>Technical information</h1>
            <p>Specifications and software libraries for developers</p>
        </div>
        <div className='rightImg'>
            <img src={Rocket} alt='Developer' />
        </div>
        </div>
    </section>

    {/* Specifiaction */}
    <section className='specification'> 
        <div className='specContainer'>
            <div className='Spec'>
                <h2>Specifications</h2>
                <p>Encryption in messaging environments integrates many ideas which often need to be composed separately in different applications. We make an effort to break out ideas into independent specifications so that they can be integrated as appropriate for different projects.</p>
            </div>
        </div>
        <div className='specContainer2'>
          <div className='box box1'>
            <a href='#'>XEdDSA and VXEdDSA</a>
            <p>This document describes how to create and verify EdDSA-compatible signatures using public key and private key formats initially defined for the X25519 and X448 elliptic curve Diffie-Hellman functions. This document also describes "VXEdDSA" which extends XEdDSA to make it a verifiable random function, or VRF.</p>
          </div>
          <div className='box box3'>
            <a href='#'>X3DH</a>
            <p>This document describes the "X3DH" (or "Extended Triple Diffie-Hellman") key agreement protocol. X3DH establishes a shared secret key between two parties who mutually authenticate each other based on public keys. X3DH provides forward secrecy and cryptographic deniability.</p>
          </div>
          <div className='box box4'>
            <a href='#'>Sesame</a>
            <p>This document describes the Sesame algorithm for managing message encryption sessions in an asynchronous and multi-device setting.Sesame was designed to manage Double Ratchet sessions created with X3DH key agreement . However, Sesame is a generic algorithm works with any session-based message encryption algorithm meets certain conditions.Ratcheting algorithms like the Double Ratchet allow these two parties to update session keys as they communicate, for forward secrecy .</p>
          </div>
          <div className='box box5'>
            <a href='#'>PQXDH</a>
            <p>This document describes the "PQXDH" (or "Post-Quantum Extended Diffie-Hellman") key agreement protocol. PQXDH establishes a shared secret key between two parties who mutually authenticate each other based on public keys. PQXDH provides post-quantum forward secrecy and a form of cryptographic deniability but still relies on the hardness of the discrete log problem for mutual authentication in this revision of the protocol.</p>
          </div>
          <div className='box box2'>
            <a href='#'>Double Ratchet</a>
            <p>This document describes the Double Ratchet algorithm, which is used by two parties to exchange encrypted messages based on a shared secret key. The parties derive new keys for every Double Ratchet message so that earlier keys cannot be calculated from later ones. The parties also send Diffie-Hellman public values attached to their messages. The results of Diffie-Hellman calculations are mixed into the derived keys so that later keys cannot be calculated from earlier ones. These properties give some protection to earlier or later encrypted messages in case of a compromise of a party's keys.</p>
          </div>
        </div>
    </section>

    {/* Foot */}
    <section className='lib'>
        <div className='swLib'>
            <h2>Software libraries</h2>
            <a href='https://github.com/signalapp/libsignal'>Signal Protocol library</a>
            </div>
    </section>
    </>
  )
}

export default Develop