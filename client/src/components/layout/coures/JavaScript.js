import React, { Component } from 'react';
import { Row, Col, Accordion, Button, Card } from 'react-bootstrap';


class  JavaScript extends Component {

    render() {
      return (
          <div>
     <Accordion>
        <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      JS Tutorial
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Row>
              <Col>
              JavaScript Introduction<br />
          JavaScript Where To...<br />
          JavaScript Output<br />
          JavaScript Syntax<br />
          JavaScript Statements<br />
          JavaScript Comments<br />
          JavaScript Variables<br />
          JavaScript Operators<br />
          JavaScript Arithmetic<br />
          JavaScript Assignment<br />
          JavaScript Data Types<br />
          JavaScript Functions<br />
          JavaScript Objects<br />
          JavaScript Scope<br />
          JavaScript Events<br />
          JavaScript Strings<br />
              </Col>

              <Col>
              JavaScript String Methods<br />
          JavaScript Numbers<br />
          JavaScript Number Methods<br />
          JavaScript Math Object<br />
          JavaScript Dates<br />
          JavaScript Date Formats<br />
          JavaScript Date Methods<br />
          JavaScript Arrays<br />
          JavaScript Array Methods<br />
          JavaScript Booleans<br />
          JavaScript If...Else Statements<br />
          JavaScript Switch Statement<br />
          JavaScript For Loop<br />
          JavaScript While Loop<br />
          JavaScript Break and Continue<br />
          JavaScript Type Conversion<br />
          JavaScript Errors - Throw and Try to Catch<br />
              </Col>
          
      </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      JS Forms
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <Row>
          JavaScript Forms<br />
          JavaScript Validation API<br />
          </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> 




    <Accordion>
        <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      JS Objects
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Row>
          JavaScript Objects<br />
          JavaScript Object Properties<br />
          JavaScript Object Prototypes<br />
      </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      JS Functions
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <Row>
          JavaScript Function Definitions<br />
          JavaScript Function Invocation<br />
          JavaScript Closures<br />
          </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> 
     
     </div>
    );
  }
}


export default JavaScript;