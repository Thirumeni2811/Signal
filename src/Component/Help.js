import React from 'react'
import './Help.css'
const Help = () => {
  return (
    <>
        <section className='helpSec'>
            <div className='main'>
                <h1>How can we help ?</h1>
                <div className='search-container'>
                    <input type='text' className='search-input' placeholder='Search'/>
                </div>
            </div>
        </section>

        <section className='helpGrid'>
            <div className='helpContainer'>
                <div className='helpGridbox'>
                    <div className='gridAdj'>
                        <div className='gridItems'>
                            <h3>Getting Started</h3>
                            <p>Understand the basics of Signal on Android, iOS, and Desktop.</p>
                        </div>
                    </div>
                    <div className='gridAdj'>
                        <div className='gridItems'>
                            <h3>Features</h3>
                            <p>Explore rich features of private messaging.</p>
                        </div>
                    </div>
                    <div className='gridAdj'>
                        <div className='gridItems'>
                            <h3>Security</h3>
                            <p>This section contains common questions regarding safety and reliability of the technology the apps.</p>
                        </div>
                    </div>
                    <div className='gridAdj'>
                        <div className='gridItems'>
                            <h3>Troubleshooting</h3>
                        </div>
                    </div>
                    <div className='gridAdj'>
                        <div className='gridItems'>
                            <h3>General</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='helpFooter'>
            <div className='footerContent'>
                <p>Signal is committed to your privacy. Signal runs on donations as a nonprofit. <a href="#">Donate here!</a></p>
            </div>
        </section>
    </>
  )
}

export default Help