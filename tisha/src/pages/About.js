import React from "react";

import JumbotronPic from "../components/Jumbotron";
import Avatar from "../components/Avatar";
import AboutMe from "../components/AboutMe";

function About() {
    return (
        <main>
            <JumbotronPic />
            <div className="aboutMeSection">
                <Avatar />
                <AboutMe />
            </div>
        </main>

    );
}

export default About;