const jwt = require('jsonwebtoken')

const secret = 'FACTURANDODEBEPIZZA'

function generateAccessToken (username) {
  return jwt.sign(username, secret, { expiresIn: '3600s' })
}

function authenticateToken (req, res, next) {
  const token = req.cookies.token

  if (token == null) {
    res.status(500).send({ error: 'No autorizado' })
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      res.status(500).send({ error: 'No autorizado' })
    }
    req.user = user
    next()
  })
}

function decodeToken (req, res, next) {
  const token = req.cookies.token || req.body.token

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      res.status(500).send({ error: 'Ta mal flaco' })
    }
    res.status(200).send({ user })
  })
}

module.exports = {
  generateAccessToken,
  authenticateToken,
  decodeToken
}
