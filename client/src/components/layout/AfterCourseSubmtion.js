import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";




class RegSuccessful extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();   
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/registrationsuccessful");
      setTimeout(() => {
        this.onLogoutClick.bind(this);
        var a = this.props.logoutUser();
        var b = this.props.clearCurrentProfile(); 
        if(a && b){
          this.props.history.push("/login");
        }
      },5000)
    }
   
  }
  render() {
 


    return (
        <div>
            <Container>
<Jumbotron>

        <Row style={{textAlign: 'center'}}>
      
        <Col sm  style={{backgroundColor: ' #ccffff', borderRadius: '100px',textAlign: 'center'}}>

          <h3 style={{textAlign: 'center'}}>Registration successful</h3>
          <p>
            Your application have been recieved<br/>
            please avoid multiple submission!
            We'll get back to your shortly.......
          </p>
          <div>
         
          </div>
          </Col>

          </Row>
          </Jumbotron>
          </Container>
        </div>
    );
  }
}


RegSuccessful.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  RegSuccessful
);




