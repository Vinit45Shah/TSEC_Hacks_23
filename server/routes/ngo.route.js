const express = require("express");
const ngos = require("../models/ngo.model");
const medicines = require("../models/medicine.model");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const fetchNgo = require("../middleware/fetchNgo");
var jwt = require("jsonwebtoken");

router.post(
  "/registerngo",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let ngo = await ngos.findOne({ email: req.body.email });

      if (ngo) {
        res.status(400).json({ success, error: "Email ID already used" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      ngo = await ngos.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        address: req.body.address,
        number: req.body.number,
      });
      const data = {
        ngo: {
          id: ngo.id,
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
  "/loginngo",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let ngo = await ngos.findOne({ email: req.body.email });

      if (!ngo) {
        res.status(400).json({ success, error: "Email ID does not exist" });
      } else {
        const checkPass = bcrypt.compareSync(req.body.password, ngo.password);
        if (checkPass) {
          const data = {
            ngo: {
              id: ngo.id,
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

router.get("/getMedicineNgo", fetchNgo, async (req, res) => {
  try {
    let medicine = await medicines.findOneAndUpdate(
      { _id: req.body.id },
      {
        ownedby: req.ngo.id,
      }
    );

    let ngo = await ngos.findOneAndUpdate(
      { _id: req.ngo.id },
      {
        $push: { medicine: req.body.id },
      }
    );

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
});

router.get("/getMedicinesForNgo", fetchNgo, async (req, res) => {
  try {
    let meds = await medicines.find({
      ownedby: req.ngo.id,
      sendto: { $exists: false },
    });
    res.json({ meds });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
});

router.get("/fetchNgoById", async (req, res) => {
  try {
    let data = await ngos.findOne({ _id: req.headers.id }).lean();
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: error });
  }
});

module.exports = router;
