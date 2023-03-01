import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function DesktopMenu(props) {
  const location = useLocation();

  return (
    <div className="menu-desktop">
      <div className="menu-sidebar">
        {/* <div className="logo-desktop">
          <img className="lg-logo" src="#mylogo" alt="My Logo" />
        </div> */}
        <div className="menu-desktop-items">
          <Link to="/" className={`menu-items ${location.pathname === '/' ? 'active' : ''}`}>
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="../icons/home.svg"
                alt="Home"
              />
            </span>
            <span>Home</span>
          </Link>

          <Link to="/about" className={`menu-items ${location.pathname === '/about' ? 'active' : ''}`}>
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="/icons/user.svg"
                alt="About"
              />
            </span>
            <span>About</span>
          </Link>

          <Link to="/resume" className={`menu-items ${location.pathname === '/resume' ? 'active' : ''}`}>
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="/icons/award.svg"
                alt="Resume"
              />
            </span>
            <span>Resume</span>
          </Link>

          <Link to="/portfolio" className={`menu-items ${location.pathname === '/portfolio' ? 'active' : ''}`}>
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="/icons/image.svg"
                alt="Portfolio"
              />
            </span>
            <span>Portfolio</span>
          </Link>

          <Link to="/blogs" className={`menu-items ${location.pathname === '/blog' ? 'active' : ''}`}>
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="/icons/box.svg"
                alt="Blog"
              />
            </span>
            <span>Blog</span>
          </Link>

          <Link to="/contact" className={`menu-items ${location.pathname === '/contact' ? 'active' : ''}`}>
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="/icons/email.svg"
                alt="Contact"
              />
            </span>
            <span>Contact</span>
          </Link>

          {props.children}
        </div>
      </div>
    </div>
  );
}

export default DesktopMenu;
