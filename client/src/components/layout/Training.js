import React, { Component } from 'react';
import chess from './images/chess.jpg';
import Card from 'react-bootstrap/Card';
import Courses from './Courses';
import './training.css';
import { Row, Col, Container,Jumbotron } from 'react-bootstrap';

const bg = require('../layout/images/unnamed.gif')
const divTraining = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

class Training extends Component {
  render() {
    return (
        <div>
            <Jumbotron fluid style={divTraining}>
  <Container>
  <h1 style={{ textAlign: 'center', color: 'green' }}>TRAININGS</h1>
    <p style={{ textAlign: 'center', color: 'white'}}>
    Check out different course we have for you.
    </p>
  </Container>
</Jumbotron>
           

    <Row style={{textAlign: 'center'}}>
    <Col sm style={{ backgroundColor: ' #ccffff', borderRadius: '20px'}}>
      <a href="/dashboard">
            <Card style={{ backgroundColor: ' #ccffff', borderWidth: 0}}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={chess} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>WEB DEVELOPMENT (JAVASCRIPT)</Card.Title>
                    <Card.Text>
                    Learn the lastest software development skills like Nodejs, Reactjs & Redux
</Card.Text>
                </Card.Body>
            </Card>
       
      </a>
      </Col>
        
      <Col sm style={{ backgroundColor: '#ffb3b3', borderRadius: '20px'}}>
      <a href="/dashboard">
       
        <Card style={{ backgroundColor: '#ffb3b3', borderWidth: 0 }}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={chess} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>MOBILE APP DEVELOPMENT (ANDROID & iOS)</Card.Title>
                    <Card.Text>
Learn how to build real android and iOS apps, by the end of the first section you'll be running your own app on your phone   </Card.Text>
                </Card.Body> 
            </Card>
        
        </a>
        </Col>

        <Col sm style={{ backgroundColor: '#b3d1ff', borderRadius: '20px'}}>
        <a href="/dashboard">
        
        <Card style={{ backgroundColor: '#b3d1ff' , borderWidth: 0}}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={chess} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>SOFTWARE DEVELOPMENT</Card.Title>
                    <Card.Text>
                        Learn to build dynamic websites, robust web applications with mobile apps in a modern and best way.
</Card.Text>
                </Card.Body>
            </Card>
            </a>
            </Col>
    </Row>


<br />
         

<Jumbotron fluid style={divTraining}>
  <Container>
  <h1 style={{ textAlign: 'center', color: 'green' }}>MORE TO GAIN</h1>
    {/* <p style={{ textAlign: 'center', color: 'green'}}>
    Get more than you pay for <br></br>
    All these are part of your bonuses
    </p> */}
    <div className="Dd" style={{color: 'white'}}>
    <p><i className="fa fa-money"> </i><i className="Digital"></i>Chess Classes</p>
    <p><i className="fa fa-money"> </i><i className="Digital"></i>Social media marketing</p>
    <p><i className="fa fa-money"> </i><i className="Digital"></i> Digital Assets</p>
    <p><i className="fa fa-money"> </i><i className="Digital"></i>Certificates</p>
    </div>
  </Container>
</Jumbotron>

<br/>
<Courses />

        </div>
    );
  }
}

export default Training;