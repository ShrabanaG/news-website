import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App w-[1200px] bg-white">
      <Header />
      <Home />
    </div>
  );
}

export default App;
