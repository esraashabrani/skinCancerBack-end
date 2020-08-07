const router = require("express").Router();
const db = require("../database/models");
router.post("/doctor/update", (req, res) => {
  console.log(req.body);
  console.log("hi");
  //   var profileImage = req.body.profileImage;
  var phoneNumber = req.body.param.doctor.phoneNumber;
  var clinicLocation = req.body.param.doctor.clinicLocation;
  var workingFrom = req.body.param.doctor.workingFrom;
  var workingTo = req.body.param.doctor.workingTo;
  db.Doctor.update(
    { _id: req.body.param.id },
    {
      $set: {
        phoneNumber: phoneNumber,
        clinicLocation: clinicLocation,
        workingFrom: workingFrom,
        workingTo: workingTo,
      },
    },
    { multi: true }
  )
    .then(() => res.json("updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
