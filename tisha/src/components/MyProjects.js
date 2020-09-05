import React from "react";
import MyProjectsCard from "./MyProjectsCard";
import projects from "../projects.json";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MyProjects() {
    return (
        <div>
            <Container>
                <Row className="justify-content-around">

                    {projects.map(project => (
                        <MyProjectsCard
                            id={project.id}
                            img={project.img}
                            title={project.title}
                            languages={project.languages}
                            deployed={project.deployed}
                            gitRepo={project.gitRepo}
                        />
                    ))}

                </Row>
            </Container>
        </div>
    )
}

export default MyProjects;