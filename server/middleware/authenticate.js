var {User} = require('./../models/user');
var authenticate = (req, res, next) => {
  var token = req.header('x-auth')
  User.findByToken(token).then((user) => {
    if (!user) {
      return Prmise.reject()
    }
    req.user = user
    req.token = token
    next()
  }).catch(e => {
    res.sendStatus(401).send('Authentication Error' + e)
  })
}
module.exports = {authenticate}
