import React from 'react'
import './Career.css'
import Girl from '../assets/header-careers.png'
import Eye from '../assets/eye-slash.svg'
import User from '../assets/users.svg'
import Dollar from '../assets/dollar.svg'
import Work from '../assets/globe-americas.svg'
import Open from '../assets/code.svg'
import Profit from '../assets/solid_certificate.svg'
const Career = () => {
  return (
    <>
    {/* Head */}
      <section className='career' id='career'>
          <div className='contains'>
              <div className='leftSide'>
                  <h1>Work that sends a message</h1>
                  <p>Millions of people use Signal every day to share the moments that matter in their lives. Join an organization that empowers users by making private communication simple.</p>
              </div>
              <div className='rightSide'>
                  <img src={Girl} alt='Girl'/>
              </div>
          </div>
      </section>

    {/* Grid make */}
      <section className='grid-make'>
        <div className='container'>
          <div className='box'>
            <img src={Eye} alt='Eye' />
            <h3>Privacy First</h3>
            <p>We solve problems that matter and develop technology that respects our users. Targeted advertising isn't our style. We don't collect anything except more sleep at night.</p>
          </div>
          <div className='box'>
            <img src={User} alt='User' />
            <h3>Small Team</h3>
            <p>Have an immediate impact. Signal is an opportunity to do original work and closely collaborate without the overhead of endless meetings.</p>
          </div>
          <div className='box'>
            <img src={Dollar} alt='Dollar' />
            <h3>Competitive Compensation</h3>
            <p>Healthcare premiums are fully covered for you and your family. Our 401(k) plan matches 100% of your contribution up to $20,500.</p>
          </div>
          <div className='box'>
            <img src={Work} alt='Work' />
            <h3>Work Remotely</h3>
            <p>Skip the commute. Work from home or take advantage of our co-working space subsidy. Focus on what drives you, not driving.</p>
          </div>
          <div className='box'>
            <img src={Open} alt='Open' />
            <h3>Open Source</h3>
            <p>Everything we produce is open source. Every time we write code, we get to share it with the world.</p>
          </div>
          <div className='box'>
            <img src={Profit} alt='Profit' />
            <h3>Nonprofit</h3>
            <p>Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.</p>
          </div>
        </div>
      </section>

    {/* Open Role */}
    <section className='openRole'>
      <div className='job-container'>
        <h2>Open Role</h2>
      </div>
      <div className='jobRole-container'>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Product Designer</strong>
              </td>
              <td>Remote (US Timezones)</td>
              <td>
                <a href="#career">View Role</a>
              </td>
            </tr>
            <tr className='tableSecond'>
              <td>
                <strong>Product Manager</strong>
              </td>
              <td>Remote (US Timezones)</td>
              <td>
                <a href="#career">View Role</a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Desktop Engineer</strong>
              </td>
              <td>Remote (US Timezones)</td>
              <td>
                <a href="#career">View Role</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='content-container'>
        <p>Sorry, we are not seeking interns at this time.</p>
      </div>

    </section>

    </>
  )
}

export default Career