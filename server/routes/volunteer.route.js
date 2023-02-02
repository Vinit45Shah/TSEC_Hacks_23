const express = require("express");
const volunteers = require("../models/volunteer.model");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

router.post(
  "/registervolunteer",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let volunteer = await volunteers.findOne({ email: req.body.email });

      if (volunteer) {
        res.status(400).json({ success, error: "Email ID already used" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      volunteer = await volunteers.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        address: req.body.address,
        number: req.body.number,
      });
      const data = {
        volunteer: {
          id: volunteer.id,
        },
      };

      const authToken = jwt.sign(data, "hetvi");

      success = true;
      res.json({ success, authToken });
    } catch (err) {
      console.log(err);
      res.json({ status: "error", error: err });
    }
  }
);

router.post(
  "/loginvolunteer",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let volunteer = await volunteers.findOne({ email: req.body.email });

      if (!volunteer) {
        res.status(400).json({ success, error: "Email ID does not exist" });
      } else {
        const checkPass = bcrypt.compareSync(
          req.body.password,
          volunteer.password
        );
        if (checkPass) {
          const data = {
            volunteer: {
              id: volunteer.id,
            },
          };
          const authToken = jwt.sign(data, "hetvi");
          success = true;
          res.json({ success, authToken });
        }
      }
    } catch (err) {
      console.log(err);
      res.json({ status: "error", error: err });
    }
  }
);

module.exports = router;
