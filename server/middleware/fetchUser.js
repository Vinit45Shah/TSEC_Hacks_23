var jwt = require("jsonwebtoken");
const JWT_SECRET = "hetvi";

const fetchUser = (req, res, next) => {
    const token = req.header("auth-token");
    console.log(token);
  if (!token) {
    res.status(401).send({ error: "Error occured" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Error occured" });
  }
};

module.exports = fetchUser;