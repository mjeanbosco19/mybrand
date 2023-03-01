import React from 'react';

const Portfolio = () => {
  return (
    <main className="main-section">
      <section className="main-contents">
        <h2 className="page-title">My Work</h2>
        <section className="block container">
          <header className="block__header">
            <h2 className="block__heading">Proud projects that make me stand out</h2>
            <p>                        Grow Your Business by
                        Developing Your Software or a Website with Us.</p>
          </header>
          <article className="grid grid--1x2 feature">
            <div className="feature__content" data-aos="fade-right">
              <span className="icon-container">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#easy"></use>
                </svg>
              </span>
              <h3 className="feature__heading">Music App</h3>
              <p>"                            Good design is good business."
                            The success of every digital product company is measured by its user interface (UI) and user
                            experience (UX) design. The
                            digital product we created must assist users in achieving their objectives by delivering a
                            delightful user experience
                            through human-centered design solutions."</p>
              <a
                href="https://www.figma.com/file/SNRQkfnOInmFPY0tg4T4fx/Music-App?node-id=0%3A1&t=Awncb0yJ3biRfJWC-1"
                target="_blank"
                className="btn btn--outline btn--learnmore link-arrow"
              >
                Learn More
              </a>
            </div>
            <img src="images/musicapp.jpg" alt="" />
          </article>
          <article className="grid grid--1x2 feature">
            <div className="feature__content" data-aos="fade-right">
              <span className="icon-container">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#easy"></use>
                </svg>
              </span>
              <h3 className="feature__heading">My Personal Website</h3>
              <p>                            "Good design is good business."
                            The success of every digital product company is measured by its user interface (UI) and user
                            experience (UX) design. The
                            digital product we created must assist users in achieving their objectives by delivering a
                            delightful user experience
                            through human-centered design solutions.</p>
              <a
                href="https://mjbosco.netlify.app/"
                target="_blank"
                className="btn btn--outline btn--learnmore link-arrow"
              >
                Learn More
              </a>
            </div>
            <img src="images/aboutme.jpg" alt="" />
          </article>
          <article className="grid grid--1x2 feature">
            <div className="feature__content" data-aos="fade-up">
              <span className="icon-container">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#computer"></use>
                </svg>
              </span>
              <h3 className="feature__heading">Tubimenye Ltd</h3>
              <p>                            Choosing the right software development company in order to have your dreams achieved and
                            success for your internet
                            product can be a difficult task. Here we make sure that you have made the best decision for
                            your project to start with
                            and shape the product as you imagine. Because we make it simple.</p>
              <a
                href="https://tubimenye.rw/"
                target="_blank"
                className="btn btn--outline btn--learnmore link-arrow"
              >
                Learn More
              </a>
            </div>
            <img src="images/tubimenye.webp" alt="" />
          </article>
          <article className="grid grid--1x2 feature">
            <div className="feature__content" data-aos="fade-up">
              <span className="icon-container">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#computer"></use>
                </svg>
              </span>
              <h3 className="feature__heading">Likeadoctor Ltd Website</h3>
              <p>                            Choosing the right software development company in order to have your dreams achieved and
                            success for your internet
                            product can be a difficult task. Here we make sure that you have made the best decision for
                            your project to start with
                            and shape the product as you imagine. Because we make it simple.</p>
              <a
                href="https://likeadoctor.rw/"
                target="_blank"
                className="btn btn--outline btn--learnmore link-arrow"
>
Learn More
</a>
</div>
<img src="images/likeadoctor.png" alt="" />
</article>
        <article className="grid grid--1x2 feature">
          <div className="feature__content" data-aos="fade-up">
            <span className="icon-container">
              <svg className="icon icon--primary">
                <use href="images/sprite.svg#wordpress" />
              </svg>
            </span>
            <h3 className="feature__heading">YegoGate Careers Community</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              obcaecati vel ad unde est illo at. Labore excepturi officia dolores! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quam
              obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
            </p>
            <a href="https://www.yegogate.com/" target="_blank" className="btn btn--outline btn--learnmore link-arrow">Learn More</a>
          </div>
          <img src="images/yegogate.jpg" alt="" />
        </article>
        <article className="grid grid--1x2 feature">
          <div className="feature__content" data-aos="fade-left">
            <span className="icon-container">
              <svg className="icon icon--primary">
                <use href="images/sprite.svg#clock" />
              </svg>
            </span>
            <h3 className="feature__heading">JavaScript Certificate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
            </p>
            <a href="https://freecodecamp.org/certification/mjeanbosco19/javascript-algorithms-and-data-structures" target="_blank" className="btn btn--outline btn--learnmore link-arrow">Learn More</a>
          </div>
          <img src="images/jscertificate.jpg" alt="" />
        </article>
</section>
</section>
</main>
);
};

export default Portfolio;
