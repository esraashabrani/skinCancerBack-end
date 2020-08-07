// const app = require("../../server.js");
// app.listen(8888);
// const supertest = require("supertest");
// const request = supertest(app);
// const mongoose = require("mongoose");
// const databaseName = "signBase";
// const dataB = require("../../database/models.js");

// beforeAll(async () => {
//   const url = `mongodb://127.0.0.1/${databaseName}`;
//   await mongoose.connect(url, { useNewUrlParser: true });
// });

// jest.useFakeTimers();
// it("Should save user to database", async (done) => {
//   const res = await request.post("/api/user/patient/signup").send({
//     name: "smunawer",
//     email: "smunawer@gmail.com",
//     password: "HELLooo!!!",
//   });

//   const son = await dataB.Patient.findOne({ email: "smunawer@gmail.com" });
//   console.log(son);
//   console.log(res.body);
//   jest.useFakeTimers();
//   expect(res.body.name).toHaveProperty("email");
//   expect(res.body.email).toBe("smunawer@gmail.com");
//   done();
// });

// afterAll(async () => {
//   await dataB.Patient.deleteMany();
// });
