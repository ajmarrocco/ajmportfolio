import React, { useState }  from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [titles] = useState(['About Me', 'Portfolio', 'Contact', 'Resume']);

  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  return (
    <div>
      <Header            
            titles={titles}
            setCurrentTitle={setCurrentTitle}
            currentTitle={currentTitle}
      ></Header>
      <main>      
        {(currentTitle === 'About Me') ? <About /> :
        (currentTitle === 'Portfolio') ? <Project /> :
        (currentTitle === 'Contact') ? <Contact /> :
        (currentTitle === 'Resume') ? <Resume /> :
        <About /> }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
