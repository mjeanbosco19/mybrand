import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BlogsPage from './components/BlogsPage';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage';
import PortfolioPage from './components/PortfolioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/resume" element={<ResumePage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
