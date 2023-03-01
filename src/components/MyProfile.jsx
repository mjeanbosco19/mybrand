import React from 'react';

function MyProfile() {
  return (
    <aside className="profile-section">
      <div className="profile-content">
        <img className="profile-photo" src="./images/me.jpg" alt="" />
        <h1 className="profile-name">Jean Bosco Mugiraneza</h1>
        <span className="social-icons">
          <a href="https://www.linkedin.com/in/mjeanbosco19/"><img className="profile-social" src="/icons/linkedin.svg" alt="LinkedIn" /></a>
          <a href="https://twitter.com/mjeanbosco19"><img className="profile-social" src="/icons/twitter.svg" alt="Twitter" /></a>
          <a href="https://github.com/mjeanbosco19"><img className="profile-social" src="/icons/github.svg" alt="GitHub" /></a>
        </span>
          <a href="/docs/resume.PDF" download>
            <button className="downloadcv btn btn--primary">Download CV</button>
          </a>
        <a href="mailto:mjeanbosco19@gmail.com">
          <button className="sayhello btn btn--secondary">Say Hello 👋</button>
        </a>
        <p className="copyright">© {new Date().getFullYear()} Alright reserved</p>
      </div>
    </aside>
  );
}

export default MyProfile;
