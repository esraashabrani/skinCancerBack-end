const express = require("express");
const router = express.Router();
const models = require("../database/models");
router.post("/getAppointments", (req, res) => {
     models.Appointment.find( { $and: [ {doctorId : JSON.parse(req.body.params.value.id)}, { status : "approved" }  ] }, function (err, appointment) { 
        // console.log("Hi from the server");
        // console.log(req.body);
        // console.log(appointment);
        res.json(appointment);
         });
    });
router.post("/getPatientsName", function (req, res) {
    models.Patient.findOne({_id : req.body.params.value.pId}, function (err, patient) {
        //console.log("Hi from the server222"); 
        // console.log(req.body.params.value.pId);
        // console.log(patient);
        res.json(patient);
      });
    });
    module.exports = router;
    