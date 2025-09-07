import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Book an Appointment</h2>
      <div className="appointment-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select id="service" name="service" className="form-control">
              <option value="teeth-whitening">Teeth Whitening</option>
              <option value="check-up">Check-up</option>
              <option value="cleaning">Cleaning</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="doctor">Doctor</label>
            <select id="doctor" name="doctor" className="form-control">
              <option value="dr-anika-rahman">Dr. Anika Rahman</option>
              <option value="dr-john-doe">Dr. John Doe</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;