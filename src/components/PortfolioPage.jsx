import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import MyProfile from './MyProfile';
import Portfolio from './Portfolio';
function PortfolioPage() {
  return (

    <body className="my-brand">
      <header>
           <DesktopMenu />
          <MobileMenu />
      </header>
        <main className="main-section">
      
          <Portfolio />
          <MyProfile />
        </main>
    </body>

  );
}

export default PortfolioPage;