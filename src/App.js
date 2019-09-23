import React from 'react';


//components
import Header from './components/Header';
import Skills from './sections/Skills';
import Top from './components/Top';
import Other from './sections/Other';

import './App.css';
import WorkExperience from './sections/WorkExperience';
import Education from './sections/Education';


function App() {

  return (
    <div className="app">
      <Top />
      <Header />
      <Skills />
      <WorkExperience />
      <Education />
      <Other />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );

}

export default App;
