import React from "react";
import MyProjectsCard from "./MyProjectsCard";
import projects from "../projects.json";

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const projectJumbo = {
    backgroundColor: "#15796E",
    fontFamily: 'Fredoka One',
    marginBottom: '-15px',
}

function MyProjects() {
    return (
        <div>
            <Jumbotron style={projectJumbo}>
                <h1 className="display-3 text-center">P O R T F O L I O</h1>
            </Jumbotron>
            <Container className="d-flex flex-wrap justify-content-around">
                {projects.map(project => (
                    <MyProjectsCard
                        key={project.id}
                        img={project.img}
                        title={project.title}
                        languages={project.languages}
                        deployed={project.deployed}
                        gitRepo={project.gitRepo}
                    />
                ))}
            </Container>
        </div>
    )
}

export default MyProjects;