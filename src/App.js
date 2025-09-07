import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Services from './pages/Services'; 
import Doctors from './pages/Doctors'; 
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} />
        
        <button 
          onClick={toggleSidebar} 
          className={`sidebar-toggle ${!isSidebarOpen ? 'collapsed' : ''}`}
        >
          {isSidebarOpen ? '✕' : '☰'} 
        </button>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;