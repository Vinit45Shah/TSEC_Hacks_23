var jwt = require("jsonwebtoken");
const JWT_SECRET = "hetvi";

const fetchDoc = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Error occured" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.doctor = data.doctor;
    next();
  } catch (error) {
    res.status(401).send({ error: "Error occured" });
  }
};

module.exports = fetchDoc;
