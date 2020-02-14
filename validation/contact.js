const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateContactInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.message = !isEmpty(data.message) ? data.message : "";


if (Validator.isEmpty(data.name)) {
 errors.name = "Your name field is required";
}

if (Validator.isEmpty(data.phone)) {
 errors.phone = "Phone field is required";
}

if (Validator.isEmpty(data.email)) {
 errors.email = "Email field is required";
}

if (Validator.isEmpty(data.message)) {
    errors.message = "Messsage field is required";
   }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
