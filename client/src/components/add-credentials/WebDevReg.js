import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addWebCoures } from '../../actions/profileActions';
import {Jumbotron, Container,  Row, Col} from 'react-bootstrap';

const bg = require('../layout/images/unnamed.gif');
const fg = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}
class WebDevReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      phone: '',
       email: '', 
       trainingType: '', 
       trainingScheduleType: '', 
       accommodation: '', 
       arrangeAccommodation: '',
        occupation: '',
         hearAboutUs: '',
         errors: {}
         
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      fName: this.state.fName,
      phone: this.state.phone,
       email: this.state.email, 
       trainingType: this.state.trainingType, 
       trainingScheduleType: this.state.trainingScheduleType, 
       accommodation: this.state.accommodation, 
       arrangeAccommodation: this.state.arrangeAccommodation,
        occupation: this.state.occupation,
         hearAboutUs: this.state.hearAboutUs
    };

    this.props.addWebCoures(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  

  render() {
    const { errors } = this.state;

    return (
    <div>
    <Link to="/dashboard" className="btn btn-light">
       Go Back
     </Link>
    <Jumbotron  fluid style={fg}>
<Container>
<h1 style={{ textAlign: 'center', color: 'green' }}>FULL STACK JAVASCRIPT DEVELOPER</h1>
<hr />


<Row>
  <Col sm style={{color: 'white'}} >
  <p style={{ textAlign: 'center', color: 'white'}}>
OUR MAJOR MISSION:
</p>
{/* <p>BY THE END OF THIS TRAINING YOU'LL BE ABLE TO;</p> */}

<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Build at least 5 real projects</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>You'll master at least one relevant server side scripting language.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>You'll be good at at least one database technologies.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Ability to design and develop technical plans.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Excellent understanding of design principles and experience in their application.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Logical and structured way of interpreting information.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Extensive problem solving and critical thinking abilities.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Analytical skills to evaluate software and make improvements.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Understand the best practices for web development.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Obtain professional certificate.</p>
{/* <p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Use the game of Chess to solve any problem.</p> */}

      
    </Col>

    <Col sm style={{color: 'white'}}>
  

<p style={{ textAlign: 'center', color: 'white'}}>
OUR MAJOR MISSION:
</p>

{/* <p style={{color: 'white'}}>BY THE END OF THIS TRAINING YOU'LL BE ABLE TO;</p> */}

<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Highly-knowledgeable in HTML and CSS.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Style web pages with css & bootstrap.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Expert level proficiency with javaScript.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Build Databases with MongoDB DBMS.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Write computer programes with Node js programming language.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Knowledgeable about mobile responsive design</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Use github to manage your code versioning.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Design and developed efficient and maintainable software accprding to the business objectives</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Worked closely in the planning, design, and delivery of software products and services.</p>
<p><i className="fa fa-check-square-o" style={{padding: '5px'}}> </i>Host website in Heroku.</p>


    
    </Col>


    </Row>
    <br />
    <br />
<p style={{ textAlign: 'center', color: 'white' }}>YOUR FIRST STEP!</p>
<h1 style={{ textAlign: 'center', color: 'green' }}>REGISTER NOW</h1>
<hr />

<div>
<form onSubmit={this.onSubmit}>

<Row>
  <Col sm  style={{color: 'white'}}>
    fullName<br/>
  <TextFieldGroup 
  placeholder="Full Name"
  name="fName" 
  type="text" 
  value={this.state.fName} 
  onChange={this.onChange}
  error={errors.fName}
  />
  </Col>

  <Col sm  style={{color: 'white'}}>
    Email<br/>
  <TextFieldGroup  
  placeholder="Email Address" 
  type="email" 
  name="email"
  value={this.state.email} 
  onChange={this.onChange}
  error={errors.email}
   />
  </Col>

  <Col sm  style={{color: 'white'}}>
    Phone Number
  <TextFieldGroup 
  placeholder="Mobile Number" 
  type="text" 
  name="phone"
  value={this.state.phone} 
  onChange={this.onChange}
  error={errors.phone}
  />
  </Col>
  </Row>
  <br/>

  <Row>
  <Col sm  style={{color: 'white'}}>
  <div>
    <strong>What training will you like to take? </strong>
<ul>
<li >
<label  >
<input
  type="radio"
  value="Web Design & Development"
  name="trainingType"
  checked={this.state.trainingType === "Web Design & Development"}
  onChange={this.onChange}
  error={errors.trainingType}
/>
<span>Web Design & Development</span>
</label>
</li>

<li>
<label>
<input

  type="radio"
  value="Software Development"
  name="trainingType"
  checked={this.state.trainingType === "Software Development"}
  onChange={this.onChange}
  error={errors.trainingType}
/>
<span>Software Development</span>
</label>
</li>
</ul>
    </div>
    </Col>

    <Col sm  style={{color: 'white'}}>
    <div>
    <strong>Training Schedule Type </strong>
<ul>
<li>
<label>
<input
  type="radio"
  value="Weekend Classes"
  name="trainingScheduleType"
  checked={this.state.trainingScheduleType === "Weekend Classes"}
  onChange={this.onChange}
  error={errors.trainingScheduleType}
/>
<span>Weekend Classes</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  value="Weekday Classes"
  name="trainingScheduleType"
  checked={this.state.trainingScheduleType === "Weekday Classes"}
  onChange={this.onChange}
  error={errors.trainingScheduleType}
/>
<span>Weekday Classes</span>
</label>
</li>
</ul>
    </div>
    </Col>

    <Col sm  style={{color: 'white'}}>
    <div>
    <strong> Do you have accommodation in Abuja?</strong>
<ul>
<li>
<label>
<input
  type="radio"
  value="Yes"
  name="accommodation"
  checked={this.state.accommodation === "Yes"}
  onChange={this.onChange}
  error={errors.accommodation}
/>
<span>Yes</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  value="No"
  name="accommodation"
  checked={this.state.accommodation === "No"}
  onChange={this.onChange}
  error={errors.accommodation}
/>
<span>No</span>
</label>
</li>
</ul>
    </div>

    </Col>

  </Row>

  <Row>
  <Col sm  style={{color: 'white'}}>
    <div>
    <strong>Would you like us to help arrange accommodation for you?</strong>
<ul>
<li>
<label>
<input
  type="radio"
  value="Yes"
  name="arrangeAccommodation"
  checked={this.state.arrangeAccommodation === "Yes"}
  onChange={this.onChange}
  error={errors.arrangeAccommodation}
/>
<span>Yes</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  value="No"
  name="arrangeAccommodation"
  checked={this.state.arrangeAccommodation === "No"}
  onChange={this.onChange}
  error={errors.arrangeAccommodation}
/>
<span>No</span>
</label>
</li>
</ul>
    </div>
</Col>

<Col sm  style={{color: 'white'}}>
    <div>
      
    <strong>Your Occupation</strong>
<ul>
<li>
<label>
<input
  type="radio"
  value="Student"
  name="occupation"
  checked={this.state.occupation === "Student"}
  onChange={this.onChange}
  error={errors.occupation}
/>
<span>Student</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  value="Corp Member"
  name="occupation"
  checked={this.state.occupation === "Corp Member"}
  onChange={this.onChange}
  error={errors.occupation}
/>
<span>Corp Member</span>
</label>
</li>
<li>
<label>
<input
  type="radio"
  value="Employee"
  name="occupation"
  checked={this.state.occupation === "Employee"}
  onChange={this.onChange}
  error={errors.occupation}
/>
<span>Employee</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  value="Self-employed"
  name="occupation"
  checked={this.state.occupation === "Self-employed"}
  onChange={this.onChange}
  error={errors.occupation}
/>
<span>Self-employed</span>
</label>
</li>

<li>
<label>
<input
  type="radio"
  value="Employer"
  name="occupation"
  checked={this.state.occupation === "Employer"}
  onChange={this.onChange}
  error={errors.occupation}
/>
<span>Employer</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  value="IT Professional"
  name="occupation"
  checked={this.state.occupation === "IT Professional"}
  onChange={this.onChange}
  error={errors.occupation}
/>
<span>IT Professional</span>
</label>
</li>

<li>
<label>
<input
  type="radio"
  value="Freelancer"
  name="occupation"
  checked={this.state.occupation === "Freelancer"}
  onChange={this.onChange}
  error={errors.occupation}
/>
<span>Freelancer</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  value="Applicant"
  name="occupation"
  checked={this.state.occupation === "Applicant"}
  onChange={this.onChange}
  error={errors.occupation}
/>
<span>Applicant</span>
</label>
</li>
</ul>
    </div>
</Col>

<Col sm  style={{color: 'white'}}>
    <div>
    <strong>How did you hear about us?</strong>
<ul>
<li>
<label>
<input
  type="radio"
  value="Facebook"
  name="hearAboutUs"
  checked={this.state.hearAboutUs === "Facebook"}
  onChange={this.onChange}
  error={errors.hearAboutUs}
/>
<span>Facebook</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  value="WhatsApp"
  name="hearAboutUs"
  checked={this.state.hearAboutUs === "WhatsApp"}
  onChange={this.onChange}
  error={errors.hearAboutUs}
/>
<span>WhatsApp</span>
</label>
</li>
<li>
<label>
<input
  type="radio"
  value="Google"
  name="hearAboutUs"
  checked={this.state.hearAboutUs === "Google"}
  onChange={this.onChange}
  error={errors.hearAboutUs}
/>
<span>Google</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  value="A friend"
  name="hearAboutUs"
  checked={this.state.hearAboutUs === "A friend"}
  onChange={this.onChange}
  error={errors.hearAboutUs}
/>
<span>A friend</span>
</label>
</li>
<li>
<label>
<input
  type="radio"
  value="Email"
  name="hearAboutUs"
  checked={this.state.hearAboutUs === "Email"}
  onChange={this.onChange}
  error={errors.hearAboutUs}
/>
<span>Email</span>
</label>
</li>


<li>
<label>
<input
  type="radio"
  name="hearAboutUs"
  value="Other"
  checked={this.state.hearAboutUs === "Other"}
  onChange={this.onChange}
  error={errors.hearAboutUs}
/>
<span>Other</span>
</label>
</li>
</ul>
    </div>
    </Col>

  </Row>
   

<input type="submit" value="Submit Your Application" />
</form>
</div>
</Container>
</Jumbotron>
  </div>
    );
  }
}

WebDevReg.propTypes = {
  addWebCoures: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile, 
  errors: state.errors
});

export default connect(mapStateToProps, { addWebCoures })(
  withRouter(WebDevReg)
);
