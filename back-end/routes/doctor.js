const express = require('express');
const router = express.Router();
const User = require('../database/models');
var bcrypt = require('bcryptjs');


router.get("/doctors",(req,res) => {
    User.Doctor.find({}).then(users =>{
        res.json(users);
    })
})
router.post("/doctor",(req,res) => {
    console.log(req.body)
    User.Doctor.findOne({_id: req.body.id}).then(user=>{
        console.log(user)
        res.json(user);
    })
})



//creat new doctor 
router.post('/doctor/signup', (req, res) =>{

    User.Doctor.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(422).send( "Email already exists" );
        }
    });

       // Hash password before saving in database
       bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          //add new user to the db
          const newUser = new User.Doctor({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            phoneNumber: req.body.phoneNumber,
            clinicLocation: req.body.clinicLocation,
            workingFrom: req.body.workingFrom,
            workingTo: req.body.workingTo,
            notes: req.body.notes,
            profileImage: req.body.profileImage || "https://bit.ly/3hxXixM"
          });

          newUser
            .save()
            .then(() =>{ return res.status(201).send("user created sucessfully");})
            .catch(err => res.send(err));

        });
      });
});


//login
router.post("/doctor/login", function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    console.log(password)
    User.Doctor.findOne({ email: email }).then((dr) => {
      console.log(dr)
      if (!dr) {
        return res.send("Email not found");
      }
      bcrypt.compare(password, dr.password, function (err, result) {
        
        if (err) {
          return res.send(err);
        }else if (result === true) {
     
          var doctor = {
            doctor: dr,
            result: result,
          };
          
          return res.send(doctor);
        }else if (result === false) {
        
          return res.send(result);
        }
      });
    });
  });
  
module.exports = router;