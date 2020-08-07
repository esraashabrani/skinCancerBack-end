const express = require("express");
app = express();
const router = express.Router();
const models = require("../database/models");
router.post("/patientReport", function (req, res) {
  models.Patient.findById(JSON.parse(req.body.params.value.id), function (err, report) {
    console.log(req.body);
    console.log(report);
    res.json(report);
  });
});
module.exports = router;