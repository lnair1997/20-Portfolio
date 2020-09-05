import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';

function ContactPage() {
    return (
        <Card className="card-style">
            <CardImg top width="100%" alt="Card image cap" />
            <Card.Body>
                <Card.Title >This is a title</Card.Title>
                <Card.Subtitle>This is a substitle </Card.Subtitle>
                <Card.Text>This is a description</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ContactPage;