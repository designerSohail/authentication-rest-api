const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
var pass = '12345jkjjlj!#'
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(pass, salt, (err, hash) => {
    console.log(hash)
  })
})
// var data = {
//   id: 30
// }
// var token = jwt.sign(data, 'xyz')
// var decoded = jwt.verify(token, 'xyz')
// console.log(token)
// console.log(decoded)
// var message = 'Hello world'
// var hash = SHA256(message).toString()
// console.log(hash)
