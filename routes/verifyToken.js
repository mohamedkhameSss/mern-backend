const jwt = require("jsonwebtoken");

const verfiyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid");
      req.user = user;
      next();
    });
  } else res.status(401).json("You Are Not Authenticated");
};
const verifyTokenAndAuthorization = (req, res, next) => {
  verfiyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else res.status(403).json("you are not allowed to");
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verfiyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else res.status(403).json("you are not allowed to");
  });
};

module.exports = {
  verfiyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
