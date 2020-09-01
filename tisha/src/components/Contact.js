import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// import Axios from 'axios';

class ContactPage extends React.Component {

    render() {
        return (
            <div>
                <Container fluid="md" className="my-5">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit">
                            Send
                    </Button>
                    </Form>
                </Container>
            </div>
        );
    }

}

export default ContactPage;