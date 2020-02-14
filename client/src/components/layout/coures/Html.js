import React, { Component } from 'react';
import { Row, Col, Accordion, Button, Card } from 'react-bootstrap';





class Html extends Component {

  render() {
    return (
        <div>

<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      HTML Tutorial
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Row>
              <Col>
      HTML Introduction<br />
      HTML Editors<br />
      HTML Basic Examples<br />
      HTML Elements<br />
      HTML Elements<br />
      HTML Headings<br />
      HTML Paragraphs<br />        
      HTML Styles<br />
      HTML Text Formatting Elements<br />
      HTML Quotation and Citation Elements<br />
      </Col>

      <Col>
      HTML Computer Code Elements<br />
      HTML Comments<br />
      HTML Colors<br />
      HTML Styles - CSS<br />
      HTML Links<br />
      HTML Images<br />
      HTML Tables<br />
      HTML Lists<br />
      HTML Block and Inline Elements<br />
      HTML Classes<br />
      HTML Layouts<br />
      HTML Responsive Web Design<br />
      </Col>
  
              

      </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      HTML Forms
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <Row>
          HTML Forms<br />
          HTML Form Elements<br />
          HTML Input Types<br />
          HTML Input Attributes<br />
          </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>




<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      HTML5
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Row>
          HTML5 Introduction<br />
          HTML5 Browser Support<br />
          HTML5 New Elements<br />
          HTML5 Semantic Elements<br />
          HTML5 Migration<br />
          HTML(5) Style Guide and Coding Conventions<br />
      </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      HTML Graphics
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <Row>
          HTML5 Canvas<br />
          HTML5 SVG<br />
          </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>




<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      HTML Media
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Row>
          HTML Multimedia<br />
          HTML5 Video<br />
          HTML5 Audio<br />
          HTML Plug-ins<br />
          HTML YouTube Videos<br />
      </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      HTML APIs 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <Row>
          HTML5 Geolocation<br />
          HTML5 Drag and Drop<br />
          HTML5 Local Storage<br />
          </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
     
        </div>
    );
  }
}


export default Html;

