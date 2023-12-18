import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Paragraph from './components/Paragraph';
import Clicker from './components/Clicker';

function App() {
  return (
    <>
      <NavBar/>
      <Paragraph content="Hello world"/>
      <Clicker/>
    </>
  );
}

export default App;
