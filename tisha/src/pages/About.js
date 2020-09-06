import React from "react";

import JumbotronPic from "../components/Jumbotron";
import Avatar from "../components/Avatar";
import AboutMe from "../components/AboutMe";

function About() {
    return (
        <div className="aboutPg" style={{backgroundColor: '#2F323A'}}>
            <JumbotronPic />
            <div className="aboutMeSection">
                <Avatar />
                <AboutMe />
            </div>
        </div>
    );
}

export default About;