var jwt = require("jsonwebtoken");
const JWT_SECRET = "hetvi";

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Error occured" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    console.log(data.user.id);
    next();
  } catch (error) {
    res.status(401).send({ error: "Error occured" });
  }
};

module.exports = fetchUser;
