var jwt = require("jsonwebtoken");
const JWT_SECRET = "hetvi";

const fetchNgo = (req, res, next) => {
  const token = req.header("auth-token");
  console.log(token);
  if (!token) {
    res.status(401).send({ error: "Error occured" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.ngo = data.ngo;
    console.log(req.ngo);
    next();
  } catch (error) {
    res.status(401).send({ error: "Error occured" });
  }
};

module.exports = fetchNgo;
