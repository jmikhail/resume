import React from 'react';
import { Element } from 'react-scroll';

import "./styles.css"

function Other(props) {
    return (
        <Element name='other' className="other-container max-width">
            <Element name='publications'>
                <h2 className="section-title">PUBLICATIONS</h2>
                <p className="other-content">Misagh Tavanpour, <span class="highlight">Jan Mikhail</span>, Gabriel A. Wainer, Gary Boudreau, "The Case For DEVS In Networking M&S: Upload User Collaboration In Mobile Networks Using Coordinated Multipoint", Proceedings of SpringSim (TMS/DEVS 2017), April 2017, Virginia Beach, VA, USA. <a class="highlighted-link" href="http://cell-devs.sce.carleton.ca/publications/2017/TMWB17/THE%20CASE%20FOR%20DEVS%20IN%20NETWORKING%20M&S:%20UPLOAD%20USER%20COLLABORATION%20IN%20MOBILE%20NETWORKS%20USING%20COORDINATED%20MULTIPOINT.pdf">read</a></p>
                <p className="other-content">Misagh Tavanpour, <span class="highlight">Jan Mikhail</span>, Mohammad Moallemi, Gabriel A. Wainer, Gary Boudreau, Ronald Casselman, "Data Upload in LTE-A Mobile Networks by Using Shared Segmented Upload", Published in Journal of Networks, Vol. 10, No. 4, PP. 252-264, April 2015. <a class="highlighted-link" href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.886.2623&rep=rep1&type=pdf">read</a></p>
                <p className="other-content">Misagh Tavanpour, <span class="highlight">Jan Mikhail</span>, Mohammad Moallemi, Gabriel A. Wainer, Gary Boudreau, Ronald Casselman, "DEVS Based Modeling of Shared Segmented Upload in LTE-A Mobile Networks", Proceedings of 18th Communication and Networking Simulation Symposium (CNS 2015), PP. 60-76, April 2015, Alexandria, VA, USA. <a class="highlighted-link" href="http://cell-devs.sce.carleton.ca/publications/2015/TMMWBC15/DEVS%20Based%20Modeling%20of%20Shared%20Segmented%20Upload%20in%20LTE-A%20%20Mobile%20Networks.pdf">read</a></p>
                <p className="other-content">Misagh Tavanpour, Mohammad Moallemi, Gabriel A. Wainer, <span class="highlight">Jan Mikhail</span>, Gary Boudreau, Ronald Casselman, "Shared Segmented Upload in Mobile Networks using Coordinated MultiPoint", International Symposium on Performance Evaluation of Computer and Telecommunication Systems (SPECTS), PP. 662-669, July 2014, Monterey, CA, USA. <a class="highlighted-link" href="http://cell-devs.sce.carleton.ca/publications/2014/TMWMBC14/p8.pdf">read</a></p>
                {/* <a name="patents" /> */}
            </Element>

            <Element name='patents'>
                <h2 className="section-title">PATENTS</h2>
                <p className="other-content">Misagh Tavanpour, <span class="highlight">Jan Mikhail</span>, Gabriel A. Wainer, Gary Boudreau, Hossein Seyyed Mahdi, Ronald Casselman "File Transfer by Mobile User Collaboration", Patent US20180219937A1. 2015. <a class="highlighted-link" href="https://patents.google.com/patent/US20180219937A1/en">read</a></p>
                <p className="other-content">Misagh Tavanpour, Mohammad Moallemi, Gabriel A. Wainer, <span class="highlight">Jan Mikhail</span>, Gary Boudreau, Ronald Casselman, "Shared Segmented Upload in Mobile Networks using Coordinated Multipoint", Patent US10270495B2. 2014. <a class="highlighted-link" href="https://patents.google.com/patent/US10270495B2/en">read</a></p>
            </Element>
        </Element>
    )
}

export default Other;