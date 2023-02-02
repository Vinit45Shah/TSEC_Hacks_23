const express = require("express");
const medicines = require("../models/medicine.model");
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')


router.post("/postmed", 
fetchUser,
    [
        // body("desc", "Enter a valid description of 5 length atleast").isLength({min:5}),
        // body("tags", "Enter atleast 1 tag").isLength({min :1})
    ],
    async(req, res)=>{
        let success = false
    try{
        const {commonname, quantity, expiry, scientificname, manufacturer, time} = req.body
        // console.log(req.body);
        const medicine = new medicines({
            commonname,
            quantity,
            expiry,
            scientificname,
            manufacturer,
            addedby: req.user.id,
            time
        })

        const newCreatedMed = await medicine.save()
        success = true
        console.log(newCreatedMed);
        res.json({success});
    }catch(err){
        console.log(err);
        res.status(500).send("Some error occured")
    }
})

module.exports = router;