import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
      <img data-aos='zoom-in-up' height='50px' style={{marginTop:'.15em',left:'0'}} src={require(`../../images/logo-complete.png`).default} id='logo-complete'/>
        <NavIcon onClick={toggle} style={{marginTop:'1.2em'}}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
