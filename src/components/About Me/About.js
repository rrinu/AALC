import React, { useEffect, useState } from 'react';
import './About.css';
import AboutImg from './About-img.jpg';


const About = () => {

  return (
    <section id="about">
    <div className='about-whole'>
      <div className='about'>
        <img className='about-img' src={AboutImg} alt="About Image" />
        <div className='para'>
          <h1 className="header">About Me</h1>
          <p>
          I am a Seasoned Legal Professional, equipped with a Bachelor of Laws degree. With a solid foundation in legal principles and practices, I bring a wealth of expertise to my role.

In addition to my proficiency in contract drafting, board resolutions, and related documents, I play a pivotal role in analyzing legal issues and providing guidance on compliance with UAE and international laws. I actively contribute to crucial activities within the Abu Dhabi Global Market, including incorporation processes.
<br />
My extended focus lies in drafting contracts while ensuring meticulous adherence to AML/CFT compliance. By combining my legal acumen with a thorough understanding of regulatory requirements, I help navigate complex legal landscapes and safeguard our company's interests.

Throughout my career, I have successfully managed a diverse range of legal projects, including negotiating contracts with global partners, performing comprehensive legal audits, and effectively resolving intricate disputes. My unwavering dedication to professional growth and my passion for making a lasting impact in the ever-evolving legal realm drive me forward.
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
