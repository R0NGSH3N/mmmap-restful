var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'userId' : Number,
	'userName' : String,
	'email' : String
});

module.exports = mongoose.model('user', userSchema);
