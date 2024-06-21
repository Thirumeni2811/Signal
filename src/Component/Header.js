import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import Logo from '../assets/Logo.png';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import world from '../assets/world.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import getSignal from './getSignal';

const Header = () => {
  return (
    <div id='signal'>
      {/* navbar */}
      <Navbar expand="xxl" className="container-fluid" id='signal-navbar' > 
        <Navbar.Brand href="#home" className='brand'> 
          <img src={Logo} width="150" height="50" alt="Logo" className='logo'/> 
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="ml-auto" id='navtitle'> 
            <Nav.Link href="#pick">Get Signal</Nav.Link> 
            <Nav.Link href="#suggest">Help</Nav.Link> 
            <Nav.Link href="#write">Blog</Nav.Link> 
            <Nav.Link href="#pick">Developers</Nav.Link> 
            <Nav.Link href="#suggest">Careers</Nav.Link> 
            <Nav.Link href="#write">Donate</Nav.Link> 
            <Nav.Link href="#pick">
              <img src={twitter} width="20px" height="20px" alt="Twitter" /> 
            </Nav.Link> 
            <Nav.Link href="#suggest">
              <img src={instagram} width="20px" height="20px" alt="Instagram" /> 
            </Nav.Link> 
            <Nav.Link href="#write" className="language-link">
              <img src={world} width="16px" height="16px" alt="Languages" /> 
              <span className="ml-auto eng"> English</span> 
            </Nav.Link> 
          </Nav> 
        </Navbar.Collapse> 
      </Navbar> 
    </div>
  );
}

export default Header;
