import React from 'react';
import './home.css';
import vid from './home-video.mp4';
import logo from './logo.png.png';
import { FaLinkedin, FaEnvelope, FaWhatsapp} from 'react-icons/fa';

class Home extends React.Component {
  render() {
    return (
      <div className="video-container">
        <div className='name'>
            <img className='logo-top' src={logo}></img>
            <div className="text">
                <h2>Amal  Ansari</h2>
                <h3>Legal consultant</h3>
            </div>
        </div>
        <div className='navbar'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-social">
          <ul>
          <li><a href="https://wa.me/971543240140"><FaWhatsapp /></a></li>
            <li><a href="https://www.linkedin.com/in/amalansari/"><FaLinkedin /></a></li>
            <li><a href="mailto:adv.amalansari@gmail.com"><FaEnvelope /></a></li>
          </ul>
        </div>
        <div className="video-wrapper">
          <video className="video" autoPlay loop muted>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <img className="overlay-image" src={logo} alt="Overlay" />
        <h1 className="slogan">Come, let's look law differently..</h1>
      </div>
    );
  }
}
  
export default Home;