import React from 'react';

//libraries
import Gallery from 'react-grid-gallery';

//components
import Experience from '../../containers/Experience';

import "./styles.css"

function WorkExperience(props) {

    const buzzynImages = [{
        src: require("../../assets/images/buzzyn_businesshub.jpg"),
        thumbnail: require("../../assets/images/buzzyn_businesshub.jpg"),
        thumbnailWidth: 300,
        thumbnailHeight: 184,
        caption: "Buzzyn BusinessHub, build in ReactJS, is a web application for business owners to design, deploy and track loyalty programs. Check it out @ buzzyn.com/business-hub/login"
    },
    {
        src: require("../../assets/images/buzzyn_pos.jpg"),
        thumbnail: require("../../assets/images/buzzyn_pos.jpg"),
        thumbnailWidth: 300,
        thumbnailHeight: 188,
        caption: "Buzzyn Point of Sale, build with React Native, is a tablet/smartphone app that facilitates scanning at participating stores to issue rewards for customers. Available on iOS App Store and Android Play Store"
    },
    {
        src: require("../../assets/images/buzzyn_rewards.jpg"),
        thumbnail: require("../../assets/images/buzzyn_rewards.jpg"),
        thumbnailWidth: 300,
        thumbnailHeight: 200,
        caption: "Buzzyn Rewards, build with React Native, is an app to collect points, redeem rewards and discover deals. Available on iOS App Store and Android Play Store"
    }];


    let workExperience = [
        {
            name: "exp-1",
            title: "Founder and Chief Technology Officer",
            companyLogo: require("../../assets/images/logo_buzzyn.jpg"),
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
                        <Gallery id="buzzyn-gallery" images={buzzynImages} enableImageSelection={false} backdropClosesModal />
                    </div>
                </ul>
            )
        },
        {
            name: "exp-2",
            title: "BlackBerry Core App Developer - AppWorld Server (Co-op)",
            companyLogo: require("../../assets/images/logo_blackberry.jpg"),
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
            companyLogo: require("../../assets/images/logo_blackberry.jpg"),
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
            companyLogo: require("../../assets/images/logo_alcatellucent.jpg"),
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


    return (
        <Experience name="experience" title="EXPERIENCE" list={workExperience} />
    )
}

export default WorkExperience;