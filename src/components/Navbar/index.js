import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  Times,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { Link } from 'react-router-dom'

function Navbar () {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [logged, setLogged] = useState(false);

  const logout = () => {
    window.sessionStorage.removeItem('email');
    window.sessionStorage.removeItem('name');
    window.sessionStorage.removeItem('position');
    setLogged(!logged);
  };

  return (
    <>
      <Nav>
        <NavLink to='/'>
          Logo
        </NavLink>
        <div onClick={handleClick}>
          {click? <Bars/> : <Times/>}
        </div>
        <NavMenu>
          <NavLink to='/notice' activeStyle>
            Notice
          </NavLink>
          <NavLink to='/history' activeStyle>
            History
          </NavLink>
          <NavLink to='/faq' activeStyle>
            FAQ
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/application' activeStyle>
            Application
          </NavLink>
            {(window.sessionStorage.getItem('name')===null)? <NavBtnLink to='/login' activeStyle>Login</NavBtnLink>:
            <NavBtnLink to='/' onClick={logout} activeStyle>LogOut</NavBtnLink>}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;