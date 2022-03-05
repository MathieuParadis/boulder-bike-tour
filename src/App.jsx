import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Contest from './pages/Contest';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Photos from './pages/Photos';
import Riders from './pages/Riders';

// import components

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contest" exact="true" element={<Contest />} />
          <Route path="/riders-locations" exact="true" element={<Locations />} />
          <Route path="/photos" exact="true" element={<Photos />} />
          <Route path="/riders" exact="true" element={<Riders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;