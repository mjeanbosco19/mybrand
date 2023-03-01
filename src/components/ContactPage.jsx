import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import MyProfile from './MyProfile';
import Contact from './Contact';
function ContactPage() {
  return (

    <body className="my-brand">
      <header>
           <DesktopMenu />
          <MobileMenu />
      </header>
        <main className="main-section">
      
          <Contact />
          <MyProfile />
        </main>
    </body>

  );
}

export default ContactPage;