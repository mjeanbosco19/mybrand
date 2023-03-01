import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import MyProfile from './MyProfile';
import About from './About';

function AboutPage() {
  return (

    <body className="my-brand">
      <header>
           <DesktopMenu />
          <MobileMenu />
      </header>
        <main className="main-section">
      
             <About />
          <MyProfile />
        </main>
    </body>

  );
}


export default AboutPage;
