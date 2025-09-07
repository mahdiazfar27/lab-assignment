import React, { useState } from 'react';
import { doctors } from '../dummy-data';
import './Doctors.css';

const Doctors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4;

  // doctors to display
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };


  return (
    <div className="doctors-container">
      <h1>Our Doctors</h1>
      <p>Meet our team of dedicated and professional dental experts.</p>
      
      <div className="doctor-list">
        {currentDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} className="doctor-photo" />
            <div className="doctor-info">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-email">{doctor.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Doctors;