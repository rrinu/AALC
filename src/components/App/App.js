import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About Me/About';
import Expertise from '../Expertise/Expertise';
import Enquiry from '../Enquiry/enquiry';
import Footer from '../Footer/footer';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Routes>
    <Route path="/About" component={About} />
    <Route exact path="/" component={Home} />
    </Routes>
    <Home />
    <About />
    <Expertise />
    <Enquiry />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
