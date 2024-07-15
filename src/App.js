import React from 'react';
import Home from './components/Home/Home';
import About from './components/About Me/About';
import Expertise from './components/Expertise/Expertise';
import Enquiry from './components/Enquiry/enquiry';
import Footer from './components/Footer/footer';
import './App.css';


const App = () => {
  return(
 
    <div>
    
      <Home />
    <About />
    <Expertise />
    <Enquiry />

      <Footer />
    </div>
  );
}
export default App;
