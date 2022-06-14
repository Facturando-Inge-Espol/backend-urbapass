const jwt = require("jsonwebtoken");
const { token } = require("morgan");

let secret = "FACTURANDODEBEPIZZA";

function generateAccessToken(username) {
  return jwt.sign(username, secret, { expiresIn: "3600s" });
}

function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  if (token == null) {
    res.status(500).send({ error: "No autorizado" });
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      res.status(500).send({ error: "No autorizado" });
    }
    req.user = user;
    next();
  });
}

// function verifyLogin(req, res, next) {
//   const token = req.cookies.token;

//   jwt.verify(token, secret, (err, user) => {
//     if (err) return next();
//     res.redirect("/admin");
//   });
// }

module.exports = {
  generateAccessToken,
  authenticateToken,
};
