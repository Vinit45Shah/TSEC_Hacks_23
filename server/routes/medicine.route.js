const express = require("express");
const medicines = require("../models/medicine.model");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const users = require("../models/user.model");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, req.user.id + "-" + Date.now() + ".jpg");
  },
});

var upload = multer({ storage: storage });

router.post(
  "/postmed",
  fetchUser,
  upload.single("image"),
  [
    // body("desc", "Enter a valid description of 5 length atleast").isLength({min:5}),
    // body("tags", "Enter atleast 1 tag").isLength({min :1})
  ],
  async (req, res) => {
    let success = false;
    try {
      const user = await users.findById(req.user.id);
      console.log(req.file);
      const {
        commonname,
        quantity,
        expiry,
        scientificname,
        manufacturer,
        time,
      } = req.body;
      // console.log(req.body);
      const medicine = new medicines({
        commonname,
        quantity,
        expiry,
        scientificname,
        manufacturer,
        addedby: req.user.id,
        time,
        image: {
          data: req.file.filename,
          contentType: "image/jpg",
        },
      });
      const increase = user.points + quantity * 10;
      await users.findByIdAndUpdate(req.user.id, { points: increase });

      const newCreatedMed = await medicine.save();
      success = true;
      console.log(newCreatedMed);
      res.json({ success });
    } catch (err) {
      console.log(err);
      res.status(500).send("Some error occured");
    }
  }
);

router.get("/getMedsById", async (req, res) => {
  try {
    let med = await medicines.findOne({ _id: req.headers.id });
    res.json({ med });
  } catch (err) {
    console.log(err);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
