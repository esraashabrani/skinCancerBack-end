const router = require("express").Router();
const mongoose = require("mongoose");
const models = require("../database/models");
router.post("/patient/appoints", function (req, res) {
  models.Appointment.find({ patientId: req.body.params.value.id }, function (
    err,
    appoints
  ) {
    console.log(req.body);
    console.log(appoints);
    res.json(appoints);
  });
});
module.exports = router;
