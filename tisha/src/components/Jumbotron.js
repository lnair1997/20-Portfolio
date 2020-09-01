import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function JumbotronPic() {
    return (
        <Jumbotron fluid={true} className="img">
            <Row className="justify-content-center">
                <Col className="text-center" md={9}>
                    <h1 className="display-4 font-weight-bolder">Full Stack Developer</h1>
                    <br></br>
                    <h2 className="font-weight-light">HTML/CSS | Bootstrap | JavaScript | NodeJS | Express | MySQL | MongoDB | React |</h2>
                </Col>
            </Row>
        </Jumbotron>
    )
};

export default JumbotronPic;