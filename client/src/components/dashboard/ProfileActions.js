import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Container,Row, Col } from 'react-bootstrap';

const bg = require('../layout/images/unnamed.gif')
const fg = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

const ProfileActions = () => {
  return (
    <Container >
    <Jumbotron style={fg}>
    <Row style={{textAlign: 'center'}}>
      <Col sm>
      <Link to="/edit-profile" className="btn btn-light">
       Edit Profile
      </Link>
        </Col>
        <br/> <br/> <br/>

        <Col sm>
        <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
        </Col>
        <br/> <br/> <br/>
        <Col sm>
        <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education
      </Link>
      </Col>
      <br/> <br/> <br/>
        <Col sm>
        <Link to="/add-web-course" className="btn btn-light">
      
        Apply for Web Development
      </Link>
        </Col>
        <br/> <br/> <br/>
        <Col sm style={{textAlign: 'center'}}>
        <Link to="/add-app-course" className="btn btn-light">
        
        Apply for App Development
      </Link>
        </Col>

     

        </Row>
        </Jumbotron>
        </Container>
  );
};

export default ProfileActions;
