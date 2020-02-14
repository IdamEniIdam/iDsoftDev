import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';
import { Container, Row, Col } from 'react-bootstrap';


const bg = require('../layout/images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <Row key={exp._id} className="show-grid"  style={{color: 'white', textAlign: "center"}}>
        <Col md> <span style={{color: 'green', fontSize: '20px'}}>Company</span><br/> {exp.company}</Col>

        <Col md> <span style={{color: 'green', fontSize: '20px'}}>Title</span> <br/> {exp.title}</Col>

        <Col md> <span style={{color: 'green', fontSize: '20px'}}>Years</span><br/>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            ' Now'
          ) : (
              <Moment forma Titlet="YYYY/MM/DD">{exp.to}</Moment>
            )}
        </Col>

        <Col md><span style={{color: 'green', fontSize: '20px'}}>Option</span> <br/>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </Col>
      </Row>
    ));


    return (
      <div style={divStyle}>
        <h4 style={{textAlign: 'center', color: 'white'}}>Experience Credentials</h4>
        <Container >
          {experience}
        </Container>

      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
