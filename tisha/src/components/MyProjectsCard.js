import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';

function MyProjectsCard({ img, title, languages, deployed, gitRepo }) {
    return (
        <Container fluid={"md"}>
            <Row className="justify-content-center py-5">
                <Col md={5}>
                    <Card className="card-style my-5">
                        <CardImg src={img} alt="Card image cap" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle>This is a substitle </Card.Subtitle>
                            <Card.Text>This is a description</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MyProjectsCard;