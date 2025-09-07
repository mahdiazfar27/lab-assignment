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
      <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
        <button onClick={toggleSidebar} className="sidebar-toggle">
          {isSidebarOpen ? '☰' : '☰'}
        </button>
        <h1>Welcome to Smile Studio</h1>
      </div>
    </div>
  );
}

export default App;