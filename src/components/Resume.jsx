import React from 'react';

function Resume() {
  return (
    <main className="main-section">
      <section className="main-contents">
        <h2 className="page-title">My Resume</h2>
        <div>
          <embed className="myresume" src="/docs/resume.PDF" width="100%" height="800px" type="application/pdf" />
        </div>
        <div className="prev-next">
          <a href="/about.html">
            <span className="icon-container">
              <img className="icon--menu icon--primary" src="/icons/prev.svg" alt="" />
            </span>
          </a>
          <a href="/portfolio.html">
            <span className="icon-container">
              <img className="icon--menu icon--primary" src="/icons/next.svg" alt="" />
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Resume;
