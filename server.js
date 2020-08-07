const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongo = require("./back-end/database/index");
const db = require("./back-end/database/models");
const auth = require("./back-end/routes/auth");
const patientupdate = require("./back-end/routes/patientUpdate");
const login = require("./back-end/routes/login");

const doctors = require("./back-end/routes/doctor");
const docprf = require("./back-end/routes/doctorProfile");

const book = require("./back-end/routes/book");
const appoint = require("./back-end/routes/patientApmnt");
const reportPatient = require("./back-end/routes/patientReport");
const scheduleDoctor = require("./back-end/routes/doctorSchedule");

const pendding = require("./back-end/routes/pendding");
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("I am here");
  res.send("Welcome!");
});


app.use("/api/user/", doctors);
app.use("/api/user", auth);
app.use("/api/profile", patientupdate)
app.use("",login);
app.use("",book);
app.use("",reportPatient);
app.use("", scheduleDoctor);
app.use("", pendding);
app.use("", docprf);
app.use("",appoint);
// app.use("/api/profile", patientupdate)


app.listen(port, () => console.log(`Server started on port: ${port}`));
