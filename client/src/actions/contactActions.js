import axios from "axios";

import {
  // ADD_CONTACT,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_CONTACT,
  CONTACT_LOADING,
} from "./types";


// Add contact
export const addContact = (contactData, history) => dispatch => {
  axios
    .post("/api/contact", contactData)
    .then(res => history.push("/", alert('Your message have been received. We will get back to your shortly, Thank you!')))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Contact
export const getContact = () => dispatch => {
  dispatch(setContactLoading());
  axios
    .get("/api/contact")
    .then(res =>
      dispatch({
        type: GET_CONTACT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CONTACT,
        payload: null
      })
    );
};

// Set loading state
export const setContactLoading = () => {
  return {
    type: CONTACT_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};