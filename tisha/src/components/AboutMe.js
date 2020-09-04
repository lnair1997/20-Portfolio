import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const textColor = {
    color: "#1B998B",
}

function AboutMe() {
    return (
        <Row className="justify-content-center" style={textColor}>
            <Col lg={8}>
                <h5>I was born/raised in India but currently reside in Arizona. I am a Front/Back-End Developer
                    that has found a new passion in the field, and have been loving every minute of it! </h5>
                <br></br>
                <h5>I enrolled in the University of Arizona's Web Developer Bootcamp and learned an infinite amount of complexity invloved in the field.</h5>
                <br></br>
                <h5>I enjoy using logic to problem solve and have started to immerse myself in the community of knowledge.</h5>
                <hr></hr>
                <br></br>
            </Col>
        </Row>
    )
}

export default AboutMe;