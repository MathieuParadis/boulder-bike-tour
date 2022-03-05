import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';

// import components

const App = () => {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/portfolio" exact="true" element={<Portfolio />} />
            <Route path="/resume" exact="true" element={<Resume />} />
            <Route path="/contact" exact="true" element={<Contact />} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;