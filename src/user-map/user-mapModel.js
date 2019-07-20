var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var user-mapSchema = new Schema({
	'userId' : String,
	'userName' : String,
	'mapIds' : Array
});

module.exports = mongoose.model('user-map', user-mapSchema);
