const router = require("express").Router();
const models = require("../database/models");

router.post("/bookappointment", (req, res) => {
  const newApointment = models.Appointment({
    status: "pending",
    date: req.body.date,
    time: req.body.time,
    discription: req.body.discription,
    doctorId: req.body.doctorId,
    patientId: req.body.patientId,
  });
  newApointment
    .save()
    .then(() => {
      return res.status(201).send("Appointment booked successfully!");
    })
    .catch((err) => res.send(err));
});

module.exports = router;