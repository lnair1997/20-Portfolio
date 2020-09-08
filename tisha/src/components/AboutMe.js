import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const textColor = {
    color: "#1B998B",
}

function AboutMe() {
    return (
        <Row className="justify-content-center" style={textColor}>
            <Col md={8} className="w-responsive text-center mx-auto p-3 mt-2">
                <h5>I was born and raised in India but currently reside in Arizona. I am a Front and Back-End Developer
                    that has found a new passion in the field, and have been loving every minute of it! </h5>
                <br></br>
                <h5>The University of Arizona's Web Development Bootcamp taught me the basics of 'how to think like a 
                    developer' to more complex feature in the field, like creating a full-stack application using React.</h5>
                <br></br>
                <h5>I enjoy using logic to problem solve and have started to immerse myself in the community of knowledge.</h5>
                <hr></hr>
                <br></br>
            </Col>
        </Row>
    )
}

export default AboutMe;