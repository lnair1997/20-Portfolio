import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const img = {
//     backgroundImage: "url(" + "https://mdbootstrap.com/img/Others/documentation/4.jpg" + ")",
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat'
// }

function JumbotronPic() {
    return (
        <div>
            <Jumbotron className="bg-dark">
                <Row className="justify-content-center py-5 mx-0">
                    <Col className="text-center" md={6}>
                        <h1 className="display-4 font-weight-bolder">Full Stack Developer</h1>
                        <br></br>
                        <h2 className="font-weight-light">HTML/CSS | Bootstrap | JavaScript | NodeJS | Express | MySQL | MongoDB | React |</h2>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
};

export default JumbotronPic;