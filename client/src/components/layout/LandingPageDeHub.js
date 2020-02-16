import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import unnamed from './images/unnamed.gif';
import { Carousel } from 'react-bootstrap';
import btl from './images/btl.gif';
import showcase from './images/showcase.jpg';
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import Pricing from './Pricing';
import { Row, Col, Container,Jumbotron} from 'react-bootstrap';

const bg = require('../layout/images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}



class LandingPageDeHub extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            isFlippedTwo: false,
            isFlipped3: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleClickTwo(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedTwo: !prevState.isFlippedTwo }));
    }

    handleClick3(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped3: !prevState.isFlipped3 }));
    }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
    <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={showcase}
                            alt={"First slide"}
                        />
                        <Carousel.Caption>
                            <div>
                                <h6 style={{ color: 'green', fontFamily: 'bold' }}>DISCOVER YOUR PATHWAY</h6>
                                <p  style={{ color: 'orange'}}>Learn in-demand skills, build awesome projects, and connect with a community. Explore our iDsoftDev programs and find your path to success.</p>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={showcase}
                            alt="second slide"
                        />

                        <Carousel.Caption>
                            <div >
                                <h6 style={{ color: 'green', fontFamily: 'bold' }}>DESIGNED FOR TRUE BEGINNERS</h6>
                                <p style={{ color: 'orange'}}>We believe anyone can learn to code, no matter your background or experience level. Our teachers will walk you through each step of your learning, from understanding fundamental concepts.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={showcase}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div>
                                <h6 style={{ color: 'green', fontFamily: 'bold' }}>SMARTER WAY TO LEARN</h6>
                                <p style={{ color: 'orange'}}>Guided learning paths, technical and soft skills, build a portfolio and so much to learn.
</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div>
    <Jumbotron fluid style={{backgroundColor: 'white'}} >
<Container fluid style={{backgroundColor: 'white'}}>
                <h1 style={{ textAlign: 'center', color: 'green' }}>MORE THAN LEARNING</h1>
                <h5 style={{ textAlign: 'center', color: 'green' }}>A WORLD CLASS LEARNING EXPERIENCE FOR THOSE WHO EXPECT MORE!</h5>

                <Container fluid>
                    <Row style={{ textAlign: 'center' }}>

                        <Col  md={4} style={divStyle}>
                            <ReactCardFlip flipSpeedBackToFront={2} flipSpeedFrontToBack={2} isFlipped={this.state.isFlipped} flipDirection="vertical">
                                <button onClick={this.handleClick} variant="primary">
                                    <Card  style={{ borderWidth: 0, backgroundColor: 'white'}} >
                                        <Card.Img variant="top" src={btl} />
                                        <Card.Body>
                                            <Card.Title >FREE WIFI...</Card.Title>
                                            <Card.Text >
                                                Yes seriously
   </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </button>
 
                                <button onClick={this.handleClick} variant="primary">
                                    <Card style={{borderWidth: 0 }}>
                                        <Card.Img variant="top" src={unnamed} />
                                        <Card.Body>
                                            <Card.Title>1.</Card.Title>
                                            <Card.Text>
                                                Wifi is to us what Oxygen is to Air, we'll be unkind to deny you this digital oxygen. Join us and make our world a better place. Tech roles the world.
   </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </button>
                            </ReactCardFlip>
                        </Col>



                        <Col md={4} style={divStyle}>
                            <ReactCardFlip flipSpeedBackToFront={2} flipSpeedFrontToBack={2} isFlipped={this.state.isFlippedTwo} flipDirection="horizontal">
                                <button onClick={this.handleClickTwo} variant="primary">
                                    <Card style={{ borderWidth: 0 ,backgroundColor: 'white'}}>
                                        <Card.Img variant="top" src={btl} />
                                        <Card.Body>
                                            <Card.Title>FREE COFFEE...</Card.Title>
                                            <Card.Text>
                                                Yea, really
   </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </button>

                                <button onClick={this.handleClickTwo} variant="primary">
                                    <Card style={{ borderWidth: 0 }}>
                                        <Card.Img variant="top" src={unnamed} />
                                        <Card.Body>
                                            <Card.Title>2.</Card.Title>
                                            <Card.Text>
                                                Coffee makes you smarter and energizes your brain, that's why we love it and that's why you'll be getting free coffee from our training.
   </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </button>
                            </ReactCardFlip>
                        </Col>
                        <Col md={4} style={divStyle}>
                            <ReactCardFlip flipSpeedBackToFront={2} flipSpeedFrontToBack={2} isFlipped={this.state.isFlipped3} flipDirection="vertical">
                                <button onClick={this.handleClick3} variant="primary">
                                    <Card style={{ borderWidth: 0, elevation: 0, backgroundColor: 'white'}}>
                                        <Card.Img variant="top" src={btl} />
                                        <Card.Body>
                                            <Card.Title>FREE HOSTING...</Card.Title>
                                            <Card.Text>
                                                Yes, all for you
   </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </button>

                                <button onClick={this.handleClick3} variant="primary">
                                    <Card style={{ borderWidth: 0 }}>
                                        <Card.Img variant="top" src={unnamed} />
                                        <Card.Body>
                                            <Card.Title>3.</Card.Title>
                                            <Card.Text>
                                                We'll give you 1 year free hosting. Use it to host your own portfolio website to impress potential employers or clients at the end of your training.
   </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </button>
                            </ReactCardFlip>
                        </Col>


                    </Row>
                </Container>
                </Container>
                </Jumbotron>
                </div>
                <br />
                <Pricing />
            </div>
    );
  }
}

LandingPageDeHub.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(LandingPageDeHub);
