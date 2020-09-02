import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const textColor = {
    color: "#1B998B",
}

function Avatar() {
    return (
        <Container fluid={true}>
            <Row className="text-center my-5" style={textColor}>
                <Col>
                <h3 className="my-5">Hi, I'm Lathisha...</h3>
                    <Image src="/images/face.JPG"
                        className="avatar"
                        roundedCircle />
                        <br></br>
                </Col>
            </Row>
        </Container>
    )
}

export default Avatar;