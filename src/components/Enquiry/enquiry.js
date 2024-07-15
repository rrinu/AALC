import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './enquiry.css';

  function Enquiry() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { name, email, subject, message } = formData;
  
      const templateParams = {
        name,
        email,
        subject,
        message
      };
  
      const serviceID = 'service_t3akp0j';
      const templateID = 'template_ubpv7z5';
      const userID = 'eecRDpkBpTP9UXZEp';
  
      emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Your message is sent successfully');
        })
        .catch((error) => {
          console.error('An error occurred while sending the email:', error);
          alert('Sorry, an error occurred while sending your message');
        });
    };
  
  
  
    return (
      <section id='contact'>
      <div className='enquiry'>
        <h3 className='enquiry-header'>You deserve  <span className='red'>the best legal service</span></h3>
        <form onSubmit={handleSubmit}>
          <h4 className='enquire-now'>Enquire Now</h4>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button className='enquire-button' type="submit">SEND</button>
      </form>
    </div>
    </section>
  );
}
  
export default Enquiry;