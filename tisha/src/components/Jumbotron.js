import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const textColor = {
    color: "#FCCA46",
    marginTop: "100px",
    fontFamily: 'Fredoka One',
}

function JumbotronPic() {
    return (
        <div>
            <Jumbotron fluid={true} className="backgroundImg">
                    <Row className="justify-content-center py-5">
                        <Col className="text-center" md={6}>
                            <h1 className="display-4 font-weight-bolder" style={textColor}>Full Stack Developer</h1>
                            <hr id="hr-bar"></hr>
                            <h2 className="font-weight-light text-light">HTML/CSS | Bootstrap | JavaScript | NodeJS | Express | MySQL | MongoDB | React |</h2>
                        </Col>
                    </Row>
            </Jumbotron>
        </div>
    )
};

export default JumbotronPic;