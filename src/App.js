import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie onClick="callback" />
    </div>
  );
}

export default App;
