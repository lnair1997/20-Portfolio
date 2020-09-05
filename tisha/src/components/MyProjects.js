import React from "react";
import MyProjectsCard from "./MyProjectsCard";
import Row from 'react-bootstrap/Row';

import Container from 'react-bootstrap/Container';

function MyProjects() {
    <section>
        <Container>
            <h2>Development</h2>
            <Row className="justify-content-around">

                {projects.map(project => (
                    <MyProjectsCard
                        key={project.id}
                        img={project.img}
                        title={project.title}
                        tech={project.tech}
                        deployLink={project.deployLink}
                        repoLink={project.repoLink}
                    />
                ))}

            </Row>
        </Container>
    </section>
}

export default MyProjects;