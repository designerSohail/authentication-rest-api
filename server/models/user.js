const validator = require('validator')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const _ = require('lodash')
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    unique: true,
    trim: true,
    validate: {
      validator: value => validator.isEmail(value),
      message: '{VALUE} is not a valid email.'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      require: true
    },
    token: {
      type: String,
      require: true
    }
  }]
})

UserSchema.methods.toJSON = function() {
  return _.pick(this.toObject(), ['_id', 'email'])
}

UserSchema.methods.generateAuthTokens = function() {
  var user = this
  var access = 'auth'
  var token = jwt.sign({
    _id: user._id.toHexString(),
    access
  }, 'todo-api').toString()
  user.tokens.push({access, token})
  return user.save().then(() => {
    return token
  })
}
var User = mongoose.model('User', UserSchema)

module.exports = {User}