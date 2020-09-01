import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Avatar() {
    return (
        <Container fluid={true}>
            <Row className="text-center my-5">
                <Col>
                    <Image src="https://mdbootstrap.com/img/Others/documentation/4.jpg"
                        roundedCircle />
                </Col>
            </Row>
        </Container>
    )
}

export default Avatar;