import React, { Component } from "react";
import PropTypes from "prop-types";
import {Jumbotron, Container,Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
// import FacebookLogin from 'react-facebook-login';

// import GoogleLogin from 'react-google-login';
// import { Redirect } from "react-router-dom";



const bg = require('../layout/images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

class LoginDeHub extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  componentDidMount() {
    
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;



    // const responseFacebook = (response) => {
    //   alert('wjjjjjjjjjjjjjjjjjj');
    //   // this.props.history.push("/dashboard");
    
    //   if (!this.props.auth.isAuthenticated) {
    //     this.props.history.push("/dashboard");
    //   }else{
    //     console.log('please sign up')
    //   }
    //   // console.log('facebook response',response);
    // }

    // const responseGoogle = (response) => {

    //   console.log('google login id', response);
    // }


    return (
    <div>
    <Jumbotron fluid style={divStyle}>
<Container >

<h1 style={{ textAlign: 'center', color: 'green' }}>Login for your registeration</h1>
<p style={{ textAlign: 'center', color: 'white'}}>
Please login for your account set up.
</p>


<Col md={{ span: 4, offset: 4 }}>
<Row >
<div >
<form onSubmit={this.onSubmit}style={{textAlign: 'center'}}>


<TextFieldGroup
placeholder="Email Address"
name="email"
type="email"
value={this.state.email}
onChange={this.onChange}
error={errors.email}
/>
  

    <TextFieldGroup 
    placeholder="Password"
    name="password"
    type="password"
    value={this.state.password}
    onChange={this.onChange}
    error={errors.password}
    />

  <input type="submit" value="Login" />
  <p style={{color: 'white'}}>Don't Have an Account! <a href="/register">Sign up</a></p> 

</form>
</div>
</Row>
</Col>

{/* 
<div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId="199374094750643" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="739600500967-qlk8hde3i43n10u6mevvbbcjap5mom1j.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div> */}

</Container>
</Jumbotron>
  </div>
    );
  }
}

LoginDeHub.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser})(LoginDeHub);
