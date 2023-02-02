require("dotenv").config();
require("./db.js");
const express = require("express");
const userRouter = require("./routes/user.route");
const ngoRouter = require("./routes/ngo.route");
const volRouter = require("./routes/volunteer.route");
const doctorRouter = require("./routes/doctor.route");
const medicineRouter = require("./routes/medicine.route");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(ngoRouter);
app.use(volRouter);
app.use(doctorRouter);
app.use(medicineRouter);

// app.post("/login", async (req, res) => {
//   try {
//     const student = await Student.findByCredentials(
//       req.body.email,
//       req.body.password
//     );
//     if (student) {
//       const studentToken = await student.generateAuthToken();
//       res.status(200).send({ studentUser: student, studentToken });
//     } else {
//       const company = await Company.findByCredentials(
//         req.body.email,
//         req.body.password
//       );
//       if (company) {
//         const companyToken = await company.generateAuthToken();
//         res.status(200).send({ companyUser: company, companyToken });
//       } else {
//         res.status(200).send({ message: "No user found." });
//       }
//     }
//   } catch (error) {
//     res.status(400).send({
//       error,
//       message: "Error while logging in.",
//     });
//   }
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
