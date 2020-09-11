import React from 'react';
import './App.css';

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import News from './components/News'

import Container from 'react-bootstrap/Container';




function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <SearchBar />
        <News />
      </Container>
    </div>

  );
}

export default App;
