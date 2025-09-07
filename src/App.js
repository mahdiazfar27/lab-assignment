import Sidebar from './components/layout/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to Smile Studio</h1>
      </div>
    </div>
  );
}

export default App;