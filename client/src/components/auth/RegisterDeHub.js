import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import {Jumbotron, Container,Row, Col } from 'react-bootstrap';


const bg = require('../layout/images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

class RegisterDeHub extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
    <div>
    <Jumbotron fluid style={divStyle}>
<Container>
<h1 style={{ textAlign: 'center', color: 'green' }}>Sign up for your registeration</h1>
<p style={{ textAlign: 'center', color: 'white'}}>
Please sign up for your account set up.
</p>


<Col md={{ span: 4, offset: 4 }}>
<Row >
<div >
<form noValidate onSubmit={this.onSubmit} style={{textAlign: 'center'}}>

   
    <TextFieldGroup
      name="name"
      placeholder="Name" 
      type="text" 
      value={this.state.name} 
      onChange={this.onChange}
      error={errors.name}
       />

<TextFieldGroup
name="email"
placeholder="email" 
type="text" 
value={this.state.email} 
onChange={this.onChange} 
error={errors.email}
info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
/>
  
    <TextFieldGroup
    placeholder="password" 
    type="password" 
    name="password"
    value={this.state.password} 
    onChange={this.onChange}
    error={errors.password} 
    />
  
    <TextFieldGroup
    placeholder="confirm password"
    name="password2" 
    type="password" 
    value={this.state.password2}
     onChange={this.onChange} 
     error={errors.password2} 
     />
 
  <input type="submit" value="Sign up" />
  <p style={{color: 'white'}}>Already Have an Account! <a href="/login">login</a></p> 
</form>
</div>
</Row>
</Col>

</Container>
</Jumbotron>
  </div>
    );
  }
}

RegisterDeHub.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(RegisterDeHub));
