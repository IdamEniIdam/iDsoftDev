import React, { Component } from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap';
// import 'font-awesome/css/font-awesome.min.css';
import  './Contact.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../actions/contactActions';
import {  withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
// https://fontawesome.com/v4.7.0/icons/
// https://react-bootstrap.github.io/components/modal/


const bg = require('./images/unnamed.gif')
const divStyle = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', phone: '', email: '', message: '', errors: {}};

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  

  handleSubmit(event) {
    event.preventDefault();

    const contactData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    };

    this.props.addContact(contactData, this.props.history);

    
  }

  render() {
    const { errors } = this.state;

    return (
        <div>
         <Jumbotron fluid style={divStyle}  >

         <Row style={{textAlign: 'center', color: 'white'}}>
       
        <Col sm>

  <h1 className="H1contact">Contact Us</h1>
    <p className="p1f">
    House 101. Behind KingsLand Hotel Jiwa Abuja.
    </p>

      <div style={{textAlign: 'center'}}>
      <p className="fa fa-phone">  +2347038335277</p>
      <br />
      <p className="fa fa-envelope">training@idsoftdev.herokuapp.com</p>
      </div>
      <div style={{textAlign: 'center'}}>
        <a className="Fb" alt="facebook" href="#ffff"><p className="fa fa-facebook-official"></p></a>
        <a className="Fb" alt="google" href="#ffff"><p className="fa fa-google"></p></a>
        <a className="Fb" alt="google" href="#ffff"><p className="fa fa-linkedin-square"></p></a>
        <a className="Fb" alt="instagram" href="#ffff"><p className="fa fa-instagram"></p></a>
        <a className="Fb" alt="twitter" href="#ffff"><p className="fa fa-twitter-square"></p></a>
      </div>
          </Col>
          <Col sm>
              
    <div >
    <form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
     
         
          <TextFieldGroup 
          placeholder="Name" 
          type="text"
          name="name"
           value={this.state.name} 
           onChange={this.onChange}
           error={errors.name}
            />
        
     <TextFieldGroup 
     name="phone"
     placeholder="Phone" 
     type="text" 
     value={this.state.phone} 
     onChange={this.onChange}
     error={errors.phone} 
     />

          <TextFieldGroup 
          placeholder="Email" 
          type="email"
          name="email"
           value={this.state.email} 
          onChange={this.onChange}
          error={errors.email}
          />

          <TextAreaFieldGroup 
          placeholder="Your message" 
           type="text" 
           name="message"
           value={this.state.message} 
           onChange={this.onChange}
           error={errors.message}
           />
       <br />
        <input type="submit" value="Send Message" />
      </form>
      </div>
          </Col>
          </Row>
          



</Jumbotron>
        </div>
    );
  }
}



Contact.propTypes = {
  addContact: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact, 
  errors: state.errors
});

export default connect(mapStateToProps, { addContact })(
  withRouter(Contact)
);
