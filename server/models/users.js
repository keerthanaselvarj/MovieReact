var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userDetails= new Schema({
	username: String,
	password: String
});
module.exports = mongoose.model('UserDetails',userDetails);