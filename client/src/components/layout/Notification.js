import 'react-notifications/lib/notifications.css';

import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE
  } from "../../actions/types";
  
  const initialState = {
    profile: null,
    profiles: null,
    loading: false
  };


class Notification extends React.Component {
  createNotification = (state = initialState, action) => {
    return () => {
      switch (action.type) {
        case PROFILE_LOADING:
          NotificationManager.info('Info message');
          return {
            ...state,
            loading: true
          };
        //   break;
        case GET_PROFILE:
          NotificationManager.success('Success message', 'Title here');
          return {
            ...state,
            profile: action.payload,
            loading: false
          };
        //   break;
        case GET_PROFILES:
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          return {
            ...state,
            profiles: action.payload,
            loading: false
          };
        //   break;
        case CLEAR_CURRENT_PROFILE:
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          return {
            ...state,
            profile: null
          };
        //   break;
        default:
            return state;
      }
    };
  };
 
  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>
 
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Notification;