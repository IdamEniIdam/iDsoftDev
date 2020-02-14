import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPageDeHub from './components/layout/LandingPageDeHub';
import RegisterDeHub from "./components/auth/RegisterDeHub";
import LoginDeHub from "./components/auth/LoginDeHub";
import DashboardDeHub from "./components/dashboard/DashboardDeHub";
import CreateProfileDeHub from "./components/create-profile/CreateProfileDeHub";
import EditProfileDeHub from "./components/edit-profile/EditProfileDeHub";
import WebDevReg from "./components/add-credentials/WebDevReg";
import Contact from './components/layout/Contact';
import Courses from "./components/layout/Courses";
import Pricing from "./components/layout/Pricing";
import Training from './components/layout/Training';
import AppDevReg from "./components/add-credentials/AppDevReg";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import NotFound from "./components/not-found/NotFound";
import RegSuccessful from "./components/layout/AfterCourseSubmtion";
import Html from "./components/layout/coures/Html";
import Css from "./components/layout/coures/Css";
import Bootstrap from "./components/layout/coures/Bootstrap";
import PayStack from "./components/layout/PayStack";
import "./App.css";
import JavaScript from "./components/layout/coures/JavaScript";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={LandingPageDeHub} />
            <div className="container">
              <Route exact path="/register" component={RegisterDeHub} />
              <Route exact path="/login" component={LoginDeHub} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/training" component={Training} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/payment" component={PayStack} />
              <Route exact path="/html" component={Html} />
              <Route exact path="/css" component={Css} />
              <Route exact path="/bootstrap" component={Bootstrap} />
              <Route exact path="/javascript" component={JavaScript} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={DashboardDeHub} />
              </Switch>
               <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfileDeHub}
                />
              </Switch>
           
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfileDeHub}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-web-course"
                  component={WebDevReg}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-app-course"
                  component={AppDevReg}
                />
              </Switch>

              <Switch>
                <PrivateRoute
                  exact 
                  path="/registrationsuccessful"
                  component={RegSuccessful}
                />
              </Switch>

              <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>


              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
