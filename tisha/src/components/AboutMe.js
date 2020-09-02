import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const textColor = {
    color: "#1B998B",
    // backgroundColor: 'black',
    // opacity: '0.8',
    // width: '75%',
    // margin: 'auto',
    // borderRadius: '10px',
}

function AboutMe() {
    return (
        <Row className="justify-content-center" style={textColor}>
            <Col lg={6} md={8}>
                <h5>I was born and raised in India</h5>
                <h5>I'm a Front/Back-end Developer</h5>
                <p>Loream ipsum</p>
            </Col>
        </Row>
    )
}

export default AboutMe;