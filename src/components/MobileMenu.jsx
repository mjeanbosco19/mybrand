import React from 'react';
import { NavLink } from 'react-router-dom';

function MobileMenu(props) {
  const closeMobileMenu = () => {
    props.onCloseMobileMenu();
  };

  return (
    <div id="mobileMenu" className="menu-mobile">
      <div className="mobile-panel"></div>
      <div className="mobile-sidebar">
        <div>
          <button className="close-panel" onClick={closeMobileMenu}>
            <img className="close-icon" src="/icons/close.svg" alt="" />
          </button>
        </div>
        <div className="mobile-nav">
          <div className="mobile-logo">
            <img className="sm-logo" src="/assets/logo.svg" alt="mobile-logo" />
          </div>
          <div className="mobile-menu-items">
            {props.children}
            <NavLink to="/" className="menu-mobile-item" onClick={closeMobileMenu}>
              <img className="menu-mobile-icon" src="../icons/home.svg" alt="" />
              Home
            </NavLink>
            <NavLink to="/about-me" className="menu-mobile-item" onClick={closeMobileMenu}>
              <img className="menu-mobile-icon" src="/icons/user.svg" alt="" />
              About Me
            </NavLink>
            <NavLink to="/resume" className="menu-mobile-item" onClick={closeMobileMenu}>
              <img className="menu-mobile-icon" src="/icons/award.svg" alt="" />
              Resume
            </NavLink>
            <NavLink to="/blogs" className="menu-mobile-item" onClick={closeMobileMenu}>
              <img className="menu-mobile-icon" src="/icons/box.svg" alt="" />
              Blog
            </NavLink>
            <NavLink to="/contact" className="menu-mobile-item" onClick={closeMobileMenu}>
              <img className="menu-mobile-icon" src="/icons/email.svg" alt="" />
              Contact Me
            </NavLink>
            <NavLink to="/login" className="menu-mobile-item" onClick={closeMobileMenu}>
              <img className="menu-mobile-icon" src="/icons/lock.svg" alt="" />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
