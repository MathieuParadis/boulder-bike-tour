// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGE IMPORTS
import Community from './pages/Community';
import Contact from './pages/Contact';
import Contest from './pages/Contest';
import Donate from './pages/Donate';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Photos from './pages/Photos';
import Riders from './pages/Riders';

// COMPONENT IMPORTS
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" exact="true" element={<Community />} />
          <Route path="/contact" exact="true" element={<Contact />} />
          <Route path="/contest" exact="true" element={<Contest />} />
          <Route path="/donate" exact="true" element={<Donate />} />
          <Route path="/riders-locations" exact="true" element={<Locations />} />
          <Route path="/photos" exact="true" element={<Photos />} />
          <Route path="/riders" exact="true" element={<Riders />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;