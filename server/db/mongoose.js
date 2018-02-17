var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true}).then(
  () => {

  }, err => {
    console.log(err.message)
  }
)

module.exports = {mongoose};
