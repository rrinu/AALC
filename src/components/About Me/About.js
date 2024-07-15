import React, { useEffect, useState } from 'react';
import './About.css';
import AboutImg from './About-img.jpeg';
import {link} from 'react-router-dom';

const About = () => {

  return (
    <section id="about">
    <div className='about-whole'>
      <div className='about'>
        <img className='about-img' src={AboutImg} alt="About Image" />
        <div className='para'>
          <h1 className="header">About Me</h1>
          <p>
            I am an accomplished legal professional with a passion for delivering results. My expertise is broad, including Criminal Law, Family Law, Banking Law,
            Labor Law, Telecom Law, Corporate Law, and maintaining strong client relationships. I am committed to providing exceptional service to my clients and
            have built a reputation for going above and beyond to achieve their goals. My passion for law and administration, coupled with my extensive experience
            and commitment to excellence, make me a valuable asset to any legal team. I am confident in my ability to exceed expectations and deliver results in
            any legal setting, and I look forward to continuing to take on new challenges and opportunities in the future.
          </p>
        </div>
      </div>
      <div className='Ask-Me'>
        <h1>QUESTIONS ABOUT A JUDICIAL ISSUE?</h1>
        <a href='#contact' className='Ask-button'>Click to Ask</a>
      </div>
    </div>
    </section>
  );
};

export default About;
