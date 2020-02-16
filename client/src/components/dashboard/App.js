import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteApp } from '../../actions/profileActions';
import {Container,Row, Col } from 'react-bootstrap';



const bg = require('../layout/images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  borderRadius: '10px'
}

class App extends Component {
  onDeleteClick(id) {
    this.props.deleteApp(id);
  }

  render() {
    const appCoures = this.props.appCoures.map(edu => (
      <Row key={edu._id} style={{color: 'white', textAlign: "center"}}>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Phone</span><br/>{edu.phone}</Col>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Email</span><br/>{edu.email}</Col>
        <Col md><span style={{color: '#00aaff', fontSize: '20px'}}>Date Applied</span><br/>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment>
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
        <h4 style={{textAlign: 'center', color: 'white', backgroundColor: '#00aaff', borderRadius: '10px'}}>Mobile App Development Courses</h4>
        <Container>
        {appCoures}
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  deleteApp: PropTypes.func.isRequired
};

export default connect(null, { deleteApp })(App);
