import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteWeb } from '../../actions/profileActions';
import {Container,Row, Col } from 'react-bootstrap';



const bg = require('../layout/images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  borderRadius: '10px'
}

class Web extends Component {
  onDeleteClick(id) {
    this.props.deleteWeb(id);
  }

  render() {
    const webCoures = this.props.webCoures.map(exp => (
      <Row key={exp._id} style={{color: 'white', textAlign: "center"}}>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Phone</span><br/>{exp.phone}</Col>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Email</span><br/>{exp.email}</Col>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Date Applied</span><br/>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment>
        </Col>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Option</span><br/>
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
        <h4 style={{textAlign: 'center', color: 'white', backgroundColor: '#00aaff', borderRadius: '10px'}}>Web Development Courses</h4>
        <Container>
          {webCoures}
        </Container>
      </div>
    );
  }
}

Web.propTypes = {
  deleteWeb: PropTypes.func.isRequired
};

export default connect(null, { deleteWeb })(Web);
