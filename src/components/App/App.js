import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About Me/About';
import Expertise from './components/Expertise/Expertise';
import Enquiry from './components/Enquiry/enquiry';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="../About Me/About" element={<About />} />
        </Routes>
    </Router>
    <Home />
    <About />
    <Expertise />
    <Enquiry />
    <Footer />
    </div>
  );
}

export default App;
