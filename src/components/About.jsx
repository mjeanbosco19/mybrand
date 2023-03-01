import React from 'react';

function About() {
  return (
    <main className="main-section">
      <section className="main-contents">
        {/* <h2 class="page-title">About Me</h2> */}
        <section className="about block block--dark block--skewed-left hero">
          <div className="container grid grid--1x2">
            <header className="block__header hero__content">
              <h1 data-aos="zoom-in-up" className="block__heading">
                I am a software developer
              </h1>
              <p className="hero__tagline">
                I provide the Best and Easiest Technological Solutions for The
                Most Complex Problems. Creating long-lasting innovation that
                matters—for me and the world—is an integral part of my DNA.
              </p>
              <a
                target="_blank"
                href="#"
                className="btn btn--primary btn--stretched btn--hireme"
              >
                Hire me
              </a>
            </header>
            <img src="images/computer.webp" alt="" />
          </div>
        </section>
        <section>
          <header className="block__header">
            <h2 className="block__heading">My Skills</h2>
            <p>What Technology I Use For My Beloved Clients</p>
          </header>
          <div className="grid myskills">
            <div className="myskills-item">
              <img src="/icons/html.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/css.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/js.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/tailwind.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/bootstrap.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/sass.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/php.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/laravel.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/mysql.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/nodejs.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/angular.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/reactjs.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/vuejs.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/java.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/figma.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/photoshop.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/wordpress.svg" alt="" />
            </div>
            <div className="myskills-item">
              <img src="/icons/woo.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="block container">
          <header className="block__header">
            <h2 className="block__heading">Featured Services</h2>
            <p>
              Grow Your Business by Developing Your Software or a Website with
              Us.
            </p>
          </header>
          <article className="grid grid--1x2 feature">
            <div className="feature__content" data-aos="fade-right">
              <span className="icon-container">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#easy" />
                </svg>
              </span>
              <h3 className="feature__heading">UI &amp; UX Design</h3>
              <p>
                "Good design is good business." The success of every digital
                product company is measured by its user interface (UI) and user
                experience (UX) design. The digital product we created must
                assist users in achieving their objectives by delivering a
                delightful user experience through human-centered design
                solutions.
              </p>
              <a
                href="#"
                target="_blank"
                className="btn btn--outline btn--learnmore link-arrow"
              >
                Learn More
              </a>
            </div>
            <img src="images/design.png" alt="" />
          </article>
          <article className="grid grid--1x2 feature">
            <div className="feature__content" data-aos="fade-up">
              <span className="icon-container">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#computer" />
                </svg>
              </span>
              <h3 className="feature__heading">Simply Fast Websites</h3>
              <p>
                Choosing the right software development company in order to have
                your dreams achieved and success for your internet product can
                be a difficult task. Here we make sure that you have made the
                best decision for your project to start with and shape the
                product as you imagine. Because we make it simple.
              </p>
              <a
                href="#"
                target="_blank"
                className="btn btn--outline btn--learnmore link-arrow"
              >
                Learn More
              </a>
            </div>
            <img src="images/banner.png" alt="" />
          </article>
          <article className="grid grid--1x2 feature">
            <div className="feature__content" data-aos="fade-up">
              <span className="icon-container">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#wordpress" />
                </svg>
              </span>
              <h3 className="feature__heading">Wordpress Made Easy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                obcaecati vel ad unde est illo at. Labore excepturi officia
                dolores! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quam obcaecati vel ad unde est illo at. Labore excepturi
                officia dolores!
              </p>
              <a
                href="#"
                target="_blank"
                className="btn btn--outline btn--learnmore link-arrow"
              >
                Learn More
              </a>
            </div>
            <img src="images/wordpress.jpg" alt="" />
          </article>
          <article className="grid grid--1x2 feature">
            <div className="feature__content" data-aos="fade-left">
              <span className="icon-container">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#clock" />
                </svg>
              </span>
              <h3 className="feature__heading">24/7 Expert Support</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                obcaecati vel ad unde est illo at. Labore excepturi officia
                dolores!
              </p>
              <a
                href="#"
                target="_blank"
                className="btn btn--outline btn--learnmore link-arrow"
              >
                Learn More
              </a>
            </div>
            <img src="images/support.jpg" alt="" />
          </article>
        </section>
        <section data-aos="fade-up" className="block container block-plans">
          <div className="grid grid--1x3">
            <div className="plan">
              <div className="card card--secondary">
                <header className="card__header">
                  <h3 className="plan__name">Website</h3>
                  <span className="plan__price">$150</span>
                  <span className="badge badge--primary badge--small">
                    20% OFF
                  </span>
                </header>
                <div className="card__body">
                  <ul className="list list--tick">
                    <li className="list__item">Product mockups</li>
                    <li className="list__item">Up to 10 pages website</li>
                    <li className="list__item">SEO</li>
                    <li className="list__item">24/7/365 Tech Support</li>
                  </ul>
                  <button className="btn btn--outline btn--block">
                    Order now
                  </button>
                </div>
              </div>
            </div>
            <div className="plan plan--popular">
              <div className="card card--primary">
                <header className="card__header">
                  <h3 className="plan__name">Web Platform</h3>
                  <span className="plan__price">$540</span>
                  <span className="badge badge--secondary badge--small">
                    10% OFF
                  </span>
                </header>
                <div className="card__body">
                  <ul className="list list--tick">
                    <li className="list__item">UI &amp; UX Design</li>
                    <li className="list__item">Web Dashboard</li>
                    <li className="list__item">SEO</li>
                    <li className="list__item">24/7/365 Tech Support</li>
                  </ul>
                  <button className="btn btn--outline btn--block">
                    Order now
                  </button>
                </div>
              </div>
            </div>
            <div className="plan">
              <div className="card card--secondary">
                <header className="card__header">
                  <h3 className="plan__name">Mobile App</h3>
                  <span className="plan__price">$720</span>
                  <span className="badge badge--primary badge--small">
                    10% OFF
                  </span>
                </header>
                <div className="card__body">
                  <ul className="list list--tick">
                    <li className="list__item">UI &amp; UX Design</li>
                    <li className="list__item">Mobile app</li>
                    <li className="list__item">
                      Google &amp; Apple Store presence
                    </li>
                    <li className="list__item">24/7/365 Tech Support</li>
                  </ul>
                  <button className="btn btn--outline btn--block">
                    Order now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block" data-aos="zoom-in">
          <header className="block__header">
            <h2 className="block__heading">What my Customers are Saying</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              ipsam.
            </p>
          </header>
          <div className="container">
            <div className="card testimonial">
              <div className="grid grid--1x2">
                <div className="testimonial__image">
                  <img
                    src="images/oreste.png"
                    alt="A happy, smiling customer"
                  />
                  <span className="icon-container icon-container--accent">
                    <svg className="icon icon--white icon--small">
                      <use href="images/sprite.svg#quotes" />
                    </svg>
                  </span>
                </div>
                <blockquote className="quote">
                  <p className="quote__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt optio officiis dolore earum error eaque perferendis
                    laudantium sed praesentium dolorum.
                  </p>
                  <footer>
                    <div className="media">
                      <div className="media__image">
                        <svg className="icon icon--primary quote__line">
                          <use href="images/sprite.svg#line" />
                        </svg>
                      </div>
                      <div className="media__body">
                        <h3 className="media__title quote__author">John Doe</h3>
                        <p className="quote__organization">ABC Company</p>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="callout callout--primary callout-signup">
            <div className="grid grid--1x2">
              <div className="callout__content">
                <h2 className="callout__heading">Ready to Get Started?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi voluptate tempora qui distinctio consequatur aliquid
                  pariatur cupiditate quas cum fugit.
                </p>
              </div>
              <a
                target="_blank"
                href="#"
                className="btn btn--secondary btn--stretched"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
        <div className="prev-next">
          <a href="/index.html">
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="/icons/prev.svg"
                alt=""
              />
            </span>
          </a>
          <a href="/resume.html">
            <span className="icon-container">
              <img
                className="icon--menu icon--primary"
                src="/icons/next.svg"
                alt=""
              />
            </span>
          </a>
        </div>
      </section>

    </main>
  );
}

export default About;
