import React from 'react';

//libraries
import Gallery from 'react-grid-gallery';
import { Link } from 'react-scroll'

//components
import Header from './components/Header';
import Experience from './containers/Experience';
import Skills from './containers/Skills';
import Top from './components/Top';
import Other from './containers/Other';


import './App.css';


function App() {

  const buzzynImages = [{
    src: require("./assets/images/buzzyn_businesshub.jpg"),
    thumbnail: require("./assets/images/buzzyn_businesshub.jpg"),
    thumbnailWidth: 300,
    thumbnailHeight: 184,
    caption: "Buzzyn BusinessHub, build in ReactJS, is a web application for business owners to design, deploy and track loyalty programs. Check it out @ buzzyn.com/business-hub/login"
  },
  {
    src: require("./assets/images/buzzyn_pos.jpg"),
    thumbnail: require("./assets/images/buzzyn_pos.jpg"),
    thumbnailWidth: 300,
    thumbnailHeight: 188,
    caption: "Buzzyn Point of Sale, build with React Native, is a tablet/smartphone app that facilitates scanning at participating stores to issue rewards for customers. Available on iOS App Store and Android Play Store"
  },
  {
    src: require("./assets/images/buzzyn_rewards.jpg"),
    thumbnail: require("./assets/images/buzzyn_rewards.jpg"),
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Buzzyn Rewards, build with React Native, is an app to collect points, redeem rewards and discover deals. Available on iOS App Store and Android Play Store"
  }];


  let workExperience = [
    {
      name: "exp-1",
      title: "Founder and Chief Technology Officer",
      companyLogo: "http://buzzyn.com/static/media/buzzyn-logo.22142d05.png",
      companyName: "Buzzyn Rewards",
      companyLocation: "Ottawa, Canada",
      dateRange: "September 2013 - Present",
      details: (
        <ul>
          <li>Overseeing all the technical operations at Buzzyn Rewards, a rewards platform used by over 15,000 users in Ottawa</li>
          <li>Developed a <span id="highlight">ReactJS</span> web application, <a className="inline-link" href="http://buzzyn.com/business-hub/login">buzzyn.com/business-hub</a>, for business owners to manage and track the performance of their loyalty programs</li>
          <li>Developed and released two <span id="highlight">iOS applications (Objective-C)</span> and two <span id="highlight">Android applications (Java)</span> to the iOS AppStore and Android Play Store</li>
          <li>Developed and released two <span id="highlight">React Native</span> applications</li>
          <li>Led the development of a RESTful API service (<span id="highlight">Ruby on Rails</span>) powering the platform</li>
          <li>Supervised and mentored a number of junior developers and computer science students with the development work on the platform</li>
          <div className="buzzyn-gallery-wrapper">
            <Gallery id="buzzyn-gallery" images={buzzynImages} enableImageSelection={false} backdropClosesModal/>,
          </div>
        </ul>
      )
    },
    {
      name: "exp-2",
      title: "BlackBerry Core App Developer - AppWorld Server (Co-op)",
      companyLogo: "https://i.pinimg.com/originals/79/d1/c0/79d1c0b66b8e59313363328b5ded0f63.png",
      companyName: "BlackBerry (formerly Research In Motion)",
      companyLocation: "Ottawa, Canada",
      dateRange: "May 2012 - August 2012",
      details: (
        <ul>
          <li>Improved the scalability of the existing implementation of the AppWorld Recommendation engine which is built on the Apache Hadoop framework</li>
          <li>Reworked the App World Recommendation Server API to refine its caching and reduce its dependency on the application database</li>
        </ul>
      )
    },
    {
      name: "exp-3",
      title: "BlackBerry Core App Developer - AppWorld Client (Co-op)",
      companyLogo: "https://i.pinimg.com/originals/79/d1/c0/79d1c0b66b8e59313363328b5ded0f63.png",
      companyName: "BlackBerry (formerly Research In Motion)",
      companyLocation: "Ottawa, Canada",
      dateRange: "January 2010 - December 2011",
      details: (
        <ul>
          <li>Worked on feature development and maintenance of the AppWorld Client on all BlackBerry handheld devices</li>
          <li>Investigated user interface lags and committed to delivering fluid UI and instant response times</li>
          <li>Implemented the client side of the "Gifting and Begging" feature as one of two lead developers. The feature allows users to gift -or ask for- App World applications to contacts through BlackBerry Messenger</li>
        </ul>
      )
    },
    {
      name: "exp-4",
      title: "Web developer (Co-op)",
      companyLogo: "https://pbs.twimg.com/profile_images/1038017854744883200/vZGMRy6C_400x400.jpg",
      companyName: "Alcatel-Lucent",
      companyLocation: "Ottawa, Canada",
      dateRange: "May 2010 - August 2010",
      details: (
        <ul>
          <li>Developed an Apache Maven plug-in to add functionality to the Archetype Plug-in (used to generate new projects from templates)</li>
        </ul>
      )
    }
  ];

  let education = [
    {
      name: "edu-1",
      title: "Masters of Applied Science",
      subtitle: "Electrical and Computer Systems Engineering",
      companyLogo: require("./assets/images/logo_carleton.jpg"),
      companyName: "Carleton University",
      companyLocation: "Ottawa, Canada",
      dateRange: "September 2013 - September 2016",
      details: (
        <div>
          <ul>
            <li>Supervisor: <a className="inline-link" href="https://carleton.ca/sce/people/wainer/">Dr. Gabriel Wainer</a></li>
            <li>Thesis: Discrete Event Simulation of Long Term Evolution-Advanced (LTE-A) Networks<a className="highlighted-link" href="https://curve.carleton.ca/system/files/etd/96b20de4-f516-4bbe-87a3-80d0b9c9187f/etd_pdf/2ac3b371d3ce8cbb7f399330a77c83ea/mikhail-discreteeventsimulationoflongtermevolution.pdf">read</a></li>
            <li>Proposed two algorithms to enhance the upload speed/performance of large files at the cell edges in LTE-A networks</li>
            <li>Modelled Coordinated MultiPoint (CoMP) techniques used in LTE-advanced (4G) cellular networks. The simulations were based on the Discrete EVent System specification (DEVS) formalism and developed with the CD++ simulation toolkit in <span className="highlight">C++</span></li>
            <li>Collaborated with Ericsson Canada on building a simplified simulation model of LTE’s EUTRAN protocol stack to test the efficiency of the proposed algorithms</li>
            <li>Awarded two patents for the proposed algorithms<Link className="highlighted-link" smooth={true} to='patents'>more</Link></li>
          </ul>
        </div>
      )
    },
    {
      name: "edu-2",
      title: "Bachelor of Engineering",
      subtitle: "Software Engineering, High Distinction",
      companyLogo: require("./assets/images/logo_carleton.jpg"),
      companyName: "Carleton University",
      companyLocation: "Ottawa, Canada",
      dateRange: "September 2008 - June 2013",
      details: (
        <ul>
          <li>Senate Medal for Outstanding Achievement</li>
          <li>11.17/12 GPA</li>
        </ul>
      )
    }
  ];

  return (
    <div className="app">
      <Top />
      <Header />
      <Skills />
      <Experience name="experience" title="EXPERIENCE" list={workExperience} />
      <Experience name="education" title="EDUCATION" list={education} />
      <Other />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );

}

export default App;
