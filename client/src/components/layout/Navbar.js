import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import idlog from './images/idlog.jpeg';
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";


class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed" style={{color: 'green'}}>
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard" style={{color: 'green'}}>
            Dashboard
          </Link>
        </li>
        <li className="nav-item" >
          <a
            href="/"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            <p style={{color: 'green'}}>Logout</p>
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
           <li className="nav-item">
          <Link className="nav-link" to="/login">
          <p style={{color: 'green'}}>
          Login
              </p>
            
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
          <p style={{color: 'green'}}>
          Register
          </p>
            
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses">
          <p style={{color: 'green'}}>
          Courses
          </p>
         
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/training">
          <p style={{color: 'green'}}>
          Training
          </p>
       
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">
          <p style={{color: 'green'}}>
          Pricing
          </p>
         
          </Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            <p style={{color: 'green'}}>
            Contact
            </p>
          
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm mb-4" >
        <div className="container">
          <Link style={{ textAlign: 'center'}} className="navbar-brand" to="/">
          <img
          className="rounded-circle"
            style={{width: '130px', resizeMode: 'contain'}}
                            src={idlog}
                           alt={"id log"}
                        />
                        <br />
            <p style={{color: 'green'}}>iDSoftDev</p>
          </Link>
          <button
          style={{backgroundColor: 'white', color: 'green', height: '50px'}}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <p style={{fontSize: '25px', textAlign: 'center', marginTop: '7px'}}>menu</p>
            
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
          {isAuthenticated ? authLinks : guestLinks}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  <p style={{color: 'green'}}>Registered Users</p>
                 
                </Link>
              </li>
           
            </ul>
            {/* {isAuthenticated ? authLinks : guestLinks} */}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
