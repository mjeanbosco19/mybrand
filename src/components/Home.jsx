import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import HomePage from './HomePage';
function Home() {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
      <HomePage />
    </>
  );
}

export default Home;
