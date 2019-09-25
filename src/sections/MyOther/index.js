import React from 'react';

import "./styles.css"
import Section from '../../components/Section';
import Publication from '../../components/Publication';
import Patent from '../../components/Patent';

function Other(props) {

    let publications = [
        {
            title: "The Case For DEVS In Networking M&S: Upload User Collaboration In Mobile Networks Using Coordinated Multipoint",
            source: "Proceedings of SpringSim (TMS/DEVS 2017)",
            date: "April 2017",
            location: "Virginia Beach, VA, USA.",
            authors: ["Misagh Tavanpour", "Jan Mikhail", "Gabriel A. Wainer", "Gary Boudreau"],
            link: "http://cell-devs.sce.carleton.ca/publications/2017/TMWB17/THE%20CASE%20FOR%20DEVS%20IN%20NETWORKING%20M&S:%20UPLOAD%20USER%20COLLABORATION%20IN%20MOBILE%20NETWORKS%20USING%20COORDINATED%20MULTIPOINT.pdf"
        },
        {
            title: "Data Upload in LTE-A Mobile Networks by Using Shared Segmented Upload",
            source: "Published in Journal of Networks, Vol. 10, No. 4, PP. 252-264",
            date: "April 2015",
            authors: ["Misagh Tavanpour", "Jan Mikhail", "Mohammad Moallemi", "Gabriel A. Wainer", "Gary Boudreau", "Ronald Casselman"],
            link: "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.886.2623&rep=rep1&type=pdf"
        },
        {
            title: "DEVS Based Modeling of Shared Segmented Upload in LTE-A Mobile Networks",
            source: "Proceedings of 18th Communication and Networking Simulation Symposium (CNS 2015), PP. 60-76",
            date: "April 2015",
            location: "Alexandria, VA, USA.",
            authors: ["Misagh Tavanpour", "Jan Mikhail", "Mohammad Moallemi", "Gabriel A. Wainer", "Gary Boudreau", "Ronald Casselman"],
            link: "http://cell-devs.sce.carleton.ca/publications/2015/TMMWBC15/DEVS%20Based%20Modeling%20of%20Shared%20Segmented%20Upload%20in%20LTE-A%20%20Mobile%20Networks.pdf"
        },
        {
            title: "Shared Segmented Upload in Mobile Networks using Coordinated MultiPoint",
            source: "International Symposium on Performance Evaluation of Computer and Telecommunication Systems (SPECTS), PP. 662-669",
            date: "July 2014",
            location: "Monterey, CA, USA.",
            authors: ["Misagh Tavanpour", "Mohammad Moallemi", "Gabriel A. Wainer", "Jan Mikhail", "Gary Boudreau", "Ronald Casselman"],
            link: "http://cell-devs.sce.carleton.ca/publications/2014/TMWMBC14/p8.pdf"
        },
    ];

    let patents = [
        {
            title: "File Transfer by Mobile User Collaboration",
            source: "Patent US20180219937A1",
            date: "2015",
            location: "Virginia Beach, VA, USA.",
            authors: ["Misagh Tavanpour", "Jan Mikhail", "Gabriel A. Wainer", "Gary Boudreau", "Hossein Seyyed Mahdi", "Ronald Casselman"],
            link: "https://patents.google.com/patent/US20180219937A1/en"
        },
        {
            title: "Shared Segmented Upload in Mobile Networks using Coordinated Multipoint",
            source: "Patent US10270495B2",
            date: "2014",
            authors: ["Misagh Tavanpour", "Jan Mikhail", "Mohammad Moallemi", "Gabriel A. Wainer", "Gary Boudreau", "Ronald Casselman"],
            link: "https://patents.google.com/patent/US10270495B2/en"
        },
    ];



    return (
        <Section name='other' hideTitle noPadding>
            <Section title="PUBLICATIONS">
                {publications.map((publication, index) => {
                    return (
                        <Publication key={`publication-${index}`} publication={publication} />
                    )
                })}

            </Section>
            <Section title="PATENTS">

                {patents.map((patent, index) => {
                    return (
                        <Patent key={`patents-${index}`} patent={patent} />
                    )
                })}

            </Section>
        </Section>
    )
}


export default Other;