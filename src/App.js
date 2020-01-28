import React from 'react';
import './App.css';
import DATA from './DATA';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Footer from './components/footer/footer.component';


const App = () => {
  return (
    <div className="App">
      <Header data={DATA}/>
      <About data={DATA}/>
      <Projects data={DATA}/>
      <Footer data={DATA}/>
    </div>
  );
}

export default App;
