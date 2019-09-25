import React from 'react';

//libraries
import Gallery from 'react-grid-gallery';

//components
import Experience from '../../containers/Experience';

import "./styles.css"



function TechUsed(props) {

    const title = props.title;
    const key = props.title.replace(/\s+/g, '-').replace(/\.+/g, '').toLowerCase();

    return (
        <div className="tech">
            {props.noImage ? null :
                <img src={require(`../../assets/images/logo_tech_${key}.jpg`)} alt={title} />
            }
            <span>{title}</span>
        </div>
    )
}


function MyProjects(props) {

    const buzzynRewardsImages = [
        {
            src: require("../../assets/images/buzzyn_rewards.jpg"),
            thumbnail: require("../../assets/images/buzzyn_rewards.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 200,
            caption: "Buzzyn Rewards"
        },
        {
            src: require("../../assets/images/buzzyn_rewards2.jpg"),
            thumbnail: require("../../assets/images/buzzyn_rewards2.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 213,
            caption: "Buzzyn Rewards"
        }
    ];

    const buzzynBusinessHubImages = [
        {
            src: require("../../assets/images/buzzyn_businesshub.jpg"),
            thumbnail: require("../../assets/images/buzzyn_businesshub.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 188,
            caption: "Buzzyn Rewards"
        }
    ];

    const buzzynPOSImages = [
        {
            src: require("../../assets/images/buzzyn_pos.jpg"),
            thumbnail: require("../../assets/images/buzzyn_pos.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 184,
            caption: "Buzzyn Rewards"
        }
    ];

    const vitalityImages = [
        {
            src: require("../../assets/images/vitality.jpg"),
            thumbnail: require("../../assets/images/vitality_thumb.jpg"),
            thumbnailWidth: 300,
            thumbnailHeight: 195,
            caption: "vitality.ca"
        }
    ];


    let projects = [
        {
            name: "proj-1",
            title: "Buzzyn Rewards",
            details: (
                <div>
                    <p>Buzzyn Rewards is an app that lets you collect stamps and earn rewards at certain stores</p>
                    <p>Launched in 2017, the app is currently being used by over 15,000 users in Ottawa</p>
                    <div className="technologies-used">
                        <TechUsed title="React Native" />
                        <TechUsed title="React Navigation" />
                        <TechUsed title="Redux" />
                        <TechUsed title="Axios" noImage />
                    </div>
                    <div className="buzzyn-gallery-wrapper">
                        <Gallery id="buzzyn-gallery" rowHeight={150} images={buzzynRewardsImages} enableImageSelection={false} backdropClosesModal />
                    </div>
                </div>
            )
        },
        {
            name: "proj-2",
            title: "Buzzyn BusinessHub",
            details: (
                <div>
                    <p>Buzzyn BusinessHub is a web app, build in ReactJS, that allow business owners to design, create, deploy, and track their loyalty programs</p>
                    <p>Utilizes Chart.js to display powerful analytics</p>
                    <p>See it in action @ <a href="buzzyn.com/business-hub/login">buzzyn.com/business-hub</a>. Use email: demo@buzzyn.com and password: buzzyndemo</p>
                    <div className="technologies-used">
                        <TechUsed title="React" />
                        <TechUsed title="React Router" />
                        <TechUsed title="Redux" />
                        <TechUsed title="Axios" noImage />
                        <TechUsed title="Stripe" />
                        <TechUsed title="Ant Design" />
                        <TechUsed title="Chart.js" />
                    </div>
                    <div className="buzzyn-gallery-wrapper">
                        <Gallery id="buzzyn-gallery" rowHeight={150} images={buzzynBusinessHubImages} enableImageSelection={false} backdropClosesModal />
                    </div>
                </div>
            )
        },
        {
            name: "proj-3",
            title: "Buzzyn Point of Sale",
            details: (
                <div>
                    <p>A tablet/smartphone app to facilitate scanning QR codes, issuing stamps and points, and redeeming rewards at participating stores</p>
                    <p>Currently in use at 60+ stores in Ottawa</p>
                    <div className="technologies-used">
                        <TechUsed title="React Native" />
                        <TechUsed title="React Navigation" />
                        <TechUsed title="Redux" />
                        <TechUsed title="Axios" noImage />
                    </div>
                    <div className="buzzyn-gallery-wrapper">
                        <Gallery id="buzzyn-gallery" rowHeight={150} images={buzzynPOSImages} enableImageSelection={false} backdropClosesModal />
                    </div>
                </div>
            )
        },
        {
            name: "proj-4",
            title: "Buzzyn Backend",
            details: (
                <div>
                    <p>The Buzzyn Rewards platform is powered with a Ruby on Rails backend, hosted on Heroku.</p>
                    <p>I use MySQL, Redis for caching complex analytics queries, and Amazon S3 for storing images</p>
                    <div className="technologies-used">
                        <TechUsed title="Ruby on Rails" />
                        <TechUsed title="MySQL" />
                        <TechUsed title="Amazon S3" />
                        <TechUsed title="Redis" />
                        <TechUsed title="Pundit" noImage />
                        <TechUsed title="Carrier Wave" noImage />
                    </div>
                </div>
            )
        },
        {
            name: "proj-5",
            title: "Vitality Physiotherapy Clinic Website",
            details: (
                <div>
                    <p>vitalitypt.ca</p>
                    <div className="technologies-used">
                        <TechUsed title="React" />
                    </div>
                    <div className="buzzyn-gallery-wrapper">
                        <Gallery id="buzzyn-gallery" rowHeight={150} images={vitalityImages} enableImageSelection={false} backdropClosesModal />
                    </div>
                </div>
            )
        }
    ];


    return (
        <Experience name="projects" title="PROJECTS" list={projects} showTitlesOnTimeline />
    )
}

export default MyProjects;