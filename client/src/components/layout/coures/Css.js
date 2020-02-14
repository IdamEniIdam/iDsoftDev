import React, { Component } from 'react';
import { Row, Col, Accordion, Button, Card } from 'react-bootstrap';


class  Css extends Component {

    render() {
      return (
          <div>
        <Accordion>
        <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      CSS Tutorial
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <Row>
              <Col md>
              CSS Introduction<br />
          CSS Syntax and Selectors<br />
          CSS How To...<br />
          CSS Colors<br />
          CSS Backgrounds<br />
          CSS Borders<br />
          CSS Margins<br />
          CSS Padding<br />
          CSS Height and Width Dimensions<br />
          CSS Text<br />
          CSS Fonts<br />
          CSS Links<br />
          CSS Lists<br />
          CSS Tables<br />
          CSS Box Model<br />
          CSS Outline<br />
              </Col>

              <Col md>
              CSS Layout - The display Property<br />
          CSS Layout - width and max-width<br />
          CSS Layout - The position Property<br />
          CSS Layout - float and clear<br />
          CSS Layout - inline-block<br />
          CSS Layout - Horizontal Align<br />
          CSS Combinators<br />
          CSS Navigation Bar<br />
          CSS Dropdowns<br />
          CSS Image Gallery<br />
          CSS Image Opacity / Transparency<br />
          CSS Image Sprites<br />
          CSS Attribute Selectors<br />
          CSS Forms<br />
          CSS Counters<br />
              </Col>
      </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      CSS3
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <Row>
          CSS3 Introduction<br />
          CSS3 Rounded Corners<br />
          CSS3 Border Images<br />
          CSS3 Backgrounds<br />
          CSS3 Colors<br />
          CSS3 Gradients<br />
          CSS3 Shadow Effects<br />
          CSS3 Text<br />
          CSS3 Web Fonts<br />
          CSS3 3D Transforms<br />
          CSS3 Transitions<br />
          CSS3 Animations<br />
          CSS Images<br />
          CSS Buttons<br />
          CSS Pagination Examples<br />
          CSS3 Multiple Columns<br />
          CSS3 User Interface<br />
          CSS3 Box Sizing<br />
          CSS3 Flexible Box<br />
          </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
     
        </div>
    );
  }
}


export default Css;