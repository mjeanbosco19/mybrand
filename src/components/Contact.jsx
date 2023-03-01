import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input fields
    let isValid = true;
    if (name === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }
    if (email === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (message === '') {
      setMessageError('Message is required');
      isValid = false;
    } else {
      setMessageError('');
    }

    // Submit form if all input fields are valid
    if (isValid) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      alert('Form submitted!');
      // Clear input fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <main className="main-section">
      <section className="main-contents">
        <h2 className="page-title">Contact Me</h2>
        <div>
          <div className="grid grid--1x3">
            <div className="contact-item">
              <span className="icon-container">
                <img
                  className="icon--menu icon--primary"
                  src="/icons/location.svg"
                  alt=""
                />
              </span>
              <p className="contact-info">Kigali-Rwanda</p>
            </div>
            <div className="contact-item">
              <span className="icon-container">
                <img
                  className="icon--menu icon--primary"
                  src="/icons/email.svg"
                  alt=""
                />
              </span>
              <p className="contact-info">bosco@etite.org</p>
            </div>
            <div className="contact-item">
              <span className="icon-container">
                <img
                  className="icon--menu icon--primary"
                  src="/icons/whatsapp.svg"
                  alt=""
                />
              </span>
              <p className="contact-info">0788 780 375</p>
            </div>
          </div>
          <div className="reach-me grid grid--1x2">
            <div className="message">
              <span htmlFor="message" className="message-title">
                Get in Touch
              </span>
              <div>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <label htmlFor="name">Name:</label>
                  <input
                    className="message-input"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <div id="name-error" className="error">
                    {nameError}
                  </div>

                  <label htmlFor="email">Email:</label>
                  <input
                    className="message-input"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <div id="email-error" className="error">
                    {emailError}
                  </div>

                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="message-input"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  ></textarea>
                  <div id="message-error" className="error">
                    {messageError}
                  </div>

                  <button className="btn btn--primary" type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
