import React from "react";

import JumbotronPic from "../components/Jumbotron";
import Avatar from "../components/Avatar";
import AboutMe from "../components/AboutMe";

function About() {
    return (
        <div>
            <JumbotronPic />
            <div className="aboutMeSection">
                <Avatar />
                <AboutMe />
            </div>
        </div>

    );
}

export default About;