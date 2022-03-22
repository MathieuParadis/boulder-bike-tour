// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGE IMPORTS
import Area from './pages/Area';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Contest from './pages/Contest';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Photos from './pages/Photos';
import Race from './pages/Race';
import Riders from './pages/Riders';
import Volunteer from './pages/Volunteer';

// COMPONENT IMPORTS
import Flash from './components/Flash';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

// REACT FONTAWESOME IMPORTS
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Flash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/area" exact="true" element={<Area />} />
          <Route path="/community" exact="true" element={<Community />} />
          <Route path="/contact" exact="true" element={<Contact />} />
          <Route path="/contest" exact="true" element={<Contest />} />
          <Route path="/riders-locations" exact="true" element={<Locations />} />
          <Route path="/photos" exact="true" element={<Photos />} />
          <Route path="/race" exact="true" element={<Race />} />
          <Route path="/riders" exact="true" element={<Riders />} />
          <Route path="/volunteer" exact="true" element={<Volunteer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;