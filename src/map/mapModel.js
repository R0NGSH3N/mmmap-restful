var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var mapSchema = new Schema({
	'name' : String,
	'userName' : String,
	'userId' : String,
	'nodes' : Array,
	'connectors' : Array,
	'lastUpdateDate' : Date
});

module.exports = mongoose.model('map', mapSchema);
