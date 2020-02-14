import React, { Component } from 'react';
import Moment from 'react-moment';


class ProfileCreds extends Component {
  render() {
    const { appCoures, webCoures, experience, education } = this.props;

    const appItems = appCoures.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.fName}</h4>
        <p>
        <strong>Date Applied: </strong>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> 
        </p>
        <p>
          <strong>phone:</strong> {exp.phone}
        </p>
        <p>
          {exp.location === '' ? null : (
            <span>
              <strong>Email: </strong> {exp.email}
            </span>
          )}
        </p>
        <p>
          {exp.trainingType === '' ? null : (
            <span>
              <strong>Training Type: </strong> {exp.trainingType}
            </span>
          )}
        </p>
      </li>
    ));

    const webItems = webCoures.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.fName}</h4>
        <p>
        <strong>Date Applied: </strong>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment>
        </p>
        <p>
          <strong>Phone:</strong> {edu.phone}
        </p>
        <p>
          <strong>Email:</strong> {edu.email}
        </p>
        <p>
          {edu.trainingType === '' ? null : (
            <span>
              <strong>Training Type: </strong> {edu.trainingType}
            </span>
          )}
        </p>
      </li>
    ));

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        <p>
          {exp.location === '' ? null : (
            <span>
              <strong>Location: </strong> {exp.location}
            </span>
          )}
        </p>
        <p>
          {exp.description === '' ? null : (
            <span>
              <strong>Description: </strong> {exp.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Field Of Study:</strong> {edu.fieldofstudy}
        </p>
        <p>
          {edu.description === '' ? null : (
            <span>
              <strong>Description: </strong> {edu.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
          <div className="col-md-6">
          <h3 className="text-center text-info">Work Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Work Experience Listed</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No Education Listed</p>
          )}
        </div>
        <div className="col-md-6" >
          <h3 className="text-center text-info">Mobile App Development Course</h3>
          {appItems.length > 0 ? (

            <ul className="list-group">{appItems}</ul>
          ) : (
            <p className="text-center">No Mobile App Development Course Listed...</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Web Development Course</h3>
          {webItems.length > 0 ? (
            <ul className="list-group">{webItems}</ul>
          ) : (
            <p className="text-center">No Web Development Course Listed...</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
