import React from 'react';


//components
import Header from './components/NavigationBar';
import Top from './sections/Header';
import Skills from './sections/MySkills';
import Other from './sections/MyOther';
import WorkExperience from './sections/MyWorkExperience';
import Education from './sections/MyEducation';
import Projects from './sections/MyProjects';

import './App.css';

function App() {

  let appRef = React.useRef(null);

  React.useEffect(() => {
    console.log("appRef.current = ", appRef.current);
    appRef.current.scrollTop = 0;
  }, []);

  return (
      <div className="app" ref={(ref)=> {appRef.current = ref}}>
        <Top />
        <Header />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
        <Other />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
  );

}

export default App;
