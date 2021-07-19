import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { GoX } from "react-icons/go";
import { Button } from "./Button";
import logo from "../../images/몰입캠프_검정.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [home, setHome] = useState(true);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbar ? "navbar" : "navbar active"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" width="80" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <GoX /> : <FiMenu />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/notice"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Notice
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/faq" className="nav-links" onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/application"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Application
              </Link>
            </li>
            <li className="nav-item-signup">
              <Link
                to="/sign-in"
                className="nav-links-signup"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
