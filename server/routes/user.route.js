const express = require("express");
const users = require("../models/user.model");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const medicines = require("../models/medicine.model");

router.post(
  "/registeruser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let user = await users.findOne({ email: req.body.email });

      if (user) {
        res.status(400).json({ success, error: "Email ID already used" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await users.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        address: req.body.address,
        number: req.body.number,
      });
      const data = {
        user: {
          id: user.id,
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
  "/loginuser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let user = await users.findOne({ email: req.body.email });

      if (!user) {
        res.status(400).json({ success, error: "Email ID does not exist" });
      } else {
        const checkPass = bcrypt.compareSync(req.body.password, user.password);
        if (checkPass) {
          const data = {
            user: {
              id: user.id,
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

router.get("/fetchUserById", async (req, res) => {
  try {
    let data = await users.findOne({ _id: req.headers.id }).lean();
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: error });
  }
});

router.get("/fetchAllMedicinesUser", fetchUser, async (req, res) => {
  try {
    let meds = await medicines.find({
      ownedby: { $exists: true },
      sendto: { $exists: false },
    });
    res.json({ meds });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: error });
  }
});

router.get("/getMedicineUser", fetchUser, async (req, res) => {
  try {
    let medicine = await medicines.findOneAndUpdate(
      { _id: req.body.id },
      {
        sendto: req.user.id,
      }
    );

    let user = await users.findOneAndUpdate(
      { _id: req.user.id },
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

router.get("/getRewardPoints", fetchUser, async (req, res) => {
  try {
    let user = await users.findOne({ _id: req.user.id }).lean();
    res.json({ points: user.points });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: error });
  }
});

router.post("/claimreward", fetchUser, async (req, res) => {
  try {
    let user = await users.findOne({ _id: req.user.id });
    console.log(user);
    let decr = user.points - req.body.points;
    console.log(decr);
    let user2 = await users.findOneAndUpdate(
      { _id: req.user.id },
      { points: decr }
    );
    console.log(user2);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: error });
  }
});

module.exports = router;
