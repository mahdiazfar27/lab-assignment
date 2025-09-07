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

        {/* Calendar Section */}
        <div className="calendar-container">
          <div className="calendar-header">
            <button className="calendar-nav">&lt;</button>
            <h3>July 2024</h3>
            <button className="calendar-nav">&gt;</button>
          </div>
          <div className="calendar-grid">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
              <div key={day} className="calendar-day-name">{day}</div>
            ))}
            {/* Generating dates*/}
            {[...Array(31).keys()].map(i => {
              const day = i + 1;
              let classNames = "calendar-day";
              if (day === 5) classNames += " selected";
              if (day < 1 || day > 31) classNames += " disabled";
              return <div key={i} className={classNames}>{day}</div>
            })}
          </div>
        </div>

        {/*Available Time Section */}
        <div className="available-times-container">
            <h4>Available Times on July 5, 2024</h4>
            <div className="time-slots-grid">
                {['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'].map((time, index) => (
                    <button key={index} className={`time-slot ${time === '10:30 AM' ? 'selected' : ''} ${time === '12:00 PM' || time === '5:30 PM' ? 'disabled' : ''}`}>
                        {time}
                    </button>
                ))}
            </div>
        </div>
        
        {/*Confirm Button */}
        <div className="confirm-booking-container">
          <button className="confirm-booking-btn">Confirm Booking</button>
        </div>

      </div>
    </div>
  );
};

export default Services;