import React from 'react';

//libraries
import { Link } from 'react-scroll'

//components
import Experience from '../../components/Experience';

import "./styles.css"

function Education(props) {

    let education = [
        {
          name: "edu-1",
          title: "Masters of Applied Science",
          subtitle: "Electrical and Computer Systems Engineering",
          companyLogo: require("../../assets/images/logo_carleton.jpg"),
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
          companyLogo: require("../../assets/images/logo_carleton.jpg"),
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
        <Experience name="education" title="EDUCATION" list={education} />
    )
}

export default Education;