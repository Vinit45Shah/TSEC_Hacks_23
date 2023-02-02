const express = require("express");
const doctors = require("../models/doctor.model");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


router.post('/registerdoctor', 
[
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
],
async(req, res)=>{
  let success = false;
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.status(400).json({success, errors : errors.array()})
  }
    try{
      let doctor = await doctors.findOne({email : req.body.email});

      if(doctor){
        res.status(400).json({success, error:"Email ID already used"})
      }

      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt)

      doctor = await doctors.create({
        name : req.body.name,
        email : req.body.email,
        password : secPass,
        address : req.body.address,
        number : req.body.number
  
      })
      const data = {
        doctor: {
          id:doctor.id
        }
      }

      const authToken = jwt.sign(data, "hetvi");

      success = true
      res.json({success, authToken})
    }catch(err){
      console.log(err);
      res.json({status : 'error', error : err})
    }
  })

module.exports = router;