import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <About />
        {/* Buttons irá después */}
      </div>
    </div>
  );
};

export default App;