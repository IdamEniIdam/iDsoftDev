import {
    ADD_CONTACT,
    GET_CONTACT,
    CONTACT_LOADING
  } from "../actions/types";
  
  const initialState = {
    contact: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case CONTACT_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_CONTACT:
        return {
          ...state,
          contact: action.payload,
          loading: false
        };
      case ADD_CONTACT:
        return {
          ...state,
          contact: [action.payload, ...state.contact]
        };
      default:
        return state;
    }
  }
  