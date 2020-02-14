const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Validation
const validateContactInput = require("../../validation/contact");


// Contact model
const Contact = require("../../models/Contact");


// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  (req, res) => {
    const { errors, isValid } = validateContactInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newContact = new Contact({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message
    });

    newContact.save().then(contact => res.json(contact));
  }
);



module.exports = router;
