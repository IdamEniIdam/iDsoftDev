import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Jumbotron} from 'react-bootstrap';
import html from './images/html.png';
import css from './images/css.png';
import bootstrap from './images/bootstrap.png';
import javascript from './images/javascript.png';
import express from './images/express.png';
import reactjs from './images/reactjs.png';
import reactnative from './images/reactnative.png';
import expo from './images/expo.png';
import nodejs from './images/nodejs.png';
import git from './images/git.png';
import heroku from './images/heroku.png';
import mongodb from './images/mongodb.png';

const bg = require('../layout/images/unnamed.gif')
const divCoures = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

class Courses extends Component {
  render() {
    return (
        <div> 
            <Jumbotron fluid style={divCoures}>
  <Container>
  <h1 style={{ textAlign: 'center', color: 'green' }}>COURSES</h1>
    <p style={{ textAlign: 'center', color: 'white'}}>
    These are the list of programming language you are going to learn.
    </p>
  </Container>
</Jumbotron>
           


    <Row style={{textAlign: 'center'}}>
    <Col sm style={{backgroundColor: ' #ccffff', borderRadius: '20px'}}>
        <div>
    <Link to="/html">
     
            <Card style={{backgroundColor: ' #ccffff', elevation: 0,borderWidth: 0}}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={html} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>HTML</Card.Title>
               
                </Card.Body>
            </Card>
            </Link>
        </div>
        </Col> 

        <Col sm style={{backgroundColor: '#ffb3b3', borderRadius: '20px'}}>
        <div>
        <Link to="/css">      
      
        <Card style={{ backgroundColor: '#ffb3b3', borderWidth: 0 }}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={css} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>CSS</Card.Title>
                </Card.Body>
            </Card>
      </Link>
        </div>
        </Col>

        <Col sm style={{backgroundColor:' #b3d1ff', borderRadius: '20px'}}> 
        <div>
        <Link to="/bootstrap">  
        
         <Card style={{backgroundColor: ' #b3d1ff', borderWidth: 0 }}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={bootstrap} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>BOOTSTRAP </Card.Title>
                </Card.Body>
            </Card>
            </Link>
            </div>
            </Col>
            </Row>
<br/><br/>


            <Row style={{textAlign: 'center'}}>
    <Col sm style={{backgroundColor: ' #ccffff', borderRadius: '20px'}}>
        <div>
    <Link to="/javascript"> 
            <Card style={{backgroundColor: ' #ccffff', elevation: 0,borderWidth: 0}}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={javascript} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>JAVASCRIPT</Card.Title>
               
                </Card.Body>
            </Card>
        </Link>
        </div>
        </Col> 

        <Col sm style={{backgroundColor: '#ffb3b3', borderRadius: '20px'}}>
        <div>
        <Link to="/expresjs">       
      
        <Card style={{ backgroundColor: '#ffb3b3', borderWidth: 0 }}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={express} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>EXPRESS JS</Card.Title>
                </Card.Body>
            </Card>
      
        </Link>
        </div>
        </Col>

        <Col sm style={{backgroundColor:' #b3d1ff', borderRadius: '20px'}}> 
        <div>

        <Link to="/dashboard">
        {/* <Link to="/reactjs"> */}
        
         <Card style={{backgroundColor: ' #b3d1ff', borderWidth: 0 }}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={reactjs} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>RAECT JS</Card.Title>
                </Card.Body>
            </Card>
            </Link>
            </div>
            </Col>
            </Row>


            <br/><br/>


            <Row style={{textAlign: 'center'}}>
    <Col sm style={{backgroundColor: ' #ccffff', borderRadius: '20px'}}>
        <div>

        <Link to="/dashboard">

    {/* <Link to="/reactnative"> */}
     
            <Card style={{backgroundColor: ' #ccffff', elevation: 0,borderWidth: 0}}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={reactnative} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>REACT NATIVE</Card.Title>
               
                </Card.Body>
            </Card>
        
        </Link>
        </div>
        </Col> 

        <Col sm style={{backgroundColor: '#ffb3b3', borderRadius: '20px'}}>
        <div>
        {/* <Link to="/expoio">        */}
        <Link to="/dashboard">

        <Card style={{ backgroundColor: '#ffb3b3', borderWidth: 0 }}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={expo} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>EXPO.IO</Card.Title>
                </Card.Body>
            </Card>
      
        </Link>
        </div>
        </Col>

        <Col sm style={{backgroundColor:' #b3d1ff', borderRadius: '20px'}}> 
        <div>
        <Link to="/dashboard">

        {/* <Link to="/nodejs"> */}
        
         <Card style={{backgroundColor: ' #b3d1ff', borderWidth: 0 }}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={nodejs} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>NODE JS</Card.Title>
                </Card.Body>
            </Card>
            </Link>
            </div>
            </Col>
            </Row>


            <br/><br/>


            <Row style={{textAlign: 'center'}}>
    <Col sm style={{backgroundColor: ' #ccffff', borderRadius: '20px'}}>
        <div>
        <Link to="/dashboard">

    {/* <Link to="/githubgitlab"> */}
     
            <Card style={{backgroundColor: ' #ccffff', elevation: 0,borderWidth: 0}}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={git} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>GIT & GITHUB</Card.Title>
               
                </Card.Body>
            </Card>
        
        </Link>
        </div>
        </Col> 

        <Col sm style={{backgroundColor: '#ffb3b3', borderRadius: '20px'}}>
        <div>
        {/* <Link to="/mongodb">        */}
        <Link to="/dashboard">

        <Card style={{ backgroundColor: '#ffb3b3', borderWidth: 0 }}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={mongodb} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>MONGODB & MLAB</Card.Title>
                </Card.Body>
            </Card>
      
        </Link>
        </div>
        </Col>

        <Col sm style={{backgroundColor:' #b3d1ff', borderRadius: '20px'}}> 
        <div>
        {/* <Link to="/heroku"> */}
        <Link to="/dashboard">

         <Card style={{backgroundColor: ' #b3d1ff', borderWidth: 0 }}>
                <br></br>
                <Card.Img style={{height: '50px', width: '50px', alignSelf: 'center'}} variant="top" src={heroku} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>HEROKU</Card.Title>
                </Card.Body>
            </Card>
            </Link>
            </div>
            </Col>
            </Row>
        </div>
    );
  }
}

export default Courses;