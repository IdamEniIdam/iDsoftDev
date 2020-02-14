import React, { Component } from 'react';
import { Row,  Accordion, Button, Card } from 'react-bootstrap';


class  Expressjs extends Component {

    render() {
      return (
          <div>

       <Accordion>
        <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Web Applications
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Row>
          Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
      </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Performance
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <Row>
          Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
          </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> 
     
        </div>
    );
  }
}


export default Expressjs;