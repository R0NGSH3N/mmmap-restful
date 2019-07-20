var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usermapSchema = new Schema({
	'userId' : String,
	'userName' : String,
	'mapIds' : Array
});

module.exports = mongoose.model('usermap', usermapSchema);
