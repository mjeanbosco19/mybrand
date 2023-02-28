import React from 'react';
import { BrowserRouter} from 'react-router-dom';


import DesktopMenu from '../src/components/DesktopMenu';
import MobileMenu from '../src/components/MobileMenu';
import HomePage from '../src/components/HomePage';

function App() {
  return (
    <BrowserRouter>
    <header>
         <DesktopMenu />
        <MobileMenu />
    </header>
      <main className="main-section">

        <HomePage />
      </main>
    </BrowserRouter>
  );
}

export default App;
