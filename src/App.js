import React from 'react';
import './App.css';

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import News from './components/News'



function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <News />
    </div>

  );
}

export default App;
