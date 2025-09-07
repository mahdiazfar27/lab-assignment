import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} />
      
      {/* Button is now OUTSIDE main-content */}
      <button 
        onClick={toggleSidebar} 
        className={`sidebar-toggle ${!isSidebarOpen ? 'collapsed' : ''}`}
      >
        {isSidebarOpen ? '✕' : '☰'} 
      </button>

      <div className="main-content">
        <h1>Welcome to Smile Studio</h1>
      </div>
    </div>
  );
}

export default App;