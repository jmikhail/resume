import React from 'react';
import {Element} from 'react-scroll';

import "./styles.css"

function Other(props){
    return (
        <Element name='other' className="other-container">
            <h2 className="section-title">PUBLICATIONS</h2>
            <p className="other-content">Misagh Tavanpour, <span class="highlight">Jan Mikhail</span>, Mohammad Moallemi, Gabriel A. Wainer, Gary Boudreau, Ronald Casselman, “DEVS Based Modeling of Shared Segmented Upload in LTE-A Mobile Networks”, Proceedings of 18th Communication and Networking Simulation Symposium (CNS’15), PP. 60-76, April 2015, Alexandria, VA, USA.</p>
            <p className="other-content">Misagh Tavanpour, <span class="highlight">Jan Mikhail</span>, Mohammad Moallemi, Gabriel A. Wainer, Gary Boudreau, Ronald Casselman, “Data Upload in LTE-A Mobile Networks by Using Shared Segmented Upload”, Published in Journal of Networks, Vol. 10, No. 4, PP. 252-264, April 2015.</p>
            <p className="other-content">Misagh Tavanpour, Mohammad Moallemi, Gabriel A. Wainer, <span class="highlight">Jan Mikhail</span>, Gary Boudreau, Ronald Casselman, “Shared Segmented Upload in Mobile Networks using Coordinated MultiPoint”, International Symposium on Performance Evaluation of Computer and Telecommunication Systems (SPECTS), PP. 662-669, July 2014, Monterey, CA, USA.</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 className="section-title">PATENTS</h2>
            <p className="other-content">Misagh Tavanpour, <span class="highlight">Jan Mikhail</span>, Gabriel A. Wainer, Gary Boudreau, Hossein Seyyed Mahdi, Ronald Casselman “File Transfer by Mobile User Collaboration”, Provisional Patent Filing Reference P46444. 2015.</p>
            <p className="other-content">Misagh Tavanpour, Mohammad Moallemi, Gabriel A. Wainer, <span class="highlight">Jan Mikhail</span>, Gary Boudreau, Ronald Casselman, “Shared Segmented Upload in Mobile Networks using Coordinated Multipoint”, Provisional Patent Filing Reference P43130. 2014.</p>
        </Element>
    )
}

export default Other;