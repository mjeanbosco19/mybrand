import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import MyProfile from './MyProfile';
import Resume from './Resume';
function ResumePage() {
  return (

    <body className="my-brand">
      <header>
           <DesktopMenu />
          <MobileMenu />
      </header>
        <main className="main-section">
      
          <Resume />
          <MyProfile />
        </main>
    </body>

  );
}

export default ResumePage;