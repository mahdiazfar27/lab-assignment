import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <h1 className="logo">Smile Studio</h1>
      <nav className="sidebar-nav">
        <ul>
          {/* Replace <a> tags with NavLink */}
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/doctors">Doctors</NavLink></li>
          <li><NavLink to="/reviews">Reviews</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="profile-link">
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;