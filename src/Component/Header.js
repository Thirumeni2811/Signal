import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import Logo from '../assets/Logo.png';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import world from '../assets/world.svg';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (
    <div id='signal'>
      {/* navbar */}
      <Navbar expand="xxl" className="container-fluid" id='signal-navbar' > 
        <Navbar.Brand onClick={() => navigate ('/')} className='brand'> 
          <img src={Logo} width="150" height="50" alt="Logo" className='logo'/> 
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="ms-auto" id='navtitle'> 
            <Nav.Link onClick={() => navigate ('/get')}>Get Signal</Nav.Link> 
            <Nav.Link onClick={() => navigate ('/help')}>Help</Nav.Link> 
            <Nav.Link onClick={() => navigate ('/blog')}>Blog</Nav.Link> 
            <Nav.Link onClick={() => navigate ('/developer')}>Developers</Nav.Link> 
            <Nav.Link onClick={() => navigate ('/career')}>Careers</Nav.Link> 
            <Nav.Link onClick={() => navigate ('/donate')}>Donate</Nav.Link> 
            <Nav.Link href='https://x.com/signalapp' target="_blank" rel="noopener noreferrer">
              <img src={twitter} width="20px" height="20px" alt="Twitter" /> 
            </Nav.Link> 
            <Nav.Link href='https://www.instagram.com/signal_app/' target="_blank" rel="noopener noreferrer">
              <img src={instagram} width="20px" height="20px" alt="Instagram" /> 
            </Nav.Link> 
            <Nav.Link href="#write" className="language-link">
              <img src={world} width="16px" height="16px" alt="Languages" /> 
              <span className="ms-2 eng"> English</span> 
            </Nav.Link> 
          </Nav> 
        </Navbar.Collapse> 
      </Navbar> 
    </div>
  );
}

export default Header;
