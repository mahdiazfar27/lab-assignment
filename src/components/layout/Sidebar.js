import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        
      <h1 className="logo">Smile Studio</h1>
      <nav className="sidebar-nav">
        <ul>
          <li className="active"><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="profile-link">
        <a href="#profile">Profile</a>
      </div>
    </div>
  );
};

export default Sidebar;