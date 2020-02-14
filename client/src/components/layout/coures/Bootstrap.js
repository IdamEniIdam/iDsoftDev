import React, { Component } from 'react';
import { Row, Col, Accordion, Button, Card } from 'react-bootstrap';


class  Bootstrap extends Component {

    render() {
      return (
          <div>


<Accordion>
        <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Bootstrap Tutorial
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Row>
            <Col>

            Bootstrap Get Started<br />
          Bootstrap Grids<br />
          Bootstrap Text/Typography<br />
          Bootstrap Tables<br />
          Bootstrap Images<br />
          Bootstrap Jumbotron and Page Header<br />
          Bootstrap Wells<br />
          Bootstrap Alerts<br />
          Bootstrap Buttons<br />
          Bootstrap Button Groups<br />
          Bootstrap Glyphicons<br />
          Bootstrap Badges and Labels<br />
         
            
            </Col>

            <Col>
          Bootstrap Progress Bars<br />
          Bootstrap Pagination<br />
          Bootstrap Pager<br />
          Bootstrap List Groups<br />
          Bootstrap Panels<br />
          Bootstrap Dropdowns<br />
          Bootstrap Collapse<br />
          Bootstrap Tabs and Pills<br />
          Bootstrap Navigation Bar<br />
          Bootstrap Forms<br />
          Bootstrap Form Inputs<br />
          Bootstrap Carousel Plugin<br />
          Bootstrap Modal Plugin<br />
            
            </Col>
     
      
      </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Bootstrap Grids
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <Row>
          Bootstrap Grid System<br />
          Bootstrap Grid - Stacked-to-horizontal<br />
          Bootstrap Grid - Small Devices<br />
          Bootstrap Grid - Medium Devices<br />
          Bootstrap Grid - Large Devices<br />
          Bootstrap Grid Examples<br />
          </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> 








{/* <Accordion>
        <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Bootstrap Tutorial
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Row>
            sadfg
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
          HTML Forms
          </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>  */}
     
        </div>
    );
  }
}


export default Bootstrap;