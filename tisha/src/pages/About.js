import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import JumbotronPic from "../components/Jumbotron";
import Avatar from "../components/Avatar";

function About() {
    return (
        <div>
            <JumbotronPic />
            <Avatar />

            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8}>

                        <p>Hello, my name is Garrett. I'm a full stack engineer with experience in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React.</p>

                        <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

                        <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

                        <p>My latest project, Dev Grub, is a cookbook for developers. You can check it out <a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

                        <p>When I'm not learning something new chances are I'm creating some YouTube videos. You can find those <a href="http://www.youtube.com/c/GarrettLove1" target="_blank" rel="noopener noreferrer">here</a></p>

                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default About;