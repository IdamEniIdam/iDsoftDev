import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import {Jumbotron, Container,Row, Col } from 'react-bootstrap';
import Web from './Web';
import App from './App';
import Experience from './Experience';
import Education from './Education';


const bg = require('../layout/images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

const fisrtdiv = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}
  
class DashboardDeHub extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <Container style={{textAlign: 'center'}}>
              <Jumbotron style={fisrtdiv}>
  <Row>
    <Col sm>
              Welcome <h3 style={{color: 'white'}}>{user.name}</h3>
            </Col>
            </Row>
            </Jumbotron>
            </Container>
            <ProfileActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <Web webCoures={profile.webCoures} />
            <App appCoures={profile.appCoures} />
            <div style={{ marginBottom: '60px' }} />
            <Row style={{textAlign: 'center'}}>
              <Col sm>
              <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
              </Col>
            </Row>
           
           
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
        <div>
        <Jumbotron fluid style={divStyle}>
        <Container>
        <h1 style={{ textAlign: 'center', color: 'green' }}>Welcome {user.name}</h1>
          <p style={{ textAlign: 'center', color: 'white'}}>
          Please click the button below to set up you course registration profile.<br/><br/>
      
                  <Link to="/create-profile" className="btn btn-lg" style={{backgroundColor: 'green', color: 'white'}}>
                     start registration process
                 </Link>
          </p>
        </Container>
      </Jumbotron>
                </div>
        );
      }
    }

    return (
    <div>
    <br/>
    <div className="container">
        <div style={{justifyContent: 'center'}}>
          {dashboardContent}
        </div>
        
    </div>
  </div>
    );
  }
}

DashboardDeHub.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
    DashboardDeHub
);
