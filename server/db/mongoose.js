var mongoose = require('mongoose');

// Let mongoose use Promise
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
}