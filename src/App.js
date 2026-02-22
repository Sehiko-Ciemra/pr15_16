import React, { useState } from 'react';
import './App.css'; 
import Profiles from './Profiles';
import TodoList from './TodoList';

function App() {
  const [activeTab, setActiveTab] = useState('practical1');

  return (
    <div className="portfolio-container">
      <nav className="main-nav">
        <button 
          className={activeTab === 'practical1' ? 'active-btn' : ''} 
          onClick={() => setActiveTab('practical1')}
        >
          Практична 1 (Профілі)
        </button>
        
        <button 
          className={activeTab === 'practical2' ? 'active-btn' : ''} 
          onClick={() => setActiveTab('practical2')}
        >
          Практична 2 (To-Do)
        </button>
      </nav>

      <div className="content-area">
        <div style={{ display: activeTab === 'practical1' ? 'block' : 'none' }}>
          <Profiles />
        </div>
        
        <div style={{ display: activeTab === 'practical2' ? 'block' : 'none' }}>
          <TodoList />
        </div>
        
      </div>
    </div>
  );
}

export default App;