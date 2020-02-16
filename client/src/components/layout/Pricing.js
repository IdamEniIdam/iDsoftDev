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
  <h1 style={{ textAlign: 'center', color: 'green' }}>TRAINING RATES</h1>
    <p style={{ textAlign: 'center', color: "white"}}>
    If you have any question about the training rates below kindly call us on
    +2347038335277
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
              <li><p><i>&#8358;</i>110,000 - for weekend class</p></li>
              <li><p><i>&#8358;</i>90,000 - if paying once</p></li>
              <li><p><i>&#8358;</i>60,000 - for corpers</p></li>
              <li><p><i>&#8358;</i>40,000 - for students & Interns</p></li>
              <li><p>FREE Wifi</p></li>
              <li><p>Chess classes</p></li>
              <li><p>Digital Marketing mini-course</p></li>
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
              <li><p><i>&#8358;</i>160,000 - for weekend class</p></li>
              <li><p><i>&#8358;</i>140,000 - if paying once</p></li>
              <li><p><i>&#8358;</i>100,000 - for corpers</p></li>
              <li><p><i>&#8358;</i>60,000 - for students & Interns</p></li>
              <li><p>FREE Wifi</p></li>
              <li><p>Chess classes</p></li>
              <li><p>Digital Marketing mini-course</p></li>
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
              <li><p><i>&#8358;</i>130,000 - for weekend class</p></li>
              <li><p><i>&#8358;</i>110,000 - if paying once</p></li>
              <li><p><i>&#8358;</i>80,000 - for corpers</p></li>
              <li><p><i>&#8358;</i>60,000 - for students & Interns</p></li>
              <li><p>FREE Wifi</p></li>
              <li><p>Chess classes</p></li>
              <li><p>Digital Marketing mini-course</p></li>
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