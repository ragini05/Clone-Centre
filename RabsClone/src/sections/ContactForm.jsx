import React, { useState } from 'react';
import '../styles/contactform.css';
import companyLogo from '../assets/logo.png'; // Assuming you have the RABS logo

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add API call here to send the data
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="form-container">
          <div className="form-left">
            <img src={companyLogo} alt="RABS Net Solutions Pvt. Ltd." className="company-logo" />
            <h2 className="form-heading">Let's Discuss Your Project!!</h2>
            <button className="enquire-btn">Enquire Now</button>
          </div>
          
          <div className="form-right">
            <h3 className="form-title">Please enter the details below</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              
              <div className="form-group mobile-input">
                <div className="country-code">India (+91)</div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                  id="terms"
                />
                <label htmlFor="terms">T & C Apply</label>
              </div>
              
              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;