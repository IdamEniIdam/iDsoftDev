import React, { Component } from 'react';
import Courses from './Courses';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';


const bg = require('../layout/images/unnamed.gif')
const divPrice = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}


class Pricing extends Component {
  render() {
    return (
        <div>
           
          <Courses /> 
          <br />
        <Jumbotron  fluid style={divPrice}>
  <Container>
  <h1 style={{ textAlign: 'center', color: 'green' }}>TRAINING TYPE</h1>
    <p style={{ textAlign: 'center', color: "white"}}>
    Call us on +2347038335277. We are always open to take your call.
    </p>
  </Container>
</Jumbotron>

        <Row style={{textAlign: 'center'}}>
      
        <Col sm  style={{backgroundColor: ' #ccffff', borderRadius: '20px'}}>
          <div>
          <a href="/dashboard">
          <p style={{fontFamily: 'bold', fontSize: '30px'}}> 
          WEBSITE DEVELOPMENT
          </p>
          <hr/>
          <div>
            <ul>
              <li><p><i>&#8358;</i>130,000 - WEEKEND CLASS</p></li>
              <li><p><i>&#8358;</i>110,000 - PAYING ONCE</p></li>
              <li><p><i>&#8358;</i>80,000 - CORPERS</p></li>
              <li><p><i>&#8358;</i>60,000 - STUDENTS & INTERNS</p></li>
              <li><p>Certificates on completion</p></li>
            </ul>
          </div>
          </a>
          </div>
           
          </Col>
         
      
         
          <Col sm style={{backgroundColor: '#ffb3b3',  borderRadius: '20px'}}>
          <div>
          <a href="/dashboard">
          <p  style={{fontFamily: 'bold', fontSize: '30px'}}>
          SOFTWARE DEVELOPMENT
            </p>
            <hr/> 
            <div>
            <ul>
              <li><p><i>&#8358;</i>180,000 - WEEKEND CLASS</p></li>
              <li><p><i>&#8358;</i>160,000 - PAYING ONCE</p></li>
              <li><p><i>&#8358;</i>120,000 - CORPERS</p></li>
              <li><p><i>&#8358;</i>80,000 - STUDENTS & INTERNS</p></li>
              <li><p>Certificates on completion</p></li>
            </ul>
          </div>
          </a>
          </div>
          
          </Col>
          
          
          <Col sm style={{backgroundColor: ' #b3d1ff', borderRadius: '20px'}}>
           <div>
           <a href="/dashboard">
           <p  style={{fontFamily: 'bold', fontSize: '30px'}}>
          ANDROID DEVELOPMENT
            </p>
            <hr/> 
            <div>
            <ul>
              <li><p><i>&#8358;</i>150,000 - WEEKEND CLASS</p></li>
              <li><p><i>&#8358;</i>130,000 - PAYING ONCE</p></li>
              <li><p><i>&#8358;</i>100,000 - CORPERS</p></li>
              <li><p><i>&#8358;</i>80,000 - STUDENTS & INTERNS</p></li>
              <li><p>Certificates on completion</p></li>
            </ul>
          </div>
          </a>
           </div>
          </Col>
          
          </Row>
                
        </div>
    );
  }
}

export default Pricing;