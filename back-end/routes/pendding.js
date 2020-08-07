const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const models = require("../database/models");
router.post("/getPending", (req, res) => {
  //models.Appointment.find({ doctorId : JSON.parse(req.body.params.value.id)}, function (err, appointment) {
  models.Appointment.find(
    {
      $and: [
        { doctorId: JSON.parse(req.body.params.value.id) },
        { status: "pending" },
      ],
    },
    function (err, appointment) {
      console.log("Hi from the server");
      console.log(req.body);
      console.log(appointment);
      res.json(appointment);
    }
  );
});

router.post("/getPatients", function (req, res) {
  models.Patient.findOne({ _id: req.body.params.value.pId }, function (
    err,
    patient
  ) {
    console.log("Hi from the server222");
    console.log(req.body.params.value.pId);
    console.log(patient);
    res.json(patient);
  });
});

router.post("/approve", function (req, res) {
  models.Appointment.findOneAndUpdate(
    { _id: req.body.id },
    { status: "approved" },
    function (err, appointment) {
      console.log(appointment);
    }
  );
});

router.post("/rejected", function (req, res) {
  models.Appointment.findOneAndUpdate(
    { _id: req.body.id },
    { status: "rejected" },
    function (err, appointment) {
      console.log(appointment);
    }
  );
});

module.exports = router;
