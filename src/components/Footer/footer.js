import React from 'react';
import './Footer.css';
import {  FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import logo from '../Home/logo.png.png'

class Footer extends React.Component{
    render(){
        return(
            <div className='footer-whole'>
            <div className='footer'>
                <div className='footer-flex'>
                <div className='logo-div'>
                    <center>
                        <img src={logo} className='footer-logo'></img>
                        <h4 className='footer-header'>Amal&nbsp; Ansari&nbsp; Legal&nbsp; Consultancy</h4>
                    </center>
                </div>
                <div className='quick-links'>
                    <h4 className='link-header'>Quick&nbsp;&nbsp;&nbsp;Links</h4>
                    <ul className='quick-link'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="social-links">
                <h4 className='social-header'>Contact&nbsp; Me</h4>
                    <ul className='social-link'>
                    <li><a href="https://www.linkedin.com/in/amalansari/"><FaLinkedin />&nbsp;&nbsp;Linkedin</a></li>
                    <li><a href="https://wa.me/971543240140"><FaWhatsapp />&nbsp;&nbsp;Whatsapp</a></li>
                    <li><a href="mailto:example@example.com"><FaEnvelope />&nbsp;&nbsp;Email</a></li>
                    </ul>
                </div>
                <div className='social-links-mobile'>
                <ul className='social-link-mobile'>
                    <li><a href="https://www.linkedin.com/in/amalansari/"><FaLinkedin /></a></li>
                    <li><a href="mailto:adv.amalansari@gmail.com"><FaEnvelope /></a></li>
                    <li><a href="https://wa.me/971543240140"><FaWhatsapp /></a></li>
                    </ul>
                </div>
                </div>
                <div className='copyright'>
                <p className='copyright-display'><div className='one'>&copy; Copyright 2023 </div> <div className='two'>Designed by <span className='rinu'> Rinu Rahim </span></div>
                <div className='three'>All rights reserved <span className='amal'> Amal Ansari Legal Consultancy</span></div></p>
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;