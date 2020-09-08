import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function MyProjectsCard({ img, title, languages, deployed, gitRepo }) {
    return (
        <Row className="mx-5 my-5 p-2 text-left">
            <Col md={6}>
                <Card className="text-center bg-dark proj-card">
                    <div className="overflow">
                        <Image className="card-img-top" src={img} alt={title}></Image>

                    </div>
                    <Card.Body>
                        <Card.Title style={{ color: '#FCCA46', fontFamily: 'Fredoka One' }}>{title}</Card.Title>
                        <Card.Text className="font-weight-light text-white">{languages}</Card.Text>
                        <div className="d-flex justify-content-center">
                            <a href={gitRepo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">Git Link</a>
                            <a href={deployed} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">In Action!</a>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default MyProjectsCard;