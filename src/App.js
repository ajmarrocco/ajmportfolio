import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Contact></Contact>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
