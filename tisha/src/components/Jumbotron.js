import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const textColor = {
    color: "#1B998B",
    margin: "100px",
}

function JumbotronPic() {
    return (
        <div>
            <Jumbotron fluid={true} className="img">
                    <Row className="justify-content-center py-5" style={textColor}>
                        <Col className="text-center" md={9}>
                            <h1 className="display-4 font-weight-bolder">Full Stack Developer</h1>
                            <br></br>
                            <h2 className="font-weight-light text-light">HTML/CSS | Bootstrap | JavaScript | NodeJS | Express | MySQL | MongoDB | React |</h2>
                        </Col>
                    </Row>
            </Jumbotron>
        </div>
    )
};

export default JumbotronPic;