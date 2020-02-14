import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import idlog from './images/idlog.jpeg';
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";



const bg = require('../layout/images/unnamed.gif')
const divNav = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}


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
        {/* <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Post Feed
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
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
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
           <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses">
          Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/training">
          Training
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">
          Pricing
          </Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
          Contact
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm mb-4" style={divNav}>
        <div className="container">
          <Link style={{color: 'white', textAlign: 'center'}} className="navbar-brand" to="/">
          <img
          className="rounded-circle"
            style={{width: '130px'}}
                            src={idlog}
                           alt={"id log"}
                        />
                        <br />
            iDSoftDev
          </Link>
          <button
          style={{backgroundColor: 'pink', color: 'green', height: '50px'}}
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
                  Registered Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feed">
                  {" "}
                  Post Feed
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
