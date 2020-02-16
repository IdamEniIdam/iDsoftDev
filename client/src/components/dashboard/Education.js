import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';
import { Container,Row, Col } from 'react-bootstrap';

const bg = require('../layout/images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  borderRadius: '10px'
}

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <Row key={edu._id} style={{color: 'white', textAlign: "center"}}>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>School</span><br/> {edu.school}</Col>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Degree</span><br/> {edu.degree}</Col>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Years</span><br/> 
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </Col>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Option</span><br/> 
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </Col>
      </Row>
    ));
    return (
      <div style={divStyle}>
        <h4 style={{textAlign: 'center', color: 'white', backgroundColor: '#00aaff', borderRadius: '10px'}}>Education</h4>
        <Container>
        {education}
        </Container>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
