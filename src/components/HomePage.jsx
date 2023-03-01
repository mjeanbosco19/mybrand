import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import MyProfile from './MyProfile';
import Home from './Home';
function HomePage() {
  return (

    <body className="my-brand">
      <header>
           <DesktopMenu />
          <MobileMenu />
      </header>
        <main className="main-section">
      
          <Home />
          <MyProfile />
        </main>
    </body>

  );
}

export default HomePage;