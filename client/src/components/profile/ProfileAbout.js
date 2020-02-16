import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import ScrollArea from 'react-scrollbar';

const bg = require('../layout/images/unnamed.gif')
const fg = {
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover'
}

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3" style={fg}>
            <h3 style={{color: 'white'}} className="text-center text-info">{firstName}'s Bio</h3>
            <div className="lead">
              {isEmpty(profile.bio) ? (
                <span style={{color: 'white'}}>{firstName} does not have a bio</span>
              ) : (
                <ScrollArea
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false}
                style={{maxHeight: '150px', borderRadius: '5px'}}
                >
                    <span style={{color: 'white', fontSize: '15px'}}>{profile.bio}</span>
                </ScrollArea>
                
              )}
            </div>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div style={{color: 'white'}} className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
