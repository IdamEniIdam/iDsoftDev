const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateAppInput(data) {
  let errors = {};

  data.fName = !isEmpty(data.fName) ? data.fName : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.trainingType = !isEmpty(data.trainingType) ? data.trainingType : "";
  data.trainingScheduleType = !isEmpty(data.trainingScheduleType) ? data.trainingScheduleType : "";
  data.accommodation = !isEmpty(data.accommodation) ? data.accommodation : "";
  data.arrangeAccommodation = !isEmpty(data.arrangeAccommodation) ? data.arrangeAccommodation : "";
  data.occupation = !isEmpty(data.occupation) ? data.occupation : "";
  data. hearAboutUs = !isEmpty(data. hearAboutUs) ? data. hearAboutUs : "";


if (Validator.isEmpty(data.fName)) {
 errors.fName = "Your fullName field is required";
}

if (Validator.isEmpty(data.phone)) {
 errors.phone = "Phone field is required";
}

if (Validator.isEmpty(data.email)) {
 errors.email = "Email field is required";
}


if (Validator.isEmpty(data.trainingType)) {
 errors.trainingType = "training Type field is required";
}

if (Validator.isEmpty(data.trainingScheduleType)) {
 errors.trainingScheduleType = "Training Schedule Type field is required";
}

if (Validator.isEmpty(data.accommodation)) {
 errors.accommodation = "Accommodation  field is required";
}


if (Validator.isEmpty(data.arrangeAccommodation)) {
 errors.arrangeAccommodation = "Accommodation arrangement field is required";
}

if (Validator.isEmpty(data.occupation)) {
 errors.occupation = "Occupation field is required";
}

if (Validator.isEmpty(data.hearAboutUs)) {
 errors.hearAboutUs = "This field is required";
}

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
