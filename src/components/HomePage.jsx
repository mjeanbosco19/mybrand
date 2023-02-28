import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className="main-section">
      <section className="main-contents">
        <div className="myself">
          <h2 className="my-career">Hello 👋, My name is</h2>
          <h1 className="my-name">Jean Bosco Mugiraneza</h1>

          <div className="slider-wrapper">
            I am
            <div className="slider">
              <div className="slider-text">UI &amp; UX Designer</div>
              <div className="slider-text">Software Developer</div>
              <div className="slider-text">IT Specialist</div>
            </div>
          </div>
        </div>

        <div className="prev-next">
          <Link to="/">
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="/icons/prev.svg"
                alt=""
              />
            </span>
          </Link>
          <Link to="/about">
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="/icons/next.svg"
                alt=""
              />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
